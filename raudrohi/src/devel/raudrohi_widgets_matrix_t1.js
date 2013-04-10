//=========================================================================

// Compartments are addressed like pixels at a computer screen.
// Address of the leftmost and topmost compartment is (0,0).
raudrohi.widgets.g1.matrix_t1=function(s_html_id, initial_width,initial_height){
	try{
		var self_public_=this;

		var pileofmethods_t1_=new raudrohi.widgets.g1.pileofmethods_t1(
			self_public_,'raudrohi.widgets.g1.matrix_t1_',s_html_id);
		var prc_=self_public_.private_code_;
		if(raudrohi_settings_debug_JavaScript===true){
			raudrohi.base.assert_isString(s_html_id,'s_html_id',
				'e50524f3-9a73-485e-83e1-3070a0219bd7');
			raudrohi.base.assert_isNumber(initial_width,'initial_width',
				'4229a48a-bede-4204-b4e1-3070a0219bd7');
			raudrohi.base.assert_isNumber(initial_height,'initial_height',
				'52c92064-e5e1-4ad0-afe1-3070a0219bd7');
			if(initial_width<1){
				raudrohi.tmg('2cee8a2b-1db6-4a0a-84e1-3070a0219bd7',
					'initial_width=='+initial_width+' < 1');
			} // if
			if(initial_height<1){
				raudrohi.tmg('160fd12a-954e-47eb-a2e1-3070a0219bd7',
					'initial_height=='+initial_height+' < 1');
			} // if
		} // if

		var width_=initial_width;
		this.get_width=function(){
			return width_;
		} // get_width

		var height_=initial_height;
		this.get_height=function(){
			return height_;
		} // get_height

		prc_.content_set_=false;

		// Returns a compartment ID regardless of whether the
		// compartment with coordinates (x,y) actually even exist.
		this.get_compartment_id=function(x,y){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isNumber(x, 'x',
						'52271bdd-9cd0-459c-9ce1-3070a0219bd7');
					raudrohi.base.assert_isNumber(y, 'y',
						'3951d85e-167d-43a5-a5d1-3070a0219bd7');
				} // if
				var s_id='_x'+x+'_y'+y+'_'+
				self_public_.phone.get_phone_number();
				return s_id;
			} catch (err){
				raudrohi.tmg('245da6c9-5daf-4f78-bfd1-3070a0219bd7',err);
			} // catch
		} // get_compartment_id

		function create_containers_row(row_width,y){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isNumber(y,'y',
						'3193ffb6-704d-4a89-b5d1-3070a0219bd7');
					raudrohi.base.assert_isNumber(row_width,'row_width',
						'48de9350-f034-4cf9-a1d1-3070a0219bd7');
				} // if
				var s_html="\n<tr>\n";
				var i=0;
				for(i=0;i<row_width;i++){
					s_html=s_html+
					'<td class="raudrohi_visible_table_cells"><div id="'+
					self_public_.get_compartment_id(i,y)+
					"\"></div></td>\n";
				} // for
				s_html=s_html+"</tr>\n"
				return s_html;
			} catch (err){
				raudrohi.tmg('d6840223-321d-4adb-94d1-3070a0219bd7',err);
			} // catch
		} // create_containers_row

		function create_containers_generate_html(){
			try{
				var s_html=''+
				"\n<center>\n"+
				'<table class="raudrohi_visible_table '+
				'angervaks_menu_item_font_shape"> '+
				'<tbody>';
				var y=0;
				for(y=0;y<height_;y++){
					s_html=s_html+create_containers_row(width_,y);
				} // for
				s_html=s_html+
				'</tbody></table>'+
				"\n</center>\n";
				return s_html;
			} catch (err){
				raudrohi.tmg('c344d321-6099-4964-a3d1-3070a0219bd7',err);
			} // catch
		} // create_containers_generate_html

		function create_containers(){
			try{
				while(prc_.containers_html_cached_!==true){
					// It's a "while" in stead of "if" because
					// the set_dimensions() might be called while
					// the  create_containers_generate_html is executing.
					prc_.containers_html_cache_=create_containers_generate_html();
					prc_.containers_html_cached_=true;
				} // while
				raudrohi.base.set_innerHTML(prc_.container_id_,
					prc_.containers_html_cache_);
				raudrohi.adapter.log('kala matrix');
			} catch (err){
				raudrohi.tmg('d9f3034d-fe70-4ffa-b5d1-3070a0219bd7',err);
			} // catch
		} // create_containers

		prc_.customizable.compulsory.render_editable=function(){
			try{
				create_containers();
			} catch (err){
				raudrohi.tmg('7ef7d4d4-c61e-479a-a4d1-3070a0219bd7',err);
			} // catch
		} // render_editable

		prc_.customizable.compulsory.render_readonly=prc_.customizable.compulsory.render_editable;

		var ht_in_use_check_=new Hashtable();

		// Compartment widgets are registered as subwidgets.
		// They all must have a method "reset_container_id".
		this.set_compartment_widget=function(a_widget,x,y){
			try{
				var s;
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isNumber(x,'x',
						'2901cbb4-e0d1-4f40-b8d1-3070a0219bd7');
					raudrohi.base.assert_isNumber(y,'y',
						'22cbacd1-0ae9-4cdc-9ed1-3070a0219bd7');
					raudrohi.base.assert_isObject(a_widget, 'a_widget',
						'd316bd50-4d4b-47b8-94d1-3070a0219bd7');
					if(x<0){
						raudrohi.tmg('733c4b40-6b25-428c-a4d1-3070a0219bd7',
							'x=='+x+' < 0');
					} // if
					if(y<0){
						raudrohi.tmg('3c305ae2-d61e-4ab8-93d1-3070a0219bd7',
							'y=='+y+' < 0');
					} // if
					if((width_-1) < x){
						raudrohi.tmg('4256b0b2-93fb-4277-a6d1-3070a0219bd7',
							'(width_-1) < x');
					} // if
					if((height_-1) < y){
						raudrohi.tmg('4728f202-6c02-4c9a-a3c1-3070a0219bd7',
							'(height_-1) < y');
					} // if
					s='coords_'+x+'_'+y+'_';
					if(ht_in_use_check_.containsKey(s)===true){
						raudrohi.tmg('af61b954-6784-433a-a5c1-3070a0219bd7',
							'Coordinate (x=='+x+',y=='+y+') is assinged '+
							'to more than one compartment widget.');
					} // if
					ht_in_use_check_.put(s,42);
				} // if
				var new_html_id=self_public_.get_compartment_id(x, y);
				a_widget.reset_container_id(new_html_id);
				prc_.register_subwidget(a_widget,'visible');
				prc_.content_set_=true;
				if(self_public_.is_hidden()===false){
					self_public_.unhide();
				} // if
			} catch (err){
				raudrohi.tmg('96f57848-e251-4a83-83c1-3070a0219bd7',err);
			} // catch
		} // set_compartment_widget

		this.clear_content=function(){
			try{
				if(prc_.content_set_===false){
					return;
				} // if
				if(raudrohi_settings_debug_JavaScript===true){
					ht_in_use_check_.clear();
				} // if
				prc_.unregister_all_subwidgets();
				prc_.content_set_=false;
				if(self_public_.is_hidden()===false){
					self_public_.unhide();
				} // if
			} catch (err){
				raudrohi.tmg('59d8b02d-a298-44fb-b1c1-3070a0219bd7',err);
			} // catch
		} // clear_content

		// Resetting dimensions also unregisters all widgets.
		this.reset_dimensions=function(width,height){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isNumber(width,'width',
						'8c06c536-a382-4eef-b2c1-3070a0219bd7');
					raudrohi.base.assert_isNumber(height,'height',
						'25181291-e0d2-4fd7-b2c1-3070a0219bd7');
					if(width<1){
						raudrohi.tmg('2925b1a2-5c73-4578-a4c1-3070a0219bd7',
							'width=='+width+' < 1');
					} // if
					if(height<1){
						raudrohi.tmg('54249f3a-db9c-47b2-91c1-3070a0219bd7',
							'height=='+height+' < 1');
					} // if
				} // if
				self_public_.clear_content();
				width_=width;
				height_=height;
				prc_.containers_html_cached_=false;
				if(self_public_.is_hidden()===false){
					self_public_.unhide();
				} // if
			} catch (err){
				raudrohi.tmg('fc2f6c06-e162-41a4-b3c1-3070a0219bd7',err);
			} // catch
		} // reset_dimensions

		self_public_.startup_sequence_init();
	} catch (err){
		raudrohi.tmg('43197253-fe38-42fa-a2c1-3070a0219bd7',err);
	} // catch
} // raudrohi.widgets.g1.matrix_t1

//------------------------------------------------------------------------
