import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {User} from "../models/user";

@Injectable()
export class UserService {
    private _token: string = null;
    private _redirectUrl = '/';
    private _user: User = new User();

    constructor(private _router: Router) {
        this._token = localStorage.getItem('_token');
    }

    public isLoggedIn(): boolean {
        return !!this._token;
    }

    public login(login, password): Observable<string> {
        if (login === 'test') {
            this._token = 'test_token';
            this._user.username = login;
            this._user.id = 1;
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
        return this._user.username;
    }

    get token(): string {
        return this._token;
    }

    public gotoLoginPage(returnUrl: string) {
        this._redirectUrl = returnUrl;
        this._router.navigateByUrl('/login');
    }

    get user(): User {
        return this._user;
    }
}
