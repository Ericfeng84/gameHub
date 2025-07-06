import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/nav";

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
      }}
    >
      <GridItem pl="2"  area={"nav"}>
        <Nav />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" bg="orange.300" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
