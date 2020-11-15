import { Injectable, Output } from '@angular/core';
import { ModalOptions } from '../models/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
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
  }

  getModalOptions() {
    return this.options;
  }

  isModalVisible() {
    return this.isVisible;
  }
}
