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

if (window.raudrohi_base_exists !== true) {
    window.raudrohi.base = {};
    window.raudrohi_base_exists = true;
} // if

if (window.raudrohi_base_private_code_exists !== true) {
    window.raudrohi.base.private_code = {};
    window.raudrohi_base_private_code_exists = true;
} // if

//-------------------------------------------------------------------------

if (window.raudrohi_base_selftests_exists !== true) {
    raudrohi.base.selftests = {};
    window.raudrohi_base_selftests_exists = true;
} // if

if (window.raudrohi_base_private_code_selftests_exists !== true) {
    window.raudrohi.base.private_code.selftests = {};
    window.raudrohi_base_private_code_selftests_exists = true;
} // if

//-------------------------------------------------------------------------

raudrohi.base.selftests.JS_boolean_ops = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        var b;
        //---tests-start------------------
        if (false === true) {
            ar_failed_tests.push('false===true' +
                                 " \nGUID='45b88394-17b1-4370-b789-13d080705dd7'");
        } // if
        b = false
        if (b === true) {
            ar_failed_tests.push('false===b===true' +
                                 " \nGUID='12fceef6-ceb9-4a91-9189-13d080705dd7'");
        } // if
        b = true
        if (b === false) {
            ar_failed_tests.push('true===b===false' +
                                 " \nGUID='8fb54349-8b13-4708-8389-13d080705dd7'");
        } // if
        var xy = {};
        xy.xx = {};
        xy.xx.bb = true;
        if (xy.xx.bb === false) {
            ar_failed_tests.push('true===xy.xx.bb===false' +
                                 " \nGUID='54b941b1-0224-4509-9629-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x = ar_failed_tests.length; // FireFox 3.0.x bug workaround.
        if (0 < x) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.base.selftests.JS_boolean_ops');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('19d52c1e-5df3-4ffe-b329-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.JS_boolean_ops

raudrohi.selftests.ar_tests_1.push(raudrohi.base.selftests.JS_boolean_ops);

//-------------------------------------------------------------------------

raudrohi.base.selftests.bisect = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        var s;
        var a_pair;
        //---tests-start------------------
        var s_hay = "ABC";
        a_pair = raudrohi.base.bisect(s_hay, 'B');
        if (a_pair.a !== "A") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='5de94350-0b03-4c11-8229-13d080705dd7'");
        } // if
        if (a_pair.b !== "C") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='3e0856fd-a02e-4341-8329-13d080705dd7'");
        } // if
        a_pair = raudrohi.base.bisect(s_hay, 'A');
        if (a_pair.a !== "") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='a29d42b8-7384-4748-a619-13d080705dd7'");
        } // if
        if (a_pair.b !== "BC") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='dc54992b-8f4a-4333-b219-13d080705dd7'");
        } // if
        a_pair = raudrohi.base.bisect(s_hay, 'C');
        if (a_pair.a !== "AB") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='d0a3ce5d-a52c-4d41-b319-13d080705dd7'");
        } // if
        if (a_pair.b !== "") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='4ad7d739-c186-4dd0-b119-13d080705dd7'");
        } // if

        s_hay = "|||";
        a_pair = raudrohi.base.bisect(s_hay, '|||');
        if (a_pair.a !== "") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='57fcd044-9d51-4e66-a219-13d080705dd7'");
        } // if
        if (a_pair.b !== "") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='3e92ac54-e650-4e60-9519-13d080705dd7'");
        } // if

        s_hay = "a|||b|||c";
        a_pair = raudrohi.base.bisect(s_hay, '|||');
        if (a_pair.a !== "a") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='5c33513c-6380-4459-9409-13d080705dd7'");
        } // if
        if (a_pair.b !== "b|||c") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='1fac033f-54de-4806-a509-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name', 'raudrohi.base.selftests.bisect');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('c03cb22e-b133-4ffb-8309-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.bisect

raudrohi.selftests.ar_tests_1.push(raudrohi.base.selftests.bisect);

//-------------------------------------------------------------------------

raudrohi.base.selftests.replace_all = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        var s_hay;
        var s_out;
        //---tests-start------------------
        s_hay = 'XXX';
        s_out = raudrohi.base.gsub('ZY', 'X', s_hay);
        if (s_out !== 'ZYZYZY') {
            ar_failed_tests.push('X->ZY, s_out==' + s_out +
                                 " \nGUID='ea966358-c552-40fd-b109-13d080705dd7'");
        } // if
        s_out = raudrohi.base.gsub('M', 'XX', s_hay);
        if (s_out !== 'MX') {
            ar_failed_tests.push('XX->M, s_out==' + s_out +
                                 " \nGUID='9e86ac43-6e72-415c-8309-13d080705dd7'");
        } // if
        s_hay = "line1\nline2";
        s_out = raudrohi.base.gsub('F', "\n", s_hay);
        if (s_out !== 'line1Fline2') {
            ar_failed_tests.push("\\n" + '->F, s_out==' + s_out +
                                 " \nGUID='8a376d13-f8ae-4232-a309-13d080705dd7'");
        } // if
        s_hay = '|||';
        s_out = raudrohi.base.gsub('LL', "|||", s_hay);
        if (s_out !== 'LL') {
            ar_failed_tests.push('|||->LL, s_out==' + s_out +
                                 " \nGUID='20ff0038-7515-4eeb-a309-13d080705dd7'");
        } // if
        s_out = raudrohi.base.gsub('X', 'Z', s_hay);
        if (s_out !== '|||') {
            ar_failed_tests.push('Z->X, s_out==' + s_out +
                                 " \nGUID='fe798440-c507-4d68-82f8-13d080705dd7'");
        } // if
        s_hay = "A+B[D]*"
        s_out = raudrohi.base.gsub('X', '+', s_hay);
        if (s_out !== 'AXB[D]*') {
            ar_failed_tests.push('+->X, s_out==' + s_out +
                                 " \nGUID='3a97293b-5daa-492b-83f8-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name', 'raudrohi.base.selftests.replace_all');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('d6a40c21-2a5d-42ae-84f8-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.replace_all

raudrohi.selftests.ar_tests_1.push(raudrohi.base.selftests.replace_all);


//-------------------------------------------------------------------------

raudrohi.base.selftests.count_substrings = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        var b;
        //---tests-start------------------
        var s;
        var s_needle;
        var n;
        s = 'Hi42ωЖ42ωЖThere!42ωЖ';
        s_needle = '42ωЖ';
        n = raudrohi.base.count_substrings(s, s_needle);
        if (n !== 3) {
            ar_failed_tests.push('n==' + n + ' | 42ωЖ' +
                                 " \nGUID='3bd44d93-0848-4f2e-b3f8-13d080705dd7'");
        } // if
        s = 'HiAbAbAbAbThere!';
        s_needle = 'AbAb';
        n = raudrohi.base.count_substrings(s, s_needle);
        if (n !== 2) {
            ar_failed_tests.push('n==' + n + ' | AbAb' +
                                 " \nGUID='35df8f59-439d-4ce9-a3f8-13d080705dd7'");
        } // if
        s = 'HiAbAbAbAbThere!';
        s_needle = 'AFAb';
        n = raudrohi.base.count_substrings(s, s_needle);
        if (n !== 0) {
            ar_failed_tests.push('n==' + n + ' | AFAb' +
                                 " \nGUID='4b8276c5-277b-4b7f-85f8-13d080705dd7'");
        } // if
        s = 'XHi There!'
        s_needle = 'X';
        n = raudrohi.base.count_substrings(s, s_needle);
        if (n !== 1) {
            ar_failed_tests.push('n==' + n + ' | X' +
                                 " \nGUID='9f10db39-bc2d-48e5-a3e8-13d080705dd7'");
        } // if
        s = 'Hi There!Y'
        s_needle = 'Y';
        n = raudrohi.base.count_substrings(s, s_needle);
        if (n !== 1) {
            ar_failed_tests.push('n==' + n + ' | Y' +
                                 " \nGUID='c5b55f3b-4cfc-40dc-a4e8-13d080705dd7'");
        } // if
        s = 'Hi..There!'
        s_needle = '.'; // Tests that it's not interpreted as a regex.
        n = raudrohi.base.count_substrings(s, s_needle);
        if (n !== 2) {
            ar_failed_tests.push('n==' + n + ' | a point' +
                                 " \nGUID='70d9db3c-498a-4cc4-a3e8-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.base.selftests.count_substrings');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('457fedda-8994-40e7-87e8-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.count_substrings

raudrohi.selftests.ar_tests_1.push(raudrohi.base.selftests.count_substrings);


//-------------------------------------------------------------------------

raudrohi.base.selftests.regex_has_a_match = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var b = null;
        var s_haystack = null;
        var s_rgx = null;
        s_haystack = "44..,4,,5..6";
        s_rgx = '[.,]+'
        b = raudrohi.base.regex_has_a_match(new RegExp(s_rgx, "g"), s_haystack);
        if (b !== true) {
            ar_failed_tests.push('s_haystack="' + s_haystack + '" ' +
                                 's_rgx=="' + s_rgx + '"' +
                                 " \nGUID='94cff4d2-1827-47ff-a1e8-13d080705dd7'");
        } // if

        s_haystack = "44..,4,,5..6";
        s_rgx = 'a+'
        b = raudrohi.base.regex_has_a_match(new RegExp(s_rgx, "g"), s_haystack);
        if (b !== false) {
            ar_failed_tests.push('s_haystack="' + s_haystack + '" ' +
                                 's_rgx=="' + s_rgx + '"' +
                                 " \nGUID='26206053-ba37-4f72-b5d8-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.base.selftests.regex_has_a_match');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('3bc216da-6029-402c-95d8-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.regex_has_a_match

raudrohi.selftests.ar_tests_1.push(raudrohi.base.selftests.regex_has_a_match);

//-------------------------------------------------------------------------

raudrohi.base.selftests.string2float_part1 = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var a_triple;
        var b = true;
        a_triple = raudrohi.base.private_code.string2float(' 4,5 '); //Tests also for trimming.
        if (a_triple.a === true) {
            b = false;
            ar_failed_tests.push('a) 4,5');
        } // if
        if (a_triple.a === false) {
            b = false;
            if (a_triple.b !== 4.5) {
                ar_failed_tests.push('b) 4,5' +
                                     " \nGUID='3d09fafc-e8c5-49e7-b5d8-13d080705dd7'");
            } // if
            if (a_triple.b < 4.5) {
                ar_failed_tests.push('c) 4,5' +
                                     " \nGUID='2342e321-8e46-4d66-bfd8-13d080705dd7'");
            } // if
        } // if
        if (b === true) {
            ar_failed_tests.push('d) a_triple.a had an illegal value.' +
                                 " \nGUID='b6417d22-6196-410e-84d8-13d080705dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('4.6a');
        if (a_triple.a === false) {
            ar_failed_tests.push('4.6a' +
                                 " \nGUID='2fa73651-b8f6-49d7-8fd8-13d080705dd7'");
        } // if
        if (a_triple.c === true) {
            ar_failed_tests.push('4.6a  a_triple.c===true' +
                                 " \nGUID='4d9cbe64-6af0-4c81-a4c8-13d080705dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('a4.6');
        if (a_triple.a === false) {
            ar_failed_tests.push('a4.6' +
                                 " \nGUID='ee1ee626-dcbf-4ef7-a3c8-13d080705dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('4.7.');
        if (a_triple.a === false) {
            ar_failed_tests.push('4.7.' +
                                 " \nGUID='2b9d6a13-5d98-4a43-a4c8-13d080705dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('4.8.1');
        if (a_triple.a === false) {
            ar_failed_tests.push('4.8.1' +
                                 " \nGUID='a1a678ca-4b0d-4088-81c8-13d080705dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('4..9');
        if (a_triple.a === false) {
            ar_failed_tests.push('4..9' +
                                 " \nGUID='dbe70053-3a9e-40cb-a5c8-13d080705dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('5');
        if (a_triple.a === true) {
            ar_failed_tests.push('5' +
                                 " \nGUID='19b7f895-aaa9-4052-95c8-13d080705dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('-5');
        if (a_triple.a === true) {
            ar_failed_tests.push('-5' +
                                 " \nGUID='991dbd3c-7fd5-465f-b3b8-13d080705dd7'");
        } // if
        if (a_triple.c === true) {
            ar_failed_tests.push('-5 a_triple.c===true' +
                                 " \nGUID='3c5bf76f-5275-4e3d-b3b8-13d080705dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('-5.1');
        if (a_triple.a === true) {
            ar_failed_tests.push('-5.1' +
                                 " \nGUID='9fad7545-3bd7-49e2-81b8-13d080705dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('');
        if (a_triple.a === false) {
            ar_failed_tests.push('an empty string, test 1' +
                                 " \nGUID='0896d331-08bc-4e74-92b8-13d080705dd7'");
        } // if
        if (a_triple.c === false) {
            ar_failed_tests.push('an empty string, test 2' +
                                 " \nGUID='90584124-27f0-4d2a-83b8-13d080705dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('	 ');
        if (a_triple.a === false) {
            ar_failed_tests.push('an empty string after trimming, test 1' +
                                 " \nGUID='d1da1b34-b2e2-4879-84b8-13d080705dd7'");
        } // if
        if (a_triple.c === false) {
            ar_failed_tests.push('an empty string after trimming, test 2' +
                                 " \nGUID='1cc6b781-6661-4f3e-9ba8-13d080705dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('69greetingsTo1984');
        if (a_triple.a === false) {
            ar_failed_tests.push('69greetingsTo1984 was considered a float.' +
                                 " \nGUID='49815c11-26a5-4964-a4a8-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.base.selftests.string2float_part1');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('ec09a825-3033-4873-91a8-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.string2float_part1

raudrohi.selftests.ar_tests_1.push(raudrohi.base.selftests.string2float_part1);

//-------------------------------------------------------------------------

raudrohi.base.selftests.string2float_part2 = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var s_test = null;
        var ht_1 = null;
        var b = null;
        var fl = null;
        s_test = "44,5";
        ht_1 = raudrohi.base.string2float(s_test);
        b = ht_1.get('b_failure');
        if (b !== false) {
            ar_failed_tests.push('b, s_test==' + s_test +
                                 " \nGUID='a8523f4a-fd9d-4710-a1a8-13d080705dd7'");
        } // if
        fl = ht_1.get('value');
        if (fl < 44.5) {
            ar_failed_tests.push('fl, s_test==' + s_test +
                                 " \nGUID='0396fe28-95a5-4933-a4a8-13d080705dd7'");
        } // if

        s_test = "44,5,4";
        ht_1 = raudrohi.base.string2float(s_test);
        b = ht_1.get('b_failure');
        if (b !== true) {
            ar_failed_tests.push('b, s_test==' + s_test +
                                 " \nGUID='2b5c265a-6e7b-40b8-b398-13d080705dd7'");
        } // if

        s_test = "44+5";
        ht_1 = raudrohi.base.string2float(s_test);
        b = ht_1.get('b_failure');
        if (b !== true) {
            ar_failed_tests.push('b, s_test==' + s_test +
                                 " \nGUID='1a1e5e85-9395-4bc3-bd98-13d080705dd7'");
        } // if

        s_test = "44-";
        ht_1 = raudrohi.base.string2float(s_test);
        b = ht_1.get('b_failure');
        if (b !== true) {
            ar_failed_tests.push('b, s_test==' + s_test +
                                 " \nGUID='554d0e94-ddbc-4694-a298-13d080705dd7'");
        } // if
        raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_1);
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.base.selftests.string2float_part2');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('1f88ec4b-8441-400c-9398-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.string2float_part2

raudrohi.selftests.ar_tests_1.push(raudrohi.base.selftests.string2float_part2);

//-------------------------------------------------------------------------

raudrohi.base.selftests.node_exists = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        var b = false;
        //---tests-start------------------
        var s = 'ItS_nOt_veRy_liKeLy_tO_h2ve_ThiS6S_nnno0ooDE_InNpN_th9XE_DOM72';
        b = raudrohi.base.node_exists(s);
        if (b === true) {
            ar_failed_tests.push('Probably nonexisting DOM node <br/>' +
                                 'got considered to exist.' +
                                 " \nGUID='17bf3525-6eec-4a86-b198-13d080705dd7'");
        } // if
        // The node with an id of "output_screen" is
        // part of the run_selftests.html.
        b = raudrohi.base.node_exists('output_screen');
        if (b === false) {
            ar_failed_tests.push('Node "output_screen" was <br/>' +
                                 'considered to be missing.' +
                                 " \nGUID='84836409-7203-4238-8988-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name', 'raudrohi.base.selftests.node_exists');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('5d821830-7135-473f-b388-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.node_exists

raudrohi.selftests.ar_tests_1.push(raudrohi.base.selftests.node_exists);

//-------------------------------------------------------------------------

raudrohi.base.selftests.count_child_nodes_recursively = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        var b = false;
        //---tests-start------------------
        var id = 'for_testing_the_raudrohi_base_selftests_count_' +
                 'child_nodes_recursively';
        var n = raudrohi.base.count_child_nodes_recursively(id);
        if (n !== 6) {
            ar_failed_tests.push('6!=n==' + n +
                                 " \nGUID='1e5f28b3-0a2c-443b-9588-13d080705dd7'");
        } // if
        n = raudrohi.base.count_child_nodes_recursively(id + '2');
        if (n !== 0) {
            ar_failed_tests.push('0!=n==' + n +
                                 " \nGUID='89a27413-76a7-45db-8788-13d080705dd7'");
        } // if
        n = raudrohi.base.count_child_nodes_recursively(id + '3');
        if (n !== 0) {
            ar_failed_tests.push('0!=n==' + n +
                                 " \nGUID='610b7145-de58-4425-a188-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.base.selftests.count_child_nodes_recursively');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('55031094-eab1-463d-b388-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.count_child_nodes_recursively

raudrohi.selftests.ar_tests_1.push(raudrohi.base.selftests.count_child_nodes_recursively);

//-------------------------------------------------------------------------

raudrohi.base.selftests.node_tag_is = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        var b = false;
        //---tests-start------------------
        var id = 'for_testing_the_raudrohi_base_selftests_count_' +
                 'child_nodes_recursively';
        var a_node = document.getElementById(id);
        if (raudrohi.base.node_tag_is('div', a_node) !== true) {
            ar_failed_tests.push('failure 1 at div' +
                                 " \nGUID='5782a884-3d48-46f6-b588-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name', 'raudrohi.base.selftests.node_tag_is');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('590c1413-acb6-4b38-9278-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.node_tag_is

raudrohi.selftests.ar_tests_1.push(raudrohi.base.selftests.node_tag_is);

//-------------------------------------------------------------------------

raudrohi.base.selftests.string_contains_spacestabs = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var b = null;
        var s = null;
        s = 'NoSpacesTabsHere';
        b = raudrohi.base.string_contains_spacestabs(s);
        if (b !== false) {
            ar_failed_tests.push('s==' + s +
                                 " \nGUID='f1e96f4d-949e-41aa-a278-13d080705dd7'");
        } // if
        s = 'One SpaceInHere';
        b = raudrohi.base.string_contains_spacestabs(s);
        if (b !== true) {
            ar_failed_tests.push('s==' + s +
                                 " \nGUID='68e4884b-ea8d-4c5c-b478-13d080705dd7'");
        } // if
        s = 'One	TabInHere';
        b = raudrohi.base.string_contains_spacestabs(s);
        if (b !== true) {
            ar_failed_tests.push('s==' + s +
                                 " \nGUID='56263f50-3dfc-49f0-a478-13d080705dd7'");
        } // if
        s = 'Both Spaces	and Tabs	in here';
        b = raudrohi.base.string_contains_spacestabs(s);
        if (b !== true) {
            ar_failed_tests.push('s==' + s +
                                 " \nGUID='75672348-0898-4632-8278-13d080705dd7'");
        } // if
        s = 'OneSpaceAtTheEnd ';
        b = raudrohi.base.string_contains_spacestabs(s);
        if (b !== true) {
            ar_failed_tests.push('s==' + s +
                                 " \nGUID='6ae3d331-301e-4089-b268-13d080705dd7'");
        } // if
        s = ' OneSpaceAtTheStart';
        b = raudrohi.base.string_contains_spacestabs(s);
        if (b !== true) {
            ar_failed_tests.push('s==' + s +
                                 " \nGUID='3a23c392-e128-4de9-af68-13d080705dd7'");
        } // if
        s = 'OneTabAtTheEnd	';
        b = raudrohi.base.string_contains_spacestabs(s);
        if (b !== true) {
            ar_failed_tests.push('s==' + s +
                                 " \nGUID='c7d48c77-aea4-475e-b368-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.base.selftests.string_contains_spacestabs');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('34152f33-22cd-462e-8368-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.string_contains_spacestabs

raudrohi.selftests.ar_tests_1.push(raudrohi.base.selftests.string_contains_spacestabs);

//-------------------------------------------------------------------------

try {
} catch (err) {
    raudrohi.tmg('27d75401-473f-4661-a468-13d080705dd7',
        'Usually if things throw here, then it is because it is ' +
        'in global namespace and the onload mehtod has ' +
        'not been loaded yet.' + err);
} // catch


//-------------------------------------------------------------------------

raudrohi.base.selftests.a_set_of_tests_1 = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var a_pair = null;
        var s_hay = "ABC";
        a_pair = raudrohi.base.bisect(s_hay, 'B');
        if (a_pair.a !== "A") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='7f520f35-c29f-498f-b268-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.base.selftests.a_set_of_tests_1');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('3b801c8e-cfad-4a16-8558-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.a_set_of_tests_1
raudrohi.selftests.ar_tests_1.push(
    raudrohi.base.selftests.a_set_of_tests_1);

//-------------------------------------------------------------------------

raudrohi.base.selftests.test_concatarrayofstrings_t1 = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        var ar_x = [];
        var s_x = null;
        //---tests-start------------------
        ar_x.push("aa");
        s_x = raudrohi.base.s_concat_array_of_strings(ar_x);
        if (s_x != "aa") {
            ar_failed_tests.push('s_x=="' + s_x.toString() +
                                 " \nGUID='6f54695d-d8db-4960-9558-13d080705dd7'");
        } // if
        //--------------------------------
        ar_x.push("bb");
        s_x = raudrohi.base.s_concat_array_of_strings(ar_x);
        if (s_x != "aabb") {
            ar_failed_tests.push('s_x=="' + s_x.toString() +
                                 " \nGUID='10eb073c-17a3-44ba-b258-13d080705dd7'");
        } // if
        //--------------------------------
        ar_x.push("cc");
        s_x = raudrohi.base.s_concat_array_of_strings(ar_x);
        if (s_x != "aabbcc") {
            ar_failed_tests.push('s_x=="' + s_x.toString() +
                                 " \nGUID='24fd2e65-fe2a-4f3f-8958-13d080705dd7'");
        } // if
        //--------------------------------
        ar_x.push("dd");
        s_x = raudrohi.base.s_concat_array_of_strings(ar_x);
        if (s_x != "aabbccdd") {
            ar_failed_tests.push('s_x=="' + s_x.toString() +
                                 " \nGUID='007bb42e-c7e7-44b0-b258-13d080705dd7'");
        } // if
        //--------------------------------
        ar_x.push("ee");
        s_x = raudrohi.base.s_concat_array_of_strings(ar_x);
        if (s_x != "aabbccddee") {
            ar_failed_tests.push('s_x=="' + s_x.toString() +
                                 " \nGUID='307f4054-e1a9-44aa-a258-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.base.selftests.test_concatarrayofstrings_t1');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('d13bce2a-67b7-47fe-9248-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.test_concatarrayofstrings_t1
raudrohi.selftests.ar_tests_1.push(
    raudrohi.base.selftests.test_concatarrayofstrings_t1);

//-------------------------------------------------------------------------

raudrohi.base.selftests.test_assert_monotonic_increase_i = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        var ar_x = [];
        var b_throw = null;
        var s_GUID = '237c49e5-171a-4ad8-a248-13d080705dd7';
        var s_optional_errmsg_suffix = 'xxxx';
        var err_x = null;
        //---tests-start------------------
        b_throw = false;
        ar_x = [0, 1, 0, 0];
        try {
            raudrohi.base.assert_monotonic_increase_i(ar_x, s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== true) {
            ar_failed_tests.push('ar_x=="' + ar_x.toString() +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='c45428d3-5ff0-45c4-8448-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        ar_x = [-3, 0, 1, 2];
        try {
            raudrohi.base.assert_monotonic_increase_i(ar_x, s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw === true) {
            ar_failed_tests.push('ar_x=="' + ar_x.toString() +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='67568d31-268f-48e5-8448-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        ar_x = [0, 0, 0, 0];
        try {
            raudrohi.base.assert_monotonic_increase_i(ar_x, s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw === true) {
            ar_failed_tests.push('ar_x=="' + ar_x.toString() +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='0c468543-308e-47be-a548-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        ar_x = [0, 1, 1, 2];
        try {
            raudrohi.base.assert_monotonic_increase_i(ar_x, s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw === true) {
            ar_failed_tests.push('ar_x=="' + ar_x.toString() +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='a7f97737-9cd2-47d5-9438-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        ar_x = [0, 0, 0, (-1)];
        try {
            raudrohi.base.assert_monotonic_increase_i(ar_x, s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== true) {
            ar_failed_tests.push('ar_x=="' + ar_x.toString() +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='3055c332-2ee2-43e7-9c38-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        ar_x = [0];
        try {
            raudrohi.base.assert_monotonic_increase_i(ar_x, s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw === true) {
            ar_failed_tests.push('ar_x=="' + ar_x.toString() +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='2d229893-a61b-4bfa-8338-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        ar_x = [(-3)];
        try {
            raudrohi.base.assert_monotonic_increase_i(ar_x, s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw === true) {
            ar_failed_tests.push('ar_x=="' + ar_x.toString() +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='19618b61-2bbb-4423-be38-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        ar_x = [3];
        try {
            raudrohi.base.assert_monotonic_increase_i(ar_x, s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw === true) {
            ar_failed_tests.push('ar_x=="' + ar_x.toString() +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='5fba1b15-594e-453e-8438-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        ar_x = [1, 2];
        try {
            raudrohi.base.assert_monotonic_increase_i(ar_x, s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw === true) {
            ar_failed_tests.push('ar_x=="' + ar_x.toString() +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='1b257d42-a554-46f6-a338-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.base.selftests.test_assert_monotonic_increase_i');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('ee6ac65e-e539-4d7a-8128-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.test_assert_monotonic_increase_i
raudrohi.selftests.ar_tests_1.push(
    raudrohi.base.selftests.test_assert_monotonic_increase_i);

//-------------------------------------------------------------------------

raudrohi.base.selftests.test_assert_monotonic_decrease_i = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        var ar_x = [];
        var b_throw = null;
        var s_GUID = 'ea1821ba-dac5-4931-b328-13d080705dd7';
        var s_optional_errmsg_suffix = 'xxxx';
        var err_x = null;
        //---tests-start------------------
        b_throw = false;
        ar_x = [9, 1, 1, 2];
        try {
            raudrohi.base.assert_monotonic_decrease_i(ar_x, s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== true) {
            ar_failed_tests.push('ar_x=="' + ar_x.toString() +
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='a74f6b16-cf15-46a0-b528-13d080705dd7'");
        } // if
        b_throw = false;
        ar_x = [9, 1, null, 0];
        try {
            raudrohi.base.assert_monotonic_decrease_i(ar_x, s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== true) {
            ar_failed_tests.push('ar_x=="' + ar_x.toString() +
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='f432fa50-0ca2-43db-8528-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        ar_x = [3, 3, 1, 1];
        try {
            raudrohi.base.assert_monotonic_decrease_i(ar_x, s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw === true) {
            ar_failed_tests.push('ar_x=="' + ar_x.toString() +
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='a25e9f1c-618a-4cd1-9228-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        ar_x = [0, 0, 0, 0];
        try {
            raudrohi.base.assert_monotonic_decrease_i(ar_x, s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw === true) {
            ar_failed_tests.push('ar_x=="' + ar_x.toString() +
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='71c6cd25-bca1-4f27-8218-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.base.selftests.test_assert_monotonic_decrease_i');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('51b78e36-860e-45f3-9518-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.test_assert_monotonic_decrease_i
raudrohi.selftests.ar_tests_1.push(
    raudrohi.base.selftests.test_assert_monotonic_decrease_i);

//-------------------------------------------------------------------------

raudrohi.base.selftests.test_assert_is_HTML_ID = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        var b_throw = null;
        var s_GUID = "'9c7f431c-460a-4bd9-8418-13d080705dd7'";
        var s_optional_errmsg_suffix = 'xxxx';
        var err_x = null;
        //---tests-start------------------
        b_throw = false;
        x_in = 42;
        try {
            raudrohi.base.assert_is_HTML_ID(x_in, 'x_in', s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== true) {
            ar_failed_tests.push('x_in=="' + x_in +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='5499f7a4-5f71-4466-a418-13d080705dd7'");
        } // if
        //--------------------------------
        //--------------------------------
        b_throw = false;
        x_in = "";
        try {
            raudrohi.base.assert_is_HTML_ID(x_in, 'x_in', s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== true) {
            ar_failed_tests.push('x_in=="' + x_in +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='de6f8159-b0d0-4499-a418-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        x_in = "a b";
        try {
            raudrohi.base.assert_is_HTML_ID(x_in, 'x_in', s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== true) {
            ar_failed_tests.push('x_in=="' + x_in +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='32b1f4b3-91bb-4d64-b208-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        x_in = " ab";
        try {
            raudrohi.base.assert_is_HTML_ID(x_in, 'x_in', s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== true) {
            ar_failed_tests.push('x_in=="' + x_in +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='1dc5a042-4f32-4aab-b408-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        x_in = "4ab";
        try {
            raudrohi.base.assert_is_HTML_ID(x_in, 'x_in', s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== true) {
            ar_failed_tests.push('x_in=="' + x_in +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='758ea845-050e-4d2e-9408-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        x_in = ".ab";
        try {
            raudrohi.base.assert_is_HTML_ID(x_in, 'x_in', s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== true) {
            ar_failed_tests.push('x_in=="' + x_in +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='40943d52-5c54-452b-8208-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        x_in = ":ab";
        try {
            raudrohi.base.assert_is_HTML_ID(x_in, 'x_in', s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== true) {
            ar_failed_tests.push('x_in=="' + x_in +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='68396348-ba9e-44c2-b208-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        x_in = ";ab";
        try {
            raudrohi.base.assert_is_HTML_ID(x_in, 'x_in', s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw !== true) {
            ar_failed_tests.push('x_in=="' + x_in +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='1312ebe5-36d9-4838-87f7-13d080705dd7'");
        } // if
        //--------------------------------
        //--------test-style--change--from--throwing-to-nonthrowing----
        //--------------------------------
        b_throw = false;
        x_in = "b";
        try {
            raudrohi.base.assert_is_HTML_ID(x_in, 'x_in', s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw === true) {
            ar_failed_tests.push('x_in=="' + x_in +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='ff093a4e-5c24-473d-b1f7-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        x_in = "ab";
        try {
            raudrohi.base.assert_is_HTML_ID(x_in, 'x_in', s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw === true) {
            ar_failed_tests.push('x_in=="' + x_in +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='1ee00c34-1e1b-4eee-b4f7-13d080705dd7'");
        } // if
        //--------------------------------
        b_throw = false;
        x_in = "b42";
        try {
            raudrohi.base.assert_is_HTML_ID(x_in, 'x_in', s_GUID);
        } catch (err) {
            b_throw = true;
            err_x = err
        } // catch
        if (b_throw === true) {
            ar_failed_tests.push('x_in=="' + x_in +
                                 "\"\nerr_x==" + err_x +
                                 "\n  GUID='3899b51e-62dc-4d2c-b3f7-13d080705dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.base.selftests.test_assert_is_HTML_ID');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('1a246e34-67a7-4608-a9f7-13d080705dd7', err);
    } // catch
} // raudrohi.base.selftests.test_assert_is_HTML_ID
raudrohi.selftests.ar_tests_1.push(
    raudrohi.base.selftests.test_assert_is_HTML_ID);

//=========================================================================
