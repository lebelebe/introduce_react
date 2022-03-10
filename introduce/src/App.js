import logo from './img/logoname.svg';
import logoment from './img/navlogoment.svg';
import appStyle from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Snsdiv from './Snsdiv'
import { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [snsstate, snsUpdate] = useState(false);
  const snsFL = (t) => {
    snsUpdate(t)
    // snsstate값을 수정해라
  }

  return (
    <nav id={appStyle.navi}>
      <header className={appStyle.hd+" container-lg d-flex justify-content-between"}>
        <h1 className={appStyle.logoh+" col-2 mb-0"}>
          <a href="/">
            <img src={logoment} className={appStyle.logoment}></img>
            <img src={logo} className={appStyle.logoname}></img>
          </a>
        </h1>
        <ul className={appStyle.d1ul+" d-flex col-sm-5 col-9 text-md-end align-items-center mb-0"}>
          <li className="about col-4 text-start">
            <a href="/" className="nuriGothicR">나의소개</a>
          </li>
          <li className="portfolio col-4  text-start">
            <a href="/" className="nuriGothicR">포트폴리오</a>
          </li>
          <li className="contact col-4 text-start">
            <a href="/" className="nuriGothicR">사전면접</a>
          </li>
        </ul>
        <div id={appStyle.utilMenu}>
          <button onClick={ (e) => { snsFL(!snsstate) } } className={appStyle.utilButton} type="button"><FontAwesomeIcon icon={faShareNodes} /></button>
          { snsstate && <Snsdiv className={appStyle.snsdiv}></Snsdiv> }
        </div>
      </header>
    </nav>
  );
}

export default App;
