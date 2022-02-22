module.exports = {
	docs: [
		{
			collapsed: true,
			type: 'category',
			label: 'Getting Started',
			items: [
				'Home',
				'What-Is-Premake',
				'Using-Premake',
				'Building-Premake'
			]
		},
		{
			collapsed: true,
			type: 'category',
			label: 'Writing Premake Scripts',
			items: [
				'Your-First-Script',
				'Workspaces-and-Projects',
				'Scopes-and-Inheritance',
				'Adding-Source-Files',
				'Linking',
				'Configurations-and-Platforms',
				'Filters',
				'Build-Settings',
				'Command-Line-Arguments',
				'Using-Modules',
				'Topics'
			]
		},
		{
			collapsed: true,
			type: 'category',
			label: 'Extending Premake',
			items: [
				'Extending-Premake',
				'Code-Overview',
				'Coding-Conventions',
				'Overrides-and-Call-Arrays',
				'Developing-Modules',
				'Adding-New-Action'
			]
		},
		{
			collapsed: true,
			type: 'category',
			label: 'Guides',
			items: [
				'Sharing-Configuration-Settings'
			]
		},
		{
			collapsed: true,
			type: 'category',
			label: 'Reference',
			items: [
				{
					collapsed: true,
					type: 'category',
					label: 'Project Settings',
					items: [
						'allmodulespublic',
						'androidapilevel',
						'androidapplibname',
						'architecture',
						'assemblydebug',
						'atl',
						'basedir',
						'bindirs',
						'boundscheck',
						'buildaction',
						'buildcommands',
						'buildcustomizations',
						'builddependencies',
						'buildinputs',
						'buildlog',
						'buildmessage',
						'buildoptions',
						'buildoutputs',
						'buildrule',
						'callingconvention',
						'cdialect',
						'characterset',
						'checkaction',
						'cleancommands',
						'cleanextensions',
						'clr',
						'compilationmodel',
						'compileas',
						'compilebuildoutputs',
						'computetargets',
						'configfile',
						'configmap',
						'configuration',
						'configurations',
						'conformancemode',
						'consumewinrtextension',
						'copylocal',
						'cppdialect',
						'csversion',
						'customtoolnamespace',
						'debug.prompt',
						'debugargs',
						'debugcommand',
						'debugconnectcommands',
						'debugconstants',
						'debugdir',
						'debugenvs',
						'debugextendedprotocol',
						'debugformat',
						'debugger',
						'debuggerflavor',
						'debuggertype',
						'debuglevel',
						'debugpathmap',
						'debugport',
						'debugremotehost',
						'debugsearchpaths',
						'debugstartupcommands',
						'debugtoolargs',
						'debugtoolcommand',
						'defaultplatform',
						'defines',
						'dependenciesfile',
						'dependson',
						'deploymentoptions',
						'deprecatedfeatures',
						'disablewarnings',
						'display',
						'docdir',
						'docname',
						'dofileopt',
						'dotnetframework',
						'dpiawareness',
						'editandcontinue',
						'editorintegration',
						'embed',
						'embedandsign',
						'enabledefaultcompileitems',
						'enablewarnings',
						'endian',
						'entrypoint',
						'exceptionhandling',
						'external',
						'externalanglebrackets',
						'externalincludedirs',
						'externalproject',
						'externalrule',
						'externalwarnings',
						'fastuptodate',
						'fatalwarnings',
						'fileextension',
						'filename',
						'files',
						'filter',
						'flags',
						'floatabi',
						'floatingpoint',
						'floatingpointexceptions',
						'forceincludes',
						'forceusings',
						'fpu',
						'framework',
						'frameworkdirs',
						'functionlevellinking',
						'gccprefix',
						'group',
						'headerdir',
						'headername',
						'icon',
						'ignoredefaultlibraries',
						'imageoptions',
						'imagepath',
						'implibdir',
						'implibextension',
						'implibname',
						'implibprefix',
						'implibsuffix',
						'importdirs',
						'includedirs',
						'inlinesvisibility',
						'inlining',
						'intrinsics',
						'iosfamily',
						'isaextensions',
						'jsonfile',
						'justmycode',
						'kind',
						'language',
						'largeaddressaware',
						'libdirs',
						'linkbuildoutputs',
						'linkgroups',
						'linkoptions',
						'links',
						'locale',
						'location',
						'makesettings',
						'namespace',
						'nativewchar',
						'newaction',
						'newoption',
						'nuget',
						'nugetsource',
						'objdir',
						'omitframepointer',
						'openmp',
						'optimize',
						'pchheader',
						'pchsource',
						'pic',
						'platforms',
						'postbuildcommands',
						'postbuildmessage',
						'prebuildcommands',
						'prebuildmessage',
						'preferredtoolarchitecture',
						'prelinkcommands',
						'prelinkmessage',
						'preview',
						'project',
						'propertydefinition',
						'rebuildcommands',
						'removeunreferencedcodedata',
						'resdefines',
						'resincludedirs',
						'resoptions',
						'resourcegenerator',
						'revert',
						'rtti',
						'rule',
						'rules',
						'runpathdirs',
						'runtime',
						'shaderassembler',
						'shaderassembleroutput',
						'shaderdefines',
						'shaderentry',
						'shaderheaderfileoutput',
						'shaderincludedirs',
						'shadermodel',
						'shaderobjectfileoutput',
						'shaderoptions',
						'shadertype',
						'shadervariablename',
						'sharedlibtype',
						'startproject',
						'staticruntime',
						'stl',
						'strictaliasing',
						'stringimportdirs',
						'stringpooling',
						'structmemberalign',
						'swiftversion',
						'symbols',
						'symbolspath',
						'sysincludedirs',
						'syslibdirs',
						'system',
						'systemversion',
						'tags',
						'tailcalls',
						'targetdir',
						'targetextension',
						'targetname',
						'targetprefix',
						'targetsuffix',
						'thumbmode',
						'toolchainversion',
						'toolset',
						'toolsversion',
						'transition',
						'undefines',
						'unsignedchar',
						'usefullpaths',
						'usingdirs',
						'uuid',
						'vectorextensions',
						'versionconstants',
						'versionlevel',
						'visibility',
						'vpaths',
						'warnings',
						'workspace',
						'xcodebuildresources',
						'xcodebuildsettings',
						'xcodecodesigningidentity',
						'xcodesystemcapabilities'
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'Globals',
					items: [
						'_ACTION',
						'_ARGS',
						'_MAIN_SCRIPT_DIR',
						'_MAIN_SCRIPT',
						'_OPTIONS',
						'_OS',
						'_PREMAKE_COMMAND',
						'_PREMAKE_DIR',
						'_PREMAKE_VERSION',
						'_WORKING_DIR',
						'iif',
						'include',
						'includeexternal',
						'printf',
						'require',
						'verbosef',
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'http',
					items: [
						'http.download',
						'http.get',
						'http.post',
						'http-options-table'
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'io',
					items: [
						'io.readfile',
						'io.utf8',
						'io.writefile'
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'json',
					items: [
						'json.decode',
						'json.encode'
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'os',
					items: [
						'os.chdir',
						'os.chmod',
						'os.comparefiles',
						'os.copyfile',
						'os.execute',
						'os.executef',
						'os.findheader',
						'os.findlib',
						'os.get',
						'os.getcwd',
						'os.getpass',
						'os.getversion',
						'os.host',
						'os.is',
						'os.is64bit',
						'os.isdir',
						'os.isfile',
						'os.islink',
						'os.locate',
						'os.matchdirs',
						'os.matchfiles',
						'os.mkdir',
						'os.outputof',
						'os.pathsearch',
						'os.realpath',
						'os.remove',
						'os.rmdir',
						'os.stat',
						'os.target',
						'os.touchfile',
						'os.translateCommands',
						'os.uuid',
						'os.writefile_ifnotequal',
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'path',
					items: [
						'path.appendExtension',
						'path.getabsolute',
						'path.getbasename',
						'path.getdirectory',
						'path.getdrive',
						'path.getextension',
						'path.getname',
						'path.getrelative',
						'path.hasextension',
						'path.isabsolute',
						'path.iscfile',
						'path.iscppfile',
						'path.iscppheader',
						'path.isframework',
						'path.islinkable',
						'path.isobjectfile',
						'path.isresourcefile',
						'path.join',
						'path.normalize',
						'path.rebase',
						'path.replaceextension',
						'path.translate',
						'path.wildcards',
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'string',
					items: [
						'string.capitalized',
						'string.contains',
						'string.endswith',
						'string.escapepattern',
						'string.explode',
						'string.findlast',
						'string.hash',
						'string.lines',
						'string.plural',
						'string.sha1',
						'string.startswith'
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'table',
					items: [
						'table.arraycopy',
						'table.contains',
						'table.deepcopy',
						'table.extract',
						'table.filterempty',
						'table.flatten',
						'table.fold',
						'table.foreachi',
						'table.implode',
						'table.indexof',
						'table.insertafter',
						'table.insertflat',
						'table.isempty',
						'table.join',
						'table.keys',
						'table.merge',
						'table.replace',
						'table.tostring',
						'table.translate',
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'term',
					items: [
						'term.getTextColor',
						'term.popColor',
						'term.pushColor',
						'term.setTextColor'
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'zip',
					items: [
						'zip.extract'
					]
				}
			],
		}
	],
};
