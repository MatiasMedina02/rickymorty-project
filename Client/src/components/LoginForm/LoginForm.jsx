import { useState } from 'react';
import imgForm from '../../assets/img_form.png';
import './LoginForm.css';
import { validation } from '../../utilities/validation';
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const LoginForm = ({ login }) => {
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({
		email: "",
		password: ""
	});
	const [showPass, setShowPass] = useState(false);

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
		const existingErrors = Object.values(errors).some(value => value.trim().length !== 0);
		if (existingErrors) {
			Swal.fire({
				title: "Error",
				text: '¡Required fields are missing!',
				icon: "error",
				confirmButtonText: "Back",
				confirmButtonColor: "#ef233c",
				timer: 4000
			});
			return;
		}
		login(userData);
	};

	return (
		<div className="Login">
			<div className={`${errors.password || errors.email ? "loginCardErrors" : "loginCard"}`}>
				<div className="loginHeader">
					<img className='loginHeaderImage' src={imgForm} alt="Rick & Morty" />
				</div>
				<form onSubmit={handleSubmit}>
					<div className="formGroup">
						<label className='formLabel' htmlFor="email">Email</label>
						<input value={userData.email} onChange={handleChange} className={`formInput ${errors.email && "warning"}`} name="email" maxLength="30" type="text" placeholder="janedoe@gmail.com" />
						{errors.email && <p className='danger'>{errors.email}</p>}
					</div>
					<div className="formGroup">
						<label className='formLabel' htmlFor="password">Password</label>
						<div className="formGroupInput">
							<input value={userData.password} onChange={handleChange} className={`formInput ${errors.password && "warning"}`} name="password" maxLength="30" type={showPass ? "text" : "password"} placeholder="Enter your password" />
							<div className={errors.email && errors.password ? 'inputBtnErrors' : 'inputBtn'} onClick={() => setShowPass(!showPass)}>
								{showPass ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
							</div>
						</div>
						{errors.password && <p className='danger'>{errors.password}</p>}
					</div>
					<div className="formGroup">
						<button className="formBtn isActive" type="submit">
							Login
						</button>
					</div>
					<div className="formGroupRegister">
						<p>Not registered yet?</p>
						<Link className='registerLink' to="/register">
							<FaSignInAlt /> Sign Up
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginForm