
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/usGames";
import Gamecard from "./Gamecard";

function GamesGrid() {
    const { games, error } = useGames();


  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={10}>
      {games.map((game) => (
        <Gamecard key={game.id} game={game} />
      ))}
    </SimpleGrid>
    </>
  );
}

export default GamesGrid;