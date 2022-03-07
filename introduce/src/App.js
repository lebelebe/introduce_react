import logo from './img/logoname.svg';
import logoment from './img/navlogoment.svg';
import appStyle from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Snsdiv from './Snsdiv'
import { useState} from 'react'

function App() {
  const [snsstate, snsUpdate] = useState(false);
  const snsFL = (t) => {
    snsUpdate(t)
    // snsstate값을 수정해라
  }

  return (
    <nav id={appStyle.navi}>
      <header className={appStyle.hd+" container-lg d-flex"}>
        <h1 className={appStyle.logoh+" mt-2 mt-lg-0 mt-md-1 col-md-6 col-2"}>
          <a href="/">
            <img src={logoment} className={appStyle.logoment}></img>
            <img src={logo} className={appStyle.logoname}></img>
          </a>
        </h1>
        <ul className={appStyle.d1ul+" d-flex col-md-5 col-8 text-md-end"}>
          <li className="about col-4">
            <a href="/" className="nuriGothicR">나의소개</a>
          </li>
          <li className="portfolio col-4">
            <a href="/" className="nuriGothicR">포트폴리오</a>
          </li>
          <li className="contact col-4">
            <a href="/" className="nuriGothicR">면접제안</a>
          </li>
        </ul>
        <div id={appStyle.utilMenu}>
          <button onClick={ (e) => { snsFL(!snsstate) } } className={appStyle.utilButton}>SNS</button>
          { snsstate && <Snsdiv></Snsdiv> }
        </div>
      </header>
    </nav>
  );
}

export default App;
