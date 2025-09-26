import { Typography, Button, Stack, Box } from "@mui/material";
import MainContainer from "@/components/MainContainer";

export default function Home() {
  return (
    <MainContainer>
      <Box sx={{ textAlign: "center", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, color: "primary.main" }}>
          Transform Waste into Meals
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
          Connecting donors with NGOs and Ashrams to fight hunger through technology and compassion.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={{ justifyContent: "center", alignItems: "center" }}>
          <Button 
            href="/donation" 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
          >
            Donate Food
          </Button>
          <Button 
            href="/register-ngo" 
            variant="outlined" 
            color="primary" 
            size="large"
            sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
          >
            Register NGO
          </Button>
          <Button 
            href="/about" 
            variant="text" 
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
          >
            Learn More
          </Button>
        </Stack>
      </Box>
    </MainContainer>
  );
}
