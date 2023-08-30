import arrow from "../img/png/icons8-arrow-ios-16-glyph-96.png";
import Button from "./Button";

function Portfolio() {
	return (
		<section className='portfolio'>
			<div className='portfolio__header'>
				<h2 className='portfolio__header-h2'>
					oto mój warsztat, zwany inaczej
				</h2>
				<h1 className='portfolio__header-h1'>portfolio</h1>
			</div>
			<div className='portfolio__gallery'>
				<div className='portfolio__gallery-content'>
					<div className='portfolio__gallery-content-photo'></div>
					<div className='portfolio__gallery-content-text-area'>
						<h1 className='portfolio__gallery-content-h1'>darekpietrzak.com</h1>
						<p className='portfolio__gallery-content-p'>
							This is a simple website, created for my brother, who started his
							adventure as a personal trainer. I wanted to create project that
							would benefit both of us.
						</p>
					</div>
					<div className='portfolio__gallery-buttons'>
						<Button type='button' text='github' icon='fa-brands fa-github' />
						<Button
							type='button'
							text='projekty'
							icon='fa-sharp fa-solid fa-code'
						/>
					</div>
				</div>
				<div className='portfolio__gallery-arrow-left'>
					<img
						src={arrow}
						alt='arrow left'
						className='portfolio__gallery-arrow-left-img'
					/>
				</div>
				<div className='portfolio__gallery-arrow-right'>
					<img
						src={arrow}
						alt='arrow left'
						class='portfolio__gallery-arrow-right-img'
					/>
				</div>
				<div className='portfolio__gallery-dots'>
					<div className='portfolio__gallery-dot portfolio__gallery-dot--active'></div>
					<div className='portfolio__gallery-dot'></div>
					<div className='portfolio__gallery-dot'></div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
