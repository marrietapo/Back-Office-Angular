import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
})
export class SingupComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage: any;

  submitForm(): void {
    for (const i in this.registerForm.controls) {
      if (this.registerForm.controls.hasOwnProperty(i)) {
        this.registerForm.controls[i].markAsDirty();
        this.registerForm.controls[i].updateValueAndValidity();
      }
    }
    const { usuario, password } = this.registerForm.value;
    this.userService.register(usuario, password).subscribe(
      (user) => {

        this.notificationService.success('Usuario registrado correctamente', '');
      },
      ({ error: { mensaje } }) => {
        this.notificationService.error(mensaje,'');
      }
    );
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private notificationService: NzNotificationService,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      usuario: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
}
