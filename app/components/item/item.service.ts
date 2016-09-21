import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Item} from "./item";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class ItemService {
    constructor(private _http: Http) {
    }

    public getItems(): Observable<Item[]> {
        return this._http.get('http://localhost:3030/items').map(response => response.json().map(i => <Item>i));
    }
}