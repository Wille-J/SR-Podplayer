import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"
import "./assets/style/base.scss" // import css
import "bootstrap" // import js

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount("#app")
