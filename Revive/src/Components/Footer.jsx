import { Link } from "react-router-dom"

function Footer() {

    const date = new Date(Year)

    return(
        <div className="footer">
            <div className="upper-footer">
                <div className="left-upper-footer">
                    <div className="company-identity">
                        <Link>
                            <Img alt="Company Logo"/>
                            <h1 className="company-name">Company Name</h1>
                            <p className="company-slogan">Some jibarish</p>
                        </Link>
                    </div>
                </div>

                <div className="right-upper-footer">
                    <Link>Shop</Link>
                    <Link>Careers</Link>
                    <Link>Affiliation</Link>
                    
                </div>
            </div>
            <div className="lower-footer">
                <div className="left-lower-footer">
                    <p>&copy; {date} Company Name </p>
                </div>

                <div className="right-lower-footer">
                    <Link>Policies</Link>
                    <Link>Terms and Conditions</Link>
                </div>
            </div>
        </div>
    )
}