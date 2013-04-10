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
s_linebreak="\n"
s_doublelinebreak="\n\n"
msgcs=Kibuvits_msgc_stack.new
ob_wg=Raudrohi_cg_widget.new("calendar_t1")
s_evh_code=""
rcgwf1=Raudrohi_cg_widget_convenience_funcs1.new

def create_partialmenu_t1(s_name,ar_menuitems,
   ob_parent_widget,msgcs,s_s_label1_for_default_menu_item=nil)
   s_html_if_menucontent_not_set="'"+s_name+"'"
   s_mode="'partialmenu_t1_mode_1'"
   s_container_style="'partialmenu_t1_containertype_vertical_1'"
   b_visible_at_creation=false

   i_menu_max_width=5
   i_textarea_width=2
   i_textarea_height=1
   ob_out=Raudrohi_cg_widget_partialmenu_t1.new(s_name,
   i_menu_max_width.to_s,i_textarea_width.to_s,i_textarea_height.to_s,
   s_html_if_menucontent_not_set,s_mode,s_container_style,
   b_visible_at_creation,msgcs)
   ob_parent_widget.config_insert_subwidget(ob_out)
   ob_out.config_set_menu_content(ar_menuitems,
   s_s_label1_for_default_menu_item)
   throw msgcs.to_s if msgcs.b_failure
   return ob_out
end # create_partialmenu_t1


ar_0_to_59=Array.new
ar_0_to_59<<["'0'","'0'"]
ar_0_to_59<<["'1'","'1'"]
ar_0_to_59<<["'2'","'2'"]
ar_0_to_59<<["'3'","'3'"]
ar_0_to_59<<["'4'","'4'"]
ar_0_to_59<<["'5'","'5'"]
ar_0_to_59<<["'6'","'6'"]
ar_0_to_59<<["'7'","'7'"]
ar_0_to_59<<["'8'","'8'"]
ar_0_to_59<<["'9'","'9'"]
ar_0_to_59<<["'10'","'10'"]
ar_0_to_59<<["'11'","'11'"]
ar_0_to_59<<["'12'","'12'"]
ar_0_to_59<<["'13'","'13'"]
ar_0_to_59<<["'14'","'14'"]
ar_0_to_59<<["'15'","'15'"]
ar_0_to_59<<["'16'","'16'"]
ar_0_to_59<<["'17'","'17'"]
ar_0_to_59<<["'18'","'18'"]
ar_0_to_59<<["'19'","'19'"]
ar_0_to_59<<["'20'","'20'"]
ar_0_to_59<<["'21'","'21'"]
ar_0_to_59<<["'22'","'22'"]
ar_0_to_59<<["'23'","'23'"]
ar_0_to_59<<["'24'","'24'"]
ar_0_to_59<<["'25'","'25'"]
ar_0_to_59<<["'26'","'26'"]
ar_0_to_59<<["'27'","'27'"]
ar_0_to_59<<["'28'","'28'"]
ar_0_to_59<<["'29'","'29'"]
ar_0_to_59<<["'30'","'30'"]
ar_0_to_59<<["'31'","'31'"]
ar_0_to_59<<["'32'","'32'"]
ar_0_to_59<<["'33'","'33'"]
ar_0_to_59<<["'34'","'34'"]
ar_0_to_59<<["'35'","'35'"]
ar_0_to_59<<["'36'","'36'"]
ar_0_to_59<<["'37'","'37'"]
ar_0_to_59<<["'38'","'38'"]
ar_0_to_59<<["'39'","'39'"]
ar_0_to_59<<["'40'","'40'"]
ar_0_to_59<<["'41'","'41'"]
ar_0_to_59<<["'42'","'42'"]
ar_0_to_59<<["'43'","'43'"]
ar_0_to_59<<["'44'","'44'"]
ar_0_to_59<<["'45'","'45'"]
ar_0_to_59<<["'46'","'46'"]
ar_0_to_59<<["'47'","'47'"]
ar_0_to_59<<["'48'","'48'"]
ar_0_to_59<<["'49'","'49'"]
ar_0_to_59<<["'50'","'50'"]
ar_0_to_59<<["'51'","'51'"]
ar_0_to_59<<["'52'","'52'"]
ar_0_to_59<<["'53'","'53'"]
ar_0_to_59<<["'54'","'54'"]
ar_0_to_59<<["'55'","'55'"]
ar_0_to_59<<["'56'","'56'"]
ar_0_to_59<<["'57'","'57'"]
ar_0_to_59<<["'58'","'58'"]
ar_0_to_59<<["'59'","'59'"]

ar_0_to_23=Array.new
ar_0_to_23<<["'0'","'0'"]
ar_0_to_23<<["'1'","'1'"]
ar_0_to_23<<["'2'","'2'"]
ar_0_to_23<<["'3'","'3'"]
ar_0_to_23<<["'4'","'4'"]
ar_0_to_23<<["'5'","'5'"]
ar_0_to_23<<["'6'","'6'"]
ar_0_to_23<<["'7'","'7'"]
ar_0_to_23<<["'8'","'8'"]
ar_0_to_23<<["'9'","'9'"]
ar_0_to_23<<["'10'","'10'"]
ar_0_to_23<<["'11'","'11'"]
ar_0_to_23<<["'12'","'12'"]
ar_0_to_23<<["'13'","'13'"]
ar_0_to_23<<["'14'","'14'"]
ar_0_to_23<<["'15'","'15'"]
ar_0_to_23<<["'16'","'16'"]
ar_0_to_23<<["'17'","'17'"]
ar_0_to_23<<["'18'","'18'"]
ar_0_to_23<<["'19'","'19'"]
ar_0_to_23<<["'20'","'20'"]
ar_0_to_23<<["'21'","'21'"]
ar_0_to_23<<["'22'","'22'"]
ar_0_to_23<<["'23'","'23'"]

ar_1_to_12=Array.new
ar_1_to_12<<["'1'","'1'"]
ar_1_to_12<<["'2'","'2'"]
ar_1_to_12<<["'3'","'3'"]
ar_1_to_12<<["'4'","'4'"]
ar_1_to_12<<["'5'","'5'"]
ar_1_to_12<<["'6'","'6'"]
ar_1_to_12<<["'7'","'7'"]
ar_1_to_12<<["'8'","'8'"]
ar_1_to_12<<["'9'","'9'"]
ar_1_to_12<<["'10'","'10'"]
ar_1_to_12<<["'11'","'11'"]
ar_1_to_12<<["'12'","'12'"]

ar_partialmenu_content_1_to_28=Array.new
ar_partialmenu_content_1_to_28<<["'1'","'1'"]
ar_partialmenu_content_1_to_28<<["'2'","'2'"]
ar_partialmenu_content_1_to_28<<["'3'","'3'"]
ar_partialmenu_content_1_to_28<<["'4'","'4'"]
ar_partialmenu_content_1_to_28<<["'5'","'5'"]
ar_partialmenu_content_1_to_28<<["'6'","'6'"]
ar_partialmenu_content_1_to_28<<["'7'","'7'"]
ar_partialmenu_content_1_to_28<<["'8'","'8'"]
ar_partialmenu_content_1_to_28<<["'9'","'9'"]
ar_partialmenu_content_1_to_28<<["'10'","'10'"]
ar_partialmenu_content_1_to_28<<["'11'","'11'"]
ar_partialmenu_content_1_to_28<<["'12'","'12'"]
ar_partialmenu_content_1_to_28<<["'13'","'13'"]
ar_partialmenu_content_1_to_28<<["'14'","'14'"]
ar_partialmenu_content_1_to_28<<["'15'","'15'"]
ar_partialmenu_content_1_to_28<<["'16'","'16'"]
ar_partialmenu_content_1_to_28<<["'17'","'17'"]
ar_partialmenu_content_1_to_28<<["'18'","'18'"]
ar_partialmenu_content_1_to_28<<["'19'","'19'"]
ar_partialmenu_content_1_to_28<<["'20'","'20'"]
ar_partialmenu_content_1_to_28<<["'21'","'21'"]
ar_partialmenu_content_1_to_28<<["'22'","'22'"]
ar_partialmenu_content_1_to_28<<["'23'","'23'"]
ar_partialmenu_content_1_to_28<<["'24'","'24'"]
ar_partialmenu_content_1_to_28<<["'25'","'25'"]
ar_partialmenu_content_1_to_28<<["'26'","'26'"]
ar_partialmenu_content_1_to_28<<["'27'","'27'"]
ar_partialmenu_content_1_to_28<<["'28'","'28'"]

ar_partialmenu_content_1_to_29=Array.new
ar_partialmenu_content_1_to_29<<["'1'","'1'"]
ar_partialmenu_content_1_to_29<<["'2'","'2'"]
ar_partialmenu_content_1_to_29<<["'3'","'3'"]
ar_partialmenu_content_1_to_29<<["'4'","'4'"]
ar_partialmenu_content_1_to_29<<["'5'","'5'"]
ar_partialmenu_content_1_to_29<<["'6'","'6'"]
ar_partialmenu_content_1_to_29<<["'7'","'7'"]
ar_partialmenu_content_1_to_29<<["'8'","'8'"]
ar_partialmenu_content_1_to_29<<["'9'","'9'"]
ar_partialmenu_content_1_to_29<<["'10'","'10'"]
ar_partialmenu_content_1_to_29<<["'11'","'11'"]
ar_partialmenu_content_1_to_29<<["'12'","'12'"]
ar_partialmenu_content_1_to_29<<["'13'","'13'"]
ar_partialmenu_content_1_to_29<<["'14'","'14'"]
ar_partialmenu_content_1_to_29<<["'15'","'15'"]
ar_partialmenu_content_1_to_29<<["'16'","'16'"]
ar_partialmenu_content_1_to_29<<["'17'","'17'"]
ar_partialmenu_content_1_to_29<<["'18'","'18'"]
ar_partialmenu_content_1_to_29<<["'19'","'19'"]
ar_partialmenu_content_1_to_29<<["'20'","'20'"]
ar_partialmenu_content_1_to_29<<["'21'","'21'"]
ar_partialmenu_content_1_to_29<<["'22'","'22'"]
ar_partialmenu_content_1_to_29<<["'23'","'23'"]
ar_partialmenu_content_1_to_29<<["'24'","'24'"]
ar_partialmenu_content_1_to_29<<["'25'","'25'"]
ar_partialmenu_content_1_to_29<<["'26'","'26'"]
ar_partialmenu_content_1_to_29<<["'27'","'27'"]
ar_partialmenu_content_1_to_29<<["'28'","'28'"]
ar_partialmenu_content_1_to_29<<["'29'","'29'"]


ar_partialmenu_content_1_to_30=Array.new
ar_partialmenu_content_1_to_30<<["'1'","'1'"]
ar_partialmenu_content_1_to_30<<["'2'","'2'"]
ar_partialmenu_content_1_to_30<<["'3'","'3'"]
ar_partialmenu_content_1_to_30<<["'4'","'4'"]
ar_partialmenu_content_1_to_30<<["'5'","'5'"]
ar_partialmenu_content_1_to_30<<["'6'","'6'"]
ar_partialmenu_content_1_to_30<<["'7'","'7'"]
ar_partialmenu_content_1_to_30<<["'8'","'8'"]
ar_partialmenu_content_1_to_30<<["'9'","'9'"]
ar_partialmenu_content_1_to_30<<["'10'","'10'"]
ar_partialmenu_content_1_to_30<<["'11'","'11'"]
ar_partialmenu_content_1_to_30<<["'12'","'12'"]
ar_partialmenu_content_1_to_30<<["'13'","'13'"]
ar_partialmenu_content_1_to_30<<["'14'","'14'"]
ar_partialmenu_content_1_to_30<<["'15'","'15'"]
ar_partialmenu_content_1_to_30<<["'16'","'16'"]
ar_partialmenu_content_1_to_30<<["'17'","'17'"]
ar_partialmenu_content_1_to_30<<["'18'","'18'"]
ar_partialmenu_content_1_to_30<<["'19'","'19'"]
ar_partialmenu_content_1_to_30<<["'20'","'20'"]
ar_partialmenu_content_1_to_30<<["'21'","'21'"]
ar_partialmenu_content_1_to_30<<["'22'","'22'"]
ar_partialmenu_content_1_to_30<<["'23'","'23'"]
ar_partialmenu_content_1_to_30<<["'24'","'24'"]
ar_partialmenu_content_1_to_30<<["'25'","'25'"]
ar_partialmenu_content_1_to_30<<["'26'","'26'"]
ar_partialmenu_content_1_to_30<<["'27'","'27'"]
ar_partialmenu_content_1_to_30<<["'28'","'28'"]
ar_partialmenu_content_1_to_30<<["'29'","'29'"]
ar_partialmenu_content_1_to_30<<["'30'","'30'"]

ar_partialmenu_content_1_to_31=Array.new
ar_partialmenu_content_1_to_31<<["'1'","'1'"]
ar_partialmenu_content_1_to_31<<["'2'","'2'"]
ar_partialmenu_content_1_to_31<<["'3'","'3'"]
ar_partialmenu_content_1_to_31<<["'4'","'4'"]
ar_partialmenu_content_1_to_31<<["'5'","'5'"]
ar_partialmenu_content_1_to_31<<["'6'","'6'"]
ar_partialmenu_content_1_to_31<<["'7'","'7'"]
ar_partialmenu_content_1_to_31<<["'8'","'8'"]
ar_partialmenu_content_1_to_31<<["'9'","'9'"]
ar_partialmenu_content_1_to_31<<["'10'","'10'"]
ar_partialmenu_content_1_to_31<<["'11'","'11'"]
ar_partialmenu_content_1_to_31<<["'12'","'12'"]
ar_partialmenu_content_1_to_31<<["'13'","'13'"]
ar_partialmenu_content_1_to_31<<["'14'","'14'"]
ar_partialmenu_content_1_to_31<<["'15'","'15'"]
ar_partialmenu_content_1_to_31<<["'16'","'16'"]
ar_partialmenu_content_1_to_31<<["'17'","'17'"]
ar_partialmenu_content_1_to_31<<["'18'","'18'"]
ar_partialmenu_content_1_to_31<<["'19'","'19'"]
ar_partialmenu_content_1_to_31<<["'20'","'20'"]
ar_partialmenu_content_1_to_31<<["'21'","'21'"]
ar_partialmenu_content_1_to_31<<["'22'","'22'"]
ar_partialmenu_content_1_to_31<<["'23'","'23'"]
ar_partialmenu_content_1_to_31<<["'24'","'24'"]
ar_partialmenu_content_1_to_31<<["'25'","'25'"]
ar_partialmenu_content_1_to_31<<["'26'","'26'"]
ar_partialmenu_content_1_to_31<<["'27'","'27'"]
ar_partialmenu_content_1_to_31<<["'28'","'28'"]
ar_partialmenu_content_1_to_31<<["'29'","'29'"]
ar_partialmenu_content_1_to_31<<["'30'","'30'"]
ar_partialmenu_content_1_to_31<<["'31'","'31'"]


b_visible_at_creation=false

#----year--start----

ob_wg_button_year_inc=Raudrohi_cg_widget_button_t1.new(
"year_inc","'>'",b_visible_at_creation,msgcs)
ob_wg_button_year_inc.config_evh_buttonpress(
"evh_increment_year();\n");
ob_wg.config_insert_subwidget(ob_wg_button_year_inc)

ob_wg_textarea_year=Raudrohi_cg_widget_textarea_t1.new(
"year",5,1,true,"west","text",msgcs)
ob_wg.config_insert_subwidget(ob_wg_textarea_year)

ob_wg_button_year_dec=Raudrohi_cg_widget_button_t1.new(
"year_dec","'<'",b_visible_at_creation,msgcs)
ob_wg_button_year_dec.config_evh_buttonpress(
"evh_decrement_year();\n");
ob_wg.config_insert_subwidget(ob_wg_button_year_dec)

#----year--end------

ob_partialmenu=create_partialmenu_t1(
"month",ar_1_to_12,ob_wg,msgcs)

#----day--start----
b_visible_at_creation=false

ob_wg_button_day_inc_10x=Raudrohi_cg_widget_button_t1.new(
"day_inc_10x","'>>'",b_visible_at_creation,msgcs)
ob_wg_button_day_inc_10x.config_evh_buttonpress(
"evh_increment_day_10x();\n");
ob_wg.config_insert_subwidget(ob_wg_button_day_inc_10x)

ob_wg_button_day_inc=Raudrohi_cg_widget_button_t1.new(
"day_inc","'>'",b_visible_at_creation,msgcs)
ob_wg_button_day_inc.config_evh_buttonpress(
"evh_increment_day();\n");
ob_wg.config_insert_subwidget(ob_wg_button_day_inc)

ob_wg_textarea_day=Raudrohi_cg_widget_textarea_t1.new(
"day",5,1,true,"west","text",msgcs)
ob_wg.config_insert_subwidget(ob_wg_textarea_day)

ob_wg_button_day_dec=Raudrohi_cg_widget_button_t1.new(
"day_dec","'<'",b_visible_at_creation,msgcs)
ob_wg_button_day_dec.config_evh_buttonpress(
"evh_decrement_day();\n");
ob_wg.config_insert_subwidget(ob_wg_button_day_dec)

ob_wg_button_day_dec_10x=Raudrohi_cg_widget_button_t1.new(
"day_dec_10x","'<<'",b_visible_at_creation,msgcs)
ob_wg_button_day_dec_10x.config_evh_buttonpress(
"evh_decrement_day_10x();\n");
ob_wg.config_insert_subwidget(ob_wg_button_day_dec_10x)

#----day--end------

ob_partialmenu=create_partialmenu_t1(
"hour",ar_0_to_23,ob_wg,msgcs)
ob_partialmenu=create_partialmenu_t1(
"minute",ar_0_to_59,ob_wg,msgcs)
ob_partialmenu=create_partialmenu_t1(
"second",ar_0_to_59,ob_wg,msgcs)

#--------------

puts Raudrohi_cg_debug_verification.new(
['String','s_display_format'],
['String','s_language']).to_s
puts ob_wg.my_intestine_all_common(
"raudrohi.widgets.g1.",false);

#puts Raudrohi_cg1.inst.generate_decr_var_ar_of_x_s_label1_s_label2(
#"ar_partialmenu_content_1_to_28_",ar_partialmenu_content_1_to_28,true)+
#s_doublelinebreak
#puts Raudrohi_cg1.inst.generate_decr_var_ar_of_x_s_label1_s_label2(
#"ar_partialmenu_content_1_to_29_",ar_partialmenu_content_1_to_29,true)+
#s_doublelinebreak
#puts Raudrohi_cg1.inst.generate_decr_var_ar_of_x_s_label1_s_label2(
#"ar_partialmenu_content_1_to_30_",ar_partialmenu_content_1_to_30,true)+
#s_doublelinebreak
#puts Raudrohi_cg1.inst.generate_decr_var_ar_of_x_s_label1_s_label2(
#"ar_partialmenu_content_1_to_31_",ar_partialmenu_content_1_to_31,true)+
#s_doublelinebreak


#==========================================================================
