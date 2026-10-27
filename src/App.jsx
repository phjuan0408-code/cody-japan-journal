import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import World from './pages/World.jsx';
import Vietnam from './pages/Vietnam.jsx';
import PhuQuoc, { DayDetail } from './pages/PhuQuoc.jsx';
import Home from "./pages/Home.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
export default function App() {
 return <HashRouter><PageEffects/><div className="journal-layout"><a href="#main-content" onClick={e=>{e.preventDefault();document.getElementById('main-content')?.focus()}} className="sr-only focus:not-sr-only">跳至主要內容</a><header className="journal-nav"><div className="nav-inner"><Link className="journal-brand" to="/"><span className="brand-dot" aria-hidden="true"/><span><span className="brand-title">Cody 旅記</span><span className="brand-caption">CODY'S TRAVEL JOURNAL</span></span></Link><nav className="atlas-nav" aria-label="主要導覽"><Link to="/">世界地圖</Link><Link to="/japan">日本</Link><Link to="/vietnam">越南</Link></nav></div></header><main id="main-content" tabIndex={-1}><Routes><Route path="/" element={<World/>}/><Route path="/japan" element={<Home/>}/><Route path="/vietnam" element={<Vietnam/>}/><Route path="/vietnam/phu-quoc" element={<PhuQuoc/>}/><Route path="/vietnam/phu-quoc/day/:dayId" element={<DayDetail/>}/><Route path="*" element={<section className="page-shell"><h1>找不到這一頁</h1><Link to="/">回到世界地圖</Link></section>}/></Routes></main><SiteFooter/></div></HashRouter>;
}
function PageEffects(){const {pathname}=useLocation();useEffect(()=>{document.documentElement.dataset.travelTheme=pathname.startsWith('/vietnam')?'vietnam':'default';window.scrollTo(0,0);document.title=(pathname.includes('phu-quoc')?'富國島':pathname==='/vietnam'?'越南':pathname==='/japan'?'日本':'世界地圖')+'｜Cody 旅記';},[pathname]);return null}
