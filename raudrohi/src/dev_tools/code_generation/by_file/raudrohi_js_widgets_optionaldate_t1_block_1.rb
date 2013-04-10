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
   require "raudrohi_cg1.rb"
   require "raudrohi_cg_widget.rb"
   require "raudrohi_cg_widget_convenience_funcs1.rb"
end # if
#==========================================================================
s_linebreak="\n"
msgcs=Kibuvits_msgc_stack.new
ob_wg=Raudrohi_cg_widget.new("optionaldate_t1")
s_evh_code=""
rcgwf1=Raudrohi_cg_widget_convenience_funcs1.new

b_visible_at_creation=false
s_format="s_display_format_"
s_language="s_language_"
ob_wg_datewg=Raudrohi_cg_widget_calendar_t1.new(
"datewg",s_format,s_language,b_visible_at_creation,msgcs);
ob_wg.config_insert_subwidget(ob_wg_datewg)


s_mode="'partialmenu_t1_mode_1'"
s_container_style="'partialmenu_t1_containertype_vertical_1'"
b_visible_at_creation=true
ob_ptm=Raudrohi_cg_widget_partialmenu_t1.new("date_set",
"i_menu_max_width_","5","1",
"'There is a bug, menu content not set.'",
s_mode,s_container_style,
b_visible_at_creation,msgcs)

ar_menuitems=Array.new
ar_menuitems<<["'f'","s_menuitem_text_if_date_is_not_set_"]
ar_menuitems<<["'t'","s_menuitem_text_if_date_is_set_"]
ob_ptm.config_set_menu_content(ar_menuitems,
s_s_label1_for_default_menu_item="'f'")
ob_wg.config_insert_subwidget(ob_ptm)


#--------------
puts Raudrohi_cg_debug_verification.new(
['String','s_mode'],
['String','s_display_format'],
['String','s_language']).to_s
puts ob_wg.my_intestine_all_common(
"raudrohi.widgets.g1.",false);
#==========================================================================
