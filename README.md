# 第六週作業修改重交

## Node.js 版本

- 專案的 Node.js 版本需為 v16 以上
- 查看自己版本指令：`node -v`

## 指令列表

- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm ru deploy` - 自動化部署

## 資料夾結構

- assets # 靜態資源放置處

  - images # 圖片放置處
  - scss # SCSS 的樣式放置處

- layout # ejs 模板放置處
- pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案

### 注意事項

- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore

## 開發模式的監聽

vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能

## 助教建議

### 整體

- 頂部搜尋欄位 input type 可改為 search
- 頂部選單區塊可加上背景顏色，避免滾動到下方時內容被遮蓋
- 每個頁面一定會有一個 h1 用來標示網頁中最重要的資訊，可在 logo 加上
- 同性質的列表區塊都可改用 ul > li 結構
- tag 標籤也是可點擊元素，建議加上 a 或 button

### 首頁

- 「大家都在看」區塊可嘗試加上 tab 切換分頁功能
- 「酒精路跑地圖」下方內容偏向文章連結，建議加上 a 標籤，另外左側列表需依設計稿加上 active 狀態
- 「Vivre 給你意想不到的生活風格提案」區塊的內容都可加上 a 標籤
- 目前頁面在 992px ~ 1016px、768px ~ 776px、596px 以下皆會產生 X 軸，可再調整看看

### 關於我們

- 「大事記」區塊的內容有時序關係，可改用 ol li 有序列表
