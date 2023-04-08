// Arreglar estilos cuando esta activo

import { useState } from 'react';
import imgForm from '../../assets/img_form.png';
import './LoginForm.css';
import { validation } from '../../utilities/validation';

const LoginForm = ({ login }) => {
	const [disabled, setDisabled] = useState(false);
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({
		email: "",
		password: ""
	});

	const handleChange = event => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
		setErrors(
			validation({
				...userData,
				[event.target.name]: event.target.value,
			})
		)
	};

	const handleSubmit = event => {
		event.preventDefault();
		login(userData);
	};

	return (
		<div className="loginCard">
			<div className="loginHeader">
				<img src={imgForm} alt="Rick & Morty" style={{ borderRadius: "50%" }} />
			</div>
			<form onSubmit={handleSubmit}>
				<div className="formGroup">
					<label className='formLabel' htmlFor="#">Email</label>
					<input value={userData.email} onChange={handleChange} className={`formInput ${errors.email && "warning"}`} name="email" type="text" placeholder="Email" />
					<p className='danger'>{errors.email}</p>
				</div>
				<div className="formGroup">
					<label className='formLabel' htmlFor="#">Password</label>
					<input value={userData.password} onChange={handleChange} className={`formInput ${errors.password && "warning"}`} name="password" type="password" placeholder="Password" />
					<p className='danger'>{errors.password}</p>
				</div>
				<div className="formGroup">
					<button className={`formBtn ${!disabled && "isActive"}`} type="submit" disabled={disabled}>
						Login
					</button>
				</div>
			</form>
		</div>
	)
}

export default LoginForm