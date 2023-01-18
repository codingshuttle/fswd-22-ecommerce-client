import {Route, Routes} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Categories from './pages/categories/Categories';
import Home from './pages/home/Home';
import ProductDetail from './pages/productDetail/ProductDetail';

function App() {
    return <div className="App">
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/products" element={<Categories />}/>
			<Route path="/products/:productId" element={<ProductDetail />}/>
		</Routes>
		<Footer/>
	</div>;
}

export default App;
