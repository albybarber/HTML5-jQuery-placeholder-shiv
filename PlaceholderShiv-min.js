
/* ========================================================
* HTML5-jQuery-placeholder-shiv 1.0
* https://github.com/albybarber/HTML5-jQuery-placeholder-shiv
* http://www.albybarber.com
* ========================================================
* Copyright 2012 Albybarber
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* ======================================================== */

(function($){"use strict";$.fn.placeholder=function(method,options){var defaults={text:'Enter a value'};var opts=$.extend({},defaults,options);var methods={start:function(){return this.each(function(){var $this=$(this),placeholderText=$this.data('placeholder')?$this.data('placeholder'):opts.text;$this.placeholder('show',placeholderText);$this.focus(function(){$this.placeholder('hide',placeholderText);});$this.focusout(function(){$this.placeholder('show',placeholderText);});});},show:function(placeholderText){if(this.val()===""){this.val(placeholderText);}},hide:function(placeholderText){if(this.val()===placeholderText){this.val("");}}};if(!("placeholder"in document.createElement("input"))){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.start.apply(this,arguments);}else{$.error('Method '+method+' does not exist on jQuery.placeholder');}}};})(jQuery);