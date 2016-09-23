import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {PathTranslator} from "../PathTranslator";
import {ApiService} from "../../services/api.service";

@Component({
    templateUrl: PathTranslator.templatePath('login')
})
export class LoginComponent {
    constructor(private _userService: UserService, private _router: Router, private _api: ApiService) {
    }

    private login(login, password): void {
        this._api.post('/login', {name: login, password: password}).map(r => r.json()).subscribe(
            r => {
                this._userService.token = r.token;
                this._userService.onAfterLogin();
            },
            e => alert(e.json())
        )
    }
}
