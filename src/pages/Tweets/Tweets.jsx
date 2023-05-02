import CardSet from "components/CardSet/CardSet";
import { useState, useEffect } from "react";
import getUsers from "API/getUsers";
import { Container } from "components/Container/Container";
import { TweetsWrapper, LoadMoreBtn } from './Tweets.styled';

const Tweets = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUsers(page)
      .then(response => {
        setCards(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [page]);

const loadMoreCards = async () => {
  const nextPage = page + 1;
  try {
    const response = await getUsers(nextPage);
    setCards(prevCards => [...prevCards, ...response]);
    setPage(nextPage);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      <Container>
        <TweetsWrapper>
          <CardSet cards={cards} />
          {cards.length > 0 && (
            <LoadMoreBtn onClick={loadMoreCards}>Load More</LoadMoreBtn>
          )}
        </TweetsWrapper>
      </Container>
    </>
  );
};

export default Tweets;







