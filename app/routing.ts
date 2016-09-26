import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {IndexComponent} from "./components/index/index.component";
import {LoginComponent} from "./components/login/login.component";
import {NewVoteComponent} from "./components/newVote/newVote.component";
import {AuthGuard} from "./services/authGuard.service";
import {ProfileComponent} from "./components/profile/profile.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent},
    {path: 'login', component: LoginComponent},
    {path: 'user/:id/profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'new_vote', component: NewVoteComponent, canActivate: [AuthGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);