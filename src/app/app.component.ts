import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { ModalOptions } from './models/modal';
import { ModalSize } from './models/modal-size.enum';
import { TemplateComponent } from './template/template.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-modal';

  constructor(
    private modalService: ModalService
  ) {
  }

  openModal() {
    const modalOptions: ModalOptions = {
      title: 'test',
      size: ModalSize.small,
      confirmation: true,
      confirmButtonText: 'confirm',
      cancelButtonText: 'cancel'
    }
    this.modalService.open(TemplateComponent, modalOptions);
    this.onCloseModal();
  }

  onCloseModal() {
    this.modalService.onClose.subscribe(response => {
      console.log(response);
    });
  }

  isModalVisible() {
    return this.modalService.isModalVisible();
  }
}