//=========================================================================
// Author: martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// This file is in public domain.
//=========================================================================

window.password_acceptance_function_Elephant=function(s_line1,s_line2){
	try{
		var ar_out=[];
		var b_password_rejected=false;
		var s_rejection_message='';
		var i_min_lenght=3;
		if((s_line1.length<i_min_lenght)||(s_line2.length<i_min_lenght)){
			b_password_rejected=true;
			s_rejection_message='The password length has to be at least '+
			i_min_lenght;
		} // if
		ar_out.push(b_password_rejected, s_rejection_message);
		return ar_out;
	} catch (err){
		raudrohi.tmg('438cc02a-f959-42de-9178-4190e0305dd7',err);
	} // catch
} // window.password_acceptance_function_Elephant

window.password_acceptance_function_Giraffe=function(s_line1,s_line2){
	try{
		var ar_out=[];
		var b_password_rejected=false;
		var s_rejection_message='';
		if(s_line1.toLowerCase()==='abba'){
			b_password_rejected=true;
			s_rejection_message='The password is not allowed to '+
		'consist of the word "ABBA".';
		} // if
		ar_out.push(b_password_rejected, s_rejection_message);
		return ar_out;
	} catch (err){
		raudrohi.tmg('9ded334c-a598-4d55-8178-4190e0305dd7',err);
	} // catch
} // window.password_acceptance_function_Giraffe

window.hook_for_key_13_of_the_password_line_2=function(e){
	try{
		var x_content=window.ob_widget_password_editor_t1.get_content();
		if(x_content.b_password_not_available===false){
			raudrohi.base.set_innerHTML('demo_messageboard',
				'The password is: '+x_content.s_password);
		} else {
			raudrohi.base.set_innerHTML('demo_messageboard',
				'The password is not available.');
		} //if
	} catch (err){
		raudrohi.tmg('6bb81a59-9528-46f3-8368-4190e0305dd7',err);
	} // catch
} // hook_for_key_13_of_the_password_line_2

window.the_main_function_of_this_demo= function() {
	var s_widget_html_id='something_nice';
	var s_parent_stub_widget_html_id='for_the_parent_stub';
	raudrohi.base.set_innerHTML('eldorado_div',
		'<div id="'+s_widget_html_id+'_div"></div>'+
		'<div id="'+s_parent_stub_widget_html_id+'_div"></div>'+
		'<div id="demo_messageboard"></div>'+
		'');

	var ob_parent_widget_stub= new raudrohi.widgets.g1.button_t1(
		s_parent_stub_widget_html_id,'this_widget_is_a_stub_parent');
	window.ob_widget_password_editor_t1= new raudrohi.widgets.g1.password_editor_t1(
		s_widget_html_id,ob_parent_widget_stub);

	var ob_widget_password_editor_t1=window.ob_widget_password_editor_t1;
	ob_widget_password_editor_t1.set_mode('overwrite');
	ob_widget_password_editor_t1.register_acceptance_verification_function(
		window.password_acceptance_function_Elephant);
	ob_widget_password_editor_t1.register_acceptance_verification_function(
		window.password_acceptance_function_Giraffe);
	ob_widget_password_editor_t1.set_password_rejection_message_color(
		'#aa00ff');
	ob_widget_password_editor_t1.wg_hooks_.evh_widget_textarea_t1_line_2_key_13=window.hook_for_key_13_of_the_password_line_2;

	// The next non-comment-line is a total demo-quirk,
	// but You'll figure it's value out by playing with the
	// demo in the browser. :-)
	ob_parent_widget_stub.evh_button_pushed_impl=window.hook_for_key_13_of_the_password_line_2;

	ob_parent_widget_stub.unhide();
	ob_widget_password_editor_t1.unhide();
} // window.the_main_function_of_this_demo


window.onload = function() {
	var b_make_no_assumptions_about_setup_availability = true;
	raudrohi.run(b_make_no_assumptions_about_setup_availability,
		window.the_main_function_of_this_demo);
} // window.onload
window.onbeforeunload=function(){}
