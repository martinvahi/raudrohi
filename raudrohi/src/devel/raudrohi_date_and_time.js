//------------------------------------------------------------------------
// Copyright (c) 2010, martin.vahi@softf1.com that has an
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

raudrohi.date_and_time_instancecount=0;

// It's a singleton.
//
// One has to give credit to the http://www.timeanddate.com
// for time and date related documentation.
raudrohi.date_and_time=function(){
	try{
		raudrohi.date_and_time_instancecount=1+
		raudrohi.date_and_time_instancecount;
		if(1<raudrohi.date_and_time_instancecount){
			raudrohi.tmg('b44b6312-22b4-4843-8c53-0090a0219bd7',
				"Something is wrong, because the "+
				"raudrohi.date_and_time is supposed to be "+
				"a singleton, which gets instantiated automatically. ");
		} // if
		var self_public_=this;
		self_public_.selftests={};
		self_public_.debug={};
		self_public_.private_code={};

		//------------------------------------------------------
		function is_a_leap_year_prerequisite_1(i_year){
			try{
				var i_mod_4=i_year%4;
				if(0<i_mod_4){
					return false;
				} // if
				return true;
			} catch (err){
				raudrohi.tmg('5414ae15-bf15-4877-aa23-0090a0219bd7',err);
			} // catch
		} // is_a_leap_year_prerequisite_1

		// Returns a boolean value
		//
		// It's implementation is based on
		// http://www.timeanddate.com/date/leapyear.html
		this.is_a_leap_year=function(i_year){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isNumber(i_year,'i_year',
						'8217393a-5ac1-4448-8783-0090a0219bd7');
				} // if
				if(is_a_leap_year_prerequisite_1(i_year)===false){
					return false;
				} // if
				var b_out=true;
				var i_mod_100=i_year%100;
				if(i_mod_100===0){
					b_out=false;
					var i_mod_400=i_year%400;
					if(i_mod_400===0){
						b_out=true;
					} // if
				} // if
				return b_out;
			} catch (err){
				raudrohi.tmg('96a4c5a1-073a-4bfa-8553-0090a0219bd7',err);
			} // catch
		} // is_a_leap_year

		this.selftests.is_a_leap_year=function(){
			try{
				var ht=new Hashtable();
				ht.put('test_passed','t');
				var ar_failed_tests=[];
				//---tests-start------------------
				var i=0;
				var i_year;
				var ar_NOT_leap_years=new Array();
				ar_NOT_leap_years.push(1800);
				ar_NOT_leap_years.push(1900);
				ar_NOT_leap_years.push(2100);
				ar_NOT_leap_years.push(2200);
				ar_NOT_leap_years.push(2300);
				ar_NOT_leap_years.push(2500);
				var len=ar_NOT_leap_years.length;
				for(i=0;i<len;i++){
					i_year=ar_NOT_leap_years[i];
					if(raudrohi.date_and_time.is_a_leap_year(i_year)===true){
						ar_failed_tests.push('test NON-leapyears, '+
							'i_year=='+i_year+'');
					} // if
				} // for
				var ar_leap_years=new Array();
				ar_leap_years.push(2000);
				ar_leap_years.push(2008);
				len=ar_leap_years.length;
				for(i=0;i<len;i++){
					i_year=ar_leap_years[i];
					if(raudrohi.date_and_time.is_a_leap_year(i_year)===false){
						ar_failed_tests.push('test leapyears, '+
							'i_year=='+i_year+'');
					} // if
				} // for

				//---tests-end--------------------
				var x_FireFox_bug_workaround=ar_failed_tests.length;
				if(0<x_FireFox_bug_workaround){
					ht.put('test_passed','f');
					ht.put('code_region_name',
						'raudrohi.date_and_time.selftests.is_a_leap_year');
					ht.put('ar_failed_tests',ar_failed_tests);
				} // if
				return ht;
			} catch (err){
				raudrohi.tmg('483153a4-bce0-4443-b442-0090a0219bd7',err);
			} // catch
		} // selftests.is_a_leap_year

		//------------------------------------------------------
		this.number_of_days_in_year=function(i_year){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isNumber(i_year,'i_year',
						'129da972-ec99-46b3-9b32-0090a0219bd7');
				} // if
				var i_out=365;
				if(self_public_.is_a_leap_year(i_year)===true){
					i_out=366;
				} // if
				return i_out;
			} catch (err){
				raudrohi.tmg('d1eef323-f5e1-410a-bc42-0090a0219bd7',err);
			} // catch
		} // number_of_days_in_year

		//------------------------------------------------------
		// TODO: add a method that implements:
		// http://www.wikihow.com/Calculate-the-Day-of-the-Week

		//------------------------------------------------------
		var ht_number_of_days_in_a_months_cache_=new Hashtable();
		function number_of_days_in_a_month_init_cache(){
			try{
				// The long list here is simply for displaying
				// the pattern. The pattern helps to understand
				// the function that generates them automatically. :-)
				var ht=null;
				ht=new Hashtable();
				ht.put('1',31);
				ht.put('2',28);
				ht.put('3',31);
				ht.put('4',30);
				ht.put('5',31);
				ht.put('6',30);
				ht.put('7',31);
				ht.put('8',31);
				ht.put('9',30);
				ht.put('10',31);
				ht.put('11',30);
				ht.put('12',31);
				ht_number_of_days_in_a_months_cache_.put('2007',ht);
				ht=new Hashtable();
				ht.put('1',31);
				ht.put('2',29);
				ht.put('3',31);
				ht.put('4',30);
				ht.put('5',31);
				ht.put('6',30);
				ht.put('7',31);
				ht.put('8',31);
				ht.put('9',30);
				ht.put('10',31);
				ht.put('11',30);
				ht.put('12',31);
				ht_number_of_days_in_a_months_cache_.put('2008',ht);
				ht=new Hashtable();
				ht.put('1',31);
				ht.put('2',28);
				ht.put('3',31);
				ht.put('4',30);
				ht.put('5',31);
				ht.put('6',30);
				ht.put('7',31);
				ht.put('8',31);
				ht.put('9',30);
				ht.put('10',31);
				ht.put('11',30);
				ht.put('12',31);
				ht_number_of_days_in_a_months_cache_.put('2009',ht);
				ht=new Hashtable();
				ht.put('1',31);
				ht.put('2',28);
				ht.put('3',31);
				ht.put('4',30);
				ht.put('5',31);
				ht.put('6',30);
				ht.put('7',31);
				ht.put('8',31);
				ht.put('9',30);
				ht.put('10',31);
				ht.put('11',30);
				ht.put('12',31);
				ht_number_of_days_in_a_months_cache_.put('2010',ht);
			} catch (err){
				raudrohi.tmg('ed3784c4-a87a-4b58-a852-0090a0219bd7',err);
			} // catch
		} // number_of_days_in_a_month_init_cache
		number_of_days_in_a_month_init_cache();

		function number_of_days_in_months_by_calculation(i_year){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isNumber(i_year,'i_year',
						'f921bcea-52e9-48c5-a422-0090a0219bd7');
					if (i_year<1){
						raudrohi.tmg('7174e400-c4c8-4157-8f32-0090a0219bd7',
							"i_year=="+i_year);
					} // if
				} // if
				var ht=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
				ht.put('1',31);
				ht.put('2',28);
				if(self_public_.is_a_leap_year(i_year)===true){
					ht.put('2',29);
				} // if
				ht.put('3',31);
				ht.put('4',30);
				ht.put('5',31);
				ht.put('6',30);
				ht.put('7',31);
				ht.put('8',31);
				ht.put('9',30);
				ht.put('10',31);
				ht.put('11',30);
				ht.put('12',31);
				return ht;
			} catch (err){
				raudrohi.tmg('2748eb62-26e3-4810-9e32-0090a0219bd7',err);
			} // catch
		} // number_of_days_in_months_by_calculation

		var ht_number_of_days_in_months_ht_cloningfree_cache_=new Hashtable();
		var i_ht_number_of_days_in_months_ht_cloningfree_cache_max_size_=20;
		function number_of_days_in_months_ht_cloningfree(i_year){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isNumber(i_year,'i_year',
						'335e2e72-58a7-4c5f-a632-0090a0219bd7');
					if (i_year<1){
						raudrohi.tmg('fa963a02-4947-42c6-8f12-0090a0219bd7',
							"i_year=="+i_year);
					} // if
				} // if
				var s_year=""+i_year;
				var ht_out=null;
				if(ht_number_of_days_in_months_ht_cloningfree_cache_.containsKey(s_year)===true){
					ht_out=ht_number_of_days_in_months_ht_cloningfree_cache_.get(s_year);
				} else {
					ht_out=number_of_days_in_months_by_calculation(i_year);
				} // else
				if(ht_number_of_days_in_months_ht_cloningfree_cache_.size<i_ht_number_of_days_in_months_ht_cloningfree_cache_max_size_){
					ht_number_of_days_in_months_ht_cloningfree_cache_.put(s_year,ht_out);
				} // if
				return ht_out;
			} catch (err){
				raudrohi.tmg('70f65103-4030-48ea-a752-0090a0219bd7',err);
			} // catch
		} // number_of_days_in_months_ht_cloningfree

		this.number_of_days_in_months=function(i_year){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isNumber(i_year,'i_year',
						'69f4d854-4091-4021-be22-0090a0219bd7');
					if (i_year<1){
						raudrohi.tmg('642aeba5-dfc4-43fb-97f2-0090a0219bd7',
							"i_year=="+i_year);
					} // if
				} // if
				var ht_orig=number_of_days_in_months_ht_cloningfree(i_year);
				var ht_out=raudrohi.base.clone_hashtable(ht_orig);
				return ht_out;
			} catch (err){
				raudrohi.tmg('2951697f-3278-4da0-b612-0090a0219bd7',err);
			} // catch
		} // number_of_days_in_months

		var ht_number_of_days_in_a_month_cache1_=new Hashtable();
		var i_ht_number_of_days_in_a_month_cache1_max_size_=240;
		this.number_of_days_in_a_month=function(i_month,i_year){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isNumber(i_month,'i_month',
						'349d8a83-9c79-4425-8e41-0090a0219bd7');
					raudrohi.base.assert_isNumber(i_year,'i_year',
						'7498f223-f9b3-460e-b431-0090a0219bd7');
					if((i_month<1)||(12<i_month)){
						raudrohi.tmg('a3394361-1b16-49a2-b6e1-0090a0219bd7',
							"i_month=="+i_month);
					} // if
					if (i_year<1){
						raudrohi.tmg('37e222d3-61a6-4ef3-8251-0090a0219bd7',
							"i_year=="+i_year);
					} // if
				} // if
				var i_out=null;
				var s_year=""+i_year;
				var s_month=""+i_month;
				var s_key=s_year+"_"+s_month;
				if(ht_number_of_days_in_a_month_cache1_.containsKey(s_key)===true){
					i_out=ht_number_of_days_in_a_month_cache1_.get(s_key);
					return i_out;
				} // if
				var ht_months=number_of_days_in_months_ht_cloningfree(i_year);
				i_out=ht_months.get(s_month);
				if(ht_number_of_days_in_a_month_cache1_.size()<i_ht_number_of_days_in_a_month_cache1_max_size_){
					ht_number_of_days_in_a_month_cache1_.put(s_key,i_out);
				} // if
				return i_out;
			} catch (err){
				raudrohi.tmg('3bab25a4-08dd-48ff-9f41-0090a0219bd7',err);
			} // catch
		} // number_of_days_in_a_month

		//------------------------------------------------------
		// If it doesn't throw, it  returns a boolean value.
		this.date_is_contradictory=function(
			i_day,i_month,i_year,b_throw_if_contradiction_found){
			try{
				b_throw_if_contradiction_found = typeof(b_throw_if_contradiction_found) !== 'undefined' ? b_throw_if_contradiction_found : false;
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isNumber(i_day,'i_day',
						'1919a675-a4c8-4ce0-b321-0090a0219bd7');
					raudrohi.base.assert_isNumber(i_month,'i_month',
						'2ad08024-755d-4f6b-bf41-0090a0219bd7');
					raudrohi.base.assert_isNumber(i_year,'i_year',
						'468d5142-b800-4a40-a231-0090a0219bd7');
					raudrohi.base.assert_isBoolean(
						b_throw_if_contradiction_found,
						'b_throw_if_contradiction_found',
						'5ebfde81-74e3-445e-b241-0090a0219bd7');
				} // if
				var b_out=false;
				var s_msg=null;
				if((i_month<1)||(12<i_month)){
					b_out=true;
					s_msg="i_month=="+i_month;
				} // if
				if(b_out===false){
					if(i_day<1){
						b_out=true;
						s_msg="i_day=="+i_day+" < 1 ";
					} // if
				} // if
				if(b_out===false){
					var i_n_of_days_max=self_public_.number_of_days_in_a_month(
						i_month,i_year);
					if(i_n_of_days_max<i_day){
						b_out=true;
						s_msg="i_day=="+i_day+", but the maximum number of "+
						"days in "+i_month+"."+i_year+" is "+
						i_n_of_days_max+".";
					} // if
				} // if
				if (b_throw_if_contradiction_found===true){
					if (b_out===true){
						raudrohi.tmg('4c5114a1-74cf-4d31-a321-0090a0219bd7',
							""+s_msg);
					} // if
				} // if
				return b_out;
			} catch (err){
				raudrohi.tmg('4299cba1-85b2-4ed9-9e51-0090a0219bd7',err);
			} // catch
		} // date_is_contradictory

		// If it doesn't throw, it  returns a boolean value.
		this.hour_minute_second_is_contradictory=function(
			i_hour,i_minute,i_second,b_throw_if_contradiction_found){
			try{
				b_throw_if_contradiction_found = typeof(b_throw_if_contradiction_found) !== 'undefined' ? b_throw_if_contradiction_found : false;
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isNumber(i_hour,'i_hour',
						'765d39b2-1437-428f-8d40-0090a0219bd7');
					raudrohi.base.assert_isNumber(i_minute,'i_minute',
						'3ac24a73-1e9a-4191-a520-0090a0219bd7');
					raudrohi.base.assert_isNumber(i_second,'i_second',
						'3822663f-1b6d-44a4-a050-0090a0219bd7');
					raudrohi.base.assert_isBoolean(
						b_throw_if_contradiction_found,
						'b_throw_if_contradiction_found',
						'4819f561-ef5a-4fb6-b950-0090a0219bd7');
				} // if
				var b_out=false;
				var s_msg=null;
				if((i_hour<0)||(23<i_hour)){
					b_out=true;
					s_msg="i_hour=="+i_hour;
				} // if
				if(b_out===false){
					if((i_minute<0)||(59<i_minute)){
						b_out=true;
						s_msg="i_minute=="+i_minute;
					} // if
				} // if
				if(b_out===false){
					if((i_second<0)||(59<i_second)){
						b_out=true;
						s_msg="i_second=="+i_second;
					} // if
				} // if
				if (b_throw_if_contradiction_found===true){
					if (b_out===true){
						raudrohi.tmg('4711e922-42a6-4f6e-ab40-0090a0219bd7',
							""+s_msg);
					} // if
				} // if
				return b_out;
			} catch (err){
				raudrohi.tmg('c24cedec-b3ff-498a-a350-0090a0219bd7',err);
			} // catch
		} // hour_minute_second_is_contradictory

		//------------------------------------------------------
		// Returns a boolean value. If the
		// b_throw_if_contradiction_found==true, it throws, but the
		// default value for the  b_throw_if_contradiction_found is false.
		//
		// The ht_timestamp is expected to contain either string or
		// integer (or a mixture of strings and integers) values
		// for the following keys:
		// day,month,year,hour,minute,second,s_format,unix_time
		//
		// The domain of the s_format is {"human_perceivable","unix_time"}
		// If the s_format=="human_perceivable", then
		// the value of the unix_time
		// is not analyzed. If the s_format=="unix_time", the values
		// of the day,month,year,hour,minute,second are not analyzed.
		//
		// It checks that seconds, hours, minutes are not negative,
		// that hours are not greater than 23, etc. It also
		// checks, whether the given date actually exists, i.e.
		// 29.02.2007 is invalid, because 2007 is not a leap year,
		// but 29.02.2008 is valid, because 2008 is a leap year.
		this.timestamp_is_contradictory=function(ht_timestamp,
			b_throw_if_contradiction_found){
			try{
				b_throw_if_contradiction_found = typeof(b_throw_if_contradiction_found) !== 'undefined' ? b_throw_if_contradiction_found : false;
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isObject(ht_timestamp,'ht_timestamp',
						'10034c52-20ac-45cf-9310-0090a0219bd7');
					raudrohi.base.assert_isBoolean(
						b_throw_if_contradiction_found,
						'b_throw_if_contradiction_found',
						'41ee50f4-ff1b-4865-8c40-0090a0219bd7');
					var ar_keys=["day","month","year","hour","minute","second"];
					raudrohi.base.assert_keysExist(ht_timestamp,'ht_timestamp',
						ar_keys, '10fa8a03-de0e-4c35-b030-0090a0219bd7');
				} // if
				var b_out=false;
				var s_msg=null;
				var ht=ht_timestamp;
				var s_emptystring="";
				var s_format=ht.get("s_format");
				if(s_format==="unix_time"){
					var i_unix_time=parseInt(s_emptystring+ht.get("unix_time"),
						10);
					if(i_unix_time<0){
						b_out=true;
						s_msg="i_unix_time=="+i_unix_time+" < 0 ";
					} // if
				} // if
				if(s_format==="human_perceivable"){
					var i_year=parseInt(s_emptystring+ht.get("year"),10);
					var i_month=parseInt(s_emptystring+ht.get("month"),10);
					var i_day=parseInt(s_emptystring+ht.get("day"),10);
					var i_hour=parseInt(s_emptystring+ht.get("hour"),10);
					var i_minute=parseInt(s_emptystring+ht.get("minute"),10);
					var i_second=parseInt(s_emptystring+ht.get("second"),10);
					b_out=self_public_.hour_minute_second_is_contradictory(
						i_hour,i_minute,i_second,b_throw_if_contradiction_found);
					if(b_out===false){
						b_out=self_public_.date_is_contradictory(i_day,
							i_month,i_year,b_throw_if_contradiction_found);
					} // if
				} // if
				if (b_throw_if_contradiction_found===true){
					// This branch is for the unix_time version only.
					if (b_out===true){
						raudrohi.tmg('51357285-2567-4279-a010-0090a0219bd7',
							""+s_msg);
					} // if
				} // if
				return b_out;
			} catch (err){
				raudrohi.tmg('e338d4a6-cfc0-4b49-8d50-0090a0219bd7',err);
			} // catch
		} // timestamp_is_contradictory

		// Returns a modified clone of the hashtable, except that
		// the instances of the clone are not cloned.
		this.unix_time_2_human_perceivable=function(ht_timestamp){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isObject(ht_timestamp,'ht_timestamp',
						'b2950085-7112-4b25-965f-0090a0219bd7');
					self_public_.timestamp_is_contradictory(ht_timestamp,true);
				} // if
				var s_emptystring="";
				var s_format=ht_timestamp.get("s_format");
				var ht_out=raudrohi.base.clone_hashtable(ht_timestamp);
				if(s_format==="human_perceivable"){
					return ht_out;
				} // if
				if(s_format!="unix_time"){
					raudrohi.tmg('53480f18-2dfb-41ae-b94f-0090a0219bd7',
						"Something is wrong here. s_format==\""+s_format+"\".");
				} // if
				var i_unix_time=parseInt(s_emptystring+ht_timestamp.get("unix_time"),10);
				var i_milliseconds=1000*i_unix_time;
				var dt=new Date(i_milliseconds);
				ht_out.put('year',s_emptystring+dt.getFullYear());
				// A citation from
				// http://efreedom.com/Question/1-2908587/Javascript-Dateutc-Problem
				// The month parameter to Date.UTC() is 0-indexed;
				// January is 0, February is 1, etc.
				ht_out.put('month',s_emptystring+(dt.getMonth()+1));
				ht_out.put('day',s_emptystring+dt.getDate());
				ht_out.put('hour',s_emptystring+dt.getHours());
				ht_out.put('minute',s_emptystring+dt.getMinutes());
				ht_out.put('second',s_emptystring+dt.getSeconds());
				ht_out.put('s_format',"human_perceivable");
				return ht_out;
			} catch (err){
				raudrohi.tmg('35391ca1-794f-47ed-875f-0090a0219bd7',err);
			} // catch
		} // unix_time_2_human_perceivable


		// Returns a modified clone of the hashtable, except that
		// the instances of the clone are not cloned.
		this.human_perceivable_2_unix_time=function(ht_timestamp){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isObject(ht_timestamp,'ht_timestamp',
						'd5420eba-d2ba-4cd5-9a2f-0090a0219bd7');
					self_public_.timestamp_is_contradictory(ht_timestamp,true);
				} // if
				var s_emptystring="";
				var s_format=ht_timestamp.get("s_format");
				var ht_out=raudrohi.base.clone_hashtable(ht_timestamp);
				if(s_format==="unix_time"){
					return ht_out;
				} // if
				if(s_format!="human_perceivable"){
					raudrohi.tmg('3b752d15-34cc-436f-891f-0090a0219bd7',
						"Something is wrong here. s_format==\""+s_format+"\".");
				} // if
				var i_year=parseInt(s_emptystring+ht_timestamp.get('year'));
				var i_month=parseInt(s_emptystring+ht_timestamp.get('month'));
				var i_day=parseInt(s_emptystring+ht_timestamp.get('day'));
				var i_hour=parseInt(s_emptystring+ht_timestamp.get('hour'));
				var i_minute=parseInt(s_emptystring+ht_timestamp.get('minute'));
				var i_second=parseInt(s_emptystring+ht_timestamp.get('second'));
				// A citation from
				// http://efreedom.com/Question/1-2908587/Javascript-Dateutc-Problem
				// The month parameter to Date.UTC() is 0-indexed;
				// January is 0, February is 1, etc.
				var s_unix_time_milliseconds=s_emptystring+
				Date.UTC(i_year,(i_month-1),i_day,
					i_hour,i_minute,i_second,0);
				var s_unix_time=s_unix_time_milliseconds.substring(0,
					(s_unix_time_milliseconds.length-3));
				ht_out.put('unix_time',s_unix_time);
				ht_out.put('s_format',"unix_time");
				return ht_out;
			} catch (err){
				raudrohi.tmg('501e9b22-7e93-40fd-9a3f-0090a0219bd7',err);
			} // catch
		} // human_perceivable_2_unix_time


	} catch (err){
		raudrohi.tmg('418f6e15-1ff7-401f-9f3f-0090a0219bd7',err);
	} // catch
} // raudrohi.date_and_time
raudrohi.date_and_time=new raudrohi.date_and_time();

//------------------------------------------------------------------------


//------------------------------------------------------------------------
