import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

export interface Config {
  id: string;
  label: string;
  description: string;
  imagePath: string;
}
@Injectable({
  providedIn: 'root'
})

export class ApitempService {

  constructor(private http: HttpClient) { }
  configUrl = 'https://api.myglamapp.pl/api/categories?language=EN  ';

    getConfig(): Observable <any> {
     return this.http.get<any>(this.configUrl);
  }
}
