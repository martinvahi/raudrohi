//=========================================================================


// The window.raudrohi.widgets.g1.idcache downloads unused, "freshly generated",
// ids from server and caches them. It's a singleton.
window.raudrohi.widgets.g1.idcache = function() {
	try {
		var self_public_ = this;
		var number_of_ids_2_ask_from_th_server_at_once_=50;
		var server_request_threshold_=20;
		var requests_queueing_threshold_=5; // It's for multithreading robustness.
		if(raudrohi_settings_debug_JavaScript===true){
			if(!window.raudrohi.widgets.g1.idcache.ok_2_call_constructor){
				window.raudrohi.tmg('8c1b6cae-5b28-416f-a2d4-8080a0219bd7',
					'One should use the static method '+
					'window.raudrohi.widgets.g1.idcache.get_instance(). '+
					'The window.raudrohi.widgets.g1.idcache is a singleton.');
			} // if
			//			if (server_request_threshold_<=requests_queueing_threshold_) {
			//				window.raudrohi.tmg('ff6bae4c-1f9a-4f65-b1d4-8080a0219bd7',
			//					'server_request_threshold_=='+server_request_threshold_+
			//					' <= requests_queueing_threshold_=='+
			//					'requests_queueing_threshold_');
			//			} // if
			if (requests_queueing_threshold_<1) {
				window.raudrohi.tmg('431259db-2afc-4d8a-bdc4-8080a0219bd7',
					'requests_queueing_threshold_=='+
					requests_queueing_threshold_+' < 1');
			} // if
		} // if
		var s_html_id_ ='window.raudrohi.widgets.g1.idcache_is_a_singleton';
		var pileofmethods_t1_ = new window.raudrohi.widgets.g1.pileofmethods_t1(
			self_public_,'window.raudrohi.widgets.g1.idcache_',s_html_id_);
		var prc_=self_public_.private_code_;

		this.instanteated=true;
		this.get_instance=function(){
			try{
				return self_public_;
			} catch (err){
				window.raudrohi.tmg('2b2bd448-9716-4291-95c4-8080a0219bd7',err);
			} // catch
		} // get_instance

		var ar_cahce_=[];
		var qu_requests_=new window.raudrohi.lang.htQueue();

		function request_from_server_if_necessary(){
			try{
				var n=number_of_ids_2_ask_from_th_server_at_once_;
				if(raudrohi_settings_debug_JavaScript===true){
					if (n<0) {
						window.raudrohi.tmg('3e047f32-954b-44bb-a2c4-8080a0219bd7',
							'n=='+n+' < 0');
					} // if
					if ((n-server_request_threshold_)<1) {
						window.raudrohi.tmg('18971b61-e45d-44a3-88c4-8080a0219bd7',
							'(n'+'-server_request_threshold_)=='+
							(n-server_request_threshold_)+' < 1 ');
					} // if
					if (server_request_threshold_<0) {
						window.raudrohi.tmg('14ca3bd6-ad0b-4a52-bdc4-8080a0219bd7',
							'server_request_threshold=='+
							server_request_threshold+' < 0');
					} // if
				} // if
				if (server_request_threshold_<ar_cahce_.length) {
					return;
				} // if
				var ht_data=window.raudrohi.base.pool_of_hashtables.get_empty_hashtable();
				ht_data.put('number_of_ids',""+n);
				prc_.threadjump_send("router2hostserver",
					'ajax_get_list_of_ids', ht_data, 'ids_from_server');
			} catch (err){
				window.raudrohi.tmg('3cd2a066-2a3d-4dfd-b5c4-8080a0219bd7',err);
			} // catch
		} // request_from_server_if_necessary


		prc_.customizable.optional.startup_hook=function(){
			try{
				request_from_server_if_necessary();
			} catch (err){
				window.raudrohi.tmg('00f79046-0200-4f5e-a2c4-8080a0219bd7',err);
			} // catch
		} // startup_hook


		this.hide = function(){}
		this.unhide = function(){};
		this.set_content =function(){};

		var thrjr_ids_from_server_x_=0;
		this.thrjr_.ids_from_server=function(ht_wrapper){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					window.raudrohi.base.assert_isObject(ht_wrapper,
						'ht_wrapper','ae7e8b4c-c7f0-4b39-92c4-8080a0219bd7');
				} // if
				var ht_data=ht_wrapper.get('data');
				var data_string=ht_data.get('commaseparated_list_of_ids');
				window.raudrohi.base.assert_isString(data_string,
					'data_string','6daf473d-2541-45a1-83c4-8080a0219bd7');
				var ar_new=window.raudrohi.base.commaseparated_list_2_array(data_string);
				thrjr_ids_from_server_x_=0;
				var ar_merged=ar_new.concat(ar_cahce_);
				var i=0;
				for(i=0;i<(thrjr_ids_from_server_x_+3);i++){
					// A bit dirty way to increase threading robustness.
					// There might be that while we were assembling the
					// ar_merged, some of the IDs were requested from the
					// ar_cache_.
					ar_merged.pop();
				} // for
				thrjr_ids_from_server_x_=0;
				ar_cahce_=ar_merged;
				window.raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_data);
				window.raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_wrapper);
			} catch (err){
				window.raudrohi.tmg('480ffd48-4d28-4026-94c4-8080a0219bd7',err);
			} // catch
		} // thrjr_.ids_from_server

		this.thrjr_.id_request=function(ht_wrapper){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					window.raudrohi.base.assert_isObject(ht_wrapper,
						'ht_wrapper','fac91b30-e30d-479f-a1c4-8080a0219bd7');
				} // if
				thrjr_ids_from_server_x_++;
				var return_in_stead_of_queueing=false;
				request_from_server_if_necessary();
				if(ar_cahce_.length<=requests_queueing_threshold_){
					if(return_in_stead_of_queueing===false){
						// Currently there's no code that actually
						// empties the qu_requests. So, this code here
						// is just a hint to the architecture. :)
						qu_requests_.push(ht_wrapper);
					} // if
					return;
				} // if
				var id_string_2_send=ar_cahce_.pop();
				var ht_data=ht_wrapper.get('data'); // returns a reference
				ht_data.put('id',id_string_2_send);
				prc_.threadjump_send_reply(ht_wrapper);
			} catch (err){
				window.raudrohi.tmg('63e9751d-56bc-4d5b-a4c4-8080a0219bd7',err);
			} // catch
		} // thrjr_.id_request

		// We'll start it up after it has been instanteated.
		this.set_readonly = function(true_if_readonly) {}
		prc_.startup_shutdown_handler_.startbutton_pushed();
		this.shutdown = pileofmethods_t1_.shutdown_by_calling_instance_public_hide_t1;

	} catch(err) {
		window.raudrohi.tmg('ca208f47-ea12-496a-85b4-8080a0219bd7', err);
	} // catch
} // window.raudrohi.widgets.g1.idcache

window.raudrohi.widgets.g1.idcache.ok_2_call_constructor=false;
window.raudrohi.widgets.g1.idcache.instanteated=false;
window.raudrohi.widgets.g1.idcache.get_instance=function(){
	try{
		if(!window.raudrohi.widgets.g1.idcache.instanteated){
			window.raudrohi.widgets.g1.idcache.ok_2_call_constructor=true;
			window.raudrohi.widgets.g1.idcache=new window.raudrohi.widgets.g1.idcache();
			window.raudrohi.widgets.g1.idcache.ok_2_call_constructor=false;
			window.raudrohi.widgets.g1.idcache.instanteated=true;
		//window.raudrohi.lang.phonebooth_dev_null.phone.call(
		//	window.raudrohi.widgets.g1.idcache.phone.get_phone_number(),
		//	'startup|||',42);
		} // if
		return window.raudrohi.widgets.g1.idcache;
	} catch (err){
		window.raudrohi.tmg('20bd5b55-c406-43ab-92b4-8080a0219bd7',err);
	} // catch
} //window.raudrohi.widgets.g1.idcache.instanteate

	//------------------------------------------------------------------------

	//------------------------------------------------------------------------
