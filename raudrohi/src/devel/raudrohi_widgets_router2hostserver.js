//=========================================================================

// The raudrohi.widgets.g1.router2hostserver is a singleton and its
// phone number is "router2hostserver". The
// raudrohi.widgets.g1.router2hostserver exists only for making the hosting
// server available as if it were just one of the widgets. It forms a
// facade. http://en.wikipedia.org/wiki/Facade_pattern
raudrohi.widgets.g1.router2hostserver = function (s_html_id) {
    try {
        if (raudrohi.settings.debug_JavaScript === true) {
            raudrohi.base.assert_is_HTML_ID(s_html_id, 's_html_id',
                '20d43464-608d-4de4-b546-72b250705dd7');
        } // if
        if (raudrohi.widgets.g1.router2hostserver.ok_2_call_constructor ===
            false) {
            raudrohi.tmg('23f5f5e4-ad04-4116-9216-72b250705dd7',
                'One should use the static method to get an ' +
                'instance. This class is a singleton.');
        } // if
        // The current version of the raudrohi.widgets.g1.router2hostserver
        // and the threadjump_send/threadjump_receive functions are
        // quite "terrible" due to the underlying phoning system and
        // the server-client "formscript" format.
        //
        // TODO: Refactor this class heavily after the phoning system
        // and formscript format has been refactored. Even the threadjumping
        // communication can be refactored to use the "standard"
        // threadjump redirect functions, BUT, the current implementation
        // is correct and works. So, the threadjumpint API juse in here
        // is the case of "don't fix, what isn't broken".
        //
        // Currently this class allows a newer API to be used with the
        // old, terrible, phoning system and formscript format.
        var self_public_ = this;
        var instance_public_ = self_public_;
        var html_id_ = "server_singleton";
        var pileofmethods_t1_ = new raudrohi.widgets.g1.pileofmethods_t1(
            self_public_, '', html_id_);
        var prc_ = self_public_.private_code_;
        self_public_.phone = new raudrohi.lang.comm.phone("router2hostserver");

        // The phonecall_processing_command_ is part of the
        // backwards compatibility implementation.
        var phonecall_processing_command_ = "router2hostserver_receive_from_server";

        var ricochet_detector_funcname_ = 'threadjumper_ricochet_detector';


        this.thrjr_.router2hostserver_receive_from_server =
        function (ht_wrapper) {
            try {
                if (raudrohi_settings_debug_JavaScript) {
                    raudrohi.base.assert_isObject(ht_wrapper, "ht_wrapper",
                        '51e025b4-3dad-4da5-a556-72b250705dd7');
                    raudrohi.base.assert_isObject(ht_wrapper.get('data'),
                        "ht_wrapper.get('data')",
                        '80910ea9-0873-45d6-a496-72b250705dd7');
                } // if
                var return_command = ht_wrapper.get(
                    'router2hostserver_return_command');
                ht_wrapper.put('destination_command', return_command);
                ht_wrapper.put('return_command', ricochet_detector_funcname_);

                var return_phonenumber = ht_wrapper.get(
                    'router2hostserver_return_phonenumber');
                ht_wrapper.put('destination_phonenumber', return_phonenumber);
                ht_wrapper.put('return_phonenumber',
                    self_public_.phone.get_phone_number());
                self_public_.phone.call(return_phonenumber,
                    return_command + '|||', ht_wrapper);
            } catch (err) {
                raudrohi.tmg('610b864a-ffeb-45c5-9c16-72b250705dd7', err);
            } // catch
        } // thrjr_.router2hostserver_receive_from_server

        prc_.send2server = function (ht_wrapper) { // was formely this.send2server
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isObject(ht_wrapper.get('data'),
                        "ht_wrapper.get('data')",
                        '57668f71-576b-4f21-bc46-72b250705dd7');
                } // if
                var s_progfte = null;
                try {
                    var ht_data = ht_wrapper.get('data');
                    s_progfte = raudrohi.lang.ht2ProgFTE(ht_data);
                    ht_wrapper.put('data', s_progfte);
                } catch (err) {
                    raudrohi.tmg('38aa6563-91be-42ad-be16-72b250705dd7', err);
                } // catch
                var return_command = ht_wrapper.get('return_command');
                ht_wrapper.put('router2hostserver_return_command',
                    return_command);
                ht_wrapper.put('return_command', phonecall_processing_command_);
                var return_phonenumber = ht_wrapper.get('return_phonenumber');
                ht_wrapper.put('router2hostserver_return_phonenumber',
                    return_phonenumber);
                ht_wrapper.put('return_phonenumber',
                    self_public_.phone.get_phone_number());
                var destination_command = ht_wrapper.get('destination_command');
                s_progfte = raudrohi.lang.ht2ProgFTE(ht_wrapper);
                raudrohi.apparch1.send2server(destination_command,
                    self_public_.phone.get_phone_number(), s_progfte);
                raudrohi.base.pool_of_hashtables.return_used_hashtable(
                    ht_wrapper);
            } catch (err) {
                raudrohi.tmg('c0e732c3-fcc2-4042-aa36-72b250705dd7', err);
            } // catch
        } // prc_.send2server


        this.phone.receive_phonecall = function (a_phonecall_instance) {
            try {
                var data = raudrohi.adapter.trim(a_phonecall_instance.data);
                var a_pr1 = raudrohi.base.bisect(data, '|||');
                raudrohi.base.assert_isNotnull(a_pr1, 'a_pair',
                    '39691372-b430-45c6-9646-72b250705dd7');
                if (pileofmethods_t1_.standard_phonecall_received_t1(a_pr1,
                    a_phonecall_instance)) {
                    return;
                } // if
                var a_pr2;
                var ht_wrapper;
                if (a_pr1.a === phonecall_processing_command_) {
                    a_pr2 =
                    instance_public_.only_for_raudrohi_core_developers.microsession_receive_txt_t2(a_pr1.b);
                    if (a_pr2.a) {
                        return;
                    } // if
                    ht_wrapper = a_pr2.b;
                    self_public_.thrjr_.router2hostserver_receive_from_server(
                        ht_wrapper);
                    return;
                } // if
                ht_wrapper = a_phonecall_instance.data2;
                if (ht_wrapper == null) {
                    var msg = "ht_wrapper===null \na_phonecall_instance.data==" +
                              a_phonecall_instance.data;
                    if (raudrohi_settings_debug_JavaScript === true) {
                        raudrohi.tmg(
                            '93295a4d-c66a-4174-b455-72b250705dd7', msg);
                    } else {
                        raudrohi.adapter.log(msg);
                        return;
                    } // else
                } // if
                // One  can not use the prc_.threadjump_receive, because
                // one needs to access the ht_wrapper.
                prc_.send2server(ht_wrapper);
            } catch (err) {
                raudrohi.widgets.g1.sys.phonecall_receiver_tmg(
                    '8a714788-e877-43c7-b325-72b250705dd7', err,
                    a_phonecall_instance);
            } // catch
        } // receive_phonecall

        self_public_.startup_sequence_init();
    } catch (err) {
        raudrohi.tmg('d94a4f08-2c3a-4921-a995-72b250705dd7', err);
    } // catch
} // raudrohi.widgets.g1.router2hostserver

raudrohi.widgets.g1.router2hostserver.ok_2_call_constructor = false;
raudrohi.widgets.g1.router2hostserver.instanteated = false;
raudrohi.widgets.g1.router2hostserver.get_instance = function () {
    try {
        if (!raudrohi.widgets.g1.router2hostserver.instanteated) {
            raudrohi.widgets.g1.router2hostserver.ok_2_call_constructor = true;
            raudrohi.widgets.g1.router2hostserver =
            new raudrohi.widgets.g1.router2hostserver();
            raudrohi.widgets.g1.router2hostserver.ok_2_call_constructor = false;
            raudrohi.widgets.g1.router2hostserver.instanteated = true;
        } // if
        return raudrohi.widgets.g1.router2hostserver;
    } catch (err) {
        raudrohi.tmg('520f6001-4a75-4b3d-ab55-72b250705dd7', err);
    } // catch
} //raudrohi.widgets.g1.router2hostserver.instanteate


//------------------------------------------------------------------------
