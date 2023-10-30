import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IonContent, IonDatetime } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'avion.page.html',
  styleUrls: ['avion.page.scss'],
})
export class AvionPage {
  @ViewChild('dateTimePicker') dateTimePicker: IonDatetime;
  Fecha_Compra: string;
  Fecha_Baja_Proyectada: string;
  
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  openDateTimePicker() {
    const dateTimePicker = document.querySelector('ion-datetime');
    if (dateTimePicker) {
      this.openDateTimePicker
    }
  }

}
