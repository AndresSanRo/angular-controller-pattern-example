import { AnimalCtrl } from "../../shared/Controllers/animal.ctrl";

export class BirdImpl extends AnimalCtrl {
    override move() {
        alert('Bird flies!');
    }
}