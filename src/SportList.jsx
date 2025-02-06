import { useEffect, useState } from "react"

const SportList = (props) => {
  const [allTeams, setAllTeams] = useState([]);
  useEffect(() => {
    const getPremier = async() => {
      try {
       const response = await fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League");
       const premierTeams = await response.json();
       setAllTeams(premierTeams.teams);
       console.log(premierTeams.teams);
      } catch(error) {
        console.log(error);
      }
    }
    getPremier();
  }, []);
  
  return (
  allTeams.map((team) => {
    return <img key={team.idTeam} src={team.strLogo} alt={team.strTeam} onClick={() => {props.setOneTeamDetails(team)}}/>
  })
  )
}

export default SportList