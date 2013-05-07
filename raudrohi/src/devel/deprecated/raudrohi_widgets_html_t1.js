//=========================================================================

// The use of this widget is discouraged because it can be
// replaced with a local variable that stores the HTML.
// It's also a bit clumsy and somewhat outdated, so please
// do not take treat this code as a code example. It's here
// only for bacgwards compatibility.
raudrohi.widgets.g1.html_t1 = function (s_html_id) {
    try {
        var self_public_ = this;
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_is_HTML_ID(s_html_id, 's_html_id',
                '2ba26703-a247-470c-bd36-01a150705dd7');
        } // if
        var pileofmethods_t1_ = new raudrohi.widgets.g1.pileofmethods_t1(
            self_public_, 'raudrohi.widgets.g1.html_t1_', s_html_id);
        var prc_ = self_public_.private_code_;

        var containers_html_cache_;

        function create_containers() {
            try {
                if (!prc_.containers_html_cached_) {
                    var ht = raudrohi.widgetless_ui.func.get_alignment_style_values(prc_.alignment1_);
                    containers_html_cache_ = '<div id="' + prc_.html_id_ +
                                             '" style="vertical-align:' +
                                             ht.get('vertical-align') +
                                             ';text-align:' +
                                             ht.get('text-align') +
                                             ';"></div>';
                    raudrohi.base.pool_of_hashtables.return_used_hashtable(ht);
                    prc_.containers_html_cached_ = true;
                } // if
                raudrohi.base.set_innerHTML(prc_.container_id_,
                    containers_html_cache_);
            } catch (err) {
                raudrohi.tmg('41f8ea04-40fe-4727-9b16-01a150705dd7', err);
            } // catch
        } // create_containers

        prc_.customizable.compulsory.render_editable = function () {
            try {
                create_containers();
                raudrohi.base.set_innerHTML(prc_.html_id_, prc_.content_);
            } catch (err) {
                raudrohi.tmg('1b3fd2a3-984d-4702-8316-01a150705dd7', err);
            } // catch
        } // render_editable

        prc_.customizable.compulsory.render_readonly =
        prc_.customizable.compulsory.render_editable;

        this.set_content = function (s_html) {
            try {
                raudrohi.base.assert_isString(s_html, 's_html',
                    '4f4c5413-e3fa-475d-a836-01a150705dd7');
                prc_.content_ = s_html;
                if (self_public_.is_hidden() === false) {
                    self_public_.unhide();
                } // if
            } catch (err) {
                raudrohi.tmg('24aec8a4-e8db-44e3-a656-01a150705dd7', err);
            } // catch
        } // set_content

        this.set_content_2_p = function (paragraph_text) {
            try {
                raudrohi.base.assert_isString(paragraph_text, 'html_text',
                    '3c2a25c3-4041-438f-a126-01a150705dd7');
                prc_.content_ = '<p>' + paragraph_text + '</p>';
                if (self_public_.is_hidden() === false) {
                    self_public_.unhide();
                } // if
            } catch (err) {
                raudrohi.tmg('4fde85c1-33ca-4dc8-8c56-01a150705dd7', err);
            } // catch
        } // set_content_t1

        self_public_.startup_sequence_init();

        this.phone.receive_phonecall = function (a_phonecall_instance) {
            try {
                var data = raudrohi.adapter.trim(a_phonecall_instance.data);
                var a_pair = raudrohi.base.bisect(data, '|||');
                raudrohi.base.assert_isNotnull(a_pair, 'a_pair',
                    'e3342e2f-1545-41f6-a716-01a150705dd7');
                if (pileofmethods_t1_.standard_phonecall_received_t1(a_pair,
                    a_phonecall_instance)) {
                    return;
                } // if
                var a_pr3;
                switch (a_pair.a) {
                    case 'set_content':
                        a_pr3 = raudrohi.base.bisect(a_pair.b, '|||');
                        self_public_.set_content(a_pr3.a);
                        break;
                    default:
                        if (raudrohi_settings_debug_JavaScript === true) {
                            raudrohi.tmg(
                                '6f364d8a-1154-4819-9f66-01a150705dd7',
                                'There\'s no message handler for ' + a_pair.a);
                        } // if
                } // switch
            } catch (err) {
                raudrohi.widgets.g1.sys.phonecall_receiver_tmg(
                    '23751e61-5b0d-446f-9d16-01a150705dd7', err,
                    a_phonecall_instance);
            } // catch
        } // receive_phonecall
    } catch (err) {
        raudrohi.tmg('16fa9a1d-80bf-44fd-8336-01a150705dd7', err);
    } // catch
} // raudrohi.widgets.g1.html_t1

//=========================================================================
