import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Contact } from '../models/Contact';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  contactsUrl: string = 'https://apex.oracle.com/pls/apex/eudialyte/contact_api/contacts';
  contactsLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  // Get Contacts
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.contactsUrl}${this.contactsLimit}`);
  }

  // Add Contact
  addTodo(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, httpOptions);
  }

  // Update Contact
  updateContact(contact: Contact): Observable<any> {
    const url = `${this.contactsUrl}/${contact.id}`;
    return this.http.put(url, contact, httpOptions);
  }
}
