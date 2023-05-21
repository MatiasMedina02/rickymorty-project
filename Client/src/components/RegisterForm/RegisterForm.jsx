import { useState } from "react";
import imgForm from "../../assets/img_form.png";
import "./RegisterForm.css";
import { FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { validationRegister } from "../../utilities/validationRegister";

const URL_LOGIN = "http://localhost:3001/rickandmorty/login";

const RegisterForm = () => {
	const [isChecked, setIsChecked] = useState(true);
	const [userRegister, setUserRegister] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [errorsRegister, setErrorsRegister] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: ""
	})
	const navigate = useNavigate();
	
	const handleChangeRegister = event => {
		const { value, name } = event.target;
		setUserRegister({
			...userRegister,
			[name]: value
		})
		setErrorsRegister(validationRegister({
			...userRegister,
			[name]: value
		}))
	}

	const existingErrors = Object.values(errorsRegister).some(value => value.trim().length !== 0);
	const handleRegister = async event => {
		event.preventDefault();
		try {
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
			await axios.post(URL_LOGIN, {
				email: userRegister.email,
				password: userRegister.password
			});
			setUserRegister({
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="RegisterForm">
			<div className="registerCard" style={{ height: existingErrors ? "880px" : "800px" }}>
				<div className="registerHeader">
					<img className='registerHeaderImage' src={imgForm} alt="Rick & Morty" />
				</div>
				<form onSubmit={handleRegister} className="formRegister">
					<div className="formGroupRegistrate">
						<label className="labelRegister" htmlFor="name">Full Name</label>
						<input value={userRegister.name} onChange={handleChangeRegister} className="inputRegister" type="text" name="name" placeholder="Enter your name" />
						{errorsRegister.name && <p className='danger'>{errorsRegister.name}</p>}
					</div>
					<div className="formGroupRegistrate">
						<label className="labelRegister" htmlFor="email">Email</label>
						<input value={userRegister.email} onChange={handleChangeRegister} className="inputRegister" type="text" name="email" placeholder="Enter your email" />
						{errorsRegister.email && <p className='danger'>{errorsRegister.email}</p>}
					</div>
					<div className="formGroupRegistrate">
						<label className="labelRegister" htmlFor="password">Password</label>
						<input value={userRegister.password} onChange={handleChangeRegister} className="inputRegister" type="password" name="password" placeholder="Password" />
						{errorsRegister.password && <p className='danger'>{errorsRegister.password}</p>}
					</div>
					<div className="formGroupRegistrate">
						<label className="labelRegister" htmlFor="confirmPassword">Confirm Password</label>
						<input value={userRegister.confirmPassword} onChange={handleChangeRegister} className="inputRegister" type="password" name="confirmPassword" placeholder="Repeat your password" />
						{errorsRegister.confirmPassword && <p className='danger'>{errorsRegister.confirmPassword}</p>}
					</div>
					<div className="formGroupTerms">
						<input className="inputTerms" type="checkbox" name="terms" checked={isChecked ? "checked" : ""} onChange={() => setIsChecked(!isChecked)} />							
						<label className="labelTerms" htmlFor="terms">
							I do accept the <a href="/register">Terms and Conditions</a> of your site.
						</label>
					</div>
					<div className="formGroupRegistrate">
						<button className="registerBtn isActive" type="submit">
								Register Now
						</button>
					</div>
					<div className="formGroupRegister">
						<p>Already registered?</p>
						<Link className='registerLink' to="/">
							<FaSignInAlt /> Sign In
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default RegisterForm