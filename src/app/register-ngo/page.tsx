"use client";
import { Container, Typography, Paper } from "@mui/material";

export default function RegisterNGOPage() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Register Your NGO / Ashram
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography>
          NGO Registration form goes here (org info, contacts, location with maps, operational details, uploads, consent).
        </Typography>
      </Paper>
    </Container>
  );
}


