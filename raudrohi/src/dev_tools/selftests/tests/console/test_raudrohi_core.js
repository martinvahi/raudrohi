//=========================================================================
// Copyright (c) 2013, martin.vahi@softf1.com that has an
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

if (window.raudrohi_core_exists !== true) {
    window.raudrohi.core = {};
    window.raudrohi_core_exists = true;
} // if

if (window.raudrohi_core_private_code_exists !== true) {
    window.raudrohi.core.private_code = {};
    window.raudrohi_core_private_code_exists = true;
} // if

if (window.raudrohi_core_selftests !== true) {
    window.raudrohi.core.selftests = {};
    window.raudrohi_core_selftests = true;
} // if

if (window.raudrohi_core_private_code_selftests_exists !== true) {
    window.raudrohi.core.private_code.selftests = {};
    window.raudrohi_core_private_code_selftests_exists = true;
} // if

//-------------------------------------------------------------------------

raudrohi.core.selftests.hashtable = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var ht_t = new Hashtable();
        var s = null;
        s = "HunkZone";
        ht_t.put(s, "hi");
        if (ht_t.containsKey("HunkZone") === false) {
            ar_failed_tests.push(s +
                                 " \nGUID='b28f264d-1fb1-4372-b275-201040904dd7'");
        } // if
        if (ht_t.get("HunkZone") !== "hi") {
            ar_failed_tests.push(s + " wrong value==" + ht_t.get("HunkZone") +
                                 " \nGUID='152f8793-a1bc-47ff-b525-201040904dd7'");
        } // if
        ht_t.put("Wow", "wwww");
        if (ht_t.containsKey("HunkZone") === false) {
            // Checks for changes after additional pair entry.
            ar_failed_tests.push('test 2' +
                                 " \nGUID='ccafd6e1-2aaa-4394-af55-201040904dd7'");
        } // if
        if (ht_t.containsKey("Wow") === false) {
            ar_failed_tests.push('test 3' +
                                 " \nGUID='3cce3ec2-157f-4cee-a255-201040904dd7'");
        } // if
        if (ht_t.containsKey("wow") === true) { // Case sensitivity test
            ar_failed_tests.push('test 4' +
                                 " \nGUID='d5677033-6785-4a72-8644-201040904dd7'");
        } // if
        if (ht_t.size() !== 2) {
            ar_failed_tests.push('test 5' +
                                 " \nGUID='815f720d-40a9-4819-b9d4-201040904dd7'");
        } // if
        if (ht_t.get("Wow") !== "wwww") {
            ar_failed_tests.push("test 6 wrong value==" + ht_t.get("Wow") +
                                 " \nGUID='b2e3a00e-d87a-4d8e-bb34-201040904dd7'");
        } // if
        if (ht_t.containsKey("HunkZone") === false) {
            // Just in case, because the "Wow" key got added.
            ar_failed_tests.push('test 7' +
                                 " \nGUID='1e306ae3-4c36-4835-b454-201040904dd7'");
        } // if
        ht_t.remove("HunkZone");
        if (ht_t.containsKey("HunkZone") === true) {
            ar_failed_tests.push('test 8' +
                                 " \nGUID='a581b9cb-6cb0-4212-b644-201040904dd7'");
        } // if
        if (ht_t.containsKey("Wow") === false) {
            ar_failed_tests.push('test 9' +
                                 " \nGUID='1263f753-24f4-4aa6-a744-201040904dd7'");
        } // if
        if (ht_t.size() !== 1) {
            ar_failed_tests.push('test 10' +
                                 " \nGUID='4f320542-3789-4c6b-b554-201040904dd7'");
        } // if
        ht_t.put("Gee", "Weeeee");
        if (ht_t.size() !== 2) {
            ar_failed_tests.push('test 11' +
                                 " \nGUID='e5af26df-412b-49a4-8f34-201040904dd7'");
        } // if
        ht_t.clear();
        if (ht_t.size() !== 0) {
            ar_failed_tests.push('test 12' +
                                 " \nGUID='14849819-8a1c-49a3-a224-201040904dd7'");
        } // if
        if (ht_t.containsKey("Gee") === true) {
            ar_failed_tests.push('test 13' +
                                 " \nGUID='32ca91b3-2539-4584-8d34-201040904dd7'");
        } // if
        ht_t.put("Gee", "mmmmmm");
        if (ht_t.size() !== 1) {
            ar_failed_tests.push('test 14' +
                                 " \nGUID='3de9e591-896e-484c-8c14-201040904dd7'");
        } // if
        ht_t.put("Gee", "Overwrite a value at key Gee");
        if (ht_t.size() !== 1) {
            ar_failed_tests.push('test 15' +
                                 " \nGUID='2dcbc565-5737-4297-8923-201040904dd7'");
        } // if
        ht_t.put("Weee", "A value");
        if (ht_t.size() !== 2) {
            ar_failed_tests.push('test 16' +
                                 " \nGUID='81e3fb8c-97ce-4941-a833-201040904dd7'");
        } // if
        ht_t.remove("Gee");
        if (ht_t.size() !== 1) {
            ar_failed_tests.push('test 17' +
                                 " \nGUID='d8d6dab2-eb49-4c82-ae33-201040904dd7'");
        } // if
        // Multiple remove to test size accountancy.
        ht_t.remove("Gee");
        if (ht_t.size() !== 1) {
            ar_failed_tests.push('test 18' +
                                 " \nGUID='d39c63d7-50e9-45a7-ae83-201040904dd7'");
        } // if
        if (ht_t.containsKey("Weee") === false) {
            ar_failed_tests.push('test 19' +
                                 " \nGUID='41124ac3-3950-4c75-844e-201040904dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.core.selftests.hashtable');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        throw 'GUID=="fc1fa9a4-ee55-4f68-a335-201040904dd7", err==' + err;
    } // catch
} // raudrohi.core.selftests.hashtable


raudrohi.selftests.ar_tests_1.push(raudrohi.core.selftests.hashtable);

//-------------------------------------------------------------------------

// The is_defined method can not be defined, because one
// can not pass undefined values to functions/methods in JavaScript.
//
// This selftest is for testing the workaround of the is_defined
// method. The COMMENTS.txt has a more indepth conception of the topic.
raudrohi.core.selftests.a_woraround_to_is_defined = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        if (typeof(window.a_woraround_to_is_defined_CraZyMrLove) !==
            "undefined") {
            ar_failed_tests.push('a_woraround_to_is_defined_CraZyMrLove' +
                                 " \nGUID='4e2f6221-6875-42e5-b64e-201040904dd7'");
        } // if
        if (typeof(window.Hashtable) === "undefined") {
            ar_failed_tests.push('Hashtable' +
                                 " \nGUID='f321365e-4ed0-40d4-984e-201040904dd7'");
        } // if
        var ggg = 4;
        if ((typeof(window.ggg) === "undefined") &&
            (typeof(ggg) === "undefined")) {
            ar_failed_tests.push('ggg 1' +
                                 " \nGUID='531c427e-ad53-4391-993e-201040904dd7'");
        } // if
        if (typeof(window.raudrohi.core) === "undefined") {
            ar_failed_tests.push('raudrohi.core' +
                                 " \nGUID='1649dc41-88d7-4063-8b4e-201040904dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.core.selftests.a_woraround_to_is_defined');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('a60d22f3-3458-4245-b91e-201040904dd7', err);
    } // catch
} // raudrohi.core.selftests.a_woraround_to_is_defined

raudrohi.selftests.ar_tests_1.push(
    raudrohi.core.selftests.a_woraround_to_is_defined);

//-------------------------------------------------------------------------

//=========================================================================
