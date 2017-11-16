import { ItoDoModel } from './ito-do-model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class DataService {

  private APIUri = 'http://localhost:3000/WorkDB';

  constructor(private http:HttpClient) { }

  GetToDoList(){
    return this.http.get<ItoDoModel[]>(this.APIUri);
  }

  AddToDo(oToDo){
    return this.http.post(this.APIUri, oToDo);
  }

  DeleteToDo(ID){
    return this.http.delete(`${this.APIUri}/${ID}`);
  }

  UpdateToDo(oToDo){
    return this.http.put(`${this.APIUri}/${oToDo.id}`, oToDo);
  }

}
