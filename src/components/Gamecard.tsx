import { Card, CardBody, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/usGames";
import Platformicons from "./Platgormicons";
import CriticalScore from "./criticalscore";

interface Props {
  game: Game;
}

function Gamecard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Text>{game.name}</Text>
        <HStack justifyContent={"space-between"}>
          <Platformicons
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticalScore score={game.metacritic}></CriticalScore>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default Gamecard;
