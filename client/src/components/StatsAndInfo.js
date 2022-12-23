function StatsAndInfo({ dbRikishi }) {

    function calculate_age(dob) {
        const birthdate = new Date(dob)
        const diff_ms = Date.now() - birthdate.getTime();
        const age_dt = new Date(diff_ms)

        return Math.abs(age_dt.getUTCFullYear() - 1970)
    }

    return (
        <div id="DBTable">
            <div id="DBTableColumns">
                <p className='DBImage'></p>
                <p className='DBCurrent'>current rank</p>
                <p className='DBShikona'>shikona</p>
                <p className='DBHighest'>highest rank</p>
                <p className='DBHeya'>heya</p>
                <p className='DBAge'>age</p>
                <p className='DBHeight'>Height (in cm)</p>
                <p className='DBWeight'>weight (in kg)</p>
                <p className='DBYusho'>Yusho</p>
                <p className='DBKinboshi'>Kinboshi</p>
                <p className='DBSansho'>Shukun-sho</p>
                <p className='DBSansho'>Kanto-sho</p>
                <p className='DBSansho'>Gino-sho</p>
            </div>
            <div id="DBAllRikishi">
                {dbRikishi.map((r) => {
                    return (
                        <div key={r.id} className='DBOneRikishi'>
                            <img className='DBImage' src={r.image_url} />
                            <p className='DBCurrent'>{r.current_rank}</p>
                            <p className='DBShikona'>{r.shikona}</p>
                            <p className='DBHighest'>{r.highest_rank}</p>
                            <p className='DBHeya'>{r.heya}</p>
                            {/* get this from the RLarge component */}
                            <p className='DBAge'>{calculate_age(r.birthdate)}</p>
                            <p className='DBHeight'>{r.height}</p>
                            <p className='DBWeight'>{r.weight}</p>
                            <p className='DBYusho'>{r.yusho}</p>
                            <p className='DBKinboshi'>{r.kinboshi}</p>
                            <p className='DBSansho'>{r.shukun_sho}</p>
                            <p className='DBSansho'>{r.kanto_sho}</p>
                            <p className='DBSansho'>{r.gino_sho}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default StatsAndInfo