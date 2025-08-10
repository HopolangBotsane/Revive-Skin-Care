import { Link } from "react-router-dom"

function Nopage(){
    return (
        <div className="error-page">
            <h1>Error</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Nopage