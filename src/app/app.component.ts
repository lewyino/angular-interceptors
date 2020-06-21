import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';
import {Observable} from 'rxjs';
import {PersonModel} from './models/person.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title = 'interceptors';
    public people$: Observable<Array<PersonModel>>;

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        this.people$ = this.dataService.getData();
    }
}
