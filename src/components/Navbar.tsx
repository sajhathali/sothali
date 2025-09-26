"use client";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Typography, IconButton, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/donation", label: "Donation" },
  { href: "/register-ngo", label: "Register Your NGO" },
  { href: "/reviews", label: "What People Say" },
  { href: "/contact", label: "Contact Details" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box component={Link} href="/" sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
          <Image
            src="/images/logo.png"
            alt="SajhaThali Logo"
            width={40}
            height={40}
            style={{ marginRight: 8 }}
          />
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
            SajhaThali
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {links.map((l) => (
            <Button key={l.href} color="inherit" component={Link} href={l.href}>
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
                    <ListItemText primary={l.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}


