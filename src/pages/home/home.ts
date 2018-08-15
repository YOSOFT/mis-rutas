import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DireccionProvider } from '../../providers/direccion/direccion';
import { Direccion } from '../../models/direccion';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  direcciones: Observable<Direccion[]>;

  constructor(
    public navCtrl: NavController,
  private servicioDireccion:DireccionProvider) {

  }
  ionViewDidLoad(){
    this.direcciones = this.servicioDireccion.direcciones;
  }

  editarDireccion(key)
  {
    console.log(key);
  }
  crearDireccion(){
    let direccion = new Direccion();
    direccion.nombre = "ItTalent";
    direccion.direccion = "calle 72 15-13";
    direccion.latitud = "4.638586";
    direccion.longitud = "-74.1367512";
    this.servicioDireccion.guardarDireccion(direccion);
  }

}
