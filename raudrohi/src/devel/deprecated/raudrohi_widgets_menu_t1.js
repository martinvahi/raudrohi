//=========================================================================

raudrohi.widgets.g1.menu_t1_content_ar_rgxs=[];
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values=[];
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("õ;","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("&otilde;");
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("Õ","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("&Otilde;");
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("ä","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("&auml;");
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("Ä","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("&Auml;");
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("ö","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("&ouml;");
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("Ö","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("&Ouml;");
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("ü","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("&uuml;");
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("Ü","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("&Uuml;");
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("š","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("&scaron;");
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("Š","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("&Scaron;");
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("ž","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("&#382;");
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("Ž","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("&#381;");
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("„","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("&bdquo;");
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("“","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("&ldquo;");
raudrohi.widgets.g1.menu_t1_content_ar_rgxs.push(new RegExp("[\\s\\t\\n\\r]","g"));
raudrohi.widgets.g1.menu_t1_content_ar_replacement_values.push("_");


// The raudrohi.widgets.g1.menu_t1_content associates menu item text with an instance
// that contains further information about the menu item.
// As the menu has a maximum width, the menuitem_text_max_width
// is used for tuning the truncation function, which is used for
// making sure that no menuitem text within the array_of_menuitem_texts
// is wider than the menuitem_text_max_width. The
// array_of_menuitem_instances is expected to contain objects that
// have a "menuitem_label" public field.
raudrohi.widgets.g1.menu_t1_content=function(array_of_menuitem_instances,
	menuitem_text_max_width){
	try{
		var self_public_=this;
		if(raudrohi_settings_debug_JavaScript===true){
			if(!raudrohi_adapter_isArray(array_of_menuitem_instances)){
				raudrohi.tmg('c776a949-e4fa-4f01-b249-3340a0219bd7',
					'The array_of_menuitem_instances is not an array.');
			} // if
			if(!raudrohi_adapter_isNumber(menuitem_text_max_width)){
				raudrohi.tmg('fe91bd10-9605-4a7d-a349-3340a0219bd7',
					'The menuitem_text_max_width is not of a numeric type.');
			} // if
			if(menuitem_text_max_width<1){
				raudrohi.tmg('131b2e35-99cd-4d59-9149-3340a0219bd7',
					'menuitem_text_max_width=='+menuitem_text_max_width+
					' < 1');
			} // if
		} // if
		var menuitem_text_max_width_=menuitem_text_max_width;
		var ar_menuitem_texts_for_writing_2_GUI_=[]; // for cacheing only
		this.get_array_of_menuitem_texts_that_are_meant_only_for_writing_into_GUI=function(){
			return ar_menuitem_texts_for_writing_2_GUI_;
		}// get_array_of_menuitem_texts_that_are_meant_only_for_writing_into_GUI
		var numberOfmenuitems_=0;

		// key   == menuitem text
		// value == angervaks.ui.products_menuitem
		var ht_reversefunc_=new Hashtable();

		// Amazing, just imagine, that if a menu contains 'Hello "Earth"!'
		// as its menu item, i.e. menuitem label, then the form content
		// is returned only till the first double quotation mark, which
		// is: 'Hello '. Well done!!!! Ingenious!!!! Now, everyone,
		// let's all start a game called MineSeeper and try to find other
		// characters that have special treatment like the doublequote (")
		// has. If you hit a mine, the application crashes, preferably
		// in the client's computer. And there's no-one other in a better
		// position at finding those mines than the people, who actually,
		// extensively, use the application, i.e. the clients.
		function truncate_by_WEBskriptkiddymentality_idiocity_workaroundquirk_1(s_text){
			try{
				var s_out=s_text;
				var i1=s_text.indexOf('"');
				if(i1===(-1)){
					return s_out;
				} // if
				if(i1===0){
					return "";
				} // if
				s_out=s_text.substring(0,i1);
				return s_out;
			} catch (err){
				raudrohi.tmg('54a8831e-c462-4547-a449-3340a0219bd7',err);
			} // catch
		} // truncate_by_WEBskriptkiddymentality_idiocity_workaroundquirk_1

		// There's a problem that the current Hashtable
		// implementation does not handle all UTF-8 characters
		// correctly. So this function is a kind of "pre-hash"
		// function that replaces at least some of the most
		// common non-ASCII characters out. It's a kind of dirty,
		// solution that postpones the real refactoring, which
		// will probably be quite time consuming.
		function prehash(s_text){
			try{
				var ar_rgx=raudrohi.widgets.g1.menu_t1_content_ar_rgxs;
				var ar_replacement_values=raudrohi.widgets.g1.menu_t1_content_ar_replacement_values;
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(s_text,'s_text',
						'26677b2a-5b66-47ed-8449-3340a0219bd7');
					if(ar_rgx.length!==ar_replacement_values.length){
						raudrohi.tmg('133a81c9-2753-47d9-a149-3340a0219bd7',
							"ar_rgx.length=="+ar_rgx.length+
							" != ar_replacement_values.length=="+
							ar_replacement_values.length);
					} // if
				} // if
				var s1=s_text;
				var s2=null;
				var len=ar_rgx.length;
				var i=0;
				var rgx;
				var s_replacement_value;
				for(i=0;i<len;i++){
					rgx=ar_rgx[i];
					s_replacement_value=ar_replacement_values[i];
					s2=s1.replace(rgx,s_replacement_value);
					s1=s2;
				} // for
				return s1;
			} catch (err){
				raudrohi.tmg('4ad73e45-0a98-4551-a549-3340a0219bd7',err);
			} // catch
		} // prehash

		// One needs to hash the same text for 'Hello "Earth"'
		// and 'Hello ', because  the GUI part has a quirk that
		// if a menu text 'Hello "Earth"' is read in, 'Hello ' is
		// returned.
		//
		// There will also be collisions between
		// 'Welcome to "Hell"!' and
		// 'Welcome to "Heaven"!'.
		// The workaround to that is  to put unique prefixes, like
		// 'a: Welcome to "Hell"!' and
		// 'b: Welcome to "Heaven"!'.
		//
		// A sample scenario, if menuitem_text_max_width_==4 :
		//   ' a " c d   '   (menuitem_label)
		//    'a " c d'      (trim)
		//    'a " '         (truncate by max width)
		//    'a '           (doublequote qurik by GUI)
		function text_as_if_it_were_read_from_GUI_menu(
			s_menu_item_dot_menuitem_label){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(s_menu_item_dot_menuitem_label,
						's_menu_item_dot_menuitem_label',
						'2c6cc930-8b30-4890-a449-3340a0219bd7');
				} // if
				var s1=s_menu_item_dot_menuitem_label;
				var s2=null;
				var s3=null;
				s2=raudrohi.adapter.trim(s1);
				s3=s2.substring(0,menuitem_text_max_width_);
				s1=truncate_by_WEBskriptkiddymentality_idiocity_workaroundquirk_1(s3);
				return s1;
			} catch (err){
				raudrohi.tmg('60a92522-72fa-4217-9339-3340a0219bd7',err);
			} // catch
		} // text_as_if_it_were_read_from_GUI_menu

		this.GUI_sideefectfree_text_2_hashtable_key=function(
			s_menu_item_dot_menuitem_label){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(
						s_menu_item_dot_menuitem_label,
						's_menu_item_dot_menuitem_label',
						'9f9f324a-7e38-4425-8539-3340a0219bd7');
				} // if
				var s1=s_menu_item_dot_menuitem_label;
				var s2=text_as_if_it_were_read_from_GUI_menu(s1);
				var s3=prehash(s2);
				return s3;
			} catch (err){
				raudrohi.tmg('b8615f28-b864-4980-a139-3340a0219bd7',err);
			} // catch
		} // GUI_sideefectfree_text_2_hashtable_key

		this.text_with_GUI_sideffects_2_hashtable_key=function(
			s_text_as_read_from_the_GUI_menu){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(
						s_text_as_read_from_the_GUI_menu,
						's_text_as_read_from_the_GUI_menu',
						'52a64b53-ce28-4a97-8139-3340a0219bd7');
				} // if
				var s1=s_text_as_read_from_the_GUI_menu;
				var s2=prehash(s1);
				return s2;
			} catch (err){
				raudrohi.tmg('18bbe834-34fc-4dfe-8239-3340a0219bd7',err);
			} // catch
		} // text_with_GUI_sideffects_2_hashtable_key

		var ar_GUI_sideeffectfree_texts_=[];
		this.get_ar_GUI_sideeffectfree_texts=function(){
			try{
				return ar_GUI_sideeffectfree_texts_;
			} catch (err){
				raudrohi.tmg('2371c565-b29c-4fe6-b439-3340a0219bd7',err);
			} // catch
		} // get_GUI_sideeffectfree_texts

		function a_constructor(array_of_menuitem_instances){
			try{
				ht_reversefunc_.clear();
				ar_menuitem_texts_for_writing_2_GUI_=[];
				ar_GUI_sideeffectfree_texts_=[];
				var len=array_of_menuitem_instances.length;
				numberOfmenuitems_=len;
				var i=0;
				var mi;
				var s=null;
				var s1=null;
				var s2=null;
				var s3=null;
				var s_hashtable_key=null;
				for(i=0;i<len;i++){
					mi=array_of_menuitem_instances[i];
					mi.mc_ordinal_number=i;
					// If the string bisection is done so that the very
					// last character is a space, then later, when one reads
					// that value from the textfield, the space is lost,
					// unless there's a doublequotes character in the
					// string.  Further comments are at
					// text_as_if_it_were_read_from_GUI_menu
					s1=mi.menuitem_label;
					ar_GUI_sideeffectfree_texts_.push(s1);
					s2=raudrohi.adapter.trim(s1);
					s3=s2.substring(0,menuitem_text_max_width_);
					mi.mc_truncated_text_=s3;
					ar_menuitem_texts_for_writing_2_GUI_.push(s3);
					s_hashtable_key=self_public_.GUI_sideefectfree_text_2_hashtable_key(s1);
					// In the case of the next if-statement  there
					// can be collisions, because the
					// because the hashtable hash function does not
					// handle all UTF-8 characters properly,
					if(raudrohi_settings_debug_JavaScript===true){
						if(ht_reversefunc_.containsKey(s_hashtable_key)===true){
							//raudrohi.adapter.log("WARNING: "+
							raudrohi.tmg("4cb29231-5fa4-4c29-a149-3340a0219bd7",
								"Given the maximum menu width of "+
								"menuitem_text_max_width_=="+
								menuitem_text_max_width_+
								", there is a collision of menuitem texts, "+
								"s=='"+s+"'.");
						} // if
					} // if
					ht_reversefunc_.put(s_hashtable_key,mi);
				} // for
			} catch (err){
				raudrohi.tmg('36cbf946-bb90-4ac3-b339-3340a0219bd7',err);
			} // catch
		} // a_constructor
		a_constructor(array_of_menuitem_instances);

		this.GUI_sideeffectfree_text_2_instance=function(
			s_menu_item_dot_menuitem_label){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(
						s_menu_item_dot_menuitem_label,
						's_menu_item_dot_menuitem_label',
						'075e4014-17c2-4829-9339-3340a0219bd7');
				} // if
				var s_hashtable_key=self_public_.GUI_sideefectfree_text_2_hashtable_key(
					s_menu_item_dot_menuitem_label);
				var mi=ht_reversefunc_.get(s_hashtable_key);
				return mi;
			} catch (err){
				raudrohi.tmg('e5386d50-6c91-4373-9239-3340a0219bd7',err);
			} // catch
		} // GUI_sideeffectfree_text_2_instance

		this.text_with_GUI_sideeffects_2_instance=function(
			s_text_as_read_from_the_GUI_menu){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(
						s_text_as_read_from_the_GUI_menu,
						's_text_as_read_from_the_GUI_menu',
						'07d44d33-401f-4cd9-9229-3340a0219bd7');
				} // if
				var s_hashtable_key=self_public_.text_with_GUI_sideffects_2_hashtable_key(
					s_text_as_read_from_the_GUI_menu);
				var mi=ht_reversefunc_.get(s_hashtable_key);
				return mi;
			} catch (err){
				raudrohi.tmg('f556844d-0ada-4496-a229-3340a0219bd7',err);
			} // catch
		} // text_with_GUI_sideeffects_2_instance


		this.menuitem_text_exists=function(s_menu_item_dot_menuitem_label){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(s_menu_item_dot_menuitem_label,
						's_menu_item_dot_menuitem_label',
						'c2a97855-de31-4837-b529-3340a0219bd7');
				} // if
				var s_hashtable_key=self_public_.GUI_sideefectfree_text_2_hashtable_key(
					s_menu_item_dot_menuitem_label);
				var b=ht_reversefunc_.containsKey(s_hashtable_key);
				return b;
			} catch (err){
				raudrohi.tmg('8b740014-2d45-4a7a-8529-3340a0219bd7',err);
			} // catch
		} // menuitem_text_exists

		this.numberOfmenuitems=function(){
			return numberOfmenuitems_;
		} // numberOfmenuitems

	} catch (err){
		raudrohi.tmg('4342b1a1-47d9-4ccf-a529-3340a0219bd7',err);
	} // catch
} // raudrohi.widgets.g1.menu_t1_content

//------------------------------------------------------------------------

// WARNING: Direct use of this class is DEPRECATED, strongly discouraged.
// Use a wrapper, raudrohi.widgets.g1.partialmenu_t1 instead.
//
// TODO: This class works correctly and for backward compatibility it
// can not be thrown out, but one should make a copy of it, create
// menu_t2 and refactor the partialmenu_t1 to use the newer version.
raudrohi.widgets.g1.menu_t1=function( s_html_id, html_if_menucontent_not_set){
	var self_public_=this;
	var lc_s_emptystring=raudrohi_glc_s_emptystring;
	var lc_s_space=raudrohi_glc_s_space;
	var lc_s_br=raudrohi_glc_s_br;
	try{
		if(raudrohi_settings_debug_JavaScript===true){
			raudrohi.base.assert_isString(s_html_id,'s_html_id',
				'f93b173a-1e5b-4030-a329-3340a0219bd7');
			raudrohi.base.assert_isString(html_if_menucontent_not_set,
				'html_if_menucontent_not_set',
				'154fdb24-13a1-4756-8329-3340a0219bd7');
		} // if

		var pileofmethods_t1_=new raudrohi.widgets.g1.pileofmethods_t1(
			self_public_,'raudrohi.widgets.g1.menu_t1',s_html_id);
		var prc_=self_public_.private_code_;
		prc_.content_set_=false;

		var useed_=prc_.html_id_+'_useed';
		prc_.container_id_=prc_.html_id_+'_div';
		prc_.content_=new raudrohi.widgets.g1.menu_t1_content([],2);
		var selector_location_id_=useed_+'_selector_location_div';
		var menutext_display_id_=useed_+'_selector_menuitemtext_div';
		var html_if_menucontent_not_set_=html_if_menucontent_not_set;

		var selected_menuitem_=null;
		this.get_selected_menuitem=function(){
			return selected_menuitem_;
		} // get_selected_menuitem

		var display_menuitem_whole_label_=true;
		this.display_menuitem_whole_label=function(true_if_display){
			raudrohi.base.assert_isBoolean(true_if_display, 'true_if_display',
				'6bcb4c1e-ffb4-40cb-b329-3340a0219bd7');
			try{
				display_menuitem_whole_label_=true_if_display;
				if(self_public_.is_hidden()===false){
					self_public_.unhide();
				} // if
			} catch (err){
				raudrohi.tmg('e85ce71f-4354-4563-a419-3340a0219bd7',err);
			} // catch
		} // display_menuitem_whole_label

		var b_always_display_menuitem_whole_label_=false;
		this.always_display_menuitem_whole_label=function(true_if_display){
			raudrohi.base.assert_isBoolean(true_if_display, 'true_if_display',
				'7dac0d22-d9a5-48a6-8519-3340a0219bd7');
			try{
				b_always_display_menuitem_whole_label_=true_if_display;
				if(self_public_.is_hidden()===false){
					self_public_.unhide();
				} // if
			} catch (err){
				raudrohi.tmg('ab8c173e-4979-4acb-8219-3340a0219bd7',err);
			} // catch
		} // display_menuitem_whole_label

		var b_apply_wordwrap_=false;
		var i_wordwrap_max_line_width_=30;

		// If the i_wordwrap_max_line_width_or_null===null,
		// the wordwrap is not used, i.e. by setting the wordwrap to
		// null, it is switched off.
		this.set_wordwrap=function(i_wordwrap_max_line_width_or_null){
			try{
				if(i_wordwrap_max_line_width_or_null===null){
					b_apply_wordwrap_=false;
					return;
				} // if
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isNumber(
						i_wordwrap_max_line_width_or_null,
						'i_wordwrap_max_line_width_or_null',
						'b2c4cb1d-3bea-4dbc-a519-3340a0219bd7');
					if(i_wordwrap_max_line_width_or_null<1){
						raudrohi.tmg('d4bf5329-7d91-42a0-b119-3340a0219bd7',
							"i_wordwrap_max_line_width_or_null=="+
							i_wordwrap_max_line_width_or_null);
					} // if
				} // if
				i_wordwrap_max_line_width_=i_wordwrap_max_line_width_or_null;
				b_apply_wordwrap_=true;
			} catch (err){
				raudrohi.tmg('26ec1b05-92c7-460f-a819-3340a0219bd7',err);
			} // catch
		} // this.set_wordwrap


		function create_containers_selector_html(){
			try{
				var ht=raudrohi.widgetless_ui.func.get_alignment_style_values(prc_.alignment1_);
				var answer=lc_s_emptystring+
				'<table border="0px"><tbody>'+
				'<tr><td>'+
				'<div id="'+menutext_display_id_+'" ></div>'+
				'</td></tr>'+
				'<tr><td>'+
				'<div id="'+selector_location_id_+'" style="vertical-align:'+
				ht.get('vertical-align')+';text-align:'+ht.get('text-align')+
				';"></div>'+
				'</td></tr>'+
				'</tbody></table>';
				raudrohi.base.pool_of_hashtables.return_used_hashtable(ht);
				return answer;
			} catch (err){
				raudrohi.tmg('1b091b1a-4d2d-4c21-9119-3340a0219bd7',err);
			} // catch
		} // create_containers_selector_html


		var containers_html_cache_;
		function create_containers(){
			try{
				if(!prc_.containers_html_cached_){
					containers_html_cache_=create_containers_selector_html();
					prc_.containers_html_cached_=true;
				} // if
				raudrohi.base.set_innerHTML(prc_.container_id_,
					containers_html_cache_);
			} catch (err){
				raudrohi.tmg('27a302f4-744e-40b3-a419-3340a0219bd7',err);
			} // catch
		} // create_containers

		// Within the evh_selection_menu_t1 it is assumed that the menu is visible.
		self_public_.private_code_.evh_.evh_selection_menu_t1=function(e){
			try{
				//raudrohi.adapter.YUI_preventdefault(e); // intentionally omitted
				if(self_public_.is_hidden()){
					raudrohi.tmg('ac9ab317-c6e6-407d-9109-3340a0219bd7',
						'One ought to be able to select only, when the selector '+
						'is not hidden.');
				} // if
				var formfield_value=raudrohi.widgetless_ui.func.get_formfield_value(prc_.html_id_);
				var menu_item=prc_.content_.text_with_GUI_sideeffects_2_instance(
					formfield_value);
				if(menu_item==null){
					raudrohi.tmg('1de0ac72-9480-4712-a209-3340a0219bd7',
						'Textfield value =="'+formfield_value+
						'", but the menu content does not contain '+
						'such element. ');
				} // if
				render_menutext_display_value_t1(menu_item.menuitem_label);
				selected_menuitem_=menu_item;
				if(menu_item==null){
					raudrohi.tmg('37c1831c-0c60-4f3a-8409-3340a0219bd7',
						'menu_item==null');
				} // if
				self_public_.evh_selection_impl(menu_item);
			} catch (err){
				raudrohi.tmg('4ea9723b-5868-4dc6-9209-3340a0219bd7',err);
			} // catch
		} // evh_selection_menu_t1


		function render_part2_selector(){
			try{
				var ar_menuitem_texts_for_writing_2_GUI=prc_.content_.get_array_of_menuitem_texts_that_are_meant_only_for_writing_into_GUI();
				var selector_html;
				if(selected_menuitem_!==null){
					selector_html=raudrohi.widgetless_ui.func.toHTML_array2selector(
						prc_.html_id_,ar_menuitem_texts_for_writing_2_GUI,
						selected_menuitem_.mc_truncated_text_,1);
				} else{
					selector_html=raudrohi.widgetless_ui.func.toHTML_array2selector(
						prc_.html_id_,ar_menuitem_texts_for_writing_2_GUI,lc_s_emptystring,1);
				} // else
				raudrohi.base.set_innerHTML(selector_location_id_,
					selector_html);
				raudrohi.adapter.addEventListner(prc_.html_id_, 'change',
					self_public_.private_code_.evh_.evh_selection_menu_t1);
			} catch (err){
				raudrohi.tmg('75aaa91d-ddd7-460b-8309-3340a0219bd7',err);
			} // catch
		} // render_part2_selector

		function render_menutext_display_value_t1(s_full_menuitem_text){
			try{
				if((display_menuitem_whole_label_===true)||(b_always_display_menuitem_whole_label_===true)){
					var fulltext=s_full_menuitem_text;
					var truncated_text=raudrohi.widgetless_ui.func.get_formfield_value(prc_.html_id_);
					if((truncated_text.length<fulltext.length)||(b_always_display_menuitem_whole_label_===true)){
						var s=fulltext;
						if (b_apply_wordwrap_===true){
							var b_use_fake_but_fast=true;
							s=raudrohi.lang.word_wrap(fulltext,
								i_wordwrap_max_line_width_,
								lc_s_br,lc_s_space,b_use_fake_but_fast);
						} // if
						raudrohi.base.set_innerHTML(menutext_display_id_,
							'<p>'+s+'</p>');
					} else {
						raudrohi.base.set_innerHTML(menutext_display_id_, lc_s_emptystring);
					} // else
				} else {
					raudrohi.base.set_innerHTML(menutext_display_id_, lc_s_emptystring);
				} // else
			} catch (err){
				raudrohi.tmg('b913d7b3-5723-4954-9409-3340a0219bd7',err);
			} // catch
		} // render_menutext_display_value_t1

		function render_menutext_display_value(){
			try{
				var fulltext=selected_menuitem_.menuitem_label;
				render_menutext_display_value_t1(fulltext);
			} catch (err){
				raudrohi.tmg('35b85ea3-7444-4b94-8109-3340a0219bd7',err);
			} // catch
		} // render_menutext_display_value

		prc_.customizable.compulsory.render_editable=function(){
			try{
				if(prc_.content_set_!==true){
					raudrohi.base.set_innerHTML(prc_.container_id_,
						html_if_menucontent_not_set_);
					return;
				} // if
				create_containers();
				render_part2_selector();
				render_menutext_display_value();
			} catch (err){
				raudrohi.tmg('6510adb1-15e6-4293-b809-3340a0219bd7',err);
			} // catch
		} // render_editable

		prc_.customizable.compulsory.render_readonly=function(){
			try{
				if(!prc_.content_set_){
					raudrohi.base.set_innerHTML(prc_.container_id_,
						html_if_menucontent_not_set_);
					return;
				} // if
				create_containers();
				raudrohi.base.set_innerHTML(selector_location_id_,lc_s_emptystring);

				var s=selected_menuitem_.menuitem_label;
				if (b_apply_wordwrap_===true){
					var b_use_fake_but_fast=true;
					s=raudrohi.lang.word_wrap(selected_menuitem_.menuitem_label,
						i_wordwrap_max_line_width_,
						lc_s_br,lc_s_space,b_use_fake_but_fast);
				} // if
				raudrohi.base.set_innerHTML(menutext_display_id_,s);
			} catch (err){
				raudrohi.tmg('e390a811-7e4e-4d9e-83f8-3340a0219bd7',err);
			} // catch
		} // render_readonly

		this.menuitem_text_exists=function(s_menu_item_dot_menuitem_label){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(s_menu_item_dot_menuitem_label,
						's_menu_item_dot_menuitem_label',
						'5260b333-4961-4ca7-a1f8-3340a0219bd7');
				} // if
				if(prc_.content_set_!==true){
					return false;
				} // if
				var b=prc_.content_.menuitem_text_exists(
					s_menu_item_dot_menuitem_label);
				return b;
			} catch (err){
				raudrohi.tmg('140eef34-a46e-47bf-95f8-3340a0219bd7',err);
			} // catch
		};

		// If the content is not set or a menu item with a given label does
		// not exist within the menu, then this function just returns default
		// text that depicts the get_menuitem_text_by_indexsituation.
		this.get_menuitem_text_by_index=function(an_int){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isNumber(an_int,
						'an_int', '5a9e3637-f13d-4027-83f8-3340a0219bd7');
					if (an_int<0) {
						raudrohi.tmg('274a13f0-cac8-470c-a5f8-3340a0219bd7',
							lc_s_emptystring+an_int+'==an_int < 0');
					} // if
				} // if
				// This method is a bit bad from API-s ortogonality point
				// of view, but it's been added here in a hurry, so
				// that explains its existance.
				var s_out='get_menuitem_text_by_index error: '+
				'menu content not set';
				if(prc_.content_set_===false){
					return s_out;
				} // if
				var ar=prc_.content_.get_ar_GUI_sideeffectfree_texts();
				if((ar.length-1) < an_int){
					s_out='get_menuitem_text_by_index error: '+
					+ar.length+'==(ar.length-1) < an_int=='+an_int;
					if(raudrohi_settings_debug_JavaScript===true){
						raudrohi.tmg('c4e24c13-a3ad-4021-94f8-3340a0219bd7',
							s_out);
					} else {
						return s_out;
					} // else
				} // if
				s_out=ar[an_int];
				return s_out;
			} catch (err){
				raudrohi.tmg('3512cd25-d799-4e15-83f8-3340a0219bd7',err);
			} // catch
		} // get_menuitem_text_by_index

		// If the content is not set or a menu item with a given label does
		// not exist within the menu, then this function just returns without
		// throwning any exceptions.
		this.set_selected_by_menuitem_text=function(s_menu_item_dot_menuitem_label){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(s_menu_item_dot_menuitem_label,
						's_menu_item_dot_menuitem_label',
						'c3409da8-8b6c-43b2-a2e8-3340a0219bd7');
				} // if
				var b;
				b=self_public_.menuitem_text_exists(s_menu_item_dot_menuitem_label);
				if(b!==true){
					return;
				} // if
				selected_menuitem_=prc_.content_.GUI_sideeffectfree_text_2_instance(
					s_menu_item_dot_menuitem_label);
				if(self_public_.is_hidden()===false){
					self_public_.unhide();
				} // if
				self_public_.evh_selection_impl(selected_menuitem_);
			} catch (err){
				raudrohi.tmg('99316512-f361-4315-a3e8-3340a0219bd7',err);
			} // catch
		} // set_selected_by_menuitem_text

		// menu_item === <something that has been stored into raudrohi.widgets.g1.menu_t1_content>
		this.evh_selection_impl=function(menu_item){
		//            This method is expected to be overriden by the
		//            widget's container.
		} // evh_selection_impl

		// The menuitem_text_max_width is used for tuning the
		// truncation function, which is used for
		// making sure that no menuitem text within the array_of_menuitem_texts
		// is wider than the menuitem_text_max_width. The
		// array_of_menuitem_instances is expected to contain objects that
		// have a "menuitem_label" public field.
		this.set_content=function(array_of_menuitem_instances,
			menuitem_text_max_width){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					// If the widget is hidden, the
					// wrong type of the content will come appearent when
					// the call stack does not contain the faulty call any more.
					raudrohi.base.assert_isArray(array_of_menuitem_instances,
						'array_of_menuitem_instances',
						'7e0ccbdb-c014-42e6-bbe8-3340a0219bd7');
					raudrohi.base.assert_isNumber(menuitem_text_max_width,
						'menuitem_text_max_width',
						'310e991d-4886-49cf-85e8-3340a0219bd7');
				} // if
				self_public_.clear_all_custom_indices();
				prc_.content_=new raudrohi.widgets.g1.menu_t1_content(
					array_of_menuitem_instances,menuitem_text_max_width);
				if(0<prc_.content_.numberOfmenuitems()){
					// The the very first menu item is selected by default.
					var ar=prc_.content_.get_ar_GUI_sideeffectfree_texts();
					var txt=ar[0];
					selected_menuitem_=prc_.content_.GUI_sideeffectfree_text_2_instance(txt);
					self_public_.evh_selection_impl(selected_menuitem_);
					prc_.content_set_=true;
				} else{
					selected_menuitem_=null;
					prc_.content_set_=false; // an empty menu
				} // else
				if(self_public_.is_hidden()===false){
					self_public_.unhide();
				} // if
			} catch (err){
				raudrohi.tmg('23ce3b7a-5936-4cd2-a3e8-3340a0219bd7',err);
			} // catch
		} // set_content


		this.get_content=function(){
			try{
				return prc_.content_;
			} catch (err){
				raudrohi.tmg('5c005f1b-601f-4562-95e8-3340a0219bd7',err);
			} // catch
		} // get_content

		this.get_number_of_menuitems=function(){
			try{
				var n=prc_.content_.numberOfmenuitems();
				return n;
			} catch (err){
				raudrohi.tmg('3215fe73-49e5-4a23-93e8-3340a0219bd7',err);
			} // catch
		} // get_number_of_menuitems

		this.clear_menu_content=function(){
			try{
				prc_.content_set_=false;
				self_public_.clear_all_custom_indices();
				prc_.content_=null;
				selected_menuitem_=null;
				if(self_public_.is_hidden()===false){
					self_public_.unhide();
				} // if
			} catch (err){
				raudrohi.tmg('9afaad4f-b974-4913-b5d8-3340a0219bd7',err);
			} // catch
		} // clear_menu_content

		var ht_custom_indices_=new Hashtable();

		this.clear_all_custom_indices=function(){
			try{
				var keys=ht_custom_indices_.keys();
				var len=keys.length;
				var key;
				var ht_index;
				for(var i=0;i<len;i++){
					key=keys[i];
					ht_index=ht_custom_indices_.get(key);
					raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_index);
				} // for
				ht_custom_indices_.clear();
			} catch (err){
				raudrohi.tmg('bac51126-688a-4e1a-b3d8-3340a0219bd7',err);
			} // catch
		} // clear_all_custom_indices

		// It doesn't throw, if the index does not exist.
		// It does not remove the index, it only removes its elements.
		this.clear_custom_index=function(s_index_name){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(s_index_name,'s_index_name',
						'18d33446-186c-43f0-a4d8-3340a0219bd7');
				} // if
				var b_index_exists=ht_custom_indices_.containsKey(s_index_name);
				if(b_index_exists===false){
					return;
				} // if
				var ht_index=ht_custom_indices_.get(s_index_name);
				ht_index.clear();
			} catch (err){
				raudrohi.tmg('215bcb63-37c1-4ef9-82d8-3340a0219bd7',err);
			} // catch
		} // clear_custom_index

		// The menu item, x_menu_item, has to be present in the
		// menu prior to a call to this method. If it's missing,
		// this mentod will throw.
		this.insert_2_custom_index=function(s_index_name,s_key,x_menu_item){
			try{
				if(prc_.content_set_===false){
					raudrohi.tmg('828c4133-f846-493b-a1d8-3340a0219bd7',
						'prc_.content_set_===false');
				} // if
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(s_index_name,'s_index_name',
						'daaafc3d-1102-424d-92d8-3340a0219bd7');
					raudrohi.base.assert_isString(s_key,'s_key',
						'54e78e34-d732-4d3a-94d8-3340a0219bd7');
					raudrohi.base.assert_isObject(x_menu_item,'x_menu_item',
						'e1619216-00e9-4bd6-b1c8-3340a0219bd7');
					var b_label_ok=prc_.content_.menuitem_text_exists(
						x_menu_item.menuitem_label);
					if(b_label_ok==false){
						raudrohi.tmg('d0f72f38-26a2-4f95-85c8-3340a0219bd7',
							"There's no menuitem with a label of \""+
							x_menu_item.menuitem_label+'".');
					} // if
				} // if
				var b_index_exists=ht_custom_indices_.containsKey(s_index_name);
				var ht_index=null;
				if(b_index_exists===false){
					ht_index=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
					ht_custom_indices_.put(s_index_name,ht_index);
				} else{
					ht_index=ht_custom_indices_.get(s_index_name);
				} // else
				ht_index.put(s_key,x_menu_item);
			} catch (err){
				raudrohi.tmg('3c1abb42-5589-4ccb-b2c8-3340a0219bd7',err);
			} // catch
		} // insert_2_custom_index

		// In non-debug mode it won't throw, if the index or the key
		// do not exist, because it's not such a big flaw that it
		// should crash the application, but in general it is a bug,
		// if the given index or its key do not exist.
		this.set_selected_by_custom_index_key=function(s_index_name,s_key){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(s_index_name,'s_index_name',
						'ab09721e-366d-4bac-85c8-3340a0219bd7');
					raudrohi.base.assert_isString(s_key,'s_key',
						'7dab3136-b2da-42d4-84c8-3340a0219bd7');
				} // if
				var b_index_exists=ht_custom_indices_.containsKey(s_index_name);
				if(b_index_exists==false){
					if(raudrohi_settings_debug_JavaScript===true){
						raudrohi.tmg('5b705744-2338-4037-82c8-3340a0219bd7',
							'A custom index with a name of "'+s_index_name+
							'" does not exist.');
					} else {
						return;
					} // else
				} // if
				var ht_index=ht_custom_indices_.get(s_index_name);
				var b_key_exists=ht_index.containsKey(s_key);
				if(b_key_exists==false){
					return; // PLUTO
					if(raudrohi_settings_debug_JavaScript===true){
						raudrohi.tmg('d6b21e1b-7c19-40bd-91b8-3340a0219bd7',
							'A custom index with a name of "'+s_index_name+
							'" does not contain key "'+s_key+'".');
					} else {
						return;
					} // else
				} // if
				var mi=ht_index.get(s_key);
				self_public_.set_selected_by_menuitem_text(mi.menuitem_label);
			} catch (err){
				raudrohi.tmg('281d3aca-566f-4531-84b8-3340a0219bd7',
					's_field_name_in_parent=='+
					self_public_.s_field_name_in_parent+'  '+err);
			} // catch
		} // set_selected_by_custom_index_key

		this.phone.receive_phonecall=function(a_phonecall_instance){
			try{
				var data=raudrohi.adapter.trim(a_phonecall_instance.data);
				var a_pair_branching=raudrohi.base.bisect(data, '|||');
				raudrohi.base.assert_isNotnull(a_pair_branching,
					'a_pair_branching','d038074b-3027-485b-b5b8-3340a0219bd7');
				if(pileofmethods_t1_.standard_phonecall_received_t1(
					a_pair_branching,a_phonecall_instance )){
					return;
				} // if
				switch(a_pair_branching.a){
					case 'set_content':
						self_public_.set_content(a_phonecall_instance.data2);
						break;
					default:
						if(raudrohi_settings_debug_JavaScript===true){
							raudrohi.tmg('db643f4a-9b10-405f-95b8-3340a0219bd7',
								'There\'s no message handler for '+
								a_pair_branching.a);
						} // if
				} // switch
			} catch (err){
				raudrohi.widgets.g1.sys.phonecall_receiver_tmg(
					'd76e5c30-1d20-4313-81b8-3340a0219bd7',err,
					a_phonecall_instance);
			} // catch
		} // receive_phonecall

		prc_.startup_shutdown_handler_.startbutton_pushed();
	} catch (err){
		raudrohi.tmg('572e2c53-c315-48ce-91a8-3340a0219bd7',err);
	} // catch
} // raudrohi.widgets.g1.menu_t1

	//------------------------------------------------------------------------
