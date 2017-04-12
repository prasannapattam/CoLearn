import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { Hero } from "./Hero";

@Component({
    moduleId: module.id,
    selector: "hero",
    templateUrl: "./HeroComponent.html"
})
export class HeroComponent implements OnInit {

    public hero: Hero;
    public heroForm: FormGroup;

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.route.data.subscribe(
            (data: { hero: Hero }) => {
                this.hero = data.hero;

                //this.heroForm = new FormGroup(
                //    {
                //        id: new FormControl(this.hero.id),
                //        name: new FormControl(this.hero.name)
                //    }
                //);

                this.heroForm = this.formBuilder.group(
                    {
                        id: [this.hero.id, Validators.required],
                        name: [this.hero.name, Validators.required]
                    }
                );
            }
         )
    }

    submitChanges(): void {
        let fg = this.heroForm;
        this.hero = this.heroForm.value;
        debugger;
    }
}
