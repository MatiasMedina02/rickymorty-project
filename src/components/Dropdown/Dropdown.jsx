import { useState } from "react"
import "./Dropdown.css";
import { options } from "../../utilities/options";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="Dropdown">
			<button className="Dropdown-btn" type="button" onClick={() => setOpen(!open)}>
				{!open ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
			</button>
			{open && (
				<div className="Dropdown-content">
					{options.map(option => (
						<div className="Dropdown-item" key={option.id}>
							<NavLink className="Dropdown-item__link" to={option.url}>{option.name}</NavLink>
						</div>
					))}
					<div className="Dropdown-item">
						<NavLink className="Dropdown-item__logout" to="/home">
							<i className="fa-solid fa-arrow-right-from-bracket"></i>
							<span>Logout</span>
						</NavLink>
					</div>
				</div>
			)}
		</div>
	)
}

export default Dropdown