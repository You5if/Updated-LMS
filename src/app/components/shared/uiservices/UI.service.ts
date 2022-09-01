import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  openSubmit:boolean = false
  loadingStateChanged = new Subject<boolean>();
constructor() { }

}
