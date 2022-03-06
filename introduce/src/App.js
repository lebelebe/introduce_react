import logo from './img/logoname.svg';
import logoment from './img/navlogoment.svg';
import appStyle from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <nav>
      <header className={appStyle.hd+" container d-flex"}>
        <h1 className={appStyle.logoh}>
          <a href="/">
            <img src={logoment} className={appStyle.logoment}></img>
            <img src={logo} className={appStyle.logoname}></img>
          </a>
        </h1>
        <ul className={appStyle.d1ul+" d-flex col-5"}>
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
      </header>
    </nav>
  );
}

export default App;
