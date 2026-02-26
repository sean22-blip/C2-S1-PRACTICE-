import { HTML_RESULTS } from "../data";
import { JAVA_RESULTS } from "../data";
import { PYTHON_RESULTS } from "../data";
import { ENGLISH_RESULTS } from "../data";
function Scores(props) {
  return (
    <div className="scores">
      <h1>{props.courseName}</h1>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name </th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {props.courseResults.map((data, index) => (
            <tr key={index}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td className={data.score < 50? "warning": data.score}>{data.score}</td>
              {/* <td className="warning">{data.score} {data.score < 50 ? false : true }</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// {/* <Scores courseName="HTML" courseResults={HTML_RESULTS}></Scores> */}
export default Scores;
