//------------------------------------------------------------------------
// Copyright (c) 2009, martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or
// without modification, are permitted provided that the following
// conditions are met:
//
// * Redistributions of source code must retain the above copyright
//   notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above copyright
//   notice, this list of conditions and the following disclaimer
//   in the documentation and/or other materials provided with the
//   distribution.
// * Neither the name of the Martin Vahi nor the names of its
//   contributors may be used to endorse or promote products derived
//   from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
// CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
// INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//------------------------------------------------------------------------

//if(window.raudrohi_cache_exists!==true){
//	window.raudrohi.widgets.g1.cache={};
//	window.raudrohi_cache_exists=true;
//} // if
//------------------------------------------------------------------------

// This class is deprecated, because in here the
// queries that are chached, are fixed by their format.
//
// A new version of the cache should take query-instance
// to signature converter by a constructor parameter.
// To avoid query-instance type detection related issues
// there should be at most one query-instance type per cache
// instance.
raudrohi.widgets.g1.cache_t2=function(s_parent_phone_number){
	var self_public_=this;
	var instance_public_=self_public_;
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(
				s_parent_phone_number, 's_parent_phone_number',
				'a1956b27-d906-4578-9416-b050a0219bd7');
		} // if

		var s_html_id_='The_raudrohi.widgets.g1.cache_t2_is_a_nongraphical_widget'+
		raudrohi.base.generate_id();
		var pileofmethods_t1_=new raudrohi.widgets.g1.pileofmethods_t1(
			self_public_,'raudrohi.widgets.g1.cache_t2_',s_html_id_);
		var prc_=self_public_.private_code_;
		prc_.parent_phone_number_=s_parent_phone_number;
		//this.display_message=pileofmethods_t1_.display_message_t3;
		prc_.self_is_graphical_widget_=false;

		var ht_utiliz_=new Hashtable();

		// key   --- searchstring
		// value --- server response
		var ht_cache_=new Hashtable();

		// key    --- qyery signature in the format of raudrohi.dbcomm.dbq1.get_query_params_signature
		// value  --- array of requester phone numbers.
		var ht_pending_queries_=new Hashtable();

		// The wrapper_hashtable is in the format that is created
		// within the raudrohi.widgets.g1.pileofmethods_t1.instance_public_.only_for_raudrohi_core_developers.microsession_assemble_data_wrapper_hashtable
		// The signature is in the format of raudrohi.dbcomm.dbq1.get_query_params_signature
		function submit_cache_query_2_server(signature, wrapper_hashtable){
			try{
				var ht_requester_phonenumbers;
				var s_key=wrapper_hashtable.get('return_phonenumber')+':'+
				wrapper_hashtable.get('return_command');
				if(ht_pending_queries_.containsKey(signature)){
					ht_requester_phonenumbers=ht_pending_queries_.get(signature);
					ht_requester_phonenumbers.put(s_key, wrapper_hashtable);
					return;
				} // if
				ht_requester_phonenumbers=new raudrohi.base.HashtableUtilizer(
					'requester_phns_'+signature,ht_utiliz_);
				ht_requester_phonenumbers.put(s_key, wrapper_hashtable);
				ht_pending_queries_.put(signature,ht_requester_phonenumbers);

				var ht_out=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
				ht_out.put('signature',signature);
				var ht_q=wrapper_hashtable.get('data');
				ht_out.put('serialized_query_hashtable',
					raudrohi.dbcomm.dbq1.serialize_query_ht(ht_q));
				var destination_command=ht_q.get('formscript_processor_name');
				prc_.threadjump_send('router2hostserver', destination_command,
					ht_out, 'process_server_response');
				raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_out);
			} catch (err){
				raudrohi.tmg('68a49933-edbb-4beb-b516-b050a0219bd7',err);
			} // catch
		} // submit_cache_query_2_server


		// The wrapper_hashtable is in the format that is created
		// within the raudrohi.widgets.g1.pileofmethods_t1.instance_public_.only_for_raudrohi_core_developers.microsession_assemble_data_wrapper_hashtable
		// The wrapper_hashtable's data "field" is expected to contain
		// an hashtable that conforms to the format of
		// raudrohi.dbcomm.dbq1.create_empty_ht().
		self_public_.thrjr_.get_from_cache=function(wrapper_hashtable){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isObject(wrapper_hashtable,
						'wrapper_hashtable',
						'845e9266-321a-4745-bc16-b050a0219bd7');
					raudrohi.base.assert_isString(
						wrapper_hashtable.get('return_phonenumber'),
						'wrapper_hashtable.get(\'return_phonenumber\')',
						'44e07fb9-95c8-4051-9316-b050a0219bd7');
				} // if
				var ht_q=wrapper_hashtable.get('data');
				var signature=raudrohi.dbcomm.dbq1.get_query_params_signature(
					ht_q);
				if(ht_cache_.containsKey(signature)){
					wrapper_hashtable.put('data',ht_cache_.get(signature));
					prc_.threadjump_send_reply(wrapper_hashtable);
					return;
				} // if
				submit_cache_query_2_server(signature,
					wrapper_hashtable);
			} catch (err){
				raudrohi.tmg('24b6b925-b728-4d05-b106-b050a0219bd7',err);
			} // catch
		} // get_from_cache

		function pass_the_result_on_to_widgets_that_were_waiting_for_it(
			signature,ht_rows){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString( signature,'signature',
						'38e056d2-cb82-494f-9506-b050a0219bd7');
					raudrohi.base.assert_isObject(ht_rows,'ht_rows',
						'135e2d2b-c001-48dc-9306-b050a0219bd7');
					if(!ht_pending_queries_.containsKey(signature)){
						raudrohi.adapter.log(
							'GUID==06910038-9a41-45d1-988b-7f2535a0eefe'+
							' Something happened. There is no key '+
							'for signature "'+signature+'".');
						return;
					} // if
				} // if
				var ht_requester_phns=ht_pending_queries_.get(signature);
				var keys=ht_requester_phns.keys();
				var len=keys.length;
				var a_key;
				var ht_wrapper;
				for(var i=0;i<len;i++){
					a_key=keys[i];
					ht_wrapper=ht_requester_phns.get(a_key);
					ht_wrapper.put('data',ht_rows);
					prc_.threadjump_send_reply(ht_wrapper);
				} // for
				ht_pending_queries_.remove(signature);
				raudrohi.base.pool_of_hashtables.return_used_hashtable(
					ht_requester_phns);
			} catch (err){
				raudrohi.tmg('45446834-c24f-45f8-a206-b050a0219bd7',err);
			} // catch
		} // pass_the_result_on_to_widgets_that_were_waiting_for_it

		self_public_.thrjr_.process_server_response=function(ht_wrapper){
			try{
				var ht_data=ht_wrapper.get('data');
				var s_rows=ht_data.get('data');
				if(ht_data.get('operation_success')=='f'){
					if(raudrohi.settings.debug_JavaScript===true){
						raudrohi.tmg('18e7f827-10b2-40be-9406-b050a0219bd7',
							'In cache: server query operation '+
							'failed. '+ht_data.get('message'));
					} // if
					return;
				} // if
				var signature=ht_data.get('signature');
				var ht_rows=raudrohi.lang.deserialize_htOfht_from_ProgFTE(s_rows);
				ht_cache_.put(signature,ht_rows)

				pass_the_result_on_to_widgets_that_were_waiting_for_it(
					signature,ht_rows);
			} catch (err){
				raudrohi.tmg('ac86d62a-cc4c-443e-b106-b050a0219bd7',err);
			} // catch
		} // process_server_response

		this.reset=function(){
			try{
				prc_.microsession_dismiss_all();
				ht_cache_.clear();
				ht_pending_queries_.clear();
				ht_utiliz_.clear();
			} catch (err){
				raudrohi.tmg('d24785de-2d3c-4678-a906-b050a0219bd7',err);
			} // catch
		} // this.reset

		prc_.stsw_exit_run=function(){
			try{
				self_public_.reset();
			} catch (err){
				raudrohi.tmg('6b59b13a-a72d-4466-b406-b050a0219bd7',err);
			} // catch
		} // stsw_exit_run
		self_public_.state_switcher_.declare_state_default_exit_func(
			'run',prc_.stsw_exit_run);

		prc_.stsw_enter_run=function(){
			try{
			} catch (err){
				raudrohi.tmg('5dcda443-5417-4440-a306-b050a0219bd7',err);
			} // catch
		} // stsw_enter_run
		self_public_.state_switcher_.declare_state_default_entry_func(
			'run',prc_.stsw_enter_run);
		self_public_.state_switcher_.declare_state_2_be_in_cluster(
			'cluster_run','run');

		prc_.bitfield_.set('phc_resurrect_t1');
		self_public_.startup_sequence_init();

	} catch (err){
		raudrohi.tmg('175b464e-8e42-4047-a106-b050a0219bd7',err);
	} // catch
} // raudrohi.widgets.g1.cache_t2
