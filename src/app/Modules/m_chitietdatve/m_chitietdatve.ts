import { Component,OnInit, Input } from "@angular/core";
import { OBJECTDANGKI } from "src/app/model/dangki";
import { CHITIETDATVEXE } from "src/app/model/chitietdatve";
import {ds_tuyenduong} from'../../model/mock_tuyenduong';
import { TuyenDuong } from "src/app/model/tuyenduong";
import { ChiTietTuyenDuong } from "src/app/model/chitiettuyenduong";
import { exists } from "fs";
declare var $:any;
@Component({
    selector:'m_chitietdatve',
    templateUrl:'./m_chitietdatve.html'
})
export class CHITIETDATVE implements OnInit{
    objectDangKi:OBJECTDANGKI=new OBJECTDANGKI('','','','','','');;
    @Input() chitietdatvexe: CHITIETDATVEXE;
    chitietdatve:CHITIETDATVEXE= new CHITIETDATVEXE("","","","","","","","");
    ds_tuyenduong:any[]=ds_tuyenduong;
    tuyenduong:TuyenDuong=null;
    ds_giokhoihanh:string[]=[];
    tongtien:number;
    soluongghe:number=0;
    constructor()
    {
    }
    laygiochaytheodiemdidiemden(diemdi,diemden):string[]
    {
        let ds_giochay:string[]=[];
        ds_tuyenduong.forEach(tuyenduong => {
            if(tuyenduong.OriginCode==diemdi && tuyenduong.DestCode==diemden)
            {
                ds_giochay.push(tuyenduong.giochay);  
            }
        });
        return ds_giochay;

    }
    flagchitiet:boolean=true;
    guimuave(){
        if(this.soluongghe>0)
        {
            $("#danhsachghe").slideDown() ;
            $("#muoiten").addClass("fas fa-angle-double-down");
            $("#muoiten").removeClass("fas fa-angle-double-up");
            $("#thongbaochonghe").text("Mời bạn chọn ghế");
            this.flagchitiet=false;
        }else{
            $("#danhsachghe").slideUp() ;
            $("#muoiten").removeClass("fas fa-angle-double-down");
            $("#muoiten").addClass("fas fa-angle-double-up");
            this.flagchitiet=true;
        }
        
    }
    chonghe()
    {
        
        if(this.flagchitiet==true)
        {
            alert($("#sl").val())
            $("#danhsachghe").slideDown() ;
            $("#muoiten").addClass("fas fa-angle-double-down");
            $("#muoiten").removeClass("fas fa-angle-double-up");
            this.flagchitiet=false;
        }else{
            $("#danhsachghe").slideUp() ;
            $("#muoiten").removeClass("fas fa-angle-double-down");
            $("#muoiten").addClass("fas fa-angle-double-up");
            this.flagchitiet=true;
        }
        
    }
    laytuyenduongtheodiemdidiemden(diemdi,diemden):TuyenDuong
    {
        let td:TuyenDuong=null;
        ds_tuyenduong.forEach(tuyenduong => {
            if(tuyenduong.OriginCode==diemdi && tuyenduong.DestCode==diemden)
            {
                td=tuyenduong;
                this.ds_giokhoihanh.push(tuyenduong.giochay);  
            }
        });
        return td;
    }
    aaa(){
        $(document).ready(function(){
            $(this).on("click",".btnghe",function(){ 
              
                var slg=$("#sl").val()*1-1;
            if(slg>=0)
            {alert("atri"+$(this).attr("data-"+$(this).attr("name")));
               
                switch($(this).attr("data-"+$(this).attr("name")))
                { 
                    case "0":{
                           (this as HTMLElement).style.background="red";
                            $(this).attr("data-"+$(this).attr("name"),1);
                            alert("a1"+$("#sl").val());
                            $("#sl").val($("#sl").val()*1-1);
                    }break;
                    case "1":{
                        $(this).attr("data-"+$(this).attr("name"),0);
                        (this as HTMLElement).style.backgroundImage="linear-gradient(to right,#009ACD,#00BFFF ,#009ACD)";
                        $("#sl").val($("#sl").val()*1+1);
                        alert("b");
                    }break;
                    default:alert("atri"+$(this).attr("data-"+$(this).attr("name")));
                }
            }else{
                if($(this).data($(this).attr("name"))*1==1)
                {
                    $("#thongbaochonghe").text("");
                    $(this).data($(this).attr("name"),0);
                    (this as HTMLElement).style.backgroundImage="linear-gradient(to right,#009ACD,#00BFFF ,#009ACD)";
                    $("#sl").val($("#sl").val()*1+1)
                    alert("c");
                    
                }else{
                    $("#thongbaochonghe").text("Đủ ghế rồi cha");
            
                }
            }
            });
            return;
        });   
    }
    
    ngOnInit(){
        this.chitietdatve=this.chitietdatvexe;
        this.tuyenduong=this.laytuyenduongtheodiemdidiemden(this.chitietdatvexe.diemdi,this.chitietdatvexe.diemden);
        this.soluongghe=this.chitietdatve.soluong;
        this.ds_giokhoihanh=this.laygiochaytheodiemdidiemden(this.chitietdatvexe.diemdi,this.chitietdatvexe.diemden);
        this.tongtien=this.chitietdatve.soluong*this.tuyenduong.giave;
        }
       
    }

    /*if($(this).data($(this).attr("name"))*1==1)
    {
        $("#thongbaochonghe").text("");
        $(this).data($(this).attr("name"),0);
        (this as HTMLElement).style.backgroundImage="linear-gradient(to right,#009ACD,#00BFFF ,#009ACD)";
        $("#sl").val($("#sl").val()*1+1)
        alert("c");
        
    }else{
        $("#thongbaochonghe").text("Đủ ghế rồi cha");

    }*/