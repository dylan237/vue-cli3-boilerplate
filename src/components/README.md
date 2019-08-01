# 注意事項

- 此目錄內皆為全域元件，透過 `@/components/index.js` 自動註冊。
- 內部主元件目錄的命名規則為**大駝峰式**，且內部主元件檔案命名為 `index.vue`
- 主元件目錄內部的 components 用來放置主元件內的小元件，命名規則參照第上一點，另外小元件也一樣會被自動註冊至全域
- 重複利用的資料可以利用 `utilities/extend/index.js` 來新增 / 重複的css則透過 `utilities/scss/index.scss`，接著透過 import 來放入元件內