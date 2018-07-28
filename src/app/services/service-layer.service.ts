import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceLayerService {

  constructor(private http: HttpClient) { }

   getData () {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      console.log(data);
    });
    }

}
