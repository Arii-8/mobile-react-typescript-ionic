import React from "react";
import { IonThumbnail, IonItem, IonLabel, IonNote, IonList } from '@ionic/react';
import { DataNewsStarter } from "../../data/DataNews";

export const BeritaMain: React.FC = () => {
    return (
        <>  
            <IonList style={{ width: "96%", margin: "0", padding: "0", border: "1px solid darkgray", borderRadius: "10px", marginLeft: "5px", marginBottom: "40px" }}>    
                {DataNewsStarter.map((data) => {
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
        </>
    );
}
