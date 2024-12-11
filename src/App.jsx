import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Settings from './pages/Settings';
import CRM from "./pages/CRM";


const App = () => {
	return (
		<>
			<div className='flex'>
				<Sidebar />
				<div className='flex-1'>
					<Navbar />
					<div className='p-6'>
						<Routes>
							<Route path='/' element={<Dashboard />} />
							<Route path='/inventory' element={<Inventory />} />
							<Route path='/sales' element={<Sales />} />
							<Route path='/settings' element={<Settings />} />
							<Route path="/crm" element={<CRM />} />
							
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
