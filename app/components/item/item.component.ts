import {Component, Input, Output, EventEmitter} from "@angular/core";
import {PathTranslator} from "../PathTranslator";
import {Item} from "../../models/item";

@Component({
    selector: 'item',
    templateUrl: PathTranslator.templatePath('item'),
    styleUrls: [PathTranslator.stylePath('item')],
})
export class ItemComponent {
    @Input() private item: Item;
    @Input() private canJoin: boolean = true;
    @Output() private join: EventEmitter<Item> = new EventEmitter<Item>();

    private joinClicked() {
        this.join.emit(this.item);
    }
}