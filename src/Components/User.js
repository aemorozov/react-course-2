import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class User extends React.Component {
    user = this.props.user
    render() {
        return (
            <div className="user" >
                <IoCloseCircleSharp className="delete-icon" />
                <IoHammerSharp className="edit-icon" />
                <h3>Name: {this.user.firstname} {this.user.lastname}</h3>
                <p>Bio: {this.user.bio}</p>
                <p style={{ fontWeight: '600' }}>Age: {this.user.age}</p>
                <b>{this.user.isHappy ? `He is happy` : `He isn't happy`}</b>
            </div>
        )
    }
}

export default User