//=========================================================================

// ht_params is a Hashtable that must contain key 'type', which 
// must have a value of either "text" or "password".
raudrohi.widgets.g1.textarea_t1 =
function (s_html_id, i_number_of_columns, i_number_of_rows, ht_params) {
    var self_public_ = this;
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_is_HTML_ID(s_html_id, 's_html_id',
                'fef8cd12-12d4-4512-a5d3-d0a250705dd7');
            raudrohi.base.assert_isNumber(i_number_of_rows, 'i_number_of_rows',
                '7274b134-683c-46a1-84d3-d0a250705dd7');
            raudrohi.base.assert_isNumber(i_number_of_columns,
                'i_number_of_columns', '0b57ab63-4e4a-4b24-8dd3-d0a250705dd7');
            if (i_number_of_rows < 1) {
                raudrohi.tmg('4a00be57-d24e-4d7e-94d3-d0a250705dd7',
                    'i_number_of_rows<1');
            } // if
            if (i_number_of_columns < 1) {
                raudrohi.tmg('b12bca23-9c8d-475a-93d3-d0a250705dd7',
                    'i_number_of_columns<1');
            } // if
            raudrohi.base.assert_isObject(ht_params, 'ht_params',
                '361e9417-4171-48e2-83d3-d0a250705dd7');
            raudrohi.base.assert_isString(ht_params.get('type'),
                'type', '9650c430-28b0-46a5-b5d3-d0a250705dd7');
        } // if
        var lc_s_emptystring = raudrohi_glc_s_emptystring;
        var lc_s_space = raudrohi_glc_s_space;
        var lc_s_br = raudrohi_glc_s_br;

        var pileofmethods_t1_ = new raudrohi.widgets.g1.pileofmethods_t1(
            self_public_, 'raudrohi.widgets.g1.textarea_t1_', s_html_id);
        var prc_ = self_public_.private_code_;
        var msgbrd_html_id_ = prc_.html_id_ + '_msgbrd';

        // The html_id_tmp_ must not be refactored out, because it overcomes
        // a bug in the YUI lib. The
        // raudrohi.widgets.g1.sys.keylisteners_unit.add_keylistener has a more
        // throught comment. The html_id_tmp_ is used for allowing
        // the actual HTML id to differ every time the widget gets unhidden
        // and that's needed for overcoming the YUI bug.
        var html_id_tmp_ = prc_.html_id_ + '_';
        var html_id_tmp_counter_ = 0;

        prc_.container_id_ = prc_.html_id_ + '_div';

        // The cloning of the ht_params is necessary, because one migth
        // want to create multiple textareas with the same parameters
        // and obviously things might get tangled, if the textareas
        // share the ht_params instance. There's also a possibility that
        // the ht_params that is used for instantieating multiple
        // text-areas, is thrown back to the pool after use. Within the
        // pool it gets, hopefully, cleared, for new use.
        prc_.ht_params_ = raudrohi.base.clone_hashtable(ht_params);
        var b_apply_wordwrap_ = false;

        var textarea_name_ = s_html_id + '_name';
        var n_of_rows_ = i_number_of_rows;
        var n_of_columns_ = i_number_of_columns;
        var i_wordwrap_max_line_width_ = i_number_of_columns;


        var containers_html_cache_prefix_;

        function create_containers_prefix() {
            try {
                if (!prc_.containers_html_cached_) {
                    var ht = raudrohi.widgetless_ui.func.get_alignment_style_values(prc_.alignment1_);
                    containers_html_cache_prefix_ =
                    '<div style="vertical-align:' +
                    ht.get('vertical-align') + ';text-align:' +
                    ht.get('text-align') + ';">';
                    raudrohi.base.pool_of_hashtables.return_used_hashtable(ht);
                } // if
            } catch (err) {
                raudrohi.tmg('323455d5-9f8e-4364-9ac3-d0a250705dd7', err);
            } // catch
        } // create_containers_prefix

        var containers_html_cache_;
        var containers_html_cache_x1_;
        var containers_html_cache_x1_cached_ = false;

        function create_containers_editable() {
            try {
                // One can not cache the editable version of the
                // container HTML due to the neccesity of the
                // html_id_tmp_, which is used every time
                // the widget is unhidden. (The YUI related bug workaround.)
                create_containers_prefix();
                var prefix = containers_html_cache_prefix_;
                if (n_of_rows_ == 1) {
                    prefix = prefix + '<input ';
                } else {
                    prefix = prefix + '<textarea ';
                } // else
                html_id_tmp_ = prc_.html_id_ + html_id_tmp_counter_;
                prefix = prefix + 'id="' + html_id_tmp_ + '" ';
                html_id_tmp_counter_++;
                if (!prc_.containers_html_cached_) {
                    containers_html_cache_ = '';
                    if (n_of_rows_ == 1) {
                        containers_html_cache_ = '' +
                                                 ' type="' +
                                                 prc_.ht_params_.get('type') +
                                                 '" name="' + textarea_name_ +
                                                 '" ' +
                                                 'class="raudrohi_widgets_g1_textarea_t1"/>';
                        //'<input type="text" id="'+prc_.html_id_+'_shadow" '+
                        //'style="visibility:hidden; width:1em;" />';
                        // If the "shadow" input field is missing,
                        // then a push to the ENTER key will trigger
                        // the sending of the form and a page reload.
                    } else {
                        // For some weird reason the HTML taxtarea
                        // is displayed always with one additional row.
                        // For example, if rows==1, there will be 2 rows,
                        // if rows==42, there will be 43 rows, etc.
                        containers_html_cache_ = '' +
                                                 '  name="' + textarea_name_ +
                                                 '" rows="' + (n_of_rows_ - 1) +
                                                 '" cols="' + n_of_columns_ +
                                                 '"></textarea>'
                    } // else
                    containers_html_cache_ = containers_html_cache_ + '</div>';
                    prc_.containers_html_cached_ = true;
                } // if
                if (!containers_html_cache_x1_cached_) {
                    containers_html_cache_x1_ = '' +
                                                '<table class="raudrohi_positioning_table"><tbody>' +
                                                '<tr>' +
                                                '<td><div id="' +
                                                msgbrd_html_id_ +
                                                '"></div></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td>';//prefix+containers_html_cache_+'</td>'+
                    //'</tr>'+
                    //'</tbody></table>';
                    containers_html_cache_x1_cached_ = true;
                } // if
                var s_html = containers_html_cache_x1_ +
                             prefix + containers_html_cache_ + '</td>' +
                             '</tr></tbody></table>';
                raudrohi.base.set_innerHTML(prc_.container_id_, s_html);
                //raudrohi.base.set_innerHTML(prc_.container_id_,s_html);

                // The reason, why the width has to be applied dynamically is
                // that this way it's possible to edit the width of the
                // quite "insensitive" textarea nodes. Thank God, that at least
                // this works with the s___ing, all glory, web technology.
                // If one uses the size attribute in stead of the width
                // attribute, boxes that match by the value of their size
                // attribute are rendered unequal in Internet Explorer 8.
                raudrohi.adapter.editStyle(html_id_tmp_,
                    'width', n_of_columns_ + 'em');
            } catch (err) {
                raudrohi.tmg('1290ab35-ddc1-40c8-b6c3-d0a250705dd7',
                    'phonenumber==' + self_public_.phone.get_phone_number() +
                    '  err==' + err);
            } // catch
        } // create_containers_editable

        function create_containers_readonly() {
            try {
                prc_.customizable.optional.content_from_GUI_2_vars();
                create_containers_prefix();
                var s0 = '' + prc_.content_;
                if (b_apply_wordwrap_ === true) {
                    var b_use_fake_but_fast = true;
                    s0 = raudrohi.lang.word_wrap(s0,
                        i_wordwrap_max_line_width_,
                        lc_s_br, lc_s_space, b_use_fake_but_fast);
                } // if
                var s1 = raudrohi.lang.fixed_size_string_html(s0);
                containers_html_cache_ = containers_html_cache_prefix_ +
                                         s1 + '</div>';
                prc_.containers_html_cached_ = true;
                raudrohi.base.set_innerHTML(prc_.container_id_,
                    containers_html_cache_);
            } catch (err) {
                raudrohi.tmg('2a5fd0a1-3024-473c-91c3-d0a250705dd7', err);
            } // catch
        } // create_containers_readonly

        this.set_wordwrap = function (i_wordwrap_max_line_width_or_null) {
            try {
                if (i_wordwrap_max_line_width_or_null === null) {
                    b_apply_wordwrap_ = false;
                    return;
                } // if
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isNumber(
                        i_wordwrap_max_line_width_or_null,
                        'i_wordwrap_max_line_width_or_null',
                        'bfe8944b-59b4-4acc-b1c3-d0a250705dd7');
                    if (i_wordwrap_max_line_width_or_null < 1) {
                        raudrohi.tmg('c9d7c719-1490-436f-91c3-d0a250705dd7',
                            "i_wordwrap_max_line_width_or_null==" +
                            i_wordwrap_max_line_width_or_null);
                    } // if
                } // if
                i_wordwrap_max_line_width_ = i_wordwrap_max_line_width_or_null;
                b_apply_wordwrap_ = true;
            } catch (err) {
                raudrohi.tmg('0d45d41f-d985-4031-b7c3-d0a250705dd7', err);
            } // catch
        } // this.set_wordwrap

        prc_.customizable.compulsory.render_editable = function () {
            try {
                create_containers_editable();
                raudrohi.widgetless_ui.func.set_formfield_value(html_id_tmp_,
                    prc_.content_);
                prc_.self_is_hidden_ = false;
                if (prc_.keylisteners_unit_inited_) {
                    prc_.keylisteners_unit_.detach_listeners_from_DOM_elements();
                    prc_.keylisteners_unit_.attach_listeners2_DOM_elements(
                        html_id_tmp_);
                } // if
            } catch (err) {
                raudrohi.tmg('5f621c1c-e53f-4e87-85c3-d0a250705dd7',
                    'phonenumber==' + self_public_.phone.get_phone_number() +
                    '  err==' + err);
            } // catch
        } // render_editable

        prc_.customizable.compulsory.render_readonly = function () {
            try {
                create_containers_readonly();
            } catch (err) {
                raudrohi.tmg('72fa733d-dac5-492d-a2c3-d0a250705dd7', err);
            } // catch
        } // render_readonly

        this.set_content = function (a_string) {
            try {
                raudrohi.base.assert_isString(a_string,
                    'a_string', 'c79df730-c821-4160-a4c3-d0a250705dd7');
                prc_.content_ = a_string;
                if (self_public_.is_hidden() === false) {
                    self_public_.unhide();
                } // if
            } catch (err) {
                raudrohi.tmg('1dcf4a26-fefc-43f0-92c3-d0a250705dd7', err);
            } // catch
        } // set_content

        // The floating_point_separator_ is useful if the value is
        // set programmatically as a number.
        var floating_point_separator_ = '.';
        this.set_floating_point_separator = function (a_string) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(a_string, 'a_string',
                        '8a897f41-8367-41bd-84b3-d0a250705dd7');
                    if (a_string == '') {
                        raudrohi.tmg('3d5d3558-a124-414b-a5b3-d0a250705dd7',
                            'The floating point separator is not allowed ' +
                            'to be an empty string.');
                    } // if
                } // if
                floating_point_separator_ = a_string;
            } catch (err) {
                raudrohi.tmg('03397915-e844-4c7e-b5b3-d0a250705dd7', err);
            } // catch
        } // set_floating_point_separator

        this.get_floating_point_separator = function () {
            try {
                return floating_point_separator_;
            } catch (err) {
                raudrohi.tmg('afb04e20-02c0-4654-91b3-d0a250705dd7', err);
            } // catch
        } // get_floating_point_separator

        this.set_content_as_number = function (a_float_or_int) {
            try {
                raudrohi.base.assert_isNumber(a_float_or_int, 'a_float_or_int',
                    '680a9c63-7be4-484c-beb3-d0a250705dd7');
                prc_.content_ = raudrohi.lang.number2str(a_float_or_int,
                    floating_point_separator_)
                prc_.content_set_ = true;
                if (self_public_.is_hidden() === false) {
                    self_public_.unhide();
                } // if
            } catch (err) {
                raudrohi.tmg('2c108232-3985-4349-87b3-d0a250705dd7', err);
            } // catch
        } // set_content_as_number

        this.get_content = function () {
            try {
                var content;
                if (self_public_.is_hidden() || prc_.is_readonly_) {
                    content = prc_.content_;
                } else {
                    content =
                    raudrohi.widgetless_ui.func.get_formfield_value(html_id_tmp_);
                } // else
                if (prc_.bitfield_.is_set('do_not_trim_content')) {
                    return '' + content;
                } // if
                var s_ct = raudrohi.adapter.trim(content);
                prc_.content_ = s_ct;
                if ((self_public_.is_hidden() === false) &&
                    (prc_.is_readonly_ === false)) {
                    raudrohi.widgetless_ui.func.set_formfield_value(html_id_tmp_,
                        prc_.content_);
                } // if
                return '' + s_ct;
            } catch (err) {
                raudrohi.tmg('bc9e4947-8b60-447e-a1b3-d0a250705dd7', err);
            } // catch
        } // get_content

        // Returns a boolean.
        this.value_is_empty_after_trimming_spaces_and_linebreaks = function () {
            try {
                var s0 = self_public_.get_content();
                var s1 = raudrohi.base.gsubAllLinebreaksSpacesTabs(s0);
                if (s1 === '') {
                    return true;
                } // if
                return false;
            } catch (err) {
                raudrohi.tmg('13ff0111-de06-4f0d-82b3-d0a250705dd7', err);
            } // catch
        } // value_is_empty_after_trimming_spaces_and_linebreaks

        // Returns raudrohi.core.triple, where
        // a_triple.a==false,  if the interpretation of the field
        // content as float succeeded and a_triple.a==true, if
        // the interpretation failed.
        // If the operation succeeded, the a_triple.b is assigned
        // a float value. Otherwise it is assigned a string with an error
        // message that can be shown to a user.
        // If the a_string has a string value that depicts a whole number,
        // then the whole number is converted to a floating point number.
        //
        // If the text field is an empty string after trimming, then
        // the operation is considered to be failed, i.e. a_triple.a===true,
        // and the a_triple.c===true. If the textfield is not empty,
        // regardless of the operation success/failure, the a_triple.c===false.
        //
        // A comma is interpreted as a point.
        //
        // TODO: refactor this method out of here. This method is
        // DEPRECATED, because it's a matter of interpretation,
        // whether a string represents a float or not. There are also
        // multiple notations for floats and the "string parsing"
        // by one set of assumptions is a separate task, not something
        // that a GUI element should do.
        this.get_content_as_float = function () {
            try {
                var s_content = self_public_.get_content();
                var a_triple = raudrohi.base.private_code.string2float(s_content);
                if (a_triple.a) {
                    if (a_triple.c === true) {
                        a_triple.b = raudrohi.lang.userinterface_text.get(100);
                    } else {
                        a_triple.b = raudrohi.lang.userinterface_text.get(97) +
                                     ' ' + s_content;
                    } // else
                    prc_.content_set_ = false;
                } // if
                return a_triple;
            } catch (err) {
                raudrohi.tmg('01de965e-8ab8-4356-81b3-d0a250705dd7', err);
            } // catch
        } // get_content_as_float

        // A peculiarity of the textarea_t1 widget is that the HTML
        // id of the textfield changes,  whenever the widget is unhidden.
        this.get_textfield_html_id = function () {
            try {
                return html_id_tmp_;
            } catch (err) {
                raudrohi.tmg('11d8064d-1773-4382-97a3-d0a250705dd7', err);
            } // catch
        } // get_current_html_id


        this.set_focus = function () {
            try {
                if (self_public_.is_hidden() || prc_.is_readonly_) {
                    return;
                } // if
                raudrohi.widgetless_ui.func.set_focus_2_formfield(html_id_tmp_);
            } catch (err) {
                raudrohi.tmg('4c1c1e31-5baa-4762-a8a3-d0a250705dd7', err);
            } // catch
        } // set_focus

        // It's useful for dirty hacks, where the rendering of
        // the DOM elements lags behind JavaScript execution.
        // If the rendering takes place in the background and focus
        // set events are not placed to stack, then, unfortunately,
        // this method might not be as dirty as it seems.
        this.set_focus_with_a_delay = function (i_delay_in_milliseconds) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isNumber(i_delay_in_milliseconds,
                        'i_delay_in_milliseconds',
                        '463b0f2f-403e-4a87-b3a3-d0a250705dd7');
                    if (i_delay_in_milliseconds < 0) {
                        raudrohi.tmg('7f991440-0f17-4f5a-82a3-d0a250705dd7',
                            'i_delay_in_milliseconds==' +
                            i_delay_in_milliseconds + ' < 0');
                    } // if
                } // if
                var cmd = "raudrohi.lang.phonebooth_dev_null.phone.call('" +
                          self_public_.phone.get_phone_number() +
                          "','set_focus|||whatever|||',42);"
                window.setTimeout(cmd, i_delay_in_milliseconds);
            } catch (err) {
                raudrohi.tmg('2512aa2c-f2bc-46e3-a5a3-d0a250705dd7', err);
            } // catch
        } // set_focus_with_a_delay

        self_public_.private_code_.evh_.evh_focus_textarea_t1 = function (e) {
        } // evh_focus

        // The focus and blur case is due to the
        // background color changing feature.


        this.set_keylistener =
        function (key_number_as_string, event_handler_func) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(key_number_as_string,
                        'key_number_as_string',
                        'fd5bcb11-9f7a-4ce9-82a3-d0a250705dd7');
                    raudrohi.base.assert_isFunction(event_handler_func,
                        'event_handler_func',
                        '6230b161-cda4-46e7-aaa3-d0a250705dd7');
                } // if
                if (!prc_.keylisteners_unit_inited_) {
                    prc_.keylisteners_unit_ =
                    new raudrohi.widgets.g1.sys.keylisteners_unit(self_public_);
                    prc_.keylisteners_unit_inited_ = true;
                } // if
                prc_.keylisteners_unit_.add_keylistener(html_id_tmp_,
                    key_number_as_string, event_handler_func);
            } catch (err) {
                raudrohi.tmg('ae1b3354-ce32-427e-82a3-d0a250705dd7', err);
            } // catch
        } // set_keylistener


        prc_.customizable.optional.content_from_GUI_2_vars = function () {
            try {
                if ((prc_.is_readonly_) || (self_public_.is_hidden())) {
                    return;
                } // if
                var content = raudrohi.widgetless_ui.func.get_formfield_value(html_id_tmp_);
                if (prc_.bitfield_.is_set('do_not_trim_content')) {
                    prc_.content_ = content;
                    return;
                } // if
                var s_ct = raudrohi.adapter.trim(content);
                prc_.content_ = s_ct;
                if ((self_public_.is_hidden() === false) &&
                    (prc_.is_readonly_ === false)) {
                    raudrohi.widgetless_ui.func.set_formfield_value(html_id_tmp_,
                        prc_.content_);
                } // if
            } catch (err) {
                raudrohi.tmg('f608374e-8137-4160-8193-d0a250705dd7', err);
            } // catch
        } // content_from_GUI_2_vars

        this.hide = function (true_if_update_DOM) {
            try {
                if (self_public_.is_hidden() === true) {
                    return;
                } // if
                if (!prc_.is_readonly_) {
                    prc_.customizable.optional.content_from_GUI_2_vars();
                    prc_.content_ =
                    raudrohi.widgetless_ui.func.get_formfield_value(html_id_tmp_);
                } // if
                if (prc_.keylisteners_unit_inited_) {
                    prc_.keylisteners_unit_.detach_listeners_from_DOM_elements();
                } // if
                if (true_if_update_DOM) {
                    raudrohi.base.set_innerHTML(prc_.container_id_, '');
                } // if
                prc_.self_is_hidden_ = true;
            } catch (err) {
                raudrohi.tmg('bc3cdbc2-5f3f-43da-b393-d0a250705dd7', err);
            } // catch
        } // hide

        this.get_content_2_collection_t1 = function (ht) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isObject(ht, 'ht',
                        '6a0cb42b-b7d0-4b95-9193-d0a250705dd7');
                } // if
                raudrohi.wg_processing_t1.dbfcreate_textarea_t1(ht,
                    self_public_, true); // TODO: Think the trimming part here over.
            } catch (err) {
                raudrohi.tmg('317f944f-6489-4d64-a193-d0a250705dd7', err);
            } // catch
        } // get_content_2_collection_t1


        this.set_content_from_collection_t1 = function (ht) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isObject(ht, 'ht',
                        '8de778d2-6eac-4c59-8393-d0a250705dd7');
                } // if
                var s_key_field_set = raudrohi.wg_processing_t1.s_key_field_set(
                    self_public_);
                if (ht.get(s_key_field_set) === 'f') {
                    self_public_.set_content("");
                    return;
                } // if
                var s_key_field = raudrohi.wg_processing_t1.s_key_field(
                    self_public_);
                var s = ht.get(s_key_field);
                self_public_.set_content(s);
            } catch (err) {
                raudrohi.tmg('84c4e8d5-4780-42ff-8593-d0a250705dd7', err);
            } // catch
        } // set_content_from_collection_t1

        this.phone.receive_phonecall = function (a_phonecall_instance) {
            try {
                var data = raudrohi.adapter.trim(a_phonecall_instance.data);
                var a_pair = raudrohi.base.bisect(data, '|||');
                raudrohi.base.assert_isNotnull(a_pair, 'a_pair',
                    '2e7f5ac2-722a-4ebc-8793-d0a250705dd7');
                if (pileofmethods_t1_.standard_phonecall_received_t1(a_pair,
                    a_phonecall_instance)) {
                    return;
                } // if
                switch (a_pair.a) {
                    case 'set_focus':
                        self_public_.set_focus();
                        break;
                    case 'set_content':
                        self_public_.set_content(a_phonecall_instance.data2);
                        break;
                    case 'get_content':
                        var c = self_public_.get_content();
                        self_public_.phone.call(
                            a_phonecall_instance.origin_phone_number, c, 0);
                        break;
                    default:
                        if (raudrohi_settings_debug_JavaScript === true) {
                            raudrohi.tmg(
                                '564a9525-f650-4425-9293-d0a250705dd7',
                                'There\'s no message handler for ' + a_pair.a);
                        } // if
                } // switch
            } catch (err) {
                raudrohi.tmg('2ddd454d-0c1c-4831-b583-d0a250705dd7', err);
            } // catch
        } // receive_phonecall

        self_public_.startup_sequence_init();

    } catch (err) {
        raudrohi.tmg('5fbac982-7cfb-45a4-b483-d0a250705dd7', err);
    } // catch
} // raudrohi.widgets.g1.textarea_t1

//------------------------------------------------------------------------
