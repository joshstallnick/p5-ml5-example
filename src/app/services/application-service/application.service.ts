import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  selectedDashboard$: BehaviorSubject<'p5' | 'ml5'> = new BehaviorSubject(null)

  constructor() { }
}
