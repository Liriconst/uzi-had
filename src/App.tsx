import * as React from 'react';
import {Router, Switch, Route, Link} from "react-router-dom";
import styles from './App.module.scss';
import Home from "./components/home/Home";
import News from "./components/news/News";
import Ultrasound from "./components/ultrasound/Ultrasound";

import { createBrowserHistory } from 'history';

export const appHistory =  createBrowserHistory();

const App: React.FC = () => {
  return (
      <Router history={appHistory}>
        <div className={styles.appHeader}>
          <div className={styles.appHeaderStart}>
            <div className={styles.appHeaderStartPart1}>
              <div className={styles.appHeaderStartAddress}>
                <div className={styles.appHeaderStartDoubleText}><span>г. Хадыженск, ул. Первомайская,</span></div>
                <div className={styles.appHeaderStartDoubleText}>д. 103 "А", 2 этаж, кабинет №6</div>
              </div>
              <span className={styles.appHeaderStartAddressSeparator}/>
              <div className={styles.appHeaderStartSchedule}>
                <div className={styles.appHeaderStartDoubleText}><span>Пн, Вт</span></div>
                <div className={styles.appHeaderStartDoubleText}>Ср, Пт</div>
              </div>
              <span className={styles.appHeaderStartScheduleSeparator}/>
              <div className={styles.appHeaderStartNumber}>9</div>
              <div className={styles.appHeaderStartTextOO}>ОО</div>
              <div className={styles.appHeaderStartNumber}><span>-</span></div>
              <div className={styles.appHeaderStartNumber}>17</div>
              <div className={styles.appHeaderStartTextOO}>ОО</div>
            </div>
            <div className={styles.appHeaderStartPart2}>
              <div className={styles.appHeaderStartNet}><img src="/static/svg/7-vk-White.svg" alt={""}/></div>
              <div className={styles.appHeaderStartNet}><img src="/static/svg/8-instagram-White.svg" alt={""}/></div>
              <div className={styles.appHeaderStartButton}><span>Запись online</span></div>
              <span className={styles.appHeaderStartPhone}>+7(918)177-24-17</span>
            </div>
            {/* <div><Link to="/">Home</Link></div>*/}
            {/*<div><Link to="/menu">Menu</Link></div>*/}
            {/*<div>*/}
            {/*    <Link to="/heating">Heating</Link>*/}
            {/*</div>*/}
          </div>

          <Switch>
            <Route path="/news">
              <News/>
            </Route>
            <Route path="/ultrasound">
              <Ultrasound/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
};

export default App;