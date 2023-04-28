import { useState } from 'react';
import imgForm from '../../assets/img_form.png';
import './LoginForm.css';
import { validation } from '../../utilities/validation';

const LoginForm = ({ login }) => {
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
		<div className="Login">
			<div className="loginCard">
				<div className="loginHeader">
					<img src={imgForm} alt="Rick & Morty" style={{ borderRadius: "50%" }} />
				</div>
				<form onSubmit={handleSubmit}>
					<div className="formGroup">
						<label className='formLabel' htmlFor="#">Email</label>
						<input value={userData.email} onChange={handleChange} className={`formInput ${errors.email && "warning"}`} name="email" type="text" placeholder="janedoe@gmail.com" />
						{errors.email && <p className='danger'>{errors.email}</p>}
					</div>
					<div className="formGroup">
						<label className='formLabel' htmlFor="#">Password</label>
						<input value={userData.password} onChange={handleChange} className={`formInput ${errors.password && "warning"}`} name="password" type="password" placeholder="Enter your password" />
						{errors.password && <p className='danger'>{errors.password}</p>}
					</div>
					<div className="formGroup">
						<button className="formBtn isActive" type="submit">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginForm