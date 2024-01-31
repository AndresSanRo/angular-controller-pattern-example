import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BirdComponent } from './feature/bird/bird.component';
import { DogComponent } from './feature/dog/dog.component';
import { FishComponent } from './feature/fish/fish.component';
import { BirdImpl } from './feature/bird/bird.impl';
import { FishImpl } from './feature/fish/fish.impl';
import { DogImpl } from './feature/dog/dog.impl';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DogComponent, FishComponent, BirdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CtrlComponentsDemo';

  birdImpl = new BirdImpl();
  dogImpl = new DogImpl();
  fishImpl = new FishImpl();

}
