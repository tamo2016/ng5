import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const behaviors=['The initial goals', 'Another silly life goal'];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(behaviors);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }
}
