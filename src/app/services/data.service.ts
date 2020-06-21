import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersonModel} from '../models/person.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private httpClient: HttpClient) {
    }

    public getData(): Observable<Array<PersonModel>> {
        return this.httpClient.get<Array<PersonModel>>('./assets/data.json');
    }
}
