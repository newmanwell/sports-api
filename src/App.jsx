import { useState } from "react"
import SportList from "./SportList"
import TeamDetails from "./TeamDetails"

const  App =() => {
  const [oneTeamDetails, setOneTeamDetails] = useState({});

  return (
    <>
      <h1>Premier League DB</h1>
      {console.log(oneTeamDetails)}
      {
        oneTeamDetails.idTeam ? <TeamDetails /> : <SportList setOneTeamDetails={setOneTeamDetails}/>
      }
      
    </>
  )
}

export default App
