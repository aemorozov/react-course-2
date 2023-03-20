import React from "react"
import AddUser from "./components/AddUser"
import Header from "./components/Header"
import Users from "./components/Users"

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Bob',
                    lastname: 'Marley',
                    bio: 'Magna sunt deserunt id incididunt occaecat tempor pariatur nulla ullamco labore magna.',
                    age: 40,
                    isHappy: true
                },
                {
                    id: 2,
                    firstname: 'John',
                    lastname: 'Doe',
                    bio: 'Esse consequat enim laboris ex exercitation culpa labore Lorem qui occaecat aliqua.',
                    age: 42,
                    isHappy: false
                }
            ]
        }
        this.addUser = this.addUser.bind(this)
    }

    render() {
        return (
            <>
                <Header title="Список пользователей" />
                <main>
                    <Users users={this.state.users} />
                </main>
                <aside>
                    <AddUser onAdd={this.addUser} />
                </aside>
            </>
        )
    }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, { id, ...user }] })
    }
}

export default App