import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Datos estáticos
  private USER_STATIC = 'admin';
  private PASS_STATIC = '1234';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  login() {
    if (this.username === this.USER_STATIC && this.password === this.PASS_STATIC) {
      this.errorMessage = '';
      this.navCtrl.navigateForward('/inicio'); // Redirección
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }

}
