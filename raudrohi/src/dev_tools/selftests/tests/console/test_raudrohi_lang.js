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


if (window.raudrohi_lang_exists !== true) {
    window.raudrohi.lang = {};
    window.raudrohi_lang_exists = true;
} // if
if (window.raudrohi_lang_private_code_exists !== true) {
    window.raudrohi.lang.private_code = {};
    window.raudrohi_lang_private_code_exists = true;
} // if
if (window.raudrohi_lang_debug_exists !== true) {
    window.raudrohi.lang.debug = {};
    window.raudrohi_lang_debug_exists = true;
} // if

if (window.raudrohi_lang_selftests_exists !== true) {
    raudrohi.lang.selftests = {};
    window.raudrohi_lang_selftests_exists = true;
} // if

//-------------------------------------------------------------------------
try {
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.generate_nonexisting_needle);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.str2lines);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.number2str);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.is_a_hexadecimal_number);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.fill_form);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.queueCache);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.str2regexstr);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.ar2xseparated_list);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.normalize_linebreaks);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.word_wrap);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.word_wrap_with_normalization_t1);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.get_from_ht_by_array_of_keys_index);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.cg_table_t1);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.s_dec2hex);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.i_hex2dec);
    raudrohi.selftests.ar_tests_1.push(
        raudrohi.lang.selftests.i_number_of_digits);
} catch (err) {
    raudrohi.tmg('4e8c71c4-b35e-4565-93a1-00c160904dd7',
        'Usually if things throw here, then it is because it is ' +
        'in global namespace and the onload mehtod has ' +
        'not been loaded yet.' + err);
} // catch

//-------------------------------------------------------------------------
raudrohi.lang.selftests.is_an_HTML_color = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        if (raudrohi.lang.is_an_HTML_color('#ff00ff') !== true) {
            ar_failed_tests.push('#ff00ff' +
                                 " \nGUID='f1fee7c3-ef9e-4147-92a1-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_an_HTML_color('Af00ff') === true) {
            ar_failed_tests.push('Af00ff' +
                                 " \nGUID='09d25332-036b-4e8a-93a1-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_an_HTML_color('#Xf00ff') === true) {
            ar_failed_tests.push('#Xf00ff' +
                                 " \nGUID='4eb305c3-48c9-4da2-b2a1-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_an_HTML_color('#0f00ffe') === true) {
            ar_failed_tests.push('#0f00ffe' +
                                 " \nGUID='1da45ba5-4270-4c61-92a1-00c160904dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.lang.selftests.is_an_HTML_color');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('2861a921-3781-4f5a-83a1-00c160904dd7', err);
    } // catch
} // raudrohi.lang.selftests.is_an_HTML_color
raudrohi.selftests.ar_tests_1.push(
    raudrohi.lang.selftests.is_an_HTML_color);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.is_a_whole_number_x_or_s = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        if (raudrohi.lang.is_a_whole_number_x_or_s('ff') !== false) {
            ar_failed_tests.push('ff' +
                                 " \nGUID='cda32e25-efd3-4468-a191-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s('') !== false) {
            ar_failed_tests.push('emptystring' +
                                 " \nGUID='5d84c862-e78f-4a73-a591-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s(' ') !== false) {
            ar_failed_tests.push('a_space' +
                                 " \nGUID='1693ea27-d72a-47f9-b391-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s('1 2') !== false) {
            ar_failed_tests.push('1a_space2' +
                                 " \nGUID='a654965f-c179-4d35-9491-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s('1.9') !== false) {
            ar_failed_tests.push('1.9' +
                                 " \nGUID='4980fee2-35b5-4529-a391-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s('1,9') !== false) {
            ar_failed_tests.push('1,9' +
                                 " \nGUID='32f85411-ed86-4130-b391-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s('0.0') !== false) {
            ar_failed_tests.push('0.0' +
                                 " \nGUID='5d44cddf-82f6-4a2a-b391-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s('0') !== true) {
            ar_failed_tests.push('0 as a string' +
                                 " \nGUID='73d65519-a332-41a2-a181-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s('000') !== true) {
            ar_failed_tests.push('000' +
                                 " \nGUID='36433301-a2c0-4ba9-9181-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s('0,0') !== false) {
            ar_failed_tests.push('0,0' +
                                 " \nGUID='f01eb155-75f8-4e2c-a381-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s('0a0') !== false) {
            ar_failed_tests.push('0a0' +
                                 " \nGUID='47a39ec0-eba4-4cad-b381-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s('9x9') !== false) {
            ar_failed_tests.push('9x9' +
                                 " \nGUID='525c7d57-ee63-4f0b-9481-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s('9 ') !== false) {
            ar_failed_tests.push('9a_space' +
                                 " \nGUID='5fbf4551-15ec-4d8a-9481-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s('  9') !== false) {
            ar_failed_tests.push('double_space9' +
                                 " \nGUID='178323b4-f353-465b-8581-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s('	') !== false) {
            ar_failed_tests.push('a_tab' +
                                 " \nGUID='aa5f5242-aef1-498e-9271-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s("1\n2") !== false) {
            ar_failed_tests.push('1linesbreak2' +
                                 " \nGUID='5c2e26e8-421d-412e-b271-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s('123') !== true) {
            ar_failed_tests.push('123' +
                                 " \nGUID='2c98e320-2f6e-462b-b371-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s(0) !== true) {
            ar_failed_tests.push('0 as a Number' +
                                 " \nGUID='801c1635-efe7-48e5-9271-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s(124) !== true) {
            ar_failed_tests.push('124 as a Number' +
                                 " \nGUID='3c5efc30-abea-475e-9171-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s(122.7) !== false) {
            ar_failed_tests.push('122.7 as a Number' +
                                 " \nGUID='3eb31520-6d25-4112-8571-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number_x_or_s(125.0) !== true) {
            // This tests the fact that JavaScript
            // whole numbers are stored as doubles.
            ar_failed_tests.push('125.0 as a Number' +
                                 " \nGUID='b7570de8-2ae2-4afa-b171-00c160904dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.lang.selftests.is_a_whole_number_x_or_s');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    }
    catch (err) {
        raudrohi.tmg('8766185a-9562-4c27-a561-00c160904dd7', err);
    } // catch
} // raudrohi.lang.selftests.is_a_whole_number_x_or_s
raudrohi.selftests.ar_tests_1.push(
    raudrohi.lang.selftests.is_a_whole_number_x_or_s);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.is_a_whole_number = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        if (raudrohi.lang.is_a_whole_number('42') !== false) {
            ar_failed_tests.push('42 as a string' +
                                 " \nGUID='55a010d7-d3f9-4072-b161-00c160904dd7'");
        } // if
        if (raudrohi.lang.is_a_whole_number(72) !== true) {
            ar_failed_tests.push('72 as a Number' +
                                 " \nGUID='f0ae99bd-13e0-434c-b561-00c160904dd7'");
        } // if
        try {
            raudrohi.lang.assert_is_a_whole_number(4442, '4442',
                '01a631e3-378b-4b93-a761-00c160904dd7');
        } catch (err) {
            ar_failed_tests.push('4442 as a Number. err==' + err +
                                 " \nGUID='5bbfc493-8a7a-4ebd-a261-00c160904dd7'");
        } // catch
        try {
            raudrohi.lang.assert_is_a_whole_number(4445.7, '4445.7',
                '2c636c47-03d1-4ba1-b461-00c160904dd7');
            ar_failed_tests.push('4445.7 as a Number' +
                                 " \nGUID='6279e04f-7716-401d-b361-00c160904dd7'");
        }
        catch (err) {
        } // catch
        try {
            raudrohi.lang.assert_is_a_whole_number('43', '4445.7',
                '497d35ef-b813-4f45-9261-00c160904dd7');
            ar_failed_tests.push('43 as a String' +
                                 " \nGUID='45693143-d55b-4596-8351-00c160904dd7'");
        } catch (err) {
        } // catch
        try {
            raudrohi.lang.assert_is_a_whole_number('47.2', '4445.7',
                '748eed19-9ff9-4cc7-9251-00c160904dd7');
            ar_failed_tests.push('47.2 as a String' +
                                 " \nGUID='9379fef1-486d-4761-b251-00c160904dd7'");
        } catch (err) {
        } // catch
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.lang.selftests.is_a_whole_number');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('75de3957-9bab-42e7-9551-00c160904dd7', err);
    } // catch
} // raudrohi.lang.selftests.is_a_whole_number
raudrohi.selftests.ar_tests_1.push(
    raudrohi.lang.selftests.is_a_whole_number);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.ar_interpolate = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var i = 0;
        var fd_x1 = 42.3;
        var fd_x2 = 57.2;
        var ar_x = null;
        var fd_min = 0;
        var fd_max = 3;
        var i_maximum_number_of_intermittant_numbers = 2;
        var b_use_integer_mode = true;
        //------
        fd_x1 = 42.3;
        fd_min = fd_x1;
        fd_max = fd_x1;
        b_use_integer_mode = false;
        ar_x = raudrohi.lang.ar_interpolate(fd_min, fd_max,
            i_maximum_number_of_intermittant_numbers, b_use_integer_mode);
        i = ar_x.length;
        if (i !== 1) {
            ar_failed_tests.push('test 1.1, ar_x.length==' + i +
                                 " \nGUID='da684544-d280-4e94-b351-00c160904dd7'");
        } // if
        fd_x2 = ar_x[0];
        if (fd_x2 !== fd_x1) {
            ar_failed_tests.push('test 1.2, fd_x2==' + fd_x2 +
                                 " \nGUID='d8fd6032-84b9-4ef4-b351-00c160904dd7'");
        } // if
        //------
        fd_min = 1;
        fd_max = 44.7;
        i_maximum_number_of_intermittant_numbers = 0;
        b_use_integer_mode = false;
        ar_x = raudrohi.lang.ar_interpolate(fd_min, fd_max,
            i_maximum_number_of_intermittant_numbers, b_use_integer_mode);
        i = ar_x.length;
        if (i !== 2) {
            ar_failed_tests.push('test 2.1, ar_x.length==' + i +
                                 " \nGUID='24c45994-ba5e-41e4-8151-00c160904dd7'");
        } // if
        fd_x2 = ar_x[0];
        if (fd_x2 !== fd_min) {
            ar_failed_tests.push('test 2.2, fd_x2==' + fd_x2 +
                                 " \nGUID='19f33d32-b5d0-4785-a351-00c160904dd7'");
        } // if
        fd_x2 = ar_x[1];
        if (fd_x2 !== fd_max) {
            ar_failed_tests.push('test 2.3, fd_x2==' + fd_x2 +
                                 " \nGUID='6a3ce71e-a968-4fd8-b241-00c160904dd7'");
        } // if
        //------
        fd_min = 1;
        fd_max = 44.7;
        i_maximum_number_of_intermittant_numbers = 1;
        b_use_integer_mode = false;
        ar_x = raudrohi.lang.ar_interpolate(fd_min, fd_max,
            i_maximum_number_of_intermittant_numbers, b_use_integer_mode);
        i = ar_x.length;
        if (i !== 3) {
            ar_failed_tests.push('test 3.1, ar_x.length==' + i +
                                 " \nGUID='ffaec34f-c9c6-402b-a541-00c160904dd7'");
        } // if
        fd_x2 = ar_x[0];
        if (fd_x2 !== fd_min) {
            ar_failed_tests.push('test 3.2, fd_x2==' + fd_x2 +
                                 " \nGUID='a0b37714-c95e-4b88-b141-00c160904dd7'");
        } // if
        fd_x2 = ar_x[1];
        if ((fd_x2 === fd_min) || (fd_x2 === fd_max)) {
            ar_failed_tests.push('test 3.3, fd_x2==' + fd_x2 +
                                 " \nGUID='56c54602-79c2-43e0-9341-00c160904dd7'");
        } // if
        fd_x2 = ar_x[2];
        if (fd_x2 !== fd_max) {
            ar_failed_tests.push('test 3.4, fd_x2==' + fd_x2 +
                                 " \nGUID='390816e9-0597-4e29-9341-00c160904dd7'");
        } // if
        //------
        fd_min = (-1.44);
        fd_max = (-0.0001);
        i_maximum_number_of_intermittant_numbers = 1;
        b_use_integer_mode = false;
        ar_x = raudrohi.lang.ar_interpolate(fd_min, fd_max,
            i_maximum_number_of_intermittant_numbers, b_use_integer_mode);
        i = ar_x.length;
        if (i !== 3) {
            ar_failed_tests.push('test 4.1, ar_x.length==' + i +
                                 " \nGUID='20ec07f4-486c-4836-a241-00c160904dd7'");
        } // if
        fd_x2 = ar_x[0];
        if (fd_x2 !== fd_min) {
            ar_failed_tests.push('test 4.2, fd_x2==' + fd_x2a +
                                 " \nGUID='083c2b1a-7b86-4c52-b241-00c160904dd7'");
        } // if
        fd_x2 = ar_x[1];
        if ((fd_x2 === fd_min) || (fd_x2 === fd_max)) {
            ar_failed_tests.push('test 4.3, fd_x2==' + fd_x2 +
                                 " \nGUID='fdcec3b1-8a8e-447c-b541-00c160904dd7'");
        } // if
        if (fd_max <= fd_x2) {
            ar_failed_tests.push('test 4.4, fd_x2==' + fd_x2 +
                                 " \nGUID='d87ceb2a-1438-4a9d-a541-00c160904dd7'");
        } // if
        if (fd_x2 <= fd_min) {
            ar_failed_tests.push('test 4.5, fd_x2==' + fd_x2 +
                                 " \nGUID='2b032358-2ea8-48b6-8331-00c160904dd7'");
        } // if
        fd_x2 = ar_x[2];
        if (fd_x2 !== fd_max) {
            ar_failed_tests.push('test 4.6, fd_x2==' + fd_x2 +
                                 " \nGUID='9be2a726-cd3f-420d-a531-00c160904dd7'");
        } // if
        //------
        fd_min = 1;
        fd_max = fd_min;
        i_maximum_number_of_intermittant_numbers = 1;
        b_use_integer_mode = false;
        ar_x = raudrohi.lang.ar_interpolate(fd_min, fd_max,
            i_maximum_number_of_intermittant_numbers, b_use_integer_mode);
        i = ar_x.length;
        if (i !== 1) {
            ar_failed_tests.push('test 5.1, ar_x.length==' + i +
                                 " \nGUID='32872991-1758-4716-b431-00c160904dd7'");
        } // if
        fd_x2 = ar_x[0];
        if (fd_x2 !== fd_min) {
            ar_failed_tests.push('test 5.2, fd_x2==' + fd_x2 +
                                 " \nGUID='375fb6b7-9a99-4568-8231-00c160904dd7'");
        } // if
        //------
        //---------------whole-number-mode-tests--start----
        fd_min = 1;
        fd_max = fd_min;
        i_maximum_number_of_intermittant_numbers = 9999;
        b_use_integer_mode = true;
        ar_x = raudrohi.lang.ar_interpolate(fd_min, fd_max,
            i_maximum_number_of_intermittant_numbers, b_use_integer_mode);
        i = ar_x.length;
        if (i !== 1) {
            ar_failed_tests.push('test 6.1, ar_x.length==' + i +
                                 " \nGUID='3928fb5c-38b3-4742-b231-00c160904dd7'");
        } // if
        fd_x2 = ar_x[0];
        if (fd_x2 !== fd_min) {
            ar_failed_tests.push('test 6.2, fd_x2==' + fd_x2 +
                                 " \nGUID='22dbe716-5c1d-449c-9131-00c160904dd7'");
        } // if
        //------
        fd_min = 1;
        fd_max = 2;
        i_maximum_number_of_intermittant_numbers = 9999;
        b_use_integer_mode = true;
        ar_x = raudrohi.lang.ar_interpolate(fd_min, fd_max,
            i_maximum_number_of_intermittant_numbers, b_use_integer_mode);
        i = ar_x.length;
        if (i !== 2) {
            ar_failed_tests.push('test 7.1, ar_x.length==' + i +
                                 " \nGUID='4af5fb53-1338-478a-8131-00c160904dd7'");
        } // if
        fd_x2 = ar_x[0];
        if (fd_x2 !== fd_min) {
            ar_failed_tests.push('test 7.2, fd_x2==' + fd_x2 +
                                 " \nGUID='6a23fcbf-e2a2-4db0-9e31-00c160904dd7'");
        } // if
        fd_x2 = ar_x[1];
        if (fd_x2 !== fd_max) {
            ar_failed_tests.push('test 7.3, fd_x2==' + fd_x2 +
                                 " \nGUID='759d7a41-0dc5-4842-8521-00c160904dd7'");
        } // if
        if (ar_x[0] === ar_x[1]) {
            ar_failed_tests.push('test 7.4' +
                                 " \nGUID='a1356b1e-37d3-4de2-a321-00c160904dd7'");
        } // if
        //------
        fd_min = 1;
        fd_max = 3;
        i_maximum_number_of_intermittant_numbers = 9999;
        b_use_integer_mode = true;
        ar_x = raudrohi.lang.ar_interpolate(fd_min, fd_max,
            i_maximum_number_of_intermittant_numbers, b_use_integer_mode);
        i = ar_x.length;
        if (i !== 3) {
            ar_failed_tests.push('test 8.1, ar_x.length==' + i +
                                 " \nGUID='f521dd18-cb36-4929-8321-00c160904dd7'");
        } // if
        fd_x2 = ar_x[0];
        if (fd_x2 !== 1) {
            ar_failed_tests.push('test 8.2, fd_x2==' + fd_x2 +
                                 " \nGUID='b39c2722-b2e9-4305-a121-00c160904dd7'");
        } // if
        fd_x2 = ar_x[1];
        if (fd_x2 !== 2) {
            ar_failed_tests.push('test 8.3, fd_x2==' + fd_x2 +
                                 " \nGUID='98566439-7e07-4a08-a121-00c160904dd7'");
        } // if
        fd_x2 = ar_x[2];
        if (fd_x2 !== 3) {
            ar_failed_tests.push('test 8.4, fd_x2==' + fd_x2 +
                                 " \nGUID='167873b3-a0ea-444f-8f21-00c160904dd7'");
        } // if
        //------
        fd_min = 1;
        fd_max = 999;
        i_maximum_number_of_intermittant_numbers = 5;
        b_use_integer_mode = true;
        ar_x = raudrohi.lang.ar_interpolate(fd_min, fd_max,
            i_maximum_number_of_intermittant_numbers, b_use_integer_mode);
        i = ar_x.length;
        if (i !== (i_maximum_number_of_intermittant_numbers + 2)) {
            ar_failed_tests.push('test 9.1, ar_x.length==' + i +
                                 " \nGUID='9453ec3b-5664-499d-a221-00c160904dd7'");
        } // if
        fd_x2 = ar_x[0];
        if (fd_x2 !== fd_min) {
            ar_failed_tests.push('test 9.2, fd_x2==' + fd_x2 +
                                 " \nGUID='84f4ce1f-063d-4a1d-b211-00c160904dd7'");
        } // if
        fd_x2 = ar_x[i_maximum_number_of_intermittant_numbers + 1];
        if (fd_x2 !== fd_max) {
            ar_failed_tests.push('test 9.3, fd_x2==' + fd_x2 +
                                 " \nGUID='e10c8f2b-97c2-46b5-8411-00c160904dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.lang.selftests.ar_interpolate');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('2eda42d3-dbd7-4f2b-9311-00c160904dd7', err);
    } // catch
} // raudrohi.lang.selftests.ar_interpolate
raudrohi.selftests.ar_tests_1.push(
    raudrohi.lang.selftests.ar_interpolate);


//-------------------------------------------------------------------------
raudrohi.lang.selftests.comparison_goe_number = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var a;
        var b;
        //------
        a = 3;
        b = 4;
        if (raudrohi.lang.comparison.goe.number(a, b) !== true) {
            ar_failed_tests.push('test 1, a==' + a + ' b==' + b +
                                 " \nGUID='cf48fd35-e2af-4db4-8411-00c160904dd7'");
        } // if
        //------
        a = (-3);
        b = (-3);
        if (raudrohi.lang.comparison.goe.number(a, b) !== true) {
            ar_failed_tests.push('test 2, a==' + a + ' b==' + b +
                                 " \nGUID='b2863baf-dfa7-40c6-8311-00c160904dd7'");
        } // if
        //------
        a = 0.01;
        b = 0.02;
        if (raudrohi.lang.comparison.goe.number(a, b) !== true) {
            ar_failed_tests.push('test 3, a==' + a + ' b==' + b +
                                 " \nGUID='bb101f45-704f-4d54-9511-00c160904dd7'");
        } // if
        //------
        a = 4.00001;
        b = 4;
        if (raudrohi.lang.comparison.goe.number(a, b) !== false) {
            ar_failed_tests.push('test 4, a==' + a + ' b==' + b +
                                 " \nGUID='11eb7521-f90d-42ec-9a11-00c160904dd7'");
        } // if
        //------
        a = 3;
        b = (-4);
        if (raudrohi.lang.comparison.goe.number(a, b) !== false) {
            ar_failed_tests.push('test 5, a==' + a + ' b==' + b +
                                 " \nGUID='9eab2044-74be-4749-b111-00c160904dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.lang.selftests.comparison_goe_number');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    }
    catch (err) {
        raudrohi.tmg('67e0c33a-37d5-4307-a301-00c160904dd7', err);
    } // catch
} // raudrohi.lang.selftests.comparison_goe_number
raudrohi.selftests.ar_tests_1.push(
    raudrohi.lang.selftests.comparison_goe_number);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.ar_clone_array = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var ar_in = null;
        var ar_x = null;
        var i = null;
        var s_x = null;
        //------
        ar_in = ['aa', 'bb'];
        ar_x = raudrohi.lang.ar_clone_array(ar_in);
        ar_x.pop();
        i = ar_x.length;
        if (i !== 1) {
            ar_failed_tests.push('test 1, i==' + i +
                                 " \nGUID='070460e7-59c8-47ac-b101-00c160904dd7'");
        } // if
        i = ar_in.length;
        if (i !== 2) { // ar_x.pop() must not modify the ar_in
            ar_failed_tests.push('test 2, i==' + i +
                                 " \nGUID='a2199cdf-fa1a-46de-a301-00c160904dd7'");
        } // if
        s_x = ar_x[0];
        if (s_x !== 'aa') { // order of elements in the clone
            ar_failed_tests.push('test 3, s_x==' + s_x +
                                 " \nGUID='4ad2c822-980f-4204-8501-00c160904dd7'");
        } // if
        // The cloning must not modify the content of the original.
        s_x = ar_in[0];
        if (s_x !== 'aa') {
            ar_failed_tests.push('test 4, s_x==' + s_x +
                                 " \nGUID='59bfecb5-541d-4990-ac01-00c160904dd7'");
        } // if
        s_x = ar_in[1];
        if (s_x !== 'bb') {
            ar_failed_tests.push('test 5, s_x==' + s_x +
                                 " \nGUID='124339b5-9732-423d-a301-00c160904dd7'");
        } // if
        //------
        ar_in = [];
        ar_x = raudrohi.lang.ar_clone_array(ar_in);
        i = ar_x.length;
        if (i !== 0) { // The cloning of an empty array
            ar_failed_tests.push('test 6, i==' + i +
                                 " \nGUID='c29dd558-3013-467c-b101-00c160904dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.lang.selftests.ar_clone_array');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('bcd2551b-8deb-4077-92f0-00c160904dd7', err);
    } // catch
} // raudrohi.lang.selftests.ar_clone_array
raudrohi.selftests.ar_tests_1.push(
    raudrohi.lang.selftests.ar_clone_array);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.comparison_equals = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var func_comparison = raudrohi.lang.comparison.goe.number;
        var a = null;
        var b = null;
        //------
        a = 4;
        b = 4;
        if (raudrohi.lang.comparison.equals(a, b, func_comparison) !== true) {
            ar_failed_tests.push('test 1, a==' + a + ' b==' + b +
                                 " \nGUID='36e06a21-9200-438e-84f0-00c160904dd7'");
        } // if
        //------
        a = 4.3;
        b = 4;
        if (raudrohi.lang.comparison.equals(a, b, func_comparison) !== false) {
            ar_failed_tests.push('test 2, a==' + a + ' b==' + b +
                                 " \nGUID='2e6b8545-fcc2-4ade-81f0-00c160904dd7'");
        } // if
        //------
        a = 3.0;
        b = 4;
        if (raudrohi.lang.comparison.equals(a, b, func_comparison) !== false) {
            ar_failed_tests.push('test 3, a==' + a + ' b==' + b +
                                 " \nGUID='4fee6f73-7c91-413e-82f0-00c160904dd7'");
        } // if
        //------
        a = 0;
        b = 0;
        if (raudrohi.lang.comparison.equals(a, b, func_comparison) !== true) {
            ar_failed_tests.push('test 4, a==' + a + ' b==' + b +
                                 " \nGUID='0150c8e8-7219-4db7-85f0-00c160904dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.lang.selftests.comparison_equals');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('bb57af30-e321-49dc-94f0-00c160904dd7', err);
    } // catch
} // raudrohi.lang.selftests.comparison_equals
raudrohi.selftests.ar_tests_1.push(
    raudrohi.lang.selftests.comparison_equals);


//-------------------------------------------------------------------------
raudrohi.lang.selftests.sort = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var func_comparison = raudrohi.lang.comparison.goe.number;
        var ar_in = null;
        var ar_x = null;
        var ar_x1 = null;
        var ar_expected = null;
        var ar_comparison_funcs = null;
        var i = null;
        //------
        ar_x = raudrohi.lang.sort([7, 2, 5, 9], func_comparison,
            'ascending', true);
        i = ar_x.length
        if (i !== 4) {
            ar_failed_tests.push('test 1, i==' + i +
                                 " \nGUID='8412b723-1283-477e-81f0-00c160904dd7'");
        } // if
        i = ar_x[0];
        if (i !== 2) {
            ar_failed_tests.push('test 2, i==' + i +
                                 " \nGUID='23680cee-3f50-40b2-82e0-00c160904dd7'");
        } // if
        i = ar_x[1];
        if (i !== 5) {
            ar_failed_tests.push('test 3, i==' + i +
                                 " \nGUID='2569d158-a1e8-41fa-93e0-00c160904dd7'");
        } // if
        i = ar_x[2];
        if (i !== 7) {
            ar_failed_tests.push('test 4, i==' + i +
                                 " \nGUID='1b5ec082-aec7-41b7-91e0-00c160904dd7'");
        } // if
        i = ar_x[3];
        if (i !== 9) {
            ar_failed_tests.push('test 5, i==' + i +
                                 " \nGUID='cd3e8b50-139f-47c0-b2e0-00c160904dd7'");
        } // if
        //------
        ar_in = [];
        ar_in.push([ 4, 5 ]);
        ar_in.push([ 5, 7 ]);
        ar_in.push([ 4, 6 ]);
        ar_in.push([ 3, 1 ]);
        ar_in.push([ 4, 3 ]);
        ar_in.push([ 5, 7 ]);
        ar_in.push([ 5, 8 ]);
        ar_in.push([ 3, 0 ]);
        ar_in.push([ 5, 3 ]);

        ar_expected = [];
        ar_expected.push([ 3, 0 ]);
        ar_expected.push([ 3, 1 ]);
        ar_expected.push([ 4, 3 ]);
        ar_expected.push([ 4, 5 ]);
        ar_expected.push([ 4, 6 ]);
        ar_expected.push([ 5, 3 ]);
        ar_expected.push([ 5, 7 ]);
        ar_expected.push([ 5, 7 ]);
        ar_expected.push([ 5, 8 ]);

        ar_comparison_funcs = [func_comparison, func_comparison];

        ar_x = raudrohi.lang.sort(ar_in, ar_comparison_funcs,
            'ascending', true);
        i = ar_x.length
        if (i !== 9) {
            ar_failed_tests.push('test 6, i==' + i +
                                 " \nGUID='9ce4a148-7689-478c-a2e0-00c160904dd7'");
        } // if
        ar_x1 = ar_x[0];
        if ((ar_x1[0] !== ar_expected[0][0]) ||
            (ar_x1[1] !== ar_expected[0][1])) {
            ar_failed_tests.push('test 7, ar_x1[0]==' + ar_x1[0] +
                                 ' ar_x1[1]==' + ar_x1[1] +
                                 " \nGUID='e5cd6c52-353e-4f27-b5d0-00c160904dd7'");
        } // if
        ar_x1 = ar_x[1];
        if ((ar_x1[0] !== ar_expected[1][0]) ||
            (ar_x1[1] !== ar_expected[1][1])) {
            ar_failed_tests.push('test 8, ar_x1[0]==' + ar_x1[0] +
                                 ' ar_x1[1]==' + ar_x1[1] +
                                 " \nGUID='14f9197a-0e2a-46e6-a4d0-00c160904dd7'");
        } // if
        ar_x1 = ar_x[2];
        if ((ar_x1[0] !== ar_expected[2][0]) ||
            (ar_x1[1] !== ar_expected[2][1])) {
            ar_failed_tests.push('test 9, ar_x1[0]==' + ar_x1[0] +
                                 ' ar_x1[1]==' + ar_x1[1] +
                                 " \nGUID='2bbbdc04-9340-4995-8ad0-00c160904dd7'");
        } // if
        ar_x1 = ar_x[3];
        if ((ar_x1[0] !== ar_expected[3][0]) ||
            (ar_x1[1] !== ar_expected[3][1])) {
            ar_failed_tests.push('test 10, ar_x1[0]==' + ar_x1[0] +
                                 ' ar_x1[1]==' + ar_x1[1] +
                                 " \nGUID='7b20542f-03fe-49f8-a5d0-00c160904dd7'");
        } // if
        ar_x1 = ar_x[4];
        if ((ar_x1[0] !== ar_expected[4][0]) ||
            (ar_x1[1] !== ar_expected[4][1])) {
            ar_failed_tests.push('test 11, ar_x1[0]==' + ar_x1[0] +
                                 ' ar_x1[1]==' + ar_x1[1] +
                                 " \nGUID='c1486e40-354e-4687-b4d0-00c160904dd7'");
        } // if
        ar_x1 = ar_x[5];
        if ((ar_x1[0] !== ar_expected[5][0]) ||
            (ar_x1[1] !== ar_expected[5][1])) {
            ar_failed_tests.push('test 12, ar_x1[0]==' + ar_x1[0] +
                                 ' ar_x1[1]==' + ar_x1[1] +
                                 " \nGUID='12c34595-7f29-415d-83d0-00c160904dd7'");
        } // if
        ar_x1 = ar_x[6];
        if ((ar_x1[0] !== ar_expected[6][0]) ||
            (ar_x1[1] !== ar_expected[6][1])) {
            ar_failed_tests.push('test 13, ar_x1[0]==' + ar_x1[0] +
                                 ' ar_x1[1]==' + ar_x1[1] +
                                 " \nGUID='2508bdc4-25a7-40da-a4d0-00c160904dd7'");
        } // if
        ar_x1 = ar_x[7];
        if ((ar_x1[0] !== ar_expected[7][0]) ||
            (ar_x1[1] !== ar_expected[7][1])) {
            ar_failed_tests.push('test 14, ar_x1[0]==' + ar_x1[0] +
                                 ' ar_x1[1]==' + ar_x1[1] +
                                 " \nGUID='02a9541d-7a20-4ba0-b3c0-00c160904dd7'");
        } // if
        ar_x1 = ar_x[8];
        if ((ar_x1[0] !== ar_expected[8][0]) ||
            (ar_x1[1] !== ar_expected[8][1])) {
            ar_failed_tests.push('test 15, ar_x1[0]==' + ar_x1[0] +
                                 ' ar_x1[1]==' + ar_x1[1] +
                                 " \nGUID='30663524-b269-41f7-93c0-00c160904dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.lang.selftests.sort');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('0555935b-289b-481b-84c0-00c160904dd7', err);
    } // catch
} // raudrohi.lang.selftests.sort
raudrohi.selftests.ar_tests_1.push(
    raudrohi.lang.selftests.sort);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.ar_scale_number_of_frames = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var ar_in = null;
        var ar_x = null;
        var i = null;
        var i_target_length = null;
        //------
        ar_in = [99];
        i_target_length = 3;
        ar_x = raudrohi.lang.ar_scale_number_of_frames(ar_in, i_target_length);
        i = ar_x.length
        if (i !== i_target_length) {
            ar_failed_tests.push('test 1, ar_x.length==' + i +
                                 " \nGUID='3a415715-d722-4c6a-85c0-00c160904dd7'");
        } // if
        if ((ar_x[0] !== 99) || (ar_x[1] !== 99) || (ar_x[2] !== 99)) {
            ar_failed_tests.push('test 2, ar_x[0]==' + ar_x[0] +
                                 ' ar_x[1]==' + ar_x[1] + ' ar_x[2]==' +
                                 ar_x[2] +
                                 " \nGUID='17df96b8-d9fc-414c-b4c0-00c160904dd7'");
        } // if
        //------
        ar_in = [72, 23];
        i_target_length = 3;
        ar_x = raudrohi.lang.ar_scale_number_of_frames(ar_in, i_target_length);
        i = ar_x.length
        if (i !== i_target_length) {
            ar_failed_tests.push('test 3, ar_x.length==' + i +
                                 " \nGUID='500de545-5b31-465e-a5c0-00c160904dd7'");
        } // if
        if ((ar_x[0] !== 72) || (ar_x[1] !== 72) || (ar_x[2] !== 23)) {
            ar_failed_tests.push('test 4, ar_x[0]==' + ar_x[0] +
                                 ' ar_x[1]==' + ar_x[1] + ' ar_x[2]==' +
                                 ar_x[2] +
                                 " \nGUID='55fd0452-a2ae-4cd2-93b0-00c160904dd7'");
        } // if
        //------
        ar_in = [7, 9, 11];
        i_target_length = 5;
        ar_x = raudrohi.lang.ar_scale_number_of_frames(ar_in, i_target_length);
        i = ar_x.length
        if (i !== i_target_length) {
            ar_failed_tests.push('test 5, ar_x.length==' + i +
                                 " \nGUID='36d3e915-be5a-4473-b4b0-00c160904dd7'");
        } // if
        if ((ar_x[0] !== 7) || (ar_x[1] !== 7) || (ar_x[2] !== 9) ||
            (ar_x[3] !== 9) || (ar_x[4] !== 11)) {
            ar_failed_tests.push('test 6, ar_x[0]==' + ar_x[0] +
                                 ' ar_x[1]==' + ar_x[1] + ' ar_x[2]==' +
                                 ar_x[2] +
                                 ' ar_x[3]==' + ar_x[3] + ' ar_x[4]==' +
                                 ar_x[4] +
                                 " \nGUID='0558465c-212c-424e-b5b0-00c160904dd7'");
        } // if
        //------
        ar_in = [4];
        i_target_length = 1;
        ar_x = raudrohi.lang.ar_scale_number_of_frames(ar_in, i_target_length);
        i = ar_x.length
        if (i !== i_target_length) {
            ar_failed_tests.push('test 7, ar_x.length==' + i +
                                 " \nGUID='85c86155-86b7-4936-93b0-00c160904dd7'");
        } // if
        if ((ar_x[0] !== 4)) {
            ar_failed_tests.push('test 8, ar_x[0]==' + ar_x[0] +
                                 " \nGUID='34591528-300f-4582-95b0-00c160904dd7'");
        } // if
        //------
        ar_in = [43, 9];
        i_target_length = 1;
        ar_x = raudrohi.lang.ar_scale_number_of_frames(ar_in, i_target_length);
        i = ar_x.length
        if (i !== i_target_length) {
            ar_failed_tests.push('test 9, ar_x.length==' + i +
                                 " \nGUID='3a2bb282-2155-4640-8ab0-00c160904dd7'");
        } // if
        if ((ar_x[0] !== 43)) {
            ar_failed_tests.push('test 10, ar_x[0]==' + ar_x[0] +
                                 " \nGUID='6414caf7-85f8-4027-b5b0-00c160904dd7'");
        } // if
        //------
        ar_in = [45, 13, 22];
        i_target_length = 2;
        ar_x = raudrohi.lang.ar_scale_number_of_frames(ar_in, i_target_length);
        i = ar_x.length
        if (i !== i_target_length) {
            ar_failed_tests.push('test 11, ar_x.length==' + i);
        } // if
        if ((ar_x[0] !== 45) || (ar_x[1] !== 22)) {
            ar_failed_tests.push('test 12, ar_x[0]==' + ar_x[0] +
                                 ' ar_x[1]==' + ar_x[1] +
                                 " \nGUID='184d3492-262d-458f-91a0-00c160904dd7'");
        } // if
        //------
        ar_in = [42, 14];
        i_target_length = 2;
        ar_x = raudrohi.lang.ar_scale_number_of_frames(ar_in, i_target_length);
        i = ar_x.length
        if (i !== i_target_length) {
            ar_failed_tests.push('test 13, ar_x.length==' + i +
                                 " \nGUID='90549e69-3332-427d-9550-00c160904dd7'");
        } // if
        if ((ar_x[0] !== 42) || (ar_x[1] !== 14)) {
            ar_failed_tests.push('test 14, ar_x[0]==' + ar_x[0] +
                                 ' ar_x[1]==' + ar_x[1] +
                                 " \nGUID='e18cc6e8-538c-4777-aa50-00c160904dd7'");
        } // if
        //------
        ar_in = [41, 13, 22, 72, 44, 24, 55, 62, 62];
        i_target_length = 3;
        ar_x = raudrohi.lang.ar_scale_number_of_frames(ar_in, i_target_length);
        i = ar_x.length
        if (i !== i_target_length) {
            ar_failed_tests.push('test 15, ar_x.length==' + i +
                                 " \nGUID='7b4aec77-7501-4228-a150-00c160904dd7'");
        } // if
        if ((ar_x[0] !== 41) || (ar_x[1] !== 44) || (ar_x[2] !== 62)) {
            ar_failed_tests.push('test 16, ar_x[0]==' + ar_x[0] +
                                 ' ar_x[1]==' + ar_x[1] + ' ar_x[2]==' +
                                 ar_x[2] +
                                 " \nGUID='74cd0235-5d5a-4281-b140-00c160904dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.lang.selftests.ar_scale_number_of_frames');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('030e8019-66e2-4647-b440-00c160904dd7', err);
    } // catch
} // raudrohi.lang.selftests.ar_scale_number_of_frames
raudrohi.selftests.ar_tests_1.push(
    raudrohi.lang.selftests.ar_scale_number_of_frames);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.s_num2s_with_leading_zero_normalization = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var s_x = null;
        var i_x = null;
        var i_number_of_characters = null;
        var i_base = 16;
        //------
        i_base = 16;
        i_x = 0;
        i_number_of_characters = 2;
        s_x = raudrohi.lang.s_num2s_with_leading_zero_normalization(
            i_x, i_base, i_number_of_characters);
        if (s_x !== '00') {
            ar_failed_tests.push('test 1, i_x==' + i_x +
                                 ' i_number_of_characters==' +
                                 i_number_of_characters +
                                 ' s_x==' + s_x + ' i_base==' + i_base +
                                 " \nGUID='e7e07c4a-0b78-43f2-9540-00c160904dd7'");
        } // if
        //------
        i_base = 16;
        i_x = 255;
        i_number_of_characters = 2;
        s_x = raudrohi.lang.s_num2s_with_leading_zero_normalization(
            i_x, i_base, i_number_of_characters);
        if (s_x !== 'ff') {
            ar_failed_tests.push('test 2, i_x==' + i_x +
                                 ' i_number_of_characters==' +
                                 i_number_of_characters +
                                 ' s_x==' + s_x + ' i_base==' + i_base +
                                 " \nGUID='5c87652c-581f-40e8-a240-00c160904dd7'");
        } // if
        //------
        i_base = 16;
        i_x = 10;
        i_number_of_characters = 2;
        s_x = raudrohi.lang.s_num2s_with_leading_zero_normalization(
            i_x, i_base, i_number_of_characters);
        if (s_x !== '0a') {
            ar_failed_tests.push('test 3, i_x==' + i_x +
                                 ' i_number_of_characters==' +
                                 i_number_of_characters +
                                 ' s_x==' + s_x + ' i_base==' + i_base +
                                 " \nGUID='ec26174b-fb74-47c7-8330-00c160904dd7'");
        } // if
        //------
        i_base = 10;
        i_x = 14;
        i_number_of_characters = 4;
        s_x = raudrohi.lang.s_num2s_with_leading_zero_normalization(
            i_x, i_base, i_number_of_characters);
        if (s_x !== '0014') {
            ar_failed_tests.push('test 4, i_x==' + i_x +
                                 ' i_number_of_characters==' +
                                 i_number_of_characters +
                                 ' s_x==' + s_x + ' i_base==' + i_base +
                                 " \nGUID='40e20511-cd89-4150-b230-00c160904dd7'");
        } // if
        //------
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.lang.selftests.s_num2s_with_leading_zero_normalization');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('ab41ada5-22e9-4d54-b430-00c160904dd7', err);
    } // catch
} // raudrohi.lang.selftests.s_num2s_with_leading_zero_normalization
raudrohi.selftests.ar_tests_1.push(
    raudrohi.lang.selftests.s_num2s_with_leading_zero_normalization);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.s_escape_for_eval = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var b_singlequotes = null;
        var s_in = null;
        var s_expected = null;
        var s_x = null;
        var ar_x1 = null;
        var i = null;
        //------
        ar_x1 = [];
        ar_x1.push('abcde[]()');
        ar_x1.push('a\nb');
        ar_x1.push('cd$\rg\tfs');
        ar_x1.push('0123456789abcdef');
        ar_x1.push('');
        ar_x1.push('$@<>/e/|&;:gg');
        b_singlequotes = true;
        var i_len = ar_x1.length;
        for (i = 0; i < i_len; i++) {
            s_in = ar_x1[i];
            s_x = raudrohi.lang.s_escape_for_eval(s_in, b_singlequotes);
            s_expected = s_in;
            if (s_x !== s_expected) {
                ar_failed_tests.push('test 1.1, s_x==' + s_x +
                                     ' s_expected==' + s_expected +
                                     " \nGUID='3e8d7927-c92a-4abb-b230-00c160904dd7'");
            } // if
        } // for
        b_singlequotes = false;
        for (i = 0; i < i_len; i++) {
            s_in = ar_x1[i];
            s_x = raudrohi.lang.s_escape_for_eval(s_in, b_singlequotes);
            s_expected = s_in;
            if (s_x !== s_expected) {
                ar_failed_tests.push('test 1.2, s_x==' + s_x +
                                     ' s_expected==' + s_expected +
                                     " \nGUID='b5ec6220-aa4e-4afb-9420-00c160904dd7'");
            } // if
        } // for
        //------
        b_singlequotes = true;
        s_in = 'a"b';
        s_x = raudrohi.lang.s_escape_for_eval(s_in, b_singlequotes);
        s_expected = s_in;
        if (s_x !== s_expected) {
            ar_failed_tests.push('test 2.1, s_x==' + s_x +
                                 ' s_expected==' + s_expected +
                                 " \nGUID='2cb38b20-9996-4409-8120-00c160904dd7'");
        } // if
        b_singlequotes = false;
        s_x = raudrohi.lang.s_escape_for_eval(s_in, b_singlequotes);
        s_expected = 'a\\"b';
        if (s_x !== s_expected) {
            ar_failed_tests.push('test 2.2, s_x==' + s_x +
                                 ' s_expected==' + s_expected +
                                 " \nGUID='41a90620-793e-4d21-b320-00c160904dd7'");
        } // if
        //------
        b_singlequotes = true;
        s_in = "a'b";
        s_x = raudrohi.lang.s_escape_for_eval(s_in, b_singlequotes);
        s_expected = "a\\'b";
        if (s_x !== s_expected) {
            ar_failed_tests.push('test 3.1, s_x==' + s_x +
                                 ' s_expected==' + s_expected +
                                 " \nGUID='1c59078e-f2b0-43cd-9220-00c160904dd7'");
        } // if
        b_singlequotes = false;
        s_x = raudrohi.lang.s_escape_for_eval(s_in, b_singlequotes);
        s_expected = s_in;
        if (s_x !== s_expected) {
            ar_failed_tests.push('test 3.2, s_x==' + s_x +
                                 ' s_expected==' + s_expected +
                                 " \nGUID='775c4830-ee42-41f3-a320-00c160904dd7'");
        } // if
        //------
        b_singlequotes = true;
        s_in = 'a\\nb';
        s_x = raudrohi.lang.s_escape_for_eval(s_in, b_singlequotes);
        s_expected = 'a\\\\nb';
        if (s_x !== s_expected) {
            ar_failed_tests.push('test 4.1, s_x==' + s_x +
                                 ' s_expected==' + s_expected +
                                 " \nGUID='bc073a5e-639c-405b-a410-00c160904dd7'");
        } // if
        //------
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.lang.selftests.s_escape_for_eval');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('348b12c5-a197-4cda-af10-00c160904dd7', err);
    } // catch
} // raudrohi.lang.selftests.s_escape_for_eval
raudrohi.selftests.ar_tests_1.push(
    raudrohi.lang.selftests.s_escape_for_eval);


//-------------------------------------------------------------------------

raudrohi.lang.selftests.ProgFTE2ht = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var s;
        var ht_progfte;
        s = '1|||ZZ|||cute|||kitten|||';
        try {
            ht_progfte = raudrohi.lang.ProgFTE2ht(s);
            if (ht_progfte.get('cute') !== 'kitten') {
                ar_failed_tests.push('1 1' +
                                     " \nGUID='a27ad727-ce5c-4321-9210-00c160904dd7'");
            } // if
            if (ht_progfte.size() !== 1) {
                ar_failed_tests.push('1 2' +
                                     " \nGUID='40c19533-11e3-4e74-9310-00c160904dd7'");
            } // if
        } catch (err) {
            ar_failed_tests.push(" err == " + err +
                                 " \nGUID='569cf21a-1ae8-45e8-9500-00c160904dd7'");
        } // catch
        s = '1|||BB|||rr|||aBBg|||';
        try {
            ht_progfte = raudrohi.lang.ProgFTE2ht(s);
            if (ht_progfte.get('rr') !== 'a|g') {
                ar_failed_tests.push('2 1' +
                                     " \nGUID='fb9f3151-a693-40a8-b400-00c160904dd7'");
            } // if
            if (ht_progfte.size() !== 1) {
                ar_failed_tests.push('2 2' +
                                     " \nGUID='5e2ff715-c70e-404d-b200-00c160904dd7'");
            } // if
        } catch (err) {
            ar_failed_tests.push(" err == " + err +
                                 " \nGUID='13565b11-3d19-4fba-9400-00c160904dd7'");
        } // catch
        s = '2|||BB4|||rrBB4BB4|||arfg|||ll|||_Z|||';
        try {
            ht_progfte = raudrohi.lang.ProgFTE2ht(s);
            if (ht_progfte.get('rr||') !== 'arfg') {
                ar_failed_tests.push('3 1' +
                                     " \nGUID='89f1b610-3e55-4ca0-b5ff-00c160904dd7'");
            } // if
            if (ht_progfte.get('ll') !== '_Z') {
                ar_failed_tests.push('3 2' +
                                     " \nGUID='59a9c55c-999c-44f4-81ff-00c160904dd7'");
            } // if
            if (ht_progfte.size() !== 2) {
                ar_failed_tests.push('3 3' +
                                     " \nGUID='0735993d-7e05-4f0e-a5ff-00c160904dd7'");
            } // if
        } catch (err) {
            ar_failed_tests.push(" err == " + err +
                                 " \nGUID='671b9219-77db-4e6e-92ff-00c160904dd7'");
        } // catch
        s = '2|||zz|||rrzz|||val1|||key2||||||';
        try {
            ht_progfte = raudrohi.lang.ProgFTE2ht(s);
            if (ht_progfte.get('key2') !== '') {
                ar_failed_tests.push('4 1' +
                                     " \nGUID='81e36c6d-4b4d-4c3c-85ff-00c160904dd7'");
            } // if
            if (ht_progfte.size() !== 2) {
                ar_failed_tests.push('4 2' +
                                     " \nGUID='311196a1-3ff2-4f78-b7ef-00c160904dd7'");
            } // if
        } catch (err) {
            ar_failed_tests.push(" err == " + err +
                                 " \nGUID='25aff84f-8751-438c-a1ef-00c160904dd7'");
        } // catch
        s = '0|||zz|||';
        try {
            ht_progfte = raudrohi.lang.ProgFTE2ht(s);
            if (ht_progfte.size() !== 0) {
                ar_failed_tests.push('5 1' +
                                     " \nGUID='a4c3a528-f926-484f-a5ef-00c160904dd7'");
            } // if
        }
        catch (err) {
            ar_failed_tests.push(" err == " + err +
                                 " \nGUID='69201715-4d7c-48aa-91ef-00c160904dd7'");
        } // catch
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.lang.selftests.ProgFTE2ht');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    }
    catch (err) {
        raudrohi.tmg('48246556-cc9e-4be6-82ef-00c160904dd7', err);
    } // catch
} // raudrohi.lang.selftests.ProgFTE2ht
raudrohi.selftests.ar_tests_1.push(
    raudrohi.lang.selftests.ProgFTE2ht);

//-------------------------------------------------------------------------

raudrohi.lang.selftests.ht2ProgFTE = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        var s_x;
        var ht_x = new Hashtable();
        var ht_xx = null;
        var i_0 = null;
        try {
            s_x = raudrohi.lang.ht2ProgFTE(ht_x);
        } catch (err) {
            ar_failed_tests.push(" err == " + err +
                                 " \nGUID='7b1b6d98-636f-4133-84df-00c160904dd7'");
        } // catch
        //-------------------------------
        ht_x.put('a key 1', 'a value 1');
        try {
            s_x = raudrohi.lang.ht2ProgFTE(ht_x);
        } catch (err) {
            ar_failed_tests.push(" err == " + err +
                                 " \nGUID='c3026a39-5bac-40f6-81df-00c160904dd7'");
        } // catch
        //-------------------------------
        // String concatenation has different
        // branches for 1,2,3,4,5 strings.
        ht_x.put('a key 2', 'a value 2');
        ht_x.put('a key 3', 'a value 3');
        ht_x.put('a key 4', 'a value 4');
        try {
            s_x = raudrohi.lang.ht2ProgFTE(ht_x);
        } catch (err) {
            ar_failed_tests.push(" err == " + err +
                                 " \nGUID='1a619092-aba3-4eff-9adf-00c160904dd7'");
        } // catch
        //-------------------------------
        ht_x.put('a key 5', 'a value 5');
        try {
            s_x = raudrohi.lang.ht2ProgFTE(ht_x);
        } catch (err) {
            ar_failed_tests.push(" err == " + err +
                                 " \nGUID='1dba2112-1009-4ec3-93df-00c160904dd7'");
        } // catch
        //-------------------------------
        ht_x = new Hashtable();
        s_x = raudrohi.lang.ht2ProgFTE(ht_x);
        ht_x.clear();
        ht_xx = raudrohi.lang.ProgFTE2ht(s_x);
        i_0 = ht_xx.size();
        if (i_0 !== 0) {
            ar_failed_tests.push(" ht_xx.size() == " + i_0 +
                                 " \nGUID='57d30c23-4639-47b9-a5df-00c160904dd7'");
        } // if
        ht_x.put('aaa', 'AAAA');
        s_x = raudrohi.lang.ht2ProgFTE(ht_x);
        ht_x.clear();
        ht_xx = raudrohi.lang.ProgFTE2ht(s_x);
        i_0 = ht_xx.size();
        if (i_0 !== 1) {
            ar_failed_tests.push(" ht_xx.size() == " + i_0 +
                                 " \nGUID='3320b2a9-60de-48ea-b5cf-00c160904dd7'");
        } // if
        if (ht_xx.containsKey("aaa") !== true) {
            ar_failed_tests.push("The key 'aaa' is missing. " +
                                 " \nGUID='33830163-acd8-4a6a-8ecf-00c160904dd7'");
        } // if
        s_x = ht_xx.get("aaa")
        if (s_x !== "AAAA") {
            ar_failed_tests.push(" ht_xx.get(\"aaa\") == " + s_x +
                                 " \nGUID='e9bd8544-41e3-4926-95cf-00c160904dd7'");
        } // if
        //-------------------------------
        ht_x = new Hashtable();
        ht_x.put('aaa', 'AAAA');
        ht_x.put('bbb', 'BBBB');
        s_x = raudrohi.lang.ht2ProgFTE(ht_x);
        ht_x.clear();
        ht_xx = raudrohi.lang.ProgFTE2ht(s_x);
        i_0 = ht_xx.size();
        if (i_0 !== 2) {
            ar_failed_tests.push(" ht_xx.size() == " + i_0 +
                                 " \nGUID='6259d72f-d69c-4922-94cf-00c160904dd7'");
        } // if
        s_x = ht_xx.get("aaa")
        if (s_x !== "AAAA") {
            ar_failed_tests.push(" ht_xx.get(\"aaa\") == " + s_x +
                                 " \nGUID='7c67ca24-0aa1-42c8-83cf-00c160904dd7'");
        } // if
        s_x = ht_xx.get("bbb")
        if (s_x !== "BBBB") {
            ar_failed_tests.push(" ht_xx.get(\"aaa\") == " + s_x +
                                 " \nGUID='00594835-a20b-4367-b4bf-00c160904dd7'");
        } // if
        //-------------------------------
        ht_x = new Hashtable();
        ht_x.put("aaa", "");
        s_x = raudrohi.lang.ht2ProgFTE(ht_x);
        ht_x.clear();
        ht_xx = raudrohi.lang.ProgFTE2ht(s_x);
        i_0 = ht_xx.size();
        if (i_0 !== 1) {
            ar_failed_tests.push(" ht_xx.size() == " + i_0 +
                                 " \nGUID='0b108f46-c865-4c8e-a4bf-00c160904dd7'");
        } // if
        s_x = ht_xx.get("aaa")
        if (s_x !== "") {
            ar_failed_tests.push(" ht_xx.get(\"aaa\") == " + s_x +
                                 " \nGUID='72750946-a4a6-4ab0-83bf-00c160904dd7'");
        } // if
        //-------------------------------
        ht_x = new Hashtable();
        ht_x.put("", "xxxx");
        s_x = raudrohi.lang.ht2ProgFTE(ht_x);
        ht_x.clear();
        ht_xx = raudrohi.lang.ProgFTE2ht(s_x);
        i_0 = ht_xx.size();
        if (i_0 !== 1) {
            ar_failed_tests.push(" ht_xx.size() == " + i_0 +
                                 " \nGUID='51341726-3fc9-4016-b2bf-00c160904dd7'");
        } // if
        s_x = ht_xx.get("")
        if (s_x !== "xxxx") {
            ar_failed_tests.push(" ht_xx.get(\"aaa\") == " + s_x +
                                 " \nGUID='baea17e1-261c-4b64-a4af-00c160904dd7'");
        } // if
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.lang.selftests.ProgFTE2ht');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    }
    catch (err) {
        raudrohi.tmg('a4680b29-7d7b-4869-93af-00c160904dd7', err);
    } // catch
} // raudrohi.lang.selftests.ht2ProgFTE
raudrohi.selftests.ar_tests_1.push(
    raudrohi.lang.selftests.ht2ProgFTE);


//-------------------------------------------------------------------------

//=========================================================================
