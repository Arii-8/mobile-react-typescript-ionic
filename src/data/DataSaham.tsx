import React from "react";
import CSS from "csstype";
import { IonPage, IonContent, IonList, IonItem, IonNote, IonLabel, IonGrid, IonRow, IonCol, IonIcon, IonAvatar, IonText } from "@ionic/react";
import { chevronForward } from 'ionicons/icons';
import { SahamAnalisisTerkini, StrategiSahamPopuler, SahamTopGainerDayTrading, SahamDayTrading, IndexSaham, SektorSaham, ETF, TradeData } from "./Data";

// chart
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, LinearScale, PointElement, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

// style
const DataSahamStyle: CSS.Properties = {
  border: "1px solid darkGray",
  borderRadius: "10px",
  padding: "10px",
};

// Styles running trade
const StylesRunningTrade = {
  header: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "0.8em",
    marginLeft: "18px",
  },
  list: {
    border: "1px solid darkGray",
    borderRadius: "10px",
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: "50px",
  },
  time: {
    fontSize: '0.7em',
    fontWeight: 'bold',
    color: 'gray',
  },
  stock: {
    fontSize: '0.7em',
    fontWeight: 'bold',
    color: 'gray',
  },
  volume: {
    fontSize: '0.7em',
    fontWeight: 'bold',
    color: 'gray',
  },
};

const DataSaham: React.FC = () => {
  // Daftar elemen chart
  Chart.register(LineElement, LinearScale, PointElement, CategoryScale, Title, Tooltip, Legend);

  const ihsgData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'IHSG 2024',
        data: [6500, 6700, 6400, 6800, 7100, 7300, 7000, 7200, 7400, 7600, 7800, 8000],
        fill: false,
        backgroundColor: '#27AE60',
        borderColor: '#27AE60',
      },
    ],
  };

  const ihsgOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <IonPage>
      <IonContent>
        {/* Grafik IHSG */}
        <div style={{ padding: '10px' }}>
          <IonList inset={true}>
            <IonItem detail={false}>
              <IonLabel>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <strong style={{ fontSize: "1.2em", marginRight: "10px" }}>IHSG</strong>
                    <span style={{ fontSize: '0.8em', color: 'gray' }}>Indeks Harga Saham Gabungan</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <IonText style={{ fontSize: "1.2em" }}>8.000,00</IonText>
                    <IonText style={{ color: "#27AE60", fontSize: "0.7em", marginLeft: "10px", display: 'block' }}>
                      303,99 (+4,14%)
                    </IonText>
                  </div>
                </div>
              </IonLabel>
            </IonItem>
          </IonList>
          <Line data={ihsgData} options={ihsgOptions} />
        </div>

        {/* Menyesuaikan lebar list dan memusatkan */}
        <IonList inset={true} style={{ width: "80%", margin: "0 auto" }}> 
          <IonGrid>
            <IonRow>
              {/* Setengah dari grid untuk dua item dalam satu baris */}
              <IonCol size="6"> 
                <IonItem button={true} detail={false} style={DataSahamStyle}>
                  <IonLabel>
                    <p style={{ marginRight: "10px", color: "black", fontWeight: "bold" }}>e-IPO</p>
                    <br />
                    <br />
                    <IonNote color="medium" className="ion-text-wrap">
                      0 Saham
                    </IonNote>
                  </IonLabel>
                  <IonIcon icon={chevronForward} slot="end" />
                </IonItem>
              </IonCol>
              <IonCol size="6">
                <IonItem button={true} detail={false} style={DataSahamStyle}>
                  <IonLabel>
                    <p style={{ color: "black", fontWeight: "bold" }}>Agenda Hari Ini</p>
                    <br />
                    <IonNote color="medium" className="ion-text-wrap">
                      0 Agenda
                    </IonNote>
                  </IonLabel>
                  <IonIcon icon={chevronForward} slot="end" />
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonList>

         {/* saham analisis terkini */}
         <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px" }}> Analisis Saham Terkini </h5>
          <div style={{ display: 'flex', overflowX: 'scroll', padding: '10px', marginTop: "-15px" }}>
            {SahamAnalisisTerkini.map((saham) => {
              let color = "black";
              if (saham.value.includes("(0%)")) {
                color = "gray";
              } 
              else if (saham.value.includes("(-")) {
                color = "#E74C3C";
              } 
              else if (saham.value.includes("(+")) {
                color = "#27AE60";
              }

              return (
                <div style={{ flex: '0 0 auto', marginRight: '10px' }} key={saham.id}>
                  <IonItem button={true} detail={false} style={{ border: "1px solid darkGray", borderRadius: "10px", width: "150px" }}>
                    <IonAvatar slot="start" style={{ width: "40px", height: "40px", overflow: "hidden", borderRadius: "50%", marginRight: "10px" }}>
                      <img src={saham.picture} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </IonAvatar>
                    <IonLabel style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <IonNote color="medium" className="ion-text-wrap" style={{ fontSize: "0.6em", margin: 0 }}>
                        {saham.story}
                      </IonNote>
                      <p style={{ color: "black", fontWeight: "bold", fontSize: "0.8em", margin: 0 }}>{saham.name}</p>
                      <IonNote color="medium" className="ion-text-wrap" style={{ fontSize: "0.6em", margin: 0, color: color }}>
                        {saham.value}
                      </IonNote>
                    </IonLabel>
                  </IonItem>
                </div>
              );
            })}
          </div>

            {/* saham top gainer day trading */}
            <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px" }}> Top Gainer Day Trading </h5>
            <div style={{ display: 'flex', overflowX: 'scroll', padding: '10px', marginTop: "-15px" }}>
              {SahamTopGainerDayTrading.map((saham) => {
                return(
                  <div style={{ flex: '0 0 auto', marginRight: '10px' }} key={saham.id}>
                      <IonItem button={true} detail={false} style={{ border: "1px solid darkGray", borderRadius: "10px", width: "150px" }}>
                          <IonAvatar slot="start" style={{ width: "40px", height: "40px", overflow: "hidden", borderRadius: "50%", marginRight: "10px" }}>
                          <img src={saham.picture} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          </IonAvatar>
                          <IonLabel style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <p style={{ color: "black", fontWeight: "bold", fontSize: "0.8em", margin: 0 }}>{saham.name}</p>
                            <IonNote color="medium" className="ion-text-wrap" style={{ fontSize: "0.5em", margin: 0, color: "#27AE60" }}>
                                {saham.value}
                            </IonNote>
                          </IonLabel>
                      </IonItem>
                  </div>
                );
              })}
            </div>

          {/* Strategi saham populer */}
          <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px" }}> Strategi Saham Populer </h5>
          <div style={{ display: 'flex', overflowX: 'scroll', padding: '10px', whiteSpace: 'nowrap', marginTop: "-15px" }}>
            {StrategiSahamPopuler.map((judul, index) => (
              <div key={index} style={{ display: 'inline-flex', flexDirection: 'column' }}>
                <IonItem button={true} detail={false} style={{ flex: '0 0 auto', border: "1px solid darkGray", borderRadius: "10px", width: "180px", marginRight: "10px", marginBottom: '10px' }}>
                  <p style={{ color: "black", fontWeight: "bold", fontSize: "0.6em", margin: "0px" }}>{judul}</p>
                </IonItem>
              </div>
            ))}
          </div>

          {/* Saham Day Trading */}
          <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px" }}> Saham Day Trading </h5>
          <IonList inset={true} style={{ border: "1px solid darkGray", borderRadius: "10px" }}>
            {SahamDayTrading.map((saham) => {
              let color = "black";
              if (saham.value.includes("(0%)")) {
                color = "gray";
              } else if (saham.value.includes("(-")) {
                color = "#E74C3C";
              } else if (saham.value.includes("(+")) {
                color = "#27AE60";
              }

              return (
                <IonItem button={true} detail={false} key={saham.id}>
                  <IonAvatar slot="start">
                    <img alt="Silhouette of a person's head" src={saham.picture} />
                  </IonAvatar>
                  <IonLabel style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '0.8em', fontWeight: 'bold' }}>{saham.name}</span>
                    <span style={{ fontSize: '0.5em', color: 'gray' }}>{saham.nameLength}</span>
                  </IonLabel>
                  <IonLabel style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <IonNote style={{ color: "#1F618D", fontSize: '0.8em' }}>{saham.price}</IonNote>
                    <IonNote style={{ color: color, fontSize: '0.6em' }}>{saham.value}</IonNote>
                  </IonLabel>
                </IonItem>
              );
            })}
          </IonList>

        {/* Index saham */}
         <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px" }}> Indeks Saham </h5>
          <div style={{ display: 'flex', overflowX: 'scroll', padding: '10px', marginTop: "-15px" }}>
            {IndexSaham.map((saham) => {
              let color = "black";
              if (saham.value.includes("0%")) {
                color = "gray";
              } 
              else if (saham.value.includes("-")) {
                color = "#E74C3C";
              } 
              else if (saham.value.includes("+")) {
                color = "#27AE60";
              }

              return (
                <div style={{ flex: '0 0 auto', marginRight: '10px' }} key={saham.id}>
                  <IonItem button={true} detail={false} style={{ border: "1px solid darkGray", borderRadius: "10px", width: "120px" }}>
                    <IonLabel style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ color: "black", fontWeight: "bold", fontSize: "0.8em", margin: 0 }}>{saham.name}</p>
                      <IonNote color="medium" className="ion-text-wrap" style={{ fontSize: "0.6em", margin: 0 }}>
                        {saham.indeks}
                      </IonNote>
                      <IonNote color="medium" className="ion-text-wrap" style={{ fontSize: "0.6em", margin: 0, color: color }}>
                        {saham.value}
                      </IonNote>
                    </IonLabel>
                  </IonItem>
                </div>
              );
            })}
          </div>

          {/* Sektor saham */}
         <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px" }}> Sektor Saham </h5>
          <div style={{ display: 'flex', overflowX: 'scroll', padding: '10px', marginTop: "-15px" }}>
            {SektorSaham.map((saham) => {
              let color = "black";
              if (saham.value.includes("(0%)")) {
                color = "gray";
              } 
              else if (saham.value.includes("(-")) {
                color = "#E74C3C";
              } 
              else if (saham.value.includes("(+")) {
                color = "#27AE60";
              }

              return (
                <div style={{ flex: '0 0 auto', marginRight: '10px' }} key={saham.id}>
                  <IonItem button={true} detail={false} style={{ border: "1px solid darkGray", borderRadius: "10px", width: "170px" }}>
                    <IonLabel style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ color: "black", fontWeight: "bold", fontSize: "0.8em", margin: 0 }}>{saham.name}</p>
                      <IonNote color="medium" className="ion-text-wrap" style={{ fontSize: "0.6em", margin: 0 }}>
                        {saham.totalSaham}
                      </IonNote>
                      <IonNote color="medium" className="ion-text-wrap" style={{ fontSize: "0.6em", margin: 0, color: color }}>
                        {saham.value}
                      </IonNote>
                    </IonLabel>
                  </IonItem>
                </div>
              );
            })}
          </div>

          {/* Running Trade */}
          <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px" }}> Running Trade </h5>
          <IonList inset={true} style={StylesRunningTrade.list}>
            {TradeData.map((trade, index) => (
              <IonItem key={index} detail={false}>
                <IonLabel style={StylesRunningTrade.label}>
                  <span style={StylesRunningTrade.time}>{trade.time}</span>
                  <span style={StylesRunningTrade.stock}>{trade.stock}</span>
                  <IonNote style={trade.priceColor}>{trade.price}</IonNote>
                  <IonNote style={StylesRunningTrade.volume}>{trade.volume}</IonNote>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>


        {/* ETF */}
         <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px" }}> Indeks Saham </h5>
          <div style={{ display: 'flex', overflowX: 'scroll', padding: '10px', marginTop: "-15px" }}>
            {ETF.map((etf) => {
              let color = "black";
              if (etf.value.includes("0%")) {
                color = "gray";
              } 
              else if (etf.value.includes("-")) {
                color = "#E74C3C";
              } 
              else if (etf.value.includes("+")) {
                color = "#27AE60";
              }

              return (
                <div style={{ flex: '0 0 auto', marginRight: '10px' }} key={etf.id}>
                  <IonItem button={true} detail={false} style={{ border: "1px solid darkGray", borderRadius: "10px", width: "120px" }}>
                    <IonLabel style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ color: "black", fontWeight: "bold", fontSize: "0.8em", margin: 0 }}>{etf.name}</p>
                      <IonNote color="medium" className="ion-text-wrap" style={{ fontSize: "0.6em", margin: 0 }}>
                        {etf.indeks}
                      </IonNote>
                      <IonNote color="medium" className="ion-text-wrap" style={{ fontSize: "0.6em", margin: 0, color: color }}>
                        {etf.value}
                      </IonNote>
                    </IonLabel>
                  </IonItem>
                </div>
              );
            })}
          </div>
      </IonContent>
    </IonPage>
  );
};

export default DataSaham;
