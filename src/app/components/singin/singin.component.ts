import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
})
export class SinginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: any;

  submitForm(): void {
    for (const i in this.loginForm.controls) {
      if (this.loginForm.controls.hasOwnProperty(i)) {
        this.loginForm.controls[i].markAsDirty();
        this.loginForm.controls[i].updateValueAndValidity();
      }
    }
    const { usuario, password } = this.loginForm.value;
    this.userService.login(usuario, password).subscribe(
      (user) => {
        this.userService.setUser(user);

        localStorage.setItem("user",JSON.stringify(user));

        this.notificationService.success("Usuario logueado correctamente", "");
        this.router.navigate(['dashboard']);
      },
      ({ error: { mensaje } }) => {
        this.notificationService.error(mensaje,'');
      }
    );
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private notificationService: NzNotificationService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
