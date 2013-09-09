//=========================================================================

if (window.raudrohi.globals.raudrohi_text_analysis_exists !== true) {
    window.raudrohi.text_analysis = {};
    window.raudrohi.globals.raudrohi_text_analysis_exists = true;
} // if
if (window.raudrohi.globals.raudrohi_text_analysis_selftests !== true) {
    window.raudrohi.text_analysis.selftests = {};
    window.raudrohi.globals.raudrohi_text_analysis_selftests = true;
} // if

if (window.raudrohi.globals.raudrohi_text_analysis_private_code_exists !== true) {
    window.raudrohi.text_analysis.private_code = {};
    window.raudrohi.globals.raudrohi_text_analysis_private_code_exists = true;
} // if

//------------------------------------------------------------------------
window.raudrohi.text_analysis.private_code.input_verification_t1 = function (ht_fields, s_for_analysis, s_field_name_suffix) {
    try {
        window.raudrohi.base.assert_isObject(ht_fields, 'ht_fields',
            '91af1d49-3416-4a3c-93e7-8081d0207dd7');
        window.raudrohi.base.assert_isString(s_for_analysis, 's_for_analysis',
            '4845da3e-303a-4b0f-b2d7-8081d0207dd7');
        window.raudrohi.base.assert_isString(s_field_name_suffix,
            's_field_name_suffix', 'c1dcd511-fc98-496b-81d7-8081d0207dd7');
        var b = window.raudrohi.base.string_contains_spacestabs(s_field_name_suffix);
        if (b !== false) {
            window.raudrohi.tmg('7bbeb1e6-e466-470f-a2d7-8081d0207dd7',
                's_field_name_suffix=="' + s_field_name_suffix +
                    '" contains either spaces or tabs.');
        } // if
        if (s_field_name_suffix.length == 0) {
            window.raudrohi.tmg('87550b23-376a-4a22-81d7-8081d0207dd7',
                's_field_name_suffix.length==0');
        } // if
    } catch (err) {
        window.raudrohi.tmg('249331ab-0de1-42b8-95d7-8081d0207dd7', err);
    } // catch
} // window.raudrohi.text_analysis.private_code.input_verification_t1

window.raudrohi.text_analysis.is_empty_after_trimming_t1 = function (ht_fields, s_for_analysis, s_field_name_suffix) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            window.raudrohi.text_analysis.private_code.input_verification_t1(ht_fields,
                s_for_analysis, s_field_name_suffix);
        } // if
        var s = window.raudrohi.adapter.trim(s_for_analysis);
        var b = false;
        if (s.length === 0) {
            b = true;
        } // if
        s = 'b_string_is_empty_after_trimming_t1_' + s_field_name_suffix;
        ht_fields.put(s, window.raudrohi.core.bool2str(b));
    } catch (err) {
        window.raudrohi.tmg('a1b5b748-584c-41d9-b1d7-8081d0207dd7', err);
    } // catch
} // window.raudrohi.text_analysis.is_empty_after_trimming_t1

window.raudrohi.text_analysis.is_empty_t1 = function (ht_fields, s_for_analysis, s_field_name_suffix) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            window.raudrohi.text_analysis.private_code.input_verification_t1(ht_fields,
                s_for_analysis, s_field_name_suffix);
        } // if
        var b = false;
        if (s_for_analysis.length === 0) {
            b = true;
        } // if
        var s = 'b_string_is_empty_' + s_field_name_suffix;
        ht_fields.put(s, window.raudrohi.core.bool2str(b));
    } catch (err) {
        window.raudrohi.tmg('27d57422-9200-4330-b5d7-8081d0207dd7', err);
    } // catch
} // window.raudrohi.text_analysis.is_empty_t1

window.raudrohi.text_analysis.is_floating_point_number_t1 = function (ht_fields, s_for_analysis, s_field_name_suffix) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            window.raudrohi.text_analysis.private_code.input_verification_t1(ht_fields,
                s_for_analysis, s_field_name_suffix);
        } // if
        var s = null;
        var b = null;
        var ht = window.raudrohi.base.string2float(s_for_analysis);
        s = 'b_string_is_floating_point_number_t1_' + s_field_name_suffix;
        b = !(ht.get('b_failure'));
        ht_fields.put(s, window.raudrohi.core.bool2str(b));
        window.raudrohi.base.pool_of_hashtables.return_used_hashtable(ht);
    } catch (err) {
        window.raudrohi.tmg('bec2ff30-ef68-43d2-81d7-8081d0207dd7', err);
    } // catch
} // window.raudrohi.text_analysis.is_floating_point_number_t1


//------------------------------------------------------------------------
