import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { linkStyle, linkLogoutStyle } from '../../utilities/NavLinkStyles';
import MediaQuery from 'react-responsive';
import Dropdown from '../Dropdown/Dropdown';
import { options } from '../../utilities/options';

const Nav = ({ onSearch, logout }) => {
	return (
		<div className="Nav">
			<div className="NavSearch">
				<SearchBar onSearch={onSearch} />
			</div>
			<MediaQuery maxWidth="768px">
				<Dropdown logout={logout} />
			</MediaQuery>
			<MediaQuery minWidth="769px">
				<div className="NavButtons">
					{options.map(option => (
							<button type='button' className='navBtn' key={option.id}>
								<NavLink style={linkStyle} to={option.url}>{option.name}</NavLink>
							</button>
						))}
					<button onClick={logout} type='button' className='logoutBtn'>
						<NavLink style={linkLogoutStyle} to="/home">
							<i className="fa-solid fa-arrow-right-from-bracket" style={{ fontSize: "25px" }}></i>
							<span>Logout</span>
						</NavLink>
					</button>
				</div>
			</MediaQuery>
		</div>
	)
}

export default Nav