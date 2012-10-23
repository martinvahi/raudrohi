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

//
// This widget does not use the widgets statemachine achitecture
// for its states, but it has 2, independent statebits:
// b_state_blank_, prc_.content_set_.
//
// TODO: add the usage of critical sections to the content gettersetters.
//
// WARNING: Actually, as of 01.2011 this implementation is deprecated,
// because it uses the HTML form menu. The problem with the HTML form
// menu is that one could not figurea out, within a week, how to
// create an atomic method that sets the menu content and selects
// a specific menu-item. The core of the problem consists of
// the following assertions:
//
// 1) The HTML elements, including form menus, are rendered in
//    a background thread.
// 2) One can not select a menu-item of a menu that has not been
//    rendered.
// 3) If a form menu gets rendered, one of the menu elements is
//    "graphically" selected by default and that triggers a
//    menu selection event just as if the user would have selected it.
// 4) According to the Raudrohi JavaScript Library any widget,
//    including menus, must have a functionality that they have
//    both, visible state, and hidden state and they are expected to
//    be missing the graphical representation in the hidden state.
//
// So, all in all, one just couldn't figure out, how to
// create a function like
// set_content_and_select_a_menuitem(content,s_label1)
// because even if all of the menu-item selection commands and
// menu content edit commands were placed into a single queue
// (which I tried, unfortunately) and the queue were emptied
// one by one by using the HTML menu selection events for clocking,
// the clocking gets messed up if the widget gets hidden or
// there's a combination of hide/show events between "clock ticks".
//
// The next version of a menu widget to try is to use the
// API of this widget, but to replace the HTML form menu with something
// that one can control oneself to be able to create atomic operations.
raudrohi.widgets.g1.partialmenu_t1=function(s_html_id,parent_instance,
	i_menu_max_width,i_textarea_width,i_textarea_height,
	s_html_if_menucontent_not_set,s_mode,
	s_container_style){
	try{
		s_mode = typeof(s_mode) !== 'undefined' ? s_mode : 'partialmenu_t1_mode_1';
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(s_mode,'s_mode',
				'3de5e82b-8bbb-43d9-91a5-5240a0219bd7');
		} // if
		switch(s_mode){
			case 'partialmenu_t1_mode_1':
				s_container_style = typeof(s_container_style) !== 'undefined' ? s_container_style : 'partialmenu_t1_containertype_vertical_1';
				break;
			case 'units_1':
				s_container_style = typeof(s_container_style) !== 'undefined' ? s_container_style : 'partialmenu_t1_containertype_vertical_1';
				break;
			default:
				if(raudrohi.settings.debug_JavaScript){
					throw raudrohi.tmg(
						'2f9c0555-dc5a-4ded-91a5-5240a0219bd7',
						'There\'s no branching for s_mode(=='+
						s_mode+').');
				} // if
		} // switch

		// Hrere's the truth table for this widget's internals:
		// |-------------|----------------------------|-------------------|
		// | <menu set>  | <widget is in blank state> | prc_.content_set_ |
		// |-------------|----------------------------|-------------------|
		// |    false    |           true             |      false        |
		// |    true     |           true             |      true         |
		// |    true     |           false            |      true         |
		// |-------------|----------------------------|-------------------|
		// If the menu does not contain any menu items, the <menu set>===false


		// RENESSAATOR_BLOCK_START
		// RENESSAATOR_BLOCK_ID=block_1
		// RENESSAATOR_SOURCE_LANGUAGE=Ruby
		// RENESSAATOR_SOURCE_START
		// RAUDROHI_CODE_GENERATION=ENV['RAUDROHI_CODE_GENERATION']
		// require(RAUDROHI_CODE_GENERATION+"/by_file/raudrohi_js_widgets_partialmenu_block_1.rb")
		// RENESSAATOR_SOURCE_END
		//
		// RENESSAATOR_AUTOGENERATED_TEXT_START
		if(raudrohi.settings.debug_JavaScript===true){
			// WARNING: This function resides in an autogeneration region.
			// This code has been autogenerated by: Raudrohi_cg_debug_verification
			raudrohi.base.assert_isNumber(i_menu_max_width,'i_menu_max_width',
				'c34bf355-36f4-42c9-82f6-e04160c19bd7');
			raudrohi.base.assert_isNumber(i_textarea_width,'i_textarea_width',
				'265099f0-4393-4a9b-aef6-e04160c19bd7');
			raudrohi.base.assert_isNumber(i_textarea_height,'i_textarea_height',
				'68460241-fc6d-494a-b5f6-e04160c19bd7');
			raudrohi.base.assert_isString(s_html_if_menucontent_not_set,'s_html_if_menucontent_not_set',
				'a2b623c5-3a1d-4914-b4f6-e04160c19bd7');
			raudrohi.base.assert_isString(s_container_style,'s_container_style',
				'c8ce8c34-5431-4cb5-93f6-e04160c19bd7');

		} // if

		if(raudrohi.settings.debug_JavaScript===true){
			// WARNING: This function resides in an autogeneration region.
			// This code has been autogenerated by: Raudrohi_cg_debug_verification
			raudrohi.base.assert_isString(s_html_id,'s_html_id',
				'b374171c-d6db-4161-91f6-e04160c19bd7');
			raudrohi.base.assert_isObject(parent_instance,'parent_instance',
				'542c67c3-aa55-4032-a2f6-e04160c19bd7');

		} // if
		//---widget--boilerplate_1_--start--
		// WARNING: This function resides in an autogeneration region.
		// This code has been autogenerated by: Raudrohi_cg_widget
		var self_public_=this;
		var pileofmethods_t1_=new raudrohi.widgets.g1.pileofmethods_t1(
			self_public_,'raudrohi.widgets.g1.partialmenu_t1',
			s_html_id);
		var prc_=self_public_.private_code_;
		//---widget--boilerplate_1_--end----


		prc_.parent_instance_=parent_instance;

		var widget_textarea_t1_custom_value_=null;
		var id_textarea_t1_custom_value_=prc_.html_id_+'_textarea_t1_custom_value';
		var widget_menu_t1_standard_values_=null;
		var id_menu_t1_standard_values_=prc_.html_id_+'_menu_t1_standard_values';

		self_public_.private_code_.evh_.evh_menu_t1_standard_values=function(e){
			// WARNING: This function resides in an autogeneration region.
			// This code has been autogenerated by: Raudrohi_cg_widget_g1_menu_t1
			try{
				evh_menu_t1_standard_values_selected_impl();
			} catch (err){
				raudrohi.tmg('f237b53f-2c85-499f-a5e6-e04160c19bd7',err);
			} // catch
		} // evh_menu_t1_standard_values 



		function create_widgets_autogen( ){
			// WARNING: This function resides in an autogeneration region.
			// This code has been autogenerated by: Raudrohi_cg_widget
			try{
				var ht_widget_textarea_t1_custom_value_params=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
				ht_widget_textarea_t1_custom_value_params.put('type','text');
				widget_textarea_t1_custom_value_=new raudrohi.widgets.g1.textarea_t1(
					id_textarea_t1_custom_value_,i_textarea_width_,i_textarea_height_,
					ht_widget_textarea_t1_custom_value_params);
				widget_textarea_t1_custom_value_.set_alignment('west');
				prc_.register_subwidget(widget_textarea_t1_custom_value_,'hidden');
				widget_textarea_t1_custom_value_.s_field_name_in_parent='custom_value';
				raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_widget_textarea_t1_custom_value_params);

				widget_menu_t1_standard_values_=new raudrohi.widgets.g1.menu_t1(
					id_menu_t1_standard_values_,
					s_html_if_menucontent_not_set_);
				widget_menu_t1_standard_values_.evh_selection_impl=self_public_.private_code_.evh_.evh_menu_t1_standard_values;
				widget_menu_t1_standard_values_.set_alignment('west');
				widget_menu_t1_standard_values_.s_field_name_in_parent='standard_values';
				prc_.register_subwidget(widget_menu_t1_standard_values_,'visible');

			} catch(err){
				raudrohi.tmg('0699ea42-696e-447f-a517-e04160c19bd7',err);
			} // catch
		} // create_widgets_autogen


		// RENESSAATOR_AUTOGENERATED_TEXT_END
		// RENESSAATOR_BLOCK_END
		var lc_s_emptystring=window.raudrohi.core.constans_as_reusable_instances.glc_s_emptystring;
		var lc_s_label1=window.raudrohi.core.constans_as_reusable_instances.glc_s_label1;
		var lc_s_label2=window.raudrohi.core.constans_as_reusable_instances.glc_s_label2;

		if(raudrohi.settings.debug_JavaScript===true){
			if(i_menu_max_width<1){
				raudrohi.tmg('e4f2357b-209f-4836-a295-5240a0219bd7',
					"i_menu_max_width=="+i_menu_max_width+" < 1 ");
			} // if
			if(i_textarea_width<1){
				raudrohi.tmg('32260b57-3393-46c4-a295-5240a0219bd7',
					"i_textarea_width=="+i_textarea_width+" < 1 ");
			} // if
			if(i_textarea_height<1){
				raudrohi.tmg('962f8650-33d1-46e5-8295-5240a0219bd7',
					"i_textarea_width=="+i_textarea_height+" < 1 ");
			} // if
		} // if

		prc_.content_set_=false;
		prc_.content_=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
		var i_menu_max_width_=i_menu_max_width;
		var i_textarea_width_=i_textarea_width;
		var i_textarea_height_=i_textarea_height;
		var s_html_if_menucontent_not_set_=s_html_if_menucontent_not_set;
		var ht_label1_to_label2_=new Hashtable();
		var ht_label2_to_label1_=new Hashtable();
		var ht_label1_to_mi_=new Hashtable();
		var array_of_menuitem_instances_=new Array();
		var b_textarea_visible_=false;
		var ar_menu_setup_=new Array();
		var s_mode_=s_mode;
		var s_container_style_=s_container_style;
		var s_textfield_default_value_="";
		var s_menu_default_value_s_label1_=null;


		// Is expected to work also, when the widgets
		// have not yet been initialized or the menu
		// does not contain any items.
		function select_menuitem_by_s_label_1(s_label1){
			try{
				var s_label1_converted=null;
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString(s_label1,'s_label1',
						'8d96614f-1157-42ff-b295-5240a0219bd7');
					s_label1_converted=prc_.customizable.optional.hook_for_autoconverting_incoming_content_s_label1(
						s_label1);
					if(0<ar_menu_setup_.length){
						if(ht_label1_to_mi_.containsKey(s_label1_converted)===false){
							raudrohi.tmg('da25d24e-1bf8-47fb-9395-5240a0219bd7',
								'A menu item with s_label1=="'+s_label1_converted+
								'" is missing from the menu.');
						} // if
					} // if
				} // if
				if(s_label1_converted===null){
					s_label1_converted=prc_.customizable.optional.hook_for_autoconverting_incoming_content_s_label1(
						s_label1);
				} // if
				// It might be that the whole widget, including the
				// subwidgets, the menu and the text area, is hidden,
				// which means that the menu content assignment does not
				// trigger a selection event. That's why one assigns
				// the b_textarea_visible_ here.
				b_textarea_visible_=false;
				switch(s_mode_){
					case 'partialmenu_t1_mode_1':
						if(s_label1_converted=='custom'){
							b_textarea_visible_=true;
						} // if
						break;
					case 'units_1':
						b_textarea_visible_=true;
						break;
					default:
						if(raudrohi.settings.debug_JavaScript){
							throw raudrohi.tmg(
								'255fe903-c594-409e-9395-5240a0219bd7',
								'There\'s no branching for s_mode_(=='+
								s_mode_+').');
						} // if
				} // switch
				if(widget_menu_t1_standard_values_!==null){
					if(0<ar_menu_setup_.length){
						var mi=ht_label1_to_mi_.get(s_label1_converted);
						widget_menu_t1_standard_values_.set_selected_by_menuitem_text(
							mi.menuitem_label);
					} // if
					// The menu widget takes care of its own
					// gaphical updating, but the repainting is
					// needed for updating the visibility of the
					// textarea widget.
					prc_.repaint_if_graphical_and_not_hidden();
				} // if
			} catch (err){
				raudrohi.tmg('41b3cd41-e4eb-453f-9495-5240a0219bd7',err);
			} // catch
		} // select_menuitem_by_s_label_1

		function set_menu_content_impl_init_array_of_menuitem_instances(){
			try{
				array_of_menuitem_instances_=new Array();
				var len=ar_menu_setup_.length;
				var i=0;
				var elem;
				var x;
				for(i=0;i<len;i++){
					elem=ar_menu_setup_[i];
					ht_label1_to_label2_.put(elem.s_label1,elem.s_label2);
					ht_label2_to_label1_.put(elem.s_label2,elem.s_label1);
					x={};
					x.s_label1=elem.s_label1;
					x.menuitem_label=elem.s_label2;
					array_of_menuitem_instances_.push(x);
					ht_label1_to_mi_.put(elem.s_label1,x);
				} // for
			} catch (err){
				raudrohi.tmg('d917994e-aee9-49b6-b195-5240a0219bd7',err);
			} // catch
		} // set_menu_content_impl_init_array_of_menuitem_instances

		prc_.set_menu_content_impl=function(ar_menu_setup){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isArray(ar_menu_setup,'ar_menu_setup',
						'f49d9e67-7626-4f44-8485-5240a0219bd7');
				} // if
				self_public_.clear_menu_content();
				ar_menu_setup_=ar_menu_setup;
				set_menu_content_impl_init_array_of_menuitem_instances();
				if(widget_menu_t1_standard_values_!==null){
					widget_menu_t1_standard_values_.set_content(
						array_of_menuitem_instances_,i_menu_max_width_);
				} // if
				// If the menu widget is hidden, the menu item
				// selection event is not triggered at menu
				// content assignment.
				b_textarea_visible_=false;
				if(0<ar_menu_setup_.length){
					var mi=array_of_menuitem_instances_[0];
					s_menu_default_value_s_label1_=mi.s_label1;
					switch(s_mode_){
						case 'partialmenu_t1_mode_1':
							if(s_menu_default_value_s_label1_=='custom'){
								b_textarea_visible_=true;
							} // if
							break;
						case 'units_1':
							b_textarea_visible_=true;
							break;
						default:
							if(raudrohi.settings.debug_JavaScript){
								throw raudrohi.tmg(
									'3b68c135-876f-4ea3-9785-5240a0219bd7',
									'There\'s no branching for s_mode_(=='+
									s_mode_+').');
							} // if
					} // switch
					prc_.content_set_=true;
				} // if
				if(widget_menu_t1_standard_values_!==null){
					prc_.repaint_if_graphical_and_not_hidden();
				} // if
			} catch (err){
				raudrohi.tmg('11e3dd51-43f7-43ae-8485-5240a0219bd7',err);
			} // catch
		} // prc_.set_menu_content_impl

		// The ar_menu_setup is expected to contain objects with field
		// "s_label1" and "s_label2". The s_label1 is a "machine readable"
		// text and the s_label2 is mostly only for "human consumption".
		// s_label2 is the human readable menu text.
		//
		// If the s_mode=="partialmenu_t1_mode_1", then
		// the s_label1 value of 'custom' is reserved. It's not compulsory
		// to include it to the ar_menu_setup_container, but if it is there,
		// then its selection results an appearance of a textarea.
		// inserting a custom s_label2. The custom s_label2 won't override the
		// menu text.
		this.set_menu_content=function(ar_menu_setup){
			try{
				prc_.set_menu_content_impl(ar_menu_setup);
			} catch (err){
				raudrohi.tmg('8be8942b-3b88-4899-8485-5240a0219bd7',err);
			} // catch
		} // set_menu_content

		// The idea is that during application the values of the
		// standard values change, but the old versions tend to
		// stay in the database. Sometimes one just needs to
		// change the view of the content. For example, when
		// the partialmenu widget was used for submiting and displaying
		// volume in both litres and m^3, then one should be
		// able to remove the litres and display only m^3 values
		// by silently auto-converting the litres value to m^3.
		// That's what this hook is for.
		prc_.customizable.optional.hook_for_autoconverting_incoming_content=function(ht_content){
			try{
				// If You're overriding this function, then
				// please don't forget to override the
				// prc_.customizable.optional.hook_for_autoconverting_incoming_content_s_label1
				return ht_content;
			} catch (err){
				raudrohi.tmg('1f860e41-9ee4-43bb-9185-5240a0219bd7',err);
			} // catch
		} // prc_.customizable.optional.hook_for_autoconverting_incoming_content

		prc_.customizable.optional.hook_for_autoconverting_incoming_content_s_label1=function(s_label1){
			try{
				var s=lc_s_emptystring+s_label1;
				return s;
			} catch (err){
				raudrohi.tmg('db84c52b-0799-4508-8185-5240a0219bd7',err);
			} // catch
		} // prc_.customizable.optional.hook_for_autoconverting_incoming_content_s_label1

		prc_.customizable.optional.content_from_GUI_2_vars=function(){
			try{
				if(prc_.content_set_===false){
					return;
				} // if
				var mi=widget_menu_t1_standard_values_.get_selected_menuitem();
				var s_label1=mi.s_label1;
				var s_label2=null;
				switch(s_mode_){
					case 'units_1':
						s_label2=widget_textarea_t1_custom_value_.get_content();
						break;
					case 'partialmenu_t1_mode_1':
						if(s_label1=='custom'){
							s_label2=widget_textarea_t1_custom_value_.get_content();
						} else {
							s_label2=""+ht_label1_to_label2_.get(s_label1);
						} // else
						break;
					default:
						if(raudrohi.settings.debug_JavaScript){
							throw raudrohi.tmg(
								'54ed13a9-ffc2-42ee-8185-5240a0219bd7',
								'There\'s no branching for s_mode_(=='+
								s_mode_+').');
						} // if
				} // switch
				prc_.content_.put('s_label1',s_label1);
				prc_.content_.put('s_label2',s_label2);
			} catch (err){
				raudrohi.tmg('e3ecf853-8b93-49eb-9285-5240a0219bd7',err);
			} // catch
		} // prc_.customizable.optional.content_from_GUI_2_vars

		// The mi is the selected menuitem that has fields
		// "menuitem_label" and "s_label1". The "menuitem_label"
		// corresponds to "s_label2".
		prc_.customizable.optional.evh_selection_impl=function(mi){
		//            This method is expected to be overriden by the
		//            widget's container.
		} // evh_selection_impl

		function evh_menu_t1_standard_values_selected_impl(){
			try{
				var mi=widget_menu_t1_standard_values_.get_selected_menuitem();
				var s_label1=mi.s_label1;
				b_textarea_visible_=false;
				switch(s_mode_){
					case 'units_1':
						b_textarea_visible_=true;
						break;
					case 'partialmenu_t1_mode_1':
						if(s_label1=='custom'){
							b_textarea_visible_=true;
						} else {
							b_textarea_visible_=false;
						} // else
						break;
					default:
						if(raudrohi.settings.debug_JavaScript){
							throw raudrohi.tmg(
								'5643c95d-bc9d-494c-8485-5240a0219bd7',
								'There\'s no branching for s_mode_(=='+
								s_mode_+').');
						} // if
				} // switch
				prc_.repaint_if_graphical_and_not_hidden();
				if(prc_.content_set_===true){
					//var ht_content=self_public_.get_content();
					prc_.customizable.optional.evh_selection_impl(mi);
				} // if
			} catch (err){
				raudrohi.tmg('ae704b23-7dbe-47bb-9185-5240a0219bd7',err);
			} // catch
		} // evh_menu_t1_standard_values_selected_impl

		this.set_alignment=function(s_alignment_as_a_cardinal_point){
			try{
				if (raudrohi.settings.debug_JavaScript === true) {
					raudrohi.base.assert_isString(
						s_alignment_as_a_cardinal_point,
						's_alignment_as_a_cardinal_point',
						'12f44a27-0a14-428d-9385-5240a0219bd7');
					raudrohi.ui.assert_alignment_value(
						s_alignment_as_a_cardinal_point);
				} // if
				if (s_alignment_as_a_cardinal_point == prc_.alignment1_) {
					return;
				} // if
				widget_textarea_t1_custom_value_.set_alignment(
					s_alignment_as_a_cardinal_point);
				widget_menu_t1_standard_values_.set_alignment(
					s_alignment_as_a_cardinal_point);
				prc_.alignment1_ = s_alignment_as_a_cardinal_point;
				prc_.containers_html_cached_ = false;
				prc_.repaint_if_graphical_and_not_hidden();
			} catch (err){
				raudrohi.tmg('0dd6ce45-c77b-4b0c-8475-5240a0219bd7',err);
			} // catch
		} // set_alignment

		prc_.customizable.optional.create_subwidgets=function(){
			try{
				create_widgets_autogen();

				widget_menu_t1_standard_values_.set_content(
					array_of_menuitem_instances_,i_menu_max_width_);
				prc_.content_set_=false;
				if(0<array_of_menuitem_instances_.length){
					prc_.content_set_=true;
					self_public_.set_content_to_default();
				} // if
				self_public_.set_alignment('west');
				self_public_.always_display_menuitem_whole_label=widget_menu_t1_standard_values_.always_display_menuitem_whole_label;
				self_public_.set_wordwrap=widget_menu_t1_standard_values_.set_wordwrap;
			} catch (err){
				raudrohi.tmg('45b65205-abef-435d-a575-5240a0219bd7',err);
			} // catch
		} // create_widgets


		function create_containers(){
			try{
				if(!prc_.containers_html_cached_){
					var s_pm1_c1_textarea_line=""+
					"<tr>\n"+ // raudrohi_visible_table_cells
					"<td class=\"\" colspan=\"1\"><div id=\""+
					id_textarea_t1_custom_value_+"_div\"></div></td>\n"+
					"</tr>\n";

					var s_pm1_c1_menu_line=""+
					"<tr>\n"+
					"<td class=\"\" colspan=\"1\"><div id=\""+
					id_menu_t1_standard_values_+"_div\"></div></td>\n"+
					"</tr>\n";

					var s_units_1_c1_line_1=""+
					"<tr>\n"+
					"<td class=\"\" colspan=\"1\"><div id=\""+
					id_textarea_t1_custom_value_+"_div\"></div></td>\n"+
					"<td class=\"\" colspan=\"1\"><div id=\""+
					id_menu_t1_standard_values_+"_div\"></div></td>\n"+
					"</tr>\n";


					var ht_alignmet_styles=raudrohi.ui.get_alignment_style_values(
						prc_.alignment1_);
					var s_algdivstart="\n"+
					'<div style="vertical-align:'+
					ht_alignmet_styles.get('vertical-align')+
					';text-align:'+ht_alignmet_styles.get('text-align')+
					";\">\n";
					var s_algdivend="\n</div>\n";

					//raudrohi_visible_table
					var ar_class_names=["raudrohi_positioning_table"];
					prc_.containers_html_cache_pm1_c1_=s_algdivstart+
					raudrohi.lang.cg_table_t1(
						s_pm1_c1_menu_line+
						s_pm1_c1_textarea_line,
						ar_class_names)+s_algdivend;
					prc_.containers_html_cache_units_1_c1_=s_algdivstart+
					raudrohi.lang.cg_table_t1(
						s_units_1_c1_line_1,
						ar_class_names)+s_algdivend;
					prc_.containers_html_cached_=true;
				} // if
				var s_container=null;
				switch(s_mode_){
					case 'partialmenu_t1_mode_1':
						if(s_container_style_=='partialmenu_t1_containertype_vertical_1'){
							s_container=prc_.containers_html_cache_pm1_c1_;
						} else {
							raudrohi.tmg('5d710fc3-764e-4882-8175-5240a0219bd7',
								"s_container_style=='"+s_container_style_+"'.");
						} // else
						break;
					case 'units_1':
						s_container=prc_.containers_html_cache_units_1_c1_;
						break;
					default:
						if(raudrohi.settings.debug_JavaScript){
							throw raudrohi.tmg(
								'a4b4cf6d-d961-4561-a975-5240a0219bd7',
								'There\'s no branching for s_mode_(=='+
								s_mode_+').');
						} // if
				} // switch
				raudrohi.base.set_innerHTML(prc_.html_id_+"_div",
					s_container);
			} catch (err){
				raudrohi.tmg('0b5f0421-7eda-4255-9575-5240a0219bd7',err);
			} // catch
		} // create_containers


		prc_.customizable.compulsory.render_editable=function(){
			try{
				create_containers();
				if(b_textarea_visible_===true){
					prc_.mark_elemwidget_to_be_unhidden(
						widget_textarea_t1_custom_value_);
				} else {
					prc_.mark_elemwidget_to_be_hidden(widget_textarea_t1_custom_value_);
				} // else
				if(prc_.is_readonly_===false){
					if(ar_menu_setup_.length===1){
						widget_menu_t1_standard_values_.set_readonly(true);
					} else {
						widget_menu_t1_standard_values_.set_readonly(false);
					} // else
				} // if
				prc_.mark_elemwidget_to_be_unhidden(widget_menu_t1_standard_values_);
			} catch (err){
				raudrohi.tmg('918db0e4-131e-4dcf-9175-5240a0219bd7',err);
			} // catch
		} // render_editable

		prc_.customizable.compulsory.render_readonly=prc_.customizable.compulsory.render_editable;

		this.always_display_menuitem_whole_label=function(true_if_display){}

		prc_.set_content_to_default_impl=function(){
			try{
				// If there is at least one item in the menu, the
				// content of this widget is always set.
				// Otherwise the content is not set.
				if(prc_.content_set_===false){
					return;
				} // if
				select_menuitem_by_s_label_1(s_menu_default_value_s_label1_);
				widget_textarea_t1_custom_value_.set_content(
					s_textfield_default_value_);
				prc_.repaint_if_graphical_and_not_hidden();
			} catch (err){
				raudrohi.tmg('c4449329-146e-42f9-a475-5240a0219bd7',err);
			} // catch
		} // prc_.set_content_to_default_impl

		this.set_content_to_default=function(){
			try{
				prc_.set_content_to_default_impl();
			} catch (err){
				raudrohi.tmg('6a5b5ff9-e1d0-4171-b575-5240a0219bd7',err);
			} // catch
		} // set_content_to_default

		this.set_default_value_for_the_textfield=function(
			s_textfield_default_value){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString(s_textfield_default_value,
						's_textfield_default_value',
						'15ffb3d5-0842-461f-a575-5240a0219bd7');
				} // if
				s_textfield_default_value_=s_textfield_default_value;
				widget_textarea_t1_custom_value_.set_content(
					s_textfield_default_value_);
			} catch (err){
				raudrohi.tmg('1df9c3d8-6b0f-4b8a-9575-5240a0219bd7',err);
			} // catch
		} // set_default_value_for_the_textfield

		prc_.set_default_value_for_the_menu_impl=function(s_label1){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString(s_label1,'s_label1',
						'22e73533-df7c-4462-af65-5240a0219bd7');
				} // if
				if(ht_label1_to_mi_.containsKey(s_label1)===false){
					raudrohi.tmg('2af24e32-7356-4a3d-b165-5240a0219bd7',
						'The s_label1=="'+s_label1+
						'", but there is no such element in the menu.');
				} // if
				s_menu_default_value_s_label1_=s_label1;
				self_public_.set_content_to_default();
			} catch (err){
				raudrohi.tmg('138ceb73-b619-4d55-be65-5240a0219bd7',err);
			} // catch
		} // prc_.set_default_value_for_the_menu_impl


		this.set_default_value_for_the_menu=function(s_label1){
			try{
				prc_.set_default_value_for_the_menu_impl(s_label1);
			} catch (err){
				raudrohi.tmg('fac5c930-1091-4fdc-a565-5240a0219bd7',err);
			} // catch
		} // set_default_value_for_the_menu

		prc_.clear_menu_content_impl=function(){
			try{
				if(widget_menu_t1_standard_values_===null){
					return;
				} // if
				if(widget_textarea_t1_custom_value_===null){
					return;
				} // if
				prc_.content_set_=false;
				switch(s_mode_){
					case 'units_1':
						b_textarea_visible_=true;
						break;
					case 'partialmenu_t1_mode_1':
						b_textarea_visible_=false;
						break;
					default:
						if(raudrohi.settings.debug_JavaScript){
							throw raudrohi.tmg(
								'32f37d25-8533-4485-9365-5240a0219bd7',
								'There\'s no branching for s_mode_(=='+
								s_mode_+').');
						} // if
				} // switch
				widget_textarea_t1_custom_value_.set_content(
					s_textfield_default_value_);
				widget_menu_t1_standard_values_.clear_menu_content();
				s_menu_default_value_s_label1_=null;
				ht_label1_to_label2_.clear();
				ht_label2_to_label1_.clear();
				ht_label1_to_mi_.clear();
				ar_menu_setup_=new Array();
				array_of_menuitem_instances_=new Array();
				prc_.repaint_if_graphical_and_not_hidden();
			} catch (err){
				raudrohi.tmg('bd21ce16-2862-4a81-b165-5240a0219bd7',err);
			} // catch
		} // clear_menu_content_impl

		this.clear_menu_content=function(){
			try{
				prc_.clear_menu_content_impl();
			} catch (err){
				raudrohi.tmg('ecad583e-4c26-4ddd-b265-5240a0219bd7',err);
			} // catch
		} // clear_menu_content

		// ht_content is expected to contain fields "s_label1" and "s_label2",
		// where the s_label1 is the computer-readable string and
		// s_label2 is the human-readable string.
		this.set_content=function(ht_content){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isObject(ht_content, 'ht_content',
						'70d84f57-729f-4600-8265-5240a0219bd7');
					if(ht_content.containsKey(lc_s_label2)===false){
						raudrohi.tmg('25046d1e-c9e9-4f1b-8465-5240a0219bd7',
							"The key of 's_label2' is missing from the ht_content.");
					} // if
					if(ht_content.containsKey(lc_s_label1)===false){
						raudrohi.tmg('34cb59ed-dc6a-4353-a365-5240a0219bd7',
							"The key of 's_label1' is missing from the ht_content.");
					} // if
				} // if
				var ht_content_converted=prc_.customizable.optional.hook_for_autoconverting_incoming_content(
					ht_content);
				var s_label2=ht_content_converted.get('s_label2');
				var s_label1=ht_content_converted.get('s_label1');
				if(ht_label1_to_label2_.containsKey(s_label1)===false){
					raudrohi.tmg('47e63699-3153-45d1-9455-5240a0219bd7',
						'The s_label1=="'+s_label1+
						'", but there is no such element in the menu.');
				} // if
				raudrohi.base.pool_of_hashtables.return_used_hashtable(
					prc_.content_);
				prc_.content_=ht_content_converted;
				switch(s_mode_){
					case 'units_1':
						widget_textarea_t1_custom_value_.set_content(s_label2);
						break;
					case 'partialmenu_t1_mode_1':
						if(s_label1=='custom'){
							widget_textarea_t1_custom_value_.set_content(s_label2);
						} else {
							widget_textarea_t1_custom_value_.set_content(
								s_textfield_default_value_);
						} // if
						break;
					default:
						if(raudrohi.settings.debug_JavaScript){
							throw raudrohi.tmg(
								'34717854-e314-474b-9555-5240a0219bd7',
								'There\'s no branching for s_mode_(=='+
								s_mode_+').');
						} // if
				} // switch
				select_menuitem_by_s_label_1(s_label1);
				prc_.repaint_if_graphical_and_not_hidden();
			} catch (err){
				raudrohi.tmg('16c005c1-8983-432e-8955-5240a0219bd7',err);
			} // catch
		} // set_content

		prc_.set_content_by_s_label1_impl=function(s_label1){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString(s_label1,'s_label1',
						'f3b3e24e-c2e6-4ed2-9555-5240a0219bd7');
				} // if
				var s_label1_converted=prc_.customizable.optional.hook_for_autoconverting_incoming_content_s_label1(
					s_label1);
				if(ht_label1_to_label2_.containsKey(s_label1_converted)===false){
					raudrohi.tmg('5c901a42-514f-48bb-a255-5240a0219bd7',
						'The s_label1=="'+s_label1_converted+
						'", but there is no such element in the menu.');
				} // if
				var ht_content=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
				ht_content.put(lc_s_label1,s_label1_converted);
				var s_label2=ht_label1_to_label2_.get(s_label1_converted);
				ht_content.put(lc_s_label2,lc_s_emptystring+s_label2);
				self_public_.set_content(ht_content);
			} catch (err){
				raudrohi.tmg('135dc581-b609-4d02-9b55-5240a0219bd7',err);
			} // catch
		} // prc_.set_content_by_s_label1_impl

		this.set_content_by_s_label1=function(s_label1){
			try{
				prc_.set_content_by_s_label1_impl(s_label1);
			} catch (err){
				raudrohi.tmg('2a1ef345-4257-4334-9255-5240a0219bd7',err);
			} // catch
		} // set_content_by_s_label1


		prc_.customizable.optional.startup_hook = function() {
			try{
			} catch (err){
				raudrohi.tmg('99c3b632-b71a-47fc-b155-5240a0219bd7',err);
			} // catch
		} // prc_.customizable.optional.startup_hook

		this.set_focus=function(){
			try{
				if(b_textarea_visible_===true){
					// It copes with the hidden state.
					widget_textarea_t1_custom_value_.set_focus();
				} // if
			} catch (err){
				raudrohi.tmg('49b81b48-bbe0-41ce-a105-5240a0219bd7',err);
			} // catch
		} // set_focus

		// Returns a hashtable that has keys s_label1 and s_label2
		this.get_content=function(){
			try{
				if(prc_.content_set_===false){
					return null;
				} // if
				var ht=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
				prc_.customizable.optional.content_from_GUI_2_vars();
				ht.put('s_label1',""+prc_.content_.get('s_label1'));
				ht.put('s_label2',""+prc_.content_.get('s_label2'));
				return ht;
			} catch (err){
				raudrohi.tmg('3e423dd6-3430-47e0-8405-5240a0219bd7',err);
			} // catch
		} // get_content

		// For comfort and speed only.
		this.get_content_s_label1=function(){
			try{
				if(prc_.content_set_===false){
					raudrohi.tmg('d4a7ef05-4551-4be5-a3f4-5240a0219bd7',
						'Content is not set.');
				} // if
				prc_.customizable.optional.content_from_GUI_2_vars();
				var s_label1=""+prc_.content_.get('s_label1');
				return s_label1;
			} catch (err){
				raudrohi.tmg('46d6d1ff-5274-45e6-92f4-5240a0219bd7',err);
			} // catch
		} // get_content_s_label1

		// For comfort and speed only.
		this.get_content_s_label2=function(){
			try{
				if(prc_.content_set_===false){
					raudrohi.tmg('44b12f55-e0ec-47d7-a3f4-5240a0219bd7',
						'Content is not set.');
				} // if
				prc_.customizable.optional.content_from_GUI_2_vars();
				var s_label2=""+prc_.content_.get('s_label2');
				return s_label2;
			} catch (err){
				raudrohi.tmg('e7374849-cb50-419c-b2f4-5240a0219bd7',err);
			} // catch
		} // get_content_s_label2

		this.get_content_2_collection_t1=function(ht){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isObject(ht,'ht',
						'e91c7d34-9426-47ec-92f4-5240a0219bd7');
				} // if
				var ht_content=self_public_.get_content();
				var s_key_field_set=raudrohi.wg_processing_t1.s_key_field_set(
					self_public_);
				if(ht_content===null){
					ht.put(s_key_field_set,"false");
					raudrohi.wg_processing_t1.dbfcreate_s_t1(ht,
						self_public_.s_field_name_in_parent+"_s_label1",
						lc_s_emptystring,false);
					raudrohi.wg_processing_t1.dbfcreate_s_t1(ht,
						self_public_.s_field_name_in_parent+"_s_label2",
						lc_s_emptystring,false);
				} // if
				ht.put(s_key_field_set,"true");
				raudrohi.wg_processing_t1.dbfcreate_s_t1(ht,
					self_public_.s_field_name_in_parent+"_s_label1",
					ht_content.get(lc_s_label1),false);
				raudrohi.wg_processing_t1.dbfcreate_s_t1(ht,
					self_public_.s_field_name_in_parent+"_s_label2",
					ht_content.get(lc_s_label2),true);
			} catch (err){
				raudrohi.tmg('88db9f46-c6e2-4e7a-b5f4-5240a0219bd7',err);
			} // catch
		} // get_content_2_collection_t1


		this.set_content_from_collection_t1=function(ht){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isObject(ht,'ht',
						'5b431d88-f1e8-4e46-b4f4-5240a0219bd7');
				} // if
				var s_key_field_set=raudrohi.wg_processing_t1.s_key_field_set(
					self_public_);
				if(ht.get(s_key_field_set)==='f'){
					self_public_.set_content_to_default();
					return;
				} // if

				var s_label1=raudrohi.wg_processing_t1.get_subfield(
					self_public_,lc_s_label1,ht);
				var s_label2=raudrohi.wg_processing_t1.get_subfield(
					self_public_,lc_s_label2,ht);
				var ht_content=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
				ht_content.put(lc_s_label1,s_label1);
				ht_content.put(lc_s_label2,s_label2);
				self_public_.set_content(ht_content);
			} catch (err){
				raudrohi.tmg('78a98b19-167d-4aa5-a2f4-5240a0219bd7',err);
			} // catch
		} // set_content_from_collection_t1

		self_public_.startup_sequence_init();
	} catch (err){
		raudrohi.tmg('3b1ca52c-a127-4b12-b5e4-5240a0219bd7',err);
	} // catch
} // raudrohi.widgets.g1.partialmenu_t1
