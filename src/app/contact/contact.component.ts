import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  cotactForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
    
  });

  onSubmit() {
    console.log(this.cotactForm.value);
    if (this.cotactForm.valid) {
      alert('Form submitted successfully!');
      this.cotactForm.reset();
    }
  else {
      alert('Please fill out all required fields with the correct email format.');
    }
  }


}
