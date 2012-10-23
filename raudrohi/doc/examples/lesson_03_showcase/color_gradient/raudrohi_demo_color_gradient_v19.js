//-------------------------------------------------------------------------
// Author: martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// This file is in public domain.
//-------------------------------------------------------------------------

function s_rainbow_char(s_text,s_html_color){
	if(raudrohi.settings.debug_JavaScript===true){
		raudrohi.base.assert_isString(s_text,'s_text',
			'ce54a53c-1092-4858-8bd3-e2224090abd7');

		// It verifies that the s_html_color is of type String
		// and that the string is in the format of '#xxxxxx',
		// where the x is inSet {0..f}.
		raudrohi.lang.assert_is_an_HTML_color(s_html_color,
			's_html_color','2b743e12-aed0-4c17-8b53-e2224090abd7');
	} // if
	var s_out='<b style="color:'+s_html_color+';">'+s_text+'</b>';
	return s_out;
} // s_rainbow_char

function s_rainbow_block(s_html_color_start,s_html_color_end,s_text){
	var i_max_number_of_colors_in_the_rainbow=200;
	var ar_colors=raudrohi.vfx.ar_interpolate_html_colors(
		s_html_color_start, s_html_color_end,
		i_max_number_of_colors_in_the_rainbow);
	var s_out='';
	var i_len=ar_colors.length;
	var i=0;
	var s_color;
	var s_br='<br/>';
	for(i=0;i<i_len;i++){
		s_color=ar_colors[i];
		s_out=s_out+s_rainbow_char(s_text,s_color);
		if(((i+1)%20)==0){
			s_out=s_out+s_br;
		} // if
	} // for
	return s_out;
} // s_rainbow_block

window.the_main_function_of_this_demo= function() {
	var s_html_color_start=null;
	var s_html_color_end=null;
	var s_text='X';
	var s_brbr='<br/></br/>';
	var s_html='';
	//------
	s_html_color_start='#ff0000';
	s_html_color_end='#0000ff';
	s_html=s_html+s_rainbow_block(
		s_html_color_start,s_html_color_end,s_text)+s_brbr;
	//------
	s_html_color_start='#0fff04';
	s_html_color_end='#ff00f0';
	s_html=s_html+s_rainbow_block(
		s_html_color_start,s_html_color_end,s_text)+s_brbr;
	//------
	s_html_color_start='#f2ff00';
	s_html_color_end='#002fff';
	s_html=s_html+s_rainbow_block(
		s_html_color_start,s_html_color_end,s_text)+s_brbr;
	//------
	s_html_color_start='#005100';
	s_html_color_end='#0051ff';
	s_html=s_html+s_rainbow_block(
		s_html_color_start,s_html_color_end,s_text)+s_brbr;
	//------
	s_html_color_start='#000000';
	s_html_color_end='#ffffff';
	s_html=s_html+s_rainbow_block(
		s_html_color_start,s_html_color_end,s_text)+s_brbr;
	//------
	s_html_color_start='#000000';
	s_html_color_end='#00afaf';
	s_html=s_html+s_rainbow_block(
		s_html_color_start,s_html_color_end,s_text)+s_brbr;
	//------
	raudrohi.base.set_innerHTML('eldorado_div',s_html);
} // window.the_main_function_of_this_demo


window.onload = function() {
	var b_make_no_assumptions_about_setup_availability = true;
	raudrohi.run(b_make_no_assumptions_about_setup_availability,
		window.the_main_function_of_this_demo);
} // window.onload
window.onbeforeunload=function(){}
