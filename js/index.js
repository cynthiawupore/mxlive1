// search


// banner
$('.mx-index-banner-right li').click(function(){

	// SWF更换
	var index = $(this).attr('idfor');
	var p = $(this).parents(2);
	p.find('.mx-index-banner-left').hide();
	p.find('#'+index).show();

	// 选择按钮
	$(this).parents(2).find('span').css({
		opacity : 0.6,
	})
	$(this).find('span').css({
		opacity : 0,
	})
})


// tops
$('.mx-index-topItem ul').each(function(){
	$('.mx-index-topItem ul li .mx-index-topItem-detail').hide()
	$('.mx-index-topItem ul').find('li:first .mx-index-topItem-detail').show();
});

$('.mx-index-topItem ul li').hover(function() {
	$(this).siblings('li').find('.mx-index-topItem-detail').hide();
	$(this).find('.mx-index-topItem-detail').show();

	// $(this).css({
	// 	background : "rgba(225, 220, 220, 0.28)"
	// })
	// $(this).siblings().css({
	// 	background : "#fff"
	// })
});

// silde 1

$('.topItem-silde-main-1 ul li').click(function(){

	var index = $(this).attr('idfor');
	var p = $(this).parents(3);
	p.find('.sd1').hide();
	p.find('#'+index).show();

	$(this).css({
		background : "rgb(242, 61, 124)"
	})
	$(this).find('label').css({
		color : "#fff"
	})
	$(this).siblings().css({
		background : "#fff"
	})
	$(this).siblings().find('label').css({
		color : "#808080"
	})
})



var len = $('.topItem-silde-main-1 ul li').length
var li_w = $('.topItem-silde-main-1 ul li').width() + 1
var silde_w = li_w * len
	$('.topItem-silde-main-1 ul').css({
		width : silde_w,
		height : "25px",
	})
var box = $('.topItem-silde-main-1').width()


function toLeft(){
	var ul_left = $('.topItem-silde-main-1 ul').position().left

	if(silde_w-(Math.abs(ul_left)+box)>= li_w ){

		if(silde_w-(Math.abs(ul_left)+box)>=box){
			var move = ul_left - li_w*3
			$('.topItem-silde-main-1 ul').animate({
				left : move
			})
		}else{
			var move = ul_left - li_w*1
			$('.topItem-silde-main-1 ul').animate({
				left : move
			})
		}
	}
}

function toRight(){
	var ul_left = $('.topItem-silde-main-1 ul').position().left

	if(ul_left<0){

		if(Math.abs(ul_left)<box){
			var move = ul_left + li_w*1
			$('.topItem-silde-main-1 ul').animate({
				left : move
			})
		}else{
			var move = ul_left + li_w*3
			$('.topItem-silde-main-1 ul').animate({
				left : move
			})
		}

	}
}

$('.topItem-silde-pre-1').click(function(){

	if(!$(".topItem-silde-main-1 ul").is(":animated")){
		toRight()
	}
	
})
$('.topItem-silde-next-1').click(function(){
	
	if(!$(".topItem-silde-main-1 ul").is(":animated")){
		toLeft()
	}
})
// silde 1 end

// silde 2
$('.topItem-silde-main-2 ul li').click(function(){

	var index = $(this).attr('idfor');
	var p = $(this).parents(3);
	p.find('.sd2').hide();
	p.find('#'+index).show();

	$(this).css({
		background : "rgb(242, 61, 124)"
	})
	$(this).find('label').css({
		color : "#fff"
	})
	$(this).siblings().css({
		background : "#fff"
	})
	$(this).siblings().find('label').css({
		color : "#808080"
	})

})



var len2 = $('.topItem-silde-main-2 ul li').length
var li_w2 = $('.topItem-silde-main-2 ul li').width() + 1
var silde_w2 = li_w2 * len2
	$('.topItem-silde-main-2 ul').css({
		width : silde_w2,
		height : "25px",
	})
var box2 = $('.topItem-silde-main-2').width()


function toLeft2(){
	var ul_left2 = $('.topItem-silde-main-2 ul').position().left

	if(silde_w2-(Math.abs(ul_left2)+box2)>= li_w2 ){

		if(silde_w2-(Math.abs(ul_left2)+box2)>=box2){
			var move2 = ul_left2 - li_w2*3
			$('.topItem-silde-main-2 ul').animate({
				left : move2
			})
		}else{
			var move2 = ul_left2 - li_w2*1
			$('.topItem-silde-main-2 ul').animate({
				left : move2
			})
		}
	}
}

function toRight2(){
	var ul_left2 = $('.topItem-silde-main-2 ul').position().left

	if(ul_left2<0){

		if(Math.abs(ul_left2)<box2){
			var move2 = ul_left2 + li_w2*1
			$('.topItem-silde-main-2 ul').animate({
				left : move2
			})
		}else{
			var move2 = ul_left2 + li_w2*3
			$('.topItem-silde-main-2 ul').animate({
				left : move2
			})
		}

	}
}

$('.topItem-silde-pre-2').click(function(){
	
	if(!$(".topItem-silde-main-2 ul").is(":animated")){
		toRight2()
	}
})
$('.topItem-silde-next-2').click(function(){
	
	if(!$(".topItem-silde-main-2 ul").is(":animated")){
		toLeft2()
	}
})
// silde 2 end

// silde 3
$('.topItem-silde-main-3 ul li').click(function(){
	
	var index = $(this).attr('idfor');
	var p = $(this).parents(3);
	p.find('.sd3').hide();
	p.find('#'+index).show();

	$(this).css({
		background : "rgb(242, 61, 124)"
	})
	$(this).find('label').css({
		color : "#fff"
	})
	$(this).siblings().css({
		background : "#fff"
	})
	$(this).siblings().find('label').css({
		color : "#808080"
	})

})

var len3 = $('.topItem-silde-main-3 ul li').length
var li_w3 = $('.topItem-silde-main-3 ul li').width() + 1
var silde_w3 = li_w3 * len3
	$('.topItem-silde-main-3 ul').css({
		width : silde_w3,
		height : "25px",
	})
var box3 = $('.topItem-silde-main-3').width()


function toLeft3(){
	var ul_left3 = $('.topItem-silde-main-3 ul').position().left

	if(silde_w3-(Math.abs(ul_left3)+box3)>= li_w3 ){

		if(silde_w3-(Math.abs(ul_left3)+box3)>=box3){
			var move3 = ul_left3 - li_w3*3
			$('.topItem-silde-main-3 ul').animate({
				left : move3
			})
		}else{
			var move3 = ul_left3 - li_w3*1
			$('.topItem-silde-main-3 ul').animate({
				left : move3
			})
		}
	}
}

function toRight3(){
	var ul_left3 = $('.topItem-silde-main-3 ul').position().left

	if(ul_left3<0){

		if(Math.abs(ul_left3)<box3){
			var move3 = ul_left3 + li_w3*1
			$('.topItem-silde-main-3 ul').animate({
				left : move3
			})
		}else{
			var move3 = ul_left3 + li_w3*3
			$('.topItem-silde-main-3 ul').animate({
				left : move3
			})
		}

	}
}

$('.topItem-silde-pre-3').click(function(){
	
	if(!$(".topItem-silde-main-3 ul").is(":animated")){
		toRight3()
	}
})
$('.topItem-silde-next-3').click(function(){
	
	if(!$(".topItem-silde-main-3 ul").is(":animated")){
		toLeft3()
	}
})
// silde 3 end

// silde 4
$('.topItem-silde-main-4 ul li').click(function(){

	var index = $(this).attr('idfor');
	var p = $(this).parents(3);
	p.find('.sd4').hide();
	p.find('#'+index).show();

	$(this).css({
		background : "rgb(242, 61, 124)"
	})
	$(this).find('label').css({
		color : "#fff"
	})
	$(this).siblings().css({
		background : "#fff"
	})
	$(this).siblings().find('label').css({
		color : "#808080"
	})

})

var len4 = $('.topItem-silde-main-4 ul li').length
var li_w4 = $('.topItem-silde-main-4 ul li').width() + 1
var silde_w4 = li_w4 * len4
	$('.topItem-silde-main-4 ul').css({
		width : silde_w4,
		height : "25px",
	})
var box4 = $('.topItem-silde-main-4').width()


function toLeft4(){
	var ul_left4 = $('.topItem-silde-main-4 ul').position().left

	if(silde_w4-(Math.abs(ul_left4)+box4)>= li_w4 ){

		if(silde_w4-(Math.abs(ul_left4)+box4)>=box4){
			var move4 = ul_left4 - li_w4*3
			$('.topItem-silde-main-4 ul').animate({
				left : move4
			})
		}else{
			var move4 = ul_left4 - li_w4*1
			$('.topItem-silde-main-4 ul').animate({
				left : move4
			})
		}
	}
}

function toRight4(){
	var ul_left4 = $('.topItem-silde-main-4 ul').position().left

	if(ul_left4<0){

		if(Math.abs(ul_left4)<box4){
			var move4 = ul_left4 + li_w4*1
			$('.topItem-silde-main-4 ul').animate({
				left : move4
			})
		}else{
			var move4 = ul_left4 + li_w4*3
			$('.topItem-silde-main-4 ul').animate({
				left : move4
			})
		}

	}
}

$('.topItem-silde-pre-4').click(function(){
	
	if(!$(".topItem-silde-main-4 ul").is(":animated")){
		toRight4()
	}
})
$('.topItem-silde-next-4').click(function(){
	
	if(!$(".topItem-silde-main-4 ul").is(":animated")){
		toLeft4()
	}
})
// silde 4 end

// silde 5
$('.topItem-silde-main-5 ul li').click(function(){

	var index = $(this).attr('idfor');
	var p = $(this).parents(3);
	p.find('.sd5').hide();
	p.find('#'+index).show();

	$(this).css({
		background : "rgb(242, 61, 124)"
	})
	$(this).find('label').css({
		color : "#fff"
	})
	$(this).siblings().css({
		background : "#fff"
	})
	$(this).siblings().find('label').css({
		color : "#808080"
	})

})

var len5 = $('.topItem-silde-main-5 ul li').length
var li_w5 = $('.topItem-silde-main-5 ul li').width() + 1
var silde_w5 = li_w5 * len5
	$('.topItem-silde-main-5 ul').css({
		width : silde_w5,
		height : "25px",
	})
var box5 = $('.topItem-silde-main-5').width()


function toLeft5(){
	var ul_left5 = $('.topItem-silde-main-5 ul').position().left

	if(silde_w5-(Math.abs(ul_left5)+box5)>= li_w5 ){

		if(silde_w5-(Math.abs(ul_left5)+box5)>=box5){
			var move5 = ul_left5 - li_w5*3
			$('.topItem-silde-main-5 ul').animate({
				left : move5
			})
		}else{
			var move5 = ul_left5 - li_w5*1
			$('.topItem-silde-main-5 ul').animate({
				left : move5
			})
		}
	}
}

function toRight5(){
	var ul_left5 = $('.topItem-silde-main-5 ul').position().left

	if(ul_left5<0){

		if(Math.abs(ul_left5)<box5){
			var move5 = ul_left5 + li_w5*1
			$('.topItem-silde-main-5 ul').animate({
				left : move5
			})
		}else{
			var move5 = ul_left5 + li_w5*3
			$('.topItem-silde-main-5 ul').animate({
				left : move5
			})
		}

	}
}

$('.topItem-silde-pre-5').click(function(){
	
	if(!$(".topItem-silde-main-5 ul").is(":animated")){
		toRight5()
	}
})
$('.topItem-silde-next-5').click(function(){
	
	if(!$(".topItem-silde-main-5 ul").is(":animated")){
		toLeft5()
	}
})
// silde 5 end


// silde 6
$('.topItem-silde-main-6 ul li').click(function(){

	var index = $(this).attr('idfor');
	var p = $(this).parents(3);
	p.find('.sd6').hide();
	p.find('#'+index).show();

	$(this).css({
		background : "rgb(242, 61, 124)"
	})
	$(this).find('label').css({
		color : "#fff"
	})
	$(this).siblings().css({
		background : "#fff"
	})
	$(this).siblings().find('label').css({
		color : "#808080"
	})

})

var len6 = $('.topItem-silde-main-6 ul li').length
var li_w6 = $('.topItem-silde-main-6 ul li').width() + 1
var silde_w6 = li_w6 * len6
	$('.topItem-silde-main-6 ul').css({
		width : silde_w6,
		height : "26px",
	})
var box6 = $('.topItem-silde-main-6').width()


function toLeft6(){
	var ul_left6 = $('.topItem-silde-main-6 ul').position().left

	if(silde_w6-(Math.abs(ul_left6)+box6)>= li_w6 ){

		if(silde_w6-(Math.abs(ul_left6)+box6)>=box6){
			var move6 = ul_left6 - li_w6*3
			$('.topItem-silde-main-6 ul').animate({
				left : move6
			})
		}else{
			var move6 = ul_left6 - li_w6*1
			$('.topItem-silde-main-6 ul').animate({
				left : move6
			})
		}
	}
}

function toRight6(){
	var ul_left6 = $('.topItem-silde-main-6 ul').position().left

	if(ul_left6<0){

		if(Math.abs(ul_left6)<box6){
			var move6 = ul_left6 + li_w6*1
			$('.topItem-silde-main-6 ul').animate({
				left : move6
			})
		}else{
			var move6 = ul_left6 + li_w6*3
			$('.topItem-silde-main-6 ul').animate({
				left : move6
			})
		}

	}
}

$('.topItem-silde-pre-6').click(function(){
	
	if(!$(".topItem-silde-main-6 ul").is(":animated")){
		toRight6()
	}
})
$('.topItem-silde-next-6').click(function(){
	
	if(!$(".topItem-silde-main-6 ul").is(":animated")){
		toLeft6()
	}
})
// silde 6 end
