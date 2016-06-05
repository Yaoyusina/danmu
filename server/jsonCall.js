/**
 * Created by YaoYu on 5/24/16.
 */
Meteor.methods({videoLists: function () {

    this.unblock();
    try {

        return Meteor.http.call("GET", "http://www.paseo.scaledns.com/hlmchat/hlmchat_videos.json");
    } catch (e) {
        // Got a network error, time-out or HTTP error in the 400 or 500 range.
        return false;
    }
}});