import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard } from "@ionic/react";
import LogoMT from "../../Assets/LogoMT.png";

interface GetStartedProps {
  onGetStartedClick: () => void;
}

const GetStarted: React.FC<GetStartedProps> = ({ onGetStartedClick }) => {

  return (
    <IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>Market Trade</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <IonCard style={{ width: "200px", textAlign: 'center', marginLeft: "22%" }} button={true}>
            <img alt="logo_mt" src={LogoMT} style={{ display: 'block', margin: '0 auto' }} />
        </IonCard>
        <p style={{ textAlign: 'center' }}>This is the initial page of your Ionic React application.</p>
        <br />
        <IonButton expand="block" onClick={onGetStartedClick}>Get Started</IonButton>
    </IonContent>
</IonPage>

  );
};

export default GetStarted;


// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';

// export const GetStarted: React.FC = () => {
//   const navigation = useIonRouter();

//   const doStarted = () => {
//     navigation.push('/home', 'root', 'replace');
//   };

//   return (
//     <IonReactRouter>
//       <IonPage>
//         <IonHeader>
//           <IonToolbar>
//             <IonTitle>Get Started</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent className="ion-padding">
//           <h1>Welcome to the Get Started Page</h1>
//           <p>This is the initial page of your Ionic React application.</p>
//           <br />
//           <IonButton expand="block" onClick={doStarted}>Get Started</IonButton>
//         </IonContent>
//       </IonPage>
//     </IonReactRouter>
//   );
// };
