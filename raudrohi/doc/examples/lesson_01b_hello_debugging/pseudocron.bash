#!/usr/bin/env bash 

S_FP_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

$S_FP_DIR/bonnet/lib/raudrohi/src/dev_tools/lib/mmmv_devel_tools/src/mmmv_devel_tools/breakdancemake/src/breakdancemake pseudocron run_bash_t1 "--s_bash_command=rake lightweight_build " --i_n_of_days=2 --i_interval_in_seconds=3 



