#!/usr/bin/ruby

#==========================================================================

require RAUDROHI_HOME+"/src/dev_tools/code_generation/raudrohi_cg0.rb"

#==========================================================================

class Raudrohi_client_aid_t1

   def initialize
   end # initialize

   #--------------------------------------------------------------------------

   def build_html_t1(s_fp_generated_file,s_fp_template,s_URL_raudrohi_home)
      RAUDROHI_BUILD_SETTINGS.build_html_t1(
      s_fp_generated_file,s_fp_template,s_URL_raudrohi_home)
   end # build_html_t1

   def Raudrohi_client_aid_t1.build_html_t1(
      s_fp_generated_file,s_fp_template,s_URL_raudrohi_home)
      Raudrohi_client_aid_t1.instance.build_html_t1(
      s_fp_generated_file,s_fp_template,s_URL_raudrohi_home)
   end # Raudrohi_client_aid_t1.build_html_t1

   #--------------------------------------------------------------------------

   # The Hello World Rakefile demonstrates the use of this method.
   def build_html_t2(s_fp_Rakefile_FILE_value,s_URL_raudrohi_home)
      RAUDROHI_BUILD_SETTINGS.build_html_t2(
      s_fp_Rakefile_FILE_value,s_URL_raudrohi_home)
   end # build_html_t2

   def Raudrohi_client_aid_t1.build_html_t2(
      s_fp_Rakefile_FILE_value,s_URL_raudrohi_home)
      Raudrohi_client_aid_t1.instance.build_html_t2(
      s_fp_Rakefile_FILE_value,s_URL_raudrohi_home)
   end # Raudrohi_client_aid_t1.build_html_t2

   #--------------------------------------------------------------------------

   include Singleton

end # class Raudrohi_client_aid_t1

#--------------------------------------------------------------------------

#==========================================================================
