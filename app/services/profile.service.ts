import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {Profile} from "../models/Profile";
import {Observable} from "rxjs";

@Injectable()

export class ProfileService {
    constructor(private _api: ApiService) {
    }

    public getProfile(userId: number): Observable<Profile> {
        return this._api.get(`/user/${userId}/profile`).map(r => <Profile>r.json());
    }
}
