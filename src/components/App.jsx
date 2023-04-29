import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import Tweets from "pages/Tweets/Tweets";
import NotFound from "pages/NotFound/NotFound";
import SharedLayout from "./SharedLayout/SharedLayout";

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
          </Route>
          <Route path="/tweets" element={<Tweets />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
