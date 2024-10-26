import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { style } from '@angular/animations';

@Component({
  selector: 'app-outline-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './outline-button.component.html',
  styleUrls: ['./outline-button.component.scss']
})
export class OutlineButtonComponent {
  @Input() value: string = "About Me";
  @Input() style: string | undefined;
  @Input() set btn_varient(val:string){
    if(val==='light'){
      this.btn_class_type = 'btn-outline-light';
    }else if(val==='dark'){
      this.btn_class_type = 'btn-outline-dark';
    }else if(val==='info'){
      this.btn_class_type = 'btn-outline-info';
    }else if(val==='warning'){
      this.btn_class_type = 'btn-outline-warning';
    }else if(val==='danger'){
      this.btn_class_type = 'btn-outline-danger';
    }else if(val==='success'){
      this.btn_class_type = 'btn-outline-success';
    }else if(val==='secondary'){
      this.btn_class_type = 'btn-outline-secondary';
    }else if(val==='primary'){
      this.btn_class_type = 'btn-outline-primary';
    }
  }
  btn_class_type = 'btn-outline-light';
}
