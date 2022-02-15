import './App.css';
import './CSS/style.css'
import Is from './I1.jpg'


function App() {
  return (
    <div className="App">
   <div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Farjou</h1>
    <br />
    <img src={Is}    />
    <br />
    <img src="/imageInPublic.jpg" />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>

    </div>
  );
}

export default App;
