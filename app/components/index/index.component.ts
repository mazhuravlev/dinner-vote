import {Component} from "@angular/core";
import {PathTranslator} from "../PathTranslator";
import {Item} from "../item/item";
import {UserService} from "../../services/user.service";

@Component({
    templateUrl: PathTranslator.templatePath('index'),
})
export class IndexComponent {
    private items = [new Item('item1', 'some description'), new Item('item2', 'some description')];

    constructor(private _userService: UserService) {

    }

    private startNewItem() {
        this.items.push(new Item('test', 'some description'));
    }
}