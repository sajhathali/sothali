import { Container, Typography, Button, Stack } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Transform Waste into Meals
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Connecting donors with NGOs and Ashrams to fight hunger.
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 3 }}>
        <Button href="/donation" variant="contained" color="primary">Donate Food</Button>
        <Button href="/register-ngo" variant="outlined" color="primary">Register NGO</Button>
        <Button href="/about" variant="text">Learn More</Button>
      </Stack>
    </Container>
  );
}
