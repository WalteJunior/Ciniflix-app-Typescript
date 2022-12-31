import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalonePage } from '../modalone/modalone.page';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  constructor( 
    private modalctrl:ModalController,
    public rota: Router
    ) { }

  ngOnInit() {
  }
  async showModal(){
    console.log('showModal()');
    const modal = await this.modalctrl.create({
      component: ModalonePage
    });

    await modal.present();
  }
  goHome(){
    this.rota.navigateByUrl('/app/tabs/tab1')
  }

}
