import { NotFoundWrapper, NotFoundImg, NotFoundBtn } from './NotFound.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'components/Container/Container';

const NotFound = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const onGoBackClick = () => {
     navigate(location?.state?.from ?? '/');
   };
  return (
    <>
      <Container>
        <NotFoundWrapper>
          <NotFoundBtn type="button" onClick={onGoBackClick}>
            &larr; GO BACK
          </NotFoundBtn>
          <NotFoundImg src="images/notFound.png" alt="notFound" />
        </NotFoundWrapper>
      </Container>
    </>
  );
};

export default NotFound;
