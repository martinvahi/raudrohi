//=========================================================================
//
// http://martin.softf1.com/g/n//a2/doc/progfte/index.html
//
//=========================================================================

//-------------------------------------------------------------------------

raudrohi.lang.ProgFTE_v0 = function () {
    var self_public_ = this;
    try {
        self_public_.private_code_ = {};
        var prc_ = self_public_.private_code_;

// ProgFTE(Programmer Friendly Text Exchange) is a format, where
// a hashtable that contains only strings as its keys and values,
// is serialized to
// <nuber of key-value pairs>|||<triplepillar substitution>|||<keyX>|||<valueX|||<keyY>|||<valueY>||| etc.
// Some more background info resides at
// http://mv-veebilog.blogspot.com/2009/10/programmer-friendly-text-exchange.html
        prc_.ht2ProgFTE_v0_impl = function (a_hashtable,
            string_to_substitute_the_triplepillars_within_the_ht_keys_and_values) {
            try {
                var tpss = string_to_substitute_the_triplepillars_within_the_ht_keys_and_values;
                var keys = a_hashtable.keys();
                var s_key;
                var reference_to_the_value;
                var s_lc_3p = '|||';
                var s_lc_s = '';
                var ar_s = [];
                var s_0 = s_lc_s + keys.length + s_lc_3p + (tpss + s_lc_3p);
                ar_s.push(s_0);
                var len = keys.length;
                // There's the problem that if the JavaScript side has
                // a very heavy load, different threads will collide at
                // global variables. In this case, probably the problem
                // is that the raudrohi.base.gsub has thread
                // collisions. That's why there's this "newer" version
                // that creates a separate RegExp instace for every call.

                var rgx = new RegExp("[|]", "g"); // TODO: pool the rgx instances
                for (var i = 0; i < len; i++) {
                    s_key = keys[i];
                    // The ''+ on the next line is for converting numbers to strings.
                    reference_to_the_value = s_lc_s + a_hashtable.get(s_key);
                    s_0 = s_key.replace(rgx, tpss);
                    ar_s.push(s_0);
                    ar_s.push(s_lc_3p);
                    s_0 = reference_to_the_value.replace(rgx, tpss);
                    ar_s.push(s_0);
                    ar_s.push(s_lc_3p);
                } // for
                var answer = raudrohi.base.s_concat_array_of_strings(ar_s);
                return answer;
            } catch (err) {
                raudrohi.tmg('5049f605-22b2-4a78-9504-220260904dd7', err);
            } // catch
        } // prc_.ht2ProgFTE_v0_impl

//-------------------------------------------------------------------------

// Implements the ProgFTE format in a way that it is safe to serialize
// one hashtable, store the serialization result into anohter hashtable
// and then to serialize the latter hashtable.
        self_public_.ht2ProgFTE = function (ht_in) {
            try {
                var keys = ht_in.keys();
                var key;
                var len = keys.length;
                var ar_s = [];
                var s_0 = null;
                for (var i = 0; i < len; i++) {
                    key = keys[i];
                    s_0 = ht_in.get(key);
                    ar_s.push(key);
                    ar_s.push(s_0);
                } // for
                var s_all = raudrohi.base.s_concat_array_of_strings(ar_s);
                var s_trplsbsts = raudrohi.lang.generate_nonexisting_needle(s_all);
                var s_progte = prc_.ht2ProgFTE_v0_impl(ht_in,
                    s_trplsbsts);
                return s_progte;
            } catch (err) {
                raudrohi.tmg('09ef5a34-3c12-47bf-8404-220260904dd7', err);
            } // catch
        } // self_public_.ht2ProgFTE

//-------------------------------------------------------------------------
        self_public_.ProgFTE2ht = function (s_progfte) {
            try {
                var ar1 = raudrohi.base.snatchNtimes(s_progfte, '|||', 2);
                var ht_length = parseInt(ar1[0], 10);
                var ht = raudrohi.base.pool_of_hashtables.get_empty_hashtable();
                if (ht_length < 1) {
                    return ht;
                } // if
                var tpss = ar1[1];
                var ar2 = raudrohi.base.snatchNtimes(s_progfte,
                    '|||', (2 + ht_length * 2));
                var i1 = 1;
                var i2;
                var s_key;
                var value;
                // Comment is at the ht2Progfre code
                //var rgx=new RegExp("[|]","g"); // TODO: pool the rgx instances
                var cache_func_rbr = raudrohi.base.gsub; // IE optimization
                while (i1 <= ht_length) {
                    i2 = i1 * 2;
                    s_key = cache_func_rbr('|', tpss, ar2[i2]);
                    value = cache_func_rbr('|', tpss, (ar2[i2 + 1]));
                    ht.put(s_key, value);
                    i1++;
                } // while
                return ht;
            } catch (err) {
                raudrohi.tmg('6109dd49-d7f9-4b54-b304-220260904dd7',
                    err + "\n\n" +
                    ' s_progfte==' + s_progfte);
            } // catch
        } // self_public_.ProgFTE2ht

    } catch (err) {
        raudrohi.tmg('375c0631-37ca-4e6a-b404-220260904dd7', err);
    } // catch
} // raudrohi.lang.ProgFTE_v0

raudrohi.lang.ProgFTE_v0 = new raudrohi.lang.ProgFTE_v0()

//-------------------------------------------------------------------------

// http://martin.softf1.com/g/n//a2/doc/progfte/index.html
raudrohi.lang.ProgFTE_v1 = function () {
    var self_public_ = this;
    try {
        self_public_.private_code_ = {};
        var prc_ = self_public_.private_code_;

        var lc_singlepillar_ = '|';
        var lc_emptystring_ = '';

        prc_.create_stringrecord_t1 = function (ar_s, s_in) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(s_in, 's_in',
                        '54bffa2a-bcbc-42e3-a104-220260904dd7');
                } // if
                ar_s.push(lc_emptystring_ + s_in.length);
                ar_s.push(lc_singlepillar_);
                ar_s.push(s_in);
                ar_s.push(lc_singlepillar_);
            } catch (err) {
                raudrohi.tmg('d115058d-c357-4a82-82f3-220260904dd7', err);
            } // catch
        } // prc_.create_stringrecord_t1


        var lc_s1_ = 'v1|0|';
        var lc_s2_ = '|0||0||';

        self_public_.ht2ProgFTE = function (ht_in) {
            try {
                var ar_s = [];
                var ar_keys = ht_in.keys();
                var s_key;
                var i_len = ar_keys.length;
                ar_s.push(lc_s1_);
                ar_s.push(i_len + 1);
                ar_s.push(lc_s2_);
                for (var i = 0; i < i_len; i++) {
                    s_key = ar_keys[i];
                    prc_.create_stringrecord_t1(ar_s, s_key);
                    prc_.create_stringrecord_t1(ar_s, ht_in.get(s_key));
                } // for
                var s_progte = raudrohi.base.s_concat_array_of_strings(ar_s);
                return s_progte;
            } catch (err) {
                raudrohi.tmg('da41f93e-b2e2-44ff-85f3-220260904dd7', err);
            } // catch
        } // self_public_.ht2ProgFTE

        //-------------------------------------

        // http://mmmvkos.softf1.com/index.php?title=JavaScript
        function i_ProgFTE_v1_hack_get_integer(ar_opmem) {
            // As the indexing of various substring, index-of, etc.
            // functions of different programming languages can vary.
            // there is high probability of one-off errors in here.
            var ixs_low = ar_opmem[0];
            var s_lc_pillar = ar_opmem[1];
            var s_haystack = ar_opmem[2];
            // | 9 9 9 | 9
            // 0 1 2 3 4 5
            //   A
            var ix = s_haystack.indexOf(s_lc_pillar, ixs_low); // === 4
            if (ix < 0) {
                raudrohi.tmg('86f4ee55-fc6d-4ce2-bef3-220260904dd7',
                    "The string does not conform to ProgFTE_v1 format." +
                    " \nixs_low == " + ixs_low +
                    " \nix == " + ix + " s_lc_pillar == " + s_lc_pillar +
                    " \ns_haystack == " + s_haystack);
            } // if
            if (ix === ixs_low) {
                raudrohi.tmg('4915a8f2-c84a-4376-85f3-220260904dd7',
                    "The string does not conform to ProgFTE_v1 format." +
                    " \nix == ixs_low == " + ix +
                    " s_lc_pillar == " + s_lc_pillar +
                    " \ns_haystack == " + s_haystack);
            } // if
            if (raudrohi.settings.debug_JavaScript === true) {
                var i_len_s_haystack = s_haystack.length;
                // The (-1) is due to the fact that the s_lc_pillar must exist.
                // and has the length of 1.
                var ar_x = [ixs_low, ix, (i_len_s_haystack - 1)];
                raudrohi.base.assert_monotonic_increase_i(ar_x,
                    'e2044d30-f765-4dcf-92f3-220260904dd7');
            } // if
            var s_0 = s_haystack.substring(ixs_low, ix);         // === "999"
            ixs_low += s_0.length;
            // | 9 9 9 | 9
            // 0 1 2 3 4 5
            //         A
            ixs_low += 1
            // | 9 9 9 | 9
            // 0 1 2 3 4 5
            //           A
            ar_opmem[0] = ixs_low;
            var i_out = parseInt(s_0, 10);
            return i_out;
        } // i_ProgFTE_v1_hack_get_integer


        function s_ProgFTE_v1_hack_get_stringrecord(ar_opmem) {
            try {
                // stringrecord format:
                //  <length>|<stringvalue>|
                var i_len = i_ProgFTE_v1_hack_get_integer(ar_opmem);
                var ixs_low = ar_opmem[0];
                var s_haystack = ar_opmem[2];
                //-----------------------
                // | a b c | 9
                // 0 1 2 3 4 5
                //   A
                // ixs_low
                //-----------------------
                var ix = ixs_low + i_len;
                //-----------------------
                // | a b c | 9
                // 0 1 2 3 4 5
                //         A
                //         ix
                //-----------------------
                if (raudrohi.settings.debug_JavaScript === true) {
                    var i_len_s_haystack = s_haystack.length;
                    // The (-1) is due to the fact that the s_lc_pillar must exist.
                    // at the very end of a string-record and therefore also
                    // at the very end of the ProgFTE_v1 string.
                    // The "|" has the length of 1.
                    var ar_x = [ixs_low, ix, (i_len_s_haystack - 1)];
                    raudrohi.base.assert_monotonic_increase_i(ar_x,
                        'e97d7fe7-c16f-4ad3-8bf3-220260904dd7');
                } // if
                var s_out = s_haystack.substring(ixs_low, ix);  // === "999"
                ixs_low = ix + 1
                // | 9 9 9 | 9
                // 0 1 2 3 4 5
                //           A
                ar_opmem[0] = ixs_low;
                return s_out;
            } catch (err) {
                raudrohi.tmg('4e40d894-455e-4a87-83f3-220260904dd7', err);
            } // catch
        } // s_ProgFTE_v1_hack_get_stringrecord


        function ProgFTE_v1_hack_get_keyvaluepair(ar_opmem) {
            try {
                // Hashtable key-value pair format:
                // <stringrecord><stringrecord>
                var s_key = s_ProgFTE_v1_hack_get_stringrecord(ar_opmem);
                var s_value = s_ProgFTE_v1_hack_get_stringrecord(ar_opmem);
                ar_opmem[3] = s_key;
                ar_opmem[4] = s_value;
            } catch (err) {
                raudrohi.tmg('2e1cb7f6-48fe-4775-95f3-220260904dd7', err);
            } // catch
        } // ProgFTE_v1_hack_get_keyvaluepair


        self_public_.ProgFTE2ht = function (s_progfte) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(s_progfte, 's_progfte',
                        'ae70531e-b3e3-420a-83f3-220260904dd7');
                } // if
                //
                // v<ProgFTE_format_version>[|]<ProgFTE_format_mode>[|]<number_of_key-value_pairs>[|](<key-value_pair>)+
                //
                // v 1 | 0 | 9 |
                // 0 1 2 3 4 5 6
                //
                var rgx_vddd = /^v[\d]+[|][\d]+[|][\d]+[|]/;
                var ar = s_progfte.match(rgx_vddd);
                if (ar === null) {
                    raudrohi.tmg('3e587bf2-1223-4a36-9df3-220260904dd7',
                        "\nUnsupported format.\ns_progfte==\n" +
                        s_progfte + "\n\n");
                } // if
                var s_vddd = ar[0];
                // ar_opmem[0]=== ixs_low
                // ar_opmem[1]=== s_lc_pillar
                // ar_opmem[2]=== s_haystack
                // ar_opmem[3]=== s_key
                // ar_opmem[4]=== s_value
                var ar_opmem = [1, lc_singlepillar_, s_vddd];
                ar_opmem[3] = null;
                ar_opmem[4] = null;
                var i_version = i_ProgFTE_v1_hack_get_integer(ar_opmem);
                if (i_version !== 1) { // == ProgFTE_v1
                    raudrohi.tmg('41c7d4cd-fce9-4712-a1f3-220260904dd7',
                        'ProgFTE version ' + i_version + " is not and " +
                        "never will be supported by this function.");
                } // if
                var i_mode = i_ProgFTE_v1_hack_get_integer(ar_opmem);
                var i_n_of_keyvaluepairs = i_ProgFTE_v1_hack_get_integer(ar_opmem);
                ar_opmem[2] = s_progfte;
                var i_len_s_progfte = s_progfte.length;
                var ht_out = new Hashtable();
                var s_key = null;
                var s_value = null;
                // The very first key-value pair holds ProgFTE_v1
                // mode specific metadata.
                ProgFTE_v1_hack_get_keyvaluepair(ar_opmem);
                try {
                    while (ar_opmem[0] < i_len_s_progfte) {
                        ProgFTE_v1_hack_get_keyvaluepair(ar_opmem);
                        s_key = ar_opmem[3];
                        s_value = ar_opmem[4];
                        ht_out.put(s_key, s_value);
                    } // while
                } catch (err) {
                    raudrohi.tmg('e363bd1a-a906-4cdf-91e3-220260904dd7', err);
                } // catch
                return ht_out;
            } catch (err) {
                raudrohi.tmg('23d67b1a-2a41-4f88-a2e3-220260904dd7', err);
            } // catch
        } // self_public_.ProgFTE2ht

    } catch (err) {
        raudrohi.tmg('21430da3-8181-4d66-81e3-220260904dd7', err);
    } // catch
} // raudrohi.lang.ProgFTE_v1

raudrohi.lang.ProgFTE_v1 = new raudrohi.lang.ProgFTE_v1();

//-------------------------------------------------------------------------

raudrohi.lang.ht2ProgFTE = function (ht_in) {
    try {
        var s_progfte = raudrohi.lang.ProgFTE_v1.ht2ProgFTE(ht_in)
        return s_progfte;
    } catch (err) {
        raudrohi.tmg('d62c4a4a-b921-4ca6-93e3-220260904dd7', err);
    } // catch
} // raudrohi.lang.ht2ProgFTE


raudrohi.lang.ProgFTE2ht = function (s_progfte) {
    try {
        // http://martin.softf1.com/g/n//a2/doc/progfte/index.html
        var ht_out = null;
        var ar = s_progfte.match(/^[\d]+[|]{3}/); //
        if (ar !== null) { // ar[0]=== like  12345|||
            ht_out = raudrohi.lang.ProgFTE_v0.ProgFTE2ht(s_progfte)
        } else {
            ar = s_progfte.match(/^v[\d]+[|]/); // min match length == 3 characters
            if (ar === null) {
                raudrohi.tmg('cf654e51-2ed6-4369-82e3-220260904dd7',
                    "\nUnsupported format.\ns_progfte==\n" +
                    s_progfte + "\n\n");
            } // if
            var s_0 = ar[0]; // == "v1|" for ProgFTE_v1
            var s_version = s_0.substring(1, (s_0.length - 1));
            if (s_version === "1") { // == ProgFTE_v1
                ht_out = raudrohi.lang.ProgFTE_v1.ProgFTE2ht(s_progfte)
            } else {
                raudrohi.tmg('20b75928-39b1-4639-b2e3-220260904dd7',
                    'ProgFTE version ' + s_version +
                    ' is not yet supported by this function.');
            } // else
        } // else
        return ht_out;
    } catch (err) {
        raudrohi.tmg('1ba43b72-e856-48f4-93e3-220260904dd7',
            err + "\n\n" + ' s_progfte==' + s_progfte);
    } // catch
} // raudrohi.lang.ProgFTE2ht


//=========================================================================

