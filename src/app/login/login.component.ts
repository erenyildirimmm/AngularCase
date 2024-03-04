import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class LogicComponent {
  // properties injected to use in component
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string | null = null;
  showSnackBar: boolean = false;

  // will work on the submit
  onSubmit(): void {
    const rawForm = this.form.getRawValue();
    this.authService.
      login(rawForm.email, rawForm.password).
      subscribe({
        next: () => {
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          this.errorMessage = err.code;
          this.showSnackBar = true;
          setTimeout(() => {
            this.showSnackBar = false;
          }, 3000);
        }
      })
  }
}