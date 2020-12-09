import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
nombre ="";
precio = 0;

producto = [];

constructor() { }

ngOnInit() {
}
  
guardarProducto(){
  this.producto.push({
    nombre: this.nombre,
    precio: this.precio
  });

  this.nombre = "";
  this.precio = 0;

  console.log("Guardar producto");
  }
}
