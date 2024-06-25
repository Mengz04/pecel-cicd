import Navbar from './navbar';
import Banner from './banner';
import Product from './product.js';
import About from './about.js';
import Footer from './footer.js';

function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Banner />
      <Product />
      <About />
      <Footer />
    </div>
  );
}

export default App;
