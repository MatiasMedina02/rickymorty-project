import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const linkStyle = {
	width: "100%",
	height: "100%",
	margin: "0 auto",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "0",
	textDecoration: "none",
	color: "#004b23",
}

const linkLogoutStyle = {
	textDecoration: "none",
	color: "#c1121f",
	display: "flex",
	alignItems: "center",
	gap: "4px"
}

const Nav = ({ onSearch, logout }) => {
	return (
		<div className="Nav">
			<div className="NavSearch">
				<SearchBar onSearch={onSearch} />
			</div>
			<div className="NavButtons">
				<button type='button' className='navBtn'>
					<NavLink style={linkStyle} to="/about">About</NavLink>
				</button>
				<button type='button' className='navBtn'>
					<NavLink style={linkStyle} to="/home">Home</NavLink>
				</button>
				<button onClick={logout} type='button' className='logoutBtn'>
					<NavLink style={linkLogoutStyle} href='/home'>
						<i className="fa-solid fa-arrow-right-from-bracket" style={{ fontSize: "25px" }}></i>
						<span>Logout</span>
					</NavLink>
				</button>
			</div>
		</div>
	)
}

export default Nav