import { Typography, Paper, Box } from "@mui/material";
import MainContainer from "@/components/MainContainer";

export default function ContactPage() {
  return (
    <MainContainer>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ p: 2 }}>
            <Typography>HOD Office, CSE Department, MIT College, Beed Bypass Road, Chh. Sambhajinagar, Maharashtra - 431010</Typography>
            <Typography sx={{ mt: 1 }}>Phone: +91 93736 75683, +91 99756 22079</Typography>
            <Typography>Email: sajhathali@gmail.com</Typography>
          </Paper>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ p: 2 }}>
            <Typography>Inquiry form placeholder. Google Maps embed will appear here.</Typography>
          </Paper>
        </Box>
      </Box>
    </MainContainer>
  );
}


