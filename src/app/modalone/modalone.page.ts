import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-modalone',
  templateUrl: './modalone.page.html',
  styleUrls: ['./modalone.page.scss'],
})
export class ModalonePage implements OnInit {
  App: any;

  constructor(
    private modalctrl:ModalController,
  ) { }

  ngOnInit() {
  }
  dismiss(){
    this.modalctrl.dismiss();
  }
  exit(){
    this.App.exitApp();
  }
}
