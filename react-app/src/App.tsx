
import './App.scss'
import React from 'react';
import Header from './component/Header/Header';
import { Outlet } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <div className="header-container">
          <Header />

        </div>
        <div className="main-container">
          <div className="sidenav-container">

          </div>
          <div className="app-content">
            <Outlet />

          </div>
        </div>
      </div>
    )
  }
}




export default App


// const [count, setCount] = useState(0)

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </div>
  // )