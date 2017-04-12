import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroListResolver, HeroViewResolver } from "./HeroResolver";
import { HeroListComponent } from "./HeroListComponent";
import { HeroComponent } from "./HeroComponent";

const appRoutes: Routes = [
    {
        path: "heroes",
        component: HeroListComponent,
        resolve: {
            heroList: HeroListResolver
        }
    },
    {
        path: "hero/:id",
        component: HeroComponent,
        resolve: {
            hero: HeroViewResolver
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HeroRoutingModule {
}