import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavHome } from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <VStack w="full" minH="200vh">
      <NavHome></NavHome>
      <Outlet />
    </VStack>
  );
}

export default App;
