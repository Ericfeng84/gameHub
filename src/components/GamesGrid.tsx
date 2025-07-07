
import { Text } from "@chakra-ui/react";
import useGames from "../hooks/usGames";

function GamesGrid() {
    const { games, error } = useGames();


  return (
    <>
    {error && <Text>{error}</Text>}
    <div>
      {games.map((game) => (
        <div key={game.id}>{game.name}</div>
      ))}
    </div>
    </>
  );
}

export default GamesGrid;