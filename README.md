# Cody 日本旅記

日本旅行的共同入口，從地圖前往中部與四國旅記。

## 三站入口

- [Cody 日本旅記](https://phjuan0408-code.github.io/cody-japan-journal/)
- [Cody 中部旅記](https://phjuan0408-code.github.io/cody-chubu-journal/)
- [Cody 四國旅記](https://phjuan0408-code.github.io/cody-shikoku-journal/)

## 開發與建置

需要 Node.js 20。

```sh
npm ci
npm run dev
npm run build
```

建置輸出為 `dist/`。本專案使用 HashRouter，保留原有內容頁路徑。

## 發布

GitHub Pages 設定選擇 **GitHub Actions**。推送至 `main` 後，`deploy-pages.yml` 會建置並發布。跨站連結指向同一帳號下的三個相鄰 repo 路徑。

這是從已確認的本地新版重建的獨立專案，保留照片與旅行內容。新遠端尚待建立及首次上傳。
