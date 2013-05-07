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
require(RAUDROHI_CODE_GENERATION+"/raudrohi_cg_widget_convenience_funcs1.rb")
#==========================================================================
# The next if-clause is only for IDE autocompletion support.
if false
   require "kibuvits_all.rb"
   require "raudrohi_cg_widget.rb"
   require "raudrohi_cg1.rb"
end # if
#==========================================================================
s_lc_linebreak="\n"
s_lc_doublelinebreak="\n\n"
msgcs=Kibuvits_msgc_stack.new
ob_wg=Raudrohi_cg_widget.new("password_editor_t1")
s_evh_code=""


#--------------
s_name="retain_or_modify"
i_width_max=40
i_width=i_width_max
i_height=1
s_html_if_menucontent_not_set="\"There is a flaw. "+
" '8d807425-b69b-4169-91da-f0c27041abd7'\""
s_mode="'partialmenu_t1_mode_1'"
s_container_style="'partialmenu_t1_containertype_vertical_1'"
b_visible_at_creation=true
ob_wg_partialmenu_t1_retain_or_modify=Raudrohi_cg_widget_partialmenu_t1.new(
s_name,i_width_max,i_width,i_height,s_html_if_menucontent_not_set,
s_mode,s_container_style,b_visible_at_creation,msgcs)

ar=Array.new
#[ <s_label1:computer-readable>, <s_label2:human readable>]
ar<<["'retain'","'Retain'"]
ar<<["'modify'","'Modify'"]
ob_wg_partialmenu_t1_retain_or_modify.config_set_menu_content(ar)

ob_wg.config_insert_subwidget(ob_wg_partialmenu_t1_retain_or_modify)

#--------------
s_name="line_1"
s_width="i_password_field_width_"
i_height=1
b_visible_at_creation=false
s_alignment="west"
s_type="password"
ob_wg_textarea_line_1=Raudrohi_cg_widget_textarea_t1.new(
s_name,s_width,i_height,b_visible_at_creation,s_alignment,s_type,msgcs);
ob_wg.config_insert_subwidget(ob_wg_textarea_line_1)
s_name="line_2"
ob_wg_textarea_line_2=Raudrohi_cg_widget_textarea_t1.new(
s_name,s_width,i_height,b_visible_at_creation,s_alignment,s_type,msgcs);
ob_wg.config_insert_subwidget(ob_wg_textarea_line_2)

#--------------
s_name="line_1_legend"
b_visible_at_creation=false
ob_wg_html_line_1_legend=Raudrohi_cg_widget_html_t2.new(
s_name,b_visible_at_creation,msgcs)
ob_wg.config_insert_subwidget(ob_wg_html_line_1_legend)
s_name="line_2_legend"
ob_wg_html_line_2_legend=Raudrohi_cg_widget_html_t2.new(
s_name,b_visible_at_creation,msgcs)
ob_wg.config_insert_subwidget(ob_wg_html_line_2_legend)
s_name="disqualification_message"
ob_wg_html_disqualification_message=Raudrohi_cg_widget_html_t2.new(
s_name,b_visible_at_creation,msgcs)
ob_wg.config_insert_subwidget(ob_wg_html_disqualification_message)

#--------------
b_s_phone_number_prefix_constitutes_the_whole_phone_number=false
b_parent_instance_is_part_of_the_constructor_parameters=true
puts(ob_wg.my_intestine_all_common(
"raudrohi.widgets.g1.",
b_s_phone_number_prefix_constitutes_the_whole_phone_number,
b_parent_instance_is_part_of_the_constructor_parameters));
#==========================================================================
