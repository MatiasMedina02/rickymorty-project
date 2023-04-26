import './PageNotFound.css';
import { Link } from 'react-router-dom';

const stylesBtnBack = {
	backgroundColor: "#f44336", 
	color: "white",
	fontSize: "1.2rem",
	textDecoration: "none",
	padding: "1rem 2rem",
	borderRadius: "5px"
}

const PageNotFound = () => {
	return (
		<div className="PageNotFound">
			<h1>Error 404</h1>
			<p>Oops! Page not found</p>
			<div className="backToHome">
				<Link style={stylesBtnBack} to="/home">
					Go back home
				</Link>
			</div>
		</div>
	)
}

export default PageNotFound