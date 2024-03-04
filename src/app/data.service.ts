import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // injecting http to be able to do a get request
  http = inject(HttpClient);

  // this function makes a get request to the data.json file that I added to the assets folder and contains dummy data
  getData(): Observable<any[]> {
    return this.http.get<any[]>('assets/data.json');
  }
}
