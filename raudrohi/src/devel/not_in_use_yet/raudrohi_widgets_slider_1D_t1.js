//=========================================================================

raudrohi.widgets.g1.slider_1D_t1=function(s_html_id){
	var self_public_=this;
	try{
		if(raudrohi_settings_debug_JavaScript===true){
			raudrohi.base.assert_isString(s_html_id, 's_html_id',
				'5c21982d-a091-4b0e-93c9-108010a0abd7');
		} // if
		var pileofmethods_t1_=new raudrohi.widgets.g1.pileofmethods_t1(
			self_public_,'raudrohi.widgets.g1.slider_1D_t1_',s_html_id);
		var prc_=self_public_.private_code_;

		//-----------------------------------------------------------------
		var ns_static_={};
		var ns_dynamic_={};

		//-----------------------------------------------------------------
		function update_ns_static_calc(){
			try{
			//		var b_true_for_running=false;
			//switch_data_acquisition_loop(b_true_for_running);
			//		set_displaystate_2_zero();
			/*
				var i=null;
				var i_1=null;
				//------
				// all sides of a square are equal
				var i_closing_cross_side_width=i_digit_margin_*2+
				i_digit_height_;
				//------
		// A rectangle is determined by a pair of points that
		// consists of the rectangle's upper left corner and
		// its lower right corener.
				//------
				ob_rectangles_.ar_gradient_x0=[];
				ob_rectangles_.ar_gradient_y0=[];
				ob_rectangles_.ar_gradient_x1=[];
				ob_rectangles_.ar_gradient_y1=[];

				ob_rectangles_.i_upper_numdisplay_x0=0;
				ob_rectangles_.i_upper_numdisplay_y0=0;
				ob_rectangles_.i_upper_numdisplay_x1=0;
				ob_rectangles_.i_upper_numdisplay_y1=0;

				ob_rectangles_.i_lower_numdisplay_x0=0;
				ob_rectangles_.i_lower_numdisplay_y0=0;
				ob_rectangles_.i_lower_numdisplay_x1=0;
				ob_rectangles_.i_lower_numdisplay_y1=0;

				ob_rectangles_.ar_rightmost_numbers=[];

				ob_rectangles_.i_closing_cross_x0=0;
				ob_rectangles_.i_closing_cross_y0=0;
				ob_rectangles_.i_closing_cross_x1=0;
				ob_rectangles_.i_closing_cross_y1=0;
*/
			// POOLELI: ns_static_.calc v22rtused siin v2lja arvutada.
			} catch (err){
				raudrohi.tmg('10c7e053-4b87-4bc4-b3c9-108010a0abd7',err);
			} // catch
		} // update_ns_static_calc
		//-----------------------------------------------------------------
		try{
			ns_static_.input={};
			ns_static_.input.i_range_min=1;
			ns_static_.input.i_range_max=4;
			ns_static_.input.i_max_number_of_rightmost_numbers=3;
			ns_static_.input.i_gradient_bar_width=20;

			// The default set of installed fonts depends
			// on an operating system. The amount of
			// pixels per character depends on the font.
			// RJSL embedded font is used for reliability.
			ns_static_.input.s_fontfamily_name='raudrohi_fontfamily_gnu_mono';
			ns_static_.input.i_font_size=12;

			ns_static_.input.i_digit_margin=4; // px

			// If there are 200 menuitems, then in the case of
			// i_interval_denominator_==5, the gradient ranges will
			// approximately be: 200, 40, 8, 5
			ns_static_.input.i_interval_denominator=5;

			// The line should be such
			// that it's distance by human perception
			// is "great", "big", from
			// the gradient leftside color and
			// the gradient rightside color and
			// the numbercolor.
			//
			// In plain terms: the line color
			// should be visible on front of the gradient
			// and it should not make the selected number
			// to be hard to look at, if the line color is
			// used as the background color of the selected
			// number.
			//
			// From artistic point of view, one should
			// keep the number of colors on screen to
			// a minimum and, if possible, not use
			// more than 3 colors or at least stick to
			// a colouring.
			//
			// One possible keyword: CIE color chart
			ns_static_.input.s_line_color='#d23878';
			ns_static_.input.s_number_color='#ffffff';
			ns_static_.input.s_number_background='#000000';
			ns_static_.input.s_gradient_leftside_color='#000000';
			ns_static_.input.s_gradient_rightside_color='#ffffff';

			ns_static_.calc={};
		} catch (err){
			raudrohi.tmg('845fc71c-8578-495f-b3c9-108010a0abd7',err);
		} // catch

		//-----------------------------------------------------------------
		function set_displaystate_2_zero(){
			try{
				var i_x1=null;
				//ns_dynamic_
				if(self_public_.is_hidden()===false){
					self_public_.unhide();
				} // if
			} catch (err){
				raudrohi.tmg('726259c4-d02d-4a25-82c9-108010a0abd7',err);
			} // catch
		} // set_displaystate_2_zero
		set_displaystate_2_zero();

		//-----------------------------------------------------------------
		this.set_font_family=function(s_fontfamily_name){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(s_fontfamily_name,
						's_fontfamily_name',
						'850ad72a-bdad-435c-92b9-108010a0abd7');
				} // if
				if(ns_static_.input.s_fontfamily_name!==s_fontfamily_name){
					ns_static_.input.s_fontfamily_name=s_fontfamily_name;
					update_ns_static_calc();
				} // if
			} catch (err){
				raudrohi.tmg('92244015-ccab-476e-b2b9-108010a0abd7',err);
			} // catch
		} // set_font_family

		//-----------------------------------------------------------------
		this.set_font_size=function(i_font_size){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.lang.assert_is_a_whole_number(
						i_font_size,'i_font_size',
						'32a1efe1-6739-4307-94b9-108010a0abd7');
				} // if
				raudrohi.base.assert_X1_isSmallerThanOrEqualTo_X2(1,'1',
					'c799d8b1-d5f9-4401-82b9-108010a0abd7',
					i_font_size, 'i_font_size');
				if(ns_static_.input.i_font_size!==i_font_size){
					ns_static_.input.i_font_size=i_font_size;
					update_ns_static_calc();
				} // if
			} catch (err){
				raudrohi.tmg('05f5e254-4a5a-487b-a4b9-108010a0abd7',err);
			} // catch
		} // set_font_size

		//-----------------------------------------------------------------
		// i_max-i_min must be at least 2.
		this.set_range=function(i_min,i_max){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isNumber(i_min ,'i_min',
						'ee21107b-af3e-4ec0-aeb9-108010a0abd7');
					raudrohi.base.assert_isNumber(i_max,'i_max',
						'487bd4f1-a173-41ee-85b9-108010a0abd7');
				} // if
				if(i_max<=i_min){
					raudrohi.tmg('5815bd2d-ee1e-4ff1-94b9-108010a0abd7',
						'i_max == '+i_max+' <= i_min == '+i_min);
				} // if
				var i_x=i_max-i_min;
				if(i_x<2){
					raudrohi.tmg('20c16c37-b858-4629-91b9-108010a0abd7',
						'i_max-i_min == '+i_x+' < 2 ');
				} // if
				if((ns_static_.input.i_range_min!==i_min)||(ns_static_.input.i_range_max!==i_max)){
					ns_static_.input.i_range_min=i_min;
					ns_static_.input.i_range_max=i_max;
					update_ns_static_calc();
				} // if
			} catch (err){
				raudrohi.tmg('5d092c41-5522-413c-a3b9-108010a0abd7',err);
			} // catch
		} // set_range

		//-----------------------------------------------------------------
		// If there are 200 menuitems, then in the case of
		// i_interval_denominator==5, the gradient ranges will
		// approximately be: 200, 40, 8, 5
		//
		// The i_interval_denominator must be greater than 2.
		this.set_interval_denominator=function(i_interval_denominator){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isNumber(i_interval_denominator,
						'i_interval_denominator',
						'a6766845-0b34-4ae3-a3b9-108010a0abd7');
				} // if
				raudrohi.base.assert_X1_isSmallerThanOrEqualTo_X2(2,'2',
					'59810944-b0a6-40cf-b4b9-108010a0abd7',
					i_interval_denominator, 'i_interval_denominator');
				var i_old_value=ns_static_.input.i_interval_denominator;
				if(i_old_value!==i_interval_denominator){
					ns_static_.input.i_interval_denominator=i_interval_denominator;
					update_ns_static_calc();
				} // if
			} catch (err){
				raudrohi.tmg('ecbf6521-d34e-4998-81b9-108010a0abd7',err);
			} // catch
		} // set_interval_denominator

		//-----------------------------------------------------------------
		this.set_max_number_of_rightmost_numbers=function(i_max_number_of_rightmost_numbers){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isNumber(
						i_max_number_of_rightmost_numbers,
						'i_max_number_of_rightmost_numbers',
						'fdfd0c3d-9807-4dc3-84a9-108010a0abd7');
				} // if
				raudrohi.base.assert_X1_isSmallerThanOrEqualTo_X2(1, '1',
					'bdea2f54-69c2-4752-92a9-108010a0abd7',
					i_max_number_of_rightmost_numbers,
					'i_max_number_of_rightmost_numbers');
				var i_old_value=ns_static_.input.i_max_number_of_rightmost_numbers;
				if(i_old_value!==i_max_number_of_rightmost_numbers){
					ns_static_.input.i_max_number_of_rightmost_numbers=i_max_number_of_rightmost_numbers;
					update_ns_static_calc();
				} // if
			} catch (err){
				raudrohi.tmg('91a08293-85ea-40dd-a5a9-108010a0abd7',err);
			} // catch
		} // set_max_number_of_rightmost_numbers

		//-----------------------------------------------------------------
		// The i_gradient_bar_width_min must be at least 5.
		this.set_gradient_bar_width=function(i_gradient_bar_width){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isNumber(
						i_gradient_bar_width,'i_gradient_bar_width_min',
						'3e15eb21-0617-48dd-85a9-108010a0abd7');
				} // if
				raudrohi.base.assert_X1_isSmallerThanOrEqualTo_X2(5, '5',
					'5b8670de-bf70-40d2-a4a9-108010a0abd7',
					i_gradient_bar_width,'i_gradient_bar_width');
				var i_old_value=ns_static_.input.i_gradient_bar_width;
				if(i_old_value!==i_gradient_bar_width){
					ns_static_.input.i_gradient_bar_width=i_gradient_bar_width;
					update_ns_static_calc();
				} // if
			} catch (err){
				raudrohi.tmg('cbda8d3a-5bf1-4ad0-b1a9-108010a0abd7',err);
			} // catch
		} // set_gradient_bar_width

		//-----------------------------------------------------------------
		var ob_data_acquisition_loop_interval_id_=null;
		var b_data_acquisition_loop_is_running_=false;
		var s_data_acquisition_tick_rawsrc_=''; // for the setInterval(...)

		// According to measurements on a 1.6GHz Debian
		// Linux laptop with 1GiB of RAM the maximum amount of
		// setInterval(...) events per second is about 200
		// for both, the Google Chrome and the FireFox.
		// The classical constant for the analog, smoothedout,
		// chemical film based movie framerate is 25fps.
		var i_data_acquisition_fequency_=30; // Hz
		var i_data_acquisition_period_in_milliseconds_=Math.floor(
			1000/i_data_acquisition_fequency_);

		//-----------------------------------------------------------------
		function switch_data_acquisition_loop(b_true_for_running){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isBoolean(b_true_for_running,
						'b_true_for_running',
						'1ae51df3-a5c5-46ff-81a9-108010a0abd7');
				} // if
				if(b_true_for_running===true){
					if(b_data_acquisition_loop_is_running_===false){
						ob_data_acquisition_loop_interval_id_=setInterval(
							s_data_acquisition_tick_rawsrc_,
							i_data_acquisition_period_in_milliseconds_);
					} // if
				} else {
					if(b_data_acquisition_loop_is_running_===true){
						clearInterval(ob_data_acquisition_loop_interval_id_);
					} // if
				} // else
			} catch (err){
				raudrohi.tmg('3c732f1b-1ad2-4e61-95a9-108010a0abd7',err);
			} // catch
		} // switch_data_acquisition_loop

		//-----------------------------------------------------------------
		prc_.customizable.optional.hide_prefixhook=function(true_if_update_DOM) {
			try{
				switch_data_acquisition_loop(false);
			} catch (err){
				raudrohi.tmg('deb85646-0807-416e-b4a9-108010a0abd7',err);
			} // catch
		} // prc_.customizable.optional.hide_prefixhook

		//-----------------------------------------------------------------
		prc_.customizable.compulsory.render_editable=function(){
			try{
				raudrohi.base.set_innerHTML(prc_.container_id_,
					'tere');
				if(prc_.is_readonly_===false){
					switch_data_acquisition_loop(true);
				} else {
					switch_data_acquisition_loop(false);
				} // else
			} catch (err){
				raudrohi.tmg('3bc15e93-b0d4-4f24-91a9-108010a0abd7',err);
			} // catch
		} // render_editable

		prc_.customizable.compulsory.render_readonly=prc_.customizable.compulsory.render_editable;

		//-----------------------------------------------------------------
		this.evh_mouse_button_down_impl=function(){
		// This method is subject to overloading by the parent
		// widget.
		} // evh_mouse_button_down_impl

		this.evh_mouse_button_released_impl=function(){
		// This method is subject to overloading by the parent
		// widget.
		} // evh_mouse_button_released_impl

		this.evh_mouse_button_down=function(e){
			try{
				raudrohi.adapter.YUI_preventdefault(e);
				self_public_.evh_mouse_button_down_impl();
			} catch (err){
				raudrohi.tmg('31d04c58-e347-475a-95a9-108010a0abd7',err);
			} // catch
		} // evh_mouse_button_down

		//-----------------------------------------------------------------
		// The colors are in the HTML format, #xxxxxx, where x={0...9,A..F}
		this.set_colors=function(s_number_color,s_number_background,
			s_line_color,s_gradient_leftside_color,s_gradient_rightside_color){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.lang.assert_is_an_HTML_color(s_number_color,
						's_number_color','49882f56-bf28-4bc1-9299-108010a0abd7');
					raudrohi.lang.assert_is_an_HTML_color(s_number_background,
						's_number_background','47c08e4d-1e13-4bed-b599-108010a0abd7');
					raudrohi.lang.assert_is_an_HTML_color(s_line_color,
						's_line_color','c662984a-77fd-4f2a-b199-108010a0abd7');
					raudrohi.lang.assert_is_an_HTML_color(s_gradient_leftside_color,
						's_gradient_leftside_color','c59114e3-f5da-4076-b699-108010a0abd7');
					raudrohi.lang.assert_is_an_HTML_color(s_gradient_rightside_color,
						's_gradient_rightside_color','817b144e-29e6-469d-9399-108010a0abd7');
				} // if
				ns_static_.input.s_line_color=s_line_color;
				ns_static_.input.s_number_color=s_number_color;
				ns_static_.input.s_number_background=s_number_background;
				ns_static_.input.s_gradient_leftside_color=s_gradient_leftside_color;
				ns_static_.input.s_gradient_rightside_color=s_gradient_rightside_color;
				update_ns_static_calc();
			} catch (err){
				raudrohi.tmg('41a86e2c-2c4b-40ee-9599-108010a0abd7',err);
			} // catch
		} // set_colors

		//-----------------------------------------------------------------
		this.thrjr_.data_acquisition_tick=function(ht_wrapper){
			try{
			} catch (err){
				raudrohi.tmg('370506f3-e665-4871-8599-108010a0abd7',err);
			} // catch
		} // thrjr_.data_acquisition_tick

		prc_.customizable.optional.startup_hook=function() {
			try{
				var s_destination_phonenumber=self_public_.phone.get_phone_number();
				var s_destination_command="data_acquisition_tick"
				s_data_acquisition_tick_rawsrc_="prc_.threadjump_send('"+
				s_destination_phonenumber+"','"+
				s_destination_command+"', (new Hashtable()), '/dev/null');";
			} catch (err){
				raudrohi.tmg('4f5afd59-750c-464b-a599-108010a0abd7',err);
			} // catch
		} // prc_.customizable.optional.startup_hook

		self_public_.startup_sequence_init();

	} catch (err){
		raudrohi.tmg('136bc9e2-cb3d-4b13-a599-108010a0abd7',err);
	} // catch
} // raudrohi.widgets.g1.slider_1D_t1

//-------------------------------------------------------------------------
