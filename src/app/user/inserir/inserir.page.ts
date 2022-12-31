import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/usuario/autenticacao.service';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.page.html',
  styleUrls: ['./inserir.page.scss'],
})
export class InserirPage implements OnInit {

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

  insereUsuario(){
    this.autenticacao.insereNoFirebase(this.email, this.senha)
    .then((res) =>{
      this.rota.navigate(['app/tabs/tab1']);
    }).catch((error) =>{
      this.mensagem = "Erro ao incluir usuário";
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
