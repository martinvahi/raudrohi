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

if (window.raudrohi_vfx_exists !== true) {
    window.raudrohi.vfx = {};
    window.raudrohi_vfx_exists = true;
} // if

if (window.raudrohi_vfx_private_code_exists !== true) {
    window.raudrohi.vfx.private_code = {};
    window.raudrohi_vfx_private_code_exists = true;
} // if

if (window.raudrohi_vfx_selftests_exists !== true) {
    raudrohi.vfx.selftests = {};
    window.raudrohi_vfx_selftests_exists = true;
} // if

//-------------------------------------------------------------------------

raudrohi.vfx.selftests.ar_html2rgb = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var ar_x = null;
        var i = 0;
        var s_html_color = null;
        //------
        s_html_color = '#ff0012';
        ar_x = raudrohi.vfx.ar_html2rgb(s_html_color);
        i = ar_x.length;
        if (i !== 3) {
            ar_failed_tests.push('test 1.1, ar_x.length=="' + i + '"' +
                                 " \nGUID='2be2e33c-46d1-40fd-b592-012040904dd7'");
        } // if
        i = ar_x[0];
        if (i !== 255) {
            ar_failed_tests.push('test 1.2, ar_x[0]=="' + i + '"' +
                                 " \nGUID='fd322428-13ef-442d-a392-012040904dd7'");
        } // if
        i = ar_x[1];
        if (i !== 0) {
            ar_failed_tests.push('test 1.3, ar_x[1]=="' + i + '"' +
                                 " \nGUID='1324a324-a033-4552-b282-012040904dd7'");
        } // if
        i = ar_x[2];
        if (i !== 18) {
            ar_failed_tests.push('test 1.4, ar_x[2]=="' + i + '"' +
                                 " \nGUID='17655465-1d8e-416b-8382-012040904dd7'");
        } // if
        //------
        s_html_color = '#0f0a02';
        ar_x = raudrohi.vfx.ar_html2rgb(s_html_color);
        i = ar_x.length;
        if (i !== 3) {
            ar_failed_tests.push('test 2.1, ar_x.length=="' + i + '"' +
                                 " \nGUID='eb9c0056-f974-4235-b482-012040904dd7'");
        } // if
        i = ar_x[0];
        if (i !== 15) {
            ar_failed_tests.push('test 2.2, ar_x[0]=="' + i + '"' +
                                 " \nGUID='24e03961-f17c-4d9b-a482-012040904dd7'");
        } // if
        i = ar_x[1];
        if (i !== 10) {
            ar_failed_tests.push('test 2.3, ar_x[1]=="' + i + '"' +
                                 " \nGUID='5ba1ba31-3ca3-4157-bf82-012040904dd7'");
        } // if
        i = ar_x[2];
        if (i !== 2) {
            ar_failed_tests.push('test 2.4, ar_x[2]=="' + i + '"' +
                                 " \nGUID='73bcaa1b-2310-44a3-8182-012040904dd7'");
        } // if
        //------
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.vfx.selftests.ar_html2rgb');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('d207b482-ed3f-4a49-9b42-012040904dd7', err);
    } // catch
} // raudrohi.vfx.selftests.ar_html2rgb

raudrohi.selftests.ar_tests_1.push(raudrohi.vfx.selftests.ar_html2rgb);

//-------------------------------------------------------------------------

raudrohi.vfx.selftests.ar_interpolate_html_colors = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var i = 0;
        var s_html_color_start = null;
        var s_html_color_end = null;
        var i_max_number_of_output_colors = null;
        var ar_x = null;
        var s_x = null;
        //------
        i_max_number_of_output_colors = 7;
        s_html_color_start = '#000000';
        s_html_color_end = '#000000';
        ar_x = raudrohi.vfx.ar_interpolate_html_colors(s_html_color_start,
            s_html_color_end, i_max_number_of_output_colors);
        i = ar_x.length
        if (i !== 1) {
            ar_failed_tests.push('test 1.1, ar_x.length==' + i +
                                 " \nGUID='7f48063a-f28d-4211-8142-012040904dd7'");
        } // if
        s_x = ar_x[0];
        if (s_x !== s_html_color_start) {
            ar_failed_tests.push('test 1.2, s_x==' + s_x +
                                 " \nGUID='48c44092-4a95-44b0-8132-012040904dd7'");
        } // if
        //------
        i_max_number_of_output_colors = 7;
        s_html_color_start = '#000001';
        s_html_color_end = '#000000';
        ar_x = raudrohi.vfx.ar_interpolate_html_colors(s_html_color_start,
            s_html_color_end, i_max_number_of_output_colors);
        i = ar_x.length
        if (i !== 2) {
            ar_failed_tests.push('test 2.1, ar_x.length==' + i +
                                 " \nGUID='0929b64a-b88f-4b74-b532-012040904dd7'");
        } // if
        s_x = ar_x[0];
        if (s_x !== s_html_color_start) {
            ar_failed_tests.push('test 2.2, s_x==' + s_x +
                                 " \nGUID='5739da56-12ce-4950-9132-012040904dd7'");
        } // if
        s_x = ar_x[1];
        if (s_x !== s_html_color_end) {
            ar_failed_tests.push('test 2.3, s_x==' + s_x +
                                 " \nGUID='59ea2d46-7413-4ed5-8332-012040904dd7'");
        } // if
        //------
        i_max_number_of_output_colors = 3;
        s_html_color_start = '#01410a';
        s_html_color_end = '#03210e';
        ar_x = raudrohi.vfx.ar_interpolate_html_colors(s_html_color_start,
            s_html_color_end, i_max_number_of_output_colors);
        i = ar_x.length
        if (i !== 3) {
            ar_failed_tests.push('test 3.1, ar_x.length==' + i +
                                 " \nGUID='21c44317-4b0a-4007-a532-012040904dd7'");
        } // if
        s_x = ar_x[0];
        if (s_x !== s_html_color_start) {
            ar_failed_tests.push('test 3.2, s_x==' + s_x +
                                 " \nGUID='5d1e6c5a-7709-4093-a132-012040904dd7'");
        } // if
        s_x = ar_x[1];
        if (s_x !== '#02310c') {
            ar_failed_tests.push('test 3.3, s_x==' + s_x +
                                 " \nGUID='056d21aa-ca56-4bb5-be32-012040904dd7'");
        } // if
        s_x = ar_x[2];
        if (s_x !== s_html_color_end) {
            ar_failed_tests.push('test 3.4, s_x==' + s_x +
                                 " \nGUID='c2a5f84c-1267-472d-a232-012040904dd7'");
        } // if
        //------
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.vfx.selftests.ar_interpolate_html_colors');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('ecce3e22-f43b-4cf0-9432-012040904dd7', err);
    } // catch
} // raudrohi.vfx.selftests.ar_interpolate_html_colors

raudrohi.selftests.ar_tests_1.push(raudrohi.vfx.selftests.ar_interpolate_html_colors);

//=========================================================================

