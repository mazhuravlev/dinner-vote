import {Component} from "@angular/core";
import {PathTranslator} from "../PathTranslator";
@Component({
    selector: 'my-app',
    templateUrl: PathTranslator.templatePath('app'),
})
export class AppComponent {
}