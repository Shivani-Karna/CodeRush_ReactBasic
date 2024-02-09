import React from "react";

import Hero from "./components/Hero";
import Information from "./components/Information";
import Container from "./layout/container";

const App = () => {
  return (
    <Container>
      <Hero />
      <Information />
    </Container>
  );
};

export default App;
