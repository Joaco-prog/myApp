import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../models/contacto.model';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.page.html',
  styleUrls: ['./nuevo.page.scss'],
})
export class NuevoPage implements OnInit {

  public contacto: Contacto = {
    nombre: '',
    email: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
