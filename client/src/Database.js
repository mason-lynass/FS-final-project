import { useEffect, useState } from 'react'
import StatsAndInfo from './components/StatsAndInfo'
import FSStats from './components/FSStats'

function Database({ rikishi }) {

    const [viewState, setViewState] = useState(false)
    const [dbRikishi, setDBRikishi] = useState([])
    const [rikishiLoaded, setRikishiLoaded] = useState(false)

    useEffect(() => {
        setDBRikishi(rikishi)
        setRikishiLoaded(true)
    }, [rikishi])

    console.log(dbRikishi)

    function changeViewState() {
        setViewState(!viewState)
    }

    return (
        (rikishiLoaded === true) ?
            <div id="DBContainer">
                <div id="DBTop">
                    <p id='DBTopSpace'> </p>
                    <h1 id="DBTitle">{viewState === false ? "Rikishi Stats & Info" : "Fantasy Sumo Stats"}</h1>
                    <button id="DBViewState" onClick={changeViewState}>{viewState === false ? "view FS Stats" : "view Rikishi Info"}</button>

                </div>
                {viewState === false ?
                <StatsAndInfo dbRikishi={dbRikishi}/>
                 :
                <FSStats dbRikishi={dbRikishi}/>}
            </div>
            :
            <h2>loading...</h2>
    )
}

export default Database