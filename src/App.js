import React, { Suspense } from "react";

// npm i react-router-dom
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./global.css";

// react-animate-on-scroll
import "./utilities/animate.min.css";

import Navigation from "./components/navigation";
// import Footer from "./components/footer";

// import Home from "./pages/home";
// import Contato from "./pages/contato";
// import Books from "./pages/books";
// import Biography from "./pages/biography";

// FOTOGRAFIA:
// import Fotografia from "./pages/fotografia";
// import Empresas from "./pages/fotografia/albuns/empresas";
// import Eventos from "./pages/fotografia/albuns/eventos";
// import Palco from "./pages/fotografia/albuns/palco";
// import Retratos from "./pages/fotografia/albuns/retratos";

// LAZY LOADING NEXT PAGES:
// It will render the component ONLY WHEN / IF needed!
// React { Suspense } is required to wrap all the Routes.
const Home = React.lazy(() => {
  return import("./pages/home");
});
const Biography = React.lazy(() => {
  return import("./pages/biography");
});
const Contato = React.lazy(() => {
  return import("./pages/contato");
});
const Books = React.lazy(() => {
  return import("./pages/books");
});
// FOTOGRAFIA:
const Fotografia = React.lazy(() => {
  return import("./pages/fotografia");
});
const Empresas = React.lazy(() => {
  return import("./pages/fotografia/albuns/empresas");
});
const Eventos = React.lazy(() => {
  return import("./pages/fotografia/albuns/eventos");
});
const Palco = React.lazy(() => {
  return import("./pages/fotografia/albuns/palco");
});
const Retratos = React.lazy(() => {
  return import("./pages/fotografia/albuns/retratos");
});
// SERIES:
const Series = React.lazy(() => {
  return import("./pages/series");
});
// const MakeMeUp = React.lazy(() => {
//   return import("./pages/series/albuns/makemeup");
// });
// const ChaosAd = React.lazy(() => {
//   return import("./pages/series/albuns/chaosad");
// });
const Workshop = React.lazy(() => {
  return import("./pages/workshop");
});

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      {/* <Suspense fallback={<p>Loading "OR SPINNER"</p>}> */}
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/workshop" component={Workshop} />
          {/* <Route path="/series/chaosad" component={ChaosAd} /> */}
          {/* <Route path="/series/makemeupmusic" component={MakeMeUp} /> */}
          <Route path="/series" component={Series} />
          <Route path="/biography" component={Biography} />
          <Route path="/books" component={Books} />
          <Route path="/contact" component={Contato} />
          <Route path="/photography/portraits" component={Retratos} />
          <Route path="/photography/stages" component={Palco} />
          <Route path="/photography/events" component={Eventos} />
          <Route path="/photography/companies" component={Empresas} />
          <Route path="/photography" component={Fotografia} />
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
