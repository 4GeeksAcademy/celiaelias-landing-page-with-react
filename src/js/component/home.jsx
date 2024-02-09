import React from "react";
import cardImage from "../../img/500x325.png";
import PropTypes from 'prop-types';

// Jumbotron

const Jumbotron = (props) => {
	return (
		<div >
			<div className="text-start">
				<div className="alert alert-secondary" role="alert">
					<h1 className="text-start mt-5">{props.welcome}</h1>
					<p>{props.description}
					</p>
					<a href="#" className="btn btn-primary">
						Call to action!
					</a>
				</div>
			</div>
		</div>
	);
};

Jumbotron.proptypes = {
	welcome: PropTypes.string,
	description: PropTypes.string,
}

// Navbar

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" data-bs-theme="dark">
			<div className="container-fluid p-2">
				<a className="navbar-brand text-white" href="#">Start Bootstrap</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" data-bs-theme="dark" id="navbarScroll">
					<ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll ms-auto ">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">{props.home}</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">{props.about}</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">{props.services}</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">{props.contact}</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

Navbar.proptypes = {
	home: PropTypes.string,
	about: PropTypes.string,
	services: PropTypes.string,
	contact: PropTypes.string,
}

// Cards

const cards = [
	{
		cardTitle: 'Card Title',
		cardDescription: `Maecenas efficitur justo sapien, vel pulvinar risus interdum ut. Nunc sit amet cursus justo. 
		In eget bibendum erat, et vestibulum dolor. `,
		button: 'Find out more!',
	}, {
		cardTitle: 'Card Title',
		cardDescription: `Nulla dictum ullamcorper enim, quis finibus lorem tristique nec. 
		Donec porta eros nec pellentesque ullamcorper. Nullam hendrerit nibh ut nunc dapibus 
		consequat.`,
		button: 'Find out more!',
	}, {
		cardTitle: 'Card Title',
		cardDescription: `Duis sed ante urna. Suspendisse nec blandit lorem, vel luctus lectus. In pulvinar mauris orci, 
		eget lacinia neque faucibus eget.`,
		button: 'Find out more!',
	}, {
		cardTitle: 'Card Title',
		cardDescription: `Phasellus quis nunc finibus, sagittis risus sit amet, tincidunt dui. Curabitur convallis viverra 
		turpis, nec pretium nulla imperdiet cursus. Nam a dignissim ipsum.`,
		button: 'Find out more!',
	},
];

const Card = (props) => {
	return (
		<div className="card-deck col-md-3 p-2">
			<div className="card m-auto">
				<img src={cardImage} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title text-center">{props.cardTitle}</h5>
					<p className="card-text text-center">{props.cardDescription}</p>
				</div>
				<div className="card-footer text-center">
					<a href="#" className="btn btn-primary">{props.button}</a>
				</div>
			</div>
		</div>
	);
}

Card.proptypes = {
	cardTitle: PropTypes.string,
	cardDescription: PropTypes.string,
	button: PropTypes.string,
}

const card = cards.map((item, index) => {
	return <Card
		key={index}
		cardTitle={item.cardTitle}
		cardDescription={item.cardDescription}
		button={item.button}
	/>
});


// Footer

const Footer = (props) => {
	return (
		<footer id="footerpage" className="bg-dark text-center text-white">
			<div className="container p-4">
			</div>
			<div className="text-center p-3">
				{props.copyright}
				<a className="text-white" href="">{props.link}</a>
			</div>
		</footer>
	);
};

Footer.proptypes = {
	copyright: PropTypes.string,
	link: PropTypes.string
}

//

const App = () => {
	return (
		<React.Fragment>
			<Navbar
				home="Home"
				about="About"
				services="Services"
				contact="Contact"
			/>
			<div className="container min-vh-90">
				<Jumbotron
					welcome="A warm Welcome!"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut scelerisque ipsum, vel 
					scelerisque dui. Fusce dapibus tellus at nisl feugiat, eu ultrices quam tempor. Donec pellentesque nibh 
					at orci porta, eget elementum orci rhoncus. Sed volutpat cursus metus id pharetra. Nulla at turpis non 
					diam tincidunt efficitur non sit amet lacus."
				/>
				<div className="card-group">{card}</div>
			</div>
			<Footer
				copyright="© 2024 Copyright: "
				link="My website"
			/>
		</React.Fragment>
	);
}
export default App;

