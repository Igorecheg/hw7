import ReactDOM from "react-dom";
import { App } from "./app";


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<App name='dangeon master'/>);