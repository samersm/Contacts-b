import { Contact } from './Contact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  items: Contact;
  list: Contact[];
  readonly rootURL = "https://apex.oracle.com/pls/apex/eudialyte/contact_api/contacts/"

  constructor(public http: HttpClient) { }


  // Get Contacts
  refreshList() {
    this.http.get(this.rootURL)
      .toPromise().then(res => this.list = res as Contact[]);
  }

  // Post Contact
  postContact(items: Contact) {
    return this.http.post(this.rootURL, items);
  }

  // Update Contact
  updateContact(items: Contact) {
    return this.http.put(this.rootURL + items.id, items);
  }

  // Delete Contact
  deleteContact(id: number) {
    return this.http.delete(this.rootURL + id);
  }

}
