#!/usr/bin/ruby
#==========================================================================
=begin
 Copyright 2010, martin.vahi@softf1.com that has an
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
   require KIBUVITS_HOME+"/experimental/kibuvits_str.rb"
   require KIBUVITS_HOME+"/experimental/kibuvits_gstatement.rb"
   require KIBUVITS_HOME+"/experimental/kibuvits_cg.rb"
else
   require "kibuvits_msgc.rb"
   require "kibuvits_str.rb"
   require "kibuvits_gstatement.rb"
   require "kibuvits_cg.rb"
end # if

#require "singleton"
#==========================================================================

class Raudrohi_widget2db_map1
   #attr_reader

   def init_templates
      s_warning=""+
      "	   // WARNING: This function resides in an autogeneration region.\n"
      @s_tpl_js_calculate_interpretation_textfield_is_empty_after_trimming=""
      @s_tpl_js_calculate_interpretation_textfield_is_empty=""
      @s_tpl_js_calculate_interpretation_textfield_contains_float_t1=""
      @s_tpl_php_table_exists=""
      @s_tpl_php_create_table_funcframe=""
      @s_tpl_php_create_table_fieldentry=""
      @s_tpl_php_insert2table_funcframe=""
      @s_tpl_php_insert2table_fieldentry=""
   end # init_templates

   def thr_verify_interpretation_names ar_interpretation_names
   end # thr_verify_interpretation_names

   def initialize s_widget_name, ar_or_s_interpretation_names
      bn=binding()
      kibuvits_typecheck bn, String, s_widget_name
      kibuvits_typecheck bn, [Array,String], ar_or_s_interpretation_names
      @s_widget_name=s_widget_name
      ar_interpretation_names=""
      ar_interpretation_names.uniq!
      thr_verify_interpretation_names ar_interpretation_names
      @ht_interpretation_names=Hash.new
      @ht_interpretation_names=ar_interpretation_names
      init_templates
   end # initialize

   private

   def to_s_calculate_interpretation_textfield_is_empty_after_trimming
   end # to_s_calculate_interpretation_textfield_is_empty_after_trimming

   def to_s_calculate_interpretation_textfield_is_empty
   end # to_s_calculate_interpretation_textfield_is_empty

   def to_s_calculate_interpretation_textfield_contains_float_t1
   end # to_s_calculate_interpretation_textfield_contains_float_t1

   def to_s_table_exists
   end # to_s_table_exists

   def to_s_create_table_funcframe
   end # to_s_create_table_funcframe

   def to_s_create_table_fieldentry
   end # to_s_create_table_fieldentry

   def to_s_insert2table_funcframe
   end # to_s_insert2table_funcframe

   def to_s_insert2table_fieldentry
   end # to_s_insert2table_fieldentry


   public
   def to_s_js_interpretations
   end # to_s_js_interpretations

   def to_s_php
   end # to_s_php

   def Raudrohi_widget2db_map1.inst
      return Raudrohi_widget2db_map1.instance
   end # Raudrohi_widget2db_map1.inst
   include Singleton
end # class Raudrohi_widget2db_map1

#--------------------------------------------------------------------------

#==========================================================================
