//=========================================================================

// This function is meant to be called after the whole raudrohi library
// and its dependencies have been downloaded and the raudrohi adapter
// has been initialized. It initializes the raudrohi library's internal
// data structures. It's called from the raudrohi_adapter_v19.js
window.raudrohi.internal_constructor = function () {
    try {
        window.raudrohi.cache.init();
        window.raudrohi.widgets.g1.phonebooth_t1 = new window.raudrohi.widgets.g1.phonebooth_t1(
            'window.raudrohi.widgets.g1.phonebooth_t1');
        window.raudrohi.widgets.g1.button_t1_pool = new window.raudrohi.base.pool(
            new window.raudrohi.widgets.g1.button_t1_factory(),
            new window.raudrohi.widgets.g1.button_t1_resetter());

        //window.raudrohi.evh_set_onResize= {};

        // Currently it's executed prior to the application_main_function,
        // this method but needs to be improved, because
        // one needs the setup data from the server before some of the
        // structures can be initialized.

        //window.raudrohi.widgets.g1.router2hostserver.get_instance();
        //window.raudrohi.widgets.g1.idcache.get_instance();
        //window.raudrohi.widgets.g1.uploadenforcer_t1=new window.raudrohi.widgets.g1.uploadenforcer_t1();


        var ht_evhs = window.raudrohi.ht_window_dot_onresize_event_handlers;

        if (typeof(window.onresize) !== "undefined") {
            if (window.onresize !== null) {
                var s_typename = window.raudrohi.base.s_get_typename(
                    window.onresize);
                if (s_typename !== raudrohi_typename_Function) {
                    raudrohi.tmg('5ab99443-e3bc-4cc4-ac9e-41a1c0b16dd7',
                        's_typename == ' + s_typename +
                            " !== " + raudrohi_typename_Function);
                } // if
                ht_evhs.put('raudrohi_libinit_window_onresize_orig', window.onresize);
            } // if
        } // if

        window.onresize = function () {
            try {
                var ht_evhs = window.raudrohi.ht_window_dot_onresize_event_handlers;
                var ar_keys = ht_evhs.keys();
                var i_len = ar_keys.length;
                var s_key;
                var x_value;
                for (var i = 0; i < i_len; i++) {
                    s_key = ar_keys[i];
                    x_value = ht_evhs.get(s_key);
                    if (raudrohi_settings_debug_JavaScript === true) {
                        raudrohi.base.assert_isFunction(x_value, 'x_value,' +
                            'e63cc92f-7c36-4101-839e-41a1c0b16dd7');
                    } // if
                    x_value();
                } // for
            } catch (err) {
                window.raudrohi.tmg('51312d14-6eb9-4dc0-862e-41a1c0b16dd7', err);
            } // catch
        } // window.onresize


    } catch (err) {
        window.raudrohi.tmg('d1c25b4d-a270-4149-a32e-41a1c0b16dd7', err);
    } // catch
} // internal_constructor


// If make_no_assumptions_about_setup_availability==true, the library
// gets initiated with default setup values. Otherwise it is assumed
// that the server provides setup info.
window.raudrohi.run = function (make_no_assumptions_about_setup_availability, application_main_function) {
    try {
        window.raudrohi.application_main_function = application_main_function;
        window.raudrohi.initiate_adapter(make_no_assumptions_about_setup_availability);
    } catch (err) {
        window.raudrohi.tmg('237c0a31-5cb5-40a3-812e-41a1c0b16dd7', err);
    } // catch
} // window.raudrohi.run
