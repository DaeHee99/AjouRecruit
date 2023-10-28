import { Routes, Route } from "react-router-dom";
import Auth from "./hoc/Auth";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import EditorPage from "./pages/EditorPage";

function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthSignupPage = Auth(SignupPage, false);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 m-0">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<AuthLandingPage />} />
          <Route path="/editor" element={<EditorPage />} />
        </Route>

        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/signup" element={<AuthSignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
