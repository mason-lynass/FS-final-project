function RikishiLarge({ clickedRikishi, userTeam, setUserTeam }) {

    const rikishi = clickedRikishi

    const totalSansho = (clickedRikishi.shukun_sho + clickedRikishi.kanto_sho + clickedRikishi.gino_sho)

    function calculate_age(dob) {
        const birthdate = new Date(dob)
        const diff_ms = Date.now() - birthdate.getTime();
        const age_dt = new Date(diff_ms)

        return Math.abs(age_dt.getUTCFullYear() - 1970)
    }
    

    function handleAddToTeam(rikishi) {
        if (rikishi.current_rank === "Y" || rikishi.current_rank === "O" || rikishi.current_rank === "S" || rikishi.current_rank === "K") {
            if (userTeam.r1 === "") {
                setUserTeam({ ...userTeam, r1: rikishi.shikona })
            } else if (userTeam.r1 !== "" && userTeam.r1 !== rikishi.shikona) {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
            }
        }
        if (rikishi.current_rank === "1" || rikishi.current_rank === "2" || rikishi.current_rank === "3" || rikishi.current_rank === "4") {
            if (userTeam.r2 === "") {
                setUserTeam({ ...userTeam, r2: rikishi.shikona })
            } else if (userTeam.r2 !== "" && userTeam.r2 !== rikishi.shikona) {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
            }
        }
        if (rikishi.current_rank === "5" || rikishi.current_rank === "6" || rikishi.current_rank === "7" || rikishi.current_rank === "8") {
            if (userTeam.r3 === "") {
                setUserTeam({ ...userTeam, r3: rikishi.shikona })
            } else if (userTeam.r3 !== "" && userTeam.r3 !== rikishi.shikona) {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
            }
        }
        if (rikishi.current_rank === "9" || rikishi.current_rank === "10" || rikishi.current_rank === "11" || rikishi.current_rank === "12") {
            if (userTeam.r4 === "") {
                setUserTeam({ ...userTeam, r4: rikishi.shikona })
            } else if (userTeam.r4 !== "" && userTeam.r4 !== rikishi.shikona) {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
            }
        }
        if (rikishi.current_rank === "13" || rikishi.current_rank === "14" || rikishi.current_rank === "15" || rikishi.current_rank === "16" || rikishi.current_rank === "17") {
            if (userTeam.r5 === "") {
                setUserTeam({ ...userTeam, r5: rikishi.shikona })
            } else if (userTeam.r5 !== "" && userTeam.r5 !== rikishi.shikona) {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
            }
        }
        if (rikishi.current_rank === "J") {
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
                        <img id="RLargeImage" src={rikishi.image_url} alt={rikishi.shikona}></img>
                    </div>
                    <p>Age: {calculate_age(rikishi.birthdate)} - {rikishi.heya} stable</p>
                    <p>current rank: {rikishi.current_rank} | highest rank: {rikishi.highest_rank}</p>
                    <p>career Yusho: {rikishi.yusho} | career special prizes: {totalSansho} | career Kinboshi: {rikishi.kinboshi}</p>
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