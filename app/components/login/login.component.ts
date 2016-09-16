import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {PathTranslator} from "../PathTranslator";

@Component({
    templateUrl: PathTranslator.templatePath('login')
})
export class LoginComponent {
    constructor(private _userService: UserService, private _router: Router) {
    }

    private login(login, password): void {
        this._userService.login(login, password).subscribe(
            r => {
                console.log(r);
                this._router.navigateByUrl(r);
            },
            err => alert(err.message)
        );
    }
}
