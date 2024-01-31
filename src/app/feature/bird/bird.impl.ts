import { AnimalCtrl } from "../../shared/Controllers/animal.ctrl";

export class BirdImpl implements AnimalCtrl {
    move() {
        alert('Bird flies!');
    }
}