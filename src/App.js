import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Alphabet from "./pages/Alphabet";
import Kyikou from "./pages/voyels/Kyikou";
import Chabkyou from "./pages/voyels/Chabkyou";
import Drebou from "./pages/voyels/Drebou";
import Naro from "./pages/voyels/Naro";
import { useState } from "react";
import SubscriptYa from "./pages/subscripts/SubscriptYa";
import SubscriptRa from "./pages/subscripts/SubscriptRa";
import SubscriptLa from "./pages/subscripts/SubscriptLa";
import SubscriptOua from "./pages/subscripts/SubscriptOua";
import SuperscriptRa from "./pages/superscripts/SuperscriptRa";
import SuperscriptLa from "./pages/superscripts/SuperscriptLa";
import SuperscriptSa from "./pages/superscripts/SuperscriptSa";
function App() {
  const [learningMode, setLearningMode] = useState("reading");
  return (
    <Router>
      <Header
        learningMode={learningMode}
        setLearningMode={setLearningMode}
      ></Header>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/Alphabet" element={<Alphabet />}></Route>
        <Route
          path="/Kyikou"
          element={<Kyikou learningMode={learningMode} />}
        ></Route>
        <Route
          path="/Chabkyou"
          element={<Chabkyou learningMode={learningMode} />}
        ></Route>
        <Route
          path="/Drebou"
          element={<Drebou learningMode={learningMode} />}
        ></Route>
        <Route
          path="/Naro"
          element={<Naro learningMode={learningMode} />}
        ></Route>
        <Route
          path="/SubscriptYa"
          element={<SubscriptYa learningMode={learningMode} />}
        ></Route>
        <Route
          path="/SubscriptRa"
          element={<SubscriptRa learningMode={learningMode} />}
        ></Route>
        <Route
          path="/SubscriptLa"
          element={<SubscriptLa learningMode={learningMode} />}
        ></Route>
        <Route
          path="/SubscriptOua"
          element={<SubscriptOua learningMode={learningMode} />}
        ></Route>
        <Route
          path="/SuperscriptRa"
          element={<SuperscriptRa learningMode={learningMode} />}
        ></Route>
        <Route
          path="/SuperscriptLa"
          element={<SuperscriptLa learningMode={learningMode} />}
        ></Route>
        <Route
          path="/SuperscriptSa"
          element={<SuperscriptSa learningMode={learningMode} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
