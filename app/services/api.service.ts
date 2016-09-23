import {Http, Response, Headers, RequestOptions, RequestOptionsArgs} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable()
export class ApiService {
    constructor(private _http: Http, private _userService: UserService) {
    }

    get(url: string): Observable<Response> {
        return this._http.get(ApiService.apiUrl(url), this.getOptions());
    }

    post(url: string, data): Observable<Response> {
        var body = 'string' === typeof data ? data : JSON.stringify(data);

        return this._http.post(ApiService.apiUrl(url), body, this.getOptions());
    }

    private getOptions(): RequestOptionsArgs {
        var headers = {
            'Content-Type': 'application/json'
        };
        if (this._userService.token) {
            headers['Authorization'] = 'Bearer ' + this._userService.token;
        }
        return new RequestOptions({headers: new Headers(headers)});
    }

    private static apiUrl(path: string) {
        return 'http://localhost:3030' + path;
    }
}
