import { Component } from '@angular/core';
import { SeriesService } from '../tvShow/series.service';
import { ModalController } from '@ionic/angular';
import { ModalonePage } from '../modalone/modalone.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers:[SeriesService]
})
export class Tab2Page {
  loadingController: any;

  constructor(
    public serieService:SeriesService, 
    private modalctrl:ModalController,
    public rota: Router
    ) {}

  public lista_series = new Array<any>();
  public page:number =1;

  carregaPagina(){
    this.serieService.getPopularSeries(this.page,'en').subscribe(
      data =>{
        const response = (data as any);
        if(this.page==1){
          this.lista_series = response.results;
        }else{
          this.lista_series = this.lista_series.concat(response.results);
        }
        this.lista_series = this.lista_series.concat(response.results);
        console.log(this.lista_series);
      },

      error =>{
        console.log(error);
      }
    )
  }

  async efeitoLoading(){
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 3000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  efeitoRefresh(event:any){
    this.page= 1;
    this.carregaPagina();
    console.log('Iniciando');

    setTimeout(() =>{
      event.target.complete();
      console.log('Finalizando');
    }, 500);
  }

  efeitoScrollInfinito(event:any){
    this.page++;
    this.carregaPagina();
    setTimeout(() =>{
      event.target.complete();
    }, 1000);
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
  
  ionViewDidEnter(){
    this.carregaPagina();
    this.efeitoLoading();
  }
}
