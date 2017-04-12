import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";

import { Observable } from "rxjs/Observable";

import { HeroService } from "./HeroService";
import { Hero } from "./hero";

@Injectable()
export class HeroListResolver implements Resolve<Hero[]> {
    constructor(private service: HeroService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Hero[]> {
        return this.service.list();
    }
}

@Injectable()
export class HeroViewResolver implements Resolve<Hero> {
    constructor(private service: HeroService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Hero> {
        let id: number = route.params["id"];
        return this.service.view(id);
    }
}
