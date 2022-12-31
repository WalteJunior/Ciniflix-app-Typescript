import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalonePage } from '../modalone/modalone.page';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    private modalctrl:ModalController,
    public rota: Router
    
    ) { }

  ngOnInit() {
  }

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
