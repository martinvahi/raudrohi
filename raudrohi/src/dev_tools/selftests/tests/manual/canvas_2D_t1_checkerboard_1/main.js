window.the_main_function = function () {
    var s_widget_html_id = 'something_nice';

    var ob_widget = new raudrohi.widgets.g1.button_t1(s_widget_html_id,
        s_button_label);

    var s_widget_wrapper_div_html_id = s_widget_html_id + "_div";
    raudrohi.base.set_innerHTML('eldorado_div',
        '<div id="' + s_widget_wrapper_div_html_id + '"></div>');
    ob_widget.startup_sequence_init();
    ob_widget.unhide();
} // window.the_main_function


window.onload = function () {
    var b_make_no_assumptions_about_setup_availability = true;

    raudrohi.run(b_make_no_assumptions_about_setup_availability,
        window.the_main_function);
} // window.onload

window.onbeforeunload = function () {
} // window.onbeforeunload

