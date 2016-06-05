/**
 * Created by YaoYu on 5/10/16.
 */
/*

Template.player.onCreated(function(){
   //Session.set("videoUrl",currentSrc);
    //currentSrc = Session.get("videoUrl");
    //currentId = this.data._id;

});

Template.player.helpers({

});

Template.player.events({
    'click #play-btn,.danmu-player':function(e){
        e.preventDefault();
        //var danmuContent = Danmus.find({"videoId":currentId}).fetch();

       // $("#danmup .danmu-div").danmu("addDanmu", danmuContent);
        //console.log(danmu);
        //alert();
    }
});
*/

Template.player.onRendered(function(){

    var danmuContent = this.data[1].fetch();
    $("#danmup").DanmuPlayer({
        src:this.data[0].video_url,
        height: "480px", //区域的高度
        width: "800px", //区域的宽度
        danmuList:{}

        // urlToGetDanmu:"query.php",
        //urlToPostDanmu:""

    });
    $("#danmup .danmu-div").danmu("addDanmu", danmuContent);
    currentId = this.data[0]._id;
   // var danmuContent = Danmus.find({"videoUrl":currentSrc}).fetch();

//console.log(this.data);
});

