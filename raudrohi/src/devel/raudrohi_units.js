//=========================================================================

//-------------------------------------------------------------------------
raudrohi.units_default_conversion_functions_instantiator=function(){
	try{
		var self_public_=this;

		function declr_funcs_density(ar_function_declarations){
			try{
				var ob_declaration={};

				// Units for Vim or Emacs based semiautomated editing:
				// 't/(m^3)'
				// 'kg/(m^3)'
				// 'kg/l'
				// 'g/l'
				// 'g/(cm^3)'
				// 'mg/l'
				// 'mg/(cm^3)'

				//-----
				ob_declaration={};
				ob_declaration.func=function(fd_origin_value){
					var fd_out=fd_origin_value*1000.0;
					return fd_out;
				};
				ob_declaration.s_origin_unit='t/(m^3)';
				ob_declaration.s_destination_unit='kg/(m^3)';
				ob_declaration.b_origin_unit_is_Si_unit=false;
				ob_declaration.b_destination_unit_is_Si_unit=true;
				ar_function_declarations.push(ob_declaration);

				//-----
				ob_declaration={};
				ob_declaration.func=function(fd_origin_value){
					var fd_out=fd_origin_value*1000.0;
					return fd_out;
				};
				ob_declaration.s_origin_unit='kg/l';
				ob_declaration.s_destination_unit='kg/(m^3)';
				ob_declaration.b_origin_unit_is_Si_unit=false;
				ob_declaration.b_destination_unit_is_Si_unit=true;
				ar_function_declarations.push(ob_declaration);

				//-----
				ob_declaration={};
				ob_declaration.func=function(fd_origin_value){
					var fd_out=fd_origin_value*1.0;
					return fd_out;
				};
				ob_declaration.s_origin_unit='g/l';
				ob_declaration.s_destination_unit='kg/(m^3)';
				ob_declaration.b_origin_unit_is_Si_unit=false;
				ob_declaration.b_destination_unit_is_Si_unit=true;
				ar_function_declarations.push(ob_declaration);

				//-----
				ob_declaration={};
				ob_declaration.func=function(fd_origin_value){
					var fd_out=fd_origin_value*1000.0;
					return fd_out;
				};
				ob_declaration.s_origin_unit='g/(cm^3)';
				ob_declaration.s_destination_unit='kg/(m^3)';
				ob_declaration.b_origin_unit_is_Si_unit=false;
				ob_declaration.b_destination_unit_is_Si_unit=true;
				ar_function_declarations.push(ob_declaration);

				//-----
				ob_declaration={};
				ob_declaration.func=function(fd_origin_value){
					var fd_out=fd_origin_value*0.001;
					return fd_out;
				};
				ob_declaration.s_origin_unit='mg/l';
				ob_declaration.s_destination_unit='kg/(m^3)';
				ob_declaration.b_origin_unit_is_Si_unit=false;
				ob_declaration.b_destination_unit_is_Si_unit=true;
				ar_function_declarations.push(ob_declaration);

				//-----
				ob_declaration={};
				ob_declaration.func=function(fd_origin_value){
					var fd_out=fd_origin_value*1.0;
					return fd_out;
				};
				ob_declaration.s_origin_unit='mg/(cm^3)';
				ob_declaration.s_destination_unit='kg/(m^3)';
				ob_declaration.b_origin_unit_is_Si_unit=false;
				ob_declaration.b_destination_unit_is_Si_unit=true;
				ar_function_declarations.push(ob_declaration);

				//----------------------

				//-----
				ob_declaration={};
				ob_declaration.func=function(fd_origin_value){
					var fd_out=fd_origin_value*0.001;
					return fd_out;
				};
				ob_declaration.s_origin_unit='kg/(m^3)';
				ob_declaration.s_destination_unit='t/(m^3)';
				ob_declaration.b_origin_unit_is_Si_unit=true;
				ob_declaration.b_destination_unit_is_Si_unit=false;
				ar_function_declarations.push(ob_declaration);

				//-----
				ob_declaration={};
				ob_declaration.func=function(fd_origin_value){
					var fd_out=fd_origin_value*0.001;
					return fd_out;
				};
				ob_declaration.s_origin_unit='kg/(m^3)';
				ob_declaration.s_destination_unit='kg/l';
				ob_declaration.b_origin_unit_is_Si_unit=true;
				ob_declaration.b_destination_unit_is_Si_unit=false;
				ar_function_declarations.push(ob_declaration);

				//-----
				ob_declaration={};
				ob_declaration.func=function(fd_origin_value){
					var fd_out=fd_origin_value*1.0;
					return fd_out;
				};
				ob_declaration.s_origin_unit='kg/(m^3)';
				ob_declaration.s_destination_unit='g/l';
				ob_declaration.b_origin_unit_is_Si_unit=true;
				ob_declaration.b_destination_unit_is_Si_unit=false;
				ar_function_declarations.push(ob_declaration);

				//-----
				ob_declaration={};
				ob_declaration.func=function(fd_origin_value){
					var fd_out=fd_origin_value*0.001;
					return fd_out;
				};
				ob_declaration.s_origin_unit='kg/(m^3)';
				ob_declaration.s_destination_unit='g/(cm^3)';
				ob_declaration.b_origin_unit_is_Si_unit=true;
				ob_declaration.b_destination_unit_is_Si_unit=false;
				ar_function_declarations.push(ob_declaration);

				//-----
				ob_declaration={};
				ob_declaration.func=function(fd_origin_value){
					var fd_out=fd_origin_value*1000.0;
					return fd_out;
				};
				ob_declaration.s_origin_unit='kg/(m^3)';
				ob_declaration.s_destination_unit='mg/l';
				ob_declaration.b_origin_unit_is_Si_unit=true;
				ob_declaration.b_destination_unit_is_Si_unit=false;
				ar_function_declarations.push(ob_declaration);

				//-----
				ob_declaration={};
				ob_declaration.func=function(fd_origin_value){
					var fd_out=fd_origin_value*1.0;
					return fd_out;
				};
				ob_declaration.s_origin_unit='kg/(m^3)';
				ob_declaration.s_destination_unit='mg/(cm^3)';
				ob_declaration.b_origin_unit_is_Si_unit=true;
				ob_declaration.b_destination_unit_is_Si_unit=false;
				ar_function_declarations.push(ob_declaration);

			} catch (err){
				raudrohi.tmg('c4519610-4d07-4f7b-bf12-9180a0219bd7',err);
			} // catch
		} // declr_funcs_density

		//-----------------------------------------------------------------
		// Returns an array of all conversion function declarations that
		// are present in this instance. Declaration format:
		//
		// ob_declaration={};
		// ob_declaration.func=function(fd_origin_value){/*smart stuff*/};
		// ob_declaration.s_origin_unit='a string'
		// ob_declaration.s_destination_unit='a string'
		// ob_declaration.b_origin_unit_is_Si_unit=//true or false
		// ob_declaration.b_destination_unit_is_Si_unit=//true or false
		this.ar_get_all_default_function_declarations=function(){
			try{
				var ar_function_declarations=[];
				declr_funcs_density(ar_function_declarations);
				return ar_function_declarations;
			} catch (err){
				raudrohi.tmg('1afc4265-23ad-44ff-a332-9180a0219bd7',err);
			} // catch

		} // ar_get_all_default_function_declarations

	//---------------------------------------------------------------------
	} catch (err){
		raudrohi.tmg('334856d4-5d52-47a5-a612-9180a0219bd7',err);
	} // catch
} // raudrohi.units_default_conversion_functions_instantiator


//-------------------------------------------------------------------------
// It handles unit conversion. It uses the same format that the
// Sirel PHP library uses.
//
// To comply with the fact that unit conversion functions
// are not always linear, the architecture of the unit
// conversion framework uses conversion functions in stead
// of conversion constants.
//
//
raudrohi.units=function(){
	try{
		var self_public_=this;
		var s_separ_='_|_sepArator_|_';

		// key==<unit name as string>, value==<Si unit name as string>
		var ht_unit_2_Si_=new Hashtable();

		var ht_conversion_funcs_=new Hashtable();
		//-----------------------------------------------------------------
		// Input data format:
		//
		// ob_declaration={};
		// ob_declaration.func=function(s_destination_unit,i_or_s_or_fd,s_origin_nunit){/*smart stuff*/};
		// ob_declaration.s_origin_unit='a string'
		// ob_declaration.s_destination_unit='a string'
		// ob_declaration.b_origin_unit_is_Si_unit=//true or false
		// ob_declaration.b_destination_unit_is_Si_unit=//true or false
		this.declare_conversion_function=function(ob_declaration){
			try{
				var func=ob_declaration.func;
				var s_origin_unit=ob_declaration.s_origin_unit;
				var s_destination_unit=ob_declaration.s_destination_unit;
				var b_origin_unit_is_Si_unit=ob_declaration.b_origin_unit_is_Si_unit;
				var b_destination_unit_is_Si_unit=ob_declaration.b_destination_unit_is_Si_unit;

				var s_key=s_origin_unit+s_separ_+s_destination_unit;
				ht_conversion_funcs_.put(s_key,func);

				if(b_destination_unit_is_Si_unit===true){
					ht_unit_2_Si_.put(s_destination_unit,s_destination_unit);
					ht_unit_2_Si_.put(s_origin_unit,s_destination_unit);
				} else {
					// The idea is that there's only one Si unit per
					// measure type, i.e. speed, mass, density, etc.
					if(b_origin_unit_is_Si_unit===true){
						ht_unit_2_Si_.put(s_origin_unit,s_origin_unit);
						ht_unit_2_Si_.put(s_destination_unit,s_origin_unit);
					} // if
				} // else
			} catch (err){
				raudrohi.tmg('5bdc5254-9a59-4872-9a12-9180a0219bd7',err);
			} // catch

		} // declare_conversion_function

		function declare_default_conversion_functions(){
			try{
				var ob=new raudrohi.units_default_conversion_functions_instantiator();
				var ar_function_declarations=ob.ar_get_all_default_function_declarations();
				var i_len=ar_function_declarations.length;
				var i=0;
				var ob_declaration;
				for(i=0;i<i_len;i++){
					ob_declaration=ar_function_declarations[i];
					self_public_.declare_conversion_function(ob_declaration);
				} // for
			} catch (err){
				raudrohi.tmg('22c7873c-cdcb-45b6-a082-9180a0219bd7',err);
			} // catch
		} // declare_default_conversion_functions
		declare_default_conversion_functions();

		//-----------------------------------------------------------------
		// Returns a Si unit name as a string or null.
		this.s_unit_2_Si=function(s_unit_name){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(s_unit_name, 's_unit_name',
						'5be4b7d1-77e8-42bb-8322-9180a0219bd7');
				} // if
				var s_si_unit_name=null;
				if(ht_unit_2_Si_.containsKey(s_unit_name)){
					s_si_unit_name=ht_unit_2_Si_.get(s_unit_name)
				} // if
				return s_si_unit_name;
			} catch (err){
				raudrohi.tmg('8400a857-e424-4bbe-a442-9180a0219bd7',err);
			} // catch
		} // s_unit_2_Si

		//-----------------------------------------------------------------
		// Returns a floating point number or throws.
		this.fd_convert=function(s_destination_unit,i_or_s_or_fd,s_origin_unit){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(s_destination_unit,
						's_destination_unit',
						'4891c744-21a9-42ed-8d22-9180a0219bd7');
					raudrohi.base.assert_isString(s_origin_unit, 's_origin_unit',
						'021f07d2-23ee-41f0-a132-9180a0219bd7');
				} // if
				var fd_in=raudrohi.base.to_fd(i_or_s_or_fd);
				var fd_out=fd_in;
				if(s_origin_unit===s_destination_unit){
					return fd_out;
				} // if
				var s_hop_func_key=s_origin_unit+s_separ_+s_destination_unit;
				var func=null;
				var b_doable_in_a_single_hop=ht_conversion_funcs_.containsKey(
					s_hop_func_key);
				if(b_doable_in_a_single_hop===true){
					func=ht_conversion_funcs_.get(s_hop_func_key);
					fd_out=func(fd_in);
				} else {
					// Try 2 hops through Si unit like that:
					// s_origin_unit --> <a Si unit> --> s_destination_unit
					if((!ht_unit_2_Si_.containsKey(s_origin_unit))===true){
						raudrohi.tmg('a21e02fe-97e4-459d-86b2-9180a0219bd7',
							'Direct conversion from '+
							s_origin_unit+' to '+s_destination_unit+
							' has not been declared and '+
							'there is no Si unit declared for '+
							s_origin_unit);
					} // if
					var s_Si_unit=ht_unit_2_Si_.get(s_origin_unit);
					s_hop_func_key=s_origin_unit+s_separ_+s_Si_unit;
					if((!ht_conversion_funcs_.containsKey(s_hop_func_key))===true){
						raudrohi.tmg('dcd9f523-87cd-4bc7-b512-9180a0219bd7',
							'Direct conversion from '+
							s_origin_unit+' to '+s_destination_unit+
							' has not been declared and a conversion '+
							' of the origin unit to its Si equivalent, '+
							s_Si_unit+' , has not been declared.');
					} // if
					func=ht_conversion_funcs_.get(s_hop_func_key);
					var fd_Si=func(fd_in);
					s_hop_func_key=s_Si_unit+s_separ_+s_destination_unit;
					if((!ht_conversion_funcs_.containsKey(s_hop_func_key))===true){
						raudrohi.tmg('27013bd5-7238-458d-9332-9180a0219bd7',
							'Direct conversion from '+
							s_origin_unit+' to '+s_destination_unit+
							' has not been declared and a conversion from '+
							'the Si unit, '+s_Si_unit+' , to the '+
							s_destination_unit+' has not been declared.');
					} // if
					func=ht_conversion_funcs_.get(s_hop_func_key);
					fd_out=func(fd_Si);
				} // else
				return fd_out;
			} catch (err){
				raudrohi.tmg('16618cd3-18b6-49fc-9d32-9180a0219bd7',err);
			} // catch
		} // fd_convert

		//-----------------------------------------------------------------
		// Converts a value to Si units.
		// Returns a floating point number or throws.
		this.fd_2_Si=function(i_or_s_or_fd,s_unit_name){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(s_unit_name, 's_unit_name',
						'1e87f533-3ed4-44ab-8021-9180a0219bd7');
				} // if
				if((!ht_unit_2_Si_.containsKey(s_unit_name))===true){
					raudrohi.tmg('06255599-68e6-4ef6-a631-9180a0219bd7',
						'There is no Si unit declared for unit '+s_unit_name);
				} // if
				var s_Si_unit=ht_unit_2_Si_.get(s_unit_name);
				var fd_out=self_public_.fd_convert(s_Si_unit,
					i_or_s_or_fd,s_unit_name);
				return fd_out;
			} catch (err){
				raudrohi.tmg('32cc1f32-0fdc-4c1d-b631-9180a0219bd7',err);
			} // catch
		} // fd_2_Si

	//---------------------------------------------------------------------
	} catch (err){
		raudrohi.tmg('55d159d4-57cd-4f83-8311-9180a0219bd7',err);
	} // catch
} // raudrohi.units
raudrohi.units=new raudrohi.units();

	//-------------------------------------------------------------------------
