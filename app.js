// angular.module('myApp', []).controller('appController', function($scope) {
// 	    $scope.name = "uchiha";
// 	    $scope.showBtn = true;
// 	    $scope.events = ['6'];
// 	    $scope.begin = function(){
// 	    	$scope.showBtn = false;
// 	    	$scope.slideEvents();
// 	    	// $scope.events.push('1');
// 	    }
	    
// 	    $scope.slideEvents = function(){
// 			var arr = ['1','2','3','4','5'];
// 			arr.forEach(function(element) {
// 				console.log(element)
			    
// 			    $scope.push(element);
// 			    $scope.sleep(1000);
// 			});
// 	    }
// 	    $scope.push = function(element){
// 	    	$scope.events.push(element);
// 	    }
// 	    $scope.sleep = function (milliseconds) {
// 			  var start = new Date().getTime();
// 			  for (var i = 0; i < 1e7; i++) {
// 			    if ((new Date().getTime() - start) > milliseconds){
// 			      break;
// 			    }
// 			  }
// 			}
// 	});





$(document).ready(function(){
	alert(1);
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

		arrMinuteGoal.push(Math.floor(Math.random() * 90));

	}

	function sortNumberAsc(a, b){
        return a - b;
    }

    



	//---------------------

	$(".icon").hide();

    $(".btn").click(function(){
    	console.log(arrTimes);
    	// console.log(arrMinuteGoal.sort(sortNumberAsc));
    	addEvent();
    	$(".btn").hide('slow');
    	$(".icon").show('slow');
    	var mainEvents = arrTimes.filter(time => time.event == true);
        var test = showMain(mainEvents);
		// $.when( showMain() ).done(function() {
		//     $(".icon").hide('slow');
		//   });
		// mainEnd();
		
        
    });
    function showMain(mainEvents){
    	mainEvents.forEach(function(element) {
		    $('.process').delay(2000).queue(function (next) {
			    $(this).append('<div>'+element.comment+'</div>');
			    console.log(element)
			    if(element.typeEvent == 'goal' && element.team == 'VN'){
			    	vn++;
			    	$(".spanVN").remove();
	    			$("#vn").append('<span class="spanVN">'+vn+'</span>');
			    }
			    if(element.typeEvent == 'goal' && element.team == 'UZB'){
			    	uzb++;
			    	$(".spanUZB").remove('span');
	    			$("#uzb").append('<span class="spanUZB">'+uzb+'</span>');
			    }
			    if(element.minute == 90){
			    	$(".icon").hide('slow');
			    }
			    next();
			});
			return true;
		});
    }

    function addEvent(){
    	arrMinuteGoal.sort(sortNumberAsc).forEach(function(value){
	    	console.log(arrTimes[value]);
	    	arrTimes[value].event = true;
	    	arrTimes[value].typeEvent = 'goal';
	    	rand = Boolean(Math.round(Math.random()));
	    	if(rand){
	    		arrTimes[value].team = 'VN';
	    		// arrTimes[value].player1 = playerTopVN[Math.floor(Math.random()*playerTopVN.length)];
	    		arrTimes[value].comment = playerTopVN[Math.floor(Math.random()*playerTopVN.length)]+' đã ghi bàn !!';
	    		

	    	}else{
	    		
	    		arrTimes[value].team = 'UZB';
	    		arrTimes[value].comment = playerTopUzb[Math.floor(Math.random()*playerTopUzb.length)]+' đã ghi bàn !!';
	    		
	    	}
	    });
	    arrTimes[90].event 		=true;
	    arrTimes[90].comment 	='End';
    }
});