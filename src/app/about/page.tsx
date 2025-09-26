import { Container, Typography, Box } from "@mui/material";

export default function AboutPage() {
  return (
    <Container sx={{ py: 6, maxWidth: "md" }}>
      <Typography variant="h3" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        🥘 About Us
      </Typography>
      
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
          Our Mission
        </Typography>
        <Typography paragraph>
          We believe no one should sleep hungry when surplus food is available around us. Our mission is to build a bridge between those who have extra food and those who need it the most — NGOs, Ashrams, and communities working to fight hunger.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
          Who We Are
        </Typography>
        <Typography paragraph>
          We are a community-driven platform dedicated to reducing food wastage and serving humanity. By connecting donors and NGOs, we make it easy for individuals, restaurants, events, and organizations to donate leftover food safely and responsibly.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
          What We Do
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" paragraph>
            <strong>Collect Donations:</strong> Donors can register and submit details of surplus food.
          </Typography>
          <Typography component="li" paragraph>
            <strong>Connect NGOs:</strong> Verified NGOs and Ashrams receive real-time notifications of donations nearby.
          </Typography>
          <Typography component="li" paragraph>
            <strong>Facilitate Pickup & Distribution:</strong> NGOs coordinate with donors for quick food pickup and distribution.
          </Typography>
          <Typography component="li" paragraph>
            <strong>Promote Awareness:</strong> We spread awareness about food wastage and encourage mindful sharing.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
          Why It Matters
        </Typography>
        <Typography paragraph>
          Every day, tons of food goes to waste while millions of people go hungry. By working together, we can reduce wastage, nourish lives, and move closer to a Zero Hunger society.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
          Join Us
        </Typography>
        <Typography paragraph>
          Whether you're a donor, an NGO, or just someone who believes in kindness — this platform is for you. Together, we can make a difference, one meal at a time.
        </Typography>
      </Box>

      <Box sx={{ mt: 6, textAlign: "center", py: 3, bgcolor: "primary.main", color: "white", borderRadius: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, fontStyle: "italic" }}>
          Khushiyan Baantien, Bhookh Mitaayen
        </Typography>
      </Box>
    </Container>
  );
}


