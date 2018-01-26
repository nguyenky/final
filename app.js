$(document).ready(function(){
	// alert(1);
	//---------------------

	var vn 	= 0;
	var uzb = 0;
	var times = 91;
	var arrTimes = [];

	var playerTopVN 	= ['Văn Toàn','Công Phượng','Quang Hải','Quang Hải','Đức Chinh','Đức Chinh','Hồng Duy'];

	// var item = playerTopVN[Math.floor(Math.random()*playerTopVN.length)];

	var playerBotVN 	= ['Xuân Mạnh','Đình Trọng','Duy Mạnh','Tiến Dũng','Văn Thanh','Hồng Duy','Đức Huy'];
	var playerGoalieVN  = 'Soái Ca Bùi Tiến Dũng';

	var playerTopUzb	= ['Messi of Uzbekistan','Ronaldo of of Uzbekistan','Torres of Uzbekistan','Neymar of Uzbekistan','Welbeck of Uzbekistan'];
	var playerBotUzb	= ['Vidic of Uzbekistan','Rio Ferdinand of Uzbekistan','Ramos of Uzbekistan','Pepe of Uzbekistan'];

	var commentVNWin 		= ['VÀOOOOOOOOoooooooooooo.... Quang Hải, chính là Quang Hải đã ghi bàn đưa Việt Nam vươn lên dẫn trước !!!! Tuyệt vời','VÀOOOOOOOOoooooooooooo.... Công Phượng, chính là Công Phượng đã ghi bàn đưa Việt Nam vươn lên dẫn trước !!!! Thật tuyệt vời, xin chúc mừng !!','1..2 ...3 ...4 Quang Hải đã đi bóng qua 1 rừng cầu thủ đội bạn..VÀOOOOOOO.... Việt Nam đã vươn lên dẫn trước !!!','Vàoooooooooooooo...1 pha lừa bóng rất kỷ viện, à không rất kỷ thuật của Công Phượng qua 2 hậu vệ và sút tung nóc lưới U23 Uzbekistan'];
	var commentVNBalance 	= ['Xuất sắc !! Đức Chinh đã bay người đánh đầu gỡ hòa cho U23 Việt Nam !!!','Vàoooooooooo.... 1 cú volley trái phá ... Xuân Trường đã gỡ san bằng tỉ số cho U23 Việt Nammmmmm !!! ',' Lại 1 pha solo của Messi.. à không, đó là Quang Hải qua 1 rừng cầu thủ phòng ngự của đội bạn để ghi bàn gở hòa cho tuyển U23 Việt Nam !!!','Xuất sắc !! Văn Toàn đã bay người đánh đầu gỡ hòa cho U23 Việt Nam !!!','Vàoooooooooo.... 1 cú volley trái phá ... Văn Đức đã gỡ san bằng tỉ số cho U23 Việt Nammmmmm !!! '];
	for(var i = 0;i<times;i++){
		var obTime = {
			minute:i,
			event:false,
			player1:null,
			player2:null,
			typeEvent:null,
			comment:null,
			team:null,
		};
		arrTimes.push(obTime);

	}

	var goals = Math.floor(Math.random() * 7);

	var arrMinuteGoal = [];

	for(var i = 0;i<goals;i++){
		var goal =Math.floor(Math.random() * 90);
		if(goal != 0 && goal != 45 && goal != 46 && goal != 90){
			arrMinuteGoal.push(goal);
		}
		

	}

	function sortNumberAsc(a, b){
        return a - b;
    }

	// //---------------------

	$(".icon").hide();
	$(".extra").hide();

    $(".btn").click(function(){
    	moveBottom();
    	addEventDefault();
    	addEvent();
    	$(".btn").hide('slow');
    	$(".icon").show('slow');
    	// var mainEvents = arrTimes.filter(time => time.event == true);
    	var mainEvents =[];
    	arrTimes.forEach(function(element){
    		if(element.event){
    			mainEvents.push(element);
    		}
    	})
     	showMain(mainEvents);
		
        // alert(goals);
    });
    function showMain(mainEvents){
    	// console.log(mainEvents);
    	mainEvents.forEach(function(element) {
		    $('.process').delay(3500).queue(function (next) {
			    
			    console.log(element)
			    if(element.typeEvent == 'goal' && element.team == 'VN'){
			    	if(vn == uzb){
			    		element.comment = commentVNWin[Math.floor(Math.random()*commentVNWin.length)];
			    	}
			    	if(uzb - vn == 1){
			    		element.comment = commentVNBalance[Math.floor(Math.random()*commentVNBalance.length)];
			    	}
			    	if(uzb - vn > 1){
			    		element.comment = 'Vàoooooo...'+element.player1+' đã ghi bàn rút ngắn tỉ số cho U23 Việt Nam !!!';
			    	}
			    	if(vn - uzb >0){
			    		element.comment = 'Vàoooooo...'+element.player1+' đã ghi bàn gia tăng khoảng cách cho U23 Việt Nam !!!';
			    	}

			    	vn++;
			    	$(".spanVN").remove();
	    			$("#vn").append('<span class="spanVN">'+vn+'</span>');

			    }
			    if(element.typeEvent == 'goal' && element.team == 'UZB'){
			    	if(vn == uzb){
			    		element.comment = 'U23 Uzbekistan đã có bàn thắng vươn lên dẫn trước, rất tiếc !!!';
			    	}
			    	if(vn - uzb == 1){
			    		element.comment = 'U23 Uzbekistan đã có bàn thắng gỡ hòa!!!';
			    	}
			    	if(vn - uzb > 1){
			    		element.comment = 'U23 Uzbekistan đã có bàn thắng rút ngắn tỉ số !!!';
			    	}
			    	if(uzb - vn >0){
			    		element.comment = 'U23 Uzbekistan đã có bàn thắng gia tăng khoảng cách !!!';
			    	}
			    	uzb++;
			    	$(".spanUZB").remove('span');
	    			$("#uzb").append('<span class="spanUZB">'+uzb+'</span>');
			    }
			    
			    if(element.minute == 90){
			    	if(vn > uzb){
			    		arrTimes[90].comment 	='Kết thúc rồi !! Thắng rồi !! Trận đấu đã kết thúc với tỉ số '+vn+' - '+uzb+' nghiêng về U23 VN !!! <br /> Đi bão thôi bà con ;))) !!!';
			    		$(".return").append("<a href=''>Bắt đầu lại</a>");
			    		$(".icon").hide();
			    	}
			    	if(vn < uzb){
			    		arrTimes[90].comment 	='Trận đấu đã kết thúc với tỉ số '+uzb+' - '+vn+' nghiêng về U23 Uzbekistan ';
			    		$(".return").append("<a href=''>Bắt đầu lại</a>");
			    		$(".icon").hide();
			    	}
			    	if(vn == uzb){
			    		arrTimes[90].comment 	="Trận đấu đã kết thúc với tỉ số hòa, cả 2 đội sẽ có 30' hiệp phụ";
			    		// $(".extra").show('slow');
			    		extra();
			    	}
			    	// $(".icon").hide();
			    }
			    $(this).append("<div class='process-item'><span class='strong'>"+element.minute+"'    </span><span>"+element.comment+"</span></div>");
			    moveBottom();
			    next();
			});
		});
    }
    function addEventDefault(){
    	arrTimes[0].event = true;
    	arrTimes[0].typeEvent = 'default';
    	arrTimes[0].comment = 'Trọng tài Moccuradop đã thổi còi bắt đầu trận chung kết U23 Chân Á giữa ƯCV vô địch U23 Việt Nam và U23 Uzbekistan !!';

    	arrTimes[45].event 		= true;
    	arrTimes[45].typeEvent 	= 'default';
    	arrTimes[45].comment 	= "Hiệp 1 của trận đấu đã kết thúc, cả 2 đội sẽ có hơn 10' nghỉ ngơi trước khi bước quá hiệp 2 !! " ;

    	arrTimes[46].event 		= true;
    	arrTimes[46].typeEvent 	= 'default';
    	arrTimes[46].comment 	= "Hiệp 2 đã bắt đầu !!!!" ;
    }
    function addEvent(){
    	// alert('add');
    	console.log(arrMinuteGoal.sort(sortNumberAsc));
    	arrMinuteGoal.sort(sortNumberAsc).forEach(function(value){
	    	console.log(arrTimes[value]);
	    	arrTimes[value].event = true;
	    	arrTimes[value].typeEvent = 'goal';
	    	rand = Boolean(Math.round(Math.random()));
	    	if(rand){
	    		arrTimes[value].team = 'VN';
	    		arrTimes[value].player1 = playerTopVN[Math.floor(Math.random()*playerTopVN.length)];
	    		arrTimes[value].comment = playerTopVN[Math.floor(Math.random()*playerTopVN.length)]+' đã ghi bàn !!';
	    		

	    	}else{
	    		
	    		arrTimes[value].team = 'UZB';
	    		arrTimes[value].comment = playerTopUzb[Math.floor(Math.random()*playerTopUzb.length)]+' đã ghi bàn !!';
	    		
	    	}
	    });
	    arrTimes[90].event 		= true;
	    arrTimes[90].comment 	='Trận đấu kết thúc !';
	    // alert('end add');
    }
//-------------------------------------------------------
    function extra(){
    	var goalsExatra = Math.floor(Math.random() * 3);
    	var timesExatra = 31;
    	var arrTimesExtra = [];
    	for(var i = 0;i<timesExatra;i++){
			var obTime = {
				minute:i,
				event:false,
				player1:null,
				player2:null,
				typeEvent:null,
				comment:null,
				team:null,
			};
			arrTimesExtra.push(obTime);

		}
		var arrMinuteGoalExtra = [];

		for(var i = 0;i<goalsExatra;i++){
			var goal =Math.floor(Math.random() * 30);
			if(goal != 0 && goal != 15 && goal != 16 && goal != 30){
				arrMinuteGoalExtra.push(goal);
			}
		}
		var mainEventsExtra =[];
    	
     	// showMain(mainEventsExtra);

     	arrTimesExtra[0].event = true;
    	arrTimesExtra[0].typeEvent = 'default';
    	arrTimesExtra[0].comment = 'Hiệp phụ thứ nhất bắt đầu';

    	arrTimesExtra[15].event 		= true;
    	arrTimesExtra[15].typeEvent 	= 'default';
    	arrTimesExtra[15].comment 	= "Hiệp phụ thứ nhất của trận đấu đã kết thúc " ;

    	arrTimesExtra[16].event 		= true;
    	arrTimesExtra[16].typeEvent 	= 'default';
    	arrTimesExtra[16].comment 	= "Hiệp phụ thứ hai đã bắt đầu !!!!" ;
    	arrTimesExtra[30].event 	= true;
	    arrTimesExtra[30].comment 	='Trận đấu kết thúc !';
//--------------------

		
		// console.log(arrMinuteGoalExtra);
		arrMinuteGoalExtra.sort(sortNumberAsc).forEach(function(value){
	    	// console.log(arrTimes[value]);
	    	arrTimesExtra[value].event = true;
	    	arrTimesExtra[value].typeEvent = 'goal';
	    	rand = Boolean(Math.round(Math.random()));
	    	if(rand){
	    		arrTimesExtra[value].team = 'VN';
	    		arrTimesExtra[value].player1 = playerTopVN[Math.floor(Math.random()*playerTopVN.length)];
	    		arrTimesExtra[value].comment = playerTopVN[Math.floor(Math.random()*playerTopVN.length)]+' đã ghi bàn !!';
	    		

	    	}else{
	    		
	    		arrTimesExtra[value].team = 'UZB';
	    		arrTimesExtra[value].comment = playerTopUzb[Math.floor(Math.random()*playerTopUzb.length)]+' đã ghi bàn !!';
	    		
	    	}
	    });
	    arrTimesExtra.forEach(function(element){
    		if(element.event){
    			mainEventsExtra.push(element);
    		}
    	})
	    // console.log(arrTimesExtra);
     	mainEventsExtra.forEach(function(element) {
		    $('.process').delay(3500).queue(function (next) {
			    
			    // console.log(element)
			    if(element.typeEvent == 'goal' && element.team == 'VN'){
			    	if(vn == uzb){
			    		element.comment = commentVNWin[Math.floor(Math.random()*commentVNWin.length)];
			    	}
			    	if(uzb - vn == 1){
			    		element.comment = commentVNBalance[Math.floor(Math.random()*commentVNBalance.length)];
			    	}
			    	if(uzb - vn > 1){
			    		element.comment = 'Vàoooooo...'+element.player1+' đã ghi bàn rút ngắn tỉ số cho U23 Việt Nam !!!';
			    	}
			    	if(vn - uzb >0){
			    		element.comment = 'Vàoooooo...'+element.player1+' đã ghi bàn gia tăng khoảng cách cho U23 Việt Nam !!!';
			    	}

			    	vn++;
			    	$(".spanVN").remove();
	    			$("#vn").append('<span class="spanVN">'+vn+'</span>');

			    }
			    if(element.typeEvent == 'goal' && element.team == 'UZB'){
			    	if(vn == uzb){
			    		element.comment = 'U23 Uzbekistan đã có bàn thắng vươn lên dẫn trước, rất tiếc !!!';
			    	}
			    	if(vn - uzb == 1){
			    		element.comment = 'U23 Uzbekistan đã có bàn thắng gỡ hòa!!!';
			    	}
			    	if(vn - uzb > 1){
			    		element.comment = 'U23 Uzbekistan đã có bàn thắng rút ngắn tỉ số !!!';
			    	}
			    	if(uzb - vn >0){
			    		element.comment = 'U23 Uzbekistan đã có bàn thắng gia tăng khoảng cách !!!';
			    	}
			    	uzb++;
			    	$(".spanUZB").remove('span');
	    			$("#uzb").append('<span class="spanUZB">'+uzb+'</span>');
			    }
			    
			    if(element.minute == 30){
			    	if(vn > uzb){
			    		arrTimesExtra[30].comment 	='Kết thúc rồi !! Thắng rồi !! Trận đấu đã kết thúc với tỉ số '+vn+' - '+uzb+' nghiêng về U23 VN !!! <br /> Đi bão thôi bà con ;))) !!!';
			    		$(".return").append("<a href=''>Bắt đầu lại</a>");
			    		$(".icon").hide();
			    	}
			    	if(vn < uzb){
			    		arrTimesExtra[30].comment 	='Trận đấu đã kết thúc với tỉ số '+uzb+' - '+vn+' nghiêng về U23 Uzbekistan ';
			    		$(".return").append("<a href=''>Bắt đầu lại</a>");
			    		$(".icon").hide();
			    	}
			    	if(vn == uzb){
			    		arrTimesExtra[30].comment 	="Trận đấu đã kết thúc với tỉ số hòa, cả 2 đội sẽ bước loạt đá penalty cân não !!!";
			    		// $(".extra").show('slow');
			    		penalty();
			    	}
			    	// $(".icon").hide();
			    }
			    $(this).append("<div class='process-item'><span class='strong'>"+element.minute+"'    </span><span>"+element.comment+"</span></div>");
			    moveBottom();
			    next();
			});
		});
    }

    function penalty(){
    	var vnPen 	= 0;
    	var uzbPen 	= 0;
    	var timesPen= 11;
    	var arrPen 	= [];
    	for(var i = 0;i<timesPen;i++){
    		if(i % 2 == 0){
    			if(i == 0){
    				var obTime = {
						times:i,
						team:'VN',
						goal:false,
						comment:'U23 Việt Nam :  Văn Thanh...Không vào...rất tiếc !!',
					};
    			}
    			if(i == 2){
    				var obTime = {
						times:i,
						team:'VN',
						goal:false,
						comment:'U23 Việt Nam :  Quang Hải...Không vào...rất đáng tiếc, tình hình đang trở nên khó khăn hơn bao giờ hết !!',
					};
    			}
    			if(i == 4){
    				var obTime = {
						times:i,
						team:'VN',
						goal:true,
						comment:'U23 Việt Nam :  Xuân Trường...Rất chính xác .. quả penalty thành công đầu tiên của U23 Việt Nam trong trận đấu này !!',
					};
    			}
    			if(i == 6){
    				var obTime = {
						times:i,
						team:'VN',
						goal:true,
						comment:'U23 Việt Nam :  Văn Đức...Rất chính xác .. !!',
					};
    			}
    			if(i == 8){
    				var obTime = {
						times:i,
						team:'VN',
						goal:true,
						comment:'U23 Việt Nam :  Đức Chinh...Vàoooooo !!',
					};
    			}
    			
    		}else{
    			if(i == 1){
    				var obTime = {
						times:i,
						team:'UZB',
						goal:true,
						comment:'U23 Uzbekistan :  Rất chính xác !!',
					};
    			}
    			if(i == 3){
    				var obTime = {
						times:i,
						team:'UZB',
						goal:true,
						comment:'U23 Uzbekistan :  Rất chính xác !!',
					};
    			}
    			if(i == 5){
    				var obTime = {
						times:i,
						team:'UZB',
						goal:false,
						comment:'U23 Uzbekistan :  Không vào !!',
					};
    			}
    			if(i == 7){
    				var obTime = {
						times:i,
						team:'UZB',
						goal:false,
						comment:'U23 Uzbekistan :  Không vào !!',
					};
    			}
    			if(i == 9){
    				var obTime = {
						times:i,
						team:'UZB',
						goal:false,
						comment:'U23 Uzbekistan :  Không vàoooooooooo !!',
					};
    			}
    		}
    		if(i == 10){
    			var obTime = {
					times:i,
					team:'UZB',
					goal:false,
					comment:'Không vàoooooooooo !!',
				};
    		}
			
			arrPen.push(obTime);

		}
		arrPen[10].times 	= 10;
		arrPen[10].goal 	= false;
	    arrPen[10].comment 	='Trận đấu kết thúc !';
		// console.log(arrPen);
    	arrPen.forEach(function(element) {
		    $('.process').delay(3500).queue(function (next) {
		    	if(element.times % 2 == 0 && element.goal){
		    		vnPen++;
		    		// element.comment = "Vào"

		    	}

		    	if(element.times % 2 != 0 && element.goal){
		    		uzbPen++;
		    		// element.comment = "Vào"
		    	}
		    	if(element.times == 10){
		    		if(vnPen > uzbPen){
			    		arrPen[10].comment 	='Kết thúc rồi !! Thắng rồi !! Loạt penalty đã kết thúc với tỉ số '+vnPen+' - '+uzbPen+' nghiêng về U23 VN !!! <br /> Đi bão thôi bà con ;))) !!!';
			    		$(".return").append("<a href=''>Bắt đầu lại</a>");
			    		$(".icon").hide();
			    	}
			    	if(vnPen < uzbPen){
			    		arrPen[10].comment 	='Loạt penalty đã kết thúc với tỉ số '+uzbPen+' - '+vnPen+' nghiêng về U23 Uzbekistan ';
			    		$(".return").append("<a href=''>Bắt đầu lại</a>");
			    		$(".icon").hide();
			    	}
			    	if(vnPen == uzbPen){
			    		arrPen[10].comment 	="Lại hòa";
			    		// $(".extra").show('slow');
			    		$(".icon").hide();
			    		// penalty();
			    	}
		    	}
		    	 $(this).append("<div class='process-item'><span>"+element.comment+"</span></div>");
		    	 moveBottom();
		    	next();
		    });
		});

    }


    function moveBottom(){
    	$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
    }
});