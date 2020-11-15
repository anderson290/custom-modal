import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalOptions } from '../models/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  onCloseSubject = new BehaviorSubject<boolean>(null);
  onClose = this.onCloseSubject.asObservable();

  isVisible: boolean = false;
  options: ModalOptions;
  content: any;

  constructor() {}

  open(component: any, options: ModalOptions) {
    this.isVisible = true;
    this.content = component;
    this.options = options;
  }

  close(state) {
    this.isVisible = false;
    this.setOnCloseState({ confirmation: state });
  }

  setOnCloseState(state) {
    this.onCloseSubject.next(state);
  }

  getModalOptions() {
    return this.options;
  }

  isModalVisible() {
    return this.isVisible;
  }
}
