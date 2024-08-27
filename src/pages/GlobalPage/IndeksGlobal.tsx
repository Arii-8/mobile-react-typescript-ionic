import React from 'react';
import { IonCard, IonItem, IonLabel, IonNote } from '@ionic/react';
import { IndeksGlobal } from './data';

const IndeksGlobalComponent: React.FC = () => {
    return(
        <>
            {/* index global */}
            <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px" }}> Indeks Global </h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', padding: '10px', marginTop: "-15px" }}>
            {IndeksGlobal.map((data) => {
              let color = "black";
              if (data.value.includes("0%")) {
                color = "gray";
              } else if (data.value.includes("-")) {
                color = "#E74C3C";
              } else if (data.value.includes("")) {
                color = "#27AE60";
              }

              return (
                <div style={{ flex: '0 0 10%', margin: '5px' }} key={data.id}>
                  <IonCard style={{ marginRight: '-5px', marginLeft: '5px', marginTop: '10px', marginBottom: '-10px', borderRadius: '10px' }}>
                    <IonItem lines='none' detail={false} style={{ border: "1px solid darkGray", borderRadius: "10px", width: "107px", '--background': 'transparent' }}>
                      <IonLabel style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={{ color: "black", fontWeight: "bold", fontSize: "0.8em", margin: 0 }}>{data.name}</p>
                        <IonNote color="medium" className="ion-text-wrap" style={{ fontSize: "0.5em", margin: 0, marginBottom: "5px" }}>
                          {data.nameLength}
                        </IonNote>
                        <IonNote color="medium" className="ion-text-wrap" style={{ fontSize: "0.7em", margin: 0, fontWeight: "bold" }}>
                          {data.indeks}
                        </IonNote>
                        <IonNote color="medium" className="ion-text-wrap" style={{ fontSize: "0.6em", margin: 0, color: color }}>
                          {data.value}
                        </IonNote>
                      </IonLabel>
                    </IonItem>
                  </IonCard>
                </div>
              );
            })}
          </div>
        </>
    );
}

export default IndeksGlobalComponent;
