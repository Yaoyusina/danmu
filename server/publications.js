/**
 * Created by YaoYu on 5/3/16.
 */
//发布（广播）弹幕
Meteor.publish('danmu', function(){
    return Danmus.find();
});
Meteor.publish('videos', function(){
    return Videos.find();
});