import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  faculties: string[] = [
    "Ekonomi", "Sastra", "Teknik Mesin"
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name': ['', Validators.compose([
        Validators.required, 
        Validators.minLength(5), 
        Validators.maxLength(20), 
        Validators.pattern('.*\\S.*[a-zA-z]')
      ])],
      'nim': ['', Validators.compose([
        Validators.required, 
        Validators.maxLength(8), 
        Validators.pattern('^(?=.*[0-9])[0-9]+$')
      ])],
      'faculty': ['', Validators.required],
      'entryDate' : ['', Validators.required],
      'birthDate' : ['', Validators.required],
      'address': [''],
      'notes': [''],
      'phoneNumber': ['', Validators.compose([
        Validators.maxLength(13),
        Validators.pattern('^(?=.*[0-9])[0-9]+$')
      ])],
      'email': ['', Validators.compose([
        Validators.email , Validators.required
      ])],
      'check': ['', Validators.requiredTrue]
    })
  }

  submit() {
    console.log(this.form);
    alert("submitted!");
  }
}
