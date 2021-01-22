import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from 'src/models/contacto.model';


@Injectable({
  providedIn: 'root'
})
export class BasededatosService {


  constructor(

    private http: HttpClient
  ) {}

  getLista() {
  }
  agregarContactos(contacto: Contacto) {
    https://proyecto-coolj-default-rtdb.firebaseio.com/contactos.json',contacto)
    .subscribe(
      //Correcto
      (corr) => {
        console.log(corr);
      },
      //Incorrecto
      (error) => {
        console.log(error);
      }
    );
  }
}
