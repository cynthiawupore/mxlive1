

var screen_Width = document.documentElement.clientWidth;

var screen_Height = document.documentElement.clientHeight;

 // HEADER

     // CONTAINER
         // NAV
            var layer06_nav_h = screen_Height-72
            var layer06_nav_w = 50;

            $('.layer06-nav').css({
                width : layer06_nav_w,
                height: layer06_nav_h,
            })
            $('.layer06-nav-wrap').css({
                width : layer06_nav_w,
                height: layer06_nav_h,
            })

            $('.layer07 span').css({
                position: "fixed",
                top : layer06_nav_h/2 ,
                left : layer06_nav_w,
                zIndex : "99",
            })

            $('.layer06-nav-wrap').hide()

            $('.layer06-small').show();
            
            // ALL
            $('.layer06-all-list ul li label').click(function(){

                 $(this).parents("li").find('.layer06-all-list-detail').slideToggle();

            })



            // LOVE
            // ONOFF-BTN

                $('.layer07 span').css({
                    position: "fixed",
                    top : layer06_nav_h/2 ,
                    left : layer06_nav_w,
                    zIndex : "99",
                })


                $('.layer07 span').click(function(){
                    

                    onoff();

                })

                $('.layer06-small ul li').click(function(){
                        

                        onoff()

                    })


                function onoff(){
                    switch(layer06_nav_w){
                        case 50:
                            layer06_nav_w=245

                            $('.layer06-nav-wrap').show();
                            $('.layer06-small').hide();

                            $('.layer06-nav-wrap').css({
                                width : layer06_nav_w,
                            })
                            $('.layer06-nav').css({
                                width : layer06_nav_w,
                            })
                            $('.layer07 span').css({
                                position: "fixed",
                                left : layer06_nav_w,
                            })

                            var layer06_main_w = screen_Width - layer06_nav_w
                            var layer06_main_h = screen_Height-72
                            $('.layer06-main').css({
                                width : layer06_main_w,
                                height : layer06_main_h,
                                marginLeft : layer06_nav_w,
                            })
                            if(600<layer06_main_w <= 1200){
                                $('.layer06-main-content-item').css({
                                    width : "42%",
                                    margin : "1% 4%",
                                })
                            }
                            if(layer06_main_w <= 600){
                                $('.layer06-main-content-item').css({
                                    width : "90%",
                                    margin : "1% 5%",
                                })
                            }
                            if(layer06_main_w > 1200){
                                $('.layer06-main-content-item').css({
                                    width : "21%",
                                    margin : "1% 2%",
                                })
                            }

                            break;
                        case 245:
                            layer06_nav_w=50

                            $('.layer06-nav-wrap').hide();
                            $('.layer06-small').show();

                            $('.layer06-nav-wrap').css({
                                width : layer06_nav_w,
                            })
                            $('.layer06-nav').css({
                                width : layer06_nav_w,
                            })
                            $('.layer07 span').css({
                                left : layer06_nav_w,
                            })

                            var layer06_main_w = screen_Width - layer06_nav_w
                            var layer06_main_h = screen_Height-72
                            $('.layer06-main').css({
                                width : layer06_main_w,
                                height : layer06_main_h,
                                marginLeft : layer06_nav_w ,
                            })
                            if(600<layer06_main_w <= 1200){
                                $('.layer06-main-content-item').css({
                                    width : "42%",
                                    margin : "1% 4%",
                                })
                            }
                            if(layer06_main_w <= 600){
                                $('.layer06-main-content-item').css({
                                    width : "90%",
                                    margin : "1% 5%",
                                })
                            }
                            if(layer06_main_w > 1200){
                                $('.layer06-main-content-item').css({
                                    width : "21%",
                                    margin : "1% 2%",
                                })
                            }
                            break;

                    }
                }

                    

                

         // MAIN
            var layer06_main_w = screen_Width - layer06_nav_w 
            var layer06_main_h = screen_Height-72
            $('.layer06-main').css({
                width : layer06_main_w,
                height : layer06_main_h,
                marginLeft : layer06_nav_w ,
            })
            // CONTENT


                if(600<layer06_main_w <= 1200){
                    $('.layer06-main-content-item').css({
                        width : "42%",
                        margin : "1% 4%",
                    })
                }
                if(layer06_main_w <= 600){
                    $('.layer06-main-content-item').css({
                        width : "90%",
                        margin : "1% 5%",
                    })
                }
                if(layer06_main_w > 1200){
                    $('.layer06-main-content-item').css({
                        width : "21%",
                        margin : "1% 2%",
                    })
                }
            // PAGES
            // FOOTER
     var layer09_main_w = $('.layer06-main-content').width()
     $('.layer09').css({
     	width : layer09_main_w,
     })
     $('.layer09-main').css({
     	width : layer09_main_w,
     	
     })

    

window.onresize=function () {
    var screen_Width = document.documentElement.clientWidth;

    var screen_Height = document.documentElement.clientHeight;

     // HEADER

         // CONTAINER
             // NAV
                var layer06_nav_h = screen_Height-72
                var layer06_nav_w = $('.layer06-nav').width()

                // var layer06_nav_w = 245;
                $('.layer06-nav').css({
                    width : layer06_nav_w,
                    height: layer06_nav_h,
                })
                $('.layer06-nav-wrap').css({
                    width : layer06_nav_w,
                    height: layer06_nav_h,
                })
                // ALL
                $('.layer06-all-list ul li label').click(function(){

                     $(this).parents("li").find('.layer06-all-list-detail').slideToggle();

                })
                // LOVE
                // ONOFF-BTN

                    $('.layer07 span').css({
                        position: "fixed",
                        top : layer06_nav_h/2 ,
                        left : layer06_nav_w,
                        zIndex : "99",
                    })


                    $('.layer07 span').click(function(){
                        

                       onoff()

                    })
                    $('.layer06-small ul li').click(function(){
                        

                        onoff()

                    })

                    function onoff(){
                        switch(layer06_nav_w){
                            case 50:
                                layer06_nav_w=245

                                $('.layer06-nav-wrap').show();
                                $('.layer06-small').hide();

                                $('.layer06-nav-wrap').css({
                                    width : layer06_nav_w,
                                })
                                $('.layer06-nav').css({
                                    width : layer06_nav_w,
                                })
                                $('.layer07 span').css({
                                    position: "fixed",
                                    left : layer06_nav_w,
                                })

                                var layer06_main_w = screen_Width - layer06_nav_w 
                                var layer06_main_h = screen_Height-72
                                $('.layer06-main').css({
                                    width : layer06_main_w,
                                    height : layer06_main_h,
                                    marginLeft : layer06_nav_w ,
                                })
                                if(600<layer06_main_w <= 1200){
                                    $('.layer06-main-content-item').css({
                                        width : "42%",
                                        margin : "1% 4%",
                                    })
                                }
                                if(layer06_main_w <= 600){
                                    $('.layer06-main-content-item').css({
                                        width : "90%",
                                        margin : "1% 5%",
                                    })
                                }
                                if(layer06_main_w > 1200){
                                    $('.layer06-main-content-item').css({
                                        width : "21%",
                                        margin : "1% 2%",
                                    })
                                }

                                break;
                            case 245:
                                layer06_nav_w=50

                                $('.layer06-nav-wrap').hide();
                                $('.layer06-small').show();

                                $('.layer06-nav-wrap').css({
                                    width : layer06_nav_w,
                                })
                                $('.layer06-nav').css({
                                    width : layer06_nav_w,
                                })
                                $('.layer07 span').css({
                                    left : layer06_nav_w,
                                })

                                var layer06_main_w = screen_Width - layer06_nav_w 
                                var layer06_main_h = screen_Height-72
                                $('.layer06-main').css({
                                    width : layer06_main_w,
                                    height : layer06_main_h,
                                    marginLeft : layer06_nav_w ,
                                })
                                if(600<layer06_main_w <= 1200){
                                    $('.layer06-main-content-item').css({
                                        width : "42%",
                                        margin : "1% 4%",
                                    })
                                }
                                if(layer06_main_w <= 600){
                                    $('.layer06-main-content-item').css({
                                        width : "90%",
                                        margin : "1% 5%",
                                    })
                                }
                                if(layer06_main_w > 1200){
                                    $('.layer06-main-content-item').css({
                                        width : "21%",
                                        margin : "1% 2%",
                                    })
                                }
                                break;

                        }
                    }

                    

             // MAIN
                var layer06_main_w = screen_Width - layer06_nav_w 
                var layer06_main_h = screen_Height-72
                $('.layer06-main').css({
                    width : layer06_main_w,
                    height : layer06_main_h,
                    marginLeft : layer06_nav_w ,
                })
                // CONTENT



                    if(600<layer06_main_w <= 1200){
                        $('.layer06-main-content-item').css({
                            width : "42%",
                            margin : "1% 4%",
                        })
                    }
                    if(layer06_main_w <= 600){
                        $('.layer06-main-content-item').css({
                            width : "90%",
                            margin : "1% 5%",
                        })
                    }
                    if(layer06_main_w > 1200){
                        $('.layer06-main-content-item').css({
                            width : "21%",
                            margin : "1% 2%",
                        })
                    }
                // PAGES
                // FOOTER

         var layer09_main_w = $('.layer06-main-content').width()
	     $('.layer09').css({
	     	width : layer09_main_w,
	     })
	     $('.layer09-main').css({
	     	width : layer09_main_w,
	     	
	     })

}


// 滚动
$.fn.scrollUnique = function() {
    return $(this).each(function() {
        var eventType = 'mousewheel';
        // 火狐是DOMMouseScroll事件
        if (document.mozHidden !== undefined) {
            eventType = 'DOMMouseScroll';
        }
        $(this).on(eventType, function(event) {
            // 一些数据
            var scrollTop = this.scrollTop,
                scrollHeight = this.scrollHeight,
                height = this.clientHeight;

            var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);

            if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                this.scrollTop = delta > 0? 0: scrollHeight;
                // 向上滚 || 向下滚
                event.preventDefault();
            }
        });
    });
};
$(".layer05").scrollUnique();


