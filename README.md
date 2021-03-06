
The Raudrohi JavaScript Library (RJSL)
===========================================================================

"Raudrohi" stands for Achillea millefolium, i.e. yarrow, in Estonian.
"Raud" stands for "iron" in Estonian.
"Rohi" stands for "grass" and "medical drug" in Estonian.

The Raudrohi JavaScript Library (hereafter: RJSL) is a
collection of 3. party libraries and code written by me,
martin.vahi@softf1.com. The RJSL includes a widgets based
framework, where some of the widgets are non-graphical. 


---------------------------------------------------------------------------

The GitHub account (https://github.com/martinvahi/raudrohi )
contains only a crippled, incomplete, version of the RJSL. 
A complete development package (size: ~1GiB) can be downloaded from:

http://technology.softf1.com/raudrohi/


---------------------------------------------------------------------------

##                         W A R N I N G


This version exists mainly for 3 reasons:

*   fulfill dependencies of other projects;

*   to allow other, a bit bold, people to experiment with the RJSL;

*   to demonstrate to possible employers/clients that
    I have done something in JavaScript.

The documentation of it is in a pretty shoddy state. The shoddiest
parts of the documentation are not even published.


---------------------------------------------------------------------------

##                   Design Goals and Style

The Raudrohi JavaScript Library is not a tool for everyone.
The needs of web developers are intentionally ignored and
probably they will always be ignored. The background
of the targeted audience is software development.

The code style is dynamic language oriented: any hack that
is considered to work reliably on targeted web browsers,
is applied, regardless of how many "best practices" and
"good code style" rules it violates.

The output of various code style policing software, JSLint,
JSHint, etc., is intentionally ignored. Despite the very hackish
nature of the code, almost every design decision has been
evaluated from speed and memory usage point of view.

The RJSL can have a high learning curve and the architecture of the RJSL
has been optimized to minimize the amount of work that software
developers, who have crossed the learning curve, have to do to implement
a web application. Nothing is, and hopefully never will be, dumbed down,
regardless of the barrier of entry that the solution imposes.
In Albert Einstein style: the RJSL is kept as simple as possible,
but not simpler.

Backwards compatibility between different versions is,
intentionally, NOT MAINTAINED.


---------------------------------------------------------------------------

##            Current Core Principles of the Architecture

The RJSL consists of global namespaces, which wrap functions that can be
used by ignoring all the rest of the RJSL.

The RJSL widgets can be non-grapical and all instances of widgets can
communicate with each other by messaging. The messages are
plain JavaScript objects that have he following fields:

*   target instance specific ID as a string, i.e. "instance phone number"

*   origin instance specific ID as a string

*   message type as a string, i.e. target instance can
    use that value to reroute the message to an instance specific
    method that processes that kind of messages.

*   data field, which accepts plain JavaScript objects, which 
    can be strings.

To send a message to the web server, one sends a message to a specific
widget instance that acts as a gateway to the server. Server responses
are received by the gateways, which then repackage the response to the
message objects and send the message objects to the widget that is
targeted by the response.

The properties of the widgets probably depend on the RJSL version.
The API is always subject to refactoring and no backwards compatibility
is maintained.


---------------------------------------------------------------------------

##                Key Properties of the RJSL

*   The RJSL framework allows the creation of composite
    widgets by using HTML and designating the positions of
    subwidgets by DIV-tags. The custom widgets
    can be reused for composing new widgets and the
    custom widgets fit into the RJSL framework as if
    they were builtin widgets.

*   Widgets can be non-graphical and have a role of a
    general building component.

    Each of the widgets has an on-off state to regulate the usage
    of network traffic. For example, there's no point of
    asking data from the server before a log-in session
    has been established and widgets that depend on
    private data can be switched on and off according to
    the existence of a login-session.

    Each of the widgets has a built-in state machine that
    interacts with the built-in state machines of its
    subwidgets. The state machine has one default, mandatory,
    state called "zero". Every time the "zero" state
    is entered, all of the widget's subwidgets are also
    set to the state "zero". States can be grouped into
    user-defined clusters and the state "zero" is by
    default part of every cluster. State transitions
    and cluster-transitions can trigger user-defined
    actions.

    The main benefit of the widgets built-in state
    machine system is that it facilitates the writing
    of GUI business logic. That's actually, what the
    state machine system has been designed for, but
    it's possible to ignore its existence, i.e.
    it's not mandatory to use it.

    As of October 2012 widgets' built-in state
    system allows user-defined states to belong to
    more than one cluster, but that's fundamentally
    flawed approach, because that way it's not
    possible to determine the execution order of
    state-cluster transition event-hanlers.
    If client code is written with a limitation that
    every user-defined state belongs at most to only one
    state cluster, then the refactoring of the state
    system will probably not break the client code.


*   The RJSL contains a global message passing system,
    that allows any RJSL widget instance to send messages to
    any other RJSL widget instance.

    AJAX communication with the web server is normalized out
    by wrapping the gate to the web server into one of the
    non-graphical widgets.

    As of October 2012 the message passing system API
    has to be rewritten, because one has cleaner
    specification for it, but the system that exists,
    is not fundamentally flawed. Its API and protocol
    are the ones that need to be heavily refactored.

*   The RJSL message passing system contains means for
    handling AJAX responses that come in too late,
    have become "irrelevant", or are duplicates.

    Implementation overview: 
    Every widget has a microsession counter. If a widget A
    sends out a message to widget B and
    the microsession counter of widget A is
    incremented before the answer from the
    widget B arrives to the widget A,
    then the answer from the widget B is
    dismissed, because all answer-carrying
    messages that have a different
    origin microsession counter value
    than the current microsession counter
    value are dismissed. The widget B may, but
    does not have to, represent the web server.

    Example scenario: 
    widget A orders a list of
    names from a server and displays the text
    "Loading..." to the user, while waiting for the
    answer. The user changes its mind and sets
    the widget A to a different state that
    has to display something else that the widget
    A has to order from the server. Widget A
    orders the new type of data, but receives
    the previously ordered list of names before
    the set of the new type of data. As the
    state of the widget A has changed,
    the microsession counter value of widget
    A has changed, the list of names is dismissed
    and the widget A keeps on waiting for the
    newer set of data.

    Each of the RJSL widgets has its own microsession
    counter, but its not mandatory to use it, neither is
    it mandatory to initialize it in client code.

    Historical note: the microsession architecture has
    emerged purely form practice and is a result of tedious
    bugfixing/refactoring.

*   The widgets visibility is interpreted in relation to
    the widget's parent widget. If a parent widget is visible,
    then only the subwidgets that have its visibility bit set,
    are visible. The visibility is meant to change during runtime
    and all of the widgets are responsible for maintaining their
    own data. For example, if a textarea widget is set to be hidden,
    then it saves its text and renders it next time, when it becomes
    visible again.

*   All graphical widgets have a "readonly mode" and "editable mode".
    The mode is imposed recursively. For example, if the editability
    bit of a report widget is set to "false", then all of
    its data entry fields can switch to readonly mode. That
    functionality allows the same, document/application specific,
    widgets to be used for both, displaying and editing documents.

    An illustration:
    A text field widget changes from "text field"
    to "plain text", if it is switched from editable
    mode to readonly mode. The button widget implements the
    readonly/editable modes by being enabled/disabled.

*   Browser normalization is based on a bottom layer which
    wraps third party libraries.

    That means that the RJSL can probably keep up with the
    browser evolution by swapping the third party
    libraries/library versions in the bottom layer, without
    any need for any changes in the rest of the RJSL.

    Historical note: One of the first versions of the RJSL
    did not wrap the third party library, YUI 2.something,
    to a bottom layer and when it came to the YUI library
    update, heavy refactoring had to be done. The reason
    for the update was that the YUI 2.something became
    obsolete, did not support latest browser versions.


---------------------------------------------------------------------------

##               The main Weaknesses of the RJSL

*   The Microsoft Internet Explorer is not supported and probably
    will never be supported.

*   The API of the RJSL is never even meant to be stable. It will be
    refactored to any extent that one feels comfortable with.

*   The RJSL will probably never be popular, because it is
    targeted to technical audience and the needs of web developers
    and novice/hobby programmers are intentionally ignored.


---------------------------------------------------------------------------

##      The License and Other Intellectual Property Related Issues

All of the RJSL, including the 3. party parts,
is under a license that allows redistribution,
modification and commercial, closed-source, use.

The parts that have been written by me, martin.vahi@softf1.com,
are placed to namespace raudrohi and are under the BSD license,
except code examples in the

    ./src/examples

, which are in public domain.

Namespace liilia contains code that is not written by me, Martin Vahi, but
has been modified by me. The word "liilia" stands for "lilium" in Estonian.


---------------------------------------------------------------------------

##                       Getting Started

To develop JavaScript applications that use the RJSL
one only needs the files from

    ./src/release

, which also contains all of the RJSL dependencies.

The "Hello World" resides at

    ./src/examples/lesson_01_hello_world

and it works "out of the box".

The RJSL uses HTML5.

Projects that depend on the RJSL probably depend on an
environment variable called RAUDROHI_HOME, which is meant to
point to the folder that contains the COMMENTS.txt that You are
currently reading.


---------------------------------------------------------------------------

##                       Development Setup

Build scripts are all Linux specific. To build RJSL, the PATH must contain

Java 7, Ruby 2.x.x, Rake

The rest of the tools are bundled with the RJSL development deliverables
and if the

    cd $RAUDROHI_HOME/src/dev_tools/run_rake.bash

is used for calling Rake, then the compulsory environment variables,
RAUDROHI_HOME and RAUDROHI_CODEGENERATION_HOME are set by the
Bash script.

Release version of the RJSL is built by

    cd $RAUDROHI_HOME/src/dev_tools
    ./run_rake.bash build

Debug version of the RJSL is built by

    cd $RAUDROHI_HOME/src/dev_tools
    ./run_rake.bash b

RJSL depends on a specific version of the mmmv_devel_tools
(https://github.com/martinvahi/mmmv_devel_tools ).
To save RJSL developers from the work of finding and installing
the right version of the mmmv_devel_tools, the RJSL build
scripts use copy of the mmmv_devel_tools from

    $RAUDROHI_HOME/src/dev_tools/lib/mmmv_devel_tools

The mmmv_devel_tools depends on a specific version of the
Kibuvits Ruby Library (hereafter KRL, http://kibuvits.rubyforge.org/ ).
To save the users of the mmmv_devel_tools from
the work of finding and installing the right version of the KRL,
the mmmv_devel_tools uses a copy of KRL that is bundled with it.
The RJSL build scripts, mainly the

    $RAUDROHI_HOME/src/dev_tools/Rakefile

also uses the KRL. As of 2013_04_04 no more than one version of the
KRL can be used in a single rubyscript. Consequently the mmmv_devel_tools
determines the KRL version for the RJSL build scripts.

The

    $RAUDROHI_HOME/src/dev_tools/code_generation/*.rb

include/import/"require" the

    $RAUDROHI_HOME/src/dev_tools/Rakefile

which gets the value of the Ruby constant KIBUVITS_HOME from
the copy of the mmmv_devel_tools.


---------------------------------------------------------------------------

##                      Raudrohi Hall of Fame

The purpose of this section is to point out some noteworthy, but
may be somewhat unpopular, JavaScript related resources:

http://home.earthlink.net/~kendrasg/info/js_opt/


---------------------------------------------------------------------------

##                           TODO

A lot.

There exists some utter nonsense in there that originates
from an era, when I did not yet know that events in JavaScript do not
trigger new threads. One should study the Worker Threads concept
and see, how the nonsense relates to that.

The first thing to refactor is the widget internal state machine
related state cluster implementation that allows a user-defined
state to belong to more than one cluster. A correct version
is that user-defined states can belong to at most one state cluster,
because then there will be no need to determine the execution order
of cluster change event handler functions.

The second at the list is the messaging system related
protocol. It's not necessarily flawed, but it's so terrible
that it's hard to work with. One should also implement the
concept of "bus-packets" or "packet-bus'es".


---------------------------------------------------------------------------

