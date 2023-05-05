import { useState } from "react";
import imgForm from "../../assets/img_form.png";
import "./RegisterForm.css";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterForm = () => {
	const [isChecked, setIsChecked] = useState(true);
	return (
		<div className="RegisterForm">
			<div className="registerCard">
				<div className="registerHeader">
					<img className='registerHeaderImage' src={imgForm} alt="Rick & Morty" />
				</div>
				<form className="formRegister">
					<div className="formGroupRegistrate">
						<label className="labelRegister" htmlFor="name">Full Name</label>
						<input className="inputRegister" type="text" name="name" placeholder="Enter your name" />
					</div>
					<div className="formGroupRegistrate">
						<label className="labelRegister" htmlFor="email">Email</label>
						<input className="inputRegister" type="text" name="email" placeholder="Enter your email" />
					</div>
					<div className="formGroupRegistrate">
						<label className="labelRegister" htmlFor="password">Password</label>
						<input className="inputRegister" type="password" name="password" placeholder="Password" />
					</div>
					<div className="formGroupRegistrate">
						<label className="labelRegister" htmlFor="confirm-password">Confirm Password</label>
						<input className="inputRegister" type="password" name="confirm-password" placeholder="Repeat your password" />
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