//=========================================================================
// Author: martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// This file is in public domain.
//=========================================================================

window.the_main_function_of_this_demo = function () {
    try {
        raudrohi.adapter.YUI_create_console();
        raudrohi.adapter.log('Hello Console World!');

        // Due to some historical mishaps some widgets
        // require to be part of some other, "parent", widget.
        var s_container_widget_html_id = 'something_nice';
        raudrohi.base.set_innerHTML('eldorado_div',
            '<div id="' + s_container_widget_html_id + '_div"></div>');
        var ob_widget_container = new raudrohi.widgets.g1.containergrid_1x1_t1(
            s_container_widget_html_id);

        var s_calendar_html_id = "a_calendar_demo";
        var ob_widget_calendar = new raudrohi.widgets.g1.calendar_t1(
            s_calendar_html_id, ob_widget_container);
        ob_widget_container.set_content(ob_widget_calendar);

        ob_widget_container.unhide();
        //ob_widget_calendar.unhide();
    } catch (err) {
        // For debugging with the mmmv_devel_tools.
        raudrohi.tmg('8a25b781-d49b-4585-b35a-2203a0505dd7', err);
    } // catch
} // window.the_main_function_of_this_demo

window.onload = function () {
    var b_make_no_assumptions_about_setup_availability = true;
    raudrohi.run(b_make_no_assumptions_about_setup_availability,
        window.the_main_function_of_this_demo);
} // window.onload
window.onbeforeunload = function () {
}
