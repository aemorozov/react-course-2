import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"

class App extends React.Component {

    render() {
        return (
            <>
                <Header title="Список пользователей" />
                <main>
                    <Users />
                </main>
                <aside></aside>
            </>
        )
    }
}

export default App