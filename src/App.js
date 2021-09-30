import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Reset } from "styled-reset";
import GlobalStyle from "./themes/globalStyles";
import { Container, Footer } from "./themes/base";

import Home from "./pages/Home";
import News from "./pages/News";

import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Router>
        <Reset />
        <GlobalStyle />

        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:subject/:id">
            <News />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </Container>
  );
}

export default App;
