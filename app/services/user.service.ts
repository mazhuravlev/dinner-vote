import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {User} from "../models/user";

@Injectable()
export class UserService {
    private static TOKEN_KEY: string = '_token';

    private _token: string = null;
    private _redirectUrl = '/';
    private _user: User = new User();

    constructor(private _router: Router) {
        this._token = localStorage.getItem(UserService.TOKEN_KEY);
    }

    public isLoggedIn(): boolean {
        return !!this._token;
    }

    public logout(): void {
        localStorage.removeItem(UserService.TOKEN_KEY);
        this._token = null;
    }

    get token(): string {
        return this._token;
    }

    set token(value) {
        localStorage.setItem(UserService.TOKEN_KEY, value);
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
