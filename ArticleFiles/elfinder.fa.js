﻿/**
 * Persian translation
 * @author Translator Vahid Nasiri <vahid_nasiri@yahoo.com>
 * @version 2013-02-23
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.fa = {
		translator : 'Vahid Nasiri &lt;vahid_nasiri@yahoo.com&gt;',
		language   : 'Persian',
		direction  : 'rtl',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'خطا',
			'errUnknown'           : 'خطایی رخ داده است.',
			'errUnknownCmd'        : 'دستور صادر شده شناسایی نشد.',
			'errJqui'              : 'جی‌کوئری یو آی نصب شده ناقص است.',
			'errNode'              : 'ابتدا نیاز است عناصر صفحه وهله سازی شوند.',
			'errURL'               : 'آدرس اتصال به سرور در تنظیمات ذکر نشده است.',
			'errAccess'            : 'عدم دسترسی.',
			'errConnect'           : 'امکان اتصال به سرور وجود ندارد.',
			'errAbort'             : 'اتصال خاتمه یافت.',
			'errTimeout'           : 'در این لحظه امکان اتصال به سرور وجود ندارد.',
			'errNotFound'          : 'سرور یافت نشد.',
			'errResponse'          : 'پاسخ دریافتی از سرور قابل پردازش نیست.',
			'errConf'              : 'تنظیمات سرور صحیح نیستند.',
			'errJSON'              : 'ماژول جی‌سون نصب نیست.',
			'errNoVolumes'         : 'مسیر قابل خواندنی تعریف نشده است.',
			'errCmdParams'         : 'پارامتر ارسالی برای دستور فوق معتبر نیست "$1".',
			'errDataNotJSON'       : 'داده به فرمت جی‌سون نیست.',
			'errDataEmpty'         : 'داده‌ای دریافت نشد.',
			'errCmdReq'            : 'نام دستوری ذکر نشده است.',
			'errOpen'              : 'امکان گشودن مسیر فوق نیست "$1".',
			'errNotFolder'         : 'شیء انتخابی یک پوشه نیست.',
			'errNotFile'           : 'شیء انتخابی یک فایل نیست.',
			'errRead'              : 'امکان خواندن مسیر فوق وجود ندارد "$1".',
			'errWrite'             : 'امکان نوشتن در مسیر فوق وجود ندارد "$1".',
			'errPerm'              : 'عدم دسترسی.',
			'errLocked'            : '"$1" قفل شده است و امکان تغییر نام یا مکان آن وجود ندارد.',
			'errExists'            : 'فایلی به نام "$1" بر روی سرور موجود است.',
			'errInvName'           : 'نام فایل معتبر نیست.',
			'errFolderNotFound'    : 'پوشه مورد نظر یافت نشد.',
			'errFileNotFound'      : 'فایل مورد نظر یافت نشد.',
			'errTrgFolderNotFound' : 'پوشه "$1" یافت نشد.',
			'errPopup'             : 'مرورگر وب شما امکان باز کردن صفحات پاپ‌آپ را بسته است.',
			'errMkdir'             : 'امکان ایجاد پوشه فوق نیست "$1".',
			'errMkfile'            : 'امکان ایجاد فایل فوق نیست "$1".',
			'errRename'            : 'امکان تغییر نام فوق وجود ندارد "$1".',
			'errCopyFrom'          : 'امکان و دسترسی کپی فایل‌ها از مسیر "$1" وجود ندارد.',
			'errCopyTo'            : 'امکان و دسترسی کپی فایل‌ها به مسیر "$1" وجود ندارد.',
			'errUploadCommon'      : 'آپلود فایل موفقیت آمیز نبود.',
			'errUpload'            : 'امکان آپلود فایل فوق وجود ندارد "$1".',
			'errUploadNoFiles'     : 'لطفا برای آپلود، فایلی را انتخاب کنید.',
			'errMaxSize'           : 'حجم ارسالی بیش از حد مقرر شده است.',
			'errFileMaxSize'       : 'حجم ارسالی بیش از حد مقرر شده است.',
			'errUploadMime'        : 'استفاده از یک چنین نوع فایلی مجاز نیست.',
			'errUploadTransfer'    : '"$1" خطای انتقال.', 
			'errSave'              : 'امکان ذخیره سازی "$1" وجود ندارد.',
			'errCopy'              : 'امکان کپی "$1" وجود ندارد.',
			'errMove'              : 'امکان تغییر مکان "$1" وجود ندارد.',
			'errCopyInItself'      : 'امکان کپی "$1" بر روی خودش وجود ندارد.',
			'errRm'                : 'امکان حذف "$1" وجود ندارد.',
			'errExtract'           : 'امکان استخراج فایل‌ها از "$1" وجود ندارد.',
			'errArchive'           : 'امکان ایجاد فایل آرشیو وجود ندارد.',
			'errArcType'           : 'نوع فایل آرشیو انتخابی پشتیبانی نمی‌شود.',
			'errNoArchive'         : 'فایل انتخابی، آرشیو نیست یا نوع پشتیبانی شده‌ای ندارد.',
			'errCmdNoSupport'      : 'سرور این دستور را پشتیبانی نمی‌کند.',
			'errReplByChild'       : 'پوشه “$1” با آیتمی که در آن است قابل جایگزینی نیست.',
			'errArcSymlinks'       : 'امکان باز کردن فایل آرشیو درخواستی به دلایل امنیتی وجود ندارد.', // edited 24.06.2012
			'errArcMaxSize'        : 'حجم فایل‌های آرشیو از حجم مجاز مقرر شده بیشتر است.',
			'errResize'            : 'امکان تغییر اندازه "$1" وجود ندارد.',
			'errUsupportType'      : 'این نوع فایل، پشتیبانی نمی‌شود.',
			'errNotUTF8Content'    : 'فایل "$1" یونیکد نبوده و قابل ویرایش نیست.',  // added 9.11.2011
			'errNetMount'          : 'امکان استفاده از مسیر "$1" نیست.',     // added 17.04.2012
			'errNetMountNoDriver'  : 'پروتکل درخواستی پشتیبانی نمی‌شود.',     // added 17.04.2012
			'errNetMountFailed'    : 'استفاده از مسیر نگاشت شده با شکست مواجه شد.',             // added 17.04.2012
			'errNetMountHostReq'   : 'هاست مشخص نیست.', // added 18.04.2012
			/******************************* commands names ********************************/
			'cmdarchive'   : 'ایجاد آرشیو',
			'cmdback'      : 'بازگشت',
			'cmdcopy'      : 'کپی',
			'cmdcut'       : 'برش',
			'cmddownload'  : 'دریافت فایل',
			'cmdduplicate' : 'ایجاد کپی معادل',
			'cmdedit'      : 'ویرایش فایل',
			'cmdextract'   : 'استخراج فایل‌ها از آرشیو',
			'cmdforward'   : 'حرکت به جلو',
			'cmdgetfile'   : 'انتخاب فایل‌ها',
			'cmdhelp'      : 'درباره',
			'cmdhome'      : 'خانه',
			'cmdinfo'      : 'اطلاعات بیشتر',
			'cmdmkdir'     : 'ایجاد پوشه جدید',
			'cmdmkfile'    : 'ایجاد فایل متنی جدید',
			'cmdopen'      : 'گشودن',
			'cmdpaste'     : 'چسباندن',
			'cmdquicklook' : 'پیش نمایش',
			'cmdreload'    : 'بارگذاری مجدد',
			'cmdrename'    : 'تغییر نام',
			'cmdrm'        : 'حذف',
			'cmdsearch'    : 'جستجوی فایل‌ها',
			'cmdup'        : 'بازگشت به ریشه',
			'cmdupload'    : 'ارسال فایل‌ها به سرور',
			'cmdview'      : 'مشاهده',
			'cmdresize'    : 'تغییر اندازه فایل تصویری',
			'cmdsort'      : 'مرتب سازی',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'بستن',
			'btnSave'   : 'ذخیره',
			'btnRm'     : 'حذف',
			'btnApply'  : 'اعمال',
			'btnCancel' : 'لغو',
			'btnNo'     : 'خیر',
			'btnYes'    : 'بلی',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'گشودن پوشه',
			'ntffile'     : 'گشودن فایل',
			'ntfreload'   : 'بارگذاری مجدد محتویات پوشه',
			'ntfmkdir'    : 'در حال ایجاد پوشه‌ها',
			'ntfmkfile'   : 'در حال ایجاد فایل‌ها',
			'ntfrm'       : 'حذف فایل‌ها',
			'ntfcopy'     : 'کپی فایل‌ها',
			'ntfmove'     : 'انتقال فایل‌ها',
			'ntfprepare'  : 'آماده کپی فایل‌ها',
			'ntfrename'   : 'تغییر نام فایل‌ها',
			'ntfupload'   : 'در حال ارسال فایل‌ها',
			'ntfdownload' : 'در حال دریافت فایل‌ها',
			'ntfsave'     : 'ذخیره فایل‌ها',
			'ntfarchive'  : 'در حال ایجاد آرشیو',
			'ntfextract'  : 'در حال استخراج فایل‌ها از آرشیو',
			'ntfsearch'   : 'در حال جستجوی فایل‌ها',
			'ntfsmth'     : 'در حال انجام عملیات >_<',
			'ntfloadimg'  : 'بارگذاری تصاویر',
			'ntfnetmount' : 'در حال اتصال به مسیری در شبکه', // added 18.04.2012
			
			/************************************ dates **********************************/
			'dateUnknown' : 'ناشناس',
			'Today'       : 'امروز',
			'Yesterday'   : 'دیروز',
			'Jan'         : 'Jan',
			'Feb'         : 'Feb',
			'Mar'         : 'Mar',
			'Apr'         : 'Apr',
			'May'         : 'May',
			'Jun'         : 'Jun',
			'Jul'         : 'Jul',
			'Aug'         : 'Aug',
			'Sep'         : 'Sep',
			'Oct'         : 'Oct',
			'Nov'         : 'Nov',
			'Dec'         : 'Dec',
			'January'     : 'January',
			'February'    : 'February',
			'March'       : 'March',
			'April'       : 'April',
			'May'         : 'May',
			'June'        : 'June',
			'July'        : 'July',
			'August'      : 'August',
			'September'   : 'September',
			'October'     : 'October',
			'November'    : 'November',
			'December'    : 'December',
			'Sunday'      : 'یک شنبه', 
			'Monday'      : 'دو شنبه', 
			'Tuesday'     : 'سه شنیه', 
			'Wednesday'   : 'چهار شنبه', 
			'Thursday'    : 'پنج شنبه', 
			'Friday'      : 'جمعه', 
			'Saturday'    : 'شنبه',
			'Sun'         : 'یک شنبه', 
			'Mon'         : 'دو شنبه', 
			'Tue'         : 'سه شنبه', 
			'Wed'         : 'چهارشنبه', 
			'Thu'         : 'پنج شنبه', 
			'Fri'         : 'جمعه', 
			'Sat'         : 'شنبه',
			/******************************** sort variants ********************************/
			'sortname'          : 'بر اساس نام', 
			'sortkind'          : 'بر اساس نوع', 
			'sortsize'          : 'بر اساس اندازه',
			'sortdate'          : 'بر اساس تاریخ',
			'sortFoldersFirst'  : 'لیست پوشه‌ها', // added 22.06.2012
			
			/********************************** messages **********************************/
			'confirmReq'      : 'لطفا تائید کنید',
			'confirmRm'       : 'آیا نسبت به حذف فایل‌ها مطمئن هستید؟<br/>این‌کار قابل بازگشت نیست!',
			'confirmRepl'     : 'فایل قدیمی با فایل جدید جایگزین شود?',
			'apllyAll'        : 'اعمال به همه',
			'name'            : 'نام',
			'size'            : 'اندازه',
			'perms'           : 'دسترسی',
			'modify'          : 'تاریخ ویرایش',
			'kind'            : 'نوع',
			'read'            : 'خواندن',
			'write'           : 'نوشتن',
			'noaccess'        : 'عدم دسترسی',
			'and'             : 'و',
			'unknown'         : 'ناشناس',
			'selectall'       : 'انتخاب تمام فایل‌ها',
			'selectfiles'     : 'انتخاب فایل‌ها',
			'selectffile'     : 'انتخاب اولین فایل',
			'selectlfile'     : 'انتخاب آخرین فایل',
			'viewlist'        : 'نمایش به صورت لیست',
			'viewicons'       : 'نمایش به صورت آیکون‌ها',
			'places'          : 'مکان‌ها',
			'calc'            : 'محاسبه', 
			'path'            : 'مسیر',
			'aliasfor'        : 'نام مستعار برای',
			'locked'          : 'قفل شده',
			'dim'             : 'ابعاد',
			'files'           : 'فایل‌ها',
			'folders'         : 'پوشه‌ها',
			'items'           : 'فايل‌ها',
			'yes'             : 'بله',
			'no'              : 'خیر',
			'link'            : 'پیوند',
			'searcresult'     : 'نتایج جستجو',  
			'selected'        : 'آیتم‌های انتخابی',
			'about'           : 'درباره',
			'shortcuts'       : 'میانبرها',
			'help'            : 'راهنما',
			'webfm'           : 'مدیریت فایل تحت وب',
			'ver'             : 'نگارش',
			'protocolver'     : 'نگارش پروتکل',
			'homepage'        : 'خانه پروژه',
			'docs'            : 'مستندات',
			'github'          : 'آدرس گیت‌هاب',
			'twitter'         : 'ما را در توئیتر دنبال کنید',
			'facebook'        : 'به ما در فیس بوک ملحق شوید',
			'team'            : 'گروه',
			'chiefdev'        : 'توسعه دهنده اصلی',
			'developer'       : 'توسعه دهنده',
			'contributor'     : 'شرکت کننده در پروژه',
			'maintainer'      : 'نگهداری کننده',
			'translator'      : 'مترجم',
			'icons'           : 'آیکون‌ها',
			'dontforget'      : 'و مراقب باشید',
			'shortcutsof'     : 'میانبرها غیرفعال شده‌اند',
			'dropFiles'       : 'فایل‌ها را اینجا رها کنید',
			'or'              : 'یا',
			'selectForUpload' : 'فایل‌ها را برای ارسال به سرور انتخاب کنید',
			'moveFiles'       : 'انتقال فایل‌ها',
			'copyFiles'       : 'کپی فایل‌ها',
			'rmFromPlaces'    : 'حذف از مکان‌ها',
			'untitled folder' : 'پوشه بدون نام',
			'untitled file.txt' : 'فایل بدون نام.txt',
			'aspectRatio'     : 'نسبت ابعاد',
			'scale'           : 'مقیاس',
			'width'           : 'عرض',
			'height'          : 'طول',
			'mode'            : 'حالت',
			'resize'          : 'تغییر اندازه',
			'crop'            : 'تغییر ابعاد به میزان انتخاب شده',
			'rotate'          : 'چرخش',
			'rotate-cw'       : 'چرخش 90 درجه در جهت عقربه‌های ساعت',
			'rotate-ccw'      : 'چرخش 90 درجه برخلاف جهت عقربه‌های ساعت',
			'degree'          : 'درجه',
			'netMountDialogTitle' : 'استفاده از درایو شبکه', // added 18.04.2012
			'protocol'            : 'پروتکل', // added 18.04.2012
			'host'                : 'هاست', // added 18.04.2012
			'port'                : 'درگاه', // added 18.04.2012
			'user'                : 'کاربر', // added 18.04.2012
			'pass'                : 'کلمه عبور', // added 18.04.2012
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'ناشناس',
			'kindFolder'      : 'پوشه',
			'kindAlias'       : 'نام مستعار',
			'kindAliasBroken' : 'نام مستعار غیرقابل قبول',
			// applications
			'kindApp'         : 'Application',
			'kindPostscript'  : 'Postscript document',
			'kindMsOffice'    : 'Microsoft Office document',
			'kindMsWord'      : 'Microsoft Word document',
			'kindMsExcel'     : 'Microsoft Excel document',
			'kindMsPP'        : 'Microsoft Powerpoint presentation',
			'kindOO'          : 'Open Office document',
			'kindAppFlash'    : 'Flash application',
			'kindPDF'         : 'Portable Document Format (PDF)',
			'kindTorrent'     : 'Bittorrent file',
			'kind7z'          : '7z archive',
			'kindTAR'         : 'TAR archive',
			'kindGZIP'        : 'GZIP archive',
			'kindBZIP'        : 'BZIP archive',
			'kindZIP'         : 'ZIP archive',
			'kindRAR'         : 'RAR archive',
			'kindJAR'         : 'Java JAR file',
			'kindTTF'         : 'True Type font',
			'kindOTF'         : 'Open Type font',
			'kindRPM'         : 'RPM package',
			// texts
			'kindText'        : 'Text document',
			'kindTextPlain'   : 'Plain text',
			'kindPHP'         : 'PHP source',
			'kindCSS'         : 'Cascading style sheet',
			'kindHTML'        : 'HTML document',
			'kindJS'          : 'Javascript source',
			'kindRTF'         : 'Rich Text Format',
			'kindC'           : 'C source',
			'kindCHeader'     : 'C header source',
			'kindCPP'         : 'C++ source',
			'kindCPPHeader'   : 'C++ header source',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Python source',
			'kindJava'        : 'Java source',
			'kindRuby'        : 'Ruby source',
			'kindPerl'        : 'Perl script',
			'kindSQL'         : 'SQL source',
			'kindXML'         : 'XML document',
			'kindAWK'         : 'AWK source',
			'kindCSV'         : 'Comma separated values',
			'kindDOCBOOK'     : 'Docbook XML document',
			// images
			'kindImage'       : 'Image',
			'kindBMP'         : 'BMP image',
			'kindJPEG'        : 'JPEG image',
			'kindGIF'         : 'GIF Image',
			'kindPNG'         : 'PNG Image',
			'kindTIFF'        : 'TIFF image',
			'kindTGA'         : 'TGA image',
			'kindPSD'         : 'Adobe Photoshop image',
			'kindXBITMAP'     : 'X bitmap image',
			'kindPXM'         : 'Pixelmator image',
			// media
			'kindAudio'       : 'Audio media',
			'kindAudioMPEG'   : 'MPEG audio',
			'kindAudioMPEG4'  : 'MPEG-4 audio',
			'kindAudioMIDI'   : 'MIDI audio',
			'kindAudioOGG'    : 'Ogg Vorbis audio',
			'kindAudioWAV'    : 'WAV audio',
			'AudioPlaylist'   : 'MP3 playlist',
			'kindVideo'       : 'Video media',
			'kindVideoDV'     : 'DV movie',
			'kindVideoMPEG'   : 'MPEG movie',
			'kindVideoMPEG4'  : 'MPEG-4 movie',
			'kindVideoAVI'    : 'AVI movie',
			'kindVideoMOV'    : 'Quick Time movie',
			'kindVideoWM'     : 'Windows Media movie',
			'kindVideoFlash'  : 'Flash movie',
			'kindVideoMKV'    : 'Matroska movie',
			'kindVideoOGG'    : 'Ogg movie'
		}
	}
}