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
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }

    render() {
        return (
            <>
                <Header title="Список пользователей" />
                <main>
                    <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser} />
                </main>
                <aside>
                    <AddUser onAdd={this.addUser} />
                </aside>
            </>
        )
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((element) => element.id !== id)
        })
    }

    editUser(user) {
        let allUsers = this.state.users
        allUsers[user.id - 1] = user

        this.setState({ users: [] }, () => {
            this.setState({ users: [...allUsers] })
        })
    }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, { id, ...user }] })
    }
}

export default App