import {
  Badge,
  Center,
  Divider,
  Flex,
  HStack,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { ColorModeChangerButton } from "../../ColorModeChangerButton";

export const NavHome = () => {
  const navBgColor = useColorModeValue("white", "gray.900");
  return (
    <HStack
      p={5}
      w="full"
      bgColor={navBgColor}
      borderBottomRadius="3xl"
      boxShadow="base"
      borderBottomWidth="thin"
      zIndex={11111}
    >
      <Center boxSize={10} borderWidth="thick" borderRadius="full"></Center>
      <Center h="30px">
        <Divider
          orientation="vertical"
          borderRadius="full"
          borderWidth="thin"
        ></Divider>
      </Center>
      <HStack>
        <Text
          fontSize="xl"
          fontWeight={900}
          bgGradient="linear(to-r, yellow.500, blue.500)"
          bgClip="text"
        >
          MyVee
        </Text>
        <Badge size="lg" colorScheme="green" borderRadius="xl">
          Scan
        </Badge>
      </HStack>
      <Spacer></Spacer>
      <ColorModeChangerButton />
    </HStack>
  );
};
