//=========================================================================
//
// This file contains classes that are used for plain HTML generation.
// The classes do not use any of the widgets specific infrastructure,
// but they do touch the DOM.
// 
// The "ui" stands for User Interface.
// 
//========================================================================
if(window.raudrohi_widgetless_ui_classes_exists!==true){
	window.raudrohi.widgetless_ui_classes={}; 
	window.raudrohi_widgetless_ui_classes_exists=true;
} // if

if(window.raudrohi_widgetless_ui_classes_private_code_exists!==true){
	window.raudrohi.widgetless_ui_classes.private_code={}; 
	window.raudrohi_widgetless_ui_classes_private_code_exists=true;
} // if

//------------------------------------------------------------------------

window.raudrohi.widgetless_ui_classes.img_with_links=function(s_image_url,
	i_image_file_width, i_image_file_height){
	try{
		var s_URL=s_image_url;
		var s_map_html_id=s_image_url.replace(
			"[.,:/\\s]","_","g");
		var i_width_orig=i_image_file_width; // px
		var i_height_orig=i_image_file_height;// px
		var private_code={};
				
		var ar_rect_i_x_orig=[];
		var ar_rect_i_y_orig=[];
		var ar_rect_s_alternate_text=[];
		var ar_rect_s_link_URL=[];

		var lc_s_rect_area_template='<area shape="rect" '+
		'coords="BLANK_FOR_COORDINATES" '+
		'alt="BLANK_FOR_ALTERNATE_TEXT" '+
		'href="BLANK_FOR_LINK_URL" />'+"\n";

		var lc_s_img_template_1='<img '+
		'src="BLANK_FOR_IMAGE_URL" '+
		'width="BLANK_FOR_IMAGE_WIDTH" '+
		' style="padding:0px;" '+
		'border="0" '+
		'usemap="#BLANK_FOR_MAP_HTML_ID"/>'+"\n";

		var lc_s_map_template_prefix='<map '+
		'name="BLANK_FOR_MAP_HTML_ID" '+
		'id="BLANK_FOR_MAP_HTML_ID">'+"\n";
		var lc_s_map_template_suffix='</map>'+"\n";
					

		this.declare_rectangle=function(i_x1,i_y1,i_x2,i_y2,
			s_link_URL,s_alternate_text){
			ar_rect_i_x_orig.push(i_x1,i_x2);
			ar_rect_i_y_orig.push(i_y1,i_y2);
			ar_rect_s_alternate_text.push(
				s_alternate_text);
			ar_rect_s_link_URL.push(s_link_URL);
		} // declare_rectangle

		this.to_s_by_new_width=function (fd_or_i_new_width){
			try{
				var fd_fx=(fd_or_i_new_width*1.0)/i_width_orig;

				var s_out=""+
				lc_s_map_template_prefix;
				var i_len=Math.floor(ar_rect_i_x_orig.length/2); 
				var i=0;
				var elem;
				var i_x1=0;
				var i_x2=0;
				var i_y1=0;
				var i_y2=0;
				var ix=0;
				var s_link_url=null;
				var s_alt_txt=null;
				var s_area_html=null;
				var s_coords=null;
				for(i=0;i<i_len;i++){
					ix=2*i;
					i_x1=Math.round(fd_fx*
						ar_rect_i_x_orig[ix]);
					i_x2=Math.round(fd_fx*
						ar_rect_i_x_orig[ix+1]);
					i_y1=Math.round(fd_fx*
						ar_rect_i_y_orig[ix]);
					i_y2=Math.round(fd_fx*
						ar_rect_i_y_orig[ix+1]);
					s_coords=""+i_x1+","+i_y1+
					","+i_x2+","+i_y2;
					s_link_url=ar_rect_s_link_URL[i];
					s_alt_txt=ar_rect_s_alternate_text[i];
					s_area_html=""+lc_s_rect_area_template;
					s_area_html=s_area_html.replace(
						"BLANK_FOR_LINK_URL",s_link_url);
					s_area_html=s_area_html.replace(
						"BLANK_FOR_ALTERNATE_TEXT",s_alt_txt);
					s_area_html=s_area_html.replace(
						"BLANK_FOR_COORDINATES",s_coords);
					s_out=s_out+s_area_html;
				} // for
				s_out=s_out+lc_s_map_template_suffix;
				var i_img_width_new=Math.round(
					i_width_orig*fd_fx);
				var s_img=""+lc_s_img_template_1;
				s_img=s_img.replace(
					"BLANK_FOR_IMAGE_WIDTH",
					""+i_img_width_new);
				s_img=s_img.replace(
					"BLANK_FOR_IMAGE_URL",s_URL);
				s_out=s_out+s_img;
				s_out=s_out.replace(
					/BLANK_FOR_MAP_HTML_ID/g,
					s_map_html_id);
				//var i_img_height_new=Math.round(
				//i_height_orig*fd_fx);
				return s_out;
			} catch (err){
				raudrohi.tmg('27a21f10-df70-4791-942c-61c111202dd7',err);
			} // catch
		} // to_s_by_new_width
	} catch (err){
		raudrohi.tmg('098fe23e-3fcd-4244-b12c-61c111202dd7',err);
	} // catch
} // class img_with_links


//------------------------------------------------------------------------
