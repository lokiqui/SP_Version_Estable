export interface UserCredential {
  email: string;
  password: string;
}

export interface UserProfile {
  email: string;
  Nombre: string;
  Apellido: string;
  DNI: number;
  Fecha_Nacimiento: string;
  Sexo: String;
  Nacionalidad: string;

}

export interface InstructorProfile {
  Nombre: string;
  Apellido: string;
  DNI: number;
  Fecha_Nacimiento: string;
  Sexo: String;
  Nacionalidad: string;

}