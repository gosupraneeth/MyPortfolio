// scroll.service.ts
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrolled = new EventEmitter<number>();
}