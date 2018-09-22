import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KittiesService {

  constructor(private http: HttpClient) { }

  getAllKitties(): Observable<object> {
     return this.http.get('/api/kitties');
  }
}
