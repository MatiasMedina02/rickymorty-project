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
	color: "#fff",
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
						<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="35" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<line x1="5" y1="12" x2="19" y2="12" />
							<line x1="5" y1="12" x2="11" y2="18" />
							<line x1="5" y1="12" x2="11" y2="6" />
						</svg>
						<span>Logout</span>
					</NavLink>
				</button>
			</div>
		</div>
	)
}

export default Nav