import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Contact} from '../contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactHttpService {

  private url: string;

  constructor(private http: HttpClient) {

    this.url = 'http://localhost:62204/api/contacts';
  }

  get(): Observable<Contact[]> {
    return this.http.get(this.url).map((response) => {
      return response as Contact[];
    });
  }

  create (contact: Contact) {
    return this.http.post(this.url, contact).subscribe();
  }
}
