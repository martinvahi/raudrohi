//=========================================================================
// Author: martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// This file is in public domain.
//=========================================================================

window.the_main_function_of_this_demo = function () {
	var s_widget_html_id = "a_demo";
	var s_widget_container_div_html_id = s_widget_html_id + "_div";
	window.raudrohi.base.set_innerHTML("eldorado_div",
		'<div id="' + s_widget_container_div_html_id + '"></div>');

	var i_number_of_columns=40;
	var i_number_of_rows=30;
	var s_type="text"; // or "password"
	var ob_widget = new window.raudrohi.widgets.g1.textarea_t2(
		s_widget_html_id, i_number_of_columns, i_number_of_rows, s_type);
	ob_widget.unhide();
} // window.the_main_function_of_this_demo

window.onload = function () {
	var b_make_no_assumptions_about_setup_availability = true;
	window.raudrohi.run(b_make_no_assumptions_about_setup_availability,
		window.the_main_function_of_this_demo);
} // window.onload

window.onbeforeunload = function () {
	} // window.onbeforeunload
