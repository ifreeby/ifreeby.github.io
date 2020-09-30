var platformName = null;
var platform = null;
var price;

var coinNums = ['1,500', '4,200', '8,600', '14,800'];
var coinNumsImage = [
  'static/images/box4.png',
  'static/images/box1.png',
  'static/images/box2.png',
  'static/images/box3.png'
];
var platforms = [
  '<i class="fab fa-windows"></i>',
  '<i class="fab fa-playstation"></i>',
  '<i class="fab fa-xbox"></i>',
  '<i class="fab fa-nintendo-switch"></i>',
  '<i class="fab fa-apple"></i>',
  '<i class="fab fa-android"></i>'
];
var colors = [
  'card-bg-blue',
  'card-bg-brown',
  'card-bg-green',
  'card-bg-purple'
];

var users = [
  'TurtletheCat',
  'Pobelter',
  'EugeneJPark',
  'Doublelift',
  'C9Sneaky',
  'lamBjerg',
  'Popobelterold',
  'HOGEE',
  'WizFujiiN',
  'HotGuy6Pack',
  'dawoofsclaw',
  'TiPApollo',
  'Soeren',
  'FSNChunkyfresh',
  'Ariana22ROO',
  'Waker',
  'Podu',
  'C9Hard',
  'Shiphtur',
  'HOoZy',
  'Chapanya',
  'Dyrus',
  'Entranced',
  'WildTurtle',
  'WildTurtl',
  'lntense',
  'Hauntzer',
  'LiquidFeniX',
  'THExJOHNxCENA555',
  'Imaqtpie',
  'ZionSpartan',
  'JJackstar',
  'Ekkocat',
  'LiquidKEITH',
  'mldkingking',
  'Loopercorn',
  'TiPMa',
  'Ohhhq',
  'ninjamaster69xxx',
  'CaliTrlolz8',
  'ice',
  'C9Meteos',
  'JannaMechanics',
  'KEITHMCBRIEF',
  'dunamis',
  'Quasmire',
  'scorro',
  'LiquidQuas',
  'GVHauntzer',
  'PengYiliang',
  'Casely',
  'wahoolahoola',
  'godisfeng66666',
  'Zbuum',
  'ilovefatdongs',
  'TransIogic',
  'LemonBoy',
  'Link',
  'Chipotlehunter',
  'TDKkina',
  'DJTrance',
  'Duocek',
  'Hate',
  'KonKwon',
  'Nihillmatic',
  'Zaryab',
  'intero',
  'Biofrost',
  'LongCat4',
  'CSTJesiz',
  'GVKeane',
  'TiPyoondog',
  'RedoutabIe',
  'LiquidXpecial',
  'JayJ',
  'GVCop',
  'iKeNNyu',
  'C9Hai',
  'FunFrock',
  'CLGLourlo',
  'evertan',
  'Chaullenger',
  'Aniratak',
  'PorpoiseDeluxe',
  'Isuyu',
  'CLGDandyLite',
  'Arcsecond',
  'BloodWater',
  'Jynthe',
  'Sickoscott',
  'RickyTang',
  'DaBox',
  'ALLRekklesvNA',
  'Hoofspark',
  'DuBuKiD',
  'AdrianMa',
  'GuriAndGunji',
  'stuntopia',
  'RyanChoi',
  'AiShiTeru',
  'FSNMeMer',
  'J0kes',
  'C9Balls',
  'C9SoIo',
  'yungmulahBABY',
  'FeelTheLove',
  'dawolfsclaw',
  'BaamSouma',
  'NMEotter',
  'stuntopolis',
  'llRomell',
  'GoJeongPa',
  'p0z',
  'Trisexual',
  'MarkPassion',
  'Seeiya',
  'AAltec',
  'C9LemonNation',
  'maplestreet8',
  'goldenglue',
  'MegaZero',
  'VIPEEEEEEEEEEEER',
  'Panchie',
  'fabbbyyy',
  'halo3madsniper',
  'iLucent',
  '1k2o1ko12ko12ko2',
  'Bokbokimacat',
  'VANISHINGDRAG0N',
  'LiquidPiglet',
  'playmkngsupport',
  'Gambler',
  'Gaggiano',
  'JJayel',
  'JoopsaKid',
  '1brayle',
  'Azingy',
  'Kebrex',
  'WahzYan',
  'willxo',
  'TailsLoL',
  'darksnipa47',
  'Thyak',
  'JimmyTalon',
  'vane',
  'sooyoung',
  'lalaisland',
  'Lourlo',
  'Sunar',
  'PlayWithAnimals',
  'scarra',
  'HUYAGorilIA',
  'Lock0nStratos',
  'aphromoo',
  'KMadClown',
  'ChaIlengerAhri',
  'YY90001PiKaChu',
  'Thefatkidfromup',
  'ahqwe5tdoor',
  'Nintenpai',
  'JustJayce',
  'toontown',
  'BasedYoona',
  'GoldStars',
  'ExecutionerKen',
  'nicemoves',
  'InvertedComposer',
  'LiquidIWD',
  'Stan007',
  'woshishabi',
  'Joffers2eKing',
  'xPecake',
  'BlGHUEVOS',
  'Plun',
  'KingCobra',
  'TDKSmoothie',
  'TSMLustboy',
  'C10Meteos',
  'lllllllllllllIII',
  'ohdaughter',
  'PekinWoof',
  'BrandonFtw8',
  'm2sticc',
  'DaiJurJur',
  'DontMashMe',
  'CaseOpened',
  'otte',
  'wutroletoplay',
  'Thurtle',
  'Dodo8',
  'Frostalicious',
  'bobqinXD',
  'MrCarter',
  'Hellkey',
  'Chimonaa1',
  'DaBoxII',
  'GVVicious',
  'Jummychu',
  'PAlNLESS',
  'LiLBunnyFuFuu',
  'Loffers2eeeeeeeeee',
  'Lattman',
  'Daserer',
  'AlliancePatrick',
  'Lionsexual',
  'St1xxay',
  'Kojolika',
  'CSTCris',
  'KojotheCat',
  'StellaLoussier',
  'Gleebglarbu',
  'Altrum',
  'RiotMeyeA',
  'Rule18',
  'mandatorycloud',
  'Tritan',
  'LiquidDominate',
  'cidadedecack',
  'RoA',
  'BillyBoss',
  'xPepastel',
  'TaketheDraw',
  'ST2g',
  'Migipooop',
  'dKiWiKid',
  'NMEflareszx',
  'Gundamu',
  'imp',
  'DDABONG',
  'Daydreamin',
  'Nightlie',
  'MRHIGHLIGHTREEL',
  'Shweeb',
  'JinMori',
  'Tailsz',
  'Bischu',
  'CRBRakin',
  'Chaox',
  'Grigne',
  'LogicalDan',
  'DAKular',
  'DifferentSword',
  'Geranimoo',
  'InnoX',
  'FishingforUrf',
  'FluffyKittens206',
  'ImJinAh',
  'CloudNguyen',
  'moonway',
  'whoishe',
  'TiensiNoAkuma',
  'Ethil',
  'nothinghere',
  'SuperMetroid',
  'hiimgosu',
  'Mammon',
  'BGJessicaJung',
  'coBBz',
  'waitingforu',
  'LearningToPIay',
  'YiOwO',
  'heavenTime',
  'AnDa',
  'WakaWaka',
  'hashinshin',
  'TDKKez',
  'MariaCreveling',
  'Cypress',
  'YahooDotCom',
  'Phanimal',
  'Aror',
  'RFLegendary',
  'BenNguyen',
  'AHHHHHHHHH',
  'Linsanityy',
  'Valkrin',
  'Gate',
  'Allorim',
  'Johnp0t',
  'Superrrman',
  'Laughing',
  'AKAPapaChau',
  'denoshuresK',
  'Anthony',
  'Nightblue3',
  'Aranium',
  'Pallione',
  'BamfDotaPlayer',
  'FakerSama',
  'xiaolan',
  'Sweept',
  'HooManDu',
  'XiaoWeiXiao',
  'HctMike',
  'Revenge',
  'Apauloh',
  'latebloomer',
  'CRBFyre',
  'MongolWarrior',
  'Hiphophammer',
  'CoachLFProTeam',
  'hiimria',
  'Jackoo',
  'Saskio',
  'DadeFakerPawn',
  'GVStvicious',
  'NeonSurge',
  'NMEBodydrop',
  'MatLifeTriHard',
  'PantsareDragon',
  'GinormousNoob',
  'IMbz',
  'miqo',
  'VoyboyCARRY',
  'Hakuho',
  'Hexadecimal',
  'themassacre8',
  'Ayr',
  'SeaHorsee',
  'F0rtissimo',
  'GamerXz',
  'Remie',
  'Soghp',
  'Raimazz',
  'Ultimazero',
  'bigfatlp',
  'NMETrashyy',
  'C9LOD',
  'Popuh',
  'SAGASUPVEIGM',
  'Iamagoodboy',
  'TrollerDog',
  'Descraton',
  'LiquidInoriTV',
  'MiniMe',
  'IlIlIIIlIIIIlIII',
  'Shweebie',
  'KatLissEverdeen',
  'PoppersOP',
  'B1GKr1T',
  'DGB',
  'stephyscute2',
  'TEESEMM',
  'Cyprincess',
  'baohando',
  'urbutts',
  'maplestreeTT',
  'jamee',
  'SawitonReddit',
  'VeryBitter',
  'BenignSentinel',
  'MrJuvel',
  'Denny',
  'LeeGuitarStringa',
  'DKrupt',
  'LAGEhsher',
  'eLLinOiSe',
  'MochiBalls',
  'Sonnynot6',
  'ixou',
  'Taeyawn',
  'Dezx',
  '7hThintoN',
  'BeautifulKorean',
  'VwSTeesum',
  'TLIWDominate',
  'Vsepr',
  'ktSmurf',
  'Vultix',
  'Soredemo',
  'ROBERTxLEE',
  'AnnieBot',
  'aksn1per',
  'IamFearless',
  'FrostyLights',
  'SoYung',
  'Tuoooor',
  'Polx',
  'Agolite',
  'CloudWater',
  'Delta',
  'LAGOrbwalk',
  'sexycan',
  'SimonHawkes',
  'Rohammers',
  'NMEInnoX',
  'ChineseJester',
  'IAmDoughboy',
  'Cytosine',
  'Vanxer',
  'SDiana2',
  'Araya',
  'TheItalianOne',
  'F1Flow',
  'Kazahana',
  'Malajoffers2ii',
  'xiaoweiba',
  'JoshMabrey',
  'shinymew',
  'Event',
  'freelancer18',
  'ZnipetheDog',
  'hiitsviper',
  'HappyBirfdizzay',
  'Abou222',
  'Gir1shot2diamond',
  'KiNGNidhogg',
  'PurpleFloyd',
  'Rathul',
  'Kwaku',
  'BeachedWhaIe',
  '14h',
  'Xpecial',
  'CLGThink',
  'Aiciel',
  'oerh',
  'butttpounder',
  'TalkPIayLove',
  'jordank',
  'TwistyJoffers2er',
  'MeganFoxisGG',
  'NiHaoDyLan',
  'TallerACE',
  'Doomtrobo',
  'Wardrium',
  'TwtchTviLoveSezu',
  'Westrice',
  'iMysterious',
  'BennyHung',
  'EnmaDaiO',
  'xTc4',
  'FallenBandit',
  'RumbIeMidGG',
  'deft1',
  'GochuHunter',
  'XxRobvanxX',
  'DuoChiDianShi',
  'coLBubbadub',
  'LeBulbe',
  'TanHat',
  'Dusty',
  'Jibberwackey',
  'Tallwhitebro',
  'llllllllllllIIII',
  'LilBuu',
  'Diamond',
  'cesuna',
  'BigolRon',
  'xSojin',
  'Gh3ttoWatermelon',
  'KingofMemes',
  '111094Jrh',
  'bive',
  'Yammy',
  'FasScriptor',
  'Docxm',
  'GVBunnyFuFuu',
  'Alphabetical',
  'Liquidzig',
  'YouHadNoDream',
  'TINYHUEVOS',
  'Sheepx',
  'GangstaSwerve',
  'LeBulbetier',
  'amandagugu',
  'Rushmore',
  'AnnieCHastur',
  'OverlordForte',
  'Muffintopper66',
  'Kazura',
  'zetsuen',
  'wozhixiangyin',
  'CaptainNoffers2e',
  'alextheman',
  'Seongmin',
  'Working',
  'kyaasenpaix3',
  'gurminder',
  'VwSKhoachitizer',
  'TGZ',
  'KrucifixKricc',
  'Kevnn',
  'Academiic',
  'ArianaLovato',
  'Elemia',
  'CLGDeftsu',
  'XerbeK',
  'CeIestic',
  'RedEyeAkame',
  'Kerpal',
  'xFSNSaber',
  'MakNooN',
  'Hcore',
  'MrGamer',
  'zeralf',
  'Fenixlol',
  'Indivisible',
  'SHOWMETHEMONEY',
  'Adorations',
  'Niqhtmarex',
  'RambointheJungle',
  'Iucid',
  'iOddOrange',
  'Uncover',
  'DD666666',
  'r0b0cop',
  'VictoricaDebloiz',
  'Gleebglarb',
  'EmperorSteeleye',
  'SillyAdam',
  'whBox',
  'tempname456543',
  'FeedOn',
  'iJesus69',
  'OmegaB',
  'Riftcrawl',
  'Xandertrax',
  'Krymer',
  'TwistedSun',
  'DeTRFShinmori',
  'RiceFox',
  'iKoogar',
  'Mizuji',
  'White',
  'zgerman',
  'FORG1VENliftlift',
  'sakurafIowers',
  'xSaury',
  'PiPiPig',
  'Pyrr',
  'TheCptAmerica',
  'NtzNasty',
  'SlowlyDriftnAway',
  'cre4tive',
  'LAGGoldenShiv',
  'FSNDLuffy',
  'NintendudeX',
  'duliniul',
  'Cybody',
  'Odete49',
  'TFBlade',
  'Platoon',
  'CopyCat',
  'BarbecueRibs',
  'TitanDweevil',
  'HeroesOfTheStorm',
  'JRT94',
  'RedBerrrys',
  'Rockblood',
  'YoloOno',
  'BalmungLFT',
  'IreliaCarriesU',
  'LikeAMaws',
  'PaulDano',
  'ErzaScarIet',
  'KiritoKamui',
  'ProofOfPayment',
  'DonPorks',
  'BarronZzZ',
  'Pikaboo',
  'aLeo',
  'MikeytheBully',
  '7Qing',
  'BillyBossXD',
  'DragonRaider',
  'Haughty',
  'KMadClowns',
  'ikORY',
  'Nikkone',
  'WeixiaTianshi',
  'QQ346443922',
  'FoxDog',
  'Tahx',
  'Hawk',
  'Haroffers2a',
  'Scrumm',
  'cackgod',
  'iAmNotSorry',
  'coLROBERTO',
  'GladeGleamBright',
  'MonkeyDufle',
  'M1ssBear',
  'theletter3',
  'Sandrew',
  'RongRe',
  'MrGatsby',
  'xBlueMoon',
  'Merryem',
  'ElkWhisperer',
  'Enticed',
  'Draguner',
  'DeliciousMilkGG',
  'Patoy',
  'Lucl3n3Ch4k0',
  'Smoian',
  'Piaget',
  'Xiaomi',
  'zeflife',
  'IsDatLohpally',
  'HatersWantToBeMe',
  'Blackmill',
  'PrinceChumpJohn',
  'NhatNguyen',
  'Nebulite',
  'IAmTheIRS',
  'TedStickles',
  'LOD',
  'CallMeExtremity',
  'kimjeii',
  'Kappasun',
  'JJJackstar',
  'TSMMeNoHaxor',
  'Zealous',
  'Normalize',
  'Topcatz',
  'KimchimanBegins',
  'DrawingPalette',
  'AnarchyofDinh',
  'hiimxiao',
  'MikeHct',
  'Manco',
  'ChumpJohnsTeemo',
  'Heejae',
  'delirous',
  'Iodus',
  'WakaWakaWak',
  'Hawez',
  'ThaOGTschussi',
  'TwistedFox',
  'PureCorruption',
  'HotshotGG',
  'Turdelz',
  'ysohardstylez',
  'Brainfre3z',
  'ilyTaylor',
  'Zaineking',
  'QualityADC',
  'LingTong',
  'DyrudeJstormRMX',
  'AnObesePanda',
  'silvermidget',
  'CornStyle',
  'LafalgarTaw',
  'Zeyzal',
  'Meowwww',
  'Pokemorph',
  'JimmyHong',
  'Hoardedsoviet',
  'Nematic',
  'C9Yusui',
  'BlownbyJanna',
  'Sojs',
  'Cerathe',
  'FairieTail',
  'Xeralis',
  'ichibaNNN',
  'SerenityKitty',
  'Contractz',
  'WWvvWvvWvvwWwvww',
  'BlueHole',
  'SAGANoPause',
  'Mookiez',
  'RiotChun',
  'ValkrinSenpai',
  'HeXrisen',
  'CptJack',
  'Sleepyz',
  'HurricaneJanna',
  'ToxiGood',
  'ItsYourChoice',
  'TaintedDucky',
  'probablycoL',
  'Ina',
  'FreeGaming',
  'Phaxen',
  'tofumanoftruth',
  'xHeroofChaos',
  'Rockllee',
  'Sunohara',
  'Ryzer',
  'SpiritDog',
  'Kazma',
  'Sjvir',
  'Maulface',
  'SombreroGalaxy',
  'Bebhead',
  'ecco',
  'AurionKratos',
  'RoseByrne',
  'Kammgefahr',
  'VwSSandvich',
  'TDKLouisXGeeGee',
  'Picarus',
  'erwinbooze',
  'xrawrgasm',
  'Tangularx',
  'CSauce',
  'Back2Nexus',
  'SepekuAW',
  'Chuuper',
  'Airtom',
  'pro711',
  'Theifz',
  'SirhcEezy',
  'LuckyLone56',
  'AtomicN',
  'Splorchicken',
  '00000000',
  'UpAIlNight',
  'k3soju',
  'MikeyC',
  's7efen',
  'FENOMENO',
  'XIVJan',
  'Splorgen',
  'djpocketchange',
  'Oasis',
  'Iggypop',
  'BallsInYourFace',
  'dopa7',
  'MasterDragonKing',
  'ssforfail',
  'MissyQing',
  'Endlesss',
  'badeed',
  'SmooshyCake',
  'Karmix',
  'Alestz',
  'svbk',
  'KissMeRDJ',
  'TeaMALaoSong',
  'drallaBnayR',
  'CHRISTHORMANN',
  'KnivesMillions',
  'MahNeega',
  'Sphinx',
  'Impasse',
  'Stefono62',
  'CLGEasy',
  'GankedFromAbove',
  'IslandLager',
  'MrJuneJune',
  'BrianTheis',
  'ShorterACE',
  'morippe',
  'Meatmush',
  'Dusey',
  'Paperkat',
  'Submit',
  'TooPro4u',
  'Porogami',
  'iuzi',
  'Suzikai',
  'TDKNear',
  'LiquidInori',
  'Deleted',
  'NtzLeopard',
  'UnKooL',
  'Desu',
  'Born4this',
  'sickening',
  'AllianceMike',
  'Dinklebergg',
  'YouGotFaker',
  'FusionSin',
  'IMBAYoungGooby',
  'Neverlike',
  'BestGodniviaNA',
  'FFat20GGWP',
  'kMSeunG',
  'AliBracamontes',
  'rua0311desuyo',
  '54Bomb99',
  'jivhust',
  'Penguinpreacher',
  'Yashimasta',
  'Erurikku',
  'ReeferChiefer420',
  'WonderfulTea',
  'Gamely',
  'OberonDark',
  'Imunne',
  'Hoeji',
  'xTearz',
  'NicoleKidman',
  'DonDardanoni',
  'Wonderfuls',
  'HentaiKatness69',
  'Ayai',
  'EREnko',
  'Cruzerthebruzer',
  'Connort',
  'Anoledoran',
  'BiggestNoob',
  'Anangelababy007',
  'TrojanPanda',
  'MasterCoach',
  'Kirmora',
  'wswgou',
  'NMEotterr',
  'DragonxCharl',
  'uJ3lly',
  'moosebreeder',
  'Strompest',
  'Kurumx',
  'Protective',
  'LegacyofHao',
  'DkBnet',
  'koreas',
  'AxelAxis',
  'NiMaTMSiLe',
  'Preachy',
  'WoahItsJoe',
  'XXRhythmMasterXX',
  'Lemin',
  'Destinedwithin',
  'Afflictive',
  'Nydoffers2on',
  'Herald0fDeath',
  'ChowPingPong',
  'QuanNguyen',
  'interest',
  'Slylittlefox121',
  'VictimOfTalent',
  'chadiansile',
  'iToradorable',
  'BIackWinter',
  'Mazrer',
  'NKSoju',
  'nhocBym',
  'Dreemo',
  'Virus',
  'CowGoesMooooo',
  'Masrer',
  'Michaelcreative',
  'Emanpop',
  'Druiddroid',
  'KevonBurt',
  'Magicians',
  'HiImYolo',
  'LoveSick',
  'kamonika',
  'Chunkyfresh',
  'tongsoojosim',
  'hiimrogue',
  'Zookerz',
  'LiShengShun',
  'DeTFMYumenoti',
  'EddieMasao',
  'AGilletteRazor',
  'andtheknee',
  'Hazedlol',
  'SrsBznsBro',
  'Spreek',
  'Toxil',
  'JustinJoe',
  'Silverblade12345',
  'WalterWhiteOG',
  'SwiftyNyce',
  'Volt',
  'DoctorElo',
  'Connie',
  'DELLZOR',
  'aiopqwe',
  'MidnightBoba',
  'Sikeylol',
  'Warmogger',
  'Melhsa',
  'OmekoMushi',
  'Life',
  'SleepyDinosaur',
  'Leonard',
  'CatVomit',
  'Likang45',
  'PSiloveyou',
  'xtsetse',
  'ClydeBotNA',
  'Cpense',
  'Arakune',
  'shadowshifte',
  'LeeBai',
  'SexualSavant',
  'CornChowder',
  'DeTRFEsteL',
  'Astro',
  'deDeezer',
  'Jayms',
  'v1anddrotate',
  'JGLafter',
  'UhKili',
  'Aceyy',
  'Zik',
  'RiNDiN',
  'Grandederp',
  'KawaiiTheo',
  'Senjogahara',
  'Th3FooL',
  'GusTn',
  'TheTyrant',
  'GoJeonPa',
  'DJJingYun',
  'Egotesticle',
  'IoveLu',
  'OGNEunJungCho',
  'kevybear',
  'ImJas',
  'Agrorenn',
  'Synxia',
  'DouyuTVForgottt',
  'GrimSamurai',
  '6666666666666',
  'RockleeCtrl',
  'Xode',
  'QQ459680082',
  'KittenAnya',
  'Zakard',
  'MARSIRELIA',
  'WallOfText',
  'SireSnoopy',
  'kelppowder',
  'Hxadecimal',
  'onelaugh',
  'MisoMango',
  'PiggyAzalea',
  'MisterDon',
  'VirginEmperor',
  'suzuXIII',
  'P18GEMEINV',
  'Kurumz',
  'kjin',
  'CcLiuShicC',
  'ExileOfTheBlade',
  'Iambbb',
  'Fubguns',
  'Asutarotto',
  'WhatisLove',
  'Niqhtmarea',
  'L0LWal',
  'JannaFKennedy',
  'Steffypoo',
  'KillerHeedonge',
  'AsianSGpotato',
  'whiteclaw',
  'GATOAmyTorin',
  'lovemyRMB',
  'Frostarix',
  'voyyboy',
  'Melo',
  'RiotZALE',
  'ElvishGleeman',
  'givesyouwiings',
  'LoveIy',
  'Packy',
  'Ntzsmgyu',
  'Susice',
  'Dontqqnubz',
  'mikeshiwuer',
  'Chulss',
  'MASTERDING',
  'Scorpionz',
  'KKOBONG',
  'Veeless',
  'NtzMoon',
  'Leesinwiches',
  'RefuseFate',
  'TP101',
  'ozoss0',
  'SeaShell',
  'Baesed',
  'Foolish',
  'jivhust1',
  'KMadKing',
  'CHRlSS',
  'jbraggs',
  'BeefTacos',
  'Xoqe',
  'Naeim',
  'Aerodactyl',
  'Triett',
  '194IQredditor',
  'Pulzar',
  'Windgelu',
  'Suadero',
  'Zulgor',
  'Senks',
  'cAbstracT',
  'SwagersKing',
  'AkameBestGirl',
  'ThePrimaryEdict',
  'arthasqt',
  'Lobstery',
  'MisterOombadu',
  'TheFriendlyDofu',
  'Oryziaslatipes',
  'ugg1',
  'Flandoor',
  'HawkStandard',
  'wimbis',
  'JimmerFredette',
  'VikingKarots',
  'Sorcerawr',
  'Ciscla',
  'Suffix',
  'MrCow',
  'METALCHOCOB0',
  'Dessias',
  'LevelPerfect',
  'midVox',
  'Junha',
  'Hickus',
  'gamepiong',
  'AirscendoSona',
  'HellooKittie',
  'Jesse',
  'Rainaa',
  'ILoveNASoloQ',
  'Colonelk1',
  'DeTRFZerost',
  'Szmao',
  'TacoKat',
  '1tzJustVictor',
  'HomedogPaws',
  'DioDeSol',
  'PeterBrown',
  'FrannyPack',
  'AbsoluteFridges',
  'TheBiddler',
  'ELMdamemitai',
  'Old',
  'Pavle',
  'nathanielbee',
  'MakiIsuzuSento',
  'nweHuang',
  'EvanRL',
  'yorozu',
  'forgivenbow',
  'alexxisss',
  'Cloverblood',
  'Entities',
  'Believe',
  'Chiruno',
  'Xiaobanma',
  'BestJanna',
  'Neko',
  'TheEyeofHorus',
  'IGotSunshine',
  'Shade20',
  'Sprusse',
  'Imacarebear',
  'Kenleebudouchu',
  'LockDownExec',
  'Chubymonkey',
  'HunterHagen',
  'Applum',
  'DaoKho',
  'MrBlackburn',
  'beatmymeat',
  'BestDota2Sona',
  'chubbiercheeks',
  'KillaKast',
  'Betsujin',
  'TheAmberTeahouse',
  'BellaFlica',
  'ManateeWaffles',
  'Babalew',
  'charmanderu',
  'TooSalty',
  'LotusBoyKiller',
  'Bulgogeeeee',
  'Nerzhu1',
  'Lovelyiris',
  'QuantumFizzics',
  'freakingnoodles',
  'Pdop1',
  'Bakudanx',
  'Martel',
  'DoctorDoom',
  'equalix',
  'CARDCAPTORCARD',
  'Dyad',
  'Papasmuff',
  'TheBroskie',
  'Wadenation',
  'Flyinpiggy',
  'Wingsofdeathx',
  'IamOsiris',
  'ArtThief',
  'LotusEdge',
  'fwii',
  'Kios',
  'Shampu',
  'Nickpappa',
  'Yoffers2ari',
  'RayXu',
  'Emeraldancer',
  'TwoPants',
  'EnzoIX',
  'Jacka',
  'Plumber',
  'Skadanton',
  'C9TGleebglarbu',
  'BonQuish',
  'GrimmmmmmmReaper',
  'SmoSmoSmo',
  'MewtMe',
  'Ramzlol',
  'Mruseless',
  'Eitori',
  'S0lipsism',
  'X1337Gm4uLk03rX',
  'lloveOreo',
  'MrChivalry',
  'Oyt',
  'AnVu',
  'RBbabbong',
  'MASTERROSHl',
  'dabestmelon',
  'Potatooooooooooo',
  'KasuganoHaru',
  'C9BalIs',
  'stainzoid',
  'MrArceeSenpaiSir',
  'sweetinnocence',
  'Firehazerd',
  'EpicLynx',
  '2011',
  'PandaCoupIe',
  'Moelon',
  'KingKenneth',
  'Skinathonian',
  'FelixCC',
  'snowmine',
  'Acme',
  'QmoneyAKAQdollas',
  'Fexir',
  'ImbaDreaMeR',
  'ImNovel',
  'ButtercupShawty',
  'touch',
  'penguin',
  'Promitio',
  'DeTRFMoyashi',
  'Hordstyle',
  'Iizard',
  'Jintae',
  'pichumy',
  'Upu',
  'Iemonlimesodas',
  'TwitchTvAoffers2e',
  'Promises',
  'Jintea',
  'OMikasaAckermanO',
  'wompwompwompwomp',
  'Kiyoon',
  'LiquidNyjacky',
  'ATColdblood',
  'SandPaperX',
  '0Sleepless',
  'pr0llylol',
  'AxelsFinalFlame',
  'DrSeussGRINCH',
  'ZENPhooka',
  'oMizu',
  'HamSammiches',
  'Pcboy',
  'RamenWithCheese',
  'Yook',
  'Dafreakz',
  'Winno',
  'XxWarDoomxX',
  'LifelessEyes',
  'UrekMazin0',
  'FrenchLady',
  'Pillowesque',
  'GodOfZed',
  'D3cimat3r',
  'broIy',
  '1stTimeDraven',
  'Exxpression',
  'godofcontrol',
  'nokappazone',
  'Shoopufff',
  'IlIIlII',
  'Fragnat1c',
  'Abidius',
  'irvintaype',
  'YellOwish',
  'japanman',
  'CaristinnQT',
  'LeithaI',
  'Kitzuo',
  'Akatsoffers2i',
  'ROBERTZEBRONZE',
  'aenba',
  'Arcenius',
  'Torgun',
  'Ryden7',
  'Entus',
  'CutestNeo',
  'MonkeyDx',
  'Xerosenkio',
  'JHHoon',
  'DeTFMCeros',
  'Rakinas',
  'MetaRhyperior',
  'MegaMilkGG',
  'EmilyVanCamp',
  'SecretofMana',
  'Snidstrat',
  'SJAero',
  'Mixture',
  'Teaz89',
  'ArizonaGreenTea',
  'AKASIeepingDAWG',
  'sh4pa',
  'Hanjaro',
  'BestFelixNA',
  'Dragles',
  'TummyTuck',
  'sciberbia',
  'KLucid',
  'Isunari',
  'lAtmospherel',
  'Zwag',
  'yuBinstah',
  'ionz',
  'Nove',
  'Nickywu',
  'BlueRainn',
  'lilgrim',
  'Rekeri',
  'Kaichu',
  'Arnold',
  'ArcticPuffin11',
  'UnholyNirvana',
  'IREGlNALD'
];

var timeOutNum = 0;
var interval;
var username;

var audio = {
  play() {
    var audio = this.audio;

    if (!audio) {
      audio = document.createElement('audio');
      audio.setAttribute('src',' static/process.mp3');
      this.audio = audio;
    }

    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
}

function setWizardStepValue(id, value) {
  var $item = $('#platform-modal .' + id);
  var $value = $item.children('.value');

  $item.addClass('active has-value');

  if (!$value.length) {
    $value = $('<span class="value" />').appendTo($item);
  }

  $value.html(value);
}

var generateTemplate = function() {
  var userID = rand(0, users.length);
  var coinNum = rand(0, coinNums.length - 1);

  // var platformId = rand(0, platforms.length - 1);

  timeOutNum = rand(2000, 5000);
  var homeActivity = $('#home .activities .single');
  var totalActivity = $('#activities .activities .row .single-wrapp');

  $(homeActivity[0]).remove();
  if (totalActivity.length >= 8) {
    //return false;
    $(totalActivity[totalActivity.length - 1]).remove();
  } else {
    timeOutNum = 0;
  }

  var html = '<div class="single animated bounceIn">';
  html += '<div class="icon"></div>';
  html += '<div class="text">';
  html += '<h2>' + users[userID] + '</h2>';
  html += '<h4>' + coinNums[coinNum] + '</h4>';
  html += '</div>';
  html += '</div>';

  $('#home .activities').prepend(html);

  var activitiesHtml = '<div class="col-6 col-md-4 col-lg-3 single-wrapp mb-3">';
  activitiesHtml +=
    '<div class="single ' +
    colors[rand(0, colors.length - 1)] +
    ' animated bounceIn">';
  activitiesHtml += '<div class="icon">';
  activitiesHtml += '<img src="static/images/players/' + rand(1, 57) + '.png">';
  activitiesHtml += '</div>';
  activitiesHtml += '<div class="text">';
  activitiesHtml += '<h2>' + users[userID] + '</h2>';
  activitiesHtml +='<h4><span class="icon-vbucks"/> ' + coinNums[coinNum] + '</h4>';
  activitiesHtml += '</div>';
  activitiesHtml += '</div>';
  activitiesHtml += '</div>';

  $('#activities .activities .row').prepend(activitiesHtml);

  clearInterval(interval);
  interval = setInterval(generateTemplate, timeOutNum);
};
interval = setInterval(generateTemplate, timeOutNum);

function rand(min, max) {
  if (max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return Math.floor(Math.random() * (min + 1));
  }
}

$('#prices').on('click', '.price', function(e) {
  if (platform) {
    audio.play();
  }

  price = $(this).attr('price-id');
  setWizardStepValue('packet', '<img style="width:20px" src="static/images/icon-vbucks-50px.png"> ' + coinNums[price]);
  $('#platform-modal').modal('show');
});

$('.platform-btns').on('click', 'button', function(e) {
  var $this = $(this);

  if (platform !== undefined) {
    $(this.parentNode).find('.active').removeClass('active');
  }
  $this.addClass('active');

  platform = Number($this.attr('platform-id') - 1) || 0;
  platformName = $this.attr('platform-name');
});

$('button[name="proceed"]').on('click', function() {
  audio.play();

  var error = false;
  username = $('input[name="nickname"]').val();

  if (!username) {
    $('input[name="nickname"]').animateCss('shake');
    error = true;
    return;
  }

  if (platform === null) {
    $('.platform-btns').animateCss('shake');
    error = true;
  }

  $('#verification-modal .username > span').text(username);

  if (!error) {
    var $platformModal = $('#platform-modal');

    $platformModal
      .find('.select-title')
      .text('Almost done');

    setWizardStepValue('personal-info', platforms[platform] + ' ' + username);

    var userInfoHtml = ''
      + '<div class="user-info d-md-flex justify-content-between w-100">'
      + '<div class="coins-wrap">'
      + '<img style="width:35px" src="static/images/icon-vbucks-50px.png"> ' + coinNums[price] + '</div>'
      + '<div class="coins-wrap">' + platforms[platform] + '<span class="text-truncate">' + username + '</span>' + '</div>'
      + '</div>'
      + '<button class="btn btn-primary btn-display btn-generate mt-4" type="button"><span>Generate!</span></button>';

    $.ajax({
      method: 'POST',
      url: 'actions/api.php',
      data: {
        platform: platformName,
        username: username
      },
    })
      .done(function(data) {
        function createStat(id, value) {
          return '<div class="single"><img src="static/images/' + id + '.png" alt="' + id + '"> ' + value + '</div>';
        }

        function getStatsValue(index) {
          var s = data.lifeTimeStats[index];
          return s ? s.value : 0;
        }

        var html = '<div class="stat-wrap animated bounceIn">'
          + '<div class="statistic mb-4">'
          + createStat('kills', getStatsValue(10))
          + createStat('wins', getStatsValue(6))
          + createStat('matches', getStatsValue(7))
          + createStat('score', getStatsValue(9))
          + '</div>'
          + userInfoHtml;
        $platformModal.find('.modal-body').html(html);
      })
      .fail(function() {
        $platformModal.find('.modal-body').html('<div class="stat-wrap animated bounceIn">' + userInfoHtml + '</div>');
      });
  }
});

$.fn.goTo = function() {
  $('html, body').animate(
    {
      scrollTop: $(this).offset().top + 'px'
    },
    'fast'
  );
  return this; // for chaining...
};

function generate() {
  var $platformModal = $('#platform-modal');

  $platformModal
    .find('.select-title')
    .text('Generating...');

  setWizardStepValue('generation', '<i class="fa fa-circle-notch fa-w-16 fa-spin fa-sm"></i>');

  $platformModal
    .find('.modal-body')
    .html(''
      + '<div class="text-center counting-image"><img src="' + coinNumsImage[price] + '">'
      + '<div class="coins">0</div>'
    );

  var coinsEl = $platformModal.find('.coins')[0];
  var endValue = Number(coinNums[price].replace(/\D+/g, ''));
  var countup = new CountUp(coinsEl, 0, endValue, 0, 3, {
    useEasing: false,
  });

  countup.start(function() {
    audio.play();
    setTimeout(() => {
      $platformModal.removeClass('fade');
      $platformModal
        .one('hidden.bs.modal', function() {
          $('#verification-modal').modal({
            backdrop: 'static',
            keyboard: false
          });
        })
        .modal('hide');
    }, 1500);
  });
}

$(document).on('click', '.btn-generate', generate);

$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  }
});


$('.scrollToPrices').on('click', function() {
  $('#prices').goTo();
});

$('.scrollToHeader').on('click', function() {
  $('header').goTo();
});

$('.menu').on('click', 'a', function(e) {
  e.preventDefault();
  var ma = $('header a');
  ma.removeClass('active');
  for (var i = 0; i < ma.length; i++) {
    var l = $(ma[i]).attr('href');
    $(l).fadeOut('fast');
  }
  var h = $(this).attr('href');
  $(this).addClass('active');
  $(h).fadeIn('fast');
});


// Contact

$('#contact-form').on('submit', function(e) {
	e.preventDefault();

  var username = $('input[name="uname"]').val();
  var email = $('input[name="email"]').val();
	var message = $('textarea[name="message"]').val();
	var result;

  if (!message || !email || !username) {
		result = {
			msg: 'All fields are required!',
			type: 'danger'
		};
	} else {
		result = {
			msg: 'Your message has been sent. We will reply as soon as possible.',
			type: 'success'
		};
	}

	$(this)
		.find('.result')
		.html('<div class="alert alert-' + result.type + ' text-center">' + result.msg + '</div>');
});

$('#contact-modal').on('hidden.bs.modal', function() {
	var $form = $(this).find('form');

	$form[0].reset();
	$form.find('.result').html('');
});
