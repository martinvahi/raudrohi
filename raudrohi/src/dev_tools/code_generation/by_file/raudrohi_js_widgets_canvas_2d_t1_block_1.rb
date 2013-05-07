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
msgcs=Kibuvits_msgc_stack.new
ob_wg=Raudrohi_cg_widget.new("canvas_2d_t1")

b_visible_at_creation=false

#--------------

b_s_phone_number_prefix_constitutes_the_whole_phone_number=false
b_parent_instance_is_part_of_the_constructor_parameters=true
puts(
ob_wg.my_intestine_all_common_t2("raudrohi.widgets.g1.",
b_s_phone_number_prefix_constitutes_the_whole_phone_number,
b_parent_instance_is_part_of_the_constructor_parameters));

#==========================================================================
