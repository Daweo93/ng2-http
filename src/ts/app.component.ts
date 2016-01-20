import 'rxjs/add/operator/map'

import {Component} from "angular2/core";
import {OnInit} from 'angular2/core'
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {AppService} from "./app.service";

@Component({
	selector: 'my-app',
	template: `<ul><li *ngFor="#one of myPeople">{{one.name}}</li></ul>`
})

export class AppComponent {
	myPeople;

	constructor(public appService: AppService) {}

	getPeople() {
		this.appService.people
			.subscribe(
				people => this.myPeople = people,
				error => console.error('Error: ' + error),
				() => console.log("Done!")
		);
	}

	ngOnInit() {
		this.getPeople();

		console.log(this.myPeople);
	}
}