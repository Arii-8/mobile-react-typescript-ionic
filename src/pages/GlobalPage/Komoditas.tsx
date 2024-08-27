import { IonIcon, IonItem, IonLabel, IonList, IonNote } from "@ionic/react";
import { documents } from "ionicons/icons";
import CSS from "csstype";
import React from "react";

const styles: { [key: string]: CSS.Properties } = {
    item: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: "100px",
    },
    icon: {
      fontSize: '1.7em',
      fontWeight: 'bold',
      color: 'gray',
    },
    text: {
      fontSize: '0.7em',
      color: 'gray',
      fontWeight: 'bold',
      marginTop: "10px",
    },
    rightLabel: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    price: {
      fontSize: '0.7em',
      color: 'gray',
      fontWeight: 'bold',
      marginBottom: "5px",
    },
    note: {
      fontSize: '0.6em',
      fontWeight: 'bold',
      color: '#E74C3C',
    },
    list: {
      border: "1px solid darkGray",
      borderRadius: "10px",
    },
    header: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "0.8em",
      marginLeft: "18px",
    },
  };

const Komoditas: React.FC = () => {

    // data dummy
  const commodities = [
    { name: "Copper", price: "Rp9.684", change: "-469(-4,64%)" },
    { name: "Corn", price: "Rp191", change: "-9,78(-4,86%)" },
    { name: "Natural Gas", price: "Rp2", change: "-0,02(-0,94%)" },
    { name: "Aluminium", price: "Rp2.498", change: "-68,71(-2,68%)" },
    { name: "WTI Crude Oil", price: "Rp83", change: "-0,27(-0,32%)" },
  ];

  return (
    <>
      <h5 style={styles.header}>Komoditas</h5>
      <IonList inset={true} style={styles.list}>
        {commodities.map((commodity, index) => (
          <IonItem key={index} detail={false}>
            <IonLabel style={styles.item}>
              <span style={styles.icon}>
                <IonIcon icon={documents} />
              </span>
              <span style={styles.text}>{commodity.name}</span>
            </IonLabel>
            <IonLabel style={styles.rightLabel}>
              <span style={styles.price}>{commodity.price}</span>
              <IonNote style={styles.note}>{commodity.change}</IonNote>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </>
  );
};

export default Komoditas;

