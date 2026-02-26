// import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";
import Scores from "./components/Scores";
import { ENGLISH_RESULTS, HTML_RESULTS, JAVA_RESULTS, PYTHON_RESULTS } from "./data.js";
function App() {
  return (
    <>
      <Header batchName="Generation 11" />
      <main className="scores-container">
        <Scores courseName="JAVA"  courseResults={JAVA_RESULTS}></Scores>
        <Scores courseName="HTML" courseResults={HTML_RESULTS}></Scores>
        <Scores courseName="PYTHON" courseResults={PYTHON_RESULTS}></Scores>
        <Scores courseName="ENGLISH" courseResults={ENGLISH_RESULTS}></Scores>
      </main>
    </>
  );
}

export default App;
