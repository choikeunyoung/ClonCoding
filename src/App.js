import style from "./App.module.css"
import Carousel from "./common/Carousel/carousel";
import NavBar from './common/Navbar/navbar';

function App() {
  return (
    <section className={style.page}>
      <NavBar />
      <Carousel />
      <div className={style.links}>
        <div className={style.links__box}>
          <img className={style.links__box__image} src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Windows-Logo-80x80?wid=40&hei=40" />
          <a href="#">
            내게 맞는 Microsoft 365 선택하기
          </a>
        </div>
        <div className={style.links__box}>
          <img className={style.links__box__image} src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Tablet-Kickstand-Landscape-Mode-Fluent-80x80?wid=40&hei=40" />
          <a href="#">
            Surface 디바이스 쇼핑하기
          </a>
        </div>
        <div className={style.links__box}>
          <img className={style.links__box__image} src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/xbox-blk-logo-link-list-120x120?wid=40&hei=40" />
          <a href="#">
            Xbox 게임 쇼핑
          </a>
        </div>
        <div className={style.links__box}>
          <img className={style.links__box__image} src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Windows-Logo-80x80?wid=40&hei=40" />
          <a href="#">
            Windows 11 받기
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
