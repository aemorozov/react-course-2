import React from "react"


class AddUser extends React.Component {

    userAdd = {}

    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
        }
    }

    render() {
        return (
            <form ref={(element) => { this.myForm = element }}>
                <input placeholder="First name"
                    onChange={(event) => { this.setState({ first_name: event.target.value }) }} />
                <input placeholder="Last name"
                    onChange={(event) => { this.setState({ last_name: event.target.value }) }} />
                <input placeholder="Photo link 128x128"
                    onChange={(event) => { this.setState({ avatar: event.target.value }) }} />
                <input placeholder="Email"
                    onChange={(event) => { this.setState({ email: event.target.value }) }}></input>
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        avatar: this.state.avatar
                    }
                    if (this.props.user) this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                }
                }>Add</button>
            </form>
        )
    }
}

export default AddUser