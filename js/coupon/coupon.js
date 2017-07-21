$.ajax({
    url: "http://139.199.192.48:9090/api/getcoupon",
    type: "get",
    dataType: "json",
    success: function(info){
        // console.log(info);
        var htmlStr = template("coupon_tpl",info);
        $(".coupon_content").html(htmlStr);

        // 获取优惠券标题设置cookie
        var arrTitle = [];
        for(var i = 0; i<info.result.length;i++){
            var obj = {};
            obj["couponTitle"] = info.result[i].couponTitle
            arrTitle[i] = obj;
        }
        // console.log(typeof arrTitle);
        $.cookie("arrTitle",JSON.stringify(arrTitle));
    }
})

// 头部返回
$(".coupon-head .head-back").on("click",function(){
    // alert(123);
    location.href = "../index.html";
})