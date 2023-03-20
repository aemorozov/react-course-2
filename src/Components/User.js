import React from "react"
import AddUser from "./AddUser"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render() {
        return (
            <div className="user">
                <div className="user-flex">
                    <img className="avatar" src={this.user.avatar} />
                    <div className="names">
                        <h3>Name: {this.user.first_name} {this.user.last_name}</h3>
                        <p>email: {this.user.email}</p>
                    </div>
                    <div>
                        <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon" />
                        <IoHammerSharp onClick={() => {
                            this.setState({
                                editForm: !this.state.editForm
                            })
                        }} className="edit-icon" />
                    </div>
                </div>
                {this.state.editForm && <AddUser onAdd={this.props.onEdit} user={this.user} />}
            </div>
        )
    }
}

export default User