import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Nav';
import Fil from './Fil';
import Products from './Products';

function App() {
  const api = 'https://dummyjson.com/products?limit=9';

  const [products, setProducts] = useState([]);

  const [laet, setLaet] = useState(false);
  const handleChange = () => setLaet(!laet);

  useEffect(() => {
    fetch(api)
      .then(res => res.json())  
      .then(data => {
        setProducts(data.products);
      });
  }, []);

  return (
    <main
      className={`${
        laet
          ? "bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
          : "bg-[#f8fafc] text-[#0f172a]"
      } min-h-screen`}
    >
      <Nav handleChange={handleChange} laet={laet} />

      <section>
        <Fil />
        <Products products={products} />
      </section>
    </main>
  );
}

export default App;
