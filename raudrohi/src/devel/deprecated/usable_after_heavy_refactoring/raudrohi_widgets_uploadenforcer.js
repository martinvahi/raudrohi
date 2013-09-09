//=========================================================================


// The general idea is that saving of data takes place in the
// background in a separate thread and the uploads are enforced
// to complete before logout.
//
// The window.raudrohi.widgets.g1.uploadenforcer_t1 is a singleton and
// has to be "activated" right after log-on, because
// one does not have access to the server
// without authenticating the session first.
//
// It has to be manually deactivated at log-off and it will
// notify by a threadjump, if its deactivation process is complete.
// The session manager widget has to maintain the session till the
// window.raudrohi.widgets.g1.uploadenforcer_t1 has completed its deactivation and
// notified the session manager widget of the completion.
//
// The window.raudrohi.widgets.g1.uploadenforcer_t1 is expected to be used
// by feeding it threadjump calls and it then redirects them to the
// server by using the window.raudrohi.widgets.g1.router2hostserver.
//
// -----------------------------------
// Actually, this widget is Deprecated and it is
// ONE BIG STUPIDITY, because JavaScript is singlethreaded,
// unless one uses Worker threads.
// One might want to refactor it and then this widget
// might get out of the deprecated status.
window.raudrohi.widgets.g1.uploadenforcer_t1=function(){
	var self_public_=this;
	try{

		var s_html_id_='window.raudrohi.widgets.g1.uploadenforcer_t1_is_a_singleton';
		var pileofmethods_t1_=new window.raudrohi.widgets.g1.pileofmethods_t1(
			self_public_,'',s_html_id_);
		var prc_=self_public_.private_code_;
		this.phone=new window.raudrohi.lang.comm.phone('uploadenforcer');

		var htqueue_ht_wrappers_2_send=new window.raudrohi.lang.htQueue();

		function clear_cache(){
			try{
				htqueue_ht_wrappers_2_send.clear();
			} catch (err){
				window.raudrohi.tmg('4c76305e-97f1-4860-b2fe-0060a0219bd7',err);
			} // catch
		} // clear_cache

		var activated_=false;
		var deactivation_in_progress_=false;
		var deactivator_phone_number_=null;
		this.deactivate=function(deactivator_phone_number){
			try{
				window.raudrohi.base.assert_isString(deactivator_phone_number,
					'deactivator_phone_number',
					'a194f735-3ed1-4804-82fe-0060a0219bd7');
				if(activated_===false){
					return;
				} // if
				if(deactivation_in_progress_){
					// The reason for this is that one has to
					// notify the completeness of the deactivation
					// process, but it is not possible to notify
					// all deactivation callers in parallel and that
					// brings the issue of determining the legal order
					// of the notification receivers. If the session
					// maintainer receives the notification before others,
					// there might be problems.
					return;
				} // if
				deactivation_in_progress_=true;
				prc_.microsession_dismiss_all();
				clear_cache();
				deactivator_phone_number_=deactivator_phone_number;
				setTimeout('window.raudrohi.widgets.g1.uploadenforcer_t1.'+
					'private_code_.job_exec()',5);
			} catch (err){
				window.raudrohi.tmg('37eb77a3-64f2-421a-a1fe-0060a0219bd7',err);
			} // catch
		} // deactivate

		var notification_in_progress_=false;
		function notify_deactivator_of_deactivation_completion(){
			try{
				if(deactivation_in_progress_===false){
					return;
				} // if
				if(notification_in_progress_===true){
					return;
				} // if
				notification_in_progress_=true;
				self_public_.state_switcher_.change_state_2('zero');
				
				var ht_data=window.raudrohi.base.pool_of_hashtables.get_empty_hashtable();
				prc_.threadjump_send(deactivator_phone_number_,
					'evh_widget_uploadenforcer_deactivated', ht_data, '/dev/null');
				deactivation_in_progress_=false;
				notification_in_progress_=false;
			} catch (err){
				window.raudrohi.tmg('e12949f6-9737-41b6-b2fe-0060a0219bd7',err);
			} // catch
		} // notify_deactivator_of_deactivation_completion

		// Deactivation is done automatically by going to widget state "zero".
		this.activate=function(){
			try{
				if(activated_===true){
					return;
				} // if
				self_public_.state_switcher_.change_state_2('activated');
			} catch (err){
				window.raudrohi.tmg('1dd39fc4-b73c-4276-a4fe-0060a0219bd7',err);
			} // catch
		} // activate


		var number_of_jobs_=0;
		// Meant to be used with the setTimeout function from
		// thrjr_.submit_upload_job
		this.private_code_.job_exec=function(){
			try{
				if(activated_===false){
					return;
				} // if
				if(3<number_of_jobs_){
					return;
				} // if
				number_of_jobs_++;
				var ht_wrapper;
				var destination_command;
				while(0<htqueue_ht_wrappers_2_send.length()){
					ht_wrapper=htqueue_ht_wrappers_2_send.pop();
					destination_command=ht_wrapper.get('destination_command');
					prc_.threadjump_redirect_outwards('router2hostserver',
						destination_command, ht_wrapper,
						'process_server_responses');
					window.raudrohi.base.pool_of_hashtables.return_used_hashtable(
						ht_wrapper);
				} // while
				number_of_jobs_--;
				if(deactivation_in_progress_===true){
					if(number_of_jobs_===0){
						notify_deactivator_of_deactivation_completion();
					} else {
						// The call to the setTimeout here is just to
						// handle a case where the number_of_jobs_!==0 is
						// due to some unfortunate timing gliches.
						// Better safe than sorry. :)
						var n_milliseconds=window.raudrohi.base.i_rand_t1(50, 200);
						setTimeout('window.raudrohi.widgets.g1.uploadenforcer_t1.'+
							'private_code_.job_exec()',n_milliseconds);
					} // if
				} // if
			} catch (err){
				window.raudrohi.tmg('1d0629c3-6cc9-40f9-91ee-0060a0219bd7',err);
			} // catch
		} // private_code_.job_exec

		// It is assumed that the ht_wrapper has been taken from the
		// window.raudrohi.base.pool_of_hashtables.
		this.thrjr_.default_command=function(ht_wrapper){
			try{
				if(activated_===false){
					return;
				} // if
				htqueue_ht_wrappers_2_send.push(ht_wrapper);
				setTimeout('window.raudrohi.widgets.g1.uploadenforcer_t1.'+
					'private_code_.job_exec()',5);
			} catch (err){
				window.raudrohi.tmg('5c34edb0-0c32-4f2f-b3ee-0060a0219bd7',err);
			} // catch
		} // submit_upload_job
		

		this.thrjr_.process_server_responses=function(ht_wrapper){
			try{
				if(activated_===false){
					return;
				} // if
				prc_.threadjump_redirect_inwards(ht_wrapper);
			} catch (err){
				window.raudrohi.tmg('26774659-d4a6-4c11-95ee-0060a0219bd7',err);
			} // catch
		} // thrjr_.process_server_responses


		prc_.stsw_exit_activated=function(){
			try{
				if(!deactivation_in_progress_){
					// If it already resides in state "zero",
					// the exit func is not called.
					window.raudrohi.tmg('8b60a11a-14d0-450b-a4ee-0060a0219bd7',
						'The deactivation must be initiated from '+
						'method \'deactivate(...)\'.');
				}
				clear_cache();
				activated_=false;
			} catch (err){
				window.raudrohi.tmg('4cfdda2d-840a-45be-93ee-0060a0219bd7',err);
			} // catch
		} // stsw_exit_activated
		self_public_.state_switcher_.declare_state_default_exit_func(
			'activated',prc_.stsw_exit_activated);

		prc_.stsw_enter_activated=function(){
			try{
				activated_=true;
			} catch (err){
				window.raudrohi.tmg('3d567bdc-11bd-4d38-94ee-0060a0219bd7',err);
			} // catch
		} // stsw_enter_activated
		self_public_.state_switcher_.declare_state_default_entry_func(
			'activated',prc_.stsw_enter_activated);
		self_public_.state_switcher_.declare_state_2_be_in_cluster(
			'cluster_activated','activated');

		this.phone.receive_phonecall=pileofmethods_t1_.receive_phonecall_t1;


	} catch (err){
		window.raudrohi.tmg('3253a265-9c3c-4682-91ee-0060a0219bd7',err);
	} // catch
} // window.raudrohi.widgets.g1.uploadenforcer_t1

