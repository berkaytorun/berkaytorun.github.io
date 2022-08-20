import './App.css';

import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import API from './pages/API';
import ProjectDisplay from './pages/ProjectDisplay';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/API' element={<API />} />
					<Route path='/API/create' element={<Create />} />
					<Route path='/API/update' element={<Update />} />
					<Route path='/API/read' element={<Read />} />
					<Route path='/project/:id' element={<ProjectDisplay />} />
					<Route path='/experience' element={<Experience />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
