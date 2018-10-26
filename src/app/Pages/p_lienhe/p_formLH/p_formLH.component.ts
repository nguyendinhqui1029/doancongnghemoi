import { Component, OnInit } from '@angular/core';
import { OBJECTDANGKI } from 'src/app/model/dangki';
import { M_LienHe} from '../../../model/lienhe';
import { from } from 'rxjs';

var AWS = require('aws-sdk/dist/aws-sdk-react-native');
    //import { from } from 'rxjs';

@Component({
    selector: 'p_formLH',
    templateUrl: './p_formLH.component.html'
})

export class FORMLH implements OnInit {
    lienhe:any = new M_LienHe('','','','','');
    thongbao:string="";
    objectDangKi:OBJECTDANGKI=new OBJECTDANGKI('','','','','','');;
    constructor(){}

    ngOnInit() { }
 gui(){
   var html= "<html><body>"+
              "<h1>Từ:"+ this.lienhe.ten +"("+this.lienhe.email+")</h1>";
      html+= "<h3 style='color:red'>Tiêu đề:<br/>"+this.lienhe.tieude+"</h3>";        
      html+= "<p style='color:red'>Nội dung:<br/>"+this.lienhe.noidung+"</p>";
      var date = new Date();
      var thoigian = date.getDate() + "-"+ date.getMonth() + "-" + date.getFullYear() + "," + date.getHours() + ":" + date.getMinutes() ;
      html+= "<p>Thời gian:"+thoigian+"</p></body></html>";
      AWS.config.update({
        accessKeyId: "AKIAIGPF4GKKZXC4HETQ",
        secretAccessKey: "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",
        region: "us-west-2"
      });
    
    const ses = new AWS.SES({ apiVersion: "2010-12-01" });
    const params = {
      
      Destination: {
        ToAddresses: ["caphesualv1@gmail.com"] // Email address/addresses that you want to send your email
      },
      Message: {
        Body: {
          Html: {
            // HTML Format of the email
            Charset: "UTF-8",
            Data:html
          },
          Text: {
            Charset: "UTF-8",
            Data: this.lienhe.ten +" "+ this.lienhe.email+" "+this.lienhe.tieude +" "+ this.lienhe.noidung
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: this.lienhe.tieude
        }
      },
      Source: "caphesualv1@gmail.com" // mail gửi
    };
    
    const sendEmail = ses.sendEmail(params).promise();
    
    sendEmail
      .then(data => {
        this.thongbao = "Gửi thành công.";
      })
      .catch(error => {
        this.thongbao = "Gửi không thành công.";
    });


 }
    
        
}

