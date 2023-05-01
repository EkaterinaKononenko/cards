import Card from '../../components/Card/Card';
import { CardList } from './CardSet.styled';

const CardSet = ({ cards }) => {
  return (
    <>
      <CardList>
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
      </CardList>
    </>
  );
};

export default CardSet;
