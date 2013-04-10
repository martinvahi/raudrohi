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
                                 " \nGUID='2331b304-4052-4343-8231-200040904dd7'");
        } // if
        b = false
        if (b === true) {
            ar_failed_tests.push('false===b===true' +
                                 " \nGUID='2e754491-a74a-4dee-8041-200040904dd7'");
        } // if
        b = true
        if (b === false) {
            ar_failed_tests.push('true===b===false' +
                                 " \nGUID='84033501-3f36-401e-b121-200040904dd7'");
        } // if
        var xy = {};
        xy.xx = {};
        xy.xx.bb = true;
        if (xy.xx.bb === false) {
            ar_failed_tests.push('true===xy.xx.bb===false' +
                                 " \nGUID='464a32d5-abea-4c9d-8051-200040904dd7'");
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
        raudrohi.tmg('6387597e-93b0-424a-9071-200040904dd7', err);
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
                                 " \nGUID='3de11795-0324-4aa5-a021-200040904dd7'");
        } // if
        if (a_pair.b !== "C") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='91cbb4d1-ada3-410b-9710-200040904dd7'");
        } // if
        a_pair = raudrohi.base.bisect(s_hay, 'A');
        if (a_pair.a !== "") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='2c184dc4-f622-458b-be10-200040904dd7'");
        } // if
        if (a_pair.b !== "BC") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='48aa67b4-827e-46bf-b410-200040904dd7'");
        } // if
        a_pair = raudrohi.base.bisect(s_hay, 'C');
        if (a_pair.a !== "AB") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='342a4f21-b189-4425-9150-200040904dd7'");
        } // if
        if (a_pair.b !== "") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='41db49c1-03b3-41e0-9730-200040904dd7'");
        } // if

        s_hay = "|||";
        a_pair = raudrohi.base.bisect(s_hay, '|||');
        if (a_pair.a !== "") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='c9a05a45-d1cd-4c7f-9c30-200040904dd7'");
        } // if
        if (a_pair.b !== "") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='3c148375-8deb-4b31-be20-200040904dd7'");
        } // if

        s_hay = "a|||b|||c";
        a_pair = raudrohi.base.bisect(s_hay, '|||');
        if (a_pair.a !== "a") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='32b84753-2189-4869-952f-200040904dd7'");
        } // if
        if (a_pair.b !== "b|||c") {
            ar_failed_tests.push('s_hay=="' + s_hay +
                                 '" a_pair.a=="' + a_pair.a + '" a_pair.b=="' +
                                 a_pair.b + '".' +
                                 " \nGUID='345ee056-afd1-4cf0-ba4f-200040904dd7'");
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
        raudrohi.tmg('fe26d501-3b75-4194-834f-200040904dd7', err);
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
                                 " \nGUID='b49b7c05-88f5-42df-975f-200040904dd7'");
        } // if
        s_out = raudrohi.base.gsub('M', 'XX', s_hay);
        if (s_out !== 'MX') {
            ar_failed_tests.push('XX->M, s_out==' + s_out +
                                 " \nGUID='01c24b9c-ea41-48ff-b01f-200040904dd7'");
        } // if
        s_hay = "line1\nline2";
        s_out = raudrohi.base.gsub('F', "\n", s_hay);
        if (s_out !== 'line1Fline2') {
            ar_failed_tests.push("\\n" + '->F, s_out==' + s_out +
                                 " \nGUID='b3ef199a-e614-4a2e-a73f-200040904dd7'");
        } // if
        s_hay = '|||';
        s_out = raudrohi.base.gsub('LL', "|||", s_hay);
        if (s_out !== 'LL') {
            ar_failed_tests.push('|||->LL, s_out==' + s_out +
                                 " \nGUID='4c938f92-4057-4b15-9b4e-200040904dd7'");
        } // if
        s_out = raudrohi.base.gsub('X', 'Z', s_hay);
        if (s_out !== '|||') {
            ar_failed_tests.push('Z->X, s_out==' + s_out +
                                 " \nGUID='5cc45155-126e-4a96-b13e-200040904dd7'");
        } // if
        s_hay = "A+B[D]*"
        s_out = raudrohi.base.gsub('X', '+', s_hay);
        if (s_out !== 'AXB[D]*') {
            ar_failed_tests.push('+->X, s_out==' + s_out +
                                 " \nGUID='81992251-af35-409b-802e-200040904dd7'");
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
        raudrohi.tmg('55a1e674-a916-446a-ba1e-200040904dd7', err);
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
                                 " \nGUID='258e1e9a-ed68-455b-9ace-200040904dd7'");
        } // if
        s = 'HiAbAbAbAbThere!';
        s_needle = 'AbAb';
        n = raudrohi.base.count_substrings(s, s_needle);
        if (n !== 2) {
            ar_failed_tests.push('n==' + n + ' | AbAb' +
                                 " \nGUID='4b6b22a4-7bd6-407c-932e-200040904dd7'");
        } // if
        s = 'HiAbAbAbAbThere!';
        s_needle = 'AFAb';
        n = raudrohi.base.count_substrings(s, s_needle);
        if (n !== 0) {
            ar_failed_tests.push('n==' + n + ' | AFAb' +
                                 " \nGUID='804f2643-2551-4c33-8c4e-200040904dd7'");
        } // if
        s = 'XHi There!'
        s_needle = 'X';
        n = raudrohi.base.count_substrings(s, s_needle);
        if (n !== 1) {
            ar_failed_tests.push('n==' + n + ' | X' +
                                 " \nGUID='f2b28ffc-a46a-4dfc-a01e-200040904dd7'");
        } // if
        s = 'Hi There!Y'
        s_needle = 'Y';
        n = raudrohi.base.count_substrings(s, s_needle);
        if (n !== 1) {
            ar_failed_tests.push('n==' + n + ' | Y' +
                                 " \nGUID='1d71b23f-25c2-4aec-94dd-200040904dd7'");
        } // if
        s = 'Hi..There!'
        s_needle = '.'; // Tests that it's not interpreted as a regex.
        n = raudrohi.base.count_substrings(s, s_needle);
        if (n !== 2) {
            ar_failed_tests.push('n==' + n + ' | a point' +
                                 " \nGUID='2a708a34-655c-4eac-8c3d-200040904dd7'");
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
        raudrohi.tmg('1f7dd412-1826-4dd7-b31d-200040904dd7', err);
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
                                 " \nGUID='159251a3-e0e0-43f2-8c3d-200040904dd7'");
        } // if

        s_haystack = "44..,4,,5..6";
        s_rgx = 'a+'
        b = raudrohi.base.regex_has_a_match(new RegExp(s_rgx, "g"), s_haystack);
        if (b !== false) {
            ar_failed_tests.push('s_haystack="' + s_haystack + '" ' +
                                 's_rgx=="' + s_rgx + '"' +
                                 " \nGUID='a7ce8223-39d1-48cf-ae2d-200040904dd7'");
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
        raudrohi.tmg('34e03363-81a5-4505-903d-200040904dd7', err);
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
                                     " \nGUID='474a0922-4631-4ff7-892d-200040904dd7'");
            } // if
            if (a_triple.b < 4.5) {
                ar_failed_tests.push('c) 4,5' +
                                     " \nGUID='05568cd1-822a-4b2b-905d-200040904dd7'");
            } // if
        } // if
        if (b === true) {
            ar_failed_tests.push('d) a_triple.a had an illegal value.' +
                                 " \nGUID='35273b17-941f-4649-b51c-200040904dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('4.6a');
        if (a_triple.a === false) {
            ar_failed_tests.push('4.6a' +
                                 " \nGUID='1ad6ae04-5ef1-4f1e-b63c-200040904dd7'");
        } // if
        if (a_triple.c === true) {
            ar_failed_tests.push('4.6a  a_triple.c===true' +
                                 " \nGUID='5360bd92-7766-46b0-b02c-200040904dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('a4.6');
        if (a_triple.a === false) {
            ar_failed_tests.push('a4.6' +
                                 " \nGUID='59bf1fd5-3220-4779-b32c-200040904dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('4.7.');
        if (a_triple.a === false) {
            ar_failed_tests.push('4.7.' +
                                 " \nGUID='a5d5e0c7-971a-482a-9b2c-200040904dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('4.8.1');
        if (a_triple.a === false) {
            ar_failed_tests.push('4.8.1' +
                                 " \nGUID='925a0d4a-10b7-48ae-831c-200040904dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('4..9');
        if (a_triple.a === false) {
            ar_failed_tests.push('4..9' +
                                 " \nGUID='645f37e8-5f49-47f9-9b1c-200040904dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('5');
        if (a_triple.a === true) {
            ar_failed_tests.push('5' +
                                 " \nGUID='48ef8a25-ce3e-4652-a71b-200040904dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('-5');
        if (a_triple.a === true) {
            ar_failed_tests.push('-5' +
                                 " \nGUID='3b5d12e2-c7ff-4475-b01b-200040904dd7'");
        } // if
        if (a_triple.c === true) {
            ar_failed_tests.push('-5 a_triple.c===true' +
                                 " \nGUID='d5116872-60f5-443d-8c5b-200040904dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('-5.1');
        if (a_triple.a === true) {
            ar_failed_tests.push('-5.1' +
                                 " \nGUID='d23315e3-b7ce-449d-9ecb-200040904dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('');
        if (a_triple.a === false) {
            ar_failed_tests.push('an empty string, test 1' +
                                 " \nGUID='85e7253a-75f5-4940-b44b-200040904dd7'");
        } // if
        if (a_triple.c === false) {
            ar_failed_tests.push('an empty string, test 2' +
                                 " \nGUID='1a782f45-a411-4281-b32b-200040904dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('	 ');
        if (a_triple.a === false) {
            ar_failed_tests.push('an empty string after trimming, test 1' +
                                 " \nGUID='14b8b47f-d0cb-46a2-bc2b-200040904dd7'");
        } // if
        if (a_triple.c === false) {
            ar_failed_tests.push('an empty string after trimming, test 2' +
                                 " \nGUID='2b06908c-1078-4acf-831a-200040904dd7'");
        } // if
        a_triple = raudrohi.base.private_code.string2float('69greetingsTo1984');
        if (a_triple.a === false) {
            ar_failed_tests.push('69greetingsTo1984 was considered a float.' +
                                 " \nGUID='19744df1-ac44-4fef-a22a-200040904dd7'");
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
        raudrohi.tmg('e5c0b593-28dc-4446-a75a-200040904dd7', err);
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
                                 " \nGUID='1d430e21-c282-4837-b42a-200040904dd7'");
        } // if
        fl = ht_1.get('value');
        if (fl < 44.5) {
            ar_failed_tests.push('fl, s_test==' + s_test +
                                 " \nGUID='756a0141-a2ce-45a1-8f8a-200040904dd7'");
        } // if

        s_test = "44,5,4";
        ht_1 = raudrohi.base.string2float(s_test);
        b = ht_1.get('b_failure');
        if (b !== true) {
            ar_failed_tests.push('b, s_test==' + s_test +
                                 " \nGUID='3bf98a83-bc00-4309-972a-200040904dd7'");
        } // if

        s_test = "44+5";
        ht_1 = raudrohi.base.string2float(s_test);
        b = ht_1.get('b_failure');
        if (b !== true) {
            ar_failed_tests.push('b, s_test==' + s_test +
                                 " \nGUID='1fd807a5-a389-4a0c-b02a-200040904dd7'");
        } // if

        s_test = "44-";
        ht_1 = raudrohi.base.string2float(s_test);
        b = ht_1.get('b_failure');
        if (b !== true) {
            ar_failed_tests.push('b, s_test==' + s_test +
                                 " \nGUID='43ca1cc1-7d81-41c1-b71a-200040904dd7'");
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
        raudrohi.tmg('71e14a0e-9dc9-4333-ae89-200040904dd7', err);
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
                                 " \nGUID='5a20eb82-b601-4a38-be59-200040904dd7'");
        } // if
        // The node with an id of "output_screen" is
        // part of the run_selftests.html.
        b = raudrohi.base.node_exists('output_screen');
        if (b === false) {
            ar_failed_tests.push('Node "output_screen" was <br/>' +
                                 'considered to be missing.' +
                                 " \nGUID='43b80be4-e5c2-45bb-bc19-200040904dd7'");
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
        raudrohi.tmg('cbad7d7a-9436-426b-8f29-200040904dd7', err);
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
                                 " \nGUID='10c7f265-4349-4455-a159-200040904dd7'");
        } // if
        n = raudrohi.base.count_child_nodes_recursively(id + '2');
        if (n !== 0) {
            ar_failed_tests.push('0!=n==' + n +
                                 " \nGUID='209bf673-435a-450c-b659-200040904dd7'");
        } // if
        n = raudrohi.base.count_child_nodes_recursively(id + '3');
        if (n !== 0) {
            ar_failed_tests.push('0!=n==' + n +
                                 " \nGUID='5f6aa471-29d8-4230-9448-200040904dd7'");
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
        raudrohi.tmg('45e88ea5-6af5-4f31-b928-200040904dd7', err);
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
                                 " \nGUID='afe27469-5831-4135-9058-200040904dd7'");
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
        raudrohi.tmg('91a3dc97-6963-44f8-9868-200040904dd7', err);
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
                                 " \nGUID='1545d9b8-6451-42a6-96c8-200040904dd7'");
        } // if
        s = 'One SpaceInHere';
        b = raudrohi.base.string_contains_spacestabs(s);
        if (b !== true) {
            ar_failed_tests.push('s==' + s +
                                 " \nGUID='4e2faf24-a28c-426f-b718-200040904dd7'");
        } // if
        s = 'One	TabInHere';
        b = raudrohi.base.string_contains_spacestabs(s);
        if (b !== true) {
            ar_failed_tests.push('s==' + s +
                                 " \nGUID='c2be5479-f0bd-46f2-b428-200040904dd7'");
        } // if
        s = 'Both Spaces	and Tabs	in here';
        b = raudrohi.base.string_contains_spacestabs(s);
        if (b !== true) {
            ar_failed_tests.push('s==' + s +
                                 " \nGUID='36e77004-dd0d-44fa-b057-200040904dd7'");
        } // if
        s = 'OneSpaceAtTheEnd ';
        b = raudrohi.base.string_contains_spacestabs(s);
        if (b !== true) {
            ar_failed_tests.push('s==' + s +
                                 " \nGUID='29e59d33-4b8f-4c79-ab27-200040904dd7'");
        } // if
        s = ' OneSpaceAtTheStart';
        b = raudrohi.base.string_contains_spacestabs(s);
        if (b !== true) {
            ar_failed_tests.push('s==' + s +
                                 " \nGUID='957fe91e-3f14-4718-9d27-200040904dd7'");
        } // if
        s = 'OneTabAtTheEnd	';
        b = raudrohi.base.string_contains_spacestabs(s);
        if (b !== true) {
            ar_failed_tests.push('s==' + s +
                                 " \nGUID='d21ad7ed-dfff-45b4-8d17-200040904dd7'");
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
        raudrohi.tmg('7177faf5-36e2-4b4e-9c27-200040904dd7', err);
    } // catch
} // raudrohi.base.selftests.string_contains_spacestabs

raudrohi.selftests.ar_tests_1.push(raudrohi.base.selftests.string_contains_spacestabs);

//-------------------------------------------------------------------------

try {
} catch (err) {
    raudrohi.tmg('136c7456-5731-453f-bb37-200040904dd7',
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
                                 " \nGUID='25f15531-76af-493d-a316-200040904dd7'");
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
        raudrohi.tmg('05678b38-d270-4eb4-ac26-200040904dd7', err);
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
                                 " \nGUID='271a4065-2c2a-4a95-bf26-200040904dd7'");
        } // if
        //--------------------------------
        ar_x.push("bb");
        s_x = raudrohi.base.s_concat_array_of_strings(ar_x);
        if (s_x != "aabb") {
            ar_failed_tests.push('s_x=="' + s_x.toString() +
                                 " \nGUID='856a827b-c071-4a36-a056-200040904dd7'");
        } // if
        //--------------------------------
        ar_x.push("cc");
        s_x = raudrohi.base.s_concat_array_of_strings(ar_x);
        if (s_x != "aabbcc") {
            ar_failed_tests.push('s_x=="' + s_x.toString() +
                                 " \nGUID='3221540a-238d-44b2-be46-200040904dd7'");
        } // if
        //--------------------------------
        ar_x.push("dd");
        s_x = raudrohi.base.s_concat_array_of_strings(ar_x);
        if (s_x != "aabbccdd") {
            ar_failed_tests.push('s_x=="' + s_x.toString() +
                                 " \nGUID='4c79c322-5471-4212-ad46-200040904dd7'");
        } // if
        //--------------------------------
        ar_x.push("ee");
        s_x = raudrohi.base.s_concat_array_of_strings(ar_x);
        if (s_x != "aabbccddee") {
            ar_failed_tests.push('s_x=="' + s_x.toString() +
                                 " \nGUID='c2de7ed5-a9b8-4564-a255-200040904dd7'");
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
        raudrohi.tmg('4bea6b34-38ca-4ef0-9455-200040904dd7', err);
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
        var s_GUID = '35b4b3c4-b60e-42e6-8135-200040904dd7';
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
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='3740d115-faf1-4eb9-9955-200040904dd7'");
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
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='4d37f895-cd72-46d7-bf45-200040904dd7'");
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
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='f45d3cb6-781c-43f8-ae65-200040904dd7'");
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
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='48c22c44-d033-4d25-8945-200040904dd7'");
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
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='c13e87a4-5db0-4425-86d4-200040904dd7'");
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
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='55ed5073-841c-429c-af24-200040904dd7'");
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
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='526fcdc3-ea64-4468-ad34-200040904dd7'");
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
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='e61334a6-1d8f-4675-b034-200040904dd7'");
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
                                 "\nerr_x==" + err_x +
                                 "\n  GUID='812799f5-27a0-4106-abc4-200040904dd7'");
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
        raudrohi.tmg('46ac1441-47c2-480c-b514-200040904dd7', err);
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
        var s_GUID = '46282694-171c-490b-be23-200040904dd7';
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
                                 "\n  GUID='192fb7ee-29e3-4179-ac63-200040904dd7'");
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
                                 "\n  GUID='19bf1334-7f32-414d-b243-200040904dd7'");
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
                                 "\n  GUID='37a73562-ce5f-4d61-be53-200040904dd7'");
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
                                 "\n  GUID='443c9135-00a0-489b-9f33-200040904dd7'");
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
        raudrohi.tmg('e1c5c55c-8c3b-4371-be82-200040904dd7', err);
    } // catch
} // raudrohi.base.selftests.test_assert_monotonic_decrease_i
raudrohi.selftests.ar_tests_1.push(
    raudrohi.base.selftests.test_assert_monotonic_decrease_i);


//=========================================================================
