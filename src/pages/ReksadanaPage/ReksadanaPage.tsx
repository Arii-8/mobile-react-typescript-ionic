import React from "react";
import CSS from "csstype";
import { IonApp, IonAvatar, IonButtons, IonCard, IonContent, IonHeader, IonItem, IonLabel, IonMenuButton, IonPage, IonText, IonToolbar, IonMenu, IonIcon, IonGrid, IonRow, IonCol, IonImg } from "@ionic/react";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import { informationCircle } from "ionicons/icons";
import { DataManagerIvestasi, DataReksdana } from "../../data/DataReksadana";

const MenuStyle: CSS.Properties = {
    textAlign: "left",
    marginLeft: "9px",
    marginBottom: "20px",
    fontWeight: "540",
    fontFamily: "arial",
};

const ReksadanaPage: React.FC = () => {
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
                <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px", marginBottom: '-10px' }}> Top Performer <span style={{ fontSize: '1.3em' }}><IonIcon icon={informationCircle}></IonIcon></span> </h5>
                    {DataReksdana.map((data) => (
                        <IonCard key={data.id} style={{ padding: '10px', borderRadius: '15px', border: "1px solid darkgray", marginBottom: "-10px", transition: 'transform 0.2s ease-in-out'}} button={true}>
                            <IonItem>
                                <IonAvatar slot="start">
                                <img src={data.picture} alt="Investment Logo" />
                                </IonAvatar>
                                <IonLabel style={{ color: '#828282', fontSize: '0.8em' }}>{data.jenis}</IonLabel>
                            </IonItem>
                            <IonItem lines="none" style={{ marginTop: '10px' }}>
                                <IonLabel style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#273746 ' }}>
                                {data.name}
                                </IonLabel>
                            </IonItem>
                            <IonItem lines="none" style={{ justifyContent: 'space-between' }}>
                                <IonLabel style={{ color: '#828282', fontSize: '0.7em' }}>
                                Minimal
                                <IonText color="dark" style={{ display: 'block', fontWeight: 'bold', fontSize: '1em' }}>
                                    Rp.{data.price}
                                </IonText>
                                </IonLabel>
                                    <IonLabel style={{ color: '#828282', fontSize: '0.7em', textAlign: 'center' }}>
                                    AUM
                                    <IonText color="dark" style={{ display: 'block', fontWeight: 'bold', fontSize: '1em' }}>
                                        {data.aum}
                                    </IonText>
                                </IonLabel>
                                <IonLabel style={{ color: '#828282', fontSize: '0.7em', textAlign: 'right' }}>
                                    Return 1 Tahun
                                <IonText color="success" style={{ display: 'block', fontWeight: 'bold', fontSize: '1em' }}>
                                    {data.value}
                                </IonText>
                                </IonLabel>
                            </IonItem>
                        </IonCard>
                    ))} <br />


                    <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px", marginBottom: '-10px' }}> Manajer Investasi <span style={{ fontSize: '1.3em' }}><IonIcon icon={informationCircle}></IonIcon></span> </h5>
                    <IonGrid>
                        <IonRow>
                            {DataManagerIvestasi.map((item, index) => (
                                <IonCol size="4" key={index}>
                                    <IonCard style={{ border: '1px solid darkgray', borderRadius: '10px', padding: '10px', textAlign: 'center', marginBottom: '-20px', width: '90%', marginLeft: '5px' }}>
                                        <IonAvatar style={{ margin: '0 auto' }}>
                                            <img src={item.picture} alt="Investment Logo" />
                                        </IonAvatar>
                                        <IonLabel>
                                            <br />
                                            <IonText color="dark" style={{ display: 'block', fontWeight: 'bold', fontSize: '1em' }}>
                                                {item.name}
                                            </IonText>
                                            <IonText color="medium" style={{ display: 'block', fontSize: '0.8em' }}>
                                                {item.funds}
                                            </IonText>
                                        </IonLabel>
                                    </IonCard>
                                </IonCol>
                            ))}
                        </IonRow>
                    </IonGrid>
                    <br />
                </IonContent>
            </IonPage>
        </IonApp>
    );
};

export default ReksadanaPage;


// black edition
/*

<IonCard style={{ backgroundColor: '#1C1C1E', padding: '10px', borderRadius: '15px' }}>
                        <IonItem lines="none" style={{ '--background': 'transparent' }}>
                            <IonAvatar slot="start">
                            <img src="https://path-to-image/logo.png" alt="Investment Logo" />
                            </IonAvatar>
                            <IonLabel style={{ color: '#828282', fontSize: '0.8em' }}>Pasar Uang</IonLabel>
                        </IonItem>
                        <IonItem lines="none" style={{ '--background': 'transparent', marginTop: '-10px' }}>
                            <IonLabel style={{ fontSize: '1.1em', fontWeight: 'bold', color: 'white' }}>
                            STAR Money Market Kelas Utama
                            </IonLabel>
                        </IonItem>
                        <IonItem lines="none" style={{ '--background': 'transparent', justifyContent: 'space-between' }}>
                            <IonLabel style={{ color: '#828282', fontSize: '0.7em' }}>
                            Minimal
                            <IonText color="light" style={{ display: 'block', fontWeight: 'bold', fontSize: '1em' }}>
                                Rp10.000
                            </IonText>
                            </IonLabel>
                            <IonLabel style={{ color: '#828282', fontSize: '0.7em', textAlign: 'center' }}>
                            AUM
                            <IonText color="light" style={{ display: 'block', fontWeight: 'bold', fontSize: '1em' }}>
                                69,28 B
                            </IonText>
                            </IonLabel>
                            <IonLabel style={{ color: '#828282', fontSize: '0.7em', textAlign: 'right' }}>
                            Return 1 Tahun
                            <IonText color="success" style={{ display: 'block', fontWeight: 'bold', fontSize: '1em' }}>
                                5,01%
                            </IonText>
                            </IonLabel>
                        </IonItem>
                    </IonCard>

*/