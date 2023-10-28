import { Routes, Route } from "react-router-dom";
import Auth from "./hoc/Auth";
import MainLayout from "./components/MainLayout";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import EditorPage from "./pages/EditorPage";
import BoardPage from "./pages/BoardPage";

function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthSignupPage = Auth(SignupPage, false);
  const AuthEditorPage = Auth(EditorPage, true);
  const AuthBoardPage = Auth(BoardPage, true);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 m-0">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<AuthLandingPage />} />
          <Route path="/editor" element={<AuthEditorPage />} />
          <Route path="/board" element={<AuthBoardPage />} />
        </Route>

        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/signup" element={<AuthSignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
