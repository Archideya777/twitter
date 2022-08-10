import { useState } from "react";
import LeftSection from "./Components/LeftSection/LeftSection";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RightSection from "./Components/RightSection/RightSection";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import Explore from "./Components/Explore/Explore";
import Notification from "./Components/Notification/Notification";
import Message from "./Components/Messages/Message";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import List from "./Components/Lists/List";
import Item from "./Components/Profile/Item/Item";
import Tweet from "./Components/Profile/Tweet/Tweet";
import Media from "./Components/Profile/Media/Media";
import Likes from "./Components/Profile/Likes/Likes";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="d-flex">
        <LeftSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="/profile/item" element={<Item />} />
            <Route path="/profile/tweet" element={<Tweet />} />
            <Route path="/profile/media" element={<Media />} />
            <Route path="/profile/likes" element={<Likes />} />
          </Route>
          <Route path="/explore" element={<Explore />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/message" element={<Message />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/lists" element={<List />} />
        </Routes>
        <RightSection />
      </main>
    </>
  );
}

export default App;
