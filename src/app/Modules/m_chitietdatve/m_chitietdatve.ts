import { Component,OnInit, Input } from "@angular/core";
import { OBJECTDANGKI } from "src/app/model/dangki";
import { CHITIETDATVEXE } from "src/app/model/chitietdatve";
import {ds_tuyenduong} from'../../model/mock_tuyenduong';
import { TuyenDuong } from "src/app/model/tuyenduong";
import { ds_ghe } from "../../model/mock_dsghe";
import { ds_chitietdatve } from "../../model/mock_chitietdatve";
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
    ds_khungghe:any[]=[];
    ds_ghe:any[]=ds_ghe;
    ds_chitietdatve:any[]=ds_chitietdatve;
    ghedangchon:any="";
    constructor()
    {
       
    }
<<<<<<< HEAD
    //Hủy đặt ghế
    huyghe(ghedangchon,chitietdatve)
    {
        let vt=chitietdatve.soghe.indexOf(ghedangchon);
        if(vt>=0)
        {
            chitietdatve.soghe.splice(vt,1);
            this.ds_ghe.forEach(ghe=>{
                if(ghe.tenghe==ghedangchon)
                {
                    ghe.trangthai=0;
                }
            });
            console.log(chitietdatve.soghe);
    
        //xu li luu thông tin xuong database

        }
    }
    
    //Bắt sự kiện nút xác nhận số điện thoại
    nutxacnhan()
    {
        for(let i=0;i< this.ds_chitietdatve.length;i++) {
            if(this.ds_chitietdatve[i].sodienthoai==$("#sodienthoaixacnhan").val() && this.ds_chitietdatve[i].ngaydi==this.chitietdatve.ngaydi)
            {
                this.trangthaifrom=false;
                this.noidunghienthithongtinchitiet=this.ds_chitietdatve[i];
                i=i+this.ds_chitietdatve.length;
            }else{
                $("#thongbaoloidangnhap").html("Số điện thoại không đúng.<br>"); 
            } 
        }; 
    }
=======
   
>>>>>>> 100a65d76c72e98839693db2cb8be60d150134cf
    //Lấy danh sách ghế theo mã tuyến và ngày
    capnhattrangthaighe(matuyen,ngay){
        this.ds_khungghe=[];
        let dstam:any[]=[];
        let ds_chitietdatve:any[]=this.laydanhsachchitietdatvetheomatuyen(matuyen,ngay);
        for(let i=1;i<ds_ghe.length+1;i++)
        {
            this.ds_ghe[i-1].trangthai=0;
            ds_chitietdatve.forEach(ctdv=>{
                let dem=0;
                if(ctdv.soghe.indexOf(ds_ghe[i-1].tenghe)>=0)
                {
                    ds_ghe[i-1].trangthai=1;
                }else{
                    dem+=1;
                }
            });
            dstam.push(ds_ghe[i-1]);
            if(i%6==0)
            {
              this.ds_khungghe.push(dstam);
              dstam=[];
            }
        }
        
    }

    //Lấy danh sách chi tiết đặt vé theo mã tuyến và ngày 
    laydanhsachchitietdatvetheomatuyen(matuyen,ngay)
    {
        let ds_chituyetdatvetheomatuyen:any[]=[];
        ds_chitietdatve.forEach(ct=>{
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
            alert("Thông tin vé:"+this.chitietdatve.idchuyenxe+"-"+
            this.chitietdatve.diemdi+"-"+this.chitietdatve.diemden+"-"+
            this.chitietdatve.giodi+"-"+this.chitietdatve.ngaydi+"-"+
            this.chitietdatve.sodienthoai+"-"+this.chitietdatve.soghe+"-"+
            this.chitietdatve.soluong);
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
        ds_tuyenduong.forEach(tuyenduong => {
            if(tuyenduong.OriginCode==diemdi && tuyenduong.DestCode==diemden && tuyenduong.giochay==gio)
            {
                td=tuyenduong; 
            }
        });

        this.chitietdatve.giodi=this.ds_giokhoihanh[0];
        return td;
    }

    //Lấy giờ khởi  hành theo điểm đi và điểm đến
    laygiokhoihanhtheodiemdidiemden(diemdi,diemden)
    {
       
        ds_tuyenduong.forEach(tuyenduong => {
            if(tuyenduong.OriginCode==diemdi && tuyenduong.DestCode==diemden )
            {
               this.ds_giokhoihanh.push(tuyenduong.giochay);
            }
        });
        this.chitietdatve.giodi=this.ds_giokhoihanh[0];
        
    }

    //bắt sự kiện thay đổi giờ chạy
    thaydoigio(){
       this.tuyenduong=this.laytuyenduongtheodiemdidiemden(this.chitietdatvexe.diemdi,this.chitietdatvexe.diemden,this.chitietdatvexe.giodi);
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
        /*thong bao*/
        $(document).ready(function() {
            $("#btndong" ).on( "click",function() {
            
             $("#thongbao").hide();
             $(".btnghe").removeAttr("disabled");
            });
           
          } );
          /*thong bao*/
        this.chitietdatve=this.chitietdatvexe;
        this. laygiokhoihanhtheodiemdidiemden(this.chitietdatvexe.diemdi,this.chitietdatvexe.diemden);
        this.tuyenduong=this.laytuyenduongtheodiemdidiemden(this.chitietdatvexe.diemdi,this.chitietdatvexe.diemden,this.chitietdatvexe.giodi);
        this.soluongghe=this.chitietdatve.soluong;
        this.tongtien=this.chitietdatve.soluong*this.tuyenduong.giave;
        this.capnhattrangthaighe( this.tuyenduong.id_tuyenduong,this.chitietdatve.ngaydi);
           
    }
       
    }

