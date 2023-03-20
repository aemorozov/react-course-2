import React from "react"


class AddUser extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            bio: '',
            age: 1,
            isHappy: false
        }
    }

    render() {
        return (
            <form ref={(element) => { this.myForm = element }}>
                <input placeholder="First name"
                    onChange={(event) => { this.setState({ firstname: event.target.value }) }} />
                <input placeholder="Last name"
                    onChange={(event) => { this.setState({ lastname: event.target.value }) }} />
                <textarea placeholder="Bio"
                    onChange={(event) => { this.setState({ bio: event.target.value }) }}></textarea>
                <input placeholder="Age"
                    onChange={(event) => { this.setState({ age: event.target.value }) }} />
                <label htmlFor="isHappy">Is happy?</label>
                <input type='checkbox' id="isHappy"
                    onChange={(event) => { this.setState({ isHappy: event.target.checked }) }} />
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.props.onAdd({
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy
                    })
                }
                }>Add</button>
            </form>
        )
    }
}

export default AddUser