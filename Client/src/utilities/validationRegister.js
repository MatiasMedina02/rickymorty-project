const regexName = /[0-9!@#$%^&*(),.?":{}|<>]/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPassword = /\d/;

export const validationRegister = userRegister => {
	const errors = {};
	if(!userRegister.name){
		errors.name = "Introduzca su nombre completo.";
	}
	if(regexName.test(userRegister.name)){
		errors.name = "El nombre no puede tener números ni caracteres especiales";
	}
	if(!regexEmail.test(userRegister.email)){
		errors.email = "Tiene que ser un email válido.";
	}
	if(!userRegister.email){
		errors.email = "Introduzca su Email.";
	}
	if(userRegister.email.length > 35){
		errors.email = "Su email no puede tener más de 35 caracteres.";
	}
	if(!regexPassword.test(userRegister.password)){
		errors.password = "La contraseña debe contener al menos un número.";
	}
	if(userRegister.password.length < 6 || userRegister.password.length > 10){
		errors.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
	}
	if(userRegister.password !== userRegister.confirmPassword){
		errors.confirmPassword = "Debe ser igual a la contraseña puesta anteriormente."
	}
	return errors;
}