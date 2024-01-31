import { Injectable } from '@angular/core';
import { AnimalCtrl } from '../../../shared/Controllers/animal.ctrl';

@Injectable()
export class MoleService implements AnimalCtrl{
  move(): void {
    alert('Mole digs!');
  }
}
