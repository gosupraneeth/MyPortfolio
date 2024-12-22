import { Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horizontal-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.scss']
})
export class HorizontalCardComponent {
  @Input() source: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() set width(val: string){
    this.updateWidth(val);
  }
  @Input() set img_height(val :string | undefined){
    this.style = `height: ${val}`;
  }
  style = 'height:365px';
  @HostBinding('style.width') hostwidth: string = '33%';
  @ViewChild('imgdiv') parent!: ElementRef;
  @ViewChild('img') myImage!: ElementRef;

  ngAfterViewInit(): void {
    const imgElement = this.myImage.nativeElement;

    // Load the image and calculate aspect ratio
    imgElement.onload = () => {
      const parentElement = this.parent.nativeElement;

      // Get the dimensions of the parent element
      const parentWidth = parentElement.clientWidth;
      const parentHeight = parentElement.clientHeight;
      
      const imgNaturalWidth = imgElement.naturalWidth;
      const imgNaturalHeight = imgElement.naturalHeight;

      const imgAspectRatio = imgNaturalWidth / imgNaturalHeight;
      const parentAspectRatio = parentWidth / parentHeight;
      // Scale the image proportionally
      if (imgAspectRatio > parentAspectRatio) {
        // Image is wider relative to the parent
        const imgWidthMarginShift = ((parentWidth*(imgAspectRatio/parentAspectRatio) - parentWidth)/2);
        imgElement.style.width = 'auto';
        imgElement.style.height = '100%';
        imgElement.style.margin = `0% 0 0% -${imgWidthMarginShift}px`
      } else {
        // Image is taller relative to the parent
        const imgheightMarginShift = (parentHeight*(parentAspectRatio/imgAspectRatio)-parentHeight)/2;
        imgElement.style.width = '100%';
        imgElement.style.height = 'auto';
        imgElement.style.margin = `-${imgheightMarginShift/2}px 0 -${imgheightMarginShift/2}px 0%`
      }
    };
  }
  updateWidth(newWidth: string){
    this.hostwidth = newWidth;
  }
}
