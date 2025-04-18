import React from "react";
import IranFlag from "../assets/IranFlag.svg";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";

const LicensePlate = ({ licenseNo }) => {
  const firstNums = Number(licenseNo.split(/\s/)[0]);
  const letter = licenseNo.split(/\s/)[1];
  const lastNums = Number(licenseNo.split(/\s/)[2]);
  const areaCode = Number(licenseNo.split(/\s/)[4]);
  return (
    <Box
      width="125px"
      mb={0.5}
      sx={{
        color: "#000",
        bgcolor: "#fff",
        ...((letter === "پ" || letter === "ث") && {
          color: "#fff",
          bgcolor: "primary.main",
        }),
        ...((letter === "ت" || letter === "ع" || letter === "ک") && {
          bgcolor: "yellow",
        }),
        ...(letter === "الف" && {
          color: "#fff",
          bgcolor: "red",
        }),
        ...(letter === "ش" && {
          bgcolor: "khaki",
        }),
        ...((letter === "ف" || letter === "ز") && {
          color: "#fff",
          bgcolor: "#067183",
        }),
        border: 2,
        borderColor: "#000",
        borderRadius: "3px",
        fontWeight: "700",
      }}
    >
      <Stack direction="row-reverse" justifyContent="space-between">
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{
            bgcolor: "blue",
            width: "11%",
            p: 0.2,
          }}
        >
          <img width="100%" src={IranFlag} />
          <Typography
            sx={{
              color: "#fff",
              fontSize: "0.2rem",
              textAlign: "end",
            }}
          >
            I.R. IRAN
          </Typography>
        </Stack>

        <Stack
          fontSize="1rem"
          alignSelf="end"
          direction="row-reverse"
          justifyContent="space-around"
          width="100%"
          px={0.5}
          letterSpacing={2}
        >
          <span>{firstNums}</span>
          <span>
            {letter === "ت" && (
              <Typography
                component="span"
                sx={{
                  position: "absolute",
                  top: 9,
                  left: 84,
                  fontSize: "0.4rem",
                  fontFamily: "sans-serif",
                  transform: "scaleY(0.7)",
                  letterSpacing: 0,
                }}
              >
                TAXI
              </Typography>
            )}
            {letter}
          </span>
          <span>{lastNums}</span>
        </Stack>
        <Stack
          sx={{ width: "25%", borderRight: 1 }}
          spacing={0.5}
          alignItems="center"
        >
          <Typography
            fontSize="0.5rem"
            fontWeight="inherit"
            sx={{
              transform: "scaleY(0.5) translateY(-3px)",
            }}
          >
            ایران
          </Typography>
          <Typography fontSize="0.8rem" fontWeight="inherit" lineHeight="0.1">
            {areaCode}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LicensePlate;
