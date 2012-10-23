#!/usr/bin/ruby
#==========================================================================
=begin

 Copyright 2011, martin.vahi@softf1.com that has an
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
if !defined? KIBUVITS_HOME
   x=ENV['KIBUVITS_HOME']
   KIBUVITS_HOME=x if (x!=nil and x!="")
end # if

require "rubygems"
require "monitor"
if defined? KIBUVITS_HOME
   require KIBUVITS_HOME+"/experimental/kibuvits_msgc.rb"
   require KIBUVITS_HOME+"/experimental/kibuvits_gstatement.rb"
   require KIBUVITS_HOME+"/experimental/kibuvits_cg.rb"
else
   require "kibuvits_msgc.rb"
   require "kibuvits_gstatement.rb"
   require "kibuvits_cg.rb"
end # if

if !defined? RAUDROHI_CODE_GENERATION
   x=ENV['RAUDROHI_CODE_GENERATION']
   RAUDROHI_CODE_GENERATION=x if (x!=nil and x!="")
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

