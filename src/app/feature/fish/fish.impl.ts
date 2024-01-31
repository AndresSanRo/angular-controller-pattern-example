import { AnimalCtrl } from "../../shared/Controllers/animal.ctrl";

export class FishImpl implements AnimalCtrl {
    move() {
        alert('Fish swims!');
    }
}