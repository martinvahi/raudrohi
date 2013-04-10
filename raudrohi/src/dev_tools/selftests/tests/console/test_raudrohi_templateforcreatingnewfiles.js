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

if (window.raudrohi_subject_to_replacement_ns_exists !== true) {
    raudrohi.subject_to_replacement_ns = {};
    window.raudrohi_subject_to_replacement_ns_exists = true;
} // if

if (window.raudrohi_subject_to_replacement_ns_selftests_exists !== true) {
    raudrohi.subject_to_replacement_ns.selftests = {};
    window.raudrohi_subject_to_replacement_ns_selftests_exists = true;
} // if

//-------------------------------------------------------------------------
raudrohi.subject_to_replacement_ns.selftests.a_set_of_tests_1 = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var s_x = null;
        var s_expected = 'hi';
        s_x = 'hi'; // a result "produced" by a testable function
        if (s_x !== s_expected) {
            ar_failed_tests.push('test 1, s_x=="' + s_x + '"' +
                                 " \nGUID='c730df23-f500-4f87-b3c8-b21040904dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.subject_to_replacement_ns.selftests.a_set_of_tests_1');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('6d24422e-584f-4e9d-a4b8-b21040904dd7', err);
    } // catch
} // raudrohi.subject_to_replacement_ns.selftests.a_set_of_tests_1
raudrohi.selftests.ar_tests_1.push(
    raudrohi.subject_to_replacement_ns.selftests.a_set_of_tests_1);

//=========================================================================
