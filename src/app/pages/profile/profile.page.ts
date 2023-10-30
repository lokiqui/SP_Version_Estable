import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserProfile } from 'src/app/models/user';
import { ProfileService } from './profile.service';
import { Observable, Subscription } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { ProfileStore } from './profile.store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers: [ProfileStore],
})
export class ProfilePage implements OnDestroy, OnInit {
  public userProfile$: Observable<UserProfile> = this.profileStore.userProfile$;
    private userProfileSubscription: Subscription;
  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    private alertCtrl: AlertController,
    private readonly profileStore: ProfileStore
  ) {}

  ngOnInit(): void {
    this.userProfileSubscription = this.profileService
      .getUserProfile()
      .subscribe((userProfile: UserProfile) => this.profileStore.setState(userProfile));
  }

  ngOnDestroy(): void {
    this.userProfileSubscription?.unsubscribe();
  }

  async logOut(): Promise<void> {
    await this.authService.logout();
    this.router.navigateByUrl('login');
  }

  updateName(): void {
    this.userProfileSubscription = this.userProfile$.pipe(first()).subscribe(async userProfile => {
      const alert = await this.alertCtrl.create({
        subHeader: 'Nombre',
        inputs: [
          {
            type: 'text',
            name: 'Nombre',
            placeholder: 'Tu nombre',
            value: userProfile.Nombre,
          },
        ],
        buttons: [
          { text: 'Cancel' },
          {
            text: 'Save',
            handler: data => {
              this.profileStore.updateUserName(data.Nombre);
            },
          },
        ],
      });
      return await alert.present();
    });
  }
  updateApellido(): void {
    this.userProfileSubscription = this.userProfile$.pipe(first()).subscribe(async userProfile => {
      const alert = await this.alertCtrl.create({
        subHeader: 'Apellido',
        inputs: [
          {
            type: 'text',
            name: 'Apellido',
            placeholder: 'Tu Apellido',
            value: userProfile.Apellido,
          },
        ],
        buttons: [
          { text: 'Cancel' },
          {
            text: 'Save',
            handler: data => {
              this.profileStore.updateApellido(data.Apellido);
            },
          },
        ],
      });
      return await alert.present();
    });
  }

  updateDNI(): void {
    this.userProfileSubscription = this.userProfile$.pipe(first()).subscribe(async userProfile => {
      const alert = await this.alertCtrl.create({
        subHeader: 'DNI',
        inputs: [
          {
            type: 'text',
            name: 'DNI',
            placeholder: 'Tu DNI',
            value: userProfile.DNI,
          },
        ],
        buttons: [
          { text: 'Cancel' },
          {
            text: 'Save',
            handler: data => {
              this.profileStore.updateDNI(data.DNI);
            },
          },
        ],
      });
      return await alert.present();
    });
  }

  updateNacimiento(): void {
    this.userProfileSubscription = this.userProfile$.pipe(first()).subscribe(async userProfile => {
      const alert = await this.alertCtrl.create({
        subHeader: 'Fecha de Nacimiento',
        inputs: [
          {
            type: 'text',
            name: 'Fecha_Nacimiento',
            placeholder: 'DD/MM/AAAA',
            value: userProfile.Fecha_Nacimiento,
          },
        ],
        buttons: [
          { text: 'Cancel' },
          {
            text: 'Save',
            handler: data => {
              this.profileStore.updateNacimiento(data.Fecha_Nacimiento);
            },
          },
        ],
      });
      return await alert.present();
    });
  }

  updateSexo(): void {
    this.userProfileSubscription = this.userProfile$.pipe(first()).subscribe(async userProfile => {
      const alert = await this.alertCtrl.create({
        subHeader: 'Sexo',
        inputs: [
          {
            type: 'text',
            name: 'Sexo',
            placeholder: 'Tu Sexo',
            value: userProfile.Sexo,
          },
        ],
        buttons: [
          { text: 'Cancel' },
          {
            text: 'Save',
            handler: data => {
              this.profileStore.updateSexo(data.Sexo);
            },
          },
        ],
      });
      return await alert.present();
    });
  }

  updateNacionalidad(): void {
    this.userProfileSubscription = this.userProfile$.pipe(first()).subscribe(async userProfile => {
      const alert = await this.alertCtrl.create({
        subHeader: 'Nacionalidad',
        inputs: [
          {
            type: 'text',
            name: 'Nacionalidad',
            placeholder: 'Tu Nacionalidad',
            value: userProfile.Nacionalidad,
          },
        ],
        buttons: [
          { text: 'Cancel' },
          {
            text: 'Save',
            handler: data => {
              this.profileStore.updateNacionalidad(data.Nacionalidad);
            },
          },
        ],
      });
      return await alert.present();
    });
  }

  async updateEmail(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { type: 'text', name: 'newEmail', placeholder: 'Your new email' },
        { name: 'password', placeholder: 'Your password', type: 'password' },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileStore.updateUserEmail({ email: data.newEmail, password: data.password });
          },
        },
      ],
    });
    return await alert.present();
  }

  async updatePassword(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { name: 'newPassword', placeholder: 'New password', type: 'password' },
        { name: 'oldPassword', placeholder: 'Old password', type: 'password' },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileStore.updateUserPassword({ newPassword: data.newPassword, oldPassword: data.oldPassword });
          },
        },
      ],
    });
    return await alert.present();
  }
}
