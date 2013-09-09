//=========================================================================
// Author: martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// This file is in public domain.
//=========================================================================

window.the_main_function_of_this_demo = function () {
    try {
        // The YUI console is available only, if
        // the Ruby constant RAUDROHI_DEBUG_JAVASCRIPT==true
        // in the RJSL building Rakefile.
        window.raudrohi.adapter.YUI_create_console();
        window.raudrohi.adapter.log('Hello Console World!');

        // The usefulness of the GUIDs is explained at
        // https://github.com/martinvahi/mmmv_devel_tools/blob/master/mmmv_devel_tools/src/mmmv_devel_tools/GUID_trace/COMMENTS.txt

        // The next line throws and exception, intentionally.
        window.raudrohi.tmg('b556cec8-1c36-4b41-a1b2-9200c0505dd7',
            'Some reasonable and smart, or just funny, text');
    } catch (err) {
        // For debugging with the mmmv_devel_tools.
        window.raudrohi.tmg('40e9c1d2-05c9-4a9c-8b12-9200c0505dd7', err);
    } // catch
} // window.the_main_function_of_this_demo

window.onload = function () {
    var b_make_no_assumptions_about_setup_availability = true;
    window.raudrohi.run(b_make_no_assumptions_about_setup_availability,
        window.the_main_function_of_this_demo);
} // window.onload

window.onbeforeunload = function () {
}
