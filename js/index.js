$(function() {
    function start() {

    }
    start.prototype = {
        oneFn() {
            $(".list1").show().addClass("slideInUp");
            setTimeout(function() {
                $(".list2").show().addClass("lightSpeedIn");
            },1000);
            setTimeout(function() {
                $(".list3").show().addClass("zoomIn");
            },2000);
            setTimeout(function() {
                $(".oneBtn").show().addClass("rotateInUpRight");
            },3000);
        },
        twoFn() {
            $(".oneBtn").click(function() {
                $(".one").hide();
                $(".two").show().addClass("zoomInUp")
            });

            $(".btnTwo").click(function() {
                $(".two").hide();
                $(".three").show().addClass("rollIn");
            });
        },
        threeFn() {
            $(".btnThree").click(function() {
                $(".three").hide();
                $(".four").show().addClass("flipInY");
            });
        },
        fourFn() {
            $(".btnFour").click(function() {
                $(".four").hide();
                $(".five").show().addClass("bounceInUp");
            });

            $(".btnFive").click(function() {
                $(".five").hide();
                $(".six").show().addClass("slideInRight");
            });

            $(".btnSix").click(function() {
                $(".six").hide();
                $(".last").show().addClass("zoomInUp");
            });

            $(".btnLast").click(function() {
                $(".last").hide();
                $(".thanks").show().addClass("bounceInUp");
            });
        },
        go() {
            this.oneFn();
            this.twoFn();
            this.threeFn();
            this.fourFn();
        }
    }
    var go = new start().go();
});