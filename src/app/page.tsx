import { Typography, Button, Stack, Box } from "@mui/material";
import MainContainer from "@/components/MainContainer";

export default function Home() {
  return (
    <MainContainer>
      <Box 
        sx={{ 
          textAlign: "center", 
          minHeight: "calc(100vh - 200px)",
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center",
          position: "relative",
          backgroundImage: "url(/images/banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(237, 224, 212, 0.5)", // 50% transparency overlay with app background color
            zIndex: 1,
          }
        }}
      >
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ 
            fontWeight: 700, 
            color: "primary.main", 
            position: "relative", 
            zIndex: 2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
          }}
        >
          What&apos;s Extra for You Can Be Everything for Someone
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 4, 
            maxWidth: 600, 
            mx: "auto", 
            position: "relative", 
            zIndex: 2,
            color: "text.primary",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
          }}
        >
          Connecting food donors with NGOs and Ashrams to ensure no plate goes empty
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={{ justifyContent: "center", alignItems: "center", position: "relative", zIndex: 2 }}>
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
