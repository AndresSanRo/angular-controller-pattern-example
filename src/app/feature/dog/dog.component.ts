import { Component, Input } from '@angular/core';
import { AnimalCtrl } from '../../shared/Controllers/animal.ctrl';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.scss'
})
export class DogComponent {

  @Input() ctrl: AnimalCtrl;
  
}
