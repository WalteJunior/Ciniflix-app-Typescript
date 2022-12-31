import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/usuario/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public  email:string="";
  public  senha:string="";
  public  mensagem:string="";
  constructor(
    public autenticacao:AutenticacaoService,
    public rota: Router,
    public toastC:ToastController
  ) { }

  ngOnInit() {
  }

  loginUsuario(){
    this.autenticacao.loginNoFirebase(this.email, this.senha)
    .then((res) =>{
      this.rota.navigate(['app/tabs/tab1']);
    }).catch((error) =>{
      this.mensagem = "E-mail e/ou Senha incorreto(s)";
      this.exibeMensagem();
    })
  }

  async exibeMensagem(){
    const toast = await this.toastC.create({
      message: this.mensagem,
      duration: 2000
    });
    toast.present();
  }

}
