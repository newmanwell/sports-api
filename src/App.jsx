import { useState } from "react"
import { Link, Routes, Route } from "react-router-dom";
import SportList from "./SportList"
import TeamDetails from "./TeamDetails"

const  App =() => {
  const [oneTeamDetails, setOneTeamDetails] = useState({});

  return (
    <>
      <header>
        <h1>Premier League DB</h1>
        <nav>
          <Link to="/">All Teams</Link>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<SportList />} />
          <Route path="/teamdetails/:id" element={<TeamDetails />} />
        </Routes>
      </div>
     
    </>
  )
}

export default App
