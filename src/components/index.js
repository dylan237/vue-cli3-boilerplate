import Vue from 'vue'

/**
 * 對符合'xx/xx.vue'格式的元件取元件名
 * @param str fileName
 * @example @/components/DatePicker.vue
 * @return {string} DatePicker
 */
function validateFileName(str) {
  return /^\S+\.vue$/.test(str) &&
    str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
}

/**
 * 首字母改為大寫
 * @param str 字串
 * @example datePicker
 * @return {string} DatePicker
 */
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// require.context參數：要搜尋的資料夾, 是否搜尋它的子資料夾, 一個對應檔案的正則表達式
const requireComponent = require.context('./', true, /\.vue$/)

// 找到元件檔案夾下以.vue命名的檔案，如果檔案名為index，則取元件中的name作為註冊的元件名
requireComponent.keys().forEach(filePath => {
  const componentConfig = requireComponent(filePath)
  const fileName = validateFileName(filePath)
  const componentName = fileName.toLowerCase() === 'index'
    ? capitalizeFirstLetter(componentConfig.default.name)
    : fileName
  Vue.component(componentName, componentConfig.default || componentConfig)
})