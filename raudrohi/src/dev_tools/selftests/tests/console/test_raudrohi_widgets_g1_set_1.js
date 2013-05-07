//=========================================================================
// Copyright (c) 2011, martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or
// without modification, are permitted provided that the following
// conditions are met:
//
// * Redistributions of source code must retain the above copyright
//   notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above copyright
//   notice, this list of conditions and the following disclaimer
//   in the documentation and/or other materials provided with the
//   distribution.
// * Neither the name of the Martin Vahi nor the names of its
//   contributors may be used to endorse or promote products derived
//   from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
// CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
// INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
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

if (window.raudrohi_widgets_g1_selftests_exists !== true) {
    window.raudrohi.widgets.g1.selftests = {};
    window.raudrohi_widgets_g1_selftests_exists = true;
} // if

//-------------------------------------------------------------------------

raudrohi.widgets.g1.selftests.test_initializations_of_deprecated_widgets_t1 =
function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---------------
        var b_throw = null;
        var err_x = null;
        var ob_widget_0 = null
        var ob_widget_1 = null
        var s_html_id_prefix = "raudrohi_widgets_g1_selftests_test_initializations_t1_deprec_"
        var s_html_id = null;
        var i_html_id_counter = 0;
        var s_parent_phone_number = null;
        //---tests-start------------------
        b_throw = false;
        try {
            i_html_id_counter++;
            s_html_id = s_html_id_prefix + i_html_id_counter;
            ob_widget_0 =
            new raudrohi.widgets.g1.containergrid_1x1_t1(s_html_id);
            i_html_id_counter++;
            s_html_id = s_html_id_prefix + i_html_id_counter;
            ob_widget_1 = new raudrohi.widgets.g1.partialmenu_t1(s_html_id,
                ob_widget_0, 300, 100,
                10, '<p>hi</p>');
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== false) {
            ar_failed_tests.push("i_html_id_counter==" + i_html_id_counter +
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='94e24924-1b11-4692-b5b8-a0f251705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        try {
            i_html_id_counter++;
            s_html_id = s_html_id_prefix + i_html_id_counter;
            ob_widget_0 =
            new raudrohi.widgets.g1.containergrid_1x1_t1(s_html_id);
            i_html_id_counter++;
            s_html_id = s_html_id_prefix + i_html_id_counter;
            ob_widget_1 = new raudrohi.widgets.g1.menu_t1(s_html_id,
                '<p>hi</p>');
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== false) {
            ar_failed_tests.push("i_html_id_counter==" + i_html_id_counter +
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='6ddb003e-2aa0-496a-b5b8-a0f251705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        try {
            i_html_id_counter++;
            s_html_id = s_html_id_prefix + i_html_id_counter;
            ob_widget_0 =
            new raudrohi.widgets.g1.containergrid_1x1_t1(s_html_id);
            i_html_id_counter++;
            s_html_id = s_html_id_prefix + i_html_id_counter;
            s_parent_phone_number = ob_widget_0.phone.get_phone_number();
            ob_widget_1 = new raudrohi.widgets.g1.cache_t2(
                s_parent_phone_number);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== false) {
            ar_failed_tests.push("i_html_id_counter==" + i_html_id_counter +
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='5e267b35-6a7e-4994-94b8-a0f251705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        try {
            i_html_id_counter++;
            s_html_id = s_html_id_prefix + i_html_id_counter;
            ob_widget_0 =
            new raudrohi.widgets.g1.containergrid_1x1_t1(s_html_id);
            i_html_id_counter++;
            s_html_id = s_html_id_prefix + i_html_id_counter;
            ob_widget_1 =
            new raudrohi.widgets.g1.calendar_t1(s_html_id, ob_widget_0);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== false) {
            ar_failed_tests.push("i_html_id_counter==" + i_html_id_counter +
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='1a08c1a2-9f4a-4f56-b2b8-a0f251705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        try {
            i_html_id_counter++;
            s_html_id = s_html_id_prefix + i_html_id_counter;
            //ob_widget_0 =
            //new raudrohi.widgets.g1.containergrid_1x1_t1(s_html_id);
            i_html_id_counter++;
            s_html_id = s_html_id_prefix + i_html_id_counter;
            ob_widget_1 = new raudrohi.widgets.g1.html_t1(s_html_id);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== false) {
            ar_failed_tests.push("i_html_id_counter==" + i_html_id_counter +
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='74e8f238-719f-4344-81b8-a0f251705dd7'");
        } // if
        //---tests-end--------------------
        var x = ar_failed_tests.length; // FireFox 3.0.x bug workaround.
        if (0 < x) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.widgets.g1.selftests.test_initializations_t1');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('0229fc40-ff68-430b-82b8-a0f251705dd7', err);
    } // catch
} // raudrohi.widgets.g1.selftests.test_initializations_of_deprecated_widgets_t1
raudrohi.selftests.ar_tests_1.push(
    raudrohi.widgets.g1.selftests.test_initializations_of_deprecated_widgets_t1);

//-------------------------------------------------------------------------

raudrohi.widgets.g1.selftests.test_initializations_t1 = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---------------
        var b_throw = null;
        var err_x = null;
        var ob_widget_0 = null
        var ob_widget_1 = null
        var s_html_id_prefix = "raudrohi_widgets_g1_selftests_test_initializations_t1_"
        var s_html_id = null;
        var i_html_id_counter = 0;
        //---tests-start------------------
        b_throw = false;
        try {
            i_html_id_counter++;
            s_html_id = s_html_id_prefix + i_html_id_counter;
            ob_widget_0 =
            new raudrohi.widgets.g1.containergrid_1x1_t1(s_html_id);
            i_html_id_counter++;
            s_html_id = s_html_id_prefix + i_html_id_counter;
            //    ob_widget_1=
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw === true) {
            ar_failed_tests.push("i_html_id_counter==" + i_html_id_counter +
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='1d414085-bd2d-4735-89b8-a0f251705dd7'");
        } // if
        //---tests-end--------------------
        var x = ar_failed_tests.length; // FireFox 3.0.x bug workaround.
        if (0 < x) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.widgets.g1.selftests.test_initializations_t1');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('14519d23-ac10-42a4-94a8-a0f251705dd7', err);
    } // catch
} // raudrohi.widgets.g1.selftests.test_initializations_t1
raudrohi.selftests.ar_tests_1.push(
    raudrohi.widgets.g1.selftests.test_initializations_t1);

//=========================================================================
