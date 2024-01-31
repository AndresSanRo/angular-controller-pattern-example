import { AnimalCtrl } from "../../shared/Controllers/animal.ctrl";

export class FishImpl extends AnimalCtrl {
    override move() {
        console.log('Fish swims!');
    }
}