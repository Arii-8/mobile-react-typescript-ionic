import React from "react";
import CSS from "csstype";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import { IonApp, IonAvatar, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonNote, IonPage, IonRow, IonToolbar } from "@ionic/react";
import { accountItems, appItems, exitItems, investmentItems, promoItems, settingsItems, stylesUser, supportItems } from "./UserConfig";

// Style menu css
const MenuStyle: CSS.Properties = {
    textAlign: "left",
    marginLeft: "9px",
    marginBottom: "20px",
    fontWeight: "540",
    fontFamily: "arial",
  };

const User: React.FC = () => {
    return(
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

                <div style={{ flex: '0 0 auto', marginRight: '2px', marginLeft: '10px', marginTop: "5px" }}>
                  <IonItem lines="none" button={true} detail={true} style={{ border: "1px solid darkGray", borderRadius: "10px", width: "97%", backgroundColor: "blue" }}>
                    <IonAvatar slot="start" style={{ width: "30px", height: "30px", overflow: "hidden", borderRadius: "50%", marginRight: "10px" }}>
                        <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </IonAvatar>
                    <IonLabel style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ color: "#435a71", fontWeight: "bold", fontSize: "0.8em", margin: 0 }}>USER 001</p>
                    </IonLabel>
                  </IonItem>
                </div>

                <div style={{ display: 'flex', overflowX: 'scroll',  marginTop: "5px", border: "1px solid darkGray", borderRadius: "10px", width: "93.5%", marginLeft: "10px" }}>
                  <IonGrid>
                    <IonRow>
                      {/* Setengah dari grid untuk dua item dalam satu baris */}
                      <IonCol size="4"> 
                        <div style={{ flex: '0 0 auto' }}>
                          <IonItem detail={false} lines="none" style={{ marginTop: "-15px", marginLeft: "-15px" }}>
                            <IonLabel>
                              <IonNote color="medium" className="ion-text-wrap" style={{ fontSize: "0.6em", margin: 0 }}>
                                Saldo Bisa Ditarik
                              </IonNote>
                              <p style={{ color: "#435a71", fontWeight: "bold", fontSize: "0.8em", margin: 0 }}>Rp.2.934.000</p>
                            </IonLabel>
                          </IonItem>
                        </div>
                      </IonCol>
                      <IonCol size="8" style={{ borderLeft: "1px solid darkGray" }}>
                        <div style={{ flex: '0 0 auto' }}>
                          <IonItem detail={false} lines="none" style={{ marginTop: "-15px", marginLeft: "-5px" }}>
                            <IonLabel style={{ display: "flex", gap: "5px" }}>
                              <IonItem button={true} detail={false} lines="none" style={{ fontSize: "0.5em", width: "100px", border: "1px solid darkGray", borderRadius: "10px", backgroundColor: "#3498DB", padding: "0", height: "auto" }}>
                                Deposite
                              </IonItem>
                              <IonItem button={true} detail={false} lines="none" style={{ fontSize: "0.5em", width: "76px", border: "1px solid darkGray", borderRadius: "10px", backgroundColor: "#3498DB", padding: "0", height: "auto" }}>
                                Tarik
                              </IonItem>
                              <IonItem button={true} detail={false} lines="none" style={{ fontSize: "0.5em", width: "97px", border: "1px solid darkGray", borderRadius: "10px", backgroundColor: "#3498DB", padding: "0", height: "auto" }}>
                                Riwayat
                              </IonItem>
                            </IonLabel>
                          </IonItem>
                        </div>
                      </IonCol>

                    </IonRow>
                      <div style={{ flex: '0 0 auto', marginRight: '5px', marginLeft: '5px', marginTop: "10px" }}>
                        <IonItem lines="none" button={true} detail={true} style={{ border: "1px solid darkGray", borderRadius: "10px", width: "100%" }}>
                          <IonAvatar slot="start" style={{ width: "30px", height: "30px", overflow: "hidden", borderRadius: "50%", marginRight: "10px" }}>
                              {/* <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                          </IonAvatar>
                          <IonLabel style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <p style={{ color: "#212f3d", fontWeight: "bold", fontSize: "0.7em", margin: 0 }}>Saldo Diproses</p>
                          </IonLabel>
                          <IonLabel style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}  slot="end">
                            <p style={{ color: "#212f3d", fontWeight: "bold", fontSize: "0.7em", margin: 0 }}>Rp30.210.000</p>
                          </IonLabel>
                        </IonItem>
                      </div>
                  </IonGrid>
                </div>

                <h5 style={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8em", marginLeft: "18px", color: "#212f3d" }}> Akun </h5>
                {/* Akun Section */}
                <IonList inset={true} style={{ border: '1px solid blue', borderRadius: '10px' }}>
                  {accountItems.map((item, index) => (
                    <IonItem button={true} detail={true} key={index}>
                      <IonAvatar slot="start" style={stylesUser.avatar}>
                        <IonIcon icon={item.icon} />
                      </IonAvatar>
                      <IonLabel style={stylesUser.label}>
                        <span style={stylesUser.itemText}>{item.text}</span>
                      </IonLabel>
                    </IonItem>
                  ))}
                </IonList>

                {/* Promosi Section */}
                <h5 style={stylesUser.sectionHeader}>Promosi</h5>
                <IonList inset={true} style={{ border: '1px solid green', borderRadius: '10px' }}>
                  {promoItems.map((item, index) => (
                    <IonItem button={true} detail={true} key={index}>
                      <IonAvatar slot="start" style={stylesUser.avatar}>
                        <IonIcon icon={item.icon} />
                      </IonAvatar>
                      <IonLabel style={stylesUser.label}>
                        <span style={stylesUser.itemText}>{item.text}</span>
                      </IonLabel>
                    </IonItem>
                  ))}
                </IonList>

                {/* Tentang Investasi Section */}
                <h5 style={stylesUser.sectionHeader}>Tentang Investasi</h5>
                <IonList inset={true} style={{ border: '1px solid orange', borderRadius: '10px' }}>
                  {investmentItems.map((item, index) => (
                    <IonItem button={true} detail={true} key={index}>
                      <IonAvatar slot="start" style={stylesUser.avatar}>
                        <IonIcon icon={item.icon} />
                      </IonAvatar>
                      <IonLabel style={stylesUser.label}>
                        <span style={stylesUser.itemText}>{item.text}</span>
                      </IonLabel>
                    </IonItem>
                  ))}
                </IonList>

                {/* Pengaturan Section */}
                <h5 style={stylesUser.sectionHeader}>Pengaturan</h5>
                <IonList inset={true} style={{ border: '1px solid #21618c', borderRadius: '10px' }}>
                  {settingsItems.map((item, index) => (
                    <IonItem button={true} detail={true} key={index}>
                      <IonAvatar slot="start" style={stylesUser.avatar}>
                        <IonIcon icon={item.icon} />
                      </IonAvatar>
                      <IonLabel style={stylesUser.label}>
                        <span style={stylesUser.itemText}>{item.text}</span>
                      </IonLabel>
                    </IonItem>
                  ))}
                </IonList>

                {/* Dukungan Section */}
                <h5 style={stylesUser.sectionHeader}>Dukungan</h5>
                <IonList inset={true} style={{ border: '1px solid #909497', borderRadius: '10px' }}>
                  {supportItems.map((item, index) => (
                    <IonItem button={true} detail={true} key={index}>
                      <IonAvatar slot="start" style={stylesUser.avatar}>
                        <IonIcon icon={item.icon} />
                      </IonAvatar>
                      <IonLabel style={stylesUser.label}>
                        <span style={stylesUser.itemText}>{item.text}</span>
                      </IonLabel>
                    </IonItem>
                  ))}
                </IonList>

                {/* Aplikasi Kami Section */}
                <h5 style={stylesUser.sectionHeader}>Aplikasi Kami</h5>
                <IonList inset={true} style={{ border: '1px solid #8e44ad', borderRadius: '10px' }}>
                  {appItems.map((item, index) => (
                    <IonItem button={true} detail={true} key={index}>
                      <IonAvatar slot="start" style={stylesUser.avatar}>
                        <IonIcon icon={item.icon} />
                      </IonAvatar>
                      <IonLabel style={stylesUser.label}>
                        <span style={stylesUser.itemText}>{item.text}</span>
                      </IonLabel>
                    </IonItem>
                  ))}
                </IonList>

                {/* Keluar */}
                <IonList inset={true} style={{ border: '1px solid red', borderRadius: '10px' }}>
                  {exitItems.map((item, index) => (
                    <IonItem button={true} detail={true} key={index}>
                      <IonAvatar slot="start" style={stylesUser.avatar}>
                        <IonIcon icon={item.icon} />
                      </IonAvatar>
                      <IonLabel style={stylesUser.label}>
                        <span style={stylesUser.itemText}>{item.text}</span>
                      </IonLabel>
                    </IonItem>
                  ))}
                </IonList>
              </IonContent>
            </IonPage>
          </IonApp>
    );
}

export default User;