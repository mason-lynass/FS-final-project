import { useEffect, useState } from "react"
import OneTeam from "./components/OneTeam"

function Results () {

    const [teams, setTeams] = useState("")

    useEffect(() => {
        fetch("/teams")
        .then(r => r.json())
        .then(teams => setTeams(teams))
    }, [])

    console.log(teams)

    
    return (
        (teams === "") ? 
        <h2>Loading...</h2>
        :
        <div className='teamsContainer'>
            <div className='teamsTop'>
                <h2 className="teamName">team name</h2>
                <p className="smallerColumn">sanyaku</p>
                <p className="smallerColumn">M1-M4</p>
                <p className="smallerColumn">M5-M8</p>
                <p className="smallerColumn">M9-M12</p>
                <p className="smallerColumn">M13-M17</p>
                <p className="smallerColumn">extra</p>
                <p className="smallerColumn">juryo</p>
                <h3 className="total">Total:</h3>
            </div>
        {teams.map((team) => 
            <OneTeam team={team} key={team.id}/>
        )}
        </div>
    )
} 

export default Results