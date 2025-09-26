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
        minHeight: "calc(100vh - 64px)", // Full height minus navbar
        bgcolor: "background.default",
        pt: "64px", // Account for fixed navbar
        px: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          mx: "auto",
          py: { xs: 3, md: 4 },
          px: { xs: 0, md: 4 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
