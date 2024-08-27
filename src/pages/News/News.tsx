import React from "react";
import { IonApp, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonNote, IonPage, IonThumbnail, IonToolbar } from "@ionic/react";
import CSS from "csstype";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import { DataNews } from "../../data/DataNews";

const MenuStyle: CSS.Properties = {
    textAlign: "left",
    marginLeft: "9px",
    marginBottom: "20px",
    fontWeight: "540",
    fontFamily: "arial",
  };

const News: React.FC = () => {
    return(
        <IonApp>
            {/* Sidebar Menu */}
            <Sidebar />

            <IonPage>
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

                    <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px" }}> Berita Artikle </h5>
                    <IonList style={{ width: "96%", margin: "0", padding: "0", border: "1px solid darkgray", borderRadius: "10px", marginLeft: "5px" }}>
                        {DataNews.map((data) => {
                            return(
                                <IonItem button={true} detail={true} style={{ width: "100%" }} key={data.id}>
                                    <IonThumbnail slot="start">
                                        <img alt="Silhouette of mountains" src={data.newsimg}/>
                                    </IonThumbnail>

                                    <br />
                                    <IonLabel>
                                        <strong style={{ fontSize: "0.8em" }}>{data.title}</strong>    
                                        <br /><br />
                                        <IonNote color="medium" className="ion-text-wrap"style={{ width: "100%", fontSize: "0.6em" }}>
                                            {data.posted}
                                        </IonNote>
                                    </IonLabel>

                                    {/* <div className="metadata-end-wrapper" slot="end">
                                        <IonNote color="medium">06:11</IonNote>
                                    </div> */}
                                </IonItem>
                            );
                        })}
                    </IonList>
                </IonContent>

            </IonPage>
        </IonApp>
    );
}

export default News;

