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
            this._user.name = login;
            this._user.id = 1;
            return Observable.create((o) => o.next(this._redirectUrl));
        } else {
            return Observable.create((o) => o.error(new Error('Invalid credentials')));
        }
    }

    public logout(): void {
        this._token = null;
    }

    get token(): string {
        return this._token;
    }

    set token(value) {
        this._token = value;
    }

    set redirectUrl(value: string) {
        this._redirectUrl = value;
    }

    public gotoLoginPage(returnUrl: string) {
        this._redirectUrl = returnUrl;
        this._router.navigateByUrl('/login');
    }

    public onAfterLogin() {
        this._router.navigateByUrl(this._redirectUrl);
    }

    get user(): User {
        return this._user;
    }
}
