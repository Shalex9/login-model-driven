import { Route } from '@angular/router';
import { Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import { CardDetailComponent } from "./card-detail/card-detail.component";
import { LoginComponent } from "./login/login.component";
import { CongratulationComponent } from "./congratulation/congratulation.component";

export const routes: Route[] = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: "login", component: LoginComponent },
    { path: "card-detail", component: CardDetailComponent },
    { path: "congratulation", component: CongratulationComponent },
    { path: '**', redirectTo: 'login' }
]
