//=========================================================================

// Compartments are addressed like pixels at a computer screen.
// Address of the leftmost and topmost compartment is (0,0).
window.raudrohi.widgets.g1.matrix_t1 =
function (s_html_id, initial_width, initial_height) {
    try {
        var self_public_ = this;

        var pileofmethods_t1_ = new window.raudrohi.widgets.g1.pileofmethods_t1(
            self_public_, 'window.raudrohi.widgets.g1.matrix_t1_', s_html_id);
        var prc_ = self_public_.private_code_;
        if (raudrohi_settings_debug_JavaScript === true) {
            window.raudrohi.base.assert_is_HTML_ID(s_html_id, 's_html_id',
                'a8cad14e-bd44-4d19-b16d-f02350705dd7');
            window.raudrohi.base.assert_isNumber(initial_width, 'initial_width',
                '10493614-71a3-4308-a26d-f02350705dd7');
            window.raudrohi.base.assert_isNumber(initial_height, 'initial_height',
                '48338441-aa85-404c-a26d-f02350705dd7');
            if (initial_width < 1) {
                window.raudrohi.tmg('55c28639-8ea7-44c5-a26d-f02350705dd7',
                    'initial_width==' + initial_width + ' < 1');
            } // if
            if (initial_height < 1) {
                window.raudrohi.tmg('af380030-d81c-4293-a26d-f02350705dd7',
                    'initial_height==' + initial_height + ' < 1');
            } // if
        } // if

        var width_ = initial_width;
        this.get_width = function () {
            return width_;
        } // get_width

        var height_ = initial_height;
        this.get_height = function () {
            return height_;
        } // get_height

        prc_.content_set_ = false;

        // Returns a compartment ID regardless of whether the
        // compartment with coordinates (x,y) actually even exist.
        this.get_compartment_id = function (x, y) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    window.raudrohi.base.assert_isNumber(x, 'x',
                        '8293954c-c03b-4cea-926d-f02350705dd7');
                    window.raudrohi.base.assert_isNumber(y, 'y',
                        'a9b3bc3b-aff6-4857-946d-f02350705dd7');
                } // if
                var s_id = '_x' + x + '_y' + y + '_' +
                           self_public_.phone.get_phone_number();
                return s_id;
            } catch (err) {
                window.raudrohi.tmg('4e2b2152-fa07-4449-a36d-f02350705dd7', err);
            } // catch
        } // get_compartment_id

        function create_containers_row(row_width, y) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    window.raudrohi.base.assert_isNumber(y, 'y',
                        '93a68e9d-98a8-487e-b26d-f02350705dd7');
                    window.raudrohi.base.assert_isNumber(row_width, 'row_width',
                        '44af76b8-0895-4b98-a25d-f02350705dd7');
                } // if
                var s_html = "\n<tr>\n";
                var i = 0;
                for (i = 0; i < row_width; i++) {
                    s_html = s_html +
                             '<td class="raudrohi_visible_table_cells"><div id="' +
                             self_public_.get_compartment_id(i, y) +
                             "\"></div></td>\n";
                } // for
                s_html = s_html + "</tr>\n"
                return s_html;
            } catch (err) {
                window.raudrohi.tmg('23c75959-f4b3-41bc-b45d-f02350705dd7', err);
            } // catch
        } // create_containers_row

        function create_containers_generate_html() {
            try {
                var s_html = '' +
                             "\n<center>\n" +
                             '<table class="raudrohi_visible_table ' +
                             'angervaks_menu_item_font_shape"> ' +
                             '<tbody>';
                var y = 0;
                for (y = 0; y < height_; y++) {
                    s_html = s_html + create_containers_row(width_, y);
                } // for
                s_html = s_html +
                         '</tbody></table>' +
                         "\n</center>\n";
                return s_html;
            } catch (err) {
                window.raudrohi.tmg('38112301-eee7-4b52-8d5d-f02350705dd7', err);
            } // catch
        } // create_containers_generate_html

        function create_containers() {
            try {
                while (prc_.containers_html_cached_ !== true) {
                    // It's a "while" in stead of "if" because
                    // the set_dimensions() might be called while
                    // the  create_containers_generate_html is executing.
                    prc_.containers_html_cache_ =
                    create_containers_generate_html();
                    prc_.containers_html_cached_ = true;
                } // while
                window.raudrohi.base.set_innerHTML(prc_.container_id_,
                    prc_.containers_html_cache_);
                window.raudrohi.adapter.log('kala matrix');
            } catch (err) {
                window.raudrohi.tmg('ad75021e-ee71-4eaf-b25d-f02350705dd7', err);
            } // catch
        } // create_containers

        prc_.customizable.compulsory.render_editable = function () {
            try {
                create_containers();
            } catch (err) {
                window.raudrohi.tmg('f5d40635-7aca-4aa4-a25d-f02350705dd7', err);
            } // catch
        } // render_editable

        prc_.customizable.compulsory.render_readonly =
        prc_.customizable.compulsory.render_editable;

        var ht_in_use_check_ = new Hashtable();

        // Compartment widgets are registered as subwidgets.
        // They all must have a method "reset_container_id".
        this.set_compartment_widget = function (a_widget, x, y) {
            try {
                var s;
                if (raudrohi_settings_debug_JavaScript === true) {
                    window.raudrohi.base.assert_isNumber(x, 'x',
                        '3168bac5-6d87-4758-855d-f02350705dd7');
                    window.raudrohi.base.assert_isNumber(y, 'y',
                        '5f5b36a1-703c-4b37-b25d-f02350705dd7');
                    window.raudrohi.base.assert_isObject(a_widget, 'a_widget',
                        '89739a45-1e17-4b58-a25d-f02350705dd7');
                    if (x < 0) {
                        window.raudrohi.tmg('f1e6861d-a545-401c-a35d-f02350705dd7',
                            'x==' + x + ' < 0');
                    } // if
                    if (y < 0) {
                        window.raudrohi.tmg('ba79dc19-f560-4225-b45d-f02350705dd7',
                            'y==' + y + ' < 0');
                    } // if
                    if ((width_ - 1) < x) {
                        window.raudrohi.tmg('a965bc30-ec2c-4494-835d-f02350705dd7',
                            '(width_-1) < x');
                    } // if
                    if ((height_ - 1) < y) {
                        window.raudrohi.tmg('34a20623-b090-4696-814d-f02350705dd7',
                            '(height_-1) < y');
                    } // if
                    s = 'coords_' + x + '_' + y + '_';
                    if (ht_in_use_check_.containsKey(s) === true) {
                        window.raudrohi.tmg('1685dfd2-cdc3-4975-b14d-f02350705dd7',
                            'Coordinate (x==' + x + ',y==' + y +
                            ') is assinged ' +
                            'to more than one compartment widget.');
                    } // if
                    ht_in_use_check_.put(s, 42);
                } // if
                var new_html_id = self_public_.get_compartment_id(x, y);
                a_widget.reset_container_id(new_html_id);
                prc_.register_subwidget(a_widget, 'visible');
                prc_.content_set_ = true;
                if (self_public_.is_hidden() === false) {
                    self_public_.unhide();
                } // if
            } catch (err) {
                window.raudrohi.tmg('38d60321-7935-4596-a24d-f02350705dd7', err);
            } // catch
        } // set_compartment_widget

        this.clear_content = function () {
            try {
                if (prc_.content_set_ === false) {
                    return;
                } // if
                if (raudrohi_settings_debug_JavaScript === true) {
                    ht_in_use_check_.clear();
                } // if
                prc_.unregister_all_subwidgets();
                prc_.content_set_ = false;
                if (self_public_.is_hidden() === false) {
                    self_public_.unhide();
                } // if
            } catch (err) {
                window.raudrohi.tmg('80847041-6d6f-4089-834d-f02350705dd7', err);
            } // catch
        } // clear_content

        // Resetting dimensions also unregisters all widgets.
        this.reset_dimensions = function (width, height) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    window.raudrohi.base.assert_isNumber(width, 'width',
                        '5415eb53-6453-4362-944d-f02350705dd7');
                    window.raudrohi.base.assert_isNumber(height, 'height',
                        'e9729333-192f-4eef-a54d-f02350705dd7');
                    if (width < 1) {
                        window.raudrohi.tmg('6c032855-a836-4320-b44d-f02350705dd7',
                            'width==' + width + ' < 1');
                    } // if
                    if (height < 1) {
                        window.raudrohi.tmg('cd2a5812-7d86-4143-924d-f02350705dd7',
                            'height==' + height + ' < 1');
                    } // if
                } // if
                self_public_.clear_content();
                width_ = width;
                height_ = height;
                prc_.containers_html_cached_ = false;
                if (self_public_.is_hidden() === false) {
                    self_public_.unhide();
                } // if
            } catch (err) {
                window.raudrohi.tmg('c4532a59-ab50-483b-a24d-f02350705dd7', err);
            } // catch
        } // reset_dimensions

        self_public_.startup_sequence_init();
    } catch (err) {
        window.raudrohi.tmg('d0a9d712-e958-41da-b34d-f02350705dd7', err);
    } // catch
} // window.raudrohi.widgets.g1.matrix_t1

//------------------------------------------------------------------------
