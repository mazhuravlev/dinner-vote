import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./components/app/app.component";
import {routing} from "./routing";
import {IndexComponent} from "./components/index/index.component";
import {ItemComponent} from "./components/item/item.component";


@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, IndexComponent, ItemComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}