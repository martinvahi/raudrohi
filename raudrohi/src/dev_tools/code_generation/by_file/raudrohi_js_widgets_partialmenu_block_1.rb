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
puts ob_wg.my_intestine_all_common(
"raudrohi.widgets.g1.",false);


#==========================================================================
