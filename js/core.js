jQuery(function() {

    com = {
        post: function(url, options, callback, failCallback, asyncFlag) {
            if (url == null) {
                return;
            }
            var dfd = $.Deferred();
            var opts = $.extend({}, options || {});
            var optAsync = true;
            if (asyncFlag == undefined || asyncFlag == true) {
                optAsync = true;
            } else {
                optAsync = false;
            }

            $.ajax({
                url: "/Ordermeal/ordermeal/" + url,
                data: opts,
                type: "POST",
                dataType: "json",
                async: optAsync, //设为false就是同步请求
                success: function(res) {
                    if (res == null) {
                        return;
                    }
                    if (callback) {
                        callback(res);
                    }
                },
                error: function(msg) {
                    com.showAlert(com.error, msg);
                    if (failCallback) {
                        failCallback(msg);
                    }
                }
            });

            return dfd.promise();
        },
    }


});