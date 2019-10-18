import React from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// /import './App.css';
import './App.scss';
import Home from './components/homepage/Home';
import Routes from './routes/Routes';

function App() {
  return (
	<div className="Apps">
		{/* <Home /> */}
		<Routes />	

	</div>
  );
}

export default App;
