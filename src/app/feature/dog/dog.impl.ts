import { AnimalCtrl } from "../../shared/Controllers/animal.ctrl";

export class DogImpl implements AnimalCtrl {
    move() {
        alert('Dog runs!');
    }
}