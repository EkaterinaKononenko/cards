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

const Card = ({ id, user, tweets, avatar, followers }) => {
    return (
      <>
        <Item key={id}>
          <ImgGoIt src="images/goit.png" alt="goit" />
          <ImgSign src="images/sign.png" alt="goit" />
          <ImgLine src="images/line.png" alt="line" />
          <ImgEllipse src="images/ellipse.png" alt="ellipse" />
          <ImgAvatar src={avatar} alt={user} />
          <TweetsText>{tweets} TWEETS</TweetsText>
          <Followers>{followers} FOLLOWERS</Followers>
          <Btn type="button">FOLLOW</Btn>
        </Item>
      </>
    );
}

export default Card;
