import * as React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import styles from './App.module.scss';
import Home from "./components/home/Home";
import News from "./components/news/News";
import Ultrasound from "./components/profiles/Ultrasound";
import Contacts from "./components/contacts/Contacts";
import Spa from "./components/profiles/Spa";
import About from "./components/about/About";
import Reviews from "./components/reviews/Reviews";
import Pricelist from "./components/pricelist/Pricelist";
import {
    DesktopMax,
    Desktop,
    DesktopAndLaptop,
    Laptop,
    Tablet,
    Mobile,
    MobileMin480,
    MobileMax479
} from "./responsiveModule";
import {createBrowserHistory} from 'history';
import {Menu, Dropdown} from "antd";
import "./App.scss";
import { Redirect } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";
import { client } from "./index";
import Antupload from "./components/antupload/Antupload";

const menu = (
    <Menu  className={styles.appHeaderStartMenuModal}>
        <MobileMin480>
            <div className={styles.appHeaderStartMenuModalBlock}>
                <div className={styles.appHeaderStartMenuModalImgContainer}>
                    <a className={styles.appHeaderStartMenuModalImgLink} href='/home'>
                        <img src="/static/svg/4-vk.svg" alt={""}/>
                    </a>
                    <span className={styles.appHeaderStartMenuModalImgSeparator}/>
                    <a className={styles.appHeaderStartMenuModalImgLink} href='/home'>
                        <img src="/static/svg/4-instagram.svg" alt={""}/>
                    </a>
                </div>
                <span/>
                <div className={styles.appHeaderStartMenuModalAddressContainer}>
                    <span className={styles.appHeaderStartMenuModalAddress}>г. Хадыженск,</span>
                    <span className={styles.appHeaderStartMenuModalAddress}>ул. Первомайская,</span>
                </div>
                <span/>
                <div className={styles.appHeaderStartMenuModalAddressContainer}>
                    <span className={styles.appHeaderStartMenuModalAddress}>д. 103 "А", 2 этаж,</span>
                    <span className={styles.appHeaderStartMenuModalAddress}>кабинет 6</span>
                </div>
                <span/>
                <div className={styles.appHeaderStartMenuModalLinks}><span style={{height: "100%", paddingTop: "10px"}}>+7(918)177-24-17</span></div>
            </div>
            <span style={{height: "calc(100% - 10px)", width: "1px", background: "rgba(57, 57, 57, 0.2)", margin: "5px 0 5px 0"}}/>
            <div className={styles.appHeaderStartMenuModalBlock}>
                <div className={window.location.pathname === "/home" ? styles.appHeaderStartMenuModalCurrentLink :
                    styles.appHeaderStartMenuModalLinks}><Link to="/home">ГЛАВНАЯ</Link></div>
                <span className={styles.appHeaderStartMenuModalSeparator}/>
                <div className={window.location.pathname === "/news" ? styles.appHeaderStartMenuModalCurrentLink :
                    styles.appHeaderStartMenuModalLinks}><Link to="/news">НОВОСТИ</Link></div>
                <span className={styles.appHeaderStartMenuModalSeparator}/>
                <div className={window.location.pathname === "/ultrasound" ? styles.appHeaderStartMenuModalCurrentLink :
                    styles.appHeaderStartMenuModalLinks}><Link to="/ultrasound">УЗИ</Link></div>
                <span className={styles.appHeaderStartMenuModalSeparator}/>
                <div className={window.location.pathname === "/spa" ? styles.appHeaderStartMenuModalCurrentLink :
                    styles.appHeaderStartMenuModalLinks}><Link to="/spa">МАССАЖ</Link></div>
            </div>
            <span style={{height: "calc(100% - 10px)", width: "1px", background: "rgba(57, 57, 57, 0.2)", margin: "5px 0 5px 0"}}/>
            <div className={styles.appHeaderStartMenuModalBlock}>
                <div className={window.location.pathname === "/pricelist" ? styles.appHeaderStartMenuModalCurrentLink :
                    styles.appHeaderStartMenuModalLinks}><Link to="/pricelist">ЦЕНЫ</Link></div>
                <span className={styles.appHeaderStartMenuModalSeparator}/>
                <div className={window.location.pathname === "/about" ? styles.appHeaderStartMenuModalCurrentLink :
                    styles.appHeaderStartMenuModalLinks}><Link to="/about">О НАС</Link></div>
                <span className={styles.appHeaderStartMenuModalSeparator}/>
                <div className={window.location.pathname === "/contacts" ? styles.appHeaderStartMenuModalCurrentLink :
                    styles.appHeaderStartMenuModalLinks}><Link to="/contacts">КОНТАКТЫ</Link></div>
                <span className={styles.appHeaderStartMenuModalSeparator}/>
                <div className={window.location.pathname === "/reviews" ? styles.appHeaderStartMenuModalCurrentLink :
                    styles.appHeaderStartMenuModalLinks}><Link to="/reviews">ОТЗЫВЫ</Link></div>
            </div>
        </MobileMin480>
        <MobileMax479>
            <div className={window.location.pathname === "/home" ? styles.appHeaderStartMenuModalCurrentLink :
                styles.appHeaderStartMenuModalLinks}><Link to="/home">ГЛАВНАЯ</Link></div>
            <div className={window.location.pathname === "/news" ? styles.appHeaderStartMenuModalCurrentLink :
                styles.appHeaderStartMenuModalLinks}><Link to="/news">НОВОСТИ</Link></div>
            <div className={window.location.pathname === "/spa" ? styles.appHeaderStartMenuModalCurrentLink :
                styles.appHeaderStartMenuModalLinks}><Link to="/spa">НОВОСТИ</Link></div>
            <div className={window.location.pathname === "/ultrasound" ? styles.appHeaderStartMenuModalCurrentLink :
                styles.appHeaderStartMenuModalLinks}><Link to="/ultrasound">УЗИ</Link></div>
            <span className={styles.appHeaderStartMenuModalSeparator}/>
            <div className={window.location.pathname === "/spa" ? styles.appHeaderStartMenuModalCurrentLink :
                styles.appHeaderStartMenuModalLinks}><Link to="/spa">МАССАЖ</Link></div>
            <span className={styles.appHeaderStartMenuModalSeparator}/>
            <div className={window.location.pathname === "/pricelist" ? styles.appHeaderStartMenuModalCurrentLink :
                styles.appHeaderStartMenuModalLinks}><Link to="/pricelist">ЦЕНЫ</Link></div>
            <span className={styles.appHeaderStartMenuModalSeparator}/>
            <div className={window.location.pathname === "/about" ? styles.appHeaderStartMenuModalCurrentLink :
                styles.appHeaderStartMenuModalLinks}><Link to="/about">О НАС</Link></div>
            <span className={styles.appHeaderStartMenuModalSeparator}/>
            <div className={window.location.pathname === "/contacts" ? styles.appHeaderStartMenuModalCurrentLink :
                styles.appHeaderStartMenuModalLinks}><Link to="/contacts">КОНТАКТЫ</Link></div>
            <span className={styles.appHeaderStartMenuModalSeparator}/>
            <div className={window.location.pathname === "/reviews" ? styles.appHeaderStartMenuModalCurrentLink :
                styles.appHeaderStartMenuModalLinks}><Link to="/reviews">ОТЗЫВЫ</Link></div>
            <span/>
            <div className={styles.appHeaderStartMenuModalImgContainer}>
                <a className={styles.appHeaderStartMenuModalImgLink} href='/home'>
                    <img src="/static/svg/4-vk.svg" alt={""}/>
                </a>
                <span className={styles.appHeaderStartMenuModalImgSeparator}/>
                <a className={styles.appHeaderStartMenuModalImgLink} href='/home'>
                    <img src="/static/svg/4-instagram.svg" alt={""}/>
                </a>
            </div>
            <div className={styles.appHeaderStartMenuModalAddressContainer}>
                <div className={styles.appHeaderStartMenuModalAddress}>г. Хадыженск, ул. Первомайская,</div>
                <div className={styles.appHeaderStartMenuModalAddress}>д. 103 "А", 2 этаж, кабинет 6</div>
            </div>
            <div className={styles.appHeaderStartMenuModalLinks}><span>+7(918)177-24-17</span></div>
        </MobileMax479>
    </Menu>
);

const HeaderForPC = ({location}: {location:any}) => {
    return (
        <div className={styles.appHeader}>
            <div className={styles.appHeaderStart}>
                <div className={styles.appHeaderStartDoubleTextContainer}>
                    <div className={styles.appHeaderStartDoubleText}><span>г. Хадыженск, ул. Первомайская,</span></div>
                    <div className={styles.appHeaderStartDoubleText}>д. 103 "А", 2 этаж, кабинет №6</div>
                </div>
                <span className={styles.appHeaderStartSeparator}/>
                <div className={styles.appHeaderStartDoubleTextContainer}>
                    <div className={styles.appHeaderStartDoubleText}><span>Пн, Вт</span></div>
                    <div className={styles.appHeaderStartDoubleText}>Ср, Пт</div>
                </div>
                <span className={styles.appHeaderStartSeparator2}/>
                <div className={styles.appHeaderStartTimeTextContainer}>
                    <div className={styles.appHeaderStartNumber}>9</div>
                    <div className={styles.appHeaderStartTextOO}>ОО</div>
                    <div className={styles.appHeaderStartNumber}><span>-</span></div>
                    <div className={styles.appHeaderStartNumber}>17</div>
                    <div className={styles.appHeaderStartTextOO}>ОО</div>
                </div>
                <div className={styles.appHeaderStartNet}>
                    <a className={styles.appHeaderStartNetImg} href='/home'>
                        <img id={styles.img1} src="/static/svg/7-vk-White.svg" alt={""}/>
                        <img id={styles.img2} src="/static/svg/7-vk-39d02a.svg" alt={""}/>
                    </a>
                    <span className={styles.appHeaderStartNetSeparator}/>
                    <a className={styles.appHeaderStartNetImg} href='/home'>
                        <img id={styles.img1} src="/static/svg/8-instagram-White.svg" alt={""}/>
                        <img id={styles.img2} src="/static/svg/8-instagram-39d02a.svg" alt={""}/>
                    </a>
                </div>
                <div className={styles.appHeaderStartButton}>
                    <Link to="/news">
                        <DesktopAndLaptop>
                            <div className={styles.appHeaderStartDoubleText} style={{fontWeight: 400}}><span>Обратный</span></div>
                            <div className={styles.appHeaderStartDoubleText} style={{fontWeight: 400}}>звонок</div>
                        </DesktopAndLaptop>
                        <DesktopMax>
                            <div className={styles.appHeaderStartDoubleText} style={{fontWeight: 400}}>Обратный звонок</div>
                        </DesktopMax>
                    </Link>
                </div>
                <span className={styles.appHeaderStartPhone}>+7(918)177-24-17</span>
            </div>
            <div className={styles.appHeaderMiddle}>
                <a className={styles.appHeaderMiddleFavicon} href='/home'>
                    <img src="/static/img/9-favicon.png" alt={""}/>
                </a>
                <div className={styles.appHeaderMiddleName}>
                    <div className={styles.appHeaderMiddleNameFirst}><Link to="/home">медицинский центр</Link></div>
                    <div className={styles.appHeaderMiddleNameSecond}><Link to="/home">"ЮЖНЫЙ"</Link></div>
                </div>
                <div className={styles.appHeaderMiddleMenu}>
                    <div className={location.pathname === "/home" ? styles.appHeaderMiddleMenuCurrent :
                        styles.appHeaderMiddleMenuText}><Link to="/home">Главная</Link></div>
                    <span className={styles.appHeaderMiddleMenuSpace}/>
                    <div className={location.pathname === "/news" ? styles.appHeaderMiddleMenuCurrent :
                        styles.appHeaderMiddleMenuText}><Link to="/news">Новости</Link></div>
                    <span className={styles.appHeaderMiddleMenuSpace}/>
                    <div className={location.pathname === "/ultrasound" ? styles.appHeaderMiddleMenuCurrent :
                        styles.appHeaderMiddleMenuText}><Link to="/ultrasound">УЗИ</Link></div>
                    <span className={styles.appHeaderMiddleMenuSpace}/>
                    <div className={location.pathname === "/spa" ? styles.appHeaderMiddleMenuCurrent :
                        styles.appHeaderMiddleMenuText}><Link to="/spa">Массаж</Link></div>
                    <span className={styles.appHeaderMiddleMenuSpace}/>
                    <div className={location.pathname === "/pricelist" ? styles.appHeaderMiddleMenuCurrent :
                        styles.appHeaderMiddleMenuText}><Link to="/pricelist">Цены</Link></div>
                    <span className={styles.appHeaderMiddleMenuSpace}/>
                    <div className={location.pathname === "/about" ? styles.appHeaderMiddleMenuCurrent :
                        styles.appHeaderMiddleMenuText}><Link to="/about">О нас</Link></div>
                    <span className={styles.appHeaderMiddleMenuSpace}/>
                    <div className={location.pathname === "/contacts" ? styles.appHeaderMiddleMenuCurrent :
                        styles.appHeaderMiddleMenuText}><Link to="/contacts">Контакты</Link></div>
                    <span className={styles.appHeaderMiddleMenuSpace}/>
                    <div className={location.pathname === "/reviews" ? styles.appHeaderMiddleMenuCurrent :
                        styles.appHeaderMiddleMenuText}><Link to="/reviews">Отзывы</Link></div>
                </div>
            </div>
            <div className={styles.appHeaderEnd}>
                {(location.pathname === "/home") ? (<span className={styles.appHeaderEndText}>НАШИ ПРЕИМУЩЕСТВА</span>) :
                (location.pathname === "/news") ? (<span className={styles.appHeaderEndText}>НОВОСТИ</span>) :
                (location.pathname === "/spa") ? (<span className={styles.appHeaderEndText}>МАССАЖ</span>) :
                (location.pathname === "/pricelist") ? (<span className={styles.appHeaderEndText}>ПРАЙС-ЛИСТ</span>) :
                (location.pathname === "/about") ? (<span className={styles.appHeaderEndText}>О НАС</span>) :
                (location.pathname === "/contacts") ? (<span className={styles.appHeaderEndText}>КОНТАКТЫ</span>) :
                (location.pathname === "/reviews") ? (<span className={styles.appHeaderEndText}>ОТЗЫВЫ</span>) :
                (<span className={styles.appHeaderEndText}>ОСТАЛЬНОЕ</span>)}
            </div>
        </div>
    )
};

// const Name = () => Варианты: {return(<span/>)} и (<span/>) одинаковы. Функциональные компоненты. В рамках одного кмпонента

const HeaderForLaptop = ({location}: {location:any}) => (
    <div className={styles.appHeader}>
        <div className={styles.appHeaderStart}>
            <div className={styles.appHeaderStartDoubleTextContainer}>
                <div className={styles.appHeaderStartDoubleText}><span>г. Хадыженск, ул. Первомайская,</span></div>
                <div className={styles.appHeaderStartDoubleText}>д. 103 "А", 2 этаж, кабинет №6</div>
            </div>
            <span className={styles.appHeaderStartSeparator}/>
            <div className={styles.appHeaderStartDoubleTextContainer}>
                <div className={styles.appHeaderStartDoubleText}><span>Пн, Вт, Ср, Пт</span></div>
                <div className={styles.appHeaderStartDoubleTextGreen}>c 9:00 до 17:00</div>
            </div>
            <div className={styles.appHeaderStartNet}>
                <a className={styles.appHeaderStartNetImg} href='/home'>
                    <img id={styles.img1} src="/static/svg/7-vk-White.svg" alt={""}/>
                    <img id={styles.img2} src="/static/svg/7-vk-39d02a.svg" alt={""}/>
                </a>
                <span className={styles.appHeaderStartNetSeparator}/>
                <a className={styles.appHeaderStartNetImg} href='/home'>
                    <img id={styles.img1} src="/static/svg/8-instagram-White.svg" alt={""}/>
                    <img id={styles.img2} src="/static/svg/8-instagram-39d02a.svg" alt={""}/>
                </a>
            </div>
            <div className={styles.appHeaderStartButton}>
                <Link to="/news">
                    <DesktopAndLaptop>
                        <div className={styles.appHeaderStartDoubleText} style={{fontWeight: 400}}><span>Обратный</span></div>
                        <div className={styles.appHeaderStartDoubleText} style={{fontWeight: 400}}>звонок</div>
                    </DesktopAndLaptop>
                    <DesktopMax>
                        <div className={styles.appHeaderStartDoubleText} style={{fontWeight: 400}}>Обратный звонок</div>
                    </DesktopMax>
                </Link>
            </div>
            <span className={styles.appHeaderStartPhone}>+7(918)177-24-17</span>
        </div>
        <div className={styles.appHeaderMiddle}>
            <a className={styles.appHeaderMiddleFavicon} href='/home'>
                <img src="/static/img/9-favicon.png" alt={""}/>
            </a>
            <div className={styles.appHeaderMiddleName}>
                <div className={styles.appHeaderMiddleNameFirst}><Link to="/home">медицинский центр</Link></div>
                <div className={styles.appHeaderMiddleNameSecond}><Link to="/home">"ЮЖНЫЙ"</Link></div>
            </div>
            <div className={styles.appHeaderMiddleMenu}>
                <div className={location.pathname === "/home" ? styles.appHeaderMiddleMenuCurrent :
                    styles.appHeaderMiddleMenuText}><Link to="/home">Главная</Link></div>
                <span className={styles.appHeaderMiddleMenuSpace}/>
                <div className={location.pathname === "/news" ? styles.appHeaderMiddleMenuCurrent :
                    styles.appHeaderMiddleMenuText}><Link to="/news">Новости</Link></div>
                <span className={styles.appHeaderMiddleMenuSpace}/>
                <div className={location.pathname === "/ultrasound" ? styles.appHeaderMiddleMenuCurrent :
                    styles.appHeaderMiddleMenuText}><Link to="/ultrasound">УЗИ</Link></div>
                <span className={styles.appHeaderMiddleMenuSpace}/>
                <div className={location.pathname === "/spa" ? styles.appHeaderMiddleMenuCurrent :
                    styles.appHeaderMiddleMenuText}><Link to="/spa">Массаж</Link></div>
                <span className={styles.appHeaderMiddleMenuSpace}/>
                <div className={location.pathname === "/pricelist" ? styles.appHeaderMiddleMenuCurrent :
                    styles.appHeaderMiddleMenuText}><Link to="/pricelist">Цены</Link></div>
                <span className={styles.appHeaderMiddleMenuSpace}/>
                <div className={location.pathname === "/about" ? styles.appHeaderMiddleMenuCurrent :
                    styles.appHeaderMiddleMenuText}><Link to="/about">О нас</Link></div>
                <span className={styles.appHeaderMiddleMenuSpace}/>
                <div className={location.pathname === "/contacts" ? styles.appHeaderMiddleMenuCurrent :
                    styles.appHeaderMiddleMenuText}><Link to="/contacts">Контакты</Link></div>
                <span className={styles.appHeaderMiddleMenuSpace}/>
                <div className={location.pathname === "/reviews" ? styles.appHeaderMiddleMenuCurrent :
                    styles.appHeaderMiddleMenuText}><Link to="/reviews">Отзывы</Link></div>
            </div>
        </div>
        <div className={styles.appHeaderEnd}>
            {(location.pathname === "/home") ? (<span className={styles.appHeaderEndText}>НАШИ ПРЕИМУЩЕСТВА</span>) :
            (location.pathname === "/news") ? (<span className={styles.appHeaderEndText}>НОВОСТИ</span>) :
            (location.pathname === "/ultrasound") ? (<span className={styles.appHeaderEndText}>УЗИ</span>) :
            (location.pathname === "/spa") ? (<span className={styles.appHeaderEndText}>МАССАЖ</span>) :
            (location.pathname === "/pricelist") ? (<span className={styles.appHeaderEndText}>ПРАЙС-ЛИСТ</span>) :
            (location.pathname === "/about") ? (<span className={styles.appHeaderEndText}>О НАС</span>) :
            (location.pathname === "/contacts") ? (<span className={styles.appHeaderEndText}>КОНТАКТЫ</span>) :
            (location.pathname === "/reviews") ? (<span className={styles.appHeaderEndText}>ОТЗЫВЫ</span>) :
            (<span className={styles.appHeaderEndText}>ОСТАЛЬНОЕ</span>)}
        </div>
    </div>
);

const HeaderForTablet = ({location}: {location:any}) => (
    <div className={styles.appHeader}>
        <div className={styles.appHeaderStart}>
            <a className={styles.appHeaderMiddleFavicon} href='/home'>
                <img src="/static/img/9-favicon.png" alt={""}/>
            </a>
            <span className={styles.appHeaderStartSeparator}/>
            <div className={styles.appHeaderMiddleName}>
                <div className={styles.appHeaderMiddleNameFirst}><Link to="/home">медицинский центр</Link></div>
                <div className={styles.appHeaderMiddleNameSecond}><Link to="/home">"ЮЖНЫЙ"</Link></div>
            </div>
            <span/>
            <div className={styles.appHeaderStartTripleTextContainer}>
                <div className={styles.appHeaderStartTripleText}>г. Хадыженск, ул. Первомайская,</div>
                <div className={styles.appHeaderStartTripleText}>д. 103 "А", 2 этаж, кабинет №6</div>
                <div className={styles.appHeaderStartTripleText}><span>+7(918)177-24-17</span></div>
            </div>
            <span className={styles.appHeaderStartSeparator}/>
            <Dropdown overlay={menu} overlayClassName={styles.appHeaderStartDropdown} trigger={['click']}>
                <a className={styles.appHeaderStartMenuModalButton} href="#">
                    <img src="/static/svg/5-menus-white.svg" alt={""}/>
                </a>
            </Dropdown>
        </div>
    </div>
);

interface iHeaderForMobileProps {
    location: any;
}

class HeaderForMobile extends React.Component<iHeaderForMobileProps, {value: boolean}> {

    componentDidUpdate(prevProps: iHeaderForMobileProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    onRouteChanged() {
        this.setState({value: false});
        console.log("ROUTE CHANGED");
    }

    onVisibleChange = (value: boolean) => {
        this.setState({value});
    };

    render() {
        return (
            <div className={styles.appHeader}>
                <div className={styles.appHeaderStart}>
                    <a className={styles.appHeaderMiddleFavicon} href='/home'>
                        <img src="/static/img/9-favicon.png" alt={""}/>
                    </a>
                    <span className={styles.appHeaderStartSeparator}/>
                    <div className={styles.appHeaderMiddleName}>
                        <div className={styles.appHeaderMiddleNameFirst}><Link to="/home">медицинский центр</Link></div>
                        <div className={styles.appHeaderMiddleNameSecond}><Link to="/home">"ЮЖНЫЙ"</Link></div>
                    </div>
                    <span className={styles.appHeaderStartSeparator}/>
                    <Dropdown overlay={menu} overlayClassName={styles.appHeaderStartDropdown} trigger={['click']} visible={this.state && this.state.value} onVisibleChange={this.onVisibleChange}>
                        <a className={styles.appHeaderStartMenuModalButton} href="#">
                            <img src="/static/svg/5-menus-white.svg" alt={""}/>
                        </a>
                    </Dropdown>
                </div>
            </div>
        )
    }
};

class AppHeaderInner extends React.Component<{
    location: any;
}> {
    render() {
        const {location} = this.props;

        return (
            <>
                <Desktop>
                    <HeaderForPC location={this.props.location}/>
                </Desktop>
                {/*Так, как location в данном проекте равен пропсовому location, можно и так, и так*/}
                <Laptop>
                    <HeaderForLaptop location={location}/>
                </Laptop>
                <Tablet>
                    <HeaderForTablet location={location}/>
                </Tablet>
                <Mobile>
                    <HeaderForMobile location={location}/>
                </Mobile>
            </>
        );
    };
}

const AppHeader = withRouter(AppHeaderInner);

export const appHistory = createBrowserHistory();
// export const {router, params, location, routes} = (window as any).props;

const App: React.FC = () => {
    return (
        <Router history={appHistory}>
            <ApolloProvider client={client}>
                <div className={styles.appMain}>
                    <AppHeader/>
                    <Switch>
                        <Route path="/news">
                            <News/>
                        </Route>
                        <Route path="/ultrasound">
                            <Ultrasound/>
                        </Route>
                        <Route path="/antupload">
                            <Antupload/>
                        </Route>
                        <Route path="/spa">
                            <Spa/>
                        </Route>
                        <Route path="/pricelist">
                            <Pricelist/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/contacts">
                            <Contacts/>
                        </Route>
                        <Route path="/reviews">
                            <Reviews/>
                        </Route>
                        <Route path="/home">
                            <Home/>
                        </Route>
                        <Redirect from='/' to='/home'/>
                    </Switch>
                </div>
            </ApolloProvider>
        </Router>
    );
};

export default App;