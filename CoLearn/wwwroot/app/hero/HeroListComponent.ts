import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Hero } from "./Hero";

@Component({
    moduleId: module.id,
    selector: "hero-list",
    templateUrl: "./HeroListComponent.html"
})
export class HeroListComponent implements OnInit {

    public heroList: Hero[];

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.data.subscribe(
            (data: { heroList: Hero[] }) => {
                this.heroList = data.heroList;
            }
        )
    }
}
