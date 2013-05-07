//=========================================================================
//
// This file acts as an interface between JavaScript libraries that
// take care of browser specific picularities and the raudrohi JavaScript
// library.
//
// The idea is that when new browser versions emerge, they
// tend to break compatibility and when the developers of the
// libraries that take care of browser related normalization, update
// their libraries, all of the raudrohi can be brought up to date
// by just updating this file here.
//
// The place, where to start reading this file, is
// raudrohi.initiate_adapter.
//
// Dependencies:
//      YUI toolkit from Yahoo. Currently only version 3 is fully
//      supported.
//-------------------------------------------------------------------------

if (window.raudrohi_adapter_exists !== true) {
    window.raudrohi.adapter = {};
    window.raudrohi_adapter_exists = true;
} // if
if (window.raudrohi_adapter_ports_exists !== true) {
    window.raudrohi.adapter.ports = {};
    window.raudrohi_adapter_ports_exists = true;
} // if

raudrohi.internal_constructor = function () {
    throw 'It\'s assumed that the function named ' +
          'raudrohi.internal_constructor is overriden. ' +
          'GUID=="11695cd9-d655-486c-b4c4-93c210505dd7"';
} // raudrohi.internal_constructor

raudrohi.application_main_function = function () {
    throw 'It\'s assumed that the function named ' +
          'raudrohi.application_main_function is overriden. ' +
          'GUID=="fe8cdf13-5317-41bc-a5c4-93c210505dd7" ';
} // raudrohi.application_main_function

raudrohi.adapter.vars = {};

raudrohi.adapter.vars.func_if_lib_uninited = function (x) {
    throw 'In order to use the raudrohi ' +
          'JavaScript library, one has to initialize it by calling ' +
          'raudrohi.initiate_adapter. ';
} // raudrohi.adapter.vars.func_if_lib_uninited

// The isString will be overriden, but one needs to bypass it
// within the str2bool, which gets called before the overriding.
// That's why it returns just true.
raudrohi_adapter_isString = function (x) {
    return true;
};


raudrohi.adapter.log = function (x) {/*its a temporary stub*/
};

// The following 2 methods are subject to overriding. They're functions
// here only to demonstrate their interface.
raudrohi.adapter.server_response_eventhandler = function (response_as_a_text) {
    raudrohi.adapter.vars.func_if_lib_uninited('')
} // raudrohi.adapter.server_response_eventhandler
raudrohi.adapter.send2server = function (url_string, data_as_text) {
    raudrohi.adapter.vars.func_if_lib_uninited('')
} // raudrohi.adapter.send2server


// the innerHTML parameter exists only, because
// the Internet Explorer 8 (as of 11.2009) has bugs.
raudrohi.adapter.set_innerHTML = function (html_id, a_string) {
    raudrohi.adapter.vars.func_if_lib_uninited('')
} //raudrohi.adapter.set_innerHTML

//------------------------------------------------------------------------
raudrohi.tmg = function (GUID, err) {
    // The YAHOO event handler mechanisms supress the exceptions,
    // effectively stopping the exception bubble before it reaches
    // the event handler function. That's one of the reasons, why one
    // feeds the whole thing to the YAHOO log. The other
    // reason is that if the exception message stack is fed to the
    // YAHOO log, one does not have to keep the error console window
    // open. :-)
    //
    // Within the raudrohi_adapter_v1.js one should not use this
    // method before a function has been assigned to the
    // raudrohi.adapter.log.
    var msg = 'GUID=="' + GUID + "\"\n" + err;
    if (raudrohi.settings.runtime.write_exception_stack_2_log) {
        raudrohi.adapter.log(msg);
    } // if
    throw msg;
}; // raudrohi.tmg

//------------------------------------------------------------------------
// The YUI_stoppropagation_preventdefault duplicates the YUI_stoppropagation
// and the YUI_preventdefault and exists only for convenience and
// may be also for slight performance gain.
raudrohi.adapter.YUI_stoppropagation_preventdefault =
raudrohi.adapter.vars.func_if_lib_uninited;

raudrohi.adapter.ports.selected_port_name = '';

//------------------------------------------------------------------------
raudrohi.adapter.vars.verify_event_name = function (event_name) {
    try {
        switch (event_name) {
            case 'focus':
                break;
            case 'blur':
                break;
            case 'click':
                break;
            case 'change':
                break;
            default:
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.tmg('GUID=="1f5be820-20e8-4067-a3c4-93c210505dd7"',
                        'There\'s no branching for event_name(==' + event_name +
                        ').');
                } // if
        } // switch
    }
    catch (err) {
        throw 'GUID=="2686f22c-4226-44f0-94c4-93c210505dd7"' + "\n\r" + err;
    } // catch
} // raudrohi.adapter.vars.verify_event_name

//------------------------------------------------------------------------
raudrohi.adapter.vars.do_something_if_the_connection_to_the_server_failed =
function () {
    if (raudrohi_settings_debug_JavaScript === true) {
        raudrohi.tmg('fd893135-0aa3-43e0-93c4-93c210505dd7',
            'Connection to the server failed.');
    } // if
}; // raudrohi.adapter.vars.do_something_if_the_connection_to_the_server_failed
//------------------------------------------------------------------------

var raudrohi_adapter_isString = null;
var raudrohi_adapter_isArray = null;
var raudrohi_adapter_isNumber = null;
var raudrohi_adapter_isBoolean = null;
var raudrohi_adapter_isObject = null;
var raudrohi_adapter_isUndefined = null;
var raudrohi_adapter_isValue = null;
var raudrohi_adapter_isFunction = null;

//------------------------------------------------------------------------
var YUI_based_LogReader;
var Y_raudrohi = null;

//------------------------------------------------------------------------
raudrohi.adapter.ports.yui_3_0 = function () {
    var self_public_ = this;
    this.get_name = function () {
        return 'YUI_3_0';
    } // get_name
    Y_raudrohi = YUI();
    if (raudrohi_settings_debug_JavaScript === true) {
        Y_raudrohi.use('console', 'overlay', 'dd', 'node', 'attribute',
            'dom', 'event', 'get', 'io-base',
            'io-form', 'io-upload-iframe', 'json', 'json-stringify',
            'json-parse', 'event-key', 'key', function (Y) {

                raudrohi_adapter_isString = Y.Lang.isString;
                raudrohi_adapter_isArray = Y.Lang.isArray;
                raudrohi_adapter_isNumber = Y.Lang.isNumber;
                raudrohi_adapter_isBoolean = Y.Lang.isBoolean;
                raudrohi_adapter_isObject = Y.Lang.isObject;
                raudrohi_adapter_isUndefined = Y.Lang.isUndefined;
                raudrohi_adapter_isValue = Y.Lang.isValue;
                raudrohi_adapter_isFunction = Y.Lang.isFunction;

                raudrohi.internal_constructor();
                raudrohi.application_main_function();
            });
    } else {
        // The console related css seems to mess things up.
        // May be it has something to do with the fact that the console
        // component is still a beta.
        //
        // The reason, why the console component is here, is that
        // some weird errors happened to occur.
        Y_raudrohi.use('overlay', 'dd', 'node', 'attribute',
            'dom', 'event', 'get', 'io-base',
            'io-form', 'io-upload-iframe', 'json', 'json-stringify',
            'json-parse', 'event-key', 'key', function (Y) {

                raudrohi_adapter_isString = Y.Lang.isString;
                raudrohi_adapter_isArray = Y.Lang.isArray;
                raudrohi_adapter_isNumber = Y.Lang.isNumber;
                raudrohi_adapter_isBoolean = Y.Lang.isBoolean;
                raudrohi_adapter_isObject = Y.Lang.isObject;
                raudrohi_adapter_isUndefined = Y.Lang.isUndefined;
                raudrohi_adapter_isValue = Y.Lang.isValue;
                raudrohi_adapter_isFunction = Y.Lang.isFunction;

                raudrohi.internal_constructor();
                raudrohi.application_main_function();
            });
    } // else

    raudrohi.adapter.vars.YUI_3_0 = {};

    raudrohi.adapter.log = function (a_string) {
        if (raudrohi_settings_debug_JavaScript === true) {
            Y_raudrohi.log(a_string);
        } // if
    } // raudrohi.adapter.log

    raudrohi.adapter.trim = function (a_string) {
        try {
            return Y_raudrohi.Lang.trim(a_string);
        } catch (err) {
            raudrohi.tmg('2ddccaa1-e7e2-4510-95c4-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.trim

    raudrohi.adapter.YUI_preventdefault = function (e) {
        try {
            e.preventDefault();
        } catch (err) {
            raudrohi.tmg('961936f6-0928-43f5-b9c4-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.YUI_preventdefault

    raudrohi.adapter.YUI_stoppropagation = function (e) {
        try {
            e.stopPropagation();
        } catch (err) {
            raudrohi.tmg('aff2d145-4ba6-4d21-84c4-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.YUI_stoppropagation

    raudrohi.adapter.YUI_stoppropagation_preventdefault = function (e) {
        try {
            e.halt();
        } catch (err) {
            raudrohi.tmg('51c0580d-54d6-4943-b1c4-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.YUI_stoppropagation_preventdefault

    raudrohi.adapter.YUI_create_console = function () {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                YUI_based_LogReader = new Y_raudrohi.Console({
                    logSource: Y_raudrohi.Global,
                    strings: {
                        title: 'Site Debugging Console',
                        pause: 'Wait',
                        clear: 'Flush',
                        collapse: 'Shrink',
                        expand: 'Grow'
                    },
                    plugins: [Y_raudrohi.Plugin.Drag,
                        Y_raudrohi.Plugin.ConsoleFilters],
                    //plugins: [ Y_raudrohi.Plugin.ConsoleFilters ],
                    visible: true
                }).render();
            } // if
        } catch (err) {
            raudrohi.tmg('ecd91821-71dc-4c9d-95b4-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.YUI_create_console

    raudrohi.adapter.addEventListner =
    function (html_id, event_name, event_handler_func) {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                if (!raudrohi_adapter_isString(html_id)) {
                    raudrohi.tmg('b56a1f44-9efe-451d-81b4-93c210505dd7',
                        '(!raudrohi_adapter_isString(html_id))==true')
                } // if
                if (!raudrohi_adapter_isString(event_name)) {
                    raudrohi.tmg('411589a3-4a3f-4c70-b1b4-93c210505dd7',
                        '(!raudrohi_adapter_isString(event_name))==true')
                } // if
                if (!raudrohi_adapter_isFunction(event_handler_func)) {
                    raudrohi.tmg('3744761f-e0bc-462c-a3b4-93c210505dd7',
                        '(!raudrohi_adapter_isFunction(event_handler_func))==true');
                } // if
                raudrohi.adapter.vars.verify_event_name(event_name);
            } // if
            var key_listener_handle = Y_raudrohi.on(event_name, function (e) {
                //e.halt();// stopPropagation() and preventDefault()
                //key_listener_handle.detach();// unsubscribe so this only happens once
                event_handler_func(e);
            }, '#' + html_id);
            // The value is returned in order to be compatible wtih
            // the raudrohi.adapter.set_keylistener. The compatibility is
            // required in the raudrohi.widgets.g1.sys.keylisteners_unit.
            return key_listener_handle;
        } catch (err) {
            raudrohi.tmg('f9c22c5e-e20a-40a1-b4a4-93c210505dd7',
                err + ' html_id==' + html_id + '  event_name==' + event_name);
        } // catch
    } // raudrohi.adapter.addEventListner

    raudrohi.adapter.set_keylistener =
    function (html_id, key_number_as_string, event_handler_func) {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                if (!raudrohi_adapter_isString(html_id)) {
                    raudrohi.tmg('29d851d1-ccea-4516-93a4-93c210505dd7',
                        '(!raudrohi_adapter_isString(html_id))==true')
                } // if
                if (!raudrohi_adapter_isString(key_number_as_string)) {
                    raudrohi.tmg('135e8c83-d464-4ed9-a7a4-93c210505dd7',
                        '(!raudrohi_adapter_isString(key_number_as_string))==true')
                } // if
                if (!raudrohi_adapter_isFunction(event_handler_func)) {
                    raudrohi.tmg('b8fe8932-3ff9-4a09-b3a4-93c210505dd7',
                        '(!raudrohi_adapter_isFunction(event_handler_func))==true');
                } // if
                // If the parseInt converts something like 'BumBastic' to
                // an int, then there will be trouble. It's not possible to
                // preprocess it here either.
                var key_code_candidate = parseInt(key_number_as_string, 10);
                if (!raudrohi.core.isWithinKeyeventKeyCodes(key_code_candidate)) {
                    raudrohi.tmg('a167b759-d3e8-444f-a1a4-93c210505dd7',
                        'key_number(==' + key_number_as_string +
                        ') does not represent a ' +
                        'JavaScript key event key code.');
                } // if
            } // if
            var key_listener_handle = Y_raudrohi.on('key',
                function (e, arg1, arg2, etc) {
                    //e.halt();// stopPropagation() and preventDefault()
                    //key_listener_handle.detach();// unsubscribe so this only happens once
                    event_handler_func(e);
                }, '#' + html_id, 'down:' + key_number_as_string,
                Y_raudrohi, "arg1", "arg2", "etc");
            return key_listener_handle;
        } catch (err) {
            raudrohi.tmg('863b8339-867c-45f3-a1a4-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.set_keylistener

    raudrohi.adapter.remove_keylistener = function (key_listener_handle) {
        try {
            key_listener_handle.detach();
        } catch (err) {
            raudrohi.tmg('4395f126-70e6-44a3-94a4-93c210505dd7', err);
        } // catch
    } // remove_keylistener

    raudrohi.adapter.JSON2ob = function (a_json_string) {
        try {
            var an_object;
            //YUI().use('json-parse', function (Ytmp) {
            // JSON.parse throws a SyntaxError when passed invalid JSON
            try {
                an_object = Y_raudrohi.JSON.parse(a_json_string);
            }
            catch (e) {
                raudrohi.tmg("Invalid JSON string. " + e);
            }
            //});
            return an_object;
        } catch (err) {
            raudrohi.tmg('bd03611f-5fc8-425c-83a4-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.JSON2ob

    raudrohi.adapter.ob2JSON = function (an_object) {
        try {
            var s_json = '';
            //YUI().use('json-stringify', function (Ytmp) {
            s_json = Y_raudrohi.JSON.stringify(an_object) + '\n';
            //});
            return s_json;
        } catch (err) {
            raudrohi.tmg('ac3e7d35-80e7-43c1-a1a4-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.JSON2ob


    raudrohi.adapter.send2server = function (url_string, data_as_text) {
        try {
            var fff = document.getElementById(
                'sirel_data_from_JavaScript_formscript_field');
            fff.value = data_as_text;
            var uri = url_string;

            // Define a function to handle the response data.
            function request_complete(id, o, args) {
                try {
                    // id ==Transaction ID.
                    var data = o.responseText; // Response data.
                    if (data != null) {// IE problems
                        if (raudrohi_adapter_isString(data)) {
                            if (data != '') {
                                raudrohi.adapter.server_response_eventhandler(data);
                            } // if
                        } // if
                    } // if
                    //  var args = args[1]; // 'ipsum'.
                } catch (err) {
                    raudrohi.tmg('0805df11-3934-4d29-8394-93c210505dd7', err);
                } // catch
            } // request_complete

            // Subscribe to event "io:complete", and pass an array
            // as an argument to the event handler "complete", since
            // "complete" is global.   At this point in the transaction
            // lifecycle, success or failure is not yet known.
            Y_raudrohi.on('io:complete', request_complete, this,
                ['lorem', 'ipsum']);
            // Make an HTTP request to <the url>.
            var cfg = {
                method: 'POST',
                //data: 'debug|||/dev/null|||',
                timeout: raudrohi.settings.ajax_request_timeout * 1000,
                on: {
                    // start: Dispatch.start,
                    complete: request_complete
                    //end: Dispatch.end
                },
                form: {
                    id: 'sirel_data_from_JavaScript_formscript_form',
                    upload: true
                }
            };
            var request = Y_raudrohi.io(uri, cfg);
        } catch (err) {
            raudrohi.tmg('f5f5d340-75f7-4a5c-8194-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.send2server

    // Due to YUI's architecture there's a separate method for
    // editing the style attribute.
    raudrohi.adapter.setAttribute =
    function (html_id, attribute_name, attribute_value) {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                if (!raudrohi_adapter_isString(html_id)) {
                    raudrohi.tmg('cbdb0e59-362c-47b4-b594-93c210505dd7',
                        '(!raudrohi_adapter_isString(html_id))==true')
                } // if
                if (!raudrohi_adapter_isString(attribute_name)) {
                    raudrohi.tmg('3afd1ed5-7127-4798-ba94-93c210505dd7',
                        '(!raudrohi_adapter_isString(attribute_name))==true')
                } // if
                if (!raudrohi_adapter_isString(attribute_value)) {
                    raudrohi.tmg('89ee7135-eadc-4fd0-a494-93c210505dd7',
                        '(!raudrohi_adapter_isString(attribute_value))==true')
                } // if
            } // if
            var node = Y_raudrohi.Node.get('#' + html_id);
            if (node === null) {
                raudrohi.tmg('f9933f1a-0639-4f47-b394-93c210505dd7',
                    ' node===null ');
            } // if
            node.set(attribute_name, attribute_value);
        } catch (err) {
            raudrohi.tmg('49db675e-956f-4c44-9594-93c210505dd7', err +
                                                                 '  html_id==' +
                                                                 html_id +
                                                                 ' attribute_name==' +
                                                                 attribute_name +
                                                                 '  attribute_value==' +
                                                                 attribute_value);
        } // catch
    } // raudrohi.adapter.setAttribute

    raudrohi.adapter.getAttribute = function (html_id, attribute_name) {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                if (!raudrohi_adapter_isString(html_id)) {
                    raudrohi.tmg('f9c2fa2d-af32-4781-9594-93c210505dd7',
                        '(!raudrohi_adapter_isString(html_id))==true')
                } // if
                if (!raudrohi_adapter_isString(attribute_name)) {
                    raudrohi.tmg('e0939914-1436-402c-a194-93c210505dd7',
                        '(!raudrohi_adapter_isString(attribute_name))==true')
                } // if
            } // if
            var node = Y_raudrohi.Node.get('#' + html_id);
            if (node === null) {
                raudrohi.tmg('75641d49-0544-4b18-a284-93c210505dd7',
                    ' node===null ');
            } // if
            var attr_value = node.get(attribute_name);
            return attr_value;
        } catch (err) {
            raudrohi.tmg('1b8cb863-044a-4e4d-9634-93c210505dd7', err +
                                                                 '  html_id==' +
                                                                 html_id +
                                                                 ' attribute_name==' +
                                                                 attribute_name);
        } // catch
    } // raudrohi.adapter.getAttribute

    raudrohi.adapter.remove_HTML_attribute =
    function (html_id, attribute_name) {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                if (!raudrohi_adapter_isString(html_id)) {
                    raudrohi.tmg('6ed9d9b4-e72f-497e-9134-93c210505dd7',
                        '(!raudrohi_adapter_isString(html_id))==true')
                } // if
                if (!raudrohi_adapter_isString(attribute_name)) {
                    raudrohi.tmg('5ac26be2-eb73-4bee-9f34-93c210505dd7',
                        '(!raudrohi_adapter_isString(attribute_name))==true')
                } // if
            } // if
            var node = Y_raudrohi.Node.get('#' + html_id);
            if (node === null) {
                raudrohi.tmg('1b214c33-1cf8-4760-9224-93c210505dd7',
                    ' node===null ');
            } // if
            node.removeAttribute(attribute_name);
        } catch (err) {
            raudrohi.tmg('d6136558-0a48-4b41-b324-93c210505dd7', err +
                                                                 '  html_id==' +
                                                                 html_id +
                                                                 ' attribute_name==' +
                                                                 attribute_name);
        } // catch
    } // raudrohi.adapter.remove_HTML_attribute


    raudrohi.adapter.editStyle =
    function (html_id, style_param_name, style_param_value) {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                if (!raudrohi_adapter_isString(html_id)) {
                    raudrohi.tmg('73ae0943-3ed9-4ff8-9224-93c210505dd7',
                        '(!raudrohi_adapter_isString(html_id))==true')
                } // if
                if (!raudrohi_adapter_isString(style_param_name)) {
                    raudrohi.tmg('a2110a35-367b-460c-8224-93c210505dd7',
                        '(!raudrohi_adapter_isString(style_param_name))==true')
                } // if
                if (!raudrohi_adapter_isString(style_param_value)) {
                    raudrohi.tmg('4bd680b1-d0b0-45e1-b124-93c210505dd7',
                        '(!raudrohi_adapter_isString(style_param_value))==true')
                } // if
            } // if
            var node = Y_raudrohi.Node.get('#' + html_id);
            if (node === null) {
                raudrohi.tmg('587a6034-ae54-4c02-8124-93c210505dd7',
                    ' node===null, html_id==' + html_id + "\n");
            } // if
            node.setStyle(style_param_name, style_param_value);
        } catch (err) {
            raudrohi.tmg('a36c260f-b2a0-4c05-b524-93c210505dd7', err +
                                                                 "\n html_id==" +
                                                                 html_id +
                                                                 "\n style_param_name==" +
                                                                 style_param_name +
                                                                 "  style_param_value==" +
                                                                 style_param_value);
        } // catch
    } // raudrohi.adapter.editStyle

    raudrohi.adapter.set_innerHTML = function (html_id, a_string) {
        try {
            var node = Y_raudrohi.Node.get('#' + html_id);
            if (node === null) {
                raudrohi.tmg('0ec81b12-4571-4ff4-9224-93c210505dd7',
                    ' node===null ');
            } // if
            node.set('innerHTML', a_string);
        } catch (err) {
            raudrohi.tmg('4ac5ef40-0a67-4c67-9414-93c210505dd7', err +
                                                                 '  html_id==' +
                                                                 html_id +
                                                                 ' a_string==' +
                                                                 a_string);
        } // catch
    } // raudrohi.adapter.set_innerHTML

} // raudrohi.adapter.ports.yui_3_0

//------------------------------------------------------------------------

raudrohi.adapter.ports.yui_3_9_0 = function () {
    var self_public_ = this;
    this.get_name = function () {
        return 'YUI_3_9_0';
    } // get_name
    Y_raudrohi = YUI();
    if (raudrohi_settings_debug_JavaScript === true) {
        Y_raudrohi.use('console', "console-filters", "dd-plugin",
            'overlay', 'dd', 'node', 'attribute',
            'dom', 'event', 'get', 'io-base', 'node-load',
            'io-form', 'io-upload-iframe', 'json', 'json-stringify',
            'json-parse', 'event-key', 'key', function (Y) {

                raudrohi_adapter_isString = Y.Lang.isString;
                raudrohi_adapter_isArray = Y.Lang.isArray;
                raudrohi_adapter_isNumber = Y.Lang.isNumber;
                raudrohi_adapter_isBoolean = Y.Lang.isBoolean;
                raudrohi_adapter_isObject = Y.Lang.isObject;
                raudrohi_adapter_isUndefined = Y.Lang.isUndefined;
                raudrohi_adapter_isValue = Y.Lang.isValue;
                raudrohi_adapter_isFunction = Y.Lang.isFunction;

                raudrohi.internal_constructor();
                raudrohi.application_main_function();
            });
    } else {
        // The console related css seems to mess things up.
        // May be it has something to do with the fact that the console
        // component is still a beta.
        //
        // The reason, why the console component is here, is that
        // some weird errors happened to occur.
        Y_raudrohi.use("dd-plugin",
            'overlay', 'dd', 'node', 'attribute',
            'dom', 'event', 'get', 'io-base', 'node-load',
            'io-form', 'io-upload-iframe', 'json', 'json-stringify',
            'json-parse', 'event-key', 'key', function (Y) {

                raudrohi_adapter_isString = Y.Lang.isString;
                raudrohi_adapter_isArray = Y.Lang.isArray;
                raudrohi_adapter_isNumber = Y.Lang.isNumber;
                raudrohi_adapter_isBoolean = Y.Lang.isBoolean;
                raudrohi_adapter_isObject = Y.Lang.isObject;
                raudrohi_adapter_isUndefined = Y.Lang.isUndefined;
                raudrohi_adapter_isValue = Y.Lang.isValue;
                raudrohi_adapter_isFunction = Y.Lang.isFunction;

                raudrohi.internal_constructor();
                raudrohi.application_main_function();
            });
    } // else

    raudrohi.adapter.vars.YUI_3_9_0 = {};

    raudrohi.adapter.log = function (a_string) {
        if (raudrohi_settings_debug_JavaScript === true) {
            Y_raudrohi.log(a_string);
        } // if
    } // raudrohi.adapter.log

    raudrohi.adapter.trim = function (a_string) {
        try {
            return Y_raudrohi.Lang.trim(a_string);
        } catch (err) {
            raudrohi.tmg('2d41fca4-057a-4cc5-8914-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.trim

    raudrohi.adapter.YUI_preventdefault = function (e) {
        try {
            e.preventDefault();
        } catch (err) {
            raudrohi.tmg('20b0a651-7bf9-4d48-9314-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.YUI_preventdefault

    raudrohi.adapter.YUI_stoppropagation = function (e) {
        try {
            e.stopPropagation();
        } catch (err) {
            raudrohi.tmg('598ad635-a295-4ea9-8214-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.YUI_stoppropagation

    raudrohi.adapter.YUI_stoppropagation_preventdefault = function (e) {
        try {
            e.halt();
        } catch (err) {
            raudrohi.tmg('d2225755-caf5-43a5-8c14-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.YUI_stoppropagation_preventdefault

    raudrohi.adapter.YUI_create_console = function () {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                YUI_based_LogReader = new Y_raudrohi.Console({
                    strings: {
                        title: 'Raudrohi Debugging Console',
                        pause: 'Wait',
                        clear: 'Flush',
                        collapse: 'Shrink',
                        expand: 'Grow'
                    },
                    visible: true// hidden at instantiation
                }).plug(Y_raudrohi.Plugin.ConsoleFilters)
                    .plug(Y_raudrohi.Plugin.Drag,
                    {handles: ['.yui3-console-hd']})
                    .render();
            } // if
        } catch (err) {
            raudrohi.tmg('fafa4f48-fdd0-4108-b414-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.YUI_create_console

    raudrohi.adapter.addEventListner =
    function (html_id, event_name, event_handler_func) {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                if (!raudrohi_adapter_isString(html_id)) {
                    raudrohi.tmg('b703066b-c61f-4c9a-b514-93c210505dd7',
                        '(!raudrohi_adapter_isString(html_id))==true')
                } // if
                if (!raudrohi_adapter_isString(event_name)) {
                    raudrohi.tmg('8e07f31d-7f9e-493a-b504-93c210505dd7',
                        '(!raudrohi_adapter_isString(event_name))==true')
                } // if
                if (!raudrohi_adapter_isFunction(event_handler_func)) {
                    raudrohi.tmg('3c5a2f2f-eb58-4591-8404-93c210505dd7',
                        '(!raudrohi_adapter_isFunction(event_handler_func))==true');
                } // if
                raudrohi.adapter.vars.verify_event_name(event_name);
            } // if
            var key_listener_handle = Y_raudrohi.on(event_name, function (e) {
                //e.halt();// stopPropagation() and preventDefault()
                //key_listener_handle.detach();// unsubscribe so this only happens once
                event_handler_func(e);
            }, '#' + html_id);
            // The value is returned in order to be compatible wtih
            // the raudrohi.adapter.set_keylistener. The compatibility is
            // required in the raudrohi.widgets.g1.sys.keylisteners_unit.
            return key_listener_handle;
        } catch (err) {
            raudrohi.tmg('07061723-9d66-4e8e-a204-93c210505dd7',
                err + ' html_id==' + html_id + '  event_name==' + event_name);
        } // catch
    } // raudrohi.adapter.addEventListner

    raudrohi.adapter.set_keylistener =
    function (html_id, key_number_as_string, event_handler_func) {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                if (!raudrohi_adapter_isString(html_id)) {
                    raudrohi.tmg('34015aed-d2e6-4723-9104-93c210505dd7',
                        '(!raudrohi_adapter_isString(html_id))==true')
                } // if
                if (!raudrohi_adapter_isString(key_number_as_string)) {
                    raudrohi.tmg('562ea14f-57d9-4534-8404-93c210505dd7',
                        '(!raudrohi_adapter_isString(key_number_as_string))==true')
                } // if
                if (!raudrohi_adapter_isFunction(event_handler_func)) {
                    raudrohi.tmg('321f9847-4952-4811-b504-93c210505dd7',
                        '(!raudrohi_adapter_isFunction(event_handler_func))==true');
                } // if
                // If the parseInt converts something like 'BumBastic' to
                // an int, then there will be trouble. It's not possible to
                // preprocess it here either.
                var key_code_candidate = parseInt(key_number_as_string, 10);
                if (!raudrohi.core.isWithinKeyeventKeyCodes(key_code_candidate)) {
                    raudrohi.tmg('5f180351-0aa2-4a03-a3f3-93c210505dd7',
                        'key_number(==' + key_number_as_string +
                        ') does not represent a ' +
                        'JavaScript key event key code.');
                } // if
            } // if
            var key_listener_handle = Y_raudrohi.on('key',
                function (e, arg1, arg2, etc) {
                    //e.halt();// stopPropagation() and preventDefault()
                    //key_listener_handle.detach();// unsubscribe so this only happens once
                    event_handler_func(e);
                }, '#' + html_id, 'down:' + key_number_as_string,
                Y_raudrohi, "arg1", "arg2", "etc");
            return key_listener_handle;
        } catch (err) {
            raudrohi.tmg('657db51d-fc12-4880-94f3-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.set_keylistener

    raudrohi.adapter.remove_keylistener = function (key_listener_handle) {
        try {
            key_listener_handle.detach();
        } catch (err) {
            raudrohi.tmg('e9bcf51e-9ade-49f7-91f3-93c210505dd7', err);
        } // catch
    } // remove_keylistener

    raudrohi.adapter.JSON2ob = function (a_json_string) {
        try {
            var an_object;
            //YUI().use('json-parse', function (Ytmp) {
            // JSON.parse throws a SyntaxError when passed invalid JSON
            try {
                an_object = Y_raudrohi.JSON.parse(a_json_string);
            }
            catch (e) {
                raudrohi.tmg("Invalid JSON string. " + e);
            }
            //});
            return an_object;
        } catch (err) {
            raudrohi.tmg('2be3f983-81ca-4d7c-a6f3-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.JSON2ob

    raudrohi.adapter.ob2JSON = function (an_object) {
        try {
            var s_json = '';
            //YUI().use('json-stringify', function (Ytmp) {
            s_json = Y_raudrohi.JSON.stringify(an_object) + '\n';
            //});
            return s_json;
        } catch (err) {
            raudrohi.tmg('39fb814d-4033-437f-83f3-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.JSON2ob


    raudrohi.adapter.send2server = function (url_string, data_as_text) {
        try {
            var fff = document.getElementById(
                'sirel_data_from_JavaScript_formscript_field');
            fff.value = data_as_text;
            var uri = url_string;

            // Define a function to handle the response data.
            function request_complete(id, o, args) {
                try {
                    // id ==Transaction ID.
                    var data = o.responseText; // Response data.
                    if (data != null) {// IE problems
                        if (raudrohi_adapter_isString(data)) {
                            if (data != '') {
                                raudrohi.adapter.server_response_eventhandler(data);
                            } // if
                        } // if
                    } // if
                    //  var args = args[1]; // 'ipsum'.
                } catch (err) {
                    raudrohi.tmg('1e217366-3952-4283-91f3-93c210505dd7', err);
                } // catch
            } // request_complete

            // Subscribe to event "io:complete", and pass an array
            // as an argument to the event handler "complete", since
            // "complete" is global.   At this point in the transaction
            // lifecycle, success or failure is not yet known.
            Y_raudrohi.on('io:complete', request_complete, this,
                ['lorem', 'ipsum']);
            // Make an HTTP request to <the url>.
            var cfg = {
                method: 'POST',
                //data: 'debug|||/dev/null|||',
                timeout: raudrohi.settings.ajax_request_timeout * 1000,
                on: {
                    // start: Dispatch.start,
                    complete: request_complete
                    //end: Dispatch.end
                },
                form: {
                    id: 'sirel_data_from_JavaScript_formscript_form',
                    upload: true
                }
            };
            var request = Y_raudrohi.io(uri, cfg);
        } catch (err) {
            raudrohi.tmg('4b863a2b-6492-4342-b4f3-93c210505dd7', err);
        } // catch
    } // raudrohi.adapter.send2server

    // Due to YUI's architecture there's a separate method for
    // editing the style attribute.
    raudrohi.adapter.setAttribute =
    function (html_id, attribute_name, attribute_value) {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                if (!raudrohi_adapter_isString(html_id)) {
                    raudrohi.tmg('3051db57-32dd-4475-92e3-93c210505dd7',
                        '(!raudrohi_adapter_isString(html_id))==true')
                } // if
                if (!raudrohi_adapter_isString(attribute_name)) {
                    raudrohi.tmg('71f53b43-9eac-47c2-8ce3-93c210505dd7',
                        '(!raudrohi_adapter_isString(attribute_name))==true')
                } // if
                if (!raudrohi_adapter_isString(attribute_value)) {
                    raudrohi.tmg('6b075645-a641-4af3-b4e3-93c210505dd7',
                        '(!raudrohi_adapter_isString(attribute_value))==true')
                } // if
            } // if
            var node = Y_raudrohi.Node.get('#' + html_id);
            if (node === null) {
                raudrohi.tmg('ad15043e-34cf-47fc-84e3-93c210505dd7',
                    ' node===null ');
            } // if
            node.set(attribute_name, attribute_value);
        } catch (err) {
            raudrohi.tmg('4697a86c-b81c-4850-a5e3-93c210505dd7', err +
                                                                 '  html_id==' +
                                                                 html_id +
                                                                 ' attribute_name==' +
                                                                 attribute_name +
                                                                 '  attribute_value==' +
                                                                 attribute_value);
        } // catch
    } // raudrohi.adapter.setAttribute

    raudrohi.adapter.getAttribute = function (html_id, attribute_name) {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                if (!raudrohi_adapter_isString(html_id)) {
                    raudrohi.tmg('2e0e2c14-d400-4511-b3e3-93c210505dd7',
                        '(!raudrohi_adapter_isString(html_id))==true')
                } // if
                if (!raudrohi_adapter_isString(attribute_name)) {
                    raudrohi.tmg('20098cb4-7f3a-4acb-afd3-93c210505dd7',
                        '(!raudrohi_adapter_isString(attribute_name))==true')
                } // if
            } // if
            var node = Y_raudrohi.Node.get('#' + html_id);
            if (node === null) {
                raudrohi.tmg('9290c7a1-ca41-4d87-92d3-93c210505dd7',
                    ' node===null ');
            } // if
            var attr_value = node.get(attribute_name);
            return attr_value;
        } catch (err) {
            raudrohi.tmg('75bf9f47-254c-42fc-83d3-93c210505dd7', err +
                                                                 '  html_id==' +
                                                                 html_id +
                                                                 ' attribute_name==' +
                                                                 attribute_name);
        } // catch
    } // raudrohi.adapter.getAttribute

    raudrohi.adapter.remove_HTML_attribute =
    function (html_id, attribute_name) {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                if (!raudrohi_adapter_isString(html_id)) {
                    raudrohi.tmg('20756c61-2d21-4760-91d3-93c210505dd7',
                        '(!raudrohi_adapter_isString(html_id))==true')
                } // if
                if (!raudrohi_adapter_isString(attribute_name)) {
                    raudrohi.tmg('eddb5a2d-e373-4b42-a2d3-93c210505dd7',
                        '(!raudrohi_adapter_isString(attribute_name))==true')
                } // if
            } // if
            var node = Y_raudrohi.Node.one('#' + html_id);
            if (node === null) {
                raudrohi.tmg('225d9126-ada4-4d93-b4d3-93c210505dd7',
                    ' node===null ');
            } // if
            node.removeAttribute(attribute_name);
        } catch (err) {
            raudrohi.tmg('6339108f-2d53-4f6b-b5c3-93c210505dd7', err +
                                                                 '  html_id==' +
                                                                 html_id +
                                                                 ' attribute_name==' +
                                                                 attribute_name);
        } // catch
    } // raudrohi.adapter.remove_HTML_attribute


    raudrohi.adapter.editStyle =
    function (html_id, style_param_name, style_param_value) {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                if (!raudrohi_adapter_isString(html_id)) {
                    raudrohi.tmg('7a2a3646-30ed-434b-92c3-93c210505dd7',
                        '(!raudrohi_adapter_isString(html_id))==true')
                } // if
                if (!raudrohi_adapter_isString(style_param_name)) {
                    raudrohi.tmg('63b7773f-5727-4467-b5c3-93c210505dd7',
                        '(!raudrohi_adapter_isString(style_param_name))==true')
                } // if
                if (!raudrohi_adapter_isString(style_param_value)) {
                    raudrohi.tmg('4b819742-4fc0-4ae1-a4c3-93c210505dd7',
                        '(!raudrohi_adapter_isString(style_param_value))==true')
                } // if
            } // if
            var node = Y_raudrohi.Node.one('#' + html_id);
            if (node === null) {
                raudrohi.tmg('88261134-7021-48f2-91c3-93c210505dd7',
                    ' node===null, html_id==' + html_id + "\n");
            } // if
            node.setStyle(style_param_name, style_param_value);
        } catch (err) {
            raudrohi.tmg('b5224852-1019-4dd2-82c3-93c210505dd7', err +
                                                                 "\n html_id==" +
                                                                 html_id +
                                                                 "\n style_param_name==" +
                                                                 style_param_name +
                                                                 "  style_param_value==" +
                                                                 style_param_value);
        } // catch
    } // raudrohi.adapter.editStyle

    raudrohi.adapter.set_innerHTML = function (html_id, a_string) {
        try {
            var node = Y_raudrohi.Node.get('#' + html_id);
            if (node === null) {
                raudrohi.tmg('c0acbc52-be2b-4fb2-b3b3-93c210505dd7',
                    ' node===null ');
            } // if
            node.set('innerHTML', a_string);
        } catch (err) {
            raudrohi.tmg('5cb6c047-142f-48c1-95b3-93c210505dd7', err +
                                                                 '  html_id==' +
                                                                 html_id +
                                                                 ' a_string==' +
                                                                 a_string);
        } // catch
    } // raudrohi.adapter.set_innerHTML

} // raudrohi.adapter.ports.yui_3_9_0

//------------------------------------------------------------------------


// As the data from the server arrives much later than the JavaScript
// files, this method must not be executed before everything has been
// downloaded. Otherwise the elem_id within this method ends up being null,
// because the element does not yet exist at the time of theis
// method execution.
//
// If b_make_no_assumptions_about_setup_availability==true, the library
// gets initiated with default setup values. Otherwise it is assumed
// that the server provides setup info.
raudrohi.initiate_adapter =
function (b_make_no_assumptions_about_setup_availability) {
    try {
        var port_name;
        try {
            if (b_make_no_assumptions_about_setup_availability === true) {
// RENESSAATOR_BLOCK_START
// RENESSAATOR_BLOCK_ID=raudrohi_initiate_adapter_block_1
// RENESSAATOR_SOURCE_LANGUAGE=Ruby
// RENESSAATOR_SOURCE_START
// RAUDROHI_HOME=ENV['RAUDROHI_HOME']
// require(RAUDROHI_HOME+"/src/dev_tools/code_generation/raudrohi_cg0.rb")
// puts "port_name='"+RAUDROHI_PORT_NAME+"';"
// RENESSAATOR_SOURCE_END
//
// RENESSAATOR_AUTOGENERATED_TEXT_START
port_name='YUI_3_0';

// RENESSAATOR_AUTOGENERATED_TEXT_END
// RENESSAATOR_BLOCK_END
                //  The following 3 are determined in raudrohi_core_v1.js
                //  raudrohi_settings_debug_JavaScript=true;
                //  raudrohi.settings.debug_SERVERSIDE=false;
                //  raudrohi.settings.ajax_request_timeout=3600; // seconds
            } else {
                var s_err_prefix = " The " +
                                   "b_make_no_assumptions_about_setup_availability!==true, but ";
                var elem_id = "webpage_initiation_data_from_server_raudrohi_port";
                var elem = document.getElementById(elem_id);
                if (elem === null) {
                    throw s_err_prefix + " the html document does not " +
                          "contain an element with an id of " +
                          "\"webpage_initiation_data_from_server_raudrohi_port\"." +
                          'GUID=="49917f64-9737-4730-b2b4-93c210505dd7"';
                } // if
                port_name = elem.innerHTML;
                elem_id =
                "webpage_initiation_data_from_server_debug_SERVERSIDE";
                elem = document.getElementById(elem_id);
                if (elem === null) {
                    throw "keyword: debug_SERVERSIDE, " +
                          'GUID=="3c02eda5-71c9-4e8e-bcb4-93c210505dd7"';
                } // if
                raudrohi.settings.debug_SERVERSIDE = raudrohi.core.str2bool(
                    elem.innerHTML);
                elem_id =
                "webpage_initiation_data_from_server_debug_JavaScript";
                elem = document.getElementById(elem_id);
                if (elem === null) {
                    throw "keyword: debug_JavaScript, " +
                          'GUID=="4d1f7704-4bfd-4489-beb4-93c210505dd7"';
                } // if
                raudrohi_settings_debug_JavaScript = raudrohi.core.str2bool(
                    elem.innerHTML);
                elem_id =
                "webpage_initiation_data_from_server_javascript_side_ajax_timeout";
                elem = document.getElementById(elem_id);
                if (elem !== null) {
                    var seconds = parseInt(elem.innerHTML);
                    raudrohi.settings.ajax_request_timeout = seconds;
                } // if
            } // else
        } catch (err) {
            throw 'GUID=="85e32b2e-f35f-4ae4-91b4-93c210505dd7", ' + err;
        } // catch
        raudrohi.adapter.ports.selected_port_name = port_name;
        switch (port_name) {
            case 'YUI_3_9_0':
                raudrohi.adapter.ports.yui_3_9_0();
                break;
            case 'YUI_3_0':
                raudrohi.adapter.ports.yui_3_0();
                break;
            default:
                if (raudrohi_settings_debug_JavaScript === true) {
                    throw 'GUID=="5d57fc75-1b26-4a44-a3b4-93c210505dd7"  ' +
                          'There\'s no branching for port_name(==' +
                          port_name + ').';
                } // if
        } // switch
    } catch (err) {
        throw 'GUID=="7d371f49-3ec4-436c-91a4-93c210505dd7", ' + err;
    } // catch
} // raudrohi.initiate_adapter

//------------------------------------------------------------------------
