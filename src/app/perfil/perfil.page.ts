import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  errorlogin = false;
  constructor() { }

  ngOnInit() {
  }
  login() {
    this.errorlogin = true;
   }
  
}
