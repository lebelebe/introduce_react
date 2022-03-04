import logo from './img/logoname.svg';
import logoment from './img/navlogoment.svg';
import appStyle from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <nav>
      <header className={appStyle.hd+" container d-flex"}>
        <h1 className={appStyle.logoh+" col-3"}>
          <a href="/">
            <img src={logoment} className={appStyle.logoment}></img>
            <img src={logo} className={appStyle.logoname}></img>
          </a>
        </h1>
        <ul className="d-flex col-5">
          <li className="about">
            <a href="/">나의소개</a>
          </li>
          <li className="portfolio">
            <a href="/">포트폴리오</a>
          </li>
          <li className="contact">
            <a href="/">면접제안</a>
          </li>
        </ul>
      </header>
    </nav>
  );
}

export default App;
