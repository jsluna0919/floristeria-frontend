import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../core/services/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, MatIconModule, Button],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  errorMessage = ''
  loading = false;
  showPassword = false;
  private fb = inject(FormBuilder)
  form = this.fb.group({
    username: ['',[Validators.required]],
    password: ['',[Validators.required]]
  })

  constructor(
    private auth: Auth,
    private router: Router) {}

  ngOnInit(): void{
    this.auth.logout()
  }

  login(){

    if(this.form.invalid) return

    this.loading = true
    this.errorMessage = ''

    const {username, password} = this.form.value

    this.auth.login(username!, password!)
    .subscribe({
      next: () => {
        this.router.navigate(['/home'])
      },
      error: (err) =>{
        this.loading = false
        if(err.status === 401){
          this.errorMessage = 'Usuario o contraseña incorrectos'
        }else {this.errorMessage = 'Error del servidor'}
      } 
    })
    }

    togglePassword(){
      this.showPassword = !this.showPassword
    }

}