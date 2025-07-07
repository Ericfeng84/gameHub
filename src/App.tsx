import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/nav";
import GamesGrid from "./components/GamesGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "150px 1fr",
      }}
      templateRows={{
        base: "60px 1fr",
        lg: "60px 1fr", // 保证大屏下两行
      }}
    >
      <GridItem pl="2" area={"nav"}>
        <Nav />
      </GridItem>
      {/* 只在大屏显示 Aside */}
      <Show above="lg">
        <GridItem pl="2" bg="orange.300" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area={"main"}>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
