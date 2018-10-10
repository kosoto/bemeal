var bemeal = bemeal || {};
bemeal = (()=>{
	var init =x=>{
		bemeal.router.init(x);
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		
	};
	return {init:init};
})();
bemeal.main = (()=>{
	var init =()=>{
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{
		bemeal.router.main();
		
	};
	return {init:init};
})();
bemeal.router = {
		init : x=>{
			$.when(
				$.getScript(x+"/resources/js/router.js",()=>{
					$.extend(new Session(x));
				}),
				$.getScript(x+"/resources/js/util.js"),
				$.Deferred(y=>{
					$(y.resolve);
				})
			).done(z=>{
				bemeal.main.init();
			});
		},
		main : ()=>{
			/*메인화면 그리기*/
			$.when(
				$.getScript($.script()+"/ui/navi.js"),
				$.Deferred(y=>{
					$(y.resolve);
				})
			).done(x=>{
				$('#wrapper').html(naviUI());
				
				$.getScript($.script()+"/ui/imgRow.js",()=>{
					$('#wrapper').append(
							$('<div/>').addClass('imgRow').html(rowUI()).slick({
								 infinite: true,
							      slidesToShow: 5,
							      slidesToScroll: 5
							})
							);
					    $('#first').click(e=>{
					       $('#first').text('first');
					    });
					    $('.imgRow > button:first-child').empty().append(
					    	     $('<span/>').addClass('glyphicon glyphicon-menu-left')
					    	   );
			    	   $('.imgRow > button:last-child').empty().append(
			    	     $('<span/>').addClass('glyphicon glyphicon-menu-right')
			    	   );
				});
				
				$('#taste').click(e=>{
					alert('taste click');
					$.getScript($.script()+"/kaeun.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						kaeun.main();
					})
				});
				$('#menu').click(e=>{
					alert('menu click');
					$.getScript($.script()+"/yoonho.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						yoonho.main();
					})
				});
				$('#login').click(e=>{
					alert('login click');
					$.getScript($.script()+"/junghoon.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						junghoon.main();
					})
				});
				$('#adminLogin').click(e=>{
					alert('adminLogin click');
					$.getScript($.script()+"/junghoon.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						junghoon.main();
					})
				});
				$('#join').click(e=>{
					alert('join click');
					$.getScript($.script()+"/junghoon.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						junghoon.main();
					})
				});
				
			})
			;
		}
};













