/**
 * Created by YaoYu on 5/19/16.
 */
var videoData = null;
var videoDataDep = new Tracker.Dependency();


Template.videoList.helpers({
    videoData: function(){
        videoDataDep.depend();
        return videoData;
    },
    videoList :function(){return Videos.find();}
});

Template.videoList.onRendered(function(){
    $(".row div:first").removeClass("col-md-4").addClass("col-md-12");
    $("#danmupfontTip").remove();
    var dbData = Videos.find().fetch();

    Meteor.call("videoLists", function(error, results){
        videoData = results.data;
        videoDataDep.changed();


        //保证远端json数据和数据库数据一致
        var resouceNum = videoData.length;  //json 文件中的对象数量
        var dbNum = dbData.length;  //数据库中的对象数量
        if (dbNum !== resouceNum){
            for(i=0; i<dbNum; i++){
                Videos.remove(dbData[i]._id);
            }

            for(i=0; i<resouceNum; i++){
                Videos.insert(videoData[i]);
            }
        }else{
            for(i=0; i<resouceNum; i++){
                var url_a = videoData[i].video_url; //json 文件中的url
                var url_b = dbData[i].video_url; //数据库 中的url

                if(url_a !== url_b){
                    Videos.remove(dbData[i]._id);
                    Videos.insert(videoData[i]);
                }
            }
        }

    });

});



Template.videoList.events({
    'click .col-md-4,.col-md-12': function(e){
        e.preventDefault();

        Router.go('player',{_id:this._id});

    }
});