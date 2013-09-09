//=========================================================================
// Author: martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// This file is in public domain.
//=========================================================================

window.the_main_function_of_this_demo = function () {
    var s_widget_html_id = "a_calendar_demo";

    var s_widget_container_div_html_id = s_widget_html_id + "_div";
    window.raudrohi.base.set_innerHTML("eldorado_div",
        '<div id="' + s_widget_container_div_html_id + '"></div>');

    var ob_widget = new window.raudrohi.widgets.g1.calendar_t2(s_widget_html_id);
    ob_widget.unhide();

    //----------------------------------------------------
    // Another copy, in Estonian:
    var ob_widget_et = new window.raudrohi.widgets.g1.calendar_t2(
        "estonian_version", "et");
    ob_widget_et.unhide();
} // window.the_main_function_of_this_demo

window.onload = function () {
    var b_make_no_assumptions_about_setup_availability = true;
    window.raudrohi.run(b_make_no_assumptions_about_setup_availability,
        window.the_main_function_of_this_demo);
} // window.onload

window.onbeforeunload = function () {
}
