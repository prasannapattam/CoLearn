import { Injectable } from "@angular/core";

import { Http, Response, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { Hero } from "./Hero";

@Injectable()
export class HeroService {

    constructor(private http: Http) {

    }

    list(): Observable<Hero[]> {
        return this.http.get("/api/hero/list")
            .map((response: Response) => response.json());
    }

    view(id: number): Observable<Hero> {
        return this.http.get("/api/hero/view", { params: { id: id } })
            .map((response: Response) => response.json());
    }
}
