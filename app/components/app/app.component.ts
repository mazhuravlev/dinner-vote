import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {PathTranslator} from "../PathTranslator";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'my-app',
    templateUrl: PathTranslator.templatePath('app'),
})
export class AppComponent {
    constructor(private _userService: UserService, private _router: Router) {
    }

    private isLoggedIn(): boolean {
        return this._userService.isLoggedIn();
    }

    private logout(): void {
        this._userService.logout();
        this._router.navigateByUrl('/');
    }

    private getUsername(): string {
        return this._userService.username;
    }
}