$(function () {
    window.die = false;
    window.playScroe = 0;
    $('body').bind('keydown', getKeyCode);
    birdAnima();
    $(".gameStart button").click(function () {
        Recovery();
        $(this).slideUp(0);
        var tubeContr = setInterval(function () {
            if (window.die) {
                return
            }
            ;
            tubeControl();
        }, 10);
        var birddown = setInterval(function () {
            if (window.die) {
                return
            }
            ;
            birdDown();
        }, 10);
        var game = setInterval(function () {
            if (window.die) {
                return
            }
            ;
            gameControl();
        }, 100);
    });
    $(".gameEnd button").click(function () {
        Recovery();
        $(".gameEnd").fadeToggle(200);
    });

    //控制鸟
    function getKeyCode(e) {
        if (window.die) {
            return;
        }
        ;
        var evt = e || window.event;
        playKeyCode = evt.keyCode || evt.which || evt.charCode;
        if (playKeyCode == 32) {
            var birdUp = setInterval(function () {
                var bird = $(".bird").css("top").split("p")[0];
                bird = (parseInt(bird) - 2) + "px";
                $(".bird").css("top", bird);
            }, 10);
            setTimeout(function () {
                clearInterval(birdUp);
            }, 500);
        }
    }

    //让鸟动起来
    function birdAnima() {
        var bird = $(".bird");
        setInterval(function () {
            if (window.die) {
                $(".bird").css("background-position", "-128px 0px");
                return
            }
            ;
            bird.css("background-position", "-64px 0px");
            setTimeout(function () {
                bird.css("background-position", "0px 0px");
            }, 250);
        }, 500);
    };

    //加分
    function addScroe() {
        window.playScroe += 1;
        $("#scroe").text(window.playScroe);
    }

    //判断鸟的位置
    function gameControl() {
        // 地面为bottom 100px
        var birdBottom = $(".bird").css("bottom").split("p")[0];
        if (parseInt(birdBottom) <= 80) {
            death();
        }
        ;
        var tube = $(".tube");
        var birdTop = parseInt($(".bird").css("top").split("p")[0]);
        var birdLeft = parseInt($(".bird").css("left").split("p")[0]);
        for (var i = 0; i < tube.length; i++) {
            var top = parseInt(tube.eq(i).css("top").split("p")[0]) + 420;
            var left = parseInt(tube.eq(i).css("left").split("p")[0]);
            if (birdTop < top || (birdTop + 34) > (top + 100)) {
                if ((birdLeft + 64) > (left + 10) && birdLeft < (left + 90)) {
                    death();
                }
            }
            ;
            if (left < 300) {
                console.log(birdLeft, left + 90);
            }
            if (birdLeft > (left + 90) && birdLeft < (left + 101)) {
                addScroe();
            }
            ;
        }
        ;
    }

    //死亡状态
    function death() {
        window.die = true;
        $(".gameEnd span").text("您的得分:" + window.playScroe);
        $(".gameEnd").fadeToggle(200);
    };

    //重新开始
    function Recovery() {
        window.die = false;
        window.playScroe = 0;
        $("#scroe").text(window.playScroe);
        var tube = $(".tube");
        var wid = 400;
        for (var i = 0; i < tube.length; i++) {
            var left = wid + "px";
            var top = -myRondom(210) + "px";
            tube.eq(i).css("top", top);
            tube.eq(i).css("left", left);
            wid += 300;
        }
        ; //背景1
        var bgImg1 = $(".bgImage").css("left", "0px");
        //背景2
        var bgImg2 = $(".bgImage2").css("left", "1500px");
        //草
        var Green = $(".bootonGreen").css("left", "0px");
        var Green2 = $(".bootonGreen2").css("left", "1500px");
        Green2 = (Green2 - 1) + "px";
        var bird = $(".bird").css({
            "left": "200px",
            "top": "400px"
        });
    };

    function birdDown() {
        var bird = $(".bird").css("top").split("p")[0];
        bird = (parseInt(bird) + 1) + "px";
        $(".bird").css("top", bird);
    };

    // 随机数
    function myRondom(muth) {
        return Math.floor(Math.random() * muth);
    }

    //控制管道
    function tubeControl() {
        var tube = $(".tube");
        //背景1
        var bgImg1 = $(".bgImage").css("left").split("p")[0];
        bgImg1 = (bgImg1 - 1) + "px";
        $(".bgImage").css("left", bgImg1);
        if (parseInt(bgImg1) < -1490) {
            bgImg1 = 1500 + "px";
            $(".bgImage").css("left", bgImg1);
        }
        ;
        //背景2
        var bgImg2 = $(".bgImage2").css("left").split("p")[0];
        bgImg2 = (bgImg2 - 1) + "px";
        $(".bgImage2").css("left", bgImg2);
        if (parseInt(bgImg2) < -1490) {
            bgImg2 = 1500 + "px";
            $(".bgImage2").css("left", bgImg2);
        }
        ;
        //草
        var Green = $(".bootonGreen").css("left").split("p")[0];
        Green = (Green - 1) + "px";
        $(".bootonGreen").css("left", Green);
        if (parseInt(Green) < -1490) {
            Green = 1500 + "px";
            $(".bootonGreen").css("left", Green);
        }
        ;
        var Green2 = $(".bootonGreen2").css("left").split("p")[0];
        Green2 = (Green2 - 1) + "px";
        $(".bootonGreen2").css("left", Green2);
        if (parseInt(Green2) < -1490) {
            Green2 = 1500 + "px";
            $(".bootonGreen2").css("left", Green2);
        }
        ;
        for (var i = 0; i < tube.length; i++) {
            var left = tube.eq(i).css("left").split("p")[0];
            if (left < -250) {
                left = 1550 + "px";
                var top = -myRondom(210) + "px";
                tube.eq(i).css("left", left);
                tube.eq(i).css("top", top);
            } else {
                left -= 1;
                tube.eq(i).css("left", left);
            }
            ;
        }
        ;
    };
});