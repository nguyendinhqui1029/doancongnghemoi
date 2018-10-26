import { Component,OnInit } from "@angular/core";



@Component({
    selector:'m_bando',
    styles: [`
    agm-map {
      height: 500px;
    }
  `],
    templateUrl:'./m_bando.html'
})
export class M_BANDO implements OnInit{
    public latitude: number;
    public longitude: number;
    public latitude1: number;
    public longitude1: number;
    public zoom: number;
    public placeid: string;

    

    constructor(){
       
    }
    ngOnInit(){
       
        this.latitude = 10.895497535568808;
        this.longitude = 106.61983609092067;

    }

    private setCurrentPosition() {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            
          });
        }
      }
}

