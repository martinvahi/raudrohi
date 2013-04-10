//=========================================================================

// This function is meant to be called after the whole raudrohi library
// and its dependencies have been downloaded and the raudrohi adapter
// has been initialized. It initializes the raudrohi library's internal
// data structures. It's called from the raudrohi_adapter_v19.js
raudrohi.internal_constructor=function(){
	try{
		raudrohi.cache.init();
		raudrohi.widgets.g1.phonebooth_t1=new raudrohi.widgets.g1.phonebooth_t1(
			'raudrohi.widgets.g1.phonebooth_t1');
		raudrohi.widgets.g1.button_t1_pool=new raudrohi.base.pool(
			new raudrohi.widgets.g1.button_t1_factory(),
			new raudrohi.widgets.g1.button_t1_resetter());

	// Currently it's executed prior to the application_main_function,
	// this method but needs to be improved, because
	// one needs the setup data from the server before some of the
	// structures can be initialized.

	//raudrohi.widgets.g1.router2hostserver.get_instance();
	//raudrohi.widgets.g1.idcache.get_instance();
	//raudrohi.widgets.g1.uploadenforcer_t1=new raudrohi.widgets.g1.uploadenforcer_t1();

	} catch (err){
		raudrohi.tmg('4f05bf17-c66b-4761-b50d-6330a0219bd7',err);
	} // catch
} // internal_constructor


// If make_no_assumptions_about_setup_availability==true, the library
// gets initiated with default setup values. Otherwise it is assumed
// that the server provides setup info.
raudrohi.run=function(make_no_assumptions_about_setup_availability,
	application_main_function){
	try{
		raudrohi.application_main_function=application_main_function;
		raudrohi.initiate_adapter(make_no_assumptions_about_setup_availability);
	} catch (err){
		raudrohi.tmg('3009b853-0f07-4f1f-920d-6330a0219bd7',err);
	} // catch
} // raudrohi.run
