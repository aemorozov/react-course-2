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
            <div className="user" >
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon" />
                <IoHammerSharp onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className="edit-icon" />
                <h3>Name: {this.user.firstname} {this.user.lastname}</h3>
                <p>Bio: {this.user.bio}</p>
                <p style={{ fontWeight: '600' }}>Age: {this.user.age}</p>
                <b>{this.user.isHappy ? `He is happy` : `He isn't happy`}</b>

                {this.state.editForm && <AddUser onAdd={this.props.onEdit} user={this.user} />}
            </div>
        )
    }
}

export default User