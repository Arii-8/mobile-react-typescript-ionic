import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { IonButton, IonContent, IonImg, IonPage } from "@ionic/react";
import React, { useState } from "react";

const CameraPlugins: React.FC = () => {

    // state photo camera
    const [photo, setPhoto] = useState<string | undefined>();
    const takePhoto = async () => {
        const image = await Camera.getPhoto({
            quality: 100,
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            allowEditing: true,
            saveToGallery: true
        });
        setPhoto(image.webPath);
    }

    return(
        <IonPage>
            <IonContent>
            <IonButton onClick={takePhoto}>Take Photo</IonButton>
                {photo && <IonImg src={photo} />}
            </IonContent>
        </IonPage>
    );
}

export default CameraPlugins;
