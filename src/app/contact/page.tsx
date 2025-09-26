import { Container, Typography, Paper, Box } from "@mui/material";

export default function ContactPage() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Contact Details
      </Typography>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ p: 2 }}>
            <Typography>HOD Office, CSE Department, MIT College, Beed Bypass Road, Chh. Sambhajinagar, Maharashtra - 431010</Typography>
            <Typography sx={{ mt: 1 }}>Phone: +91 93736 75683, +91 99756 22079</Typography>
            <Typography>Email: sajhathali@gmail.com, support@sajhathali.com</Typography>
          </Paper>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ p: 2 }}>
            <Typography>Inquiry form placeholder. Google Maps embed will appear here.</Typography>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}


