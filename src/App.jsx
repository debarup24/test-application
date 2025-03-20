import { Routes, Route } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import MainBody from "./components/MainBody";
import RightSidebar from "./components/RightSidebar";
import AddPost from "./pages/AddPost";
import { Provider } from "react-redux";
import appStore from "./ReduxStore/appStore";
import UpdatePost from "./pages/UpdatePost";
import SidebarScreenHeightIssue from "./pages/SidebarScreenHeightIssue";
import AllTesting from "./pages/AllTesting";
import NewTest1 from "./pages/NewTest1";
import TestThree3 from "./pages/TestThree3";
import ScreenSize from "./pages/ScreenSize";
import GetElementHeight from "./pages/GetElementHeight";

function App() {
  return (
    <Provider store={appStore}>
      <div className="flex flex-row h-screen gap-3 justify-between">
        <LeftSidebar />

        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/all-testing-issue" element={<AllTesting/>} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/edit-post/:id" element={<UpdatePost />} />
          <Route path="/new-test-1" element={<NewTest1 />} />
          <Route path="/test-3" element={<TestThree3/>} />
          <Route path="/screen-size" element={<ScreenSize/>} />
          <Route path="/get-element-height" element={<GetElementHeight/>} />
          <Route path="/test-sidebar-screenHeight-change" element={<SidebarScreenHeightIssue/>} />
        </Routes>

        <RightSidebar />
      </div>
    </Provider>
  );
}

export default App;
