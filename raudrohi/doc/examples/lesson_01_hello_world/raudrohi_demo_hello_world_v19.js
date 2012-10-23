//=========================================================================
// Author: martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// This file is in public domain.
//=========================================================================

window.the_main_function_for_the_example_1 = function() {
	var s_our_widget_html_id='something_nice';
	var s_button_label = "I'm clickable";
	var btn = new raudrohi.widgets.g1.button_t1(s_our_widget_html_id,
		s_button_label);

	btn.evh_button_pushed_impl=function(){
		// Due to hidden/visible state accountancy the 
		// hiding of widgets must NOT be done by overwriting
		// the content of the DIV tag that contains them.
		// That's why one uses the hide(true_if_update_DOM) method.
		//
		// The parameter true_if_update_DOM exists for efficiency and
		// comes handy, when dealing with compound widgets, i.e.
		// widgets that contain other widgets. The idea is that for
		// speed one wants to minimize the amount of DOM redactions,
		// by deleting a whole branch of the DOM (the compound widget)
		// at once. This hello world example is too primitive to
		// demonstrate it, but that's the background of the
		// true_if_update_DOM parameter.
		btn.hide(true);

		raudrohi.base.set_innerHTML('greeting_div','<b>Hello World!</b>');
	} // evh_button_pushed_impl

	// By default all Raudrohi widgets are in a hidden state.
	// Prior to showing/unhiding them, there must be a
	// DIV element in the DOM. The widgets overwrite the innerHTML/"content"
	// of the DIV element. An id of the div element has a format of:
	var s_widget_wrapper_div_html_id=s_our_widget_html_id+"_div";

	// One creates the DIV in the DOM:
	raudrohi.base.set_innerHTML('eldorado_div',
		'<div id="'+s_widget_wrapper_div_html_id+'"></div>');

	// Most, but not all, of the RJSL widgets
	// are in a shut-down state right after instantiation.
	// If a widget is in the shut-down state, it won't accept
	// network traffic and it won't unhide itself.
	//
	// The button widget is in a running state right
	// after instantiation, but just to emphasize the
	// shut-down/running property of the RJSL widgets,
	// one still places the call to the startup_sequence_init() here.
	//
	// The standard methods for Raudrohi widgets are declared within
	// raudrohi.widgets.g1.pileofmethods_t1
	btn.startup_sequence_init();
	btn.unhide();
} // window.the_main_function_for_the_example_1


window.onload = function() {
	// If make_no_assumptions_about_setup_availability==true, the library
	// gets initiated with default setup values. Otherwise it is assumed
	// that the server provides setup info.
	var b_make_no_assumptions_about_setup_availability = true;

	// The reason, why the Raudrohi JavaScript Library (hereafter: RJSL)
	// code main function gets called from this, onload, method,
	// is that this way it's guaranteed that all of the necessary
	// JavaScript files have been downloaded prior to the start of
	// the program execution.
	//
	// There does exist some RJSL code that resides in the global
	// scope and gets called prior to this method, but for that code
	// the download-first-execute-after-download issue has been
	// solved by placing all of the RJSL into a single file and
	// the RJSL functions that are called from the global scope
	// must not depend on any code that resides
	// outside of the RJSL, because it might happen that the
	// dependencies might not have been downloaded by the time the
	// RJSL function calls from the global scope are made.
	//
	// The application JavaScript code, in this case the
	// application named "example 1", has to overcome exactly
	// the same download-first-execute-after-download issues as the
	// RJSL. As of September 2011 my(martin.vahi@softf1.com)
	// recommendation is to automatically copy all of the application
	// JavaScript code into a single file, because then one can
	// do some carefully chosen global initializations within
	// the application JavaScript code and there's always only one file
	// that one has to feed to a JavaScript compressor
	// (http://developer.yahoo.com/yui/compressor/ ), which in turn
	// broadens the JavaScript compressor ability
	// to apply global optimizations. Another benefit of having
	// only one, automatically assembled, application specific
	// JavaScript file per application is that this way the
	// set of JavaScript include statements in the HTML does not
	// depend on the number of files in the application
	// JavaScript code. One can just write a build script that
	// reads in JavaScript file dependencies and copys the
	// JavaScript files in the right order into a single
	// JavaScript file and feeds it to a JavaScript compressor.
	// As a matter of fact, that's exactly how it's done
	// within the RJSL.
	// (./src/devel/dev_tools/raudrohi_all_in_one_assembler.bash)
	raudrohi.run(b_make_no_assumptions_about_setup_availability,
		window.the_main_function_for_the_example_1);
} // window.onload

// Caching prevention and the back button.
window.onbeforeunload=function(){
	// Some stuff.
	} // window.onbeforeunload

