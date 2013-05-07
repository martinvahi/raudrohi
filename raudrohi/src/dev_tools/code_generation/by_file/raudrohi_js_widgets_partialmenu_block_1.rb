#!/usr/bin/ruby
#==========================================================================

x=ENV["RAUDROHI_HOME"]
if (x==nil)||(x=="")
   puts "Mandatory environment variable, RAUDROHI_HOME, "+
   "has not been set. "
   exit
end # if
RAUDROHI_HOME=x if !defined? RAUDROHI_HOME
require RAUDROHI_HOME+"/src/dev_tools/code_generation/raudrohi_cg0.rb"

require(RAUDROHI_CODE_GENERATION+"/raudrohi_cg1.rb")
require(RAUDROHI_CODE_GENERATION+"/raudrohi_cg_widget.rb")
#==========================================================================
# The next if-clause is only for IDE autocompletion support.
if false
   require "kibuvits_all.rb"
   require "raudrohi_cg_widget.rb"
   require "raudrohi_cg1.rb"
end # if
#==========================================================================


msgcs=Kibuvits_msgc_stack.new

ob_wg=Raudrohi_cg_widget.new("partialmenu_t1")

ob_txa=Raudrohi_cg_widget_textarea_t1.new(
"custom_value","i_textarea_width_","i_textarea_height_",
b_visible_at_creation=false, s_alignment="west",s_type="text",msgcs)
ob_wg.config_insert_subwidget(ob_txa)

s_evh_code=""
#ob_txa.config_evh_keypress_or_event(s_evh_code,"13");
#ob_txa.config_evh_keypress_or_event(s_evh_code,"focus");
#ob_txa.config_evh_keypress_or_event(s_evh_code,"blur");

ob_menu=Raudrohi_cg_widget_g1_menu_t1.new("standard_values",
"s_html_if_menucontent_not_set_",
b_visible_at_creation=true, s_alignment="west", msgcs=Kibuvits_msgc_stack.new)
s_evh_code="evh_menu_t1_standard_values_selected_impl();\n"
ob_menu.config_evh_menuselection(s_evh_code);
ob_wg.config_insert_subwidget(ob_menu)

#--------------

puts Raudrohi_cg_debug_verification.new(
['Number','i_menu_max_width'],
['Number','i_textarea_width'],
['Number','i_textarea_height'],
['String','s_html_if_menucontent_not_set'],
['String','s_container_style']).to_s

b_s_phone_number_prefix_constitutes_the_whole_phone_number=false
b_parent_instance_is_part_of_the_constructor_parameters=true
puts(ob_wg.my_intestine_all_common(
"raudrohi.widgets.g1.",
b_s_phone_number_prefix_constitutes_the_whole_phone_number,
b_parent_instance_is_part_of_the_constructor_parameters));

#==========================================================================
