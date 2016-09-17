import {Component} from '@angular/core';

@Component({
    moduleId:module.id,
	selector: 'navbar',
	templateUrl: 'navbar.component.html',
})

export class NavbarComponent{
	private projectName:string;

	constructor(){
		this.projectName = 'Through 2 Angular 2';
	}
}