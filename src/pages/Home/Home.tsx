import React from 'react';
import {
  IonPage,
  IonButtons,
  IonContent,
  IonMenuButton,
  IonToolbar,
  setupIonicReact,
  IonHeader
} from '@ionic/react';
import { ListMenuIndex } from '../../components/ListMenuIndex1/ListMenuIndex1';
import CSS from "csstype";
import { CardMain } from '../../components/CardMain/CardMain';
import { BeritaMain } from '../../components/BeritaMain/BeritaMain';
import './Home.css'; // Importing custom CSS file
import Sidebar from '../../components/layouts/sidebar/Sidebar';
import MataUang from '../../components/MataUang/MataUang';

setupIonicReact();

const MenuStyle: CSS.Properties = {
  textAlign: "left",
  marginLeft: "9px",
  marginBottom: "20px",
  fontWeight: "540",
  fontFamily: "arial",
};

const Home: React.FC = () => {
  return (
    <IonPage id="main-content">
      <div className="header-sidebar">
        <Sidebar />
      </div>

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

      <IonContent className="ion-padding" color="light">
        <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px" }}>
          List Index Global & Mata uang asing.
        </h5>

        <div className="content-lintmenuindex1">
          <ListMenuIndex />
        </div>

        <br />
        <div className="content-matauang">
          <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px" }}> Mata uang asing </h5>
          <MataUang />
        </div>

        <div className="content-tutorialtrade">
          <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px", marginBottom: "20px" }}> Pengenalan Awal </h5>
          <CardMain />
        </div>

        <div className="content-artikelberitaterbaru">
          <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px" }}> Artikel berita terbaru </h5>
          <BeritaMain />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
