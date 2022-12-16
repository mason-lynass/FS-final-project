import { useEffect, useState } from "react"
import DraftTeam from "./components/DraftTeam"
import RikishiList from "./components/RikishiList"
import RikishiLarge from "./components/RikishiLarge"


function Draft({ user, setUser, rikishi }) {

    // const [isLoaded, setIsLoaded] = useState(false)

    const [clickedRikishi, setClickedRikishi] = useState("")
    const [userTeam, setUserTeam] = useState({
        r1: "",
        r2: "",
        r3: "",
        r4: "",
        r5: "",
        r6: "",
        r7: "",
        user_id: "",
        basho: 2023.1
    })

    // console.log(`isLoaded = ${isLoaded}`)
    // console.log(user)
    // console.log(userTeam)

    function handleCardClick(r) {
        setClickedRikishi(r)
    }

    const MakuuchiRikishi = rikishi.filter(rikishi => rikishi.current_rank !== "J")
    const JuryoRikishi = rikishi.filter(rikishi => rikishi.current_rank === "J")

    function renderAlreadyDrafted() {
        // console.log('already drafted')
        return (
            <p>you already have a team, silly!</p>
        )
    }

    function renderDraftPage() {
        // console.log('you can draft')
        return (
            <div>
                <div id="DraftTopFlex">
                    <DraftTeam userTeam={userTeam} setUserTeam={setUserTeam} user={user} setUser={setUser}/>
                    <RikishiLarge
                        userTeam={userTeam}
                        setUserTeam={setUserTeam}
                        clickedRikishi={clickedRikishi}
                        handleCardClick={handleCardClick} />
                </div>
                <div id="AllRikishiFlex">
                    <div id="Makuuchi" >
                        <h2>Makuuchi</h2>
                        <RikishiList
                            // this needs to filter just makuuchi rikishi
                            rikishi={MakuuchiRikishi}
                            handleCardClick={handleCardClick}
                        />
                    </div>
                    <div id="Juryo">
                        <h2>Juryo</h2>
                        <RikishiList
                            // this needs to filter just makuuchi rikishi
                            rikishi={JuryoRikishi}
                            handleCardClick={handleCardClick}
                        />
                    </div>
                </div>
            </div>
        )
    }

    function ADCheck() {
        return (
            (user.teams.some(e => e.basho === 2023.1)) ?
                renderAlreadyDrafted()
                :
                renderDraftPage()
        )
    }

    function areYouLoggedIn () {
        return (
            (user !== null) ?
            ADCheck() : <p>you need to login!</p>
        )
    }

    return (
        // (isLoaded === true) ?
            areYouLoggedIn() 
            // : <p>loading...</p>
    )
}

export default Draft