import { Typography, Box } from "@mui/material";
import MainContainer from "@/components/MainContainer";

export default function InitiativePage() {
  return (
    <MainContainer>
      <Typography variant="h3" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        🌱 Our Initiative
      </Typography>
      
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
          Bridging the Gap
        </Typography>
        <Typography paragraph>
          Every day, millions of people go hungry while tons of food is wasted at homes, restaurants, and events. Our initiative aims to bridge this gap by connecting food donors with NGOs and Ashrams that serve people in need.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 1 }}>
          🎯 What We Do
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" paragraph>
            <strong>Collect Surplus Food</strong> – Donors can easily share details of leftover food through our platform.
          </Typography>
          <Typography component="li" paragraph>
            <strong>Connect with NGOs</strong> – Registered NGOs receive notifications and arrange pickups.
          </Typography>
          <Typography component="li" paragraph>
            <strong>Ensure Safe Distribution</strong> – Food reaches the needy in a safe, timely, and organized way.
          </Typography>
          <Typography component="li" paragraph>
            <strong>Promote Awareness</strong> – Spreading the message: &quot;Food is not waste, it&apos;s a blessing to share.&quot;
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 1 }}>
          🤝 Why It Matters
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" paragraph>
            Reduces food wastage and environmental impact.
          </Typography>
          <Typography component="li" paragraph>
            Supports NGOs and Ashrams in feeding communities effectively.
          </Typography>
          <Typography component="li" paragraph>
            Helps achieve the dream of a Hunger-Free Society.
          </Typography>
          <Typography component="li" paragraph>
            Creates a network of compassionate individuals and organizations.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 1 }}>
          🚀 Join the Movement
        </Typography>
        <Typography paragraph>
          Be part of this mission. Whether you are an individual, a restaurant, or an event organizer, your small contribution can bring a smile to many faces. Together, let&apos;s ensure <strong>No Food Waste, No Empty Plates</strong>.
        </Typography>
        <Typography paragraph sx={{ fontStyle: "italic", color: "text.secondary" }}>
          Every meal shared is a step towards a more compassionate world where no one sleeps hungry.
        </Typography>
      </Box>

      <Box sx={{ mt: 6, textAlign: "center", py: 3, bgcolor: "primary.main", color: "white", borderRadius: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, fontStyle: "italic" }}>
          Khushiyan Baantien, Bhookh Mitaayen
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
          Share Happiness, Eliminate Hunger
        </Typography>
      </Box>
    </MainContainer>
  );
}
