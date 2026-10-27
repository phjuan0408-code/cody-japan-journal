# Cody 旅記：世界與越南入口

## 頁面

- `#/`：世界地圖
- `#/japan`：原日本入口，中部與四國維持獨立網站
- `#/vietnam`：越南入口
- `#/vietnam/phu-quoc`：富國島五日總覽
- `#/vietnam/phu-quoc/day/1` 至 `/5`：每日行程

## 補照片

照片放入 `public/images/phu-quoc/`。`src/data/phuQuoc.js` 為單一資料來源：

- `places.<id>.images`：景點照片，所有使用該景點的頁面共用。
- `days[].images`：該天頁首照片。
- 格式：`{ src: './images/phu-quoc/example.webp', alt: '照片的具體描述' }`。
- 空陣列顯示照片預留區，加入照片後自動替換，可放多張。

原始 PDF 僅作為本地資料來源，未放入公開網站。頁面保留行程日期、活動、航班、餐食及住宿；不收錄領隊電話或旅客團體資料。旅遊注意事項與法規未作為現行資訊轉載。

## 地圖

世界入口使用 `src/data/world-countries.json`（world-atlas 2 / Natural Earth 110m）。越南頁使用 `public/maps/vietnam-10m.json`，由 https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json 擷取越南及周邊國家，保留精細海岸線與島嶼。10m 指 1:10,000,000 製圖比例，並非十公尺精度。越南資料僅在越南地圖顯示時從網站自身載入，不增加世界入口的 JavaScript 包體積。

## 本地預覽與部署

此版為本地草稿，未推送或發布。現有 repo URL 保留，畫面品牌改為 Cody 旅記。
正式發布此版時，兩個日本區域站的「日本地圖」連結應改為 `../cody-japan-journal/#/japan`，以直接返回日本層級。
