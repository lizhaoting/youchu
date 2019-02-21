var styleString =
    ' .vPlayArea { width: 100%; height: 100%; } .vPlayArea .vPlayItem { width: 960px; padding: 10px; height: 618px; background: #fff; overflow: hidden; position: absolute; left: 50%; top: 50%; margin-left: -480px; margin-top: -366px; z-index: 2; border: 1px solid #dedede; transition: margin 0.36s ease, background 1s ease, border-color 1s ease; } .vPlayArea .vPlayItem video { width: 100%; } .vPlayArea.vshow .vPlayItem { margin-top: -336px; } .videoTabBtns { position: absolute; top: 50%; width: 100%; height: 0; transform: translateY(-50%); transition: opacity 1s ease; } .videoTabBtns .videoTabBtn { width: 50px; height: 50px; background: #fff; margin-top: -25px; position: absolute; top: 0; text-align: center; cursor: pointer; } .videoTabBtns .videoTabBtn .icon { text-align: center; } .videoTabBtns .videoTabBtn.next { right: 0; } .videoTabBtns .videoTabBtn.next .icon:after { content: ""; font-family: "FontAwesome"; speak: none; font-style: normal; font-weight: 400; font-variant: normal; text-transform: none; font-size: 14px; line-height: 1; color: inherit; text-rendering: auto; -webkit-font-smoothing: antialiased; line-height: 50px; font-size: 29px; color: #848484; } .videoTabBtns .videoTabBtn.prev { left: 0; } .videoTabBtns .videoTabBtn.prev .icon:after { content: ""; font-family: "FontAwesome"; speak: none; font-style: normal; font-weight: 400; font-variant: normal; text-transform: none; font-size: 14px; line-height: 1; color: inherit; text-rendering: auto; -webkit-font-smoothing: antialiased; line-height: 50px; font-size: 29px; color: #848484; } .videoInfor { width: 100%; height: 48px; position: relative; padding: 15px 0 0; transition: opacity 1s ease; } .videoInfor .title { font-size: 16px; color: #2e2e2e; } .videoInfor .subtitle { color: #7d7d7d; font-size: 13px; line-height: 22px; margin-top: 6px; } .videoBg { position: fixed; top: 0; left: 0; background: rgba(0, 0, 0, 0.8); width: 100%; height: 100%; z-index: 100; transition: background 1s ease; } .videoBg.deepView { background: rgba(0, 0, 0, 0.9); } .videoBg.deepView .vPlayItem { background: transparent; border-color: transparent; } .videoBg.deepView .videoInfor { opacity: 0; } .videoBg.deepView .videoTabBtns { opacity: 0; } .vPlayArea .vPlayItem { background: #252525; border-color: #252525; } .theme-b .videoTabBtns .videoTabBtn { background: #252525; } .videoInfor .title { color: #fff; } .agent-mobile .videom .content .wrapper { width: 96%; margin: 0 2%; margin-top: 20px; } .videom .item_block .item_img { position: relative; } .videom .item_block .imgIcon { opacity: 0; position: absolute; width: 48px; height: 48px; border: 3px solid rgba(255, 255, 255, 0.9); top: 10%; left: 50%; margin-left: -25px; margin-top: -25px; border-radius: 50%; transition: all 0.5s ease 0s; visibility: hidden; } .videom .item_block:hover .imgIcon { visibility: visible; opacity: 1; top: 50%; } .videom .item_block .imgIcon:after { content: ""; position: absolute; width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 15px solid #fff; top: 50%; left: 50%; margin-left: -6px; margin-top: -9px; } .agent-mobile .videom .content_list .item_block { width: 49%; float: left; margin-bottom: 10px; } .agent-mobile .videom .content_list .item_block:nth-child(2n) { float: right; } .theme-b .vPlayArea .vPlayItem { background: #252525; border-color: #252525; } .theme-b .videoTabBtns .videoTabBtn { background: #252525; } .theme-b .videoInfor .title { color: #fff; } #sitecontent .videom .item_block .item_mask { transition: 0.36s ease; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAC0CAYAAACKcP4VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2NEUwMjc2OUJBMzExRThBRjgwQUYyRkM4NkQ1QkU2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2NEUwMjc3OUJBMzExRThBRjgwQUYyRkM4NkQ1QkU2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjY0RTAyNzQ5QkEzMTFFOEFGODBBRjJGQzg2RDVCRTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjY0RTAyNzU5QkEzMTFFOEFGODBBRjJGQzg2RDVCRTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7YkVFvAAACwElEQVR42uzXQU4CQRiE0WnDEbn/Vdq4cyGOA0OXUO9bkbAwIS/1t+N6vW53Nr99Hpt0sMud2Pa+g1Gn4JtWUc/oYwfQPOFvTD+zjuA7G8yEUH/B90wkEOomvlUwINSvb75VCAVfDIIVhC8ehKX45j9DKMtnBdWHD0L4IBR83oNvim++IEAILR+E6sTnFMNnBdWND0L4IBR83oPwWUF144MQPqdY8FlB+CCETxDC5z0In6wgfBDCJwDhs4LwQQghfBDCB6Hgs4LwQSj4nGL4rKDggxA+CAWf9yB8VhA+QQifUwyfrCB8EMInCOHzHoRPVhA+COGTUwyfFYRPEMIHIXzyHoTPCsInCOFziuFT3wrCByF86kMIH4TwqW8F4VMMIXyKnWL4FFtB+BRDCJ9iCOFT7D0In2IrCJ9iCOFT7BTDp9gKwqcYQvgUQwifYu9B+BRbQfgUW0H4FAs+xdYPPsUAwidnV33rB58sn/rWDz5ZPsEnwSf4JPgEnwSfXr4BnyyfulYPPlk+9a0efLJ86ls9+BSD99XFb6LV6CyfovAsnyLo4FMMHXyKofPmUxSe5VMEHXyKoXN2FYVn+RRBB59i6OBTDJ03n6LwLJ8i6OBTDJ2zqyg8ywfdBp+q0MEHXTxvPvAsn3rQwQeds6tOeJYPOvjUhQ4+6Lz51AnP8kEHn7rQObvgWT71oYMPOvjUh86bDzzLB11v8EHn7IJn+QQdfNDBJ+i8+cCzfIIOPuicXfBk+aCDDzrBB503H3iyfNDBB52cXfAsH3TwQSf4oPPmA0+WDzr4oJOzC57lg07wQQcfdOp884Fn+aDT8eUbL4gOPGfX2un9zy508EGn98cHXdGbb4Cn5uWDrvi/3RFEB145PmunKL6xEB148C1dI+i0e3YHdEq++c4CA51+7HIAz4ROq/HdwjRB0yN9CjAAQh2YndQMJJcAAAAASUVORK5CYII=); background-repeat: no-repeat; width: 48px; height: 48px; position: absolute; top: 0; background-color: rgba(255, 255, 255, 0.58); bottom: 0; right: 0; left: 0; margin: auto; border: 1px solid hsla(0, 0%, 33%, 0.58); border-radius: 50%; background-size: 20px; background-position: 16px; opacity: 0; }';

function videomplay() {
    var $videoArea = $("#videomlist"),
        $videoItem = $(".videom_item"),
        videoLinks = [],
        videoInfor = [];

    function getSingle(fn) {
        var result;

        return function() {
            return result ? result : (result = fn.apply(this, arguments));
        };
    }

    var singleVBg = getSingle(createVideoBg);

    function createVideoBg(obj) {
        var videoBg = $(
                '<div class="videoBg" style="display: none"></div>'
            ).appendTo($("body")),
            initObj,
            config,
            result,
            timer;

        initObj = {
            initDo: function initDo() {},
            outDo: function outDo() {},
            inDo: function inDo() {},
            hide: function hide() {
                config.outDo.call(this, result);
                videoBg.fadeOut();
                $(videoBg).removeClass("deepView");
                clearTimeout(timer);
            },
            show: function show() {
                timer = setTimeout(function() {
                    $(videoBg).addClass("deepView");
                }, 4000);
                config.inDo.call(this, result);
                videoBg.fadeIn();
            }
        };
        config = $.extend(initObj, obj);

        videoBg.on({
            click: function click(ev) {
                if ($(ev.target).hasClass("vPlayArea")) {
                    initObj.hide();
                }
            },
            mousewheel: function mousewheel() {
                return false;
            },
            mousemove: function mousemove() {
                var _this = this;
                $(_this).removeClass("deepView");
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function() {
                    $(_this).addClass("deepView");
                }, 4000);
            }
        });

        result = {
            bgJDOM: videoBg,
            hide: initObj.hide,
            show: initObj.show
        };

        initObj.initDo.call(this, result);

        return result;
    }

    var Videom = function Videom(config, cd) {
        var cb = cb || {};
        this.initDo = false;
        this.evlist = {};
        this.initConfig = {
            link: []
        };
        this.cb = {};
        $.extend(true, this.initConfig, config);
        $.extend(true, this.cb, cb);
    };

    Videom.prototype = {
        construct: Videom,
        init: function init(box, infor) {
            var videoInfor,
                v = this,
                videoArea;

            if (typeof infor == "number") {
                videoInfor = this.initConfig.list[infor];
            } else {
                videoInfor = {
                    videoLink: infor
                };
            }

            if (this.initDo == true) {
                this.tabTo(videoInfor);
                this._trigger("initDo");
                return;
            }

            this.initDo = true;
            var str = '<div class="vPlayArea">';

            str +=
                '<div class="vPlayItem">\n                           <iframe id="contentFrame" width="100%" height="540px" frameborder="no" border="0" marginwidth="0" marginheight="0" allowtransparency="yes" src=""></iframe>                        <div class="videoInfor">\n                                <div class="videoHeader">\n                                    <p class="title"></p>\n                                    <p class="subtitle"></p>\n                                </div>\n                                <div class="videoDes">\n                                    <p class="description">\n                                    </p>\n                                </div>\n                            </div>\n                        </div>';
            str += "</div>";

            $(str).on("click", function(ev) {
                ev.stopPropagation();
            });
            videoArea = $(str).appendTo(box);

            v.box = box;
            v.videoArea = videoArea;
            v.video = videoArea.find("iframe");
            v.videoBox = videoArea.find(".vPlayItem");
            v.inforBox = videoArea.find(".videoInfor");
            v.desBox = videoArea.find(".videoDes");
            v.videoDom = v.video[0];

            // v._tabText(v.inforBox.find('.title'), videoInfor.title);
            // v._tabText(v.inforBox.find('.subtitle'), videoInfor.subtitle);
            // v._tabText(v.desBox.find('.description'), videoInfor.description);
            v._addControl(infor);

            this._bind("initDo", function() {
                var _this = this;
                this.video.on("click", function(ev) {
                    if (ev.which == 1) {
                        _this.tabState();
                    }
                });
            });
            this._trigger("initDo");
            this.tabTo(videoInfor);
        },
        on: function on(name, fn) {
            this._bind(name, fn);
        },
        tabTo: function tabTo(infor) {
            void 0;
            var initInfor = {
                index: 0,
                description: "",
                subtitle: "",
                title: "",
                videoLink: ""
            };
            $.extend(initInfor, infor);

            this._tabBtn(infor.index);
            this.video.attr("src", initInfor.videoLink);

            this._tabText(this.inforBox.find(".title"), initInfor.title);
            this._tabText(this.inforBox.find(".subtitle"), initInfor.subtitle);
            this._tabText(
                this.desBox.find(".description"),
                initInfor.description
            );
        },
        out: function out() {
            this._trigger("outvideo");
        },
        stop: function stop() {
            this.videoDom.src = "";
        },
        play: function play() {
            this.videoDom.src = "";
        },
        state: function state() {
            var isPlay;

            if (this.videoDom.paused) {
                isPlay = false;
            } else {
                isPlay = true;
            }
            return isPlay;
        },
        tabState: function tabState() {
            var isPlay = this.state();
            if (isPlay) {
                this.stop();
            } else {
                this.play();
            }
        },
        _addControl: function _addControl(num) {
            if (typeof num != "number") return;
            var hasControl = false,
                v = this,
                prev,
                next,
                prevBtn,
                nextBtn;

            v.currentIndex = num;
            prev = {
                index: num - 1,
                className: (function() {
                    if (typeof v.initConfig.list[num - 1] == "undefined") {
                        return "disable";
                    } else {
                        return "able";
                    }
                })()
            };
            next = {
                index: num + 1,
                className: (function() {
                    if (typeof v.initConfig.list[num + 1] == "undefined") {
                        return "disable";
                    } else {
                        return "able";
                    }
                })()
            };

            if (hasControl) {
                prevBtn.data("index", prev.index).addClass(prev.className);
                nextBtn.data("index", next.index).addClass(next.className);
                return;
            }
            hasControl = true;

            var tabControlStr, tabControl;
            tabControlStr =
                '\n                    <div class="videoTabBtns">\n                        <div class="videoTabBtn prev ' +
                prev.className +
                '" data-index="' +
                prev.index +
                '">\n                            <p></p>\n                            <i class="icon"></i>\n                        </div>\n                        <div class="videoTabBtn next ' +
                next.className +
                '" data-index="' +
                next.index +
                '">\n                            <p></p>\n                            <i class="icon"></i>\n                        </div>\n                    </div>\n                ';

            tabControl = $(tabControlStr).appendTo(v.box);
            prevBtn = tabControl.find(".prev");
            nextBtn = tabControl.find(".next");

            tabControl.on("click", ".videoTabBtn", function(ev) {
                ev.stopPropagation();
                var btn = this;
                if ($(btn).hasClass("disable") == false) {
                    v.tabTo(v.initConfig.list[$(btn).data("index")]);
                }
                return false;
            });

            v.tabControl = tabControl;
        },
        _tabBtn: function _tabBtn(index) {
            this._addControl(index);
        },
        _tabText: function _tabText(el, text) {
            if (typeof text == "undefined") {
                $(el).css({
                    display: "none"
                });
            } else {
                $(el).text(text);
            }
        },
        _bindEv: function _bindEv(name, fn) {
            var _this = this;
            this.cb[name] = fn;
            $.each(_this.cb, function(indexInArray, valueOfElement) {
                $(_this)
                    .off(name)
                    .on(name, fn);
            });
        },
        _trigerEv: function _trigerEv(name, option) {
            if (typeof this.cb[name] != "function") {
                this._bindEv(name, function() {});
            }
            $(this).trigger(name, option);
        },
        _bind: function _bind(name, fn) {
            var _self = this,
                evlist = this.evlist;

            if (!evlist[name]) {
                evlist[name] = [];
            } else if (fn in evlist[name]) {
                return;
            }
            this.evlist[name].push(fn);
        },
        _trigger: function _trigger(name, context, arg) {
            var fns = this.evlist[name];

            if (!fns || fns.length === 0) {
                return false;
            }

            if (!context) {
                context = this;
            } else if (
                Object.prototype.toString.call(context) == "[object Array]"
            ) {
                arg = context;
                context = this;
            }

            $.each(fns, function(i, v) {
                v.apply(context, arg);
            });
        }
    };

    $videoItem.each(function(i, e) {
        var infor = {};
        infor.index = i;
        infor.title = $(e)
            .find(".item_info .title")
            .text();
        infor.subtitle = $(e)
            .find(".item_info .subtitle")
            .text();
        infor.description = $(e)
            .find(".description")
            .text();
        infor.videoLink = $(e)
            .find(".item_link")
            .attr("href");
        $(e).attr("data-index", i);
        $(e).attr("data-href", infor.videoLink);

        videoInfor.push(infor);
        videoLinks.push(infor.videoLink);
    });

    var vPlayer = new Videom({
        list: videoInfor
    });
    var vBg = singleVBg({
            initDo: function initDo(bg) {},
            inDo: function inDo(bg) {
                $("body").on("keydown.video", function(ev) {
                    if (ev.keyCode == 32) {
                        ev.stopPropagation();
                        ev.preventDefault();
                        vPlayer.tabState();
                    }
                });
            },
            outDo: function outDo(bg) {
                vPlayer.out();

                $("body").off("keydown.video");
            }
        }),
        mask = vBg.bgJDOM;
    vPlayer.on("initDo", function() {
        vBg.show();
        this.videoArea.addClass("vshow");
    });

    vPlayer.on("outvideo", function() {
        this.videoArea.removeClass("vshow");
        setTimeout(() => {
            this.stop();
        }, 360);
    });

    $videoItem.on({
        "click.video": function clickVideo(ev) {
            ev.preventDefault();

            var link = $(this).attr("data-href"),
                index = +$(this).attr("data-index");

            if (typeof link == "undefined") return;
            vPlayer.init(mask, index);
            return false;
        }
    });
}
$(function() {
    $("<style>" + styleString + "</style>").appendTo("head");

    $(".videom .content_list .item_block").off("click");
    videomplay();
});
