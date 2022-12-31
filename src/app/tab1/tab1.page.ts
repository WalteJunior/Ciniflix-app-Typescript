import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalonePage } from '../modalone/modalone.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(
    public navCtrl: NavController, 
    private modalctrl:ModalController,
    public rota: Router
    ) {}

  goHome(){
    this.rota.navigateByUrl('/app/tabs/tab1')
  }
  async showModal(){
    console.log('showModal()');
    const modal = await this.modalctrl.create({
      component: ModalonePage
    });

    await modal.present();
  }

}
