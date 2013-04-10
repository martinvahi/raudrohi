//=========================================================================
//
//if(window.raudrohi_cache_exists!==true){
//	window.raudrohi.widgets.g1.cache={};
//	window.raudrohi_cache_exists=true;
//} // if
//-------------------------------------------------------------------------

// The idea is that a same object, let's say, a record, can
// have multiple indices. Also, a data source may be other than the
// server. If it is a server, then a widget that is a gate to a server,
// is used for the data source.
raudrohi.widgets.g1.multiindex_cache_t1=function(s_html_id,
	s_datasource_widget_phone_number, s_datasource_widget_receiver_command){
	try{
		if(raudrohi_settings_debug_JavaScript===true){
			raudrohi.base.assert_isString(
				s_html_id,'s_html_id',
				'a2bc5a8b-11ac-459f-82b0-4360a0219bd7');
			raudrohi.base.assert_isString(
				s_datasource_widget_phone_number,'s_datasource_widget_phone_number',
				'8189dfa5-1629-461a-a310-4360a0219bd7');
			raudrohi.base.assert_isString(
				s_datasource_widget_receiver_command,'s_datasource_widget_receiver_command',
				'044b5fc6-272b-4dde-9510-4360a0219bd7');
		} // if
		var self_public_=this;
		var pileofmethods_t1_=new raudrohi.widgets.g1.pileofmethods_t1(
			self_public_,'',s_html_id);
		var prc_=self_public_.private_code_;
		prc_.self_is_graphical_widget_=false;
		var s_datasource_widget_phone_number_=s_datasource_widget_phone_number;
		var s_datasource_widget_receiver_command_=s_datasource_widget_receiver_command;

		// Downoad initialization is triggered from outside of
		// this widget anyway.
		self_public_.startup_sequence_init();

		// key==<index name>
		// value==<a hash table that implements the index>
		var ht_indices_=new Hashtable();

		// key==<index name>
		// value==<a hash table that implements the complement set of the index>
		// (http://mathworld.wolfram.com/ComplementSet.html )
		// The idea is that one also caches the knowledge that the database
		// or, in general, a datasource, does not contain something, i.e.
		// one caches datasource answers of type "data not found".
		var ht_indices_complement_sets_=new Hashtable();

		// key==<request signature string>
		// value==<array of received microsession packets>
		// The request signatures are returned by the datasource
		// with the answer to the request.
		//
		// To make sure that
		// the index name and request values do not intervene
		// with eachother, the request signature string is actually
		// a ProgFTE string of a hashtable that has the 2 things
		// stored in eachother.
		//
		// For example, if one were to concat the index name and request value,
		// one may have collisions like this:
		//
		// index_name=="name_vowel" request=="base_2"
		//   ignature=="name_vowel_base_2"
		// index_name=="name" request=="_vowel_base_2"
		//   ignature=="name_vowel_base_2"
		//
		// So, a ProgFTE format (or JSON or almost whatever
		// structured text sformat) is a fool-proof way to create a
		// unique signature.
		//
		// The values of the hashtables are arrays in stead of
		// just values, because because there might
		// be multiple widgets that have the same request signature.
		//
		// Microsession packets are used because one wants
		// to dismiss results that come in too late.
		// The microsessions semi-automatically handle that.
		var ht_pending_requests_=new Hashtable();


		// Clears the cache, so that the indices remain declared.
		this.clear=function(){
			try{
				ht_pending_requests_.clear();
				// The for-loop that clears index hashtables
				// is only due to a hope that by emptying the
				// cache indices, the JavaScript garbage collection
				// is able to do its job, should the garbage collection
				// be implemented with the typical, web-style,
				// script-kiddie mentality. (As of 2010 I wonder,
				// how long will it take, till the web development ends
				// being the porno of sotware development... )
				var keys=ht_indices_.keys();
				var len=keys.length;
				var key;
				var reference_to_the_value;
				for(var i=0;i<len;i++){
					key=keys[i];
					reference_to_the_value=ht_indices_.get(key);
					reference_to_the_value.clear();
					reference_to_the_value=ht_indices_complement_sets_.get(key);
					reference_to_the_value.clear();
				} // for
				ht_indices_.clear();
			} catch (err){
				raudrohi.tmg('5d0e0eb1-0836-400f-8330-4360a0219bd7',err);
			} // catch
		} // clear

		// Creates a new, empty, index. If the index with the given
		// name already exists, an exception is thrown. The peculiarity
		// of this cahce is that there can be more than one index.
		this.declare_index=function(s_index_name){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(
						s_index_name,'s_index_name',
						'21e60621-91fa-4c8a-ae30-4360a0219bd7');
					if (ht_indices_.containsKey(s_index_name)===true){
						raudrohi.tmg('bd34ad18-47a2-4f2f-bef0-4360a0219bd7',
							'Index with a name of "'+s_index_name+
							'" has already been declared.');
					} // if
				} // if
				var ht_new_index=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
				ht_indices_.put(s_index_name,ht_new_index);
				var ht_new_index_complement_set=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
				ht_indices_complement_sets_.put(s_index_name,
					ht_new_index_complement_set);
			} catch (err){
				raudrohi.tmg('71152102-2f47-4dcf-8ae0-4360a0219bd7',err);
			} // catch
		} // declare_index

		// Subject to overriding.
		this.insert_data_2_indices=function(ht_indices,x_data){
			try{
				raudrohi.tmg('b4ba2630-1fd3-4835-8350-4360a0219bd7',
					'This method is meant to be overridden, because the insertion '+
					'of data to the set of indices is application specific. ');
			} catch (err){
				raudrohi.tmg('1d3924de-3d22-4236-86ef-4360a0219bd7',err);
			} // catch
		} // insert_data_2_indices

		// Optionally subject to overriding.
		//
		// The idea is that datasource sends the data to the JavaScript side
		// always as a string, but if one uses the data in some other
		// form, then one has to convert the string to that ohter form,
		// but if one caches the data, then it does not make sense to
		// re-do the conversion every time the cached value is returned
		// from the cache. So, that's why it's computationally savy to
		// do the conversion prior to storing the value to the cache.
		//
		// It's not compulsory to override this method, because if it is
		// not overridden, the "raw" strings that the datasource sent, are cached.
		this.convert_datasource_sent_datastring_to_cachable_form=function(s_data){
			try{
				var x_out=s_data;
				return x_out;
			} catch (err){
				raudrohi.tmg('4c9f16d5-9889-4a4b-914f-4360a0219bd7',err);
			} // catch
		} // convert_datasource_sent_datastring_to_cachable_form

		// The ht_query_response_from_cachehas the following pairs:
		// The x_data is allowed to be null.
		function send_response_to_query_initiator(ht_wrapper_with_query,x_data,b_data_found){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isObject(
						ht_wrapper_with_query,'ht_wrapper_with_query',
						'53389c75-ef0d-4de6-9b1f-4360a0219bd7');
				// It's OK for the x_data to be null,
				// if b_data_found==true, because may be the null is the
				// answer. One just does not know the usages well enough
				// yet.
				} // if
				var ht_query=ht_wrapper_with_query.get('data');
				ht_query.put('b_data_found',b_data_found);
				ht_query.put('data',x_data);
				prc_.threadjump_send_reply(ht_wrapper_with_query);
			} catch (err){
				raudrohi.tmg('7344729d-06f4-4355-8d3f-4360a0219bd7',err);
			} // catch
		} // send_response_to_query_initiator

		this.thrjr_.receive_from_datasource=function(ht_wrapper){
			try{
				var ht_data_from_datasource=ht_wrapper.get('data');
				var s_b_data_found=ht_data_from_datasource.get('b_data_found');
				var s_index_name=ht_data_from_datasource.get('s_index_name');
				var s_query=ht_data_from_datasource.get('s_query');
				var b_data_found=raudrohi.core.str2bool(s_b_data_found);
				var x_data="";
				if (b_data_found===true){
					var s_data=ht_data_from_datasource.get('data');
					x_data=self_public_.convert_datasource_sent_datastring_to_cachable_form(s_data);
					self_public_.insert_data_2_indices(ht_indices_,x_data);
				} else {
					var ht_index_complement_set=ht_indices_complement_sets_.get(s_index_name);
					ht_index_complement_set.put(s_query,x_data);
				} // else
				var s_query_signature=ht_data_from_datasource.get(
					's_query_signature');
				var ar=ht_pending_requests_.get(s_query_signature);
				ht_pending_requests_.remove(s_query_signature);
				var len=ar.length;
				var i=0;
				var ht_wrapper_that_initiated_the_query;
				for(i=0;i<len;i++){
					ht_wrapper_that_initiated_the_query=ar[i];
					send_response_to_query_initiator(ht_wrapper_that_initiated_the_query,
						x_data,b_data_found);
				} // for
				raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_wrapper);
			} catch (err){
				raudrohi.tmg('593c5615-819c-4193-ba4f-4360a0219bd7',err);
			} // catch
		} // thrjr_.receive_from_datasource


		// Submits a query to the cache and the cahce.
		// The data field is expected to contain a hashtable
		// with keys: "s_index_name", "s_query"
		//
		// The response will be a hashtable with the keys of
		//            "s_index_name", "s_query", "data", "b_data_found"
		this.thrjr_.get=function(ht_wrapper){
			try{
				var ht_query=ht_wrapper.get('data');
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isObject(
						ht_query,'ht_query',
						'25894671-bec1-4247-8e3f-4360a0219bd7');
				} // if
				var s_index_name=ht_query.get('s_index_name');
				if(raudrohi_settings_debug_JavaScript===true){
					if (ht_indices_.containsKey(s_index_name)===false){
						raudrohi.tmg('15c03e61-9168-41df-821f-4360a0219bd7',
							'Index with a name of "'+s_index_name+
							'" has not been declared.');
					} // if
				} // if
				var s_query=ht_query.get('s_query');
				var ht_index=ht_indices_.get(s_index_name);
				var x_data=null;
				if (ht_index.containsKey(s_query)===true){
					x_data=ht_index.get(s_query);
					send_response_to_query_initiator(ht_wrapper,x_data,true);
					return;
				} // if
				var ht_index_complement_set=ht_indices_complement_sets_.get(s_index_name);
				if (ht_index_complement_set.containsKey(s_query)===true){
					x_data=ht_index_complement_set.get(s_query);
					send_response_to_query_initiator(ht_wrapper,x_data,false);
					return;
				} // if
				var s_query_signature=raudrohi.lang.ht2ProgFTE(ht_query);
				var ar=null;
				if (ht_pending_requests_.containsKey(s_query_signature)===true){
					ar=ht_pending_requests_.get(s_query_signature);
				} else {
					ar=[];
					ht_pending_requests_.put(s_query_signature,ar);
				} // else
				ar.push(ht_wrapper);
				var ht_data_2_datasource=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
				ht_data_2_datasource.put('s_query_signature',s_query_signature);
				ht_data_2_datasource.put('s_query',s_query);
				ht_data_2_datasource.put('s_index_name',s_index_name);
				prc_.threadjump_send(s_datasource_widget_phone_number_,
					s_datasource_widget_receiver_command_,
					ht_data_2_datasource, 'receive_from_datasource');
			} catch (err){
				raudrohi.tmg('5d42d051-074c-4240-b71f-4360a0219bd7',err);
			} // catch
		} // thrjr_.get

	} catch (err){
		raudrohi.tmg('39f9d235-35bd-4838-a23f-4360a0219bd7',err);
	} // catch
} // raudrohi.widgets.g1.multiindex_cache_t1
