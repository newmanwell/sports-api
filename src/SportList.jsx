import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SportList = () => {
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
    return (
      <Link to={`/teamdetails/${team.strTeam}`} key={team.idTeam}>
        <img  src={team.strLogo} alt={team.strTeam} />
      </Link>
    )
  })
  )
}

export default SportList