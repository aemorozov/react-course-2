import React from "react"

class Users extends React.Component {

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
    }

    render() {
        if (this.state.users && this.state.users.length > 0) {
            return (
                <>
                    {this.state.users.map((user) => (
                        <div key={user.id} className="user" >
                            <h3>Name: {user.firstname} {user.lastname}</h3>
                            <p>Bio: {user.bio}</p>
                            <p style={{ fontWeight: '600' }}>Age: {user.age}</p>
                            <b>{user.isHappy ? `He is happy` : `He isn't happy`}</b>
                        </div>
                    ))}
                </>
            )
        } else {
            return (
                <div className="user" >
                    <h3>Пользователей нет</h3>
                </div>
            )
        }

    }
}

export default Users