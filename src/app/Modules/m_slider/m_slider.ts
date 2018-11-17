import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm_slider',
  templateUrl: './m_slider.html',
})
export class M_SLIDER implements OnInit  {
  constructor(){
    
  }
    ngOnInit() {
      var s1=0;
      s2();
      function s2() {
          var i;
          var slides = document.getElementsByClassName('slide123');
          
          for (i = 0; i < slides.length; i++) {
             (slides[i] as HTMLElement).style.display = "none";  
          }
         s1+=1;
          if ( s1 > slides.length) { s1 = 1;}    
          if((slides[ s1-1] as HTMLElement)!=null)
          {
            (slides[ s1-1] as HTMLElement).style.display = "block";  
          }
          setTimeout( s2, 2000); // Change image every 2 seconds
      }
   

  }
}