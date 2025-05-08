/* Will import both EmployeeCard and ScheduleStatus */

export default {
    data() {
        return {
            employees: []
        }
    },
    methods: {
         async getFirstEmployee() {
            const resp = await fetch("https://yrgo-web-services.netlify.app/bookings")
            if(resp.ok) {
                const data = await resp.json()
                console.log(data)
                this.employees = data
            }
        }
    },
    mounted() {
        this.getFirstEmployee()
    },
    template: `<div class="employee-overview" v-for="em in employees">
                    <img src="../img/user.png" alt="User imag"/>
                    <div>
                        <span class="employee-profession">{{ em.professions.join(' & ')}}</span><br>
                        <span class="employee-name">{{ em.name }}</span>
                    </div>
                </div>`
}