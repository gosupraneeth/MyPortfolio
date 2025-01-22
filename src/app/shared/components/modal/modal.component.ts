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
export class ModalComponent implements OnChanges, AfterViewInit{
  @Input() isOpen: boolean = false;
  @ViewChild('modal') modal: any;
  @Output() onModalClose: EventEmitter<any> = new EventEmitter<any>();

  ngAfterViewInit(){
    if(this.isOpen){
      this.modal.nativeElement.classList.add('modal-open');
      this.modal.nativeElement.style.display = 'flex';
    }else{
      this.modal.nativeElement.style.display = 'none';
    }
  }

  ngOnChanges(changes: SimpleChanges){
    if('isOpen' in changes && changes['isOpen'].currentValue!==changes['isOpen'].previousValue && !changes['isOpen'].firstChange){
      if(this.isOpen){
        this.modal.nativeElement.classList.add('modal-open');
        this.modal.nativeElement.style.display = 'flex';
        console.log(this.modal);
      }else{
        this.modal.nativeElement.style.display = 'none';
      }
    }
  }

  onClose(){
    console.log("close got called");
    this.onModalClose.emit();
  }
}
