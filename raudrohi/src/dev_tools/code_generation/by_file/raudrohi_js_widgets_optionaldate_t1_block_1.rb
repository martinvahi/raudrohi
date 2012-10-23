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
