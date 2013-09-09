//=========================================================================
//
// The acronym VFX stands for Visual Effects.
// Thsi file contains widget independent code.
//
//-------------------------------------------------------------------------

if (window.raudrohi.globals.raudrohi_vfx_exists !== true) {
    window.raudrohi.vfx = {};
    window.raudrohi.globals.raudrohi_vfx_exists = true;
} // if
if (window.raudrohi.globals.raudrohi_vfx_private_code_exists !== true) {
    window.raudrohi.vfx.private_code = {};
    window.raudrohi.globals.raudrohi_vfx_private_code_exists = true;
} // if

//-------------------------------------------------------------------------
// The input is expected to be in a form of #xxxxxx, where the x is 
// is a hex digit. The output is an array of integers, where 
// ar[0]===<red>
// ar[1]===<green>
// ar[2]===<blue>
window.raudrohi.vfx.ar_html2rgb = function (s_html_color) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            window.raudrohi.lang.assert_is_an_HTML_color(s_html_color,
                's_html_color', '5dddcf25-7801-42f2-a293-13b361717dd7');
        } // if
        var s_in = s_html_color.toLowerCase();
        var s_red = s_in.substring(1, 3);
        var s_green = s_in.substring(3, 5);
        var s_blue = s_in.substring(5, 7);
        var ar_out = [];
        ar_out.push(parseInt(s_red, 16));
        ar_out.push(parseInt(s_green, 16));
        ar_out.push(parseInt(s_blue, 16));
        return ar_out;
    } catch (err) {
        window.raudrohi.tmg('497203d8-ac62-4025-9493-13b361717dd7', err);
    } // catch
} // window.raudrohi.vfx.ar_html2rgb

//-------------------------------------------------------------------------

// The input is expected to be in a form of #xxxxxx, where the x is
// is a hex digit. The i_max_number_of_output_colors is inSet [2..int_max]
// ar_out[0] == s_html_color_start
// ar_out[ar_out.length-1] == s_html_color_end
//
// It's pretty expensive function, so You might like to
// consider using the window.raudrohi.cache.ht_color_gradients .
window.raudrohi.vfx.ar_interpolate_html_colors =
    function (s_html_color_start, s_html_color_end, i_max_number_of_output_colors) {
        try {
            if (raudrohi_settings_debug_JavaScript === true) {
                window.raudrohi.lang.assert_is_an_HTML_color(s_html_color_start,
                    's_html_color_start', 'c567ff47-e3a0-4589-b293-13b361717dd7');
                window.raudrohi.lang.assert_is_an_HTML_color(s_html_color_end,
                    's_html_color_end', '558b811b-3d03-4167-b383-13b361717dd7');
                window.raudrohi.base.assert_isNumber(i_max_number_of_output_colors,
                    'i_max_number_of_output_colors',
                    '26c3db53-a645-4044-b183-13b361717dd7');
            } // if
            if (i_max_number_of_output_colors < 2) {
                window.raudrohi.tmg('76d6924e-cd16-41c5-b583-13b361717dd7',
                    'i_max_number_of_output_colors == ' +
                        i_max_number_of_output_colors + ' < 2 ');
            } // if
            var ar_rgb_start = window.raudrohi.vfx.ar_html2rgb(s_html_color_start);
            var ar_rgb_end = window.raudrohi.vfx.ar_html2rgb(s_html_color_end);
            //------
            var fd_1 = null;
            var b_use_integer_mode = true;
            var fd_min = null;
            var fd_max = null;
            // It could be that blue is "small" in the start color
            // and "big" in the end color while red is "big" in
            // the start color and "small" in the end color, i.e.
            // it may be that the intensity of one color increases
            // while the intensity of another colord decreases.
            var b_reverse = false;
            var i_maximum_number_of_intermittant_numbers = i_max_number_of_output_colors -
                2;
            //------
            b_reverse = false;
            fd_min = ar_rgb_start[0];
            fd_max = ar_rgb_end[0];
            if (fd_max < fd_min) {
                fd_1 = fd_max;
                fd_max = fd_min;
                fd_min = fd_1;
                b_reverse = true;
            } // if
            var ar_reds_interp = window.raudrohi.lang.ar_interpolate(
                fd_min, fd_max, i_maximum_number_of_intermittant_numbers,
                b_use_integer_mode);
            if (b_reverse) {
                ar_reds_interp.reverse();
            } // if
            //------
            b_reverse = false;
            fd_min = ar_rgb_start[1];
            fd_max = ar_rgb_end[1];
            if (fd_max < fd_min) {
                fd_1 = fd_max;
                fd_max = fd_min;
                fd_min = fd_1;
                b_reverse = true;
            } // if
            var ar_greens_interp = window.raudrohi.lang.ar_interpolate(
                fd_min, fd_max, i_maximum_number_of_intermittant_numbers,
                b_use_integer_mode);
            if (b_reverse) {
                ar_greens_interp.reverse();
            } // if
            //------
            b_reverse = false;
            fd_min = ar_rgb_start[2];
            fd_max = ar_rgb_end[2];
            if (fd_max < fd_min) {
                fd_1 = fd_max;
                fd_max = fd_min;
                fd_min = fd_1;
                b_reverse = true;
            } // if
            var ar_blues_interp = window.raudrohi.lang.ar_interpolate(
                fd_min, fd_max, i_maximum_number_of_intermittant_numbers,
                b_use_integer_mode);
            if (b_reverse) {
                ar_blues_interp.reverse();
            } // if
            //------
            var s_lc_red = 'red';
            var s_lc_green = 'red';
            var s_lc_blue = 'blue';
            var ar_interpolation_ars = [];
            ar_interpolation_ars.push([ar_reds_interp.length, s_lc_red]);
            ar_interpolation_ars.push([ar_greens_interp.length, s_lc_green]);
            ar_interpolation_ars.push([ar_blues_interp.length, s_lc_blue]);
            ar_interpolation_ars.sort(function (a, b) { // descending
                return (a[0] <= b[0]);
            });
            var i_n_of_output_colors = (ar_interpolation_ars[0])[0];
            //------
            var ar_red = window.raudrohi.lang.ar_scale_number_of_frames(
                ar_reds_interp, i_n_of_output_colors);
            var ar_green = window.raudrohi.lang.ar_scale_number_of_frames(
                ar_greens_interp, i_n_of_output_colors);
            var ar_blue = window.raudrohi.lang.ar_scale_number_of_frames(
                ar_blues_interp, i_n_of_output_colors);
            //------
            var ar_out = [];
            var s_html_color = null;
            var s_lc_numsign = '#';
            var i = 0;
            var i_base = 16;
            var i_number_of_characters = 2;
            var s_red = null;
            var s_green = null;
            var s_blue = null;
            for (i = 0; i < i_n_of_output_colors; i++) {
                s_red = window.raudrohi.lang.s_num2s_with_leading_zero_normalization(
                    ar_red[i], i_base, i_number_of_characters);
                s_green = window.raudrohi.lang.s_num2s_with_leading_zero_normalization(
                    ar_green[i], i_base, i_number_of_characters);
                s_blue = window.raudrohi.lang.s_num2s_with_leading_zero_normalization(
                    ar_blue[i], i_base, i_number_of_characters);
                s_html_color = s_lc_numsign + s_red + s_green + s_blue;
                ar_out.push(s_html_color);
            } // for
            return ar_out;
        } catch (err) {
            window.raudrohi.tmg('1c41c862-5021-4509-b383-13b361717dd7', err);
        } // catch
    } // window.raudrohi.vfx.ar_interpolate_html_colors

//-------------------------------------------------------------------------

window.raudrohi.vfx.render_math_in_dom_element_t1 = function (s_html_id) {
    try {
        if (raudrohi.settings.debug_JavaScript === true) {
            raudrohi.base.assert_isString(s_html_id, 's_html_id',
                '01cc5520-6721-4101-9483-13b361717dd7');
        } // if
        var ob_elem = document.getElementById(s_html_id);
        // The ob_elem is valid even after the ob_elem's
        // parent's innerHTML has been overwritten by HTML
        // that does not contain an element with the s_html_id.
        //
        // According to
        // http://docs.mathjax.org/en/v1.1-latest/typeset.html
        // the MathJax operates asynchronously. that explains the
        // mandatory use of the MathJax.Hub.Queue.
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, ob_elem]);
    } catch (err) {
        raudrohi.tmg('0a61c01d-39ca-4197-9483-13b361717dd7', err);
    } // catch
} // window.raudrohi.vfx.render_math_in_dom_element_t1

//=========================================================================

