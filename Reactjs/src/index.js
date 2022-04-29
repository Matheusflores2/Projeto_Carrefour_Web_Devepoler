import react from "react";
import reactDom from "react-dom";
import "./style.css"


const app = () =>{
    return (
        <div className="app">
            Hello World
        </div>

    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<app />, rootElement)
