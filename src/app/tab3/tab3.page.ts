import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalonePage } from '../modalone/modalone.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private modalctrl:ModalController
  ) { }

  async showModal(){
    console.log('showModal()');
    const modal = await this.modalctrl.create({
      component: ModalonePage
    });

    await modal.present();
  }
}
