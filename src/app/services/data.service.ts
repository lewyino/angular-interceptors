import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersonModel} from '../models/person.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private httpClient: HttpClient) {
    }

    public getData(): Observable<Array<PersonModel>> {
        return this.httpClient
            .get('./assets/data.json')
            .pipe(
                map((people: any[]) => people.map((person) => new PersonModel(person))),
            );
    }
}
