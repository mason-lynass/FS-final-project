function SmallCard ({rikishi, handleCardClick}) {
    return (
        <div className="SmallCard" onClick={() => handleCardClick(rikishi)}>
            <img src={rikishi.img} alt={rikishi.shikona}></img>
            <h2>{rikishi.shikona}</h2>
            <h3>{rikishi.rank}</h3>
            <p>it's a card</p>
        </div>
    )
}

export default SmallCard