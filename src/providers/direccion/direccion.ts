import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Direccion } from '../../models/direccion';

@Injectable()
export class DireccionProvider {

  direccionRef: AngularFireObject<Direccion>;
  direccion: Observable<Direccion>;

  direccionesRef : AngularFireList<Direccion>;
  direcciones: Observable<Direccion[]>;

  constructor(private afdb: AngularFireDatabase) {
    this.direccionRef = afdb.object('direccion');
    this.direccion = this.direccionRef.valueChanges();
  }

  guardarDireccion(direccion:Direccion){
    this.direccionRef.set(direccion);
  }

}
