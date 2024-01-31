import { AnimalCtrl } from "../../shared/Controllers/animal.ctrl";

export class FishImpl extends AnimalCtrl {
    override move() {
        alert('Fish swims!');
    }
}