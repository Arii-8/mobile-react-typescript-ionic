import React from "react";
import { IonCard, IonCol, IonGrid, IonRow, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, setupIonicReact } from "@ionic/react";
import  BelajarSahamMain  from "../../Assets/BelajarSahamMain.png";
import AnalisisSahamMain from "../../Assets/AnalisisSahamMain.png";
import IndeksMain from "../../Assets/IndeksMain.png";

setupIonicReact();

export const CardMain: React.FC = () => {
    return (
        <>
            <IonGrid style={{ marginBottom: "-20px", paddingLeft: "15px", aligItem: "center", marginTop: "-30px" }}>
                <IonRow>
                    <IonCol style={{ marginLeft: "-29px" }}>
                        <IonCard style={{ width: "100px" }} button={true}>
                            <img alt="Belajar Saham" src={BelajarSahamMain} />
                            <IonCardContent style={{ marginTop: "-24px", textAlign: "center", fontSize: "0.6em" }}>
                                Belajar
                            </IonCardContent>
                        </IonCard>
                    </IonCol>

                    <IonCol style={{ marginLeft: "-37px", }}>
                        <IonCard style={{ width: "100px" }} button={true}>
                            <img alt="Analisis Saham" src={AnalisisSahamMain} />
                            <IonCardContent style={{ marginTop: "-24px", textAlign: "center", fontSize: "0.6em" }}>
                                Analisis Saham
                            </IonCardContent>
                        </IonCard>
                    </IonCol>

                    <IonCol style={{ marginLeft: "-37px" }}>    
                        <IonCard style={{ width: "100px" }} button={true}>
                            <img alt="Indeks" src={IndeksMain} style={{ marginTop: "26px" }} />
                            <IonCardContent style={{ marginTop: "-16px", textAlign: "center", fontSize: "0.6em" }}>
                                Indeks
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    );
}

