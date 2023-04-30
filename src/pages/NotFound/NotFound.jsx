import { NotFoundWrapper, NotFoundImg, NotFoundBtn } from './NotFound.styled';
import { useLocation, useNavigate } from 'react-router-dom';

const NotFound = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const onGoBackClick = () => {
     navigate(location?.state?.from ?? '/');
   };
  return (
    <>
      <NotFoundWrapper>
        <NotFoundBtn type="button" onClick={onGoBackClick}>&larr; GO BACK</NotFoundBtn>
        <NotFoundImg src="images/notFound.png" alt="notFound" />
      </NotFoundWrapper>
    </>
  );
};

export default NotFound;
