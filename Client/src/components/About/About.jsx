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
				<h1 className='headerAbout-titulo'>Welcome to Matías Medina's website
					<span>
						<TypeAnimation
							sequence={["FrontEnd Developer", 3000, "BackEnd Developer"]}
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
									<a target='_blank' href="https://www.linkedin.com/in/matías-medina-844181242">
										<img src={LinkedinLogo} alt="Logo Linkedin" />
									</a>
								</li>
								<li>
									<a target='_blank' href="https://www.youtube.com/@MatUDev-1806">
										<img src={YoutubeLogo} alt="Logo Linkedin" />
									</a>
								</li>
								<li>
									<a target='_blank' href="https://github.com/MatiasMedina02">
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
					<p className='headerAbout-text'>Hello! &#9996; My name is Matías Medina and I'm a 20 year old FrontEnd developer. Although I got into programming less than a year ago, I am passionate about the world of technology and web development.</p>
				</div>
			</header>
			<main className='mainAbout'>
				<section className='sectionAbout'>
					<h2 className='sectionAbout-titulo'>Mission</h2>
					<p className='sectionAbout-mision'>My mission as a FrontEnd developer is to create beautiful, interactive and accessible websites. I pride myself in providing my clients with creative and customized solutions that allow them to achieve their business goals.</p>
				</section>
				<section className='sectionAbout'>
					<h2 className='sectionAbout-titulo'>Technologies</h2>
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
					<h2 className='sectionAbout-titulo form-contact__title'>Contact me =&#41;</h2>
					<p className='form-contact__description'>If you are looking for a reliable and passionate FrontEnd developer, don't hesitate to contact me.</p>
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