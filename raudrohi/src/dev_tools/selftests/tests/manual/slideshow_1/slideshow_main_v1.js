
//============================================================================




//---------------------------------------------------------------------------
window.application_main_function=function(){
	if(typeof(raudrohi) === "undefined"){
		throw "It seems that the raudrohi namespace is not defined. "+
		"There is a fault in the raudrohi selftests application.";
	} // if

	window.slide_main_function();
} // application_main_function

window.onload=function(){
	raudrohi.run(true,window.application_main_function);
} // window.onload

//============================================================================