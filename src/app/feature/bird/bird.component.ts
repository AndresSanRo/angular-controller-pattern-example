import { Component, Input } from '@angular/core';
import { AnimalCtrl } from '../../shared/Controllers/animal.ctrl';

@Component({
  selector: 'app-bird',
  standalone: true,
  imports: [],
  templateUrl: './bird.component.html',
  styleUrl: './bird.component.scss'
})
export class BirdComponent {

  @Input() ctrl: AnimalCtrl;
  
}
