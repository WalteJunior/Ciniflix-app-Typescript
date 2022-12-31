import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private chave ="001c4cc6870be23a44c6b5710340c083";
  private caminho="https://api.themoviedb.org/3"

  constructor(public http:HttpClient) { }

  public getPopularSeries(page=1, language="eng"){
    let series=`${this.caminho}/tv/popular?api_key=${this.chave}&language=${language}&page=${page}`
    return this.http.get(series)
  }
}
