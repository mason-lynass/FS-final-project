import { useEffect, useState } from "react";

function Account({ user, setUser, rikishi }) {

    const [aUser, setAUser] = useState(user)

    useEffect(() => {
        fetch("/me")
        .then(r => r.json())
        .then(user => setAUser(user))
    }, [])

    // console.log(user.teams)

    if (user !== null && (user.teams.length === 0)) {
        fetch("/me")
        .then(r => r.json())
        .then(user => console.log(user))
    }

    // console.log(`in Account ${user}`)

    function isString(value) {
        return typeof value === "string"
    }

    function currentBashoTeam() {

        const currentTeam = user.teams.find(e => e.basho === 2023.1)

        const CTRikishiStrings = Object.values(currentTeam).filter((isString))
    
        const actualTeam = rikishi.filter((r) => CTRikishiStrings.includes(r.shikona))
        console.log(actualTeam)



        return (
            <div>
                <h3>Here's your team for the January tournament:</h3>
                <div id="AccountTeam">
                    {actualTeam.map((obj) => 
                        <div className="AccountOneRikishi" key={obj.id}>
                            <img src={obj.image_url} />
                            <h3 className="AORrank">{obj.current_rank}</h3>
                            <h3 className="AORshikona">{obj.shikona}</h3>
                        </div>
                    )}
                    {/* <p>{actualTeam[0].current_rank} - {actualTeam[0].shikona}</p>
                    <p>{actualTeam[1].current_rank} - {actualTeam[1].shikona}</p>
                    <p>{actualTeam[2].current_rank} - {actualTeam[2].shikona}</p>
                    <p>{actualTeam[3].current_rank} - {actualTeam[3].shikona}</p>
                    <p>{actualTeam[4].current_rank} - {actualTeam[4].shikona}</p>
                    <p>{actualTeam[5].current_rank} - {actualTeam[5].shikona}</p>
                    <p>{actualTeam[6].current_rank} - {actualTeam[6].shikona}</p> */}
                </div>
            </div>
        )
    }

    function renderCurrentBashoTeam() {
        if (user.teams.length === 0) {
            return (
                <p id="NoTeam">You haven't drafted a team yet for the upcoming tournament</p>
            )
        } else {
            return (
                currentBashoTeam()
            )
        }
    }

    function renderAccountPage() {
        if (!user) {
            return (
                <h1 id="AccountLogin">You need to login to see your account page!</h1>
            )
        } else {
            return (
                <div id="AccountPage">
                    <h2 id="AccountHello">Hello, {user.username}!</h2>
                    {renderCurrentBashoTeam()}
                </div>
            )
        }
    }

    return (
        <>
            {renderAccountPage()}
        </>
    )
}

export default Account