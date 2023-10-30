import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonLabel, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
  
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Perfil', url: '/profile', icon: 'person' },
    { title: 'Billetera', url: 'Progreso', icon: 'wallet' },
    { title: 'Turnos', url: '/Turnos', icon: 'airplane' },
    { title: 'Instructores', url: '/instructor', icon: 'person-add' },
    { title: 'Aviones', url: '/avion', icon: 'airplane' },
    { title: ' ' },
    { title: ' ' },
    { title: ' ' },
    { title: ' ' },
    { title: 'Logout', url: '/login', icon: 'log-out' },
  
  ];
}
