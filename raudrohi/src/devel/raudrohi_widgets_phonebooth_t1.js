//=========================================================================

raudrohi.widgets.g1.b_phonebooth_t1_initialization_started_at_least_once =
false;

// It's a singleton. It's main purpose is to make it possible to
// send messages from a static, generated, HTML, to compound, i.e. 
// nontrivial, widgets.
//
// The main usage case is, where the number of widgets gets
// so huge, for example, a matrix of buttons, that the computational
// expense is not coverable. In that case one may want to
// generate some temporary HTML that contains the raw
// HTML versions of the elements, for example, buttons, and
// where the on<Event>, like onClick, property has some
// code that is able to send some ID/data to some widget.
// The singleton, raudrohi.widgets.g1.phonebooth_t1,
// facilitates the creation of such on<Event> code.
//
// It's instantiated in the library constructor.
raudrohi.widgets.g1.phonebooth_t1 = function (s_html_id) {
    var self_public_ = this;
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_is_HTML_ID(s_html_id, 's_html_id',
                'bc4aa897-3299-4757-9222-31c250705dd7');
        } // if
        //-----------------------------------------------------------------
        if (raudrohi.widgets.g1.b_phonebooth_t1_initialization_started_at_least_once !==
            false) {
            raudrohi.tmg('16aa123e-c82d-4752-b122-31c250705dd7',
                'The raudrohi.widgets.g1.phonebooth_t1 is ' +
                'expected to be a singleton, but at least two ' +
                'instantiation attempts have been made.');
        } // if
        raudrohi.widgets.g1.b_phonebooth_t1_initialization_started_at_least_once =
        true;
        //-----------------------------------------------------------------
        var pileofmethods_t1_ = new raudrohi.widgets.g1.pileofmethods_t1(
            self_public_, 'raudrohi.widgets.g1.phonebooth_t1_', s_html_id);
        var prc_ = self_public_.private_code_;
        self_public_.phone = new raudrohi.lang.comm.phone(
            'raudrohi.widgets.g1.phonebooth_t1');
        prc_.self_is_graphical_widget_ = false;
        //-----------------------------------------------------------------
        var s_lc_dev_null_ = '/dev/null';
        var s_lc_data = 'data';
        //-----------------------------------------------------------------
        this.send_command =
        function (s_cmd, s_data, s_destination_phone_number) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(s_cmd, 's_cmd',
                        '76bc7e4f-7304-489c-b122-31c250705dd7');
                    raudrohi.base.assert_isString(s_data, 's_data',
                        '444b009d-4f08-49b5-8322-31c250705dd7');
                    raudrohi.base.assert_isString(
                        s_destination_phone_number,
                        's_destination_phone_number',
                        'af9b8642-1ec5-4ee4-b122-31c250705dd7');
                } // if
                var ht_data = new Hashtable();
                ht_data.put(s_lc_data, s_data);
                prc_.threadjump_send(s_destination_phone_number,
                    s_cmd, ht_data, s_lc_dev_null_);
            } catch (err) {
                raudrohi.tmg('0434c083-f1c3-4478-b522-31c250705dd7', err);
            } // catch
        } // this.send_command

        //-----------------------------------------------------------------
        // The idea is that one can use the output string
        // of this method within the onClick event handler of
        // generated HTML. The following example explanes the
        // usage context of the b_will_be_wrapped_by_singlequotes
        //
        // var b_will_be_wrapped_by_singlequotes=true;
        // var s_html="<button type='button' onClick='"+
        // raudrohi.widgets.g1.phonebooth_t1.s_get_embeddable_javascript(...,
        // b_will_be_wrapped_by_singlequotes)+"'>Hi</button>";
        //
        // var b_will_be_wrapped_by_singlequotes=false; // ===double-quotes
        // var s_html='<button type="button" onClick="'+
        // raudrohi.widgets.g1.phonebooth_t1.s_get_embeddable_javascript(...,
        // b_will_be_wrapped_by_singlequotes)+'">Hi</button>';
        //
        this.s_get_embeddable_javascript =
        function (s_cmd, s_data, s_destination_phone_number,
            b_will_be_wrapped_by_singlequotes) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(s_cmd, 's_cmd',
                        'a30f8842-9470-4414-8222-31c250705dd7');
                    raudrohi.base.assert_isString(s_data, 's_data',
                        '27ed172c-3892-420b-b222-31c250705dd7');
                    raudrohi.base.assert_isString(
                        s_destination_phone_number,
                        's_destination_phone_number',
                        'c4053802-9340-4d3d-8422-31c250705dd7');
                    raudrohi.base.assert_isBoolean(
                        b_will_be_wrapped_by_singlequotes,
                        'b_will_be_wrapped_by_singlequotes',
                        '79e19135-16dd-4d72-b522-31c250705dd7');
                } // if
                var b_s_x_uses_singlequotes = true;
                var s_cmd_s_x = raudrohi.lang.s_escape_for_eval(
                    s_cmd, b_s_x_uses_singlequotes);
                var s_data_s_x = raudrohi.lang.s_escape_for_eval(
                    s_data, b_s_x_uses_singlequotes);
                var s_dphnn_s_x = raudrohi.lang.s_escape_for_eval(
                    s_destination_phone_number, b_s_x_uses_singlequotes);
                var s_x = "raudrohi.widgets.g1.phonebooth_t1." +
                          "send_command('" + s_cmd_s_x + "','" + s_data_s_x +
                          "','" +
                          s_dphnn_s_x + "');";
                var s_out = raudrohi.lang.s_escape_for_eval(s_x,
                    b_will_be_wrapped_by_singlequotes);
                return s_out;
            } catch (err) {
                raudrohi.tmg('51e011c2-6911-49ec-a522-31c250705dd7', err);
            } // catch
        } // this.s_get_embeddable_javascript

        //-----------------------------------------------------------------
        self_public_.startup_sequence_init();
    } catch (err) {
        raudrohi.tmg('5a0fc83a-3c37-4b43-b522-31c250705dd7', err);
    } // catch
} // raudrohi.widgets.g1.phonebooth_t1

//-------------------------------------------------------------------------
