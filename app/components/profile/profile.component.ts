import {Component, Input, OnInit} from "@angular/core";
import {PathTranslator} from "../PathTranslator";
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../models/Profile";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: PathTranslator.templatePath('profile')
})

export class ProfileComponent implements OnInit {
    @Input() private profile: Profile;

    constructor(private _profileService: ProfileService, private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        if (!this.profile) {
            this._route.params.subscribe(params => {
                this._profileService.getProfile(params['id']).subscribe(profile => this.profile = profile);
            });
        }
    }
}
