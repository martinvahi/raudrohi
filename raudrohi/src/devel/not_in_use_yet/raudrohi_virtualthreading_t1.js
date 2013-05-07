//=========================================================================
//
// The only reason for the virtual threading is to enable an implementation
// of a sleep function that stops a tread, in this case, a virtual thread, 
// without just blatently burning CPU cycles.
//
// The sleep function enables one to implement critical sections and mutexes.
//
// The threading can probably be useful for implementing a widget 
// framework that copes properly with the background rendering of the DOM. 
// For example, may be something in the lines of the subwidgets notifying the
// parent widget of their readyness for their DOM to be erased and the
// parent widget then waits till the "recursive YES" arrives to it.
//
//-------------------------------------------------------------------------
if(window.raudrohi_exists!==true){
	window.raudrohi={};
	window.raudrohi_exists=true;
	raudrohi.virtualthreading_t1.b_is_used_in_a_selfcontained_mode=true;
	raudrohi.tmg=function(s_GUID,err){
		throw "\n\""+s_GUID+"\":\n"+err+"\n";
	} // tmg
} else {
	raudrohi.virtualthreading_t1.b_is_used_in_a_selfcontained_mode=false;
} // else

if(window.raudrohi_virtualthreading_t1_exists!==true){
	window.raudrohi.virtualthreading_t1={};
	window.raudrohi_virtualthreading_t1_exists=true;
} // if
if(window.raudrohi_virtualthreading_t1_selftests!==true){
	raudrohi.virtualthreading_t1.selftests={};
	window.raudrohi_virtualthreading_t1_selftests=true;
} // if

if(window.raudrohi_virtualthreading_t1_private_code_exists!==true){
	window.raudrohi.virtualthreading_t1.private_code={};
	window.raudrohi_virtualthreading_t1_private_code_exists=true;
} // if
if(window.raudrohi_virtualthreading_t1_private_code_selftests_exists!==true){
	window.raudrohi.virtualthreading_t1.private_code.selftests={};
	window.raudrohi_virtualthreading_t1_private_code_selftests_exists=true;
} // if

//------------------------------------------------------------------------

// TODO: implement a proper Hashtable before starting to 
// implement the virtual threading. One needs some very-very-very fast
// hashing here. May be even some special-purpose hashtable-like 
// data structure has to be designed. Think a little bit about the
// math, how to guarantee the proper order of the function execution, etc.
//
// TODO: also make this whole file selfcontained.

raudrohi.virtualthreading_t1.func_declr=function(s_subroutine_name,
	s_GUID,f_the_function_subject_to_wrapping){
	try{
		if(raudrohi.virtualthreading_t1.b_is_used_in_a_selfcontained_mode===false){
			if(raudrohi_settings_debug_JavaScript===true){
				raudrohi.base.assert_isObject(s_subroutine_name, 's_subroutine_name',
					'e0b84e12-db70-41a1-911c-2350a0219bd7');
				raudrohi.base.assert_isString(s_GUID, 's_GUID',
					'b7c2451d-304d-4864-a41c-2350a0219bd7');
				raudrohi.base.assert_isFunction(f_the_function_subject_to_wrapping,
					'f_the_function_subject_to_wrapping',
					'9c03f018-642f-49f0-930c-2350a0219bd7');
				var b=raudrohi.base.string_contains_spacestabs(s_subroutine_name);
				if (b!==false){
					raudrohi.tmg('fa78b912-f688-4d27-850c-2350a0219bd7',
						's_subroutine_name=="'+s_subroutine_name+
						'" contains either spaces or tabs.');
				} // if
				if (s_subroutine_name.length==0){
					raudrohi.tmg('dd3b1025-9b55-450b-a20c-2350a0219bd7',
						's_field_name_suffix.length==0');
				} // if
			} // if
		} // if
	} catch (err){
		raudrohi.tmg('ad457d23-b90e-4cec-b20c-2350a0219bd7',err);
	} // catch
} // raudrohi.virtualthreading_t1.private_code.input_verification_t1

//------------------------------------------------------------------------
