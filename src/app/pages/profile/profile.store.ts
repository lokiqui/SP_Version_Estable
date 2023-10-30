import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { ProfileService } from './profile.service';

export interface ProfileState {
  email: string;
  Nombre: string;
  Apellido: string;
  DNI: number;
  Fecha_Nacimiento: string;
  Sexo: String
  Nacionalidad: string;
}

@Injectable()
export class ProfileStore extends ComponentStore<ProfileState> {
  constructor(private readonly profileService: ProfileService) {
    super({ email: '', Nombre: '', Apellido: '', DNI: 0,   Fecha_Nacimiento: '',   Sexo: '',   Nacionalidad: '' });
  }

  
  readonly userProfile$: Observable<ProfileState> = this.select(state => state);
  readonly updateEmail = this.updater((state, email: string) => ({ ...state, email }));
  readonly updateFullName = this.updater((state, Nombre: string) => ({ ...state, Nombre }));
  readonly update_Apellido = this.updater((state, Apellido: string) => ({ ...state, Apellido }));
  readonly update_DNI = this.updater((state, DNI: number) => ({ ...state, DNI }));
  readonly updateFecha_Nacimiento = this.updater((state, Fecha_Nacimiento: string) => ({ ...state, Fecha_Nacimiento }));
  readonly update_Sexo = this.updater((state, Sexo: string) => ({ ...state, Sexo }));
  readonly update_Nacionalidad = this.updater((state, Nacionalidad: string) => ({ ...state, Nacionalidad }));



  readonly updateUserName = this.effect ((Nombre$: Observable<string>) => {
    return Nombre$.pipe(
      switchMap(Nombre => {
        return this.profileService.updateName(Nombre).pipe(
          tap({
            next: () => this.updateFullName(Nombre),
            error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });  
  readonly updateApellido = this.effect((Apellido$: Observable<string>) => {
    return Apellido$.pipe(
      switchMap(Apellido => {
        return this.profileService.updateApellido(Apellido).pipe(
          tap({
            next: () => this.update_Apellido(Apellido),
            error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });

  readonly updateSexo = this.effect((Sexo$: Observable<string>) => {
    return Sexo$.pipe(
      switchMap(Sexo => {
        return this.profileService.updateSexo(Sexo).pipe(
          tap({
            next: () => this.update_Sexo(Sexo),
            error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });

  readonly updateNacionalidad = this.effect((Nacionalidad$: Observable<string>) => {
    return Nacionalidad$.pipe(
      switchMap(Nacionalidad => {
        return this.profileService.updateNacionalidad(Nacionalidad).pipe(
          tap({
            next: () => this.update_Nacionalidad(Nacionalidad),
            error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });
  readonly updateNacimiento = this.effect((Fecha_Nacimiento$: Observable<string>) => {
    return Fecha_Nacimiento$.pipe(
      switchMap(Fecha_Nacimiento => {
        return this.profileService.updateNacimiento(Fecha_Nacimiento).pipe(
          tap({
            next: () => this.updateFecha_Nacimiento(Fecha_Nacimiento),
            error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });
  readonly updateDNI = this.effect((DNI$: Observable<number>) => {
    return DNI$.pipe(
      switchMap(DNI => {
        return this.profileService.updateDNI(DNI).pipe(
          tap({
            next: () => this.update_DNI(DNI),
            error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });

  readonly updateUserEmail = this.effect((credential$: Observable<{ email: string; password: string }>) => {
    return credential$.pipe(
      switchMap(({ email, password }) =>
        this.profileService.updateEmail(email, password).pipe(
          tap({
            next: () => this.updateEmail(email),
            error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  readonly updateUserPassword = this.effect((passwords$: Observable<{ newPassword: string; oldPassword: string }>) => {
    return passwords$.pipe(
      switchMap(({ newPassword, oldPassword }) =>
        this.profileService.updatePassword(newPassword, oldPassword).pipe(
          tap({
            next: () => console.log('Updated Passwords'),
            error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });
}
