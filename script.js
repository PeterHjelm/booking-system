const app = {
    data() {
        return {
            name: "",
            professions: [],
            bookings: []
        }
    },
    methods: {
         async getFirstEmployee() {
            const resp = await fetch("https://yrgo-web-services.netlify.app/bookings")
            console.log(resp)
            if(resp.ok) {
                const data = await resp.json()
                console.log(data)
                this.name = data[0].name
                this.professions = data[0].professions
                this.bookings = data[0].bookings
            }
        }
    },
    
    created() {
        
    },
    mounted() {

    },
    template: `<div class="employee-list"> 
        <input type="button" value="Name" @click="getFirstEmployee">
        <div>
            <p>{{ name }}</p>
            <p v-for="prof in professions">{{ prof }}</p>
        </div>
        <p v-for="book in bookings">{{ book }}</p>
        </div>`
    
}

Vue.createApp(app).mount("#app")