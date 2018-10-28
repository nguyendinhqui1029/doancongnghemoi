import { Component,OnInit, OnDestroy, Input } from "@angular/core";
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

  
    public latitude: number;
    public longitude: number;
    
    public zoom: number;
    public placeid: string;

   
    
    //////
  private _kinhdo : number;
  @Input()
  set kinhdo(kinhdo:number){
    this._kinhdo =kinhdo;
  }
  
  get name():number{
      return this._kinhdo;
  }
    ////////
    constructor(){
       
    }
    ngOnInit(){
     console.log(this._kinhdo);
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

