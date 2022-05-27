import './App.css';
import Display from '../namecard-component/display.component';
import Data from '../data-component/data.component'
function App() {
  return (
    <div className='sample'>
      <div className='sample-flex'>
        <Display />
        <Data/>
      </div>
    </div>
  );
}

export default App;
