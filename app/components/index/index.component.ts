import {Component, OnInit} from "@angular/core";
import {PathTranslator} from "../PathTranslator";
import {Item} from "../item/item";
import {UserService} from "../../services/user.service";
import {ItemService} from "../item/item.service";

@Component({
    templateUrl: PathTranslator.templatePath('index'),
})
export class IndexComponent implements OnInit {
    private items: Item[] = [];

    constructor(private _userService: UserService, private _itemService: ItemService) {
    }

    ngOnInit(): void {
        this._itemService.getItems().subscribe(
            items => items.forEach(i => this.items.push(i))
        );
    }

    private startNewItem() {
        this.items.push(new Item('test', 'some description'));
    }
}