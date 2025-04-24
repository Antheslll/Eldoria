import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/header";
import "./styles/index.css";
import WorldPage from "./pages/worldpage";
import StoryPage from "./pages/storypage";
import CharacterPage from "./pages/characterpage";
function AppContent() {
  const location = useLocation();

  return (
    <div className="grid grid-rows-[auto,1fr, auto]">
      <Header key={location.pathname} page={location.pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worldpage" element={<WorldPage />} />
        <Route path="/storypage" element={<StoryPage />} />
        <Route path="/characterpage" element={<CharacterPage />} />
      </Routes>
      <Footer page={location.pathname} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
