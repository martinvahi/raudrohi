//=========================================================================

// It's the topmost widget for widgets that 
// need a parent widget.
window.raudrohi.widgets.g1.containergrid_1x1_t1 = function (s_html_id) {
    try {
        var self_public_ = this;
        if (raudrohi_settings_debug_JavaScript === true) {
            window.raudrohi.base.assert_is_HTML_ID(s_html_id, 's_html_id',
                '5f96efb2-5a00-40e7-b240-713350705dd7');
        } // if

        var pileofmethods_t1_ = new window.raudrohi.widgets.g1.pileofmethods_t1(
            self_public_, 'window.raudrohi.widgets.g1.containergrid_1x1_t1_',
            s_html_id);
        var prc_ = self_public_.private_code_;
        prc_.content_ = null;
        prc_.content_set_ = false;

        prc_.customizable.compulsory.render_editable = function () {
            try {
                if (prc_.content_set_ !== true) {
                    window.raudrohi.base.set_innerHTML(prc_.container_id_, '');
                    window.raudrohi.tmg('139db2ac-36df-421e-8390-713350705dd7',
                        "\nThe class of this widget requires that " +
                        'its method set_content(...) is ' +
                        "called prior to unhiding this widget.\n");
                } // if
                var ob_widget = prc_.content_;
                var s_content_div_html_id = ob_widget.private_code_.container_id_;
                window.raudrohi.base.set_innerHTML(prc_.container_id_,
                    '<div id="' + s_content_div_html_id + '"></div>');
                prc_.mark_elemwidget_to_be_unhidden(ob_widget);
            } catch (err) {
                window.raudrohi.tmg('44a6eae3-9e0f-45d9-bf20-713350705dd7', err);
            } // catch
        } // render_editable

        prc_.customizable.compulsory.render_readonly =
        prc_.customizable.compulsory.render_editable;

        this.set_content = function (ob_widget) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    window.raudrohi.base.assert_is_g1_widget(ob_widget, 'ob_widget',
                        '5c421663-b037-41de-b630-713350705dd7');
                } // if
                prc_.unregister_all_subwidgets();
                prc_.content_set_ = false;
                prc_.content_ = ob_widget;
                prc_.register_subwidget(ob_widget, 'visible');
                prc_.content_set_ = true;
                prc_.repaint_if_graphical_and_not_hidden();
            } catch (err) {
                window.raudrohi.tmg('23900ff2-4c63-4f81-b950-713350705dd7', err);
            } // catch
        } // set_content

        this.get_content = function () {
            try {
                var x_out = prc_.content_;
                return x_out;
            } catch (err) {
                window.raudrohi.tmg('217764e9-e0e6-4f22-a810-713350705dd7', err);
            } // catch
        } // get_content

        self_public_.startup_sequence_init();

    } catch (err) {
        window.raudrohi.tmg('d426088c-11fe-4fc3-ab50-713350705dd7', err);
    } // catch
} // window.raudrohi.widgets.g1.containergrid_1x1_t1

//=========================================================================
