//=========================================================================
// Author: martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// This file is in public domain.
//=========================================================================

function render_containers_html(s_textarea_widget_html_id,s_button_widget_html_id ){
	try{
		var s_textarea_widget_container_div_html_id = s_textarea_widget_html_id +
		"_div";
		var s_button_widget_container_div_html_id = s_button_widget_html_id +
		"_div";
		var s_html_textarea_div='<div id="' +
		s_textarea_widget_container_div_html_id + '"></div>';
		var s_html_button_div='<div id="' +
		s_button_widget_container_div_html_id + '"></div>';

		var s_hmtl="<table><tr>\n"+
		'<td>'+s_html_textarea_div+"</td>\n"+
		'<td style="visibility:hidden;">xxxxx</td>'+
		'<td>'+s_html_button_div+"</td>\n"+
		"</tr></table>\n";
		window.raudrohi.base.set_innerHTML("eldorado_div",s_hmtl);
	} catch (err){
		window.raudrohi.tmg('3e481454-e78e-429b-be5f-a35231606dd7',err);
	} // catch
} // render_containers_html

var s_btn_label_2_readonly="2 readonly";
var s_btn_label_2_editable="2 editable";
window.the_main_function_of_this_demo = function () {
	var s_textarea_widget_html_id = "txarea";
	var s_button_widget_html_id = "btn";
	render_containers_html(s_textarea_widget_html_id ,
		s_button_widget_html_id );
	//----------------------
	var i_number_of_columns=40;
	var i_number_of_rows=30;
	var s_type="text"; // or "password"
	var ob_wg_txarea = new window.raudrohi.widgets.g1.textarea_t2(
		s_textarea_widget_html_id,
		i_number_of_columns, i_number_of_rows, s_type);
	var i_wordwrap_in_characters=7;
	ob_wg_txarea.set_wordwrap(i_wordwrap_in_characters);
	ob_wg_txarea.set_content('Wordwrap is set to be '+
		i_wordwrap_in_characters + ' characters.');
	ob_wg_txarea.unhide();
	//----------------------
	var ob_wg_btn=new window.raudrohi.widgets.g1.button_t1(
		s_button_widget_html_id, s_btn_label_2_readonly)
	ob_wg_btn.evh_button_pushed_impl=function(e){
		if (ob_wg_txarea.is_readonly()===true){
			ob_wg_txarea.set_readonly(false);
			ob_wg_btn.set_label(s_btn_label_2_readonly)
		} else {
			ob_wg_txarea.set_readonly(true);
			ob_wg_btn.set_label(s_btn_label_2_editable)
		} // if
	} // ob_wg_btn.evh_button_pushed_impl
	ob_wg_btn.unhide();
//----------------------
} // window.the_main_function_of_this_demo

window.onload = function () {
	var b_make_no_assumptions_about_setup_availability = true;
	window.raudrohi.run(b_make_no_assumptions_about_setup_availability,
		window.the_main_function_of_this_demo);
} // window.onload

window.onbeforeunload = function () {
	} // window.onbeforeunload
