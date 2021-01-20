import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Contacto } from 'src/models/contacto.model';


@Injectable({
  providedIn: 'root'
})
export class BasededatosService {

  private referenciaContactos = this.db.list<Contacto>('listaContactos');

  constructor(private db: AngularFireDatabase) { }

  getListaContactos() {
    return this.ListaContactosRef;
  }
  agregarContactos(contacto: Contacto) {
    return this.listaContactosRef.push(contacto);
  }
}
