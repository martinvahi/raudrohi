//=========================================================================


// It wraps the similewidgets (http://www.simile-widgets.org/ )
// timeline widget to the raudrohi widgets framework.
window.raudrohi.widgets.g1.similewidgets_timeline_t1 = function (s_html_id) {
    try {
        var self_public_ = this;
        if (raudrohi_settings_debug_JavaScript === true) {
            window.raudrohi.base.assert_is_HTML_ID(s_html_id, 's_html_id',
                '23e4d3c3-0347-4c00-95c4-91d011f07dd7');
        } // if

        var pileofmethods_t1_ = new window.raudrohi.widgets.g1.pileofmethods_t1(
            self_public_, 'window.raudrohi.widgets.g1.similewidgets_timeline_t1_',
            s_html_id);
        var prc_ = self_public_.private_code_;
        prc_.content_set_ = false;

        var s_core_html_id_ = s_html_id + "_core";

        // The height and width are in "CSS units"
        // to allow the choice between the percentage related
        // behaviour and fixed pixel-count related behaviour.
        var s_height_style_param_ = '400px';
        var s_width_style_param_ = '80%';

        var s_cache_core_div_html_ = "\n" +
            '<div id="' + s_core_html_id_ +
            '" class="timeline-default" ' +
            'style="height: ' + s_height_style_param_ + '; ' +
            'width: ' + s_width_style_param_ +
            '; border: 1px solid #000000; "' +
            "></div>\n";
        var ob_core = new window.raudrohi.wrappers.similewidgets_t1.timeline_t1(
            s_core_html_id_);

        // Resetting any of the dimensions (width,height) is pretty
        // expensive. To save operations, the API enforces the
        // with and height to be set simultaniously, with a single call.
        //
        // s_width_style_param,s_height_style_param inSet {"<some integer>%",
        //         "<some integer"px}
        this.set_size = function (s_width_style_param, s_height_style_param) {
            try {
                if (raudrohi.settings.debug_JavaScript === true) {
                    raudrohi.base.assert_isString(
                        s_width_style_param, 's_width_style_param',
                        'aba88f38-3731-4530-82c4-91d011f07dd7');
                    raudrohi.base.assert_isString(
                        s_height_style_param, 's_height_style_param',
                        '2a2c485a-356d-42c5-b4c4-91d011f07dd7');
                    // POOLELI siia on vaja lisada
                    // window.raudrohi.base.assert_is_whole_number_with_unit bla-bla


                } // if
            } catch (err) {
                raudrohi.tmg('d063c249-55df-48b6-85c4-91d011f07dd7', err);
            } // catch
        } // set_size

        prc_.customizable.compulsory.render_editable = function () {
            try {
                window.raudrohi.base.set_innerHTML(prc_.container_id_,
                    s_cache_core_div_html_);
                ob_core.instantiate_wrapped();
                // POOLELI
                //var s_rendered = prc_.content_;
            } catch (err) {
                window.raudrohi.tmg('f91a2d4b-eec1-4ce5-92c4-91d011f07dd7', err);
            } // catch
        } // render_editable

        prc_.customizable.compulsory.render_readonly =
            prc_.customizable.compulsory.render_editable;


        prc_.customizable.optional.hide_prefixhook = function () {
            try {
                ob_core.destruct_wrapped();
            } catch (err) {
                window.raudrohi.tmg('f41a4ed4-b26c-44e5-9eb4-91d011f07dd7', err);
            } // catch
        }  //  ob_core.private_code_.customizable.optional.hide_prefixhook

        this.set_content = function (s_progfte) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    window.raudrohi.base.assert_isString(s_progfte, 's_progfte',
                        'c0be2127-3652-4c38-b1b4-91d011f07dd7');
                } // if
                // POOLELI
                //prc_.content_set_ = false;
                //prc_.content_ = s_html;
                //prc_.repaint_if_graphical_and_not_hidden();
            } catch (err) {
                window.raudrohi.tmg('1f78e678-0248-4050-85b4-91d011f07dd7', err);
            } // catch
        } // set_content

        this.get_content = function () {
            try {
                // POOLELI
                var s_out = "" + prc_.content_;
                return s_out;
            } catch (err) {
                window.raudrohi.tmg('27ce0736-522c-4799-95b4-91d011f07dd7', err);
            } // catch
        } // get_content


        self_public_.startup_sequence_init();

    } catch (err) {
        window.raudrohi.tmg('30330d35-3a4c-4ea9-9bb4-91d011f07dd7', err);
    } // catch
} // window.raudrohi.widgets.g1.similewidgets_timeline_t1

function foo() {
    sipelgatest_t1_unit_entry('d7d2601a-4a9d-4332-95b4-91d011f07dd7');
    if (cond_1() === true) {
        sipelgatest_t1_inc('19d4cbb3-0477-4a45-92b4-91d011f07dd7');
        action_1();
        sipelgatest_t1_dec('7f3d5219-19f6-40a5-a5b4-91d011f07dd7');
    } else {
        sipelgatest_t1_inc('1bb40cf3-bfbc-4545-abb4-91d011f07dd7');
        if (cond_2 === true) {
            sipelgatest_t1_inc('4e9edfc3-eeb1-4ca0-b7b4-91d011f07dd7');
            action_2();
            sipelgatest_t1_dec('95ebe487-257b-46e7-a1b4-91d011f07dd7');
        } else {
            sipelgatest_t1_inc('185042b1-791e-4470-82a4-91d011f07dd7');
            sipelgatest_t1_unit_exit('3e95dea3-a85b-4846-93a4-91d011f07dd7');
            return;
        } // else
        sipelgatest_t1_dec('82b2af3b-e504-4870-a2a4-91d011f07dd7');
    } // else
    sipelgatest_t1_unit_exit('4f863742-7652-4a4c-81a4-91d011f07dd7');
} // foo

//=========================================================================
