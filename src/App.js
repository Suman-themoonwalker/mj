import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Head} from './Components/Head'
import {Carousel} from './Components/Carousel'
import {Cards_MJ} from './Components/Cards_MJ'
import {Footer} from './Components/Footer'
function App() {
  return (
    <div className="App">
      <Head/>
      <Carousel/>
      <Cards_MJ/>
      <Footer/>
    </div>
  );
}

export default App;
