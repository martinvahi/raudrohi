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


if defined? KIBUVITS_HOME
   require KIBUVITS_HOME+"/src/include/kibuvits_gstatement.rb"
   require KIBUVITS_HOME+"/src/include/kibuvits_cg.rb"
else
   require "kibuvits_gstatement.rb"
   require "kibuvits_cg.rb"
end # if

require(RAUDROHI_CODE_GENERATION+"/raudrohi_cg1.rb")
require(RAUDROHI_CODE_GENERATION+"/raudrohi_cg_widget.rb")

#require "singleton"
#==========================================================================

class Raudrohi_cg_widget_convenience_funcs1
   @@lc_space=" "
   @@lc_linebreak="\n"


def create_partialmenu_t1_t2(s_name,ar_menuitems,
   ob_parent_widget,msgcs,s_s_label1_for_default_menu_item=nil,
   i_menu_max_width=5,
   i_textarea_width=2,
   i_textarea_height=1,
   s_mode="'partialmenu_t1_mode_1'",
   s_container_style="'partialmenu_t1_containertype_vertical_1'",
   b_visible_at_creation=false)

   s_html_if_menucontent_not_set="'"+s_name+"'"

   ob_out=Raudrohi_cg_widget_partialmenu_t1.new(s_name,
   i_menu_max_width.to_s,i_textarea_width.to_s,i_textarea_height.to_s,
   s_html_if_menucontent_not_set,s_mode,s_container_style,
   b_visible_at_creation,msgcs)
   ob_parent_widget.config_insert_subwidget(ob_out)
   ob_out.config_set_menu_content(ar_menuitems,
   s_s_label1_for_default_menu_item)
   throw msgcs.to_s if msgcs.b_failure
   return ob_out
end # create_partialmenu_t1_t2


end # class Raudrohi_cg_widget_convenience_funcs1

#--------------------------------------------------------------------------

#==========================================================================

