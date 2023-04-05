
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
   <>
  <Navbar title=" TextUtilsBlog" aboutText="about us"/>
  <div className="p-5">
  <TextForm/>
  
  </div>
  
  

   </>
  );
}

export default App;
