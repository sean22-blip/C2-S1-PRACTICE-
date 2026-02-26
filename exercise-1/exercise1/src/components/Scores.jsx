import { HTML_RESULTS} from "../data";
function Scores(props){
return(
      <div className="scores">
          <h1>{props.courseName}</h1>

    { myConcepts = myArray.map((myItem) => (
          <table>
            <thead>
              <tr>
                <th>{myItem.firstName}</th>
                <th>{myItem.lastName}</th>
                <th>{myItem.score}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First name 1 </td>
                <td>Last name 1 </td>
                <td>55</td>
              </tr>
              <tr>
                <td>First name 2 </td>
                <td>Last name 2 </td>
                <td>45</td>
              </tr>
            </tbody>
          </table>
    ))   
}
        </div>
// {/* <Scores courseName="HTML" courseResults={HTML_RESULTS}></Scores> */}
)
}
export default Scores;