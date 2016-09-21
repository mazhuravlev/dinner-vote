import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Item} from "./item";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

@Injectable()
export class ItemService {
    constructor(private _http: Http) {
    }

    public getItems(): Observable<Item[]> {
        var data = [
            <Item>{id: 1, title: 'test1', description: 'test1 description'},
            <Item>{id: 2, title: 'test2', description: 'test2 description'},
            <Item>{id: 3, title: 'test3', description: 'test3 description'}
        ];
        return Observable.of(data);
    }
}