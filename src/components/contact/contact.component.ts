import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../services/contact.service";
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public form!: FormGroup;
  isSubmit = false

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: [null, [Validators.required]],
      message: [null, [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.isSubmit = true
    if (this.form.invalid) {
      return
    }
    const contact = this.form.getRawValue()

    this.contactService.sendEmail(contact).subscribe(res => {
      if (res.ok) {
        this.form.reset();
        window.alert('Gửi thông tin thành công')
        this.isSubmit = false

      } else {
        console.error(res);
        this.isSubmit = false
      }
    });
  }

  get nameControl() {
    return this.form.get('name') as FormControl
  }

  get phoneControl() {
    return this.form.get('phone') as FormControl
  }


  get emailControl() {
    return this.form.get('email') as FormControl
  }

  get addressControl() {
    return this.form.get('address') as FormControl
  }

  get messageControl() {
    return this.form.get('message') as FormControl
  }

}
