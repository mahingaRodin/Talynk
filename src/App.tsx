import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserManagement from "./components/user/UserManagment";
import VideoManagement from "./components/video/VideoManagment";
import Approvers from "./components/Approver/Approver";
import Home from "./components/overview/Home";
import Ahome from "./Approvers Portal/Home";
import Landing from "./Landing";
import User from "./Approvers Portal/user";
import Video from "./Approvers Portal/video";
import "./App.css";
import { LoginExample } from "./components/examples";
import SignupPage from "./components/examples/signup";
import HomePage from "./user_portal/pages/HomePage";
import Layout from "./user_portal/components/layout";
import UploadPage from "./user_portal/pages/UploadPage";
import ExplorePage from "./user_portal/pages/ExplorePage";
import ProfilePage from "./user_portal/pages/ProfilePage";
import SearchPage from "./user_portal/pages/SearchPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home1" element={<Home />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/video-management" element={<VideoManagement />} />
        <Route path="/approvers" element={<Approvers />} />
        <Route path="/home" element={<Ahome />} />
        <Route path="/user" element={<User />} />
        <Route path="/video" element={<Video />} />

        {/* Example routes */}
        <Route path="/examples/login" element={<LoginExample />} />
        <Route path="/examples/signup" element={<SignupPage />} />

        {/* Protected User Portal Routes */}
        <Route
          path="/user-portal"
          element={
            <ProtectedRoute>
              <Layout>
                <HomePage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-portal/explore"
          element={
            <ProtectedRoute>
              <Layout>
                <ExplorePage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-portal/upload"
          element={
            <ProtectedRoute>
              <Layout>
                <UploadPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-portal/profile"
          element={
            <ProtectedRoute>
              <Layout>
                <ProfilePage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-portal/search"
          element={
            <ProtectedRoute>
              <Layout>
                <SearchPage />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
