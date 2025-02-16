import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const TeamDetails = () => {
  const { id } = useParams();
  const [ team, setTeam ] = useState({});
  console.log(team);

  useEffect(() => {
    const getTeamDetails = async() => {
      try {
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${id}`);
        const premierTeam = await response.json();
        const teamObject = premierTeam.teams;
        setTeam(teamObject[0]);
      } catch(error) {
        console.log(error)
      }
    }
    getTeamDetails();
  }, []);


  return (
  <section>
    <h2>Team Page</h2>
    <h2>{ team.strTeam }</h2>
    <h2>Location: { team.strLocation } { team.strCountry }</h2>
    <h3>Stadium: { team.strStadium }</h3>
    <h3>{ team.strKeywords}</h3>
    <img src={team.strBadge } alt="Badge" />
    <img src={team.strEquipment } alt="Kit" />
    <img src={team.strFanart1} alt="Fan Art" />
  </section>
  
  )
}

export default TeamDetails