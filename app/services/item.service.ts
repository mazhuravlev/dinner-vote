import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {ApiService} from "./api.service";
import {Item} from "../models/item";

@Injectable()
export class ItemService {
    constructor(private _api: ApiService) {
    }

    public getItems(): Observable<Item[]> {
        return this._api.get('/items').map(response => response.json().map(i => <Item>i));
    }

    public join(item: Item): Observable<boolean> {
        return this._api.post(`/items/${item.id}/join`, '').map(response => response.ok);
    }
}