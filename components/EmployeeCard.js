/* This component shows the picture, name and proffession of each staff memeber */
export default {
    props: {
        user: Object
    },
    template: 
        `<div class="employee-card">
            <img src="/img/user.png" :alt="user.name">
            <div>
                <span>{{ user.name}}</span>
            </div>
        </div>`
}