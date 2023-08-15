import {Link} from "react-router-dom"
export default function Nav (props){
    return(
        <div className="nav">

            <Link to="/">
                <div>
                    STOCK PRICES
                </div>
            </Link>
            <Link to="/stocks">
                <div>
                    STOCKS
                </div>
                </Link>
            <Link to = "/about">
                <div>
                    ABOUT
                </div>
            </Link>
            
        </div>
    )
}