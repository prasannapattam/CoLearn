import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./AppRoutingModule";
import { HeroModule } from "./hero/HeroModule";

import { AppComponent } from "./AppComponent";

import "rxjs/add/operator/map";
import "hammerjs";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HeroModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}