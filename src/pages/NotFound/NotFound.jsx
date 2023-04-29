import { NotFoundWrapper, NotFoundImg, NotFoundBtn } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <NotFoundWrapper>
        <NotFoundBtn>&larr; GO BACK</NotFoundBtn>
        <NotFoundImg src="images/notFound.png" alt="notFound" />
      </NotFoundWrapper>
    </>
  );
};

export default NotFound;
