//=========================================================================
// This file is for declaring global caches.
// The instantiation of the caches is expected to be
// triggered from the library constructor.
//-------------------------------------------------------------------------
if(window.raudrohi.globals.raudrohi_cache_exists!==true){
	window.raudrohi.cache={};
	window.raudrohi.globals.raudrohi_cache_exists=true;
} // if
if(window.raudrohi.globals.raudrohi_cache_funcs_exists!==true){
	window.raudrohi.cache.funcs={};
	window.raudrohi.globals.raudrohi_cache_funcs_exists=true;
} // if
//-------------------------------------------------------------------------
// It's a partial constructor of some of the 
// global caches that are declared in this file.
window.raudrohi.cache.init=function(){
	try{
		// key==<number_of_colors>_<start_color>_<end_color>
		// The colors are in a form of #xxxxxx, where x is a hex digit.
		window.raudrohi.cache.ht_color_gradients=new Hashtable();
	} catch (err){
		window.raudrohi.tmg('329b455e-0c51-4ea8-8577-70808090abd7',err);
	} // catch
} // window.raudrohi.cache.init

//=========================================================================
