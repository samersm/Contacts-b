import { Contact } from './Contact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  formData: Contact
  readonly rootURL = "https://apex.oracle.com/pls/apex/eudialyte/contact_api/contacts/"

  constructor(private http: HttpClient) { }

  // Post Contact
  postContact(formData: Contact) {
    return this.http.post(this.rootURL, formData)
  }

}
