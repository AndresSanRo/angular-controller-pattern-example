import { AnimalCtrl } from "../../shared/Controllers/animal.ctrl";

export class DogImpl extends AnimalCtrl {
    override move() {
        alert('Dog runs!');
    }
}