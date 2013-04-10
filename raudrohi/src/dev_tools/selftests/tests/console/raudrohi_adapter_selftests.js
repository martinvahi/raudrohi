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
