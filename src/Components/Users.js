import React from "react"
import User from "./User"

class Users extends React.Component {

    render() {
        if (this.props.users && this.props.users.length > 0) {
            return (
                <>
                    {this.props.users.map((user) => <User key={user.id} user={user} />)}
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