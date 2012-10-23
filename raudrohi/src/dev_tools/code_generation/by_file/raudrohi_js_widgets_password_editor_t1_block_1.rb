#!/usr/bin/ruby
#==========================================================================
=begin

 Copyright (c) 2011, martin.vahi@softf1.com that has an
 Estonian personal identification code of 38108050020.
 All rights reserved.

 Redistribution and use in source and binary forms, with or
 without modification, are permitted provided that the following
 conditions are met:

 * Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer
   in the documentation and/or other materials provided with the
   distribution.
 * Neither the name of the Martin Vahi nor the names of its
   contributors may be used to endorse or promote products derived
   from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
 CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

=end
#==========================================================================
if !defined? RAUDROHI_CODE_GENERATION
   x=ENV['RAUDROHI_CODE_GENERATION']
   RAUDROHI_CODE_GENERATION=x if (x!=nil and x!="")
end # if
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
puts ob_wg.my_intestine_all_common(
"raudrohi.widgets.g1.",false);
#==========================================================================
