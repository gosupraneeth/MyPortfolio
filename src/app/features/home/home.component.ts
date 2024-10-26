import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutlineButtonComponent } from 'src/app/shared/components/outline-button/outline-button.component';

@Component({
  selector: 'app-feature-home',
  standalone: true,
  imports: [CommonModule, OutlineButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
