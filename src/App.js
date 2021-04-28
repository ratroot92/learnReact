/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Layouts/Footer';
import HomePage from './components/HomePage';
import Modal from 'react-modal';

Modal.setAppElement('#root')
function App() {
	return (
		<div className='container-fluid'>
			{/* Header Start */}
			<div className='row'>
				<Header />
			</div>
			{/* Header End  */}

			{/* Start Content -- Body  */}
			<div className='row'>
				<HomePage />
			</div>
			{/*End Content -- Body */}

		
			{/* Header Start */}
			<div className='row'>
				<Footer />
			</div>
			{/* Header End  */}
		</div>
	);
}

export default App;
