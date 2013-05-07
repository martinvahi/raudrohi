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

if defined? KIBUVITS_HOME
   require KIBUVITS_HOME+"/src/include/kibuvits_gstatement.rb"
   require KIBUVITS_HOME+"/src/include/kibuvits_cg.rb"
   require KIBUVITS_HOME+"/src/include/kibuvits_fs.rb"
   require KIBUVITS_HOME+"/src/include/bonnet/kibuvits_os_codelets.rb"
   require KIBUVITS_HOME+"/src/include/kibuvits_ProgFTE.rb"
else
   require "kibuvits_gstatement.rb"
   require "kibuvits_cg.rb"
   require "kibuvits_fs.rb"
   require "kibuvits_os_codelets.rb"
   require "kibuvits_ProgFTE.rb"
end # if

require RAUDROHI_CODE_GENERATION+"/raudrohi_cg1.rb"

require "yaml"
#==========================================================================

class Raudrohi_cg_widget
   attr_reader :s_name
   @@lc_linebreak="\n"
   @@lc_space=" "
   @@lc_emptystring=""
   @@lc_rgx_space=/[\s]+/

   @@s_serialization_YAML_file_path=nil
   @@b_class_statics_inited=false
   @@ht_all_widgets=nil
   @@ar_alignment_values=["north","south","east","west",
   "northeast","northwest","southeast","southwest","center"]
   @@s_msg_subwidgets_not_supported="This widget type is not able to "+
   "include subwidgets. "
   @@s_tpl_parent_intestine_vardeclr_widget=""+
   "var widget_[CODEGENERATION_BLANK_0]_[CODEGENERATION_BLANK_1]_=null;\n"
   @@s_tpl_parent_intestine_vardeclr_id=""+
   "var id_[CODEGENERATION_BLANK_0]_[CODEGENERATION_BLANK_1]_=prc_.html_id_+'_[CODEGENERATION_BLANK_0]_[CODEGENERATION_BLANK_1]';\n"
   @@s_tpl_parent_intestine_varname_widget=""+
   "widget_[CODEGENERATION_BLANK_0]_[CODEGENERATION_BLANK_1]_"
   @@s_tpl_parent_intestine_varname_widget_id=""+
   "id_[CODEGENERATION_BLANK_0]_[CODEGENERATION_BLANK_1]_"
   @@s_tpl_parent_intestine_cblk_set_focus_2_widget=""+
   "             widget_[CODEGENERATION_BLANK_0]_[CODEGENERATION_BLANK_1]_.set_focus();\n"

   #@@s_tpl_my_intenstine_func_create_containers_cached_t1=""+
   #"var s_create_containers_[CODEGENERATION_BLANK_0]_cache_='';\n"+
   #"var b_create_containers_[CODEGENERATION_BLANK_0]_cached_=false;\n"+
   #"   		function create_containers_[CODEGENERATION_BLANK_0](){\n"+
   #"			try{\n"+
   #"				if(b_create_containers_[CODEGENERATION_BLANK_0]_cached_===false){\n"+
   #"                   [CODEGENERATION_BLANK_1]"+
   #"				   b_create_containers_[CODEGENERATION_BLANK_0]_cached_=true;\n"+
   #"				} // if\n"+
   #"				return s_create_containers_[CODEGENERATION_BLANK_0]_cache_;\n"+
   #"			} catch(err){\n"+
   #"				raudrohi.tmg('[CODEGENERATION_BLANK_GUID_0]',err);\n"+
   #"			} // catch\n"+
   #"		} // create_containers_[CODEGENERATION_BLANK_0]\n"

   @@s_tpl_func_general="\n"+
   "   		function [CODEGENERATION_BLANK_0]([CODEGENERATION_BLANK_1]){\n"+
   "				[CODEGENERATION_BLANK_2]"+ # for the warning
   "			try{\n"+
   "				[CODEGENERATION_BLANK_3]"+
   "			} catch(err){\n"+
   "				raudrohi.tmg('[CODEGENERATION_BLANK_GUID_0]',err);\n"+
   "			} // catch\n"+
   "		} // [CODEGENERATION_BLANK_0]\n"

   @@s_tpl_cblk_cluster_entry_and_exit=""+
   "            //-----------------------------------------------------------\n"+
   "		prc_.stsw_exit_cluster_[CODEGENERATION_BLANK_0]=function(){\n"+
   "			[CODEGENERATION_BLANK_3]"+
   "			try{\n"+
   "				[CODEGENERATION_BLANK_1]"+
   "			} catch (err){\n"+
   "				raudrohi.tmg('[CODEGENERATION_BLANK_GUID_0]',err);\n"+
   "			} // catch\n"+
   "		} // stsw_exit_cluster_[CODEGENERATION_BLANK_0]\n"+
   "		self_public_.state_switcher_.declare_cluster_exit_func(\n"+
   "			'cluster_[CODEGENERATION_BLANK_0]',\n"+
   "			prc_.stsw_exit_cluster_[CODEGENERATION_BLANK_0]);\n"+
   "\n"+
   "		prc_.stsw_enter_cluster_[CODEGENERATION_BLANK_0]=function(){\n"+
   "			[CODEGENERATION_BLANK_3]"+
   "			try{\n"+
   "				[CODEGENERATION_BLANK_2]"+
   "			} catch (err){\n"+
   "				raudrohi.tmg('[CODEGENERATION_BLANK_GUID_1]',err);\n"+
   "			} // catch\n"+
   "		} // stsw_enter_cluster_[CODEGENERATION_BLANK_0]\n"+
   "		self_public_.state_switcher_.declare_cluster_entry_func(\n"+
   "			'cluster_[CODEGENERATION_BLANK_0]',\n"+
   "			prc_.stsw_enter_cluster_[CODEGENERATION_BLANK_0]);\n"+
   "		//-----------------------------------------------------------\n"


   @@s_tpl_cblk_state_entry_and_exit_and_cluster=""+
   "		//-----------------------------------------------------------\n"+
   "		prc_.stsw_exit_state_[CODEGENERATION_BLANK_0]=function(){\n"+
   "			[CODEGENERATION_BLANK_4]"+
   "			try{\n"+
   "				[CODEGENERATION_BLANK_1]"+
   "			} catch(err){\n"+
   "				raudrohi.tmg('[CODEGENERATION_BLANK_GUID_0]',err);\n"+
   "			} // catch\n"+
   "		} // stsw_exit_state_[CODEGENERATION_BLANK_0]\n"+
   "		self_public_.state_switcher_.declare_state_default_exit_func(\n"+
   "			'state_[CODEGENERATION_BLANK_0]',\n"+
   "                    prc_.stsw_exit_state_[CODEGENERATION_BLANK_0]);\n"+
   "\n"+
   "		prc_.stsw_enter_state_[CODEGENERATION_BLANK_0]=function(){\n"+
   "			[CODEGENERATION_BLANK_4]"+
   "			try{\n"+
   "				[CODEGENERATION_BLANK_2]"+
   "			} catch(err){\n"+
   "				raudrohi.tmg('[CODEGENERATION_BLANK_GUID_1]',err);\n"+
   "			} // catch\n"+
   "		} // stsw_enter_state_[CODEGENERATION_BLANK_0]\n"+
   "		self_public_.state_switcher_.declare_state_default_entry_func(\n"+
   "			'state_[CODEGENERATION_BLANK_0]',\n"+
   "                    prc_.stsw_enter_state_[CODEGENERATION_BLANK_0]);\n"+
   "		self_public_.state_switcher_.declare_state_2_be_in_cluster(\n"+
   "			'cluster_[CODEGENERATION_BLANK_3]',\n"+
   "                    'state_[CODEGENERATION_BLANK_0]');\n"+
   "		//-----------------------------------------------------------\n"

   @@s_tpl_cblk_state_edge=""+
   "        //-----------------------------------------------------------\n"+
   "        prc_.stsw_edge_state_from_state_[CODEGENERATION_BLANK_0]_2_state_[CODEGENERATION_BLANK_1]=function(){\n"+
   "		[CODEGENERATION_BLANK_3]"+
   "            try{\n"+
   "                [CODEGENERATION_BLANK_2]\n"+
   "            } catch (err){\n"+
   "                raudrohi.tmg('[CODEGENERATION_BLANK_GUID_0]',err);\n"+
   "            } // catch\n"+
   "        } // stsw_edge_state_from_state_[CODEGENERATION_BLANK_0]_2_state_[CODEGENERATION_BLANK_1]\n"+
   "        self_public_.state_switcher_.declare_state_transition_func(\n"+
   "            'state_[CODEGENERATION_BLANK_0]',\n"+
   "            'state_[CODEGENERATION_BLANK_1]',\n"+
   "            prc_.stsw_edge_state_from_state_[CODEGENERATION_BLANK_0]_2_state_[CODEGENERATION_BLANK_1]);\n"+
   "        //-----------------------------------------------------------\n";


   attr_reader :s_tpl_func_startup_hook, :s_tpl_func_shutdown_hook

   private

   def Raudrohi_cg_widget.init_class_static_fields
      return if @@b_class_statics_inited
      s_fp=Kibuvits_os_codelets.get_tmp_folder_path
      s_fp=s_fp+"/Raudrohi_cg_widget"+
      "_global_serialization_"+KIBUVITS_s_PROCESS_ID+".yaml"
      @@s_serialization_YAML_file_path=s_fp
      if File.exists? s_fp
         ht_failures=Kibuvits_fs.verify_access(s_fp,'is_file,writable')
         if ht_failures.length!=0
            throw Kibuvits_fs.access_verification_results_to_string(ht_failures)
         end # if
         s_file_content=file2str(s_fp)
         ht_data=YAML.load(s_file_content)
         @@ht_all_widgets=ht_data['ht_all_widgets']
      else
         @@ht_all_widgets=Hash.new
      end # if
      @@b_class_statics_inited=true
   end # Raudrohi_cg_widget.init_class_static_fields

   public

   def Raudrohi_cg_widget.serialize_all_instances_and_redump_2_file
      Raudrohi_cg_widget.init_class_static_fields
      s_fp=@@s_serialization_YAML_file_path
      if File.exists? s_fp
         ht_failures=Kibuvits_fs.verify_access(s_fp,'is_file,writable')
         if ht_failures.length!=0
            throw Kibuvits_fs.access_verification_results_to_string(ht_failures)
         end # if
         File.delete(s_fp)
      end # if
      ht_data=Hash.new
      ht_data['ht_all_widgets']=@@ht_all_widgets
      s_file_content=YAML.dump(ht_data)
      str2file(s_file_content,s_fp)
   end # Raudrohi_cg_widget.serialize_all_instances_and_redump_2_file

   private
   def init_templates
      @s_warning=Kibuvits_cg.get_standard_warning_msg("//", self.class.to_s)

      @s_tpl_func_startup_hook=""+
      "		prc_.customizable.optional.startup_hook=function(){\n"+@s_warning+
      "			try{\n"+
      "               [CODEGENERATION_BLANK_0]\n"+
      "			} catch (err){\n"+
      "				raudrohi.tmg('[CODEGENERATION_BLANK_GUID_0]',err);\n"+
      "			} // catch\n"+
      "		} // startup_hook\n"

      @s_tpl_func_shutdown_hook=""+
      "		prc_.customizable.optional.shutdown_hook=function(){\n"+@s_warning+
      "			try{\n"+
      "               [CODEGENERATION_BLANK_0]\n"+
      "			} catch (err){\n"+
      "				raudrohi.tmg('[CODEGENERATION_BLANK_GUID_0]',err);\n"+
      "			} // catch\n"+
      "		} // startup_hook\n"
      @s_tpl_parent_intestine_func_evh_keypress=""+
      "		self_public_.private_code_.evh_.evh_[CODEGENERATION_BLANK_0]_[CODEGENERATION_BLANK_1]_k[CODEGENERATION_BLANK_2]=function(e){\n"+
      @s_warning+
      "			try{\n"+
      "             [CODEGENERATION_BLANK_3]"+
      "			} catch (err){\n"+
      "				raudrohi.tmg('[CODEGENERATION_BLANK_GUID_0]',err);\n"+
      "			} // catch\n"+
      "		} // evh_[CODEGENERATION_BLANK_0]_[CODEGENERATION_BLANK_1]_k[CODEGENERATION_BLANK_2]\n"

      @s_tpl_parent_intestine_func_evh_general=""+
      "		self_public_.private_code_.evh_.evh_[CODEGENERATION_BLANK_0]_[CODEGENERATION_BLANK_1]=function(e){\n"+
      @s_warning+
      "			try{\n"+
      "             [CODEGENERATION_BLANK_2]"+
      "			} catch (err){\n"+
      "				raudrohi.tmg('[CODEGENERATION_BLANK_GUID_0]',err);\n"+
      "			} // catch\n"+
      "		} // evh_[CODEGENERATION_BLANK_0]_[CODEGENERATION_BLANK_1] \n"

      @s_tpl_my_intestine_func_private=""+
      "		self_public_.private_code_.[CODEGENERATION_BLANK_0]=function([CODEGENERATION_BLANK_1]){\n"+
      @s_warning+
      "			try{\n"+
      "             [CODEGENERATION_BLANK_2]"+
      "			} catch (err){\n"+
      "				raudrohi.tmg('[CODEGENERATION_BLANK_GUID_0]',err);\n"+
      "			} // catch\n"+
      "		} //  self_public_.private_code_.[CODEGENERATION_BLANK_0]\n"

      @s_tpl_my_intestine_func_render_editable=""+
      "		prc_.customizable.compulsory.render_editable=function(){\n"+@s_warning+
      "			try{\n"+
      "				[CODEGENERATION_BLANK_0]"+
      "			} catch (err){\n"+
      "				raudrohi.tmg('[CODEGENERATION_BLANK_GUID_0]',err);\n"+
      "			} // catch\n"+
      "		} // render_editabl"

      @s_globalconfig_widget_type="SUBJECT_TO_OVERRIDING_IN_SUBWIDGET_CLASS"

      @s_tpl_my_intestine_func_create_containers_constant=""+
      "		prc_.containers_html_cache_=" "+\n[CODEGENERATION_BLANK_0];\n"+
      "		function create_containers(){\n"+@s_warning+
      "			try{\n"+
      "				raudrohi.base.set_innerHTML(prc_.container_id_,\n"+
      "					prc_.containers_html_cache_);\n"+
      "			} catch (err){\n"+
      "				raudrohi.tmg('[CODEGENERATION_BLANK_GUID_0]',err);\n"+
      "			} // catch\n"+
      "		} // create_containers      "
   end # init_templates

   public

   def initialize s_name, msgcs=Kibuvits_msgc_stack.new
      bn=binding()
      kibuvits_typecheck bn, String, s_name
      kibuvits_typecheck bn, Kibuvits_msgc_stack, msgcs
      Raudrohi_cg_widget.init_class_static_fields
      throw "s_name.length < 1 " if s_name.length<1
      if @@ht_all_widgets.has_key? s_name
         throw "\nThis process has already created a widget instance that "+
         "has a name of \""+s_name+"\"."
      end # if
      @s_name=s_name
      init_templates
      @@ht_all_widgets[@s_name]=self
      @ht_my_subwidgets=Hash.new
      @msgcs=msgcs
      @ht_eventhandlers=Hash.new # key==<evh instance signature> value=<JS code>
      @ht_key_eventhandlers=Hash.new # key==<key code as string> value=<JS code>
      @b_has_at_least_one_keypress_evh=false # There might be other evhs besides keypresses
      @ht_stateclusters=Hash.new
      @ht_states=Hash.new
      @ar_stateedges=Array.new
   end # initialize

   def my_intestine_boilerplate_t1(s_phone_number_prefix,
      b_s_phone_number_prefix_constitutes_the_whole_phone_number=false)
      bn=binding()
      kibuvits_typecheck bn, String, s_phone_number_prefix
      kibuvits_typecheck bn, [FalseClass,TrueClass], b_s_phone_number_prefix_constitutes_the_whole_phone_number
      #s_phone_number="'"+s_phone_number_prefix+"'"
      #if !b_s_phone_number_prefix_constitutes_the_whole_phone_number
      #   s_phone_number=s_phone_number+
      #   "+\nprc_.html_id_+raudrohi.base.generate_id()"
      #end # if
      s_out=""+
      "     //---widget--boilerplate_1_--start--\n"+@s_warning+
      "		var self_public_=this;\n"+
      "		var pileofmethods_t1_=new raudrohi.widgets.g1.pileofmethods_t1(\n"+
      "                 self_public_,'"+s_phone_number_prefix+"',\n"+
      "                 s_html_id);\n"+
      "		var prc_=self_public_.private_code_;\n"+
      "		var wg_hooks_=self_public_.wg_hooks_;\n"
      #s_out=s_out+"this.phone=new raudrohi.lang.comm.phone(\n"+
      #s_phone_number+");\n"
      #s_out=s_out+
      #"		this.phone.receive_phonecall=pileofmethods_t1_.receive_phonecall_t1;\n"
      s_out=s_out+"     //---widget--boilerplate_1_--end----\n"
      return s_out
   end # my_intestine_boilerplate_t1

   def config_insert_subwidget(ob_subwidget)
      bn=binding()
      if !ob_subwidget.kind_of? Raudrohi_cg_widget
         throw "ob_subwidget.class=="+ob_subwidget.class.to_s+
         ", but it is expected to be derived from or to be equalt to "+
         "Raudrohi_cg_widget."
      end # if
      s_subwidget_name=ob_subwidget.s_name
      if @ht_my_subwidgets.has_key? s_subwidget_name
         # It's not that vital to have this exception throwing here,
         # but it's here to anticipate flaws, because it doesn't hurt either.
         throw "\nA widget with a name of \""+@s_name+"\" already has "+
         "a subwidget with a name of \""+s_subwidget_name+"\"."
      end #  if
      @ht_my_subwidgets[ob_subwidget.s_name]=ob_subwidget
   end # config_insert_subwidget
   private

   def verify_widget_type
      if @s_globalconfig_widget_type.length!=@s_globalconfig_widget_type.gsub(@@lc_rgx_space,"").length
         throw "\nWidget type names that will be encoded to veriable names \n"+
         "are not allowed to contain spaces. @s_globalconfig_widget_type==\""+
         @s_globalconfig_widget_type.to_s+"\"\n"
      end # if
   end # verify_widget_type
   public
   def parent_intestine_var_declarations
      verify_widget_type
      s_out=@@lc_emptystring
      s_out=s_out+Kibuvits_cg.fill_form([@s_globalconfig_widget_type,@s_name],
      @@s_tpl_parent_intestine_vardeclr_widget)
      s_out=s_out+Kibuvits_cg.fill_form([@s_globalconfig_widget_type,@s_name],
      @@s_tpl_parent_intestine_vardeclr_id)
      return s_out
   end # parent_intestine_var_declarations

   def parent_intestine_varname_widget
      verify_widget_type
      s_out=Kibuvits_cg.fill_form([@s_globalconfig_widget_type,@s_name],
      @@s_tpl_parent_intestine_varname_widget)
      return s_out
   end # parent_intestine_varname_widget

   def parent_intestine_varname_widget_id
      verify_widget_type
      s_out=Kibuvits_cg.fill_form([@s_globalconfig_widget_type,@s_name],
      @@s_tpl_parent_intestine_varname_widget_id)
      return s_out
   end # parent_intestine_varname_widget_id

   def my_intestine_var_declarations
      s_out=@@lc_emptystring
      @ht_my_subwidgets.each_pair do |s_widget_name,ob_subwidget|
         s_out=s_out+ob_subwidget.parent_intestine_var_declarations
      end # loop
      return s_out
   end # my_intestine_var_declarations

   def parent_intestine_evhs
      s_out=@@lc_emptystring
      @ht_key_eventhandlers.each_value do |s_JavaScript_code|
         s_out=s_out+s_JavaScript_code+@@lc_linebreak
      end # loop
      @ht_eventhandlers.each_value do |s_JavaScript_code|
         s_out=s_out+s_JavaScript_code+@@lc_linebreak
      end # loop
      return s_out
   end # parent_intestine_evhs

   def my_intestine_evhs
      s_out=@@lc_emptystring
      @ht_my_subwidgets.each_pair do |s_widget_name,ob_subwidget|
         s_out=s_out+ob_subwidget.parent_intestine_evhs
      end # loop
      return s_out
   end # my_intestine_evhs

   def my_intestine_create_widgets_autogen
      s_code=@@lc_emptystring
      @ht_my_subwidgets.each_pair do |s_widget_name,ob_subwidget|
         s_code=s_code+ob_subwidget.parent_intestine_create_subwidget
      end # loop
      s_out=Kibuvits_cg.fill_form(["create_widgets_autogen"," ",
      @s_warning,s_code],
      @@s_tpl_func_general)
      return s_out
   end #my_intestine_create_widgets_autogen

   def config_declare_state_cluster(s_cluster_name,
      s_cluster_exit_code, s_cluster_entry_code)
      bn=binding()
      kibuvits_typecheck bn, String, s_cluster_name
      kibuvits_typecheck bn, String, s_cluster_exit_code
      kibuvits_typecheck bn, String, s_cluster_entry_code
      if Kibuvits_str.str_contains_spacestabslinebreaks(s_cluster_name)
         throw "Cluster \""+s_cluster_name+
         "\" contains a space, linebreak or a tabulation character. None of them is "+
         "allowed in cluster names."
      end # if
      if @ht_stateclusters.has_key? s_cluster_name
         throw "Cluster \""+s_cluster_name+"\" got declared more than once."
      end # if
      ht_cluster=Hash.new
      ht_cluster['s_cluster_name']=s_cluster_name
      ht_cluster['s_cluster_exit_code']=s_cluster_exit_code+@@lc_space
      ht_cluster['s_cluster_entry_code']=s_cluster_entry_code+@@lc_space
      @ht_stateclusters[s_cluster_name]=ht_cluster
   end # config_declare_state_cluster

   def config_declare_state(s_state_name,s_cluster_name,
      s_state_exit_code, s_state_entry_code)
      bn=binding()
      kibuvits_typecheck bn, String, s_state_name
      kibuvits_typecheck bn, String, s_cluster_name
      kibuvits_typecheck bn, String, s_state_exit_code
      kibuvits_typecheck bn, String, s_state_entry_code
      if Kibuvits_str.str_contains_spacestabslinebreaks(s_state_name)
         throw "State name \""+s_state_name+
         "\" contains a space, linebreak or a tabulation character. None of them is "+
         "allowed in state names."
      end # if
      if Kibuvits_str.str_contains_spacestabslinebreaks(s_cluster_name)
         throw "Cluster \""+s_cluster_name+
         "\" contains a space, linebreak or a tabulation character. None of them is "+
         "allowed in cluster names."
      end # if
      if @ht_states.has_key? s_state_name
         throw "State \""+s_state_name+"\" got declared more than once."
      end # if
      ht_state=Hash.new
      ht_state['s_state_name']=s_state_name
      ht_state['s_cluster_name']=s_cluster_name
      ht_state['s_state_exit_code']=s_state_exit_code+@@lc_space
      ht_state['s_state_entry_code']=s_state_entry_code+@@lc_space
      @ht_states[s_state_name]=ht_state
   end # config_declare_state_cluster

   def config_declare_state_edge(s_orgin_state_name, s_destination_state_name,
      s_transition_code)
      bn=binding()
      kibuvits_typecheck bn, String, s_orgin_state_name
      kibuvits_typecheck bn, String, s_destination_state_name
      kibuvits_typecheck bn, String, s_transition_code
      if Kibuvits_str.str_contains_spacestabslinebreaks(s_orgin_state_name)
         throw "State name \""+s_orgin_state_name+
         "\" contains a space, linebreak or a tabulation character. None of them is "+
         "allowed in state names."
      end # if
      if Kibuvits_str.str_contains_spacestabslinebreaks(s_destination_state_name)
         throw "State name \""+s_destination_state_name+
         "\" contains a space, linebreak or a tabulation character. None of them is "+
         "allowed in state names."
      end # if
      if !@ht_states.has_key? s_orgin_state_name
         if s_destination_state_name!="zero"
            throw "State \""+s_orgin_state_name+"\" has to be declared "+
            "prior to declaring any transitions from it.."
         end # if
      end # if
      if !@ht_states.has_key? s_destination_state_name
         if s_destination_state_name!="zero"
            throw "State \""+s_destination_state_name+"\" has to be declared "+
            "prior to declaring any transitions to it.."
         end # if
      end # if
      if s_orgin_state_name==s_destination_state_name
         throw "Origin and destination states are not allowed to be equal. "+
         "s_orgin_state_name==\""+s_orgin_state_name+"\"."
      end # if
      ht_record=Hash.new
      ht_record['s_orgin_state_name']=s_orgin_state_name
      ht_record['s_destination_state_name']=s_destination_state_name
      ht_record['s_transition_code']=s_transition_code
      @ar_stateedges<<ht_record
   end #config_declare_state_edge

   private
   def my_intestine_states_and_stateclusters_and_their_edges_cluster_code(ht_cluster)
      s_cluster_name=ht_cluster['s_cluster_name']
      s_cluster_exit_code=ht_cluster['s_cluster_exit_code']+"\n"
      s_cluster_entry_code=ht_cluster['s_cluster_entry_code']+"\n"
      s_out=Kibuvits_cg.fill_form([s_cluster_name,
      s_cluster_exit_code,s_cluster_entry_code,@s_warning],
      @@s_tpl_cblk_cluster_entry_and_exit)
      return s_out
   end # my_intestine_states_and_stateclusters_and_their_edges_cluster_code

   def my_intestine_states_and_stateclusters_and_their_edges_state_code(ht_state)
      s_out=@@lc_emptystring
      s_state_name=ht_state['s_state_name']
      s_cluster_name=ht_state['s_cluster_name']
      s_state_exit_code=ht_state['s_state_exit_code']
      s_state_entry_code=ht_state['s_state_entry_code']
      s_out=Kibuvits_cg.fill_form([s_state_name,s_state_exit_code,
      s_state_entry_code,s_cluster_name,@s_warning],
      @@s_tpl_cblk_state_entry_and_exit_and_cluster)
      if !@ht_stateclusters.has_key? s_cluster_name
         throw "State with a name of \""+s_state_name+
         "\" is declared to be within cluster named \""+s_cluster_name+
         "\", but the cluster has not been declared."
      end # if
      return s_out
   end # my_intestine_states_and_stateclusters_and_their_edges_state_code

   def my_intestine_states_and_stateclusters_and_their_edges_edge_code(ht_record)
      s_orgin_state_name=ht_record['s_orgin_state_name']
      s_destination_state_name=ht_record['s_destination_state_name']
      s_transition_code=ht_record['s_transition_code']
      s_out=Kibuvits_cg.fill_form(
      [s_orgin_state_name,s_destination_state_name,s_transition_code,@s_warning],
      @@s_tpl_cblk_state_edge)
      return s_out
   end # my_intestine_states_and_stateclusters_and_their_edges_edge_code

   public
   def my_intestine_states_and_stateclusters_and_their_edges
      s_code=@@lc_emptystring
      s=nil
      @ht_stateclusters.each_pair do |s_cluster_name,ht_cluster|
         s=my_intestine_states_and_stateclusters_and_their_edges_cluster_code(ht_cluster)
         s_code=s_code+s+@@lc_linebreak
      end # loop
      @ht_states.each_pair do |s_state_name,ht_state|
         s=my_intestine_states_and_stateclusters_and_their_edges_state_code(ht_state)
         s_code=s_code+s+@@lc_linebreak
      end # loop
      @ar_stateedges.each do |ht_record|
         s=my_intestine_states_and_stateclusters_and_their_edges_edge_code(ht_record)
         s_code=s_code+s+@@lc_linebreak
      end # loop
      return s_code
   end # my_intestine_states_and_stateclusters_and_their_edges

   def my_intestine_all_common(s_phonenumber_prefix,
      b_s_phone_number_prefix_constitutes_the_whole_phone_number,
      b_parent_instance_is_part_of_the_constructor_parameters)
      bn=binding()
      kibuvits_typecheck bn, String, s_phonenumber_prefix
      kibuvits_typecheck bn, [FalseClass,TrueClass], b_s_phone_number_prefix_constitutes_the_whole_phone_number
      s_out=""
      if b_parent_instance_is_part_of_the_constructor_parameters
         s_out=s_out+@@lc_linebreak+Raudrohi_cg_debug_verification.new(
         ['HTML_ID','s_html_id'],['g1_widget','parent_instance']).to_s
      else
         s_out=s_out+@@lc_linebreak+Raudrohi_cg_debug_verification.new(
         ['HTML_ID','s_html_id']).to_s
      end # if
      s_out=s_out+@@lc_linebreak+my_intestine_boilerplate_t1(
      s_phonenumber_prefix+@s_name,
      b_s_phone_number_prefix_constitutes_the_whole_phone_number)+@@lc_linebreak
      s_out=s_out+@@lc_linebreak+"prc_.parent_instance_=parent_instance;\n"
      s_out=s_out+@@lc_linebreak+my_intestine_var_declarations()
      s_out=s_out+@@lc_linebreak+my_intestine_evhs
      s_out=s_out+@@lc_linebreak+my_intestine_create_widgets_autogen
      s_out=s_out+@@lc_linebreak+my_intestine_states_and_stateclusters_and_their_edges
      return s_out
   end # my_intestine_all_common

   # A version without the parent_instance stuff.
   def my_intestine_all_common_t2(s_phonenumber_prefix,
      b_s_phone_number_prefix_constitutes_the_whole_phone_number=false)
      bn=binding()
      kibuvits_typecheck bn, String, s_phonenumber_prefix
      kibuvits_typecheck bn, [FalseClass,TrueClass], b_s_phone_number_prefix_constitutes_the_whole_phone_number
      s_out=""
      s_out=s_out+@@lc_linebreak+Raudrohi_cg_debug_verification.new(
      ['String','s_html_id']).to_s
      s_out=s_out+@@lc_linebreak+my_intestine_boilerplate_t1(
      s_phonenumber_prefix+@s_name,
      b_s_phone_number_prefix_constitutes_the_whole_phone_number)+ @@lc_linebreak
      s_out=s_out+@@lc_linebreak+my_intestine_var_declarations()
      s_out=s_out+@@lc_linebreak+my_intestine_evhs
      s_out=s_out+@@lc_linebreak+my_intestine_create_widgets_autogen
      s_out=s_out+@@lc_linebreak+my_intestine_states_and_stateclusters_and_their_edges
      return s_out
   end # my_intestine_all_common_t2

end # class Raudrohi_cg_widget

#--------------------------------------------------------------------------
class Raudrohi_cg_widget_textarea_t1 < Raudrohi_cg_widget
   attr_reader :s_or_i_width, :s_or_i_height, :s_type

   private
   def init_templates_cl_textarea_t1
      @s_warning=Kibuvits_cg.get_standard_warning_msg("//", self.class.to_s)
      @s_tpl_parent_intestine_create_widget=""+
      "	            var ht_widget_textarea_t1_[CODEGENERATION_BLANK_0]_params=raudrohi.base.pool_of_hashtables.get_empty_hashtable();\n"+
      "	            ht_widget_textarea_t1_[CODEGENERATION_BLANK_0]_params.put('type','[CODEGENERATION_BLANK_3]');\n"+
      "             widget_textarea_t1_[CODEGENERATION_BLANK_0]_=new raudrohi.widgets.g1.textarea_t1(\n"+
      "                     id_textarea_t1_[CODEGENERATION_BLANK_0]_,[CODEGENERATION_BLANK_1],[CODEGENERATION_BLANK_2],\n"+
      "                     ht_widget_textarea_t1_[CODEGENERATION_BLANK_0]_params);\n"+
      "             widget_textarea_t1_[CODEGENERATION_BLANK_0]_.set_alignment('[CODEGENERATION_BLANK_5]');\n"+
      "             prc_.register_subwidget(widget_textarea_t1_[CODEGENERATION_BLANK_0]_,'[CODEGENERATION_BLANK_4]');\n"+
      "             widget_textarea_t1_[CODEGENERATION_BLANK_0]_.s_field_name_in_parent='[CODEGENERATION_BLANK_0]';\n"+
      "             raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_widget_textarea_t1_[CODEGENERATION_BLANK_0]_params);\n\n"
      @s_tpl_parent_intestine_create_widget_set_keylistener=""+
      "             widget_textarea_t1_[CODEGENERATION_BLANK_0]_.set_keylistener('[CODEGENERATION_BLANK_1]',\n"+
      "                     self_public_.private_code_.evh_.evh_textarea_t1_[CODEGENERATION_BLANK_0]_k[CODEGENERATION_BLANK_1]);\n"

   end # init_templates_cl_textarea_t1

   def verify_constructor_args(s_name,s_or_i_width,s_or_i_height,b_visible_at_creation,
      s_alignment,s_type)
      if(s_or_i_width.class==Fixnum)
         throw "s_or_i_width=="+s_or_i_width.to_s+" < 1 " if s_or_i_width< 1
      else
         throw "s_or_i_width.length==0" if s_or_i_width.length==0
      end # else
      if(s_or_i_height.class==Fixnum)
         throw "s_or_i_height=="+s_or_i_height.to_s+" < 1 " if s_or_i_height< 1
      else
         throw "s_or_i_height.length==0" if s_or_i_height.length< 1
      end # else
      case s_type
      when "text"
      when "password"
         if(s_or_i_height.class==Fixnum)
            if 1<s_or_i_height
               throw "If s_type==\"passwored\", then the s_or_i_height is "+
               "allowed to be only 1. Unfortunately the s_or_i_height=="+
               s_or_i_height.to_s+"."
            end # if
         end # if
      else
         throw "s_type=="+s_type+", but only \"text\" and \"password\" "+
         "are supported."
      end # case
      Kibuvits_str.verify_s_is_within_domain(s_alignment,
      @@ar_alignment_values,@msgcs,"throw")
   end # verify_constructor_args

   public
   # s_type values:{"text","password"}.
   # If the number of rows,i.e. s_or_i_height, is greater than 1,
   # the only valid value for the s_type is "text".
   def initialize(s_name,s_or_i_width,s_or_i_height,b_visible_at_creation=true,
      s_alignment="west",s_type="text", msgcs=Kibuvits_msgc_stack.new)
      bn=binding()
      kibuvits_typecheck bn, String, s_name
      kibuvits_typecheck bn, [Fixnum,String], s_or_i_width
      kibuvits_typecheck bn, [Fixnum,String], s_or_i_height
      kibuvits_typecheck bn, [TrueClass,FalseClass], b_visible_at_creation
      kibuvits_typecheck bn, String, s_alignment
      kibuvits_typecheck bn, String, s_type
      kibuvits_typecheck bn, Kibuvits_msgc_stack, msgcs
      super(s_name,msgcs) # verifies also the length of the s_name
      verify_constructor_args(s_name,s_or_i_width,s_or_i_height,b_visible_at_creation,
      s_alignment,s_type)
      init_templates_cl_textarea_t1
      @s_globalconfig_widget_type="textarea_t1"
      @s_or_i_width=s_or_i_width
      @s_or_i_height=s_or_i_height
      @b_visible_at_creation=b_visible_at_creation
      @s_alignment=s_alignment
      @s_type=s_type
   end # initialize

   def config_insert_subwidget(ob_subwidget)
      throw @@s_msg_subwidgets_not_supported
   end # config_insert_subwidget

   def config_evh_keypress_or_event(s_eventhandler_JavaScript_source,
      i_or_s_key_number_or_event_name)
      bn=binding()
      kibuvits_typecheck bn, String, s_eventhandler_JavaScript_source
      s_key_number_or_event_name=i_or_s_key_number_or_event_name.to_s
      if (i_or_s_key_number_or_event_name.class==Fixnum)
         throw "\ni_or_s_key_number_or_event_name=="+
         s_key_number_or_event_name+" < 0\n" if i_key_number<0
      end # if
      s_code=Kibuvits_cg.fill_form(
      [@s_globalconfig_widget_type,@s_name,s_key_number_or_event_name,
      s_eventhandler_JavaScript_source],
      @s_tpl_parent_intestine_func_evh_keypress)
      @ht_key_eventhandlers[s_key_number_or_event_name]=s_code
      @b_has_at_least_one_keypress_evh=true
   end # config_evh_keypress_or_event

   def config_evh_keypress_move_focus_2_textfield(s_textfield_widget_name,
      i_key_number=13)
      bn=binding()
      kibuvits_typecheck bn, String, s_textfield_widget_name
      kibuvits_typecheck bn, Fixnum, i_key_number
      throw "\ni_key_number=="+i_key_number.to_s+" < 0\n" if i_key_number<0
      s_evh_content=Kibuvits_cg.fill_form(
      [@s_globalconfig_widget_type,@s_textfield_widget_name],
      @@s_tpl_parent_intestine_cblk_set_focus_2_widget)
      config_evh_keypress_or_event(s_evh_content,i_key_number)
   end # config_evh_keypress_move_focus_2_textfield

   # Returns a string
   def parent_intestine_create_subwidget
      s_out=""
      s_visibility="hidden"
      s_visibility="visible" if @b_visible_at_creation
      s_out=s_out+Kibuvits_cg.fill_form(
      [@s_name,@s_or_i_width.to_s,@s_or_i_height.to_s,@s_type,s_visibility,@s_alignment],
      @s_tpl_parent_intestine_create_widget)
      @ht_key_eventhandlers.each_pair do |s_key_number,s_evh_code|
         s_out=s_out+Kibuvits_cg.fill_form([@s_name,s_key_number],
         @s_tpl_parent_intestine_create_widget_set_keylistener)
      end # loop
      return s_out
   end # parent_intestine_create_subwidget

end # class Raudrohi_cg_widget_textarea_t1

#--------------------------------------------------------------------------
class Raudrohi_cg_widget_button_t1 < Raudrohi_cg_widget
   attr_reader :s_label_JavaScript_source

   private
   def init_templates_cl_button
      @s_warning=Kibuvits_cg.get_standard_warning_msg("//", self.class.to_s)
      @s_tpl_parent_intestine_create_widget=""+
      "             widget_button_t1_[CODEGENERATION_BLANK_0]_=new raudrohi.widgets.g1.button_t1(\n"+
      "                     id_button_t1_[CODEGENERATION_BLANK_0]_,[CODEGENERATION_BLANK_1]);\n"+
      "             widget_button_t1_[CODEGENERATION_BLANK_0]_.evh_button_pushed_impl=self_public_.private_code_.evh_.evh_button_t1_[CODEGENERATION_BLANK_0];\n"+
      "             widget_button_t1_[CODEGENERATION_BLANK_0]_.s_field_name_in_parent='[CODEGENERATION_BLANK_0]';\n"+
      "             prc_.register_subwidget(widget_button_t1_[CODEGENERATION_BLANK_0]_,'[CODEGENERATION_BLANK_2]');\n\n"
   end # init_templates_cl_button


   public
   # The s_label_JavaScript_source may depict a JavaScript function call
   # or a JavaScript string literal.
   def initialize(s_name,s_label_JavaScript_source,b_visible_at_creation,
      msgcs=Kibuvits_msgc_stack.new)
      bn=binding()
      kibuvits_typecheck bn, String, s_name
      kibuvits_typecheck bn, String, s_label_JavaScript_source
      kibuvits_typecheck bn, [TrueClass,FalseClass], b_visible_at_creation
      kibuvits_typecheck bn, Kibuvits_msgc_stack, msgcs
      super(s_name,msgcs) # verifies also the length of the s_name
      init_templates_cl_button
      @b_visible_at_creation=b_visible_at_creation
      @s_label_JavaScript_source=s_label_JavaScript_source
      @s_globalconfig_widget_type="button_t1"
   end # initialize

   def config_insert_subwidget(ob_subwidget)
      throw @@s_msg_subwidgets_not_supported
   end # config_insert_subwidget

   def config_evh_buttonpress(s_eventhandler_JavaScript_source)
      bn=binding()
      kibuvits_typecheck bn, String, s_eventhandler_JavaScript_source
      # The next line is a quirk to make sure that the s_needle!=""
      s_eventhandler_JavaScript_source=" "+s_eventhandler_JavaScript_source
      s_code=Kibuvits_cg.fill_form(
      [@s_globalconfig_widget_type,@s_name,s_eventhandler_JavaScript_source],
      @s_tpl_parent_intestine_func_evh_general)
      s_htkey=@s_globalconfig_widget_type+"_button_t1_pressed_evh_"+@s_name
      @ht_key_eventhandlers[s_htkey]=s_code
   end # config_evh_buttonpress

   # Returns a string
   def parent_intestine_create_subwidget
      if (@ht_key_eventhandlers.length==0)
         throw "One has to call config_evh_buttonpress(...) before "+
         "the parent_intestine_create_subwidget(), because one needs to "+
         "declare an event handler for the button press event."
      end # if
      s_out=""
      s_visibility="hidden"
      s_visibility="visible" if @b_visible_at_creation
      s_out=s_out+Kibuvits_cg.fill_form([@s_name,@s_label_JavaScript_source,s_visibility],
      @s_tpl_parent_intestine_create_widget)
      return s_out
   end # parent_intestine_create_subwidget

end # class Raudrohi_cg_widget_button_t1

#--------------------------------------------------------------------------
# Direct use of the raudrohi.widgets.g1.menu_t1 has been
# deprecated.
class Raudrohi_cg_widget_g1_menu_t1 < Raudrohi_cg_widget

   private
   def init_templates_cl_menu
      @s_warning=Kibuvits_cg.get_standard_warning_msg("//", self.class.to_s)
      @s_tpl_parent_intestine_create_widget=""+
      "        widget_menu_t1_[CODEGENERATION_BLANK_0]_=new raudrohi.widgets.g1.menu_t1(\n"+
      "                id_menu_t1_[CODEGENERATION_BLANK_0]_,\n"+
      "                [CODEGENERATION_BLANK_1]);\n"+
      "        widget_menu_t1_[CODEGENERATION_BLANK_0]_.evh_selection_impl=self_public_.private_code_.evh_.evh_"+
      @s_globalconfig_widget_type+"_[CODEGENERATION_BLANK_0];\n"+
      "        widget_menu_t1_[CODEGENERATION_BLANK_0]_.set_alignment('[CODEGENERATION_BLANK_2]');\n"+
      "        widget_menu_t1_[CODEGENERATION_BLANK_0]_.s_field_name_in_parent='[CODEGENERATION_BLANK_0]';\n"+
      "        prc_.register_subwidget(widget_menu_t1_[CODEGENERATION_BLANK_0]_,'[CODEGENERATION_BLANK_3]');\n\n"
   end # init_templates_cl_menu


   public
   # The s_label_JavaScript_source may depict a JavaScript function call
   # or a JavaScript string literal.
   def initialize(s_name,s_html_if_menucontent_not_set,b_visible_at_creation,
      s_alignment="west", msgcs=Kibuvits_msgc_stack.new)
      bn=binding()
      kibuvits_typecheck bn, String, s_name
      kibuvits_typecheck bn, String, s_html_if_menucontent_not_set
      kibuvits_typecheck bn, [TrueClass,FalseClass], b_visible_at_creation
      kibuvits_typecheck bn, String, s_alignment
      kibuvits_typecheck bn, Kibuvits_msgc_stack, msgcs
      super(s_name,msgcs) # verifies also the length of the s_name
      @s_globalconfig_widget_type="menu_t1"
      init_templates_cl_menu
      @s_html_if_menucontent_not_set=s_html_if_menucontent_not_set
      @b_visible_at_creation=b_visible_at_creation
      @s_alignment=s_alignment
   end # initialize

   def config_insert_subwidget(ob_subwidget)
      throw @@s_msg_subwidgets_not_supported
   end # config_insert_subwidget

   def config_evh_menuselection(s_eventhandler_JavaScript_source)
      bn=binding()
      kibuvits_typecheck bn, String, s_eventhandler_JavaScript_source
      # The next line is a quirk to make sure that the s_needle!=""
      s_eventhandler_JavaScript_source=" "+s_eventhandler_JavaScript_source
      s_code=Kibuvits_cg.fill_form(
      [@s_globalconfig_widget_type,@s_name,s_eventhandler_JavaScript_source],
      @s_tpl_parent_intestine_func_evh_general)
      s_htkey=@s_globalconfig_widget_type+"_menu_selected_evh_"+@s_name
      @ht_key_eventhandlers[s_htkey]=s_code
   end # config_evh_menuselection

   # Returns a string
   def parent_intestine_create_subwidget
      if (@ht_key_eventhandlers.length==0)
         throw "One has to call config_evh_menuselection(...) before "+
         "the parent_intestine_create_subwidget(), because one needs to "+
         "declare an event handler for the menu selection event."
      end # if
      s_out=""
      s_visibility="hidden"
      s_visibility="visible" if @b_visible_at_creation
      s_out=s_out+Kibuvits_cg.fill_form(
      [@s_name,@s_html_if_menucontent_not_set,@s_alignment,s_visibility],
      @s_tpl_parent_intestine_create_widget)
      return s_out
   end # parent_intestine_create_subwidget

end # class Raudrohi_cg_widget_g1_menu_t1

#--------------------------------------------------------------------------
class Raudrohi_cg_widget_partialmenu_t1 < Raudrohi_cg_widget

   private
   def init_templates_cl_partialmenu
      @s_warning=Kibuvits_cg.get_standard_warning_msg("//", self.class.to_s)
      @s_tpl_parent_intestine_create_widget=""+
      "widget_partialmenu_t1_[CODEGENERATION_BLANK_0]_=new\n"+
      "        raudrohi.widgets.g1.partialmenu_t1(\n"+
      "                id_partialmenu_t1_[CODEGENERATION_BLANK_0]_,self_public_,\n"+
      "                [CODEGENERATION_BLANK_1],[CODEGENERATION_BLANK_2],[CODEGENERATION_BLANK_3],\n"+
      "                [CODEGENERATION_BLANK_4],\n"+
      "                [CODEGENERATION_BLANK_5],[CODEGENERATION_BLANK_6]);\n"+
      "widget_partialmenu_t1_[CODEGENERATION_BLANK_0]_.s_field_name_in_parent='[CODEGENERATION_BLANK_0]';\n"+
      "prc_.register_subwidget(\n"+
      "        widget_partialmenu_t1_[CODEGENERATION_BLANK_0]_,'[CODEGENERATION_BLANK_7]');\n"

   end # init_templates_cl_partialmenu

   public
   # The s_label_JavaScript_source may depict a JavaScript function call
   # or a JavaScript string literal.
   # The string versions of the widths and hights allow the
   # values to be some JavaScript code fragments.
   def initialize(s_name,
      s_menu_max_width,s_textarea_width,s_textarea_height,
      s_html_if_menucontent_not_set,
      s_mode="partialmenu_t1_mode_1",
      s_container_style='partialmenu_t1_containertype_vertical_1',
      b_visible_at_creation=true,
      msgcs=Kibuvits_msgc_stack.new)

      bn=binding()
      kibuvits_typecheck bn, String, s_name
      kibuvits_typecheck bn, [String,Fixnum], s_menu_max_width
      kibuvits_typecheck bn, [String,Fixnum], s_textarea_width
      kibuvits_typecheck bn, [String,Fixnum], s_textarea_height
      kibuvits_typecheck bn, String, s_html_if_menucontent_not_set
      kibuvits_typecheck bn, String, s_mode
      kibuvits_typecheck bn, String, s_container_style
      kibuvits_typecheck bn, [TrueClass,FalseClass], b_visible_at_creation
      kibuvits_typecheck bn, Kibuvits_msgc_stack, msgcs

      super(s_name,msgcs) # verifies also the length of the s_name

      s=s_menu_max_width
      s=s_menu_max_width.to_s if s_menu_max_width.class==Fixnum
      @s_menu_max_width=s

      s=s_textarea_width
      s=s_textarea_width.to_s if s_textarea_width.class==Fixnum
      @s_textarea_width=s

      s=s_textarea_height
      s=s_textarea_height.to_s if s_textarea_height.class==Fixnum
      @s_textarea_height=s

      @s_html_if_menucontent_not_set=s_html_if_menucontent_not_set
      @s_mode=s_mode
      @s_container_style=s_container_style
      @b_visible_at_creation=b_visible_at_creation

      @s_globalconfig_widget_type="partialmenu_t1"
      init_templates_cl_partialmenu
      @ar_menuitems=Array.new
      @s_s_label1_of_default_value=nil
   end # initialize

   def config_insert_subwidget(ob_subwidget)
      throw @@s_msg_subwidgets_not_supported
   end # config_insert_subwidget


   # The ar_menuitems is an array of 2-element arrays,
   # where [0] of the 2-element array is the s_label1 and
   # the [1] of the 2-element array is the s_label2.
   #
   # The s_name has the same meaning as the the @s_name has.
   def Raudrohi_cg_widget_partialmenu_t1.parent_intestine_set_menu_content(
      ar_menuitems,s_name)
      bn=binding()
      kibuvits_typecheck bn, Array, ar_menuitems
      i=nil
      s_out=""
      ar_menuitems.each do |ar_menuitem|
         kibuvits_typecheck binding(), Array, ar_menuitem
         i=ar_menuitem.length
         throw "ar_menuitem.length=="+i if i!=2
      end # loop
      s_ar_varname="ar_autogenerated_tmpvar_"+
      Kibuvits_GUID_generator.generate_GUID.gsub("-","_")
      s_out=s_out+Raudrohi_cg1.inst.generate_decr_var_ar_of_x_s_label1_s_label2(
      s_ar_varname,ar_menuitems,true)+@@lc_linebreak;
      s_globalconfig_widget_type="partialmenu_t1"
      s_widget_varname=Kibuvits_cg.fill_form(
      [s_globalconfig_widget_type,s_name],
      @@s_tpl_parent_intestine_varname_widget)
      s_out=s_out+s_widget_varname+".set_menu_content("+
      s_ar_varname+")"+@@lc_linebreak
      return s_out
   end # Raudrohi_cg_widget_partialmenu_t1.parent_intestine_set_menu_content


   # The ar_menuitems has exactly the same format as it has in
   # the case of the
   # Raudrohi_cg_widget_partialmenu_t1.parent_intestine_set_menu_content
   def config_set_menu_content(ar_menuitems,s_s_label1_of_default_value=nil)
      bn=binding()
      kibuvits_typecheck bn, Array, ar_menuitems
      kibuvits_typecheck bn, [NilClass,String], s_s_label1_of_default_value
      i=nil
      ar_menuitems.each do |ar_menuitem|
         i=ar_menuitem.length
         throw "ar_menuitem.length=="+i if i!=2
      end # loop
      if s_s_label1_of_default_value!=nil
         @s_s_label1_of_default_value=s_s_label1_of_default_value
      end # if
      @ar_menuitems=ar_menuitems
   end # config_set_menu_content

   # Returns a string
   def parent_intestine_create_subwidget
      s_out=""
      s_visibility="hidden"
      s_visibility="visible" if @b_visible_at_creation
      s_out=s_out+Kibuvits_cg.fill_form(
      [@s_name,@s_menu_max_width,@s_textarea_width,@s_textarea_height,
         @s_html_if_menucontent_not_set,
         @s_mode,@s_container_style,
      s_visibility],
      @s_tpl_parent_intestine_create_widget)+@@lc_linebreak
      if 0<@ar_menuitems.length
         s_out=s_out+
         Raudrohi_cg_widget_partialmenu_t1.parent_intestine_set_menu_content(
         @ar_menuitems,@s_name)
      end # if
      if @s_s_label1_of_default_value!=nil
         s_globalconfig_widget_type="partialmenu_t1"
         s_widget_varname=Kibuvits_cg.fill_form(
         [s_globalconfig_widget_type,s_name],
         @@s_tpl_parent_intestine_varname_widget)
         s_out=s_out+s_widget_varname+
         ".set_default_value_for_the_menu("+
         @s_s_label1_of_default_value+");\n"
      end # if
      return s_out
   end # parent_intestine_create_subwidget

end # class Raudrohi_cg_widget_partialmenu_t1

#--------------------------------------------------------------------------
class Raudrohi_cg_widget_calendar_t1< Raudrohi_cg_widget

   private
   def init_templates_cl_calendar_t1
      @s_warning=Kibuvits_cg.get_standard_warning_msg("//", self.class.to_s)
      @s_tpl_parent_intestine_create_widget=""+
      "widget_calendar_t1_[CODEGENERATION_BLANK_0]_=new raudrohi.widgets.g1.calendar_t1(id_calendar_t1_[CODEGENERATION_BLANK_0]_,\n"+
      "self_public_,[CODEGENERATION_BLANK_1],[CODEGENERATION_BLANK_2]);\n"+
      "widget_calendar_t1_[CODEGENERATION_BLANK_0]_.s_field_name_in_parent='[CODEGENERATION_BLANK_0]';\n"+
      "prc_.register_subwidget(\n"+
      "widget_calendar_t1_[CODEGENERATION_BLANK_0]_,'[CODEGENERATION_BLANK_3]');\n"
   end # init_templates_cl_calendar_t1

   public
   # The s_label_JavaScript_source may depict a JavaScript function call
   # or a JavaScript string literal.
   def initialize(s_name,s_format="'DD/MM/YY'",s_language="'uk'",
      b_visible_at_creation=true,msgcs=Kibuvits_msgc_stack.new)
      bn=binding()
      kibuvits_typecheck bn, String, s_name
      kibuvits_typecheck bn, String, s_format
      kibuvits_typecheck bn, String, s_language
      kibuvits_typecheck bn, [TrueClass,FalseClass], b_visible_at_creation
      kibuvits_typecheck bn, Kibuvits_msgc_stack, msgcs

      super(s_name,msgcs) # verifies also the length of the s_name

      @s_format=s_format
      @s_language=s_language
      @b_visible_at_creation=b_visible_at_creation
      @s_globalconfig_widget_type="calendar_t1"
      init_templates_cl_calendar_t1
   end # initialize

   def config_insert_subwidget(ob_subwidget)
      throw @@s_msg_subwidgets_not_supported
   end # config_insert_subwidget

   # Returns a string
   def parent_intestine_create_subwidget
      s_out=""
      s_visibility="hidden"
      s_visibility="visible" if @b_visible_at_creation
      s_out=s_out+Kibuvits_cg.fill_form(
      [@s_name,@s_format,@s_language,s_visibility],
      @s_tpl_parent_intestine_create_widget)+@@lc_linebreak
      return s_out
   end # parent_intestine_create_subwidget

end # class Raudrohi_cg_widget_calendar_t1

#--------------------------------------------------------------------------
# The raudrohi.widgets.g1.html_t1 is deprecated and superceded by
# the raudrohi.widgets.g1.html_t2.
class Raudrohi_cg_widget_html_t1< Raudrohi_cg_widget

   private
   def init_templates_cl_calendar_t1
      @s_warning=Kibuvits_cg.get_standard_warning_msg("//", self.class.to_s)
      @s_tpl_parent_intestine_create_widget=""+
      "widget_html_t1_[CODEGENERATION_BLANK_0]_=new raudrohi.widgets.g1.html_t1(id_html_t1_[CODEGENERATION_BLANK_0]_);\n"+
      "widget_html_t1_[CODEGENERATION_BLANK_0]_.s_field_name_in_parent='[CODEGENERATION_BLANK_0]';\n"+
      "prc_.register_subwidget(\n"+
      "widget_html_t1_[CODEGENERATION_BLANK_0]_,'[CODEGENERATION_BLANK_1]');\n"
   end # init_templates_cl_html_t1


   public
   def initialize(s_name,
      b_visible_at_creation=true,msgcs=Kibuvits_msgc_stack.new)
      bn=binding()
      kibuvits_typecheck bn, String, s_name
      kibuvits_typecheck bn, [TrueClass,FalseClass], b_visible_at_creation
      kibuvits_typecheck bn, Kibuvits_msgc_stack, msgcs

      super(s_name,msgcs) # verifies also the length of the s_name

      @b_visible_at_creation=b_visible_at_creation
      @s_globalconfig_widget_type="html_t1"
      init_templates_cl_calendar_t1
   end # initialize

   def config_insert_subwidget(ob_subwidget)
      throw @@s_msg_subwidgets_not_supported
   end # config_insert_subwidget

   # Returns a string
   def parent_intestine_create_subwidget
      s_out=""
      s_visibility="hidden"
      s_visibility="visible" if @b_visible_at_creation
      s_out=s_out+Kibuvits_cg.fill_form([@s_name,s_visibility],
      @s_tpl_parent_intestine_create_widget)+@@lc_linebreak
      return s_out
   end # parent_intestine_create_subwidget

end # class Raudrohi_cg_widget_html_t1

#--------------------------------------------------------------------------
class Raudrohi_cg_widget_html_t2< Raudrohi_cg_widget

   private
   def init_templates_cl_calendar_t1
      @s_warning=Kibuvits_cg.get_standard_warning_msg("//", self.class.to_s)
      @s_tpl_parent_intestine_create_widget=""+
      "widget_html_t2_[CODEGENERATION_BLANK_0]_=new raudrohi.widgets.g1.html_t2(\n"+
      "        id_html_t2_[CODEGENERATION_BLANK_0]_,self_public_);\n"+
      "widget_html_t2_[CODEGENERATION_BLANK_0]_.s_field_name_in_parent='[CODEGENERATION_BLANK_0]';\n"+
      "prc_.register_subwidget(\n"+
      "widget_html_t2_[CODEGENERATION_BLANK_0]_,'[CODEGENERATION_BLANK_1]');\n"
   end # init_templates_cl_html_t2


   public
   def initialize(s_name,
      b_visible_at_creation=true,msgcs=Kibuvits_msgc_stack.new)
      bn=binding()
      kibuvits_typecheck bn, String, s_name
      kibuvits_typecheck bn, [TrueClass,FalseClass], b_visible_at_creation
      kibuvits_typecheck bn, Kibuvits_msgc_stack, msgcs

      super(s_name,msgcs) # verifies also the length of the s_name

      @b_visible_at_creation=b_visible_at_creation
      @s_globalconfig_widget_type="html_t2"
      init_templates_cl_calendar_t1
   end # initialize

   def config_insert_subwidget(ob_subwidget)
      throw @@s_msg_subwidgets_not_supported
   end # config_insert_subwidget

   # Returns a string
   def parent_intestine_create_subwidget
      s_out=""
      s_visibility="hidden"
      s_visibility="visible" if @b_visible_at_creation
      s_out=s_out+Kibuvits_cg.fill_form([@s_name,s_visibility],
      @s_tpl_parent_intestine_create_widget)+@@lc_linebreak
      return s_out
   end # parent_intestine_create_subwidget

end # class Raudrohi_cg_widget_html_t2

#==========================================================================
