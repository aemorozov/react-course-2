import React from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import logo from './img/logo.png'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            helpText: "Help Text",
            userData: "",
        }

        this.inputClick = this.inputClick.bind(this)
    }

    render() {
        return (
            <>
                <Header title="Header title" />
                <h1>{this.state.helpText}</h1>
                <h2>{this.state.userData}</h2>
                <input placeholder={this.state.helpText}
                    onChange={event => this.setState({ userData: event.target.value })}
                    onClick={this.inputClick}
                    onMouseEnter={this.mouseOver} />
                <p>{this.state.helpText === 'Help text' ? 'yes' : 'no'}</p>
                <Image image={logo} />
            </>
        )
    }
    inputClick() {
        this.setState({ helpText: "Changed" })
        console.log('Clicked')
    }
    mouseOver() { console.log('Mouse Over') }
}

export default App