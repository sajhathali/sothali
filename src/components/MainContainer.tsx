"use client";
import { Box } from "@mui/material";
import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        pt: "64px", // Account for fixed navbar
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, md: 4 },
        py: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          aspectRatio: { xs: "auto", md: "16/9" },
          height: { xs: "auto", md: "calc(100vh - 128px)" }, // Full height minus navbar and padding
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.paper",
          borderRadius: { xs: 0, md: 2 },
          boxShadow: { xs: 0, md: 3 },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 4 },
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
