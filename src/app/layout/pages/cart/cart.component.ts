import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, afterRender, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(
    // @Inject(PLATFORM_ID) private x:Object,
    ){ 


    // if(isPlatformBrowser(this.x)){
    //   console.log('hi from browser')
    //   console.log(document)
    // }


    // console.log('hi from cart'); 
    // afterRender(()=> {
    //   console.log('after render');
    // })

    // browser only
    // afterNextRender(()=>{
    //   console.log('after next render');
    // })

    // isPlatformBrowser(id)
    // isPlatformServer(id)


    


  }

  
  // ssr - browser
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // console.log(document);
  }

  // test(){
  //   console.log('test');
  //   console.log(document);
  // }

  // afterRender , afterNextRender => callback

  

}
