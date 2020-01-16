import { Contact } from './Contact.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  formData: Contact

  constructor() { }
}
