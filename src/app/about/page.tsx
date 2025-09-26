import { Container, Typography, Box } from "@mui/material";

export default function AboutPage() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        About / Initiative
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Khushiyan Baantien, Bhookh Mitaayen
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography>
          No one should sleep hungry. We connect donors with NGOs and Ashrams to reduce food waste and combat hunger.
          We leverage location, logistics and trusted partners to serve communities quickly and safely.
        </Typography>
      </Box>
    </Container>
  );
}


