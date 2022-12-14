function RikishiLarge({ clickedRikishi, userTeam, setUserTeam }) {

    const rikishi = clickedRikishi

    function handleAddToTeam(rikishi) {
        if (rikishi.rank === "Y" || rikishi.rank === "O" || rikishi.rank === "S" || rikishi.rank === "K") {
            if (userTeam.r1 === "") {
                setUserTeam({ ...userTeam, r1: rikishi.shikona })
            } else if (userTeam.r1 !== "") {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
            }
        }
        if (rikishi.rank === "M1" || rikishi.rank === "M2" || rikishi.rank === "M3" || rikishi.rank === "M4") {
            if (userTeam.r2 === "") {
                setUserTeam({ ...userTeam, r2: rikishi.shikona })
            } else if (userTeam.r2 !== "") {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
            }
        }
        if (rikishi.rank === "M5" || rikishi.rank === "M6" || rikishi.rank === "M7" || rikishi.rank === "M8") {
            if (userTeam.r3 === "") {
                setUserTeam({ ...userTeam, r3: rikishi.shikona })
            } else if (userTeam.r3 !== "") {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
            }
        }
        if (rikishi.rank === "M9" || rikishi.rank === "M10" || rikishi.rank === "M11" || rikishi.rank === "M12") {
            if (userTeam.r4 === "") {
                setUserTeam({ ...userTeam, r4: rikishi.shikona })
            } else if (userTeam.r4 !== "") {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
            }
        }
        if (rikishi.rank === "M13" || rikishi.rank === "M14" || rikishi.rank === "M15" || rikishi.rank === "M16" || rikishi.rank === "M17") {
            if (userTeam.r5 === "") {
                setUserTeam({ ...userTeam, r5: rikishi.shikona })
            } else if (userTeam.r5 !== "") {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
            }
        }
        if (rikishi.rank === "J") {
            setUserTeam({ ...userTeam, r7: rikishi.shikona })
        }
    }

    return (
        <div className="RLarge">
            {clickedRikishi ?
                <div className="content" 
                // onClick={() => handleCardClick(rikishi)}
                >
                    <div className="card-title">
                        <h1>{rikishi.shikona}</h1>
                        <img src={rikishi.img} alt={rikishi.shikona}></img>
                    </div>
                    <p>current rank: {rikishi.rank}</p>
                    <p>highest rank: {rikishi.highestrank}</p>
                    <p>career Yusho: {rikishi.yusho}</p>
                    <p>career Kinboshi: {rikishi.kinboshi}</p>
                    <p>fantasy sumo points last basho: {rikishi.fsAki}</p>
                    <button onClick={() => handleAddToTeam(rikishi)}>Add {rikishi.shikona} to your squad</button>
                </div>

                :
                <div>
                    <h2>click on a wrestler</h2>
                    <p>their information and stats will show up here</p>
                </div>
            }
        </div>
    )
}

export default RikishiLarge