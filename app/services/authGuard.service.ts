import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {UserService} from "./user.service";

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private _userService: UserService, private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this._userService.isLoggedIn()) {
            return true;
        } else {
            this._userService.redirectUrl = state.url;
            this._router.navigateByUrl('/login');
        }
    }
}
