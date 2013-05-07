//=========================================================================

//-------------------------------------------------------------------------
// The raudrohi.widgets.g1.pileofmethods_t1 is not a widget itself, but
// it is a field that every widget in the namespace
// raudrohi.widgets.g1 has.
//
// The code of the raudrohi.widgets.g1.pileofmethods_t1
// can be roughly seen as a collection of the following 3 parts:
//
// 1) Widgets framework code that either the widget developers,
//    or any widget client code, should ever call.
//
// 2) Methods that will be automatically attached to
//    every widget instance (in here the variable
//    instance_public_) as public methods of the widget.
//
// 3) Methods that are meant to be called only from widget
//    code, i.e. API that is meant only for widget developers.
//    (In here all of that code is stored to variable prc_.)
//
// Hooks that the widget provides to its client code are 
// located within instance namespace instance_public_.wg_hooks_
//
// TODO: The usage of the instance_public_ and prc_ is currently
//       a bit mixed, inconsistent. One has to clean it up to make
//       a clear distinction.
//
raudrohi.widgets.g1.pileofmethods_t1 =
function (instance_public, s_phonenumber_prefix, s_html_id) {
    var pileofmethods_t1_ = this;
    try {

        // One of the reasons, why one doesn't just use the JavaScript built-in
        // prototype property for the methods that are declared to
        // be part of the instance_public_, is that the methods are
        // instance specific closures, because they need access to
        // instance specific private fields, of which the "standard ones"
        // are encapsulated to the raudrohi.widgets.g1.pileofmethods_t1.
        var instance_public_ = instance_public;

        instance_public_.only_for_raudrohi_core_developers = {};
        instance_public_.private_code_ = {};
        instance_public_.wg_hooks_ = {};
        instance_public_.private_code_.selfread = {};
        var prc_ = instance_public_.private_code_;
        prc_.html_id_ = s_html_id;
        instance_public_.private_code_.evh_ = {};
        instance_public_.private_code_.func = {};
        instance_public_.thrjr_ = {};
        var b_selfread_wrap_2_alignment_cache_is_out_of_date_ = true;

        var lc_s_emptystring = raudrohi_glc_s_emptystring;
        var lc_s_linebreak = raudrohi_glc_s_linebreak;

        try {
            prc_.customizable = {};
            prc_.customizable.optional = {};
            prc_.customizable.compulsory = {};
            prc_.usable_only_in_critical_section = {};
            prc_.startup_shutdown_handler_ =
            new raudrohi.lang.startup_shutdown_handler(instance_public_);
            prc_.self_is_hidden_ = true;
            prc_.self_is_graphical_widget_ = true;
            prc_.content_ = '';
            prc_.content_set_ = true; // true due to buttons and a like
            prc_.ar_widgets_ = [];
            prc_.containers_html_cached_ = false;
            prc_.alignment1_ = 'center';
            instance_public_.only_for_raudrohi_core_developers.s_widget_architecture_class =
            'g1';
            instance_public_.only_for_raudrohi_core_developers.ht_microsessions_ =
            raudrohi.base.pool_of_hashtables.get_empty_hashtable();
            instance_public_.only_for_raudrohi_core_developers.ht_microsessions_cnt_ =
            1;
            // The instance_public_.only_for_raudrohi_core_developers.ht_microsessions_queue_ is used for emptying
            // the instance_public_.only_for_raudrohi_core_developers.ht_microsessions_. Otherwise there would be a "memory leak".
            instance_public_.only_for_raudrohi_core_developers.ht_microsessions_queue_ =
            new raudrohi.lang.htQueue();
            prc_.microsession_dismiss_all_in_progress_ = false;

            prc_.customizable.compulsory.render_readonly = function () {
            };
            prc_.customizable.compulsory.render_editable = function () {
            };
            prc_.ht_widgets_conserved_states_ = new Hashtable();
            prc_.ht_widgets_conserved_states_default_ = new Hashtable();
            prc_.customizable.optional.create_subwidgets = function () {
            };
            prc_.customizable.optional.startup_hook = function () {
            };
            prc_.customizable.optional.shutdown_hook = function () {
            };
            instance_public_.state_switcher_ =
            new raudrohi.base.state_switcher_t1();
            instance_public_.change_state_2 =
            instance_public_.state_switcher_.change_state_2;
            instance_public_.is_running = function () {
                try {
                    var b = false;
                    b = prc_.startup_shutdown_handler_.machine_is_running();
                    return b;
                } catch (err) {
                    raudrohi.tmg('31ff4f5f-c486-4a09-940f-13202011abd7', err);
                } // catch
            }

            //-------------------------------------------------------------
            // TODO: Refactor the direct use of the
            // s_field_name_in_parent out by replacing the
            // assignments and readings with the getter-setter
            // methods. (That includes code generation templates.)
            instance_public_.s_field_name_in_parent = "not_set";

            instance_public_.set_field_name_in_parent =
            function (s_field_name_in_parent) {
                try {
                    if (raudrohi_settings_debug_JavaScript === true) {
                        raudrohi.base.assert_isString(s_field_name_in_parent,
                            's_field_name_in_parent',
                            '6b15a35a-e68f-4c8c-810f-13202011abd7');
                    } // if

                    instance_public_.s_field_name_in_parent = "" +
                                                              s_field_name_in_parent;
                } catch (err) {
                    raudrohi.tmg('fd29ba56-3425-4774-a30f-13202011abd7', err);
                } // catch
            } // set_s_field_name_in_parent

            instance_public_.s_get_field_name_in_parent = function () {
                try {
                    var s_out = "" + instance_public_.s_field_name_in_parent;
                    return s_out;
                } catch (err) {
                    raudrohi.tmg('57c60953-05fb-43ba-a10f-13202011abd7', err);
                } // catch
            } // s_get_field_name_in_parent

            //-------------------------------------------------------------
            prc_.widgets_created_ = false;
            prc_.container_id_ = prc_.html_id_ + '_div';
            prc_.containers_html_cached_ = false;
            prc_.containers_html_cache_ = null;
            prc_.bitfield_ = new raudrohi.base.bitfield_htbased();

            prc_.is_readonly_ = false;

            // As long as the widget stays visible and editable, i.e. not
            // readonly, the browser maintains the widget state and there's no
            // need to call the prc_.customizable.optional.content_from_GUI_2_vars. One should
            // also avoid writing the raudrohi.base.normalize_linebreaks
            // result back to the JavaScript GUI, because if a person wants
            // to do Copy/Paste by using its own platform, i.e. MacOS or Windows,
            // the line-breaks should be consistently local within different
            // applications. For instance, a linebreak in FireFox should also
            // be a linebreak in Microsoft Word, etc.
            //
            // This function does not need to be recursive, because the
            // excursiveness is already handled by the Raudrohi framework.
            prc_.customizable.optional.content_from_GUI_2_vars = function () {
            }

            prc_.set_config_hook =
            function (config_field_name, config_field_value) {
            };
            prc_.parent_instance_ = null; // Parent widget's instance.
            prc_.loginpage_phone_number_ = null;
            instance_public_.phone = new raudrohi.lang.comm.phone(
                s_phonenumber_prefix + s_html_id);
        } catch (err) {
            raudrohi.tmg('e4a4214a-a287-48dd-920f-13202011abd7', err);
        } // catch

        var ob_critical_section_impl_ = new raudrohi.critical_section_t1();
        prc_.critical_section_rw =
        ob_critical_section_impl_.critical_section_rw;
        prc_.critical_section_r = ob_critical_section_impl_.critical_section_r;

        instance_public_.only_for_raudrohi_core_developers.content_from_GUI_2_vars_recursive =
        function () {
            try {
                if (prc_.self_is_hidden_ === true) {
                    return;
                } // if
                prc_.customizable.optional.content_from_GUI_2_vars();
                var len = prc_.ar_widgets_.length;
                var i = 0;
                var elem;
                for (i = 0; i < len; i++) {
                    elem = prc_.ar_widgets_[i];
                    try {
                        elem.only_for_raudrohi_core_developers.content_from_GUI_2_vars_recursive();
                    } catch (err) {
                        raudrohi.tmg('a5c8f9ca-586d-4a1f-860f-13202011abd7',
                            err);
                    } // catch
                } // for
            }
            catch (err) {
                raudrohi.tmg('2c66d032-5f0a-4fdc-b4fe-13202011abd7', err);
            } // catch
        } // instance_public_.only_for_raudrohi_core_developer.content_from_GUI_2_vars_recursive

        prc_.assert_stateExists = function (state_name) {
            try {
                raudrohi.base.assert_isString(state_name, 'state_name',
                    '59e40663-ed92-4d68-a2fe-13202011abd7');
                if (instance_public_.state_switcher_.state_exists(state_name) !==
                    true) {
                    raudrohi.tmg('332a9052-7b7d-4e77-95fe-13202011abd7',
                        'State ' + state_name +
                        ' does not exist in the local state_switcher.');
                } // if
            } catch (err) {
                raudrohi.tmg('84736896-96c6-4e17-88fe-13202011abd7', err);
            } // catch
        } // prc_.assert_stateExists


        prc_.customizable.optional.hide_prefixhook =
        function (true_if_update_DOM) {
        }
        prc_.customizable.optional.hide_suffixhook =
        function (true_if_update_DOM) {
        }

        // The parameter true_if_update_DOM exists for efficiency and
        // comes handy, when dealing with compound widgets, i.e.
        // widgets that contain other widgets. The idea is that for
        // speed one wants to minimize the amount of DOM redactions,
        // by deleting a whole branch of the DOM (the compound widget)
        // at once.
        instance_public_.hide = function (true_if_update_DOM) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isBoolean(true_if_update_DOM,
                        'true_if_update_DOM',
                        'b2670e2f-7815-4ad8-b287-6230a0218bd7');
                } // if
                if (prc_.self_is_graphical_widget_ !== true) {
                    return;
                } // if
                if (prc_.self_is_hidden_) {
                    return;
                } // if
                prc_.customizable.optional.hide_prefixhook(true_if_update_DOM);
                gahter_inner_widgets_states();
                instance_public_.only_for_raudrohi_core_developers.content_from_GUI_2_vars_recursive();
                raudrohi.widgets.g1.sys.hide_or_unhide_t2(prc_.ar_widgets_,
                    false, true_if_update_DOM,
                    prc_.ht_widgets_conserved_states_);
                raudrohi.adapter.editStyle(prc_.container_id_, 'visibility',
                    'hidden');
                if (true_if_update_DOM) {
                    raudrohi.base.set_innerHTML(prc_.container_id_, '');
                } // if
                prc_.self_is_hidden_ = true;
                prc_.customizable.optional.hide_suffixhook(true_if_update_DOM);
            } catch (err) {
                raudrohi.tmg('1922c355-82a8-480e-97fe-13202011abd7',
                    'prc_.container_id_==' + prc_.container_id_ + '  ' + err);
            } // catch
        } // hide

        instance_public_.unhide = function () {
            try {
                if (prc_.self_is_graphical_widget_ !== true) {
                    return;
                } // if
                // It's important that the re-rendering of visible elements
                // is allowed. For instance, buttons have to be rerendered,
                // right after their label has been changed.
                if ((prc_.startup_shutdown_handler_.machine_is_running()) ===
                    false) {
                    return;
                } // if
                raudrohi.adapter.editStyle(prc_.container_id_,
                    'visibility', 'visible');
                init_ht_widgets_conserved_states_if_necceccary();
                if (prc_.self_is_hidden_ === false) {
                    if (prc_.keylisteners_unit_inited_) {
                        prc_.keylisteners_unit_.detach_listeners_from_DOM_elements();
                    } // if
                    var i_pfawl = prc_.ar_widgets_.length; //A FireFox 3.0.x bug workaround.
                    if (0 < i_pfawl) {
                        var b_true_if_unhide = false;
                        // The "hiding" and "unhiding" operations have
                        // to be interlaced. Hence the hiding here.
                        try {
                            raudrohi.widgets.g1.sys.hide_or_unhide_t2(prc_.ar_widgets_,
                                b_true_if_unhide, false,
                                prc_.ht_widgets_conserved_states_);
                        } catch (err) {
                            raudrohi.tmg('c39e4612-3bf4-45b8-92fe-13202011abd7',
                                err);
                        } // catch
                    } // if
                } // if
                // One has to keep in mind that the parent widget's
                // containers have to exist in the DOM
                // before the child widgets can be rendered.
                //
                // The prc_.customizable.compulsory.render_readonly and the prc_.customizable.compulsory.render_editable
                // are expected to create the parent widget's, i.e. self's,
                // containers and mark the visibility of the child widgets.
                //
                // However, as the parent widget's rendering routine may blatantly
                // overwrite the graphical part of the child widgets. That explains,
                // why the GUI values need to be saved prior to rendering.
                // The GUI values gathering part withstands hidden widgets and
                // non-graphical widgets.
                try {
                    // A citation from,
                    // http://groups.google.com/group/mozilla.dev.apps.firefox/browse_thread/thread/f8cc24edaa11a39a/7fb2722db5eed77a?lnk=gst&q=martin+vahi#7fb2722db5eed77a
                    //
                    //---citation--start---
                    // Boris Zbarsky   Feb 22, 9:48 pm
                    // On 2/22/11 1:11 PM, Martin_Vahi wrote:
                    // > Thank You for Your answer.
                    // > It seems that I got it all wrong and I have to study the ECMAScript
                    // > standard, which I will do.
                    // > Thank You for educating me. :-)
                    //
                    //
                    // This isn't covered in the ECMAScript standard, for what it's worth.
                    // That standard doesn't cover anything about threading at all.
                    // The fact that web-exposed JavaScript has only one thread with
                    // run-to-completion semantics is a de-facto aspect of that particular
                    // embedding, not a fundamental fact about ECMAScript.
                    // -Boris
                    //---citation--end-----
                    //
                    if (prc_.is_readonly_ === true) {
                        prc_.customizable.compulsory.render_readonly();
                    } else {
                        prc_.customizable.compulsory.render_editable();
                    } // else
                } catch (err) {
                    raudrohi.tmg('0da66e15-92a2-457d-95fe-13202011abd7', err);
                } // catch
                try {
                    raudrohi.widgets.g1.sys.hide_or_unhide_t2(prc_.ar_widgets_,
                        true, true, prc_.ht_widgets_conserved_states_);
                } catch (err0) {
                    raudrohi.tmg('55293756-1ca5-4d12-93fe-13202011abd7', err0);
                } // catch
                prc_.self_is_hidden_ = false;
            } catch (err) {
                raudrohi.tmg('488a0865-f0ce-416f-91fe-13202011abd7',
                    "\ninstance_public_.unhide," +
                    "\ninstance_public_.phone.get_phone_number()==" +
                    instance_public_.phone.get_phone_number() +
                    "\nprc_.container_id_==" + prc_.container_id_ + "\n" + err);
            } // catch
        } // unhide


        instance_public_.get_widget_state = function () {
            try {
                var widget_state = new raudrohi.base.widget_state_bitfield();
                widget_state.is_in_state_startup =
                prc_.startup_shutdown_handler_.machine_is_running();
                widget_state.is_in_state_hidden = prc_.self_is_hidden_;
                return widget_state;
            } catch (err) {
                raudrohi.tmg('18866a44-fd5d-4524-84ee-13202011abd7',
                    'prc_.container_id_==' + prc_.container_id_ + '  ' + err);
            } // catch
        } // get_widget_state

        instance_public_.get_widget_html_id = function () {
            try {
                var s_out = '' + prc_.html_id_;
                return s_out;
            } catch (err) {
                raudrohi.tmg('1b7dbc4b-ccbf-45e7-a3ee-13202011abd7',
                    'prc_.container_id_==' + prc_.container_id_ + '  ' + err);
            } // catch
        } // get_widget_html_id

        instance_public_.set_config =
        function (config_field_name, config_field_value) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(config_field_name,
                        'config_field_name',
                        '3be07233-2567-4fbd-a4ee-13202011abd7');
                    raudrohi.base.assert_isNotnull(config_field_value,
                        'config_field_value',
                        '40b9954d-0ff9-462e-a1ee-13202011abd7');
                } // if
                if (raudrohi_adapter_isBoolean(config_field_value)) {
                    if (config_field_value) {
                        prc_.bitfield_.set(config_field_name);
                    } else {
                        prc_.bitfield_.unset(config_field_name);
                    } // else
                } else {
                    prc_.bitfield_.set_with_attachment(config_field_name,
                        config_field_value);
                } // else
                prc_.set_config_hook(config_field_name, config_field_value);
            } catch (err) {
                raudrohi.tmg('5cebbd55-0169-46fb-a3ee-13202011abd7',
                    'prc_.container_id_==' + prc_.container_id_ + '  ' + err);
            } // catch
        } // set_config

        instance_public_.only_for_raudrohi_core_developers.set_parent_instance =
        function (an_instance_or_null) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    if (an_instance_or_null !== null) {
                        raudrohi.base.assert_isObject(an_instance_or_null,
                            'an_instance_or_null',
                            '191cf05f-539b-4b3b-a3ee-13202011abd7');
                    } // if
                } // if
                prc_.parent_instance_ = an_instance_or_null;
            }
            catch (err) {
                raudrohi.tmg('48214e64-8a8f-476f-a2ee-13202011abd7', err);
            } // catch
        } // only_for_raudrohi_core_developers.set_parent_instance

        prc_.customizable.optional.from_readonly_to_editable_prefixhook =
        function () {
        }
        prc_.customizable.optional.set_readonly_suffixhook =
        function (true_if_readonly) {
        }

        // The readonly-state matters only if the widget is
        // visible/rendered.
        // The readonly state of subwidgets is expected to
        // be set at widgets' over-riding instance
        // of the rendering functions, the
        //  prc_.customizable.compulsory.render_readonly
        //  prc_.customizable.compulsory.render_editable
        instance_public_.set_readonly = function (b_true_if_readonly) {
            try {
                if (prc_.self_is_graphical_widget_ !== true) {
                    // The readonly state is a graphical phenomena.
                    return;
                } // if
                if (prc_.is_readonly_ === b_true_if_readonly) {
                    return;
                } // if
                if (prc_.startup_shutdown_handler_.machine_is_running() ===
                    true) {
                    prc_.customizable.optional.from_readonly_to_editable_prefixhook();
                    if (prc_.self_is_hidden_ === false) {
                        if (prc_.is_readonly_ === false) {
                            instance_public_.only_for_raudrohi_core_developers.content_from_GUI_2_vars_recursive();
                        } // if
                    } // if
                } // if
                prc_.containers_html_cached_ = false;
                // The prc_.is_readonly_ has to be set before the unhide,
                // so that the proper rendering(readonly/editable) can be
                // chosen within the unhiding method.
                prc_.is_readonly_ = b_true_if_readonly;
                // It is very important that the parent widget
                // creates its containers before the sibling widgets
                // start to render themselves.
                if (prc_.self_is_hidden_ === false) {
                    instance_public_.unhide();
                } // if
                var len = prc_.ar_widgets_.length;
                var i = 0;
                var elem;
                for (i = 0; i < len; i++) {
                    elem = prc_.ar_widgets_[i];
                    try {
                        elem.set_readonly(b_true_if_readonly);
                    } catch (err) {
                        raudrohi.tmg('5ab3a87a-d756-4964-a5ee-13202011abd7',
                            err);
                    } // catch
                } // for
                prc_.customizable.optional.set_readonly_suffixhook(b_true_if_readonly);
            } catch (err) {
                raudrohi.tmg('9c196fc9-4f99-487b-a7de-13202011abd7', err);
            } // catch
        } // set_readonly

        instance_public_.is_readonly = function () {
            return prc_.is_readonly_;
        } // is_readonly

        instance_public_.is_hidden = function () {
            return prc_.self_is_hidden_;
        } // is_hidden

        // Returns false for widgets that do not have a graphical
        // representation.
        instance_public_.is_graphical_widget = function () {
            return prc_.self_is_graphical_widget_;
        } // is_graphical_widget

        instance_public_.reset_container_id = function (new_container_id) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(new_container_id,
                        'new_container_id',
                        '0acc1c41-eaff-4a7f-94de-13202011abd7');
                } // if
                prc_.containers_html_cached_ = false;
                // The assignment of the prc_.container_id_ is
                // doubled due to a FireFox (IceWeasel) 3.0.6 bug workaround.
                if (prc_.self_is_hidden_ === false) {
                    instance_public_.hide();
                    prc_.container_id_ = new_container_id;
                    instance_public_.unhide();
                } else {
                    prc_.container_id_ = new_container_id;
                } // else

                return;
            } catch (err) {
                raudrohi.tmg('53da4980-d0c5-45e8-b1de-13202011abd7', err);
            } // catch
        } // instance_public_.reset_container_id

        // Returns a boolean.
        instance_public_.content_is_set = function () {
            try {
                if (prc_.content_set_ === false) {
                    return false;
                } // if
                // Idea is that the state of sub-widgets can
                // change, for instance, they might be downloading
                // things or have faulty input by the user.
                var b = true;
                var len = prc_.ar_widgets_.length;
                var i = 0;
                var elem;
                for (i = 0; i < len; i++) {
                    elem = prc_.ar_widgets_[i];
                    b = b && elem.content_is_set();
                } // for
                prc_.content_set_ = b;
                return b;
            } catch (err) {
                raudrohi.tmg('2b732b01-d1bc-4c22-b1de-13202011abd7', err);
            } // catch
        } // content_is_set

        prc_.keylisteners_unit_inited_ = false;
        instance_public_.set_keylistener =
        function (key_number_as_string, event_handler_func) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(key_number_as_string,
                        'key_number_as_string',
                        'ff1a2f18-952f-480c-92de-13202011abd7');
                    raudrohi.base.assert_isFunction(event_handler_func,
                        'event_handler_func',
                        '72e27804-a659-4400-84de-13202011abd7');
                } // if
                if (!prc_.keylisteners_unit_inited_) {
                    prc_.keylisteners_unit_ =
                    new raudrohi.widgets.g1.sys.keylisteners_unit(instance_public_);
                    prc_.keylisteners_unit_inited_ = true;
                } // if
                prc_.keylisteners_unit_.add_keylistener(prc_.html_id_,
                    key_number_as_string, event_handler_func);
            }
            catch (err) {
                raudrohi.tmg('92e93131-d7da-4d4d-82de-13202011abd7', err);
            } // catch
        } // set_keylistener

        instance_public_.remove_keylistener = function (key_number) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isNumber(key_number, 'key_number',
                        '634c614b-0495-4aeb-a3de-13202011abd7');
                } // if
                if (!prc_.keylisteners_unit_inited_) {
                    return;
                } // if
                prc_.keylisteners_unit_.remove_keylistener(key_number);
            }
            catch (err) {
                raudrohi.tmg('e147b905-d4ff-4138-b1ce-13202011abd7', err);
            } // catch
        } // remove_keylistener

        instance_public_.remove_all_keylisteners = function () {
            try {
                if (prc_.keylisteners_unit_inited_) {
                    prc_.keylisteners_unit_.remove_all_keylisteners();
                } // if
            } catch (err) {
                raudrohi.tmg('3af09617-2198-4324-a3ce-13202011abd7', err);
            } // catch
        } // remove_all_keylisteners

        // Never call the widget_startup_sequence() directly. Always use the
        // instance_public_.startup_sequence_init instead.  The widget_startup_sequence()
        // is meant only for the raudrohi.lang.startup_shutdown_handler
        instance_public_.only_for_raudrohi_core_developers.widget_startup_sequence =
        function () {
            try {
                if (prc_.startup_shutdown_handler_.hook_startup_started() ===
                    true) {
                    return;
                } // if
                if (prc_.widgets_created_ !== true) {
                    prc_.customizable.optional.create_subwidgets();
                    prc_.widgets_created_ = true;
                }
                else {
                    raudrohi.widgets.g1.sys.startup_t1(prc_.ar_widgets_,
                        prc_.ht_widgets_conserved_states_default_);
                } // else
                prc_.customizable.optional.startup_hook();
                instance_public_.hide(false);
                prc_.startup_shutdown_handler_.hook_startup_complete();
            } catch (err) {
                raudrohi.tmg('178ca8e3-a8bd-4823-9ace-13202011abd7', err);
            } // catch
        } // instance_public_.only_for_raudrohi_core_developers.widget_startup_sequence

        instance_public_.startup_sequence_init = function () {
            try {
                prc_.startup_shutdown_handler_.startbutton_pushed()
            }
            catch (err) {
                raudrohi.tmg('8b4f6133-60a6-4934-83ce-13202011abd7', err);
            } // catch
        } // instance_public_.startup_sequence_init

        // alignment values={north,south,east,west,northeast,northwest,
        // southeast,southwest, center}
        instance_public_.set_alignment =
        function (alignment_as_a_cardinal_point) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(alignment_as_a_cardinal_point,
                        'alignment_as_a_cardinal_point',
                        '5e8cdcd7-a84b-48c1-b4ce-13202011abd7');
                    raudrohi.widgetless_ui.func.assert_alignment_value(
                        alignment_as_a_cardinal_point);
                } // if
                if (alignment_as_a_cardinal_point == prc_.alignment1_) {
                    return;
                } // if
                prc_.alignment1_ = alignment_as_a_cardinal_point;
                b_selfread_wrap_2_alignment_cache_is_out_of_date_ = true;
                prc_.containers_html_cached_ = false;
                if (prc_.self_is_hidden_ === false) {
                    instance_public_.unhide();
                } // if
            }
            catch (err) {
                raudrohi.tmg('1a24c247-82d6-4102-b5ce-13202011abd7', err);
            } // catch
        } // instance_public_.set_alignment

        // Never call the widget_shutdown_sequence() directly. Always use the
        // instance_public_.shutdown_sequence_init instead.
        // The widget_shutdown_sequence()
        // is meant only for the raudrohi.lang.startup_shutdown_handler
        instance_public_.only_for_raudrohi_core_developers.widget_shutdown_sequence =
        function () {
            try {
                if (prc_.startup_shutdown_handler_.hook_shutdown_started() ===
                    true) {
                    return;
                } // if
                instance_public_.state_switcher_.change_state_2('zero');
                raudrohi.widgets.g1.sys.change_state_2(prc_.ar_widgets_,
                    'zero');
                instance_public_.hide(true);
                prc_.customizable.optional.shutdown_hook();
                raudrohi.widgets.g1.sys.shutdown_t1(prc_.ar_widgets_);
                if (0 < prc_.ht_widgets_conserved_states_default_.size()) {
                    // Comment resides next to the
                    //init_ht_widgets_conserved_states_if_necceccary();
                    raudrohi.widgets.g1.sys.copy_ht_of_bitfields(
                        prc_.ht_widgets_conserved_states_,
                        prc_.ht_widgets_conserved_states_default_);
                } // if
                raudrohi.widgets.g1.sys.close_microsessions_t1(instance_public_.only_for_raudrohi_core_developers.ht_microsessions_);
                prc_.startup_shutdown_handler_.hook_shutdown_complete();
            } catch (err) {
                raudrohi.tmg('8b2bcf44-408c-4fa3-93ce-13202011abd7', err);
            } // catch
        } // instance_public_.only_for_raudrohi_core_developers.widget_shutdown_sequence

        instance_public_.shutdown_sequence_init = function () {
            try {
                prc_.startup_shutdown_handler_.stopbutton_pushed();
            } catch (err) {
                raudrohi.tmg('88ef9849-25cc-4bfa-b5ce-13202011abd7', err);
            } // catch
        } // instance_public_.shutdown_sequence_init

        //-----------------------------------------------------------
        instance_public_.thrjr_.threadjumper_ricochet_detector =
        function (ht_wrapper) {
            if (raudrohi_settings_debug_JavaScript === true) {
                raudrohi.tmg('ed05fd2a-4285-4321-95be-13202011abd7',
                    'One should never reach this place.');
            } // if
        } // thrjr_.threadjumper_ricochet_detector
        // Closely associated with the display_message_t3.
        instance_public_.thrjr_.display_message_thrjr = function (ht_wrapper) {
            // The reason, why the name is "display_message_thrjr"
            // in stead of "display_message", is that it has to
            // coexist with the old, "default message displayer" system.
            // After the message passing system has been updated to the
            // threadjumper version, the standard phonecall catchers
            // can be modified and the name can be refactored out.
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isObject(ht_wrapper, 'ht_wrapper',
                        '1c47c9f4-0b05-43fe-84be-13202011abd7');
                } // if
                var ht_data = ht_wrapper.get('data');
                var msg = ht_data.get('msg');
                raudrohi.base.assert_isString(msg, 'msg',
                    'd27b702d-91a8-4bda-a3be-13202011abd7');
                instance_public_.display_message(msg);
                raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_data);
                raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_wrapper);
            } catch (err) {
                raudrohi.tmg('4d4fecd2-ef72-4ce5-acbe-13202011abd7', err);
            } // catch
        } // instance_public_.thrjr_.display_message


        //-----------------------------------------------------------
        function gahter_inner_widgets_states() {
            try {
                prc_.ht_widgets_conserved_states_.clear();
                var len = prc_.ar_widgets_.length;
                var i = 0;
                var a_widget;
                for (i = 0; i < len; i++) {
                    a_widget = prc_.ar_widgets_[i];
                    prc_.ht_widgets_conserved_states_.put(
                        a_widget.phone.get_phone_number(),
                        a_widget.get_widget_state());
                } // for
            } catch (err) {
                raudrohi.tmg('49f85a73-894c-4a7f-92be-13202011abd7',
                    'prc_.container_id_==' + prc_.container_id_ + '  ' + err);
            } // catch
        } // gahter_inner_widgets_states
        prc_.register_subwidget = function (a_widget,
            s_default_visibility_after_the_parent_widget_has_been_unhidden) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isObject(a_widget, 'a_widget',
                        '24b6f6b2-f92d-4968-b5be-13202011abd7');
                    raudrohi.base.assert_isString(
                        s_default_visibility_after_the_parent_widget_has_been_unhidden,
                        's_default_visibility_after_the_parent_widget_has_been_unhidden',
                        '0a9ca331-a079-46e7-b2be-13202011abd7');
                    var dbg_widget_state = a_widget.get_widget_state();
                    if (dbg_widget_state.is_in_state_hidden === false) {
                        if (prc_.self_is_hidden_ !== false) {
                            raudrohi.tmg('84716a4b-8e27-49b3-b3be-13202011abd7',
                                'One tried to register a subwidget to a ' +
                                'hidden parent, while the subwidget is in visible ' +
                                'state. This can\'t be done, because ' +
                                'the parent widget has to create the ' +
                                'DOM-tree node containers to all of ' +
                                'its subwidgets. ');
                        } // if
                    } // if
                } // if
                var widget_state = a_widget.get_widget_state();
                switch (s_default_visibility_after_the_parent_widget_has_been_unhidden) {
                    case 'hidden':
                        widget_state.is_in_state_hidden = true;
                        break;
                    case 'visible':
                        widget_state.is_in_state_hidden = false;
                        break;
                    default:
                        if (raudrohi_settings_debug_JavaScript === true) {
                            raudrohi.tmg(
                                '7f36f355-6be9-4b50-a4ae-13202011abd7',
                                'There\'s no branching for default_visibility_' +
                                'after_the_parent_widget_has_been_unhidden(==' +
                                s_default_visibility_after_the_parent_widget_has_been_unhidden +
                                ').');
                        } // if
                } // switch
                a_widget.only_for_raudrohi_core_developers.set_parent_instance(instance_public_);
                prc_.ar_widgets_.push(a_widget);
                prc_.ht_widgets_conserved_states_default_.put(
                    a_widget.phone.get_phone_number(), widget_state);
                instance_public_.state_switcher_.register_subwidget(a_widget);
            } catch (err) {
                raudrohi.tmg('0cecad1e-ddea-495e-94ae-13202011abd7',
                    'prc_.container_id_==' + prc_.container_id_ + '  ' + err);
            } // catch
        } // prc_.register_subwidget

        var unregister_all_subwidgets_in_progress_ = false;
        prc_.unregister_all_subwidgets = function () {
            try {
                if (unregister_all_subwidgets_in_progress_ === true) {
                    return;
                } // if
                unregister_all_subwidgets_in_progress_ = true;
                if (raudrohi_settings_debug_JavaScript === true) {
                } // if
                if (prc_.self_is_hidden_ !== true) {
                    var len = prc_.ar_widgets_.length;
                    var i = 0;
                    var elem;
                    for (i = 0; i < len; i++) {
                        elem = prc_.ar_widgets_[i];
                        elem.hide(true);
                        elem.only_for_raudrohi_core_developers.set_parent_instance(null);
                    } // for
                } // if
                prc_.ar_widgets_ = [];
                prc_.ht_widgets_conserved_states_default_.clear();
                instance_public_.state_switcher_.unregister_all_subwidgets();
                unregister_all_subwidgets_in_progress_ = false;
            }
            catch (err) {
                raudrohi.tmg('030a1127-4400-4e58-92ae-13202011abd7', err);
            } // catch
        } // prc_.unregister_all_subwidgets

        // The comment of the prc_.mark_elemwidget_to_be_unhidden
        // also explains the prc_.mark_elemwidget_to_be_hidden.
        prc_.mark_elemwidget_to_be_hidden =
        function (a_widget, true_if_update_DOM) {
            try {
                var phn = a_widget.phone.get_phone_number();
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isNotnull(a_widget, 'a_widget',
                        '4ba1b818-75eb-4e3d-83ae-13202011abd7');
                    raudrohi.base.assert_isObject(a_widget, 'a_widget',
                        'e7ab0927-15c0-4c7b-b5ae-13202011abd7');
                    if (prc_.ht_widgets_conserved_states_.containsKey(phn) ===
                        false) {
                        raudrohi.tmg('5200db3d-6394-45ae-84ae-13202011abd7',
                            'prc_.ht_widgets_conserved_states_ does not contain ' +
                            'a key of ' + phn);
                    } // if
                } // if
                if (prc_.self_is_hidden_ === false) {
                    a_widget.hide(true_if_update_DOM);
                } // if
                var new_bitfield = a_widget.get_widget_state();
                prc_.ht_widgets_conserved_states_.put(phn, new_bitfield);
            } catch (err) {
                raudrohi.tmg('eae6c933-8568-4345-a2ae-13202011abd7',
                    'prc_.container_id_==' + prc_.container_id_ + '  ' + err);
            } // catch
        } // prc_.mark_elemwidget_to_be_hidden

        // If a subwidget of a hidden widget is marked visible,
        // then it will appear only after the parent widget has been
        // made visible. If the parent widget has been made visible
        // prior to a call to the prc_.mark_elemwidget_to_be_unhidden,
        // then the subwidget is also unhidden during the marking.
        prc_.mark_elemwidget_to_be_unhidden = function (a_widget) {
            try {
                var phn = a_widget.phone.get_phone_number();
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isNotnull(a_widget, 'a_widget',
                        '576f32f9-5f2f-4334-94ae-13202011abd7');
                    raudrohi.base.assert_isObject(a_widget, 'a_widget',
                        '3e2f1c54-5dd7-4922-8fae-13202011abd7');
                    if (!prc_.ht_widgets_conserved_states_default_.containsKey(phn)) {
                        raudrohi.tmg('3e8dca53-ef08-4c3e-859e-13202011abd7',
                            'prc_.ht_widgets_conserved_states_ does not contain ' +
                            'a key of ' + phn);
                    } // if
                } // if
                init_ht_widgets_conserved_states_if_necceccary();
                if (raudrohi_settings_debug_JavaScript === true) {
                    if (!prc_.ht_widgets_conserved_states_.containsKey(phn)) {
                        raudrohi.tmg('58133229-c504-445e-a59e-13202011abd7',
                            'prc_.ht_widgets_conserved_states_ does not contain ' +
                            'a key of ' + phn);
                    } // if
                } // if
                var new_bitfield;
                if (prc_.self_is_hidden_ === false) {
                    a_widget.unhide();
                    new_bitfield = a_widget.get_widget_state();
                } else {
                    new_bitfield = a_widget.get_widget_state();
                    new_bitfield.is_in_state_hidden = false;
                } // if
                prc_.ht_widgets_conserved_states_.put(phn, new_bitfield);
            } catch (err) {
                raudrohi.tmg('7b3ecd2c-8dfe-45a7-919e-13202011abd7',
                    'prc_.container_id_==' + prc_.container_id_ + '  ' + err);
            } // catch
        } // prc_.mark_elemwidget_to_be_unhidden


        function init_ht_widgets_conserved_states_if_necceccary() {
            try {
                // The reason, why the bitfields get copied here, is that
                // some of the widgets are running right after instantiation,
                // but their registration takes place after their instantiation.
                // So, at the time of instantiation, the
                // prc_.ht_widgets_conserved_states_ is not up to date.
                if (prc_.ht_widgets_conserved_states_default_.size() !=
                    prc_.ht_widgets_conserved_states_.size()) {
                    raudrohi.widgets.g1.sys.copy_ht_of_bitfields(
                        prc_.ht_widgets_conserved_states_,
                        prc_.ht_widgets_conserved_states_default_);
                } // if
            } catch (err) {
                raudrohi.tmg('399294f3-58d2-4bfe-839e-13202011abd7', err);
            } // catch
        } // init_ht_widgets_conserved_states_if_necceccary

        this.display_message_t1 = function (message_text) {
            try {
                if (prc_.widgets_created_ === true) {
                    prc_.widget_msgboard_.set_content(message_text);
                } else {
                    if (raudrohi_settings_debug_JavaScript === true) {
                        raudrohi.tmg('b7330ce8-b223-461e-879e-13202011abd7',
                            'display_message got called before the ' +
                            'message displaying widget is instantiated.');
                    } // if
                } // else
            } catch (err) {
                raudrohi.tmg('434c2e98-20da-41a3-b39e-13202011abd7', err);
            } // catch
        } // display_message_t1

        this.display_message_t2 = function (message_text) {
            try {
                var parent_phone_number = prc_.parent_instance_.phone.get_phone_number();
                instance_public_.phone.call(parent_phone_number,
                    'display_message_b|||', message_text);
            } catch (err) {
                raudrohi.tmg('4e5c7425-1382-44ae-a29e-13202011abd7', err);
            } // catch
        } // display_message_t2

        this.display_message_t3 = function (message_text) {
            try {
                raudrohi.base.assert_isString(message_text, 'message_text',
                    '05c9fe20-49d7-402f-a29e-13202011abd7');
                var ht_data = raudrohi.base.pool_of_hashtables.get_empty_hashtable();
                ht_data.put('msg', message_text);
                var parent_phone_number = prc_.parent_instance_.phone.get_phone_number();
                prc_.threadjump_send(parent_phone_number,
                    'display_message_thrjr', ht_data,
                    'threadjumper_ricochet_detector');
            } catch (err) {
                raudrohi.tmg('00887741-4886-465d-928e-13202011abd7', err);
            } // catch
        } // display_message_t3

        // Modifies the ht_wrapper.
        instance_public_.only_for_raudrohi_core_developers.microsession_set_id =
        function (ht_wrapper) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isObject(ht_wrapper,
                        'ht_wrapper', '5ca3f429-bc2f-4ccb-a48e-13202011abd7');
                } // if
                var microsession_name = 'microsession_name_' +
                                        instance_public_.phone.get_phone_number() +
                                        '_' + raudrohi.base.generate_id();
                instance_public_.only_for_raudrohi_core_developers.ht_microsessions_cnt_++;
                var cnt1 = instance_public_.only_for_raudrohi_core_developers.ht_microsessions_cnt_;
                instance_public_.only_for_raudrohi_core_developers.ht_microsessions_.put(microsession_name,
                    cnt1);
                ht_wrapper.put('microsession_id', cnt1);
                ht_wrapper.put('microsession_name', microsession_name);
                instance_public_.only_for_raudrohi_core_developers.ht_microsessions_queue_.push(microsession_name);
                var x_threshold = 100;
                if (x_threshold <
                    instance_public_.only_for_raudrohi_core_developers.ht_microsessions_queue_.length()) {
                    // In here one destroys some of the oldest microsession
                    // records to release memory.
                    var n = 50;//Math.floor(x_threshold/2);
                    var i;
                    var ms_name;
                    for (i = 0; i < n; i++) {
                        ms_name =
                        instance_public_.only_for_raudrohi_core_developers.ht_microsessions_queue_.pop();
                        instance_public_.only_for_raudrohi_core_developers.ht_microsessions_.remove(ms_name);
                    } // for
                } // if
            }
            catch (err) {
                raudrohi.tmg('099af15c-b894-4f5b-848e-13202011abd7', err);
            } // catch
        } // instance_public_.only_for_raudrohi_core_developers.microsession_set_id

        // It has a peculiarity that it takes the hashtable from the pool. So,
        // it would be nice, if the hashtables were later returned to the pool.
        instance_public_.only_for_raudrohi_core_developers.microsession_assemble_data_wrapper_hashtable =
        function (destination_command, return_command) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(return_command,
                        'return_command',
                        'a8057535-a8a4-4ec7-958e-13202011abd7');
                    raudrohi.base.assert_isString(destination_command,
                        'destination_command',
                        '2c996d1a-f4ae-4a43-838e-13202011abd7');
                } // if
                var ht_wrapper = raudrohi.base.pool_of_hashtables.get_empty_hashtable();
                instance_public_.only_for_raudrohi_core_developers.microsession_set_id(ht_wrapper);
                ht_wrapper.put('return_phonenumber',
                    instance_public_.phone.get_phone_number());
                ht_wrapper.put('destination_command', destination_command);
                ht_wrapper.put('return_command', return_command);
                ht_wrapper.put('state_switch_count',
                    instance_public_.state_switcher_.get_state_switch_count());
                ht_wrapper.put('data', ''); // Otherwise raudrohi.lang.ht2ProgFTE(ht_data));
                return ht_wrapper;
            } catch (err) {
                raudrohi.tmg('230cd852-7ffe-431e-a28e-13202011abd7', err);
            } // catch
        } // instance_public_.only_for_raudrohi_core_developers.microsession_assemble_data_wrapper_hashtable

        // Returns a boolean value.
        prc_.state_changed_before_package_arrival = function (ht_wrapper) {
            try {
                var s_old_swc = ht_wrapper.get('state_switch_count');
                var old_swc = parseInt(s_old_swc, 10);
                var new_swc = instance_public_.state_switcher_.get_state_switch_count();
                var answer = true;
                if (old_swc === new_swc) {
                    answer = false;
                } // if
                return answer;
            } catch (err) {
                raudrohi.tmg('6bfd055a-f78c-4c6f-b28e-13202011abd7', err);
            } // catch
        } // state_changed_before_package_arrival

        // The microsession stuff gets added to the wrapper automatically.
        //
        // It's a deprecated method, which is subject to removal during
        // refactoring. One should us the
        //  raudrohi.widgets.g1.router2hostserver instead.
        prc_.send2server_t1 =
        function (s_formscript_processor_name, ht_data, s_return_command) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(s_formscript_processor_name,
                        's_formscript_processor_name',
                        'a542f055-74c8-4322-838e-13202011abd7');
                    raudrohi.base.assert_isObject(ht_data, 'ht_data',
                        '839b3b5b-c18e-400b-927e-13202011abd7');
                    raudrohi.base.assert_isString(s_return_command,
                        's_return_command',
                        'a19c08b2-4923-4b76-a27e-13202011abd7');
                } // if
                var ht_wrapper = instance_public_.only_for_raudrohi_core_developers.microsession_assemble_data_wrapper_hashtable(
                    s_formscript_processor_name, s_return_command);
                ht_wrapper.put('data', raudrohi.lang.ht2ProgFTE(ht_data));
                raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_data);
                raudrohi.apparch1.send2server(s_formscript_processor_name,
                    instance_public_.phone.get_phone_number(),
                    raudrohi.lang.ht2ProgFTE(ht_wrapper));
                raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_wrapper);
            } catch (err) {
                raudrohi.tmg('6257ac8b-060b-4351-b97e-13202011abd7', err);
            } // catch
        } //  send2server_t1

        // The microsession stuff gets added to the wrapper automatically.
        // The data is required to be a string, if
        // destination_widget_phone_number==="server". Otherwise it is
        // allowed to be either a string or anything else, for example, a
        // hash table.
        prc_.threadjump_send =
        function (s_destination_phonenumber, s_destination_command, ht_data,
            s_return_command) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(s_destination_phonenumber,
                        's_destination_phonenumber',
                        '25059728-edae-489a-957e-13202011abd7');
                    raudrohi.base.assert_isString(s_destination_command,
                        's_destination_command',
                        '1b50f5c5-2b9d-498e-857e-13202011abd7');
                    raudrohi.base.assert_isObject(ht_data, 'ht_data',
                        '46b7f172-0392-4c2e-957e-13202011abd7');
                    raudrohi.base.assert_isString(s_return_command,
                        's_return_command',
                        '977468f2-f0c4-43f2-837e-13202011abd7');
                } // if
                var ht_wrapper = instance_public_.only_for_raudrohi_core_developers.microsession_assemble_data_wrapper_hashtable(
                    s_destination_command, s_return_command);
                ht_wrapper.put('data', ht_data);
                instance_public_.phone.call(s_destination_phonenumber,
                    s_destination_command + '|||', ht_wrapper);
                // In order to simplify the code that receives the wrapper,
                // actually, in order to save who ever reads/develops the
                // wrapper user code in the widgets, from figuring out
                // this tricky stuff here, the wrappers may not be
                // given back to the pool. The end users should, but don't have to,
                // destroy them at their own like this:
                // raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_wrapper);
            } catch (err) {
                raudrohi.tmg('879efd15-7588-49d6-a56e-13202011abd7', err);
            } // catch
        } //  prc_.threadjump_send

        prc_.threadjump_send_reply =
        function (ht_wrapper_tht_came_in_with_only_data_field_modified) {
            try {
                var ht_wrapper = ht_wrapper_tht_came_in_with_only_data_field_modified;
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isObject(ht_wrapper, 'ht_wrapper',
                        '91513438-bf9d-4c9d-956e-13202011abd7');
                } // if
                var return_command_orig = ht_wrapper.get('return_command');
                ht_wrapper.put('destination_command', return_command_orig);
                ht_wrapper.put('return_command',
                    'threadjumper_ricochet_detector');
                var return_phonenumber_orig = ht_wrapper.get('return_phonenumber');
                ht_wrapper.put('destination_phonenumber',
                    return_phonenumber_orig);
                ht_wrapper.put('return_phonenumber',
                    instance_public_.phone.get_phone_number());
                instance_public_.phone.call(return_phonenumber_orig,
                    return_command_orig + '|||', ht_wrapper);
            } catch (err) {
                raudrohi.tmg('b03bbe4c-4b2d-47b5-816e-13202011abd7', err);
            } // catch
        } //  prc_.threadjump_send_reply

        prc_.threadjump_redirect_outwards =
        function (s_destination_phonenumber, s_destination_command, ht_wrapper,
            s_return_command) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(s_destination_phonenumber,
                        's_destination_phonenumber',
                        '5caa7f8c-e65d-437d-816e-13202011abd7');
                    raudrohi.base.assert_isString(s_destination_command,
                        's_destination_command',
                        '412244c1-3686-4af1-a56e-13202011abd7');
                    raudrohi.base.assert_isObject(ht_wrapper,
                        'ht_wrapper', '2f4b292a-a944-4bbe-a26e-13202011abd7');
                    raudrohi.base.assert_isString(s_return_command,
                        's_return_command',
                        'd6cad926-1c3e-4c20-b26e-13202011abd7');
                } // if
                var phn = instance_public_.phone.get_phone_number();
                var return_command_old = ht_wrapper.get('return_command');
                var return_phonenumber_old = ht_wrapper.get('return_phonenumber');
                ht_wrapper.put('return_command_redirect_' + phn,
                    return_command_old);
                ht_wrapper.put('return_phonenumber_redirect_' + phn,
                    return_phonenumber_old);
                ht_wrapper.put('return_command', s_return_command);
                ht_wrapper.put('return_phonenumber', phn);
                ht_wrapper.put('destination_phonenumber',
                    s_destination_phonenumber);
                ht_wrapper.put('destination_command', s_destination_command);
                // The reason, why the wrapper is furnished with a new
                // microsession records is that one has already received the
                // wrapper once and if the microsession records of the wrapper
                // are not renewed, the microsession management will
                // discharge the wrapper after the new destination returns
                // it to us. The destination widget could renews the
                // microsession records, but doing the microsession id
                // renewal twice, when only once is necessary, would be
                // a waste of resources.
                instance_public_.only_for_raudrohi_core_developers.microsession_set_id(ht_wrapper);
                instance_public_.phone.call(s_destination_phonenumber,
                    s_destination_command + '|||', ht_wrapper);
            } catch (err) {
                raudrohi.tmg('87bf6a4b-4073-413b-845e-13202011abd7', err);
            } // catch
        } // prc_.threadjump_redirect_outwards

        // The prc_.threadjump_redirect_inwards is meant to be used within
        // the function that was initially indicated by the input parameter
        // return_command of the prc_.threadjump_redirect_outwards
        prc_.threadjump_redirect_inwards = function (ht_wrapper) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isObject(ht_wrapper, 'ht_wrapper',
                        'ed49423e-0068-4224-955e-13202011abd7');
                } // if
                var phn = instance_public_.phone.get_phone_number();
                var return_command_old = ht_wrapper.get(
                    'return_command_redirect_' + phn);
                var return_phonenumber_old = ht_wrapper.get(
                    'return_phonenumber_redirect_' + phn);
                ht_wrapper.put('destination_command', return_command_old);
                ht_wrapper.put('destination_phonenumber',
                    return_phonenumber_old);
                ht_wrapper.put('return_command',
                    'threadjumper_ricochet_detector');
                ht_wrapper.put('return_phonenumber', phn);
                instance_public_.phone.call(return_phonenumber_old,
                    return_command_old + '|||', ht_wrapper);
            } catch (err) {
                raudrohi.tmg('c93c6871-ebc8-4853-825e-13202011abd7', err);
            } // catch
        } // prc_.threadjump_redirect_inwards


        // Returns raudrohi.core.pair, where
        // raudrohi.core.pair.a==true,  if operation failed and
        // raudrohi.core.pair.a==false, if operation succeeded.
        // The raudrohi.core.pair.b is assigned the data hashtable.
        instance_public_.only_for_raudrohi_core_developers.microsession_receive_bin_t1 =
        function (ht_wrapper) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isObject(ht_wrapper, 'ht_wrapper',
                        '26eb8e9f-8e42-4494-b45e-13202011abd7');
                } // if
                var a_pair = new raudrohi.core.pair();
                a_pair.a = true;
                a_pair.b = null;
                if (prc_.microsession_dismiss_all_in_progress_ === true) {
                    return a_pair;
                } // if
                var microsession_name = ht_wrapper.get('microsession_name');
                var microsession_id = ht_wrapper.get('microsession_id');
                if (instance_public_.only_for_raudrohi_core_developers.ht_microsessions_.containsKey(microsession_name)) {
                    if (parseInt(microsession_id, 10) !=
                        instance_public_.only_for_raudrohi_core_developers.ht_microsessions_.get(microsession_name)) {
                        return a_pair;
                    } // if
                } // if
                instance_public_.only_for_raudrohi_core_developers.ht_microsessions_cnt_++;
                var cnt1 = instance_public_.only_for_raudrohi_core_developers.ht_microsessions_cnt_;
                instance_public_.only_for_raudrohi_core_developers.ht_microsessions_.put(microsession_name,
                    cnt1);
                a_pair.a = false;
                a_pair.b = ht_wrapper.get('data');
                return a_pair;
            } catch (err) {
                raudrohi.tmg('df3990f3-2bad-4f96-935e-13202011abd7', err);
            } // catch
        } // microsession_receive_bin_t1
        prc_.microsession_dismiss_all = function () {
            try {
                prc_.microsession_dismiss_all_in_progress_ = true;
                var keys = instance_public_.only_for_raudrohi_core_developers.ht_microsessions_.keys();
                var len = keys.length;
                var microsession_name;
                var microsession_cnt;
                var cnt_plus;
                for (var i = 0; i < len; i++) {
                    microsession_name = keys[i];
                    microsession_cnt =
                    instance_public_.only_for_raudrohi_core_developers.ht_microsessions_.get(
                        microsession_name);
                    // The +1 is as if we had already received the first package.
                    cnt_plus = microsession_cnt + 1;
                    instance_public_.only_for_raudrohi_core_developers.ht_microsessions_.put(microsession_name,
                        cnt_plus);
                } // for
                prc_.microsession_dismiss_all_in_progress_ = false;
            } catch (err) {
                raudrohi.tmg('237335b4-42c5-4448-b55e-13202011abd7', err);
            } // catch
        } // microsession_dismiss_all

        // Returns raudrohi.core.pair, where
        // raudrohi.core.pair.a==true,  if operation failed and
        // raudrohi.core.pair.a==false, if operation succeeded.
        // The raudrohi.core.pair.b is assigned the wrapper hashtable.
        instance_public_.only_for_raudrohi_core_developers.microsession_receive_txt_t2 =
        function (wrapper_hashtable_progfte) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(wrapper_hashtable_progfte,
                        'wrapper_hashtable_progfte',
                        '42a52d32-791b-4aba-b45e-13202011abd7');
                } // if
                var ht_wrapper = raudrohi.lang.ProgFTE2ht(wrapper_hashtable_progfte);
                var ht_wrapper_data = raudrohi.lang.ProgFTE2ht(
                    ht_wrapper.get('data'));
                ht_wrapper.put('data', ht_wrapper_data);
                var a_pair = instance_public_.only_for_raudrohi_core_developers.microsession_receive_bin_t1(ht_wrapper);
                if (a_pair.a === false) {
                    a_pair.b = ht_wrapper
                } // if
                return a_pair;
            } catch (err) {
                raudrohi.tmg('ec401b28-22c2-48ac-924e-13202011abd7', err);
            } // catch
        } // instance_public_.only_for_raudrohi_core_developers.microsession_receive_txt_t2

        // Returns true, if the session management has discharged the
        // package or the instance_public_ had a method that
        // has a name of the "return_command".
        // One of the cases, where the packet is dismissed, is
        // when the machine is not running.
        prc_.threadjump_receive = function (ht_wrapper) {
            try {
                if ((prc_.startup_shutdown_handler_.machine_is_running()) ===
                    false) {
                    return true; // packet dismissal
                } // if
                var a_pr1 = instance_public_.only_for_raudrohi_core_developers.microsession_receive_bin_t1(ht_wrapper);
                raudrohi.base.assert_isNotnull(a_pr1, 'a_pr1',
                    'd4c7f15e-bc3f-4505-854e-13202011abd7');
                if (a_pr1.a === true) {
                    return true; // packet dismissal
                } // if
                var data = a_pr1.b;
                var destination_command = ht_wrapper.get('destination_command');
                if (destination_command === "/dev/null") {
                    return true;
                } // if
                if (instance_public_.thrjr_[destination_command] ===
                    undefined) {
                    if (instance_public_.thrjr_.default_command === undefined) {
                        if (raudrohi_settings_debug_JavaScript === true) {
                            raudrohi.tmg('148f7355-0857-4a91-814e-13202011abd7',
                                'instance_public_.thrjr_' +
                                destination_command +
                                " does not exist in \n" +
                                instance_public_.phone.get_phone_number() +
                                "\n");
                        } // if
                        return false;
                    } // if
                    instance_public_.thrjr_.default_command(ht_wrapper);
                } else {
                    instance_public_.thrjr_[destination_command](ht_wrapper);
                } // else
                return true;
            } catch (err) {
                raudrohi.tmg('507823fb-1af6-4899-a54e-13202011abd7', err);
            } // catch
        } // prc_.threadjump_receive

        // It's useful for performing some explicit shut-down operations
        // prior to the closing of the session on the server.
        prc_.customizable.optional.evh_button_logout_t1_hook = function (e) {
        }

        prc_.evh_button_logout_t1 = function (e) {
            try {
                instance_public_.state_switcher_.change_state_2('zero');
                prc_.customizable.optional.evh_button_logout_t1_hook(e);
                raudrohi.widgets.g1.triggerTransition('resurrect', 'shutdown',
                    prc_.loginpage_phone_number_,
                    instance_public_.phone.get_phone_number(), new Hashtable());
                raudrohi.apparch1.send_logout_command_2_server_t1();
            } catch (err) {
                raudrohi.tmg('45884265-7355-4416-844e-13202011abd7', err);
            } // catch
        } // prc_.evh_button_logout


        prc_.repaint_if_graphical_and_not_hidden = function () {
            try {
                if (prc_.self_is_hidden_ === true) {
                    return
                } // if
                instance_public_.unhide();
            } catch (err) {
                raudrohi.tmg('19d9731b-f4bd-4fdb-854e-13202011abd7', err);
            } // catch
        } // prc_.repaint_if_graphical_and_not_hidden

        var s_selfread_wrap_2_alignment_div_divstart_cache_ = lc_s_emptystring;
        var lc_s_wrap_2_alignment_div_divend = "\n</div>\n";
        // Returns a string.
        prc_.selfread.wrap_2_alignment_div = function (s_html_2_wrap) {
            try {
                if (raudrohi_settings_debug_JavaScript === true) {
                    raudrohi.base.assert_isString(s_html_2_wrap,
                        's_html_2_wrap',
                        '7332a437-f3a1-462a-954e-13202011abd7');
                } // if
                // Actually the b_selfread_wrap_2_alignment_cache_is_out_of_date_
                // should be in a critical section, but as nothing is
                // that terribly broken, if the alignment of elements is
                // a bit weird, then one leaves it out of a critical
                // section for the benefit of speed. Besides, it's probably
                // pretty hard to hit the right time window to cause the
                // miss-alignment.
                if (b_selfread_wrap_2_alignment_cache_is_out_of_date_ ===
                    true) {
                    var ht_alignmet_styles = raudrohi.widgetless_ui.func.get_alignment_style_values(
                        prc_.alignment1_);
                    var s = lc_s_linebreak + '<div style="vertical-align:' +
                            ht_alignmet_styles.get('vertical-align') +
                            ';text-align:' +
                            ht_alignmet_styles.get('text-align') + ";\">\n";
                    s_selfread_wrap_2_alignment_div_divstart_cache_ = s;
                    b_selfread_wrap_2_alignment_cache_is_out_of_date_ = false;
                } // if
                var s_out = s_selfread_wrap_2_alignment_div_divstart_cache_ +
                            s_html_2_wrap + lc_s_wrap_2_alignment_div_divend;
                return s_out;
            } catch (err) {
                raudrohi.tmg('aec1d235-07ec-4271-b23e-13202011abd7', err);
            } // catch
        } // prc_.repaint_if_graphical_and_not_hidden


        // Processes standard phone calls and returns true, if the processing
        // took place. The bitfield is expected to be an instance of
        // raudrohi.base.bitfield_htbased.
        this.standard_phonecall_received_t1 =
        function (a_pair, a_phonecall_instance) {
            // The a_pair is part of the the function parameters only
            // for efficiency. There's no point of running the same string
            // bisection routines more than once every time a phone call
            // is made to a widget.
            try {
                var bitfield = prc_.bitfield_;
                var brancher = a_pair.a;
                var default_phonecall_received = true;
                var ht;
                var a_pr2;
                switch (brancher) {
                    case 'stub':
                        // Useful for caching from the server.
                        break;
                    case 'hide':
                        instance_public_.hide(true);
                        break;
                    case 'unhide':
                        instance_public_.unhide();
                        break;
                    // In the case of the
                    // brancher=='startup_with_indication_request' and
                    // brancher=='shut_dow_with_indication_request'
                    // the a_phonecall_instance.data2 is expected to be a
                    // hashtable with the following content:
                    //         ht['destination_phone_number'],
                    //         ht['data_for_the_destination'],
                    //         ht['binary_data_for_the_destination'],
                    case 'startup_with_indication_request':
                        ht = a_phonecall_instance.data2;
                        prc_.startup_shutdown_handler_.startbutton_pushed_with_indication_request(ht.get('destination_phone_number'),
                            ht.get('data_for_the_destination'),
                            ht.get('binary_data_for_the_destination'));
                        break;
                    case 'shutdown_with_indication_request':
                        ht = a_phonecall_instance.data2;
                        prc_.startup_shutdown_handler_.stopbutton_pushed_with_indication_request(ht.get('destination_phone_number'),
                            ht.get('data_for_the_destination'),
                            ht.get('binary_data_for_the_destination'));
                        break;
                    case 'startup':
                        prc_.startup_shutdown_handler_.startbutton_pushed();
                        break;
                    case 'shutdown':
                        prc_.startup_shutdown_handler_.stopbutton_pushed();
                        break;
                    case 'change_state_2':
                        a_pr2 = raudrohi.base.bisect(a_pair.b, '|||');
                        instance_public_.state_switcher_.change_state_2(a_pr2.a);
                        break;
                    default:
                        default_phonecall_received = false;
                        if (bitfield.is_set('phc_display_message_t1')) {
                            if (brancher == 'display_message') {
                                a_pr2 = raudrohi.base.bisect(a_pair.b, '|||');
                                instance_public_.display_message(a_pr2.a);
                                default_phonecall_received = true;
                            } // if
                        } // if
                        if (bitfield.is_set('phc_display_message_b_t1')) {
                            if (brancher == 'display_message_b') {
                                instance_public_.display_message(
                                    a_phonecall_instance.data2);
                                default_phonecall_received = true;
                            } // if
                        } // if
                        if (bitfield.is_set('phc_resurrect_t1')) {
                            if (brancher == 'resurrect') {
                                prc_.startup_shutdown_handler_.startbutton_pushed();
                                instance_public_.unhide();
                                default_phonecall_received = true;
                            } // if
                        } // if
                } // switch
                return default_phonecall_received;
            } catch (err) {
                raudrohi.tmg('8a68c65e-4585-4f57-920e-13202011abd7', err);
            } // catch
        } // standard_phonecall_received_t1

        this.receive_phonecall_t1 = function (a_phonecall_instance) {
            try {
                var data = raudrohi.adapter.trim(a_phonecall_instance.data);
                var a_pair = raudrohi.base.bisect(data, '|||');
                raudrohi.base.assert_isNotnull(a_pair, 'a_pair',
                    '1eb2fb61-6352-452e-9f0e-13202011abd7');
                if (pileofmethods_t1_.standard_phonecall_received_t1(a_pair,
                    a_phonecall_instance)) {
                    return;
                } // if
                if (prc_.threadjump_receive(a_phonecall_instance.data2)) {
                    return;
                } // if
                raudrohi.tmg('59db1651-4947-424d-92fd-13202011abd7',
                    "A phone call did not get processed. \n" +
                    'a_phonecall_instance.data==' + a_phonecall_instance.data);
            } catch (err) {
                raudrohi.widgets.g1.sys.phonecall_receiver_tmg(
                    '11a11c9d-a67e-4b74-97fd-13202011abd7',
                    err + " prc_.html_id_==" + prc_.html_id_,
                    a_phonecall_instance);
            } // catch
        } // receive_phonecall_t1

        instance_public_.phone.receive_phonecall =
        pileofmethods_t1_.receive_phonecall_t1;

    } catch (err) {
        raudrohi.tmg('4ff45b75-bda5-4318-a6fd-13202011abd7', err);
    } // catch
} // raudrohi.widgets.g1.pileofmethods_t1

//=========================================================================
