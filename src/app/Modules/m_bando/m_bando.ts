import { Component,OnInit, Input } from "@angular/core";
import { Subscription, from } from "rxjs";
import { Diadiemthanhpholon } from "src/app/model/diadiemthanhpholon";
import { ChiNhanh } from "src/app/model/chinhanh";
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
  @Input() toadochinhanh: ChiNhanh;
  
    public latitude: any ;
    
    public longitude: any ;
    
    public zoom: number=9;
    public placeid: string;

   
    


  
    ////////
    constructor(){
      this.setCurrentPosition();
     

    }
    ngOnInit(){
      if(this.toado != undefined)
      {
        this.latitude=parseFloat(this.toado.kinhdo);
        this.longitude =parseFloat(this.toado.vido);
      }
      else if(this.toadochinhanh != undefined)
      {
        this.latitude=parseFloat(this.toadochinhanh.kinhdo_chinhanh);
        this.longitude =parseFloat(this.toadochinhanh.vido_chinhanh);
      }
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

