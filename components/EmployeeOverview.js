/* Will import both EmployeeCard and ScheduleStatus */
import UserService from "../services/UserService.js";
/* import EmployeeCard from "./EmployeeCard.js"; */

export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        UserService.getUsers().then(u => this.users = u)
    }/* ,
    components: {
        employeeCard: EmployeeCard
    } */,
    template: `<div class="employee-overview">
                    <p> {{ users[0] }}<p>
                </div>`
}