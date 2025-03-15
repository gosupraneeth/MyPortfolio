import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutlineButtonComponent } from "../outline-button/outline-button.component";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, OutlineButtonComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges, AfterViewInit {
  @Input() isOpen: boolean = false;
  @Input() heading: string = 'This is the Heading';
  @ViewChild('modal') modal: any;
  @Output() onModalClose: EventEmitter<any> = new EventEmitter<any>();

  ngAfterViewInit() {
    this.toggleBodyScroll();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('isOpen' in changes && changes['isOpen'].currentValue !== changes['isOpen'].previousValue && !changes['isOpen'].firstChange) {
      this.toggleBodyScroll();
    }
  }

  toggleBodyScroll() {
    if (this.isOpen) {
      document.body.classList.add('modal-open');
      this.modal.nativeElement.classList.add('modal-open');
      this.modal.nativeElement.style.display = 'flex';
    } else {
      document.body.classList.remove('modal-open');
      this.modal.nativeElement.style.display = 'none';
    }
  }

  onClose() {
    this.onModalClose.emit();
  }
}
