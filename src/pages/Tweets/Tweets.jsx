import CardSet from "components/CardSet/CardSet";
import { useState, useEffect } from "react";
import getUsers from "API/getUsers";

const Tweets = () => {
  const [cards, setCards] = useState([]);

   useEffect(() => {
     getUsers()
       .then(response => {
         setCards(response);
       })
       .catch(error => {
         console.log(error);
       });
   }, []);
  
  return (
    <>
      <div>Tweets page</div>
      <CardSet cards={cards} />
    </>
  );
};

export default Tweets;
