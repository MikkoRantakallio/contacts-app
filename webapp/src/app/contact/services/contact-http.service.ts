import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Contact} from '../contact';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';

@Injectable()
export class ContactHttpService {

  private url: string;

  constructor(private http: HttpClient) {

//    this.url = 'http://localhost:62204/api/contacts';
    this.url = environment.endpointUrl;
  }

  get(): Observable<Contact[]> {
    return this.http.get(this.url).map((response) => {
      return response as Contact[];
    });
  }

  create(contact: Contact) {
    return this.http.post(this.url, contact).subscribe();
  }

  update(contact: Contact) {

    var idUrl = this.url + '/' + contact.id;

    return this.http.put(idUrl, contact).subscribe();
  }

  delete(id:number) {

    var idUrl = this.url + '/' + id;

    return this.http.delete(idUrl).subscribe();
  }

  getById(id: number): Observable<Contact> {

    var idUrl = this.url + '/' + id;

    return this.http.get(idUrl).map((contact) => {
      return contact as Contact;
    });
  }
}
