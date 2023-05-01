import CardSet from "components/CardSet/CardSet";
import { useState, useEffect } from "react";
import getUsers from "API/getUsers";
import { Container } from "components/Container/Container";
import { TweetsWrapper } from "./Tweets.styled";

const Tweets = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);

   useEffect(() => {
     getUsers()
       .then(response => {
         setCards(response);
       })
       .catch(error => {
         console.log(error);
       });
   }, []);
 

   const loadMoreCards = async () => {
     const nextPage = page + 1;
     const response = await getUsers(nextPage);
     if (response.length > 0) {
       const newCards = response.slice(0, 3);
       setCards(prevCards => [...prevCards, ...newCards]);
       setPage(nextPage);
     }
   };
  
  return (
    <>
      <Container>
        <TweetsWrapper>
          <CardSet cards={cards} />
          {cards.length > 0 && (
            <button onClick={loadMoreCards}>Load More</button>
          )}
        </TweetsWrapper>
      </Container>
    </>
  );
};

export default Tweets;
