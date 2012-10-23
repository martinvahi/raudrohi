///------------------------------------------------------------------------
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
if(window.raudrohi.dbcomm_exists!==true){
	window.raudrohi.dbcomm={}; // The "db" stands for database
	window.raudrohi.dbcomm_exists=true;
} // if

//------------------------------------------------------------------------
// This class is deprecated.
raudrohi.dbcomm.dbq1=function(){
	var self_public_=this;
	try{

		this.verify_bin_query_ht=function(ht_query_candidate){
			if(raudrohi.settings.debug_JavaScript===true){
				raudrohi.base.assert_isObject(ht_query_candidate,
					'ht_query_candidate',
					'15c83927-6ad3-4ffb-a197-6150a0219bd7');
				var ht_q=ht_query_candidate;

				raudrohi.base.assert_isString(
					ht_q.get('formscript_processor_name'),
					'ht_q.get(\'formscript_processor_name\')',
					'76095a27-e218-4bae-9197-6150a0219bd7');
				raudrohi.base.assert_isString(
					ht_q.get('table_name'),'ht_q.get(\'table_name\')',
					'2878b2e3-4d83-4c17-9697-6150a0219bd7');
				if(!raudrohi.adapter.isString(ht_q.get('ht_selector'))){
					raudrohi.base.assert_isObject(
						ht_q.get('ht_selector'),'ht_q.get(\'ht_selector\')',
						'36be5b39-c7f9-4479-b497-6150a0219bd7');
				} // if
				raudrohi.base.assert_isString(
					ht_q.get('SQL_suffix'),'ht_q.get(\'SQL_suffix\')',
					'304bf956-be28-4d3f-8597-6150a0219bd7');
				raudrohi.base.assert_isString(
					ht_q.get('command'),'ht_q.get(\'command\')',
					'5e3459f1-c7e5-4372-9197-6150a0219bd7');
			} // if
		} // verify_bin_query_ht

		this.create_empty_ht=function(){
			try{
				var ht_q=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
				var ht_selector=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
				ht_q.put('formscript_processor_name','<needs to be set>');
				ht_q.put('table_name','<needs to be set somewhere else>');
				ht_q.put('ht_selector',ht_selector);
				ht_q.put('SQL_suffix','');
				ht_q.put('command','<needs to be set somewhere else>');
				return ht_q;
			} catch (err){
				raudrohi.tmg('6ca9a330-0490-4ec7-b297-6150a0219bd7',err);
			} // catch
		} // create_empty_ht

		this.get_query_params_signature=function(ht_q){
			try{
				self_public_.verify_bin_query_ht(ht_q);
				var ht_selector=ht_q.get('ht_selector');
				var signature=raudrohi.lang.hashtable_signature(ht_selector);
				signature+=':';
				signature+=ht_q.get('table_name');
				signature+=':';
				signature+=ht_q.get('SQL_suffix');
				signature+=':';
				signature+=ht_q.get('formscript_processor_name');
				return signature;
			} catch (err){
				raudrohi.tmg('4c10c421-14de-40f8-9297-6150a0219bd7',err);
			} // catch
		} // serialize_query_ht

		this.serialize_query_ht=function(ht_q){
			try{
				self_public_.verify_bin_query_ht(ht_q);
				var ht_tmp=ht_q.get('ht_selector');
				var s_ht_selector=raudrohi.lang.ht2ProgFTE(
					ht_q.get('ht_selector'));
				ht_q.put('ht_selector',s_ht_selector);
				//				ht_q.put('signature',
				//					self_public_.get_query_params_signature(ht_q));
				var s_progfte=raudrohi.lang.ht2ProgFTE(ht_q);
				ht_q.put('ht_selector',ht_tmp);
				return s_progfte;
			} catch (err){
				raudrohi.tmg('26870919-f84e-4ea2-a497-6150a0219bd7',err);
			} // catch
		} // serialize_query_ht


		this.destroy=function(ht_q){
			try{
				self_public_.verify_bin_query_ht(ht_q);
				raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_q.get('ht_selector'))
				raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_q);
			} catch (err){
				raudrohi.tmg('454b6520-f7de-4e4c-a197-6150a0219bd7',err);
			} // catch
		} // destroy

	} catch (err){
		raudrohi.tmg('cecae120-a16f-44ae-a397-6150a0219bd7',err);
	} // catch
} // raudrohi.dbcomm.dbq1
raudrohi.dbcomm.dbq1=new raudrohi.dbcomm.dbq1();


//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
