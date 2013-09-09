//=========================================================================

// It wraps a "raw" HTML string, the content, to the widgets framework.
window.raudrohi.widgets.g1.html_t2 = function (s_html_id, parent_instance) {
    try {
        var self_public_ = this;
        if (raudrohi_settings_debug_JavaScript === true) {
            window.raudrohi.base.assert_is_HTML_ID(s_html_id, 's_html_id',
                '206b39e2-270a-4b2f-86ae-a32350705dd7');
            window.raudrohi.base.assert_is_g1_widget(parent_instance,
                'parent_instance',
                'df3f203c-81ed-4414-8494-a32350705dd7');
        } // if

        var pileofmethods_t1_ = new window.raudrohi.widgets.g1.pileofmethods_t1(
            self_public_, 'window.raudrohi.widgets.g1.html_t2_', s_html_id);
        var prc_ = self_public_.private_code_;
        prc_.parent_instance_ = parent_instance

        prc_.content_ = "";
        prc_.content_set_ = true;

        prc_.customizable.compulsory.render_editable = function () {
            try {
                // This widget is so simplistic that it doens't even
                // have any "create_containers" methods.
                //var s_rendered=prc_.selfread.wrap_2_alignment_div(
                //	prc_.content_);
                var s_rendered = prc_.content_;
                window.raudrohi.base.set_innerHTML(prc_.container_id_, s_rendered);
            } catch (err) {
                window.raudrohi.tmg('9f2b337c-30cf-4358-8977-a32350705dd7', err);
            } // catch
        } // render_editable

        prc_.customizable.compulsory.render_readonly =
        prc_.customizable.compulsory.render_editable;

        this.set_content = function (s_html) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    window.raudrohi.base.assert_isString(s_html, 's_html',
                        '8e5f67cb-2bec-4cf0-8413-a32350705dd7');
                } // if
                prc_.content_ = s_html;
                prc_.repaint_if_graphical_and_not_hidden();
            } catch (err) {
                window.raudrohi.tmg('42baf328-2e15-4512-a7d4-a32350705dd7', err);
            } // catch
        } // set_content

        this.get_content = function () {
            try {
                var s_out = "" + prc_.content_;
                return s_out;
            } catch (err) {
                window.raudrohi.tmg('182d24eb-5aaa-4b14-a67e-a32350705dd7', err);
            } // catch
        } // get_content


        self_public_.startup_sequence_init();

    } catch (err) {
        window.raudrohi.tmg('43066f42-ccef-424a-a662-a32350705dd7', err);
    } // catch
} // window.raudrohi.widgets.g1.html_t2

//=========================================================================
