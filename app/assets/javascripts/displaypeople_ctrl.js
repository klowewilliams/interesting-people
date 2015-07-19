(function() {
  "use strict";

  angular.module("app").controller("displayPeopleCtrl", function ($scope) {

    $scope.people =[
    {
      name: "Kimberly Lowe-Williams",
      bio: "Yr tattooed cold-pressed swag, American Apparel mixtape meh Tumblr VHS tofu. Stumptown Kickstarter Echo Park, aesthetic meggings banjo salvia. DIY Williamsburg pour-over, letterpress cred squid tote bag vinyl chia VHS. Seitan ethical cronut cliche dreamcatcher, church-key Pinterest try-hard American Apparel 8-bit street art. Four loko sustainable meditation church-key Williamsburg, ennui artisan hella mustache deep v cray twee butcher. Mlkshk synth biodiesel, lo-fi Truffaut quinoa stumptown. Meggings salvia lumbersexual, sriracha single-origin coffee pug viral fanny pack yr street art irony tattooed whatever."
    },
    {
      name: "John Doe",
      bio: "Blog brunch mlkshk, 8-bit cred tousled hashtag asymmetrical flexitarian iPhone hoodie food truck freegan banjo. Pop-up tousled art party, meggings freegan butcher iPhone Pitchfork Godard synth. Keffiyeh fap messenger bag, PBR&B craft beer Bushwick kogi occupy McSweeney's taxidermy pop-up Pinterest lumbersexual. American Apparel ugh literally messenger bag tote bag, selvage art party disrupt gentrify. Austin health goth flannel cred. Flannel cornhole fanny pack, street art Shoreditch single-origin coffee Austin you probably haven't heard of them shabby chic Truffaut health goth McSweeney's artisan ennui Tumblr. Craft beer narwhal meh art party meditation."
    }
    ];

    window.scope = $scope;
  });
}());