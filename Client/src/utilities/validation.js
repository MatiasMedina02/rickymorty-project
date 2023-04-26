const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPassword = /\d/;

export const validation = (userData) => {
	const errors = {}
	if(!regexEmail.test(userData.email)){
		errors.email = "Tiene que ser un email válido.";
	}
	if(!userData.email){
		errors.email = "Introduzca su Email.";
	}
	if(userData.email.length > 35){
		errors.email = "Su email no puede tener más de 35 caracteres.";
	}
	if(!regexPassword.test(userData.password)){
		errors.password = "La contraseña debe contener al menos un número.";
	}
	if(userData.password.length < 6 || userData.password.length > 10){
		errors.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
	}
	return errors;
}