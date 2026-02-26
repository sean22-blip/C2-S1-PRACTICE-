import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";
import Scores from "./components/Scores";
import {HTML_RESULTS} from "./data.js";
function App() {
  return (
    <>
      <Header batchName="Generation 11" />
      <main className="scores-container">
        <Scores courseName="HTML" courseResults={HTML_RESULTS}></Scores>
      </main>
    </>
  );
}

export default App;
