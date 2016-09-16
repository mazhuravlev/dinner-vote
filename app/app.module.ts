import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./components/app/app.component";
import {routing} from "./routing";
import {IndexComponent} from "./components/index/index.component";
import {ItemComponent} from "./components/item/item.component";
import {UserService} from "./services/user.service";
import {LoginComponent} from "./components/login/login.component";
import {NewVoteComponent} from "./components/newVote/newVote.component";
import {AuthGuard} from "./services/authGuard.service";


@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, IndexComponent, ItemComponent, LoginComponent, NewVoteComponent],
    bootstrap: [AppComponent],
    providers: [UserService, AuthGuard]
})
export class AppModule {
}