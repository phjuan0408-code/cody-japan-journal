import { ArrowUpRight } from "lucide-react";
import PrefectureMap from "../components/PrefectureMap.jsx";
import { regions } from "../data/regions.js";
export default function Home() {
 return <section className="gateway">
  <div><p className="eyebrow">A PERSONAL JOURNAL / 日本旅行紀錄</p><h1>走過的日本，<br/>留在這裡。</h1>
   <p className="gateway-description">從四國的海邊，到中部的山間。<br/>沿著地圖，重讀每一天的風景與日常。</p>
   <div className="journey-index">
    <a className="journey-link" href={regions[0].href}><span className="number">01</span><span><strong>名古屋・日本中部</strong><small>2026.05.08 — 05.16 / 9 DAYS</small></span><ArrowUpRight size={21}/></a>
    <a className="journey-link" href={regions[1].href}><span className="number">02</span><span><strong>四國・瀨戶內海</strong><small>2025.01.04 — 01.11 / 8 DAYS</small></span><ArrowUpRight size={21}/></a>
   </div>
   <figure className="gateway-photo"><img src="./images/kamikochi.webp" alt="上高地的河流與北阿爾卑斯山景"/><figcaption><span>上高地 · 日本中部</span><span>MAY 2026</span></figcaption></figure>
  </div>
  <div id="map-section" className="gateway-map"><div className="map-heading"><span>旅の足跡</span><span>JAPAN / 日本</span></div><PrefectureMap mode="japan" regions={regions}/><p className="map-caption">選一段旅程，從地圖開始。</p></div>
 </section>;
}
