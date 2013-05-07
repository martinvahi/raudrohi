//=========================================================================
//
// The raudrohi canvas_2d is a namespace for HTML5 2D canvas 
// related code.
//
//-------------------------------------------------------------------------
if (window.raudrohi_canvas_2d_exists !== true) {
    window.raudrohi.canvas_2d = {};
    window.raudrohi_canvas_2d_exists = true;
} // if
if (window.raudrohi_canvas_2d_private_code_exists !== true) {
    window.raudrohi.canvas_2d.private_code = {};
    window.raudrohi_canvas_2d_private_code_exists = true;
} // if

//-------------------------------------------------------------------------

// Assumption is that the canvas DOM elements are already peresent.
raudrohi.canvas_2d.draw_disk_2_canvas_t1 =
function (i_x, i_y, i_radius, s_canvas_html_id, s_color) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isString(s_canvas_html_id,
                's_canvas_html_id', '9d1f7118-926e-44b9-b5d5-403001213dd7');
            raudrohi.lang.assert_is_an_HTML_color(s_color, 's_color',
                '3f16f7c3-2e8d-4722-91d5-403001213dd7');
            raudrohi.base.assert_isNumber(i_x, 'i_x',
                '102e2024-e955-4cea-a4d5-403001213dd7');
            raudrohi.base.assert_isNumber(i_y, 'i_y',
                '5849df26-8218-4fa8-92d5-403001213dd7');
            raudrohi.base.assert_isNumber(i_radius, 'i_radius',
                'a388202e-ba5c-43b2-82d5-403001213dd7');
            if (i_x < 0) {
                raudrohi.tmg('34674a53-e906-4a7b-a3c5-403001213dd7',
                    'i_x == ' + i_x + ' < 0');
            } // if
            if (i_y < 0) {
                raudrohi.tmg('ba4f3428-7f29-43a2-92c5-403001213dd7',
                    'i_y == ' + i_y + ' < 0');
            } // if
            if (i_radius < 1) {
                raudrohi.tmg('1e8b714d-75d9-41d6-93c5-403001213dd7',
                    'i_radius == ' + i_radius + ' < 1');
            } // if
        } // if
        var ob_canvas = document.getElementById(s_canvas_html_id);
        var ob_canvas_context = ob_canvas.getContext('2d');
        ob_canvas_context.lineWidth = 1;
        ob_canvas_context.strokeStyle = s_color;
        ob_canvas_context.fillStyle = s_color;
        ob_canvas_context.beginPath();
        ob_canvas_context.arc(i_x, i_y, i_radius, 0, 2 * Math.PI, false);
        ob_canvas_context.fill();
        ob_canvas_context.stroke();
        ob_canvas_context.closePath();
    } catch (err) {
        raudrohi.tmg('b965f640-c812-4e8e-a5c5-403001213dd7', err);
    } // catch
} // raudrohi.canvas_2d.draw_disk_2_canvas_t1

//-------------------------------------------------------------------------

// Assumption is that the canvas DOM elements are already peresent.
raudrohi.canvas_2d.draw_line_2_canvas_t1 =
function (i_x1, i_y1, i_x2, i_y2, s_canvas_html_id, s_line_color,
    i_line_width) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isNumber(i_x1, 'i_x1',
                '0c600819-eff8-4553-a1c5-403001213dd7');
            raudrohi.base.assert_isNumber(i_y1, 'i_y1',
                'e6183c10-bd78-4cd0-9185-403001213dd7');
            raudrohi.base.assert_isNumber(i_x2, 'i_x2',
                'f203a13d-f1d6-4192-8385-403001213dd7');
            raudrohi.base.assert_isNumber(i_y2, 'i_y2',
                'c7c84e1d-df54-4b40-a585-403001213dd7');
            raudrohi.base.assert_isString(s_canvas_html_id, 's_canvas_html_id',
                '0f0fcb42-1825-443c-a385-403001213dd7');
            raudrohi.lang.assert_is_an_HTML_color(s_line_color, 's_line_color',
                '5f0590a1-82a9-4c2c-a185-403001213dd7');
            raudrohi.base.assert_isNumber(i_line_width, 'i_line_width',
                '19faf222-18d5-42ac-8685-403001213dd7');
            if (i_x1 < 0) {
                raudrohi.tmg('962dbf1b-bd13-4a27-b475-403001213dd7',
                    'i_x1 == ' + i_x1 + ' < 0');
            } // if
            if (i_y1 < 0) {
                raudrohi.tmg('efe00a3a-604d-49f8-a275-403001213dd7',
                    'i_y1 == ' + i_y1 + ' < 0');
            } // if
            if (i_x2 < 0) {
                raudrohi.tmg('300cc12f-f930-45a0-8475-403001213dd7',
                    'i_x2 == ' + i_x2 + ' < 0');
            } // if
            if (i_y2 < 0) {
                raudrohi.tmg('757fb92b-402f-453d-b575-403001213dd7',
                    'i_y2 == ' + i_y2 + ' < 0');
            } // if
            if (i_line_width < 1) {
                raudrohi.tmg('8faff355-ee45-41da-8575-403001213dd7',
                    'i_line_width== ' + i_line_width + ' < 1');
            } // if
        } // if
        var ob_canvas = document.getElementById(s_canvas_html_id);
        var ob_canvas_context = ob_canvas.getContext('2d');
        ob_canvas_context.lineWidth = i_line_width;
        ob_canvas_context.strokeStyle = s_line_color;
        ob_canvas_context.beginPath();
        ob_canvas_context.moveTo(i_x1, i_y1);
        ob_canvas_context.lineTo(i_x2, i_y2);
        ob_canvas_context.closePath();
        ob_canvas_context.stroke();
    } catch (err) {
        raudrohi.tmg('4d72b573-980b-48ad-8e75-403001213dd7', err);
    } // catch
} // raudrohi.canvas_2d.draw_line_2_canvas_t1


//-------------------------------------------------------------------------

// Assumption is that the canvas DOM elements are already peresent.
raudrohi.canvas_2d.draw_rectangle_2_canvas_t1 =
function (i_x1, i_y1, i_x2, i_y2, s_canvas_html_id, s_line_color, i_line_width,
    s_fill_color) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isNumber(i_x1, 'i_x1',
                '1f281d52-4f2b-409a-8575-403001213dd7');
            raudrohi.base.assert_isNumber(i_y1, 'i_y1',
                '0f2f8e3f-2585-466e-9575-403001213dd7');
            raudrohi.base.assert_isNumber(i_x2, 'i_x2',
                '0fdd3c56-657f-43d0-9475-403001213dd7');
            raudrohi.base.assert_isNumber(i_y2, 'i_y2',
                '6c11aa32-9133-40ed-9175-403001213dd7');
            raudrohi.base.assert_isString(s_canvas_html_id, 's_canvas_html_id',
                '3f1b2768-b0b8-4a59-9175-403001213dd7');
            raudrohi.lang.assert_is_an_HTML_color(s_line_color, 's_line_color',
                'd23fc91f-4c31-40ea-b465-403001213dd7');
            raudrohi.base.assert_isNumber(i_line_width, 'i_line_width',
                '3ec13492-fff7-43a4-9365-403001213dd7');
            raudrohi.lang.assert_is_an_HTML_color(s_fill_color, 's_fill_color',
                '263e7634-1e1c-440e-b165-403001213dd7');
            if (i_x1 < 0) {
                raudrohi.tmg('47be394e-39ae-4694-9165-403001213dd7',
                    'i_x1 == ' + i_x1 + ' < 0');
            } // if
            if (i_y1 < 0) {
                raudrohi.tmg('29dca718-2f19-4c15-b265-403001213dd7',
                    'i_y1 == ' + i_y1 + ' < 0');
            } // if
            if (i_x2 < 0) {
                raudrohi.tmg('ece00a14-ece9-4251-a265-403001213dd7',
                    'i_x2 == ' + i_x2 + ' < 0');
            } // if
            if (i_y2 < 0) {
                raudrohi.tmg('408b8f45-2422-4f32-8365-403001213dd7',
                    'i_y2 == ' + i_y2 + ' < 0');
            } // if
            if (i_x2 < i_x1) {
                raudrohi.tmg('1da07352-694a-4a43-8165-403001213dd7',
                    'i_x2 == ' + i_x2 + ' < ' + 'i_x1 == ' + i_x1);
            } // if
            if (i_y2 < i_y1) {
                raudrohi.tmg('53844465-dfdf-48c0-a765-403001213dd7',
                    'i_y2 == ' + i_y2 + ' < ' + 'i_y1 == ' + i_y1);
            } // if
            if (i_line_width < 0) {
                raudrohi.tmg('18d97315-45a4-4b28-a465-403001213dd7',
                    'i_line_width== ' + i_line_width + ' < 1');
            } // if
        } // if
        // POOLELI. Kood on valmis, aga vajab testimist.
        var ob_canvas = document.getElementById(s_canvas_html_id);
        var ob_canvas_context = ob_canvas.getContext('2d');
        ob_canvas_context.lineWidth = i_line_width;
        ob_canvas_context.strokeStyle = s_line_color;
        context.beginPath();
        context.rect(i_x1, i_y1, i_x2, i_y2);
        context.fillStyle = s_fill_color;
        context.fill();
        if (0 < i_line_width) {
            context.lineWidth = i_line_width;
            context.strokeStyle = s_line_color;
            context.stroke();
        } // if
        ob_canvas_context.closePath();
    } catch (err) {
        raudrohi.tmg('1fb99e92-fc83-4d54-b265-403001213dd7', err);
    } // catch
} // raudrohi.canvas_2d.draw_rectangle_2_canvas_t1

//-------------------------------------------------------------------------

// Assumption is that the canvas DOM elements are already peresent.
raudrohi.canvas_2d.draw_image_2_canvas_t1 =
function (s_canvas_html_id, i_image_upper_left_corner_x,
    i_image_upper_left_corner_y, s_image_URL,
    func_a_function_to_call_within_the_image_onload) {
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            raudrohi.base.assert_isString(s_canvas_html_id, 's_canvas_html_id',
                'b017f420-985c-4735-a455-403001213dd7');
            raudrohi.base.assert_isString(s_image_URL, 's_image_URL',
                '2cd1db2c-df21-46ed-9255-403001213dd7');

            raudrohi.base.assert_isNumber(i_image_upper_left_corner_x,
                'i_image_upper_left_corner_x',
                '3b6ae5eb-0d6c-41a9-a355-403001213dd7');
            raudrohi.base.assert_isNumber(i_image_upper_left_corner_y,
                'i_image_upper_left_corner_y',
                '9f4ec55f-f268-40f5-9555-403001213dd7');
            if (i_image_upper_left_corner_x < 0) {
                raudrohi.tmg('d93f4934-16a5-47b3-b255-403001213dd7',
                    'i_image_upper_left_corner_x == ' +
                    i_image_upper_left_corner_x + ' < 0');
            } // if
            if (i_image_upper_left_corner_y < 0) {
                raudrohi.tmg('a7987819-7824-467a-9355-403001213dd7',
                    'i_image_upper_left_corner_y == ' +
                    i_image_upper_left_corner_y + ' < 0');
            } // if
            raudrohi.base.assert_isFunction(
                func_a_function_to_call_within_the_image_onload,
                'func_a_function_to_call_within_the_image_onload',
                '3d0f1c99-ea0b-44ae-8555-403001213dd7');
        } // if
        var ob_canvas = document.getElementById(s_canvas_html_id);
        var ob_canvas_context = ob_canvas.getContext('2d');
        var ob_img = new Image();
        ob_img.src = s_image_URL;
        ob_img.onload = function () {
            // Credits related to the "onload" part go to
            // http://www.jefclaes.be/2010/12/html5-drawing-images-to-canvas-gotcha.html
            ob_canvas_context.drawImage(ob_img,
                i_image_upper_left_corner_x, i_image_upper_left_corner_y);
            func_a_function_to_call_within_the_image_onload();
        } // onload
    } catch (err) {
        raudrohi.tmg('ff6f073e-7304-4b86-b555-403001213dd7', err);
    } // catch
} // raudrohi.canvas_2d.draw_image_2_canvas_t1

//-------------------------------------------------------------------------

//=========================================================================

