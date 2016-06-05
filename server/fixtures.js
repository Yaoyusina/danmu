/**
 * Created by YaoYu on 5/28/16.
 */

if(Danmus.find().count() === 0){
    for(i=0;i<840;i=i+5){

         Danmus.insert({
             text : "B 视频测试文本"+ i +"秒",
             color : "#ffffff",
             size : "1",
             position : "0",
             time : i*10,
             videoId : "u7oqtK6tM8kQQ6tpY"
         });
    };

     Danmus.insert({
         text : "B 视频测试文本1秒",
         color : "#ffffff",
         size : "1",
         position : "0",
         time : 20,
         videoId : "u7oqtK6tM8kQQ6tpY"
     });

     for(i=0;i<315;i=i+5){
         Danmus.insert({
             text : "A 视频测试文本"+ i +"秒",
             color : "#ffffff",
             size : "1",
             position : "0",
             time : i*10,
             videoId : "e5fmuaRrTGcpdjcRq"
         });
     };

     Danmus.insert({
         text : "A 视频测试文本5秒",
         color : "#ffffff",
         size : "1",
         position : "0",
         time : 50,
         videoId : "e5fmuaRrTGcpdjcRq"
     });
}
