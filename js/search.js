!function(e){"use strict";var i={pips:function(i){function s(i){if(!p.option("disabled")){var s,l,t,n,a,o=e(i).data("value"),r=p.element;if(p.options.values&&p.options.values.length){for(n=l=r.slider("values"),t=jQuery.map(l,function(e){return Math.abs(e-o)}),a=Math.min.apply(Math,t),s=0;s<t.length;s++)t[s]===a&&(n[s]=o,u.eq(s).trigger("focus.selectPip"));r.slider("values",n),f.range(n)}else u.trigger("focus.selectPip"),r.slider("value",o),f.single(o)}}function l(i){var s,l,n=i,a="ui-slider-pip",o="";"first"===i?n=0:"last"===i&&(n=r);var u=p.options.min+p.options.step*n,f=u.toString().replace(".","-");if(s="array"===e.type(d.labels)?d.labels[n]||"":"object"===e.type(d.labels)?"first"===i?d.labels.first||"":"last"===i?d.labels.last||"":"array"===e.type(d.labels.rest)?d.labels.rest[n-1]||"":u:u,"first"===i?(l="0%",a+=" ui-slider-pip-first",a+="label"===d.first?" ui-slider-pip-label":"",a+=!1===d.first?" ui-slider-pip-hide":""):"last"===i?(l="100%",a+=" ui-slider-pip-last",a+="label"===d.last?" ui-slider-pip-label":"",a+=!1===d.last?" ui-slider-pip-hide":""):(l=(100/r*i).toFixed(4)+"%",a+="label"===d.rest?" ui-slider-pip-label":"",a+=!1===d.rest?" ui-slider-pip-hide":""),a+=" ui-slider-pip-"+f,p.options.values&&p.options.values.length)for(t=0;t<p.options.values.length;t++)u===p.options.values[t]&&(a+=" ui-slider-pip-initial-"+(t+1),a+=" ui-slider-pip-selected-"+(t+1));else u===p.options.value&&(a+=" ui-slider-pip-initial",a+=" ui-slider-pip-selected");return o="horizontal"===p.options.orientation?"left: "+l:"bottom: "+l,'<span class="'+a+'" style="'+o+'"><span class="ui-slider-line"></span><span class="ui-slider-label" data-value="'+u+'">'+d.formatLabel(s)+"</span></span>"}var t,n,a,p=this,o="",r=(p.options.max-p.options.min)/p.options.step,u=p.element.find(".ui-slider-handle"),d={first:"label",last:"label",rest:"pip",labels:!1,prefix:"",suffix:"",step:r>100?Math.floor(.05*r):1,formatLabel:function(e){return this.prefix+e+this.suffix}};e.extend(d,i),p.options.pipStep=d.step,p.element.addClass("ui-slider-pips").find(".ui-slider-pip").remove();var f={single:function(e){this.resetClasses(),a.filter(".ui-slider-pip-"+e).addClass("ui-slider-pip-selected")},range:function(e){for(this.resetClasses(),t=0;t<e.length;t++)a.filter(".ui-slider-pip-"+e[t]).addClass("ui-slider-pip-selected-"+(t+1))},resetClasses:function(){a.removeClass(function(e,i){return(i.match(/(^|\s)ui-slider-pip-selected(\S+|\s|$)/g)||[]).join(" ")})}};for(p.options.pipStep=Math.round(p.options.pipStep),o+=l("first"),n=1;r>n;n++)n%p.options.pipStep===0&&(o+=l(n));o+=l("last"),p.element.append(o),a=p.element.find(".ui-slider-pip"),p.element.on("mouseup.selectPip",".ui-slider-label",function(e){e.stopPropagation(),s(this)}),p.element.on("slide.selectPip slidechange.selectPip",function(i,s){var l,t,n=e(this);s?s.values?f.range(s.values):f.single(s.value):(l=n.slider("value"),t=n.slider("values"),t.length?f.range(t):f.single(l))})}};e.extend(!0,e.ui.slider.prototype,i)}(jQuery),function(e){"use strict";var i={"float":function(i){function s(i){var s=[],n=jQuery.map(i,function(e){return Math.ceil((e-t.options.min)/t.options.step)});if("array"===e.type(p.labels))for(l=0;l<i.length;l++)s[l]=p.labels[n[l]]||i[l];else if("object"===e.type(p.labels))for(l=0;l<i.length;l++)s[l]=i[l]===t.options.min?p.labels.first||t.options.min:i[l]===t.options.max?p.labels.last||t.options.max:"array"===e.type(p.labels.rest)?p.labels.rest[n[l]-1]||i[l]:i[l];else for(l=0;l<i.length;l++)s[l]=i[l];return s}var l,t=this,n=[],a=t.element.find(".ui-slider-handle"),p={handle:!0,pips:!1,labels:!1,prefix:"",suffix:"",event:"slidechange slide",formatLabel:function(e){return this.prefix+e+this.suffix}};if(e.extend(p,i),t.options.value<t.options.min&&(t.options.value=t.options.min),t.options.value>t.options.max&&(t.options.value=t.options.max),t.options.values&&t.options.values.length)for(l=0;l<t.options.values.length;l++)t.options.values[l]<t.options.min&&(t.options.values[l]=t.options.min),t.options.values[l]>t.options.max&&(t.options.values[l]=t.options.max);if(t.element.addClass("ui-slider-float").find(".ui-slider-tip, .ui-slider-tip-label").remove(),p.handle)for(n=s(t.options.values&&t.options.values.length?t.options.values:[t.options.value]),l=0;l<n.length;l++)a.eq(l).append(e('<span class="ui-slider-tip">'+p.formatLabel(n[l])+"</span>"));p.pips&&t.element.find(".ui-slider-label").each(function(i,l){var t,n,a=e(l),o=[a.data("value")];t=p.formatLabel(s(o)[0]),n=e('<span class="ui-slider-tip-label">'+t+"</span>").insertAfter(a)}),"slide"!==p.event&&"slidechange"!==p.event&&"slide slidechange"!==p.event&&"slidechange slide"!==p.event&&(p.event="slidechange slide"),t.element.on(p.event,function(i,l){var t="array"===e.type(l.value)?l.value:[l.value],n=p.formatLabel(s(t)[0]);e(l.handle).find(".ui-slider-tip").html(n)})}};e.extend(!0,e.ui.slider.prototype,i)}(jQuery);/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) { 
if (typeof define === 'function' && define.amd) { 
 // AMD. Register as an anonymous module. 
 define(['jquery'], factory); 
 } else if (typeof exports === 'object') { 
 // Node/CommonJS 
 factory(require('jquery')); 
 } else { 
 // Browser globals 
 factory(window.jQuery || window.Zepto); 
 } 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;

		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;

		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},


	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		}

		var eName = 'click.magnificPopup';
		options.mainEl = el;

		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}

		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},

	defaults: {

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);

		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};

/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}

			return template;
		}
	}
});

/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}

					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});

			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery';

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					arrowLeft.click(function() {
						mfp.prev();
					});
					arrowRight.click(function() {
						mfp.next();
					});

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/
 _checkInstance(); }));/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011â€“2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map//     Backbone.js 1.2.2

//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(factory) {

  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = (typeof self == 'object' && self.self == self && self) ||
            (typeof global == 'object' && global.global == global && global);

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore'), $;
    try { $ = require('jquery'); } catch(e) {}
    factory(root, exports, _, $);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to a common array method we'll want to use later.
  var slice = Array.prototype.slice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.2.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... this will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Proxy Backbone class methods to Underscore functions, wrapping the model's
  // `attributes` object or collection's `models` array behind the scenes.
  //
  // collection.filter(function(model) { return model.get('age') > 10 });
  // collection.each(this.addView);
  //
  // `Function#apply` can be slow so we use the method's arg count, if we know it.
  var addMethod = function(length, method, attribute) {
    switch (length) {
      case 1: return function() {
        return _[method](this[attribute]);
      };
      case 2: return function(value) {
        return _[method](this[attribute], value);
      };
      case 3: return function(iteratee, context) {
        return _[method](this[attribute], cb(iteratee, this), context);
      };
      case 4: return function(iteratee, defaultVal, context) {
        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
      };
      default: return function() {
        var args = slice.call(arguments);
        args.unshift(this[attribute]);
        return _[method].apply(_, args);
      };
    }
  };
  var addUnderscoreMethods = function(Class, methods, attribute) {
    _.each(methods, function(length, method) {
      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
    });
  };

  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
  var cb = function(iteratee, instance) {
    if (_.isFunction(iteratee)) return iteratee;
    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
    return iteratee;
  };
  var modelMatcher = function(attrs) {
    var matcher = _.matches(attrs);
    return function(model) {
      return matcher(model.attributes);
    };
  };

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // a custom event channel. You may bind a callback to an event with `on` or
  // remove with `off`; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {};

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Iterates over the standard `event, callback` (as well as the fancy multiple
  // space-separated events `"change blur", callback` and jQuery-style event
  // maps `{event: callback}`).
  var eventsApi = function(iteratee, events, name, callback, opts) {
    var i = 0, names;
    if (name && typeof name === 'object') {
      // Handle event maps.
      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
      for (names = _.keys(name); i < names.length ; i++) {
        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
      }
    } else if (name && eventSplitter.test(name)) {
      // Handle space separated event names by delegating them individually.
      for (names = name.split(eventSplitter); i < names.length; i++) {
        events = iteratee(events, names[i], callback, opts);
      }
    } else {
      // Finally, standard events.
      events = iteratee(events, name, callback, opts);
    }
    return events;
  };

  // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.
  Events.on = function(name, callback, context) {
    return internalOn(this, name, callback, context);
  };

  // Guard the `listening` argument from the public API.
  var internalOn = function(obj, name, callback, context, listening) {
    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
        context: context,
        ctx: obj,
        listening: listening
    });

    if (listening) {
      var listeners = obj._listeners || (obj._listeners = {});
      listeners[listening.id] = listening;
    }

    return obj;
  };

  // Inversion-of-control versions of `on`. Tell *this* object to listen to
  // an event in another object... keeping track of what it's listening to
  // for easier unbinding later.
  Events.listenTo =  function(obj, name, callback) {
    if (!obj) return this;
    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var listening = listeningTo[id];

    // This object is not listening to any other events on `obj` yet.
    // Setup the necessary references to track the listening callbacks.
    if (!listening) {
      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
    }

    // Bind callbacks on obj, and keep track of them on listening.
    internalOn(obj, name, callback, this, listening);
    return this;
  };

  // The reducing API that adds a callback to the `events` object.
  var onApi = function(events, name, callback, options) {
    if (callback) {
      var handlers = events[name] || (events[name] = []);
      var context = options.context, ctx = options.ctx, listening = options.listening;
      if (listening) listening.count++;

      handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
    }
    return events;
  };

  // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.
  Events.off =  function(name, callback, context) {
    if (!this._events) return this;
    this._events = eventsApi(offApi, this._events, name, callback, {
        context: context,
        listeners: this._listeners
    });
    return this;
  };

  // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.
  Events.stopListening =  function(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;

    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

    for (var i = 0; i < ids.length; i++) {
      var listening = listeningTo[ids[i]];

      // If listening doesn't exist, this object is not currently
      // listening to obj. Break out early.
      if (!listening) break;

      listening.obj.off(name, callback, this);
    }
    if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

    return this;
  };

  // The reducing API that removes a callback from the `events` object.
  var offApi = function(events, name, callback, options) {
    if (!events) return;

    var i = 0, listening;
    var context = options.context, listeners = options.listeners;

    // Delete all events listeners and "drop" events.
    if (!name && !callback && !context) {
      var ids = _.keys(listeners);
      for (; i < ids.length; i++) {
        listening = listeners[ids[i]];
        delete listeners[listening.id];
        delete listening.listeningTo[listening.objId];
      }
      return;
    }

    var names = name ? [name] : _.keys(events);
    for (; i < names.length; i++) {
      name = names[i];
      var handlers = events[name];

      // Bail out if there are no events stored.
      if (!handlers) break;

      // Replace events if there are any remaining.  Otherwise, clean up.
      var remaining = [];
      for (var j = 0; j < handlers.length; j++) {
        var handler = handlers[j];
        if (
          callback && callback !== handler.callback &&
            callback !== handler.callback._callback ||
              context && context !== handler.context
        ) {
          remaining.push(handler);
        } else {
          listening = handler.listening;
          if (listening && --listening.count === 0) {
            delete listeners[listening.id];
            delete listening.listeningTo[listening.objId];
          }
        }
      }

      // Update tail event if the list has any events.  Otherwise, clean up.
      if (remaining.length) {
        events[name] = remaining;
      } else {
        delete events[name];
      }
    }
    if (_.size(events)) return events;
  };

  // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, its listener will be removed. If multiple events
  // are passed in using the space-separated syntax, the handler will fire
  // once for each event, not once for a combination of all events.
  Events.once =  function(name, callback, context) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
    return this.on(events, void 0, context);
  };

  // Inversion-of-control versions of `once`.
  Events.listenToOnce =  function(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
    return this.listenTo(obj, events);
  };

  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it has been called.
  var onceMap = function(map, name, callback, offer) {
    if (callback) {
      var once = map[name] = _.once(function() {
        offer(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
    }
    return map;
  };

  // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).
  Events.trigger =  function(name) {
    if (!this._events) return this;

    var length = Math.max(0, arguments.length - 1);
    var args = Array(length);
    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

    eventsApi(triggerApi, this._events, name, void 0, args);
    return this;
  };

  // Handles triggering the appropriate event callbacks.
  var triggerApi = function(objEvents, name, cb, args) {
    if (objEvents) {
      var events = objEvents[name];
      var allEvents = objEvents.all;
      if (events && allEvents) allEvents = allEvents.slice();
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, [name].concat(args));
    }
    return objEvents;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId(this.cidPrefix);
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // The prefix is used to create the client id which is used to identify models locally.
    // You may want to override this if you're experiencing name clashes with model ids.
    cidPrefix: 'c',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Special-cased proxy to underscore's `_.matches` method.
    matches: function(attrs) {
      return !!_.iteratee(attrs, this)(this.attributes);
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      var unset      = options.unset;
      var silent     = options.silent;
      var changes    = [];
      var changing   = this._changing;
      this._changing = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }

      var current = this.attributes;
      var changed = this.changed;
      var prev    = this._previousAttributes;

      // For each `set` attribute, update or delete the current value.
      for (var attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          changed[attr] = val;
        } else {
          delete changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Update the `id`.
      this.id = this.get(this.idAttribute);

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0; i < changes.length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      var changed = {};
      for (var attr in diff) {
        var val = diff[attr];
        if (_.isEqual(old[attr], val)) continue;
        changed[attr] = val;
      }
      return _.size(changed) ? changed : false;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server, merging the response with the model's
    // local attributes. Any changed attributes will trigger a "change" event.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (!model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true, parse: true}, options);
      var wait = options.wait;

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      var model = this;
      var success = options.success;
      var attributes = this.attributes;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
        if (serverAttrs && !model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      // Set temporary attributes if `{wait: true}` to properly find new ids.
      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch' && !options.attrs) options.attrs = attrs;
      var xhr = this.sync(method, this, options);

      // Restore attributes.
      this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      var wait = options.wait;

      var destroy = function() {
        model.stopListening();
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (wait) destroy();
        if (success) success.call(options.context, model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      var xhr = false;
      if (this.isNew()) {
        _.defer(options.success);
      } else {
        wrapError(this, options);
        xhr = this.sync('delete', this, options);
      }
      if (!wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      var id = this.get(this.idAttribute);
      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.defaults({validate: true}, options));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model, mapped to the
  // number of arguments they take.
  var modelMethods = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
      omit: 0, chain: 1, isEmpty: 1 };

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  addUnderscoreMethods(Model, modelMethods, 'attributes');

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analogous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Splices `insert` into `array` at index `at`.
  var splice = function(array, insert, at) {
    var tail = Array(array.length - at);
    var length = insert.length;
    for (var i = 0; i < tail.length; i++) tail[i] = array[i + at];
    for (i = 0; i < length; i++) array[i + at] = insert[i];
    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
  };

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model) { return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set. `models` may be Backbone
    // Models or raw JavaScript objects to be converted to Models, or any
    // combination of the two.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      options = _.extend({}, options);
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      var removed = this._removeModels(models, options);
      if (!options.silent && removed) this.trigger('update', this, options);
      return singular ? removed[0] : removed;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      if (models == null) return;

      options = _.defaults({}, options, setOptions);
      if (options.parse && !this._isModel(models)) models = this.parse(models, options);

      var singular = !_.isArray(models);
      models = singular ? [models] : models.slice();

      var at = options.at;
      if (at != null) at = +at;
      if (at < 0) at += this.length + 1;

      var set = [];
      var toAdd = [];
      var toRemove = [];
      var modelMap = {};

      var add = options.add;
      var merge = options.merge;
      var remove = options.remove;

      var sort = false;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      var model;
      for (var i = 0; i < models.length; i++) {
        model = models[i];

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        var existing = this.get(model);
        if (existing) {
          if (merge && model !== existing) {
            var attrs = this._isModel(model) ? model.attributes : model;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
          }
          if (!modelMap[existing.cid]) {
            modelMap[existing.cid] = true;
            set.push(existing);
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(model, options);
          if (model) {
            toAdd.push(model);
            this._addReference(model, options);
            modelMap[model.cid] = true;
            set.push(model);
          }
        }
      }

      // Remove stale models.
      if (remove) {
        for (i = 0; i < this.length; i++) {
          model = this.models[i];
          if (!modelMap[model.cid]) toRemove.push(model);
        }
        if (toRemove.length) this._removeModels(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      var orderChanged = false;
      var replace = !sortable && add && remove;
      if (set.length && replace) {
        orderChanged = this.length != set.length || _.some(this.models, function(model, index) {
          return model !== set[index];
        });
        this.models.length = 0;
        splice(this.models, set, 0);
        this.length = this.models.length;
      } else if (toAdd.length) {
        if (sortable) sort = true;
        splice(this.models, toAdd, at == null ? this.length : at);
        this.length = this.models.length;
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0; i < toAdd.length; i++) {
          if (at != null) options.index = at + i;
          model = toAdd[i];
          model.trigger('add', model, this, options);
        }
        if (sort || orderChanged) this.trigger('sort', this, options);
        if (toAdd.length || toRemove.length) this.trigger('update', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options = options ? _.clone(options) : {};
      for (var i = 0; i < this.models.length; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      return this.remove(model, options);
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      return this.remove(model, options);
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
      return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      if (index < 0) index += this.length;
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      return this[first ? 'find' : 'filter'](attrs);
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      var comparator = this.comparator;
      if (!comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      var length = comparator.length;
      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

      // Run sort based on type of `comparator`.
      if (length === 1 || _.isString(comparator)) {
        this.models = this.sortBy(comparator);
      } else {
        this.models.sort(comparator);
      }
      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success.call(options.context, collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      var wait = options.wait;
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp, callbackOpts) {
        if (wait) collection.add(model, callbackOpts);
        if (success) success.call(callbackOpts.context, model, resp, callbackOpts);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator
      });
    },

    // Define how to uniquely identify models in the collection.
    modelId: function (attrs) {
      return attrs[this.model.prototype.idAttribute || 'id'];
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method called by both remove and set.
    _removeModels: function(models, options) {
      var removed = [];
      for (var i = 0; i < models.length; i++) {
        var model = this.get(models[i]);
        if (!model) continue;

        var index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;

        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }

        removed.push(model);
        this._removeReference(model, options);
      }
      return removed.length ? removed : false;
    },

    // Method for checking whether an object should be considered a model for
    // the purposes of adding to the collection.
    _isModel: function (model) {
      return model instanceof Model;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      var id = this.modelId(model.attributes);
      if (id != null) this._byId[id] = model;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      delete this._byId[model.cid];
      var id = this.modelId(model.attributes);
      if (id != null) delete this._byId[id];
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (event === 'change') {
        var prevId = this.modelId(model.previousAttributes());
        var id = this.modelId(model.attributes);
        if (prevId !== id) {
          if (prevId != null) delete this._byId[prevId];
          if (id != null) this._byId[id] = model;
        }
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var collectionMethods = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 4,
      foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3,
      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
      sortBy: 3, indexBy: 3};

  // Mix in each Underscore method as a proxy to `Collection#models`.
  addUnderscoreMethods(Collection, collectionMethods, 'models');

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be set as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this._removeElement();
      this.stopListening();
      return this;
    },

    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    _removeElement: function() {
      this.$el.remove();
    },

    // Change the view's element (`this.el` property) and re-delegate the
    // view's events on the new element.
    setElement: function(element) {
      this.undelegateEvents();
      this._setElement(element);
      this.delegateEvents();
      return this;
    },

    // Creates the `this.el` and `this.$el` references for this view using the
    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
    // context or an element. Subclasses can override this to utilize an
    // alternative DOM manipulation API and are only required to set the
    // `this.el` property.
    _setElement: function(el) {
      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
      this.el = this.$el[0];
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    delegateEvents: function(events) {
      events || (events = _.result(this, 'events'));
      if (!events) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[method];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], _.bind(method, this));
      }
      return this;
    },

    // Add a single event listener to the view's element (or a child element
    // using `selector`). This only works for delegate-able events: not `focus`,
    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
    delegate: function(eventName, selector, listener) {
      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Clears all callbacks previously bound to the view by `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // A finer-grained `undelegateEvents` for removing a single delegated event.
    // `selector` and `listener` are both optional.
    undelegate: function(eventName, selector, listener) {
      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    _createElement: function(tagName) {
      return document.createElement(tagName);
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        this.setElement(this._createElement(_.result(this, 'tagName')));
        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, 'el'));
      }
    },

    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    _setAttributes: function(attributes) {
      this.$el.attr(attributes);
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // Pass along `textStatus` and `errorThrown` from jQuery.
    var error = options.error;
    options.error = function(xhr, textStatus, errorThrown) {
      options.textStatus = textStatus;
      options.errorThrown = errorThrown;
      if (error) error.call(options.context, xhr, textStatus, errorThrown);
    };

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args, name) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    this.checkUrl = _.bind(this.checkUrl, this);

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.getSearch();
    },

    // Does the pathname match the root?
    matchRoot: function() {
      var path = this.decodeFragment(this.location.pathname);
      var root = path.slice(0, this.root.length - 1) + '/';
      return root === this.root;
    },

    // Unicode characters in `location.pathname` are percent encoded so they're
    // decoded for comparison. `%25` should not be decoded since it may be part
    // of an encoded parameter.
    decodeFragment: function(fragment) {
      return decodeURI(fragment.replace(/%25/g, '%2525'));
    },

    // In IE6, the hash fragment and search params are incorrect if the
    // fragment contains `?`.
    getSearch: function() {
      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
      return match ? match[0] : '';
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the pathname and search params, without the root.
    getPath: function() {
      var path = this.decodeFragment(
        this.location.pathname + this.getSearch()
      ).slice(this.root.length - 1);
      return path.charAt(0) === '/' ? path.slice(1) : path;
    },

    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function(fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error('Backbone.history has already been started');
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.history && this.history.pushState);
      this._usePushState    = this._wantsPushState && this._hasPushState;
      this.fragment         = this.getFragment();

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          var root = this.root.slice(0, -1) || '/';
          this.location.replace(root + '#' + this.getPath());
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), {replace: true});
        }

      }

      // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.
      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = 'javascript:0';
        this.iframe.style.display = 'none';
        this.iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = '#' + this.fragment;
      }

      // Add a cross-platform `addEventListener` shim for older browsers.
      var addEventListener = window.addEventListener || function (eventName, listener) {
        return attachEvent('on' + eventName, listener);
      };

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._usePushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener || function (eventName, listener) {
        return detachEvent('on' + eventName, listener);
      };

      // Remove window listeners.
      if (this._usePushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      }

      // Clean up the iframe if necessary.
      if (this.iframe) {
        document.body.removeChild(this.iframe);
        this.iframe = null;
      }

      // Some environments will throw when clearing an undefined interval.
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();

      // If the user pressed the back button, the iframe's hash will have
      // changed and we should use that for comparison.
      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe.contentWindow);
      }

      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      return _.some(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      // Normalize the fragment.
      fragment = this.getFragment(fragment || '');

      // Don't include a trailing slash on the root.
      var root = this.root;
      if (fragment === '' || fragment.charAt(0) === '?') {
        root = root.slice(0, -1) || '/';
      }
      var url = root + fragment;

      // Strip the hash and decode for matching.
      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._usePushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getHash(this.iframe.contentWindow))) {
          var iWindow = this.iframe.contentWindow;

          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if (!options.replace) {
            iWindow.document.open();
            iWindow.document.close();
          }

          this._updateHash(iWindow.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent` constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error.call(options.context, model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));
/*!

 handlebars v4.0.2

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsRuntime = __webpack_require__(2);

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	// Compiler imports

	var _handlebarsCompilerAst = __webpack_require__(21);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(22);

	var _handlebarsCompilerCompiler = __webpack_require__(27);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(28);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(25);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(20);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(4);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(18);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(6);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(19);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(20);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(7);

	var _decorators = __webpack_require__(15);

	var _logger = __webpack_require__(17);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.2';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(8);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(9);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(10);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(11);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(12);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(13);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(14);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      // Don't iterate over undefined values since we can't execute blocks against them
	      // in non-strict (js) mode.
	      if (context[field] == null) {
	        return;
	      }

	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          execIteration(i, i, i === context.length - 1);
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(16);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = logger.methodMap.indexOf(level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(4);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context !== depths[0]) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    partialBlock = options.data['partial-block'] = options.fn;

	    if (partialBlock.partials) {
	      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
	    }
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	exports.__esModule = true;
	exports.parse = parse;

	var _parser = __webpack_require__(23);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(24);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(26);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(5);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parse(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var strip = new _whitespaceControl2['default'](options);
	  return strip.accept(_parser2['default'].parse(input));
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	/* istanbul ignore next */
	/* Jison generated parser */
	"use strict";

	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [$$[$0]];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                    break;
	                case 2:
	                    this.popState();
	                    return 15;

	                    break;
	                case 3:
	                    this.begin('raw');return 15;
	                    break;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
	                        return 'END_RAW_BLOCK';
	                    }

	                    break;
	                case 5:
	                    return 15;
	                    break;
	                case 6:
	                    this.popState();
	                    return 14;

	                    break;
	                case 7:
	                    return 65;
	                    break;
	                case 8:
	                    return 68;
	                    break;
	                case 9:
	                    return 19;
	                    break;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;

	                    break;
	                case 11:
	                    return 55;
	                    break;
	                case 12:
	                    return 60;
	                    break;
	                case 13:
	                    return 29;
	                    break;
	                case 14:
	                    return 47;
	                    break;
	                case 15:
	                    this.popState();return 44;
	                    break;
	                case 16:
	                    this.popState();return 44;
	                    break;
	                case 17:
	                    return 34;
	                    break;
	                case 18:
	                    return 39;
	                    break;
	                case 19:
	                    return 51;
	                    break;
	                case 20:
	                    return 48;
	                    break;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;

	                    break;
	                case 23:
	                    return 48;
	                    break;
	                case 24:
	                    return 73;
	                    break;
	                case 25:
	                    return 72;
	                    break;
	                case 26:
	                    return 72;
	                    break;
	                case 27:
	                    return 87;
	                    break;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                    break;
	                case 30:
	                    this.popState();return 33;
	                    break;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                    break;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                    break;
	                case 33:
	                    return 85;
	                    break;
	                case 34:
	                    return 82;
	                    break;
	                case 35:
	                    return 82;
	                    break;
	                case 36:
	                    return 83;
	                    break;
	                case 37:
	                    return 84;
	                    break;
	                case 38:
	                    return 81;
	                    break;
	                case 39:
	                    return 75;
	                    break;
	                case 40:
	                    return 77;
	                    break;
	                case 41:
	                    return 72;
	                    break;
	                case 42:
	                    return 72;
	                    break;
	                case 43:
	                    return 'INVALID';
	                    break;
	                case 44:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports.__esModule = true;
	exports['default'] = handlebars;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _visitor = __webpack_require__(25);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substr(1, token.length - 2);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0,
	      depthString = '';

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	        depthString += '../';
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _ast = __webpack_require__(21);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    // These changes will propagate to the other compiler components
	    var knownHelpers = options.knownHelpers;
	    options.knownHelpers = {
	      'helperMissing': true,
	      'blockHelperMissing': true,
	      'each': true,
	      'if': true,
	      'unless': true,
	      'with': true,
	      'log': true,
	      'lookup': true
	    };
	    if (knownHelpers) {
	      for (var _name in knownHelpers) {
	        /* istanbul ignore else */
	        if (_name in knownHelpers) {
	          options.knownHelpers[_name] = knownHelpers[_name];
	        }
	      }
	    }

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name2 = sexpr.path.parts[0],
	          options = this.options;

	      if (options.knownHelpers[_name2]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _base = __webpack_require__(4);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _codeGen = __webpack_require__(29);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /* , type*/) {
	    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	      return [parent, '.', name];
	    } else {
	      return [parent, '[', JSON.stringify(name), ']'];
	    }
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend('var decorators = container.decorators;\n');
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    for (var alias in this.aliases) {
	      // eslint-disable-line guard-for-in
	      var node = this.aliases[alias];

	      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: [], types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name),
	        simple = isSimple ? [helper.name, ' || '] : '';

	    var lookup = ['('].concat(simple, nonHelper);
	    if (!this.options.strict) {
	      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
	    }
	    lookup.push(')');

	    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
	  },

	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var index = this.matchExistingProgram(child);

	      if (index == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	      } else {
	        child.index = index;
	        child.name = 'program' + index;

	        this.useDepths = this.useDepths || child.useDepths;
	        this.useBlockParams = this.useBlockParams || child.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return i;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [this.contextName(0)].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    var pairs = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var value = castChunk(obj[key], this);
	        if (value !== 'undefined') {
	          pairs.push([this.quotedString(key), ':', value]);
	        }
	      }
	    }

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;jQuery.autocomplete=function(a,i){var c=$(a).attr("autocomplete","off");i.inputClass&&c.addClass(i.inputClass);var n=document.createElement("div"),r=$(n);r.hide().addClass(i.resultsClass).css("position","absolute"),0<i.width&&r.css("width",i.width),$("body").append(n),a.autocompleter=this;var t=null,l="",u=-1,o={},s=!1,h=null;function f(){o={data:{},length:0}}if(f(),null!=i.data){var e,m={},d=[];"string"!=typeof i.url&&(i.cacheLength=1);for(var g,v=0;v<i.data.length;v++)0<(d="string"==typeof i.data[v]?[i.data[v]]:i.data[v])[0].length&&(m[e=d[0].substring(0,1).toLowerCase()]||(m[e]=[]),m[e].push(d));for(g in m)i.cacheLength++,O(g,m[g])}function C(e){var t=$("li",n);t&&((u+=e)<0?u=0:u>=t.size()&&(u=t.size()-1),t.removeClass("ac_over"),$(t[u]).addClass("ac_over"))}function p(e){e||((e=document.createElement("li")).extra=[],e.selectValue="");var t=$.trim(e.selectValue||e.innerHTML);0<=t.indexOf("<span>")&&(t=t.substring(t.indexOf("<span>")+6,t.indexOf("</span>"))),a.lastSelected=t,l=t,r.html(""),c.val(t),y(),i.onItemSelect&&setTimeout(function(){i.onItemSelect(e)},1)}function x(e){var t,a,n;8!=h&&(c.val(c.val()+e.substring(l.length)),t=l.length,a=e.length,(n=c.get(0)).createTextRange?((e=n.createTextRange()).collapse(!0),e.moveStart("character",t),e.moveEnd("character",a),e.select()):n.setSelectionRange?n.setSelectionRange(t,a):n.selectionStart&&(n.selectionStart=t,n.selectionEnd=a),n.focus())}function w(){var e=function(e){var t=e.offsetLeft||0,a=e.offsetTop||0;for(;e=e.offsetParent;)t+=e.offsetLeft,a+=e.offsetTop;return{x:t,y:a}}(a),t=0<i.width?i.width:c.width();r.css({width:parseInt(t)+"px",top:e.y+a.offsetHeight+"px",left:e.x+"px"}).show()}function y(){t&&clearTimeout(t),c.removeClass(i.loadingClass),r.is(":visible")&&r.hide(),i.mustMatch&&c.val()!=a.lastSelected&&p(null)}function L(e,t){if(t){if(c.removeClass(i.loadingClass),n.innerHTML="",!s||0==t.length)return y(),0;n.appendChild(function(e){var t=document.createElement("ul"),a=e.length;0<i.maxItemsToShow&&i.maxItemsToShow<a&&(a=i.maxItemsToShow);for(var n=0;n<a;n++){var r=e[n];if(r){var l=document.createElement("li");i.formatItem?l.innerHTML=i.formatItem(r,n,a):l.innerHTML=r[0],l.selectValue=r[0];var s=null;if(1<r.length){s=[];for(var o=1;o<r.length;o++)s[s.length]=r[o]}l.extra=s,t.appendChild(l),$(l).hover(function(){$("li",t).removeClass("ac_over"),$(this).addClass("ac_over"),u=$("li",t).indexOf($(this).get(0))},function(){$(this).removeClass("ac_over")}).click(function(e){e.preventDefault(),e.stopPropagation(),p(this)})}}return t}(t)),i.autoFill&&c.val().toLowerCase()==e.toLowerCase()&&x(t[0][0]),w()}else y()}function S(e){if(!e)return null;for(var t=[],a=e.split(i.lineSeparator),n=0;n<a.length;n++){var r=$.trim(a[n]);r&&(t[t.length]=r.split(i.cellSeparator))}return t}function T(e){var t,a;for(a in t=0<=i.url.indexOf("?")?i.url+"&q="+encodeURI(e):i.url+"?q="+encodeURI(e),i.extraParams)t+="&"+a+"="+encodeURI(i.extraParams[a]);return t}function b(e){if(!e)return null;if(o.data[e])return o.data[e];if(i.matchSubset)for(var t=e.length-1;t>=i.minChars;t--){var a=e.substr(0,t),n=o.data[a];if(n){for(var r=[],l=0;l<n.length;l++){var s=n[l];!function(e,t){i.matchCase||(e=e.toLowerCase());t=e.indexOf(t);return-1!=t&&(0==t||i.matchContains)}(s[0],e)||(r[r.length]=s)}return r}}return null}function I(e,t){t&&c.removeClass(i.loadingClass);for(var a=t?t.length:0,n=null,r=0;r<a;r++){var l=t[r];if(l[0].toLowerCase()==e.toLowerCase()){n=document.createElement("li"),i.formatItem?n.innerHTML=i.formatItem(l,r,a):n.innerHTML=l[0],n.selectValue=l[0];var s=null;if(1<l.length){s=[];for(var o=1;o<l.length;o++)s[s.length]=l[o]}n.extra=s}}i.onFindValue&&setTimeout(function(){i.onFindValue(n)},1)}function O(e,t){t&&e&&i.cacheLength&&(!o.length||o.length>i.cacheLength?(f(),o.length++):o[e]||o.length++,o.data[e]=t)}c.keydown(function(e){switch(h=e.keyCode,e.keyCode){case 38:e.preventDefault(),C(-1);break;case 40:e.preventDefault(),C(1);break;case 9:case 13:!function(){var e=$("li.ac_over",n)[0];{var t;e||(t=$("li",n),i.selectOnly?1==t.length&&(e=t[0]):i.selectFirst&&(e=t[0]))}return!!e&&(p(e),!0)}()||(c.get(0).blur(),e.preventDefault());break;default:u=-1,t&&clearTimeout(t),t=setTimeout(function(){var e;(e=c.val())!=l&&((l=e).length>=i.minChars?(c.addClass(i.loadingClass),function(t){i.matchCase||(t=t.toLowerCase()),i.cacheLength&&b(t),"string"==typeof i.url&&0<i.url.length?$.get(T(t),function(e){e=S(e),O(t,e),L(t,e)}):c.removeClass(i.loadingClass)}(e)):(c.removeClass(i.loadingClass),r.hide()))},i.delay)}}).on("focus",function(){s=!0}).on("blur",function(){s=!1,t&&clearTimeout(t),t=setTimeout(y,200)}),y(),this.flushCache=function(){f()},this.setExtraParams=function(e){i.extraParams=e},this.findValue=function(){var t=c.val();i.matchCase||(t=t.toLowerCase());var e=i.cacheLength?b(t):null;e?I(t,e):"string"==typeof i.url&&0<i.url.length?$.get(T(t),function(e){e=S(e),O(t,e),I(t,e)}):I(t,null)}},jQuery.fn.autocomplete=function(e,t,a){return(t=t||{}).url=e,t.data="object"==typeof a&&a.constructor==Array?a:null,t.inputClass=t.inputClass||"ac_input",t.resultsClass=t.resultsClass||"ac_results",t.lineSeparator=t.lineSeparator||"\n",t.cellSeparator=t.cellSeparator||"|",t.minChars=t.minChars||1,t.delay=t.delay||10,t.matchCase=t.matchCase||0,t.matchSubset=t.matchSubset||1,t.matchContains=t.matchContains||0,t.cacheLength=t.cacheLength||1,t.mustMatch=t.mustMatch||0,t.extraParams=t.extraParams||{},t.loadingClass=t.loadingClass||"ac_loading",t.selectFirst=t.selectFirst||!1,t.selectOnly=t.selectOnly||!1,t.maxItemsToShow=t.maxItemsToShow||-1,t.autoFill=t.autoFill||!1,t.width=parseInt(t.width,10)||0,this.each(function(){new jQuery.autocomplete(this,t)}),this},jQuery.fn.autocompleteArray=function(e,t){return this.autocomplete(null,t,e)},jQuery.fn.indexOf=function(e){for(var t=0;t<this.length;t++)if(this[t]==e)return t;return-1};

;(function ( $, window, document, undefined ) {

  /**  
     Nick DiGiovanni - 02.08.2017

     REQUIRES GOOGLE MAPS  - plugin wrapper for Goolge Maps autocomplete and SearchBox 

    
     TODD 
         1. Add functionality to allow this to be used with a map 
         2. Update functionality to work correctly with map when using the SearchBox class 
         3. Make the methods private that should be and data only accessible via listeners  
         4. Document this 

     
     SIMPLE USE EXAMPLE 
     $("#place").placesAutocomplete();
     
     <input type="text" namme="place" id="place" placeholder="Search for place">

     
     See me for more examples such as optional bounds, locationBiasing, binding to listeners 


   **/ 

   var pluginName = "placesAutocomplete",
       addressComponents = [
           "street_address"
         , "formatted_address"  
         , "route"
         , "intersection"
         , "political"
         , "country"
         , "administrative_area_level_1"
         , "administrative_area_level_2"
         , "administrative_area_level_3"
         , "administrative_area_level_4"
         , "administrative_area_level_5"
         , "colloquial_area"
         , "locality"
         , "ward"
         , "sublocality"
         , "neighborhood"
         , "premise"
         , "subpremise"
         , "postal_code"
         , "natural_feature"
         , "airport"
         , "park"
         , "point_of_interest"
         , "floor"
         , "establishment"
         , "parking"
         , "post_box"
         , "postal_town"
         , "room"
         , "street_number"
         , "bus_station"
         , "train_station"
         , "transit_station"
         , "lat"
         , "lng"
         , "bounds"
     ],
     detailComponents = [
           "adr_address"
         , "formatted_address"
         , "formatted_phone_number"
         , "international_phone_number"
         , "icon"
         , "id"
         , "hours"
         , "place_id"
         , "name"
         , "rating"
         , "types"
         , "website"
         , "url"
         , "utc_offset"
         , "vicinity"
     ]; 




   //Create our constructor 
   function PlacesAutocomlete (element, options) {

          //provide local access to the dom node that called this, the plugin name and default options 
          this.element = element; 
          this._name = pluginName; 
          this._defaults = $.fn.placesAutocomplete.defaults; 

          //merge the passed objects, deep copy,  leave the first object empty so we do not alter the default options for future instances of this plugin 
          this.options = $.extend(true, {}, this._defaults, options); 

          //initialize the plugin  
          // note initializing here in the constructor allows storing of all methods in the prototype lowering the memory footprint as each instance does not need to duplicate all of the same emethods 
          this.init(); 
   }



   //avoid PlacesAutocomple.conflicts 
   $.extend(PlacesAutocomlete.prototype, {


          init: function() {
               
               this.createGlobals(); 
               this.initServices();
               this.initPlaceDetails();
               this.bindEvents();

          },



          trigger: function(e, args) {
             this.$element.trigger(e, [args]);
          },



          //attach our events 
          bindEvents: function() {

              //stop from submitting on enter 
               this.$element.on('keypress.' + this._name, $.proxy(function(e){ 

                                    if( !this.selected && e.keyCode === 13 )

                                             return false;
                                      
                                      //unselect if any other key besides tab or enter is pressed once selection is pressed 
                                      else if( this.selected === true && e.keyCode !=9 && e.keyCode != 13 )
                                          
                                          this.selected = false; 

                                    }, this));


               //attempt to select first element if blurred 
               //this.$element.on('blur.' + this._name, $.proxy(function(e){ if(!this.selected) this.findPlace(this.findFirstMatch()); }, this));

               //add error listener for error on places detail request 
               this.$element.on('places:error.' + this._name, $.proxy(this.onError, this));

               //add listener for a place:result 
               this.$element.on('places:result.' + this._name,  $.proxy(this.onPlacesResult, this)); 

               this.$element.on('places:preload.' + this._name,  $.proxy(this.onPlacesPreLoad, this)); 
              
          },



          unbindEvents: function() {

               //Unbind all events in this namespace that are attached to this.$element 
               this.$element.off('.' + this._name);

               this.PlaceService.unbindAll();

               google.maps.event.clearInstanceListeners(this.PlaceService);
               google.maps.event.clearInstanceListeners(this.element); 

          },



          destroy: function() { 
               this.unbindEvents(); 
               this.$element.removeData();
          },


          //create variables to be accessed by other plugin functions 
          createGlobals: function() {

               //The available google places autocomplete classes are Autocomplete and SearchBox 
               var availableClasses = ["Autocomplete","SearchBox"]; 


                 //Default to AutoComplete
                 this.className = "Autocomplete"; 

                 //Default to not selected 
                 this.selected = false; 


                 //check for class and class is in available classes if not give warning 
                 if( !this.options.className || $.inArray(this.options.className, availableClasses) == -1 )
                    console.warn(this.options.className + " is not supported falling back to " + this.className);
                 else 
                    this.className = this.options.className;       

                 
                  /* 
                    For places Autocomplete Class when no bounds are set google will attempt to detect the loction using the users ip address and  biasing the result to that location but not limiting results to that location 
                    If not  locationBias and No Bounds Passed then create bounds of the entire world 
                   */
                  if( !this.options.locationBias && !this.options.bounds ) {

                     var LatLng = new google.maps.LatLng(-90, -180); 
                      this.options.bounds =  new google.maps.LatLngBounds( LatLng, LatLng );

                   } 

                 this.$element = $(this.element); 

                 //use to determine position when attempting to find .pac-items
                 this._idx = $(".x-places-autocomplete").length;
                 this.$element.addClass('x-places-autocomplete');

          },


        //initialize the service by class  and the Geocoder service 
        initServices: function() {
            var defaultFields = ["name","geometry.location","place_id","formatted_address","address_components"];
            var options  = { 
                 bounds: this.options.bounds === true ? null : this.options.bounds
                ,fields: this.options.fields === undefined ? defaultFields : this.options.fields
            },
            eventName = "place_changed",
            eventHandler = this.onPlaceChange; 


            if( this.className === "SearchBox" ){

                eventName = "places_changed"; 
                eventHandler = this.onPlacesChange; 

            }
            else {

                options.types = this.options.types;

            }

            if(  this.options.strictBounds === true )
                options.strictBounds = this.options.strictBounds; 


            this.PlaceService   = new google.maps.places[this.className](this.element, options);
            this.GeocodeService = new  google.maps.Geocoder(); 

            google.maps.event.addListener( this.PlaceService,  eventName, $.proxy(eventHandler, this));

        },




          //initalize the place details which maps the elements in your form/template to the google address and detail components 
          initPlaceDetails: function(){

               var details = {}, 
                   detailsAttribute = this.options.placeDetailAttribute,
                   $placeDetail; 

               //return if we do not have a place detail selector 
               if( !this.options.placeDetailSelector )
                    return; 

               //if we have a parent select attempt to find that otherwise find the detail selector 
               if( this.options.placeDetailParentSelector )
                    $placeDetail = $(this.element).parents(this.options.placeDetailParentSelector).find(this.options.placeDetailSelector);
               else 
                    $placeDetail = $(this.options.placeDetailSelector);  


                //warn if unable to find selector and return 
                if(!$placeDetail) {
                    console.warn("unable to find elements for selector " + placeDetailSelector); 
                    return; 
                }


                //this will tie the address components to the elmeents within our placeDetailSelector 
                function setPlaceDetail(v) {
                    details[v] = $placeDetail.find("[" + detailsAttribute + "=" + v + "]");    
                }


                //loop over our address components 
                $.each(addressComponents, function(idx, n) {
                     setPlaceDetail(n); 
                     setPlaceDetail(n + "_short"); 
                }); 


                //do the same for the detail components 
                $.each(detailComponents, function(idx, n){
                    setPlaceDetail(n); 
                })


                //cache them into our object 
                this.$placeDetail = $placeDetail; 
                this.placeDetails = details; 

          },



          //Attempts to find and select the first result 
          findFirstMatch: function() {

              //is there anything selected  
              var sel =  $(".pac-item-selected")[0] ? "-selected" : "",
                  pacContainer, pacItem; 

              //get the first items text 
              var txt1 = $(".pac-container:visible .pac-item" + sel + ":first span:nth-child(2)").text();
              var txt2 = $(".pac-container:visible .pac-item" + sel + ":first span:nth-child(3)").text();

              if( this.options.debugMode ) {
                console.log("findFirstMatch - txt1 ", txt1);
                console.log("findFirstMatch - txt2 ", txt2);
              }


              //attempt secondary look up checking for container at same index of input 
              if(!txt1.length){
                  pacContainer = $(".pac-container")[this._idx]; 
                  if(pacContainer){
                      pacItem = $(pacContainer).find(".pac-item")[0]; 
                      if(pacItem) {
                         txt1 = $(pacItem).find("span.pac-matched").text()  +  $(pacItem).find("pac-item-query").text();
                         txt2 = $(pacItem).find(":nth-child(3)").text(); 

                         if( this.options.debugMode ) {
                            console.log("findFirstMatch - 2 txt1 ", txt1);
                            console.log("findFirstMatch - 2 txt2 ", txt2);
                         }

                      }

                  }

              }


              //add the extra info if it exists 
              var text = txt1; 
              if(txt2)
                    text += " - " + txt2; 

                
               //Only update if autocomplete class  *** TODO How to get first result from  SearchBox class ? ** 
               if( this.className === "Autocomplete" ) 
                   this.$element.val(text); 

               
               return text; 

         },





         update: function(placeDetailObj) {

            this.trigger("places:result", placeDetailObj);

         },



         //checks for an address and if not uses the value in the element and sends a geocode request   
         findPlace: function(address) { 

             this.sendGeocodeRequest({ address: address || this.$element.val() });
         },




         //this will send the address to googles geocode service and return details about the place 
         sendGeocodeRequest: function(place) {


             //exit if we do not have an address   should we use a name search when SearchBox ? 
             if( !place.address )
                 return;  

             //if the place object does not have any bounds and we have bounds set attach them 
             if( !place.bounds && this.options.bounds )
                 place.bounds = this.options.bounds;  

             //check for and add region if exists 
             if( !place.region && this.options.region )
                 place.region = this.options.region; 

             this.GeocodeService.geocode(place, $.proxy(this.handleGeocodeResponse, this));

         }, 



         
         //handles Autocomplete place_changed event 
         onPlaceChange: function() { 

               this.selected = true;      
               var Place = this.PlaceService.getPlace(); 
             
               Place && Place.geometry ? this.update(Place) : this.findPlace(this.findFirstMatch());
               
         },



         //Handles SearchBox places_changed event  *** This needs further development as SearchBox is designed to highlight reults within a map or return numerous matching results **
         onPlacesChange: function() {

               this.selected = true;
               var Place = this.PlaceService.getPlaces(); 
               if(Place instanceof Array && Place.length === 1)
                   Place = Place[0];

               Place.geometry ? this.update(Place) : this.findPlace();

         },

         //allows the developer to invoke the geocode lookup on a preloaded place name, ie a city name passed in the URL
         onPlacesPreLoad: function(e){
           this.GeocodeService.geocode({ 'address': e.target.defaultValue }, $.proxy(this.handleGeocodeResponse, this));
         },

         //Handles the placesDetailObjec 
           //creates a simplified version of the google place detail object 
           //fires event places:data  (useful if you want the simple data object to populate the data elements yourself )
           //and if detail elements then updates any place detail elements  
         onPlacesResult: function(e, placeDetailObj) {
            
            var placeData = {}, geo, bounds, types; 
          
            //save off the geometry and bounds 
            geo    = placeDetailObj.geometry; 
            bounds = placeDetailObj.bounds; 
            types  = placeDetailObj.types ? placeDetailObj.types.join(',') : ""; 
            hours  =  ""; 

            //lets throw the hours in as a string if they are there 
            if(placeDetailObj.opening_hours && placeDetailObj.opening_hours.weekday_text)
               hours = placeDetailObj.opening_hours.weekday_text.join(',');



            //if the returned object has address componets then we will loop through them 
              //within the address components there are types  
                // we will loop through the types which we will use to create our place data object 
            if(placeDetailObj.address_components) {
                  
                  $.each(placeDetailObj.address_components, function(idx, addresObj){
                      $.each(addresObj.types, function(idx, typeName){

                            placeData[typeName]            = addresObj.long_name; 
                            placeData[typeName + "_short"] = addresObj.short_name;       

                      });


                    }); 

              } 

              
             //loop through our detail components and assign them to our data object 
             $.each(detailComponents, function(idx, name){
                 placeData[name] = placeDetailObj[name]; 
             });


             //add in the bounds, lat, lng, types 
             $.extend(placeData, {
                  bounds:   bounds,
                  lat: geo.location.lat(),
                  lng: geo.location.lng(),
                  location_type: geo.location_type || "Places",
                  types: types,
                  hours: hours
             });
             

             //update the elements if we have $placeDetail 
             if( this.$placeDetail ) {
              
                //loop over the place details and udpate our detail elements 
                $.each(this.placeDetails, $.proxy(function(n, $e){
                         this._updateDetailElement($e, placeData[n]);
                  }, this));

             }     

             //assign the data to this object                
             this.data = placeData; 


              //default the input value to the formatted address 
              var inputVal = placeData.formatted_address; 


              if( this.options.formatInputText ){

                   var types = placeData.types; 

                   //format if US for certain types looks cleaner than formatted address 
                   if( types && placeData.country_short == "US" ) {
                        
                        //Format for Airport name 
                        if( types.indexOf('airport') != -1 ) {
                              inputVal = placeData.name ? placeData.name : placeData.airport_short ? placeData.airport_short : placeData.establishment ? placeData.establishment : inputVal; 

                              if(inputVal != placeData.formatted_address)
                                   inputVal += (placeData.locality ? ", " + placeData.locality + ", " : "") + (placeData.administrative_area_level_1_short ? " "+ placeData.administrative_area_level_1_short : "");   

                        }
                        else if( (types.indexOf('store') != -1 || types.indexOf('establishment') != -1) && (placeData.name && placeData.formatted_address.indexOf(placeData.name) == -1) ){

                             inputVal = placeData.name + " " + placeData.formatted_address;  

                        }

                    }
                    else if( inputVal.indexOf(placeData.name) == -1 && placeData.name !== undefined){
                      inputVal = placeData.name + " " + placeData.formatted_address;                          
                    }
               }


               //set the value to the formatted address  if it exists 
               if(inputVal)
                    this.$element.val(inputVal);
             //trigger event 
             this.trigger('places:data', placeData);

         },



         //Handles the Geocode response
         handleGeocodeResponse: function(response, status) {
             
             var placeDetailObj; 


             //if the request came back successfully 
            if( status === google.maps.GeocoderStatus.OK ){


               //We are grabbing the first result what do we do if we get numerous resutls? 
               placeDetailObj = response[0];

               //set the state to selected 
               this.selected = true; 


               //call udpate to fire events 
               this.update(placeDetailObj);

                //TODO ** How to handle geocode results from SearchBox when multiple matches are found ?  **               

           } 
           
            else {
             
               //fire an Error 
               this.trigger("places:error", status, response);

               //log failed requests 
               $.ajax({
                    type: "GET",
                    url: "/common/cfcs/services/search.cfc", 
                    contentType: "application/json; charset=utf-8",                    
                    dataType: "json",
                    data: {
                         method       : 'logJsError',
                         msg          : "search string - " + this.$element.val(),
                         sourceClass  : 'places.autocomplete',
                         sourceMethod : 'handleGeocodeResponse',
                         status       : JSON.stringify(status), 
                         responseText : JSON.stringify(response)
                         
                    },
                    complete: function(response, status){
                         if(console) console.log("RESPONSE COMPLETE", response);
                    }
                });

           }

         },



         onError: function( status, response) {

            if(this.options.debugMode) {

                console.error("onError ", arguments);     

            }

         },


        

         //handles updating the elements from the place detail object 
         _updateDetailElement: function($element, val) {

               val = !val ? "" : typeof val.toUrlValue == "function" ? val.toUrlValue() : val; 
               
               if( $element.is(":input") ){
                      
                    $element.val(val);

               }     
               else if( $element.is("img") ){ 
                      
                    $element.attr('src', val);  

               }     
               else if( $element.is("a") ){  

                    $element.attr('href', val).text(val); 
               }         

               else {


                    //adr_address has html 
                    !/<[a-z][\s\S]*>/i.test(val) ? $element.text(val) :  $element.html(val) ;       


               }


         }



   });



   //create a lightweight wrapper around the constructor to prevent against multiple instantiations
   $.fn.placesAutocomplete = function ( options ){

     return this.each( function() {

          if( !$.data( this, "plugin_" + pluginName) ){

               // Use $.data to save each instance of the plugin in the event the user wants to modify it. 
               // note using $.data in this way  esures the data is removed when the DOM element(s) are removed via jQuery methods as well as when the user leaves the pages. It prevents memory leaks 
               $.data(this, "plugin_" + pluginName, new PlacesAutocomlete( this, options) ); 




          }

     }); 

   }



    //attach the default plugin options directly to the plugin object 
    // this allows setting the default options globally instead of passing the same options each time the plugin in initialized 
    $.fn.placesAutocomplete.defaults = {
          className                 : 'Autocomplete',
          types                     : [], 
          map                       : false, 
          bounds                    : null,
          strictBounds              : false,
          locationBias              : false,   
          placeDetailSelector       : false,  
          placeDetailParentSelector : null, 
          placeDetailAttribute      : "name",
          region                    : null,
          formatInputText           : true,
          debugMode                 : false 
    };



})(jQuery, window, document);"undefined"==typeof console&&(console={log:function(){},warn:function(){},error:function(){}});function showSortInformation(){$("#MainTable").show(),$("#SortByInfoModalBackground").show(),$("#SortByInfoContainer").show()}function hideSortInformation(){$("#SortByInfoModalBackground").hide(),$("#SortByInfoContainer").hide()}var app=function(){function e(e){return""==searchParams.eid?""==searchParams.gid?e.HotelDetailsLink:e.HotelDetailsLink+"&gid="+searchParams.gid:e.HotelDetailsLink+"&eid="+searchParams.eid}function t(e){return 18*parseFloat(e)}function a(e){var a="";if("en"==lang.language&&0<e&&1.5>e){var i=t(e);0<i&&(1>=Math.floor(i)?a=" / 1 minute walk":a=" / ~"+Math.floor(i)+" minutes walking")}return a}function r(){return"blackout"==d.stores[0].collection.errorMessage?"<div id=\"noHotelsFound\" class=\"noResultsFound\">"+lang.blackoutDatesError+"</div>":"<div id=\"noHotelsFound\" class=\"noResultsFound\">"+lang.noHotelsFound.replace("HPApp.getController('HotelSearch').resetAllFilters","searchApp.clearFilters")+"</div>"}function o(e){e=$(e);var t=$("<div id=\"mapHotelListToggleButton\"></div>"),a=$("<div><i class=\"fa fa-list-ul fa-2x\"></i></div>");t.append(a),t.on("click",function(){$("#mapViewTable").addClass("fullWidth"),$("#RatesGridContainer").addClass("fullWidth"),$("#searchResultsMap").addClass("noWidth")})}function s(e){e=$(e);var t=$("<div id=\"mapFullscreenToggleButton\"></div>");e.append(t);var a=$("<div><i class=\"fa fa-arrows-alt fa-2x\"></i></div>");t.append(a),t.on("click",function(){d.isFullscreen?d.exitFullscreenMap():d.enterFullscreenMap()})}function n(e){e=$(e);var t=$("<div id=\"mapBackButton\"></div>");e.append(t);var a=$("<div><span class=\"back\"><i class=\"fa fa-arrow-left\"></i> "+lang.back+"</span></div>");t.append(a),t.on("click",function(){d.toggleMapView()})}function l(e){if("undefined"!=typeof google){var t=e.replace("hotelGrid",""),a=d.hotelMarkers[t];google.maps.event.trigger(a,"click"),d.mapCoords.lat=parseFloat(a.getPosition().lat()),d.mapCoords.lng=parseFloat(a.getPosition().lng()),d.centerMap()}}var d=this;$.ajaxSetup({cache:!1}),searchParams.hasOwnProperty("isSeo")||(searchParams.isSeo=0),searchParams.hasOwnProperty("govPerDiem")||(searchParams.govPerDiem=0),$("#"+searchParams.jumpToDiv).length||(searchParams.jumpToDiv="Content"),this.resultsPerPage=0<searchParams.maxResults?searchParams.maxResults:50,this.currentPage=1,this.totalPages=0,this.searchCount=0,this.preloadCount=-1,this.view="results",this.isFullscreen=0,this.preloading=0,this.isFiltering=!1,this.stores=searchParams.stores,this.preloadStores=[],this.lastScrollY=0,this.layout="desktop",this.didInitMobileNav=0,this.isNavBtnsDisplayed=0,this.refreshResultsOnHideMobileFullscreenView=0,this.didAddFirstResult=!1,this.presearchCleanup=function(){};for(var c=0;c<d.stores.length;c++)this.preloadStores.push({baseUrl:this.stores[c].baseUrl,loading:1});for(var p in lastSearchParams={destination:"",checkIn:"",checkOut:"",numRooms:1,includeDiscountAuto:0,includeDiscountSenior:0,includeDiscountGovt:0,includeDiscountBiz:0},d.preloadSearchParams={},d.preloaded=!1,searchParams)lastSearchParams[p]=searchParams[p];this.defaultSearchParams={},this.defaultMapCoords={lat:25.77914,lng:-80.130951},this.mapCoords={lat:0,lng:0},this.customLandmark={lat:40.547947,lng:-74.799955,name:""},this.airports=[];var m=null,u=null,h=null,g=null,v=null,f=null,b=null;this.openAddressFormContainer=function(){if("mobile"==d.layout)$("#sort-by").hide(),$("#address-dialog-form").show();else{var e=$("#AddressFormModalBackground");d.disableScroll(),e.width($(window).width()),e.height($(window).height()),e.show();var t=$("#AddressFormContainer");t.show();var a=($(window).width()-t.width())/2+$(window).scrollLeft(),i=($(window).height()-t.height())/2+$(window).scrollTop();t.offset({top:i,left:a})}},this.closeAddressFormContainer=function(){"mobile"==d.layout||($("#AddressFormModalBackground").hide(),"map"!=d.view&&d.enableScroll(),$("#AddressFormContainer").hide())};var C=[lang.noRating,lang.terrible,lang.poor,lang.average,lang.veryGood,lang.excellent];Handlebars.registerHelper("formatCorporateRateInfo",function(e){return"corporate"==e.data.root.vendor?"<div class=\"corporateRateInfo\"><span>"+lang.corporateRateInfo+"</span></div>":""===searchResultBottomBanner?void 0:searchResultBottomBanner}),Handlebars.registerHelper("formatHotelDetailsLink",function(t){return e(t.data.root)}),Handlebars.registerHelper("formatComments",function(t){if(""!==t.data.root.Comments&&("tn"==t.data.root.vendor||"en"==lang.language))return new Handlebars.SafeString()}),Handlebars.registerHelper("formatGuestReview",function(e){return C[".5"==e.data.root.Review?1:parseInt(e.data.root.Review)]+" "+e.data.root.Review}),Handlebars.registerHelper("formatStarRating",function(e){var t=parseFloat(e.data.root.Rating),a="",i=Math.floor(t);for(rating=1;rating<=i;rating++)a+="<i class=\"fa fa-star\"></i>";return t>i&&(a+="<i class=\"fa fa-star-half-o\"></i>"),a}),Handlebars.registerHelper("showCallButton",function(e){return"abnb"==e.data.root.vendor?null:e.fn(this)}),Handlebars.registerHelper("showMeMoreButton",function(e){var t="";return t="abnb"==e.data.root.vendor?lang.GoToAirbnb:"vrbo"==e.data.root.vendor?lang.GoToVRBO:lang.showMeMore,t}),Handlebars.registerHelper("hotelReviewsLink",function(t){return e(t.data.root)+"#Reviews"}),Handlebars.registerHelper("formatHotelName",function(e){return e.data.root.HotelName.toUpperCase()}),Handlebars.registerHelper("formatValueAdds",function(e){var t=e.data.root.ValueAdds||"",a=e.data.root.SecondaryLine||"";return""==t?t=a:""!=a&&(t=a+", "+t),""!=t&&(t="<li class=\"propsumm\">"+t+"</li>"),t}),Handlebars.registerHelper("formatAddress",function(e){var t="";return e.data.root.Address1&&(t=e.data.root.Address1),e.data.root.City&&(t+=(""===t?"":", ")+e.data.root.City),e.data.root.State&&(t+=(""===t?"":", ")+e.data.root.State),e.data.root.ZipCode&&(t+=(""===t?"":", ")+e.data.root.ZipCode),e.data.root.CountryCode&&(t+=(""===t?"":", ")+e.data.root.CountryCode),t}),Handlebars.registerHelper("formatDistanceFrom",function(e){var t="";if(""!=e.data.root.LatLonDistance){if(1==e.data.root.LatLonDistance){if(lang.isMetric)var i=lang.distanceFromZipMetric;else var i=lang.distanceFromZip;}else if(lang.isMetric)var i=lang.distanceFromZipPluralMetric;else var i=lang.distanceFromZipPlural;-1==t.indexOf(e.data.root.LatLonName.substring(0,6))&&("en"==lang.language&&""!=e.data.root.LatLonDirection&&(i=i.replace("from",e.data.root.LatLonDirection+" of")),t+="<span class=\"distance\">"+i.replace("[var1]","0.00"==e.data.root.LatLonDistance?"0":e.data.root.LatLonDistance).replace("[var2]",e.data.root.LatLonName)+a(e.data.root.LatLonDistance)+"</span><br>")}if(lastSearchParams.destination!=e.data.root.Zip){if(1==e.data.root.DistanceFromCity){if(lang.isMetric)var i=lang.distanceFromCityCenterMetric;else var i=lang.distanceFromCityCenter;}else if(lang.isMetric)var i=lang.distanceFromCityCenterPluralMe;else var i=lang.distanceFromCityCenterPlural;-1==e.data.root.LatLonName.substring(0,6).indexOf(lastSearchParams.destination.substring(0,6))&&("en"==lang.language&&""!=e.data.root.CityDirection&&(i=i.replace("from",e.data.root.CityDirection+" of")),t+="<span class=\"distance\">"+i.replace("[var1]","0.00"==e.data.root.DistanceFromCity?"0":e.data.root.DistanceFromCity).replace("[var2]",lastSearchParams.destination)+"</span><br>")}if(""!==e.data.root.DistanceFromZip){if(1==e.data.root.DistanceFromZip){if(lang.isMetric)var i=lang.distanceFromZipMetric;else var i=lang.distanceFromZip;}else if(lang.isMetric)var i=lang.distanceFromZipPluralMetric;else var i=lang.distanceFromZipPlural;-1==t.indexOf(e.data.root.Zip)&&("en"==lang.language&&""!=e.data.root.ZipDirection&&(i=i.replace("from",e.data.root.ZipDirection+" of")),t+="<span class=\"distance\">"+i.replace("[var1]","0.00"==e.data.root.DistanceFromZip?"0":e.data.root.DistanceFromZip).replace("[var2]",e.data.root.Zip)+"</span><br>")}if(""!=e.data.root.DistanceToAddress){if(1==e.data.root.DistanceToAddress){if(lang.isMetric)var i=lang.distanceFromZipMetric;else var i=lang.distanceFromZip;}else if(lang.isMetric)var i=lang.distanceFromZipPluralMetric;else var i=lang.distanceFromZipPlural;-1==t.indexOf(e.data.root.DistanceAddress)&&("en"==lang.language&&""!=e.data.root.AddressDirection&&(i=i.replace("from",e.data.root.AddressDirection+" of")),t+="<span class=\"distance\">"+i.replace("[var1]","0.00"==e.data.root.DistanceToAddress?"0":e.data.root.DistanceToAddress).replace("[var2]",e.data.root.DistanceAddress)+a(e.data.root.DistanceToAddress)+"</span><br>")}if(""!=e.data.root.DistanceFromLandmark){if(1==e.data.root.DistanceFromLandmark){if(lang.isMetric)var i=lang.distanceFromMetric;else var i=lang.distanceFrom;}else if(lang.isMetric)var i=lang.distanceFromPluralMetric;else var i=lang.distanceFromPlural;-1==t.indexOf(e.data.root.Landmark)&&("en"==lang.language&&""!=e.data.root.LandmarkDirection&&(i=i.replace("from",e.data.root.LandmarkDirection+" of")),t+="<span class=\"distance\">"+i.replace("[var1]","0.00"==e.data.root.DistanceFromLandmark?"0":e.data.root.DistanceFromLandmark).replace("[var2]",e.data.root.Landmark)+a(e.data.root.DistanceFromLandmark)+"</span><br>")}return t}),Handlebars.registerHelper("showCurrencyText",function(e){return""==lang.currency?e.fn(this):null}),Handlebars.registerHelper("showOldCost",function(e){return 0<this.SavingsPercentage?e.fn(this):null}),Handlebars.registerHelper("showPremium",function(e){return 0<this.SavingsPercentage&&0<searchParams.premiumUpgradeSavingsRatio?e.fn(this):null}),Handlebars.registerHelper("showSavingsPercentage",function(e){return 0<this.SavingsPercentage&&"en"==lang.language?e.fn(this):null}),Handlebars.registerHelper("priceAvail",function(e){return this.NoPriceAvail?null:e.fn(this)}),Handlebars.registerHelper("showNightlySavings",function(e){return searchParams.showNightlySavings?e.fn(this):null}),Handlebars.registerHelper("hideNightlySavings",function(e){return searchParams.showNightlySavings?null:e.fn(this)}),Handlebars.registerHelper("nightlySavings",function(e){return lang.currency+(e.data.root.OldCostNumeric-e.data.root.CostNumeric).toFixed(lang.currencyDecimalDigits)}),Handlebars.registerHelper("PremiumCost",function(e){return lang.currency+(e.data.root.OldCostNumeric-searchParams.premiumUpgradeSavingsRatio*(e.data.root.OldCostNumeric-e.data.root.CostNumeric)).toFixed(lang.currencyDecimalDigits)}),this.hotelTemplate=Handlebars.compile("<div class=\"hotel-rates{{~#if RateClass}} {{RateClass}}{{~/if~}}{{~#if Preferred}} site-preferred{{~/if~}}\"><div class=\"description-column\"><a href=\"{{formatHotelDetailsLink}}#"+searchParams.startingElement+"\" target=\"_blank\" class=\"hotel-name\">{{{HotelName}}}</a>{{~#if Phone}}<div class=\"h-phone no-redir\"> <i class=\"hotelphone-icon\"></i> <span class=\"hotelphone-number\">{{{Phone}}}</span> <i class=\"phone-arrow-i\"></i>{{~#if HidePhone}}{{~else~}}<div class=\"popup-phone-wrapper\"><div class=\"popup-phone\"> <span class=\"close-phone\"></span><p>"+lang.howShouldWeDirectCall+"</p> <a href=\"tel:{{Phone}}\" class=\"hcall-1\"><i></i>"+lang.newReservations+"<span class=\"ph-hide-mobile\">: {{{Phone}}}</span></a> <a href=\"tel:+18884948863\" class=\"hcall-3\"><i></i>"+lang.groupSales+"<span class=\"ph-hide-mobile\">: +1-888-494-8863</span></a></div></div>{{~/if~}}</div>{{~/if~}}{{#formatDistanceFrom}}{{/formatDistanceFrom}}{{~#if callInOnly}}<span class=\"SecondaryLine\">"+lang.onlyBookedOverPhone+" </span><span class=\"hotelphone-number\">{{{Phone}}}</span>{{~/if~}}<ul class=\"features\">{{~#if PromoText}}<li class=\"propsumm\"><div class=\"exclusive-message\"><i class=\"fa fa-ticket\"></i> {{{PromoText}}}</div></li>{{~/if~}}{{#formatValueAdds}}{{/formatValueAdds}}</ul>{{#formatComments}}{{/formatComments}}</div><div class=\"thumbnail-column\"><div class=\"photo-wrapper no-redir\"><span class=\"more-photos no-redir\"><i class=\"photo-icon\"></i>"+lang.morePhotos+"</span><img loading=lazy src=\"{{ThumbnailURL}}\" alt=\"\"></div>{{#priceAvail}}{{#showSavingsPercentage}}<div class=\"savings\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Save {{SavingsPercentage}}%</div>{{/showSavingsPercentage}}{{/priceAvail}}</div><div class=\"rating-column\">{{#priceAvail}}{{#showNightlySavings}}<div class=\"price\"><div id=\"price-xx\">{{#showOldCost}}<span class=\"question-mark\" title=\""+lang.RatesComparedTo+"\"><i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i></span>"+lang.OnlinePrice.replace("{1}","<span class=\"public-label\">").replace("{2}","</span>").replace("{3}","<small>").replace("{4}","</small>")+"<span class=\"public-price\">{{OldCost}}</span><div class=\"savings\">"+lang.EstHotelSavings.replace("{1}","<span class=\"save-label\">").replace("{2}","</span>").replace("{3}","<small>").replace("{4}","</small>")+"<span id=\"calcSavings\">{{#nightlySavings}}{{/nightlySavings}}</span></div>{{/showOldCost}}<div class=\"total\"><span class=\"youpay\">"+lang.YouPay+" </span><span>{{Cost}}</span></div>{{#showPremium}}<div class=\"premium\"><span class=\"premiumpay\">Premium Members Pay: </span><span>{{PremiumCost}}</span></div>{{/showPremium}}</div></div>{{/showNightlySavings}}{{#hideNightlySavings}}<div class=\"price\">{{#showCurrencyText}}<span class=\"from\">"+lang.currencyText+"</span>{{/showCurrencyText}}<span>{{Cost}}</span></div>{{#showOldCost}}<div class=\"price-old\">{{#showCurrencyText}}<span class=\"from\">"+lang.currencyText+"</span>{{/showCurrencyText}}<span>{{OldCost}}</span></div>{{/showOldCost}}{{/hideNightlySavings}}{{/priceAvail}}{{~#if Rating}}<div class=\"star-rating\">{{#formatStarRating}}{{/formatStarRating}}</div>{{~/if~}}{{~#if Review}}<span class=\"review-score\">{{#formatGuestReview}}{{/formatGuestReview}}/5</span>{{~/if~}}<a href=\"{{#hotelReviewsLink}}{{/hotelReviewsLink}}\" target=\"_blank\" rel=\"nofollow\" class=\"recent-reviews\">"+lang.readReviews+"</a>{{#showCallButton}}<a class=\"hotel-phone-call\" rel=\"nofollow\"><i></i> "+lang.call+"</a>{{/showCallButton}}<a href=\"{{formatHotelDetailsLink}}#"+searchParams.startingElement+"\" target=\"_blank\" itemprop=\"url\" class=\"check-rates {{vendor}}\">{{#showMeMoreButton}}{{/showMeMoreButton}}</a></div><div class=\"clear\"></div></div>"),this.hotelGridTemplate=Handlebars.compile("<td class=\"cost\">{{Cost}}</td><td>{{{HotelName}}}</td>"),this.landmarkGridTemplate=Handlebars.compile("{{~#if isLandmark}}<td class=\"landmark\">{{name}}</td>{{~^~}}<td class=\"category\">{{name}}</td>{{~/if~}}"),this.hotelMarkerTemplate=Handlebars.compile("<div class=\"bubble-map\" style=\"display: block;\"><a href=\"{{formatHotelDetailsLink}}#"+searchParams.startingElement+"\" target=\"_blank\"><div class=\"thumb-map\" style=\"background-image:url({{ThumbnailURL}});\"></div></a><a href=\"{{formatHotelDetailsLink}}#"+searchParams.startingElement+"\" class=\"hotel-name-map\" target=\"_blank\">{{{HotelName}}}</a><span class=\"address-map\">{{Address1}}<br>{{City}} {{State}} {{zipCode}}<br></span><span class=\"price-map\">{{Cost}}</span>{{~#if Rating}}<span class=\"stars-map\">{{#formatStarRating}}{{/formatStarRating}}</span>{{~/if~}}<a href=\"{{formatHotelDetailsLink}}#"+searchParams.startingElement+"\" class=\"view-more-map\" target=\"_blank\">"+lang.viewAllPhotos+"</a></div>"),this.setPriceSliderMinMax=function(e,t){d.isSearchComplete()&&(t=Math.ceil(t),$("#price_slider .ui-slider-pip").remove(),$("#price_slider").slider("option",{min:e,max:t}),$("#price_slider").slider("float",{handle:!0,pips:!0,prefix:""==lang.currency&&lang.hasOwnProperty("currencyText")?lang.currencyText:lang.currency,labels:{first:e.toString(),last:t+"+"}}),0<parseInt(searchParams.maxPriceFilter)?$("#price_slider").slider("option","values",[e,parseInt(searchParams.maxPriceFilter)]):$("#price_slider").slider("option","values",[e,t]))},this.initPriceSlider=function(){$("#price_slider").slider({min:0,max:9999,step:1,range:!0,values:[0,9999],_slide:function(e,t){9999==t.values[1]||($(":input[name=PriceMin]").val(t.values[0]),$(":input[name=PriceMax]").val(t.values[1]),$(":input[name=PriceMin]").trigger("change"))},change:function(e,t){9999==t.values[1]||($(":input[name=PriceMin]").val(t.values[0]),$(":input[name=PriceMax]").val(t.values[1]),$(":input[name=PriceMin]").trigger("change"))}}).slider("float",{handle:!0,pips:!0,prefix:""==lang.currency&&lang.hasOwnProperty("currencyText")?lang.currencyText:lang.currency,labels:{first:"0",last:"9999+"}})};var k=0;this.initGuestReviewSlider=function(){$("#guest_review_slider").slider({min:0,max:5,step:1,range:!0,values:[0,5],_slide:function(e,t){return k?void($(":input[name=ReviewMin]").val(t.values[0]),$(":input[name=ReviewMax]").val(t.values[1]),$(":input[name=ReviewMin]").trigger("change")):void(k=1)},change:function(e,t){return k?void($(":input[name=ReviewMin]").val(t.values[0]),$(":input[name=ReviewMax]").val(t.values[1]),$(":input[name=ReviewMin]").trigger("change")):void(k=1)}}).slider("pips",{first:"label",last:"label",rest:"label",labels:{first:"0",last:"5"},step:1}).slider("float",{handle:!0,pips:!0,labels:{first:"0",last:"5"}})},this.clearFilters=function(){d.isFiltering||(d.isFiltering=!0,$("#NegotiatedRatesFilter select").val(3).change(),$("#PropertyFilter select").val(0).change(),$("[name=Rating]").prop("checked",""),$("input[type=text][name=HotelName]").val(""),$("#price_slider").slider("values",0,$("#price_slider").slider("option","min")),$("#price_slider").slider("values",1,$("#price_slider").slider("option","max")),$("#guest_review_slider").slider("values",0,0),$("#guest_review_slider").slider("values",1,5),searchParams.sortType=searchApp.defaultSearchParams.sortType,$("[name=Amenities]").prop("checked",!1),d.setSortDirectionClass(!1,""),d.sortByDefault(),d.isFiltering=!1)},this.setFilters=function(){if(!d.isFiltering&&(console.warn("set filters"),console.warn("searchParams.amenities.length"),console.warn(searchParams.amenities.length),!d.isFiltering)){-1<d.searchCount&&(d.currentPage=1),searchParams.hasNegotiatedRates&&searchParams.showNegotiatedRatesFilter&&(searchParams.negotiatedRates=$("#NegotiatedRatesFilter select option:selected").val(),searchParams.negotiatedRates!=lastSearchParams.negotiatedRates&&d.reLoadVendorData()),searchParams.rating2=0,searchParams.rating3=0,searchParams.rating4=0,searchParams.rating5=0,searchParams.propertyType=parseInt($("#PropertyFilter select").val()),$("[name=Rating]:checked").each(function(){searchParams["rating"+$(this).val()]=parseInt($(this).val())}),searchParams.hotelName=$("input[type=text][name=HotelName]").val(),searchParams.minPrice=parseInt($("[name=PriceMin]").val()),searchParams.maxPrice=parseInt($("[name=PriceMax]").val()),searchParams.minGuestReviewRating=parseInt($("[name=ReviewMin]").val()),searchParams.maxGuestReviewRating=parseInt($("[name=ReviewMax]").val());var e=!1,t=[];if($("#allAmenities [name=Amenities]:checked").each(function(){t.push(parseInt($(this).val()))}),console.warn(searchParams.amenities.length),console.warn(t.length),searchParams.amenities.length!=t.length){for(amenity in console.warn("amenities dont match"),searchParams.amenities=[],t)searchParams.amenities.push(t[amenity]);e=!0}for(var a in searchParams)lastSearchParams[a]=searchParams[a];$("[data-ref=mobileFullscreenView]").is(":visible")&&(d.refreshResultsOnHideMobileFullscreenView=1),e?d.search(!0):d.refreshResults()}},this.usePreload=function(){console.warn("usePreload"),d.preloaded=!1,d.hotelCombinedCollection.reset();for(var e=0;e<d.preloadStores.length;e++)this.stores[e].collection=this.preloadStores[e].collection.clone(),this.stores[e].collection.isAdded=!1,this.stores[e].collection.errorMessage=this.preloadStores[e].collection.errorMessage,this.preloadStores[e].loading=!0,d.addResults(this.stores[e].collection)},this.setSearchParams=function(){if(searchParams.destination=$("[name=City]").val(),searchParams.destinationLatitude=$("[name=destinationLatitude]").val(),searchParams.destinationLongitude=$("[name=destinationLongitude]").val(),searchParams.checkIn=$("[name=InDate]").val(),searchParams.checkOut=$("[name=OutDate]").val(),searchParams.numRooms=$("[name=NumRooms]").val(),searchParams.includeDiscountAuto=$("[name=IncludeDiscountAuto]").is(":checked")?1:0,searchParams.includeDiscountSenior=$("[name=IncludeDiscountSenior]").is(":checked")?1:0,searchParams.includeDiscountGovt=$("[name=IncludeDiscountGovt]").is(":checked")?1:0,searchParams.includeDiscountBiz=$("[name=IncludeDiscountBiz]").is(":checked")?1:0,""==searchParams.checkIn){var e=new Date,t=e.getMonth()+1,a=e.getDate(),r=e.getFullYear();searchParams.checkIn=t+"/"+a+"/"+r;var o=new Date;o.setDate(o.getDate()+1),t=o.getMonth()+1,a=o.getDate(),r=o.getFullYear(),searchParams.checkOut=t+"/"+a+"/"+r}for(var s in(searchParams.latitude==searchParams.destinationLatitude||searchParams.longitude==searchParams.destinationLongitude)&&("none"==searchParams.latLonName||""==searchParams.latLonName)&&(searchParams.latitude="",searchParams.longitude=""),searchParams)d.preloadSearchParams[s]=searchParams[s]},$("#Rates-Column").hide(),this.search=function(e){"undefined"==typeof e&&(e=!1),this.setSearchParams(),console.log("search"),console.log(e),console.warn("search"),console.warn(e);var t=this.buildSearchUrl();if(console.warn(t),console.warn(d.lastSearchUrl),t!=d.lastSearchUrl&&!d.preloaded)console.warn("url has changed, force search"),e=!0,d.lastSearchUrl=t;else if(!d.preloaded&&(console.warn("search url didnt change"),console.warn(e),!e))return;if(!d.isSearchComplete()&&!d.isPreloadSearchComplete()&&0<d.searchCount)return void console.error("no search");if(d.searchCount+=1,-1<d.searchCount&&(d.currentPage=1),v=null,!d.didInitMobileNav&&d.searchCount&&1009>$(window).width()&&d.initNavButtons(),9<=searchParams.numRooms&&0<=d.searchCount)return void(window.location="/Group-Rate/?"+$.param({City:searchParams.destination,InDate:searchParams.checkIn,OutDate:searchParams.checkOut,destinationLatitude:searchParams.destinationLatitude,destinationLongitude:searchParams.destinationLongitude}));if(d1=new Date(searchParams.checkIn),d2=new Date(searchParams.checkOut),nights=(d2.getTime()-d1.getTime())/1e3/60/60/24,30<=nights&&0<=d.searchCount)return void(window.location="/Group-Rate/?"+$.param({City:searchParams.destination,InDate:searchParams.checkIn,OutDate:searchParams.checkOut,destinationLatitude:searchParams.destinationLatitude,destinationLongitude:searchParams.destinationLongitude,es:1}));$("#city-name").text(searchParams.destination),d.searchCount&&0||($("#search-instructions").hide(),$("#city-suggestion").hide(),$("#Filter-Column").show(),$("#Links-Column").show(),$("#Rates-Column").show(),$("#viewmapbutton-container").show(),this.presearchCleanup()),L.reset(),L.filteredData=[],d.totalPages=0,d.refreshPaging(),(searchParams.destination!=lastSearchParams.destination||1>=d.searchCount)&&(d.mapCoords={lat:parseFloat(searchParams.destinationLatitude)||parseFloat(searchParams.latitude),lng:parseFloat(searchParams.destinationLongitude)||parseFloat(searchParams.longitude)},isNaN(d.mapCoords.lat)||0==d.mapCoords.lat?d.refreshMapCoords(searchParams.destination):(d.centerMap(),d.refreshMapImage(searchParams.destination,searchParams.destinationLatitude,searchParams.destinationLongitude)),d.refreshMapLandmarks(searchParams.destination));var a=0;(searchParams.destination!==lastSearchParams.destination||searchParams.checkIn!==lastSearchParams.checkIn||searchParams.checkOut!==lastSearchParams.checkOut||searchParams.numRooms!==lastSearchParams.numRooms||searchParams.includeDiscountAuto!==lastSearchParams.includeDiscountAuto||searchParams.includeDiscountSenior!==lastSearchParams.includeDiscountSenior||searchParams.includeDiscountGovt!==lastSearchParams.includeDiscountGovt||searchParams.includeDiscountBiz!==lastSearchParams.includeDiscountBiz||e)&&(a=1);var r=0;for(var o in d.preloadSearchParams.loaded&&(searchParams.landmark!==d.preloadSearchParams.landmark||searchParams.zipCode!==d.preloadSearchParams.zipCode||searchParams.destination!==d.preloadSearchParams.destination||searchParams.checkIn!==d.preloadSearchParams.checkIn||searchParams.checkOut!==d.preloadSearchParams.checkOut||searchParams.numRooms!==d.preloadSearchParams.numRooms||searchParams.includeDiscountAuto!==d.preloadSearchParams.includeDiscountAuto||searchParams.includeDiscountSenior!==d.preloadSearchParams.includeDiscountSenior||searchParams.includeDiscountGovt!==d.preloadSearchParams.includeDiscountGovt||searchParams.includeDiscountBiz!==d.preloadSearchParams.includeDiscountBiz)&&(r=1),searchParams.destination!==lastSearchParams.destination&&1<d.searchCount&&(searchParams.latitude="none",searchParams.longitude="none",searchParams.latLonName="none",searchParams.sortType=searchApp.defaultSearchParams.sortType,d.setSortDirectionClass(!1,"")),searchParams)lastSearchParams[o]=searchParams[o];return(console.warn("app.preloadSearchParams.loaded="+d.preloadSearchParams.loaded),console.warn("preloadResearch="+r),console.warn("forceSearch="+e),d.isPreloadSearchComplete()&&d.preloadSearchParams.loaded&&!r&&!e)?(d.totalPages=0,d.refreshPaging(),void(d.preloading?"map"!==d.view&&($("#progressbar").show(),setTimeout(function(){d.search()},500)):(this.usePreload(),d.refreshEvents(searchParams),d.refreshPerDiemRates(searchParams)))):void("map"!==d.view&&$("#progressbar").show(),d.refreshEvents(searchParams),d.refreshPerDiemRates(searchParams),d.didAddFirstResult=!1,_.each(d.stores,function(e){var a=d.searchCount;e.loading=1;var i=e.collection;e.startTime=Date.now(),i.url=e.baseUrl+t;for(amenity in searchParams.amenities)searchParams.amenities[amenity]+",";""!==searchParams.latLonName,i.fetch().then(function(t){if(a==d.searchCount){if(e.loading=0,e.collection.isAdded=!1,e.total=e.collection.length,e.endTime=Date.now(),e.time=(e.endTime-e.startTime)/1e3,e.total){var i=new URLSearchParams(e.baseUrl);e.supplier=i.get("vendor"),e.modFilter=parseInt(i.get("modFilter"))}e.collection.errorMessage=t.hasOwnProperty("errorMessage")?t.errorMessage:"",d.addResults(e.collection)}}).fail(function(){e.loading=0,e.endTime=Date.now(),e.total=0,e.collection.isAdded=!1,d.addResults(e.collection);var t=[];t.push(arguments[0]),t.push(arguments[1]),t.push(arguments[2]),t.push(this.url),d.logAjaxError.apply(d,t)})}),$("html, body").animate({scrollTop:$("#"+searchParams.jumpToDiv).position().top},200))},this.logAjaxError=function(e,t,a,i){$.post("/common/cfcs/services/search.cfc?method=logJsError",{msg:a.stack||t,sourceClass:"New Search: new search ajax",sourceMethod:i,errorType:t,error:a.stack,status:e.status,statusText:e.statusText,responseText:e.responseText})},this.preloadSearch=function(){for(var e in this.preloading=1,d.preloadCount+=1,d.preloadSearchParams.loaded=1,searchParams)d.preloadSearchParams[e]=searchParams[e];searchParams.destination!==lastSearchParams.destination&&""!==lastSearchParams.destination&&(searchParams.latitude="none",searchParams.longitude="none",searchParams.latLonName="none",searchParams.sortType=searchApp.defaultSearchParams.sortType,d.setSortDirectionClass(!1,""));var t=this.buildSearchUrl();console.warn("set lastSearchUrl from preload"),d.lastSearchUrl=t,d.preloaded=!0,_.each(d.preloadStores,function(e){e.loading=1;var a=d.preloadCount,i=e.collection;i.url=e.baseUrl+t,i.fetch().then(function(t){a==d.preloadCount&&(e.loading=0,e.collection.errorMessage=t.hasOwnProperty("errorMessage")?t.errorMessage:"",d.addPreloadResults())}).fail(function(){e.loading=0,d.addPreloadResults();var t=[];t.push(arguments[0]),t.push(arguments[1]),t.push(arguments[2]),t.push(this.url),d.logAjaxError.apply(d,t)})})},this.addPreloadResults=function(){this.isPreloadSearchComplete()&&(this.preloading=0)},this.initSortUi=function(){"landmark"==searchParams.sortType&&d.sortByLandmark(),"address"==searchParams.sortType&&d.sortByAddress(),"zip"==searchParams.sortType&&d.sortByZip(),"price"==searchParams.sortType&&d.sortByPrice(),"rating"==searchParams.sortType&&d.sortByRating(),"name"==searchParams.sortType&&d.sortByName(),"savings"==searchParams.sortType&&d.sortBySavings()},this.loadSearchParamsIntoUi=function(){for(amenity in console.warn("loadSearchParamsIntoUi"),d.isFiltering=!0,!searchParams.destination.length&&$("[name=City]").val().length&&(searchParams.destination=$("[name=City]").val(),!searchParams.destinationLatitude.length&&(searchParams.destinationLatitude=$("[itemprop=latitude]").prop("content")),!searchParams.destinationLongitude.length&&(searchParams.destinationLongitude=$("[itemprop=longitude]").prop("content"))),$("[name=City]").val(searchParams.destination),$("[name=destinationLatitude]").val(searchParams.destinationLatitude),$("[name=destinationLongitude]").val(searchParams.destinationLongitude),""==$("[name=InDate]").val()&&($("[name=InDate]").val(searchParams.checkIn),$("[name=OutDate]").val(searchParams.checkOut),initDatePicker()),$("[name=NumRooms]").val(searchParams.numRooms),$(".customSelectInner").text($("[name=NumRooms] option[value="+parseInt(searchParams.numRooms)+"]").text()),searchParams.hasNegotiatedRates&&searchParams.showNegotiatedRatesFilter&&$("#NegotiatedRatesFilter select").val(parseInt(searchParams.negotiatedRates)).change(),searchParams.showPropertyFilter&&$("#PropertyFilter select").val(parseInt(searchParams.propertyType)).change(),0<parseInt(searchParams.rating5)&&$("#Rating5").prop("checked","checked"),0<parseInt(searchParams.rating4)&&$("#Rating4").prop("checked","checked"),0<parseInt(searchParams.rating3)&&$("#Rating3").prop("checked","checked"),0<parseInt(searchParams.rating2)&&$("#Rating2").prop("checked","checked"),searchParams.amenities)$("#Amenities"+searchParams.amenities[amenity]).prop("checked",!0),$("#AllAmenities"+searchParams.amenities[amenity]).prop("checked",!0);$("input[type=text][name=HotelName]").val(searchParams.hotelName),""!=searchParams.minPrice&&$("#price_slider").slider("values",0,searchParams.minPrice),""!=searchParams.maxPrice&&$("#price_slider").slider("values",1,searchParams.maxPrice),""!=searchParams.minGuestReviewRating&&$("#guest_review_slider").slider("values",0,searchParams.minGuestReviewRating),""!=searchParams.maxGuestReviewRating&&$("#guest_review_slider").slider("values",1,searchParams.maxGuestReviewRating),isNaN(searchParams.includeDiscountAuto)||$("#chkIncludeDiscountAuto").prop("checked",searchParams.includeDiscountAuto).trigger("change"),isNaN(searchParams.includeDiscountSenior)||$("#chkIncludeDiscountSenior").prop("checked",searchParams.includeDiscountSenior).trigger("change"),isNaN(searchParams.includeDiscountGovt)||$("#chkIncludeDiscountGovt").prop("checked",searchParams.includeDiscountGovt).trigger("change"),isNaN(searchParams.includeDiscountBiz)||$("#chkIncludeDiscountBiz").prop("checked",searchParams.includeDiscountBiz).trigger("change"),$("[name=zipcode]").val(searchParams.zipCode),$("[name=address]").val(searchParams.address),d.initSortUi(),d.isFiltering=!1};var y=Backbone.Model.extend({defaults:{id:"",HotelId:"",vendor:"",tnid:"",cscore:"",priority:"",IsExclusiveRate:"",reviewUrl:"",HotelCode:"",HotelName:"",HotelDetailsLink:"",ThumbnailURL:"",Rating:"",Review:"",Address1:"",City:"",State:"",zipCode:"",CountryCode:"",Phone:"",HidePhone:0,Cost:"",CostNumeric:"",CostLong:"",DistanceFromCity:"",DistanceFromZip:"",DistanceFromLandmark:"",DistanceAddress:"",DistanceToAddress:"",CityDirection:"",ZipDirection:"",LandmarkDirection:"",AddressDirection:"",LatLonDirection:"",City:"",Zip:"",Landmark:"",LatLonDistance:"",LatLonName:"",PromoText:"",Comments:"",ValueAdds:"",SecondaryLine:"",Currency:"",Latitude:"",Longitude:"",callInOnly:"",RateClass:"",OldCost:"",OldCostNumeric:0,PremiumCost:"",Public:0,SavingsPercentage:0,NoPriceAvail:!1}}),w=Backbone.Model.extend({defaults:{id:"",isLandmark:"",name:"",lat:"",lon:"",imgUrl:"",landmarkCategory:""}}),D=Backbone.View.extend({template:this.hotelTemplate,render:function(){return this.$el.html(this.template(this.model.toJSON())),this},events:{click:"click","click .photo-wrapper":"showPhotos","click a":"clickLink","click .hotel-phone-call":"showHotelPhoneMobile","click .h-phone":"showHotelPhone","click .close-phone":"closePhone"},click:function(t){if(!$(t.target).is("a")&&!$(t.target).parent().hasClass("no-redir"))return $(t.currentTarget).find("a.hotel-name").first().click(),!1},showPhotos:function(t){t.preventDefault(),d.loadHotelPhotos(this.model)},clickLink:function(t){t.stopPropagation()},showHotelPhone:function(t){t.preventDefault(),t.stopPropagation(),d.updatePhoneNumberDynamic(this,!0),$(t.currentTarget).toggleClass("active")},showHotelPhoneMobile:function(t){t.preventDefault(),t.stopPropagation(),d.updatePhoneNumberDynamic(this,!1),this.$el.find(".h-phone").toggleClass("active")},closePhone:function(t){t.preventDefault(),t.stopPropagation(),this.$el.find(".h-phone").removeClass("active")}});this.updatePhoneNumberDynamic=function(t,a){var i=e(t.model.attributes),r=t.model.get("Phone"),o=document.title;d.getPhoneNumberDynamic(function(e){a||(e="+"+e),t.$el.find(".hcall-1").attr("href","tel:"+e),t.$el.find(".hcall-1 > .ph-hide-mobile").html(": "+e)},a,i,r,o)},this.getPhoneNumberDynamic=function(e,t,a,i,r){var o=[];o.push({name:"returnFormatted",value:t}),o.push({name:"requesting_url",value:a}),o.push({name:"default_phone",value:i}),o.push({name:"requesting_url_desc",value:r}),$.ajax("/Common/Cfcs/Services/OfflineSession.cfc?method=getPhoneNumberDynamic&"+$.param(o)).done(function(t){e(t)})};var S=Backbone.View.extend({template:this.hotelGridTemplate,render:function(){return this.$el.html(this.template(this.model.toJSON())),this}}),P=Backbone.View.extend({template:this.landmarkGridTemplate,render:function(){return this.$el.html(this.template(this.model.toJSON())),this}}),m=Backbone.View.extend({renderCount:0,isAnimating:!1,lastRender:0,render:function(){function e(){t.$el.html(""),t.renderCount+=1;var e=t.collection.filteredData,a=t.collection.length,i=t.collection.filteredData.length;d.currentPage=d.currentPage||1;for(var s,n=(d.currentPage-1)*d.resultsPerPage+1,l=n+d.resultsPerPage-1,c=n;c<=l;c++){s=e[c-1];try{if(s){var p=s.get("id").replace(/\W/g,"");t.$el.append("<div id=\"hotel"+p+"\">"),new D({el:t.$("#hotel"+p),model:s}).render()}if(2==c&&searchParams.showUnlockPrivateDeals){var m=$("#unlockdeals");if(m.length)t.$el.append(m);else{var m=t.$el.append("<div id=\"unlockdeals\"><div class=\"hotel-rates\"><h3><i class=\"fa fa-unlock\" aria-hidden=\"true\"></i> Unlock our secret rates!</h3><p>Access our secret members only pricing! Enter your email address below to see lower prices on select hotels.</p><form data-ref=\"unlockDealsForm\"><input type=\"email\" class=\"signup-email\" name=\"email\" placeholder=\"Your email\"><input type=\"submit\" class=\"btnUnlock\" value=\"Unlock Secret Rates\"></form><div class=\"terms\" style=\"display:none;\"><p>By giving us your email address, you agree to join our email newsletter to receive sales promotions and special deals. You can unsubscribe at anytime from our emails.</p><p>By submitting your email above, you agree to the <a href=\"/Terms.htm\" target=\"_blank\">Terms & Conditions</a> and <a href=\"/Privacy.htm\" target=\"_blank\">Privacy Policy</a>.</p></div><div class=\"clear\"></div></div>"),u=m.find("[data-ref=unlockDealsForm]"),h=u.find("[name=email]");u.on("submit",function(t){t.preventDefault();var e=h.val();d.joinNewsletter(e,d.unlockDeals)}),h.on("focus, click",function(){m.find(".terms").fadeIn()})}}}catch(t){console.log(t)}}!e.length&&d.isSearchComplete()&&t.$el.append(r()),3>=i&&3<a&&t.$el.append("<div id=\"showAllHotelsButton\"><a href=\"javascript:searchApp.clearFilters();\">"+lang.showAllHotels+"</a></div>");d.isSearchComplete()&&(t.renderCount=0),o?t.$el.animate({opacity:1,duration:200},{complete:function(){t.$el.removeAttr("style"),t.isAnimating=!1,t.lastRender=new Date().getTime()}}):t.lastRender=new Date().getTime()}var t=this;if(0==t.lastRender)t.lastRender=new Date().getTime();else{var a=new Date().getTime(),i=(a-t.lastRender)/1e3;if(!d.isSearchComplete()&&0<t.renderCount&&2>i)return}var o=d.isSearchComplete()&&!t.isAnimating&&"map"!=d.view;o?(t.isAnimating=!0,t.$el.height(t.$el.height()),t.$el.animate({opacity:0,duration:200},{complete:e})):e()}}),u=Backbone.View.extend({render:function(){var e=this,t=this.collection.filteredData,a=this.collection.length,i=this.collection.filteredData.length;d.currentPage=d.currentPage||1;for(var r,o=t.length,s=1;s<=o;s++){r=t[s-1];try{if(r){var n=r.get("id").replace(/\W/g,"");e.$el.append("<tr id=\"hotelGrid"+n+"\">"),new S({el:e.$("#hotelGrid"+n),model:r}).render()}}catch(t){console.log(t)}}}}),h=Backbone.View.extend({render:function(){for(var e,t=this,a=0;a<d.landmarkCollection.models.length;a++)if(e=d.landmarkCollection.models[a],"object"==typeof e){var i=e.get("id");"string"==typeof i&&(i=i.replace(/\W/g,"")),t.$el.append("<tr id=\"landmarkGrid"+i+"\">"),new P({el:t.$("#landmarkGrid"+i),model:e}).render()}}}),M=Backbone.Collection.extend({model:y,filteredData:{length:0},totalResultsPrefilter:0,priceMax:9999,sortType:searchParams.sortType,sortDir:searchParams.sortDir,sortDefault:function(e,t){return searchParams.preferredSort&&e.get("Preferred")&&!t.get("Preferred")?-1:searchParams.preferredSort&&!e.get("Preferred")&&t.get("Preferred")?1:"corporate"==e.get("vendor")&&"corporate"!==t.get("vendor")?-1:"corporate"!==e.get("vendor")&&"corporate"==t.get("vendor")?1:parseInt(e.get("priority"))<parseInt(t.get("priority"))?-1:parseInt(e.get("priority"))>parseInt(t.get("priority"))?1:parseFloat(e.get("DistanceFromCity"))<parseFloat(t.get("DistanceFromCity"))?-1:parseFloat(e.get("DistanceFromCity"))>parseFloat(t.get("DistanceFromCity"))?1:0},sortByName:function(e){return e.get("HotelName").toLowerCase()},sortByPrice:function(e){return parseFloat(e.get("CostNumeric"))},sortByRating:function(e,t){var a=parseFloat(e.get("Rating")),i=parseFloat(t.get("Rating"));if(a>i)return 1;if(a==i){return parseFloat(e.get("CostNumeric"))<parseFloat(t.get("CostNumeric"))?-1:1}return-1},sortByDistanceFromCity:function(e){return parseFloat(e.get("DistanceFromCity"))},sortByDistanceFromZip:function(e){return parseFloat(e.get("DistanceFromZip"))},sortByDistanceToAddress:function(e){return parseFloat(e.get("DistanceToAddress"))},sortByDistanceFromLandmark:function(e){return parseFloat(e.get("DistanceFromLandmark"))},sortByDistanceFromLatLon:function(e){var t=e.get("LatLonDistance");return""==t?parseFloat(e.get("DistanceFromCity")):parseFloat(t)},sortBySavings:function(e){return parseFloat(e.get("SavingsPercentage"))},sort:function(){this.comparator=this.sortDefault;var e=searchParams.sortType,t="ASC";if("name"==e?(this.comparator=this.sortByName,t=searchParams.nameSortDir):"savings"==e?(this.comparator=this.sortBySavings,t="DESC"):"price"==e?(this.comparator=this.sortByPrice,t=searchParams.priceSortDir):"rating"==e?(this.comparator=this.sortByRating,t=searchParams.ratingSortDir):"distance_from_city"==e?this.comparator=this.sortByDistanceFromCity:"zip"==e?this.comparator=this.sortByDistanceFromZip:"address"==e?this.comparator=this.sortByDistanceToAddress:"landmark"==e?this.comparator=this.sortByDistanceFromLandmark:"latlon"==e&&(this.comparator=this.sortByDistanceFromLatLon),"DESC"==t)if("rating"==e){var a=this.sortByRating;this.comparator=function(e,t){return-1*a(e,t)}}else this.comparator=this.reverseSort(this.comparator);Backbone.Collection.prototype.sort.apply(this)},reverseSort:function(e){return function(t,a){var i=e(t),o=e(a);return void 0===i?-1:void 0===o?1:i<o?1:i>o?-1:0}},parse:function(e){return e.data},updateFilteredData:function(){this.trigger("updateFilteredData");var e=[parseInt(searchParams.rating2)?2:0,parseInt(searchParams.rating3)?3:0,parseInt(searchParams.rating4)?4:0,parseInt(searchParams.rating5)?5:0];e[0]&&e[1]&&e.push(2.5),e[1]&&e[2]&&e.push(3.5),e[2]&&e[3]&&e.push(4.5);var t=parseInt(searchParams.propertyType);this.filteredData=this.filter(function(a){var i=parseFloat(a.get("Rating"));if(e[0]+e[1]+e[2]+e[3]){var o=0;for(var s in e)2==e[s]?o=o||2.5>=i:0<e[s]&&(o=o||i==e[s]);if(!o)return!1}var r=parseFloat(searchParams.minPrice),n=parseFloat(searchParams.maxPrice),l=searchParams.minGuestReviewRating,d=searchParams.maxGuestReviewRating;if(0<r||9999!=n){var c=parseFloat(a.get("CostNumeric"));if(c<r||c>n)return!1}if(0<l||5!=d){var p=parseFloat(a.get("Review"));if(p<l||p>d)return!1}var m=a.get("HotelName").toString();if(""!=searchParams.hotelName&&m.toLowerCase()!=searchParams.hotelName.toLowerCase()&&-1==m.toLowerCase().indexOf(searchParams.hotelName.toLowerCase()))return!1;var u=-1<m.toLowerCase().indexOf("apartment");return 1==t&&("abnb"==a.get("vendor")||u||"vrbo"==a.get("vendor"))||2==t&&"abnb"!==a.get("vendor")&&"vrbo"!==a.get("vendor")?void 0:!!(3!=t||u)||void 0})}});this.HotelCollection=M;var R=Backbone.Collection.extend({isBusy:0,model:w,parse:function(e){return e.data}}),L=new M;d.hotelCombinedCollection=L,L.isBusy=!1,this.landmarkCollection=new R;for(var c=0;c<d.stores.length;c++)d.stores[c].collection=new M,d.stores[c].collection.isAdded=!1;for(var c=0;c<d.preloadStores.length;c++)d.preloadStores[c].collection=new M;var T=Backbone.View.extend({render:function(){if(!(0<searchParams.maxResults)){var e="";if(1<d.totalPages){1>d.currentPage&&(d.currentPage=1),e+=1==d.currentPage?"<span class=\"paging_previous\">"+lang.previous+"</span>":"<span class=\"paging_previous\"><a href=\"javascript:searchApp.goToPage("+(d.currentPage-1)+");\">"+lang.previous+"</a></span>";for(var t=1;t<=d.totalPages;t++)e+=d.currentPage==t?"<span class=\"paging_page\">"+t+"</span>":"<span class=\"paging_page\"><a href=\"javascript:searchApp.goToPage("+t+");\">"+t+"</a></span>";e+=d.currentPage>=d.totalPages?"<span class=\"paging_next\">"+lang.moreHotels+" <i class=\"fa fa-angle-double-right\"></i></span>":"<span class=\"paging_next\"><a href=\"javascript:searchApp.goToPage("+(d.currentPage+1)+");\">"+lang.moreHotels+" <i class=\"fa fa-angle-double-right\"></i></a></span>"}this.$el.html(e)}}});this.goToPage=function(e){searchApp.isSearchComplete()&&(1>e&&(e=1),e>d.totalPages&&(e=d.totalPages),d.currentPage=e,d.refreshPaging(),m.render(),u.$el.empty(),u.render(),"map"!==d.view&&searchApp.isSearchComplete()&&$("html, body").animate({scrollTop:$("#"+searchParams.jumpToDiv).position().top},200),d.updateSearchRoute())},this.refreshResults=function(){d.hotelCombinedCollection.updateFilteredData(),d.refreshHotelMarkers(),d.goToPage(d.currentPage)},this.refreshPaging=function(){d.totalPages=Math.ceil(d.hotelCombinedCollection.filteredData.length/d.resultsPerPage),bottomPagingView.render();var e="";if(!d.hotelCombinedCollection.totalResultsPrefilter)$(".clearFilters").hide();else if(1<L.filteredData.length&&(e=lang.showingXHotels.replace("[var1]",L.filteredData.length)),L.filteredData.length<L.totalResultsPrefilter||searchParams.amenities1||searchParams.amenities2||searchParams.amenities3||searchParams.amenities4||searchParams.amenities5||searchParams.amenities6||searchParams.amenities7||searchParams.amenities9||searchParams.amenities10||searchParams.amenities11){L.totalResultsPrefilter-L.filteredData.length;e=lang.showingXofHotels.replace("[var1]",L.filteredData.length).replace("[var2]",d.hotelCombinedCollection.totalResultsPrefilter),$(".clearFilters").show()}else $(".clearFilters").hide();searchParams.amenities.length&&$(".clearFilters").show(),$("#hotelResultsCount").html(e)},this.isSearchComplete=function(){for(var e=0;e<d.stores.length;e++){if(d.stores[e].loading)return!1;if(!d.stores[e].collection.isAdded)return!1}return!0},this.isPreloadSearchComplete=function(){for(var e=0;e<d.preloadStores.length;e++)if(d.preloadStores[e].loading)return!1;return!0},this.reLoadVendorData=function(){var e=this;if(searchParams.hasNegotiatedRates)var t=parseInt(searchParams.negotiatedRates);if(L.reset(),L.filteredData=[],searchParams.hasNegotiatedRates&&3==t){for(var a,i=e.stores.length-1;0<=i;i--)if(a=e.stores[i].collection,5==i){var r=a.clone();if(r.length&&"corporate"==r.at(0).get("vendor"))for(var o,n=0;n<r.models.length;n++)o=r.models[n],"corporate"==o.get("vendor")&&(o.set("id",o.get("id")+"-corp"),o.id=o.get("id"));e.bulkInsertRecords(r)}else e.bulkInsertRecords(a);}else for(var a,i=e.stores.length-1;0<=i;i--)a=e.stores[i].collection,e.bulkInsertRecords(a);L.length>L.totalResultsPrefilter&&(L.totalResultsPrefilter=L.length)},this.addResults=function(e){var t=this,a=0;if(searchParams.hasNegotiatedRates)parseInt(searchParams.negotiatedRates);var i=setInterval(function(){if(L.isBusy)a+=1,5<=a&&(L.isBusy=!1);else if(clearInterval(i),L.isBusy=!0,t.bulkInsertRecords(e),d.didAddFirstResult||(d.didAddFirstResult=!0,$("html, body").animate({scrollTop:$("#"+searchParams.jumpToDiv).position().top},200)),t.isSearchComplete()){if(searchParams.hasNegotiatedRates?t.reLoadVendorData():L.totalResultsPrefilter=L.length,0<searchParams.maxResults&&L.length>searchParams.maxResults){var r=searchParams.sortType;searchParams.sortType="default",L.sort(),L.reset(L.slice(0,searchParams.maxResults)),L.updateFilteredData(),L.totalResultsPrefilter=L.length,searchParams.sortType=r,L.sort()}d.uploadLogs()}},100)},this.bulkInsertRecords=function(e){if(searchParams.hasNegotiatedRates)var t=parseInt(searchParams.negotiatedRates);for(var a,r=[],o=0;o<e.models.length&&(a=e.models[o],"object"==typeof a);o++)try{var s=a.get("id"),s=a.attributes.id,n=a.attributes.tnid,l=[];if(void 0!==a.attributes.CountryCode&&("US"==a.attributes.CountryCode||"CA"==a.attributes.CountryCode)&&(l=L.where({id:s})),!l.length&&""!=a.attributes.HotelId){var c=a.attributes.HotelId;l=L.where({HotelId:c})}if((searchParams.hasNegotiatedRates&&0==t&&a.attributes.IsExclusiveRate||searchParams.hasNegotiatedRates&&1==t||searchParams.hasNegotiatedRates&&2==t&&!a.attributes.IsExclusiveRate||searchParams.hasNegotiatedRates&&3==t||!searchParams.hasNegotiatedRates)&&0<parseInt(a.attributes.CostNumeric))if(l.length){if(parseFloat(a.attributes.CostNumeric)==parseFloat(l[0].attributes.CostNumeric)&&(1==a.attributes.Public||1==l[0].attributes.Public)&&(a.attributes.Public=1,l[0].attributes.Public=1),parseFloat(a.attributes.CostNumeric)<parseFloat(l[0].attributes.CostNumeric)||1==l[0].attributes.Public)0==searchParams.compareSavingsToPublic||1==l[0].attributes.Public?(a.attributes.OldCost=l[0].attributes.CostNumeric>l[0].attributes.OldCostNumeric?l[0].attributes.Cost:l[0].attributes.OldCost,a.attributes.OldCostNumeric=l[0].attributes.CostNumeric>l[0].attributes.OldCostNumeric?l[0].attributes.CostNumeric:l[0].attributes.OldCostNumeric):0<l[0].attributes.SavingsPercentage&&(a.attributes.OldCost=l[0].attributes.OldCost,a.attributes.OldCostNumeric=l[0].attributes.OldCostNumeric),searchParams.processSavings&&0<parseFloat(a.attributes.OldCostNumeric)&&(a.attributes.SavingsPercentage=Math.floor(100*(1-parseFloat(a.attributes.CostNumeric)/parseFloat(a.attributes.OldCostNumeric))));else if(0==searchParams.compareSavingsToPublic||1==a.attributes.Public){var p=a.attributes.CostNumeric>a.attributes.OldCostNumeric?a.attributes.Cost:a.attributes.OldCost,h=a.attributes.CostNumeric>a.attributes.OldCostNumeric?a.attributes.CostNumeric:a.attributes.OldCostNumeric;h>l[0].attributes.OldCostNumeric?(l[0].attributes.OldCost=p,l[0].attributes.OldCostNumeric=h):0<a.attributes.SavingsPercentage&&(l[0].attributes.OldCost=a.attributes.OldCost,l[0].attributes.OldCostNumeric=a.attributes.OldCostNumeric),searchParams.processSavings&&0<parseFloat(l[0].attributes.OldCostNumeric)&&(l[0].attributes.SavingsPercentage=Math.floor(100*(1-parseFloat(l[0].attributes.CostNumeric)/parseFloat(l[0].attributes.OldCostNumeric))))}var g=parseFloat(l[0].attributes.cscore),v=parseFloat(a.attributes.cscore);C=0,searchParams.hasNegotiatedRates&&3==t&&"corporate"==a.attributes.vendor?(r.push(a),C=1):searchParams.hasNegotiatedRates&&1==t&&("corporate"==a.attributes.vendor||"corporate"==l[0].attributes.vendor)?"corporate"==l[0].attributes.vendor&&a.attributes.IsExclusiveRate||(parseFloat(a.attributes.CostNumeric)==parseFloat(l[0].attributes.CostNumeric)&&"corporate"==a.attributes.vendor?(r.push(a),C=1):parseFloat(a.attributes.CostNumeric)<parseFloat(l[0].attributes.CostNumeric)&&(r.push(a),C=1)):parseFloat(a.attributes.CostNumeric)<parseFloat(l[0].attributes.CostNumeric)?"corporate"!==l[0].attributes.vendor&&(""!==l[0].attributes.ThumbnailURL&&""==a.attributes.ThumbnailURL&&a.set("ThumbnailURL",l[0].attributes.ThumbnailURL),r.push(a),C=1):""==l[0].attributes.ThumbnailURL&&""!==a.attributes.ThumbnailURL&&l[0].set("ThumbnailURL",a.attributes.ThumbnailURL);var f=a.attributes.Comments.length>l[0].attributes.Comments.length?a.attributes.Comments:l[0].attributes.Comments;a.set("Comments",f),l[0].set("Comments",f),C&&L.remove(l[0])}else if(""===a.attributes.tnid)r.push(a);else if(l=L.where({tnid:n}),l.length){var g=parseFloat(l[0].attributes.cscore),v=parseFloat(a.attributes.cscore),b=1,C=1;if(parseFloat(a.attributes.CostNumeric)==parseFloat(l[0].attributes.CostNumeric)&&(1==a.attributes.Public||1==l[0].attributes.Public)&&(a.attributes.Public=1,l[0].attributes.Public=1),parseFloat(a.attributes.CostNumeric)<parseFloat(l[0].attributes.CostNumeric)||1==l[0].attributes.Public)0==searchParams.compareSavingsToPublic||1==l[0].attributes.Public?(a.attributes.OldCost=l[0].attributes.CostNumeric>l[0].attributes.OldCostNumeric?l[0].attributes.Cost:l[0].attributes.OldCost,a.attributes.OldCostNumeric=l[0].attributes.CostNumeric>l[0].attributes.OldCostNumeric?l[0].attributes.CostNumeric:l[0].attributes.OldCostNumeric):0<l[0].attributes.SavingsPercentage&&(a.attributes.OldCost=l[0].attributes.OldCost,a.attributes.OldCostNumeric=l[0].attributes.OldCostNumeric),searchParams.processSavings&&0<parseFloat(a.attributes.OldCostNumeric)&&(a.attributes.SavingsPercentage=Math.floor(100*(1-parseFloat(a.attributes.CostNumeric)/parseFloat(a.attributes.OldCostNumeric))));else if(0==searchParams.compareSavingsToPublic||1==a.attributes.Public){var p=a.attributes.CostNumeric>a.attributes.OldCostNumeric?a.attributes.Cost:a.attributes.OldCost,h=a.attributes.CostNumeric>a.attributes.OldCostNumeric?a.attributes.CostNumeric:a.attributes.OldCostNumeric;h>l[0].attributes.OldCostNumeric?(l[0].attributes.OldCost=p,l[0].attributes.OldCostNumeric=h):0<a.attributes.SavingsPercentage&&(l[0].attributes.OldCost=a.attributes.OldCost,l[0].attributes.OldCostNumeric=a.attributes.OldCostNumeric),searchParams.processSavings&&0<parseFloat(l[0].attributes.OldCostNumeric)&&(l[0].attributes.SavingsPercentage=Math.floor(100*(1-parseFloat(l[0].attributes.CostNumeric)/parseFloat(l[0].attributes.OldCostNumeric))))}for(var k=0;k<l.length;k++)searchParams.hasNegotiatedRates&&3==t&&("corporate"==a.attributes.vendor||"corporate"==l[k].attributes.vendor)?("corporate"==l[k].attributes.vendor&&a.attributes.IsExclusiveRate&&(b=0),C=0):searchParams.hasNegotiatedRates&&1==t&&("corporate"==a.attributes.vendor||"corporate"==l[k].attributes.vendor)?(b=0,parseFloat(a.attributes.CostNumeric)==parseFloat(l[k].attributes.CostNumeric)&&"corporate"==a.attributes.vendor?b=1:parseFloat(a.attributes.CostNumeric)<parseFloat(l[k].attributes.CostNumeric)&&(b=1)):parseFloat(a.attributes.CostNumeric)<parseFloat(l[k].attributes.CostNumeric)||(b=0),b&&C&&L.remove(l[k]);var f=a.attributes.Comments.length>l[0].attributes.Comments.length?a.attributes.Comments:l[0].attributes.Comments;a.set("Comments",f),l[0].set("Comments",f),b&&r.push(a)}else r.push(a)}catch(t){console.log("error in bulkInsertRecords"),console.log(t)}L.add(r,{sort:!1}),L.isBusy=!1,e.isAdded=!0,L.sort(),(d.isSearchComplete()||!0)&&(d.isSearchComplete()&&$("#progressbar").hide(),d.hotelCombinedCollection.priceMax=0<d.hotelCombinedCollection.length?d.hotelCombinedCollection.max(function(e){return parseFloat(e.get("CostNumeric"))}).get("CostNumeric"):9999,d.setPriceSliderMinMax(0,d.hotelCombinedCollection.priceMax),L.updateFilteredData(),(e.length&&e.models[0].id||d.isSearchComplete())&&m.render(),u.$el.empty(),u.render(),d.refreshPaging(),!$("#LandmarksGridContainer").is(":visible")&&$("#sort-by").show(),"map"==d.view&&d.resizeMap(),d.refreshHotelMarkers())},this.setSortDirectionClass=function(e,t){if(!e){var a=searchParams.sortType;"address"==a&&(a="zip"),"landmark"==a&&(a="neighborhood"),e=$("#"+a+"-sort-option")}$("#sort-by li").removeClass("active").find("div.arrow-icon").remove(),$(e).addClass("active"),$("<div></div>").attr("class","arrow-icon").appendTo(e),$(e).addClass("descendent"),$(e).siblings().removeClass("descendent"),"ASC"==t?$(e).removeClass("descendent"):$(e).addClass("descendent"),"landmark"!==searchParams.sortType&&$("#neighborhood-sort-option").html(lang.landmark),"zip"!==searchParams.sortType&&"address"!==searchParams.sortType&&$("#zip-sort-option").html(lang.zipOrAddress)},this.centerMap=function(){"undefined"!=typeof d.map&&d.map.setCenter(d.mapCoords)},this.refreshMapCoords=function(e){$.ajax("/common/cfcs/services/search.cfc?method=getCityCenter&"+$.param({city:e}),{dataType:"json"}).done(function(e){if(1===e.data.length){d.mapCoords.lat=parseFloat(e.data[0].lat),d.mapCoords.lng=parseFloat(e.data[0].lon),d.refreshKayakSearch(),d.centerMap(),d.refreshMapImage(searchParams.destination,d.mapCoords.lat,d.mapCoords.lng);var t=t||"";$.ajax("/tt.htm?"+$.param({location:e.data[0].location_id,type:1,pageURL:encodeURIComponent(window.location),notes:encodeURIComponent(t)}),{dataType:"json"})}})},this.refreshMapImage=function(e,t,a){var i=$("#Map");i.show(),$.ajax("/common/cfcs/services/search.cfc?method=GetMapIconURL&"+$.param({center:e})+"&Lat="+t+"&Lon="+a,{dataType:"json"}).done(function(e){i.css("background-image","url("+e.MAPURL+")")}),d.refreshKayakSearch()},this.refreshMapLandmarks=function(e){this.loadStaticMapMarkers(),d.landmarkCollection.isBusy||($("#neighborhood-sort-option").html(lang.landmark),d.landmarkCollection.isBusy=!0,d.landmarkCollection.url="/common/cfcs/services/search.cfc?method=getLandmarks&"+$.param({city:e,destinationLatitude:searchParams.destinationLatitude,destinationLongitude:searchParams.destinationLongitude}),d.landmarkCollection.fetch().then(function(){d.landmarkCollection.isBusy=!1,h.$el.empty(),h.render(),d.loadLandmarkMarkers(),"landmark"==searchParams.sortType&&d.sortByLandmark()}).fail(function(){var e=[];e.push(arguments[0]),e.push(arguments[1]),e.push(arguments[2]),e.push(this.url),d.logAjaxError.apply(d,e)}))},this.loadLandmarkMarkers=function(){if("undefined"!=typeof google){for(var e=0;e<d.landmarkMarkers.length;e++)d.landmarkMarkers[e].setMap(null),"custom"==e||d.landmarkMarkers[e].setMap(null);for(var e=0;e<d.landmarkMarkerInfoWindows.length;e++)d.landmarkMarkerInfoWindows[e].setMap(null);d.landmarkMarkers={},d.landmarkMarkerInfoWindows={};for(var t,a=new google.maps.MarkerImage("//cdn.hotelplanner.com/Common/Images/MapIcons/s_pink.gif",new google.maps.Size(8,8),new google.maps.Point(0,0),new google.maps.Point(0,8)),i=new google.maps.MarkerImage("//cdn.hotelplanner.com/Common/Images/MapIcons/shadow.png",new google.maps.Size(8,8),new google.maps.Point(0,0),new google.maps.Point(0,8)),r=this,o=0;o<d.landmarkCollection.models.length;o++)if(t=d.landmarkCollection.models[o],"object"==typeof t&&t.get("isLandmark")){if(""==t.get("imgUrl"))var e=d.createLandmarkMarker(new google.maps.LatLng(t.get("lat"),t.get("lon")),t.get("id"),"<div align=\"left\"><b>"+t.get("name")+"</b></div>");else var e=d.createLandmarkMarker(new google.maps.LatLng(t.get("lat"),t.get("lon")),t.get("id"),"<div align=\"left\"><img loading=lazy src=\"//cdn.hotelplanner.com"+t.get("imgUrl")+"\" width=\"100\" hspace=\"10\" vspace=\"1\" border=\"1\" align=\"left\" style=\"margin-right: 6px;\"><b>"+t.get("name")+"</b></div>");d.landmarkMarkers[t.get("id")]=e}"landmark"==searchParams.sortType&&searchParams.landmark in d.landmarkMarkerInfoWindows?d.landmarkMarkerInfoWindows[searchParams.landmark].open(d.map,d.landmarkMarkers[searchParams.landmark]):d.createCustomLandmark()}},this.hotelMarkers={},this.landmarkMarkers={},this.refreshHotelMarkers=function(){var e=this,t=0;for(var a in this.hotelMarkers)e.hotelMarkers[a].setVisible(!1),t++;this.loadHotelMarkers()},this.loadHotelMarkers=function(){if("undefined"!=typeof google&&d.hotelCombinedCollection.filteredData.length)for(var e in"undefined"!=typeof d.map&&d.hotelMarkerInfoWindow.close(),this.hotelMarkers={},d.hotelCombinedCollection.filteredData)try{var t=d.hotelCombinedCollection.filteredData[e],a=this.createHotelMarker(t);this.hotelMarkers[t.get("id").replace(/\W/g,"")]=a,a.setVisible(!0)}catch(t){console.log(t)}},this.createHotelMarker=function(e){var t=new google.maps.LatLng(e.get("Latitude"),e.get("Longitude"));if("abnb"==e.get("vendor"))var a=new google.maps.MarkerImage("//cdn.hotelplanner.com/Common/Images/Search/Map/pin-pink.png",new google.maps.Size(19,25),new google.maps.Point(0,0),new google.maps.Point(0,24));else var a=new google.maps.MarkerImage("//cdn.hotelplanner.com/Common/Images/Search/Map/pin-blue.png",new google.maps.Size(19,25),new google.maps.Point(0,0),new google.maps.Point(0,24));var i=new google.maps.Marker({position:t,map:this.map,icon:a}),r=this.hotelMarkerTemplate(e.attributes),o=this;return google.maps.event.addListener(i,"click",function(){d.mapCoords.lat=t.lat(),d.mapCoords.lng=t.lng(),o.hotelMarkerInfoWindow.setContent(r),o.hotelMarkerInfoWindow.open(this.map,i)}),i},this.createLandmarkMarker=function(e,t,a){var i=new google.maps.MarkerImage("//cdn.hotelplanner.com/Common/Images/MapIcons/s_pink.gif",new google.maps.Size(19,25),new google.maps.Point(0,0),new google.maps.Point(0,8)),r=new google.maps.Marker({position:e,map:this.map,icon:i}),o=new google.maps.InfoWindow({content:a,maxWidth:300});return d.landmarkMarkerInfoWindows[t]=o,google.maps.event.addListener(r,"click",function(){d.mapCoords.lat=e.lat(),d.mapCoords.lng=e.lng(),o.open(this.map,r)}),r},this.addStaticMapMarkerWindowListener=function(e,t){google.maps.event.addListener(this.staticMapMarkers[e],"click",function(){d.mapCoords.lat=this.getPosition().lat(),d.mapCoords.lng=this.getPosition().lng(),t.open(this.map,this)})},this.loadStaticMapMarkers=function(){if(!1!=searchParams.hasOwnProperty("staticMapMarkers")&&"undefined"!=typeof google){var e=this;for(var t in e.staticMapMarkers)e.staticMapMarkers[t].setMap(null);for(var t in e.staticMapMarkerInfoWindows)e.staticMapMarkerInfoWindows[t].setMap(null);e.staticMapMarkers={},e.staticMapMarkerInfoWindows={};var a=0;for(var i in searchParams.staticMapMarkers){var a=searchParams.staticMapMarkers[i],r=""==a.pinImage?"//cdn.hotelplanner.com/Common/Images/Search/Map/pin-orange.png":a.pinImage,o=new google.maps.MarkerImage(r,new google.maps.Size(19,25),new google.maps.Point(0,0),new google.maps.Point(0,8)),s=new google.maps.LatLng(a.latitude,a.longitude);e.staticMapMarkers[i]=new google.maps.Marker({position:s,map:this.map,icon:o});var n=new google.maps.InfoWindow({content:a.content,maxWidth:300});e.staticMapMarkerInfoWindows[i]=n,e.addStaticMapMarkerWindowListener(i,n),a.autoShow&&n.open(e.map,e.staticMapMarkers[i])}}},this.newMap=function(e,t,a){if("undefined"==typeof google)return void(mapRetryInterval=setInterval(function(){"undefined"==typeof mapRetry&&(mapRetry=0),mapRetry++,50<=mapRetry&&clearInterval(mapRetryInterval),d.newMap(d.mapCoords.lat,d.mapCoords.lng)},100));d.hotelMarkerInfoWindow=new google.maps.InfoWindow,parseFloat(e)||(e=d.defaultMapCoords.lat),parseFloat(t)||(t=d.defaultMapCoords.lng);var i={center:new google.maps.LatLng(e,t),zoom:12,mapTypeControl:!1,panControl:!0,zoomControl:!0,scaleControl:!0,streetViewControl:!1,fullscreenControl:!1,mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{featureType:"poi.business",elementType:"labels",stylers:[{visibility:"off"}]}]};this.map=new google.maps.Map(document.getElementById("searchResultsMap"),i),d.refreshHotelMarkers(),d.refreshMapLandmarks(searchParams.destination);var r=document.createElement("div"),l=new s(r,d.map),c=document.createElement("div"),p=new n(c,d.map);r.index=1,d.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(r);var m=document.createElement("div"),u=new o(m,d.map);m.index=1,d.map.controls[google.maps.ControlPosition.TOP_CENTER].push(m),c.index=1,d.map.controls[google.maps.ControlPosition.TOP_LEFT].push(c),"function"==typeof a&&a.call(d)},this.loadHotelPhotos=function(e){$.ajax("/common/cfcs/services/search.cfc?method=getHotelPhotos&"+$.param({uhid:e.get("HotelId")}),{dataType:"json"}).done(function(e){var t=[];if(e.success&&e.data.length){for(var a in e.data)t.push({src:e.data[a].imgUrl,title:e.data[a].caption});$.magnificPopup.open({items:t,type:"image",gallery:{enabled:!0},titleSrc:"title"})}})},this.sortByPrice=function(){"price"==searchParams.sortType?searchParams.priceSortDir=0==d.searchCount?searchParams.priceSortDir:"ASC"==searchParams.priceSortDir?"DESC":"ASC":(searchParams.sortType="price",searchParams.priceSortDir="ASC");var e=$("#price-sort-option");d.hotelCombinedCollection.sort(),d.currentPage=1,d.refreshResults(),d.setSortDirectionClass(e,searchParams.priceSortDir)},this.sortByRating=function(){"rating"==searchParams.sortType?searchParams.ratingSortDir=0==d.searchCount?searchParams.ratingSortDir:"ASC"==searchParams.ratingSortDir?"DESC":"ASC":(searchParams.sortType="rating",searchParams.ratingSortDir="DESC");var e=$("#stars-sort-option");d.hotelCombinedCollection.sort(),d.currentPage=1,d.refreshResults(),d.setSortDirectionClass(e,searchParams.ratingSortDir)},this.sortByName=function(){"name"==searchParams.sortType?searchParams.nameSortDir=0==d.searchCount?searchParams.nameSortDir:"ASC"==searchParams.nameSortDir?"DESC":"ASC":(searchParams.sortType="name",searchParams.nameSortDir="ASC");var e=$("#name-sort-option");d.hotelCombinedCollection.sort(),d.currentPage=1,d.refreshResults(),d.setSortDirectionClass(e,searchParams.nameSortDir)},this.sortBySavings=function(){searchParams.sortType="savings";var e=$("#savings-sort-option");d.hotelCombinedCollection.sort(),d.currentPage=1,d.refreshResults(),d.setSortDirectionClass(e,"DESC")},this.sortByDefault=function(){searchParams.sortType="default",d.hotelCombinedCollection.sort(),d.currentPage=1,d.refreshResults()},this.sortByDistanceFromCity=function(){searchParams.sortType="distance_from_city",d.hotelCombinedCollection.sort(),d.currentPage=1,d.refreshResults()},this.router=new Backbone.Router,this.updateSearchRoute=function(e){var t="search/";t+=encodeURIComponent(searchParams.destination)+"/",t+=(""==searchParams.destinationLatitude?"none":encodeURIComponent(searchParams.destinationLatitude))+"/",t+=(""==searchParams.destinationLongitude?"none":encodeURIComponent(searchParams.destinationLongitude))+"/",t+=encodeURIComponent(searchParams.checkIn.replace(/\//g,"-"))+"/",t+=encodeURIComponent(searchParams.checkOut.replace(/\//g,"-"))+"/",t+=searchParams.sortType+"/",t+=searchParams.priceSortDir+"/",t+=searchParams.ratingSortDir+"/",t+=searchParams.nameSortDir+"/",t+=searchParams.landmark+"/",t+=(""==searchParams.hotelName?"none":encodeURIComponent(searchParams.hotelName))+"/",t+=(""==searchParams.minPrice?"none":encodeURIComponent(searchParams.minPrice))+"/",t+=10>parseInt(d.hotelCombinedCollection.priceMax-parseInt(searchParams.maxPrice))?"none/":(""==searchParams.maxPrice?"none":encodeURIComponent(searchParams.maxPrice))+"/",t+=searchParams.rating2+"/",t+=searchParams.rating3+"/",t+=searchParams.rating4+"/",t+=searchParams.rating5+"/";var a="";for(amenity in searchParams.amenities)console.warn(searchParams.amenities[amenity]),a=a.length?a+","+searchParams.amenities[amenity]:searchParams.amenities[amenity];a.length||(a="None"),t+=a+"/",console.warn("amenityString="+a),t+=searchParams.propertyType+"/",t+=searchParams.postPay+"/",t+=(""==searchParams.address?"none":encodeURIComponent(searchParams.address))+"/",t+=(""==searchParams.zipCode?"none":encodeURIComponent(searchParams.zipCode))+"/",t+=searchParams.minGuestReviewRating+"/",t+=searchParams.maxGuestReviewRating+"/",t+=(""==searchParams.latitude?"none":encodeURIComponent(searchParams.latitude))+"/",t+=(""==searchParams.longitude?"none":encodeURIComponent(searchParams.longitude))+"/",t+=(""==searchParams.latLonName?"none":encodeURIComponent(searchParams.latLonName))+"/",t+=searchParams.numRooms+"/",t+=searchParams.includeDiscountAuto+"/",t+=searchParams.includeDiscountSenior+"/",t+=searchParams.includeDiscountGovt+"/",t+=searchParams.includeDiscountBiz+"/",t+=d.currentPage+"/",t+=d.view+"/",t+=d.isFullscreen+"/",console.warn("skip router navigate"),console.warn(t),d.router.navigate(t,{trigger:e,replace:!0})},this.oldRoute=function(e){console.warn("oldRoute"),40>e.length&&(window.location.href=window.location.href.replace(/#.*/,"")),0<d.searchCount||(searchParams.destination=e[0],searchParams.checkIn=e[1].replace(/-/g,"/"),searchParams.checkOut=e[2].replace(/-/g,"/"),searchParams.sortType=e[3],searchParams.priceSortDir=e[4],searchParams.ratingSortDir=e[5],searchParams.nameSortDir=e[6],searchParams.landmark=e[7],searchParams.hotelName="none"==e[8]?"":e[8],searchParams.minPrice="none"==e[9]?"":parseFloat(e[9]),searchParams.maxPrice="none"==e[10]?"":parseFloat(e[10]),searchParams.rating2=parseInt(e[11]),searchParams.rating3=parseInt(e[12]),searchParams.rating4=parseInt(e[13]),searchParams.rating5=parseInt(e[14]),searchParams.amenities1=parseInt(e[15]),searchParams.amenities2=parseInt(e[16]),searchParams.amenities3=parseInt(e[17]),searchParams.amenities4=parseInt(e[18]),searchParams.amenities5=parseInt(e[19]),searchParams.amenities6=parseInt(e[20]),searchParams.amenities7=parseInt(e[21]),searchParams.amenities9=parseInt(e[22]),searchParams.amenities10=parseInt(e[23]),searchParams.postPay=parseInt(e[24]),searchParams.address="none"==e[25]?"":e[25],searchParams.zipCode="none"==e[26]?"":e[26],searchParams.minGuestReviewRating=parseFloat(e[27]),searchParams.maxGuestReviewRating=parseFloat(e[28]),searchParams.latitude="none"==e[29]?"":e[29],searchParams.longitude="none"==e[30]?"":e[30],searchParams.latLonName="none"==e[31]?"":e[31],searchParams.numRooms=parseInt(e[32]),searchParams.includeDiscountAuto=parseInt(e[33]),searchParams.includeDiscountSenior=parseInt(e[34]),searchParams.includeDiscountGovt=parseInt(e[35]),searchParams.includeDiscountBiz=parseInt(e[36]),d.currentPage=parseInt(e[37]),d.view==e[38]?d.isFullscreen=parseInt(e[39]):(d.view=e[38],d.isFullscreen=parseInt(e[39]),"map"==d.view?d.viewMap():d.viewResults()),d.loadSearchParamsIntoUi())},this.router.route("search*path","search",function(e){if(console.warn("router.route"),console.warn(e),null==e&&(e=""),e=e.substring(1,e.length--),e=e.split("/"),console.warn("path"),console.warn(e.length),40<e.length){console.warn("old path"),console.warn(e);var t=[""];t[1]="14",t[2]="9",t[3]="19",t[4]="1073745198",t[5]="44",t[6]="2131",t[7]="40",t[9]="81",t[10]="371",t[11]="1073743315",console.warn("create amenityString");var a="";for(p=17;27>p;p++)console.warn("path[i] = "+e[p]),parseInt(e[p])&&(console.warn("adding amenity "+t[e[p]]),a+=t[e[p]]+",");console.warn(a),console.warn("create newUrl");var i="";for(p=0;17>p;p++)console.warn("adding "+e[p]),i=i+e[p]+"/";for(i+=a,p=28;p<e.length;p++)console.warn("adding "+e[p]),i=i+"/"+e[p];console.warn("newUrl"),console.warn(i),e=i.split("/"),console.warn("new path"),console.warn(e)}if(!(0<d.searchCount)){searchParams.destination=e[0],("me"==searchParams.destination||searchParams.destination.includes("<")||searchParams.destination.includes(">"))&&(searchParams.destination=""),searchParams.destinationLatitude="none"==e[1]?"":e[1],searchParams.destinationLongitude="none"==e[2]?"":e[2],searchParams.checkIn=e[3].replace(/-/g,"/"),searchParams.checkOut=e[4].replace(/-/g,"/"),searchParams.sortType=e[5],searchParams.priceSortDir=e[6],searchParams.ratingSortDir=e[7],searchParams.nameSortDir=e[8],searchParams.landmark=e[9],searchParams.hotelName="none"==e[10]?"":e[10],searchParams.minPrice="none"==e[11]?"":parseFloat(e[11]),searchParams.maxPrice="none"==e[12]?"":parseFloat(e[12]),searchParams.rating2=parseInt(e[13]),searchParams.rating3=parseInt(e[14]),searchParams.rating4=parseInt(e[15]),searchParams.rating5=parseInt(e[16]);var r=e[17].split(",");searchParams.amenities="none"==r[0].toLowerCase()?[]:r,console.warn("amenities array from hash"),console.warn(r),searchParams.propertyType=parseInt(e[18]),searchParams.postPay=parseInt(e[19]),searchParams.address="none"==e[20]?"":e[20],searchParams.zipCode="none"==e[21]?"":e[21],searchParams.minGuestReviewRating=parseFloat(e[22]),searchParams.maxGuestReviewRating=parseFloat(e[23]),searchParams.latitude="none"==e[24]?"":e[24],searchParams.longitude="none"==e[25]?"":e[25],searchParams.latLonName="none"==e[26]?"":e[26],searchParams.numRooms=parseInt(e[27]),searchParams.includeDiscountAuto=parseInt(e[28]),searchParams.includeDiscountSenior=parseInt(e[29]),searchParams.includeDiscountGovt=parseInt(e[30]),searchParams.includeDiscountBiz=parseInt(e[31]),d.currentPage=parseInt(e[32]),d.view==e[33]?d.isFullscreen=parseInt(e[34]):(d.view=e[33],d.isFullscreen=parseInt(e[34]),"map"==d.view?d.viewMap():d.viewResults()),d.loadSearchParamsIntoUi(),d.search()}}),this.getGeoLocation=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(searchApp.geoLocationSearch)},this.geoLocationSearch=function(e){searchParams.destinationLatitude=e.coords.latitude,searchParams.destinationLongitude=e.coords.longitude,searchParams.latitude=e.coords.latitude,searchParams.longitude=e.coords.longitude,searchParams.latLonName="me",searchParams.sortType="latlon",searchApp.search()},this.landmarkMarkerInfoWindows={},this.disableScroll=function(){"mobile"==d.layout?$("footer,#MainTable,#MainContent").hide():(document.body.style.overflow="hidden",document.body.scroll="no",document.body.style.overflow="hidden")},this.enableScroll=function(){"mobile"==d.layout?($("footer,#MainTable,#MainContent").show(),window.scrollTo(0,this.lastScrollY)):(document.body.style.overflow="",document.body.scroll="yes",document.body.style.overflow="")},this.disableMobileScroll=function(t){t.preventDefault()},this.enterFullscreenMap=function(){this.isFullscreen=1,$("html, body").animate({scrollTop:0},0),this.disableScroll();var e=$("#fullscreen-map-container");e.append($("#mapViewTable")),e.prepend($("#paging-container")),$("#fullscreen-map-container").show(),this.resizeMap(),d.updateSearchRoute()},this.exitFullscreenMap=function(){d.isFullscreen=0,this.disableScroll(),$("#Rates-Column").append($("#mapViewTable"));var e=$("#Rates-Column");e.prepend($("#paging-container")),$("#fullscreen-map-container").hide(),this.viewMap(),d.updateSearchRoute()},this.viewMap=function(){d.enableScroll(),d.view="map","undefined"==typeof d.map&&d.newMap(d.mapCoords.lat,d.mapCoords.lng,d.viewMap),$("#Rates").hide(),$("#mapViewTable").show(),$("#mapViewTable").css("display","table"),$("#Map > span").text(lang.backToListView),$("#viewMapButton").hide(),$("#paging-bottom").hide(),$("#results-grid-container").show(),d.isFullscreen&&d.enterFullscreenMap(),d.updateSearchRoute(),d.resizeMap(),d.centerMap(),d.isFullscreen?$("html, body").animate({scrollTop:0},0):$("html, body").animate({scrollTop:$("#"+searchParams.jumpToDiv).offset().top},0),d.disableScroll()},this.viewResults=function(){d.view="results",$("#Rates").show(),this.enableScroll(),$("#mapViewTable").hide(),$("#Map > span").text(lang.mapView),$("#Map").is(":visible")||$("#viewMapButton").show(),$("#results-grid-container").hide(),$("#paging-bottom").show(),d.updateSearchRoute()},this.toggleMapView=function(){"map"==d.view?(d.isFullscreen&&d.exitFullscreenMap(),d.viewResults()):d.viewMap(),"desktop"==d.layout&&$("#paging-container").show()},this.resizeMap=function(){if("undefined"!=typeof d.map&&(google.maps.event.trigger(d.map,"resize"),!!$("#mapViewTable").is(":visible"))){var e=$("#searchResultsMap"),t=$(window).width()-e.offset().left;if(!this.isFullscreen){var a=$("#Rates-Column").width()-$("#RatesGridContainer").width();t>a&&(t=a)}e.width(t);var i=$(window).height()-(768<=$(window).width()?$("#sort-by").height():-10)-18;d.isFullscreen||(i-=parseInt($("#Content").css("padding-top"))),e.height(i);$("#paging-container").offset().top+$("#paging-container").height();$("#RatesGridBody").height(i-$("#RatesGridHeader").height()),$("#fullscreen-map-container").width($(window).width()),$("#fullscreen-map-container").height($(window).height()-($("[data-ref=mobileNav]").is(":visible")?$("[data-ref=mobileNav]").height():0)),google.maps.event.trigger(this.map,"resize"),v?l(v.attr("id")):d.centerMap()}},this.refreshEvents=function(e){$.ajax("/Common/cfcs/services/Search.cfc?method=getEvents&"+$.param({City:e.destination,InDate:e.checkIn,OutDate:e.checkOut,destinationLatitude:searchParams.destinationLatitude,destinationLongitude:searchParams.destinationLongitude}),{dataType:"html"}).done(function(e){$("#Events").html(e.replace(/HPApp.getController\(\'HotelSearch\'\)./gi,"searchApp.")),$("#events-wrapper .fa-times").on("click",function(t){t.preventDefault(),$("#events-wrapper").hide()})})},this.refreshPerDiemRates=function(e){searchParams.govPerDiem&&$.ajax("/Common/cfcs/services/Search.cfc?method=getPerDiemRates&"+$.param({City:e.destination,InDate:e.checkIn,OutDate:e.checkOut,destinationLatitude:searchParams.destinationLatitude,destinationLongitude:searchParams.destinationLongitude}),{dataType:"html"}).done(function(e){var t=$("#Gov-Per-Diem-Rates");t.length?t.html(e):$(e).insertAfter("#Events")})},this.setPerDiemMax=function(e){$("#price_slider").slider("values",1,e),$.ajax("/Common/cfcs/services/Search.cfc?method=setMaxPerDiem&"+$.param({max:e}),{dataType:"html"}).done(function(){})},this.openEventDetails=function(e){var t=$("#EventModalBackground");d.disableScroll(),t.width($(window).width()),t.height($(window).height()),t.show();var a=$("#event_details");a.load("/Common/Popups/CitywideDetail.htm?"+$.param({eid:e})+" #PopupContentTable"),a.show();var i=($(window).width()-a.width())/2+$(window).scrollLeft(),r=($(window).height()-a.height())/2+$(window).scrollTop();a.offset({top:r,left:i})},this.closeEventDetails=function(){$("#EventModalBackground").hide(),"map"!=d.view&&d.enableScroll(),$("#event_details").hide()},this.openLandmarkDropdown=function(){if("mobile"==d.layout)$("#sort-by").hide(),$("#LandmarksGridContainer").css("position","").show();else{var e=$("#LandmarkModalBackground");d.disableScroll(),e.width($(window).width()),e.height($(window).height()),e.show();var t=$("#LandmarksGridContainer");t.show();var a=$("#sort-by"),i=$("#neighborhood-sort-option").offset();t.offset({top:i.top+a.height()+2,left:i.left+2})}},this.closeLandmarkDropdown=function(){$("#LandmarkModalBackground").hide(),"map"!=d.view&&d.enableScroll(),$("#LandmarksGridContainer").hide()},this.createCustomLandmark=function(){if("undefined"!=typeof d.map&&""!==d.customLandmark.name){var e=d.createLandmarkMarker(new google.maps.LatLng(d.customLandmark.lat,d.customLandmark.lng),"custom","<div align=\"left\"><b>"+d.customLandmark.name+"</b></div>");d.landmarkMarkers.custom=e,d.landmarkMarkerInfoWindows.custom.open(d.map,d.landmarkMarkers.custom)}},this.sortByZip=function(){d.setSortDirectionClass();var e=$("#zip-sort-option");e.html(lang.distanceFrom2.replace("[var1]",searchParams.zipCode)),d.setSortDirectionClass(e,"ASC"),$.ajax("/common/cfcs/services/search.cfc?method=getAddressCenter&"+$.param({zip:searchParams.zipCode}),{dataType:"json"}).done(function(e){1===e.data.length&&(d.mapCoords.lat=parseFloat(e.data[0].lat),d.mapCoords.lng=parseFloat(e.data[0].lon),d.customLandmark.name=e.data[0].name,d.customLandmark.lat=d.mapCoords.lat,d.customLandmark.lng=d.mapCoords.lng,"undefined"!=typeof google&&(d.centerMap(),d.createCustomLandmark()))})},this.sortByAddress=function(){var e=$("#zip-sort-option");e.html(lang.distanceFrom2.replace("[var1]",searchParams.address)),d.setSortDirectionClass(e,"ASC"),$.ajax("/common/cfcs/services/search.cfc?method=getAddressCenter&"+$.param({address:searchParams.address}),{dataType:"json"}).done(function(e){1===e.data.length&&(d.mapCoords.lat=parseFloat(e.data[0].lat),d.mapCoords.lng=parseFloat(e.data[0].lon),d.customLandmark.name=e.data[0].name,d.customLandmark.lat=d.mapCoords.lat,d.customLandmark.lng=d.mapCoords.lng,"undefined"!=typeof google&&(d.centerMap(),d.createCustomLandmark()))})},this.sortByLandmark=function(){var e=$("#neighborhood-sort-option");if(d.setSortDirectionClass(e,"ASC"),d.landmarkCollection instanceof Backbone.Collection){var t=d.landmarkCollection.get(searchParams.landmark);if(t){var a=t.get("name");30<a.length&&(a=a.substr(0,30)+"..."),e.html(lang.distanceFrom2.replace("[var1]",a)),d.mapCoords.lat=parseFloat(t.get("lat")),d.mapCoords.lng=parseFloat(t.get("lon")),d.centerMap(),"undefined"!=typeof google&&d.landmarkMarkerInfoWindows[searchParams.landmark].open(d.map,d.landmarkMarkers[searchParams.landmark])}}},this.init=function(){function e(){$("[name=City]").placesAutocomplete({placeDetailSelector:"#Search-Box",placeDetailAttribute:"data-geo"}),$("[name=destinationLatitude]").val(searchParams.destinationLatitude),$("[name=destinationLongitude]").val(searchParams.destinationLongitude)}function t(){if(d.isFiltering)return void console.warn("SKIP AMENITYCHANGE IS BUSY");d.isFiltering=!0,d.preloaded=!1;var e=$(this);if(-1<e.prop("id").indexOf("All"))var t=e.prop("id").replace("All",""),a=t;else var t="All"+e.prop("id"),a=e.prop("id");var i=e.prop("checked");$("#"+t).prop("checked",i),a=a.replace("Amenities",""),-1<searchParams.amenities.indexOf(a)?searchParams.amenities.splice(searchParams.amenities.indexOf(a),1):i&&searchParams.amenities.push(a),d.search(),d.isFiltering=!1}for(var a in $("#SortByInfoModalBackground, #SortByInfoContainer button").on("click",function(){hideSortInformation()}),"Rating"==searchParams.sortType&&(searchParams.sortType="rating"),"HotelName"==searchParams.sortType&&(searchParams.sortType="name"),"Price"==searchParams.sortType&&(searchParams.sortType="price"),"Savings"==searchParams.sortType&&(searchParams.sortType="savings"),searchParams)d.defaultSearchParams[a]=searchParams[a];if($("#frmGroup").submit(function(t){return t.preventDefault(),d.search(),!1}),m=new m({el:"#Rates",collection:L}),u=new u({el:"#RatesGridTable",collection:L}),h=new h({el:"#LandmarksGridTable",collection:this.landmarkCollection}),bottomPagingView=new T({el:"#paging-bottom"}),$("#discounts .discount").off(),$("#chkIncludeDiscountAuto, #chkIncludeDiscountSenior, #chkIncludeDiscountGovt, #chkIncludeDiscountBiz").on("change",function(){var e=$(this);""==e.prop("checked")?$(this).parent().removeClass("bounceIn"):$(this).parent().addClass("bounceIn")}),$("<input type=\"hidden\" value=\"\" name=\"destinationLatitude\" data-geo=\"lat\"><input type=\"hidden\" value=\"\" name=\"destinationLongitude\" data-geo=\"lng\">").insertAfter("[name=City]"),"undefined"==typeof google){var i=0;autocompleteInterval=setInterval(function(){i++,"undefined"!=typeof google&&(e(),clearInterval(autocompleteInterval)),5<i&&($("[name=City]").autocomplete("/CitySearch.htm",{minChars:2,matchSubset:0,delay:0,maxItemsToShow:15,cacheLength:0}),clearInterval(autocompleteInterval))},1e3)}else e();$("#change").click(function(){$(this).fadeOut(),$("#destination, #rooms").addClass("block")}),$("#NegotiatedRatesFilter select").on("change",function(){d.setFilters()}),$("#PropertyFilter select").on("change",function(){d.setFilters()}),$("[name=ReviewMin]").on("change input",function(){d.setFilters()}),$("[name=ReviewMax]").on("change input",function(){d.setFilters()});var r=0;$("[name=PriceMin]").off(),$("[name=PriceMin]").on("change input",function(){r++,setTimeout(function(){r--,0==r&&d.setFilters()},100)});var o=0;$("[name=PriceMax]").off(),$("[name=PriceMax]").on("change input",function(){o++,setTimeout(function(){o--,0==o&&d.setFilters()},100)}),$("[name=Rating]").off(),$("[name=Rating]").on("change",function(){d.setFilters()}),$("input[type=text][name=HotelName]").off(),$("input[type=text][name=HotelName]").on("keyup",function(){d.setFilters()}),$("#moreAmenitiesLink").off().on("click",function(t){t.preventDefault(),"+ More"==$(this).text()?($(this).text("+ Less"),$("#allAmenities").show(),$("#someAmenities").hide()):($(this).text("+ More"),$("#allAmenities").hide(),$("#someAmenities").show())}),$("#mobile-apply-btn").on("click",function(){d.hideMobileFullscreenView()}),this.initPriceSlider(),this.initGuestReviewSlider(),$(".clearFilters").on("click",function(t){t.preventDefault(),t.stopPropagation(),d.clearFilters()}),$(".clearFilters").hide();var s=$("#progressbar");s.hide(),"function"==typeof s.progressbar&&s.progressbar({value:!1}),$("#RatesGridHeader .cost").on("click",function(){$("#price-sort-option").trigger("click")}),$("#RatesGridHeader .name").on("click",function(){$("#name-sort-option").trigger("click")}),$("body").addClass("IndividualSearch"),$("#EventModalBackground, #event_details").on("click",function(){d.closeEventDetails()}),$("#LandmarkModalBackground").on("click",function(){d.closeLandmarkDropdown()}),$("#stars-sort-option").on("click",function(t){t.preventDefault(),t.stopPropagation(),"mobile"==d.layout&&d.hideMobileFullscreenView(),d.sortByRating()}),$("#name-sort-option").on("click",function(t){t.preventDefault(),t.stopPropagation(),"mobile"==d.layout&&d.hideMobileFullscreenView(),d.sortByName()}),$("#savings-sort-option").on("click",function(t){t.preventDefault(),t.stopPropagation(),"mobile"==d.layout&&d.hideMobileFullscreenView(),d.sortBySavings()}),$("#neighborhood-sort-option").on("click",function(t){t.preventDefault(),t.stopPropagation(),d.openLandmarkDropdown()}),$("#price-sort-option").on("click",function(t){t.preventDefault(),t.stopPropagation(),"mobile"==d.layout&&d.hideMobileFullscreenView(),d.sortByPrice()}),$("#zip-sort-option").on("click",function(t){t.preventDefault(),t.stopPropagation(),d.openAddressFormContainer()}),$("#AddressFormModalBackground").on("click",function(){d.closeAddressFormContainer()}),$("#frmAddressSort").on("submit",function(t){t.preventDefault();var e=$(this).find("[name=zipcode]").val(),a=$(this).find("[name=address]").val();""===e?""!==a&&(searchParams.address==a?(searchParams.sortType="address",d.hotelCombinedCollection.sort(),d.refreshResults(),d.sortByAddress()):(searchParams.sortType="address",searchParams.zipCode="none",searchParams.address=a,d.search(),d.sortByAddress())):searchParams.zipCode==e?(searchParams.sortType="zip",d.hotelCombinedCollection.sort(),d.refreshResults(),d.sortByZip()):(searchParams.sortType="zip",searchParams.zipCode=e,searchParams.address="none",d.search(),d.sortByZip()),d.updateSearchRoute(),d.closeAddressFormContainer(),"mobile"==d.layout?(d.hideMobileFullscreenView(),$("#sort-by").show(),$("#address-dialog-form").hide()):$("#address-dialog-form").show()}),$("#frmAddressSort [type=button]").on("click",function(t){t.preventDefault(),t.stopPropagation(),"mobile"==d.layout?($("#sort-by").show(),$("#address-dialog-form").hide()):(d.closeAddressFormContainer(),$("#address-dialog-form").show())}),$("#Map").unbind(),$("#Map").on("click",function(){d.toggleMapView()}),$("#viewMapButton").button().on("click",function(){d.toggleMapView()}),$("#RatesGridBody").on("mouseover",function(t){var t=$(t.target);if(t.is("td")){var a=$(t.parent());g!=a&&v!=a&&(null!=g&&g.removeClass("rates-grid-highlight"),a.addClass("rates-grid-highlight"),g=a)}}),$("#RatesGridBody").on("mouseout",function(t){var t=$(t.target);g&&g.removeClass("rates-grid-highlight")}),$("#RatesGridBody").on("click",function(t){var t=$(t.target);if(t.is("td")){var a=$(t.parent());v!=a&&(null!=v&&v.removeClass("rates-grid-selected"),a.removeClass("rates-grid-highlight"),a.addClass("rates-grid-selected"),v=a),l(a[0].id)}$("#mapViewTable").removeClass("fullWidth"),$("#RatesGridContainer").removeClass("fullWidth"),$("#searchResultsMap").removeClass("noWidth"),d.resizeMap()}),$("#LandmarksGridBody").on("mouseover",function(t){var t=$(t.target);if(t.is("td")&&t.hasClass("landmark")){var a=$(t.parent());f!=a&&b!=a&&(null!=f&&f.removeClass("landmarks-grid-highlight"),a.addClass("landmarks-grid-highlight"),f=a)}}),$("#LandmarksGridBody").on("mouseout",function(t){var t=$(t.target);f&&f.removeClass("landmarks-grid-highlight")}),$("#LandmarksGridBody").on("click",function(t){t.preventDefault(),t.stopPropagation(),"mobile"==d.layout&&(d.hideMobileFullscreenView(),$("#sort-by").show());var t=$(t.target);if(t.is("td")&&t.hasClass("landmark")){var a=$(t.parent());if(b!=a){null!=b&&b.removeClass("landmarks-grid-selected"),a.removeClass("landmarks-grid-highlight"),a.addClass("landmarks-grid-selected"),b=a;var i=a[0].id.replace("landmarkGrid","");searchParams.landmark==i?(searchParams.sortType="landmark",d.hotelCombinedCollection.sort(),d.refreshResults(),d.sortByLandmark()):(searchParams.sortType="landmark",searchParams.landmark=i,d.sortByLandmark(),d.search())}d.closeLandmarkDropdown()}}),$("#allAmenities [name=Amenities]").off().on("click",t),$("#someAmenities [name=Amenities]").off(),$("#someAmenities [name=Amenities]").off().on("click",t),$("#sort-by").on("click",function(t){t.preventDefault(),showSortInformation()}),d.addWindowListeners(),searchParams.isSeo&&(searchParams.isSeo=0,searchApp.initSortUi(),d.loadSearchParamsIntoUi()),Backbone.history.start()},searchParams.isSeo||d.init(),this.convertSeoToSearch=function(e){"function"==typeof e&&(this.presearchCleanup=e),$(window).off(),$("#Search-Box").removeClass("sticky show-bar expand-fields"),768>$(window).width()?$("#Filter").hide():$("#Filter").show(),$("<div id=\"hotelResultsInfo\" class=\"filter-section\"><span id=\"hotelResultsCount\"></span><a href=\"#\" class=\"clearFilters\"><i class=\"fa fa-times\"></i> "+lang.removeFilters+"</a></div>").insertBefore("#filter-stars"),$("[name=Rating]:checked").each(function(){searchParams["rating"+$(this).val()]=parseInt($(this).val())}),0<parseInt(searchParams.rating5)&&$("#Rating5").prop("checked","checked"),0<parseInt(searchParams.rating4)&&$("#Rating4").prop("checked","checked"),0<parseInt(searchParams.rating3)&&$("#Rating3").prop("checked","checked"),0<parseInt(searchParams.rating2)&&$("#Rating2").prop("checked","checked"),0<parseInt(searchParams.amenities1)&&$("#Amenities1").prop("checked","checked"),0<parseInt(searchParams.amenities2)&&$("#Amenities2").prop("checked","checked"),0<parseInt(searchParams.amenities3)&&$("#Amenities3").prop("checked","checked"),0<parseInt(searchParams.amenities4)&&$("#Amenities4").prop("checked","checked"),0<parseInt(searchParams.amenities5)&&$("#Amenities5").prop("checked","checked"),0<parseInt(searchParams.amenities6)&&$("#Amenities6").prop("checked","checked"),0<parseInt(searchParams.amenities7)&&$("#Amenities7").prop("checked","checked"),0<parseInt(searchParams.amenities9)&&$("#Amenities9").prop("checked","checked"),0<parseInt(searchParams.amenities10)&&$("#Amenities10").prop("checked","checked"),0<parseInt(searchParams.amenities11)&&$("#Amenities11").prop("checked","checked"),$("input[type=text][name=HotelName]").val(searchParams.hotelName),$("[name=Amenities]:checked").each(function(){searchParams["amenities"+$(this).val()]=$(this).val()}),$("<div id=\"fullscreen-map-container\"></div>").appendTo("body");var t="<div id=\"AddressFormContainer\"><div id=\"address-dialog-form\"><h3>"+lang.sortByZipOrAddress+"</h3><form id=\"frmAddressSort\"><fieldset><input type=\"text\" name=\"zipcode\" value=\"\" placeholder=\""+lang.enterZip+"\" class=\"text ui-widget-content ui-corner-all\"><label>"+lang.or+"</label><textarea name=\"address\" placeholder=\""+lang.enterStreetAddress+"\"></textarea><input type=\"submit\" value=\""+lang.updateSearchResults+"\"><input type=\"button\" value=\""+lang.cancel+"\"></fieldset></form></div></div>";$(t).appendTo("body"),$("<div id=\"AddressFormModalBackground\" class=\"modal-background\"></div>").appendTo("body");var a="<div id=\"LandmarksGridContainer\"><div id=\"LandmarksGridHeader\"><table><tr><th>"+lang.selectLandmark+"</th></tr></table></div><div id=\"LandmarksGridBody\"><table id=\"LandmarksGridTable\"></table></div></div>";$(a).appendTo("body"),$("<div id=\"LandmarkModalBackground\" class=\"modal-background\"></div>").appendTo("body"),$("<div id=\"EventModalBackground\" class=\"modal-background\"></div>").appendTo("body"),$("<div id=\"event_details\"></div>").appendTo("body");var i="<div id=\"paging-container\"><div><ul id=\"sort-by\"><li class=\"first\"><a href=\"\"><span id=\"sortBy\"></span>"+lang.sortBy+"</a></li><li class=\"sort-option\" id=\"neighborhood-sort-option\">"+lang.landmark+"</li><li class=\"sort-option\" id=\"zip-sort-option\">"+lang.zipOrAddress+"</li><li class=\"sort-option\" id=\"price-sort-option\">"+lang.price+"</li><li class=\"sort-option\" id=\"stars-sort-option\">"+lang.stars+"</li><li class=\"sort-option\" id=\"name-sort-option\">"+lang.name+"</li><li class=\"sort-option no-border\" id=\"savings-sort-option\">"+lang.sortBySavings+"</li><li class=\"last\"></li></ul></div></div>";$("#Rates-Column .container_hp").first().prepend(i),$("<div id=\"viewmapbutton-container\" style=\"display:none;\"><input type=\"button\" id=\"viewMapButton\" value=\""+lang.ViewMap+"\"></div>").insertAfter("#paging-container");var r="<table id=\"mapViewTable\" style=\"display: none;\"><tr><td><div id=\"RatesGridContainer\"><div id=\"RatesGridHeader\"><table><tr><th class=\"cost\">"+lang.cost+"</th><th class=\"name\">"+lang.name+"</th></tr></table></div><div id=\"RatesGridBody\"><table id=\"RatesGridTable\"></table></div></div></td><td><div id=\"map-container\"><div id=\"searchResultsMap\"></div></div></td></tr></table>";if($(r).insertAfter("#viewmapbutton-container"),searchParams.hasNegotiatedRates&&searchParams.showNegotiatedRatesFilter){var o="<div id=\"NegotiatedRatesFilter\" class=\"filter-section\"><span class=\"category\">"+lang.negotiatedRates+"</span><span class=\"field-wrap\"><select><option value=\"0\">"+lang.onlyShowNegotiatedRates+"</option>"+(searchParams.showNegotiatedRatesBestRatesFilter?"<option value=\"1\">"+lang.showBestRates+"</option>":"")+"<option value=\"2\">"+lang.hideNegotiatedRates+"</option><option value=\"3\">"+lang.showAllRates+"</option></select></span></div>";$(o).insertBefore("#filter-stars")}if(searchParams.showPropertyFilter){var s="<div id=\"PropertyFilter\" class=\"filter-section\"><span class=\"category\">"+lang.PropertyType+"</span><span class=\"field-wrap\"><select><option value=\"0\">"+lang.All+"</option><option value=\"1\">"+lang.Hotel+"</option><option value=\"2\">"+lang.Airbnb+"</option><option value=\"3\">"+lang.Apartments+"</option></select></span></div>";$(s).insertBefore("#Amenities")}$("<div id=\"progressbar\"></div>").insertAfter("#mapViewTable"),$("<div class=\"container_hp\" id=\"Events\"></div>").insertAfter("#progressbar"),$("<div id=\"paging-bottom\"></div>").insertAfter("#Rates"),$("#price-range").remove();var n="";n+="<div id=\"price-range\" class=\"filter-section\"><span class=\"category\">"+lang.priceRange+"</span><input type=\"hidden\" name=\"PriceMin\" id=\"PriceMin\" value=\"0\" /><input type=\"hidden\" name=\"PriceMax\" id=\"PriceMax\" value=\"999\" /><div class=\"slider_container\"><div class=\"slider\" id=\"price_slider\"></div></div></div>",n+="<div id=\"guest-review-range\" class=\"filter-section\"><span class=\"category\">"+lang.guestReviews+"</span><input type=\"hidden\" name=\"ReviewMin\" id=\"ReviewMin\" value=\"0\" /><input type=\"hidden\" name=\"ReviewMax\" id=\"ReviewMax\" value=\"5\" /><div class=\"slider_container\"><div class=\"slider\" id=\"guest_review_slider\"></div></div></div>",$(n).insertAfter("#filter-hotelname"),$("#citywide-disclaimer").hide(),$("#Charts").hide(),$("#Reviews").hide(),$("#Bottom-Links").hide(),$(".gsearch").hide(),$("#small-review").hide(),$("#destination label").text(lang.city),$("<div id=\"page-header-wrapper2\">").insertBefore("#page-header-wrapper"),$("#page-header-wrapper").hide(),$("#page-header-wrapper2").append($("#Search-Box")),$("#paging-container").show(),$("#quick-jump").hide(),$("#top-comment").hide(),$("#Links-Sidebar .links-group").hide(),$("#Links-Sidebar").show(),$("#event-rates-grid").remove(),$("#Rates h2").remove(),-1<window.location.hash.indexOf("#search")&&$("html, body").animate({scrollTop:$("#"+searchParams.jumpToDiv).position().top},200),d.init()},this.deinitMobileNav=function(){"map"==d.view&&searchApp.toggleMapViewMobile(),d.hideMobileFullscreenView(),d.layout="desktop",$("body").removeClass("MobileSite"),$("#sort-by").appendTo("#paging-container > div:first").show(),$("#address-dialog-form").appendTo("#AddressFormContainer"),$("#LandmarksGridContainer").appendTo("body"),$("#Filter-Column").insertBefore("#Rates-Column"),$("[data-ref=mobileFullscreenView]").remove(),$(".star-icon > span").remove(),$("#Filter").show(),$("#viewmapbutton-container").show(),$("#back-to-top").show(),d.closeLandmarkDropdown(),$("#address-dialog-form").show(),$("#paging-container").show(),setTimeout(function(){d.goToPage(1)},250)},this.initNavButtons=function(){1!==d.isNavBtnsDisplayed&&("map"==d.view&&searchApp.toggleMapView(),$("#Filter").hide(),$("#sort-by").hide(),d.closeAddressFormContainer(),d.closeLandmarkDropdown(),d.layout="mobile",$("<div class=\"container_hp\" data-ref=\"mobileNavContainer\"><div data-ref=\"mobileNav\" class=\"mobile nav\"><div class=\"inner\"></div></div></div>").prependTo("#Content"),$("<div><a href=\"javascript:void(0);\" onclick=\"searchApp.showMobileSortContainer()\">"+lang.sortResults+"</a></div>").appendTo("[data-ref=mobileNav] > .inner"),$("<div><a href=\"javascript:void(0);\" onclick=\"searchApp.showMobileFilterContainer()\">"+lang.filters+"</a></div>").appendTo("[data-ref=mobileNav] > .inner"),$("<div><a href=\"javascript:void(0);\" onclick=\"searchApp.toggleMapViewMobile()\">"+lang.map+"</a></div>").appendTo("[data-ref=mobileNav] > .inner"),$("<div data-ref=\"mobileFullscreenView\" class=\"mobile fixed fullscreen\" style=\"display:none;\"><div class=\"inner\"></div></div>").appendTo("body"),$("<div class=\"nav\"><div class=\"back\"><a href=\"javascript:void(0);\" onclick=\"searchApp.hideMobileFullscreenView()\"><span><i class=\"fa fa-arrow-left\"></i> "+lang.back+"</span></a></div><div class=\"title\"></div></div>").appendTo("[data-ref=mobileFullscreenView] > .inner"),$("<div class=\"container\" data-ref=\"sortContainer\"></div>").appendTo("[data-ref=mobileFullscreenView] .inner"),$("<div class=\"container\" data-ref=\"filterContainer\"></div>").appendTo("[data-ref=mobileFullscreenView] .inner"),$("#sort-by").appendTo("[data-ref=sortContainer]"),$("#address-dialog-form").show().appendTo("[data-ref=sortContainer]").hide(),$("#LandmarksGridContainer").appendTo("[data-ref=sortContainer]").hide(),$("#Filter-Column").appendTo("[data-ref=filterContainer]"),$("#close-filter").hide(),$("#mobile-apply-btn").show(),!$(".clearFilters").prev().is("br")&&$("<br>").insertBefore(".clearFilters"),$("#viewmapbutton-container").hide(),$("#back-to-top").hide(),$(".star-icon").append("<span class=\"fa fa-star\"></span>"),$("#Filter").show(),$("#sort-by").show(),setTimeout(function(){d.goToPage(1)},250),d.isNavBtnsDisplayed=1)},this.initMobileNav=function(){d.didInitMobileNav=1,$("body").addClass("MobileSite"),setTimeout(function(){d.goToPage(1)},250)},this.unlockDeals=function(){searchParams.showUnlockPrivateDeals=0;var e=$("#EventModalBackground");d.disableScroll(),e.width($(window).width()),e.height($(window).height()),e.fadeIn();var t=$("#event_details");t.html("<br><h3 style=\"width:100%;display:block;text-align:center;\"><i class=\"fa fa-unlock\" aria-hidden=\"true\"></i> Unlocking Special Deals!<br><br><i class=\"fa fa-refresh fa-spin fa-3x fa-fw\"></i></h3>"),t.show();var a=($(window).width()-t.width())/2+$(window).scrollLeft(),i=($(window).height()-t.height())/2+$(window).scrollTop();t.offset({top:i,left:a}),setTimeout(function(){t.hide(),e.fadeOut(),d.enableScroll()},3e3),lastSearchParams.destination="refresh","me"==searchParams.latLonName?d.getGeoLocation():d.search()},this.joinNewsletter=function(e,t){$.ajax("/common/cfcs/services/search.cfc?method=joinNewsletter&"+$.param({kw:"secret rates",email:e,city:searchParams.destination,checkIn:searchParams.checkIn,checkOut:searchParams.checkOut,numRooms:searchParams.numRooms}),{dataType:"json"}),t()},this.addWindowListeners=function(){$(window).resize(function(){"map"==d.view&&d.resizeMap(),$("#LandmarksGridContainer").is(":visible")&&d.openLandmarkDropdown(),$("#Map").is(":visible")||"results"!=d.view||$("#viewMapButton").show(),1008>$(window).width()?d.initNavButtons():($("[data-ref=mobileNavContainer]").remove(),d.isNavBtnsDisplayed=0,d.deinitMobileNav())}),$(window).on("scroll resize",function(){var e=$(window).scrollTop(),t=$(window).height(),i=$(window).width(),r=$("#Filter").height()+50;470<=e&&t>=r&&1009<=i?$("#Filter").addClass("sticky"):$("#Filter").removeClass("sticky")}),$(window).trigger("resize")};var N=popDateInputs;window.popDateInputs=function(){var e=$(arguments[1]);N.apply(window,arguments),"OutDate_disp"==e.attr("id")?$("#OutDate").trigger("change"):"InDate_disp"==e.attr("id")&&$("#InDate").trigger("change")},$("[name=City]").on("change",function(){for(var e in searchParams.destination=$("[name=City]").val(),searchParams)d.preloadSearchParams[e]=searchParams[e];d.preloadSearch()}),$("#OutDate").on("change",function(){for(var e in d.setSearchParams(),searchParams)d.preloadSearchParams[e]=searchParams[e];d.preloadSearch()}),$("#InDate").on("change",function(){$("#OutDate").val()!=searchParams.checkOut&&$("#OutDate").trigger("change")}),this.toggleMapViewMobile=function(){"map"!==d.view&&(d.lastScrollY=window.scrollY),d.isFullscreen=!0,d.hideMobileFullscreenView(),"mobile"==d.layout&&$("#paging-container").hide(),d.toggleMapView()},this.newSearchMobile=function(){"results"!==searchApp.view&&d.toggleMapViewMobile(),d.hideMobileFullscreenView(),window.scrollTo(0,0),$("#change").click(),$("[name=City]").focus()},this.hideMobileFullscreenView=function(){d.enableScroll(),$("[data-ref=mobileFullscreenView]").hide(),d.refreshResultsOnHideMobileFullscreenView&&(d.goToPage(d.currentPage),d.refreshResultsOnHideMobileFullscreenView=0)},this.showMobileFullscreenView=function(){d.disableScroll(),$("[data-ref=mobileFullscreenView]").show()},this.setMobileFullscreenViewTitle=function(e){$("[data-ref=mobileFullscreenView] > .inner > .nav > .title").html(e)},this.showMobileSortContainer=function(){d.lastScrollY=window.scrollY,"results"!==searchApp.view&&d.toggleMapViewMobile();var e="<a href=\"javascript:void(0);\" onclick=\"showSortInformation()\"><span id=\"sortBy\"></span>"+lang.sortResults+"</a>";d.setMobileFullscreenViewTitle(e),$("[data-ref=sortContainer]").show(),$("[data-ref=filterContainer]").hide(),$("#sort-by").show(),d.closeLandmarkDropdown(),$("#address-dialog-form").hide(),d.showMobileFullscreenView()},this.showMobileFilterContainer=function(){d.lastScrollY=window.scrollY,"results"!==searchApp.view&&d.toggleMapViewMobile(),d.setMobileFullscreenViewTitle(lang.filters),$("[data-ref=sortContainer]").hide(),$("[data-ref=filterContainer]").show(),$("#Filter").show(),d.showMobileFullscreenView()},this.createKayakSearch=function(){if(searchParams.showFlightSearch){var e="<div id=\"k-search\"><span class=\"k-h1\">"+lang.KayakFlightSearch+"</span><form><div id=\"k-location1\"><input placeholder=\""+lang.DepartFromAirport+"\" spellcheck=\"false\"></div><div id=\"k-location2\"><input placeholder=\""+lang.ArrivalAirport+"\" spellcheck=\"false\"></div><div id=\"k-dates-wrapper\"><div class=\"k-dates\"><input type=\"hidden\" id=\"InDateKayak\" name=\"InDateKayak\" value=\"\"><input id=\"InDateKayak_disp\" name=\"InDateKayak_disp\" class=\"datepicker\" dependentdate=\"OutDateKayak\" placeholder=\"mm/dd/yyyy\"></div><div class=\"k-dates last\"><input type=\"hidden\" id=\"OutDateKayak\" name=\"OutDateKayak\" value=\"\"><input id=\"OutDateKayak_disp\" name=\"OutDateKayak_disp\" class=\"datepicker\" parentdate=\"InDateKayak\" placeholder=\"mm/dd/yyyy\"></div><div class=\"clear\"></div></div><div id=\"k-select\"><select><option value=\"1adult\">"+lang.OnePassenger+"</option><option value=\"2adults\">"+lang.NPassengers.replace("{n}","2")+"</option></select></div><input type=\"submit\" value=\""+lang.SearchFlights+"\"></form></div>";$(e).insertAfter("#Map"),$("#k-search input[type=submit]").on("click",function(t){t.preventDefault(),t.stopPropagation(),d.openKayakSearch()})}},this.openKayakSearch=function(){var e=$("#k-location1 input").val(),t=$("#k-location2 input").val(),a=$.datepicker.formatDate("yy-mm-dd",new Date($("#InDateKayak").val())),i=$.datepicker.formatDate("yy-mm-dd",new Date($("#OutDateKayak").val())),r=$("#k-select option:selected").val(),o=searchParams.baseFlightSearchURL+"/flights/";""==e||""==t||"NaN-NaN-NaN"==a||"NaN-NaN-NaN"==i||(o+=e+"-"+t+"/"+a+"/"+i+"/"+r+"?sort=bestflight_a"),window.open(o,"_blank")},this.refreshKayakSearch=function(){if(searchParams.showFlightSearch){$("#InDateKayak,#InDateKayak_disp").val(searchParams.checkIn).trigger("change"),$("#OutDateKayak,#OutDateKayak_disp").val(searchParams.checkOut).trigger("change");var e=0==d.airports.length;$.ajax("/common/cfcs/services/search.cfc?"+$.param({method:"getAirportCodes",latitude:d.mapCoords.lat,longitude:d.mapCoords.lng,includeAll:e}),{dataType:"json"}).done(function(t){"undefined"!=typeof t.airports&&t.airports.length&&($("#k-location2 input").val(t.airports[0].Airport_Code),e&&(t.airports.forEach(function(e){d.airports.push({label:e.Airport_Code,value:e.Airport_Code},{label:e.Airport_Name,value:e.Airport_Code})}),jQuery.ui.autocomplete({source:d.airports},$("#k-location1 input")),jQuery.ui.autocomplete({source:d.airports},$("#k-location2 input"))))})}},this.uploadLogs=function(){var e=[];_.each(d.stores,function(t){if(t.total){var a=t.modFilter||0,i={supplierName:t.supplier,modFilter:a,responseTime:t.time,records:t.total,searchType:"city"};e.push(i)}}),$.post("https://wfjpio4hg4.execute-api.us-east-1.amazonaws.com/prod/v1/logSupplier",JSON.stringify({data:e}))},this.buildSearchUrl=function(){var e="";e="&City="+encodeURIComponent(searchParams.destination)+"&InDate="+encodeURIComponent(searchParams.checkIn)+"&OutDate="+encodeURIComponent(searchParams.checkOut)+"&NumRooms="+encodeURIComponent(searchParams.numRooms),searchParams.destinationLatitude&&(e+="&destinationLatitude="+searchParams.destinationLatitude),searchParams.destinationLongitude&&(e+="&destinationLongitude="+searchParams.destinationLongitude),searchParams.includeDiscountAuto&&(e+="&IncludeDiscountAuto=1"),searchParams.includeDiscountSenior&&(e+="&IncludeDiscountSenior=1"),searchParams.includeDiscountGovt&&(e+="&IncludeDiscountGovt=1"),searchParams.includeDiscountBiz&&(e+="&IncludeDiscountBiz=1");var t="";for(amenity in searchParams.amenities)t+=searchParams.amenities[amenity]+",";return e+="&amenityIds="+t,""!==searchParams.zipCode&&"none"!==searchParams.zipCode&&(e+="&SortZip="+searchParams.zipCode),""!==searchParams.address&&"none"!==searchParams.address&&(e+="&Address="+searchParams.address),""!=searchParams.landmark&&(e+="&Landmark="+searchParams.landmark),1==searchParams.postPay&&(e+="&OnlyPostPay=1"),""!==searchParams.latLonName&&(e+="&SortBy=LatLonDistance",e+="&latLonName="+encodeURIComponent(searchParams.latLonName),e+="&latitude="+encodeURIComponent(searchParams.latitude),e+="&longitude="+encodeURIComponent(searchParams.longitude)),e}};
