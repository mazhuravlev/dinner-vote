import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {HttpService} from "./http.service";
import {Item} from "../models/item";

@Injectable()
export class ItemService {
    constructor(private _http: HttpService) {
    }

    public getItems(): Observable<Item[]> {
        return this._http.get(ItemService.apiUrl('/items')).map(response => response.json().map(i => <Item>i));
    }

    public join(item: Item): Observable<boolean> {
        return this._http.post(ItemService.apiUrl(`/items/${item.id}/join`), '').map(response => response.ok);
    }

    private static apiUrl(path: string) {
        return 'http://localhost:3030' + path;
    }
}