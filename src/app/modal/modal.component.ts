import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalOptions } from '../models/modal';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {

  options: ModalOptions;
  @ViewChild("alertContainer", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  constructor(
    private modalService: ModalService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.getOptions();
  }
  
  ngAfterViewInit() {
    this.getContent();
  }

  closeModal(state): void {
    this.modalService.close(state);
  }

  getContent() {
    this.container.clear(); 
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.modalService.content);
    this.componentRef = this.container.createComponent(factory);
  }

  getOptions() {
    this.options = this.modalService.getModalOptions();
  }

  ngOnDestroy() {
    this.componentRef.destroy();    
  }

}
