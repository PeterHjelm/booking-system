/* Will import both EmployeeCard and ScheduleStatus */
import EmployeeService from "../services/EmployeeService.js"

export default {
    data() {
        return {
            employees: []
        }
    },
    created() {
        EmployeeService.getUsers().then(em => this.employees = em)
    },
    template: `<div class="employee-overview" v-for="em in employees">
                    <img src="../img/user.png" alt="User imag"/>
                    <div>
                        <span class="employee-profession">{{ em.professions.join(' & ')}}</span><br>
                        <span class="employee-name">{{ em.name }}</span>
                    </div>
                </div>`
}