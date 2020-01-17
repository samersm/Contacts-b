import { Contact } from './Contact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  formData: Contact;
  list: Contact[];
  readonly rootURL = "https://apex.oracle.com/pls/apex/eudialyte/contact_api/contacts/"

  constructor(private http: HttpClient) { }


  // Get Contacts
  // getContacts(): Observable<Contact[]> {
  //   return this.http.get<Contact[]>(this.rootURL);
  // }
  refreshList() {
    this.http.get(this.rootURL)
      .toPromise().then(res => this.list = res as Contact[]);
  }

  // Post Contact
  postContact(formData: Contact) {
    return this.http.post(this.rootURL, formData);
  }

}
