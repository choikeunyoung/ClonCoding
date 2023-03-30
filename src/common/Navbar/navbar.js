import React from "react";
import style from "./navbar.module.css"
import { useState } from "react";

function NavBar() {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        if (menu) {
            setMenu(false)
        }
        else {
            setMenu(true)
        }
    }

    return (
        <nav className={style.navbar}>
            <div className={style.navbar__links}>
                <img className={style.navbar__logo} src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" />
                <a href="">
                    <span>Microsoft 365</span>
                </a>
                <a href="">
                    <span>Teams</span>
                </a>
                <a href="">
                    <span>Windows</span>
                </a>
                <a href="">
                    <span>Surface</span>
                </a>
                <a href="">
                    <span>Xbox</span>
                </a>
                <a href="">
                    <span>세일</span>
                </a>
                <a href="">
                    <span>지원</span>
                </a>
            </div>
            <div className={style.navbar__button}>
                <div>
                    <button className={style.navbar__button__tabs} onClick={handleMenu} id="tab-menu">Microsoft 전체▽</button>
                    <span>검색 🍳</span>
                </div>
                <div>
                    <span>카트</span>
                    <span>로그인</span>
                </div>
            </div>
            <table className={menu ? style.navbar__button__menu : style.none}>
                <th>소프트웨어</th>
                <th>PC 및 장치</th>
                <th>엔터테인먼트</th>
                <th>기업 고객용</th>
                <th>개발자 및 IT</th>
                <th>기타</th>
                <tr>
                    <td>Windows 앱</td>
                    <td>Xbox 쇼핑</td>
                    <td>Xbox Game Pass Ultimate</td>
                    <td>Microsoft Cloud</td>
                    <td>개발자 센터</td>
                    <td>무료 다운로드 및 보안</td>
                </tr>
                <tr>
                    <td>AI</td>
                    <td></td>
                    <td>Xbox Live Gold</td>
                    <td>Microsoft Security</td>
                    <td>설명서</td>
                    <td>교육</td>
                </tr>
                <tr>
                    <td>OneDrive</td>
                    <td></td>
                    <td>Xbox 및 게임</td>
                    <td>Azure</td>
                    <td>Microsoft Learn</td>
                    <td>볼륨 라이선싱</td>
                </tr>
                <tr>
                    <td>Outlook</td>
                    <td></td>
                    <td>PC 게임</td>
                    <td>Dynamic 365</td>
                    <td>Microsoft Tech 커뮤니티</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Skype</td>
                    <td></td>
                    <td>Windows 게임</td>
                    <td>비즈니스용 Microsoft 365</td>
                    <td>Azure Marketplace</td>
                    <td></td>
                </tr>
                <tr>
                    <td>OneNote</td>
                    <td></td>
                    <td></td>
                    <td>Microsoft Industry</td>
                    <td>AppSource</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Microsoft Teams</td>
                    <td></td>
                    <td></td>
                    <td>Microsoft Power Platform</td>
                    <td>Visual Studio</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Windows 365</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </nav>
    )
}

export default NavBar;