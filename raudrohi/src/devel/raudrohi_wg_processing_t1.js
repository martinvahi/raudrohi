//------------------------------------------------------------------------
// Copyright (c) 2011, martin.vahi@softf1.com that has an
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

if(window.raudrohi_wg_processing_t1_exists!==true){
	window.raudrohi.wg_processing_t1={};
	window.raudrohi_wg_processing_t1_exists=true;
} // if
//------------------------------------------------------------------------
raudrohi.wg_processing_t1.lc_s_sb_t="t";
raudrohi.wg_processing_t1.lc_s_sb_f="f";
raudrohi.wg_processing_t1.lc_s_b_prefix="b_";
raudrohi.wg_processing_t1.lc_s_dbf_sb_prefix="dbf_sb_";
raudrohi.wg_processing_t1.lc_s_dbf_prefix="dbf_";
raudrohi.wg_processing_t1.lc_s_i_prefix="i_";
raudrohi.wg_processing_t1.lc_s_dbf_i_prefix="dbf_i_";
raudrohi.wg_processing_t1.lc_s_setsuffix="_set";

// Returns a string.
raudrohi.wg_processing_t1.s_key_field_set=function(ob_widget){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ob_widget,'ob_widget',
				'581436d1-e07c-4a03-9d10-1180a0219bd7');
		} // if
		var s_out=raudrohi.wg_processing_t1.lc_s_dbf_sb_prefix+
		ob_widget.s_field_name_in_parent+
		raudrohi.wg_processing_t1.lc_s_setsuffix;
		return s_out;
	} catch (err){
		raudrohi.tmg('5f608c63-0fba-45f4-a110-1180a0219bd7',err);
	} // catch
} // s_key_field_set

raudrohi.wg_processing_t1.s_key_subfield_set=function(ob_widget,
	s_subfield_name){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ob_widget,'ob_widget',
				'2859ba11-89f5-475d-ae5f-1180a0219bd7');
			raudrohi.base.assert_isString(s_subfield_name,'s_subfield_name',
				'4baa3561-b5de-4d2f-851f-1180a0219bd7');
		} // if
		var x_hack={};
		x_hack.s_field_name_in_parent=ob_widget.s_field_name_in_parent+
		"_"+s_subfield_name;
		var s_key_subfield_set=raudrohi.wg_processing_t1.s_key_field_set(x_hack);
		return s_key_subfield_set;
	} catch (err){
		raudrohi.tmg('0132a08e-cbc8-44f8-80cf-1180a0219bd7',err);
	} // catch
} // raudrohi.wg_processing_t1.s_key_subfield_set

// Returns a string.
raudrohi.wg_processing_t1.s_key_field=function(ob_widget){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ob_widget,'ob_widget',
				'a52f1a91-f371-425e-bb3f-1180a0219bd7');
		} // if
		var s_out=raudrohi.wg_processing_t1.lc_s_dbf_prefix+
		ob_widget.s_field_name_in_parent;
		return s_out;
	} catch (err){
		raudrohi.tmg('a1c52829-571b-4a8a-b74f-1180a0219bd7',err);
	} // catch
} // s_key_field

raudrohi.wg_processing_t1.s_key_field_is_fd=function(ob_widget){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ob_widget,'ob_widget',
				'38a4d374-95b4-4457-845f-1180a0219bd7');
		} // if
		var s_field_name=ob_widget.s_field_name_in_parent;
		var s_out=raudrohi.wg_processing_t1.lc_s_dbf_sb_prefix+
		s_field_name+"_is_a_floating_point_number";
		return s_out;
	} catch (err){
		raudrohi.tmg('cd39ff87-2148-48c5-ba7f-1180a0219bd7',err);
	} // catch
} // raudrohi.wg_processing_t1.s_key_field_is_fd_2

raudrohi.wg_processing_t1.dbfcreate_s_t1=function(
	ht_dbf_values,s_field_name,s_string_value,b_trim){
	try{
		b_trim = typeof(b_trim) !== 'undefined' ? b_trim : true;
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ht_dbf_values,'ht_dbf_values',
				'5fb123d3-ebba-4f41-8e2f-1180a0219bd7');
			raudrohi.base.assert_isString(s_field_name,'s_field_name',
				'511004c2-0d6b-4017-ae3f-1180a0219bd7');
			raudrohi.base.assert_isString(s_string_value,'s_string_value',
				'721c7b45-3e31-44f5-963f-1180a0219bd7');
			raudrohi.base.assert_isBoolean(b_trim,'b_trim',
				'c23b82dd-ba32-41e0-941f-1180a0219bd7');
		} // if
		var s0=null;
		if(b_trim===true){
			s0=""+raudrohi.adapter.trim(s_string_value);
		} else {
			s0=""+s_string_value;
		} // else
		ht_dbf_values.put(raudrohi.wg_processing_t1.lc_s_dbf_prefix+
			s_field_name,s0);
		var s_key_field_set=raudrohi.wg_processing_t1.lc_s_dbf_sb_prefix+
		s_field_name+raudrohi.wg_processing_t1.lc_s_setsuffix;
		if(0<s0.length){
			ht_dbf_values.put(s_key_field_set,""+
				raudrohi.wg_processing_t1.lc_s_sb_t);
		}else{
			ht_dbf_values.put(s_key_field_set,""+
				raudrohi.wg_processing_t1.lc_s_sb_f);
		} // else
	} catch (err){
		raudrohi.tmg('49f72033-96be-44d8-882f-1180a0219bd7',err);
	} // catch
} // raudrohi.wg_processing_t1.dbfcreate_s_t1

raudrohi.wg_processing_t1.dbfcreate_s_fd_t1=function(
	ht_dbf_values,s_field_name,s_whole_number_candidate,b_trim){
	try{
		b_trim = typeof(b_trim) !== 'undefined' ? b_trim : true;
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ht_dbf_values,'ht_dbf_values',
				'c25152f9-5a71-493d-8d5f-1180a0219bd7');
			raudrohi.base.assert_isString(s_field_name,'s_field_name',
				'223abe73-b8b7-42ce-8e3e-1180a0219bd7');
			raudrohi.base.assert_isNumber(s_whole_number_candidate,
				's_whole_number_candidate',
				'554d5d1c-a17c-428e-ab9e-1180a0219bd7');
			raudrohi.base.assert_isBoolean(b_trim,'b_trim',
				'82281efc-738f-4309-ac2e-1180a0219bd7');
		} // if
		var s0=null;
		if(b_trim===true){
			s0=""+raudrohi.adapter.trim(s_whole_number_candidate);
		} else {
			s0=""+s_whole_number_candidate;
		} // else
		ht_dbf_values.put(raudrohi.wg_processing_t1.lc_sprefix+
			s_field_name,s0);
		// The b_blabla_set is probably reevaluated at the
		// db side, but it's still inserted to the hashtable
		// to allow JavaScript side to use it, should there be a
		// need for it.
		var s_key_field_set=raudrohi.wg_processing_t1.lc_s_b_prefix+
		s_field_name+raudrohi.wg_processing_t1.lc_s_setsuffix;
		var s_key_field_is_fd="s_b_"+s_field_name+"_is_a_floating_point_number";
		if(0<s0.length){
			ht_dbf_values.put(s_key_field_set,""+
				raudrohi.wg_processing_t1.lc_s_sb_t);
			var ht_tmp=raudrohi.base.string2float(s0);
			if((ht_tmp.get('b_failure'))===true){
				ht_dbf_values.put(s_key_field_is_fd,""+
					raudrohi.wg_processing_t1.lc_s_sb_f);
			} else {
				ht_dbf_values.put(s_key_field_is_fd,""+
					raudrohi.wg_processing_t1.lc_s_sb_t);
			} // else
			raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_tmp);
		}else{
			ht_dbf_values.put(s_key_field_set,""+
				raudrohi.wg_processing_t1.lc_s_sb_f);
			ht_dbf_values.put(s_key_field_is_fd,""+
				raudrohi.wg_processing_t1.lc_s_sb_f);
		} // else
	} catch (err){
		raudrohi.tmg('782408f2-05ea-43de-8f1e-1180a0219bd7',err);
	} // catch
} // raudrohi.wg_processing_t1.dbfcreate_s_fd_t1


//------------------------------------------------------------------------
raudrohi.wg_processing_t1.dbfcreate_textarea_t1=function(
	ht_dbf_values,ob_widget_of_type_textarea_t1,b_trim){
	try{
		b_trim = typeof(b_trim) !== 'undefined' ? b_trim : true;
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ht_dbf_values,'ht_dbf_values',
				'84e72f74-602a-43f4-b64e-1180a0219bd7');
			raudrohi.base.assert_isObject(ob_widget_of_type_textarea_t1,
				'ob_widget_of_type_textarea_t1',
				'71c062f4-7c7e-412c-b52e-1180a0219bd7');
			raudrohi.base.assert_isBoolean(b_trim,'b_trim',
				'4dac7d51-3f75-4bab-af4e-1180a0219bd7');
		} // if
		var s0=ob_widget_of_type_textarea_t1.get_content();
		raudrohi.wg_processing_t1.dbfcreate_s_t1(ht_dbf_values,
			ob_widget_of_type_textarea_t1.s_field_name_in_parent,
			s0,b_trim);
	} catch (err){
		raudrohi.tmg('81eab0fe-3d76-4126-851e-1180a0219bd7',err);
	} // catch
} // raudrohi.wg_processing_t1.dbfcreate_textarea_t1

raudrohi.wg_processing_t1.dbfcreate_menu_t1=function(
	ht_dbf_values,ob_widget_of_type_menu_t1,b_trim){
	try{
		b_trim = typeof(b_trim) !== 'undefined' ? b_trim : true;
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ht_dbf_values,'ht_dbf_values',
				'46aab063-6283-4df3-ba2e-1180a0219bd7');
			raudrohi.base.assert_isObject(ob_widget_of_type_menu_t1,
				'ob_widget_of_type_menu_t1',
				'35a7a7e1-84fa-4e51-9f2e-1180a0219bd7');
			raudrohi.base.assert_isBoolean(b_trim,'b_trim',
				'24b29961-5c60-4436-a51e-1180a0219bd7');
		} // if
		var mi=ob_widget_of_type_menu_t1.get_selected_menuitem();
		var s_key_field_set=raudrohi.wg_processing_t1.s_key_field_set(
			ob_widget_of_type_menu_t1);
		var s_key_field=raudrohi.wg_processing_t1.s_key_field(
			ob_widget_of_type_menu_t1);
		if(mi===null){
			ht_dbf_values.put(s_key_field_set,
				""+raudrohi.wg_processing_t1.lc_s_sb_f);
			ht_dbf_values.put(s_key_field,"");
			return;
		}else{
			ht_dbf_values.put(s_key_field_set,""+
				raudrohi.wg_processing_t1.lc_s_sb_t);
		} // else

		var s0=""+mi.value;
		var s1=null;
		if(b_trim===true){
			s1=raudrohi.adapter.trim(s0);
		} else {
			s1=s0;
		} // else
		ht_dbf_values.put(s_key_field,s1);
	} catch (err){
		raudrohi.tmg('4bb019f4-f045-4480-9e1d-1180a0219bd7',err);
	} // catch
} // raudrohi.wg_processing_t1.dbfcreate_menu_t1


raudrohi.wg_processing_t1.dbfcreate_partialmenu_t1=function(
	ht_dbf_values,ob_widget_of_type_partialmenu_t1,b_trim){
	try{
		b_trim = typeof(b_trim) !== 'undefined' ? b_trim : true;
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ht_dbf_values,'ht_dbf_values',
				'5e5cb405-92ad-4c23-851d-1180a0219bd7');
			raudrohi.base.assert_isObject(ob_widget_of_type_partialmenu_t1,
				'ob_widget_of_type_partialmenu_t1',
				'5fec3822-4d5d-45a9-bd5d-1180a0219bd7');
			raudrohi.base.assert_isBoolean(b_trim,'b_trim',
				'b20e4c05-370b-4ab3-9f3d-1180a0219bd7');
		} // if
		var ob_widget=ob_widget_of_type_partialmenu_t1;
		var s_key_field_set=raudrohi.wg_processing_t1.s_key_field_set(
			ob_widget);
		var s_key_field_set_s_label2=raudrohi.wg_processing_t1.s_key_field_set(
			ob_widget)+"_s_label2";
		var s_key_s_labelX_prefix=raudrohi.wg_processing_t1.s_key_field(
			ob_widget);
		var s_key_s_label1=s_key_s_labelX_prefix+"_s_label1";
		var s_key_s_label2=s_key_s_labelX_prefix+"_s_label2";
		var ht=ob_widget.get_content();
		if(ht===null){
			ht_dbf_values.put(s_key_field_set,
				""+raudrohi.wg_processing_t1.lc_s_sb_f);
			ht_dbf_values.put(s_key_field_set_s_label2,
				""+raudrohi.wg_processing_t1.lc_s_sb_f);
			ht_dbf_values.put(s_key_s_label1,"");
			ht_dbf_values.put(s_key_s_label2,"");
			return;
		}else{
			ht_dbf_values.put(s_key_field_set,""+
				raudrohi.wg_processing_t1.lc_s_sb_t);
		} // else

		var s0=null;
		var s1=ht.get("s_label1");
		var s2=ht.get("s_label2");
		if(b_trim===true){
			s0=raudrohi.adapter.trim(s1);
			s1=s0;
			s0=raudrohi.adapter.trim(s2);
			s2=s0;
		} // if
		ht_dbf_values.put(s_key_s_label1,s1);
		ht_dbf_values.put(s_key_s_label2,s2);
		raudrohi.base.pool_of_hashtables.return_used_hashtable(ht);
		if(0<s2.length){
			ht_dbf_values.put(s_key_field_set_s_label2,
				""+raudrohi.wg_processing_t1.lc_s_sb_t);
		}else{
			ht_dbf_values.put(s_key_field_set_s_label2,
				""+raudrohi.wg_processing_t1.lc_s_sb_f);
		} // else
	} catch (err){
		raudrohi.tmg('4781a504-64fa-4107-9c1d-1180a0219bd7',err);
	} // catch
} // raudrohi.wg_processing_t1.dbfcreate_partialmenu_t1


raudrohi.wg_processing_t1.dbfcreate_partialmenu_t1_fd=function(
	ht_dbf_values,ob_widget_of_type_partialmenu_t1,b_trim){
	try{
		b_trim = typeof(b_trim) !== 'undefined' ? b_trim : true;
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ht_dbf_values,'ht_dbf_values',
				'370d8c12-6a5f-4e54-853d-1180a0219bd7');
			raudrohi.base.assert_isObject(ob_widget_of_type_partialmenu_t1,
				'ob_widget_of_type_partialmenu_t1',
				'2e7e8262-51bc-48c3-831d-1180a0219bd7');
			raudrohi.base.assert_isBoolean(b_trim,'b_trim',
				'1e16c734-a5bf-4dfa-a53d-1180a0219bd7');
		} // if
		var ob_widget=ob_widget_of_type_partialmenu_t1;
		raudrohi.wg_processing_t1.dbfcreate_partialmenu_t1(ht_dbf_values,
			ob_widget,b_trim);
		var s_key_field_is_fd_s_label2=raudrohi.wg_processing_t1.s_key_field_is_fd(
			ob_widget)+"_s_label2";

		var s_key_field_set=raudrohi.wg_processing_t1.s_key_field_set(
			ob_widget);
		if(ht_dbf_values.get(s_key_field_set)===false){
			ht_dbf_values.put(s_key_field_is_fd_s_label2,
				""+raudrohi.wg_processing_t1.lc_s_sb_f);
			return;
		} // else

		var s_key_field_set_s_label2=raudrohi.wg_processing_t1.s_key_field_set(
			ob_widget)+"_s_label2";
		if(ht_dbf_values.get(s_key_field_set_s_label2)===false){
			ht_dbf_values.put(s_key_field_is_fd_s_label2,
				""+raudrohi.wg_processing_t1.lc_s_sb_f);
			return;
		} // else

		var s_key_field_s_label2=raudrohi.wg_processing_t1.s_key_field(
			ob_widget)+"_s_label2";
		var s_label2=ht_dbf_values.get(s_key_field_s_label2);

		var ht=raudrohi.base.string2float(s_label2);
		if((ht.get('b_failure'))===true){
			ht_dbf_values.put(s_key_field_is_fd_s_label2,
				""+raudrohi.wg_processing_t1.lc_s_sb_f);
		} else {
			ht_dbf_values.put(s_key_field_is_fd_s_label2,
				""+raudrohi.wg_processing_t1.lc_s_sb_t);
		} // else
		raudrohi.base.pool_of_hashtables.return_used_hashtable(ht);
	} catch (err){
		raudrohi.tmg('303d9464-f047-4270-922d-1180a0219bd7',err);
	} // catch
} // raudrohi.wg_processing_t1.dbfcreate_partialmenu_t1_fd

//------------------------------------------------------------------------
// Returns a boolean.
raudrohi.wg_processing_t1.b_subfield_set=function(ob_widget,s_subfield_name,
	ht_dbf_values){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ob_widget,'ob_widget',
				'4920bcf4-8c1b-4097-924d-1180a0219bd7');
			raudrohi.base.assert_isString(s_subfield_name,'s_subfield_name',
				'411ac791-0d34-452d-913d-1180a0219bd7');
			raudrohi.base.assert_isObject(ht_dbf_values,'ht_dbf_values',
				'34b0ef31-c5c9-4340-8e3c-1180a0219bd7');
			if(s_subfield_name.length==0){
				raudrohi.tmg('591cdfb5-8a91-4e4e-b04c-1180a0219bd7',
					"s_subfield_name.length==0");
			} // if
		} // if
		var x_hack={};
		x_hack.s_field_name_in_parent=ob_widget.s_field_name_in_parent+
		"_"+s_subfield_name;
		var s_key_field_set=raudrohi.wg_processing_t1.s_key_field_set(x_hack);
		if(ht_dbf_values.containsKey(s_key_field_set)===false){
			if(raudrohi.settings.debug_JavaScript===true){
				raudrohi.tmg('487d6ef3-2763-49a7-b91c-1180a0219bd7',
					"Field \""+s_key_field_set+"\" is missing from the "+
					"content collection.");
			} else{
				return false; // It's not so bad that one should totally crash.
			} // else
		} // if
		var b_out=false;
		if(ht_dbf_values.get(s_key_field_set)==="true"){
			b_out=true;
		} // if
		return b_out;
	} catch (err){
		raudrohi.tmg('85394919-28c6-4498-9e5c-1180a0219bd7',err);
	} // catch
} // raudrohi.wg_processing_t1.b_subfield_set

// It crashes, if the field does not exist. Client
// code can count on the crashing. In the context of
// this method, actually, the in the context of the wg_processing_t1
// in general, fields can exist without being set.
raudrohi.wg_processing_t1.get_subfield=function(ob_widget,s_subfield_name,
	ht_dbf_values){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ob_widget,'ob_widget',
				'51e9f6e5-c496-4118-b85c-1180a0219bd7');
			raudrohi.base.assert_isString(s_subfield_name,'s_subfield_name',
				'23d38a64-004d-4ef5-9f1c-1180a0219bd7');
			raudrohi.base.assert_isObject(ht_dbf_values,'ht_dbf_values',
				'f84366e6-88c9-4e82-ba2c-1180a0219bd7');
			if(s_subfield_name.length==0){
				raudrohi.tmg('046d3470-af5c-4022-815c-1180a0219bd7',
					"s_subfield_name.length==0");
			} // if
		} // if
		var x_hack={};
		x_hack.s_field_name_in_parent=ob_widget.s_field_name_in_parent+
		"_"+s_subfield_name;
		var s_key_field=raudrohi.wg_processing_t1.s_key_field(x_hack);
		if(ht_dbf_values.containsKey(s_key_field)===false){
			raudrohi.tmg('3e9cc5e1-9c6d-4983-b71c-1180a0219bd7',
				"Field \""+s_key_field+"\" is missing from the "+
				"content collection.");
		} // if
		var x_out=ht_dbf_values.get(s_key_field);
		return x_out;
	} catch (err){
		raudrohi.tmg('c43c7195-6d43-4598-bb2c-1180a0219bd7',err);
	} // catch
} // raudrohi.wg_processing_t1.get_subfield

//------------------------------------------------------------------------

raudrohi.wg_processing_t1.veriff_sb_t_t1=function(
	ht_content,s_key,s_err_msg){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ht_content,'ht_content',
				'5f16cd25-52b6-488c-962c-1180a0219bd7');
			raudrohi.base.assert_isString(s_key,'s_key',
				'53ecc2c2-dc37-46b0-974b-1180a0219bd7');
			raudrohi.base.assert_isString(s_err_msg,'s_err_msg',
				'5fe08ef2-d2da-46d7-bf3b-1180a0219bd7');
			if(ht_content.containsKey(s_key)!==true){
				raudrohi.tmg('37a4c95e-5310-4ef9-83fb-1180a0219bd7',
					'ht_content does not contain key s_key=="'+s_key+'".');
			} // if
		} // if
		var x_out={};
		x_out.b_verification_failed=false;
		x_out.s_msg="";
		var s0=ht_content.get(s_key);
		if(s0!='t'){
			x_out.b_verification_failed=true;
			x_out.s_msg=s_err_msg;
		} // if
		return x_out;
	} catch (err){
		raudrohi.tmg('13cf8324-7b60-4d8e-882b-1180a0219bd7',err);
	} // catch
} // raudrohi.wg_processing_t1.veriff_sb_t_t1

raudrohi.wg_processing_t1.veriff_txt_fd_t1=function(
	ht_content,s_key,s_err_msg){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ht_content,'ht_content',
				'55d3d114-421c-45b2-a94b-1180a0219bd7');
			raudrohi.base.assert_isString(s_key,'s_key',
				'b7581633-a9f3-437d-b62b-1180a0219bd7');
			raudrohi.base.assert_isString(s_err_msg,'s_err_msg',
				'490856c3-a819-4407-ae4b-1180a0219bd7');
			if(ht_content.containsKey(s_key)!==true){
				raudrohi.tmg('1f35c5f3-a213-4775-8e4b-1180a0219bd7',
					'ht_content does not contain key s_key=="'+s_key+'".');
			} // if
		} // if
		var x_out={};
		x_out.s_msg="";
		var s0=ht_content.get(s_key);
		var ht_fl=raudrohi.base.string2float(s0);
		x_out.b_verification_failed=ht_fl.get('b_failure');
		raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_fl);
		if(x_out.b_verification_failed!==false){
			x_out.s_msg=s_err_msg;
		} // if
		return x_out;
	} catch (err){
		raudrohi.tmg('27839d83-05b4-49e7-983b-1180a0219bd7',err);
	} // catch
} // raudrohi.wg_processing_t1.veriff_txt_fd_t1

//------------------------------------------------------------------------
