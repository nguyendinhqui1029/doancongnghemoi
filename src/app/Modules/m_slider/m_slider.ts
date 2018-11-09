import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'm_slider',
  templateUrl: './m_slider.html',
})
export class M_SLIDER implements OnInit {

  ngOnInit() {
    var s1 = 0;
    s2();
    function s2() {
      var i=0;
      var slides = document.getElementsByClassName('slide123');
      
      for (i ; i < slides.length; i++) {
        (slides[i] as HTMLDivElement).style.display = "none";
        
      }
      s1++;

      if (s1 > slides.length) { s1 = 1 };
      if (s1 < 1) { s1 = slides.length };
      (slides[s1-1] as HTMLDivElement).style.display = "block";
     

      setTimeout(s2, 2000); // Change image every 2 seconds
    }

  }
}