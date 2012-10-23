//-------------------------------------------------------------------------
// Author: martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// This file is in public domain.
//-------------------------------------------------------------------------
window.b_go_on=true;
window.func_stop_the_loop=function(){
	clearInterval(window.interval_id);
	clearInterval(window.countdown_interval_id);
	window.func_display_results();
} // func_stop_the_loop

window.i_milliseconds=10000;
window.i_millions=0;
window.i_count=0;

// A term inspired by electronics, not politics.
window.func_load_resistance=function(){
	var i_count=window.i_count+1;
	var i_millions=window.i_millions;
	if(1000000==i_count){
		i_count=0;
		i_millions=window.i_millions+1;
	} // if
	window.i_millions=i_millions;
	window.i_count=i_count;
} // func_load_resistance

window.func_display_results=function(){
	raudrohi.base.set_innerHTML('countdown_div','');
	raudrohi.base.set_innerHTML('eldorado_div',
		'<br/>The number of iterations that were executed during '+
		(window.i_milliseconds/1000)+'s is:<br/>'+
		window.i_millions+'*10^6 + '+window.i_count+'<br/>');
} // func_display_results

window.i_seconds_passed=0;
window.func_countdown=function(){
	window.i_seconds_passed=window.i_seconds_passed+1;
	var i_seconds_left=(window.i_milliseconds/1000)-window.i_seconds_passed;
	raudrohi.base.set_innerHTML('countdown_div',
		'<br/>The number seconds left: '+i_seconds_left);
} // func_countdown


window.the_main_function_for_the_example_1 = function() {
	raudrohi.base.set_innerHTML('eldorado_div',
		'<br/>Executing a '+(window.i_milliseconds/1000)+'s the test ...');
	setTimeout('window.func_stop_the_loop();',window.i_milliseconds);
	// The setInterval based trickery here is due to 
	// the fact that JavaScript does not have built-in threads
	// and the setTimeout events can not intercept the loop.
	window.countdown_interval_id=setInterval('window.func_countdown();',1000);
	window.interval_id=setInterval('window.func_load_resistance();',0);
} // window.the_main_function_for_the_example_1

window.onload = function() {
	var b_make_no_assumptions_about_setup_availability = true;
	raudrohi.run(b_make_no_assumptions_about_setup_availability,
		window.the_main_function_for_the_example_1);
} // window.onload

// Caching prevention and the back button.
window.onbeforeunload=function(){
	// Some stuff.
	} // window.onbeforeunload
