import React from "react"
import Button from "./Button"

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                {this.props.title}
                <Button />
                <Button text="Кнопка" />
            </header>
        )
    }
}

export default Header