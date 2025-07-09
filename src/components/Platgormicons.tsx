import { Platform } from "../hooks/usGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib";


const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
};




interface Props {

    platform: Platform[]
}


function Platformicons({ platform }: Props) {
    return (
        <HStack marginY={1}>
            {platform.map((p) => (
                <Icon key={p.id} color="gray.500" as={iconMap[p.name.toLocaleLowerCase()]} />
            ))}
        </HStack>
    )
}

export default Platformicons;