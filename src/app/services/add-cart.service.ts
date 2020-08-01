import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddCartService {
  items = [];

  msg = new BehaviorSubject<object>({});

  getData = this.msg.asObservable();

  callData(data) {
    this.msg.next(data);
  }

  constructor() {}

  ngOnInit(): void {}
}
