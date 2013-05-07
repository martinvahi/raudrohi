//=========================================================================

if (window.raudrohi_exists !== true) {
    window.raudrohi = {};
    window.raudrohi_exists = true;
} // if

if (window.raudrohi_core_exists !== true) {
    window.raudrohi.core = {};
    window.raudrohi_core_exists = true;
} // if

if (window.raudrohi_core_private_code_exists !== true) {
    window.raudrohi.core.private_code = {};
    window.raudrohi_core_private_code_exists = true;
} // if

window.raudrohi.core.sring_1_for_instance_reuse = "_tron_";


//  window.raudrohi.core.lc_s_trondot = "_trondot_";
//  window.raudrohi.core.lc_s_trondot_c = ".";
//  window.raudrohi.core.lc_s_troncomma = "_troncomma_";
//  window.raudrohi.core.lc_s_troncomma_c = ",";
//  window.raudrohi.core.lc_s_troncolon = "_troncolon_";
//  window.raudrohi.core.lc_s_troncolon_c = ":";
//  window.raudrohi.core.lc_s_tronsemicolon = "_tronsemicolon_";
//  window.raudrohi.core.lc_s_tronsemicolon_c = ";";


// The purpose of this class is to replace the
// Tim Down version of the Hashtable class with
// a different implementation.
//
// The style of the  public API of this class is
// explaned by the fact that the purpose of
// this implementation is to be an almost-drop-in-replacement
// to the Tim Down's 2009 version.
//
// Some code for copy-pasting:
//
// var ht=new Hashtable();
// ht.put('apple', 41)
// ht.put('pie', 42)
// var keys=ht.keys(); var len=keys.length;
// var key; var reference_to_the_value;
// for(var i=0;i<len;i++){
//     key=keys[i];
//     reference_to_the_value=ht.get(key);
//     } // for
//
// This implementation is NOT threadsafe, except for
// the get method, but as hashtable is a data container,
// then at places, where thread safety matters the hashtable
// is wrapped to a critical section anyway at application level.
var Hashtable = function () {

    // lookup optimization
    var lc_s_pfx_ = window.raudrohi.core.sring_1_for_instance_reuse;

    var ar_keys_ = [];
    var ht_ = {};

    // Throws an exception, if the value does not exist.
    this.get = function (s_key) {
        var s_k = lc_s_pfx_ + s_key;
        var x_out = ht_[s_k];
        if (x_out === undefined) {
            throw "There's no key named \"" + s_key + "\"." +
                  'GUID="191de143-80ea-43b8-959c-d04190705dd7"'
        } // if
        return x_out;
    } // get

    this.put = function (s_key, x_value) {
        var s_k = lc_s_pfx_ + s_key;
        // From thread safety point of view it's safer,
        // if a key exists in ht_ and is missing from the
        // ar_keys_ than vice versa. That explains, why the
        // ht_[s_k]=x_value; is not after the if-statement.
        if (ht_[s_k] === undefined) {
            ht_[s_k] = x_value;
            ar_keys_.push(s_key);
        } else {
            ht_[s_k] = x_value;
        } // if
    } // put

    this.containsKey = function (s_key) {
        var s_k = lc_s_pfx_ + s_key;
        if (ht_[s_k] === undefined) {
            return false;
        } // if
        return true;
    } // containsKey

    this.clear = function () {
        delete ar_keys_;
        ar_keys_ = [];
        delete ht_;
        ht_ = {};
    } // clear

    this.keys = function () {
        return ar_keys_
    } // keys

    this.remove = function (s_key) {
        var len = ar_keys_.length;
        if (len === 0) {
            return;
        } // if
        var s_k = lc_s_pfx_ + s_key;
        if (ht_[s_k] === undefined) {
            return;
        } // if
        var ar_keys_new = new Array(len - 1);
        var ar_keys_old = ar_keys_;
        var i = 0;
        var ii = 0;
        var elem;
        for (i = 0; i < len; i++) {
            elem = ar_keys_old[i];
            if (elem !== s_key) {
                ar_keys_new[ii] = elem;
                ii++;
            } // if
        } // for
        ar_keys_ = ar_keys_new;
        delete ht_[s_k];
        delete ar_keys_old;
        delete ii;
    } // remove

    this.size = function () {
        var i = ar_keys_.length
        return i;
    } // size

} // Hashtable

//=========================================================================
