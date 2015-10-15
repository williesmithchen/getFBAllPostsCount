//jqui
window.since = null;
window.until = null;

window.pid = null;

window._result = null;
window._resultArray = null;

$(function() {
    window.since = $( "#since" );
    window.until = $( "#until" );
    window.pid = $( "#pid" );
    window._result = $("#result");

    window.since.datepicker({
        regional: "zh-TW",
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true,
        onClose: function( selectedDate ) {
            window.until.datepicker( "option", "minDate", selectedDate );
        }
    });
    window.until.datepicker({
        regional: "zh-TW",
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true,
        onClose: function( selectedDate ) {
            window.since.datepicker( "option", "maxDate", selectedDate );
        }
    });

    if(!!Cookies.get("pid")) {
        window.pid.val( Cookies.get("pid") );
    }
});

//init once.
window.initonce = false;

//uid
window.uid = null;

//accessToken
window.accessToken = null;

window.loopquery = function(url) {

    console.log("==loopquery==");

    if(!!url) {

        $.get(url, function(response) {

            console.log(response);

            //is no error
            if (response && !response.error) {

                console.log(response);
                console.log(response.data);
                console.log(response.data.length);

                if (!!response && !!response.data && response.data.length != 0) {
                    window.totalcount = window.totalcount + response.data.length;
                    //output result
                    window._result.text(window.totalcount);
                    //push
                    window._resultArray.push(response.data);
                }
            }

            //if over 100 && has next
            if(!!response && !!response.paging && !!response.paging.next) {
                console.log(response.paging);
                console.log(response.paging.next);

                setTimeout(function() {
                    window.loopquery(response.paging.next);
                }, 300);
            }

            if(!!response && !!response.data && response.data.length === 0) {
                $("#execute").show();
                console.log("==result==")
                console.log(window._resultArray);
                //render
                window.ReactRender();
            }

        });

    }

};

//fbAsyncInit on pageload
window.fbAsyncInit = function() {

    console.log("==fbAsyncInit==");

    //Turn Init Off.
    initonce = true;

    FB.init({
        appId: '442137115889177',
        xfbml: true,
        oauth: true,
        version: 'v2.5'
    });

    //check Login Status
    FB.getLoginStatus(function (response) {

        //authorized success now can connected
        if (response.status === "connected") {

            $("#getFBLogin").hide();
            $("#execute").show();

            //Welcome Message Display.
            FB.api("/me", function (response) {

                console.log("/me :", response);

                $("#message").text("Welocome Back：" + response.name + "！");

            });

        }else{

            $("#getFBLogin").show();
            $("#execute").hide();

        }

    });

};

//get Facebook Login Authorized
window.getFBLogin = function() {

    console.log("==getFBLogin==");

    //Check init once
    if(!!!window.initonce) {

        //Exe Init.
        window.fbAsyncInit();

    } else {

        FB.login(function(response) {

            console.log("FB.login", response);

            //reload
            window.location.replace( window.location.href );

        },{
            //scope: 'read_insights'
        });

    }

};

window.totalcount = 0;

//getFBAllPostsCount
window.getFBAllPostsCount = function() {

    console.log("==getFBAllPostsCount==");

    $("#execute").hide();

    window.totalcount = 0;

    window._resultArray = [];

    //Check init once
    if(!!!window.initonce) {

        //Exe Init.
        window.fbAsyncInit();

    } else {

        //check Login Status
        FB.getLoginStatus(function (response) {

            //authorized success now can connected
            if (response.status === "connected") {

                // 程式有連結到 Facebook 帳號
                console.log("authorized success [response]:", response);

                // Get UID
                window.uid = response.authResponse.userID;
                // Get accessToken
                window.accessToken = response.authResponse.accessToken;

                if( !!!window.pid.val() ) {

                    alert("please enter a Pid.");

                } else if (window.uid && window.accessToken) {

                    //Cookies Set
                    Cookies.set("pid", window.pid.val())

                    var min = null;
                    var max = null;

                    if ( !!window.since.datepicker( "getDate" ) ) {
                        min = window.since.datepicker( "getDate" );
                    } else {
                        min = new Date();
                    }
                    console.log("min str:", min.toISOString());

                    if ( !!window.until.datepicker( "getDate" ) ) {
                        max = window.until.datepicker( "getDate" );
                    } else {
                        max = new Date();
                    }
                    console.log("max str:", max.toISOString());

                    min.setHours(0);
                    min.setMinutes(0);
                    min.setSeconds(0);
                    min.setMilliseconds(0);

                    console.log("min str:", min.toISOString());

                    max.setHours(23);
                    max.setMinutes(59);
                    max.setSeconds(59);
                    max.setMilliseconds(999);

                    console.log("max str:", max.toISOString());

                    FB.api('/' + window.pid.val() + '',
                      'GET', {"fields":"posts.limit(100)"+
                        ".since("
                            + min.toISOString() +
                        ").until("
                            + max.toISOString() +
                        "){type,message,link}"},
                      function(response) {

                        //is no error
                        if (!!response && !!!response.error) {

                            if (!!response && !!response.posts && !!response.posts.data && response.posts.data.length >= 0) {

                                console.log(response);
                                console.log(response.posts);
                                console.log(response.posts.data);
                                console.log(response.posts.data.length);

                                window.totalcount = window.totalcount + response.posts.data.length;
                                //output result
                                window._result.text(window.totalcount);
                                //push
                                window._resultArray.push(response.posts.data);
                            }
                        }

                        //if over 100 && has next
                        if(!!response && !!response.posts && !!response.posts.paging && !!response.posts.paging.next) {

                            console.log(response.posts.paging);
                            console.log(response.posts.paging.next);

                            window.loopquery(response.posts.paging.next);
                        }

                      }
                    );

                }

            } else if (response.status === "not_authorized" || !!!response.authResponse) {

                // 帳號沒有授權 Facebook App 程式 撈取資料
                console.log("not_authorized  [response]:", response);

                //getFBLogin
                window.getFBLogin();

            } else {
                // 帳號沒有登入 請膽擊Facebook Login按鈕執行
                alert("please click Facebook login button to authorized execute.");
            }

            window.uid = null;
            window.accessToken = null;

        });

    }
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/zh_TW/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
