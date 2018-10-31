import { Component,OnInit, Input } from "@angular/core";
import { Subscription, from } from "rxjs";
import { Diadiemthanhpholon } from "src/app/model/diadiemthanhpholon";
declare var $:any;
@Component({
    selector:'m_bando',
    styles: [`
    agm-map {
      height: 400px;
    }
  `],
    templateUrl:'./m_bando.html'
})


export class M_BANDO implements OnInit{
  
  @Input() toado: Diadiemthanhpholon;

  
    public latitude: any ;
    
    public longitude: any ;
    
    public zoom: number=9;
    public placeid: string;

   
    


  
    ////////
    constructor(){
      this.setCurrentPosition();
     

    }
    ngOnInit(){
      this.latitude=parseFloat(this.toado.kinhdo);
      this.longitude =parseFloat(this.toado.vido);
    }

    private  setCurrentPosition() {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
             this.latitude = position.coords.latitude;
             this.longitude = position.coords.longitude;
          });
        }
      }
    
    
   
}

