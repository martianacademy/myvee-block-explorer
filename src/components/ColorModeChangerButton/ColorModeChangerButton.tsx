import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";

export const ColorModeChangerButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Color Mode Changer Button"
      icon={colorMode === "dark" ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
      variant="ghost"
      borderRadius="xl"
      onClick={toggleColorMode}
    ></IconButton>
  );
};
