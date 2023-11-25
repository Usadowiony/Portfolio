export default function Nav() {
	return (
		<nav className='container nav'>
			<div className='nav__logo'>
				<p className='nav__logo-p'>usadowiony.</p>
			</div>
			<div className='nav__options'>
				<div className='nav__options-ul'>
					<div className='nav__li'>
						<a href='#'>projekty</a>
					</div>
					<div className='nav__li'>
						<a href='#'>o mnie</a>
					</div>
					<div className='nav__li'>
						<a href='#'>kontakt</a>
					</div>
				</div>
				<div className='nav__language'>
					<i class='nav__language-ico fa-solid fa-earth-europe'></i>
					<p className='nav__language-p'>pl</p>
				</div>
				<div className='nav__dark-mode'>
					<i className='nav__dark-mode-ico fa-regular fa-moon'></i>
				</div>
				<div className='nav__hamburger'>
					<i className='nav__hamburger-ico fa-solid fa-bars'></i>
				</div>
			</div>
		</nav>
	);
}
