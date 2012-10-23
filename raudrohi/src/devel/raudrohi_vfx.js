//=========================================================================
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
//=========================================================================
//
// The acronym VFX stands for Visual Effects.
// Thsi file contains widget independent code.
//
//-------------------------------------------------------------------------
if(window.raudrohi_vfx_exists!==true){
	window.raudrohi.vfx={};
	window.raudrohi_vfx_exists=true;
} // if
if(window.raudrohi_vfx_private_code_exists!==true){
	window.raudrohi.vfx.private_code={};
	window.raudrohi_vfx_private_code_exists=true;
} // if

//-------------------------------------------------------------------------
// The input is expected to be in a form of #xxxxxx, where the x is 
// is a hex digit. The output is an array of integers, where 
// ar[0]===<red>
// ar[1]===<green>
// ar[2]===<blue>
raudrohi.vfx.ar_html2rgb=function(s_html_color){
	try{
		if(raudrohi.settings.debug_JavaScript===true){			
			raudrohi.lang.assert_is_an_HTML_color(s_html_color, 
				's_html_color','804c38fc-34ae-4b0a-b116-337010a0abd7');
		} // if
		var s_in=s_html_color.toLowerCase();
		var s_red=s_in.substring(1,3);
		var s_green=s_in.substring(3,5);
		var s_blue=s_in.substring(5,7);
		var ar_out=new Array();
		ar_out.push(parseInt(s_red,16));
		ar_out.push(parseInt(s_green,16));
		ar_out.push(parseInt(s_blue,16));
		return ar_out;
	} catch (err){
		raudrohi.tmg('33bfe08e-e6e9-45c0-9316-337010a0abd7',err);
	} // catch
} // raudrohi.vfx.ar_html2rgb

//-------------------------------------------------------------------------
// The input is expected to be in a form of #xxxxxx, where the x is
// is a hex digit. The i_max_number_of_output_colors is inSet [2..int_max]
// ar_out[0] == s_html_color_start
// ar_out[ar_out.length-1] == s_html_color_end
//
// It's pretty expensive function, so You might like to
// consider using the raudrohi.cache.ht_color_gradients .
raudrohi.vfx.ar_interpolate_html_colors=function(
	s_html_color_start,s_html_color_end,i_max_number_of_output_colors){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.lang.assert_is_an_HTML_color(s_html_color_start,
				's_html_color_start','9caca124-07b3-4a6b-b216-337010a0abd7');
			raudrohi.lang.assert_is_an_HTML_color(s_html_color_end,
				's_html_color_end','86081c48-c7ba-4e16-8516-337010a0abd7');
			raudrohi.base.assert_isNumber(i_max_number_of_output_colors,
				'i_max_number_of_output_colors',
				'c58d3547-f8ce-4604-8416-337010a0abd7');
		} // if
		if(i_max_number_of_output_colors<2){
			raudrohi.tmg('23c8c772-00e7-495b-8516-337010a0abd7',
				'i_max_number_of_output_colors == '+
				i_max_number_of_output_colors+' < 2 ');
		} // if
		var ar_rgb_start=raudrohi.vfx.ar_html2rgb(s_html_color_start);
		var ar_rgb_end=raudrohi.vfx.ar_html2rgb(s_html_color_end);
		//------
		var fd_1=null;
		var b_use_integer_mode=true;
		var fd_min=null;
		var fd_max=null;
		// It could be that blue is "small" in the start color
		// and "big" in the end color while red is "big" in
		// the start color and "small" in the end color, i.e.
		// it may be that the intensity of one color increases
		// while the intensity of another colord decreases.
		var b_reverse=false;
		var i_maximum_number_of_intermittant_numbers=i_max_number_of_output_colors-2;
		//------
		b_reverse=false;
		fd_min=ar_rgb_start[0];
		fd_max=ar_rgb_end[0];
		if(fd_max<fd_min){
			fd_1=fd_max;
			fd_max=fd_min;
			fd_min=fd_1;
			b_reverse=true;
		} // if
		var ar_reds_interp=raudrohi.lang.ar_interpolate(
			fd_min,fd_max,i_maximum_number_of_intermittant_numbers,b_use_integer_mode);
		if(b_reverse){
			ar_reds_interp.reverse();
		} // if
		//------
		b_reverse=false;
		fd_min=ar_rgb_start[1];
		fd_max=ar_rgb_end[1];
		if(fd_max<fd_min){
			fd_1=fd_max;
			fd_max=fd_min;
			fd_min=fd_1;
			b_reverse=true;
		} // if
		var ar_greens_interp=raudrohi.lang.ar_interpolate(
			fd_min,fd_max,i_maximum_number_of_intermittant_numbers,b_use_integer_mode);
		if(b_reverse){
			ar_greens_interp.reverse();
		} // if
		//------
		b_reverse=false;
		fd_min=ar_rgb_start[2];
		fd_max=ar_rgb_end[2];
		if(fd_max<fd_min){
			fd_1=fd_max;
			fd_max=fd_min;
			fd_min=fd_1;
			b_reverse=true;
		} // if
		var ar_blues_interp=raudrohi.lang.ar_interpolate(
			fd_min,fd_max,i_maximum_number_of_intermittant_numbers,b_use_integer_mode);
		if(b_reverse){
			ar_blues_interp.reverse();
		} // if
		//------
		var s_lc_red='red';
		var s_lc_green='red';
		var s_lc_blue='blue';
		var ar_interpolation_ars=new Array();
		ar_interpolation_ars.push([ar_reds_interp.length,s_lc_red]);
		ar_interpolation_ars.push([ar_greens_interp.length,s_lc_green]);
		ar_interpolation_ars.push([ar_blues_interp.length,s_lc_blue]);
		ar_interpolation_ars.sort(function(a,b){ // descending
			return (a[0]<=b[0]);
		});
		var i_n_of_output_colors=(ar_interpolation_ars[0])[0];
		//------
		var ar_red=raudrohi.lang.ar_scale_number_of_frames(
			ar_reds_interp,i_n_of_output_colors);
		var ar_green=raudrohi.lang.ar_scale_number_of_frames(
			ar_greens_interp,i_n_of_output_colors);
		var ar_blue=raudrohi.lang.ar_scale_number_of_frames(
			ar_blues_interp,i_n_of_output_colors);
		//------
		var ar_out=new Array();
		var s_html_color=null;
		var s_lc_numsign='#';
		var i=0;
		var i_base=16;
		var i_number_of_characters=2;
		var s_red=null;
		var s_green=null;
		var s_blue=null;
		for(i=0;i<i_n_of_output_colors;i++){
			s_red=raudrohi.lang.s_num2s_with_leading_zero_normalization(
				ar_red[i],i_base,i_number_of_characters);
			s_green=raudrohi.lang.s_num2s_with_leading_zero_normalization(
				ar_green[i],i_base,i_number_of_characters);
			s_blue=raudrohi.lang.s_num2s_with_leading_zero_normalization(
				ar_blue[i],i_base,i_number_of_characters);
			s_html_color=s_lc_numsign+s_red+s_green+s_blue;
			ar_out.push(s_html_color);
		} // for
		return ar_out;
	} catch (err){
		raudrohi.tmg('fa94fa19-5c50-4680-9216-337010a0abd7',err);
	} // catch
} // raudrohi.vfx.ar_interpolate_html_colors

//=========================================================================

