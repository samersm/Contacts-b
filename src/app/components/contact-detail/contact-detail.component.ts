import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      name: '',
      email: '',
      phone: ''
    }
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postContact(form.value).subscribe(res => {
      this.resetForm(form)
    });
  }
}
