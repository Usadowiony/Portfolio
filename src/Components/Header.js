import mobileScroll from "../img/svg/mobile_scroll.svg";
import Button from "./Button";

export default function Header() {
	return (
		<header className='container header'>
			<div className='header__photo'>
				<div className='header__photo-image'></div>
			</div>
			<div className='header__content'>
				<div className='header__typography'>
					<h3 className='header__typography-h3'>👋 Cześć, nazywam się</h3>
					<h1 className='header__typography-h1'>Wojciech Pietrzak</h1>
					<h2 className='header__typography-h2'>
						I jestem <span>front-end developerem</span>, z pasją zarówno do
						<span> kodowania</span>, jak i
						<span> projektowania stron internetowych</span>.
					</h2>
				</div>
				<div className='header__buttons'>
					<Button
						type='button'
						text='projekty'
						icon='fa-sharp fa-solid fa-code'
					/>
					<Button
						type='button button--empty'
						text='pobierz cv'
						icon='fa-solid fa-file-lines'
					/>
					<div className='header__buttons-social-media'>
						<a
							href='https://www.linkedin.com/in/wojciech-pietrzak-238a25262/'
							className='header__buttons-linkedin'
							target='_blank'>
							<i class='fa-brands fa-linkedin'></i>
						</a>
						<a
							href='https://github.com/Usadowiony'
							className='header__buttons-github'
							target='_blank'>
							<i className='fa-brands fa-github'></i>
						</a>
					</div>
					<div className='header__buttons-scroll'>
						<img
							src={mobileScroll}
							alt='scroll down'
							className='header__buttons-scroll-svg'
						/>
						<p className='header__buttons-scroll-p'>Przewiń niżej</p>
					</div>
				</div>
			</div>
		</header>
	);
}
