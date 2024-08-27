import { IonContent, IonHeader,IonMenu, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonIcon, setupIonicReact, useIonRouter } from '@ionic/react';
import { airplane, bluetooth, call, newspaper, wifi } from 'ionicons/icons';

setupIonicReact();

const Sidebar: React.FC = () => {

    // ion router
    const navigate = useIonRouter();
    const handleClickNewsPage = () => {
        navigate.push("/home/news", "root", "replace");
    };

    return(
        <>
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem button={true} detail={true} onClick={handleClickNewsPage}>
                            <IonIcon aria-hidden="true" icon={newspaper} slot="start"></IonIcon>
                            <IonLabel>Berita</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
        </>
    );
}

export default Sidebar;

