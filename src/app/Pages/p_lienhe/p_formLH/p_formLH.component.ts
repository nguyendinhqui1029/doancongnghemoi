import { Component, OnInit } from '@angular/core';
import { OBJECTDANGKI } from 'src/app/model/dangki';

@Component({
    selector: 'p_formLH',
    templateUrl: './p_formLH.component.html'
})

export class FORMLH implements OnInit {
    objectDangKi:OBJECTDANGKI=new OBJECTDANGKI('','','','','','');;
    constructor(){}

    ngOnInit() { }
}