#!/bin/bash
#==========================================================================
# Author: Martin.Vahi@eesti.ee that has an
# Estonian personal identification code of 38108050020.
# This file is under the BSD license:
# http://www.opensource.org/licenses/bsd-license.php
#==========================================================================

#-----RAUDROHI_HOME--value--verification--start-----
# I'm sorry for the dumb series of if-clauses here, but
# this is bash and its syntax and constructs, where even
# single spaces make a difference, make it pretty 
# laborious to come up with the traditional
# write-succinctly-by-choosing-constructs-wisely approach.
if [ "$RAUDROHI_HOME" == "" ]; then
        echo ""
        echo "The environment variable RAUDROHI_HOME is not set, but "
        echo "it must be set or this script will not run (properly)."
        echo ""
        echo "The RAUDROHI_HOME must point to the folder that contains "
        echo "the folders src, IDE, doc, attic ."
        echo ""
        exit;
fi
cd $RAUDROHI_HOME;

S_WRONG_RAUDROHI_HOME_VALUE="false"
#------
if [ -e ./src ]; then
if [ ! -d ./src ]; then
    S_WRONG_RAUDROHI_HOME_VALUE="true"
fi
else
    S_WRONG_RAUDROHI_HOME_VALUE="true"
fi
#------
if [ -e ./IDE ]; then
if [ ! -d ./IDE ]; then
    S_WRONG_RAUDROHI_HOME_VALUE="true"
fi
else
    S_WRONG_RAUDROHI_HOME_VALUE="true"
fi
#------
if [ -e ./doc ]; then
if [ ! -d ./doc ]; then
    S_WRONG_RAUDROHI_HOME_VALUE="true"
fi
else
    S_WRONG_RAUDROHI_HOME_VALUE="true"
fi
#------

if [ "$S_WRONG_RAUDROHI_HOME_VALUE" == "true" ]; then
    echo ""
    echo "It seems that the environment variable RAUDROHI_HOME"
    echo "is set, but has an inappropriate value of "
    echo "$RAUDROHI_HOME"
    echo ""
    exit;
fi
#-----RAUDROHI_HOME--value--verification--end------

#-----KIBUVITS_HOME--value--verification--start----
if [ "$KIBUVITS_HOME" == "" ]; then
        echo ""
        echo "The environment variable KIBUVITS_HOME is not set, but "
        echo "it must be set or this script will not run (properly)."
        echo "The KIBUVITS_HOME must point to the home folder of the "
        echo "Kibuvits Ruby Library (http://rubyforge.org/projects/kibuvits/ )."
        echo ""
        echo "The KIBUVITS_HOME must point to the folder that contains "
        echo "the file kibuvits_all.rb ."
        echo ""
        exit;
fi
cd $KIBUVITS_HOME;

S_WRONG_KIBUVITS_HOME_VALUE="false"
#------
if [ -e ./kibuvits_all.rb ]; then
if [ -d ./kibuvits_all.rb ]; then
    S_WRONG_KIBUVITS_HOME_VALUE="true"
fi
else
    S_WRONG_KIBUVITS_HOME_VALUE="true"
fi
#------
if [ -e ./experimental ]; then
if [ ! -d ./experimental ]; then
    S_WRONG_KIBUVITS_HOME_VALUE="true"
fi
else
    S_WRONG_KIBUVITS_HOME_VALUE="true"
fi
#------

if [ "$S_WRONG_KIBUVITS_HOME_VALUE" == "true" ]; then
    echo ""
    echo "It seems that the environment variable KIBUVITS_HOME"
    echo "is set, but has an inappropriate value of "
    echo "$KIBUVITS_HOME"
    echo ""
    exit;
fi
#-----KIBUVITS_HOME--value--verification--end------

#-----SIREL_HOME--value--verification--start----
if [ "$SIREL_HOME" == "" ]; then
        echo ""
        echo "The environment variable SIREL_HOME is not set, but "
        echo "it must be set or this script will not run (properly)."
        echo "The SIREL_HOME must point to the home folder of the "
        echo "Sirel PHP Library."
        echo ""
        echo "The SIREL_HOME must point to the folder that contains "
        echo "the folders src, IDE, doc."
        echo ""
        exit;
fi
cd $SIREL_HOME;

S_WRONG_SIREL_HOME_VALUE="false"
#------
if [ -e ./src ]; then
if [ ! -d ./src ]; then
    S_WRONG_SIREL_HOME_VALUE="true"
fi
else
    S_WRONG_SIREL_HOME_VALUE="true"
fi
#------
if [ -e ./IDE ]; then
if [ ! -d ./IDE ]; then
    S_WRONG_SIREL_HOME_VALUE="true"
fi
else
    S_WRONG_SIREL_HOME_VALUE="true"
fi
#------
if [ -e ./doc ]; then
if [ ! -d ./doc ]; then
    S_WRONG_SIREL_HOME_VALUE="true"
fi
else
    S_WRONG_SIREL_HOME_VALUE="true"
fi
#------

if [ "$S_WRONG_SIREL_HOME_VALUE" == "true" ]; then
    echo ""
    echo "It seems that the environment variable SIREL_HOME"
    echo "is set, but has an inappropriate value of "
    echo "$SIREL_HOME"
    echo ""
    exit;
fi
#-----SIREL_HOME--value--verification--end------

cd $RAUDROHI_HOME;

# To allow the the selftests version to be assembled
# automatically by PHP, the selftests version must have
# the access rights of 0777. The reason for that is that 
# user that writes the file is the web server, which might
# not be configured to run the PHP as suid <web application owner>.
#
# To avoid cross-site scripting attacks by parties 
# that run their web software on the same server with me, 
# one has to make sure that the web server is not able to 
# edit my files according to their web software.
#
# Of course it could be that the web server executes the PHP 
# as suid <web application owner>, but better to be safe than sorry
# and set all of the non-PHP-Ruby-ETC-server-software files 
# to access rights 0444 and all server software files to 0644. 
#
# Think of the cross-site scripting attack that can be performed, 
# if the release version of the raudrohi_all_in_one_v19.js 
# is modified by some party that runs its own web software 
# on the same server that the raudrohi_all_in_one_v19.js 
# is installed to 

SELFTESTS_VERSION_FILE_NAME="raudrohi_all_in_one_with_selftests_v19.js";
PRODUCTION_VERSION_FILE_NAME="raudrohi_all_in_one_v19.js";
FULL_PATH_TO_THE_SELFTESTS_VERSION="$RAUDROHI_HOME/src/devel/dev_tools/tmp_/$SELFTESTS_VERSION_FILE_NAME"
FULL_PATH_TO_THE_PRODUCTION_VERSION="$RAUDROHI_HOME/src/release/$PRODUCTION_VERSION_FILE_NAME"
FULL_PATH_TO_THE_NEWLY_ASSEMBLED_FILE="subject to assignment below"

S_MODE="$1"

if [ "$S_MODE" == "st" ]; then
    # The "st" is just a convenient, non-advertized, abbreviation
    # to avoid (mis-)typing the long word to console.
    S_MODE="assemble_for_raudrohi_selftests";
fi

if [ "$S_MODE" == "assemble_for_raudrohi_selftests" ]; then
    FULL_PATH_TO_THE_NEWLY_ASSEMBLED_FILE="$FULL_PATH_TO_THE_SELFTESTS_VERSION"
else
    FULL_PATH_TO_THE_NEWLY_ASSEMBLED_FILE="$FULL_PATH_TO_THE_PRODUCTION_VERSION"
fi

PHP_SCRIPT=" require_once('$RAUDROHI_HOME/src/devel/dev_tools/bonnet/raudrohi_all_in_one_assembler.php'); ";

if [ "$S_MODE" == "d" ]; then
	echo 'Deleting the assembled JavaScript file...';
	rm -f $FULL_PATH_TO_THE_PRODUCTION_VERSION
	rm -f $FULL_PATH_TO_THE_SELFTESTS_VERSION
	echo 'Deletion Complete.';
else
if [ "$S_MODE" == "assemble_for_raudrohi_selftests" ]; then
    echo 'Assembling the selftests version ...';
    PHP_SCRIPT="$PHP_SCRIPT echo raudrohi_all_in_one_assembler::assemble('$RAUDROHI_HOME','selftest'); ";
else
    echo 'Assembling the release version ...';
    PHP_SCRIPT="$PHP_SCRIPT echo raudrohi_all_in_one_assembler::assemble('$RAUDROHI_HOME'); ";
fi
    php5 -r "$PHP_SCRIPT" > $FULL_PATH_TO_THE_NEWLY_ASSEMBLED_FILE;
    echo 'Assembly Complete.';
fi

FULL_PATH_TO_THE_TMP_FILE="$RAUDROHI_HOME/src/devel/dev_tools/tmp_/x_compressed_js.tmp"

if [ "$S_MODE" == "y" ]; then
	echo 'Compressing with YUI compressor...';
	java -jar $RAUDROHI_HOME/src/devel/dev_tools/lib/yuicompressor-2.4.2.jar --nomunge --preserve-semi $FULL_PATH_TO_THE_NEWLY_ASSEMBLED_FILE > $FULL_PATH_TO_THE_TMP_FILE
	mv $FULL_PATH_TO_THE_TMP_FILE $FULL_PATH_TO_THE_NEWLY_ASSEMBLED_FILE;
	rm -f $FULL_PATH_TO_THE_TMP_FILE
	echo 'Compression Complete.';
fi

if [ "$S_MODE" == "g" ]; then
# The SIMPLE_OPTIMIZATIONS are used in stead of the ADVANCED_OPTIMIZATIONS 
# because the advanced version transformed the raudrohi JavaScript library
# to some faulty state. For example, the same code, if compressed with 
# the Yahoo compressor, worked, but if compressed with the Google
# compressor by applying ADVANCED_OPTIMIZATIONS, did not work.
	echo 'Compressing with Google Closure Compiler ...';
	java -jar $RAUDROHI_HOME/src/devel/dev_tools/lib/Google_Closure_Compiler_a_version_from_11_2009/compiler.jar --third_party --compilation_level=SIMPLE_OPTIMIZATIONS  --js=$FULL_PATH_TO_THE_NEWLY_ASSEMBLED_FILE --js_output_file=$FULL_PATH_TO_THE_TMP_FILE
	mv $FULL_PATH_TO_THE_TMP_FILE $FULL_PATH_TO_THE_NEWLY_ASSEMBLED_FILE;
	rm -f $FULL_PATH_TO_THE_TMP_FILE
	echo 'Compression Complete.';
fi

if [ "$S_MODE" != "d" ]; then
if [ "$S_MODE" == "assemble_for_raudrohi_selftests" ]; then
	chmod 0777 $FULL_PATH_TO_THE_NEWLY_ASSEMBLED_FILE;
else
	chmod 0755 $FULL_PATH_TO_THE_NEWLY_ASSEMBLED_FILE;
fi
fi

