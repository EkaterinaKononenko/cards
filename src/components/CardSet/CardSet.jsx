import Card from '../../components/Card/Card';

const CardSet = ({ cards }) => {
  console.log(cards);
  return (
    <>
      <ul>
        {cards.map(({ id, user, avatar, tweets, followers }) => {
          return (
            <Card
              key={id}
              id={id}
              avatar={avatar}
              user={user}
              tweets={tweets}
              followers={followers}
            >
              {user}
            </Card>
          );
        })}
      </ul>
    </>
  );
};

export default CardSet;
