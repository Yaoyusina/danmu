/**
 * Created by YaoYu on 5/29/16.
 */
Template.header.events({
    'click .navbar-brand':function(e){
        //e.preventDefault();

       // $("#danmup .danmu-div").danmu("danmuStop");
        $("#danmup").remove();
        $(".danmuupfontTip").remove();
        Router.go('/');
        //console.log($("#danmup .danmu-video"));
        //alert();
    }
});