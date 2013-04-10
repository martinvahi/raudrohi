#!ruby
#=========================================================================
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
#=========================================================================
if !defined? KIBUVITS_HOME
   x=ENV['KIBUVITS_HOME']
   KIBUVITS_HOME=x if (x!=nil and x!="")
end # if

require "rubygems"
require "monitor"
if defined? KIBUVITS_HOME
   require KIBUVITS_HOME+"/kibuvits_io.rb"
   require KIBUVITS_HOME+"/experimental/kibuvits_shell.rb"
else
   require "kibuvits_io.rb"
   require "kibuvits_shell.rb"
end # if
require 'pathname'
#==========================================================================

if defined? RAUDROHI_HOME
   RAUDROHI_HOME=ENV['RAUDROHI_HOME']
else
   #src/devel/dev_tools/bonnet
   RAUDROHI_HOME=APPLICATION_STARTERRUBYFILE_PWD+"/../../../../" # just a guess
end # if

class Raudrohi_selftests_all_in_one_assembler

   def initialize
   end # initialize
   private
   def get_list_of_files
      # The raudrohi_selftests_main_v19.js has to be the very last
      # file in the list of the selftests files, because it depends on
      # global definitions of all other selftests files.
      ar=Dir.glob(RAUDROHI_HOME+"/src/devel/dev_tools/selftests/tests/*.js")+
      Dir.glob(RAUDROHI_HOME+"/src/devel/dev_tools/selftests/raudrohi_selftests_main_*.js")+
      []
      if ar.length==0
         throw "\n\n"+
         "The tests files could not be found. RAUDROHI_HOME=="+RAUDROHI_HOME.to_s+
         "\nGUID=='2f9cbc22-4459-4866-a3f6-607351d19bd7'"+
         "\n\n"
      end # if
      return ar
   end # get_list_of_files

   public

   # if i_version==nil, then the version is just incremented
   def assemble
      ar_flns=get_list_of_files()
      s_all_in_one=""
      s_file=nil
      ar_flns.size.times do |i|
         s_file=file2str(ar_flns[i])
         s_all_in_one=s_all_in_one+"\n"+s_file
      end # loop
      return s_all_in_one
   end  # assemble

end # class Raudrohi_selftests_all_in_one_assembler

#--------------------------------------------------------------------------
s_errmsg_1=""+
"If any console arguments are given, then there must be at most one\n"+
"argument and it must be either a full path to the output file or \"-\".\n"

ob_assembler=Raudrohi_selftests_all_in_one_assembler.new
if 0<ARGV.length
   if 1<ARGV.length
      puts "\n\n"+s_errmsg_1+"\n\n"
      throw s_errmsg_1
   end # if
   s_output_file_path_candidate=""+ARGV[0].to_s.gsub(/[\n\s\r"]/,"")
   if s_output_file_path_candidate=="-"
      s_all_in_one=ob_assembler.assemble()
      puts s_all_in_one
   else
      s_0=s_output_file_path_candidate[0..0]
      if s_0[0..0]!="/"
         if s_0[0..0]!="\\"
            puts "\n\n"+s_errmsg_1+"\n\n"
            throw s_errmsg_1
         end # if
      end # if
      writeln_2_console "Assembling... "
      s_all_in_one=ob_assembler.assemble()
      str2file(s_all_in_one,s_output_file_path_candidate)
      writeln_2_console "Assembly complete."
   end # if
else
   s_all_in_one=ob_assembler.assemble()
   puts s_all_in_one
end # if

#==========================================================================
