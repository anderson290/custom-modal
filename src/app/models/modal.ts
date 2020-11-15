import { ModalSize } from './modal-size.enum';

export class ModalOptions {
    title: string;
    size: ModalSize;
    confirmation?: boolean;
    confirmButtonText: string;
    cancelButtonText?: string;
}

