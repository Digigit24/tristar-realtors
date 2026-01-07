/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/frontend/main.min.js?ver=1.2.3 */
!function(s){"use strict";function t(){var t=0,e=s("#wpadminbar");0<e.length&&(t+=e.height()),window.innerWidth<992?s("#secondary").trigger("sticky_kit:detach"):s("#secondary").stick_in_parent({offset_top:t})}var e,n,i,o,r,c;s(".site-header .primary-navigation .menu-item-has-children").on("mouseenter",function(t){var e,n,i,o,r=s(t.currentTarget);n=(e=r).children(".sub-menu"),i=e.offset(),o=e.outerWidth(),t=s(window).width(),r=n.outerWidth(),0<i.left+o+r-t?e.parents(".menu-item-has-children").length?n.css({left:"auto",right:"100%"}):n.css({left:"auto",right:"0"}):n.css({left:"",right:""})}),e=s("body"),n=s(window).outerHeight(),i=s("header.header-1").outerHeight(),o=s("footer.site-footer").outerHeight(),0<(r=s("#wpadminbar")).length&&(i+=r.height()),e.find("header.header-1").length&&s(".site-content").css({"min-height":n-i-o}),c=document.querySelector("body"),window.innerWidth>c.clientWidth+5?(c.classList.add("has-scrollbar"),c.setAttribute("style","--scroll-bar: "+(window.innerWidth-c.clientWidth)+"px")):c.classList.remove("has-scrollbar"),s(".site-header-account").mouseenter(function(){s(".account-dropdown",this).has(".account-wrap").length||s(".account-dropdown",this).append(s(".account-wrap"))}),s(window).scroll(function(){50<s(this).scrollTop()?s(".scrollup").addClass("activate"):s(".scrollup").removeClass("activate")}),s(".scrollup").on("click",function(){return s("html, body").animate({scrollTop:0},600),!1}),s(document).ready(function(){0<s("#secondary").length&&(t(),s(window).resize(function(){setTimeout(function(){t()},100)}))})}(jQuery);
/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/skip-link-focus-fix.min.js?ver=20130115 */
!function(){"use strict";var e=-1<navigator.userAgent.toLowerCase().indexOf("webkit"),t=-1<navigator.userAgent.toLowerCase().indexOf("opera"),n=-1<navigator.userAgent.toLowerCase().indexOf("msie");(e||t||n)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e=document.getElementById(location.hash.substring(1));e&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())},!1)}();
/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/frontend/search-popup.min.js?ver=1.2.3 */
!function(n){"use strict";n(document).ready(function(){var t=n(".site-search-popup"),e=n("body");t.length&&(e.on("click",".button-search-popup",function(e){e.preventDefault();e=n(this).closest(".elementor-section, .elementor-popup-parent-yes");(e=!e.length?n(this).closest("#masthead"):e).length&&t.detach().appendTo(e),t.addClass("active fadein"),setTimeout(function(){t.find('input[type="search"]').focus()},600)}),n(".site-search-popup-close").on("click",function(e){e.preventDefault(),t.removeClass("active fadein"),t.addClass("fadeout"),setTimeout(function(){t.removeClass("fadeout")},300)}))})}(jQuery);
/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/vendor/jquery.sticky-kit.min.js?ver=1.2.3 */
/*
 Sticky-kit v1.1.3 | MIT | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var c,f;c=window.jQuery;f=c(window);c.fn.stick_in_parent=function(b){var A,w,J,n,B,K,p,q,L,k,E,t;null==b&&(b={});t=b.sticky_class;B=b.inner_scrolling;E=b.recalc_every;k=b.parent;q=b.offset_top;p=b.spacer;w=b.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=c(document);null==w&&(w=!0);L=function(a){var b;return window.getComputedStyle?(a=window.getComputedStyle(a[0]),b=parseFloat(a.getPropertyValue("width"))+parseFloat(a.getPropertyValue("margin-left"))+
    parseFloat(a.getPropertyValue("margin-right")),"border-box"!==a.getPropertyValue("box-sizing")&&(b+=parseFloat(a.getPropertyValue("border-left-width"))+parseFloat(a.getPropertyValue("border-right-width"))+parseFloat(a.getPropertyValue("padding-left"))+parseFloat(a.getPropertyValue("padding-right"))),b):a.outerWidth(!0)};J=function(a,b,n,C,F,u,r,G){var v,H,m,D,I,d,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));if(!g.length)throw"failed to find stick parent";
    v=m=!1;(h=null!=p?p&&a.closest(p):c("<div />"))&&h.css("position",a.css("position"));x=function(){var d,f,e;if(!G&&(I=A.height(),d=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),b=parseInt(g.css("padding-bottom"),10),n=g.offset().top+d+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:L(a),
        height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,d=q,z=E,l=function(){var c,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+d>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:d}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,d=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.detach()),c={position:"",width:"",top:""},a.css(c).removeClass(t).trigger("sticky_kit:unstick")),
    B&&(c=f.height(),u+q>c&&!v&&(d-=l,d=Math.max(c-u,d),d=Math.min(q,d),m&&a.css({top:d+"px"})))):e>F&&(m=!0,c={position:"fixed",top:d},c.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(c).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+d>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),a.css({position:"absolute",bottom:b,top:"auto"}).trigger("sticky_kit:bottom")},
        y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);c(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",y),c(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,
        0)}};n=0;for(K=this.length;n<K;n++)b=this[n],J(c(b));return this}}).call(this);
/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/frontend/text-editor.min.js?ver=1.2.3 */
!function(e){"use strict";!function(){let t=e(".text-editor-hover");t.each(function(){var t=e(this).find(".elementor-text-editor > *").text();e(this).find(".elementor-text-editor  > *").attr("data-hover",t)})}()}(jQuery);
/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/frontend/nav-mobile.min.js?ver=1.2.3 */
!function(n){"use strict";n(document).ready(function(){n(".menu-mobile-nav-button").on("click",function(e){e.preventDefault(),n("html").toggleClass("mobile-nav-active")}),n(".spaciaz-overlay, .mobile-nav-close").on("click",function(e){e.preventDefault(),n("html").toggleClass("mobile-nav-active")});var e=n(".handheld-navigation");0<e.length&&e.find(".menu-item-has-children > a, .page_item_has_children > a").each((e,t)=>{var a=n('<button class="dropdown-toggle"></button>');a.insertAfter(t),a.on("click",function(e){e.preventDefault(),a.toggleClass("toggled-on"),a.siblings("ul").stop().slideToggle(400)})}),n(".mobile-nav-tabs li").on("click",function(){var e;n(this).hasClass("active")||(e=n(this).data("menu"),n(this).parent().find(".active").removeClass("active"),n(this).addClass("active"),n(".mobile-menu-tab").removeClass("active"),n(".mobile-"+e+"-menu").addClass("active"))})})}(jQuery);
/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/inc/megamenu/assets/js/frontend.js?ver=1.2.3 */
(function ($) {
	$(function () {
		// Function for stretch width mega menu
		function handleStretchWidthMegaMenu($element) {
			let $body = $('body'),
				pleft = $element.offset().left,
				bodyleft = $body.offset().left;
			$('.mega-stretchwidth', $element).css({
				left: -pleft + bodyleft,
				width: $body.width()
			});
		}

		// Function for container width mega menu
		function handleContainerWidthMegaMenu($element) {
			let $parent = $element.closest('.container , .elementor-container, .col-full, .header-container, .elementor-element > .e-con-inner'),
				parentwidth = $parent.width() > 1730 ? 1730 : $parent.width(),
				windowwidht = $(window).width(),
				cleft = $element.offset().left,
				left = ((windowwidht/2) - cleft - (parentwidth/2)) > 0 ? 0 : ((windowwidht/2) - cleft - (parentwidth/2));

			$('.mega-containerwidth', $element).css({
				left: left,
				width: parentwidth
			});
		}

		// Function for custom subwidth mega menu
		function handleCustomSubwidthMegaMenu($element) {
			let pleft = parseFloat($element.children('a').css('padding-left')),
				$oleft = $element.offset().left + pleft,
				$itemwidth = parseInt($element.children('.custom-subwidth').css('width')),
				$bodywidth = $('body').width();

			let $offset = $oleft + $itemwidth - $bodywidth;

			if ($offset >= 0) {
				$('.mega-menu.custom-subwidth', $element).css({
					left: -$offset + pleft
				});
			} else {
				$('.mega-menu.custom-subwidth', $element).css({
					left: pleft
				});
			}

			if ($element.hasClass('sub-menu-center')) {
				let $parent = $element.closest('.container , .elementor-container, .col-full, .header-container, .elementor-element > .e-con-inner'),
					parent_width = $parent.width() > 1730 ? 1730 : $parent.width(),
					parent_left = $parent.offset().left,
					item_left = $element.offset().left,
					mega_width = parseInt($element.children('.custom-subwidth').css('width')),
					left = (parent_left + parent_width/2) - (item_left + mega_width/2);

				$('.mega-containerwidth, .custom-subwidth', $element).css({
					left: left
				});
			}
		}

		// Bind mouseenter events
		$('.main-navigation .has-mega-menu.has-stretchwidth').on('mouseenter', function (e) {
			handleStretchWidthMegaMenu($(this));
		});

		$('.main-navigation .has-mega-menu.has-containerwidth').on('mouseenter', function (e) {
			handleContainerWidthMegaMenu($(this));
		});

		$('.main-navigation .has-mega-menu').has('ul.custom-subwidth').on('mouseenter', function (e) {
			handleCustomSubwidthMegaMenu($(this));
		});

		// Run functions once on page load
		$('.main-navigation .has-mega-menu.has-stretchwidth').each(function () {
			handleStretchWidthMegaMenu($(this));
		});

		$('.main-navigation .has-mega-menu.has-containerwidth').each(function () {
			handleContainerWidthMegaMenu($(this));
		});

		$('.main-navigation .has-mega-menu').has('ul.custom-subwidth').each(function () {
			handleCustomSubwidthMegaMenu($(this));
		});
	});
})(jQuery);
/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/frontend/login.js?ver=1.2.3 */
(function($){
	'use strict';
	$('body').on('click', '.spaciaz-login-form-ajax button[type="submit"]', (event) => {
		var $this = $(event.currentTarget);
		var $form = $this.closest('form');
		$.ajax({
			type: 'POST',
			url: spaciazAjax.ajaxurl,
			data: $form.serialize(),
			beforeSend: () => {
				$form.addClass('loading');
				$form.find('input,button').prop('disabled', true);
			},
			success: (response) => {
				if (response.status) {
					$form.find('.result-error').remove();
					location.reload();
				} else {
					if($form.find('.result-error').length <= 0){
						$form.prepend(`<div class="result-error woocommerce-message woocommerce-error">${response.msg}</div>`);
					}
				}
			},
			complete: function () {
				$form.find('input,button').prop('disabled', false);
				$form.removeClass('loading');
			}
		});

		return false;
	});
})(jQuery);


/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/vendor/sticky.js?ver=1.2.3 */
(function ($, elementorFrontend, elementorModules) {
    'use strict';
    var _sticky = elementorModules.frontend.handlers.Base.extend({
        currentConfig: {},
        debouncedReactivate: null,
        bindEvents() {
            elementorFrontend.addListenerOnce(this.getUniqueHandlerID() + 'sticky', 'resize', this.reactivateOnResize);
        },
        unbindEvents() {
            elementorFrontend.removeListeners(this.getUniqueHandlerID() + 'sticky', 'resize', this.reactivateOnResize);
        },
        isStickyInstanceActive() {
            return undefined !== this.$element.data('sticky');
        },
        /**
         * Get the current active setting value for a responsive control.
         *
         * @param {string} setting
         * @return {any} - Setting value.
         */
        getResponsiveSetting(setting) {
            const elementSettings = this.getElementSettings();
            return elementorFrontend.getCurrentDeviceSetting(elementSettings, setting);
        },
        /**
         * Return an array of settings names for responsive control (e.g. `settings`, `setting_tablet`, `setting_mobile` ).
         *
         * @param {string} setting
         * @return {string[]} - List of settings.
         */
        getResponsiveSettingList(setting) {
            const breakpoints = Object.keys(elementorFrontend.config.responsive.activeBreakpoints);
            return ['', ...breakpoints].map(suffix => {
                return suffix ? `${setting}_${suffix}` : setting;
            });
        },
        getConfig() {
            const elementSettings = this.getElementSettings(),
                stickyOptions = {
                    to: elementSettings.sticky,
                    offset: this.getResponsiveSetting('sticky_offset'),
                    effectsOffset: this.getResponsiveSetting('sticky_effects_offset'),
                    classes: {
                        sticky: 'elementor-sticky',
                        stickyActive: 'elementor-sticky--active elementor-section--handles-inside',
                        stickyEffects: 'elementor-sticky--effects',
                        spacer: 'elementor-sticky__spacer'
                    },
                    isRTL: elementorFrontend.config.is_rtl,
                    // In edit mode, since the preview is an iframe, the scrollbar is on the left. The scrollbar width is
                    // compensated for in this case.
                    handleScrollbarWidth: elementorFrontend.isEditMode()
                },
                $wpAdminBar = elementorFrontend.elements.$wpAdminBar,
                isParentContainer = this.isContainerElement(this.$element[0]) && !this.isContainerElement(this.$element[0].parentElement);
            if ($wpAdminBar.length && 'top' === elementSettings.sticky && 'fixed' === $wpAdminBar.css('position')) {
                stickyOptions.offset += $wpAdminBar.height();
            }

            // The `stickyOptions.parent` value should only be applied to inner elements, and not to top level containers.
            if (elementSettings.sticky_parent && !isParentContainer) {
                // TODO: The e-container classes should be removed in the next update.
                stickyOptions.parent = '.e-container, .e-container__inner, .e-con, .e-con-inner, .elementor-widget-wrap';
            }
            return stickyOptions;
        },
        activate() {
            this.currentConfig = this.getConfig();
            this.$element.sticky(this.currentConfig);
        },
        deactivate() {
            if (!this.isStickyInstanceActive()) {
                return;
            }
            this.$element.sticky('destroy');
        },
        run(refresh) {
            if (!this.getElementSettings('sticky')) {
                this.deactivate();
                return;
            }
            var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
                activeDevices = this.getElementSettings('sticky_on');
            if (-1 !== activeDevices.indexOf(currentDeviceMode)) {
                if (true === refresh) {
                    this.reactivate();
                } else if (!this.isStickyInstanceActive()) {
                    this.activate();
                }
            } else {
                this.deactivate();
            }
        },
        /**
         * Reactivate the sticky instance on resize only if the new sticky config is different from the current active one,
         * in order to avoid re-initializing the sticky when not needed, and avoid layout shifts.
         * The config can be different between devices, so this need to be checked on each screen resize to make sure that
         * the current screen size uses the appropriate Sticky config.
         *
         * @return {void}
         */
        reactivateOnResize() {
            clearTimeout(this.debouncedReactivate);
            this.debouncedReactivate = setTimeout(() => {
                const config = this.getConfig(),
                    isDifferentConfig = JSON.stringify(config) !== JSON.stringify(this.currentConfig);
                if (isDifferentConfig) {
                    this.run(true);
                }
            }, 300);
        },
        reactivate() {
            this.deactivate();
            this.activate();
        },
        onElementChange(settingKey) {
            if (-1 !== ['sticky', 'sticky_on'].indexOf(settingKey)) {
                this.run(true);
            }

            // Settings that trigger a re-activation when changed.
            const settings = [...this.getResponsiveSettingList('sticky_offset'), ...this.getResponsiveSettingList('sticky_effects_offset'), 'sticky_parent'];
            if (-1 !== settings.indexOf(settingKey)) {
                this.reactivate();
            }
        },
        /**
         * Listen to device mode changes and re-initialize the sticky.
         *
         * @return {void}
         */
        onDeviceModeChange() {
            // Wait for the call stack to be empty.
            // The `run` function requests the current device mode from the CSS so it's not ready immediately.
            // (need to wait for the `deviceMode` event to change the CSS).
            // See `elementorFrontend.getCurrentDeviceMode()` for reference.
            setTimeout(() => this.run(true));
        },
        onInit() {
            elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
            if (elementorFrontend.isEditMode()) {
                elementor.listenTo(elementor.channels.deviceMode, 'change', () => this.onDeviceModeChange());
            }
            this.run();
        },
        onDestroy() {
            elementorModules.frontend.handlers.Base.prototype.onDestroy.apply(this, arguments);
            this.deactivate();
        },
        /**
         *
         * @param {HTMLElement|null|undefined} element
         * @return {boolean} Is the passed element a container.
         */
        isContainerElement(element) {
            const containerClasses = [
                // TODO: The e-container classes should be removed in the next update.
                'e-container', 'e-container__inner', 'e-con', 'e-con-inner'];
            return containerClasses.some(containerClass => {
                return element?.classList.contains(containerClass);
            });
        }
    });

    $(window).on('elementor/frontend/init', () => {
        const addHandler = ($element) => {

            elementorFrontend.elementsHandler.addHandler(_sticky, {
                $element,
            });
        };

        elementorFrontend.hooks.addAction('frontend/element_ready/section', addHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/container', addHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/widget', addHandler);
    });

}(jQuery, window.elementorFrontend, window.elementorModules));

/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/vendor/jarallax.min.js?ver=1.2.3 */
!function(){"use strict";var e=function(e,t,i){return t&&o(e.prototype,t),i&&o(e,i),e};function o(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var n=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),i=0;i<e.length;i++)if(t&&void 0!==t.style[e[i]])return e[i];return!1}(),t=navigator.userAgent,l=-1<t.toLowerCase().indexOf("android"),s=/iPad|iPhone|iPod/.test(t)&&!window.MSStream,a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};function i(e,t,i){e.addEventListener(t,i)}var g=void 0,f=void 0,c=void 0,m=!1;function p(e){g=window.innerWidth||document.documentElement.clientWidth,f=window.innerHeight||document.documentElement.clientHeight,"object"!==(void 0===e?"undefined":r(e))||"load"!==e.type&&"DOMContentLoaded"!==e.type||(m=!0)}p(),i(window,"resize",p),i(window,"orientationchange",p),i(window,"load",p),i(window,"DOMContentLoaded",p);var d=[],u=!1;function y(){var t,i;d.length&&(c=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,t=m||!u||u.width!==g||u.height!==f,i=t||!u||u.y!==c,m=!1,(t||i)&&(d.forEach(function(e){t&&e.onResize(),i&&e.onScroll()}),u={width:g,height:f,y:c}),a(y))}var h=0,v=(e(b,[{key:"css",value:function(t,i){return"string"==typeof i?window.getComputedStyle(t).getPropertyValue(i):(i.transform&&n&&(i[n]=i.transform),Object.keys(i).forEach(function(e){t.style[e]=i[e]}),t)}},{key:"extend",value:function(i){var o=arguments;return i=i||{},Object.keys(arguments).forEach(function(t){o[t]&&Object.keys(o[t]).forEach(function(e){i[e]=o[t][e]})}),i}},{key:"getWindowData",value:function(){return{width:g,height:f,y:c}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return(t=!((t=t&&"string"==typeof t?e.$item.querySelector(t):t)instanceof Element)?null:t)&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(null===e.image.src&&(e.image.src=e.css(e.$item,"background-image").replace(/^url\(['"]?/g,"").replace(/['"]?\)$/g,"")),!(!e.image.src||"none"===e.image.src))}},{key:"canInitParallax",value:function(){return n&&!(l&&this.options.noAndroid)&&!(s&&this.options.noIos)}},{key:"init",value:function(){var e,t=this,i={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},o={};if(t.options.keepImg||((e=t.$item.getAttribute("style"))&&t.$item.setAttribute("data-jarallax-original-styles",e),!t.image.useImgTag||(e=t.image.$item.getAttribute("style"))&&t.image.$item.setAttribute("data-jarallax-original-styles",e)),"static"===t.css(t.$item,"position")&&t.css(t.$item,{position:"relative"}),"auto"===t.css(t.$item,"z-index")&&t.css(t.$item,{zIndex:0}),t.image.$container=document.createElement("div"),t.css(t.image.$container,i),t.css(t.image.$container,{"z-index":t.options.zIndex}),t.image.$container.setAttribute("id","jarallax-container-"+t.instanceID),t.$item.appendChild(t.image.$container),o=t.image.useImgTag?t.extend({"object-fit":t.options.imgSize,"object-position":t.options.imgPosition,"font-family":"object-fit: "+t.options.imgSize+"; object-position: "+t.options.imgPosition+";","max-width":"none"},i,o):(t.image.$item=document.createElement("div"),t.extend({"background-position":t.options.imgPosition,"background-size":t.options.imgSize,"background-repeat":t.options.imgRepeat,"background-image":'url("'+t.image.src+'")'},i,o)),"opacity"!==t.options.type&&"scale"!==t.options.type&&"scale-opacity"!==t.options.type&&1!==t.options.speed||(t.image.position="absolute"),"fixed"===t.image.position)for(var n=0,a=t.$item;null!==a&&a!==document&&0===n;){var r=t.css(a,"-webkit-transform")||t.css(a,"-moz-transform")||t.css(a,"transform");r&&"none"!==r&&(n=1,t.image.position="absolute"),a=a.parentNode}o.position=t.image.position,t.css(t.image.$item,o),t.image.$container.appendChild(t.image.$item),t.coverImage(),t.clipContainer(),t.onScroll(!0),t.options.onInit&&t.options.onInit.call(t),"none"!==t.css(t.$item,"background-image")&&t.css(t.$item,{"background-image":"none"}),t.addToParallaxList()}},{key:"addToParallaxList",value:function(){d.push(this),1===d.length&&y()}},{key:"removeFromParallaxList",value:function(){var i=this;d.forEach(function(e,t){e.instanceID===i.instanceID&&d.splice(t,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t,i=e.$item.getAttribute("data-jarallax-original-styles");e.$item.removeAttribute("data-jarallax-original-styles"),i?e.$item.setAttribute("style",i):e.$item.removeAttribute("style"),e.image.useImgTag&&(t=e.image.$item.getAttribute("data-jarallax-original-styles"),e.image.$item.removeAttribute("data-jarallax-original-styles"),t?e.image.$item.setAttribute("style",i):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)),e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){var e,t,i;"fixed"===this.image.position&&(t=(i=(e=this).image.$container.getBoundingClientRect()).width,i=i.height,e.$clipStyles||(e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-"+e.instanceID),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)),i="#jarallax-container-"+e.instanceID+" {\n           clip: rect(0 "+t+"px "+i+"px 0);\n           clip: rect(0, "+t+"px, "+i+"px, 0);\n        }",e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=i:e.$clipStyles.innerHTML=i)}},{key:"coverImage",value:function(){var e=this,t=e.image.$container.getBoundingClientRect(),i=t.height,o=e.options.speed,n="scroll"===e.options.type||"scroll-opacity"===e.options.type,a=0,r=i,l=0;return n&&(a=o<0?o*Math.max(i,f):o*(i+f),1<o?r=Math.abs(a-f):o<0?r=a/o+Math.abs(a):r+=Math.abs(f-i)*(1-o),a/=2),e.parallaxScrollDistance=a,l=n?(f-r)/2:(i-r)/2,e.css(e.image.$item,{height:r+"px",marginTop:l+"px",left:"fixed"===e.image.position?t.left+"px":"0",width:t.width+"px"}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:r,marginTop:l},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t,i,o,n,a,r,l,s=this,c=s.$item.getBoundingClientRect(),m=c.top,p=c.height,d={},u=c;s.options.elementInViewport&&(u=s.options.elementInViewport.getBoundingClientRect()),s.isElementInViewport=0<=u.bottom&&0<=u.right&&u.top<=f&&u.left<=g,(e||s.isElementInViewport)&&(t=Math.max(0,m),i=Math.max(0,p+m),o=Math.max(0,-m),n=Math.max(0,m+p-f),a=Math.max(0,p-(m+p-f)),r=Math.max(0,-m+f-p),u=1-2*(f-m)/(f+p),e=1,p<f?e=1-(o||n)/p:i<=f?e=i/f:a<=f&&(e=a/f),"opacity"!==s.options.type&&"scale-opacity"!==s.options.type&&"scroll-opacity"!==s.options.type||(d.transform="translate3d(0,0,0)",d.opacity=e),"scale"!==s.options.type&&"scale-opacity"!==s.options.type||(l=1,s.options.speed<0?l-=s.options.speed*e:l+=s.options.speed*(1-e),d.transform="scale("+l+") translate3d(0,0,0)"),"scroll"!==s.options.type&&"scroll-opacity"!==s.options.type||(l=s.parallaxScrollDistance*u,"absolute"===s.image.position&&(l-=m),d.transform="translate3d(0,"+l+"px,0)"),s.css(s.image.$item,d),s.options.onScroll&&s.options.onScroll.call(s,{section:c,beforeTop:t,beforeTopEnd:i,afterTop:o,beforeBottom:n,beforeBottomEnd:a,afterBottom:r,visiblePercent:e,fromViewportCenter:u}))}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}]),b);function b(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b);var i=this;i.instanceID=h++,i.$item=e,i.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,noAndroid:!1,noIos:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoPlayOnlyVisible:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var o=i.$item.getAttribute("data-jarallax"),e=JSON.parse(o||"{}");o&&console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");var n=i.$item.dataset||{},a={};Object.keys(n).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==i.defaults[t]&&(a[t]=n[e])}),i.options=i.extend({},i.defaults,e,a,t),i.pureOptions=i.extend({},i.options),Object.keys(i.options).forEach(function(e){"true"===i.options[e]?i.options[e]=!0:"false"===i.options[e]&&(i.options[e]=!1)}),i.options.speed=Math.min(2,Math.max(-1,parseFloat(i.options.speed)));t=i.options.elementInViewport;(t=t&&"object"===(void 0===t?"undefined":r(t))&&void 0!==t.length?t[0]:t)instanceof Element||(t=null),i.options.elementInViewport=t,i.image={src:i.options.imgSrc||null,$container:null,useImgTag:!1,position:l||s?"absolute":"fixed"},i.initImg()&&i.canInitParallax()&&i.init()}function x(e){("object"===("undefined"==typeof HTMLElement?"undefined":r(HTMLElement))?e instanceof HTMLElement:e&&"object"===(void 0===e?"undefined":r(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var t=arguments[1],i=Array.prototype.slice.call(arguments,2),o=e.length,n=0,a=void 0;n<o;n++)if("object"===(void 0===t?"undefined":r(t))||void 0===t?e[n].jarallax||(e[n].jarallax=new v(e[n],t)):e[n].jarallax&&(a=e[n].jarallax[t].apply(e[n].jarallax,i)),void 0!==a)return a;return e}x.constructor=v;var w,$=window.jarallax;window.jarallax=x,window.jarallax.noConflict=function(){return window.jarallax=$,this},"undefined"!=typeof jQuery&&((e=function(){var e=arguments||[];Array.prototype.unshift.call(e,this);e=x.apply(window,e);return"object"!==(void 0===e?"undefined":r(e))?e:this}).constructor=v,w=jQuery.fn.jarallax,jQuery.fn.jarallax=e,jQuery.fn.jarallax.noConflict=function(){return jQuery.fn.jarallax=w,this}),i(window,"DOMContentLoaded",function(){x(document.querySelectorAll("[data-jarallax]"))})}(),function(t){t(document).ready(function(){t(".custom-elementor-parallax").each(function(){var e=t(this);t(".elementor-element-"+e.data("id")).jarallax(e.data("settings")),e.remove()})})}(jQuery);