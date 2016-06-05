/**
 * Created by YaoYu on 5/3/16.
 */
Router.configure({
    //layoutTemplate: 'layout',
    loadingTemlate: 'loading',
    waitOn: function(){
        return [Meteor.subscribe('danmu'),Meteor.subscribe('videos')]; //订阅弹幕
    }
});


Router.route('/', {
    name: 'videoList'

});

Router.route('/player/:_id', {
    name: 'player',
    waitOn: function() {
        return [Meteor.subscribe('danmu', this.params._id),Meteor.subscribe('videos', this.params._id)];
    },
    data: function() {
        return [Videos.findOne(this.params._id),Danmus.find({"videoId":this.params._id})]
    }

});
