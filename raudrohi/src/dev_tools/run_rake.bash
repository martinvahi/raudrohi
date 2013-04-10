#!/bin/bash

export S_FP_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ "$RAUDROHI_HOME" == "" ]; then
        export RAUDROHI_HOME="`cd $S_FP_DIR/../../; pwd`"
fi

if [ "$RAUDROHI_CODE_GENERATION" == "" ]; then
        export RAUDROHI_CODE_GENERATION="$RAUDROHI_HOME/src/dev_tools/code_generation"
fi

if [ "$MMMV_DEVEL_TOOLS_HOME" == "" ]; then
        export MMMV_DEVEL_TOOLS_HOME="$RAUDROHI_HOME/src/dev_tools/lib/mmmv_devel_tools"
fi

S_FP_PWD="`pwd`"
cd $S_FP_DIR
unset S_FP_DIR
`which ruby` -Ku `which rake` -f ./Rakefile $1 $2 $3 $4 $5 $6 $7
cd $S_FP_PWD

