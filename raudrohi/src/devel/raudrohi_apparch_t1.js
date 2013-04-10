//=========================================================================
//
// Application architecture specific components.
//
//=========================================================================

if(window.raudrohi_apparch1_exists!==true){
	window.raudrohi.apparch1={};
	window.raudrohi_apparch1_exists=true;
} // if
if(window.raudrohi_apparch1_ticket_exists!==true){
	window.raudrohi.apparch1.ticket={};
	window.raudrohi_apparch1_ticket_exists=true;
} // if
if(window.raudrohi_session_exists!==true){
	window.raudrohi.session={};
	window.raudrohi_session_exists=true;
} // if
//------------------------------------------------------------------------
//$n=1073741823;
raudrohi.apparch1.ticket.pool_inited=false;
raudrohi.apparch1.ticket.pool=function(){
	//var self_public_=this;
	var bucket_size_=20;
	var next_ticket_=1;
	raudrohi.apparch1.ticket.pool_inited=true;

	// The get_ticket_next() is supposed to make sure that
	// different threads get a different ticket_next_ value. Obviously
	// a correct solution would be some nonblocking ID generation, but,
	// JavaScript has its limitations.
	this.get_ticket=function(){
		try{
			var base=next_ticket_;
			next_ticket_=next_ticket_+bucket_size_;
			var x=base+raudrohi.base.rand(1, bucket_size_-2);
			return x;
		} catch (err){
			raudrohi.tmg('48c3c495-b07e-4743-b55e-e290a0219bd7',err);
		} // catch
	} // this.get_ticket
} // raudrohi.apparch1.ticket.pool


//------------------------------------------------------------------------
raudrohi.apparch1.serialize=function(data){
	try{
		if(!raudrohi_adapter_isString(data)){
			raudrohi.tmg('b7b25c2b-9184-465e-a45e-e290a0219bd7','');
		} // if
		var ticket='1';
		if(raudrohi.apparch1.ticket.pool_inited===true){
			// TODO: It's quite a mess. One should refactor
			// the logon page, namely logon page startup.
			ticket=raudrohi.apparch1.ticket.pool.get_ticket();
		} // if
		var s_session_id='raudrohi.session.id not yet set. '+
		'GUID=="75b58e09-93e5-495e-ac5e-e290a0219bd7"';
		if(!((raudrohi===null)||(raudrohi===undefined))){
			if(!((raudrohi.session===null)||(raudrohi.session===undefined))){
				if(!((raudrohi.session.id===null)||(raudrohi.session.id===undefined))){
					s_session_id=raudrohi.session.id;
				} // if
			} // if
		} // if
		var checksum_str=s_session_id+'_'+ticket+'_'+
		raudrohi.session.pwd_hash;//+'_'+data;
		// Either the JavaScript version or server side version of the hash
		// function has trouble processing the data. The result is that
		// hashes will be different and authentication fails. Leaving
		// the data out of the hash calculation introduces a vulnerability.
		// TODO: Fix it. A guess is that the PHP version of the
		// hash function does not handle UTF-8 correctly. After all, the
		// PHP5 side uses the mbstring extension for UTF-8 support and
		// the hash function is part of its core. One might try to fix this
		// by looking for some up-to-date implementation of the hash function.
		var checksum=sha256hash(checksum_str);
		var ht_packet=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
		ht_packet.put('session_id',s_session_id);
		ht_packet.put('ticket',ticket);
		ht_packet.put('checksum',checksum);
		ht_packet.put('data',data);
		var s_progfte=raudrohi.lang.ht2ProgFTE(ht_packet);
		raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_packet);
		return s_progfte;
	} catch (err){
		raudrohi.tmg('5c5c9f24-46a6-4b5d-925e-e290a0219bd7',err);
	} // catch
} // raudrohi.apparch1.serialize

//------------------------------------------------------------------------
raudrohi.apparch1.send2server=function(formscript_processor_name,
	return_call_phone_number, data){
	try{
		var s_progfte=raudrohi.apparch1.serialize(data);
		raudrohi.ajax.comm.formscript.send2server(formscript_processor_name,
			return_call_phone_number,s_progfte,
			raudrohi.settings.server_reception_URL);
	} catch (err){
		raudrohi.tmg('3c11c253-89ca-4de1-915e-e290a0219bd7',err);
	} // catch
} // raudrohi.apparch1.send2server


raudrohi.apparch1.send_logout_command_2_server_t1=function(){
	try{
		raudrohi.apparch1.send2server('ajax_logout','/dev/null','do_it|||');
	} catch (err){
		raudrohi.tmg('aedccc53-33c0-4a3e-b35e-e290a0219bd7',err);
	} // catch
} // raudrohi.apparch1.send_logout_command_2_server_t1
//------------------------------------------------------------------------
// The sole purpose of the raudrohi.apparch1.session_id_next_updater is to
// update the raudrohi.settings.session_id_next_lifetime at regular intervals.
//
// TODO: Figure out, what happens, if the log-in screen is stayed on
// for a considerable amount of time. Check the server side code, whether
// the actual session length is shortenend.
raudrohi.apparch1.session_id_next_updater=function(){
	var self_public_=this;
	this.phone=new raudrohi.lang.comm.phone('raudrohi.apparch1.session_id_next_updater');

	this.request_from_server=function(){
		try{
			raudrohi.ajax.comm.formscript.send2server('ajax_get_id_formscript',
				self_public_.phone.get_phone_number(), ' ',
				raudrohi.settings.server_reception_URL);
		} catch (err){
			raudrohi.tmg('95e48561-f582-4ad6-9a5e-e290a0219bd7',err);
		} // catch
	} // this.request_from_server

	function calculate_delay(){
		var min=10;
		if(raudrohi.settings.session_id_next_lifetime<min){
			raudrohi.tmg('29ab5772-4101-4f32-935e-e290a0219bd7',
				'raudrohi.settings.session_id_next_lifetime=='+
				raudrohi.settings.session_id_next_lifetime+'  < '+min);
		} // if
		var x=raudrohi.settings.session_id_next_lifetime-
		Math.floor(raudrohi.settings.session_id_next_lifetime/4);
		return x;
	} // calculate_delay()

	this.set_timer=function(){
		try{
			var x=calculate_delay();
			setTimeout('raudrohi.apparch1.session_id_next_updater.request_from_server();',
				x*1000);
			setTimeout('raudrohi.apparch1.session_id_next_updater.set_timer();',x*1000);
		// For example, JavaScript side computer might be disconnected
		// from the network or there can be a server blackout.
		// In this case the session id regular update won't work. This issue
		// is overcome by sending 'authentication failed' signal for
		// outdated session ids and by triggering a session id update
		// whenever the authentication fails.  This solution explains,
		// why the call to the set_timer() must be in this method as a timer
		// in stead of being just as a plain call within
		// the receive_phonecall(...) method.
		} catch (err){
			raudrohi.tmg('8add2924-0817-44af-935e-e290a0219bd7',err);
		} // catch
	} // set_timer
	self_public_.set_timer();

	this.phone.receive_phonecall=function(a_phonecall_instance){
		try{
			var a_pair=raudrohi.base.bisect(a_phonecall_instance.data, '|||');
			if(a_pair.a=='id_from_server'){
				var a_pair2=raudrohi.base.bisect(a_pair.b, '|||');
				raudrohi.settings.session_id_next=a_pair2.a;
			} // if id_from_server
		} catch (err){
			raudrohi.tmg('36928fbf-9ef0-497c-945e-e290a0219bd7',err);
		} // catch
	} // this.receive_phonecall
} // raudrohi.apparch1.session_id_next_updater

//------------------------------------------------------------------------
raudrohi.apparch1.hide_JavaScript_disabled_warning=function() {
	try{
		//throw "'46ba3d2c-09a8-48fc-b55e-e290a0219bd7','kaelkirjak'";
		raudrohi.adapter.editStyle('visible_if_javascript_disabled',
			'visibility','hidden');
		raudrohi.base.set_innerHTML('visible_if_javascript_disabled','');
		raudrohi.adapter.editStyle('visible_if_javascript_enabled',
			'visibility','visible');
	} catch (err){
		raudrohi.tmg('e9aaed02-9543-493f-924e-e290a0219bd7',err);
	} // catch
} // raudrohi.apparch1.hide_JavaScript_disabled_warning()

//------------------------------------------------------------------------
raudrohi.apparch1.global_javascript_init_t1=function(){
	try{
		if(!(window.onload_started===true)){
			throw "\n------------------------\n"+
			'The window.onload must be started before this function can be called.'+
			"\nGUID== dfd040cf-8239-45cb-845e-e984de10bf3d";
		} // if
		raudrohi.lang.phonebooth_dev_null=new raudrohi.lang.phonebooth_dev_null();
		raudrohi_settings_debug_JavaScript=raudrohi.core.str2bool(raudrohi.base.get_var('debug_JavaScript'));
		if(raudrohi_settings_debug_JavaScript===true){
			raudrohi.adapter.YUI_create_console();
		} // if
		raudrohi.settings.debug_SERVERSIDE=raudrohi.core.str2bool(raudrohi.base.get_var('debug_SERVERSIDE'));
		raudrohi.settings.server_reception_URL=raudrohi.base.get_var('server_reception_url');
		raudrohi.settings.checksum_seed=raudrohi.base.get_var('javascript_side_checksum_seed');
		raudrohi.settings.ajax_request_timeout=raudrohi.base.get_var('javascript_side_ajax_timeout');
		raudrohi.settings.site_URL=raudrohi.base.get_var('site_URL');
		raudrohi.settings.session_id_next=raudrohi.base.get_var('initial_session_id');
		raudrohi.settings.session_id_next_lifetime=raudrohi.base.get_var('session_id_next_lifetime');
		raudrohi.apparch1.ticket.pool=new raudrohi.apparch1.ticket.pool();
		raudrohi.apparch1.session_id_next_updater=new raudrohi.apparch1.session_id_next_updater();
		raudrohi.lang.userinterface_text=new raudrohi.lang.userinterface_text();

		raudrohi.ajax.pagecontrol=new raudrohi.ajax.pagecontrol();
		raudrohi.ajax.comm.formscript.receiver=new raudrohi.ajax.comm.formscript.receiver();
		raudrohi.adapter.server_response_eventhandler=raudrohi.ajax.comm.formscript.receiver.receive_response_text;
	} catch (err){
		raudrohi.tmg('4f479892-b77e-4529-824e-e290a0219bd7',err);
	} // catch
} // raudrohi.apparch1.global_javascript_init_t1()

raudrohi.apparch1.global_javascript_init_light_t1=function(){
	try{
		if(!(window.onload_started===true)){
			throw "\n------------------------\n"+
			'The window.onload must be started before this function can be called.'+
			"\nGUID==47defb54-f2d4-4494-b8f3-b9d0e14d5bd0";
		} // if
		raudrohi_settings_debug_JavaScript=false;
		raudrohi.settings.debug_SERVERSIDE=false;
	} catch (err){
		raudrohi.tmg('3f90babe-3632-4877-814e-e290a0219bd7',err);
	} // catch
} // raudrohi.apparch1.global_javascript_init_light_t1

//------------------------------------------------------------------------

//------------------------------------------------------------------------
