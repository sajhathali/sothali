"use client";
import { Container, Typography, Paper } from "@mui/material";

export default function DonationPage() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Donate Food
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography>
          Donation form goes here (name, contact, address with maps autocomplete, food details, logistics, upload, consent).
        </Typography>
      </Paper>
    </Container>
  );
}


