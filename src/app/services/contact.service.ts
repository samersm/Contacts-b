import { Contact } from './Contact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  items: any;
  formData: Contact;
  list: Contact[];
  readonly rootURL = "https://apex.oracle.com/pls/apex/eudialyte/contact_api/contacts/"

  constructor(public http: HttpClient) { }


  // Get Contacts
  refreshList() {
    this.http.get(this.rootURL)
      .toPromise().then(res => this.list = res as Contact[]);
  }

  // Post Contact
  postContact(formData: Contact) {
    return this.http.post(this.rootURL, formData);
  }

  // Update Contact
  updateContact(formData: Contact) {
    return this.http.put(this.rootURL + formData.id, formData);
  }

  // Delete Contact
  deleteContact(id: number) {
    return this.http.delete(this.rootURL + id);
  }

}
