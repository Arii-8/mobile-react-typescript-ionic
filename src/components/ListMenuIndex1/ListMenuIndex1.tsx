import {
    IonList,
    IonLabel,
    IonNote,
    IonItem,
    // IonIcon,
    IonAvatar,
    setupIonicReact,
    IonRouterOutlet,
    useIonRouter
  } from '@ionic/react';
import React from 'react';
// import { listCircle } from 'ionicons/icons';

// image
import SahamLogo from "../../Assets/Saham.png";
// import ObligasiLogo from "../../Assets/Obligasi.png";
import ReksadanaLogo from "../../Assets/Reksadana.png";
import GlobalLogo from "../../Assets/Global.png";

setupIonicReact();

export const ListMenuIndex: React.FC = () => {

    const navigation = useIonRouter();

    const handleClickSahamPage = () => {
        navigation.push('/home/saham', 'root', 'replace');
    };

    const handleClickGlobalPage = () => {
        navigation.push('/home/global', 'root', 'replace');
    };

    const handleClickReksadanaPage = () => {
        navigation.push('/home/reksadana', 'root', 'replace');
    }

    return (
        <>
            <IonList inset={true}>
                <IonItem button={true} onClick={handleClickSahamPage}>
                    <IonAvatar slot="start">
                        <img alt="Silhouette of a person's head" src={SahamLogo} />
                    </IonAvatar>
                    {/* <IonIcon color="danger" slot="start" icon={listCircle} size="large"></IonIcon> */}
                    <IonLabel>Saham</IonLabel>
                    {/* <IonNote slot="end" style={{ color: "#1F618D" }}>6</IonNote> */}
                </IonItem>

                {/* <IonItem button={true} onClick={handleClickObligasiPage}> */}
                    {/* <IonAvatar slot="start"> */}
                        {/* <img alt="Silhouette of a person's head" src={ObligasiLogo} /> */}
                    {/* </IonAvatar> */}
                    {/* <IonIcon color="tertiary" slot="start" icon={listCircle} size="large"></IonIcon> */}
                    {/* <IonLabel>Obligasi</IonLabel> */}
                    {/* <IonNote slot="end" style={{ color: "#1F618D" }}>15</IonNote> */}
                {/* </IonItem> */}

                <IonItem button={true} onClick={handleClickReksadanaPage}>
                    <IonAvatar slot="start">
                        <img alt="Silhouette of a person's head" src={ReksadanaLogo} />
                    </IonAvatar>
                    {/* <IonIcon color="success" slot="start" icon={listCircle} size="large"></IonIcon> */}
                    <IonLabel>Reksadana</IonLabel>
                    {/* <IonNote slot="end" style={{ color: "#1F618D" }}>3</IonNote> */}
                </IonItem>

                <IonItem button={true} onClick={handleClickGlobalPage}>
                    <IonAvatar slot="start">
                        <img alt="Silhouette of a person's head" src={GlobalLogo} />
                    </IonAvatar>
                    {/* <IonIcon color="warning" slot="start" icon={listCircle} size="large"></IonIcon> */}
                    <IonLabel>Global</IonLabel>
                    {/* <IonNote slot="end" style={{ color: "#1F618D" }}>8</IonNote> */}
                </IonItem>
            </IonList>
        </>
    );
  }