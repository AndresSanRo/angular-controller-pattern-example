import { Component } from '@angular/core';
import { AnimalCtrl } from '../../shared/Controllers/animal.ctrl';
import { MoleService } from './services/mole.service';

@Component({
  selector: 'app-mole',
  standalone: true,
  imports: [],
  providers: [
    { provide: AnimalCtrl, useClass: MoleService}
  ],
  templateUrl: './mole.component.html',
  styleUrl: './mole.component.scss'
})
export class MoleComponent {
  constructor(public ctrl: AnimalCtrl) {}
}
