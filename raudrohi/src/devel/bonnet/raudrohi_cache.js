//=========================================================================
// Copyright (c) 2009, martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or
// without modification, are permitted provided that the following
// conditions are met:
//
// * Redistributions of source code must retain the above copyright
//   notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above copyright
//   notice, this list of conditions and the following disclaimer
//   in the documentation and/or other materials provided with the
//   distribution.
// * Neither the name of the Martin Vahi nor the names of its
//   contributors may be used to endorse or promote products derived
//   from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
// CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
// INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//=========================================================================
// This file is for declaring global caches.
// The instantiation of the caches is expected to be
// triggered from the library constructor.
//-------------------------------------------------------------------------
if(window.raudrohi_cache_exists!==true){
	window.raudrohi.cache={};
	window.raudrohi_cache_exists=true;
} // if
if(window.raudrohi_cache_funcs_exists!==true){
	window.raudrohi.cache.funcs={};
	window.raudrohi_cache_funcs_exists=true;
} // if
//-------------------------------------------------------------------------
// It's a partial constructor of some of the 
// global caches that are declared in this file.
raudrohi.cache.init=function(){
	try{
		// key==<number_of_colors>_<start_color>_<end_color>
		// The colors are in a form of #xxxxxx, where x is a hex digit.
		raudrohi.cache.ht_color_gradients=new Hashtable();
	} catch (err){
		raudrohi.tmg('329b455e-0c51-4ea8-8577-70808090abd7',err);
	} // catch
} // raudrohi.cache.init

//=========================================================================
