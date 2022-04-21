import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({

  providedIn: 'root'
})
export class OlympusService {


  constructor(private http: HttpClient) { }

  getGod() {
    return this.http.get('http://localhost:5000/dioses')
    
  }
  getDios(diosID:any){
    return this.http.get('http://localhost:5000/dioses/'+diosID)
  }
  postGod(createdGod: any){
    return this.http.post('http://localhost:5000/dioses', createdGod).subscribe()
  }
}
