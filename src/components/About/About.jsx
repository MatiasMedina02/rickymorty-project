import { TypeAnimation } from 'react-type-animation';
import './About.css';
import { techs } from "../../utilities/data";

import logoPerfil from '../../assets/logo_perfil.png';
import YoutubeLogo from "../../assets/youtube.png";
import LinkedinLogo from "../../assets/linkedin.png";
import GithubLogo from "../../assets/github.png";

const About = () => {
	return (
		<div className="About">
			<header className='headerAbout'>
				<h1 className='headerAbout-titulo'>Bienvenidos a la página de Matías Medina 
					<span>
						<TypeAnimation
							sequence={["Desarrollador FrontEnd", 3000, "Desarrollador BackEnd"]}
							cursor={true}
							speed={10}
							repeat={Infinity}
						/>
					</span>
				</h1>
				<div className="headerAbout-info">
					<div className="headerAbout-profile">
						<div className="profile-card">
							<div className="profile-card__img">
								<img src={logoPerfil} alt="Perfil" width="250px"/>
							</div>
							<ul className="profile-card__social-media">
								<li>
									<a href="https://www.linkedin.com/in/matías-medina-844181242">
										<img src={LinkedinLogo} alt="Logo Linkedin" />
									</a>
								</li>
								<li>
									<a href="https://www.youtube.com/@MatUDev-1806">
										<img src={YoutubeLogo} alt="Logo Linkedin" />
									</a>
								</li>
								<li>
									<a href="https://github.com/MatiasMedina02">
										<img src={GithubLogo} alt="Logo Github" />
									</a>
								</li>
							</ul>
							<div className="profile-card__info">
								<p className="profile-card__name">Matías Medina</p>
								<p className="profile-card__work">Web Developer</p>
							</div>
						</div>
					</div>
					<p>¡Hola!&#9996; Me llamo Matías Medina y soy un desarrollador FrontEnd de 20 años. A pesar de que hace menos de un año me introduje en la programación, estoy apasionado por el mundo de la tecnología y el desarrollo web.</p>
				</div>
			</header>
			<main className='mainAbout'>
				<section className='sectionAbout'>
					<h2 className='sectionAbout-titulo'>Misión</h2>
					<p className='sectionAbout-mision'>Mi misión como desarrollador FrontEnd es crear sitios web hermosos, interactivos y accesibles. Me enorgullezco de ofrecer a mis clientes soluciones creativas y personalizadas que les permitan alcanzar sus objetivos de negocio.</p>
				</section>
				<section className='sectionAbout'>
					<h2 className='sectionAbout-titulo'>Tecnologías</h2>
					<div className="sectionAbout-techs">
						{techs.map(tech => (
							<div className="firstAnimation" key={tech.id}>
								<div className="secondAnimation">
									<div className="cardTech">
										<h2 className='cardTech-title'>{tech.name}</h2>
										<img src={tech.image} alt={tech.name} width="100%" />
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
				<form className='sectionAbout form-contact'>
					<h2 className='sectionAbout-titulo form-contact__title'>Contáctame</h2>
					<p className='form-contact__description'>Si estás buscando un desarrollador FrontEnd confiable y apasionado, no dudes en contactarme.</p>
					<div className="form-contact-email">
						<input className='form-contact-email__input' type="text" placeholder='Your Email...' name='email' />
						<textarea className='form-contact-email__message' style={{ width: "300px", height:"200px", resize: "none" }} name="message" placeholder='Your message...'></textarea>
						<button className='form-contact-email__btn' type='submit'>Send</button>
					</div>
				</form>
			</main>
		</div>
	)
}

export default About