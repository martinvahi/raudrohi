//=========================================================================
//
// This file is guaranteed to be at the very start of the 
// JavaScript file that is assembled for running selftests.
//
//------------------------------------------------------------------------

if (window.raudrohi_exists !== true) {
    window.raudrohi = {};
    window.raudrohi_exists = true;
} // if

if(window.raudrohi_selftests_exists!==true){
	window.raudrohi.selftests={};
	window.raudrohi_selftests_exists=true;
} // if
if(window.raudrohi_selftests_ar_tests_1_exists!==true){
	window.raudrohi.selftests.ar_tests_1=[];
	window.raudrohi_selftests_ar_tests_1_exists=true;
} // if

if (window.raudrohi_selftests_testfuncs_exists !== true) {
	window.raudrohi.selftests.testfuncs = [];
	window.raudrohi_selftests_testfuncs_exists = true;
} // if

if(window.raudrohi_core_constans_as_reusable_instances_exists!==true){
	window.raudrohi.core.constans_as_reusable_instances={};
	window.raudrohi_core_constans_as_reusable_instances_exists=true;
} // if
if(window.raudrohi_settings_exists!==true){
	window.raudrohi.settings={};
	window.raudrohi_settings_exists=true;
} // if
if(window.raudrohi_settings_runtime_exists!==true){
	window.raudrohi.settings.runtime={};
	window.raudrohi_settings_runtime_exists=true;
} // if

//=========================================================================

//=========================================================================

if (window.raudrohi_adapter_exists !== true) {
    window.raudrohi.adapter = {};
    window.raudrohi_adapter_exists = true;
} // if

if (window.raudrohi_adapter_selftests_exists !== true) {
    window.raudrohi.adapter.selftests = {};
    window.raudrohi_adapter_selftests_exists = true;
} // if

window.raudrohi.adapter.selftests.common = {};
window.raudrohi.adapter.selftests.common.typechecks = {};

//-------------------------------------------------------------------------

window.raudrohi.adapter.selftests.common.isString = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        /*
         var x='xx';
         if(raudrohi.adapter.selftests.common.isString(x)!==true){
         ar_failed_tests.push('!==true, x=='+x+
         " \nGUID='72f30c68-7416-4250-834c-a09330904dd7'");
         } // if
         x=42;
         if(raudrohi.adapter.selftests.common.isString(x)!==false){
         ar_failed_tests.push('!==false, x=='+x+
         " \nGUID='d4144e2e-0510-4e65-a54c-a09330904dd7'");
         } // if
         */
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.adapter.selftests.common.isString');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('4607fc19-3372-464d-934c-a09330904dd7', err);
    } // catch
} // window.raudrohi.adapter.selftests.common.isString

window.raudrohi.adapter.selftests.common.isArray = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        /*
         var x=[];
         if(raudrohi.adapter.selftests.common.isArray(x)!==true){
         ar_failed_tests.push('!==true, x=='+x+
         " \nGUID='2ab39534-1b6a-4e18-914c-a09330904dd7'");
         } // if
         x=42;
         if(raudrohi.adapter.selftests.common.isArray(x)!==false){
         ar_failed_tests.push('!==false, x=='+x+
         " \nGUID='2c76749d-4440-4af4-854c-a09330904dd7'");
         } // if
         */
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.adapter.selftests.common.isArray');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('47f14557-f630-4646-834c-a09330904dd7', err);
    } // catch
} // window.raudrohi.adapter.selftests.common.isArray

window.raudrohi.adapter.selftests.common.isNumber = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        /*
         var x=42;
         if(raudrohi.adapter.selftests.common.isNumber(x)!==true){
         ar_failed_tests.push('!==true, x=='+x+
         " \nGUID='f4923d24-14d1-4c4c-934c-a09330904dd7'");
         } // if
         x='this is not a number';
         if(raudrohi.adapter.selftests.common.isNumber(x)!==false){
         ar_failed_tests.push('!==false, x=='+x+
         " \nGUID='e310dd57-95eb-4564-914c-a09330904dd7'");
         } // if
         */
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.adapter.selftests.common.isNumber');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('cf8fb92d-5908-421e-944c-a09330904dd7', err);
    } // catch
} // window.raudrohi.adapter.selftests.common.isNumber

window.raudrohi.adapter.selftests.common.isBoolean = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        /*
         var x=true;
         if(raudrohi.adapter.selftests.common.isBoolean(x)!==true){
         ar_failed_tests.push('!==true, for true, x=='+x+
         " \nGUID='06e3fb19-67a0-4024-b34c-a09330904dd7'");
         } // if
         x=false;
         if(raudrohi.adapter.selftests.common.isBoolean(x)!==true){
         ar_failed_tests.push('!==true, for false, x=='+x+
         " \nGUID='3e7b8283-173c-45e6-a23c-a09330904dd7'");
         } // if
         x=42;
         if(raudrohi.adapter.selftests.common.isBoolean(x)!==false){
         ar_failed_tests.push('!==false, x=='+x+
         " \nGUID='55e30e3d-e3f0-4a1e-993c-a09330904dd7'");
         } // if
         */
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.adapter.selftests.common.isBoolean');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('2fa52741-2331-4849-933c-a09330904dd7', err);
    } // catch
} // window.raudrohi.adapter.selftests.common.isBoolean

window.raudrohi.adapter.selftests.common.isObject = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        /*
         var a_class=function(){}
         var x=new a_class();
         if(raudrohi.adapter.selftests.common.isObject(x)!==true){
         ar_failed_tests.push('!==true, x=='+x+
         " \nGUID='5f96c5f1-edf7-47ef-8f3c-a09330904dd7'");
         } // if
         x=42;
         if(raudrohi.adapter.selftests.common.isObject(x)!==false){
         ar_failed_tests.push('!==false, x=='+x+
         " \nGUID='24851287-024b-4462-823c-a09330904dd7'");
         } // if
         */
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.adapter.selftests.common.isObject');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('acfd4429-135d-417e-913c-a09330904dd7', err);
    } // catch
} // window.raudrohi.adapter.selftests.common.isObject

window.raudrohi.adapter.selftests.common.isUndefined = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        /*
         if(raudrohi.adapter.selftests.common.isUndefined(x)!==true){
         ar_failed_tests.push('!==true, x=='+x+
         " \nGUID='1cb32c24-a3d6-4768-a43c-a09330904dd7'");
         } // if
         var x=null;
         if(raudrohi.adapter.selftests.common.isUndefined(x)!==false){
         ar_failed_tests.push('!==false, for null, x=='+x+
         " \nGUID='2e251714-6387-422b-b13c-a09330904dd7'");
         } // if
         x=42;
         if(raudrohi.adapter.selftests.common.isUndefined(x)!==false){
         ar_failed_tests.push('!==false, for 42, x=='+x+
         " \nGUID='853eb576-df5f-49b7-a93c-a09330904dd7'");
         } // if
         */
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.adapter.selftests.common.isUndefined');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('d876cc38-ada5-4f49-813c-a09330904dd7', err);
    } // catch
} // window.raudrohi.adapter.selftests.common.isUndefined

// A citation from YUI 3.3.0 documentation:
//
// -----citation--start------
// A convenience method for detecting a legitimate non-null value.
// Returns false for null/undefined/NaN, true for other values, including 0/false/''.
// -----citation--end -------
//
window.raudrohi.adapter.selftests.common.isValue = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        /*
         var x='xx';
         if(raudrohi.adapter.selftests.common.isValue(x)!==true){
         ar_failed_tests.push('!==true, x=='+x+
         " \nGUID='41b20b24-05de-4df7-853c-a09330904dd7'");
         } // if
         x=42;
         if(raudrohi.adapter.selftests.common.isValue(x)!==false){
         ar_failed_tests.push('!==false, x=='+x+
         " \nGUID='55c8f637-ef87-4195-a42c-a09330904dd7'");
         } // if
         */
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.adapter.selftests.common.isValue');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('bc8d4544-8629-4251-842c-a09330904dd7', err);
    } // catch
} // window.raudrohi.adapter.selftests.common.isValue

window.raudrohi.adapter.selftests.common.isFunction = function () {
    try {
        var ht = new Hashtable();
        ht.put('test_passed', 't');
        var ar_failed_tests = [];
        //---tests-start------------------
        /*
         var x='xx';
         if(raudrohi.adapter.selftests.common.isFunction(x)!==true){
         ar_failed_tests.push('!==true, x=='+x+
         " \nGUID='40ae3b43-7aab-410d-b52c-a09330904dd7'");
         } // if
         x=42;
         if(raudrohi.adapter.selftests.common.isFunction(x)!==false){
         ar_failed_tests.push('!==false, x=='+x+
         " \nGUID='7ae6a92e-85ac-457a-842c-a09330904dd7'");
         } // if
         */
        //---tests-end--------------------
        var x_FireFox_bug_workaround = ar_failed_tests.length;
        if (0 < x_FireFox_bug_workaround) {
            ht.put('test_passed', 'f');
            ht.put('code_region_name',
                'raudrohi.adapter.selftests.common.isFunction');
            ht.put('ar_failed_tests', ar_failed_tests);
        } // if
        return ht;
    } catch (err) {
        raudrohi.tmg('ec2a37d9-7ae1-48b7-832c-a09330904dd7', err);
    } // catch
} // window.raudrohi.adapter.selftests.common.isFunction


window.raudrohi.adapter.selftests.common.typechecks.all = function (ar_of_ht) {
    try {
        ar_of_ht.push(window.raudrohi.adapter.selftests.common.isString());
        ar_of_ht.push(window.raudrohi.adapter.selftests.common.isArray());
        ar_of_ht.push(window.raudrohi.adapter.selftests.common.isNumber());
        ar_of_ht.push(window.raudrohi.adapter.selftests.common.isBoolean());
        ar_of_ht.push(window.raudrohi.adapter.selftests.common.isObject());
        ar_of_ht.push(window.raudrohi.adapter.selftests.common.isUndefined());
        ar_of_ht.push(window.raudrohi.adapter.selftests.common.isValue());
        ar_of_ht.push(window.raudrohi.adapter.selftests.common.isFunction());
    } catch (err) {
        raudrohi.tmg('1af52034-1a09-499f-a92c-a09330904dd7', err);
    } // catch
} // window.raudrohi.adapter.selftests.common.typechecks.all

//-------------------------------------------------------------------------
window.raudrohi.adapter.selftests.common.all = function (ar_of_ht) {
    try {
        window.raudrohi.adapter.selftests.common.typechecks.all(ar_of_ht);
    } catch (err) {
        raudrohi.tmg('48554d42-ebd9-4603-b42c-a09330904dd7', err);
    } // catch
} // window.raudrohi.adapter.selftests.common.all

//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
window.raudrohi.adapter.selftests.yui_3_0 = function (ar_of_ht) {
    try {
        window.raudrohi.adapter.selftests.common.all(ar_of_ht);
    } catch (err) {
        raudrohi.tmg('56420513-b2fe-4229-b42c-a09330904dd7', err);
    } // catch
} // window.raudrohi.adapter.selftests.yui_3_0


window.raudrohi.adapter.selftests.yui_3_3_0 = function (ar_of_ht) {
    try {
        window.raudrohi.adapter.selftests.common.all(ar_of_ht);
    } catch (err) {
        raudrohi.tmg('af47c131-599f-4db8-852c-a09330904dd7', err);
    } // catch
} // window.raudrohi.adapter.selftests.yui_3_3_0

window.raudrohi.adapter.selftests.yui_3_9_0 = function (ar_of_ht) {
    try {
        window.raudrohi.adapter.selftests.common.all(ar_of_ht);
    } catch (err) {
        raudrohi.tmg('5b35a582-440c-442b-8d1c-a09330904dd7', err);
    } // catch
} // window.raudrohi.adapter.selftests.yui_3_9_0

//-------------------------------------------------------------------------

// In addition of being a single point of entry to the
// whole set of raudrohi.adapter selftests, this
// function exists to allow raudrohi port specific
// testing. Indeed, ports can differ, because the
// raudrohi evolves and the backbones that
// handle web browser normalization, also evolves,
// just like web browesers do.
window.raudrohi.adapter.selftests.all_in_port = function (ar_of_ht, port_name) {
    try {
        port_name = typeof(port_name) !==
                    'undefined' ? port_name : raudrohi.adapter.ports.selected_port_name;
        switch (port_name) {
            case 'YUI_3_0':
                window.raudrohi.adapter.selftests.yui_3_0(ar_of_ht);
                break;
            case 'YUI_3_3_0':
                window.raudrohi.adapter.selftests.yui_3_3_0(ar_of_ht);
                break;
            case 'YUI_3_9_0':
                window.raudrohi.adapter.selftests.yui_3_9_0(ar_of_ht);
                break;
            default:
                if (raudrohi_settings_debug_JavaScript === true) {
                    throw 'GUID=="9873043e-ec05-494c-a34c-a09330904dd7"  ' +
                          'There\'s no branching for port_name(==' + port_name +
                          ').';
                } // if
        } // switch
    } catch (err) {
        raudrohi.tmg('ca8da85f-7519-4966-931c-a09330904dd7', err);
    } // catch
} // window.raudrohi.adapter.selftests.all_in_port

//-------------------------------------------------------------------------
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
