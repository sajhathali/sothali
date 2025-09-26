"use client";
import { Typography, Paper } from "@mui/material";
import MainContainer from "@/components/MainContainer";

export default function DonationPage() {
  return (
    <MainContainer>
      <Typography variant="h3" gutterBottom>
        Donate Food
      </Typography>
      <Paper sx={{ p: 3, mt: 2 }}>
        <Typography>
          Donation form goes here (name, contact, address with maps autocomplete, food details, logistics, upload, consent).
        </Typography>
      </Paper>
    </MainContainer>
  );
}


