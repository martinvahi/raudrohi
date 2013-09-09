//=========================================================================

// s_type inSet {"text", "password"}, default=="text"
window.raudrohi.widgets.g1.textarea_t2 =
    function (s_html_id, i_number_of_columns, i_number_of_rows, s_type) {
        var self_public_ = this;
        s_type= typeof(s_type) !== 'undefined' ? s_type : "text";
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                window.raudrohi.base.assert_is_HTML_ID(s_html_id, 's_html_id',
                    '45360d36-4f0d-4398-8f7e-b3d0e0606dd7');
                window.raudrohi.base.assert_isNumber(i_number_of_rows, 'i_number_of_rows',
                    '440bfa0d-78c9-4211-8e5e-b3d0e0606dd7');
                window.raudrohi.base.assert_isNumber(i_number_of_columns,
                    'i_number_of_columns', '4ebc59a1-cfe5-4844-ae4e-b3d0e0606dd7');
                if (i_number_of_rows < 1) {
                    window.raudrohi.tmg('142bf691-d151-4b25-a85e-b3d0e0606dd7',
                        'i_number_of_rows<1');
                } // if
                if (i_number_of_columns < 1) {
                    window.raudrohi.tmg('44f1eb23-b76a-44a9-943e-b3d0e0606dd7',
                        'i_number_of_columns<1');
                } // if
                window.raudrohi.base.assert_isString(s_type,'s_type',
                    'c8b78654-17be-4e14-a75e-b3d0e0606dd7');
                switch(s_type){
                    case 'text':
                        break;
                    case 'password':
                        break;
                    default:
                        throw window.raudrohi.tmg(
                            'TO_BE_RE-PLAC-ED_W-ITH_-A_GUID______',
                            'There\'s no branching for s_type(=='+
                            s_type+').');
                } // switch
            } // if
            var lc_s_space = raudrohi_glc_s_space;
            var lc_s_br = raudrohi_glc_s_br;

            var pileofmethods_t1_ = new window.raudrohi.widgets.g1.pileofmethods_t1(
                self_public_, 'window.raudrohi.widgets.g1.textarea_t1_', s_html_id);
            var prc_ = self_public_.private_code_;
            var msgbrd_html_id_ = prc_.html_id_ + '_msgbrd';

            // The html_id_tmp_ must not be refactored out, because it overcomes
            // a bug in the YUI lib. The
            // window.raudrohi.widgets.g1.sys.keylisteners_unit.add_keylistener has a more
            // throught comment. The html_id_tmp_ is used for allowing
            // the actual HTML id to differ every time the widget gets unhidden
            // and that's needed for overcoming the YUI bug.
            var html_id_tmp_ = prc_.html_id_ + '_';
            var html_id_tmp_counter_ = 0;

            prc_.container_id_ = prc_.html_id_ + '_div';

            var b_apply_wordwrap_ = false;

            var textarea_name_ = s_html_id + '_name';
            var n_of_rows_ = i_number_of_rows;
            var n_of_columns_ = i_number_of_columns;
            var i_wordwrap_max_line_width_ = i_number_of_columns;


            var containers_html_cache_prefix_;

            function create_containers_prefix() {
                try {
                    if (!prc_.containers_html_cached_) {
                        var ht = window.raudrohi.widgetless_ui.func.get_alignment_style_values(prc_.alignment1_);
                        containers_html_cache_prefix_ =
                        '<div style="vertical-align:' +
                        ht.get('vertical-align') + ';text-align:' +
                        ht.get('text-align') + ';">';
                        window.raudrohi.base.pool_of_hashtables.return_used_hashtable(ht);
                    } // if
                } catch (err) {
                    window.raudrohi.tmg('42763ab2-c2e7-4db6-a65e-b3d0e0606dd7', err);
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
                            ' type="' +s_type+
                            '" name="' + textarea_name_ + '" ' +
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
                    window.raudrohi.base.set_innerHTML(prc_.container_id_, s_html);
                    //window.raudrohi.base.set_innerHTML(prc_.container_id_,s_html);

                    // The reason, why the width has to be applied dynamically is
                    // that this way it's possible to edit the width of the
                    // quite "insensitive" textarea nodes. Thank God, that at least
                    // this works with the s___ing, all glory, web technology.
                    // If one uses the size attribute in stead of the width
                    // attribute, boxes that match by the value of their size
                    // attribute are rendered unequal in Internet Explorer 8.
                    window.raudrohi.adapter.editStyle(html_id_tmp_,
                        'width', n_of_columns_ + 'em');
                } catch (err) {
                    window.raudrohi.tmg('2686f0b1-4a66-4121-bb5e-b3d0e0606dd7',
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
                        s0 = window.raudrohi.lang.word_wrap(s0,
                            i_wordwrap_max_line_width_,
                            lc_s_br, lc_s_space, b_use_fake_but_fast);
                    } // if
                    var s1 = window.raudrohi.lang.fixed_size_string_html(s0);
                    containers_html_cache_ = containers_html_cache_prefix_ +
                    s1 + '</div>';
                    prc_.containers_html_cached_ = true;
                    window.raudrohi.base.set_innerHTML(prc_.container_id_,
                        containers_html_cache_);
                } catch (err) {
                    window.raudrohi.tmg('3b6d63b5-7809-41a7-a81e-b3d0e0606dd7', err);
                } // catch
            } // create_containers_readonly

            this.set_wordwrap = function (i_wordwrap_max_line_width_or_null) {
                try {
                    if (i_wordwrap_max_line_width_or_null === null) {
                        b_apply_wordwrap_ = false;
                        return;
                    } // if
                    if (raudrohi_settings_debug_JavaScript === true) {
                        window.raudrohi.base.assert_isNumber(
                            i_wordwrap_max_line_width_or_null,
                            'i_wordwrap_max_line_width_or_null',
                            '1631b5c2-8b95-46c5-be4d-b3d0e0606dd7');
                        if (i_wordwrap_max_line_width_or_null < 1) {
                            window.raudrohi.tmg('d1bf1ff5-b030-4373-b93d-b3d0e0606dd7',
                                "i_wordwrap_max_line_width_or_null==" +
                                i_wordwrap_max_line_width_or_null);
                        } // if
                    } // if
                    i_wordwrap_max_line_width_ = i_wordwrap_max_line_width_or_null;
                    b_apply_wordwrap_ = true;
                } catch (err) {
                    window.raudrohi.tmg('21295a4c-f844-4b05-8e2d-b3d0e0606dd7', err);
                } // catch
            } // this.set_wordwrap

            prc_.customizable.compulsory.render_editable = function () {
                try {
                    create_containers_editable();
                    window.raudrohi.widgetless_ui.func.set_formfield_value(html_id_tmp_,
                        prc_.content_);
                    prc_.self_is_hidden_ = false;
                    if (prc_.keylisteners_unit_inited_) {
                        prc_.keylisteners_unit_.detach_listeners_from_DOM_elements();
                        prc_.keylisteners_unit_.attach_listeners2_DOM_elements(
                            html_id_tmp_);
                    } // if
                } catch (err) {
                    window.raudrohi.tmg('22ba2259-8a27-4208-b13d-b3d0e0606dd7',
                        'phonenumber==' + self_public_.phone.get_phone_number() +
                        '  err==' + err);
                } // catch
            } // render_editable

            prc_.customizable.compulsory.render_readonly = function () {
                try {
                    create_containers_readonly();
                } catch (err) {
                    window.raudrohi.tmg('fa399540-4510-4d16-a83d-b3d0e0606dd7', err);
                } // catch
            } // render_readonly

            this.set_content = function (a_string) {
                try {
                    window.raudrohi.base.assert_isString(a_string,
                        'a_string', '2fe795c5-5731-4cea-833d-b3d0e0606dd7');
                    prc_.content_ = a_string;
                    if (self_public_.is_hidden() === false) {
                        self_public_.unhide();
                    } // if
                } catch (err) {
                    window.raudrohi.tmg('461dcce3-2953-4c2c-a83d-b3d0e0606dd7', err);
                } // catch
            } // set_content

            // The floating_point_separator_ is useful if the value is
            // set programmatically as a number.
            var floating_point_separator_ = '.';
            this.set_floating_point_separator = function (a_string) {
                try {
                    if (raudrohi_settings_debug_JavaScript === true) {
                        window.raudrohi.base.assert_isString(a_string, 'a_string',
                            '3163dc34-b23c-4ed8-972d-b3d0e0606dd7');
                        if (a_string == '') {
                            window.raudrohi.tmg('33b33d55-b7bd-47e9-a95d-b3d0e0606dd7',
                                'The floating point separator is not allowed ' +
                                'to be an empty string.');
                        } // if
                    } // if
                    floating_point_separator_ = a_string;
                } catch (err) {
                    window.raudrohi.tmg('543ed7b5-677d-4e0a-853c-b3d0e0606dd7', err);
                } // catch
            } // set_floating_point_separator

            this.get_floating_point_separator = function () {
                try {
                    return floating_point_separator_;
                } catch (err) {
                    window.raudrohi.tmg('4c5443a3-86fe-4555-b45c-b3d0e0606dd7', err);
                } // catch
            } // get_floating_point_separator

            this.set_content_as_number = function (a_float_or_int) {
                try {
                    window.raudrohi.base.assert_isNumber(a_float_or_int, 'a_float_or_int',
                        '21ccb344-549e-4fe2-b64c-b3d0e0606dd7');
                    prc_.content_ = window.raudrohi.lang.number2str(a_float_or_int,
                        floating_point_separator_)
                    prc_.content_set_ = true;
                    if (self_public_.is_hidden() === false) {
                        self_public_.unhide();
                    } // if
                } catch (err) {
                    window.raudrohi.tmg('330c4aa7-bb54-4e80-ba3c-b3d0e0606dd7', err);
                } // catch
            } // set_content_as_number

            this.get_content = function () {
                try {
                    var content;
                    if (self_public_.is_hidden() || prc_.is_readonly_) {
                        content = prc_.content_;
                    } else {
                        content =
                        window.raudrohi.widgetless_ui.func.get_formfield_value(html_id_tmp_);
                    } // else
                    if (prc_.bitfield_.is_set('do_not_trim_content')) {
                        return '' + content;
                    } // if
                    var s_ct = window.raudrohi.adapter.trim(content);
                    prc_.content_ = s_ct;
                    if ((self_public_.is_hidden() === false) &&
                        (prc_.is_readonly_ === false)) {
                        window.raudrohi.widgetless_ui.func.set_formfield_value(html_id_tmp_,
                            prc_.content_);
                    } // if
                    return '' + s_ct;
                } catch (err) {
                    window.raudrohi.tmg('03229f64-5710-477e-b15c-b3d0e0606dd7', err);
                } // catch
            } // get_content

            // Returns a boolean.
            this.value_is_empty_after_trimming_spaces_and_linebreaks = function () {
                try {
                    var s0 = self_public_.get_content();
                    var s1 = window.raudrohi.base.gsubAllLinebreaksSpacesTabs(s0);
                    if (s1 === '') {
                        return true;
                    } // if
                    return false;
                } catch (err) {
                    window.raudrohi.tmg('10f1b602-293b-4872-931c-b3d0e0606dd7', err);
                } // catch
            } // value_is_empty_after_trimming_spaces_and_linebreaks

            // Returns window.raudrohi.core.triple, where
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
                    var a_triple = window.raudrohi.base.private_code.string2float(s_content);
                    if (a_triple.a) {
                        if (a_triple.c === true) {
                            a_triple.b = window.raudrohi.lang.userinterface_text.get(100);
                        } else {
                            a_triple.b = window.raudrohi.lang.userinterface_text.get(97) +
                            ' ' + s_content;
                        } // else
                        prc_.content_set_ = false;
                    } // if
                    return a_triple;
                } catch (err) {
                    window.raudrohi.tmg('2846388f-325c-4133-bf9c-b3d0e0606dd7', err);
                } // catch
            } // get_content_as_float

            // A peculiarity of the textarea_t2 widget is that the HTML
            // id of the textfield changes,  whenever the widget is unhidden.
            this.get_textfield_html_id = function () {
                try {
                    return html_id_tmp_;
                } catch (err) {
                    window.raudrohi.tmg('4cc9fe57-2557-4f15-978c-b3d0e0606dd7', err);
                } // catch
            } // get_current_html_id


            this.set_focus = function () {
                try {
                    if (self_public_.is_hidden() || prc_.is_readonly_) {
                        return;
                    } // if
                    window.raudrohi.widgetless_ui.func.set_focus_2_formfield(html_id_tmp_);
                } catch (err) {
                    window.raudrohi.tmg('326ab9a8-b113-4390-8eec-b3d0e0606dd7', err);
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
                        window.raudrohi.base.assert_isNumber(i_delay_in_milliseconds,
                            'i_delay_in_milliseconds',
                            '4ddcc124-371b-4b91-934b-b3d0e0606dd7');
                        if (i_delay_in_milliseconds < 0) {
                            window.raudrohi.tmg('45e63f58-50b7-4101-953b-b3d0e0606dd7',
                                'i_delay_in_milliseconds==' +
                                i_delay_in_milliseconds + ' < 0');
                        } // if
                    } // if
                    var cmd = "window.raudrohi.lang.phonebooth_dev_null.phone.call('" +
                    self_public_.phone.get_phone_number() +
                    "','set_focus|||whatever|||',42);"
                    window.setTimeout(cmd, i_delay_in_milliseconds);
                } catch (err) {
                    window.raudrohi.tmg('49bda8f7-20de-4245-a35b-b3d0e0606dd7', err);
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
                        window.raudrohi.base.assert_isString(key_number_as_string,
                            'key_number_as_string',
                            '30d1ae82-525d-44fe-984b-b3d0e0606dd7');
                        window.raudrohi.base.assert_isFunction(event_handler_func,
                            'event_handler_func',
                            '3d6238a3-d818-40a3-8e3b-b3d0e0606dd7');
                    } // if
                    if (!prc_.keylisteners_unit_inited_) {
                        prc_.keylisteners_unit_ =
                        new window.raudrohi.widgets.g1.sys.keylisteners_unit(self_public_);
                        prc_.keylisteners_unit_inited_ = true;
                    } // if
                    prc_.keylisteners_unit_.add_keylistener(html_id_tmp_,
                        key_number_as_string, event_handler_func);
                } catch (err) {
                    window.raudrohi.tmg('59168264-435f-4fe2-871b-b3d0e0606dd7', err);
                } // catch
            } // set_keylistener


            prc_.customizable.optional.content_from_GUI_2_vars = function () {
                try {
                    if ((prc_.is_readonly_) || (self_public_.is_hidden())) {
                        return;
                    } // if
                    var content = window.raudrohi.widgetless_ui.func.get_formfield_value(html_id_tmp_);
                    if (prc_.bitfield_.is_set('do_not_trim_content')) {
                        prc_.content_ = content;
                        return;
                    } // if
                    var s_ct = window.raudrohi.adapter.trim(content);
                    prc_.content_ = s_ct;
                    if ((self_public_.is_hidden() === false) &&
                        (prc_.is_readonly_ === false)) {
                        window.raudrohi.widgetless_ui.func.set_formfield_value(html_id_tmp_,
                            prc_.content_);
                    } // if
                } catch (err) {
                    window.raudrohi.tmg('9399caf0-14dd-4c6b-885b-b3d0e0606dd7', err);
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
                        window.raudrohi.widgetless_ui.func.get_formfield_value(html_id_tmp_);
                    } // if
                    if (prc_.keylisteners_unit_inited_) {
                        prc_.keylisteners_unit_.detach_listeners_from_DOM_elements();
                    } // if
                    if (true_if_update_DOM) {
                        window.raudrohi.base.set_innerHTML(prc_.container_id_, '');
                    } // if
                    prc_.self_is_hidden_ = true;
                } catch (err) {
                    window.raudrohi.tmg('d1c398dd-da46-4563-915b-b3d0e0606dd7', err);
                } // catch
            } // hide

            this.get_content_2_collection_t1 = function (ht) {
                try {
                    if (raudrohi_settings_debug_JavaScript === true) {
                        window.raudrohi.base.assert_isObject(ht, 'ht',
                            '16e1694f-758c-4ae5-802a-b3d0e0606dd7');
                    } // if
                    window.raudrohi.wg_processing_t1.dbfcreate_textarea_t1(ht,
                        self_public_, true); // TODO: Think the trimming part here over.
                } catch (err) {
                    window.raudrohi.tmg('11e0bde1-8c70-48c2-af2a-b3d0e0606dd7', err);
                } // catch
            } // get_content_2_collection_t1


            this.set_content_from_collection_t1 = function (ht) {
                try {
                    if (raudrohi_settings_debug_JavaScript === true) {
                        window.raudrohi.base.assert_isObject(ht, 'ht',
                            'a837d4f1-0a7b-474e-b62a-b3d0e0606dd7');
                    } // if
                    var s_key_field_set = window.raudrohi.wg_processing_t1.s_key_field_set(
                        self_public_);
                    if (ht.get(s_key_field_set) === 'f') {
                        self_public_.set_content("");
                        return;
                    } // if
                    var s_key_field = window.raudrohi.wg_processing_t1.s_key_field(
                        self_public_);
                    var s = ht.get(s_key_field);
                    self_public_.set_content(s);
                } catch (err) {
                    window.raudrohi.tmg('b64930e0-764d-4eba-bd4a-b3d0e0606dd7', err);
                } // catch
            } // set_content_from_collection_t1

            this.phone.receive_phonecall = function (a_phonecall_instance) {
                try {
                    var data = window.raudrohi.adapter.trim(a_phonecall_instance.data);
                    var a_pair = window.raudrohi.base.bisect(data, '|||');
                    window.raudrohi.base.assert_isNotnull(a_pair, 'a_pair',
                        '857ae1dd-3a7e-4061-932a-b3d0e0606dd7');
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
                                window.raudrohi.tmg(
                                    '4314d692-0bde-48d2-8d1a-b3d0e0606dd7',
                                    'There\'s no message handler for ' + a_pair.a);
                            } // if
                    } // switch
                } catch (err) {
                    window.raudrohi.tmg('11613185-2fa2-448a-ae5a-b3d0e0606dd7', err);
                } // catch
            } // receive_phonecall

            self_public_.startup_sequence_init();

        } catch (err) {
            window.raudrohi.tmg('9198868d-085f-4543-924a-b3d0e0606dd7', err);
        } // catch
    } // window.raudrohi.widgets.g1.textarea_t2

//------------------------------------------------------------------------
