var footlogo = '<span style="vertical-align: top;display: inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;技术支持</span> <a id="flogo" target="_blank" href="http://www.uemo.net"><img src="http://resources.jsmo.xin/templates/upload/2/logo/logo.png" width="50" height="20"></a>';

if (Promise) {
    function videoplay(doms) {
        setInterval(function () {

        });
    }

    function testAutoPlay() {
        // 杩斿洖涓€涓猵romise浠ュ憡璇夎皟鐢ㄨ€呮娴嬬粨鏋�
        return new Promise(resolve => {
            if (!$('video').length) return;
            let audio = $('video')[0];
            let autoplay = true;
            // play杩斿洖鐨勬槸涓€涓猵romise
            audio.play().then(() => {
                // 鏀寔鑷姩鎾斁
                autoplay = true;
            }).
            catch(err => {
                // 涓嶆敮鎸佽嚜鍔ㄦ挱鏀�
                autoplay = false;
            }).
            finally(() => {
                // 鍛婅瘔璋冪敤鑰呯粨鏋�
                resolve(autoplay);
            });
        });
    }

    testAutoPlay().then(res => {
        if (!res) {
            $('#mslider video').each(function (i, e) {
                let timer;
                timer = setInterval(function () {
                    if (e.paused) {
                        $(e).attr('muted', true);
                        e.play();
                    } else {
                        clearInterval(timer);
                    }
                }, 400)
            })
        }
    }).catch(err => {
        console.log(err);
    });
}