function FSStats({ dbRikishi }) {

    console.log(dbRikishi)

    function FSRikishi() {

        // lol
        const fsRikishi = dbRikishi.map((r) => r) 
        const rFSHiToLo = fsRikishi.sort((a, b) => b.avg_fs_score - a.avg_fs_score)

        console.log(rFSHiToLo)


        return (
            rFSHiToLo.map((r) => {
                return (
                    <div key={r.id} className='DBOneRikishi'>
                        <img className='DBImage' src={r.image_url} />
                        <p className='DBCurrent'>{r.highest_rank}</p>
                        <p className='DBShikona'>{r.shikona}</p>
                        <p className="DBAvg">{r.avg_fs_score}</p>
                        {r.FS_history.map((basho) => {
                            return (<p className="DBBasho">{basho}</p>)
                        })}
                    </div>
                )
            })
        )
    }



    return (
        <div id="DBTable">
            <div id="DBTableColumns">
                <p className='DBImage'></p>
                <p className='DBCurrent'>highest rank</p>
                <p className='DBShikona'>shikona</p>
                <p className='DBAvg'>avg FS score</p>
                <p className='DBBasho'>2021.01</p>
                <p className='DBBasho'>2021.03</p>
                <p className='DBBasho'>2021.05</p>
                <p className='DBBasho'>2021.07</p>
                <p className='DBBasho'>2021.09</p>
                <p className='DBBasho'>2021.11</p>
                <p className='DBBasho'>2022.01</p>
                <p className='DBBasho'>2022.03</p>
                <p className='DBBasho'>2022.05</p>
                <p className='DBBasho'>2022.07</p>
                <p className='DBBasho'>2022.09</p>
                <p className='DBBasho'>2022.11</p>
            </div>
            <div id="DBAllRikishi">
                {FSRikishi()}
            </div>
        </div>
    )
}

export default FSStats