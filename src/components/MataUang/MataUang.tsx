import {
    IonList,
    IonText,
    IonLabel,
    IonNote,
    IonItem,
    setupIonicReact
  } from '@ionic/react';

  setupIonicReact();

const MataUang: React.FC = () => {
    return (
        <>
            <IonList inset={true} style={{ border: '1px solid dakgray' }}  >     
                <IonItem detail={false}>
                    <div className="unread-indicator-wrapper" slot="start"></div>
                    <IonLabel>
                    <strong style={{ marginRight: "100px" }}>Mata <span style={{ color: "#3498DB" }}>Uang</span></strong>
                    
                    <IonText>USD/IDR</IonText>
                    
                    <br />
                    <br />
                    <IonNote color="medium" className="ion-text-wrap">
                        Rp16.267
                    </IonNote>
                    <br />
                        {/* color: "#27AE60" */}
                        {/* color: "#E74C3C" */}
                        <IonNote color="medium" className="ion-text-wrap" style={{ color: "#E74C3C" }}>
                            -178(-1,08%)
                        </IonNote>
                    </IonLabel>
                </IonItem>
            </IonList>

            <IonList inset={true} style={{ border: '1px solid dakgray' }}>
                <IonItem detail={false}>
                    <div className="unread-indicator-wrapper" slot="start"></div>
                    <IonLabel>
                    <strong style={{ marginRight: "100px" }}>Mata <span style={{ color: "#3498DB" }}>Uang</span></strong>
                    
                    <IonText>EUR/IDR</IonText>
                    
                    <br />
                    <br />
                    <IonNote color="medium" className="ion-text-wrap">
                        Rp17.601
                    </IonNote>
                    <br />
                    {/* color: "#27AE60" */}
                    {/* color: "#E74C3C" */}
                    <IonNote color="medium" className="ion-text-wrap" style={{ color: "#27AE60" }}>
                        27(0,15%)
                    </IonNote>
                    </IonLabel>
                </IonItem>
            </IonList>

            <IonList inset={true} style={{ border: '1px solid dakgray' }}>
                <IonItem detail={false}>
                    <div className="unread-indicator-wrapper" slot="start"></div>
                    <IonLabel>
                    <strong style={{ marginRight: "100px" }}>Mata <span style={{ color: "#3498DB" }}>Uang</span></strong>
                    
                    <IonText>JPY/IDR</IonText>
                    
                    <br />
                    <br />
                    <IonNote color="medium" className="ion-text-wrap">
                        Rp101
                    </IonNote>
                    <br />
                    {/* color: "#27AE60" */}
                    {/* color: "#E74C3C" */}
                    <IonNote color="medium" className="ion-text-wrap" style={{ color: "#E74C3C" }}>
                        -2(-1,94%)
                    </IonNote>
                    </IonLabel>
                </IonItem>
            </IonList>

            <IonList inset={true} style={{ border: '1px solid dakgray' }}>
                <IonItem detail={false}>
                    <div className="unread-indicator-wrapper" slot="start"></div>
                    <IonLabel>
                    <strong style={{ marginRight: "100px" }}>Mata <span style={{ color: "#3498DB" }}>Uang</span></strong>
                    
                    <IonText>CHF/IDR</IonText>
                    
                    <br />
                    <br />
                    <IonNote color="medium" className="ion-text-wrap">
                        Rp18.134
                    </IonNote>
                    <br />
                    {/* color: "#27AE60" */}
                    {/* color: "#E74C3C" */}
                    <IonNote color="medium" className="ion-text-wrap" style={{ color: "#E74C3C" }}>
                        -301,3(-1,63%)
                    </IonNote>
                    </IonLabel>
                </IonItem>
            </IonList>

            <IonList inset={true} style={{ border: '1px solid dakgray' }}>
                <IonItem detail={false}>
                    <div className="unread-indicator-wrapper" slot="start"></div>
                    <IonLabel>
                    <strong style={{ marginRight: "100px" }}>Mata <span style={{ color: "#3498DB" }}>Uang</span></strong>
                    
                    <IonText>CAD/IDR</IonText>
                    
                    <br />
                    <br />
                    <IonNote color="medium" className="ion-text-wrap">
                        Rp11.922,7
                    </IonNote>
                    <br />
                    {/* color: "#27AE60" */}
                    {/* color: "#E74C3C" */}
                    <IonNote color="medium" className="ion-text-wrap" style={{ color: "#E74C3C" }}>
                        -84,3(-0,70%)
                    </IonNote>
                    </IonLabel>
                </IonItem>
            </IonList>

            <IonList inset={true} style={{ border: '1px solid dakgray' }}>
                <IonItem detail={false}>
                    <div className="unread-indicator-wrapper" slot="start"></div>
                    <IonLabel>
                    <strong style={{ marginRight: "100px" }}>Mata <span style={{ color: "#3498DB" }}>Uang</span></strong>
                    
                    <IonText>SGD/IDR</IonText>
                    
                    <br />
                    <br />
                    <IonNote color="medium" className="ion-text-wrap">
                        Rp12.045,66
                    </IonNote>
                    <br />
                    {/* color: "#27AE60" */}
                    {/* color: "#E74C3C" */}
                    <IonNote color="medium" className="ion-text-wrap" style={{ color: "#E74C3C" }}>
                        -99,34(-0,82%)
                    </IonNote>
                    </IonLabel>
                </IonItem>
            </IonList>

            <IonList inset={true} style={{ border: '1px solid dakgray' }}>
                <IonItem detail={false}>
                    <div className="unread-indicator-wrapper" slot="start"></div>
                    <IonLabel>
                    <strong style={{ marginRight: "100px" }}>Mata <span style={{ color: "#3498DB" }}>Uang</span></strong>
                    
                    <IonText>AUD/IDR</IonText>
                    
                    <br />
                    <br />
                    <IonNote color="medium" className="ion-text-wrap">
                        Rp10.965,8
                    </IonNote>
                    <br />
                    {/* color: "#27AE60" */}
                    {/* color: "#E74C3C" */}
                    <IonNote color="medium" className="ion-text-wrap" style={{ color: "#27AE60" }}>
                        25,8(0,24%)
                    </IonNote>
                    </IonLabel>
                </IonItem>
            </IonList>

            <IonList inset={true} style={{ border: '1px solid dakgray', marginBottom: "30px" }}>
                <IonItem detail={false}>
                    <div className="unread-indicator-wrapper" slot="start"></div>
                    <IonLabel>
                    <strong style={{ marginRight: "100px" }}>Mata <span style={{ color: "#3498DB" }}>Uang</span></strong>
                    
                    <IonText>CNY/IDR</IonText>
                    
                    <br />
                    <br />
                    <IonNote color="medium" className="ion-text-wrap">
                        Rp2.240
                    </IonNote>
                    <br />
                    {/* color: "#27AE60" */}
                    {/* color: "#E74C3C" */}
                    <IonNote color="medium" className="ion-text-wrap" style={{ color: "#E74C3C" }}>
                        -25,4(-1,12%)
                    </IonNote>
                    </IonLabel>
                </IonItem>
            </IonList>
        </>
    );
  }

export default MataUang;
