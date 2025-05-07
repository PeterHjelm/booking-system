/* Getting data of all staff members */
const UserService = {
    async getUsers() {
        const resp = await fetch("https://yrgo-web-services.netlify.app/bookings")
        if(resp.ok) {
            const data = await resp.json()
            return data
        }
    }
}
Object.freeze(UserService)

export default UserService