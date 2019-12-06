import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Info } from './info';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChatService {


constructor(private http: HttpClient) { }


//refresh(): Observable<Info[]> {
//  return this.http.get<info[]>(`${environment.backUrl}/info`)
// }
Rooms(): Observable<string[]> {
  console.log("test" + this.http.get<string[]>(`${environment.backUrl}/channels`))
  return this.http.get<string[]>(`${environment.backUrl}/channels`)
}
}
