import React, { lazy, Suspense } from 'react';
import CSS from "csstype";
import { IonApp, IonPage, IonContent, IonToolbar, IonButtons, IonMenuButton, IonHeader } from '@ionic/react';
import Sidebar from '../../components/layouts/sidebar/Sidebar';

const MenuStyle: CSS.Properties = {
  textAlign: "left",
  marginLeft: "9px",
  marginBottom: "20px",
  fontWeight: "540",
  fontFamily: "arial",
};

const DataSaham = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      import('../../data/DataSaham').then(module => {
        resolve({ default: module.default });
      })
    }, 3000);
  })
);

const SahamPage: React.FC = () => {
  return (
    <IonApp>
      {/* Sidebar Menu */}
      <Sidebar />

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar style={{ backgroundColor: 'white' }}>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <h1 style={MenuStyle}>
              Market <span style={{ color: "#3498DB" }}>Trade</span>
            </h1>
            <hr style={{ borderTop: "3px solid #273746", width: "50%", margin: "0.5rem", marginTop: "-10px" }} />
          </IonToolbar>
        </IonHeader>

        <IonContent>
          
          {/* content saham */}
          <Suspense fallback={<div style={{ textAlign: "center", color: "#3498DB", fontSize: "1.2em", fontWeight: "bold" }}>Loading Saham ...</div>}>
            <DataSaham />
          </Suspense>
        </IonContent>
      </IonPage>
    </IonApp>
  );
}

export default SahamPage;
