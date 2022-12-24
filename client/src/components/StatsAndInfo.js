import SIAllRikishi from "./SIAllRikishi";
import { useState } from "react";

function StatsAndInfo({ dbRikishi }) {

    const [SIRikishi, setSIRikishi] = useState(dbRikishi)
    const [sortState, setSortState] = useState("default")

    function calculate_age(dob) {
        const birthdate = new Date(dob)
        const diff_ms = Date.now() - birthdate.getTime();
        const age_dt = new Date(diff_ms)

        return Math.abs(age_dt.getUTCFullYear() - 1970)
    }


    function handleSortState (e) {
        setSortState(e.target.id)
    }

    function SIDefault () {
        setSIRikishi([...SIRikishi].sort((a, b) => a.id - b.id))
    }

    function SIShikona () {
        setSIRikishi(SIRikishi.sort((a, b) => a.shikona - b.shikona))
    }

    function SIHighest () {
        setSIRikishi(SIRikishi.sort((a, b) => a.shikona - b.shikona))
    }

    function SIHeya () {
        setSIRikishi(SIRikishi.sort((a, b) => a.shikona - b.shikona))
    }

    function SIAge () {
        setSIRikishi(SIRikishi.sort((a, b) => a.shikona - b.shikona))
    }

    function SIHeight () {
        setSIRikishi(SIRikishi.sort((a, b) => b.height - a.height))
    }

    function SIWeight () {
        setSIRikishi(SIRikishi.sort((a, b) => a.shikona - b.shikona))
    }

    function SIYusho () {
        setSIRikishi(SIRikishi.sort((a, b) => a.shikona - b.shikona))
    }

    function SIKinboshi () {
        setSIRikishi(SIRikishi.sort((a, b) => a.shikona - b.shikona))
    }

    function SISS () {
        setSIRikishi(SIRikishi.sort((a, b) => a.shikona - b.shikona))
    }

    function SIKS () {
        setSIRikishi(SIRikishi.sort((a, b) => a.shikona - b.shikona))
    }

    function SIGS () {
        setSIRikishi(SIRikishi.sort((a, b) => a.shikona - b.shikona))
    }

    console.log(SIRikishi[0])

    const defaultSort = [...SIRikishi].sort((a, b) => a.id - b.id)
    const shikonaSort = [...SIRikishi].sort((a, b) => a.shikona.localeCompare(b.shikona))
    const highestSort = [...SIRikishi].sort((a, b) => a.id - b.id)
    const heyaSort = [...SIRikishi].sort((a, b) => a.heya.localeCompare(b.heya))
    const ageSort = [...SIRikishi].sort((a, b) => calculate_age(b.birthdate) - calculate_age(a.birthdate))
    const heightSort = [...SIRikishi].sort((a, b) => b.height - a.height)
    const weightSort = [...SIRikishi].sort((a, b) => b.weight - a.weight)

    // filter, then push to an empty array
    // filter Y 
    // filter O 
    // filter S 
    // filter K 
    // filter M 
    // filter J

    // console.log(ageSort)


    function SIRikishiSwitch () {
        console.log(sortState)

        if (sortState === "default") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={defaultSort}/>
        } else if (sortState === "shikona") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={shikonaSort}/>
        } else if (sortState === "highest") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={highestSort}/>
        } else if (sortState === "heya") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={heyaSort}/>
        } else if (sortState === "age") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={ageSort}/>
        } else if (sortState === "height") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={heightSort}/>
        } else if (sortState === "weight") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={weightSort}/>
        } else if (sortState === "yusho") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={SIRikishi}/>
        } else if (sortState === "kinboshi") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={SIRikishi}/>
        }
    }

    return (
        <div id="DBTable">
            <div id="DBTableColumns">
                <p className='DBImage' id="default" onClick={handleSortState}>(reset)</p>
                <p className='DBCurrent'>current rank</p>
                <p className='DBShikona' id="shikona" onClick={handleSortState}>shikona</p>
                <p className='DBHighest' id="highest" onClick={handleSortState}>highest rank</p>
                <p className='DBHeya' id="heya" onClick={handleSortState}>heya</p>
                <p className='DBAge' id="age" onClick={handleSortState}>age</p>
                <p className='DBHeight' id="height" onClick={handleSortState}>height (in cm)</p>
                <p className='DBWeight' id="weight" onClick={handleSortState}>weight (in kg)</p>
                <p className='DBYusho' id="yusho" onClick={handleSortState}>Yusho</p>
                <p className='DBKinboshi' id="kinboshi" onClick={handleSortState}>Kinboshi</p>
                <p className='DBSansho' id="ss" onClick={handleSortState}>Shukun-sho</p>
                <p className='DBSansho' id="ks" onClick={handleSortState}>Kanto-sho</p>
                <p className='DBSansho' id="gs" onClick={handleSortState}>Gino-sho</p>
            </div>
            <div id="DBAllRikishi">
                {SIRikishiSwitch()}
            </div>
        </div>
    )
}

export default StatsAndInfo