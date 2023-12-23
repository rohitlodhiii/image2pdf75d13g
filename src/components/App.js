import GeneralContextProvider from "../GeneralContextProvider.js";
import Home from "./Home.js";

function App() {

  return (
    <div className="App">
      <div className='navbar'>
        <span className='header'>Img2PDF</span>
        <a href="https://github.com/rohitlodhiii/image2pdf75d13g">GitHub</a>
      </div>
      <GeneralContextProvider>
        <Home/>
      </GeneralContextProvider>
    </div>
  );
}

export default App;
