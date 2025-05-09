import { App } from 'vue'
import Select from './Select.vue'

Select.install = (app: App) => {
    app.component('Select', Select)
}

export default Select
export { Select } 