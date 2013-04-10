///------------------------------------------------------------------------
// Copyright (c) 2009, martin.vahi@softf1.com that has an
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
//------------------------------------------------------------------------

//------------------------------------------------------------------------

raudrohi.selftests.assemble_an_array_of_selftests_results = function () {
    try {
        var ar_of_ht = [];
        window.raudrohi.adapter.selftests.all_in_port(ar_of_ht);

        // TODO: refactor those tests from deliverable src to sleftest files.
        ar_of_ht.push(raudrohi.text_analysis.selftests.is_floating_point_number_t1());
        ar_of_ht.push(raudrohi.date_and_time.selftests.is_a_leap_year());

        var ar = raudrohi.selftests.ar_tests_1
        var i_len = ar.length;
        var i = 0;
        var elem = null;
        var ht_x = null;
        try {
            for (i = 0; i < i_len; i++) {
                elem = ar[i]; // elements are functions
                ht_x = elem();
                ar_of_ht.push(ht_x);
            } // for
        } catch (err) {
            throw('"dda8a85d-5736-45f8-b38e-e1d1e0304dd7" ' +
                  'elem.toString()==' + elem.toString() + '  ' +
                  'One possible thing that may trigger this is where ' +
                  'raudrohi.selftests.ar_tests_1.push(elem()); is used ' +
                  'in stead of the correct ' +
                  'raudrohi.selftests.ar_tests_1.push(elem); ' +
                  'Otherwise the elem.toString() might return ' +
                  'a function declaration or something more ' +
                  '"function like". ' + err);
        } // catch

        //raudrohi.selftests.units.all(ar_of_ht);
        //---tests---end-------------------------------------
        return ar_of_ht;
    } catch (err) {
        throw '"25c72cbc-ceef-4cbb-858e-e1d1e0304dd7" ' + err;
    } // catch
} // assemble_an_array_of_selftests_results

//------------------------------------------------------------------------
raudrohi.selftests.table_legend = function () {
    try {
        var s_html = '<tr>' +
                     '<td class="raudrohi_visible_table_cells">' +
                     'Failed Code Region name' +
                     '</td><td class="raudrohi_visible_table_cells">' +
                     'Test Failure Messge' +
                     '</td>' +
                     '</tr>';
        return s_html;
    } catch (err) {
        throw '"4716b555-4e47-4587-918e-e1d1e0304dd7" ' + err;
    } // catch
} // table_legend
//------------------------------------------------------------------------
raudrohi.selftests.ht2html = function (ht) {
    try {
        if (ht === null) {
            throw 'ht===null';
        } // if
        if (ht.get('test_passed') === 't') {
            // It's acutally "part of the spicification" that
            // the rest of the hashtable fields are allowed to be
            // missing, if the test is passed successfully.
            return '';
        } // if
        var s_html = '';
        var ar_failed_tests = ht.get('ar_failed_tests');
        var len = ar_failed_tests.length;
        var b_first_run = true;
        for (var i = 0; i < len; i++) {
            if (b_first_run) {
                s_html = '<tr>' +
                         '<td class="raudrohi_visible_table_cells" ' +
                         'style="visibility:hidden;">xx</td>' +
                         '<td class="raudrohi_visible_table_cells" ' +
                         'style="visibility:hidden;">xx</td>' +
                         '</tr>';
                s_html = s_html + '<tr style="background-color:#FFBD97;">';
                s_html = s_html + '<td class="raudrohi_visible_table_cells">';
                s_html = s_html + ht.get('code_region_name') + '</td>';
                b_first_run = false;
            } else {
                s_html = s_html + '<tr style="background-color:#FFBD97;">' +
                         '<td class="raudrohi_visible_table_cells"/>';
            } // else
            s_html = s_html + '<td class="raudrohi_visible_table_cells">' +
                     ar_failed_tests[i] + '</td></tr>';
        } // for
        return s_html;
    } catch (err) {
        throw '46572126-cb24-4e45-8ca5-9a9a1c4ec890 ' + err;
    } // catch
} // ht2html

//------------------------------------------------------------------------
raudrohi.selftests.run_all_selftests = function () {
    try {
        var output_screen = document.getElementById('output_screen');
        output_screen.innerHTML = '<p> Running tests ... </p>';
        var ar_of_ht = raudrohi.selftests.assemble_an_array_of_selftests_results();
        var s_html = '<br/><br/>';
        var b_test_passed = true;
        var len = ar_of_ht.length;
        var i = 0;
        var ht;
        for (i = 0; i < len; i++) {
            ht = ar_of_ht[i];
            if (ht.get('test_passed') !== 't') {
                b_test_passed = false;
                break;
            } // if
        } // for
        if (!b_test_passed) {
            s_html = s_html + '<table class="raudrohi_visible_table"><tbody>';
            s_html = s_html + raudrohi.selftests.table_legend();
            for (i = 0; i < len; i++) {
                ht = ar_of_ht[i];
                s_html = s_html + raudrohi.selftests.ht2html(ht);
            } // for
            s_html = s_html + '</tbody><table>';
        } else {
            s_html = s_html + '<p>All selftests passed successfully.</p>';
        } // if
        output_screen.innerHTML = s_html;
    } catch (err) {
        throw '"52830b34-e234-4b4b-9c8e-e1d1e0304dd7" ' + err;
    } // catch
}; // run_all_selftests

//------------------------------------------------------------------------
window.application_main_function = function () {
    if (typeof(raudrohi) === "undefined") {
        throw "It seems that the raudrohi namespace is not defined. " +
              "There is a fault in the raudrohi selftests application.";
    } else {
        raudrohi.adapter.YUI_create_console();
        raudrohi.selftests.run_all_selftests();
    } // else
} // application_main_function

window.onload = function () {
    raudrohi.run(true, window.application_main_function);
} // window.onload

//------------------------------------------------------------------------
