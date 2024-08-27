import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { IonApp, setupIonicReact, useIonRouter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { BottomBar } from './components/layouts/BottomBar/BottomBar';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import GetStarted from './pages/GetStarted/GetStarted';
import Home from './pages/Home/Home';

setupIonicReact();

const App: React.FC = () => {

  const [showBottomBar, setShowBottomBar] = useState<Boolean>(false);
  const navigation = useIonRouter();

  const handleClickGetStarted = () => {
    setShowBottomBar(true);
    navigation.push('/home', 'root', 'replace');
  }

  return (
    <IonApp>
      <IonReactRouter>
        <Switch>
          {!showBottomBar && (
            <Route exact path="/get-started">
              <GetStarted onGetStartedClick={handleClickGetStarted} />
            </Route>
          )}
          {showBottomBar && (
            <>
              <Route path="/" component={BottomBar} />
              <Redirect to="/home" />
            </>
          )}
          <Redirect exact path="/" to="/get-started" />
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;



// const App: React.FC = () => (
//   <div className='main-page'>
//     <IonApp>
//       <IonReactRouter>
//         <Route path="/get-started" component={GetStarted} exact={true} />
//         <Route path="/home" component={Home} exact={true} />
//         <Redirect exact from="/" to="/get-started" />
//       </IonReactRouter>

//       <GetStarted />
//     </IonApp>
//   </div>
// );