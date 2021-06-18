import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../model/user.model';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  registerForm;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])[A-Za-z\\d]{6,30}')]],
      name: ['', [Validators.required, Validators.maxLength(40)]],
      surname: ['', [Validators.required, Validators.maxLength(40)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.checkIfEmailExists(this.registerForm.value.email).subscribe(val => {
      if (val === false) {
        const form = this.registerForm.value;
        const user = new User(form.email, form.password, form.name, form.surname);
        user.password = btoa(user.password);
        console.log(`User will be created`, user);

        this.userService.createUser(user).subscribe(response => {
          Swal.fire({
            icon: 'success',
            title: 'ok',
            text: 'User created successfully!'
          });
        }, error => {
          console.error(`Error ${error}`);
          Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: 'Something went wrong...'
          });
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: 'User with such email already exists'
        });
      }
    });
  }
}
