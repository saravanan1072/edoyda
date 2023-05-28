
import './App.css';
import './style/style.css'
// import Navbar from './component/Navbar';
import logo from './images/EDYODA.png'
import Container from './component/Container';


function App() {
  return (
    <div >
     <div className='navbar'>
      <img className='logo' src={logo} alt='logo'/>

<span className='select'>
<select >
     <option>course</option>
 </select>
 <select>
     <option>program</option>
 </select>
</span>
 <span className='right'>
 <span className='search'><i class="fa-solid fa-magnifying-glass"></i></span>
 <span className='login'>Log in</span>
 <button className='join'>join now</button>

 </span>

</div>
    <Container/>
    </div>
  );
}

export default App;
