import EmployeeOverview from "./components/EmployeeOverview.js"


const app = {
    template: `
        <div class="header">
            <h1>Svenssons Hantverk AB</h1>
        </div>
        <employee-overview></employee-overview>`
}

const vueApp = Vue.createApp(app)
vueApp.component('employee-overview', EmployeeOverview)
vueApp.mount("#app")
