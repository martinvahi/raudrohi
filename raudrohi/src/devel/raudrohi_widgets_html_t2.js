//=========================================================================

// It wraps a "raw" HTML string, the content, to the widgets framework.
raudrohi.widgets.g1.html_t2=function(s_html_id,parent_instance){
	try{
		var self_public_=this;
		if(raudrohi_settings_debug_JavaScript===true){
			raudrohi.base.assert_isString(s_html_id,'s_html_id',
				'1273b317-9046-44bd-9103-50727041abd7');
			raudrohi.base.assert_isObject(parent_instance,'parent_instance',
				'9d38b342-670d-46e6-9303-50727041abd7');
		} // if

		var pileofmethods_t1_=new raudrohi.widgets.g1.pileofmethods_t1(
			self_public_,'raudrohi.widgets.g1.html_t2_',s_html_id);
		var prc_=self_public_.private_code_;
		prc_.parent_instance_=parent_instance

		prc_.content_="";
		prc_.content_set_ = true;

		prc_.customizable.compulsory.render_editable=function(){
			try{
				// This widget is so simplistic that it doens't even
				// have any "create_containers" methods.
				//var s_rendered=prc_.selfread.wrap_2_alignment_div(
				//	prc_.content_);
				var s_rendered=prc_.content_;
				raudrohi.base.set_innerHTML(prc_.container_id_,s_rendered);
			} catch (err){
				raudrohi.tmg('506a1d52-6e1d-4406-a303-50727041abd7',err);
			} // catch
		} // render_editable

		prc_.customizable.compulsory.render_readonly=prc_.customizable.compulsory.render_editable;

		this.set_content = function(s_html) {
			try {
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(s_html, 's_html',
						'd8a10457-9b68-48da-a403-50727041abd7');
				} // if
				prc_.content_ = s_html;
				prc_.repaint_if_graphical_and_not_hidden();
			} catch(err) {
				raudrohi.tmg('aeb0272f-50c0-4c39-9503-50727041abd7', err);
			} // catch
		} // set_content

		this.get_content = function() {
			try {
				var s_out=""+prc_.content_;
				return s_out;
			} catch(err) {
				raudrohi.tmg('6c4ca820-db63-4e12-8203-50727041abd7', err);
			} // catch
		} // get_content


		self_public_.startup_sequence_init();

	} catch (err){
		raudrohi.tmg('a8a1c558-d527-4da6-8303-50727041abd7',err);
	} // catch
} // raudrohi.widgets.g1.html_t2

//=========================================================================
