import { HashRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
export default function App() {
 return <HashRouter><div className="journal-layout"><a href="#main-content" className="sr-only focus:not-sr-only">跳至主要內容</a><header className="journal-nav"><div className="nav-inner"><a className="journal-brand" href="./"><span className="brand-dot" aria-hidden="true"/><span><span className="brand-title">Cody 日本旅記</span><span className="brand-caption">CODY'S TRAVEL JOURNAL</span></span></a><span className="nav-note">JAPAN · 2025 — 2026</span></div></header><main id="main-content"><Home/></main><SiteFooter/></div></HashRouter>;
}
