import { Contact } from './Contact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  formData: Contact;
  list: Observable<Contact[]>;
  readonly rootURL = "https://apex.oracle.com/pls/apex/eudialyte/contact_api/contacts/"

  constructor(private http: HttpClient) { }


  // Get Contacts
  refreshList() {
    this.http.get(this.rootURL)
      .toPromise().then(res => this.list = res as Observable<Contact[]>);
  }

  // Post Contact
  postContact(formData: Contact) {
    return this.http.post(this.rootURL, formData);
  }

  // Update Contact
  updateContact(formData: Contact) {
    return this.http.put(this.rootURL + formData.id, formData);
  }

}
