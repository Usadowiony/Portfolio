import "./css/index.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";

function App() {
	return (
		<div>
			<Nav />
			<Header />
			<main className='container'>
				<Portfolio />
			</main>
		</div>
	);
}

export default App;
