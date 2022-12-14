import { useEffect, useState } from "react"
import DraftTeam from "./components/DraftTeam"
import RikishiList from "./components/RikishiList"
import RikishiLarge from "./components/RikishiLarge"


function Draft() {

    const [rikishi, setRikishi] = useState(["hello", "hi", "wedep"])
    const [clickedRikishi, setClickedRikishi] = useState("")
    const [userTeam, setUserTeam] = useState({
        r1: "",
        r2: "",
        r3: "",
        r4: "",
        r5: "",
        r6: "",
        r7: "",
        username: ""
      })

    // useEffect(() => {
    //     fetch("rikishi")
    //     .then(r => r.json)
    //     .then(r => setRikishi(r))
    // }, [])

    function handleCardClick(r) {
        setClickedRikishi(r)
    }


    return (
        <div>
            <div id="DraftTopFlex">
                <DraftTeam userTeam={userTeam} setUserTeam={setUserTeam}/>
                <RikishiLarge clickedRikishi={clickedRikishi} handleCardClick={handleCardClick} />
            </div>
            <div id="AllRikishiFlex">
                <div id="Makuuchi" >
                    <h2>Makuuchi</h2>
                    <RikishiList 
                        // this needs to filter just makuuchi rikishi
                        rikishi={rikishi}
                        handleCardClick={handleCardClick}    
                    />
                </div>
                <div id="Juryo">
                    <h2>Juryo</h2>
                        <RikishiList 
                            // this needs to filter just makuuchi rikishi
                            rikishi={rikishi}
                            handleCardClick={handleCardClick}    
                        />
                </div>
            </div>
        </div>

    )
}

export default Draft