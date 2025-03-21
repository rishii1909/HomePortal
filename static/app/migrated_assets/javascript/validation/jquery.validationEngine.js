
(function(e) {
    e.fn.validationEngineLanguage = function() {};
    e.validationEngineLanguage = {
        newLang: function() {
            e.validationEngineLanguage.allRules = {
                required: {
                    regex: "none",
                    alertText: "Please fill out this field",
                    alertTextCheckboxMultiple: "Please select an option",
                    alertTextCheckboxe: "This checkbox is required",
                    alertTextDateRange: "Both date range fields are required"
                },
                requiredInFunction: {
                    func: function(e, t, n, r) {
                        return e.val() == "test" ? true : false
                    },
                    alertText: "Field must equal test"
                },
                dateRange: {
                    regex: "none",
                    alertText: "Invalid ",
                    alertText2: "Date Range"
                },
                dateTimeRange: {
                    regex: "none",
                    alertText: "Invalid ",
                    alertText2: "Date Time Range"
                },
                minSize: {
                    regex: "none",
                    alertText: "Minimum ",
                    alertText2: " characters required"
                },
                maxSize: {
                    regex: "none",
                    alertText: "Maximum ",
                    alertText2: " characters allowed"
                },
                groupRequired: {
                    regex: "none",
                    alertText: "You must fill one of the following fields",
                    alertTextCheckboxMultiple: "Please select an option",
                    alertTextCheckboxe: "This checkbox is required"
                },
                min: {
                    regex: "none",
                    alertText: "Minimum value is "
                },
                max: {
                    regex: "none",
                    alertText: "Maximum value is "
                },
                past: {
                    regex: "none",
                    alertText: "Date prior to "
                },
                future: {
                    regex: "none",
                    alertText: "Date past "
                },
                maxCheckbox: {
                    regex: "none",
                    alertText: "Maximum ",
                    alertText2: " options allowed"
                },
                minCheckbox: {
                    regex: "none",
                    alertText: "Please select atleast",
                    alertText2: "GroupTag"
                },
                equals: {
                    regex: "none",
                    alertText: "Password does not match."
                },
                creditCard: {
                    regex: "none",
                    alertText: "Invalid credit card number"
                },
                phone: {
                    regex: /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    alertText: "Invalid phone number"
                },
                email: {
                    regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    alertText: "Invalid email address"
                },
				domain: {
                    regex: /^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i,
                    alertText: "Invalid domain"
                },
                fullname: {
                    regex: /^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    alertText: "Must be first and last name"
                },
                zip: {
                    regex: /^\d{5}$|^\d{5}-\d{4}$/,
                    alertText: "Invalid zip format"
                },
                integer: {
                    regex: /^[\-\+]?\d+$/,
                    alertText: "Not a valid integer"
                },
                number: {
                    regex: /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    alertText: "Invalid floating decimal number"
                },
                date: {
                    func: function(e) {
                        var t = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
                        var n = t.exec(e.val());
                        if (n == null) return false;
                        var r = n[1];
                        var i = n[2] * 1;
                        var s = n[3] * 1;
                        var o = new Date(r, i - 1, s);
                        return o.getFullYear() == r && o.getMonth() == i - 1 && o.getDate() == s
                    },
                    alertText: "Invalid date, must be in YYYY-MM-DD format"
                },
                ipv4: {
                    regex: /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    alertText: "Invalid IP address"
                },
                url: {
                    regex: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    alertText: "Invalid URL"
                },
				/*urls: {
                    regex: /^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/i,
                    alertText: "Invalid URL"
                },*/
                onlyNumberSp: {
                    regex: /^[0-9\ ]+$/,
                    alertText: "Numbers only"
                },
                onlyLetterSp: {
                    regex: /^[a-zA-Z\ \']+$/,
                    alertText: "Letters only"
                },
                onlyLetterAccentSp: {
                    regex: /^[a-z\u00C0-\u017F\ ]+$/i,
                    alertText: "Letters only (accents allowed)"
                },
                onlyLetterNumber: {
                    regex: /^[0-9a-zA-Z]+$/,
                    alertText: "No special characters allowed"
                },
                ajaxUserCall: {
                    url: "ajaxValidateFieldUser",
                    extraData: "name=eric",
                    alertText: "This user is already taken",
                    alertTextLoad: "Validating, please wait"
                },
                ajaxUserCallPhp: {
                    url: "phpajax/ajaxValidateFieldUser.php",
                    extraData: "name=eric",
                    alertTextOk: "This username is available",
                    alertText: "This user is already taken",
                    alertTextLoad: "Validating, please wait"
                },
                ajaxNameCall: {
                    url: "ajaxValidateFieldName",
                    alertText: "This name is already taken",
                    alertTextOk: "This name is available",
                    alertTextLoad: "Validating, please wait"
                },
                ajaxNameCallPhp: {
                    url: "phpajax/ajaxValidateFieldName.php",
                    alertText: "This name is already taken",
                    alertTextLoad: "Validating, please wait"
                },
                validate2fields: {
                    alertText: "Please input HELLO"
                },
                dateFormat: {
                    regex: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    alertText: "Invalid Date"
                },
                dateTimeFormat: {
                    regex: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    alertText: "Invalid Date or Date Format",
                    alertText2: "Expected Format: ",
                    alertText3: "mm/dd/yyyy hh:mm:ss AM|PM or ",
                    alertText4: "yyyy-mm-dd hh:mm:ss AM|PM"
                }
            }
        }
    };
    e.validationEngineLanguage.newLang()
})(jQuery);
(function(e) {
    "use strict";
    var t = {
        init: function(n) {
            var r = this;
            if (!r.data("jqv") || r.data("jqv") == null) {
                n = t._saveOptions(r, n);
                e(document).on("click", ".formError", function() {
                    e(this).fadeOut(150, function() {
                        e(this).closest(".formError").remove()
                    })
                })
            }
            return this
        },
        attach: function(n) {
            var r = this;
            var i;
            if (n) i = t._saveOptions(r, n);
            else i = r.data("jqv");
            i.validateAttribute = r.find("[data-validation-engine*=validate]").length ? "data-validation-engine" : "class";
            if (i.binded) {
                r.on(i.validationEventTrigger, "[" + i.validateAttribute + "*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", t._onFieldEvent);
                r.on("click", "[" + i.validateAttribute + "*=validate][type=checkbox],[" + i.validateAttribute + "*=validate][type=radio]", t._onFieldEvent);
                r.on(i.validationEventTrigger, "[" + i.validateAttribute + "*=validate][class*=datepicker]", {
                    delay: 300
                }, t._onFieldEvent)
            }
            if (i.autoPositionUpdate) {
                e(window).bind("resize", {
                    noAnimation: true,
                    formElem: r
                }, t.updatePromptsPosition)
            }
            r.on("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", t._submitButtonClick);
            r.removeData("jqv_submitButton");
            r.on("submit", t._onSubmitEvent);
            return this
        },
        detach: function() {
            var n = this;
            var r = n.data("jqv");
            n.off(r.validationEventTrigger, "[" + r.validateAttribute + "*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", t._onFieldEvent);
            n.off("click", "[" + r.validateAttribute + "*=validate][type=checkbox],[" + r.validateAttribute + "*=validate][type=radio]", t._onFieldEvent);
            n.off(r.validationEventTrigger, "[" + r.validateAttribute + "*=validate][class*=datepicker]", t._onFieldEvent);
            n.off("submit", t._onSubmitEvent);
            n.removeData("jqv");
            n.off("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", t._submitButtonClick);
            n.removeData("jqv_submitButton");
            if (r.autoPositionUpdate) e(window).off("resize", t.updatePromptsPosition);
            return this
        },
        validate: function(n) {
            var r = e(this);
            var i = null;
            var s;
            if (r.is("form") || r.hasClass("validationEngineContainer")) {
                if (r.hasClass("validating")) {
                    return false
                } else {
                    r.addClass("validating");
                    if (n) s = t._saveOptions(r, n);
                    else s = r.data("jqv");
                    var i = t._validateFields(this);
                    setTimeout(function() {
                        r.removeClass("validating")
                    }, 100);
                    if (i && s.onSuccess) {
                        s.onSuccess()
                    } else if (!i && s.onFailure) {
                        s.onFailure()
                    }
                }
            } else if (r.is("form") || r.hasClass("validationEngineContainer")) {
                r.removeClass("validating")
            } else {
                var o = r.closest("form, .validationEngineContainer");
                s = o.data("jqv") ? o.data("jqv") : e.validationEngine.defaults;
                i = t._validateField(r, s);
                if (i && s.onFieldSuccess) s.onFieldSuccess();
                else if (s.onFieldFailure && s.InvalidFields.length > 0) {
                    s.onFieldFailure()
                }
                return !i
            }
            if (s.onValidationComplete) {
                return !!s.onValidationComplete(o, i)
            }
            return i
        },
        updatePromptsPosition: function(n) {
            if (n && this == window) {
                var r = n.data.formElem;
                var i = n.data.noAnimation
            } else var r = e(this.closest("form, .validationEngineContainer"));
            var s = r.data("jqv");
            if (!s) s = t._saveOptions(r, s);
            r.find("[" + s.validateAttribute + "*=validate]").not(":disabled").each(function() {
                var n = e(this);
                if (s.prettySelect && n.is(":hidden")) n = r.find("#" + s.usePrefix + n.attr("id") + s.useSuffix);
                var o = t._getPrompt(n);
                var u = e(o).find(".formErrorContent").html();
                if (o) t._updatePrompt(n, e(o), u, undefined, false, s, i)
            });
            return this
        },
        showPrompt: function(e, n, r, i) {
            var s = this.closest("form, .validationEngineContainer");
            var o = s.data("jqv");
            if (!o) o = t._saveOptions(this, o);
            if (r) o.promptPosition = r;
            o.showArrow = i == true;
            t._showPrompt(this, e, n, false, o);
            return this
        },
        hide: function() {
            var n = e(this).closest("form, .validationEngineContainer");
            var r = n.data("jqv");
            if (!r) r = t._saveOptions(n, r);
            var i = r && r.fadeDuration ? r.fadeDuration : .3;
            var s;
            if (e(this).is("form") || e(this).hasClass("validationEngineContainer")) {
                s = "parentForm" + t._getClassName(e(this).attr("id"))
            } else {
                s = t._getClassName(e(this).attr("id")) + "formError"
            }
            e("." + s).fadeTo(i, 0, function() {
                e(this).closest(".formError").remove()
            });
            return this
        },
        hideAll: function() {
            var t = this;
            var n = t.data("jqv");
            var r = n ? n.fadeDuration : 300;
            e(".formError").fadeTo(r, 0, function() {
                e(this).closest(".formError").remove()
            });
            return this
        },
        _onFieldEvent: function(n) {
            var r = e(this);
            var i = r.closest("form, .validationEngineContainer");
            var s = i.data("jqv");
            if (!s) s = t._saveOptions(i, s);
            s.eventTrigger = "field";
            if (s.notEmpty == true) {
                if (r.val().length > 0) {
                    window.setTimeout(function() {
                        t._validateField(r, s)
                    }, n.data ? n.data.delay : 0)
                }
            } else {
                window.setTimeout(function() {
                    t._validateField(r, s)
                }, n.data ? n.data.delay : 0)
            }
        },
        _onSubmitEvent: function() {
            var n = e(this);
            var r = n.data("jqv");
            if (n.data("jqv_submitButton")) {
                var i = e("#" + n.data("jqv_submitButton"));
                if (i) {
                    if (i.length > 0) {
                        if (i.hasClass("validate-skip") || i.attr("data-validation-engine-skip") == "true") return true
                    }
                }
            }
            r.eventTrigger = "submit";
            var s = t._validateFields(n);
            if (s && r.ajaxFormValidation) {
                t._validateFormWithAjax(n, r);
                return false
            }
            if (r.onValidationComplete) {
                return !!r.onValidationComplete(n, s)
            }
            return s
        },
        _checkAjaxStatus: function(t) {
            var n = true;
            e.each(t.ajaxValidCache, function(e, t) {
                if (!t) {
                    n = false;
                    return false
                }
            });
            return n
        },
        _checkAjaxFieldStatus: function(e, t) {
            return t.ajaxValidCache[e] == true
        },
        _validateFields: function(n) {
            var r = n.data("jqv");
            var i = false;
            n.trigger("jqv.form.validating");
            var s = null;
            n.find("[" + r.validateAttribute + "*=validate]").not(":disabled").each(function() {
                var o = e(this);
                var u = [];
                if (e.inArray(o.attr("name"), u) < 0) {
                    i |= t._validateField(o, r);
                    if (i && s == null)
                        if (o.is(":hidden") && r.prettySelect) s = o = n.find("#" + r.usePrefix + t._jqSelector(o.attr("id")) + r.useSuffix);
                        else {
                            if (o.data("jqv-prompt-at") instanceof jQuery) {
                                o = o.data("jqv-prompt-at")
                            } else if (o.data("jqv-prompt-at")) {
                                o = e(o.data("jqv-prompt-at"))
                            }
                            s = o
                        }
                    if (r.doNotShowAllErrosOnSubmit) return false;
                    u.push(o.attr("name"));
                    if (r.showOneMessage == true && i) {
                        return false
                    }
                }
            });
            n.trigger("jqv.form.result", [i]);
            if (i) {
                if (r.scroll) {
                    var o = s.offset().top;
                    var u = s.offset().left;
                    var a = r.promptPosition;
                    if (typeof a == "string" && a.indexOf(":") != -1) a = a.substring(0, a.indexOf(":"));
                    if (a != "bottomRight" && a != "bottomLeft") {
                        var f = t._getPrompt(s);
                        if (f) {
                            o = f.offset().top
                        }
                    }
                    if (r.scrollOffset) {
                        o -= r.scrollOffset
                    }
                    if (r.isOverflown) {
                        var l = e(r.overflownDIV);
                        if (!l.length) return false;
                        var c = l.scrollTop();
                        var h = -parseInt(l.offset().top);
                        o += c + h - 5;
                        var p = e(r.overflownDIV).filter(":not(:animated)");
                        p.animate({
                            scrollTop: o
                        }, 1100, function() {
                            if (r.focusFirstField) s.focus()
                        })
                    } else {
                        e("html, body").animate({
                            scrollTop: o
                        }, 1100, function() {
                            if (r.focusFirstField) s.focus()
                        });
                        e("html, body").animate({
                            scrollLeft: u
                        }, 1100)
                    }
                } else if (r.focusFirstField) s.focus();
                return false
            }
            return true
        },
        _validateFormWithAjax: function(n, r) {
            var i = n.serialize();
            var s = r.ajaxFormValidationMethod ? r.ajaxFormValidationMethod : "GET";
            var o = r.ajaxFormValidationURL ? r.ajaxFormValidationURL : n.attr("action");
            var u = r.dataType ? r.dataType : "json";
            e.ajax({
                type: s,
                url: o,
                cache: false,
                dataType: u,
                data: i,
                form: n,
                methods: t,
                options: r,
                beforeSend: function() {
                    return r.onBeforeAjaxFormValidation(n, r)
                },
                error: function(e, n) {
                    if (r.onFailure) {
                        r.onFailure(e, n)
                    } else {
                        t._ajaxError(e, n)
                    }
                },
                success: function(i) {
                    if (u == "json" && i !== true) {
                        var s = false;
                        for (var o = 0; o < i.length; o++) {
                            var a = i[o];
                            var f = a[0];
                            var l = e(e("#" + f)[0]);
                            if (l.length == 1) {
                                var c = a[2];
                                if (a[1] == true) {
                                    if (c == "" || !c) {
                                        t._closePrompt(l)
                                    } else {
                                        if (r.allrules[c]) {
                                            var h = r.allrules[c].alertTextOk;
                                            if (h) c = h
                                        }
                                        if (r.showPrompts) t._showPrompt(l, c, "pass", false, r, true)
                                    }
                                } else {
                                    s |= true;
                                    if (r.allrules[c]) {
                                        var h = r.allrules[c].alertText;
                                        if (h) c = h
                                    }
                                    if (r.showPrompts) t._showPrompt(l, c, "", false, r, true)
                                }
                            }
                        }
                        r.onAjaxFormComplete(!s, n, i, r)
                    } else r.onAjaxFormComplete(true, n, i, r)
                }
            })
        },
        _validateField: function(n, r, i) {
            if (!n.attr("id")) {
                n.attr("id", "form-validation-field-" + e.validationEngine.fieldIdCounter);
                ++e.validationEngine.fieldIdCounter
            }
            if (n.hasClass(r.ignoreFieldsWithClass)) return false;
            if (!r.validateNonVisibleFields && (n.is(":hidden") && !r.prettySelect || n.parent().is(":hidden"))) return false;
            var s = n.attr(r.validateAttribute);
            var o = /validate\[(.*)\]/.exec(s);
            if (!o) return false;
            var u = o[1];
            var a = u.split(/\[|,|\]/);
            var f = false;
            var l = n.attr("name");
            var c = "";
            var h = "";
            var p = false;
            var d = false;
            r.isError = false;
            r.showArrow = true;
            if (r.maxErrorsPerField > 0) {
                d = true
            }
            var v = e(n.closest("form, .validationEngineContainer"));
            for (var m = 0; m < a.length; m++) {
                a[m] = a[m].replace(" ", "");
                if (a[m] === "") {
                    delete a[m]
                }
            }
            for (var m = 0, g = 0; m < a.length; m++) {
                if (d && g >= r.maxErrorsPerField) {
                    if (!p) {
                        var y = e.inArray("required", a);
                        p = y != -1 && y >= m
                    }
                    break
                }
                var b = undefined;
                switch (a[m]) {
                    case "required":
                        p = true;
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._required);
                        break;
                    case "custom":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._custom);
                        break;
                    case "groupRequired":
                        var w = "[" + r.validateAttribute + "*=" + a[m + 1] + "]";
                        var E = v.find(w).eq(0);
                        if (E[0] != n[0]) {
                            t._validateField(E, r, i);
                            r.showArrow = true
                        }
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._groupRequired);
                        if (b) p = true;
                        r.showArrow = false;
                        break;
                    case "ajax":
                        b = t._ajax(n, a, m, r);
                        if (b) {
                            h = "load"
                        }
                        break;
                    case "minSize":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._minSize);
                        break;
                    case "maxSize":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._maxSize);
                        break;
                    case "min":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._min);
                        break;
                    case "max":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._max);
                        break;
                    case "past":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._past);
                        break;
                    case "future":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._future);
                        break;
                    case "dateRange":
                        var w = "[" + r.validateAttribute + "*=" + a[m + 1] + "]";
                        r.firstOfGroup = v.find(w).eq(0);
                        r.secondOfGroup = v.find(w).eq(1);
                        if (r.firstOfGroup[0].value || r.secondOfGroup[0].value) {
                            b = t._getErrorMessage(v, n, a[m], a, m, r, t._dateRange)
                        }
                        if (b) p = true;
                        r.showArrow = false;
                        break;
                    case "dateTimeRange":
                        var w = "[" + r.validateAttribute + "*=" + a[m + 1] + "]";
                        r.firstOfGroup = v.find(w).eq(0);
                        r.secondOfGroup = v.find(w).eq(1);
                        if (r.firstOfGroup[0].value || r.secondOfGroup[0].value) {
                            b = t._getErrorMessage(v, n, a[m], a, m, r, t._dateTimeRange)
                        }
                        if (b) p = true;
                        r.showArrow = false;
                        break;
                    case "maxCheckbox":
                        n = e(v.find("input[name='" + l + "']"));
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._maxCheckbox);
                        break;
                    case "minCheckbox":
                        n = e(v.find("input[name='" + l + "']"));
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._minCheckbox);
                        break;
                    case "equals":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._equals);
                        break;
                    case "funcCall":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._funcCall);
                        break;
                    case "creditCard":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._creditCard);
                        break;
                    case "condRequired":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._condRequired);
                        if (b !== undefined) {
                            p = true
                        }
                        break;
                    case "funcCallRequired":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._funcCallRequired);
                        if (b !== undefined) {
                            p = true
                        }
                        break;
                    default:
                }
                var S = false;
                if (typeof b == "object") {
                    switch (b.status) {
                        case "_break":
                            S = true;
                            break;
                        case "_error":
                            b = b.message;
                            break;
                        case "_error_no_prompt":
                            return true;
                            break;
                        default:
                            break
                    }
                }
                if (m == 0 && u.indexOf("funcCallRequired") == 0 && b !== undefined) {
                    c += b + "<br/>";
                    r.isError = true;
                    g++;
                    S = true
                }
                if (S) {
                    break
                }
                if (typeof b == "string") {
                    c += b + "<br/>";
                    r.isError = true;
                    g++
                }
            }
            if (!p && !n.val() && n.val().length < 1 && e.inArray("equals", a) < 0) r.isError = false;
            var x = n.prop("type");
            var T = n.data("promptPosition") || r.promptPosition;
            if ((x == "radio" || x == "checkbox") && v.find("input[name='" + l + "']").size() > 1) {
                if (T === "inline") {
                    n = e(v.find("input[name='" + l + "'][type!=hidden]:last"))
                } else {
                    n = e(v.find("input[name='" + l + "'][type!=hidden]:first"))
                }
                r.showArrow = r.showArrowOnRadioAndCheckbox
            }
            if (n.is(":hidden") && r.prettySelect) {
                n = v.find("#" + r.usePrefix + t._jqSelector(n.attr("id")) + r.useSuffix)
            }
            if (r.isError && r.showPrompts) {
                t._showPrompt(n, c, h, false, r)
            } else {
                if (!f) t._closePrompt(n)
            }
            if (!f) {
                n.trigger("jqv.field.result", [n, r.isError, c])
            }
            var N = e.inArray(n[0], r.InvalidFields);
            if (N == -1) {
                if (r.isError) r.InvalidFields.push(n[0])
            } else if (!r.isError) {
                r.InvalidFields.splice(N, 1)
            }
            t._handleStatusCssClasses(n, r);
            if (r.isError && r.onFieldFailure) r.onFieldFailure(n);
            if (!r.isError && r.onFieldSuccess) r.onFieldSuccess(n);
            return r.isError
        },
        _handleStatusCssClasses: function(e, t) {
            if (t.addSuccessCssClassToField) e.removeClass(t.addSuccessCssClassToField);
            if (t.addFailureCssClassToField) e.removeClass(t.addFailureCssClassToField);
            if (t.addSuccessCssClassToField && !t.isError) e.addClass(t.addSuccessCssClassToField);
            if (t.addFailureCssClassToField && t.isError) e.addClass(t.addFailureCssClassToField)
        },
        _getErrorMessage: function(n, r, i, s, o, u, a) {
            var f = jQuery.inArray(i, s);
            if (i === "custom" || i === "funcCall" || i === "funcCallRequired") {
                var l = s[f + 1];
                i = i + "[" + l + "]";
                delete s[f]
            }
            var c = i;
            var h = r.attr("data-validation-engine") ? r.attr("data-validation-engine") : r.attr("class");
            var p = h.split(" ");
            var d;
            if (i == "future" || i == "past" || i == "maxCheckbox" || i == "minCheckbox") {
                d = a(n, r, s, o, u)
            } else {
                d = a(r, s, o, u)
            }
            if (d != undefined) {
                var v = t._getCustomErrorMessage(e(r), p, c, u);
                if (v) d = v
            }
            return d
        },
        _getCustomErrorMessage: function(e, n, r, i) {
            var s = false;
            var o = /^custom\[.*\]$/.test(r) ? t._validityProp["custom"] : t._validityProp[r];
            if (o != undefined) {
                s = e.attr("data-errormessage-" + o);
                if (s != undefined) return s
            }
            s = e.attr("data-errormessage");
            if (s != undefined) return s;
            var u = "#" + e.attr("id");
            if (typeof i.custom_error_messages[u] != "undefined" && typeof i.custom_error_messages[u][r] != "undefined") {
                s = i.custom_error_messages[u][r]["message"]
            } else if (n.length > 0) {
                for (var a = 0; a < n.length && n.length > 0; a++) {
                    var f = "." + n[a];
                    if (typeof i.custom_error_messages[f] != "undefined" && typeof i.custom_error_messages[f][r] != "undefined") {
                        s = i.custom_error_messages[f][r]["message"];
                        break
                    }
                }
            }
            if (!s && typeof i.custom_error_messages[r] != "undefined" && typeof i.custom_error_messages[r]["message"] != "undefined") {
                s = i.custom_error_messages[r]["message"]
            }
            return s
        },
        _validityProp: {
            required: "value-missing",
            custom: "custom-error",
            groupRequired: "value-missing",
            ajax: "custom-error",
            minSize: "range-underflow",
            maxSize: "range-overflow",
            min: "range-underflow",
            max: "range-overflow",
            past: "type-mismatch",
            future: "type-mismatch",
            dateRange: "type-mismatch",
            dateTimeRange: "type-mismatch",
            maxCheckbox: "range-overflow",
            minCheckbox: "range-underflow",
            equals: "pattern-mismatch",
            funcCall: "custom-error",
            funcCallRequired: "custom-error",
            creditCard: "pattern-mismatch",
            condRequired: "value-missing"
        },
        _required: function(t, n, r, i, s) {
            switch (t.prop("type")) {
                case "radio":
                case "checkbox":
                    if (s) {
                        if (!t.prop("checked")) {
                            return i.allrules[n[r]].alertTextCheckboxMultiple
                        }
                        break
                    }
                    var o = t.closest("form, .validationEngineContainer");
                    var u = t.attr("name");
                    if (o.find("input[name='" + u + "']:checked").size() == 0) {
                        if (o.find("input[name='" + u + "']:visible").size() == 1) return i.allrules[n[r]].alertTextCheckboxe;
                        else return i.allrules[n[r]].alertTextCheckboxMultiple
                    }
                    break;
                case "text":
                case "password":
                case "textarea":
                case "file":
                case "select-one":
                case "select-multiple":
                default:
                    var a = e.trim(t.val());
                    var f = e.trim(t.attr("data-validation-placeholder"));
                    var l = e.trim(t.attr("placeholder"));
                    if (!a || f && a == f || l && a == l) {
                        return i.allrules[n[r]].alertText
                    }
                    break
            }
        },
        _groupRequired: function(n, r, i, s) {
            var o = "[" + s.validateAttribute + "*=" + r[i + 1] + "]";
            var u = false;
            n.closest("form, .validationEngineContainer").find(o).each(function() {
                if (!t._required(e(this), r, i, s)) {
                    u = true;
                    return false
                }
            });
            if (!u) {
                return s.allrules[r[i]].alertText
            }
        },
        _custom: function(e, t, n, r) {
            var i = t[n + 1];
            var s = r.allrules[i];
            var o;
            if (!s) {
                alert("jqv:custom rule not found - " + i);
                return
            }
            if (s["regex"]) {
                var u = s.regex;
                if (!u) {
                    alert("jqv:custom regex not found - " + i);
                    return
                }
                var a = new RegExp(u);
                if (!a.test(e.val())) return r.allrules[i].alertText
            } else if (s["func"]) {
                o = s["func"];
                if (typeof o !== "function") {
                    alert("jqv:custom parameter 'function' is no function - " + i);
                    return
                }
                if (!o(e, t, n, r)) return r.allrules[i].alertText
            } else {
                alert("jqv:custom type not allowed " + i);
                return
            }
        },
        _funcCall: function(e, t, n, r) {
            var i = t[n + 1];
            var s;
            if (i.indexOf(".") > -1) {
                var o = i.split(".");
                var u = window;
                while (o.length) {
                    u = u[o.shift()]
                }
                s = u
            } else s = window[i] || r.customFunctions[i];
            if (typeof s == "function") return s(e, t, n, r)
        },
        _funcCallRequired: function(e, n, r, i) {
            return t._funcCall(e, n, r, i)
        },
        _equals: function(t, n, r, i) {
            var s = n[r + 1];
            if (t.val() != e("#" + s).val()) return i.allrules.equals.alertText
        },
        _maxSize: function(e, t, n, r) {
            var i = t[n + 1];
            var s = e.val().length;
            if (s > i) {
                var o = r.allrules.maxSize;
                return o.alertText + i + o.alertText2
            }
        },
        _minSize: function(e, t, n, r) {
            var i = t[n + 1];
            var s = e.val().length;
            if (s < i) {
                var o = r.allrules.minSize;
                return o.alertText + i + o.alertText2
            }
        },
        _min: function(e, t, n, r) {
            var i = parseFloat(t[n + 1]);
            var s = parseFloat(e.val());
            if (s < i) {
                var o = r.allrules.min;
                if (o.alertText2) return o.alertText + i + o.alertText2;
                return o.alertText + i
            }
        },
        _max: function(e, t, n, r) {
            var i = parseFloat(t[n + 1]);
            var s = parseFloat(e.val());
            if (s > i) {
                var o = r.allrules.max;
                if (o.alertText2) return o.alertText + i + o.alertText2;
                return o.alertText + i
            }
        },
        _past: function(n, r, i, s, o) {
            var u = i[s + 1];
            var a = e(n.find("*[name='" + u.replace(/^#+/, "") + "']"));
            var f;
            if (u.toLowerCase() == "now") {
                f = new Date
            } else if (undefined != a.val()) {
                if (a.is(":disabled")) return;
                f = t._parseDate(a.val())
            } else {
                f = t._parseDate(u)
            }
            var l = t._parseDate(r.val());
            if (l > f) {
                var c = o.allrules.past;
                if (c.alertText2) return c.alertText + t._dateToString(f) + c.alertText2;
                return c.alertText + t._dateToString(f)
            }
        },
        _future: function(n, r, i, s, o) {
            var u = i[s + 1];
            var a = e(n.find("*[name='" + u.replace(/^#+/, "") + "']"));
            var f;
            if (u.toLowerCase() == "now") {
                f = new Date
            } else if (undefined != a.val()) {
                if (a.is(":disabled")) return;
                f = t._parseDate(a.val())
            } else {
                f = t._parseDate(u)
            }
            var l = t._parseDate(r.val());
            if (l < f) {
                var c = o.allrules.future;
                if (c.alertText2) return c.alertText + t._dateToString(f) + c.alertText2;
                return c.alertText + t._dateToString(f)
            }
        },
        _isDate: function(e) {
            var t = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
            return t.test(e)
        },
        _isDateTime: function(e) {
            var t = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
            return t.test(e)
        },
        _dateCompare: function(e, t) {
            return new Date(e.toString()) < new Date(t.toString())
        },
        _dateRange: function(e, n, r, i) {
            if (!i.firstOfGroup[0].value && i.secondOfGroup[0].value || i.firstOfGroup[0].value && !i.secondOfGroup[0].value) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
            if (!t._isDate(i.firstOfGroup[0].value) || !t._isDate(i.secondOfGroup[0].value)) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
            if (!t._dateCompare(i.firstOfGroup[0].value, i.secondOfGroup[0].value)) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
        },
        _dateTimeRange: function(e, n, r, i) {
            if (!i.firstOfGroup[0].value && i.secondOfGroup[0].value || i.firstOfGroup[0].value && !i.secondOfGroup[0].value) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
            if (!t._isDateTime(i.firstOfGroup[0].value) || !t._isDateTime(i.secondOfGroup[0].value)) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
            if (!t._dateCompare(i.firstOfGroup[0].value, i.secondOfGroup[0].value)) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
        },
        _maxCheckbox: function(e, t, n, r, i) {
            var s = n[r + 1];
            var o = t.attr("name");
            var u = e.find("input[name='" + o + "']:checked").size();
            if (u > s) {
                i.showArrow = false;
                if (i.allrules.maxCheckbox.alertText2) return i.allrules.maxCheckbox.alertText + " " + s + " " + i.allrules.maxCheckbox.alertText2;
                return i.allrules.maxCheckbox.alertText
            }
        },
        _minCheckbox: function(e, t, n, r, i) {
            var s = n[r + 1];
            var o = t.attr("name");
            var u = e.find("input[name='" + o + "']:checked").size();
            if (u < s) {
                i.showArrow = false;
                return i.allrules.minCheckbox.alertText + " " + s + " " + i.allrules.minCheckbox.alertText2
            }
        },
        _creditCard: function(e, t, n, r) {
            var i = false,
                s = e.val().replace(/ +/g, "").replace(/-+/g, "");
            var o = s.length;
            if (o >= 14 && o <= 16 && parseInt(s) > 0) {
                var u = 0,
                    n = o - 1,
                    a = 1,
                    f, l = new String;
                do {
                    f = parseInt(s.charAt(n));
                    l += a++ % 2 == 0 ? f * 2 : f
                } while (--n >= 0);
                for (n = 0; n < l.length; n++) {
                    u += parseInt(l.charAt(n))
                }
                i = u % 10 == 0
            }
            if (!i) return r.allrules.creditCard.alertText
        },
        _ajax: function(n, r, i, s) {
            var o = r[i + 1];
            var u = s.allrules[o];
            var a = u.extraData;
            var f = u.extraDataDynamic;
            var l = {
                fieldId: n.attr("id"),
                fieldValue: n.val()
            };
            if (typeof a === "object") {
                e.extend(l, a)
            } else if (typeof a === "string") {
                var c = a.split("&");
                for (var i = 0; i < c.length; i++) {
                    var h = c[i].split("=");
                    if (h[0] && h[0]) {
                        l[h[0]] = h[1]
                    }
                }
            }
            if (f) {
                var p = [];
                var d = String(f).split(",");
                for (var i = 0; i < d.length; i++) {
                    var v = d[i];
                    if (e(v).length) {
                        var m = n.closest("form, .validationEngineContainer").find(v).val();
                        var g = v.replace("#", "") + "=" + escape(m);
                        l[v.replace("#", "")] = m
                    }
                }
            }
            if (s.eventTrigger == "field") {
                delete s.ajaxValidCache[n.attr("id")]
            }
            if (!s.isError && !t._checkAjaxFieldStatus(n.attr("id"), s)) {
                e.ajax({
                    type: s.ajaxFormValidationMethod,
                    url: u.url,
                    cache: false,
                    dataType: "json",
                    data: l,
                    field: n,
                    rule: u,
                    methods: t,
                    options: s,
                    beforeSend: function() {},
                    error: function(e, n) {
                        if (s.onFailure) {
                            s.onFailure(e, n)
                        } else {
                            t._ajaxError(e, n)
                        }
                    },
                    success: function(r) {
                        var i = r[0];
                        var o = e("#" + i).eq(0);
                        if (o.length == 1) {
                            var a = r[1];
                            var f = r[2];
                            if (!a) {
                                s.ajaxValidCache[i] = false;
                                s.isError = true;
                                if (f) {
                                    if (s.allrules[f]) {
                                        var l = s.allrules[f].alertText;
                                        if (l) {
                                            f = l
                                        }
                                    }
                                } else f = u.alertText;
                                if (s.showPrompts) t._showPrompt(o, f, "", true, s)
                            } else {
                                s.ajaxValidCache[i] = true;
                                if (f) {
                                    if (s.allrules[f]) {
                                        var l = s.allrules[f].alertTextOk;
                                        if (l) {
                                            f = l
                                        }
                                    }
                                } else f = u.alertTextOk;
                                if (s.showPrompts) {
                                    if (f) t._showPrompt(o, f, "pass", true, s);
                                    else t._closePrompt(o)
                                }
                                if (s.eventTrigger == "submit") n.closest("form").submit()
                            }
                        }
                        o.trigger("jqv.field.result", [o, s.isError, f])
                    }
                });
                return u.alertTextLoad
            }
        },
        _ajaxError: function(e, t) {
            if (e.status == 0 && t == null) alert("The page is not served from a server! ajax call failed");
            else if (typeof console != "undefined") console.log("Ajax error: " + e.status + " " + t)
        },
        _dateToString: function(e) {
            return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
        },
        _parseDate: function(e) {
            var t = e.split("-");
            if (t == e) t = e.split("/");
            if (t == e) {
                t = e.split(".");
                return new Date(t[2], t[1] - 1, t[0])
            }
            return new Date(t[0], t[1] - 1, t[2])
        },
        _showPrompt: function(n, r, i, s, o, u) {
            if (n.data("jqv-prompt-at") instanceof jQuery) {
                n = n.data("jqv-prompt-at")
            } else if (n.data("jqv-prompt-at")) {
                n = e(n.data("jqv-prompt-at"))
            }
            var a = t._getPrompt(n);
            if (u) a = false;
            if (e.trim(r)) {
                if (a) t._updatePrompt(n, a, r, i, s, o);
                else t._buildPrompt(n, r, i, s, o)
            }
        },
        _buildPrompt: function(n, r, i, s, o) {
            var u = e("<div>");
			//custom error message inside field 
			var fs = '<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10">';
			if(n.attr('data-inside') == 'yes'){
				fs='';
				var j = n.outerWidth() - 4;
				var k = n.outerHeight() - 4;
				u.css({
					width: j+'px',
					height: k+'px'
				});
				u.addClass("fs-insideFrmerror");
				$('<i class="ico-cross2"></i>').appendTo(u);
			}
			
			if(n.hasClass('selectValid')){
				n.parent().addClass('selectValid-error');
			}
			
            u.addClass(t._getClassName(n.attr("id")) + "formError");
            u.addClass("parentForm" + t._getClassName(n.closest("form, .validationEngineContainer").attr("id")));
            u.addClass("formError");
			u.addClass("fs-formError");
            switch (i) {
                case "pass":
                    u.addClass("greenPopup");
                    break;
                case "load":
                    u.addClass("blackPopup");
                    break;
                default:
            }
            if (s) u.addClass("ajaxed");
            var a = e("<div>").addClass("formErrorContent").html(r).appendTo(u);
            var f = n.data("promptPosition") || o.promptPosition;
            if (o.showArrow) {
                var l = e("<div>").addClass("formErrorArrow");
                if (typeof f == "string") {
                    var c = f.indexOf(":");
                    if (c != -1) f = f.substring(0, c)
                }
                switch (f) {
                    case "bottomLeft":
                    case "bottomRight":
                        u.find(".formErrorContent").before(l);
                        l.addClass("formErrorArrowBottom").html(fs);						
                        break;
                    case "topLeft":
                    case "topRight":
                        l.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
                        u.append(l);
                        break
                }
            }
            if (o.addPromptClass) u.addClass(o.addPromptClass);
            var h = n.attr("data-required-class");
            if (h !== undefined) {
                u.addClass(h)
            } else {
                if (o.prettySelect) {
                    if (e("#" + n.attr("id")).next().is("select")) {
                        var p = e("#" + n.attr("id").substr(o.usePrefix.length).substring(o.useSuffix.length)).attr("data-required-class");
                        if (p !== undefined) {
                            u.addClass(p)
                        }
                    }
                }
            }
            u.css({
                opacity: 0
            });
            if (f === "inline") {
                u.addClass("inline");
                if (typeof n.attr("data-prompt-target") !== "undefined" && e("#" + n.attr("data-prompt-target")).length > 0) {
                    u.appendTo(e("#" + n.attr("data-prompt-target")))
                } else {
                    n.after(u)
                }
            } else {
                n.before(u)
            }
            var c = t._calculatePosition(n, u, o);
            u.css({
                position: f === "inline" ? "relative" : "absolute",
                top: c.callerTopPosition,
                left: c.callerleftPosition,
                marginTop: c.marginTopSize,
                opacity: 0
            }).data("callerField", n);
            if (o.autoHidePrompt) {
                setTimeout(function() {
                    u.animate({
                        opacity: 0
                    }, function() {
                        u.closest(".formError").remove()
                    })
                }, o.autoHideDelay)
            }
            return u.animate({
                opacity: 1
            })
        },
        _updatePrompt: function(e, n, r, i, s, o, u) {
            if (n) {
                if (typeof i !== "undefined") {
                    if (i == "pass") n.addClass("greenPopup");
                    else n.removeClass("greenPopup");
                    if (i == "load") n.addClass("blackPopup");
                    else n.removeClass("blackPopup")
                }
                if (s) n.addClass("ajaxed");
                else n.removeClass("ajaxed");
                n.find(".formErrorContent").html(r);
                var a = t._calculatePosition(e, n, o);
                var f = {
                    top: a.callerTopPosition,
                    left: a.callerleftPosition,
                    marginTop: a.marginTopSize,
                    opacity: 1
                };
                n.css({
                    opacity: 0,
                    display: "block"
                });
                if (u) n.css(f);
                else n.animate(f)
            }
        },
        _closePrompt: function(e) {
            var n = t._getPrompt(e);
            if (n) n.fadeTo("fast", 0, function() {
                n.closest(".formError").remove()
            })
        },
        closePrompt: function(e) {
            return t._closePrompt(e)
        },
        _getPrompt: function(n) {
            var r = e(n).closest("form, .validationEngineContainer").attr("id");
            var i = t._getClassName(n.attr("id")) + "formError";
            var s = e("." + t._escapeExpression(i) + ".parentForm" + t._getClassName(r))[0];
            if (s) return e(s)
        },
        _escapeExpression: function(e) {
            return e.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1")
        },
        isRTL: function(t) {
            var n = e(document);
            var r = e("body");
            var i = t && t.hasClass("rtl") || t && (t.attr("dir") || "").toLowerCase() === "rtl" || n.hasClass("rtl") || (n.attr("dir") || "").toLowerCase() === "rtl" || r.hasClass("rtl") || (r.attr("dir") || "").toLowerCase() === "rtl";
            return Boolean(i)
        },
        _calculatePosition: function(e, t, n) {
            var r, i, s;
            var o = e.width();
            var u = e.position().left;
            var a = e.position().top;
            var f = e.height();
            var l = t.height();
            r = i = 0;
            s = -l;
            var c = e.data("promptPosition") || n.promptPosition;
            var h = "";
            var p = "";
            var d = 0;
            var v = 0;
            if (typeof c == "string") {
                if (c.indexOf(":") != -1) {
                    h = c.substring(c.indexOf(":") + 1);
                    c = c.substring(0, c.indexOf(":"));
                    if (h.indexOf(",") != -1) {
                        p = h.substring(h.indexOf(",") + 1);
                        h = h.substring(0, h.indexOf(","));
                        v = parseInt(p);
                        if (isNaN(v)) v = 0
                    }
                    d = parseInt(h);
                    if (isNaN(h)) h = 0
                }
            }
            switch (c) {
                default:
                    case "topRight":
                    i += u + o - 27;r += a;
                break;
                case "topLeft":
                        r += a;i += u;
                    break;
                case "centerRight":
                        r = a + 4;s = 0;i = u + e.outerWidth(true) + 5;
                    break;
                case "centerLeft":
                        i = u - (t.width() + 2);r = a + 4;s = 0;
                    break;
                case "bottomLeft":
                        r = a + e.height() - 5;s = 0;i = u;
						// custom error message position inside field
						if(e.attr('data-inside') == 'yes'){
							r = a + 2 ;s = 0;i = u + 2;
						}
                    break;
                case "bottomRight":
                        i = u + o - 27;r = a + e.height() + 5;s = 0;
                    break;
                case "inline":
                        i = 0;r = 0;s = 0
            }
            i += d;
            r += v;
            return {
                callerTopPosition: r + "px",
                callerleftPosition: i + "px",
                marginTopSize: s + "px"
            }
        },
        _saveOptions: function(t, n) {
            if (e.validationEngineLanguage) var r = e.validationEngineLanguage.allRules;
            else e.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
            e.validationEngine.defaults.allrules = r;
            var i = e.extend(true, {}, e.validationEngine.defaults, n);
            t.data("jqv", i);
            return i
        },
        _getClassName: function(e) {
            if (e) return e.replace(/:/g, "_").replace(/\./g, "_")
        },
        _jqSelector: function(e) {
            return e.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1")
        },
        _condRequired: function(e, n, r, i) {
            var s, o;
            for (s = r + 1; s < n.length; s++) {
                o = jQuery("#" + n[s]).first();
                if (o.length && t._required(o, ["required"], 0, i, true) == undefined) {
                    return t._required(e, ["required"], 0, i)
                }
            }
        },
        _submitButtonClick: function(t) {
            var n = e(this);
            var r = n.closest("form, .validationEngineContainer");
            r.data("jqv_submitButton", n.attr("id"))
        }
    };
    e.fn.validationEngine = function(n) {
        var r = e(this);
        if (!r[0]) return r;
        if (typeof n == "string" && n.charAt(0) != "_" && t[n]) {
            if (n != "showPrompt" && n != "hide" && n != "hideAll") t.init.apply(r);
            return t[n].apply(r, Array.prototype.slice.call(arguments, 1))
        } else if (typeof n == "object" || !n) {
            t.init.apply(r, arguments);
            return t.attach.apply(r)
        } else {
            e.error("Method " + n + " does not exist in jQuery.validationEngine")
        }
    };
    e.validationEngine = {
        fieldIdCounter: 0,
        defaults: {
            validationEventTrigger: "",
            scroll: false,
            focusFirstField: true,
            showPrompts: true,
            validateNonVisibleFields: false,
            ignoreFieldsWithClass: "ignoreMe",
            promptPosition: "bottomLeft",
            bindMethod: "bind",
            inlineAjax: false,
            ajaxFormValidation: false,
            ajaxFormValidationURL: false,
            ajaxFormValidationMethod: "get",
            onAjaxFormComplete: e.noop,
            onBeforeAjaxFormValidation: e.noop,
            onValidationComplete: false,
            doNotShowAllErrosOnSubmit: false,
            custom_error_messages: {},
            binded: true,
            notEmpty: false,
            showArrow: true,
            showArrowOnRadioAndCheckbox: false,
            isError: false,
            maxErrorsPerField: false,
            ajaxValidCache: {},
            autoPositionUpdate: false,
            InvalidFields: [],
            onFieldSuccess: false,
            onFieldFailure: false,
            onSuccess: false,
            onFailure: false,
            validateAttribute: "class",
            addSuccessCssClassToField: "",
            addFailureCssClassToField: "",
            autoHidePrompt: true,
            autoHideDelay: 5,
            fadeDuration: 300,
            prettySelect: false,
            addPromptClass: "",
            usePrefix: "",
            useSuffix: "",
            showOneMessage: false
        }
    };
    e(function() {
        e.validationEngine.defaults.promptPosition = t.isRTL() ? "bottomLeft" : "bottomLeft"
    })
})(jQuery)

var urlFormat = /^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/
function checkLEGAL(field, rules, i, options){
	var match = field.val().match(urlFormat)
	if (!match) return "Invalid URL"
	
}
var fsurlFormat = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/ ///^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/
function checkLEGALurl(field, rules, i, options){
	var match = field.val().match(fsurlFormat)
	if (!match) return "Invalid URL"
	
}
function checkAnydomain(field, rules, i, options){
	var match = field.val().match(fsurlFormat)
	if (!match) return "Invalid URL"
	
}

var checkdomainformat = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$/ ///^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/
function checkLEGALname(field, rules, i, options){
	var match = field.val().match(checkdomainformat)
	if (!match) return "Invalid domain"
	
}

function checkLEGALdomain(field, rules, i, options){
    nname= $('#userdomain').val();
                nname = nname.replace('http://','');
                nname = nname.replace('https://','');
                nname = nname.replace('www.','');
                
	var match = nname.match(fsurlFormat)
	if (!match) return "Invalid URL"
	
}

var URL_regex = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i

function checksucialURL(field, rules, i, options){
	var match = field.val().match(URL_regex);
	var errmsg = field.attr('data-errormessage-custom-error');
	fieldVal = field.val().split('.com/');
	fieldVal2 = field.val().split('.com');
	
	if (!match || fieldVal[1] == '' || fieldVal2[1] == '') return errmsg
}

function social_reviewsValidation(field, rules, i, options){
	var errmsg = field.attr('data-errormessage-custom-error');
	var field_value = field.val();
	field_value = field_value.replace('http://','');
	field_value = field_value.replace('https://','');
	field_value = field_value.replace('www.','');
	field_value = field_value.replace('com/','com');
	var fieldVal = field_value.split('.com');
	var type = $('.profile_list li a.active').attr('role').toLowerCase();
	if(fieldVal[0] == type && fieldVal[1] != ''){
	}else{
		return errmsg;
		console.log(errmsg)
	}
}

function url_check(field, rules, i, options){
	var match = field.val().match(URL_regex);
	var errmsg = field.attr('data-errormessage-custom-error');
	if(field.val().charAt(0) == '#'){
	}else{
		if (!match) return errmsg
	}
}