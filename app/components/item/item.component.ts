import {Component, Input} from "@angular/core";
import {PathTranslator} from "../PathTranslator";
import {Item} from "./item";

@Component({
    selector: 'item',
    templateUrl: PathTranslator.templatePath('item'),
    styleUrls: [PathTranslator.stylePath('item')],
})
export class ItemComponent {
    @Input() private item: Item;

    private joinClicked() {
    }
}