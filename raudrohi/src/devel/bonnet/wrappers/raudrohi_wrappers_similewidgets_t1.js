//=========================================================================
//
//-------------------------------------------------------------------------

if (window.raudrohi.globals.raudrohi_wrappers_similewidgets_t1_exists !== true) {
    // similewidgets_t1 is a namespace for code that originates
    // from http://www.simile-widgets.org/
    window.raudrohi.wrappers.similewidgets_t1 = {};
    window.raudrohi.globals.raudrohi_wrappers_similewidgets_t1_exists = true;
} // if
if (window.raudrohi.globals.raudrohi_wrappers_similewidgets_t1_private_code_exists !== true) {
    window.raudrohi.wrappers.similewidgets_t1.private_code = {};
    window.raudrohi.globals.raudrohi_wrappers_similewidgets_t1_private_code_exists = true;
} // if

//-------------------------------------------------------------------------

// It's a raw wrapper of the http://www.simile-widgets.org/
// timeline widget and a component of the
// window.raudrohi.widgets.g1.similewidgets_timeline_t1
//
// s_html_id is the ID of the div tag that will contain the wrapped widget.
window.raudrohi.wrappers.similewidgets_t1.timeline_t1 = function (s_html_id) {
    var self_public_ = this;
    try {
        if (raudrohi_settings_debug_JavaScript === true) {
            window.raudrohi.base.assert_is_HTML_ID(s_html_id, 's_html_id',
                'dc5c1921-ac03-47b0-955a-b11390f07dd7');
        } // if
        var ob_event_source_ = null;
        var ob_start_date_ = null;
        var ob_theme_ = null;
        var ob_tl_ = null;
        var s_onresize_funcion_name_ = 'window.raudrohi.wrappers.' +
            'similewidgets_t1.timeline_t1_' +
            window.raudrohi.GUID.s_generate_t1();
        var ob_vars_1_ = {};
        var s_html_id_ = s_html_id;
        var b_instantiated_ = false;

        function instantiate_wrapped_resize_func() {
            try {
                var func_x = function () {
                    try {
                        if (ob_vars_1_.b_inits_complete === true) {
                            if (ob_vars_1_.resizeTimerID === null) {
                                ob_vars_1_.resizeTimerID = window.setTimeout(function () {
                                    ob_vars_1_.resizeTimerID = null;
                                    ob_tl_.layout();
                                }, 500);
                            } // if
                        } // if
                    } catch (err) {
                        raudrohi.tmg('21dd85fc-ff04-4693-a45a-b11390f07dd7', err);
                    } // catch
                }
                window.raudrohi.ht_window_dot_onresize_event_handlers.put(
                    s_onresize_funcion_name_, func_x);
            } catch (err) {
                raudrohi.tmg('1bc20593-f4ba-457e-b85a-b11390f07dd7', err);
            } // catch
        } // instantiate_wrapped_resize_func

        this.instantiate_wrapped = function () {
            try {
                if (b_instantiated_ === true) {
                    return;
                } // if
                ob_event_source_ = new Timeline.DefaultEventSource(0);
                ob_start_date_ = Timeline.DateTime.parseGregorianDateTime("2004");
                ob_theme_ = Timeline.ClassicTheme.create();
                ob_theme_.event.bubble.width = 320;
                ob_theme_.event.bubble.height = 220;
                var bandInfos = [
                    Timeline.createBandInfo({
                        width: "70%",
                        intervalUnit: Timeline.DateTime.MONTH,
                        intervalPixels: 100,
                        date: ob_start_date_,
                        timeZone: +2,
                        showEventText: true,
                        theme: ob_theme_
                    }),
                    Timeline.createBandInfo({
                        width: "30%",
                        intervalUnit: Timeline.DateTime.YEAR,
                        intervalPixels: 100,
                        date: ob_start_date_,
                        timeZone: +2,
                        showEventText: true,
                        theme: ob_theme_
                    })
                ];
                bandInfos[1].syncWith = 0;
                bandInfos[1].highlight = true;
                ob_tl_ = Timeline.create(
                    document.getElementById(s_html_id_), bandInfos);
                ob_vars_1_.resizeTimerID = null;
                // POOLELI
                //raudrohi.adapter.log('s_');
                //ob_tl_.loadXML("./monet.xml", function (xml, url) {
                //    ob_event_source_.loadXML(xml, url);
                //});

                //tl.loadXML("jewish.xml", function(xml, url) {
                //	eventSourceJewish.loadXML(xml, url);
                //document.getElementById("jewish-event-count").innerHTML = eventSourceJewish.getCount();
                //});
                instantiate_wrapped_resize_func();
                b_instantiated_ = true;
            } catch (err) {
                raudrohi.tmg('535096e4-6e3b-45f9-935a-b11390f07dd7', err);
            } // catch
        } //instantiate_wrapped

        this.destruct_wrapped = function () {
            try {
                if (b_instantiated_ === false) {
                    return;
                } // if
                window.raudrohi.ht_window_dot_onresize_event_handlers.remove(
                    s_onresize_funcion_name_);
                b_instantiated_ = false;
            } catch (err) {
                raudrohi.tmg('7b8ae324-6625-4e98-b15a-b11390f07dd7', err);
            } // catch
        } // destruct_wrapped

    } catch (err) {
        window.raudrohi.tmg('31168984-f889-4f0c-b55a-b11390f07dd7', err);
    } // catch
} // window.raudrohi.wrappers.similewidgets_t1.timeline_t1


//=========================================================================

