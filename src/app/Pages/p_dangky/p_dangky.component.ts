import { Component, OnInit } from '@angular/core';
import { OBJECTDANGKI } from '../../model/dangki';
import { USERService } from '../../service/user.service';

@Component({
  selector: 'p_dangky',
  templateUrl: './p_dangky.component.html',
})
export class DANGKY implements OnInit  {
  objectDangKi:OBJECTDANGKI;

  constructor(private service_user:USERService)
  {

    
  }
    ngOnInit() {
      this.objectDangKi= new OBJECTDANGKI("","","","","","","");
      }
     onSubmit()
      {
        this.addBook();
        
      }
       
      addBook(): void {

        this.service_user.addObjectDangKiWithObservable(this.objectDangKi)
          .subscribe( 
            data => {
              console.log("a");
            },
            // Errors will call this callback instead:
            err => {
              console.log('Something went wrong!');
            }					   
           )
      }
}