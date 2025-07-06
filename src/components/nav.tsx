import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Gamehub Logo.webp";

function Nav() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Nav</Text>
    </HStack>
  );
}

export default Nav;