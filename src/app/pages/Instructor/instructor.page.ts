import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'instructor.page.html',
  styleUrls: ['instructor.page.scss'],
})
export class InstructorPage {
  alertCtrl: any;

  constructor() {}

  async nuevoInstructor(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { type: 'text', name: 'Nombre', placeholder: 'Nombre' },
        { type: 'text', name: 'Apellido', placeholder: 'Apellido' },
        { type: 'number', name: 'DNI', placeholder: 'DNI' },
        { type: 'date', name: 'Edad', placeholder: 'Edad' },
        { type: 'text', name: 'Sexo', placeholder: 'Sexo' },
        { type: 'text', name: 'Nacionalidad', placeholder: 'Nacionalidad' },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            // this.profileStore.updateUserEmail({ email: data.newEmail, password: data.password });
                      },
        },
      ],
    });

}
}
