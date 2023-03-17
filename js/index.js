// ReactDOM.render(React.createElement('input', {
//     placeholder: "Help text",
//     onClick: () => {
//         console.log("Clicked")
//     },
//     onMouseEnter: () => {
//         console.log("Mouse over")
//     }
// }), document.getElementById("app"))

const inputClick = () => console.log('Clicked by JSX')
const mouseOver = () => console.log('Mouse Over by JSX')

const helpText = 'JSX Text!'

const elements = (<>
    <h1>{helpText}</h1>
    <input placeholder={helpText}
        onClick={inputClick}
        onMouseEnter={mouseOver} />
    <p>{helpText == 'JSX Text!' ? 'Yes' : 'No'}</p>
</>)

const app = document.getElementById("app")

ReactDOM.render(elements, app)