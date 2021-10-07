import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { SalesService } from 'src/app/services/sales.service';


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
        this.setLocalStorageData(user);

        this.notificationService.success('Usuario logueado correctamente', '');
        this.productService.getStarted();
        this.salesService.getStarted();
        this.router.navigate(['dashboard']);
      },
      ({ error: { mensaje } }) => {
        this.notificationService.error(mensaje, '');
      }
    );
  }

  setLocalStorageData(data: any) {
    this.localSorageService.setLocalStorageUserId(data.id);
    this.localSorageService.setLocalStorageApiKey(data.apiKey);
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private productService: ProductService,
    private salesService: SalesService,
    private router: Router,
    private notificationService: NzNotificationService,
    private localSorageService: LocalStorageService,
  ) {}

  ngOnInit(): void {

    if(this.localSorageService.isLogged()){
       this.router.navigate(["dashboard"]);
    }

    this.loginForm = this.fb.group({
      usuario: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

  }
}
