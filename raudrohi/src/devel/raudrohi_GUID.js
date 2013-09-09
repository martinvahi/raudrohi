//=========================================================================
//
// The acronym GUID stands for Globally Unique Identifier.
//
// The February 28'th, 2010 version of the
// http://en.wikipedia.org/wiki/Globally_Unique_Identifier
// has been taken as a specification to this code, but the spec
// has not been strictly followed.
// 
// http://longterm.softf1.com/specifications/third_party/ietf/www_ietf_org_rfc4122_GUID_spec.txt
// 
//-------------------------------------------------------------------------

if (window.raudrohi.globals.raudrohi_GUID_exists !== true) {
    window.raudrohi.GUID = {};
    window.raudrohi.globals.raudrohi_GUID_exists = true;
} // if
if (window.raudrohi.globals.raudrohi_GUID_private_code_exists !== true) {
    window.raudrohi.GUID.private_code = {};
    window.raudrohi.globals.raudrohi_GUID_private_code_exists = true;
} // if

//-------------------------------------------------------------------------

window.raudrohi.GUID.s_generate_t1 = function () {
    try {
        // TODO: rewrite te date usage part to match it
        // with the Kibuvits Ruby Library GUID generation function.
        var i_milliseconds_since_1970_01_01 = (new Date()).getTime();
        //-------------------
        var s_0 = i_milliseconds_since_1970_01_01.toString(16);
        var ar_chars_1 = s_0.split("");
        var i_len_max = 36;
        var i = 0;
        var s_char = null;
        var i_len = ar_chars_1.length;
        var ar_chars_2 = null;
        var func_i_rand_t1 = window.raudrohi.base.i_rand_t1;
        if (i_len < i_len_max) {
            var n = i_len_max - i_len;
            for (i = 0; i < n; i++) {
                s_char = func_i_rand_t1(0, 15).toString(16);
                ar_chars_1.push(s_char);
            } // for
            ar_chars_2 = ar_chars_1;
        } else {
            ar_chars_2 = [];
            for (i = 0; i < i_len_max; i++) {
                s_char = ar_chars_1[i];
                ar_chars_2.push(s_char);
            } // for
        } // else
        ar_chars_1 = ar_chars_2.reverse();
        //------------------------------------------------------------------
        // A modified version of a passage from the RFC 4122:
        //---passage--start--
        //
        //  The variant field determines the layout of the UUID.  That is,
        //  the interpretation of all other bits in the UUID depends
        //  on the setting of the bits in the variant field.  As such,
        //  it could more accurately be called a type field; we retain
        //  the original term for compatibility. The variant field
        //  consists of a variable number of the most significant bits
        //  of octet 8 of the UUID.
        //
        //  The following table lists the contents of the variant field, where
        //  the letter "x" indicates a "don't-care" value.
        //
        //  Msb0  Msb1  Msb2  Description
        //
        //   0     x     x    Reserved, NCS backward compatibility.
        //   1     0     x    The variant specified in this document.
        //   1     1     0    Reserved, Microsoft Corporation backward
        //                    compatibility
        //   1     1     1    Reserved for future definition.
        //
        //---passage--end----
        //
        //---RFC-4122-citation--start--
        //
        // To minimize confusion about bit assignments within octets, the UUID
        // record definition is defined only in terms of fields that are
        // integral numbers of octets.  The fields are presented with the most
        // significant one first.
        //
        //---RFC-4122-citation--end---
        //
        // _0_1_2_3 _4_5 _6_7 _8_9 __11__13__15   #== byte indices
        // oooooooo-oooo-Xooo-Yooo-oooooooooooo
        // 012345678901234567890123456789012345
        // _________9_________9_________9______
        //
        // X indicates the GUID version and is the most significant
        // nibble of byte 6, provided that the counting of bytes
        // starts from 0, not 1.
        //
        // The value of Y determines the variant and the Y designates the
        // most significant nibble of byte 8,
        // provided that the counting starts from 0.
        // For version 4 the Y must be in set {8,9,a,b}.
        //
        //------------------------------------------------------------------
        var s_hyphen = '-';
        ar_chars_1[8] = s_hyphen;
        ar_chars_1[13] = s_hyphen;
        ar_chars_1[18] = s_hyphen;
        ar_chars_1[23] = s_hyphen;
        //---------
        ar_chars_1[14] = '4'; // The GUID spec version
        ar_chars_1[19] = func_i_rand_t1(8, 11).toString(16);
        //------------------------------------------------------------------
        var s_out = raudrohi.base.s_concat_array_of_strings(ar_chars_1);
        return s_out;
    } catch (err) {
        window.raudrohi.tmg('c1649e5c-291d-4ff5-91db-c21320307dd7', err);
    } // catch
} //  window.raudrohi.GUID.s_generate_t1

//=========================================================================

