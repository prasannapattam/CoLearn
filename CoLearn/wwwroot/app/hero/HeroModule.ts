import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";

import { HeroRoutingModule } from "./HeroRoutingModule";
import { HeroListResolver, HeroViewResolver } from "./HeroResolver";
import { HeroService } from "./HeroService";

import { HeroListComponent } from "./HeroListComponent";
import { HeroComponent } from "./HeroComponent";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        MaterialModule,
        HeroRoutingModule
    ],
    declarations: [
        HeroListComponent,
        HeroComponent
    ],
    providers: [
        HeroService,
        HeroListResolver,
        HeroViewResolver
    ],
    exports: [
        HeroListComponent
    ]
})
export class HeroModule {
}
