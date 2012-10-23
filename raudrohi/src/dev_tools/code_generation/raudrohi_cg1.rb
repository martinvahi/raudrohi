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
   require KIBUVITS_HOME+"/experimental/kibuvits_gstatement.rb"
   require KIBUVITS_HOME+"/experimental/kibuvits_cg.rb"
else
   require "kibuvits_msgc.rb"
   require "kibuvits_gstatement.rb"
   require "kibuvits_cg.rb"
end # if

#require "singleton"
#==========================================================================

class Raudrohi_cg_debug_verification
   #attr_reader
   @@lc_s_String='String'
   @@lc_s_Array='Array'
   @@lc_s_Number='Number'
   @@lc_s_Boolean='Boolean'
   @@lc_s_Object='Object'
   @@lc_s_Undefined='Undefined'
   @@lc_s_Value='Value'
   @@lc_s_Function='Function'
   @@lc_s_Notnull='Notnull'
   @@lc_s_KeyeventKeyCode='KeyeventKeyCode'
   @@lc_s_WithinDomain='WithinDomain'
   @@lc_space=" "
   @@lc_linebreak="\n"

   @@ht_tpl_typechecks=Hash.new
   @@b_global_static_vars_inited=false

   private

   def init_global_static_vars_if_not_inited
      return if @@b_global_static_vars_inited
      @@s_warning=Kibuvits_cg.get_standard_warning_msg(
      "//", self.class.to_s)
      @@s_tpl_ifJSdebug=""+
      "    if(raudrohi.settings.debug_JavaScript===true){\n"+@@s_warning+
      "            [CODEGENERATION_BLANK_0]\n"+
      "    } // if"
      s_assertion_call_template_end=""+
      "[CODEGENERATION_BLANK_0],"+
      "'[CODEGENERATION_BLANK_0]',\n"+
      "                '[CODEGENERATION_BLANK_GUID_0]');\n"
      @@ht_tpl_typechecks[@@lc_s_String]="raudrohi.base.assert_isString("+
      s_assertion_call_template_end
      @@ht_tpl_typechecks[@@lc_s_Array]="raudrohi.base.assert_isArray("+
      s_assertion_call_template_end
      @@ht_tpl_typechecks[@@lc_s_Number]="raudrohi.base.assert_isNumber("+
      s_assertion_call_template_end
      @@ht_tpl_typechecks[@@lc_s_Boolean]="raudrohi.base.assert_isBoolean("+
      s_assertion_call_template_end
      @@ht_tpl_typechecks[@@lc_s_Object]="raudrohi.base.assert_isObject("+
      s_assertion_call_template_end
      @@ht_tpl_typechecks[@@lc_s_Undefined]="raudrohi.base.assert_isUndefined("+
      s_assertion_call_template_end
      @@ht_tpl_typechecks[@@lc_s_Value]="raudrohi.base.assert_isValue("+
      s_assertion_call_template_end
      @@ht_tpl_typechecks[@@lc_s_Function]="raudrohi.base.assert_isFunction("+
      s_assertion_call_template_end
      @@ht_tpl_typechecks[@@lc_s_Notnull]="raudrohi.base.assert_isNotnull("+
      s_assertion_call_template_end
      @@ht_tpl_typechecks[@@lc_s_KeyeventKeyCode]="raudrohi.base.assert_isKeyeventKeyCode("+
      s_assertion_call_template_end
      #@@ht_tpl_typechecks[@@lc_s_WithinDomain]="raudrohi.base.assert_isWithinDomain("
      # The args of the raudrohi.base.assert_isWithinDomain
      # differ from the rest of the assertions.

      @@ht_type_candidates=Hash.new
      @@ht_type_candidates[@@lc_s_String]=@@lc_s_String
      @@ht_type_candidates[@@lc_s_Array]=@@lc_s_Array
      @@ht_type_candidates[@@lc_s_Number]=@@lc_s_Number
      @@ht_type_candidates[@@lc_s_Boolean]=@@lc_s_Boolean
      @@ht_type_candidates[@@lc_s_Object]=@@lc_s_Object
      @@ht_type_candidates[@@lc_s_Undefined]=@@lc_s_Undefined
      @@ht_type_candidates[@@lc_s_Value]=@@lc_s_Value
      @@ht_type_candidates[@@lc_s_Function]=@@lc_s_Function
      @@ht_type_candidates[@@lc_s_Notnull]=@@lc_s_Notnull
      @@ht_type_candidates[@@lc_s_KeyeventKeyCode]=@@lc_s_KeyeventKeyCode

      @@b_global_static_vars_inited=true
   end # init_global_static_vars_if_not_inited

   def verify_typechec_spec_arrays typechec_spec_arrays
      bn=binding()
      kibuvits_typecheck bn, Array, typechec_spec_arrays
      s_type_name=nil
      typechec_spec_arrays.each do |ar_candidate|
         bn=binding()
         kibuvits_typecheck bn, Array, ar_candidate
         if ar_candidate.length!=2
            throw "ar_candidate.length=="+ar_candidate.length.to_s
         end # if
         s_type_name=ar_candidate[0]
         s_var_name=ar_candidate[1]
         kibuvits_typecheck bn, String, s_type_name
         kibuvits_typecheck bn, String, s_var_name
         if !@@ht_type_candidates.has_key? s_type_name
            throw "Type "+s_type_name+" is not supported "+
            "by Raudrohi typecheck assertion functions."
         end # if
      end # loop
   end # verify_typechec_spec_arrays

   def generate_assertion_code(ar_typespec)
      s_type_name=ar_typespec[0]
      s_var_name=ar_typespec[1]
      s_out=Kibuvits_cg.fill_form(s_var_name,
      @@ht_tpl_typechecks[s_type_name]);
      return s_out
   end # generate_assertion_code

   public
   # Sample input: [String,s_haystack],[
   def initialize(*typechec_spec_arrays)
      init_global_static_vars_if_not_inited
      verify_typechec_spec_arrays(typechec_spec_arrays)
      @s_list_of_assertions=""
      typechec_spec_arrays.each do |ar_typespec|
         @s_list_of_assertions=@s_list_of_assertions+
         generate_assertion_code(ar_typespec)
      end # loop
   end # initialize

   def insert_assertion(s_assertion)
      bn=binding()
      kibuvits_typecheck bn, String, s_assertion
      return if s_assertion.length==0
      s=s_assertion
      s=s+@@lc_linebreak if s[(-1)..(-1)]!=@@lc_linebreak
      @s_list_of_assertions=@s_list_of_assertions+s
   end # insert_assertion

   def get_assertions_bloc
      return ""+@s_list_of_assertions
   end # get_assertions_bloc

   def to_s
      s_out=Kibuvits_cg.fill_form(@s_list_of_assertions,
      @@s_tpl_ifJSdebug)
      return s_out
   end # to_s

end # class Raudrohi_cg_debug_verification

#--------------------------------------------------------------------------
class Raudrohi_cg1

   def initialize
   end # initialize

   # The ar_of_ar is expected to contain arrays that
   # have exactly 2 elements.
   # ar_of_ar[x][0]==<s_label1>,
   # ar_of_ar[x][1]==<s_label2>.
   # The values of the 2 elements are expected to be of type String.
   def generate_decr_var_ar_of_x_s_label1_s_label2(s_ar_varname,ar_of_ar,
      b_declare_var=true)
      bn=binding()
      kibuvits_typecheck bn, String, s_ar_varname
      kibuvits_typecheck bn, Array, ar_of_ar
      s_label1=nil
      s_label2=nil
      s_s_label1='s_label1'
      s_s_label2='s_label2'
      s_tmpvarname="x_autogenerated_tmpvar_"+
      Kibuvits_GUID_generator.generate_GUID.gsub("-","_")
      s_tmpvas1=s_tmpvarname+".s_label1="
      s_tmpvas2=s_tmpvarname+".s_label2="
      s_tmp_crea1=s_tmpvarname+"={};\n"
      s_tmp_push=s_ar_varname+".push("+s_tmpvarname+");\n"
      s_tmp_semiclb=";\n"
      s_tmp_doublequote="\""
      s_out=""
      s_out=s_out+"var "+s_ar_varname+"=new Array();\n" if b_declare_var
      s_out=s_out+"var "+s_tmpvarname+";\n"
      bn1=nil
      ar_of_ar.each do |ar_x|
         bn1=binding()
         kibuvits_typecheck bn1, Array, ar_x
         s_label1=ar_x[0]
         s_label2=ar_x[1]
         kibuvits_typecheck bn1, String, s_label1
         kibuvits_typecheck bn1, String, s_label2
         s_out=s_out+s_tmp_crea1
         s_out=s_out+s_tmpvas1+s_label1+s_tmp_semiclb
         s_out=s_out+s_tmpvas2+s_label2+s_tmp_semiclb
         s_out=s_out+s_tmp_push
      end # loop
      return s_out
   end # generate_decr_var_ar_of_x_s_label1_s_label2

   def Raudrohi_cg1.inst
      return Raudrohi_cg1.instance
   end # Raudrohi_cg1.inst
   include Singleton
end # class Raudrohi_cg1

#--------------------------------------------------------------------------

#==========================================================================
