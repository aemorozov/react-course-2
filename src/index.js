import React from "react"
import * as ReactDOMClient from "react-dom/client"

const inputClick = () => console.log('Clicked')
const mouseOver = () => console.log('Mouse Over')

const helpText = 'Help text'

export const elements = (<>
  <h1>{helpText}</h1>
  <input placeholder={helpText}
    onClick={inputClick}
    onMouseEnter={mouseOver} />
  <p>{helpText === 'Help text' ? 'yes' : 'no'}</p>
</>)

const app = ReactDOMClient.createRoot(document.getElementById("root"))
app.render(elements)