#!/usr/bin/env ruby 
#==========================================================================
# Settings:

@i_n_of_minutes=0
@i_n_of_hours=3
@i_n_of_days=3
@i_interval_in_seconds=15
@s_bash_command=" ./run_rake.bash continuous_integration ;"

#==========================================================================
# Bonnet:

x=ENV["RAUDROHI_HOME"]
if (x==nil)||(x=="")
   puts "Mandatory environment variable, RAUDROHI_HOME, "+
   "has not been set. "
   exit
end # if
RAUDROHI_HOME=x

def run(s_mode)
   i_n_of_hours_impl=@i_n_of_days*24+@i_n_of_hours
   i_n_of_seconds_impl=i_n_of_hours_impl*3600+@i_n_of_minutes*60
   s_fp_dev_tools=RAUDROHI_HOME+"/src/dev_tools"
   s_shell_cmd="cd "+s_fp_dev_tools+" ; nice -n30 "+@s_bash_command
   s_cmd="`"+s_shell_cmd+"`"
   i_n=0
   if(s_mode=="loop")
      while(i_n<i_n_of_seconds_impl)
         i_n=i_n+@i_interval_in_seconds
         sleep(@i_interval_in_seconds)
         eval(s_cmd)
      end # while
   else
      eval(s_cmd) if(s_mode=="single_shot")
   end # if
end # run

if ARGV.size==0
   puts "\n"+
   "    @i_n_of_minutes=="+@i_n_of_minutes.to_s+" \n"+
   "    @i_n_of_hours=="+@i_n_of_hours.to_s+" \n"+
   "    @i_n_of_days=="+@i_n_of_days.to_s+" \n"+
   "    @i_interval_in_seconds=="+@i_interval_in_seconds.to_s+"\n"+
   "    @s_bash_command==\""+@s_bash_command.to_s+"\" \n\n"
else
   if ARGV[0]=="--loop"
      run("loop");
   else
      run("single_shot");
   end # if
end # if

