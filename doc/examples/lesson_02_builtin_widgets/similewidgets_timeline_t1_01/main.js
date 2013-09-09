//=========================================================================
// Author: martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// This file is in public domain.
//=========================================================================

var s_btn_label_hide = "Hide";
var s_btn_label_unhide = "Unhide";

window.the_main_function_of_this_demo = function () {
    window.raudrohi.adapter.YUI_create_console();
    //----------------------
    var s_timeline_widget_html_id = "just_another_timeline";
    var s_button_widget_html_id = "a_button_for_the_demo";
    //----------------------
    var ob_wg_timeline = new window.raudrohi.widgets.g1.similewidgets_timeline_t1(
        s_timeline_widget_html_id);
    ob_wg_timeline.unhide();
    //----------------------
    var ob_wg_btn = new window.raudrohi.widgets.g1.button_t1(
        s_button_widget_html_id, s_btn_label_hide)
    ob_wg_btn.evh_button_pushed_impl = function (e) {
        if (ob_wg_timeline.is_hidden() === true) {
            ob_wg_timeline.unhide();
            ob_wg_btn.set_label(s_btn_label_hide)
        } else {
            ob_wg_timeline.hide(true);
            ob_wg_btn.set_label(s_btn_label_unhide)
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
