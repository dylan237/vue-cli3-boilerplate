import Vue from 'vue'

/**
 * 首字母大寫
 * @param str 字串
 * @example heheHaha
 * @return {string} HeheHaha
 */
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 對符合'xx/xx.vue'格式的元件取元件名
 * @param str fileName
 * @example abc/bcd/def/basicTable.vue
 * @return {string} BasicTable
 */
function validateFileName(str) {
  return /^\S+\.vue$/.test(str) &&
    str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
}

// require.context參數：要搜尋的檔案夾目錄, 是否還應該搜尋它的子目錄, 以及一個對應檔案的正則表達式
const requireComponent = require.context('./', true, /\.vue$/)

// 找到元件檔案夾下以.vue命名的檔案，如果檔案名為index，那麽取元件中的name作為註冊的元件名
requireComponent.keys().forEach(filePath => {
  const componentConfig = requireComponent(filePath)
  const fileName = validateFileName(filePath)
  const componentName = fileName.toLowerCase() === 'index'
    ? capitalizeFirstLetter(componentConfig.default.name)
    : fileName
  Vue.component(componentName, componentConfig.default || componentConfig)
})
