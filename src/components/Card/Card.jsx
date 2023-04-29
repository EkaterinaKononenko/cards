const Card = ({id, user, tweets, avatar, followers}) => {
    return (
        <>
            <li key={id}>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src={avatar} alt={user} />
                <p>{tweets} TWEETS</p>
                <p>{followers} FOLLOWERS</p>
            </li>
        </>
    )
}

export default Card;