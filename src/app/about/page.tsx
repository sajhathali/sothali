import { Typography, Box } from "@mui/material";
import MainContainer from "@/components/MainContainer";

export default function AboutPage() {
  return (
    <MainContainer>
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
          Whether you&apos;re a donor, an NGO, or just someone who believes in kindness — this platform is for you. Together, we can make a difference, one meal at a time.
        </Typography>
      </Box>

      <Box sx={{ mt: 6, textAlign: "center", py: 3, bgcolor: "primary.main", color: "white", borderRadius: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, fontStyle: "italic" }}>
          Khushiyan Baantien, Bhookh Mitaayen
        </Typography>
      </Box>

      {/* Additional Initiative Content */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h3" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          🌱 Our Initiative
        </Typography>
        <Typography paragraph>
          Every day, millions of people go hungry while tons of food is wasted at homes, restaurants, and events. Our initiative aims to bridge this gap by connecting food donors with NGOs and Ashrams that serve people in need.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
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

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 1 }}>
          🤝 Why It Matters
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" paragraph>
            Reduces food wastage.
          </Typography>
          <Typography component="li" paragraph>
            Supports NGOs and Ashrams in feeding communities.
          </Typography>
          <Typography component="li" paragraph>
            Helps achieve the dream of a Hunger-Free Society.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 1 }}>
          🚀 Join the Movement
        </Typography>
        <Typography paragraph>
          Be part of this mission. Whether you are an individual, a restaurant, or an event organizer, your small contribution can bring a smile to many faces. Together, let&apos;s ensure <strong>No Food Waste, No Empty Plates</strong>.
        </Typography>
      </Box>
    </MainContainer>
  );
}


