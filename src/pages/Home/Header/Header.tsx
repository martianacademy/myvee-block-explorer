import { useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  const headerBgColor = useColorModeValue("yellow.500", "blue.900");
  return (
    <VStack
      w="full"
      p={10}
      boxShadow="base"
      marginTop={-10}
      bgColor={headerBgColor}
      minH={300}
    ></VStack>
  );
};
