import {
  Item,
  ImgGoIt,
  ImgSign,
  ImgLine,
  ImgEllipse,
  ImgAvatar,
  TweetsText,
  Followers,
  Btn
} from './Card.styled';
import { useState, useEffect } from 'react';

const Card = ({ id, user, tweets, avatar, followers }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);

   useEffect(() => {
     const savedFollowers = localStorage.getItem(`followersCount_${id}`);
     if (savedFollowers) {
       setFollowersCount(parseInt(savedFollowers));
     } else {
       setFollowersCount(followers);
     }
   }, [id, followers]);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    setFollowersCount(prevCount => {
      const newCount = prevCount + (isFollowing ? -1 : 1);
      localStorage.setItem(`followersCount_${id}`, newCount);
      return newCount;
    });
  };

  const formattedCount = followersCount.toLocaleString();

  return (
    <>
      <Item key={id}>
        <ImgGoIt src="images/goit.png" alt="goit" />
        <ImgSign src="images/sign.png" alt="goit" />
        <ImgLine src="images/line.png" alt="line" />
        <ImgEllipse src="images/ellipse.png" alt="ellipse" />
        <ImgAvatar src={avatar} alt={user} />
        <TweetsText>{tweets} TWEETS</TweetsText>
        <Followers> {formattedCount} followers</Followers>
        <Btn
          onClick={handleFollowClick}
          style={{
            backgroundColor: isFollowing ? '#5CD3A8' : '#ebd8ff',
          }}
        >
          {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
        </Btn>
      </Item>
    </>
  );
}

export default Card;
