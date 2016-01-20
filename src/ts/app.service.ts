import {Injectable} from 'angular2/core'
import {Http} from "angular2/http";

@Injectable()
export class AppService {
	public people;

	constructor(http: Http) {
		this.people = http.get('../people.json')
			.map(response => response.json())
	}
}