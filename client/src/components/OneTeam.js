function OneTeam ({team}) {
    return (
        
        <div className='oneTeam'>
            <h2>{team.user.username}</h2>
            <p>{team.r1}</p>
            <p>{team.r2}</p>
            <p>{team.r3}</p>
            <p>{team.r4}</p>
            <p>{team.r5}</p>
            <p>{team.r6}</p>
            <p>{team.r7}</p>
            <h3>total</h3>
        </div>
    )
}

export default OneTeam