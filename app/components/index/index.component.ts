import {Component, OnInit} from "@angular/core";
import {PathTranslator} from "../PathTranslator";
import {UserService} from "../../services/user.service";
import {ItemService} from "../../services/item.service";
import "rxjs/add/operator/concat";
import {Item} from "../../models/item";

@Component({
    templateUrl: PathTranslator.templatePath('index'),
})
export class IndexComponent implements OnInit {
    private items: Item[] = [];
    private canJoin = true;

    constructor(private _userService: UserService, private _itemService: ItemService) {
    }

    ngOnInit(): void {
        this._itemService.getItems().subscribe(items => this.setItems(items));
    }

    private setItems(items: Item[]) {
        this.items = items;
        var me = this._userService.user;
        items.forEach(i => {
            if (i.members.filter(m => m.id === me.id).length === 1) {
                this.canJoin = false;
            }
        });
    }

    private joinItem(item: Item) {
        if (!this._userService.isLoggedIn()) {
            this._userService.gotoLoginPage('/index');
        }
        this._itemService.join(item).concat(this._itemService.getItems()).subscribe(r => {
            if (r instanceof Array) {
                this.setItems(<Item[]>r);
            }
        });
    }
}