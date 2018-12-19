(function($) {

    $(document).ready(function() {

            $pagecontainer = $('#page-container');

            $pagecontainer.css('paddingTop', 0);

            $('#et-top-navigation').css('padding', 0);

            /*if( $( 'body' ).hasClass( 'home' ) ){

              $( 'body' ).removeClass( 'et_fixed_nav' )

            }*/

            /*
            $("#putney-slide > div:gt(0)").hide();
            setInterval(function() {
              $('#putney-slide > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#putney-slide');
            },  3000);


            $('#putney-slide img:gt(0)').hide();
            setInterval(function(){
            $('#putney-slide :first-child').fadeOut()
               .next('img').fadeIn()
               .end().appendTo('#putney-slide');},
            3000);
            */

            //alert('ddd')

            var win = $(window).width();

            var hf = $('#main-header .container').width();

            var oh = (win - hf) / 2;

            $('#main-header li.mega-find-a-program ul.mega-sub-menu').css({ width: win + 'px', left: '-' + oh + 'px' });

            $('#main-header li.mega-find-a-program ul.mega-sub-menu').css('padding-left', oh + 'px');

            $('#main-header li.mega-view-by-category ul.mega-sub-menu').remove();


            //view by program type
            var programstype = $('#programstype').html();

            //var programstype = '<div class="whitebg"><div class="container">'+programstype+'</div></div>';

            $('#main-header li.mega-view-by-category').append(programstype);


            //view by program destination
            var destination = $('#programsdestinations').html();

            //alert(destination)
            //var destination = '<div class="whitebg"><div class="container">'+destination+'</div></div>';

            $('#main-header li.mega-view-by-destination').append(destination);


            //view by program grade
            var programsgrade = $('#programsgrade').html();

            $('#main-header li.mega-view-by-grade').append(programsgrade);

            $('#main-header ul.grademenu').css('padding-left', (oh + 15) + 'px');


            $('#main-header li.mega-find-a-program').hover(

                function() {

                    var whitebg = $('#main-header li.mega-view-by-category .whitebg');

                    if (whitebg.css('display') == 'none') {

                        $('#main-header li.mega-view-by-category .whitebg').css('display', 'block');

                        $('#main-header li.mega-view-by-category > a.mega-menu-link').addClass('current');
                    }

                },

                function() {

                    $('#main-header li.mega-view-by-category .whitebg').css('display', 'none');

                    $('#main-header li.mega-view-by-category > a.mega-menu-link').removeClass('current');

                }

            );


            $('#main-header li.mega-view-by-category > a.mega-menu-link, ' +
                '#main-header li.mega-view-by-destination > a.mega-menu-link, ' +
                '#main-header li.mega-view-by-grade > a.mega-menu-link').on("click", function(e) {

                    e.preventDefault();

                    $('#main-header li .whitebg').css('display', 'none');

                    $('#main-header ul.mega-menu ul.mega-sub-menu li.mega-view-by-grade ul.grademenu').css('display', 'none');

                    $('#main-header ul.mega-menu ul.mega-sub-menu li.mega-menu-item a').removeClass('current');

                    $(this).addClass('current');

                    $(this).next().css('display', 'block');

                }

            );

            $('#main-header ul.mega-menu ul.grademenu li.grades a.grade').on("click", function(e) {

                    e.preventDefault();

                    $('#main-header li .whitebg').css('display', 'none');

                    $('#main-header ul.mega-menu ul.mega-sub-menu li.mega-view-by-grade ul.grademenu').css('display', 'block');

                    $('#main-header ul.mega-menu ul.mega-sub-menu li.mega-menu-item a').removeClass('current');

                    $(this).addClass('current');

                    $(this).closest('ul.grademenu').prev().addClass('current');

                    $(this).next().css('display', 'block');

                }

            );


            $('.home #top-menu').append('<li id="menu-item-29765" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-29765"><a href="https://app.goputney.com/login?_ga=1.111631491.661219860.1464631001">Login</a></li>');


            $('#footer-widgets .widget-bottom #s').attr('placeholder', 'Search GoPutney.com');

            var $mobilemenu = $('#mega-menu-primary-menu').html();

            $('#mobile_menu').html($mobilemenu);


            //Mobile Menu open/close
            $('#et_mobile_nav_menu .mobile_menu_bar_toggle').on("click", function(e) {
                $('#mobile_menu').toggle();
            });


            if ($(window).width() < 1100) {

                $('body').removeClass('et_non_fixed_nav').addClass('et_fixed_nav');

                //var mainheader = $('#main-header').html();

                //$('#main-header-mobi .mobilewrap').html(mainheader);

                if ($('body').hasClass('admin-bar')) {

                    $("#main-header-mobi").css('top', '32px');

                }

                $('#main-header').css('display', 'none');

            } else {

                $('#main-header').css('display', 'block');

                $(window).scroll(function() {

                    var sctop = $(this).scrollTop();

                    if ($('#home').length > 0) {

                        if (sctop > 520) {

                            $('body').addClass('et_fixed_nav');

                            $("#main-header").css('top', '39px');

                            $("#topbanner").css('background-color', '#333');

                            if ($('body').hasClass('admin-bar')) {

                                $("#topbanner").css('top', '32px');

                                $("#main-header").css('top', '71px');

                            }

                        } else {

                            $('body').removeClass('et_fixed_nav')

                            $("#main-header").css('top', '0');

                            $("#topbanner").css('background-color', 'rgba(51, 51, 51, 0.7)');

                        }

                    } else {

                        if (sctop > 1) {

                            if ($('body').hasClass('admin-bar')) {

                                $("#main-header").css('top', '32px');

                            }

                            $('body').addClass('et_fixed_nav')

                        } else {

                            $('body').removeClass('et_fixed_nav')

                            $("#main-header").css('top', '0');

                        }

                    }

                });
            }


            /*$( "#mobile_menu li a" ).on( "click", function(e) {
      e.preventDefault();
      
      if ($(this).hasClass('current')) {
          $(this).removeClass('current');
          $(this).next('ul').slideUp(350);
          $(this).next('.whitebg .container .column ul').slideUp(350);
      }else{
        $('#mobile_menu li a').removeClass('current');
        $('#mobile_menu ul').css('display','none');
        $(this).toggleClass( "current" );
        $(this).next('ul').slideToggle('slow');
        $(this).next('.whitebg .container .column ul').slideToggle('slow');
      }
    });

    function expandMenu(e){
        var sublist = $(e.target).next("ul");      
        if(sublist.length != 0){
            if(sublist.is(":visible")){
                sublist.slideUp('normal');
            }
            else{
                sublist.slideDown('normal');
            }
        }
        return false;    
    }
    $(document).ready(function () {
        $('#mobile_menu ul:first').show();
        $('#mobile_menu li a').click(expandMenu);
    });
*/

            /*
            var menuexdented = $('#allprograms').html();


            //alert(menuexdented);

            $('#top-menu li.find-a-program > .sub-menu').remove();
            $( menuexdented ).appendTo( "#top-menu li.find-a-program" );

            $('#mobile_menu li.find-a-program > .sub-menu').remove();
            $( menuexdented ).appendTo( "#mobile_menu li.find-a-program" );

            $('#top-menu li.find-a-program').hover(

              function() {
              $('.allprograms').fadeIn(1000);
              },

              function() {
              $('.allprograms').fadeOut('fast');
              }

            );


    
            $('#mobile_menu li.find-a-program').hover(

              function() {
              $('.allprograms').fadeIn(1000);
              },

              function() {
              $('.allprograms').fadeOut('fast');
              }

            );
            */


            //$("a[title='allprogram']" ).addClass('external');

            $("a.vp-a").hover(
                function() {
                    $(this).closest('.et_pb_section_0').css({ 'filter': 'alpha(opacity=60)', 'opacity': '0.6' });
                },
                function() {
                    $(this).closest('.et_pb_section_0').css({ 'filter': 'alpha(opacity=100)', 'opacity': '1' });
                }
            );

            $('div.tiled-gallery').attr('id', 'photo_gallery');

            $('#mobile_menu > li > a, ' + '#mobile_menu > li.mega-find-a-program > ul > li > a:not([title^="allprogram"]), ' + '#mobile_menu > li.mega-find-a-program > ul > li > ul > li > a').on("click", function(e) {

                e.preventDefault();

                if (jQuery(this).attr('class') != 'current-item') {

                    //jQuery('#mobile_menu li ul').hide('fast');

                    jQuery(this).next().slideToggle('slow');

                    //alert(jQuery(this).next('.whitebg').length);
                    //if(jQuery(this).next('.whitebg').length)
                    //jQuery(this).next('.whitebg').slideToggle('slow');

                    jQuery('#mobile_menu li a').removeClass('current-item');

                    if (jQuery(this).closest('ul').length)
                        jQuery(this).closest('ul').prev().addClass('current-item');

                    if (jQuery(this).closest('ul').prev().closest('ul').length)
                        jQuery(this).closest('ul').prev().closest('ul').prev().addClass('current-item');

                    jQuery(this).toggleClass('current-item');

                    $('#mobile_menu li a').each(function(index) {

                        if (!$(this).hasClass('current-item')) {

                            jQuery(this).next().slideUp(350);

                        }

                    });

                }

            });

                if (jQuery('.accordion').prev('p').length < 2)
                jQuery('.accordion').prev('p').hide();

                jQuery('.accordion .accordion-item br').remove();
                jQuery('.accordion .accordion-item-inner br').remove();
                jQuery('.accordion .accordion-link + font').remove();

                jQuery('.accordion .accordion-link').each(function() {

                    $('.accordion font').remove();

                    var link = jQuery(this);

                    var item = link.next('.accordion-item');

                    link.click(function() {

                        jQuery('.accordion .accordion-item').slideUp("slow"); //if needed to close previous open accordian item

                        link.toggleClass('accordion-active');

                        item.toggle();

                        return false;

                    });

                });


            jQuery('.ataglance li').hover(

                function() {
                    $txt = jQuery(this).find('.descr').html();
                    if ($txt)
                        jQuery('.ataglancepop').html($txt).css('display', 'block');
                    else jQuery('.ataglancepop').css('display', 'none');
                },

                function() {
                    jQuery('.ataglancepop').css('display', 'none');
                }

            );


            jQuery('.meet-our-leaders .leader .excerpt .read_more, ' +
                '#content .leaders .excerpt .read_more, ' +
                '.widget_barn_leaderprofile_widget .excerpt .read_more').click(function() {

                jQuery(this).closest('.excerpt').hide().next('.content').show();

                return false;

            });

            jQuery('<a class="read_less" href="#">… read less</a>').appendTo('#content .leaders .content p');

            jQuery('#content .leaders .content .read_less').click(function() {

                jQuery(this).closest('.content').hide().prev('.excerpt').show();

                return false;

            });

            if (jQuery('.gallery-row .gallery-group .tiled-gallery-item').length) {
                jQuery('.gallery-row .gallery-group .tiled-gallery-item').hover(
                    function() {
                        jQuery('<span class="hover-effect"><span class="tiledlink"><i class="fa fa-search-plus"></i></span></span>').appendTo(this);
                    },
                    function() {
                        jQuery('.gallery-row .gallery-group .tiled-gallery-item .hover-effect').remove();
                    }

                );
            }

            jQuery('.meet-our-leaders .leader-search form select, ' +

                '.slideshows .slideshow-search form select').change(function() {

                var $this = jQuery(this);

                document.location = $this.closest('form').attr('action') + $this.attr('name') + '/' + $this.val();

            });


        }) //END Document declarations



    $(window).load(function() {
        $(".iphone #mobile_menu").mCustomScrollbar({
            setHeight: $(window).height() - 68,
            theme: "dark",
            autoHideScrollbar: false,
            autoDraggerLength: false
        });
    });


})(jQuery)