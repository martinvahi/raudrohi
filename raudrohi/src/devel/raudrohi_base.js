//=========================================================================

if (window.raudrohi_base_exists !== true) {
    window.raudrohi.base = {};
    window.raudrohi_base_exists = true;
} // if

if (window.raudrohi_base_private_code_exists !== true) {
    window.raudrohi.base.private_code = {};
    window.raudrohi_base_private_code_exists = true;
} // if

//------------------------------------------------------------------------
// Returns an integer between i_minimum and i_maximum.
// Part of this function has been Copy/Pasted from:
// http://www.javascriptkit.com/javatutors/randomnum.shtml
raudrohi.base.rand = function (i_minimum, i_maximum) {
    try {
        if (!raudrohi_adapter_isNumber(i_minimum)) {
            raudrohi.adapter.log("raudrohi.base.rand:: i_minimum is not a number.");
        } // if
        if (!raudrohi_adapter_isNumber(i_maximum)) {
            raudrohi.adapter.log("raudrohi.base.rand: i_maximum is not a number.");
        } // if
        if (i_minimum === i_maximum) {
            raudrohi.adapter.log("raudrohi.base.rand: i_minimum==i_maximum");
        } // if
        var mi;
        var ma;
        if (i_minimum < i_maximum) {
            mi = i_minimum;
            ma = i_maximum;
        } else {
            mi = i_maximum;
            ma = i_minimum;
            raudrohi.adapter.log("i_maximum < i_minimum");
        } // else
        var interval = ma - mi;
        var x = Math.floor(Math.random() * interval);
        return x + mi;
    } catch (err) {
        raudrohi.tmg('1b5c0f50-aeb4-4872-b24b-e181b0505dd7', err);
    } // catch
}; // raudrohi.base.rand

//------------------------------------------------------------------------

raudrohi.base.s_get_typename = function (x_in) {
    try {
        var s_out = null;
        if (raudrohi_adapter_isString(x_in) === true) {
            s_out = raudrohi_typename_String;
        } //
        if (raudrohi_adapter_isArray(x_in) === true) {
            s_out = raudrohi_typename_Array;
        } //
        if (raudrohi_adapter_isNumber(x_in) === true) {
            s_out = raudrohi_typename_Number;
        } //
        if (raudrohi_adapter_isBoolean(x_in) === true) {
            s_out = raudrohi_typename_Boolean;
        } //
        if (raudrohi_adapter_isObject(x_in) === true) {
            s_out = raudrohi_typename_Object;
        } //
        if (raudrohi_adapter_isUndefined(x_in) === true) {
            s_out = raudrohi_typename_Undefined;
        } //
        if (raudrohi_adapter_isValue(x_in) === true) {
            s_out = raudrohi_typename_Value;
        } //
        if (raudrohi_adapter_isFunction(x_in) === true) {
            s_out = raudrohi_typename_Function;
        } //
        if (x_in === null) {
            s_out = raudrohi_typename_null;
        } //
        if (s_out === null) {
            raudrohi.tmg('cd783952-ce54-4b1c-b54b-e181b0505dd7',
                "This function is not advanced enough to function " +
                "properly. x_in==" + x_in);
        } //
        return s_out;
    } catch (err) {
        raudrohi.tmg('85a9ae62-503b-4278-b44b-e181b0505dd7', err);
    } // catch
} // raudrohi.base.s_get_typename

//------------------------------------------------------------------------
raudrohi.base.assert_isString =
function (x_variable, s_variable_name, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    if (!raudrohi_adapter_isString(x_variable)) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + '(==' + x_variable + ') is not a string. ' +
            s_optional_errmsg_suffix);
    } // if
} // raudrohi.base.assert_isString

raudrohi.base.assert_isArray =
function (x_variable, s_variable_name, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    if (!raudrohi_adapter_isArray(x_variable)) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + '(==' + x_variable + ') is not an array. ' +
            s_optional_errmsg_suffix);
    } // if
} // raudrohi.base.assert_isArray

raudrohi.base.assert_isNumber =
function (x_variable, s_variable_name, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    // The ===null part is just in case. The problem is
    // that due to autoconversion ((4+null)===4)===true
    if ((!raudrohi_adapter_isNumber(x_variable)) || (x_variable === null)) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + '(==' + x_variable +
            ') is not of numeric type. ' +
            s_optional_errmsg_suffix);
    } // if
} // raudrohi.base.assert_isNumber

raudrohi.base.assert_isBoolean =
function (x_variable, s_variable_name, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    // The ===null part is just in case. The problem is
    // that due to autoconversion ((4+null)===4)===true
    if ((!raudrohi_adapter_isBoolean(x_variable)) || (x_variable === null)) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + '(==' + x_variable +
            ') is not of boolean type. ' +
            s_optional_errmsg_suffix);
    } // if
} // raudrohi.base.assert_isBoolean

raudrohi.base.assert_isObject =
function (x_variable, s_variable_name, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    if (!raudrohi_adapter_isObject(x_variable)) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + '(==' + x_variable + ') is not of Object type. ' +
            s_optional_errmsg_suffix);
    } // if
} // raudrohi.base.assert_isObject

raudrohi.base.assert_isUndefined =
function (x_variable, s_variable_name, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    if (!raudrohi_adapter_isUndefined(x_variable)) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + '(==' + x_variable +
            ') is not of Undefined type. ' +
            s_optional_errmsg_suffix);
    } // if
} // raudrohi.base.assert_isUndefined

raudrohi.base.assert_isValue =
function (x_variable, s_variable_name, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    if (!raudrohi_adapter_isValue(x_variable)) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + '(==' + x_variable + ') is not of Value type. ' +
            s_optional_errmsg_suffix);
    } // if
} // raudrohi.base.assert_isValue

raudrohi.base.assert_isFunction =
function (x_variable, s_variable_name, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    if (!raudrohi_adapter_isFunction(x_variable)) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + '(==' + x_variable + ') is not a function.');
    } // if
} // raudrohi.base.assert_isFunction

raudrohi.base.assert_isNotnull =
function (x_variable, s_variable_name, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    if (x_variable === null) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + '===null. ' + s_optional_errmsg_suffix);
    } // if
} // raudrohi.base.assert_isNotnull


raudrohi.base.assert_isKeyeventKeyCode =
function (x_variable, s_variable_name, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    if (!raudrohi.core.isWithinKeyeventKeyCodes(x_variable)) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + '(==' + x_variable + ') does not represent a ' +
            'JavaScript key event key code. ' + s_optional_errmsg_suffix);
    } // if
} // raudrohi.base.assert_isKeyeventKeyCode

raudrohi.base.assert_isWithinDomain =
function (x_variable, s_variable_name, Globally_Unique_Identifier_as_string,
    an_array_of_domain_set_elements, s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    var is_within_domain = false;
    var len = an_array_of_domain_set_elements.length;
    var i = 0;
    var elem;
    try {
        raudrohi.base.assert_isString(s_variable_name, 's_variable_name',
            '7f8c7f41-81e9-40db-a74b-e181b0505dd7');
        raudrohi.base.assert_isString(Globally_Unique_Identifier_as_string,
            'Globally_Unique_Identifier_as_string',
            '40d83322-d8b1-4a35-b24b-e181b0505dd7');
        raudrohi.base.assert_isArray(an_array_of_domain_set_elements,
            'an_array_of_domain_set_elements',
            '1ebf6942-2259-4fff-824b-e181b0505dd7');
        for (i = 0; i < len; i++) {
            elem = an_array_of_domain_set_elements[i];
            if (x_variable === elem) {
                is_within_domain = true;
                break;
            } // if
        } // for
    } catch (err) {
        raudrohi.tmg('36501e38-6df3-45fd-b14b-e181b0505dd7', err);
    } // catch
    if (!is_within_domain) {
        var s_domain = '';
        try {
            i = 0;
            for (i = 0; i < len; i++) {
                elem = an_array_of_domain_set_elements[i];
                if (i === 0) {
                    s_domain = elem;
                } else {
                    s_domain = s_domain + ', ' + elem;
                } // else
            } // for
        } catch (err) {
            raudrohi.tmg('be7f7642-f300-4ed7-814b-e181b0505dd7', err);
        } // catch
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + '(==' + x_variable + ') is not within domain' +
            '{' + s_domain + '}. ' + s_optional_errmsg_suffix);
    } // if
} // raudrohi.base.assert_isKeyeventKeyCode

// In math supremum is the least uper bound of set S.
// All upper bounds are greater than or equal to all of the set S
// elements.
raudrohi.base.assert_X1_isSmallerThanOrEqualTo_X2 =
function (x1, s_x1_name, Globally_Unique_Identifier_as_string, x2, s_x2_name,
    s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    if (raudrohi_settings_debug_JavaScript === true) {
        raudrohi.base.assert_isNumber(x1, 'x1',
            '26c6ba31-4ad5-4fb7-b34b-e181b0505dd7');
        raudrohi.base.assert_isString(s_x1_name, 's_x1_name',
            'a3008f37-89a3-4fc0-a23b-e181b0505dd7');
        raudrohi.base.assert_isNumber(x2, 'x2',
            '3372cb0c-6aa2-40a0-ab3b-e181b0505dd7');
        raudrohi.base.assert_isString(s_x2_name, 's_x2_name',
            '624ad246-736a-49a0-a13b-e181b0505dd7');
    } // if
    if (x2 < x1) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_x2_name + '(==' + x2 + ') < ' + s_x1_name + '(==' + x1 + '). ' +
            s_optional_errmsg_suffix);
    } // if
} // raudrohi.base.assert_X1_isSmallerThanOrEqualTo_X2

//------------------------------------------------------------------
raudrohi.base.private_code.assert_incdec_t1 =
function (ar_number_candidates, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix, func_1) {
    try {
        s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                                   'undefined' ? s_optional_errmsg_suffix : '';
        var i_len = null;
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isArray(
                ar_number_candidates, 'ar_number_candidates',
                'f8125438-bea1-41d7-a13b-e181b0505dd7');
            raudrohi.base.assert_isString(Globally_Unique_Identifier_as_string,
                'Globally_Unique_Identifier_as_string',
                '65c2fb28-6f85-4dd6-953b-e181b0505dd7');
            raudrohi.base.assert_isString(
                s_optional_errmsg_suffix, 's_optional_errmsg_suffix',
                '3afc4c1f-7570-4388-b23b-e181b0505dd7');
            i_len = ar_number_candidates.length;
            if (i_len === 0) {
                raudrohi.tmg('45256186-f28c-42e8-823b-e181b0505dd7',
                    'ar_number_candidates.length==0');
            } // if
        } // if
        i_len = ar_number_candidates.length;
        var i = 0;
        var x_number_candidate;
        var x_1 = null;
        var x_2 = ar_number_candidates[0];
        var i_x_2 = 0;
        var ar_0 = [x_2, i_x_2];
        var func_isNumber = raudrohi_adapter_isNumber; // speedhack
        var func_Math_floor = Math.floor; // speedhack
        var func_Math_abs = Math.abs; // speedhack
        for (i = 0; i < i_len; i++) {
            x_number_candidate = ar_number_candidates[i];
            if (!func_isNumber(x_number_candidate)) {
                raudrohi.tmg(Globally_Unique_Identifier_as_string,
                    "ar_number_candidates[" + i + "] is of type " +
                    raudrohi.base.s_get_typename(x_number_candidate));
            } // if
            x_1 = func_Math_abs(
                x_number_candidate - func_Math_floor(x_number_candidate)) + 1;
            if (1 < x_1) { // +1 is due to the fact that a valid index can be 0.
                raudrohi.tmg(Globally_Unique_Identifier_as_string,
                    "ar_number_candidates[" + i + "](==" +
                    x_number_candidate + ") is of numeric type, but " +
                    "it was a floating point number.");
            } // if
            func_1(ar_0, x_number_candidate, i,
                Globally_Unique_Identifier_as_string);
        } // for
    } catch (err) {
        raudrohi.tmg('2e6ee544-65ee-4f9d-a52b-e181b0505dd7', err);
    } // catch
} //  raudrohi.base.private_code.assert_incdec_t1


raudrohi.base.assert_monotonic_increase_i =
function (ar_number_candidates, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix) {
    try {
        s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                                   'undefined' ? s_optional_errmsg_suffix : '';
        var func_1 = function (ar_0, x_number_candidate, i,
            Globally_Unique_Identifier_as_string) {
            try {
                var x_2 = ar_0[0];
                var i_x_2 = ar_0[1];
                if (x_number_candidate < x_2) {
                    raudrohi.tmg(Globally_Unique_Identifier_as_string,
                        "ar_number_candidates[" + i + "] == " +
                        x_number_candidate +
                        " < ar_number_candidates[" + i_x_2 + "] == " + x_2);
                } // if
                ar_0[0] = x_number_candidate;
                ar_0[1] = i;
            } catch (err) {
                raudrohi.tmg('b93ff25d-ffae-43d5-832b-e181b0505dd7', err);
            } // catch
        } // func_1
        raudrohi.base.private_code.assert_incdec_t1(
            ar_number_candidates, Globally_Unique_Identifier_as_string,
            s_optional_errmsg_suffix, func_1);
    } catch (err) {
        raudrohi.tmg('6f93821d-e581-4974-942b-e181b0505dd7', err);
    } // catch
} // raudrohi.base.assert_monotonic_increase_i

raudrohi.base.assert_monotonic_decrease_i =
function (ar_number_candidates, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix) {
    try {
        // The followint 3-liner can not be used due to
        // error message text differences:
        //
        // -----  3-liner start ------
        // ar_reversed = ar_number_candidates.reverse();
        // raudrohi.base.assert_monotonic_increase_i(ar_reversed,
        //     Globally_Unique_Identifier_as_string, s_optional_errmsg_suffix);
        // -----  3-liner end ------
        //
        // However, the code here is a slightly edited version of the
        // raudrohi.base.assert_monotonic_increase .
        var func_1 = function (ar_0, x_number_candidate, i,
            Globally_Unique_Identifier_as_string) {
            try {
                var x_2 = ar_0[0];
                var i_x_2 = ar_0[1];
                if (x_2 < x_number_candidate) {
                    raudrohi.tmg(Globally_Unique_Identifier_as_string,
                        "ar_number_candidates[" + i_x_2 + "] == " + x_2 +
                        " < ar_number_candidates[" + i + "] == " +
                        x_number_candidate);
                } // if
                ar_0[0] = x_number_candidate;
                ar_0[1] = i;
            } catch (err) {
                raudrohi.tmg('136ce919-ab68-4e0e-842b-e181b0505dd7', err);
            } // catch
        } // if
        raudrohi.base.private_code.assert_incdec_t1(
            ar_number_candidates, Globally_Unique_Identifier_as_string,
            s_optional_errmsg_suffix, func_1);
    } catch (err) {
        raudrohi.tmg('351aab92-3091-4071-b12b-e181b0505dd7', err);
    } // catch
} // raudrohi.base.assert_monotonic_decrease_i

//------------------------------------------------------------------

raudrohi.base.assert_keysExist =
function (ht_in, s_hashtable_variable_name, ar_keys,
    Globally_Unique_Identifier_as_string, s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    var b_throw = false;
    var s_msg = "";
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isObject(ht_in, 'ht_in',
                '28dc60d5-a34d-4c79-942b-e181b0505dd7');
            raudrohi.base.assert_isString(s_hashtable_variable_name,
                's_hashtable_variable_name',
                '3d3ef83e-d73c-42ec-a52b-e181b0505dd7');
            raudrohi.base.assert_isArray(ar_keys, 'ar_keys',
                '1f33c425-34ba-4c6d-842b-e181b0505dd7');
            raudrohi.base.assert_isString(Globally_Unique_Identifier_as_string,
                'Globally_Unique_Identifier_as_string',
                '1f00d23d-0eb9-47d4-a51b-e181b0505dd7');
        } // if
        var len = ar_keys.length;
        var i = 0;
        var key;
        for (i = 0; i < len; i++) {
            key = ar_keys[i];
            if (ht_in.containsKey(key) === false) {
                b_throw = true;
                s_msg = "Key \"" + key + "\" is missing from the hashtable.";
                break;
            } // if
        } // for
    } catch (err) {
        raudrohi.tmg('6775b33b-0fa6-4257-951b-e181b0505dd7', err);
    } // catch
    if (b_throw === true) {
        raudrohi.tmg('18d8e24c-5eaf-4ab2-b11b-e181b0505dd7',
            s_msg + ' ' + s_optional_errmsg_suffix);
    } // if
} //  raudrohi.base.assert_keysExist

//------------------------------------------------------------------------

// ar[0]==<boolean>
// if ar[0]===false, then ar[1]==<GUID in quotes>
raudrohi.base.private_code.ar_x_is_g1_widget =
function (ob_g1_widget_candidate) {
    try {
        var ob_in = ob_g1_widget_candidate;
        var ar_out = [false];
        if (raudrohi_adapter_isObject(ob_in) !== true) {
            ar_out.push('4672891a-8ac4-4599-841b-e181b0505dd7');
            return ar_out;
        } // if
        if (ob_in.private_code_ === undefined) {
            ar_out.push('750ce9cc-c888-41c8-8c1b-e181b0505dd7');
            return ar_out;
        } // if
        if (ob_in.private_code_.evh_ === undefined) {
            ar_out.push('84a0539b-e95a-4021-8c1b-e181b0505dd7');
            return ar_out;
        } // if
        if (ob_in.private_code_.func === undefined) {
            ar_out.push('93258d45-4f75-479a-a21b-e181b0505dd7');
            return ar_out;
        } // if
        if (ob_in.private_code_.selfread === undefined) {
            ar_out.push('e9ae1323-5b7b-47a5-911b-e181b0505dd7');
            return ar_out;
        } // if
        if (ob_in.private_code_.customizable === undefined) {
            ar_out.push('58c69c37-47dd-442d-a50b-e181b0505dd7');
            return ar_out;
        } // if
        if (ob_in.private_code_.customizable.optional === undefined) {
            ar_out.push('176aa64a-a00d-4146-910b-e181b0505dd7');
            return ar_out;
        } // if
        if (ob_in.private_code_.customizable.compulsory === undefined) {
            ar_out.push('3538f14f-3d91-4850-8f0b-e181b0505dd7');
            return ar_out;
        } // if
        if (ob_in.private_code_.ar_widgets_ === undefined) {
            ar_out.push('1bd9b747-fd14-4e02-b40b-e181b0505dd7');
            return ar_out;
        } // if
        //------------------------------------------
        if (ob_in.thrjr_ === undefined) {
            ar_out.push('23d08b12-c41d-4203-930b-e181b0505dd7');
            return ar_out;
        } // if
        if (ob_in.wg_hooks_ === undefined) {
            ar_out.push('4e4abd4c-5a08-4bb4-850b-e181b0505dd7');
            return ar_out;
        } // if
        //------------------------------------------
        if (ob_in.only_for_raudrohi_core_developers === undefined) {
            ar_out.push('4f1e272f-46f9-4c26-910b-e181b0505dd7');
            return ar_out;
        } // if
        if (ob_in.only_for_raudrohi_core_developers.s_widget_architecture_class ===
            undefined) {
            ar_out.push('2aca9563-1bfd-484a-b5fa-e181b0505dd7');
            return ar_out;
        } // if
        if (ob_in.only_for_raudrohi_core_developers.s_widget_architecture_class !==
            "g1") {
            ar_out.push('b5a096c6-fc84-4236-bcfa-e181b0505dd7');
            return ar_out;
        } // if
        //------------------------------------------
        ar_out[0] = true;
        return ar_out;
    } catch (err) {
        raudrohi.tmg('12a978d7-ee00-4ed4-a3fa-e181b0505dd7', err);
    } // catch
} // raudrohi.base.private_code.ar_x_is_g1_widget

raudrohi.base.b_is_g1_widget = function (ob_g1_widget_candidate) {
    try {
        var ar = raudrohi.base.private_code.ar_x_is_g1_widget(
            ob_g1_widget_candidate);
        var b_out = ar[0];
        return b_out;
    } catch (err) {
        raudrohi.tmg('ae77fe55-db1b-4876-81fa-e181b0505dd7', err);
    } // catch
} // raudrohi.base.b_is_g1_widget

raudrohi.base.assert_is_g1_widget =
function (x_variable, s_variable_name, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    var ar = raudrohi.base.private_code.ar_x_is_g1_widget(x_variable);
    var b_is_g1_widget = ar[0];
    if (b_is_g1_widget !== true) {
        var s_reason_GUID = ar[1];
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + ' is not of a widget from the ' +
            'raudrohi.widgets.g1 namespace. ' + "\n" +
            'reason GUID==' + s_reason_GUID + " \n" +
            s_optional_errmsg_suffix);
    } // if
} // raudrohi.base.assert_is_g1_widget

//------------------------------------------------------------------------
var raudrohi_base_private_code_assert_is_HTML_ID_ht_ids = new Hashtable();
var raudrohi_base_private_code_assert_is_HTML_ID_s_msg_1 = "is not suitable to be an HTML ID.";
raudrohi.base.assert_is_HTML_ID =
function (x_variable, s_variable_name, Globally_Unique_Identifier_as_string,
    s_optional_errmsg_suffix) {
    s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !==
                               'undefined' ? s_optional_errmsg_suffix : '';
    var s_msg_1 = raudrohi_base_private_code_assert_is_HTML_ID_s_msg_1;
    if (0 < s_optional_errmsg_suffix.length) {
        s_msg_1 = s_msg_1 + "\n";
    } // if
    if (!raudrohi_adapter_isString(x_variable)) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + '(==' + x_variable +
            ") is not a string and therefore \n" + s_msg_1 +
            s_optional_errmsg_suffix);
    } // if
    var i_len = x_variable.length;
    if (i_len < 1) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + '.length == ' + i_len + " < 1 and therefore " +
            s_msg_1 + s_optional_errmsg_suffix);
    } // if
    var s_0 = x_variable.replace(/[\s]/g, "");
    i_len = s_0.length;
    if (i_len != x_variable.length) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + ' ==\"' + x_variable +
            "\" \n contains spaces and tabs and therefore " + s_msg_1 +
            s_optional_errmsg_suffix);
    } // if
    var ix = x_variable.search(/^[\w]/); // matches also digits
    if (ix < 0) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + ' ==\"' + x_variable +
            "\" \n does not start with a character and therefore " + s_msg_1 +
            s_optional_errmsg_suffix);
    } // if
    ix = x_variable.search(/^[\d]/);
    if (ix == 0) { // i.e. first character is a digit
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + ' ==\"' + x_variable +
            "\" \n does not start with a character and therefore " + s_msg_1 +
            s_optional_errmsg_suffix);
    } // if
    //---------------------------------
    var ht_ids = raudrohi_base_private_code_assert_is_HTML_ID_ht_ids;
    if (ht_ids.containsKey(x_variable) !== false) {
        raudrohi.tmg(Globally_Unique_Identifier_as_string,
            s_variable_name + ' ==\"' + x_variable +
            "\" \n is a valid HTML ID, but \nHTML ID-s have to be unique " +
            "within a single application and in this case the value,\n\"" +
            x_variable + "\"\n" +
            "has been used more than once.\n" + s_optional_errmsg_suffix);
    } // if
    ht_ids.put(x_variable, 42);
} // raudrohi.base.assert_is_HTML_ID

//------------------------------------------------------------------------
raudrohi.base.generate_id_cursor = 1;

raudrohi.base.generate_id = function () {
    try {
        // The raudrohi.base.generate_id_cursor is used for compensating
        // a poor random number generator. One just never knows.
        var x = raudrohi.base.generate_id_cursor++;
        if (x < 0) {
            raudrohi.base.generate_id_cursor = 1;
            x = 1;
        } // if
        var y = raudrohi.core.safe_positive_int;
        var answer = x + '_' + raudrohi.base.rand(0, y) + '_' +
                     raudrohi.base.rand(0, y);
        return answer;
    } catch (err) {
        raudrohi.tmg('da88cc5c-7121-4a3b-92fa-e181b0505dd7', err);
    } // catch
}; // raudrohi.base.generate_id

//------------------------------------------------------------------------


//------------------------------------------------------------------------
// Returns null, if the s_needle does not exist within the
// s_haystack or the s_needle=="" or the s_haystack==0.
// Otherwise returns a raudrohi.core.pair instance that
// consists of 2 strings:
// the part before the first occurrence of the s_needle and
// the part after the first occurrence of the needle string.
// Example # 1:
//         s_haystack=='hi|||there|||everybody'
//         s_needle=='|||'
//         answer.a=='hi'     answer.b=='there|||everybody'
//
// Example # 2:
//         s_haystack=='welcome|||'
//         s_needle=='|||'
//         answer.a=='welcome'     answer.b==''
raudrohi.base.bisect = function (s_haystack, s_needle) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isString(s_haystack, 's_haystack',
                'b56925f4-4240-460e-93fa-e181b0505dd7');
            raudrohi.base.assert_isString(s_needle, 's_needle',
                '9fe31a51-ba46-4ddf-b2fa-e181b0505dd7');
            if (s_needle.length === 0) {
                raudrohi.tmg('4a566073-04b5-4438-aaea-e181b0505dd7',
                    's_needle.length==0');
            }
        } // if
        // For reference:
        // IE8 and Firefox:    ''.indexOf('')==0;
        // IE8 and Firefox:    ''.indexOf('x')==(-1);
        // IE8 and Firefox:    'x'.indexOf('')==0;
        // IE8 and Firefox:    'x'.indexOf('',7)==1;
        // IE8 and Firefox:    ''.indexOf('',7)==0;

        var i_s_needlelen = s_needle.length;
        var ix = s_haystack.indexOf(s_needle);
        if ((ix === (-1)) || (i_s_needlelen === 0)) {
            // Covers also the case, where  i_s_haystacklen < i_s_needlelen
            return null;
        } // if
        var i_s_haystacklen = s_haystack.length;
        if (i_s_haystacklen === 0) {
            return null;
        } // if
        var answer = new raudrohi.core.pair();
        if (ix === 0) {
            answer.a = '';
            if (i_s_needlelen === i_s_haystacklen) {
                answer.b = '';
            } else {
                answer.b = s_haystack.substring(i_s_needlelen);
            } // else
        } // if
        answer.a = s_haystack.substring(0, ix);
        ix = ix + i_s_needlelen;
        if (ix === i_s_haystacklen) {
            answer.b = '';
        } else {
            answer.b = s_haystack.substring(ix);
        } // else
        return answer;
    } catch (err) {
        raudrohi.tmg('6b144211-bd43-41f1-a3ea-e181b0505dd7', err +
                                                             '  s_haystack==' +
                                                             s_haystack +
                                                             '  s_needle==' +
                                                             s_needle);
    } // catch
}; // raudrohi.base.bisect

//------------------------------------------------------------------------
raudrohi.base.private_code.replace_all_globalvars = {}
raudrohi.base.private_code.replace_all_globalvars.inited = false;

raudrohi.base.private_code.replace_all_init_globalvars_if_uninited =
function () {
    try {
        if (raudrohi.base.private_code.replace_all_globalvars.inited === true) {
            return;
        } // if
        // To avoid messing up the global arrays.
        raudrohi.base.private_code.replace_all_globalvars.inited = true;
        var ar_in = [];
        var ar_in_rgx = [];
        var ar_middle = [];
        var ar_middle_rgx = [];
        var ar_out = [];
        var s_prefix = "raUdroh6i_bAsE_pRivAte9_co7de_rePlaCe_aLl_miD8dlevalueprefix_";
        var s_middle = null;

        ar_in.push("[");
        ar_in_rgx.push(new RegExp("[\\[]", "g"));
        s_middle = s_prefix + "LSQUAREBRACE_34";
        ar_middle.push(s_middle);
        ar_middle_rgx.push(new RegExp(s_middle, "g"));
        ar_out.push("[\\[]");

        ar_in.push("]");
        ar_in_rgx.push(new RegExp("[\\]]", "g"));
        s_middle = s_prefix + "RSQUAREBRACE_32";
        ar_middle.push(s_middle);
        ar_middle_rgx.push(new RegExp(s_middle, "g"));
        ar_out.push("[\\]]");

        ar_in.push("+");
        ar_in_rgx.push(new RegExp("[+]", "g"));
        s_middle = s_prefix + "PLUS_";
        ar_middle.push(s_middle);
        ar_middle_rgx.push(new RegExp(s_middle, "g"));
        ar_out.push("[+]");

        ar_in.push("{");
        ar_in_rgx.push(new RegExp("[{]", "g"));
        s_middle = s_prefix + "LCURLYbRACE_4";
        ar_middle.push(s_middle);
        ar_middle_rgx.push(new RegExp(s_middle, "g"));
        ar_out.push("[{]");

        ar_in.push("}");
        ar_in_rgx.push(new RegExp("[}]", "g"));
        s_middle = s_prefix + "RCURLYbRACE_9";
        ar_middle.push(s_middle);
        ar_middle_rgx.push(new RegExp(s_middle, "g"));
        ar_out.push("[}]");

        ar_in.push("*");
        ar_in_rgx.push(new RegExp("[*]", "g"));
        s_middle = s_prefix + "sTAR_99";
        ar_middle.push(s_middle);
        ar_middle_rgx.push(new RegExp(s_middle, "g"));
        ar_out.push("[*]");

        ar_in.push("^");
        ar_in_rgx.push(new RegExp("[\\^]", "g"));
        s_middle = s_prefix + "LINESTArT_24";
        ar_middle.push(s_middle);
        ar_middle_rgx.push(new RegExp(s_middle, "g"));
        ar_out.push("[\\^]");

        ar_in.push("$");
        ar_in_rgx.push(new RegExp("[$]", "g"));
        s_middle = s_prefix + "LInEEND_12";
        ar_middle.push(s_middle);
        ar_middle_rgx.push(new RegExp(s_middle, "g"));
        ar_out.push("[$]");

        ar_in.push("(");
        ar_in_rgx.push(new RegExp("[(]", "g"));
        s_middle = s_prefix + "LBRAcE_37";
        ar_middle.push(s_middle);
        ar_middle_rgx.push(new RegExp(s_middle, "g"));
        ar_out.push("[(]");

        ar_in.push(")");
        ar_in_rgx.push(new RegExp("[)]", "g"));
        s_middle = s_prefix + "RBrACE_23";
        ar_middle.push(s_middle);
        ar_middle_rgx.push(new RegExp(s_middle, "g"));
        ar_out.push("[)]");

        ar_in.push(".");
        ar_in_rgx.push(new RegExp("[.]", "g"));
        s_middle = s_prefix + "POInT_168";
        ar_middle.push(s_middle);
        ar_middle_rgx.push(new RegExp(s_middle, "g"));
        ar_out.push("[.]");

        ar_in.push("-");
        ar_in_rgx.push(new RegExp("[-]", "g"));
        s_middle = s_prefix + "MiNUS_1285";
        ar_middle.push(s_middle);
        ar_middle_rgx.push(new RegExp(s_middle, "g"));
        ar_out.push("[-]");

        // Actually, "|" should be sufficient, but
        // by adding the "|||" before the "|"
        // speeds up ProgFTE and formscript routines.
        var rgx_triplepillar = new RegExp("[|]{3}", "g");
        ar_in.push("|||");
        ar_in_rgx.push(rgx_triplepillar);
        s_middle = s_prefix + "TrIPLEpILlar_9123";
        ar_middle.push(s_middle);
        ar_middle_rgx.push(new RegExp(s_middle, "g"));
        ar_out.push("[|]{3}");
        raudrohi.base.private_code.replace_all_globalvars.rgx_triplepillar =
        rgx_triplepillar;

        ar_in.push("|");
        ar_in_rgx.push(new RegExp("[|]", "g"));
        s_middle = s_prefix + "sinGLEPilLAR_14867";
        ar_middle.push(s_middle);
        ar_middle_rgx.push(new RegExp(s_middle, "g"));
        ar_out.push("[|]");

        raudrohi.base.private_code.replace_all_globalvars.ar_in = ar_in;
        raudrohi.base.private_code.replace_all_globalvars.ar_in_rgx = ar_in_rgx;
        raudrohi.base.private_code.replace_all_globalvars.ar_middle = ar_middle;
        raudrohi.base.private_code.replace_all_globalvars.ar_middle_rgx =
        ar_middle_rgx;
        raudrohi.base.private_code.replace_all_globalvars.ar_out = ar_out;

    } catch (err) {
        raudrohi.tmg('57fb014e-f4a9-445b-a3ea-e181b0505dd7', err);
    } // catch
} // raudrohi.base.private_code.replace_all_init_globalvars
raudrohi.base.private_code.replace_all_init_globalvars_if_uninited();

raudrohi.base.private_code.replace_all_speedhack_for_triplepillar =
function (s_substitution, s_haystack) {
    try {
        var rgx_triplepillar = raudrohi.base.private_code.replace_all_globalvars.rgx_triplepillar;
        var s_out = s_haystack.replace(rgx_triplepillar, s_substitution);
        return s_out;
    } catch (err) {
        raudrohi.tmg('30d7ad24-ef4c-474b-84ea-e181b0505dd7', err);
    } // catch
} // raudrohi.base.private_code.replace_all_speedhack_for_triplepillar

// The reason, why raudrohi.base.gsub exists at
// all is that as of December 2009 the code
// "var a_string='XXX'.replace('X','Z','g');"
//  assigns 'ZZZ' to the a_string in the case of the FireFox,
//  but 'ZXX' in the case of Microsoft Internet Explorer 8.
// The 'g' is a flag that means 'replace ALL'. So, the M$ team
// has done a "great, bugfree, job" again. Congratulations!
raudrohi.base.gsub = function (s_substitution, s_needle, s_haystack) {
    try {
        raudrohi.base.private_code.replace_all_init_globalvars_if_uninited();
        var len_n = s_needle.length;
        if (len_n === 0) {
            // One of the reaasons, why this has been declared to be
            // an illegal case is that it's not so clear, whether
            // the haystack should be considered to be
            // prefixed and suffixed with the ''. Another reason is
            // that it's not such an often used case, so it probably
            // does not bother if the case, where the s_needle==''
            // is declared to be illegal.
            raudrohi.tmg('c28cd696-1d77-4d1c-92ea-e181b0505dd7',
                's_needle.length==0');
        } // if
        var len_h = s_haystack.length;
        if (len_h === 0) {
            return '';
        } // if
        var s_out = null;
        if (len_n === 3) {
            if (s_needle === "|||") {
                s_out =
                raudrohi.base.private_code.replace_all_speedhack_for_triplepillar(
                    s_substitution, s_haystack);
                return s_out;
            } // if
        } // if
        // The following code is based on an idea that
        // originates from
        // http://www.webmasterworld.com/javascript/3484761.htm
        // and is written by a user called Fotiman in a message with an
        // id of #:3485093
        //
        // TODO: refactor it to use the raudrohi.lang.str2regexstr.
        // May be one has to move the htQueue  somewhere else. So, anyway,
        // it'll be some substantial code migration between different
        // namespaces. Currently there's a small mess with this all.

        var ar_in = raudrohi.base.private_code.replace_all_globalvars.ar_in;
        var ar_in_rgx = raudrohi.base.private_code.replace_all_globalvars.ar_in_rgx;
        var ar_middle = raudrohi.base.private_code.replace_all_globalvars.ar_middle;
        var ar_middle_rgx = raudrohi.base.private_code.replace_all_globalvars.ar_middle_rgx;
        var ar_out = raudrohi.base.private_code.replace_all_globalvars.ar_out;

        var ar_replacement_ix = [];

        var i_len = ar_in.length;
        var i = 0;
        var s_needle0 = s_needle;
        var s_needle1 = s_needle;
        var i_s_needle_len0 = s_needle.length;
        var i_s_needle_len1 = i_s_needle_len0;
        var rgx_in = null;
        var s_middle = null;
        for (i = 0; i < i_len; i = i + 1) {
            rgx_in = ar_in_rgx[i];
            s_middle = ar_middle[i];
            s_needle1 = s_needle0.replace(rgx_in, s_middle);
            i_s_needle_len1 = s_needle1.length;
            if (i_s_needle_len1 !== i_s_needle_len0) {
                ar_replacement_ix.push(i);
            } // if
            i_s_needle_len0 = i_s_needle_len1
            s_needle0 = s_needle1;
        } // for
        i = 0;
        i_len = ar_replacement_ix.length;
        var ii = null;
        var rgx_middle = null;
        var s = null;
        for (i = 0; i < i_len; i = i + 1) {
            ii = ar_replacement_ix[i];
            rgx_middle = ar_middle_rgx[ii];
            s = ar_out[ii];
            s_needle1 = s_needle0.replace(rgx_middle, s);
            s_needle0 = s_needle1;
        } // for
        s_out = s_haystack.replace(new RegExp(s_needle0, "g"), s_substitution);
        return s_out;
    } catch (err) {
        raudrohi.tmg('269c1437-2654-48da-b5ea-e181b0505dd7', err +
                                                             '  s_substitution==' +
                                                             s_substitution +
                                                             '  s_needle==' +
                                                             s_needle +
                                                             '  s_haystack==' +
                                                             s_haystack);
    } // catch
} // raudrohi.base.gsub

//------------------------------------------------------------------------
// Returns a string that contains only "\n" as linebreaks.
raudrohi.base.normalize_linebreaks = function (a_string) {
    try {
        raudrohi.base.assert_isString(a_string, 'a_string',
            '43e0d642-b67f-469e-a3ea-e181b0505dd7');
        if (a_string === '') {
            return '';
        } // if
        // A citation from http://en.wikipedia.org/wiki/Newline
        // (visit date: January 2010)
        //
        // The Unicode standard defines a large number of characters that
        // conforming applications should recognize as line terminators: [2]
        //
        //  LF:    Line Feed, U+000A
        //  CR:    Carriage Return, U+000D
        //  CR+LF: CR (U+000D) followed by LF (U+000A)
        //  NEL:   Next Line, U+0085
        //  FF:    Form Feed, U+000C
        //  LS:    Line Separator, U+2028
        //  PS:    Paragraph Separator, U+2029
        var s1 = raudrohi.base.gsub("\n", "\r\n", a_string);
        var s2 = raudrohi.base.gsub("\n", "\r", s1);
        s1 = raudrohi.base.gsub("\n", "\u0085", s2);
        s2 = raudrohi.base.gsub("\n", "\u000C", s1);
        s1 = raudrohi.base.gsub("\n", "\u2028", s2);
        s2 = raudrohi.base.gsub("\n", "\u2029", s1);
        return s2;
    } catch (err) {
        raudrohi.tmg('34e33ab3-0349-47be-a3da-e181b0505dd7', err);
    } // catch
} // raudrohi.base.normalize_linebreaks


// Returns a string that contains only " " as spaces.
raudrohi.base.normalize_whitespaces = function (a_string) {
    try {
        raudrohi.base.assert_isString(a_string, 'a_string',
            '4e5df530-fe1c-494a-94da-e181b0505dd7');
        // Some of the code points and comments as copy-pasted
        // from http://en.wikipedia.org/wiki/Space_(punctuation)
        // in January, 2010:
        //
        // U 0020,  &#32;
        // Normal space, same as ASCII character 0x20
        //
        // U 00A0, 	&nbsp;
        // Identical to U+0020, but not a point at which a line may be broken.
        //
        // U 2002, &ensp;
        // Width of one en (half of one em). U+2000 En Quad is canonically
        // equivalent to this character (En Space is preferred).
        //
        // U 2003, &emsp;
        // Width of one em. U+2001 Em Quad is canonically equivalent to
        // this character (Em Space is preferred).
        //
        // U 2007, 	&#8199;
        // In fonts with monospaced digits, equal to the width of one digit
        //
        // U 200A, &#8202;
        // Thinner than a thin space
        //
        // U 205F, &#8287;
        // Used in mathematical formulae. Four-eighteenths of an em. In
        // mathematical typography, the widths of spaces are usually given in
        // integral multiples of an eighteenth of an em, and 4/18 em may be
        // used in several situations, for example between the a and the + and
        // between the + and the b in the expression a + b.
        //
        // U 3000, &#12288;
        // As wide as a CJK character cell
        //
        var s1 = raudrohi.base.gsub(' ', "\u00A0", a_string);
        var s2 = raudrohi.base.gsub(' ', "\u2002", s1);
        s1 = raudrohi.base.gsub(' ', "\u2003", s2);
        s2 = raudrohi.base.gsub(' ', "\u2007", s1);
        s1 = raudrohi.base.gsub(' ', "\u200A", s2);
        s2 = raudrohi.base.gsub(' ', "\u205F", s1);
        s1 = raudrohi.base.gsub(' ', "\u3000", s2);
        s2 = raudrohi.base.gsub('    ', "\t", s1);
        return s2;
    } catch (err) {
        raudrohi.tmg('0085c12c-c4c1-42e5-91da-e181b0505dd7', err);
    } // catch
} //  raudrohi.base.normalize_whitespaces

// Returns a modified version of the s_haystack.
raudrohi.base.gsubAllLinebreaksSpacesTabs = function (s_haystack) {
    try {
        var s1 = raudrohi.base.normalize_whitespaces(s_haystack);
        var s2 = raudrohi.base.normalize_linebreaks(s1);
        s2 = raudrohi.base.gsub('', ' ', s1);
        s1 = raudrohi.base.gsub('', "\n", s2);
        return s2;
    } catch (err) {
        raudrohi.tmg('11e59b21-daca-449d-aada-e181b0505dd7', err +
                                                             '  s_haystack==' +
                                                             s_haystack);
    } // catch
} // raudrohi.base.gsubAllLinebreaksSpacesTabs

// Applies the raudrohi.base.bisect n times and returns
// an array of the prefix sides of the bisections. If it is
// not possible to bisect the string n times, an exception is thrown.
raudrohi.base.snatchNtimes = function (s_haystack, s_needle, n) {
    try {
        if (n < 1) {
            throw 'n==' + n + '<1';
        } // if
        var modulus = n % 2;
        var a_pair;
        var a_pair1;
        var s_hay = s_haystack;
        var ar = [];
        if (2 <= n) {
            var nn = n;
            if (modulus === 1) {
                nn = nn - 1;
            } // if
            var nnn = nn / 2;
            var i = 0;
            for (i = 0; i < nnn; i++) {
                a_pair = raudrohi.base.bisect(s_hay, s_needle);
                if (a_pair == null) {
                    raudrohi.tmg('6c60cce2-3f8a-47fa-82da-e181b0505dd7',
                        'a_pair==null ' +
                        's_haystack==' + s_haystack +
                        's_needle==' + s_needle + ' n==' + n + ' ');
                } // if
                ar.push(a_pair.a);
                a_pair1 = raudrohi.base.bisect(a_pair.b, s_needle);
                if (a_pair1 == null) {
                    raudrohi.tmg('9b2a0750-99da-447e-a2da-e181b0505dd7',
                        'a_pair1==null ' +
                        's_haystack==' + s_haystack +
                        's_needle==' + s_needle + ' n==' + n + ' ');
                } // if
                ar.push(a_pair1.a);
                s_hay = a_pair1.b;
            } // for
        } // if
        if (modulus === 1) {
            a_pair = raudrohi.base.bisect(s_hay, s_needle);
            if (a_pair == null) {
                raudrohi.tmg('346c1a3e-fbed-474d-847a-e181b0505dd7',
                    'a_pair==null ' +
                    's_haystack==' + s_haystack +
                    's_needle==' + s_needle + ' n==' + n + ' ');
            } // if
            ar.push(a_pair.a);
        } // if
        return ar;
    } catch (err) {
        raudrohi.tmg('1c87cbb4-9e35-424d-b37a-e181b0505dd7', err);
    } // catch
} // raudrohi.base.snatchNtimes

//------------------------------------------------------------------------
// The reason, why it is in the raudrohi.base namespace is that
// this allows one to get setup related configuration from the server.
raudrohi.base.get_var = function (var_name) {
    try {
        raudrohi.base.assert_isString(var_name, 'var_name',
            '8184add4-07c7-4c13-ab7a-e181b0505dd7');
        var x;
        x = document.getElementById('webpage_initiation_data_from_server_' +
                                    var_name);
        if (x === null) {
            raudrohi.adapter.log("get_var: UI text not found.\nid_string==" +
                                 var_name);
        } // if
        return x.innerHTML;
    } catch (err) {
        raudrohi.tmg('28558e52-3f0d-4ed7-876a-e181b0505dd7', err);
    } // catch
}; // raudrohi.base.get_var

//------------------------------------------------------------------------
raudrohi.base.commaseparated_list_2_array = function (a_string) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isString(a_string, 'a_string',
                '187f1f1c-797d-435b-956a-e181b0505dd7');
        }// if
        var ar1 = a_string.split(',')
        var ar = [];
        var len = ar1.length;
        var i = 0;
        var elem;
        for (i = 0; i < len; i++) {
            elem = ar1[i];
            ar.push(raudrohi.adapter.trim(elem));
        } // for
        return ar;
    } catch (err) {
        raudrohi.tmg('4957f2e3-dcf2-4177-916a-e181b0505dd7', err);
    } // catch
} // raudrohi.base.commaseparated_list_2_array

//------------------------------------------------------------------------
// Infinite bitfield, where bits are denoted with their names.
// By default all of the bits are considered to be unset.
raudrohi.base.bitfield_htbased = function () {
    var self_public_ = this;
    try {
        var ht_ = new Hashtable();

        // This is called only, if a call to the set or the unset
        // methods actually changes the state of the bitfield. It's
        // meant to be optionally overridden by application source.
        // By the time this method is called, the value of the new state
        // has already been stored into the bitfield.
        this.toggle_event_handler =
        function (new_state_boolean_value, bitfield_name) {
        }

        // Returns the bit's boolean value.
        this.is_set = function (bit_name_as_a_string) {
            var s_bn = 'b' + bit_name_as_a_string;
            if (ht_.containsKey(s_bn)) {
                var b = ht_.get(s_bn);
                return b;
            } // if
            return false;
        } // is_set

        // Assigns boolean value of True to the bit.
        this.set = function (bit_name_as_a_string) {
            var s_bn = 'b' + bit_name_as_a_string;
            var toggle_occurs = false;
            if (!ht_.containsKey(s_bn)) {
                toggle_occurs = true;
                ht_.put(s_bn, true);
            } // if
            if (toggle_occurs) {
                self_public_.toggle_event_handler(true, bit_name_as_a_string);
            } // if
        } // set

        // Assigns boolean value of True to the bit.
        // Also allows to store data to an attachment space,
        // where each point of the attachment space has a
        // corresponding point in the bitfield space.
        this.set_with_attachment = function (bit_name_as_a_string, attachment) {
            var s_bn = 'b' + bit_name_as_a_string;
            var s_an = 'a' + bit_name_as_a_string;
            ht_.put(s_bn, true);
            ht_.put(s_an, attachment);
        } // set_with_attachment

        // Returns null, if the bit has a value of False.
        this.get_attachment = function (bit_name_as_a_string) {
            var answer = null;
            var s_bn = 'b' + bit_name_as_a_string;
            if (ht_.containsKey(s_bn)) {
                if (ht_.get(s_bn)) {
                    var s_an = 'a' + bit_name_as_a_string;
                    if (ht_.containsKey(s_an)) {
                        answer = ht_.get(s_an);
                    } // if
                } // if
            } // if
            return answer;
        } // get_attachment

        // Assigns boolean value of False to the bit. By default, all
        // of the bits are considered to have a value of False.
        // If the bit has a corresponding attachment, the attachment
        // is deleted.
        this.unset = function (bit_name_as_a_string) {
            var s_bn = 'b' + bit_name_as_a_string;
            var toggle_occurs = false;
            if (ht_.containsKey(s_bn)) {
                toggle_occurs = true;
                ht_.remove(s_bn);
                var s_an = 'a' + bit_name_as_a_string;
                if (ht_.containsKey(s_an)) {
                    ht_.remove(s_an);
                } // if
            } // if
            if (toggle_occurs) {
                self_public_.toggle_event_handler(false, bit_name_as_a_string);
            } // if
        } // unset

        // Assigns a falue of false to all of the bits
        // within the bitfield.
        this.unset_all_bits = function () {
            ht_.clear();
        } // unset_all_bits

    } catch (err) {
        raudrohi.tmg('e5f33064-fe49-45f2-bf6a-e181b0505dd7', err);
    } // catch
} // raudrohi.base.bitfield_htbased

// A much more lightweight version than the
// raudrohi.base.bitfield_htbased. It's only meant to
// indicate machine states and is used at hide/unhide/shut_dow/star_up
// routines. The idea is that if a widget that contains other widgets,
// has only some of its inner widgets visible, then one needs to maintain
// that state also at the hide and unhide operations. Same applies for
// startup and shutdown.
raudrohi.base.widget_state_bitfield = function () {
    this.is_in_state_startup = false; // false stands for shut down state
    this.is_in_state_hidden = false; // true stands for un-hidden state
}// raudrohi.base.widget_state_bitfield


//------------------------------------------------------------------------
// Idea behind the raudrohi.base.HashtableUtilizer is that
// in the case of some "classes", each of the instance has a lot of
// Hashtable instances, which might get even generated dynamically.
// The current version of the Hashtable has been implemented in JavaScript,
// which means that it is an interpreted version and therefore
// probably much slower than the JavaScript languate base structures.
// It also takes some computation to initialize a Hashtable, at least,
// in the case of the interpreted version.
//
// One alternative is to use the JavaScript arrays, which are probably
// implemented as part of the JavaScript core, but lack
// the features that Hashtables have.
//
// Another alternative to the
// dynamic instantiation of a lot of hashtables is to use only a
// single hashtable, but systematically prefix all of the keys with
// some string that corresponds to the Hashtable instance that is being
// "simulated". This is exactly waht the raudrohi.base.HashtableUtilizer
// does and has been created for.
//
// The downside of using the key prefixing is that ther's one
// extra string concatenation per call to the Hashtable routine.
// Another issue is that there has to be one array per
// raudrohi.base.HashtableUtilizer for storing keys, which need
// to be returned for hashtable iteration. The erasing of single
// elements is also slow, namely, linear. But, what regards to the
// keys array, then the original Hashtable implementation also
// needs at least one array for storing keys, so the extra
// array in the raudrohi.base.HashtableUtilizer is probably not that
// bad.
//
// The public interface of the raudrohi.base.HashtableUtilizer roughly
// equals that of the Hashtable, so it's relatively
// easy to switch between the two.
raudrohi.base.HashtableUtilizer = function (prefix_string, a_hashtable) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isString(prefix_string, 'prefix_string',
                '41eb8742-859b-45e0-a56a-e181b0505dd7');
            raudrohi.base.assert_isObject(a_hashtable, 'a_hashtable',
                '9ccd241f-c983-4d5b-926a-e181b0505dd7');
        } // if
        var ht_ = a_hashtable;
        var prefix_string_ = 'n_' + prefix_string + ';throw x;';
        var ar_keys_ = [];

        function get_unsafe_impl(key) {
            return ht_.get(prefix_string_ + key);
        } // get_unsafe_impl

        function get_safe_impl(key) {
            try {
                raudrohi.base.assert_isString(key, 'key',
                    '29f9d094-b04c-4c4d-855a-e181b0505dd7');
                return get_unsafe_impl(key);
            } catch (err) {
                raudrohi.tmg('def0b43a-855d-4807-a45a-e181b0505dd7', err);
            } // catch
        } // get_safe_impl

        this.get = function (key) {
        }; // A stub for IDE.

        function put_unsafe_impl(key, value) {
            var key2 = prefix_string_;
            key2 += key;
            if (!ht_.containsKey(key2)) {
                // The contains check is to avoid duplicates within the
                // ar_keys_. However, one has to be able to overwrite the
                // value within the hashtable.
                ar_keys_.push(key);
            } // if
            ht_.put(key2, value);
        } // get_unsafe_impl

        function put_safe_impl(key, value) {
            try {
                raudrohi.base.assert_isString(key, 'key',
                    '3ceba43f-6290-4fb0-925a-e181b0505dd7');
                put_unsafe_impl(key, value);
            } catch (err) {
                raudrohi.tmg('2d41b5a3-e4a2-4bcd-945a-e181b0505dd7', err);
            } // catch
        } // put_safe_impl

        this.put = function (key, value) {
        }; // A stub for IDE.

        function remove_from_keys(a_key) {
            try {
                var len = ar_keys_.length;
                var ar_new = [];
                var elem;
                for (var i = 0; i < len; i++) {
                    elem = ar_keys_[i];
                    if (elem !== a_key) {
                        ar_new.push(elem);
                    } // if
                } // for
                ar_keys_ = ar_new;
            } catch (err) {
                raudrohi.tmg('2377cd32-8c8e-42e1-945a-e181b0505dd7', err);
            } // catch
        } // remove_from_keys

        function remove_unsafe_impl(key) {
            remove_from_keys(key);
            ht_.remove(prefix_string_ + key);
        } // remove_unsafe_impl

        function remove_safe_impl(key) {
            try {
                raudrohi.base.assert_isString(key, 'key',
                    '1bae9ef5-ff66-44e3-945a-e181b0505dd7');
                remove_unsafe_impl(key);
            } catch (err) {
                raudrohi.tmg('b3ecb021-4170-43aa-944a-e181b0505dd7', err);
            } // catch
        } // remove_safe_impl

        this.remove = function (key) {
        }; // A stub for IDE.

        // Quite inefficient, because one has to look up the
        // individual entries from the utilizable hashtable one by one.
        this.clear = function () {
            try {
                var len = ar_keys_.length;
                var key;
                for (var i = 0; i < len; i++) {
                    key = ar_keys_[i];
                    ht_.remove(prefix_string_ + key);
                } // for
                ar_keys_ = [];
            } catch (err) {
                raudrohi.tmg('85e8b952-31ef-487e-954a-e181b0505dd7', err);
            } // catch
        } // clear

        this.keys = function () {
            return ar_keys_;
        } // clear


        this.size = function () {
            return ar_keys_.length;
        } // clear


        function containsKey_unsafe_impl(key) {
            return ht_.containsKey(prefix_string_ + key);
        } // containsKey_unsafe_impl

        function containsKey_safe_impl(key) {
            try {
                raudrohi.base.assert_isString(key, 'key',
                    '43cae110-766d-49ba-834a-e181b0505dd7');
                return containsKey_unsafe_impl(key);
            } catch (err) {
                raudrohi.tmg('1d5abb23-44f4-409b-834a-e181b0505dd7', err);
            } // catch
        } // containsKey_safe_impl


        if (raudrohi_settings_debug_JavaScript === true) {
            this.get = get_safe_impl;
            this.put = put_safe_impl;
            this.remove = remove_safe_impl;
            this.containsKey = containsKey_safe_impl;
        } else {
            this.get = get_unsafe_impl;
            this.put = put_unsafe_impl;
            this.remove = remove_unsafe_impl;
            this.containsKey = containsKey_unsafe_impl;
        } // else

    } catch (err) {
        raudrohi.tmg('bdc8e759-775c-4892-924a-e181b0505dd7', err);
    } // catch
} // raudrohi.base.HashtableUtilizer

//------------------------------------------------------------------------
// It's for avoiding instantiation of Hashtables in cases, where one
// temporarily needs an empty Hashtable, i.e. hahtable that is cleared.
raudrohi.base.pool_of_hashtables = function () {
    try {
        var self_public_ = this;

        // The size of the pool shouldn't be "too big", because as of 2011 the
        // JavaScript is by default a single-threaded programming
        // language (unless one does not experiment with worker threads or
        // someting like that), and the filling of the pool might
        // create a noticable delay.
        // The setTimeout deay in the get_empty_hashtable() and the
        // pool size have been chosen experimentally so that the
        // pool filling has some "probabilistic" chance of taking place
        // during "idle" time, while not creating "too big" of a delay, if
        // the time frame has been missed.
        var i_pool_max_size_ = 600;
        var pooled_hashtables_ = [];

        var b_poolfilling_order_exists_ = false;
        this.fill_pool = function () {
            try {
                var n_to_add = i_pool_max_size_ - pooled_hashtables_.length;
                var i = 0;
                for (i = 0; i < n_to_add; i++) {
                    pooled_hashtables_.push(new Hashtable());
                } // for
                b_poolfilling_order_exists_ = false;
            } catch (err) {
                raudrohi.tmg('89dc5f5a-e10c-4f24-924a-e181b0505dd7', err);
            } // catch
        } // fill_pool
        self_public_.fill_pool();

        this.get_empty_hashtable = function () {
            try {
                var ht;
                if (200 < pooled_hashtables_.length) { // One hopes to gain some speed from lucky timing.
                    ht = pooled_hashtables_.pop();
                } else {
                    ht = new Hashtable();
                    if (b_poolfilling_order_exists_ === false) {
                        b_poolfilling_order_exists_ = true;
                        setTimeout('raudrohi.base.pool_of_hashtables.fill_pool()',
                            5000);
                    } // if
                } // if
                return ht;
            } catch (err) {
                raudrohi.tmg('8f551835-2692-47ab-813a-e181b0505dd7', err);
            } // catch
        } // get_empty_hashtable

        this.return_used_hashtable = function (a_hashtable) {
            try {
                // As of 2011.05.01 the clearing of the hashtable
                // only wastes cycles, but one just wants to detect
                // "abnormal, extraterrestial, activity".
                a_hashtable.clear();

                // As there's some sort of a weird bug somewhere,
                // I suspect that it's in the browser, then in stead of
                // throwing the hashtable back into the pool like this:
                //
                // if(polhl<60){
                //    ooled_hashtables_.push(a_hashtable);
                // } // if
                //
                // one just lets it to be garbage collected. One hopes
                // that the clearing of the hashtable helps the
                // garbage collector.
            } catch (err) {
                raudrohi.tmg('2f2236f3-672f-49ae-9a3a-e181b0505dd7', err);
            } // catch
        } // return_used_hashtable

        // The return_htOfht dismantles the hashtable of hashtables and
        // inserts the individual hashtables to the pool.
        this.return_htOfht = function (a_hashtable_of_hashtables) {
            try {
                var keys = a_hashtable_of_hashtables.keys();
                var len = keys.length;
                var key;
                var reference_2_ht2;
                for (var i = 0; i < len; i++) {
                    key = keys[i];
                    reference_2_ht2 = a_hashtable_of_hashtables.get(key);
                    self_public_.return_used_hashtable(reference_2_ht2);
                } // for
                self_public_.return_used_hashtable(a_hashtable_of_hashtables);
            } catch (err) {
                raudrohi.tmg('d22e5e61-4357-4fbd-b33a-e181b0505dd7', err);
            } // catch
        } // return_htOfht

    } catch (err) {
        raudrohi.tmg('4a6adb3b-2dbe-423a-a13a-e181b0505dd7', err);
    } // catch
} // raudrohi.base.pool_of_hashtables
raudrohi.base.pool_of_hashtables = new raudrohi.base.pool_of_hashtables();

//------------------------------------------------------------------------
// Creates a clone of the a_hashtable. The clone instance is taken
// from the raudrohi.base.pool_of_hashtables. The values
// of the a_hashtable are passed by reference, i.e. the values are
// not cloned.
raudrohi.base.clone_hashtable = function (a_hashtable) {
    try {
        raudrohi.base.assert_isObject(a_hashtable, 'a_hashtable',
            '49de8955-a681-46d6-af3a-e181b0505dd7');
        var ht_clone = raudrohi.base.pool_of_hashtables.get_empty_hashtable();
        var keys = a_hashtable.keys();
        var len = keys.length;
        var key;
        var reference_to_the_value;
        for (var i = 0; i < len; i++) {
            key = keys[i];
            reference_to_the_value = a_hashtable.get(key);
            ht_clone.put(key, reference_to_the_value);
        } // for
        return ht_clone;
    } catch (err) {
        raudrohi.tmg('5f9ed715-a3c5-45a6-a53a-e181b0505dd7', err);
    } // catch
} // raudrohi.base.clone_hashtable


//------------------------------------------------------------------------
raudrohi.base.setA_minus_setB_ar =
function (set_A_elements_array, set_B_elements_array) {
    try {
        var ht = raudrohi.base.pool_of_hashtables.get_empty_hashtable();
        var len = set_B_elements_array.length;
        var i = 0;
        var elem;
        for (i = 0; i < len; i++) {
            elem = set_B_elements_array[i];
            ht.put(elem, 42)
        } // for
        var answer = [];
        len = set_A_elements_array.length;
        i = 0;
        for (i = 0; i < len; i++) {
            elem = set_A_elements_array[i];
            if (!ht.containsKey(elem)) {
                answer.push(elem);
            } // if
        } // for
        raudrohi.base.pool_of_hashtables.return_used_hashtable(ht);
        return answer;
    } catch (err) {
        raudrohi.tmg('36f8e333-dfc5-446d-a32a-e181b0505dd7', err);
    } // catch
} // raudrohi.base.setA_minus_setB_ar

// http://mathworld.wolfram.com/Intersection.html
raudrohi.base.intersection_of_sets =
function (set_A_elements_array, set_B_elements_array) {
    try {
        var ht = raudrohi.base.pool_of_hashtables.get_empty_hashtable();
        var len = set_B_elements_array.length;
        var i = 0;
        var elem;
        for (i = 0; i < len; i++) {
            elem = set_B_elements_array[i];
            ht.put(elem, 42)
        } // for
        var answer = [];
        len = set_A_elements_array.length;
        i = 0;
        for (i = 0; i < len; i++) {
            elem = set_A_elements_array[i];
            if (ht.containsKey(elem)) {
                answer.push(elem);
            } // if
        } // for
        raudrohi.base.pool_of_hashtables.return_used_hashtable(ht);
        return answer;
    } catch (err) {
        raudrohi.tmg('1de82a92-3312-4167-ae2a-e181b0505dd7', err);
    } // catch
} // raudrohi.base.intersection_of_sets

//------------------------------------------------------------------------
// The main use of the raudrohi.base.state_switcher_t1 is in
// building graphical user interfaces. It implements the "bookkeeping"
// part of the state machine.
//
// In this particular case, the model is that the states, which
// can also be denoted as vertices, have a default entry function and a default
// exit function. However, transitions, which can be denoted as directed
// edges in the graph theory's point of view
// (http://mathworld.wolfram.com/DirectedGraph.html ), can be explicitly
// specified by assigning one function to a transition. The transition
// functions override the default exit and entry functions, i.e. if a
// transition has been specified, the default entry and exit functions are
// not called.
//
// An example:
//     Let, A,B,C,D,E be vertices and
//     enterA() and exitA() vertex A default entry and exit functions,
//     enterB() and exitB() vertex B default entry and exit functions,
//     enterC() and exitC() vertex C default entry and exit functions.
//     Vertex D does not have its default exit function defined, but
//     enterD() has been defined as vertex D default entry function.
//     Vertex E does not have any default functions associated with it.
//
//     In addition, a transition from vertex B to vertex C has been
//     associated with function transB2C(), and a transition from
//     vertex A to vertex E has been associated with function transA2E().
//     A transition from vertex D to vertex E has been
//     associated with function transD2E().
//
//     The following describes the functions that get called for the given
//     transitions:
//
//     From A to B:  exitA(), enterB()
//     From B to C:  transB2C()
//     From B to D:  exitB(), enterD()
//     From A to C:  exitA(), enterC()
//     From A to E:  transA2E()
//
//     From B to E:  Transition is not possible, because vertex E does not
//                   have a default entry function, nor is there a
//                   function declared for that transition.
//
//     From D to A:  Transition is not possible, because vertex D is
//                   missing a default exit function, nor is there a
//                   function declared for that transition.
//
//     From D to E:  transD2E()
//
// In the case of the raudrohi.base.state_switcher_t1, there is one
// vertex defined by default. It's called 'zero'. The vertex 'zero'
// has also stub exit and entry functions defined by default.
// Right after initialization, the state machine is in state 'zero'.
//
// None of the transition, nor the default functions, can be overriden,
// redefined, and it actually serves a purpose in the case of the
// state 'zero'. That way all of the other states are obligated to
// instantiate and clear up their resources, set their own, internal,
// "substates", to a proper order.
//
// Another, architectually very influencial, thing within the
// raudrohi.base.state_switcher_t1 is a concept of state(==vertex)
// clusters (vertex set subsets). It is also possible to define
// entry and exit functions for clusters,
// but their declaration is optional.
//
//--------------------------UDPATE-START-------------------------------
// The current implementation is BUGGY from logic point of veiew.
// It tries to support clusters as if it were a true set, i.e. a
// single vertex can be part of multiple clusters, but in practice,
// a limitation that each vertex can be part of at most one cluster,
// is NECESSARY, VERY USEFUL, because then that single cluster can be
// tested against and it also simplifies the implementation. Also,
// if every vertex is part of at most one cluster, then there is no
// issue of the order of the cluster exit/entry/transition funcions and
// the order of functions that get executed duering a transition from
// one cluster to anohter, can be determined and counted on. In practice
// it has also turned out that there is no need for a state to belong
// to multiple clusters at once.
//
// The current implementation is also buggy in a way that it does not
// execute cluster entry functions, if a state transaction takes place
// from non-clustered vertex to a clustered vertex.
//--------------------------UDPATE-END---------------------------------
//
raudrohi.base.state_switcher_t1 = function () {
    var self_public_ = this;
    try {
        var initial_state_ = 'zero';
        var previous_state_ = null;

        this.current_state_ = initial_state_; // to be refactored out
        this.get_current_state = function () {
            return '' + self_public_.current_state_;
        } // get_current_state

        var state_switch_count_ = 0;
        this.get_state_switch_count = function () {
            return state_switch_count_;
        } // get_state_switch_count

        // The increment_state_switch_count() is  useful for
        // simulating state switch events. For example, if
        // a parent widget changes state then by simulating
        // a state change in the subwidget, one can
        // dismiss the data that the subwidget requested before the
        // parent widget's state change, but which arrives to
        // the sub widget after the parent widgat's state change.
        this.increment_state_switch_count = function () {
            state_switch_count_++;
        } // get_state_switch_count

        // Returns a boolean value.
        this.state_exists = function (state_name) {
            try {
                raudrohi.base.assert_isString(state_name,
                    'state_name', '65b8c547-de5f-4744-912a-e181b0505dd7');
                var answer = ht_default_entry_funcs_.containsKey(state_name);
                return answer;
            } catch (err) {
                raudrohi.tmg('8246be06-4ce9-4fc4-bd2a-e181b0505dd7', err);
            } // catch
        } // state_exists

        var ht_ = new Hashtable();
        var ht_transition_funcs_ = new raudrohi.base.HashtableUtilizer(
            'trans', ht_);

        // The s_funcsepar_ should, if possible, have some value that
        // can not be part of a JavaScript function name.
        var s_funcsepar_ = ';throw "x";';
        var ht_default_entry_funcs_ = new raudrohi.base.HashtableUtilizer(
            'entry', ht_);
        var ht_default_exit_funcs_ = new raudrohi.base.HashtableUtilizer(
            'exit', ht_);

        var ht_vertex_2_clusters_ = new raudrohi.base.HashtableUtilizer(
            'v2cl', ht_);
        var ht_cluster_2_vertices_ = new raudrohi.base.HashtableUtilizer(
            'cl2v', ht_);

        var ht_genc_ = 0;

        function create_hashtable() {
            ht_genc_++;
            var ht = new raudrohi.base.HashtableUtilizer('aght' + ht_genc_,
                ht_);
            return ht;
        } // create_hashtable


        // If the machine state changes to the 'zero', the
        // subwidget's chage_state_2('zero') methods are also called.
        var ar_subwidgets_ = [];
        this.register_subwidget = function (a_subwidget_instance) {
            try {
                raudrohi.base.assert_isObject(a_subwidget_instance,
                    'a_subwidget_instance',
                    '286c743a-2a75-4d00-822a-e181b0505dd7');
                ar_subwidgets_.push(a_subwidget_instance);
            } catch (err) {
                raudrohi.tmg('40f7a07f-bc2f-4814-931a-e181b0505dd7', err);
            } // catch
        } // register_subwidget

        this.unregister_all_subwidgets = function () {
            try {
                ar_subwidgets_ = [];
            } catch (err) {
                raudrohi.tmg('03a5c533-d846-48a7-821a-e181b0505dd7', err);
            } // catch
        } // unregister_all_subwidgets

        var ht_cluster_entry_funcs_ = null;
        this.declare_cluster_entry_func =
        function (destination_cluster_name, a_function) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(
                        destination_cluster_name, 'destination_cluster_name',
                        'c2005412-8683-43a5-811a-e181b0505dd7');
                    raudrohi.base.assert_isFunction(a_function, 'a_function',
                        '6abb6d36-854a-465f-a31a-e181b0505dd7');
                } // if
                if (ht_cluster_entry_funcs_ === null) {
                    ht_cluster_entry_funcs_ = create_hashtable();
                } // if
                ht_cluster_entry_funcs_.put(destination_cluster_name,
                    a_function);
            } catch (err) {
                raudrohi.tmg('90c5f125-57f9-4252-951a-e181b0505dd7', err);
            } // catch
        } // declare_cluster_entry_func

        var ht_cluster_exit_funcs_ = null;
        this.declare_cluster_exit_func =
        function (origin_cluster_name, a_function) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(
                        origin_cluster_name, 'origin_cluster_name',
                        '75639df3-c4a3-42d8-b21a-e181b0505dd7');
                    raudrohi.base.assert_isFunction(a_function, 'a_function',
                        '18390ad1-bc5f-42a6-a50a-e181b0505dd7');
                } // if
                if (ht_cluster_exit_funcs_ === null) {
                    ht_cluster_exit_funcs_ = create_hashtable();
                } // if
                ht_cluster_exit_funcs_.put(origin_cluster_name, a_function);
            } catch (err) {
                raudrohi.tmg('3aac4819-44a6-454f-950a-e181b0505dd7', err);
            } // catch
        } // declare_cluster_exit_func

        this.declare_state_transition_func =
        function (destination_state_name, origin_state_name,
            state_transition_function) {
            if (raudrohi_settings_debug_JavaScript === true) {
                raudrohi.base.assert_isString(destination_state_name,
                    'destination_state_name',
                    'b816733e-2720-4e7d-940a-e181b0505dd7');
                raudrohi.base.assert_isString(origin_state_name,
                    'origin_state_name',
                    '27f15d2d-1d29-4aac-b20a-e181b0505dd7');
                raudrohi.base.assert_isFunction(
                    state_transition_function,
                    'state_transition_function',
                    '46ee71f4-1863-49b4-a50a-e181b0505dd7');
                var s_tmp = destination_state_name + s_funcsepar_ +
                            origin_state_name;
                if (ht_transition_funcs_.containsKey(s_tmp)) {
                    raudrohi.tmg('47f618b4-6daa-4954-a20a-e181b0505dd7',
                        'State transition from state "' + origin_state_name +
                        '" to state "' + destination_state_name +
                        '" has been declare ' +
                        'more than once. It does not make sense to declare ' +
                        'state transitions more than once, as the subsequent ' +
                        'declarations would logically override eachother.');
                } // if
            } // if
            var s_trans = destination_state_name + s_funcsepar_ +
                          origin_state_name;
            ht_transition_funcs_.put(s_trans, state_transition_function);
        } // declare_state_transition_func

        this.declare_state_default_entry_func =
        function (destination_state_name, a_function) {
            if (raudrohi_settings_debug_JavaScript === true) {
                raudrohi.base.assert_isString(destination_state_name,
                    'destination_state_name',
                    '6dc84c31-a6a1-4413-b1f9-e181b0505dd7');
                raudrohi.base.assert_isFunction(a_function, 'a_function',
                    '16829d55-ded8-4893-92f9-e181b0505dd7');
            }// if
            ht_default_entry_funcs_.put(destination_state_name, a_function);
        } // declare_state_default_entry_func

        this.declare_state_default_exit_func =
        function (origin_state_name, a_function) {
            if (raudrohi_settings_debug_JavaScript === true) {
                raudrohi.base.assert_isString(origin_state_name,
                    'origin_state_name',
                    '6a297114-2095-4ec8-a5f9-e181b0505dd7');
                raudrohi.base.assert_isFunction(a_function, 'a_function',
                    'b6903d58-7d15-43fa-85f9-e181b0505dd7');
            }// if
            ht_default_exit_funcs_.put(origin_state_name, a_function);
        } // declare_state_default_exit_func

        self_public_.declare_state_default_entry_func(initial_state_,
            function () {
            });
        self_public_.declare_state_default_exit_func(initial_state_,
            function () {
            });

        // The add_cluster_2_vertex_list_of_clusters
        // exists for the 'zero', which belongs to all clusters at once.
        //
        // TODO: That's a stupidity here. Each of the vertices, except
        // zero, should belong to at most one cluster, because that allowes
        // to determine a proper order of cluster entry and exit functions.
        // Refactor it out, because this multiple-cluster incclusion feature
        // is never used in practice, but it does prevent an implementation
        // of a practical feature.
        function add_cluster_2_vertex_list_of_clusters(vertex_name,
            cluster_name) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(cluster_name, 'cluster_name',
                        'efc3d056-a7d6-46f8-92f9-e181b0505dd7');
                    raudrohi.base.assert_isString(vertex_name, 'vertex_name',
                        'd32baf18-5ed3-4294-95e9-e181b0505dd7');
                }// if
                var ht_clusters;
                if (ht_vertex_2_clusters_.containsKey(vertex_name)) {
                    ht_clusters = ht_vertex_2_clusters_.get(vertex_name);
                } else {
                    ht_clusters = create_hashtable();
                } // else
                ht_clusters.put(cluster_name, 42);
                ht_vertex_2_clusters_.put(vertex_name, ht_clusters);
            } catch (err) {
                raudrohi.tmg('e2565f28-ff3d-4c61-a5e9-e181b0505dd7', err);
            } // catch
        } // add_cluster_2_vertex_list_of_clusters

        function add_vertex_2_clusters_list_of_vertices(vertex_name,
            cluster_name) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(cluster_name, 'cluster_name',
                        '6591a62d-1a37-43f3-b3e9-e181b0505dd7');
                    raudrohi.base.assert_isString(vertex_name, 'vertex_name',
                        'a1ea766d-d97a-412e-84e9-e181b0505dd7');
                }// if
                var ht_vertices;
                if (ht_cluster_2_vertices_.containsKey(cluster_name)) {
                    ht_vertices = ht_cluster_2_vertices_.get(cluster_name);
                } else {
                    ht_vertices = create_hashtable();
                } // else
                ht_vertices.put(vertex_name, 42);
                ht_vertices.put('zero', 42);
                ht_cluster_2_vertices_.put(cluster_name, ht_vertices);
            } catch (err) {
                raudrohi.tmg('ba8f5b45-d240-4e96-82e9-e181b0505dd7', err);
            } // catch
        } // add_vertex_2_clusters_list_of_vertices


        this.declare_state_2_be_in_cluster =
        function (cluster_name, vertex_name) {
            if (raudrohi_settings_debug_JavaScript === true) {
                raudrohi.base.assert_isString(cluster_name, 'cluster_name',
                    'd5e1041f-20e3-472d-8fd9-e181b0505dd7');
                raudrohi.base.assert_isString(vertex_name, 'vertex_name',
                    'f48d644d-52f1-438e-85d9-e181b0505dd7');
                if (ht_vertex_2_clusters_.containsKey(vertex_name)) {
                    var ht_cln = ht_vertex_2_clusters_.get(vertex_name);
                    var ar = ht_cln.keys();
                    if (ht_cln !== cluster_name) {
                        raudrohi.tmg('2b6d54e5-e696-4238-94d9-e181b0505dd7',
                            ' Vertex "' + vertex_name + '" is present in ' +
                            'cluster "' + ar[0] + '", while a request is ' +
                            'made to place it to cluster "' + cluster_name +
                            '".');
                    } // if
                } // if
                if (vertex_name === 'zero') {
                    raudrohi.tmg('1d724da7-f036-420d-a1d9-e181b0505dd7',
                        'There\'s no point of inserting the state "zero" ' +
                        'to cluster "' + cluster_name +
                        '", because by default ' +
                        'the "zero" s present in every cluster.');
                } // if
            }// if
            try {
                add_cluster_2_vertex_list_of_clusters(vertex_name,
                    cluster_name);
                add_cluster_2_vertex_list_of_clusters('zero', cluster_name);
                add_vertex_2_clusters_list_of_vertices(vertex_name,
                    cluster_name);
            } catch (err) {
                raudrohi.tmg('a6d4af2f-217b-4aa7-83d9-e181b0505dd7', err);
            } // catch
        } // declare_state_2_be_in_cluster

        function get_names_of_zeroables(destination_vertex_name,
            origin_vertex_name) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(destination_vertex_name,
                        'destination_vertex_name',
                        '8b8f1829-fbdd-4801-b3c9-e181b0505dd7');
                    raudrohi.base.assert_isString(origin_vertex_name,
                        'origin_vertex_name',
                        '16f265d2-e990-43df-a8c9-e181b0505dd7');
                    if (!ht_vertex_2_clusters_.containsKey(origin_vertex_name)) {
                        raudrohi.tmg('eceb2819-3235-4140-b2c9-e181b0505dd7',
                            'origin_vertex_name(==' + origin_vertex_name +
                            ') is missing from the graph.');
                    } // if
                    if (!ht_vertex_2_clusters_.containsKey(destination_vertex_name)) {
                        raudrohi.tmg('3a499928-b94b-4593-82c9-e181b0505dd7',
                            'destination_vertex_name(==' +
                            destination_vertex_name +
                            ') is missing from the graph.');
                    } // if
                    if (origin_vertex_name === destination_vertex_name) {
                        raudrohi.tmg('aedb2596-a1bf-43c2-a3c9-e181b0505dd7',
                            'origin_vertex_name==destination_vertex_name=="' +
                            origin_vertex_name + '"');
                    } // if
                } // if
                var ar_zeroables = [];
                if (origin_vertex_name === 'zero') {
                    return ar_zeroables;
                } // if
                var orig_ht_clusters = ht_vertex_2_clusters_.get(
                    origin_vertex_name);
                var dest_ht_clusters = ht_vertex_2_clusters_.get(
                    destination_vertex_name);
                var orig_ar_cl_keys = orig_ht_clusters.keys();
                var dest_ar_cl_keys = orig_ht_clusters.keys();
                var clusters2scan = raudrohi.base.setA_minus_setB_ar(
                    orig_ar_cl_keys, dest_ar_cl_keys)
                var len = clusters2scan.length;
                var i = 0;
                var cluster_name;
                var ii;
                var len2;
                var ht_cl_vertices;
                var ar_cl_vertices;
                var cl_vertex_name;
                for (i = 0; i < len; i++) {
                    cluster_name = clusters2scan[i];
                    ht_cl_vertices = ht_cluster_2_vertices_.get(cluster_name)
                    ar_cl_vertices = ht_cl_vertices.keys();
                    len2 = ar_cl_vertices.length;
                    ii = 0;
                    for (ii = 0; ii < len2; ii++) {
                        cl_vertex_name = ar_cl_vertices[ii];
                        if ((origin_vertex_name !== cl_vertex_name) &&
                            (cl_vertex_name !== 'zero')) {
                            ar_zeroables.push(cl_vertex_name);
                        } // if
                    } // for
                } // for
                return ar_zeroables;
            } catch (err) {
                raudrohi.tmg('ed29766b-f5bd-4088-8369-e181b0505dd7', err);
            } // catch
        } // get_names_of_zeroables


        function execute_edge(destination_vertex_name, origin_vertex_name) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(destination_vertex_name,
                        'destination_vertex_name',
                        '523b7323-3f94-4f08-8169-e181b0505dd7');
                    raudrohi.base.assert_isString(origin_vertex_name,
                        'origin_vertex_name',
                        '21149f97-bebe-4080-9459-e181b0505dd7');
                    var s_tmp = destination_vertex_name + s_funcsepar_ +
                                origin_vertex_name;
                    if (!ht_transition_funcs_.containsKey(s_tmp)) {
                        if (!ht_default_exit_funcs_.containsKey(origin_vertex_name)) {
                            throw 'Transition from state "' +
                                  origin_vertex_name + '" to state "' +
                                  destination_vertex_name + '" has not been ' +
                                  'explicitly specified and there\'s no ' +
                                  'default exit function specified for the ' +
                                  'state "' + origin_vertex_name + '".';
                        } // if
                        if (!ht_default_entry_funcs_.containsKey(destination_vertex_name)) {
                            throw 'Transition from state "' +
                                  origin_vertex_name + '" to state "' +
                                  destination_vertex_name + '" has not been ' +
                                  'explicitly specified and there\'s no ' +
                                  'default entry function specified for the ' +
                                  'state "' + destination_vertex_name + '".';
                        } // if
                    } // if
                } // if
                if (destination_vertex_name === origin_vertex_name) {
                    return;
                } // if
                try {
                    // Code that uses the state_switch_count_ depends
                    // on a fact that the state_switch_count_ is
                    // incremented before the call to the edge/default
                    // entry/exit execution.
                    state_switch_count_++;
                    var s_trans = destination_vertex_name + s_funcsepar_ +
                                  origin_vertex_name;
                    var a_func;
                    if (ht_transition_funcs_.containsKey(s_trans)) {
                        a_func = ht_transition_funcs_.get(s_trans);
                        a_func();
                        return;
                    } // if
                    a_func = ht_default_exit_funcs_.get(origin_vertex_name);
                    a_func();
                    a_func =
                    ht_default_entry_funcs_.get(destination_vertex_name);
                    a_func();
                    //				raudrohi.adapter.log('mutt orig=='+origin_vertex_name+
                    //					' dest=='+destination_vertex_name);
                } catch (err) {
                    raudrohi.tmg('8aeef535-65f1-4223-8159-e181b0505dd7',
                        "origin_vertex_name==" + origin_vertex_name +
                        "  destination_vertex_name==" +
                        destination_vertex_name + "  " + err);
                } // catch
            } catch (err) {
                raudrohi.tmg('41e55f13-0eba-49ec-8159-e181b0505dd7', err);
            } // catch
        }// execute_edge

        function vertex2FirstCluster(vertex_name) {
            try {
                raudrohi.base.assert_isString(vertex_name, 'vertex_name',
                    '28af5b49-c2e2-4d33-8559-e181b0505dd7');
                var ht_clusters = ht_vertex_2_clusters_.get(vertex_name);
                var ar_cluster_names = ht_clusters.keys();
                return ar_cluster_names[0];
            } catch (err) {
                raudrohi.tmg('3a4a1236-a39a-4292-9349-e181b0505dd7', err);
            } // catch
        } // vertex2FirstCluster

        var change_state_2_in_progress_ = false;
        var queued_jump_destination_ = null;

        function change_state_2_queue_handling() {
            try {
                if (queued_jump_destination_ !== null) {
                    var queued_jump_destination = '' + queued_jump_destination_;
                    queued_jump_destination_ = null;
                    change_state_2_in_progress_ = false;
                    self_public_.change_state_2(queued_jump_destination);
                } // if
                change_state_2_in_progress_ = false;
            } catch (err) {
                raudrohi.tmg('3e0ee123-6d61-4411-9349-e181b0505dd7', err);
            } // catch
        } // change_state_2_queue_handling

        this.change_state_2 = function (destination_state_name) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(destination_state_name,
                        'destination_state_name',
                        '33a8e840-dc19-49a8-b149-e181b0505dd7');
                    // All of the relevant verification also takes
                    // part in the method execute_edge
                } // if
                if (change_state_2_in_progress_ === true) {
                    var b_crash = true;
                    if (raudrohi_settings_debug_JavaScript !== true) {
                        // The content of this if-clause is a
                        // dirty way to probabilistically increase
                        // the tread-safetiness of the client code.
                        // The lack of proper sleep function and
                        // hence threading in JavaScript is
                        // just plain depressing.
                        var i = 0;
                        var n = 500;
                        while (i < n) {
                            raudrohi.core.burnCPUcycles(2);
                            if (change_state_2_in_progress_ === false) {
                                b_crash = false;
                                i = 2 * n;
                            } // if
                            i = i + 1;
                        } // while
                    } // if
                    if (b_crash === true) {
                        if (queued_jump_destination_ === null) {
                            queued_jump_destination_ = destination_state_name;
                            return;
                        } // if
                        raudrohi.adapter.log('Warning: ' +
                                             'GUID==16a1ee2c-258d-4070-81a1-00a755b4e179 ' +
                                             'State "' +
                                             queued_jump_destination_ +
                                             '" is in ' +
                                             'the queue and the change_state_2(...) is still ' +
                                             'executing, but a new state jump request (=="' +
                                             destination_state_name +
                                             '") came in.' +
                                             ' In order to avoid possible brancings within ' +
                                             'the state path, the maximum queue length ' +
                                             'has been defined to 1.');
                    } // if
                } // if
                change_state_2_in_progress_ = true;
                var origin_vertex_name = self_public_.current_state_;
                if (destination_state_name === origin_vertex_name) {
                    change_state_2_queue_handling();
                    return;
                } // if
                var ar_zeroables = get_names_of_zeroables(destination_state_name,
                    origin_vertex_name);
                var len = ar_zeroables.length;
                var i = 0;
                var zeroable_state_name;
                for (i = 0; i < len; i++) {
                    zeroable_state_name = ar_zeroables[i];
                    execute_edge('zero', zeroable_state_name);
                } // for
                if (destination_state_name === 'zero') {
                    var ar_keys_tmp1_len = ar_subwidgets_.length;
                    var a_subwidget;
                    for (i = 0; i < ar_keys_tmp1_len; i++) {
                        a_subwidget = ar_subwidgets_[i];
                        a_subwidget.state_switcher_.change_state_2('zero');
                    } // for
                } // if
                execute_edge(destination_state_name,
                    self_public_.current_state_);
                var origin_cluster_name = vertex2FirstCluster(origin_vertex_name);
                var destination_cluster_name = vertex2FirstCluster(
                    destination_state_name);
                //				raudrohi.adapter.log('orig=='+origin_cluster_name +
                //					'  dest=='+destination_cluster_name+'  orig_vx=='+
                //					origin_vertex_name+'  dest_vx=='+destination_state_name);
                if (destination_cluster_name !== origin_cluster_name) {
                    var a_func;
                    if (ht_cluster_exit_funcs_ !== null) {
                        if (ht_cluster_exit_funcs_.containsKey(origin_cluster_name)) {
                            a_func =
                            ht_cluster_exit_funcs_.get(origin_cluster_name);
                            a_func();
                        } // if
                    } // if
                    if (ht_cluster_entry_funcs_ !== null) {
                        if (ht_cluster_entry_funcs_.containsKey(destination_cluster_name)) {
                            a_func = ht_cluster_entry_funcs_.get(
                                destination_cluster_name);
                            a_func();
                        } // if
                    } // if
                } // if
                previous_state_ = self_public_.current_state_;
                self_public_.current_state_ = destination_state_name;
                change_state_2_queue_handling()
            } catch (err) {
                raudrohi.tmg('17092b05-750f-4337-8439-e181b0505dd7',
                    err + '  ');
            } // catch
        }// change_state_2

        this.clear_declarations = function (new_initial_state) {
            try {
                raudrohi.base.assert_isString(new_initial_state,
                    'new_initial_state',
                    '7e35b538-db17-4a61-9139-e181b0505dd7');
                ht_default_exit_funcs_.clear();
                ht_default_entry_funcs_.clear();
                ht_transition_funcs_.clear();
                self_public_.current_state_ = new_initial_state;
            } catch (err) {
                raudrohi.tmg('f3cf445e-615b-4ec9-b539-e181b0505dd7', err);
            } // catch
        } // clear_declarations

    } catch (err) {
        raudrohi.tmg('528f82f5-aa8d-4ee6-9139-e181b0505dd7', err);
    } // catch
} // raudrohi.base.state_switcher_t1

//------------------------------------------------------------------------
// This method has been Copy-Pasted from
// http://www.bytemycode.com/snippets/snippet/400/
// in December 2009.
raudrohi.base.reverse_string = function (a_string) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isString(a_string, 'a_string',
                '51bbf9b5-2417-45c1-a329-e181b0505dd7');
        } // if
        if (a_string === '') {
            return '';
        } // if
        var splitext = a_string.split("");
        var revertext = splitext.reverse();
        var reversed = revertext.join("");
        return reversed;
    } catch (err) {
        raudrohi.tmg('c3fe5eef-fdbb-4602-9129-e181b0505dd7', err +
                                                             '  a_string==' +
                                                             a_string);
    } // catch
} // raudrohi.base.reverse_string
//------------------------------------------------------------------------
raudrohi.base.count_substrings = function (s_haystack, s_needle) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isString(s_haystack, 's_haystack',
                'f9c2401a-4f86-40f0-9429-e181b0505dd7');
            raudrohi.base.assert_isString(s_needle, 's_needle',
                '329f302a-81d0-4db1-b229-e181b0505dd7');
        } // if
        var len_needle = s_needle.length;
        var len0 = s_haystack.length;
        var s = raudrohi.base.gsub('', s_needle, s_haystack);
        var len1 = s.length;
        var len_diff = len0 - len1;
        var n = len_diff / len_needle;
        return n;
    } catch (err) {
        raudrohi.tmg('24f4035d-1a39-46f7-9119-e181b0505dd7', err);
    } // catch
} // raudrohi.base.count_substrings

//------------------------------------------------------------------------
raudrohi.base.regex_has_a_match = function (rgx, s_haystack) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            // The check fails for Google Chrome. For
            // some reason regexes are not objects for the
            // Google Chrome.
            // TODO: fix it.
            //raudrohi.base.assert_isObject(rgx,
            //	'rgx','5229fc18-6adf-4cef-9319-e181b0505dd7');
            raudrohi.base.assert_isString(s_haystack, 's_haystack',
                '4c597a24-e61e-4636-b419-e181b0505dd7');
        } // if
        var b_out = false;
        var s = s_haystack.replace(rgx, "");
        if (s.length !== s_haystack.length) {
            b_out = true;
        } // if
        return b_out;
    } catch (err) {
        raudrohi.tmg('fbf29133-2c69-4c68-a519-e181b0505dd7', err);
    } // catch
} // raudrohi.base.regex_has_a_match

//------------------------------------------------------------------------

// For a case like "42wow.73"
raudrohi.base.private_code.string2float_regex1 =
new RegExp("[^\\d.\\-+,]", "g");
// For a case like "42...5"
raudrohi.base.private_code.string2float_regex2 =
new RegExp("[.\\-+,][.\\-+,]+", "g");
// For a case like "42.5.7" but it must let through "-5.4"
raudrohi.base.private_code.string2float_regex3 =
new RegExp("[.,][\\d]+[.,]", "g");
// For a case like "42.4+7"
raudrohi.base.private_code.string2float_regex4 =
new RegExp("[\\d.,]+[\\-+]", "g");

// Returns raudrohi.core.triple, where
// a_triple.a==false,  if the interpretation of the field
// content as float succeeded and a_triple.a==true, if
// the interpretation failed.
// If the operation succeeded, the a_triple.b is assigned
// a float value. Otherwise it is assigned null.
// If the a_string has a string value that depicts a whole number,
// then the whole number is converted to a floating point number.
//
// If the a_string is an empty string after trimming, then
// the operation is considered to be failed, i.e. a_triple.a===true,
// and the a_triple.c===true. If the a_string is not empty,
// regardless of the operation success/failure, the a_triple.c===false.
//
// A comma is interpreted as a point.
raudrohi.base.private_code.string2float = function (s_haystack) {
    try {
        var s_preprocessed = null;
        var s1 = null;
        var b = null;
        var rgx = null;
        s_preprocessed =
        raudrohi.base.gsubAllLinebreaksSpacesTabs(s_haystack);
        s1 = raudrohi.base.gsub('.', ',', s_preprocessed);
        s_preprocessed = raudrohi.adapter.trim(s1);
        var a_triple = new raudrohi.core.triple();
        a_triple.c = false;
        if (s_preprocessed === "") {
            a_triple.a = true;
            a_triple.b = null;
            a_triple.c = true;
            return a_triple;
        } // if
        var fl_1;
        var b_extraction_complete = false;
        var b_sure_failure = false;
        try {
            fl_1 = parseFloat(s_preprocessed);
            // The parseFloat parses successfully a string like "45AbracaDabra"
            // to 45.0. So, one has to check the parseability also for the
            // reverse string. In the case of the example:"arbaDacarbA54".
            var fl_trash = parseFloat(raudrohi.base.reverse_string(s_preprocessed));
            if ((('' + fl_1) !== 'NaN') && (('' + fl_trash) !== 'NaN')) {
                var n = raudrohi.base.count_substrings(s_preprocessed, '.');
                if (n < 2) {
                    b_extraction_complete = true;
                } else {
                    b_sure_failure = true;
                } // else
            } else {
                b_sure_failure = true;
            } // else
        } catch (err0) {
        } // catch
        if (b_extraction_complete && (!b_sure_failure)) {
            b = false;
            // For a case like "42wow.73"
            rgx = raudrohi.base.private_code.string2float_regex1;
            b = raudrohi.base.regex_has_a_match(rgx, s_preprocessed);
            if (b === true) {
                b_sure_failure = true;
            } else {
                // For a case like "42...5"
                rgx = raudrohi.base.private_code.string2float_regex2;
                b = raudrohi.base.regex_has_a_match(rgx, s_preprocessed);
                if (b === true) {
                    b_sure_failure = true;
                } else {
                    // For a case like "42.5.7"
                    rgx = raudrohi.base.private_code.string2float_regex3;
                    b = raudrohi.base.regex_has_a_match(rgx, s_preprocessed);
                    if (b === true) {
                        b_sure_failure = true;
                    } else {
                        // For a case like "42.4+7"
                        rgx = raudrohi.base.private_code.string2float_regex4;
                        b =
                        raudrohi.base.regex_has_a_match(rgx, s_preprocessed);
                        if (b === true) {
                            b_sure_failure = true;
                        } // if
                    } // else
                } // else
            } // else
        } // if
        if (b_extraction_complete && (!b_sure_failure)) {
            a_triple.a = false;
            a_triple.b = fl_1;
        } else {
            a_triple.a = true;
            a_triple.b = null;
        } // else
        return a_triple;
    } catch (err) {
        raudrohi.tmg('6bd35bb7-131c-4402-b209-e181b0505dd7', err +
                                                             '  s_haystack==' +
                                                             s_haystack);
    } // catch
} // raudrohi.base.private_code.string2float


raudrohi.base.string2float = function (a_string) {
    try {
        var ht_out = raudrohi.base.pool_of_hashtables.get_empty_hashtable();
        var a_triple = raudrohi.base.private_code.string2float(a_string);
        // The next if-else clause is a very weird hack.
        if (a_triple.a === true) {
            ht_out.put('b_failure', true);
        } else {
            ht_out.put('b_failure', false);
        } // else
        if (a_triple.b === null) {
            ht_out.put('value', 0.0);
        } else {
            ht_out.put('value', a_triple.b);
        } // else
        ht_out.put('b_string_is_empty_after_trimming', a_triple.c);
        return ht_out;
    } catch (err) {
        raudrohi.tmg('6743ab23-f6d5-43c0-a409-e181b0505dd7',
            'a_string=="' + a_string + '"  ' + err);
    } // catch
} // raudrohi.base.string2float

//-------------------------------------------------------------------------
// Returns a float.  If the origin type is not supported or
// the conversion is not possible, an exception will be thrown.
raudrohi.base.to_fd = function (i_or_s_or_fd) {
    try {
        var s_in = '' + i_or_s_or_fd;
        var ht = raudrohi.base.string2float(s_in);
        var b_failure = ht.get('b_failure');
        if (b_failure === true) {
            raudrohi.tmg('f647f442-ef5d-44db-a509-e181b0505dd7',
                'Failed to convert the i_or_s_or_fd==' + i_or_s_or_fd +
                ' to a floating point value.');
        } // if
        var fd_out = ht.get('value');
        return fd_out;
    } catch (err) {
        raudrohi.tmg('2c14cf92-e2d9-4735-b5f8-e181b0505dd7', err);
    } // catch
} // raudrohi.base.to_fd

//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// It's a generic pool that uses an element factory and element resetter
// for creating elements and for resetting returned elemenets.
//
// The element factory is required to have method create_element(), which
// is required to return a new element. The element resetter is rquired
// to have a method named reset_element(element) and it does not have to
// return anything.
raudrohi.base.pool = function (element_factory, element_resetter) {
    try {
        // TODO: Refactor it out so that there would be a "new" analogue,
        // like "get_from_pool" and each of the classes is required to
        // have a return_2_pool metohd that resetts the instance and
        // handles it back to the pool. A syntax example:
        //
        // x=get_from_pool(nice_class);
        // plapla
        // x.return_2_pool();
        //
        // The nice_class will probably need to have a field that encapsulates
        // some of the pooling related implementation.

        var self_public_ = this;
        var pooled_elements_ = [];
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isObject(element_factory,
                'element_factory', '87492618-409d-4eb6-91f8-e181b0505dd7');
            raudrohi.base.assert_isObject(element_resetter,
                'element_resetter', '57eec449-3967-48e1-a5f8-e181b0505dd7');
            if (element_factory['create_element'] === undefined) {
                raudrohi.tmg('17f0de93-d0b7-41c1-a4e8-e181b0505dd7',
                    'The element_factory is missing a public metod ' +
                    'called "create_element".');
            } // if
            if (element_resetter['reset_element'] === undefined) {
                raudrohi.tmg('d08f0c44-0cf0-470a-b1e8-e181b0505dd7',
                    'The element_resetter is missing a public metod ' +
                    'called "reset_element".');
            } // if
            raudrohi.base.assert_isFunction(element_resetter.reset_element,
                'element_resetter.reset_element',
                '29a43be4-799b-4a05-84e8-e181b0505dd7');
            raudrohi.base.assert_isFunction(element_factory.create_element,
                'element_factory.create_element',
                '241f8fac-fef3-42cf-b4e8-e181b0505dd7');
        } // if
        var element_factory_ = element_factory;
        var element_resetter_ = element_resetter;
        for (i = 0; i < 3; i++) {
            pooled_elements_.push(element_factory_.create_element());
        } // for

        this.get_element = function () {
            try {
                var len = pooled_elements_.length;
                var elem;
                if (0 < len) {
                    elem = pooled_elements_.pop();
                } else {
                    elem = element_factory_.create_element();
                } // if
                return elem;
            } catch (err) {
                raudrohi.tmg('7a326a31-469f-40a9-87d8-e181b0505dd7', err);
            } // catch
        } // get_element


        this.return_used_element = function (an_element) {
            try {
                // It might happen that elements that have not been
                // taken from this pool, get returned here. In that
                // case one wants to avoid the "flooding" and memory leak
                // by not taking the elements into the pool, while
                // cleaning them in order to facilitate their release
                // by the garbage collector.
                element_resetter_.reset_element(an_element);
                // The polhl is used for a FireFox 3.0.x bug workaround.
                var polhl = pooled_elements_.length;
                if (polhl < 100) {
                    pooled_elements_.push(an_element);
                } // if
            } catch (err) {
                raudrohi.tmg('ad565e42-1ae7-4631-a1d8-e181b0505dd7', err);
            } // catch
        } // return_used_element

        // The purpose of the method populate is to allow to
        // construct code that instantiates some of the pool
        // elements in a separate thread. The use of this
        // method is optional, i.e. the pool will instanteate
        // new elements whenever it runs out of them.
        this.populate = function (number_of_elements_to_fetch_and_return) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isNumber(
                        number_of_elements_to_fetch_and_return,
                        'number_of_elements_to_fetch_and_return',
                        '4550ccb1-b6f9-47cb-91d8-e181b0505dd7');
                } // if
                var ar = [];
                var len = number_of_elements_to_fetch_and_return
                var i = 0;
                var elem;
                for (i = 0; i < len; i++) {
                    elem = self_public_.get_element();
                    ar.push(elem);
                } // for
                for (i = 0; i < len; i++) {
                    elem = ar[i];
                    self_public_.return_used_element(elem);
                } // for
            } catch (err) {
                raudrohi.tmg('42386097-3873-4cce-a3d8-e181b0505dd7', err);
            } // catch
        } // populate

    } catch (err) {
        raudrohi.tmg('49e10e10-434e-429a-b1c8-e181b0505dd7', err);
    } // catch
} // raudrohi.base.pool

//------------------------------------------------------------------------
// Always returns a boolean value.
raudrohi.base.node_exists = function (html_id) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isString(html_id, 'html_id',
                '39dd6c35-d252-4f92-a3c8-e181b0505dd7');
        } // if
        var b_exists = true;
        try {
            var x = document.getElementById(html_id);
            if ((x === null) || (x === undefined)) {
                b_exists = false;
            } // if
        } catch (err) {
            b_exists = false;
        } // catch
        return b_exists;
    } catch (err) {
        raudrohi.tmg('61e55f3a-2575-4edf-92c8-e181b0505dd7', err);
    } // catch
} // raudrohi.base.node_exists

//------------------------------------------------------------------------
window.raudrohi.base.private_code.count_child_nodes_recursively =
function (parent_node) {
    var ar_children_nodes = parent_node.childNodes;
    var len = ar_children_nodes.length;
    var i = 0;
    var elem;
    var n = 0;
    var x = 0;
    // The node with an id of "wow" in the following example has 5 children.
    // One of them is the text node for text that resides between the
    // div-tags with id-s of "A" and "B":
    // <div id="wow">
    //     Text node #1 with nodeType==3
    //     <div id="A">whatever</div>
    //     <div id="B">whatever</div>
    //     Text node #3 with nodeType==3
    // </div>
    // However, one only wants to count the HTML tag nodes.
    while ((i < len) && (0 <= n)) {
        elem = ar_children_nodes[i];
        if (elem.nodeType === 1) {
            n++;
            try {
                x =
                raudrohi.base.private_code.count_child_nodes_recursively(elem);
                if (0 <= x) {
                    n = n + x;
                } else {
                    n = (-1);
                } // if
            } catch (exception) {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.tmg('b2b1712d-7fb7-4d55-82c8-e181b0505dd7',
                        'Exception in the recursive counting ' +
                        'of the child nodes. ' + exception);
                } // if
                n = (-1);
            } // catch
        } // if
        i++;
    } // while
    return n;
} // raudrohi.base.private_code.count_child_nodes_recursively


// Returns an integer. The parent node, i.e. the container node, is
// expected to exist in the DOM or it throws an exception. It checks
// the count at least twice and waits till the number of children
// stabilizes.
raudrohi.base.count_child_nodes_recursively = function (html_id_of_the_parent) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isString(html_id_of_the_parent,
                'html_id_of_the_parent',
                '436eabf3-266d-4450-b6b8-e181b0505dd7');
            if (raudrohi.base.node_exists(html_id_of_the_parent) !== true) {
                raudrohi.tmg('f4081c35-cb67-49ff-83b8-e181b0505dd7',
                    'There\'s no node with id=="' + html_id_of_the_parent +
                    '" in the DOM tree.');
            } // if
        } // if
        var container_node = document.getElementById(html_id_of_the_parent);
        var number_of_checks_max = 3;
        var number_of_checks_done = 0;
        var n0 = 0;
        var n1 = 0;
        var x;
        var b = true;
        try {
            while (number_of_checks_done < number_of_checks_max) {
                number_of_checks_done++;
                x = raudrohi.base.private_code.count_child_nodes_recursively(
                    container_node);
                if (x < 0) {
                    number_of_checks_done = 0;
                } // if
                if (b === true) {
                    n1 = x;
                    b = false;
                } else {
                    n0 = x;
                    b = true;
                } // else
                if (n1 !== n0) {
                    number_of_checks_done = 0;
                } // if
            } // while
            return n0;
        } catch (err) {
            raudrohi.tmg('4fc4a403-8fac-4300-97b8-e181b0505dd7', err);
        } // catch
    } catch (err) {
        raudrohi.tmg('3187d660-28b0-47aa-b2b8-e181b0505dd7', err);
    } // catch
} // raudrohi.base.count_child_nodes_recursively

//------------------------------------------------------------------------

raudrohi.base.node_tag_is = function (node_tag_caseinsensitive_name, a_node) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isString(node_tag_caseinsensitive_name,
                'node_tag_caseinsensitive_name',
                '2572be42-a525-4b6c-82a8-e181b0505dd7');
            raudrohi.base.assert_isObject(a_node, 'a_node',
                '2e7d22b2-5d85-434b-aaa8-e181b0505dd7');
        } // if
        var s_expected = node_tag_caseinsensitive_name.toLowerCase();
        var s_tag = a_node.nodeName.toLowerCase();
        if (s_expected === s_tag) {
            return true;
        } // if
        return false;
    } catch (err) {
        raudrohi.tmg('348b2232-290f-49a0-a2a8-e181b0505dd7', err);
    } // catch
} // raudrohi.base.node_tag_is

//------------------------------------------------------------------------
// The main and only purpose of this function is to work around
// a set of bugs in the FireFox and the Micro$oft Internet Expolorer,
// whenever it is possible at all.
//
// The main bug, that as of March 2010 seems to be present on both,
// Internet Explorer and FireFox, is that
// the innerHTML does not work properly in
// nested tables. The raudrohi.base.set_innerHTML does not
// contain a workaround to that fault. One can read more about the
// fault at: http://www.jonlee.ca/cant-use-innerhtml-on-tables-in-ie-heres-why/
// and http://www.ericvasilik.com/2006/07/code-karma.html
//
// From the comments of
// http://www.sweetvision.com/2007/04/08/dynamic-tables-in-javascript-for-ie-and-firefox/
// I read that, supposedly, the dom methods of insertRow() and
// insertCell() work in some cases. In practice, as of March 2010
// the innerHTML seems to work on the very first table, but not in
// nested tables.
//
//
// A few references to the FireFox bug, which often emerges from the
// comments of the postings:
// http://www.kenvillines.com/archives/69.html
// http://bytes.com/topic/javascript/answers/478639-innerhtml-bug-mozilla-firefox-ajax
// http://www.designerstalk.com/forums/help-me/9793-javascript-innerhtml-firefox-alternative.html
//
// A few references to the Micro$oft Internet Explorer bug:
// http://domscripting.com/blog/display/99
// http://alexle.net/archives/150
//
// For credits one mentions that the solution of
// creating a fresh DOM node and attatching it to the DOM tree
// originates from the http://domscripting.com/blog/display/99
// According to the http://domscripting.com/blog/display/99 the
// original author of the workaround is Toby Cole.
//
// And last, but not least, the "IE is Being Mean to Me",
// an original song written and performed by Scott Ward, sums it all up.
// http://www.youtube.com/watch?v=vTTzwJsHpU8
raudrohi.base.set_innerHTML = function (html_id, a_string) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isString(html_id, 'html_id',
                '3ae880e5-1683-4a39-84a8-e181b0505dd7');
            raudrohi.base.assert_isString(a_string, 'a_string',
                'e919794b-eaa1-410c-9298-e181b0505dd7');
            if (raudrohi.base.node_exists(html_id) !== true) {
                raudrohi.tmg('dad02c39-a8c0-481c-8498-e181b0505dd7',
                    'There\'s no node with id=="' + html_id +
                    '" in the DOM tree.');
            } // if
        } // if
        var node_container = document.getElementById(html_id);
        // The following loop has been copy-pasted from
        // http://snippets.jc21.com/snippets/javascript/remove-all-children-from-a-node/
        while (node_container.hasChildNodes() === true) {
            node_container.removeChild(node_container.firstChild);
        }// while
        var node_a = document.createElement('div');
        node_a.innerHTML = a_string;
        node_container.appendChild(node_a);
    } catch (err) {
        raudrohi.tmg('36417c59-85e5-40ca-8198-e181b0505dd7', err);
    } // catch
} //raudrohi.base.set_innerHTML


// For buffering.
raudrohi.base.private_code.string_contains_spacestabs_regex =
new RegExp("[\\s]", "g");

raudrohi.base.string_contains_spacestabs = function (s_haystack) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isString(s_haystack, 's_haystack',
                '1c9d6db4-c01f-4253-ab98-e181b0505dd7');
        } // if
        var b_out = false;
        var rgx = raudrohi.base.private_code.string_contains_spacestabs_regex;
        var s = s_haystack.replace(rgx, "");
        if (s.length !== s_haystack.length) {
            b_out = true;
        } // if
        return b_out;
    } catch (err) {
        raudrohi.tmg('92edb313-5384-485c-a188-e181b0505dd7', err);
    } // catch
} // raudrohi.base.string_contains_spacestabs

//------------------------------------------------------------------------
// Returns a string. It's useful for debugging.
raudrohi.base.ht2s_t1 = function (ht) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isObject(ht, 'ht',
                '559d53b2-9138-4fc6-8388-e181b0505dd7');
        } // if
        var keys = ht.keys();
        var len = keys.length;
        var key;
        var s_out = "";
        var lc_s_linebreak = "\n";
        var lc_s_equlsequals = "==";
        for (var i = 0; i < len; i++) {
            key = keys[i];
            s_out = s_out + lc_s_linebreak +
                    key + lc_s_equlsequals + ht.get(key);
        } // for
        s_out = s_out + lc_s_linebreak;
        return s_out;
    } catch (err) {
        raudrohi.tmg('3b3b1785-1031-4950-8188-e181b0505dd7', err);
    } // catch
} // raudrohi.base.ht2s_t1

//------------------------------------------------------------------------
