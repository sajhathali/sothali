import { Container, Typography, Grid, Paper } from "@mui/material";

const samples = [
  { name: "Priya Sharma", role: "Donor", text: "I donated leftover wedding food within hours. A noble initiative to reduce waste.", rating: 5 },
  { name: "Hope Foundation", role: "NGO", text: "This platform helps us serve more people daily.", rating: 5 },
  { name: "Ramesh Kumar", role: "Beneficiary", text: "Received warm meals during tough times. Thank you!", rating: 4 },
  { name: "Sunita Patel", role: "Restaurant Owner", text: "Now we donate unsold food easily.", rating: 5 },
];

export default function ReviewsPage() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        What People Say
      </Typography>
      <Grid container spacing={2}>
        {samples.map((s) => (
          <Grid item xs={12} sm={6} md={3} key={s.name}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Typography variant="subtitle1" fontWeight={600}>{s.name}</Typography>
              <Typography variant="caption" color="text.secondary">{s.role}</Typography>
              <Typography sx={{ my: 1 }}>{s.text}</Typography>
              <Typography>Rating: {"★".repeat(s.rating)}{"☆".repeat(5 - s.rating)}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}


