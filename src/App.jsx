import { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Fil from './Fil';
import Products from './Products';
function App() {
       let img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiJLk7HvQutfOPCkWjS2zNJA8RVidUwTavQ&s';
       let h3 = 'Classic Sneakers';
       let h5 = 'Footwear';
       let h4 = '$129.99';

       const [laet , setLaet] = useState(false);

       const handleChange = () => {
        setLaet(!laet)
      }
  return (
    <main className={`${
      laet
        ? "bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
        : "bg-[#f8fafc] text-[#0f172a]"
    } min-h-screen`}> 
     <Nav handleChange={handleChange} laet={laet}/>
     <section>
      <Fil/>
      <Products imgs={img} h3={h3} h5={h5} h4={h4}/>
     </section>
    </main>
  );
}

export default App;