import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/Footer/footer"
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Header/>
      <Box h="90%">
        <Body/>
      </Box>
      <Footer/>
    </div>
  );
}

export default App;
