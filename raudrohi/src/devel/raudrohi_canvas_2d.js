//=========================================================================
// Copyright (c) 2012, martin.vahi@softf1.com that has an
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
// The raudrohi canvas_2d is a namespace for HTML5 2D canvas 
// related code.
//
//-------------------------------------------------------------------------
if(window.raudrohi_canvas_2d_exists!==true){
	window.raudrohi.canvas_2d={};
	window.raudrohi_canvas_2d_exists=true;
} // if
if(window.raudrohi_canvas_2d_private_code_exists!==true){
	window.raudrohi.canvas_2d.private_code={};
	window.raudrohi_canvas_2d_private_code_exists=true;
} // if

//-------------------------------------------------------------------------

// Assumption is that the canvas DOM elements are already peresent.
raudrohi.canvas_2d.draw_disk_2_canvas_t1=function(i_x,i_y,i_radius,
	s_canvas_html_id,s_color){
	try{
		if(raudrohi.settings.debug_JavaScript===true){			
			raudrohi.base.assert_isString(s_canvas_html_id, 
				's_canvas_html_id', 'e468414e-b62f-489c-b2c4-40a05151acd7');			
			raudrohi.lang.assert_is_an_HTML_color(s_color,'s_color',
				'748e2717-451d-4925-a2c4-40a05151acd7');			
			raudrohi.base.assert_isNumber(i_x,'i_x',
				'52fc54a1-e029-46c8-a5c4-40a05151acd7');
			raudrohi.base.assert_isNumber(i_y,'i_y',
				'52145aa4-c221-402f-92c4-40a05151acd7');
			raudrohi.base.assert_isNumber(i_radius,'i_radius',
				'024afe56-5e42-48e0-83c4-40a05151acd7');
			if(i_x<0){
				raudrohi.tmg('26130352-37a7-49f5-81c4-40a05151acd7',
					'i_x == '+i_x+' < 0');
			} // if                
			if(i_y<0){
				raudrohi.tmg('22d15b8e-1c72-4ee8-93b4-40a05151acd7',
					'i_y == '+i_y+' < 0');
			} // if                
			if(i_radius<1){
				raudrohi.tmg('e595e01d-1906-4f50-92b4-40a05151acd7',
					'i_radius == '+i_radius+' < 1');
			} // if                
		} // if                
		var ob_canvas=document.getElementById(s_canvas_html_id);
		var ob_canvas_context=ob_canvas.getContext('2d');
		ob_canvas_context.lineWidth=1;
		ob_canvas_context.strokeStyle=s_color;
		ob_canvas_context.fillStyle=s_color;
		ob_canvas_context.beginPath();
		ob_canvas_context.arc(i_x,i_y,i_radius,0,2*Math.PI,false);
		ob_canvas_context.fill();
		ob_canvas_context.stroke();
		ob_canvas_context.closePath();
	} catch (err){
		raudrohi.tmg('3c0939c3-dbb5-4176-a4b4-40a05151acd7',err);
	} // catch
} // raudrohi.canvas_2d.draw_disk_2_canvas_t1

//-------------------------------------------------------------------------

// Assumption is that the canvas DOM elements are already peresent.
raudrohi.canvas_2d.draw_line_2_canvas_t1=function(i_x1,i_y1,
	i_x2,i_y2, s_canvas_html_id,s_line_color,i_line_width){
	try{
		if(raudrohi.settings.debug_JavaScript===true){			
			raudrohi.base.assert_isNumber(i_x1,'i_x1',
				'5396bf40-db3f-4721-95b4-40a05151acd7');
			raudrohi.base.assert_isNumber(i_y1,'i_y1',
				'152605cb-781c-4178-94b4-40a05151acd7');
			raudrohi.base.assert_isNumber(i_x2,'i_x2',
				'8945ac38-91de-4746-93b4-40a05151acd7');
			raudrohi.base.assert_isNumber(i_y2,'i_y2',
				'cce37e14-268c-40b4-84b4-40a05151acd7');
			raudrohi.base.assert_isString(s_canvas_html_id,'s_canvas_html_id',
				'9fa30752-18c3-4986-a4b4-40a05151acd7');			
			raudrohi.lang.assert_is_an_HTML_color(s_line_color,'s_line_color',
				'9a110655-a32e-48d7-95b4-40a05151acd7');			
			raudrohi.base.assert_isNumber(i_line_width,'i_line_width',
				'497cf8f4-4fde-43f0-85b4-40a05151acd7');
			if(i_x1<0){
				raudrohi.tmg('3a5b1204-9d78-4ccd-92b4-40a05151acd7',
					'i_x1 == '+i_x1+' < 0');
			} // if                
			if(i_y1<0){
				raudrohi.tmg('70f08b13-48ab-44e7-b3b4-40a05151acd7',
					'i_y1 == '+i_y1+' < 0');
			} // if                
			if(i_x2<0){
				raudrohi.tmg('27c47b23-d2b2-4af2-82b4-40a05151acd7',
					'i_x2 == '+i_x2+' < 0');
			} // if                
			if(i_y2<0){
				raudrohi.tmg('447ba4f6-e99e-4711-83b4-40a05151acd7',
					'i_y2 == '+i_y2+' < 0');
			} // if                
			if(i_line_width<1){
				raudrohi.tmg('ebf9a912-5a1d-4de6-81a4-40a05151acd7',
					'i_line_width== '+i_line_width+' < 1');
			} // if                
		} // if                
		var ob_canvas=document.getElementById(s_canvas_html_id);
		var ob_canvas_context=ob_canvas.getContext('2d');
		ob_canvas_context.lineWidth=i_line_width;
		ob_canvas_context.strokeStyle=s_line_color;
		ob_canvas_context.beginPath();
		ob_canvas_context.moveTo(i_x1,i_y1);
		ob_canvas_context.lineTo(i_x2,i_y2);
		ob_canvas_context.closePath();
		ob_canvas_context.stroke();
	} catch (err){
		raudrohi.tmg('81a55b19-ca05-4235-b1a4-40a05151acd7',err);
	} // catch
} // raudrohi.canvas_2d.draw_line_2_canvas_t1

//-------------------------------------------------------------------------

// Assumption is that the canvas DOM elements are already peresent.
raudrohi.canvas_2d.draw_image_2_canvas_t1=function(s_canvas_html_id,
	i_image_upper_left_corner_x, i_image_upper_left_corner_y,
	s_image_URL, func_a_function_to_call_within_the_image_onload){
	try{
		if(raudrohi.settings.debug_JavaScript===true){			
			raudrohi.base.assert_isString(s_canvas_html_id,'s_canvas_html_id',
				'2dc3b913-b2a6-4740-a9a4-40a05151acd7');			
			raudrohi.base.assert_isString(s_image_URL,'s_image_URL',
				'e44c5b4f-2d55-4734-91a4-40a05151acd7');			

			raudrohi.base.assert_isNumber(i_image_upper_left_corner_x,
				'i_image_upper_left_corner_x',
				'72a4e873-c00e-44c3-8ba4-40a05151acd7');
			raudrohi.base.assert_isNumber(i_image_upper_left_corner_y,
				'i_image_upper_left_corner_y',
				'de40e92e-8fd2-4861-b1a4-40a05151acd7');
			if(i_image_upper_left_corner_x<0){
				raudrohi.tmg('e955cb3c-598c-4265-a4a4-40a05151acd7',
					'i_image_upper_left_corner_x == '+
					i_image_upper_left_corner_x+' < 0');
			} // if                
			if(i_image_upper_left_corner_y<0){
				raudrohi.tmg('80f2873f-5f13-48b9-84a4-40a05151acd7',
					'i_image_upper_left_corner_y == '+
					i_image_upper_left_corner_y+' < 0');
			} // if                
			raudrohi.base.assert_isFunction(
				func_a_function_to_call_within_the_image_onload,
				'func_a_function_to_call_within_the_image_onload',
				'46e85552-1dcb-4a56-b1a4-40a05151acd7');
		} // if                
		var ob_canvas=document.getElementById(s_canvas_html_id);
		var ob_canvas_context=ob_canvas.getContext('2d');
		var ob_img= new Image();
		ob_img.src =s_image_URL;
		ob_img.onload=function(){
			// Credits related to the "onload" part go to
			// http://www.jefclaes.be/2010/12/html5-drawing-images-to-canvas-gotcha.html
			ob_canvas_context.drawImage(ob_img, 
				i_image_upper_left_corner_x, i_image_upper_left_corner_y);
			func_a_function_to_call_within_the_image_onload();
		} // onload
	} catch (err){
		raudrohi.tmg('1205f111-dd52-446f-a5a4-40a05151acd7',err);
	} // catch
} // raudrohi.canvas_2d.draw_image_2_canvas_t1

//-------------------------------------------------------------------------

//=========================================================================

