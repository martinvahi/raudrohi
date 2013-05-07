//=========================================================================

// It's instantiated in the library constructor.
raudrohi.widgets.g1.checkerboard_t1 = function (s_html_id) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isString(s_html_id, 's_html_id',
                'TO_BE_RE-PLAC-ED_W-ITH_-A_GUID______');
        } // if

        //-----------------------------------------------------------------

        var s_create_containers_s_password_fields_table_ = '';
        var b_create_containers_s_password_fields_table_cached_ = false;

        function create_containers() {
            try {
                if (prc_.containers_html_cached_ !== true) {
                    var s_lines = null;
                    prc_.containers_html_cache_ = raudrohi.lang.cg_table_t1(
                        s_lines, ar_class_names);
                    prc_.containers_html_cached_ = true;
                } // if
                var s_container = prc_.containers_html_cache_;
                raudrohi.base.set_innerHTML(prc_.container_id_, s_container);
            } catch (err) {
                raudrohi.tmg('2a346612-87a9-4fb7-9589-41c070505dd7', err);
            } // catch
        } // create_containers

        //-----------------------------------------------------------------

        //prc_.content_set_=false;

        //-----------------------------------------------------------------

        prc_.customizable.compulsory.render_editable = function () {
            try {
                create_containers();
                set_subwidgets_visibility_according_to_states();
            } catch (err) {
                raudrohi.tmg('8719b31c-d987-46ed-a589-41c070505dd7', err);
            } // catch
        } // prc_.customizable.compulsory.render_editable

        prc_.customizable.compulsory.render_readonly =
        prc_.customizable.compulsory.render_editable;

        //-----------------------------------------------------------------

        /*
         self_public_.private_code_.evh_.evh_mouse_moved= function (mi) {
         try {
         set_subwidgets_visibility_according_to_states();
         } catch (err) {
         raudrohi.tmg('932d5053-5925-43e4-9489-41c070505dd7', err);
         } // catch
         } // self_public_.private_code_.evh_.evh_mouse_moved
         */

        //-----------------------------------------------------------------

        this.ht_get_content_spec_2= function () {
            try {
                var ht_out=new Hashtable();
                return ht_out;
            } catch (err) {
                raudrohi.tmg('098ed21a-35e1-4e9e-b539-41c070505dd7', err);
            } // catch
        } // ht_get_content_spec_2

        //-----------------------------------------------------------------
        this.get_content_2_collection_t2 = function (ht) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isObject(ht, 'ht',
                        'e62e2754-89e0-41eb-b339-41c070505dd7');
                } // if
               var ht_content=self_public_.ht_get_content_spec_2();
                var s_progfte=raudrohi.lang.ht2ProgFTE(ht_content);

                var s_sb_set = raudrohi.wg_processing_t1.s_key_field_set(
                    self_public_);
                var s_dbf_key = raudrohi.wg_processing_t1.s_key_field(
                    self_public_);
                var x = self_public_.get_content();
                if (x.b_retain_old_password === true) {
                    ht.put(s_dbf_key, ' ');
                    ht.put(s_sb_set, 'f');
                    return;
                } // if
                if (x.b_password_not_available === true) {
                    raudrohi.tmg('ed54171a-a713-4b9a-9539-41c070505dd7',
                        'self_public_.get_content().b_retain_old_password===false and ' +
                        'self_public_.get_content().b_password_not_available===true , but' +
                        'the self_public_.get_content_2_collection_t1(...) got called. ' +
                        'The parent widget is expected to verify that the ' +
                        'self_public_.get_content().b_password_not_available===false ' +
                        'before calling the self_public_.get_content_2_collection_t1(...)' +
                        '');
                } // if
                ht.put(s_dbf_key, x.s_password);
                ht.put(s_sb_set, 't');
            } catch (err) {
                raudrohi.tmg('18c37cbc-f0d1-413e-a239-41c070505dd7', err);
            } // catch
        } // get_content_2_collection_t1

        this.set_content_from_collection_t1 = function (ht) {
            try {
                // Passwords are never expected to be sent from the
                // server.
                self_public_.set_mode('overwrite');
                widget_partialmenu_t1_retain_or_modify_.set_content_by_s_label1(
                    'retain');
            } catch (err) {
                raudrohi.tmg('53b833a1-07ce-443a-9539-41c070505dd7', err);
            } // catch
        } // set_content_from_collection_t1

        //-----------------------------------------------------------------

        self_public_.startup_sequence_init();
    } catch (err) {
        raudrohi.tmg('f043c329-6019-41df-8439-41c070505dd7', err);
    } // catch
} // raudrohi.widgets.g1.checkerboard_t1

//-------------------------------------------------------------------------
