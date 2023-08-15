import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Counter from './features/Counter';

function App() {
  return (
    <div>
      <Navbar />
      <Counter/>
    </div>
  );
}

export default App;
