import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images-product',
  standalone: true,
  imports: [],
  templateUrl: './images-product.component.html',
  styleUrl: './images-product.component.scss'
})
export class ImagesProductComponent {

  @Input() images:string[]=[];
  @Input() imageCover!:string;
  imgSrc!:String;


  changeImage(src:string):void{
    this.imgSrc = src;
  }

}
