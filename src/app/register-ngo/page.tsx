"use client";
import { Typography, Paper } from "@mui/material";
import MainContainer from "@/components/MainContainer";

export default function RegisterNGOPage() {
  return (
    <MainContainer>
      <Typography variant="h3" gutterBottom>
        Register Your NGO / Ashram
      </Typography>
      <Paper sx={{ p: 3, mt: 2 }}>
        <Typography>
          NGO Registration form goes here (org info, contacts, location with maps, operational details, uploads, consent).
        </Typography>
      </Paper>
    </MainContainer>
  );
}


