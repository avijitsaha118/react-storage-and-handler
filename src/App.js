import './App.css';
import Bag from './Components/Bag/Bag';
import Cosmetics from './Components/Cosmetics/Cosmetics';
import Cosmeticsfake from './Components/Cosmetics/Cosmeticsfake';
import Shoes from './Components/Shoes/Shoes';


function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <Bag></Bag>
      <Cosmeticsfake></Cosmeticsfake>
    </div>
  );
}

export default App;
