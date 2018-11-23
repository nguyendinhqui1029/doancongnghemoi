import { Component,OnInit, Input, OnDestroy } from "@angular/core";
import { OBJECTDANGKI } from "src/app/model/dangki";
import { CHITIETDATVEXE } from "src/app/model/chitietdatve";
//import {ds_tuyenduong} from'../../model/mock_tuyenduong';
import { TuyenDuong } from "src/app/model/tuyenduong";
import { ds_ghe } from "../../model/mock_dsghe";
//import { ds_chitietdatve } from "../../model/mock_chitietdatve";
import { ChiTietDatVeService } from "src/app/service/chitietdatve.service";
import { TuyenDuongService } from "../../service/tuyenduong.service";
import { ChiTietTuyenDuong } from "src/app/model/chitiettuyenduong";
declare var $:any;
@Component({
    selector:'m_chitietdatve',
    templateUrl:'./m_chitietdatve.html'
})

export class CHITIETDATVE implements OnInit,OnDestroy{
   
    objectDangKi:OBJECTDANGKI=new OBJECTDANGKI('','','','','','');;
    @Input() chitietdatvexe: CHITIETDATVEXE;
    
    chitietdatve:CHITIETDATVEXE= new CHITIETDATVEXE("","","","","","","","","","");
    //ds_tuyenduong,ds_chitietdatve,
    ds_tuyenduong:any[]=[]//ds_tuyenduong;
    tuyenduong:TuyenDuong=new TuyenDuong("","","","","","","","","","","","","");
    ds_giokhoihanh:string[]=[];
    tongtien:number=0;
    soluongghe:number=0;
    ds_khungghe:any[]=[];
    ds_ghe:any[]=ds_ghe;
    ds_chitietdatve:any[]=[];//ds_chitietdatve;
    ghedangchon:any="";
   
    constructor(private chitietdatveservice:ChiTietDatVeService,private tuyenduongService:TuyenDuongService)
    {
        this.laydanhsachtuyenduong();
       
    }
    laydanhsachtuyenduong()
    {
     this.tuyenduongService.getListTuyenDuong()
     .subscribe( 
         reponse => {
           if(reponse!=null)
                {
                     this.ds_tuyenduong=reponse;
                     this.ds_tuyenduong.forEach(element => {
                        
                       let mangtam:ChiTietTuyenDuong[]=[];
                         if(element.chitiet.L!=undefined)
                         {
                             for(let i =0;i<element.chitiet.L.length;i++){
                                if(element.chitiet.L[i].M!=undefined){
                                 
                                 let chitietM:ChiTietTuyenDuong = new ChiTietTuyenDuong(
                                     element.chitiet.L[i].M.diemdi.S,
                                     element.chitiet.L[i].M.diemden.S,
                                     element.chitiet.L[i].M.thoigiandi.S,
                                     element.chitiet.L[i].M.thoigianden.S,
                                     element.chitiet.L[i].M.hotlinedi.S,
                                     element.chitiet.L[i].M.hotlineden.S,
                                     element.chitiet.L[i].M.diachidi.S,
                                     element.chitiet.L[i].M.diachiden.S
                     
                                 );
 
                                     mangtam.push(chitietM);
                                     //console.log(mangtam)
                                }
                                 
                             }
                         
                          
                         }
 
                        element.chitiet=mangtam;
                        element.benden=element.benden.S;
                        element.bendi=element.bendi.S;
                        element.giave=element.giave.S;
                        element.giochay=element.giochay.S;
                        element.loaixe=element.loaixe.S;
                        element.quangduong=element.quangduong.S;
                        element.id_tuyenduong=element.id_tuyenduong.N;
                        element.name_tuyenduong=element.name_tuyenduong.S;
                        element.thoigian=element.thoigian.S;
                        element.sochuyen=element.sochuyen.S;
                        element.OriginCode=element.OriginCode.S;
                        element.DestCode=element.DestCode.S;
 
                      
                     });
     
                }
                this.laygiokhoihanhtheodiemdidiemden(this.chitietdatve.diemdi,this.chitietdatve.diemden);
                this.tuyenduong=this.laytuyenduongtheodiemdidiemden(this.chitietdatve.diemdi,this.chitietdatve.diemden,this.chitietdatve.giodi);  
                this.laydanhsachchitietdatve();
                this.chitietdatve.idchuyenxe=this.tuyenduong.id_tuyenduong;
        })
       
    }
   //Lay danh sach tuyen duong
  
    //Lấy danh sách chi tiết đặt vé
    laydanhsachchitietdatve()
    {
            this.chitietdatveservice.getListChiTietDatVe().subscribe((reponse:CHITIETDATVEXE[])=>{
               if(reponse!=null)
               {
                    this.ds_chitietdatve=reponse;
                    this.ds_chitietdatve.forEach(element => {
                        let mangghetam=[];
                        if(element.soghe.L!=undefined)
                        {
                         element.soghe.L.forEach(ghe => {
                         mangghetam.push(ghe.S);
                             
                         });
                        }
         
                        element.soghe=mangghetam;
                        element.diemden=element.diemden.S;
                        element.idchuyenxe=element.idchuyenxe.N;
                        element.diemdi=element.diemdi.S;
                        element.giodi=element.giodi.S;
                        element.ngaydi=element.ngaydi.S;
                        element.sodienthoai=element.sodienthoai.S;
                        element.soluong=element.soluong.S;
                        element.idchitietdatve=element.idchitietdatve.N;
                        element.trangthai=element.trangthai.N;
                    });
               }
               
               this.soluongghe=this.chitietdatve.soluong;
              // this.tongtien= (this.chitietdatve.soluong*1) * (this.tuyenduong.giave*1);
               this.capnhattrangthaighe( this.tuyenduong.id_tuyenduong,this.chitietdatve.ngaydi); 
                
            });
            
    }
    //Lấy danh sách ghế theo mã tuyến và ngày
    capnhattrangthaighe(matuyen,ngay){
        this.ds_khungghe=[];
        let dstam:any[]=[];
        let ds_chitietdatve:any[]=this.laydanhsachchitietdatvetheomatuyen(matuyen,ngay);
        for(let i=1;i<ds_ghe.length+1;i++)
        {
            this.ds_ghe[i-1].trangthai=0;
            ds_chitietdatve.forEach(ctdv=>{
                if(ctdv.soghe.indexOf(ds_ghe[i-1].tenghe)>=0)
                {
                    ds_ghe[i-1].trangthai=1;
                }
            });
            dstam.push(ds_ghe[i-1]);
            if(i%6==0)
            {
              this.ds_khungghe.push(dstam);
              dstam=[];
            }
        }
        this.tongtien= (this.chitietdatve.soluong*1) * (this.tuyenduong.giave*1);
        
    }

    //Lấy danh sách chi tiết đặt vé theo mã tuyến và ngày 
    laydanhsachchitietdatvetheomatuyen(matuyen,ngay)
    {
        let ds_chituyetdatvetheomatuyen:any[]=[];
        this.ds_chitietdatve.forEach(ct=>{
            if(ct.idchuyenxe==matuyen && ct.ngaydi===ngay)
            {
               ds_chituyetdatvetheomatuyen.push(ct);
            }
        });
        return ds_chituyetdatvetheomatuyen;
    }
    
    flagchitiet:boolean=true;

    //bắt sự kiện xổ xuống khi chưa chọn ghế mà nhấn nút mua vé
    ds_ghedangchon:any[]=[];
    guimuave(){
        if(this.ds_ghedangchon.length==this.soluongghe)
        {
            $("#thongbaochonghe").text('');
            $("#danhsachghe").slideUp() ;
            $("#muoiten").removeClass("fas fa-angle-double-down");
            $("#muoiten").addClass("fas fa-angle-double-up");
            this.flagchitiet=true;
            this.chitietdatve.soghe=this.ds_ghedangchon;
            this.chitietdatve.idchuyenxe=this.tuyenduong.id_tuyenduong;
            this.chitietdatve.idchitietdatve=this.ds_chitietdatve.length;
            this.chitietdatveservice.addThongTinChiTietDatVe(this.chitietdatve).subscribe( 
                data => {
                    this.ds_chitietdatve.push(this.chitietdatve);
                    this.capnhattrangthaighe(this.chitietdatve.idchuyenxe,this.chitietdatve.ngaydi);
                    $("#thongbaodatve").text("Đặt vé thành công.");
                    $("#sodienthoai").val("");
                    this.ds_ghedangchon=[];
                    
                },
                // Errors will call this callback instead:
                err => {
                    $("#thongbaodatve").text("Đặt vé không thành công.");
                });
        }else{
            $("#danhsachghe").slideDown() ;
            $("#muoiten").addClass("fas fa-angle-double-down");
            $("#muoiten").removeClass("fas fa-angle-double-up");
            $("#thongbaochonghe").text("Mời bạn chọn ghế");
            this.flagchitiet=false;
            
        }
        
    }
    //Bắt sự kiện click menu xổ xuống
    chonghe()
    {
        
        if(this.flagchitiet==true)
        {
            
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

    //Lấy tuyến đường theo điểm đi điểm đến
    laytuyenduongtheodiemdidiemden(diemdi,diemden,gio):TuyenDuong
    {
        let td:TuyenDuong=null;
        this.ds_tuyenduong.forEach(tuyenduong => {
            if(tuyenduong.OriginCode==diemdi && tuyenduong.DestCode==diemden && tuyenduong.giochay==gio)
            {
               this.chitietdatve.giodi=this.ds_giokhoihanh[0];  
               return td=tuyenduong; 
            }
        });

        this.chitietdatve.giodi=this.ds_giokhoihanh[0];
        return td;
    }
    
    //Lấy giờ khởi  hành theo điểm đi và điểm đến
    laygiokhoihanhtheodiemdidiemden(diemdi,diemden)
    {
       
        this.ds_tuyenduong.forEach(tuyenduong => {
            if(tuyenduong.OriginCode==diemdi && tuyenduong.DestCode==diemden )
            {
               this.ds_giokhoihanh.push(tuyenduong.giochay);
            }
        });
        this.chitietdatve.giodi=this.ds_giokhoihanh[0];
        
    }

    //bắt sự kiện thay đổi giờ chạy
    thaydoigio(){
       this.tuyenduong=this.laytuyenduongtheodiemdidiemden(this.chitietdatve.diemdi,this.chitietdatve.diemden,this.chitietdatve.giodi);
       this.capnhattrangthaighe( this.tuyenduong.id_tuyenduong,this.chitietdatve.ngaydi);
      // console.log(this.ds_khungghe);
      // console.log(this.tuyenduong.id_tuyenduong); 
    }

    //bắt sự kiện click vào ghế
    gheduocclick(data)
    {
       if(data.target.nextSibling.value==1)
       {
        $("#thongbaochonghe").text("Ghế đã được chọn vui lòng chọn ghế khác.");
          // this.ghedangchon=data.target.innerText;
           // $("#thongbao").show();
           // $(".btnghe").attr("disabled", "disabled");;
       }else{
        if(this.soluongghe >this.ds_ghedangchon.length)
        {
                let tenghe=data.target.innerText;
                if(this.ds_ghedangchon.indexOf(tenghe)>=0)
                {
                    //mau xanh
                    if(data.path[1].nodeName=="BUTTON")
                    {
                        data.path[1].style.backgroundImage="linear-gradient(to right, rgb(0, 154, 205), rgb(0, 191, 255), rgb(0, 154, 205))";
                        this.ds_ghedangchon.splice(this.ds_ghedangchon.indexOf(tenghe),1);
                    }   
                }else{
                    //mau do
                    if(data.path[1].nodeName=="BUTTON")
                    {
                       data.path[1].style.backgroundImage="linear-gradient(to right,rgb(231, 35, 35),rgb(238, 128, 128) ,rgb(231, 35, 35))";
                       this.ds_ghedangchon.push(tenghe);
                       $("#thongbaochonghe").text("");
                    }
                }
        }else{
           
            let tenghe=data.target.innerText;
            if(this.ds_ghedangchon.indexOf(tenghe)>=0)
            {
                //mau xanh
                if(data.path[1].nodeName=="BUTTON")
                {
                    $("#thongbaochonghe").text('');
                    data.path[1].style.backgroundImage="linear-gradient(to right, rgb(0, 154, 205), rgb(0, 191, 255), rgb(0, 154, 205))";
                    this.ds_ghedangchon.splice(this.ds_ghedangchon.indexOf(tenghe),1);
                }
            }else{
                $("#thongbaochonghe").text('Đã chọn đủ số lượng ghế');
            }
           // 
        }
        
       
    }
    }
    //kết thúc bắt sự kiện click vào ghế

    ngOnInit(){
        this.chitietdatve =this.chitietdatvexe;
        if(typeof(sessionStorage.getItem("sodienthoai"))!=undefined){
            this.chitietdatve.sodienthoai=sessionStorage.getItem("sodienthoai");
            
            $("#sodienthoai").prop("readonly",false);
    }
}
    ngOnDestroy(){
        
     }
    }

