import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { HomeLink, TweetesLink, Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <HomeLink to="/">Home</HomeLink>
          <TweetesLink to="/tweets">Tweets</TweetesLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
