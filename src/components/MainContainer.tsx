"use client";
import { Container, Box } from "@mui/material";
import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

export default function MainContainer({ children, maxWidth = "lg" }: MainContainerProps) {
  return (
    <Container 
      maxWidth={maxWidth}
      sx={{ 
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "1200px" },
          mx: "auto",
          aspectRatio: { xs: "auto", md: "16/9" },
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.paper",
          borderRadius: { xs: 0, md: 2 },
          boxShadow: { xs: 0, md: 2 },
          p: { xs: 2, md: 4 },
          overflow: "auto",
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
