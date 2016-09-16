import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {
    private _token: string = null;
    private _redirectUrl = '/';
    private _username: string = 'anonymous';

    constructor() {
        this._token = localStorage.getItem('token');
    }

    public isLoggedIn(): boolean {
        return !!this._token;
    }

    public login(login, password): Observable<string> {
        if (login === 'test') {
            this._token = 'test_token';
            this._username = login;
            return Observable.create((o) => o.next(this._redirectUrl));
        } else {
            return Observable.create((o) => o.error(new Error('Invalid credentials')));
        }
    }

    public logout(): void {
        this._token = null;
    }

    set redirectUrl(value: string) {
        this._redirectUrl = value;
    }

    get username(): string {
        return this._username;
    }
}
