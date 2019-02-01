import { ToDoModel } from './to-do-model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotifyService } from './notify.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private APIUri = 'http://localhost:3000/WorkDB';

  constructor(private http:HttpClient, private NotifySvc:NotifyService) { }

  GetToDoList(){
    return this.http.get<ToDoModel[]>(this.APIUri);
  }

  AddToDo(oToDo){
    // console.log(oToDo);
    return this.http.post(this.APIUri, oToDo)
               .do(data => {
                  this.NotifySvc.notify(`已將 ${oToDo.Name} 新增到 DB`);
               });
  }

  DeleteToDo(ID){
    return this.http.delete(`${this.APIUri}/${ID}`);
  }

  UpdateToDo(oToDo){
    // console.log(oToDo);
    return this.http.put(`${this.APIUri}/${oToDo.id}`, oToDo);
  }

}
