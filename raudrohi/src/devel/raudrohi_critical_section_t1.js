//=========================================================================


// Instances that want to use the functionality of a critical section
// should instantiate this class and have the instance of the
// raudrohi.critical_section_t1 as one of its private fields.
//
// In stead of using only on type of critical section,
// where only one thread can reside at a time regardless of what it
// does there, one can use 2 different types of critical sections.
// One of them is where for writing and reading and
// the another one is for reading only.
//
// The idea is that it's OK for multiple threads to
// use the data for reading, if there's no other trhead writing
// to the protected data. The reading should be withheld only,
// if the data is being written and writing should be withheld for both,
// writing and reading.
//
// The use of the 2 types of the critica sections reduces
// the wait-time (thread sleep time), but if thread sleeping is
// implemented by burning CPU-cycles, like it is in this case,
// it also saves CPU-cycles.(The problem with the
// sleeping is that as of 2011 the JavaScript does not have a
// thread-stopping sleep implementation.)
//
// The use of the reading-only critical sections in addtional to the
// one-thread-only critical section is partly inspired by the
// http://diwww.epfl.ch/researchlgl/research/omtt/thesis.html
//
// TODO: One should study, if the Banker's algorithm
// might be beneficial, increase the reliability, of the implementation.
raudrohi.critical_section_t1=function(){
	try{
		var self_public_=this;
		var mutexes_rw_={};
		//var mutexes_r_={}; // to be used, when the r mode is implemented

		// The critical_section_rw is the read-write type of
		// critical section.
		//
		// The unusual look of this function is due to the
		// fact that the only way to implement a thread-blocking
		// sleep() function in JavaScript is to burn CPU-cycles. As the
		// CPU-cycles are going to be burned anyway, one wants to
		// get as much useful stuff done with them as one can think of.
		//
		// The func_useful_precritical_initstuff is meant to contain
		// the various preparations that are done prior to entering the
		// critical section. It's guaranteed to be executed exactly once
		// and it is executed before entering the critical section.
		this.critical_section_rw=function(s_mutexname,
			func_useful_precritical_initstuff,
			func_the_critical_section){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(s_mutexname,
						's_mutexname',
						'4caa14c2-f8e4-45ec-b154-8090a0219bd7');
					raudrohi.base.assert_isFunction(func_useful_precritical_initstuff,
						'func_useful_precritical_initstuff',
						'4eef7121-2f25-4cec-8c14-8090a0219bd7');
					raudrohi.base.assert_isFunction(func_the_critical_section,
						'func_the_critical_section',
						'1ed77532-c3e5-452b-8b34-8090a0219bd7');
				} // if
				// The crazy name, i_in_tHe_criticAl_section99343, is
				// used in stead of just i to avoid overriding the
				// popular i.
				var i_in_tHe_criticAl_section99343=0;
				if(typeof(mutexes_rw_[s_mutexname]) === 'undefined'){
					mutexes_rw_[s_mutexname]=false;
				} // if
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isBoolean(
						mutexes_rw_[s_mutexname],
						'mutexes_['+s_mutexname+']',
						'4262d271-9acf-448b-b544-8090a0219bd7');
				} // if
				while(mutexes_rw_[s_mutexname]===true){
					if(i_in_tHe_criticAl_section99343===0){
						try{
							func_useful_precritical_initstuff();
						} catch (err){
							raudrohi.tmg('6449d649-8852-447b-8164-8090a0219bd7',err);
						} // catch
					} else {
						raudrohi.core.burnCPUcycles(10);
					} // else
					i_in_tHe_criticAl_section99343++;
				} // while
				mutexes_rw_[s_mutexname]=true;
				if(i_in_tHe_criticAl_section99343===0){
					try{
						func_useful_precritical_initstuff();
					} catch (err){
						raudrohi.tmg('17c6ba11-37f0-4c20-b514-8090a0219bd7',err);
					} // catch
				} // if
				try{
					func_the_critical_section();
				} catch (err){
					raudrohi.tmg('84fce861-f40f-4dde-8e53-8090a0219bd7',err);
				} // catch
				mutexes_rw_[s_mutexname]=false;
				return i_in_tHe_criticAl_section99343;
			} catch (err){
				raudrohi.tmg('8a410ecf-1ebb-4d5d-b913-8090a0219bd7',
					"s_mutexname=="+s_mutexname+"  "+err);
			} // catch
		} // critical_section_rw

		// This is the reading only version of the critical section.
		// The API is the same as in the case of the critical_section_rw,
		// but in this version of a critical section client code is
		// expected to only read the protected variables.
		//
		// TODO: implement it.
		this.critical_section_r=self_public_.critical_section_rw

	} catch (err){
		raudrohi.tmg('296ad135-d481-4fee-9843-8090a0219bd7',err);
	} // catch
} // raudrohi.critical_section_t1


//------------------------------------------------------------------------
