import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Gamehub Logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function Nav() {
  return (
    <HStack justifyContent="space-between" paddingRight="10px" paddingLeft="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Nav;