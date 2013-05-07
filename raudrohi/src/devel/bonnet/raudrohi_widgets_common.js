//=========================================================================

if (window.raudrohi_widgets_exists !== true) {
    window.raudrohi.widgets = {};
    window.raudrohi_widgets_exists = true;
} // if
if (window.raudrohi_widgets_g1_exists !== true) {
    window.raudrohi.widgets.g1 = {};
    window.raudrohi_widgets_g1_exists = true;
} // if
if (window.raudrohi_widgets_g1_theme_exists !== true) {
    // The window.raudrohi.widgets.g1.theme
    // is for various style parameters and alike.
    window.raudrohi.widgets.g1.theme = {};
    window.raudrohi_widgets_g1_theme_exists = true;
} // if

if (window.raudrohi_widgets_g1_sys_exists !== true) {
    window.raudrohi.widgets.g1.sys = {}; // a namespace for non-client code
    window.raudrohi_widgets_g1_sys_exists = true;
} // if

//-------------------------------------------------------------------------

window.raudrohi.widgets.g1.theme.s_color_alert = '#A30808';
window.raudrohi.widgets.g1.theme.s_color_no = '#F75D16';
window.raudrohi.widgets.g1.theme.s_color_yes = '#24990C';

//-------------------------------------------------------------------------

// The true_if_update_DOM does not have any effect, if the
// true_if_unhide==true. The hashtable_of_widget_states is
// expected to contain instances of raudrohi.base.widget_state_bitfield.
// Widget phone numbers are expected to be the keys of the hashtable.
//
// The current system is such that the one can not call multiple
// "unhide" or "hide" calls without interlacing them.
raudrohi.widgets.g1.sys.hide_or_unhide_t2 =
function (ar_widgets, b_true_if_unhide, b_true_if_update_DOM,
    ht_widget_states) {
    if (raudrohi_settings_debug_JavaScript === true) {
        raudrohi.base.assert_isArray(ar_widgets, 'ar_widgets',
            '16580251-df25-4347-a916-63e2e0505dd7');
        raudrohi.base.assert_isBoolean(b_true_if_unhide, 'b_true_if_unhide',
            '938cf2a3-a6ac-462b-bd16-63e2e0505dd7');
        raudrohi.base.assert_isBoolean(b_true_if_update_DOM,
            'b_true_if_update_DOM',
            '15ef60c4-c753-45bc-b916-63e2e0505dd7');
        raudrohi.base.assert_isObject(ht_widget_states,
            'ht_widget_states', '52f18645-f983-4598-9c26-63e2e0505dd7');
        var arowdgl = ar_widgets.length; // A FireFox 3.0.x bug workaround.
        if (ht_widget_states.size() !== arowdgl) {
            raudrohi.tmg('f44efff4-09e3-4336-8846-63e2e0505dd7', ' ' +
                                                                 'ht_widget_states.size()(==' +
                                                                 ht_widget_states.size() +
                                                                 ')!==ar_widgets.length(==' +
                                                                 arowdgl +
                                                                 ').');
        } // ifs
    } // if
    try {
        var i_len = ar_widgets.length;
        var i = 0;
        var ob_widget;
        var elem_state;
        var widget_is_graphical = true;
        if (b_true_if_unhide === true) {
            for (i = 0; i < i_len; i++) {
                ob_widget = ar_widgets[i];
                widget_is_graphical = ob_widget.is_graphical_widget();
                if (widget_is_graphical === true) {
                    elem_state = ht_widget_states.get(
                        ob_widget.phone.get_phone_number());
                    if (elem_state.is_in_state_hidden === false) {
                        ob_widget.unhide();
                    } // if
                } // if
            } // for
        } else {
            for (i = 0; i < i_len; i++) {
                ob_widget = ar_widgets[i];
                widget_is_graphical = ob_widget.is_graphical_widget();
                if (widget_is_graphical === true) {
                    ob_widget.hide(b_true_if_update_DOM);
                } // if
            } // for
        } // else
    } catch (err) {
        var phn;
        try {
            phn = ob_widget.phone.get_phone_number();
        } catch (err) {
            phn = '';
        } // catch
        raudrohi.tmg('41760984-29d0-4b67-8416-63e2e0505dd7',
            'elem.phone.get_phone_number()==' + phn +
            ' ' + err);
    } // catch
}// raudrohi.widgets.g1.sys.hide_or_unhide_t2

//-------------------------------------------------------------------------

// Events like "on click", "focus", "blur", etc, are handled as
// if there were triggered by special keys on a keyboard. In the
// terminology they are called "virtual keys".
raudrohi.widgets.g1.sys.keylisteners_unit = function (owners_instance) {
    var self_public_ = this;
    try {
        var instance_public_ = owners_instance;
        var prc_ = instance_public_.private_code_;


        // key==key_number, value==<an eventhandler function instance>
        var ht_eventhandler_funcs_ = new Hashtable();

        // key==key_number   value==<key event handle>
        var ht_eventhandles_ = new Hashtable();

        function set_eventlistener(listenable_element_html_id,
            key_number_as_a_string, eventhandler_function) {
            try {
                var b_is_a_virtual_key = true;
                var s_event_name;
                switch (key_number_as_a_string) {
                    case 'raudrohi_virtual_key_focus':
                        s_event_name = 'focus';
                        break;
                    case 'raudrohi_virtual_key_blur':
                        s_event_name = 'blur';
                        break;
                    case 'raudrohi_virtual_key_click':
                        s_event_name = 'click';
                        break;
                    case 'raudrohi_virtual_key_mouseenter':
                        s_event_name = 'mouseenter';
                        break;
                    case 'raudrohi_virtual_key_mouseexit':
                        s_event_name = 'mouseleave';
                        break;
                    default:
                        b_is_a_virtual_key = false;
                        s_event_name = 'key';
                        if (raudrohi_settings_debug_JavaScript === true) {
                            var key_code_candidate = parseInt(key_number_as_a_string);
                            raudrohi.base.assert_isKeyeventKeyCode(
                                key_code_candidate, 'key_code_candidate',
                                '2f81cef2-58f0-477e-8a45-63e2e0505dd7');
                        } // if
                } // switch
                var eventhandle;
                if (b_is_a_virtual_key === true) {
                    eventhandle = raudrohi.adapter.addEventListner(
                        listenable_element_html_id, s_event_name,
                        eventhandler_function);
                } else {
                    eventhandle = raudrohi.adapter.set_keylistener(
                        listenable_element_html_id, key_number_as_a_string,
                        eventhandler_function);
                } // else
                return eventhandle;
            } catch (err) {
                raudrohi.tmg('48023761-9fb9-4ec0-9955-63e2e0505dd7', err);
            } // catch
        } // set_eventlistener


        // Due to a logical bug in the YUI 3 library, the
        // same key listener event handler function is not re-attachable
        // to a newly created DOM node that has the same HTML ID. This holds
        // even, if the _yuid attribute is restored. So, for that
        // reason, every time a widget gets un-hidden, the HTML element
        // that is being listened to, must have a slightly different ID. So,
        // temporary HTML-ids are used and the temporary ID-s are expected
        // to be generated by the widget that uses the HTML elements.
        this.add_keylistener =
        function (s_listenable_element_html_id, s_key_number_as_a_string,
            eventhandler_function) {
            // TODO: refactor it to use Ctrl keys, etc.
            // One only has to support key combinations, not keypress
            // series. Series are for some other level.
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(s_listenable_element_html_id,
                        's_listenable_element_html_id',
                        '01350270-27c9-441e-9165-63e2e0505dd7');
                    raudrohi.base.assert_isString(s_key_number_as_a_string,
                        's_key_number_as_a_string',
                        '48f636a4-7531-44a0-a555-63e2e0505dd7');
                    raudrohi.base.assert_isFunction(eventhandler_function,
                        'eventhandler_function',
                        '4e590ce5-e709-4dcb-9835-63e2e0505dd7');
                } // if
                if (ht_eventhandler_funcs_.containsKey(s_key_number_as_a_string)) {
                    self_public_.remove_keylistener(s_key_number_as_a_string);
                } // if
                ht_eventhandler_funcs_.put(s_key_number_as_a_string,
                    eventhandler_function);
                var eventhandle = set_eventlistener(s_listenable_element_html_id,
                    s_key_number_as_a_string, eventhandler_function);
                if (prc_.self_is_hidden_ === true) {
                    return;
                } // if
                ht_eventhandles_.put(s_key_number_as_a_string, eventhandle);
            } catch (err) {
                raudrohi.tmg('40112731-0183-4c5a-8245-63e2e0505dd7', err);
            } // catch
        } // add_keylistener

        this.remove_keylistener = function (s_key_number_as_a_string) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(s_key_number_as_a_string,
                        's_key_number_as_a_string',
                        '16a63e12-290a-4876-bd55-63e2e0505dd7');
                    switch (s_key_number_as_a_string) {
                        case 'raudrohi_virtual_key_focus':
                            break;
                        case 'raudrohi_virtual_key_blur':
                            break;
                        case 'raudrohi_virtual_key_click':
                            break;
                        case 'raudrohi_virtual_key_mouseenter':
                            break;
                        case 'raudrohi_virtual_key_mouseexit':
                            break;
                        default:
                            var key_code_candidate = parseInt(s_key_number_as_a_string);
                            raudrohi.base.assert_isKeyeventKeyCode(
                                key_code_candidate, 'key_code_candidate',
                                '44a03ac6-ec40-42a7-ac45-63e2e0505dd7');
                    } // switch
                } // if
                if (!ht_eventhandler_funcs_.containsKey(s_key_number_as_a_string)) {
                    return;
                } // if
                if (prc_.self_is_hidden_ === false) {
                    var eventhandle = ht_eventhandles_.get(
                        s_key_number_as_a_string);
                    raudrohi.adapter.remove_keylistener(eventhandle);
                } // if
                ht_eventhandler_funcs_.remove(s_key_number_as_a_string);
                ht_eventhandles_.remove(s_key_number_as_a_string);
            } catch (err) {
                raudrohi.tmg('3ed74101-0216-447b-8a15-63e2e0505dd7', err);
            } // catch
        } //  remove_keylistener

        // The method add_keylistener has a comment about the
        // listenable_element_html_id parameter.
        var listeners_attached_2_DOM_elements_ = false;
        this.attach_listeners2_DOM_elements =
        function (s_listenable_element_html_id) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(s_listenable_element_html_id,
                        's_listenable_element_html_id',
                        '220c3d73-4198-4b19-8324-63e2e0505dd7');
                    if (prc_.self_is_hidden_ === true) {
                        raudrohi.tmg('41392c24-9e7d-46b9-a214-63e2e0505dd7',
                            'If the widget is hidden, the DOM elements  ' +
                            'that the listeners must be attached to, ' +
                            'are expected to be missing from the DOM.');
                    } // if
                } // if
                if (listeners_attached_2_DOM_elements_) {
                    // If the widget's set_content method is called,
                    // one might need to rerender the widget, regardless
                    // of whather it is in readonly mode or editable mode, but
                    // if the widget is already visible, the listeners
                    // have already been attached to the GUI elements.
                    return;
                } // if
                var ar_keys = ht_eventhandler_funcs_.keys();
                var i_len = ar_keys.length;
                var eventhandler_function;
                var key_number_as_a_string;
                var eventhandle;
                for (var i = 0; i < i_len; i++) {
                    key_number_as_a_string = ar_keys[i];
                    eventhandler_function = ht_eventhandler_funcs_.get(
                        key_number_as_a_string);
                    eventhandle =
                    set_eventlistener(s_listenable_element_html_id,
                        key_number_as_a_string, eventhandler_function);
                    ht_eventhandles_.put(key_number_as_a_string, eventhandle);
                } // for
                listeners_attached_2_DOM_elements_ = true;
            } catch (err) {
                raudrohi.tmg('5044c073-03db-4e1b-8b44-63e2e0505dd7', err);
            } // catch
        } // attach_listeners2_DOM_elements

        this.detach_listeners_from_DOM_elements = function () {
            try {
                if (prc_.self_is_hidden_ === true) {
                    raudrohi.tmg('25dcf145-5753-4108-8954-63e2e0505dd7',
                        'If the widget is hidden, the DOM elements that the ' +
                        'listeners are expected to be attached to, are ' +
                        'expected to be missing from the DOM.');
                } // if
                if (!listeners_attached_2_DOM_elements_) {
                    // The reason, why it just returns from here in
                    // stead of throwing an exception for warning
                    // is that in the case of re-rendering the
                    // detachment has to be carried out, but there's
                    // nothing to detach, if the widget is being unhidden.
                    return;
                } // if
                var eventhandle;
                var ar_keys = ht_eventhandles_.keys();
                var i_len = ar_keys.length;
                var key;
                for (var i = 0; i < i_len; i++) {
                    key = ar_keys[i];
                    eventhandle = ht_eventhandles_.get(key);
                    raudrohi.adapter.remove_keylistener(eventhandle);
                } // for
                ht_eventhandles_.clear();
                listeners_attached_2_DOM_elements_ = false;
            } catch (err) {
                raudrohi.tmg('62a9d81c-f1b6-406f-a544-63e2e0505dd7', err);
            } // catch
        } // detach_listeners_from_DOM_elements

        // If the elements are gone from the DOM, there's no point of
        // keeping their records.
        this.remove_all_keylisteners = function () {
            try {
                var keys = ht_eventhandler_funcs_.keys();
                var len = keys.length;
                var key;
                for (var i = 0; i < len; i++) {
                    key = keys[i]
                    self_public_.remove_keylistener(key);
                } // for
            } catch (err) {
                raudrohi.tmg('a4226fc3-5633-485d-8034-63e2e0505dd7', err);
            } // catch
        } // remove_all_keylisteners

    } catch (err) {
        raudrohi.tmg('74daeeb7-bdbe-4b82-ba14-63e2e0505dd7', err);
    } // catch
} // raudrohi.widgets.g1.sys.keylisteners_unit

//-------------------------------------------------------------------------

// Currently the params_hashtable is not in use and is expected to be
// a random Hashtable, but it's there for future improvements. Namely,
// when the set of supported states is expanded by the
// startup_with_indication_request and shutdown_with_indication_request,
// then one needs to pass some data to this method.
raudrohi.widgets.g1.triggerTransition =
function (s_next_state_of_widget_B, s_next_state_of_widget_A,
    s_widget_B_phone_number, s_widget_A_phone_number, ht_params) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isString(s_next_state_of_widget_B,
                's_next_state_of_widget_B',
                '5d223a45-76bc-49a1-ab54-63e2e0505dd7');
            raudrohi.base.assert_isString(s_next_state_of_widget_A,
                's_next_state_of_widget_A',
                '944dfdb0-0877-4b10-ad14-63e2e0505dd7');
            raudrohi.base.assert_isString(s_widget_B_phone_number,
                's_widget_B_phone_number',
                '1f906405-e1b3-4675-a133-63e2e0505dd7');
            raudrohi.base.assert_isString(s_widget_A_phone_number,
                's_widget_A_phone_number',
                '91743f14-732d-4c89-a043-63e2e0505dd7');
            raudrohi.base.assert_isObject(ht_params,
                'ht_params', '53628dc2-0834-4ab5-a833-63e2e0505dd7');

            var ar_state_domain = raudrohi.base.commaseparated_list_2_array(
                'hide,unhide, shutdown, startup, resurrect');
            raudrohi.base.assert_isWithinDomain(s_next_state_of_widget_A,
                's_next_state_of_widget_A',
                '127c76f2-6a28-470b-b543-63e2e0505dd7',
                ar_state_domain);
            raudrohi.base.assert_isWithinDomain(s_next_state_of_widget_B,
                's_next_state_of_widget_B',
                'd5b29166-c099-44b0-9943-63e2e0505dd7',
                ar_state_domain);
            if (s_next_state_of_widget_A == 'hide') {
                raudrohi.base.assert_isWithinDomain(s_next_state_of_widget_B,
                    's_next_state_of_widget_B',
                    '5b5fec93-ae78-404b-9b43-63e2e0505dd7',
                    raudrohi.base.commaseparated_list_2_array(
                        'unhide, startup, resurrect'));
            } // if
        } // if
        var ht = new Hashtable();
        ht.put('destination_phone_number', s_widget_B_phone_number);
        ht.put('data_for_the_destination', s_next_state_of_widget_B + '|||');
        ht.put('binary_data_for_the_destination', 0);
        switch (s_next_state_of_widget_A) {
            case 'hide':
                raudrohi.lang.phonebooth_dev_null.phone.call(s_widget_A_phone_number,
                    'hide|||', 0);
                raudrohi.lang.phonebooth_dev_null.phone.call(s_widget_B_phone_number,
                    s_next_state_of_widget_B + '|||', 0);
                break;
            case 'shutdown':
                raudrohi.lang.phonebooth_dev_null.phone.call(s_widget_A_phone_number,
                    'shutdown_with_indication_request|||', ht);
                break;
            case 'startup':
                raudrohi.lang.phonebooth_dev_null.phone.call(s_widget_A_phone_number,
                    'startup_with_indication_request|||', ht);
                break;
            default:
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.tmg('1288f8b2-66ad-47fe-9213-63e2e0505dd7',
                        'There\'s no branching for s_next_state_of_widget_A(==' +
                        s_next_state_of_widget_A + ').');
                } // if
        } // switch
    } catch (err) {
        raudrohi.tmg('437ef0b4-a0b9-44ac-9a33-63e2e0505dd7', err +
                                                             "\n  s_next_state_of_widget_B==" +
                                                             s_next_state_of_widget_B +
                                                             "\n  s_next_state_of_widget_A==" +
                                                             s_next_state_of_widget_A +
                                                             "\n  s_widget_B_phone_number==" +
                                                             s_widget_B_phone_number +
                                                             "\n  s_widget_A_phone_number==" +
                                                             s_widget_A_phone_number);
    } // catch
} // raudrohi.widgets.g1.triggerTransition

//-------------------------------------------------------------------------

raudrohi.widgets.g1.sys.phonecall_receiver_tmg =
function (GUID, err, a_phonecall_instance) {
    var a_phonecall_instance_data = '';
    try {
        a_phonecall_instance_data = a_phonecall_instance.data;
    } catch (errr) {
    }
    if (a_phonecall_instance_data !== '') {
        err = err + ' a_phonecall_instance.data==' +
              a_phonecall_instance_data;
    } // if
    raudrohi.tmg(GUID, err);
} // raudrohi.widgets.g1.sys.phonecall_receiver_tmg


// It's assumed that the origin_hashtable consists of only
// raudrohi.base.widget_state_bitfield instances. The
// destination_hashtable is cleared prior to the copying operation.
// the elements are copyied by value, not by reference.
raudrohi.widgets.g1.sys.copy_ht_of_bitfields =
function (ht_destination, ht_origin) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isObject(ht_destination,
                'ht_destination',
                'b5f91d5d-8650-420e-8ef2-63e2e0505dd7');
            raudrohi.base.assert_isObject(ht_origin,
                'ht_origin', '457bffb1-3ec3-4ea4-ad32-63e2e0505dd7');
        } // if
        ht_destination.clear();
        var ar_keys = ht_origin.keys();
        var i_len = ar_keys.length;
        var key;
        var reference_to_the_value;
        var new_bitfield;
        for (var i = 0; i < i_len; i++) {
            key = ar_keys[i];
            reference_to_the_value = ht_origin.get(key);
            new_bitfield = new raudrohi.base.widget_state_bitfield();
            new_bitfield.is_in_state_startup =
            reference_to_the_value.is_in_state_startup;
            new_bitfield.is_in_state_hidden =
            reference_to_the_value.is_in_state_hidden;
            ht_destination.put(key, new_bitfield);
        } // for
    } catch (err) {
        raudrohi.tmg('7a3ae8f2-2373-48ca-b992-63e2e0505dd7', err);
    } // catch
} // raudrohi.widgets.g1.sys.copy_ht_of_bitfields

//-------------------------------------------------------------------------

raudrohi.widgets.g1.sys.change_state_2 = function (ar_widgets, s_state_name) {
    if (raudrohi_settings_debug_JavaScript === true) {
        raudrohi.base.assert_isArray(ar_widgets, 'ar_widgets',
            '92769f51-b09d-42c9-bde2-63e2e0505dd7');
        raudrohi.base.assert_isString(s_state_name, 's_state_name',
            '42f84967-94e0-43bb-9422-63e2e0505dd7');
    } // if
    try {
        var i_len = ar_widgets.length;
        var i = 0;
        var elem;
        for (i = 0; i < i_len; i++) {
            elem = ar_widgets[i];
            elem.state_switcher_.change_state_2(s_state_name);
        } // for
    } catch (err) {
        var phn;
        try {
            phn = elem.phone.get_phone_number();
        } catch (err) {
            phn = '';
        } // catch
        raudrohi.tmg('1a63a781-def3-4841-a132-63e2e0505dd7',
            'elem.phone.get_phone_number()==' + phn + ' ' + err);
    } // catch
}// change_state_2

//-------------------------------------------------------------------------

raudrohi.widgets.g1.sys.shutdown_t1 = function (ar_widgets) {
    var a_widget;
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isArray(ar_widgets, 'ar_widgets',
                'ede0d44e-48be-4443-8352-63e2e0505dd7');
        } // if
        var i_len = ar_widgets.length;
        var i = 0;
        for (i = 0; i < i_len; i++) {
            a_widget = ar_widgets[i];
            raudrohi.lang.phonebooth_dev_null.phone.call(
                a_widget.phone.get_phone_number(), 'shutdown|||', 0);
        } // for
    } catch (err) {
        var phn;
        try {
            phn = a_widget.phone.get_phone_number();
        } catch (err) {
            phn = '';
        } // catch
        raudrohi.tmg('24e18e12-e299-4dd7-8742-63e2e0505dd7',
            'a_widget.phone.get_phone_number()==' + phn + ' ' + err);
    } // catch
}// raudrohi.widgets.g1.sys.shutdown_t1

//-------------------------------------------------------------------------

raudrohi.widgets.g1.sys.startup_t1 = function (ar_widgets, ht_widget_states) {
    if (raudrohi_settings_debug_JavaScript === true) {
        raudrohi.base.assert_isArray(ar_widgets, 'ar_widgets',
            '27837d71-4f01-4a8e-8431-63e2e0505dd7');
        raudrohi.base.assert_isObject(ht_widget_states,
            'ht_widget_states',
            'fc3a7d86-348d-4493-b541-63e2e0505dd7');
        var i_arowdgl = ar_widgets.length;// A FireFox 3.0.x bug workaround.
        if (ht_widget_states.size() !== i_arowdgl) {
            raudrohi.tmg('28152721-e5bb-4a47-ae31-63e2e0505dd7', err + ' ' +
                                                                 'ht_widget_states.size()(==' +
                                                                 ht_widget_states.size() +
                                                                 ')!==ar_widgets.length(==' +
                                                                 i_arowdgl +
                                                                 ').');
        } // if
    } // if
    var ob_widget;
    var phn;
    try {
        var i_len = ar_widgets.length;
        var i = 0;
        var elem_state;
        for (i = 0; i < i_len; i++) {
            ob_widget = ar_widgets[i];
            phn = ob_widget.phone.get_phone_number()
            elem_state = ht_widget_states.get(phn);
            if (elem_state.is_in_state_startup) {
                raudrohi.lang.phonebooth_dev_null.phone.call(
                    phn, 'startup|||', 0);
            } // if
        } // for
    } catch (err) {
        try {
            phn = ob_widget.phone.get_phone_number();
        } catch (err) {
            phn = '';
        } // catch
        raudrohi.tmg('96921ca9-04aa-4aec-a211-63e2e0505dd7',
            'ob_widget.phone.get_phone_number()==' + phn + ' Error message:' +
            err);
    } // catch
}// raudrohi.widgets.g1.sys.startup_t1

//-------------------------------------------------------------------------

// ht_microsessions.key == <microsession name>
// ht_microsessions.value == <microsession id>
raudrohi.widgets.g1.sys.close_microsessions_t1 = function (ht_microsessions) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isObject(ht_microsessions,
                'ht_microsessions',
                'd4b0ab4b-ab3f-41c0-b551-63e2e0505dd7');
        } // if
        var ar_keys = ht_microsessions.keys();
        var i_len = ar_keys.length;
        var i = 0;
        var s_microsession_name;
        for (i = 0; i < i_len; i++) {
            s_microsession_name = ar_keys[i];
            ht_microsessions.put(s_microsession_name, (-1));
        } // for
    } catch (err) {
        raudrohi.tmg('95014327-9ec9-4343-96c1-63e2e0505dd7', err);
    } // catch
} // raudrohi.widgets.g1.sys.close_microsessions_t1

//=========================================================================
