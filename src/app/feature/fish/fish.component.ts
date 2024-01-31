import { Component, Input } from '@angular/core';
import { AnimalCtrl } from '../../shared/Controllers/animal.ctrl';

@Component({
  selector: 'app-fish',
  standalone: true,
  imports: [],
  templateUrl: './fish.component.html',
  styleUrl: './fish.component.scss'
})
export class FishComponent {

  @Input() ctrl: AnimalCtrl;

}
