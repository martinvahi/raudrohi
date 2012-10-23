//------------------------------------------------------------------------
// Author: martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// This file is in public domain.
//------------------------------------------------------------------------


window.the_main_function_for_this_example= function() {

	document.write("halloo 000");

} // window.the_main_function_for_this_example


window.onload = function() {
	var b_make_no_assumptions_about_setup_availability = true;
	raudrohi.run(b_make_no_assumptions_about_setup_availability,
		window.the_main_function_for_this_example);
} // window.onload

/// Caching prevention and the back button.
window.onbeforeunload=function(){
	// Some stuff.
	} // window.onbeforeunload
