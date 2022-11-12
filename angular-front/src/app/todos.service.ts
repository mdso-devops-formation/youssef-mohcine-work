import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }


  getAllFilieres(): Observable<any[]> {//pour travailler en mode asynchrone
    return this.http.get<any[]>("http://192.168.49.2:32666/api/todos");//of(x) return an observable for the value passed in arguments
  }
}
