import React, { Suspense, lazy } from 'react';
import CSS from "csstype";
import { IonApp, IonPage, IonContent, IonToolbar, IonButtons, IonMenuButton, IonHeader } from '@ionic/react';
import Sidebar from '../../components/layouts/sidebar/Sidebar';

// Lazy load components
// Mata uang
const MataUang = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      import('../../components/MataUang/MataUang').then(module => {
        resolve({ default: module.default });
      });
    }, 2000)
  })
);

// Indeks global component
const IndeksGlobalComponent = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      import('./IndeksGlobal').then(module => {
        resolve({ default: module.default });
      })
    }, 3000);
  })
);

// Komoditas
const Komoditas = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      import('./Komoditas').then(module => {
        resolve({ default: module.default });
      })
    }, 1000);
  })
);

// Style menu css
const MenuStyle: CSS.Properties = {
  textAlign: "left",
  marginLeft: "9px",
  marginBottom: "20px",
  fontWeight: "540",
  fontFamily: "arial",
};

const GlobalPage: React.FC = () => {
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

          {/* index global */}
          <Suspense fallback={<div style={{ textAlign: "center", color: "#3498DB", fontSize: "1.2em", fontWeight: "bold" }}>Loading Indeks Global ...</div>}>
            <IndeksGlobalComponent />
          </Suspense>

          {/* Kurs mata uang asing */}
          <br />
            <div className="content-matauang" style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '10px' }}>
              <Suspense fallback={<div style={{ textAlign: "center", color: "#3498DB", fontSize: "1.2em", fontWeight: "bold" }}>Loading Kurs ...</div>}>
                <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px" }}> Mata uang asing </h5>
                <MataUang />
              </Suspense>
            </div>

          {/* Komoditas */}
          <br />
          <Suspense fallback={<div style={{ textAlign: "center", color: "#3498DB", fontSize: "1.2em", fontWeight: "bold" }}>Loading Komoditas ...</div>}>
            <Komoditas />
          </Suspense>
          
        </IonContent>
      </IonPage>
    </IonApp>
  );
}

export default GlobalPage;
