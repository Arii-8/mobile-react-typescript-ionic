import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, useIonRouter } from '@ionic/react';
import { playCircle, map, radio, home, personCircle } from 'ionicons/icons';
import { Redirect, Route, useLocation } from 'react-router-dom';

// Page import
import Home from '../../../pages/Home/Home';
import GetStarted from '../../../pages/GetStarted/GetStarted';
import SahamPage from '../../../pages/SahamPage/SahamPage';
import GlobalPage from '../../../pages/GlobalPage/GlobalPage';
import User from '../../../pages/users/User';
import News from '../../../pages/News/News';
import ReksadanaPage from '../../../pages/ReksadanaPage/ReksadanaPage';

export function BottomBar() {
  const location = useLocation();

  const navigation = useIonRouter();

  // handle click halaman saham
  const handleCLickSahamPage = () => {
    navigation.push('/home/saham', 'root', 'replace');
  }

  // handle click halaman global
  const handleClickGlobalPage = () => {
    navigation.push('/home/global', 'root', 'replace');
  }

  // handle click halaman global
  const handleClickUser = () => {
    navigation.push('/home/account', 'root', 'replace');
  }

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/get-started" component={GetStarted} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/saham" component={SahamPage} />
        <Route exact path="/home/global" component={GlobalPage} />
        <Route exact path="/home/account" component={User} />
        <Route exact path="/home/news" component={News} />
        <Route exact path="/home/reksadana" component={ReksadanaPage} />
        <Redirect exact path="/" to="/home" />
      </IonRouterOutlet>

      {/* Route home */}
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home" selected={location.pathname === "/home"}>
          <IonIcon icon={home} />
          <IonLabel>Beranda</IonLabel>
        </IonTabButton>
        
        {/* <IonTabButton tab="saham" href="/home/saham" selected={location.pathname === "/home/saham"}>
          <IonIcon icon={map} />
          <IonLabel>Saham</IonLabel>
        </IonTabButton> */}

        {/* Route halaman saham */}
        <IonTabButton tab="saham" onClick={handleCLickSahamPage} selected={location.pathname === "/home/saham"}>
          <IonIcon icon={map} />
          <IonLabel>Market Saham</IonLabel>
        </IonTabButton>

        {/* <IonTabButton tab="global" href="/home/global" selected={location.pathname === "/home/global"}>
          <IonIcon icon={radio} />
          <IonLabel>Global</IonLabel>
        </IonTabButton> */}

        {/* Route halaman global */}
        <IonTabButton tab="global" onClick={handleClickGlobalPage} selected={location.pathname === "/home/global"}>
          <IonIcon icon={radio} />
          <IonLabel>Global</IonLabel>
        </IonTabButton>

        {/* Route halaman user account */}
        <IonTabButton tab="user" onClick={handleClickUser} selected={location.pathname === "/home/user"}>
          <IonIcon icon={personCircle} />
          <IonLabel>Users</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}

