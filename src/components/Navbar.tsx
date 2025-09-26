"use client";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, IconButton, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/donation", label: "Donation" },
  { href: "/register-ngo", label: "Register Your NGO" },
  { href: "/reviews", label: "What People Say" },
  { href: "/initiative", label: "Initiative" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: 1201 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", width: "100%" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: { xs: 2, md: 0 } }}>
            <Box component={Link} href="/" sx={{ display: "flex", alignItems: "center", textDecoration: "none", gap: 2 }}>
              <Image
                src="/images/logo.png"
                alt="SajhaThali"
                width={56}
                height={56}
                style={{ borderRadius: 4 }}
              />
              <Typography 
                variant="h5" 
                sx={{ 
                  color: "white", 
                  fontFamily: "Varela Round, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.5px"
                }}
              >
                SAJHA THALI
              </Typography>
            </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {links.map((l) => (
            <Button 
              key={l.href} 
              color="inherit" 
              component={Link} 
              href={l.href}
              sx={{ fontFamily: "Varela Round, sans-serif" }}
            >
              {l.label}
            </Button>
          ))}
        </Box>

        <IconButton sx={{ display: { xs: "inline-flex", md: "none" } }} color="inherit" onClick={() => setOpen(true)} aria-label="open navigation">
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 260 }} role="presentation" onClick={() => setOpen(false)}>
            <List>
              {links.map((l) => (
                  <ListItem key={l.href} disablePadding>
                    <ListItemButton component={Link} href={l.href}>
                      <ListItemText 
                        primary={l.label} 
                        primaryTypographyProps={{ 
                          fontFamily: "Varela Round, sans-serif" 
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        </Toolbar>
      </Box>
    </AppBar>
  );
}


