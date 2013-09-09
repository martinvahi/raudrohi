//=========================================================================

// The window.raudrohi.widgets.g1.router2hostserver is a singleton and its
// phone number is "router2hostserver". The
// window.raudrohi.widgets.g1.router2hostserver exists only for making the hosting
// server available as if it were just one of the widgets. It forms a
// facade. http://en.wikipedia.org/wiki/Facade_pattern
window.raudrohi.widgets.g1.router2hostserver = function (s_html_id) {
    try {
        if (window.raudrohi_settings.debug_JavaScript === true) {
            window.raudrohi.base.assert_is_HTML_ID(s_html_id, 's_html_id',
                '84db4451-7f52-4adf-9112-f02280207dd7');
        } // if
        if (window.raudrohi.widgets.g1.router2hostserver.ok_2_call_constructor ===
            false) {
            window.raudrohi.tmg('b750f923-cbbd-4303-8512-f02280207dd7',
                'One should use the static method to get an ' +
                    'instance. This class is a singleton.');
        } // if
        // The current version of the window.raudrohi.widgets.g1.router2hostserver
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
        var pileofmethods_t1_ = new window.raudrohi.widgets.g1.pileofmethods_t1(
            self_public_, '', html_id_);
        var prc_ = self_public_.private_code_;
        self_public_.phone = new window.raudrohi.lang.comm.phone("router2hostserver");

        // The phonecall_processing_command_ is part of the
        // backwards compatibility implementation.
        var phonecall_processing_command_ = "router2hostserver_receive_from_server";

        var ricochet_detector_funcname_ = 'threadjumper_ricochet_detector';


        this.thrjr_.router2hostserver_receive_from_server =
            function (ht_wrapper) {
                try {
                    if (raudrohi_settings_debug_JavaScript) {
                        window.raudrohi.base.assert_isObject(ht_wrapper, "ht_wrapper",
                            '4fe0024c-5f71-4974-9412-f02280207dd7');
                        window.raudrohi.base.assert_isObject(ht_wrapper.get('data'),
                            "ht_wrapper.get('data')",
                            'f3fa02a8-9d5e-45ca-a312-f02280207dd7');
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
                    window.raudrohi.tmg('95d2a2f3-318a-403a-a212-f02280207dd7', err);
                } // catch
            } // thrjr_.router2hostserver_receive_from_server

        prc_.send2server = function (ht_wrapper) { // was formely this.send2server
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    window.raudrohi.base.assert_isObject(ht_wrapper.get('data'),
                        "ht_wrapper.get('data')",
                        '6986e928-d560-4a38-a312-f02280207dd7');
                } // if
                var s_progfte = null;
                try {
                    var ht_data = ht_wrapper.get('data');
                    s_progfte = window.raudrohi.lang.ht2ProgFTE(ht_data);
                    ht_wrapper.put('data', s_progfte);
                } catch (err) {
                    window.raudrohi.tmg('1cd77e5a-245b-4228-9412-f02280207dd7', err);
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
                s_progfte = window.raudrohi.lang.ht2ProgFTE(ht_wrapper);
                window.raudrohi.apparch1.send2server(destination_command,
                    self_public_.phone.get_phone_number(), s_progfte);
                window.raudrohi.base.pool_of_hashtables.return_used_hashtable(
                    ht_wrapper);
            } catch (err) {
                window.raudrohi.tmg('109e9a02-5729-4b37-9e12-f02280207dd7', err);
            } // catch
        } // prc_.send2server


        this.phone.receive_phonecall = function (a_phonecall_instance) {
            try {
                var data = window.raudrohi.adapter.trim(a_phonecall_instance.data);
                var a_pr1 = window.raudrohi.base.bisect(data, '|||');
                window.raudrohi.base.assert_isNotnull(a_pr1, 'a_pair',
                    'de756953-e70f-4762-a212-f02280207dd7');
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
                        window.raudrohi.tmg(
                            '2996c441-c0bd-4e3d-b312-f02280207dd7', msg);
                    } else {
                        window.raudrohi.adapter.log(msg);
                        return;
                    } // else
                } // if
                // One  can not use the prc_.threadjump_receive, because
                // one needs to access the ht_wrapper.
                prc_.send2server(ht_wrapper);
            } catch (err) {
                window.raudrohi.widgets.g1.sys.phonecall_receiver_tmg(
                    '8a507226-604a-4c92-b512-f02280207dd7', err,
                    a_phonecall_instance);
            } // catch
        } // receive_phonecall

        self_public_.startup_sequence_init();
    } catch (err) {
        window.raudrohi.tmg('1cd60321-7e9e-4316-9302-f02280207dd7', err);
    } // catch
} // window.raudrohi.widgets.g1.router2hostserver

window.raudrohi.widgets.g1.router2hostserver.ok_2_call_constructor = false;
window.raudrohi.widgets.g1.router2hostserver.instanteated = false;
window.raudrohi.widgets.g1.router2hostserver.get_instance = function () {
    try {
        if (!window.raudrohi.widgets.g1.router2hostserver.instanteated) {
            window.raudrohi.widgets.g1.router2hostserver.ok_2_call_constructor = true;
            window.raudrohi.widgets.g1.router2hostserver =
                new window.raudrohi.widgets.g1.router2hostserver();
            window.raudrohi.widgets.g1.router2hostserver.ok_2_call_constructor = false;
            window.raudrohi.widgets.g1.router2hostserver.instanteated = true;
        } // if
        return window.raudrohi.widgets.g1.router2hostserver;
    } catch (err) {
        window.raudrohi.tmg('19ed5437-143a-4ee7-a402-f02280207dd7', err);
    } // catch
} //window.raudrohi.widgets.g1.router2hostserver.instanteate


//------------------------------------------------------------------------
