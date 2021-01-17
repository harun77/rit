import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Leader } from 'src/app/shared/leader';
import { LEADERS } from 'src/app/shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS);
  }

  getLeader(id: string): Observable<Leader> {
    return of(LEADERS.filter(e => e.id === id)[0]);
  }
}
