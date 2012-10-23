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


// The raudrohi.widgets.g1.router2hostserver is a singleton and its
// phone number is "router2hostserver". The
// raudrohi.widgets.g1.router2hostserver exists only for making the hosting
// server available as if it were just one of the widgets. It forms a
// facade. http://en.wikipedia.org/wiki/Facade_pattern
raudrohi.widgets.g1.router2hostserver=function(s_html_id){
	try{
		if(raudrohi.widgets.g1.router2hostserver.ok_2_call_constructor===false){
			raudrohi.tmg('e4a7833d-5537-40b7-82ce-2160a0219bd7',
				'One should use the static method to get an '+
				'instance. This class is a singleton.');
		} // if
		// The current version of the raudrohi.widgets.g1.router2hostserver
		// and the threadjump_send/threadjump_receive functions are
		// quite "terrible" due to the underlying phoning system and
		// the server-client "formscript" format.
		//
		// TODO: Refactor this class heavily after the phoning system
		// and formscript format has been refactored. Even the threadjumping
		// communication can be refactored to use the "standard"
		// threadjump redirect functions, BUT, the current implementation
		// is correct and works. So, the threadjumpint API juse in here
		// is the case of "don't fix, what isn't broken".
		//
		// Currently this class allows a newer API to be used with the
		// old, terrible, phoning system and formscript format.
		var self_public_=this;	
		var instance_public_=self_public_;
		var html_id_="server_singleton";
		var pileofmethods_t1_=new raudrohi.widgets.g1.pileofmethods_t1(
			self_public_,'',html_id_);
		var prc_=self_public_.private_code_;
		self_public_.phone=new raudrohi.lang.comm.phone("router2hostserver");
		
		// The phonecall_processing_command_ is part of the 
		// backwards compatibility implementation.
		var phonecall_processing_command_="router2hostserver_receive_from_server";

		var ricochet_detector_funcname_='threadjumper_ricochet_detector';
	

		this.thrjr_.router2hostserver_receive_from_server=function(ht_wrapper){
			try{
				if(raudrohi.settings.debug_JavaScript){
					raudrohi.base.assert_isObject(ht_wrapper,"ht_wrapper",
						'19a1e5b6-14d1-4ca4-92be-2160a0219bd7');
					raudrohi.base.assert_isObject(ht_wrapper.get('data'),
						"ht_wrapper.get('data')",
						'454c5710-4284-48b3-84be-2160a0219bd7');
				} // if
				var return_command=ht_wrapper.get(
					'router2hostserver_return_command');
				ht_wrapper.put('destination_command',return_command);
				ht_wrapper.put('return_command',ricochet_detector_funcname_);

				var return_phonenumber=ht_wrapper.get(
					'router2hostserver_return_phonenumber');
				ht_wrapper.put('destination_phonenumber',return_phonenumber);
				ht_wrapper.put('return_phonenumber',
					self_public_.phone.get_phone_number());
				self_public_.phone.call(return_phonenumber,
					return_command+'|||', ht_wrapper);
			} catch (err){
				raudrohi.tmg('043d181f-6a46-45af-91be-2160a0219bd7',err);
			} // catch
		} // thrjr_.router2hostserver_receive_from_server

		prc_.send2server=function(ht_wrapper){ // was formely this.send2server
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isObject(ht_wrapper.get('data'),
						"ht_wrapper.get('data')",
						'f4b3e956-6a48-4d27-95be-2160a0219bd7');
				} // if
				var s_progfte=null;
				try{
					var ht_data=ht_wrapper.get('data');
					s_progfte=raudrohi.lang.ht2ProgFTE(ht_data);
					ht_wrapper.put('data',s_progfte);
				} catch (err){
					raudrohi.tmg('4715979e-b329-4bb9-b4be-2160a0219bd7',err);
				} // catch
				var return_command=ht_wrapper.get('return_command');
				ht_wrapper.put('router2hostserver_return_command',
					return_command);
				ht_wrapper.put('return_command',phonecall_processing_command_);
				var return_phonenumber=ht_wrapper.get('return_phonenumber');
				ht_wrapper.put('router2hostserver_return_phonenumber',
					return_phonenumber);
				ht_wrapper.put('return_phonenumber',
					self_public_.phone.get_phone_number());
				var destination_command=ht_wrapper.get('destination_command');
				s_progfte=raudrohi.lang.ht2ProgFTE(ht_wrapper);
				raudrohi.apparch1.send2server(destination_command,
					self_public_.phone.get_phone_number(),s_progfte);
				raudrohi.base.pool_of_hashtables.return_used_hashtable(
					ht_wrapper);
			} catch (err){
				raudrohi.tmg('8a56ef3f-59bd-41c1-b1be-2160a0219bd7',err);
			} // catch
		} // prc_.send2server


		this.phone.receive_phonecall=function(a_phonecall_instance){
			try{
				var data=raudrohi.adapter.trim(a_phonecall_instance.data);
				var a_pr1=raudrohi.base.bisect(data, '|||');
				raudrohi.base.assert_isNotnull(a_pr1,'a_pair',
					'db62735b-07d1-4aee-a5be-2160a0219bd7');
				if(pileofmethods_t1_.standard_phonecall_received_t1(a_pr1,
					a_phonecall_instance )){
					return;
				} // if
				var a_pr2;
				var ht_wrapper;
				if(a_pr1.a===phonecall_processing_command_){
					a_pr2=instance_public_.only_for_raudrohi_core_developers.microsession_receive_txt_t2(a_pr1.b);
					if(a_pr2.a){
						return;
					} // if
					ht_wrapper=a_pr2.b;
					self_public_.thrjr_.router2hostserver_receive_from_server(
						ht_wrapper);
					return;
				} // if
				ht_wrapper=a_phonecall_instance.data2;
				if(ht_wrapper==null){
					var msg= "ht_wrapper===null \na_phonecall_instance.data=="+
					a_phonecall_instance.data;
					if(raudrohi.settings.debug_JavaScript===true){
						raudrohi.tmg(
							'56134463-0a1a-4000-b1be-2160a0219bd7',msg);
					} else {
						raudrohi.adapter.log(msg);
						return;
					} // else
				} // if				
				// One  can not use the prc_.threadjump_receive, because
				// one needs to access the ht_wrapper.
				prc_.send2server(ht_wrapper);
			} catch (err){
				raudrohi.widgets.g1.sys.phonecall_receiver_tmg(
					'245eafc7-0fb3-4d2c-82be-2160a0219bd7',err,
					a_phonecall_instance);
			} // catch
		} // receive_phonecall

		self_public_.startup_sequence_init();
	} catch (err){
		raudrohi.tmg('89e5e35e-c8e2-4776-a1ae-2160a0219bd7',err);
	} // catch
} // raudrohi.widgets.g1.router2hostserver

raudrohi.widgets.g1.router2hostserver.ok_2_call_constructor=false;
raudrohi.widgets.g1.router2hostserver.instanteated=false;
raudrohi.widgets.g1.router2hostserver.get_instance=function(){
	try{
		if(!raudrohi.widgets.g1.router2hostserver.instanteated){
			raudrohi.widgets.g1.router2hostserver.ok_2_call_constructor=true;
			raudrohi.widgets.g1.router2hostserver=new raudrohi.widgets.g1.router2hostserver();
			raudrohi.widgets.g1.router2hostserver.ok_2_call_constructor=false;
			raudrohi.widgets.g1.router2hostserver.instanteated=true;
		} // if
		return raudrohi.widgets.g1.router2hostserver;
	} catch (err){
		raudrohi.tmg('bb47fc5a-c007-4bbe-82ae-2160a0219bd7',err);
	} // catch
} //raudrohi.widgets.g1.router2hostserver.instanteate


//------------------------------------------------------------------------