function w_a(a) {
	throw a;
}
var w_b = true, w_c = null, w_d = false;
window.jstiming && window.jstiming.load.tick("widgetJsStart");
function w_aa() {
	window.jstiming.load.tick("ol")
}
function w_e(a, b) {
	a.addEventListener ? a.addEventListener("load", b, w_d) : a.attachEvent(
			"onload", b)
}
function w_f(a, b) {
	return a.className && a.className.indexOf(b) != -1 ? a
			: a.parentNode ? w_f(a.parentNode, b) : w_c
}
function w_ba() {
	window.jstiming.load.tick("prt");
	window.tickAboveFold && window.tickAboveFold(this)
}
function w_ca(a) {
	window.jstiming.load.tick("widgetJsEnd");
	window.jstiming.load.tick("prt");
	var b = a + "blogspot";
	window.jstiming.load.name = b;
	for ( var c = document.getElementsByTagName("img"), d = 0; d < c.length; d++)
		c[d].complete || w_f(c[d], "post") != w_c && w_e(c[d], w_ba);
	w_e(window, w_aa);
	window.addEventListener ? window
			.addEventListener("beforeunload", w_da, w_d) : window.attachEvent(
			"onbeforeunload", w_da)
}
function w_da() {
	window.jstiming.report(window.jstiming.load)
}
var _attachCsiOnload = w_ca;
var w_ea = w_d;
function w_g(a) {
	try {
		w_a(a)
	} catch (b) {
		w_fa(b)
	}
}
function w_fa(a, b) {
	var c = "Javascript exception: " + (b ? b : "") + " " + a;
	if (w_h("msie") && !window.opera)
		c += " " + a.name + ": " + a.message + " (" + a.number + ")";
	var d = "";
	if (typeof a == "string")
		d = a + "\n";
	else
		for ( var e in a)
			try {
				d += e + ": " + a[e] + "\n"
			} catch (f) {
			}
	d += w_ga(w_fa.caller);
	w_ha(c + "\n" + d, 1)
}
var w_ia = /function (\w+)/;
function w_ja(a) {
	var b = w_ia.exec(String(a));
	if (b)
		return b[1];
	return ""
}
function w_ga(a) {
	try {
		if (!(w_h("msie") && !window.opera)
				&& !(w_h("safari") || w_h("konqueror")) && w_h("mozilla"))
			return Error().stack;
		if (!a)
			return "";
		for ( var b = "- " + w_ja(a) + "(", c = 0; c < a.arguments.length; c++) {
			if (c > 0)
				b += ", ";
			var d = String(a.arguments[c]);
			if (d.length > 40)
				d = d.substr(0, 40) + "...";
			b += d
		}
		b += ")\n";
		b += w_ga(a.caller);
		return b
	} catch (e) {
		return "[Cannot get stack trace]: " + e + "\n"
	}
}
var w_ka, w_i = w_c, w_j = w_d;
function w_la() {
	if ((w_i == w_c || w_i.closed) && !w_j)
		try {
			w_j = w_b;
			w_i = window
					.open(
							"",
							"debug",
							"width=700,height=500,toolbar=no,resizable=yes,scrollbars=yes,left=16,top=16,screenx=16,screeny=16");
			w_i.blur();
			w_i.document.open();
			w_j = w_d;
			var a = "<font color=#ff0000><b>To turn off this debugging window,hit 'D' inside the main caribou window, then close this window.</b></font><br>";
			w_ma(a)
		} catch (b) {
		}
}
function w_ha(a, b) {
	if (w_ea) {
		try {
			var c = (new Date).getTime() - w_ka, d = "[" + c + "] "
					+ w_na(a).replace(/\n/g, "<br>") + "<br>";
			if (b == 1) {
				d = "<font color=#ff0000><b>Error: " + d + "</b></font>";
				w_i.focus()
			}
		} catch (e) {
		}
		w_ma(d)
	} else
		typeof w_k != "undefined" && w_k(w_na(a))
}
function w_ma(a) {
	if (w_ea)
		try {
			w_la();
			w_i.document.write(a);
			w_i.scrollTo(0, 1000000)
		} catch (b) {
		}
};
function w_h(a) {
	if (a in w_l)
		return w_l[a];
	return w_l[a] = navigator.userAgent.toLowerCase().indexOf(a) != -1
}
var w_l = {};
function w_oa(a) {
	if (typeof Error != "undefined")
		w_a(new Error(a || "Assertion Failed"));
	else
		w_a(a)
}
function w_pa(a) {
	a = a || "Assertion failed";
	typeof w_g != "undefined" && w_g(a + "\n");
	w_oa(a)
}
function w_m(a, b) {
	if (!a) {
		b = b || "Assertion failed";
		w_pa(b)
	}
}
function w_n(a, b) {
	a.style.display = b ? "" : "none"
}
function w_qa(a, b) {
	a.style.display = b ? "block" : "none"
}
function w_o(a, b) {
	a.style.display = b ? "inline" : "none"
}
function w_p(a, b) {
	if (a == w_c || a.className == w_c)
		return w_d;
	if (a.className == b)
		return w_b;
	for ( var c = a.className.split(" "), d = 0; d < c.length; d++)
		if (c[d] == b)
			return w_b;
	return w_d
}
function w_q(a, b) {
	w_p(a, b) || (a.className += " " + b)
}
function w_r(a, b) {
	if (!(a.className == w_c))
		if (a.className == b)
			a.className = "";
		else {
			for ( var c = a.className.split(" "), d = [], e = w_d, f = 0; f < c.length; f++)
				if (c[f] != b)
					c[f] && d.push(c[f]);
				else
					e = w_b;
			if (e)
				a.className = d.join(" ")
		}
}
function w_s(a, b) {
	for ( var c = [], d = a.firstChild; d; d = d.nextSibling)
		w_ra(d, b, c);
	return c
}
function w_ra(a, b, c) {
	b.select(a) && c.push(a);
	for ( var d = a.firstChild; d; d = d.nextSibling)
		w_ra(d, b, c)
}
var w_sa = /&/g, w_ta = /</g, w_ua = />/g;
function w_na(a) {
	if (!a)
		return "";
	return a.replace(w_sa, "&amp;").replace(w_ta, "&lt;").replace(w_ua, "&gt;")
			.replace(w_va, "&quot;")
}
var w_va = /\"/g;
function w_wa(a) {
	return document.getElementById(a)
}
function w_xa(a) {
	return document.all[a]
}
var w_ya = document.getElementById ? w_wa : w_xa;
function w_k(a) {
	try {
		if (window.parent != window && window.parent.log) {
			window.parent.log(window.name + "::" + a);
			return
		}
	} catch (b) {
	}
	var c = w_ya("log");
	if (c) {
		var d = "<p class=logentry><span class=logdate>" + new Date
				+ "</span><span class=logmsg>" + a + "</span></p>";
		c.innerHTML = d + c.innerHTML
	} else
		window.status = a
};
function w_t() {
}
w_t.raise = function(a) {
	if (typeof Error != "undefined")
		w_a(new Error(a || "Assertion Failed"));
	else
		w_a(a)
};
w_t.fail = function(a) {
	a = a || "Assertion failed";
	typeof w_g == "undefined" || w_g(a + "\n");
	w_t.raise(a)
};
w_t.isTrue = function(a, b) {
	if (!a) {
		if (b === undefined)
			b = "Assertion failed";
		w_t.fail(b)
	}
};
w_t.equals = function(a, b, c) {
	if (a != b) {
		if (c === undefined)
			c = "AS_Assert.equals failed: <" + a + "> != <" + b + ">";
		w_t.fail(c)
	}
};
w_t.typeOf = function(a, b, c) {
	if (!(typeof a == b)) {
		if (a || a == "")
			try {
				if (b == w_t.TYPE_MAP[typeof a] || a instanceof b)
					return
			} catch (d) {
			}
		if (c === undefined) {
			if (typeof b == "function") {
				var e = b.toString().match(/^\s*function\s+([^\s\{]+)/);
				if (e)
					b = e[1]
			}
			c = "AS_Assert.typeOf failed: <" + a + "> not typeof " + b
		}
		w_t.fail(c)
	}
};
w_t.TYPE_MAP = {
	string : String,
	number : Number,
	"boolean" : Boolean
};
w_t.numArgs = function(a, b) {
	var c = w_t.numArgs.caller;
	if (c && c.arguments.length != a) {
		if (b === undefined)
			b = c.name + " expected " + a + " arguments  but received "
					+ c.arguments.length;
		w_t.fail(b)
	}
};
var w_u;
function w_za() {
	var a = [ "MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP",
			"Microsoft.XMLHTTP" ];
	if (typeof XMLHttpRequest == "undefined"
			&& typeof ActiveXObject != "undefined") {
		for ( var b = 0; b < a.length; b++) {
			var c = a[b];
			try {
				new ActiveXObject(c);
				w_u = c;
				break
			} catch (d) {
			}
		}
		if (!w_u)
			w_a(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed."))
	}
}
w_za();
function w_Aa(a, b, c, d) {
	a.open("POST", b, w_b);
	a.onreadystatechange = d;
	a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	a.setRequestHeader("Content-Length", c.length);
	w_Ba(a, c)
}
function w_Ba(a, b) {
	try {
		a.send(b)
	} catch (c) {
		w_k("XMLHttpSend failed " + c.toString() + "<br>" + c.stack);
		w_a(c)
	}
};
var w_Ca = 0, w_v = 0;
if ("undefined" == typeof w_k)
	w_k = function() {
	};
function w_Da(a) {
	var b = -1;
	try {
		b = a.status
	} catch (c) {
	}
	return b
}
function w_Ea(a) {
	var b = w_c;
	try {
		b = a.statusText
	} catch (c) {
	}
	return b
}
function w_Fa(a, b, c, d) {
	if (a.readyState == 4)
		try {
			var e = w_b;
			if (d)
				try {
					e = !(w_d === d(a))
				} catch (f) {
					w_k("Message (" + b + ") handling failed: " + f);
					w_a(f)
				}
			var g = w_Da(a);
			if (200 === g) {
				w_k("Message (" + b + ") received after "
						+ ((new Date).getTime() - c) + " ms");
				try {
					var h = (new Date).getTime();
					e && a.responseText.length && eval(a.responseText);
					w_k("Message (" + b + ") processing took "
							+ ((new Date).getTime() - h) + " ms")
				} catch (i) {
					w_k("Message (" + b + ") processing failed: " + i);
					alert(i + "\n" + i.stack + "\n\n" + a.responseText);
					w_a(i)
				}
			} else
				204 == g ? w_k("Message (" + b + ") received after "
						+ ((new Date).getTime() - c) + " ms") : w_k("Message ("
						+ b + ") failed with response " + g + " " + w_Ea(a)
						+ " after " + ((new Date).getTime() - c) + " ms.")
		} finally {
			--w_v
		}
}
function w_Ga(a, b, c) {
	var d = "";
	if (b)
		for ( var e = "", f = 0; f < b.length;) {
			var g = b[f++], h = b[f++];
			d += e + encodeURIComponent(g);
			e = "&";
			if (w_c !== h && undefined !== h)
				d += "=" + encodeURIComponent(h.toString())
		}
	for ( var i = ++w_Ca, j = w_u ? new ActiveXObject(w_u) : new XMLHttpRequest, k = (new Date)
			.getTime(), l = function() {
		w_Fa(j, i, k, c)
	}, m = a, n = m.length + 1; (n = m.lastIndexOf("&", n - 1)) >= 0;)
		m = m.substring(0, n) + "&amp;" + m.substring(n + 1);
	w_k("Message (" + i + ") sent: POST <tt>" + m + "</tt>.");
	++w_v;
	w_Aa(j, a, d, l)
};
var w_Ha = this;
String.prototype.ge = function(a) {
	return this.indexOf(a) == 0
};
String.prototype.Gf = function(a) {
	var b = this.length - a.length;
	return b >= 0 && this.lastIndexOf(a, b) == b
};
String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, "")
};
String.prototype.subs = function() {
	for ( var a = this, b = 0; b < arguments.length; b++)
		a = a.replace(/\%s/, String(arguments[b]));
	return a
};
if (!Function.prototype.apply)
	Function.prototype.apply = function(a, b) {
		var c = [], d, e;
		a || (a = w_Ha);
		for ( var f = b || [], g = 0; g < f.length; g++)
			c[g] = "args[" + g + "]";
		e = "oScope.__applyTemp__.peek()(" + c.join(",") + ");";
		if (!a.__applyTemp__)
			a.__applyTemp__ = [];
		a.__applyTemp__.push(this);
		d = eval(e);
		a.__applyTemp__.pop();
		return d
	};
if (!Array.prototype.push)
	Array.prototype.push = function() {
		for ( var a = 0; a < arguments.length; a++)
			this[this.length] = arguments[a];
		return this.length
	};
if (!Array.prototype.pop)
	Array.prototype.pop = function() {
		if (this.length) {
			var a = this[this.length - 1];
			this.length--;
			return a
		}
	};
Array.prototype.peek = function() {
	return this[this.length - 1]
};
if (!Array.prototype.shift)
	Array.prototype.shift = function() {
		if (!(this.length == 0)) {
			for ( var a = this[0], b = 0; b < this.length - 1; b++)
				this[b] = this[b + 1];
			this.length--;
			return a
		}
	};
if (!Array.prototype.unshift)
	Array.prototype.unshift = function() {
		for ( var a = arguments.length, b = this.length - 1; b >= 0; b--)
			this[b + a] = this[b];
		for ( var c = 0; c < a; c++)
			this[c] = arguments[c];
		return this.length
	};
if (!Array.prototype.forEach)
	Array.prototype.forEach = function(a, b) {
		for ( var c = 0; c < this.length; c++)
			a.call(b, this[c], c, this)
	};
function w_w(a, b) {
	var c = a.Yc || [];
	c = c.concat(Array.prototype.slice.call(arguments, 2));
	if (typeof a.Tb != "undefined")
		b = a.Tb;
	if (typeof a.Sb != "undefined")
		a = a.Sb;
	var d = function() {
		var e = c.concat(Array.prototype.slice.call(arguments));
		return a.apply(b, e)
	};
	d.Yc = c;
	d.Tb = b;
	d.Sb = a;
	return d
}
Function.prototype.bind = function(a) {
	return w_w.apply(w_c, [ this, a ].concat(Array.prototype.slice.call(
			arguments, 1)))
};
Function.prototype.partial = function() {
	return w_w.apply(w_c, [ this, w_c ].concat(Array.prototype.slice
			.call(arguments)))
};
Function.prototype.inherits = function(a) {
	var b = function() {
	};
	this.Ac = b.prototype = a.prototype;
	this.prototype = new b
};
Function.prototype.mixin = function(a) {
	for ( var b in a)
		this.prototype[b] = a[b];
	if (typeof a.toString == "function"
			&& a.toString != this.prototype.toString)
		this.prototype.toString = a.toString
};
function w_x(a, b, c, d, e, f) {
	this.instanceId = a;
	this.sectionId = b;
	this.markups = c;
	if (d)
		this.rootElement = d;
	if (e)
		this.data = e;
	if (f) {
		this.Ef = f;
		if (!w_x.IsValidDisplayMode(f))
			w_a("bad display mode: " + f)
	} else
		this.Ef = w_x.DISPLAY_MODE_NONE;
	this.isNew = w_d
}
w_x.IsValidDisplayMode = function(a) {
	return a == w_x.DISPLAY_MODE_SNIPPET || a == w_x.DISPLAY_MODE_FULL
			|| a == w_x.DISPLAY_MODE_LAYOUT || a == w_x.DISPLAY_MODE_NONE
};
w_x.DISPLAY_MODE_FULL = "displayModeFull";
w_x.DISPLAY_MODE_SNIPPET = "displayModeSnippet";
w_x.DISPLAY_MODE_LAYOUT = "displayModeLayout";
w_x.DISPLAY_MODE_NONE = "displayModeNone";
function w_y(a) {
	this.qh = w_b;
	this.ke = new w_z(this);
	this.g = a;
	this.Ma = w_c
}
w_y.DATA_NAMESPACE_PREFIX = "data";
w_y.ACTION_NAMESPACE_PREFIX = "b";
w_y.INTERPRET_ATTR_NAMESPACE_PREFIX = "expr";
w_y.prototype.ue = function() {
	var a = this.g.rootElement;
	a.innerHTML = "";
	this.kb() == w_x.DISPLAY_MODE_LAYOUT ? a.appendChild(this.Mb("layout")) : a
			.appendChild(this.Mb("main"));
	return a
};
w_y.prototype.Ye = function(a) {
	this.Ma = a
};
w_y.prototype.u = function() {
	return this.g
};
w_y.prototype.X = function(a) {
	return document.getElementById(this.g.instanceId + "_" + a)
};
w_y.prototype.J = function(a) {
	var b = this.X(a);
	if (!b)
		w_a("did not find element for id " + a);
	return b
};
w_y.prototype.o = function() {
	return this.g.data
};
w_y.prototype.Sc = function(a) {
	return this.g.data = a
};
w_y.prototype.Le = function() {
	return this.g.isNew
};
w_y.prototype.We = function(a) {
	return this.g.isNew = a
};
w_y.prototype.Mb = function(a, b) {
	var c = b;
	c || (c = this.o());
	c || (c = {});
	var d = new w_A;
	d.ib("widget", this.Ae());
	d.oe(c);
	var e = this.Jc(a, d, w_A.DEFAULT_DICTIONARY_KEY);
	return this.Ic(e, document)
};
w_y.prototype.Ae = function() {
	var a = {};
	a.type = this.Ma.e();
	a.instanceId = this.g.instanceId;
	a.sectionId = this.g.sectionId;
	a.actionUrl = w_B.Zc;
	var b = w_B.Ff + "&widgetType=" + this.Ma.e() + "&widgetId="
			+ this.g.instanceId + "&action=" + w_B.EDIT_WIDGET_ACTION;
	a.quickEditUrl = b;
	return a
};
w_y.prototype.Jc = function(a, b, c) {
	var d = this.Fe(a);
	w_t.isTrue(d != w_c, "Markup chunk not found for " + a);
	var e = d.varName ? d.varName : "", f = b.o(c);
	w_t.isTrue(f != w_c, "No data found for call: " + c);
	b.ib(e, f);
	var g = this.nb(d.rootNode, b);
	b.Oc(e);
	return g
};
w_y.prototype.nb = function(a, b) {
	w_t.isTrue(a != w_c, "Null node");
	var c = a;
	if (a.attributes) {
		for ( var d = [], e = [], f = 0; f < a.attributes.length; f++) {
			var g = a.attributes.item(f), h = this.Re(g, b);
			if (g != h) {
				e[e.length] = g.nodeName;
				d[d.length] = h
			}
		}
		for (f = 0; f < e.length; f++)
			a.attributes.removeNamedItem(e[f]);
		for (f = 0; f < d.length; f++)
			a.attributes.setNamedItem(d[f])
	}
	if (a.nodeType == 1)
		if (a.prefix == w_y.ACTION_NAMESPACE_PREFIX)
			c = this.Je(a, b);
		else if (a.prefix == w_y.DATA_NAMESPACE_PREFIX)
			c = this.Ie(a, b);
	if (a.hasChildNodes()) {
		for ( var i = a.ownerDocument.createDocumentFragment(); a
				.hasChildNodes();) {
			var j = a.firstChild, k = this.nb(j, b);
			i.appendChild(k);
			j != k && a.removeChild(j)
		}
		c.appendChild(i)
	}
	return c
};
w_y.prototype.Re = function(a, b) {
	if (a.prefix == w_y.INTERPRET_ATTR_NAMESPACE_PREFIX) {
		var c = a.ownerDocument.createAttribute(a.localName || a.baseName), d = this.ke
				.Fc(a.nodeValue, b);
		c.nodeValue = d;
		return c
	}
	return a
};
w_y.prototype.Je = function(a, b) {
	var c = a.localName || a.baseName, d = this.Qc(c, a, b);
	return this.ff(d)
};
w_y.prototype.ff = function(a) {
	var b = a;
	if (!a)
		return document.createDocumentFragment();
	a.nodeType || (b = document.createTextNode(a));
	if (b.nodeType == 3) {
		var c = document.createDocumentFragment();
		c.appendChild(b);
		b = c
	}
	return b
};
w_y.prototype.Jb = function(a, b) {
	var c = this.ob(a);
	return b.o(c[1])
};
w_y.prototype.Ie = function(a, b) {
	w_t.isTrue(a != w_c, "Null element");
	w_t.isTrue(b != w_c, "Null data");
	if (a.prefix != w_y.DATA_NAMESPACE_PREFIX)
		return a;
	var c = this.Jb(a.tagName, b), d = "" + (c == w_c ? "" : c), e = document
			.createElement("DIV");
	e.innerHTML = d;
	var f = this.lb(e);
	return this.Ic(f, a.ownerDocument, w_b)
};
w_y.prototype.ob = function(a) {
	var b = a.split(":", 2);
	b.length == 1 && b.unshift("");
	b[0] = b[0].toLowerCase();
	return b
};
w_y.prototype.Qc = function(a, b, c) {
	var d = "_WidgetBinding_" + a;
	if (this.ke[d])
		return this.ke[d](b, c);
	if (this.Ma[d])
		return this.Ma[d](b, c);
	w_t.isTrue(w_d, "could not find binding " + a);
	return w_c
};
w_y.prototype.Qe = function(a) {
	if (a == w_c)
		return w_c;
	var b;
	if (window.ActiveXObject) {
		b = new ActiveXObject("Microsoft.XMLDOM");
		b.async = "false";
		if (!b.loadXML(a))
			w_a(new Error(b.parseError))
	} else if (window.DOMParser) {
		var c = new DOMParser;
		b = c.parseFromString(a, "text/xml");
		if (b.documentElement.nodeName == "parsererror")
			w_a(new Error(b.documentElement.textContent))
	} else
		w_t.raise("Unable to find XML parser");
	return b.documentElement
};
w_y.prototype.lb = function(a) {
	for ( var b = a.ownerDocument.createDocumentFragment(); a.hasChildNodes();)
		b.appendChild(a.firstChild);
	return b
};
w_y.prototype.Ic = function(a, b, c) {
	w_t.isTrue(a != w_c);
	if (b.importNode)
		if (a.nodeType == 11) {
			for ( var d = b.createDocumentFragment(), e = a.firstChild; e != w_c; e = e.nextSibling)
				d.appendChild(b.importNode(e, w_b));
			return d
		} else
			return b.importNode(a, w_b);
	if (!c) {
		var f = b.createElement("DIV"), g = a.innerHTML || a.xml;
		f.innerHTML = g;
		return this.lb(f)
	}
	var h = function(i) {
		var j;
		if (i.nodeType == 1) {
			if (i.nodeName == "SCRIPT")
				return document.createTextNode("");
			j = b.createElement(i.nodeName);
			i.style && j.setAttribute("style", i.style.cssText);
			i.currentStyle.height
					&& j.setAttribute("height", i.currentStyle.height);
			i.currentStyle.width
					&& j.setAttribute("width", i.currentStyle.width);
			for ( var k = 0; k < i.attributes.length; k++) {
				var l = i.attributes[k];
				l.value && l.value != "null" && l.value != "false"
						&& l.value != "0" && j.setAttribute(l.name, l.value)
			}
		} else if (i.nodeType == 3)
			j = b.createTextNode(i.nodeValue);
		else if (i.nodeType == 11)
			j = b.createDocumentFragment();
		else
			w_t.raise("unexpected node type " + i.nodeType);
		if (i.hasChildNodes())
			for (k = 0; k < i.childNodes.length; k++)
				j.appendChild(h(i.childNodes[k]));
		return j
	};
	return h(a)
};
w_y.prototype.na = function(a, b) {
	var c = this.Ma, d = function(e) {
		return c.ra ? c.ra(e) : w_b
	};
	w_B.na(a, b, this.g.instanceId, this.Ma.e(), d)
};
w_y.prototype.kb = function() {
	return this.g.Ef
};
w_y.prototype.Fe = function(a) {
	if (!a)
		return w_c;
	var b = w_B.ie[a];
	b || (b = this.g.markups[a]);
	if (!b)
		return w_c;
	if (!b.parsedTemplate || !b.parsedTemplate.ownerDocument)
		this.Pe(b);
	b.parsedTemplate || w_t.raise("Parsing failed for " + a);
	b.rootNode = b.parsedTemplate.cloneNode(w_b);
	return b
};
w_y.prototype.Pe = function(a) {
	if (!a)
		return w_c;
	var b = "<?xml version='1.0'?><markuproot xmlns:"
			+ w_y.DATA_NAMESPACE_PREFIX + "='urn:ns1'  xmlns:"
			+ w_y.ACTION_NAMESPACE_PREFIX + "='urn:ns2' xmlns:"
			+ w_y.INTERPRET_ATTR_NAMESPACE_PREFIX
			+ "='urn:ns3'  xmlns='http://www.w3.org/1999/xhtml'>" + a.template
			+ "</markuproot>\n", c = this.Qe(b);
	a.parsedTemplate = this.lb(c);
	return a
};
w_y.ConfigureWidget = function(a, b) {
	b || (b = "config");
	var c = document.forms[b].widgetId.value, d = document.forms[b].widgetType.value, e = w_C
			.ProcessForm(document.forms[b], a);
	e.success && w_B.SaveWidget(e.values, c, d)
};
function w_B() {
}
w_B.Init = function(a, b, c) {
	w_B.hb = {};
	w_B.Ff = a;
	w_B.Zc = b;
	w_B.ji = c;
	w_B.Hd = [];
	if (!w_B.ie)
		w_B.ie = {}
};
w_B.TrapClicks = function(a) {
	var b = w_B.CreateTransparentClickTrappingDiv(a.document);
	document.body.appendChild(b)
};
w_B._SetupPreview = function() {
	w_B.TrapClicks(window)
};
w_B.NEW_WIDGET_WINDOW_NAME = "chooseWidget";
w_B.CHOOSE_WIDGET_ACTION = "chooseWidget";
w_B.EDIT_WIDGET_ACTION = "editWidget";
w_B.GetCallbackUrl = function() {
	return w_B.Zc
};
w_B.SetPageActionUrl = function(a, b) {
	w_B.Zd = a;
	w_B.Ih = b
};
w_B.GetPageActionUrl = function() {
	return w_B.Zd
};
w_B.SetWidgetRefreshUrl = function(a) {
	w_B.di = a
};
w_B.GetWidgetRefreshUrl = function() {
	return w_B.di
};
w_B._SetDataContext = function(a) {
	w_B.Hd = a
};
w_B._SetSystemMarkup = function(a) {
	w_B.ie = a
};
w_B._RegisterWidget = function(a, b, c) {
	var d = new w_y(b);
	c || (c = window[a]);
	var e = new c(d);
	d.Ye(e);
	w_B.hb[b.instanceId] = e;
	w_B.DisplayWidget(e);
	return e
};
w_B._RegisterNewWidget = function(a, b, c) {
	var d = w_B._RegisterWidget(a, b, c), e = d.b();
	e.We(w_b);
	return d
};
w_B.DisplayWidget = function(a, b) {
	var c = a.b();
	if (!(c.kb() == w_x.DISPLAY_MODE_NONE)) {
		if (b || a.i && a.i())
			c.ue();
		c.kb() == w_x.DISPLAY_MODE_FULL && a.k && a.k();
		a.b().qh = w_d
	}
};
w_B.GetWidget = function(a) {
	if (w_B.hb)
		return w_B.hb[a];
	return w_c
};
w_B._PopupPaneFromParams = function(a, b, c, d, e) {
	var f = "";
	if (d)
		f = "&widgetId=" + d;
	var g = w_B.Ff + "&action=" + a + "&sectionId=" + b + "&widgetType=" + c
			+ f;
	if (window.name == e) {
		window.location.replace(g);
		window.focus();
		return window
	}
	var h = window.open(g, e,
			"width=570,height=600,left=75,top=20,resizable=yes,scrollbars=yes");
	h.focus();
	return h
};
w_B._PopupConfig = function(a) {
	var b = a.getAttribute("id"), c = w_B.GetWidget(b);
	if (c) {
		var d = c.b().configWin;
		if (d != w_c && !d.closed) {
			d.focus();
			return w_d
		}
	}
	var e = "config" + b, f = w_B
			._PopupPaneFromParams(w_B.EDIT_WIDGET_ACTION, a.parentNode
					.getAttribute("id"), a.getAttribute("widgetType"), b, e);
	if (c)
		c.b().configWin = f;
	return w_d
};
w_B._PopupToolbox = function(a) {
	w_B._PopupPaneFromParams(w_B.CHOOSE_WIDGET_ACTION, a.parentNode
			.getAttribute("id"), a.getAttribute("widgetType"), a
			.getAttribute("id"), w_B.NEW_WIDGET_WINDOW_NAME);
	return w_d
};
w_B.DeleteWidgetFromPage = function(a, b) {
	w_B.N(b, b.LayoutsMessages.DELETING, w_B.STATUS_MESSAGE_PENDING_CLASS);
	w_B.RunPageAction("delete", {}, a, b)
};
w_y.prototype.Ue = function(a, b) {
	w_B.N(b, b.LayoutsMessages.SAVING, w_B.STATUS_MESSAGE_PENDING_CLASS);
	this.na("configure", a)
};
w_B.SaveNewWidget = function(a, b, c) {
	var d = document.getElementById("sectionId").value;
	a.sectionid = d;
	w_B.N(c, c.LayoutsMessages.SAVING, w_B.STATUS_MESSAGE_PENDING_CLASS);
	w_B.RunPageAction("addnew", a, "", b)
};
w_B.SaveWidget = function(a, b, c) {
	w_m(c != w_c, "no type");
	var d = _WidgetManager._GetWidget(b);
	w_m(d != w_c, "no widget for " + b);
	d.b().Le() ? w_B.SaveNewWidget(a, c, window) : d.a.Ue(a, window)
};
w_B._RunInitialAction = function(a) {
	var b = w_B._GetWidget(a);
	b && b.b().na("initial")
};
w_B.na = function(a, b, c, d, e) {
	w_B.RunAction(w_B.Zc, a, b, c, d, e)
};
w_B.RunPageAction = function(a, b, c, d, e) {
	if (w_B.Zd) {
		b.pageToken = w_B.Ih;
		w_B.RunAction(w_B.Zd, a, b, c, d, e)
	} else
		w_k("RunPageAction error: pageActionUrl_ is undefined.  widgetid: " + c
				+ " action: " + a)
};
w_B.RunAction = function(a, b, c, d, e, f) {
	var g = [ "action", b, "widgetId", d, "widgetType", e, "responseType", "js" ];
	for ( var h in c)
		if (typeof c[h] == "object")
			for ( var i = 0; i < c[h].length; ++i) {
				g[g.length] = h;
				g[g.length] = c[h][i]
			}
		else {
			g[g.length] = h;
			g[g.length] = c[h]
		}
	w_Ga(a, g, new w_Ia(f))
};
w_B.SetConfigWin = function(a, b) {
	if (a) {
		var c = w_B.GetWidget(a);
		if (c)
			c.b().configWin = b
	}
};
w_B.CloseIfNoPendingMessages = function(a, b) {
	w_v == 0 ? window.setTimeout( function() {
		a.close()
	}, b) : window.setTimeout( function() {
		w_B.CloseIfNoPendingMessages(a, b)
	}, 200)
};
w_B._KillPopupDelay = function(a, b) {
	if (a) {
		w_B.CloseIfNoPendingMessages(a, 100);
		w_B.UpdateEditorStatus(a, b)
	}
};
w_B.UpdateEditorStatus = function(a, b) {
	if (a) {
		var c = a.document.getElementById("status-message-inner");
		if (c)
			c = c.innerHTML;
		c && a && a.opener.parent && a.opener.parent.editor
				&& a.opener.parent.editor._SetSaveMessage(c, b)
	}
};
w_B.d = function(a, b, c) {
	var d = w_B.hb[a];
	if (c.errors != w_c) {
		var e = d ? d.b().configWin : w_c;
		e || (e = window);
		w_B.N(e, c.errors, w_B.STATUS_MESSAGE_BAD_CLASS);
		d && d.ua ? d.ua(b, c) : w_B.ua(c, e)
	} else {
		w_m(d != w_c, "no widget for " + a);
		if (b == "initial") {
			d.b().Sc(c);
			w_B.DisplayWidget(d, w_b)
		} else
			d.d(b, c)
	}
};
w_B.ua = function(a, b) {
	var c = a["error-details"];
	for ( var d in c)
		w_C.SetError(d, c[d], b.document)
};
w_y.prototype.l = function(a) {
	w_B.N(this.configWin, a["status-message"], w_B.STATUS_MESSAGE_GOOD_CLASS);
	w_B.FinishPopupWork(this.g.instanceId, "_OnWidgetConfigured", function(b) {
		window.opener._WidgetManager._OnWidgetConfigured(b, a)
	})
};
w_B._OnWidgetConfigured = function(a, b) {
	window.parent && window.parent.editor && b ? w_B
			.OnWidgetConfiguredWithData(a, b) : w_B._RunInitialAction(a)
};
w_B.OnWidgetConfiguredWithData = function(a, b) {
	var c = w_B._GetWidget(a);
	c.b().Sc(b.data);
	w_B.DisplayWidget(c, w_b);
	c.b().configWin = w_c
};
w_B.HandlePageActionResult = function(a, b, c) {
	var d = c["status-message"];
	if (c.errors != w_c) {
		w_B.N(window, c.errors, w_B.STATUS_MESSAGE_BAD_CLASS);
		w_B.ua(c, window)
	} else if (b == "addnew") {
		var e;
		if (w_B.IsOpenerReachable(window)) {
			if (window.opener && window.opener.parent)
				e = window.opener.parent;
			e && e.editor && e.editor._HandleAddNewWidget(c)
		}
		w_B.N(window, d, w_B.STATUS_MESSAGE_GOOD_CLASS);
		if (window.opener == w_c)
			window.location = "/rearrange?blogID=" + c.blogID;
		else
			e && e._WidgetManager ? e._WidgetManager._KillPopupDelay(window)
					: w_B.CloseIfNoPendingMessages(window, 100)
	} else {
		var f = w_B.hb[a];
		w_m(f != w_c);
		if (b == "delete") {
			w_B.N(f.b().configWin, d, w_B.STATUS_MESSAGE_GOOD_CLASS);
			w_B.FinishPopupWork(a, "_OnWidgetDeleted")
		}
	}
};
w_B._OnWidgetDeleted = function(a) {
	var b = w_B.GetWidget(a);
	if (b) {
		if (b.b().kb() == w_x.DISPLAY_MODE_LAYOUT)
			top.editor._HandleDeleteWidget(b.b().g.rootElement);
		else {
			var c = b.b().g.rootElement;
			c.parentNode.removeChild(c)
		}
		delete w_B.hb[a]
	}
};
w_B.FinishPopupWork = function(a, b, c) {
	if (w_B.IsOpenerReachable(window)) {
		var d = window.opener;
		c || (c = d._WidgetManager[b]);
		c(a);
		d._WidgetManager ? d._WidgetManager._KillPopupDelay(window, a) : w_B
				.CloseIfNoPendingMessages(window, 100)
	} else {
		var e = w_B.GetWidgetRefreshUrl() + "?widgetId=" + a;
		e += "&func=" + encodeURIComponent(b);
		window.location.replace(e)
	}
};
w_B.IsOpenerReachable = function(a) {
	var b = w_d;
	try {
		if (a.opener) {
			var c = "X" + a.opener.document.domain;
			if (c && c != "X")
				b = w_b
		}
	} catch (d) {
	}
	return b
};
w_B.STATUS_MESSAGE_GOOD_CLASS = "status-msg status-msg-yellow-on-white";
w_B.STATUS_MESSAGE_PENDING_CLASS = w_B.STATUS_MESSAGE_GOOD_CLASS;
w_B.STATUS_MESSAGE_BAD_CLASS = w_B.STATUS_MESSAGE_GOOD_CLASS;
w_B.N = function(a, b, c) {
	a || (a = self);
	var d = a.document.getElementById("status-message-inner");
	if (d)
		d.innerHTML = b;
	var e = a.document.getElementById("status-message");
	if (e)
		e.className = c
};
w_B.MaybePrependHttp = function(a) {
	if (a && a.length > 0 && a.substring(0, 4) != "http")
		a = "http://" + a;
	return a
};
w_B.GetFirstElementInElementWithClass = function(a, b) {
	if (w_p(a, b))
		return a;
	if (a)
		for ( var c = a.childNodes.length, d = 0; d < c; d++) {
			var e = w_B.GetFirstElementInElementWithClass(a.childNodes.item(d),
					b);
			if (e)
				return e
		}
	return w_c
};
w_B.CreateTransparentClickTrappingDiv = function(a) {
	var b = a.createElement("div"), c = a.body.scrollHeight;
	b.style.position = "absolute";
	b.style.top = "0px";
	b.style.left = "0px";
	b.style.width = "100%";
	b.style.height = c + "px";
	b.style.zIndex = "10";
	b.style.cursor = "default";
	b.onclick = w_B.Lc;
	b.onmousedown = w_B.Lc;
	b.onmouseup = w_B.Lc;
	b.style.background = "white";
	b.style.filter = "alpha(opacity=1)";
	b.style.opacity = ".01";
	b.innerHTML = "&nbsp;";
	return b
};
w_B.Lc = function(a) {
	var b = a;
	if (!b)
		b = window.event;
	if (b) {
		b.cancelBubble = w_b;
		b.stopPropagation && b.stopPropagation()
	}
	return w_d
};
function w_z(a) {
	this.fa = a
}
w_z.prototype._WidgetBinding_include = function(a, b) {
	var c = a.getAttribute("name"), d = a.getAttribute("data");
	return this.fa.Jc(c, b, d)
};
w_z.prototype._WidgetBinding_call = w_z.prototype._WidgetBinding_include;
w_z.prototype._WidgetBinding_loop = function(a, b) {
	var c = a.getAttribute("values"), d = this.fa.ob(c), e = this.fa
			.Jb(d[1], b), f = a.getAttribute("var");
	f || w_t.raise("Invalid var= attribute on b:loop");
	var g = this.fa.lb(a), h = a.ownerDocument.createDocumentFragment();
	if (!e)
		return h;
	for ( var i = 0; i < e.length; i++) {
		var j = e[i], k = g.cloneNode(w_b);
		b.ib(f, j);
		var l = this.fa.nb(k, b);
		b.Oc(f);
		h.appendChild(l)
	}
	return h
};
w_z.prototype._WidgetBinding_if = function(a, b) {
	for ( var c = this.Fc(a.getAttribute("cond"), b), d = a.ownerDocument
			.createDocumentFragment(), e = w_d; a.firstChild != w_c;) {
		var f = a.firstChild;
		if ("else" == this.fa.ob(f.nodeName)[1].toLowerCase())
			e = w_b;
		else if (c && !e || !c && e) {
			var g = this.fa.nb(f, b);
			d.appendChild(g)
		}
		f.parentNode == a && a.removeChild(f)
	}
	return d
};
w_z.prototype.Fc = function(a, b) {
	w_t.isTrue(a != w_c, "null expression");
	var c = this.$e(a, b);
	try {
		var d = eval(c);
		return d
	} catch (e) {
		w_k("expression=[" + a + "] error=" + e + " eval=[" + c + "]")
	}
	return ""
};
w_z.prototype.$e = function(a, b) {
	for ( var c = new RegExp("\\b(?:" + w_y.DATA_NAMESPACE_PREFIX + "|"
			+ w_y.ACTION_NAMESPACE_PREFIX + "):[^ ]*\\b", "gi"), d = "", e = 0, f = c
			.exec(a); f;) {
		var g = f[0];
		if (!this.Ke(a, c.lastIndex)) {
			var h, i = this.fa.ob(g);
			if (i[0] == w_y.ACTION_NAMESPACE_PREFIX)
				h = this.fa.Qc(i[1], w_c, b);
			else if (i[0] == w_y.DATA_NAMESPACE_PREFIX) {
				(h = this.fa.Jb(g, b)) || (h = "");
				h = h + ""
			} else
				w_t.raise("Unrecognized prefix '" + i[0] + "'");
			h = h.replace(/"/g, "&quot;");
			h = '"' + h + '"';
			d += a.substring(e, f.index);
			d += h;
			e = c.lastIndex
		}
		f = c.exec(a)
	}
	d += a.substring(e, a.length);
	return d
};
w_z.prototype.Ke = function(a, b) {
	w_t.isTrue(b <= a.length, "Invalid index: i=" + b + ", l=" + a.length);
	for ( var c = 0, d = 0; d < b; d++)
		if (a.charAt(d) == '"' && (d == 0 || a.charAt(d - 1) != "\\"))
			c++;
	return c % 2 != 0
};
function w_C() {
}
w_C.ERROR_MSG_ACTIVE_CLASS = "errorbox-bad errormsg";
w_C.ERROR_MSG_INACTIVE_CLASS = "errorbox-good";
w_C.ProcessForm = function(a, b) {
	var c = {};
	c.success = w_b;
	c.values = {};
	c.errors = {};
	for ( var d in b) {
		var e = w_C.GetFieldValue(a[d]), f = b[d];
		w_C.ClearError(d);
		if (f) {
			var g = f(e);
			if (g) {
				w_C.SetError(d, g);
				c.success = w_d;
				c.errors[d] = g
			}
		}
		c.values[d] = e
	}
	return c
};
w_C.GetFieldValue = function(a) {
	if (!a)
		return undefined;
	if (a.type == "checkbox") {
		if (a.checked)
			return a.value;
		return undefined
	}
	if (a.type == w_c) {
		for ( var b = [], c = 0; c < a.length; c++)
			if (a[c].checked)
				b[b.length] = a[c].value;
		switch (b.length) {
		case 0:
			return undefined;
		case 1:
			return b[0];
		default:
			return b
		}
	}
	return a.value
};
w_C.Ee = function(a, b) {
	b || (b = document);
	var c = "errormessage_" + a;
	return b.getElementById(c)
};
w_C.ClearError = function(a) {
	var b = w_C.Ee(a);
	if (b) {
		b.innerHTML = "";
		b.className = w_C.ERROR_MSG_INACTIVE_CLASS
	}
};
w_C.SetError = function(a, b, c) {
	var d = w_C.Ee(a, c);
	if (d) {
		d.innerHTML = b;
		d.className = w_C.ERROR_MSG_ACTIVE_CLASS
	}
};
w_C.GetRequiredStringFilter = function() {
	return function(a) {
		a = a.replace(/^\s+/, "").replace(/\s+$/, "");
		if (a.length == 0)
			return LayoutsMessages.FIELD_CANNOT_BE_BLANK;
		return undefined
	}
};
w_C.GetNumberFilter = function(a, b) {
	return function(c) {
		var d = parseInt(c, 10);
		if (isNaN(d))
			return LayoutsMessages.MUST_SPECIFY_A_NUMBER;
		if (d < a)
			return LayoutsMessages.NUMBER_TOO_SMALL + " " + a;
		if (d > b)
			return LayoutsMessages.NUMBER_TOO_LARGE + " " + b;
		return undefined
	}
};
function w_A() {
	this.O = [];
	for ( var a = 0; a < w_B.Hd.length; ++a) {
		var b = w_B.Hd[a];
		this.O[this.O.length] = b
	}
}
w_A.DEFAULT_DICTIONARY_KEY = "";
w_A.MAX_DICTIONARY_DEPTH = 50;
w_A.SEPARATOR_CHAR = ".";
w_A.prototype.ib = function(a, b) {
	this.O.length >= w_A.MAX_DICTIONARY_DEPTH
			&& w_t.raise("Cannot add another dictionary: " + a);
	a.indexOf(w_A.SEPARATOR_CHAR) > -1
			&& w_t.raise("Cannot add dictionary name containing '.': " + a);
	var c = {};
	c.name = a;
	c.data = b;
	this.O[this.O.length] = c
};
w_A.prototype.Oc = function(a) {
	var b = this.O[this.O.length - 1];
	b.name != a
			&& w_t.raise("Dictionary " + a
					+ " is not the last one, and can't be deleted: " + b.name);
	this.O.splice(this.O.length - 1, 1)
};
w_A.prototype.Kb = function(a) {
	if (a == w_c)
		a = w_A.DEFAULT_DICTIONARY_KEY;
	for ( var b = this.O.length - 1; b >= 0; --b)
		if (this.O[b].name == a)
			return this.O[b].data;
	return w_c
};
w_A.prototype.Gc = function() {
	return this.Kb(w_A.DEFAULT_DICTIONARY_KEY)
};
w_A.prototype.oe = function(a) {
	this.ib(w_A.DEFAULT_DICTIONARY_KEY, a)
};
w_A.prototype.o = function(a) {
	var b = this.Kb(a);
	if (b)
		return b;
	var c = a.split(w_A.SEPARATOR_CHAR);
	if (c.length == 1) {
		b = this.Gc();
		return b[a]
	}
	b = this.Kb(c[0]);
	var d = 0;
	if (b)
		d = 1;
	else
		b = this.Gc();
	for ( var e = d; e < c.length; e++) {
		if (b == w_c)
			return w_c;
		b = b[c[e]]
	}
	return b
};
function w_Ja() {
}
w_Ja.prototype.d = function() {
	w_a(new Error("Unimplemented"))
};
var _WidgetManager = w_B;
_WidgetManager.prototype = w_B.prototype;
_WidgetManager._Init = _WidgetManager.Init;
_WidgetManager._SetPageActionUrl = _WidgetManager.SetPageActionUrl;
_WidgetManager._GetPageActionUrl = _WidgetManager.GetPageActionUrl;
_WidgetManager._SetWidgetRefreshUrl = _WidgetManager.SetWidgetRefreshUrl;
_WidgetManager._GetWidgetRefreshUrl = _WidgetManager.GetWidgetRefreshUrl;
_WidgetManager._GetCallbackUrl = _WidgetManager.GetCallbackUrl;
_WidgetManager._DeleteWidgetFromPage = _WidgetManager.DeleteWidgetFromPage;
_WidgetManager._DisplayWidget = _WidgetManager.DisplayWidget;
_WidgetManager._GetWidget = _WidgetManager.GetWidget;
_WidgetManager._HandleControllerResult = _WidgetManager.d;
_WidgetManager._HandlePageActionResult = _WidgetManager.HandlePageActionResult;
_WidgetManager._IsOpenerReachable = _WidgetManager.IsOpenerReachable;
_WidgetManager._SetConfigWin = _WidgetManager.SetConfigWin;
var _WidgetInfo = w_x;
_WidgetInfo.prototype = w_x.prototype;
function w_D(a) {
	this.gi = w_d;
	this.zc = a;
	this.$b = window.document
}
w_D.DISABLED_BUTTON_CLASS = "disabled-button";
w_D.HIDDEN_MESSAGE_CLASS = "status-msg-hidden";
w_D.prototype.Dc = function() {
	this.$b.getElementById(this.zc + "-inner").innerHTML = "&nbsp;";
	w_q(this.$b.getElementById(this.zc), w_D.HIDDEN_MESSAGE_CLASS)
};
w_D.prototype.N = function(a) {
	this.$b.getElementById(this.zc + "-inner").innerHTML = a;
	w_r(this.$b.getElementById(this.zc), w_D.HIDDEN_MESSAGE_CLASS)
};
function w_Ia(a) {
	return function(b) {
		var c = w_Da(b);
		if (c >= 500) {
			if (b.responseText.length)
				document.body.innerHTML = b.responseText;
			else
				alert(LayoutsMessages.SERVER_ERROR);
			return w_d
		}
		return a ? a(b) : w_b
	}
};
function w_E(a) {
	this.a = a
}
w_E.WIDGET_TYPE_NAME = "AdSense";
w_E.prototype.e = function() {
	return w_E.WIDGET_TYPE_NAME
};
w_E.prototype.b = function() {
	return this.a
};
w_E.prototype.d = function(a, b) {
	this.a.l(b)
};
var _AdSenseView = w_E;
function w_F(a) {
	this.a = a;
	this.g = a.u()
}
w_F.WIDGET_TYPE_NAME = "BlogArchive";
w_F.POST_LIST_CLASS = "posts";
w_F.INTERVAL_EXPANDED_VALUE = "expanded";
w_F.INTERVAL_COLLAPSED_VALUE = "collapsed";
w_F.LOADING_MSG = "loading...";
w_F.POST_COUNT_CLASS = "post-count";
w_F.POST_COUNT_LINK_CLASS = "post-count-link";
w_F.MENU_ROOT_ID = "ArchiveMenu";
w_F.TOGGLE_OPEN_CLASS = "toggle-open";
w_F.dh = "&#9660;&nbsp;";
w_F.Jf = "&#9658;&nbsp;";
w_F.prototype.e = function() {
	return w_F.WIDGET_TYPE_NAME
};
w_F.prototype.b = function() {
	return this.a
};
w_F.prototype.i = function() {
	return w_d
};
w_F.prototype.d = function(a, b) {
	if (a == "configure")
		this.a.l(b);
	else if (a == "getTitles")
		this.ef(b);
	else {
		this.widgetInfo.data = b;
		w_B.DisplayWidget(this)
	}
};
w_F.prototype.k = function() {
	var a = {};
	a.select = function(i) {
		return i && w_p(i, "toggle")
	};
	var b = this.a.X("ArchiveList");
	if (b) {
		var c = w_s(this.g.rootElement, a), d;
		if (c.length > 0 && c[0].currentStyle)
			d = c[0].parentNode.currentStyle.color;
		for ( var e = 0; e < c.length; e++) {
			var f = c[e];
			f.onclick = this.bf.bind(this);
			if (d)
				f.style.color = d
		}
		var g = this.a.X(w_F.MENU_ROOT_ID);
		if (g) {
			for (e = 1; e < g.options.length; e++) {
				var h = g.options[e].value;
				if (h == window.location.href
						|| window.location.href.match(h) != w_c) {
					g.selectedIndex = e;
					break
				}
			}
			g.onchange = this.Ge.bind(this)
		}
		if (this.b().o().languageDirection == "rtl")
			w_F.Jf = "&#9668;&nbsp;"
	}
};
w_F.prototype.Ge = function() {
	var a = this.a.X(w_F.MENU_ROOT_ID);
	if (a)
		if (!(a.value == ""))
			window.location.href = a.value
};
w_F.prototype.bf = function(a) {
	a = a || window.event;
	var b = a.currentTarget || a.srcElement;
	if (b && !w_p(b, "toggle"))
		b = b.parentNode;
	var c = w_B.GetFirstElementInElementWithClass(b, "zippy"), d = b.parentNode;
	if (w_p(d, w_F.INTERVAL_EXPANDED_VALUE)) {
		w_r(d, w_F.INTERVAL_EXPANDED_VALUE);
		w_q(d, w_F.INTERVAL_COLLAPSED_VALUE);
		c.innerHTML = w_F.Jf;
		w_r(c, w_F.TOGGLE_OPEN_CLASS);
		return w_d
	} else {
		w_r(d, w_F.INTERVAL_COLLAPSED_VALUE);
		w_q(d, w_F.INTERVAL_EXPANDED_VALUE);
		c.innerHTML = w_F.dh;
		w_q(c, w_F.TOGGLE_OPEN_CLASS)
	}
	if (this.Ne(d)) {
		var e = this.Hc(d);
		if (!e) {
			e = document.createElement("UL");
			d.appendChild(e);
			w_q(e, w_F.POST_LIST_CLASS)
		}
		e.appendChild(document.createTextNode(w_F.LOADING_MSG));
		this.a.na("getTitles", {
			path : this.Ce(d)
		})
	}
	return w_d
};
w_F.prototype.Hc = function(a) {
	return w_B.GetFirstElementInElementWithClass(a, w_F.POST_LIST_CLASS)
};
w_F.prototype.Ce = function(a) {
	var b = w_B.GetFirstElementInElementWithClass(a, w_F.POST_COUNT_LINK_CLASS);
	return b.href
};
w_F.prototype.De = function(a) {
	var b = w_B.GetFirstElementInElementWithClass(a, w_F.POST_COUNT_CLASS);
	return parseInt(b.innerHTML.match(/\d+/), 10)
};
w_F.prototype.ef = function(a) {
	var b = a.path, c = this.Hc(this.Be(b));
	c.innerHTML = "";
	for ( var d = 0; d < a.posts.length; d++) {
		var e = a.posts[d], f = document.createElement("li");
		f.innerHTML = "<a href=" + e.url + ">" + e.title + "</a>";
		c.appendChild(f)
	}
};
w_F.prototype.Be = function(a) {
	var b = this.g.rootElement.getElementsByTagName("A");
	for ( var c in b) {
		var d = b[c];
		if (d.href == a)
			return d.parentNode
	}
};
w_F.prototype.Ne = function(a) {
	var b = a.getElementsByTagName("UL");
	if (!(b.length > 0 && !w_p(b[0], "posts"))) {
		var c = this.De(a), d = a.getElementsByTagName("LI"), e = d.length;
		return e < c
	}
};
var _BlogArchiveView = w_F;
function w_G(a) {
	this.a = a;
	this.gb = a.u();
	if (this.gb.data)
		this.yg = this.gb.data.showBacklinks
}
w_G.BACKLINKS_ROOT = "backlinks-container";
w_G.BACKLINKS_CHUNK = "backlinks";
w_G.BACKLINK_ITEM_ROOT_CLASS = "backlink-control";
w_G.BACKLINK_EXPANDED_CLASS = "expanded-backlink";
w_G.BACKLINK_COLLAPSED_CLASS = "collapsed-backlink";
w_G.BACKLINK_ZIPPY_CLASS = "backlink-toggle-zippy";
w_G.WIDGET_TYPE_NAME = "Blog";
w_G.prototype.e = function() {
	return w_G.WIDGET_TYPE_NAME
};
w_G.prototype.b = function() {
	return this.a
};
w_G.prototype.d = function(a, b) {
	if (a == "initial") {
		this.gb.data = b;
		w_B.DisplayWidget(this, w_b)
	} else if (a == "nextposts")
		this.we(b);
	else if (a == "configure")
		this.a.l(b);
	else
		a == "backlinks" && this.df(b)
};
w_G.prototype.we = function(a) {
	var b = a.renderedData, c = this.gb.rootElement;
	if (b && c) {
		c.innerHTML = b;
		window.scroll(0, 0);
		this.k()
	}
};
w_G.prototype.df = function(a) {
	this.yg = w_d;
	var b = this.a.Mb(w_G.BACKLINKS_CHUNK, a), c = this.a.X(w_G.BACKLINKS_ROOT);
	if (c) {
		c.innerHTML = "";
		c.appendChild(b)
	}
	for ( var d = w_s(this.gb.rootElement, w_G.of), e = 0; e < d.length; e++) {
		var f = d[e];
		f.onclick = this.cf.bind(this)
	}
	var g = this.a.X("backlinks-create-link");
	if (g != w_c)
		g.onclick = this.qe.bind(this, g.href)
};
w_G.of = {};
w_G.of.select = function(a) {
	return a && w_p(a, w_G.BACKLINK_ZIPPY_CLASS)
};
w_G.prototype.cf = function(a) {
	a = a || window.event;
	this.xe(a.srcElement || a.target)
};
w_G.prototype.xe = function(a) {
	for ( var b = a.parentNode; b && !w_p(b, w_G.BACKLINK_ITEM_ROOT_CLASS);)
		b = b.parentNode;
	if (b)
		if (w_p(b, w_G.BACKLINK_EXPANDED_CLASS)) {
			w_r(b, w_G.BACKLINK_EXPANDED_CLASS);
			w_q(b, w_G.BACKLINK_COLLAPSED_CLASS)
		} else {
			w_q(b, w_G.BACKLINK_EXPANDED_CLASS);
			w_r(b, w_G.BACKLINK_COLLAPSED_CLASS)
		}
};
w_G.prototype.k = function() {
	var a = this.a.X("blog-pager-newer-link");
	if (a && this.Kc(a))
		a.onclick = this.Mc.bind(this);
	var b = this.a.X("blog-pager-older-link");
	if (b && this.Kc(b))
		b.onclick = this.Mc.bind(this);
	this.yg && this.a.na("backlinks", {
		postID : this.gb.data.postId
	})
};
w_G.prototype.Kc = function(a) {
	var b = a.href;
	return b.indexOf("/search?") > -1
};
w_G.prototype.Mc = function(a) {
	a = a || window.event;
	var b = a.target || a.srcElement;
	this.a.na("nextposts", {
		path : b.href
	});
	return w_d
};
w_G.prototype.qe = function(a) {
	var b = "";
	if (document.selection)
		b = document.selection.createRange().text;
	else if (window.getSelection)
		b = window.getSelection();
	else if (document.getSelection)
		b = document.getSelection();
	window
			.open(a + "?t=" + encodeURIComponent(b) + "&u="
					+ encodeURIComponent(window.location.href) + "&n="
					+ encodeURIComponent(document.title), "bloggerForm",
					"scrollbars=no,width=475,height=300,top=175,left=75,status=yes,resizable=yes");
	return w_d
};
var _BlogView = w_G;
var w_ = w_ || {};
w_.global = this;
w_.DEBUG = w_b;
w_.LOCALE = "en_US";
w_.ac = w_c;
w_.provide = function(a) {
	w_.Kf(a)
};
w_.Kf = function(a, b, c) {
	var d = a.split("."), e = c || w_.global;
	!(d[0] in e) && e.execScript && e.execScript("var " + d[0]);
	for ( var f; d.length && (f = d.shift());)
		if (!d.length && w_.isDef(b))
			e[f] = b;
		else
			e = e[f] ? e[f] : (e[f] = {})
};
w_.getObjectByName = function(a, b) {
	for ( var c = a.split("."), d = b || w_.global, e; e = c.shift();)
		if (d[e])
			d = d[e];
		else
			return w_c;
	return d
};
w_.globalize = function(a, b) {
	var c = b || w_.global;
	for ( var d in a)
		c[d] = a[d]
};
w_.addDependency = function() {
};
w_.require = function() {
};
w_.useStrictRequires = w_d;
w_.basePath = "";
w_.nullFunction = function() {
};
w_.identityFunction = function() {
	return arguments[0]
};
w_.abstractMethod = function() {
	w_a(Error("unimplemented abstract method"))
};
w_.addSingletonGetter = function(a) {
	a.getInstance = function() {
		return a.Ah || (a.Ah = new a)
	}
};
w_.typeOf = function(a) {
	var b = typeof a;
	if (b == "object")
		if (a) {
			if (a instanceof Array || !(a instanceof Object)
					&& Object.prototype.toString.call(a) == "[object Array]"
					|| typeof a.length == "number"
					&& typeof a.splice != "undefined"
					&& typeof a.propertyIsEnumerable != "undefined"
					&& !a.propertyIsEnumerable("splice"))
				return "array";
			if (!(a instanceof Object)
					&& (Object.prototype.toString.call(a) == "[object Function]" || typeof a.call != "undefined"
							&& typeof a.propertyIsEnumerable != "undefined"
							&& !a.propertyIsEnumerable("call")))
				return "function"
		} else
			return "null";
	else if (b == "function" && typeof a.call == "undefined")
		return "object";
	return b
};
w_.Jh = function(a, b) {
	if (b in a)
		for ( var c in a)
			if (c == b && Object.prototype.hasOwnProperty.call(a, b))
				return w_b;
	return w_d
};
w_.ki = function(a, b) {
	return a instanceof Object ? Object.prototype.propertyIsEnumerable.call(a,
			b) : w_.Jh(a, b)
};
w_.isDef = function(a) {
	return a !== undefined
};
w_.isNull = function(a) {
	return a === w_c
};
w_.isDefAndNotNull = function(a) {
	return a != w_c
};
w_.isArray = function(a) {
	return w_.typeOf(a) == "array"
};
w_.isArrayLike = function(a) {
	var b = w_.typeOf(a);
	return b == "array" || b == "object" && typeof a.length == "number"
};
w_.isDateLike = function(a) {
	return w_.isObject(a) && typeof a.getFullYear == "function"
};
w_.isString = function(a) {
	return typeof a == "string"
};
w_.isBoolean = function(a) {
	return typeof a == "boolean"
};
w_.isNumber = function(a) {
	return typeof a == "number"
};
w_.isFunction = function(a) {
	return w_.typeOf(a) == "function"
};
w_.isObject = function(a) {
	var b = w_.typeOf(a);
	return b == "object" || b == "array" || b == "function"
};
w_.getHashCode = function(a) {
	if (a.hasOwnProperty && a.hasOwnProperty(w_.ta))
		return a[w_.ta];
	a[w_.ta] || (a[w_.ta] = ++w_.xh);
	return a[w_.ta]
};
w_.removeHashCode = function(a) {
	"removeAttribute" in a && a.removeAttribute(w_.ta);
	try {
		delete a[w_.ta]
	} catch (b) {
	}
};
w_.ta = "closure_hashCode_"
		+ Math.floor(Math.random() * 2147483648).toString(36);
w_.xh = 0;
w_.cloneObject = function(a) {
	var b = w_.typeOf(a);
	if (b == "object" || b == "array") {
		if (a.clone)
			return a.clone.call(a);
		var c = b == "array" ? [] : {};
		for ( var d in a)
			c[d] = w_.cloneObject(a[d]);
		return c
	}
	return a
};
w_.bind = function(a, b) {
	var c = a.Yc;
	if (arguments.length > 2) {
		var d = Array.prototype.slice.call(arguments, 2);
		c && d.unshift.apply(d, c);
		c = d
	}
	b = a.Tb || b;
	a = a.Sb || a;
	var e, f = b || w_.global;
	e = c ? function() {
		var g = Array.prototype.slice.call(arguments);
		g.unshift.apply(g, c);
		return a.apply(f, g)
	} : function() {
		return a.apply(f, arguments)
	};
	e.Yc = c;
	e.Tb = b;
	e.Sb = a;
	return e
};
w_.partial = function(a) {
	var b = Array.prototype.slice.call(arguments, 1);
	b.unshift(a, w_c);
	return w_.bind.apply(w_c, b)
};
w_.mixin = function(a, b) {
	for ( var c in b)
		a[c] = b[c]
};
w_.now = Date.now || function() {
	return (new Date).getTime()
};
w_.globalEval = function(a) {
	if (w_.global.execScript)
		w_.global.execScript(a, "JavaScript");
	else if (w_.global.eval) {
		if (w_.ac == w_c) {
			w_.global.eval("var _et_ = 1;");
			if (typeof w_.global._et_ != "undefined") {
				delete w_.global._et_;
				w_.ac = w_b
			} else
				w_.ac = w_d
		}
		if (w_.ac)
			w_.global.eval(a);
		else {
			var b = w_.global.document, c = b.createElement("script");
			c.type = "text/javascript";
			c.defer = w_d;
			c.appendChild(b.createTextNode(a));
			b.body.appendChild(c);
			b.body.removeChild(c)
		}
	} else
		w_a(Error("goog.globalEval not available"))
};
w_.declareType = function() {
};
w_.typedef = w_b;
w_.getCssName = function(a, b) {
	var c = a + (b ? "-" + b : "");
	return w_.ed && c in w_.ed ? w_.ed[c] : c
};
w_.setCssNameMapping = function(a) {
	w_.ed = a
};
w_.getMsg = function(a, b) {
	var c = b || {};
	for ( var d in c)
		a = a.replace(new RegExp("\\{\\$" + d + "\\}", "gi"), c[d]);
	return a
};
w_.exportSymbol = function(a, b, c) {
	w_.Kf(a, b, c)
};
w_.exportProperty = function(a, b, c) {
	a[b] = c
};
w_.inherits = function(a, b) {
	function c() {
	}
	c.prototype = b.prototype;
	a.Ac = b.prototype;
	a.prototype = new c;
	a.prototype.constructor = a
};
w_.MODIFY_FUNCTION_PROTOTYPES = w_b;
if (w_.MODIFY_FUNCTION_PROTOTYPES) {
	Function.prototype.bind = function(a) {
		if (arguments.length > 1) {
			var b = Array.prototype.slice.call(arguments, 1);
			b.unshift(this, a);
			return w_.bind.apply(w_c, b)
		} else
			return w_.bind(this, a)
	};
	Function.prototype.partial = function() {
		var a = Array.prototype.slice.call(arguments);
		a.unshift(this, w_c);
		return w_.bind.apply(w_c, a)
	};
	Function.prototype.inherits = function(a) {
		w_.inherits(this, a)
	};
	Function.prototype.mixin = function(a) {
		w_.mixin(this.prototype, a)
	}
};
w_.string = {};
w_.string.Unicode = {
	NBSP : "\u00a0"
};
w_.string.ge = function(a, b) {
	return a.indexOf(b) == 0
};
w_.string.Gf = function(a, b) {
	var c = a.length - b.length;
	return c >= 0 && a.lastIndexOf(b, c) == c
};
w_.string.caseInsensitiveStartsWith = function(a, b) {
	return w_.string.caseInsensitiveCompare(b, a.substr(0, b.length)) == 0
};
w_.string.caseInsensitiveEndsWith = function(a, b) {
	return w_.string.caseInsensitiveCompare(b, a.substr(a.length - b.length,
			b.length)) == 0
};
w_.string.subs = function(a) {
	for ( var b = 1; b < arguments.length; b++) {
		var c = String(arguments[b]).replace(/\$/g, "$$$$");
		a = a.replace(/\%s/, c)
	}
	return a
};
w_.string.collapseWhitespace = function(a) {
	return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
};
w_.string.z = function(a) {
	return /^[\s\xa0]*$/.test(a)
};
w_.string.isEmptySafe = function(a) {
	return w_.string.z(w_.string.makeSafe(a))
};
w_.string.isBreakingWhitespace = function(a) {
	return !/[^\t\n\r ]/.test(a)
};
w_.string.isAlpha = function(a) {
	return !/[^a-zA-Z]/.test(a)
};
w_.string.isNumeric = function(a) {
	return !/[^0-9]/.test(a)
};
w_.string.isAlphaNumeric = function(a) {
	return !/[^a-zA-Z0-9]/.test(a)
};
w_.string.isSpace = function(a) {
	return a == " "
};
w_.string.isUnicodeChar = function(a) {
	return a.length == 1 && a >= " " && a <= "~" || a >= "\u0080"
			&& a <= "\ufffd"
};
w_.string.stripNewlines = function(a) {
	return a.replace(/(\r\n|\r|\n)+/g, " ")
};
w_.string.canonicalizeNewlines = function(a) {
	return a.replace(/(\r\n|\r|\n)/g, "\n")
};
w_.string.normalizeWhitespace = function(a) {
	return a.replace(/\xa0|\s/g, " ")
};
w_.string.normalizeSpaces = function(a) {
	return a.replace(/\xa0|[ \t]+/g, " ")
};
w_.string.trim = function(a) {
	return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
w_.string.trimLeft = function(a) {
	return a.replace(/^[\s\xa0]+/, "")
};
w_.string.trimRight = function(a) {
	return a.replace(/[\s\xa0]+$/, "")
};
w_.string.caseInsensitiveCompare = function(a, b) {
	var c = String(a).toLowerCase(), d = String(b).toLowerCase();
	return c < d ? -1 : c == d ? 0 : 1
};
w_.string.zg = /(\.\d+)|(\d+)|(\D+)/g;
w_.string.numerateCompare = function(a, b) {
	if (a == b)
		return 0;
	if (!a)
		return -1;
	if (!b)
		return 1;
	for ( var c = a.toLowerCase().match(w_.string.zg), d = b.toLowerCase()
			.match(w_.string.zg), e = Math.min(c.length, d.length), f = 0; f < e; f++) {
		var g = c[f], h = d[f];
		if (g != h) {
			var i = parseInt(g, 10);
			if (!isNaN(i)) {
				var j = parseInt(h, 10);
				if (!isNaN(j) && i - j)
					return i - j
			}
			return g < h ? -1 : 1
		}
	}
	if (c.length != d.length)
		return c.length - d.length;
	return a < b ? -1 : 1
};
w_.string.uh = /^[a-zA-Z0-9\-_.!~*'()]*$/;
w_.string.urlEncode = function(a) {
	a = String(a);
	if (!w_.string.uh.test(a))
		return encodeURIComponent(a);
	return a
};
w_.string.urlDecode = function(a) {
	return decodeURIComponent(a.replace(/\+/g, " "))
};
w_.string.newLineToBr = function(a, b) {
	return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
};
w_.string.htmlEscape = function(a, b) {
	if (b)
		return a.replace(w_.string.kf, "&amp;").replace(w_.string.ug, "&lt;")
				.replace(w_.string.ag, "&gt;").replace(w_.string.Dg, "&quot;");
	else {
		if (!w_.string.ah.test(a))
			return a;
		if (a.indexOf("&") != -1)
			a = a.replace(w_.string.kf, "&amp;");
		if (a.indexOf("<") != -1)
			a = a.replace(w_.string.ug, "&lt;");
		if (a.indexOf(">") != -1)
			a = a.replace(w_.string.ag, "&gt;");
		if (a.indexOf('"') != -1)
			a = a.replace(w_.string.Dg, "&quot;");
		return a
	}
};
w_.string.kf = /&/g;
w_.string.ug = /</g;
w_.string.ag = />/g;
w_.string.Dg = /\"/g;
w_.string.ah = /[&<>\"]/;
w_.string.unescapeEntities = function(a) {
	if (w_.string.contains(a, "&"))
		return "document" in w_.global && !w_.string.contains(a, "<") ? w_.string
				.$h(a)
				: w_.string.ai(a);
	return a
};
w_.string.$h = function(a) {
	var b = w_.global.document.createElement("a");
	b.innerHTML = a;
	b[w_.string.Me] && b[w_.string.Me]();
	a = b.firstChild.nodeValue;
	b.innerHTML = "";
	return a
};
w_.string.ai = function(a) {
	return a.replace(/&([^;]+);/g, function(b, c) {
		switch (c) {
		case "amp":
			return "&";
		case "lt":
			return "<";
		case "gt":
			return ">";
		case "quot":
			return '"';
		default:
			if (c.charAt(0) == "#") {
				var d = Number("0" + c.substr(1));
				if (!isNaN(d))
					return String.fromCharCode(d)
			}
			return b
		}
	})
};
w_.string.Me = "normalize";
w_.string.whitespaceEscape = function(a, b) {
	return w_.string.newLineToBr(a.replace(/  /g, " &#160;"), b)
};
w_.string.stripQuotes = function(a, b) {
	for ( var c = b.length, d = 0; d < c; d++) {
		var e = c == 1 ? b : b.charAt(d);
		if (a.charAt(0) == e && a.charAt(a.length - 1) == e)
			return a.substring(1, a.length - 1)
	}
	return a
};
w_.string.truncate = function(a, b, c) {
	if (c)
		a = w_.string.unescapeEntities(a);
	if (a.length > b)
		a = a.substring(0, b - 3) + "...";
	if (c)
		a = w_.string.htmlEscape(a);
	return a
};
w_.string.truncateMiddle = function(a, b, c) {
	if (c)
		a = w_.string.unescapeEntities(a);
	if (a.length > b) {
		var d = Math.floor(b / 2), e = a.length - d;
		d += b % 2;
		a = a.substring(0, d) + "..." + a.substring(e)
	}
	if (c)
		a = w_.string.htmlEscape(a);
	return a
};
w_.string.Td = {
	"\u0008" : "\\b",
	"\u000c" : "\\f",
	"\n" : "\\n",
	"\r" : "\\r",
	"\t" : "\\t",
	"\u000b" : "\\x0B",
	'"' : '\\"',
	"'" : "\\'",
	"\\" : "\\\\"
};
w_.string.quote = function(a) {
	a = String(a);
	if (a.quote)
		return a.quote();
	else {
		for ( var b = [ '"' ], c = 0; c < a.length; c++)
			b[c + 1] = w_.string.escapeChar(a.charAt(c));
		b.push('"');
		return b.join("")
	}
};
w_.string.escapeChar = function(a) {
	if (a in w_.string.Td)
		return w_.string.Td[a];
	var b = a, c = a.charCodeAt(0);
	if (c > 31 && c < 127)
		b = a;
	else {
		if (c < 256) {
			b = "\\x";
			if (c < 16 || c > 256)
				b += "0"
		} else {
			b = "\\u";
			if (c < 4096)
				b += "0"
		}
		b += c.toString(16).toUpperCase()
	}
	return w_.string.Td[a] = b
};
w_.string.toMap = function(a) {
	for ( var b = {}, c = 0; c < a.length; c++)
		b[a.charAt(c)] = w_b;
	return b
};
w_.string.contains = function(a, b) {
	return a.indexOf(b) != -1
};
w_.string.removeAt = function(a, b, c) {
	var d = a;
	if (b >= 0 && b < a.length && c > 0)
		d = a.substr(0, b) + a.substr(b + c, a.length - b - c);
	return d
};
w_.string.remove = function(a, b) {
	var c = new RegExp(w_.string.regExpEscape(b), "");
	return a.replace(c, "")
};
w_.string.removeAll = function(a, b) {
	var c = new RegExp(w_.string.regExpEscape(b), "g");
	return a.replace(c, "")
};
w_.string.regExpEscape = function(a) {
	return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(
			/\x08/g, "\\x08")
};
w_.string.repeat = function(a, b) {
	return (new Array(b + 1)).join(a)
};
w_.string.padNumber = function(a, b, c) {
	var d = w_.isDef(c) ? a.toFixed(c) : String(a), e = d.indexOf(".");
	if (e == -1)
		e = d.length;
	return w_.string.repeat("0", Math.max(0, b - e)) + d
};
w_.string.makeSafe = function(a) {
	return a == w_c ? "" : String(a)
};
w_.string.buildString = function() {
	return Array.prototype.join.call(arguments, "")
};
w_.string.getRandomString = function() {
	return Math.floor(Math.random() * 2147483648).toString(36)
			+ (Math.floor(Math.random() * 2147483648) ^ (new Date).getTime())
					.toString(36)
};
w_.string.compareVersions = function(a, b) {
	for ( var c = 0, d = w_.string.trim(String(a)).split("."), e = w_.string
			.trim(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; c == 0
			&& g < f; g++) {
		var h = d[g] || "", i = e[g] || "", j = new RegExp("(\\d*)(\\D*)", "g"), k = new RegExp(
				"(\\d*)(\\D*)", "g");
		do {
			var l = j.exec(h) || [ "", "", "" ], m = k.exec(i)
					|| [ "", "", "" ];
			if (l[0].length == 0 && m[0].length == 0)
				break;
			var n = l[1].length == 0 ? 0 : parseInt(l[1], 10), o = m[1].length == 0 ? 0
					: parseInt(m[1], 10);
			c = w_.string.bd(n, o)
					|| w_.string.bd(l[2].length == 0, m[2].length == 0)
					|| w_.string.bd(l[2], m[2])
		} while (c == 0)
	}
	return c
};
w_.string.bd = function(a, b) {
	if (a < b)
		return -1;
	else if (a > b)
		return 1;
	return 0
};
w_.string.Ug = 4294967296;
w_.string.hashCode = function(a) {
	for ( var b = 0, c = 0; c < a.length; ++c) {
		b = 31 * b + a.charCodeAt(c);
		b %= w_.string.Ug
	}
	return b
};
w_.string.ci = w_.now();
w_.string.createUniqueString = function() {
	return "goog_" + w_.string.ci++
};
w_.string.toNumber = function(a) {
	var b = Number(a);
	if (b == 0 && w_.string.z(a))
		return NaN;
	return b
};
w_.date = {};
w_.date.weekDay = {
	MON : 0,
	TUE : 1,
	WED : 2,
	THU : 3,
	FRI : 4,
	SAT : 5,
	SUN : 6
};
w_.date.month = {
	JAN : 0,
	FEB : 1,
	MAR : 2,
	APR : 3,
	MAY : 4,
	JUN : 5,
	JUL : 6,
	AUG : 7,
	SEP : 8,
	OCT : 9,
	NOV : 10,
	DEC : 11
};
w_.date.formatMonthAndYear = function(a, b) {
	var c = a + (" " + b);
	return c
};
w_.date.Th = /^([0-9]{4})((-?([0-9]{2})(-?([0-9]{2}))?)|(-?([0-9]{3}))|(-?W([0-9]{2})(-?([1-7]))?))?$/;
w_.date.Vh = /^([0-9]{2})(:?([0-9]{2})(:?([0-9]{2})(\.([0-9]+))?)?)?$/;
w_.date.Wh = /Z|(([-+])([0-9]{2})(:?([0-9]{2}))?)$/;
w_.date.isLeapYear = function(a) {
	return a % 4 == 0 && (a % 100 != 0 || a % 400 == 0)
};
w_.date.isLongIsoYear = function(a) {
	var b = 5 * a + 12 - 4 * (Math.floor(a / 100) - Math.floor(a / 400));
	b += Math.floor((a - 100) / 400) - Math.floor((a - 102) / 400);
	b += Math.floor((a - 200) / 400) - Math.floor((a - 199) / 400);
	return b % 28 < 5
};
w_.date.ic = function(a, b) {
	switch (b) {
	case w_.date.month.FEB:
		return w_.date.isLeapYear(a) ? 29 : 28;
	case w_.date.month.JUN:
	case w_.date.month.SEP:
	case w_.date.month.NOV:
	case w_.date.month.APR:
		return 30
	}
	return 31
};
w_.date.isSameDay = function(a, b) {
	var c = b || new Date(w_.now());
	return a.getDate() == c.getDate() && w_.date.isSameMonth(a, c)
};
w_.date.isSameMonth = function(a, b) {
	var c = b || new Date(w_.now());
	return a.getMonth() == c.getMonth() && w_.date.isSameYear(a, c)
};
w_.date.isSameYear = function(a, b) {
	var c = b || new Date(w_.now());
	return a.getFullYear() == c.getFullYear()
};
w_.date.Ed = function(a, b, c, d, e) {
	var f = new Date(a, b, c), g = d || w_.date.weekDay.THU, h = e
			|| w_.date.weekDay.MON, i = (f.getDay() + 6) % 7, j = (i - h + 7) % 7, k = (g
			- h + 7) % 7, l = f.valueOf() + (k - j) * 86400000, m = (new Date(
			(new Date(l)).getFullYear(), 0, 1)).valueOf();
	return Math.floor(Math.round((l - m) / 86400000) / 7) + 1
};
w_.date.fromIsoString = function(a) {
	var b = w_.date.setIso8601DateTime(new w_.date.DateTime(2000), a);
	return b
};
w_.date.setIso8601DateTime = function(a, b) {
	b = w_.string.trim(b);
	var c = b.indexOf("T") == -1 ? " " : "T", d = b.split(c);
	a = w_.date.Rh(a, d[0]);
	if (d.length == 2)
		a = w_.date.Sh(a, d[1]);
	return a
};
w_.date.Rh = function(a, b) {
	if (!a)
		return w_c;
	var c = b.match(w_.date.Th);
	if (!c)
		return w_c;
	var d = c[1], e = c[4], f = c[6], g = c[8], h = c[10], i = c[12] ? c[12]
			: 1;
	a.setFullYear(d);
	if (g) {
		a.setDate(1);
		a.setMonth(0);
		var j = g - 1;
		a.add(new w_.date.Interval(w_.date.Interval.DAYS, j))
	} else if (h)
		w_.date.Qh(a, h, i);
	else {
		if (e) {
			a.setDate(1);
			a.setMonth(e - 1)
		}
		f && a.setDate(f)
	}
	return a
};
w_.date.Qh = function(a, b, c) {
	a.setMonth(0);
	a.setDate(1);
	var d = a.getDay(), e = d || 7;
	if (e <= 4)
		var f = 1 - e;
	else
		f = 8 - e;
	var g = Number(c) + 7 * (Number(b) - 1), h = f + g - 1, i = new w_.date.Interval(
			w_.date.Interval.DAYS, h);
	a.add(i)
};
w_.date.Sh = function(a, b) {
	if (!a)
		return w_c;
	var c = b.match(w_.date.Wh), d = 0;
	if (c) {
		if (c[0] != "Z") {
			d = c[3] * 60 + Number(c[5]);
			d *= c[2] == "-" ? 1 : -1
		}
		d -= a.getTimezoneOffset();
		b = b.substr(0, b.length - c[0].length)
	}
	c = b.match(w_.date.Vh);
	if (!c)
		return w_c;
	var e = c[1], f = c[3] || 0, g = c[5] || 0, h = c[7] ? ("0." + c[7]) * 1000
			: 0;
	a.setHours(e);
	a.setMinutes(f);
	a.setSeconds(g);
	a.setMilliseconds(h);
	d != 0 && a.setTime(a.getTime() + d * 60000);
	return a
};
w_.date.Interval = function(a, b, c, d, e, f) {
	if (w_.isString(a)) {
		var g = a, h = b;
		this.years = g == w_.date.Interval.YEARS ? h : 0;
		this.months = g == w_.date.Interval.MONTHS ? h : 0;
		this.days = g == w_.date.Interval.DAYS ? h : 0;
		this.hours = g == w_.date.Interval.HOURS ? h : 0;
		this.minutes = g == w_.date.Interval.MINUTES ? h : 0;
		this.seconds = g == w_.date.Interval.SECONDS ? h : 0
	} else {
		this.years = a || 0;
		this.months = b || 0;
		this.days = c || 0;
		this.hours = d || 0;
		this.minutes = e || 0;
		this.seconds = f || 0
	}
};
w_.date.Interval.fromIsoString = function(a) {
	var b = a
			.match(/^(-)?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/);
	if (!b)
		return w_c;
	var c = !(b[6] || b[7] || b[8]), d = c && !(b[2] || b[3] || b[4]);
	if (d || c && b[5])
		return w_c;
	var e = b[1], f = parseInt(b[2], 10) || 0, g = parseInt(b[3], 10) || 0, h = parseInt(
			b[4], 10) || 0, i = parseInt(b[6], 10) || 0, j = parseInt(b[7], 10) || 0, k = parseFloat(b[8]) || 0;
	return e ? new w_.date.Interval(-f, -g, -h, -i, -j, -k)
			: new w_.date.Interval(f, g, h, i, j, k)
};
w_.date.Interval.prototype.ma = function(a) {
	var b = Math.min(this.years, this.months, this.days, this.hours,
			this.minutes, this.seconds), c = Math.max(this.years, this.months,
			this.days, this.hours, this.minutes, this.seconds);
	if (b < 0 && c > 0)
		return w_c;
	if (!a && b == 0 && c == 0)
		return "PT0S";
	var d = [];
	b < 0 && d.push("-");
	d.push("P");
	if (this.years || a)
		d.push(Math.abs(this.years) + "Y");
	if (this.months || a)
		d.push(Math.abs(this.months) + "M");
	if (this.days || a)
		d.push(Math.abs(this.days) + "D");
	if (this.hours || this.minutes || this.seconds || a) {
		d.push("T");
		if (this.hours || a)
			d.push(Math.abs(this.hours) + "H");
		if (this.minutes || a)
			d.push(Math.abs(this.minutes) + "M");
		if (this.seconds || a)
			d.push(Math.abs(this.seconds) + "S")
	}
	return d.join("")
};
w_.date.Interval.prototype.equals = function(a) {
	return a.years == this.years && a.months == this.months
			&& a.days == this.days && a.hours == this.hours
			&& a.minutes == this.minutes && a.seconds == this.seconds
};
w_.date.Interval.prototype.clone = function() {
	return new w_.date.Interval(this.years, this.months, this.days, this.hours,
			this.minutes, this.seconds)
};
w_.date.Interval.YEARS = "y";
w_.date.Interval.MONTHS = "m";
w_.date.Interval.DAYS = "d";
w_.date.Interval.HOURS = "h";
w_.date.Interval.MINUTES = "n";
w_.date.Interval.SECONDS = "s";
w_.date.Interval.prototype.add = function(a) {
	this.years += a.years;
	this.months += a.months;
	this.days += a.days;
	this.hours += a.hours;
	this.minutes += a.minutes;
	this.seconds += a.seconds
};
w_.date.Date = function(a, b, c) {
	if (!this.c)
		if (w_.isNumber(a)) {
			this.c = new Date(a, b || 0, c || 1);
			this.uc(c || 1)
		} else if (w_.isObject(a)) {
			this.c = new Date(a.getFullYear(), a.getMonth(), a.getDate());
			this.uc(a.getDate())
		} else {
			this.c = new Date;
			this.c.setHours(0);
			this.c.setMinutes(0);
			this.c.setSeconds(0);
			this.c.setMilliseconds(0)
		}
	this.rb = w_.date.weekDay.MON;
	this.sb = w_.date.weekDay.THU
};
w_.date.Date.prototype.clone = function() {
	var a = new w_.date.Date(this.c);
	a.rb = this.rb;
	a.sb = this.sb;
	return a
};
w_.date.Date.prototype.getFullYear = function() {
	return this.c.getFullYear()
};
w_.date.Date.prototype.Ya = function() {
	return this.getFullYear()
};
w_.date.Date.prototype.getMonth = function() {
	return this.c.getMonth()
};
w_.date.Date.prototype.getDate = function() {
	return this.c.getDate()
};
w_.date.Date.prototype.getTime = function() {
	return this.c.getTime()
};
w_.date.Date.prototype.getDay = function() {
	return this.c.getDay()
};
w_.date.Date.prototype.getUTCFullYear = function() {
	return this.c.getUTCFullYear()
};
w_.date.Date.prototype.getUTCMonth = function() {
	return this.c.getUTCMonth()
};
w_.date.Date.prototype.getUTCDate = function() {
	return this.c.getUTCDate()
};
w_.date.Date.prototype.getUTCDay = function() {
	return this.c.getDay()
};
w_.date.Date.prototype.getUTCHours = function() {
	return this.c.getUTCHours()
};
w_.date.Date.prototype.getUTCMinutes = function() {
	return this.c.getUTCMinutes()
};
w_.date.Date.prototype.ic = function() {
	return w_.date.ic(this.getFullYear(), this.getMonth())
};
w_.date.Date.prototype.Ed = function() {
	return w_.date.Ed(this.getFullYear(), this.getMonth(), this.getDate(),
			this.sb, this.rb)
};
w_.date.Date.prototype.getTimezoneOffset = function() {
	return this.c.getTimezoneOffset()
};
w_.date.Date.prototype.mc = function() {
	var a, b = this.getTimezoneOffset();
	if (b == 0)
		a = "Z";
	else {
		var c = Math.abs(b) / 60, d = Math.floor(c), e = (c - d) * 60;
		a = (b > 0 ? "-" : "+") + w_.string.padNumber(d, 2) + ":"
				+ w_.string.padNumber(e, 2)
	}
	return a
};
w_.date.Date.prototype.set = function(a) {
	this.c = new Date(a.getFullYear(), a.getMonth(), a.getDate())
};
w_.date.Date.prototype.setFullYear = function(a) {
	this.c.setFullYear(a)
};
w_.date.Date.prototype.setMonth = function(a) {
	this.c.setMonth(a)
};
w_.date.Date.prototype.setDate = function(a) {
	this.c.setDate(a)
};
w_.date.Date.prototype.setTime = function(a) {
	this.c.setTime(a)
};
w_.date.Date.prototype.setUTCFullYear = function(a) {
	this.c.setUTCFullYear(a)
};
w_.date.Date.prototype.setUTCMonth = function(a) {
	this.c.setUTCMonth(a)
};
w_.date.Date.prototype.setUTCDate = function(a) {
	this.c.setUTCDate(a)
};
w_.date.Date.prototype.add = function(a) {
	if (a.years || a.months) {
		var b = this.getMonth() + a.months + a.years * 12, c = this.Ya()
				+ Math.floor(b / 12);
		b %= 12;
		if (b < 0)
			b += 12;
		var d = w_.date.ic(c, b), e = Math.min(d, this.getDate());
		this.setDate(1);
		this.setFullYear(c);
		this.setMonth(b);
		this.setDate(e)
	}
	if (a.days) {
		var f = new Date(this.Ya(), this.getMonth(), this.getDate(), 12), g = new Date(
				f.getTime() + a.days * 86400000);
		this.setDate(1);
		this.setFullYear(g.getFullYear());
		this.setMonth(g.getMonth());
		this.setDate(g.getDate());
		this.uc(g.getDate())
	}
};
w_.date.Date.prototype.ma = function(a, b) {
	var c = [ this.getFullYear(), w_.string.padNumber(this.getMonth() + 1, 2),
			w_.string.padNumber(this.getDate(), 2) ];
	return c.join(a ? "-" : "") + (b ? this.mc() : "")
};
w_.date.Date.prototype.equals = function(a) {
	return this.Ya() == a.Ya() && this.getMonth() == a.getMonth()
			&& this.getDate() == a.getDate()
};
w_.date.Date.prototype.toString = function() {
	return this.ma()
};
w_.date.Date.prototype.uc = function(a) {
	if (this.getDate() != a) {
		var b = this.getDate() < a ? 1 : -1;
		this.c.setUTCHours(this.c.getUTCHours() + b)
	}
};
w_.date.Date.prototype.valueOf = function() {
	return this.c.valueOf()
};
w_.date.DateTime = function(a, b, c, d, e, f, g) {
	this.c = w_.isNumber(a) ? new Date(a, b || 0, c || 1, d || 0, e || 0,
			f || 0, g || 0) : new Date(a ? a.getTime() : w_.now());
	w_.date.Date.call(this)
};
w_.inherits(w_.date.DateTime, w_.date.Date);
w_.date.DateTime.prototype.getHours = function() {
	return this.c.getHours()
};
w_.date.DateTime.prototype.getMinutes = function() {
	return this.c.getMinutes()
};
w_.date.DateTime.prototype.getSeconds = function() {
	return this.c.getSeconds()
};
w_.date.DateTime.prototype.getMilliseconds = function() {
	return this.c.getMilliseconds()
};
w_.date.DateTime.prototype.getUTCDay = function() {
	return this.c.getUTCDay()
};
w_.date.DateTime.prototype.getUTCHours = function() {
	return this.c.getUTCHours()
};
w_.date.DateTime.prototype.getUTCMinutes = function() {
	return this.c.getUTCMinutes()
};
w_.date.DateTime.prototype.getUTCSeconds = function() {
	return this.c.getUTCSeconds()
};
w_.date.DateTime.prototype.getUTCMilliseconds = function() {
	return this.c.getUTCMilliseconds()
};
w_.date.DateTime.prototype.setHours = function(a) {
	this.c.setHours(a)
};
w_.date.DateTime.prototype.setMinutes = function(a) {
	this.c.setMinutes(a)
};
w_.date.DateTime.prototype.setSeconds = function(a) {
	this.c.setSeconds(a)
};
w_.date.DateTime.prototype.setMilliseconds = function(a) {
	this.c.setMilliseconds(a)
};
w_.date.DateTime.prototype.setUTCHours = function(a) {
	this.c.setUTCHours(a)
};
w_.date.DateTime.prototype.setUTCMinutes = function(a) {
	this.c.setUTCMinutes(a)
};
w_.date.DateTime.prototype.setUTCSeconds = function(a) {
	this.c.setUTCSeconds(a)
};
w_.date.DateTime.prototype.setUTCMilliseconds = function(a) {
	this.c.setUTCMilliseconds(a)
};
w_.date.DateTime.prototype.add = function(a) {
	w_.date.Date.prototype.add.call(this, a);
	a.hours && this.setHours(this.c.getHours() + a.hours);
	a.minutes && this.setMinutes(this.c.getMinutes() + a.minutes);
	a.seconds && this.setSeconds(this.c.getSeconds() + a.seconds)
};
w_.date.DateTime.prototype.ma = function(a, b) {
	var c = w_.date.Date.prototype.ma.call(this, a);
	if (a)
		return c + " " + w_.string.padNumber(this.getHours(), 2) + ":"
				+ w_.string.padNumber(this.getMinutes(), 2) + ":"
				+ w_.string.padNumber(this.getSeconds(), 2)
				+ (b ? this.mc() : "");
	return c + "T" + w_.string.padNumber(this.getHours(), 2)
			+ w_.string.padNumber(this.getMinutes(), 2)
			+ w_.string.padNumber(this.getSeconds(), 2) + (b ? this.mc() : "")
};
w_.date.DateTime.prototype.equals = function(a) {
	return this.getTime() == a.getTime()
};
w_.date.DateTime.prototype.toString = function() {
	return this.ma()
};
w_.date.DateTime.prototype.clone = function() {
	var a = new w_.date.DateTime(this.c);
	a.rb = this.rb;
	a.sb = this.sb;
	return a
};
w_.array = {};
w_.array.ArrayLike = w_.typedef;
w_.array.peek = function(a) {
	return a[a.length - 1]
};
w_.array.indexOf = function(a, b, c) {
	if (a.indexOf)
		return a.indexOf(b, c);
	if (Array.indexOf)
		return Array.indexOf(a, b, c);
	for ( var d = c == w_c ? 0 : c < 0 ? Math.max(0, a.length + c) : c, e = d; e < a.length; e++)
		if (e in a && a[e] === b)
			return e;
	return -1
};
w_.array.lastIndexOf = function(a, b, c) {
	var d = c == w_c ? a.length - 1 : c;
	if (a.lastIndexOf)
		return a.lastIndexOf(b, d);
	if (Array.lastIndexOf)
		return Array.lastIndexOf(a, b, d);
	if (d < 0)
		d = Math.max(0, a.length + d);
	for ( var e = d; e >= 0; e--)
		if (e in a && a[e] === b)
			return e;
	return -1
};
w_.array.forEach = function(a, b, c) {
	if (a.forEach)
		a.forEach(b, c);
	else if (Array.forEach)
		Array.forEach(a, b, c);
	else
		for ( var d = a.length, e = w_.isString(a) ? a.split("") : a, f = 0; f < d; f++)
			f in e && b.call(c, e[f], f, a)
};
w_.array.forEachRight = function(a, b, c) {
	for ( var d = a.length, e = w_.isString(a) ? a.split("") : a, f = d - 1; f >= 0; --f)
		f in e && b.call(c, e[f], f, a)
};
w_.array.filter = function(a, b, c) {
	if (a.filter)
		return a.filter(b, c);
	if (Array.filter)
		return Array.filter(a, b, c);
	for ( var d = a.length, e = [], f = 0, g = w_.isString(a) ? a.split("") : a, h = 0; h < d; h++)
		if (h in g) {
			var i = g[h];
			if (b.call(c, i, h, a))
				e[f++] = i
		}
	return e
};
w_.array.map = function(a, b, c) {
	if (a.map)
		return a.map(b, c);
	if (Array.map)
		return Array.map(a, b, c);
	for ( var d = a.length, e = [], f = 0, g = w_.isString(a) ? a.split("") : a, h = 0; h < d; h++)
		if (h in g)
			e[f++] = b.call(c, g[h], h, a);
	return e
};
w_.array.reduce = function(a, b, c, d) {
	if (a.reduce)
		return d ? a.reduce(w_.bind(b, d), c) : a.reduce(b, c);
	var e = c;
	w_.array.forEach(a, function(f, g) {
		e = b.call(d, e, f, g, a)
	});
	return e
};
w_.array.reduceRight = function(a, b, c, d) {
	if (a.reduceRight)
		return d ? a.reduceRight(w_.bind(b, d), c) : a.reduceRight(b, c);
	var e = c;
	w_.array.forEachRight(a, function(f, g) {
		e = b.call(d, e, f, g, a)
	});
	return e
};
w_.array.some = function(a, b, c) {
	if (a.some)
		return a.some(b, c);
	if (Array.some)
		return Array.some(a, b, c);
	for ( var d = a.length, e = w_.isString(a) ? a.split("") : a, f = 0; f < d; f++)
		if (f in e && b.call(c, e[f], f, a))
			return w_b;
	return w_d
};
w_.array.every = function(a, b, c) {
	if (a.every)
		return a.every(b, c);
	if (Array.every)
		return Array.every(a, b, c);
	for ( var d = a.length, e = w_.isString(a) ? a.split("") : a, f = 0; f < d; f++)
		if (f in e && !b.call(c, e[f], f, a))
			return w_d;
	return w_b
};
w_.array.find = function(a, b, c) {
	var d = w_.array.findIndex(a, b, c);
	return d < 0 ? w_c : w_.isString(a) ? a.charAt(d) : a[d]
};
w_.array.findIndex = function(a, b, c) {
	for ( var d = a.length, e = w_.isString(a) ? a.split("") : a, f = 0; f < d; f++)
		if (f in e && b.call(c, e[f], f, a))
			return f;
	return -1
};
w_.array.findRight = function(a, b, c) {
	var d = w_.array.findIndexRight(a, b, c);
	return d < 0 ? w_c : w_.isString(a) ? a.charAt(d) : a[d]
};
w_.array.findIndexRight = function(a, b, c) {
	for ( var d = a.length, e = w_.isString(a) ? a.split("") : a, f = d - 1; f >= 0; f--)
		if (f in e && b.call(c, e[f], f, a))
			return f;
	return -1
};
w_.array.contains = function(a, b) {
	if (a.contains)
		return a.contains(b);
	return w_.array.indexOf(a, b) > -1
};
w_.array.z = function(a) {
	return a.length == 0
};
w_.array.clear = function(a) {
	if (!w_.isArray(a))
		for ( var b = a.length - 1; b >= 0; b--)
			delete a[b];
	a.length = 0
};
w_.array.insert = function(a, b) {
	w_.array.contains(a, b) || a.push(b)
};
w_.array.insertAt = function(a, b, c) {
	w_.array.splice(a, c, 0, b)
};
w_.array.insertArrayAt = function(a, b, c) {
	w_.partial(w_.array.splice, a, c, 0).apply(w_c, b)
};
w_.array.insertBefore = function(a, b, c) {
	var d;
	arguments.length == 2 || (d = w_.array.indexOf(a, c)) == -1 ? a.push(b)
			: w_.array.insertAt(a, b, d)
};
w_.array.remove = function(a, b) {
	var c = w_.array.indexOf(a, b), d;
	if (d = c != -1)
		w_.array.removeAt(a, c);
	return d
};
w_.array.removeAt = function(a, b) {
	return Array.prototype.splice.call(a, b, 1).length == 1
};
w_.array.removeIf = function(a, b, c) {
	var d = w_.array.findIndex(a, b, c);
	if (d >= 0) {
		w_.array.removeAt(a, d);
		return w_b
	}
	return w_d
};
w_.array.clone = function(a) {
	if (w_.isArray(a))
		return a.concat();
	else {
		for ( var b = [], c = 0, d = a.length; c < d; c++)
			b[c] = a[c];
		return b
	}
};
w_.array.toArray = function(a) {
	if (w_.isArray(a))
		return a.concat();
	return w_.array.clone(a)
};
w_.array.extend = function(a) {
	for ( var b = 1; b < arguments.length; b++) {
		var c = arguments[b];
		if (w_.isArrayLike(c)) {
			c = w_.array.toArray(c);
			a.push.apply(a, c)
		} else
			a.push(c)
	}
};
w_.array.splice = function(a) {
	return Array.prototype.splice.apply(a, w_.array.slice(arguments, 1))
};
w_.array.slice = function(a, b, c) {
	return arguments.length <= 2 ? Array.prototype.slice.call(a, b)
			: Array.prototype.slice.call(a, b, c)
};
w_.array.removeDuplicates = function(a, b) {
	for ( var c = b || a, d = {}, e = 0, f = 0; f < a.length;) {
		var g = a[f++], h = w_.isObject(g) ? w_.getHashCode(g) : g;
		if (!(h in d)) {
			d[h] = w_b;
			c[e++] = g
		}
	}
	c.length = e
};
w_.array.binarySearch = function(a, b, c) {
	for ( var d = 0, e = a.length - 1, f = c || w_.array.defaultCompare; d <= e;) {
		var g = d + e >> 1, h = f(b, a[g]);
		if (h > 0)
			d = g + 1;
		else if (h < 0)
			e = g - 1;
		else
			return g
	}
	return -(d + 1)
};
w_.array.sort = function(a, b) {
	Array.prototype.sort.call(a, b || w_.array.defaultCompare)
};
w_.array.stableSort = function(a, b) {
	for ( var c = 0; c < a.length; c++)
		a[c] = {
			index : c,
			value : a[c]
		};
	var d = b || w_.array.defaultCompare;
	function e(f, g) {
		return d(f.value, g.value) || f.index - g.index
	}
	w_.array.sort(a, e);
	for (c = 0; c < a.length; c++)
		a[c] = a[c].value
};
w_.array.sortObjectsByKey = function(a, b, c) {
	var d = c || w_.array.defaultCompare;
	w_.array.sort(a, function(e, f) {
		return d(e[b], f[b])
	})
};
w_.array.compare = function(a, b, c) {
	if (!w_.isArrayLike(a) || !w_.isArrayLike(b) || a.length != b.length)
		return w_d;
	for ( var d = a.length, e = c || w_.array.defaultCompareEquality, f = 0; f < d; f++)
		if (!e.call(w_c, a[f], b[f]))
			return w_d;
	return w_b
};
w_.array.defaultCompare = function(a, b) {
	return a > b ? 1 : a < b ? -1 : 0
};
w_.array.defaultCompareEquality = function(a, b) {
	return a === b
};
w_.array.binaryInsert = function(a, b, c) {
	var d = w_.array.binarySearch(a, b, c);
	if (d < 0) {
		w_.array.insertAt(a, b, -(d + 1));
		return w_b
	}
	return w_d
};
w_.array.binaryRemove = function(a, b, c) {
	var d = w_.array.binarySearch(a, b, c);
	return d >= 0 ? w_.array.removeAt(a, d) : w_d
};
w_.array.bucket = function(a, b) {
	for ( var c = {}, d = 0; d < a.length; d++) {
		var e = a[d], f = b(e, d, a);
		if (w_.isDef(f)) {
			var g = c[f] || (c[f] = []);
			g.push(e)
		}
	}
	return c
};
w_.array.repeat = function(a, b) {
	for ( var c = [], d = 0; d < b; d++)
		c[d] = a;
	return c
};
w_.array.flatten = function() {
	for ( var a = [], b = 0; b < arguments.length; b++) {
		var c = arguments[b];
		w_.isArray(c) ? a.push.apply(a, w_.array.flatten.apply(w_c, c)) : a
				.push(c)
	}
	return a
};
w_.math = {};
w_.math.Coordinate = function(a, b) {
	this.x = w_.isDef(a) ? a : 0;
	this.y = w_.isDef(b) ? b : 0
};
w_.math.Coordinate.prototype.clone = function() {
	return new w_.math.Coordinate(this.x, this.y)
};
if (w_.DEBUG)
	w_.math.Coordinate.prototype.toString = function() {
		return "(" + this.x + ", " + this.y + ")"
	};
w_.math.Coordinate.equals = function(a, b) {
	if (a == b)
		return w_b;
	if (!a || !b)
		return w_d;
	return a.x == b.x && a.y == b.y
};
w_.math.Coordinate.distance = function(a, b) {
	var c = a.x - b.x, d = a.y - b.y;
	return Math.sqrt(c * c + d * d)
};
w_.math.Coordinate.squaredDistance = function(a, b) {
	var c = a.x - b.x, d = a.y - b.y;
	return c * c + d * d
};
w_.math.Coordinate.difference = function(a, b) {
	return new w_.math.Coordinate(a.x - b.x, a.y - b.y)
};
w_.math.Coordinate.sum = function(a, b) {
	return new w_.math.Coordinate(a.x + b.x, a.y + b.y)
};
w_.math.Size = function(a, b) {
	this.width = a;
	this.height = b
};
w_.math.Size.equals = function(a, b) {
	if (a == b)
		return w_b;
	if (!a || !b)
		return w_d;
	return a.width == b.width && a.height == b.height
};
w_.math.Size.prototype.clone = function() {
	return new w_.math.Size(this.width, this.height)
};
if (w_.DEBUG)
	w_.math.Size.prototype.toString = function() {
		return "(" + this.width + " x " + this.height + ")"
	};
w_.math.Size.prototype.area = function() {
	return this.width * this.height
};
w_.math.Size.prototype.z = function() {
	return !this.area()
};
w_.math.Size.prototype.ceil = function() {
	this.width = Math.ceil(this.width);
	this.height = Math.ceil(this.height);
	return this
};
w_.math.Size.prototype.floor = function() {
	this.width = Math.floor(this.width);
	this.height = Math.floor(this.height);
	return this
};
w_.math.Size.prototype.round = function() {
	this.width = Math.round(this.width);
	this.height = Math.round(this.height);
	return this
};
w_.math.Size.prototype.scale = function(a) {
	this.width *= a;
	this.height *= a;
	return this
};
w_.object = {};
w_.object.forEach = function(a, b, c) {
	for ( var d in a)
		b.call(c, a[d], d, a)
};
w_.object.filter = function(a, b, c) {
	var d = {};
	for ( var e in a)
		if (b.call(c, a[e], e, a))
			d[e] = a[e];
	return d
};
w_.object.map = function(a, b, c) {
	var d = {};
	for ( var e in a)
		d[e] = b.call(c, a[e], e, a);
	return d
};
w_.object.some = function(a, b, c) {
	for ( var d in a)
		if (b.call(c, a[d], d, a))
			return w_b;
	return w_d
};
w_.object.every = function(a, b, c) {
	for ( var d in a)
		if (!b.call(c, a[d], d, a))
			return w_d;
	return w_b
};
w_.object.T = function(a) {
	var b = 0;
	for ( var c in a)
		b++;
	return b
};
w_.object.getAnyKey = function(a) {
	for ( var b in a)
		return b
};
w_.object.getAnyValue = function(a) {
	for ( var b in a)
		return a[b]
};
w_.object.contains = function(a, b) {
	return w_.object.ga(a, b)
};
w_.object.p = function(a) {
	var b = [], c = 0;
	for ( var d in a)
		b[c++] = a[d];
	return b
};
w_.object.m = function(a) {
	var b = [], c = 0;
	for ( var d in a)
		b[c++] = d;
	return b
};
w_.object.w = function(a, b) {
	return b in a
};
w_.object.ga = function(a, b) {
	for ( var c in a)
		if (a[c] == b)
			return w_b;
	return w_d
};
w_.object.findKey = function(a, b, c) {
	for ( var d in a)
		if (b.call(c, a[d], d, a))
			return d;
	return undefined
};
w_.object.findValue = function(a, b, c) {
	var d = w_.object.findKey(a, b, c);
	return d && a[d]
};
w_.object.z = function(a) {
	for ( var b in a)
		return w_d;
	return w_b
};
w_.object.clear = function(a) {
	for ( var b = w_.object.m(a), c = b.length - 1; c >= 0; c--)
		w_.object.remove(a, b[c])
};
w_.object.remove = function(a, b) {
	var c;
	if (c = b in a)
		delete a[b];
	return c
};
w_.object.add = function(a, b, c) {
	if (b in a)
		w_a(Error('The object already contains the key "' + b + '"'));
	w_.object.set(a, b, c)
};
w_.object.get = function(a, b, c) {
	if (b in a)
		return a[b];
	return c
};
w_.object.set = function(a, b, c) {
	a[b] = c
};
w_.object.setIfUndefined = function(a, b, c) {
	return b in a ? a[b] : (a[b] = c)
};
w_.object.clone = function(a) {
	var b = {};
	for ( var c in a)
		b[c] = a[c];
	return b
};
w_.object.transpose = function(a) {
	var b = {};
	for ( var c in a)
		b[a[c]] = c;
	return b
};
w_.object.Oe = [ "constructor", "hasOwnProperty", "isPrototypeOf",
		"propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
w_.object.extend = function(a) {
	for ( var b, c, d = 1; d < arguments.length; d++) {
		c = arguments[d];
		for (b in c)
			a[b] = c[b];
		for ( var e = 0; e < w_.object.Oe.length; e++) {
			b = w_.object.Oe[e];
			if (Object.prototype.hasOwnProperty.call(c, b))
				a[b] = c[b]
		}
	}
};
w_.object.create = function() {
	var a = arguments.length;
	if (a == 1 && w_.isArray(arguments[0]))
		return w_.object.create.apply(w_c, arguments[0]);
	if (a % 2)
		w_a(Error("Uneven number of arguments"));
	for ( var b = {}, c = 0; c < a; c += 2)
		b[arguments[c]] = arguments[c + 1];
	return b
};
w_.object.createSet = function() {
	var a = arguments.length;
	if (a == 1 && w_.isArray(arguments[0]))
		return w_.object.createSet.apply(w_c, arguments[0]);
	for ( var b = {}, c = 0; c < a; c++)
		b[arguments[c]] = w_b;
	return b
};
w_.userAgent = {};
w_.userAgent.ASSUME_IE = w_d;
w_.userAgent.ASSUME_GECKO = w_d;
w_.userAgent.ASSUME_CAMINO = w_d;
w_.userAgent.ASSUME_WEBKIT = w_d;
w_.userAgent.ASSUME_MOBILE_WEBKIT = w_d;
w_.userAgent.ASSUME_OPERA = w_d;
w_.userAgent.sa = w_.userAgent.ASSUME_IE || w_.userAgent.ASSUME_GECKO
		|| w_.userAgent.ASSUME_CAMINO || w_.userAgent.ASSUME_MOBILE_WEBKIT
		|| w_.userAgent.ASSUME_WEBKIT || w_.userAgent.ASSUME_OPERA;
w_.userAgent.getUserAgentString = function() {
	return w_.global.navigator ? w_.global.navigator.userAgent : w_c
};
w_.userAgent.getNavigator = function() {
	return w_.global.navigator
};
w_.userAgent.zh = function() {
	w_.userAgent.pb = w_d;
	w_.userAgent.Cf = w_d;
	w_.userAgent.Yb = w_d;
	w_.userAgent.Df = w_d;
	w_.userAgent.gd = w_d;
	w_.userAgent.Bf = w_d;
	var a;
	if (!w_.userAgent.sa && (a = w_.userAgent.getUserAgentString())) {
		var b = w_.userAgent.getNavigator();
		w_.userAgent.pb = a.indexOf("Opera") == 0;
		w_.userAgent.Cf = !w_.userAgent.pb && a.indexOf("MSIE") != -1;
		w_.userAgent.Yb = !w_.userAgent.pb && a.indexOf("WebKit") != -1;
		w_.userAgent.Df = w_.userAgent.Yb && a.indexOf("Mobile") != -1;
		w_.userAgent.gd = !w_.userAgent.pb && !w_.userAgent.Yb
				&& b.product == "Gecko";
		w_.userAgent.Bf = w_.userAgent.gd && b.vendor == "Camino"
	}
};
w_.userAgent.sa || w_.userAgent.zh();
w_.userAgent.OPERA = w_.userAgent.sa ? w_.userAgent.ASSUME_OPERA
		: w_.userAgent.pb;
w_.userAgent.IE = w_.userAgent.sa ? w_.userAgent.ASSUME_IE : w_.userAgent.Cf;
w_.userAgent.GECKO = w_.userAgent.sa ? w_.userAgent.ASSUME_GECKO
		|| w_.userAgent.ASSUME_CAMINO : w_.userAgent.gd;
w_.userAgent.CAMINO = w_.userAgent.sa ? w_.userAgent.ASSUME_CAMINO
		: w_.userAgent.Bf;
w_.userAgent.WEBKIT = w_.userAgent.sa ? w_.userAgent.ASSUME_WEBKIT
		|| w_.userAgent.ASSUME_MOBILE_WEBKIT : w_.userAgent.Yb;
w_.userAgent.MOBILE = w_.userAgent.ASSUME_MOBILE_WEBKIT || w_.userAgent.Df;
w_.userAgent.SAFARI = w_.userAgent.WEBKIT;
w_.userAgent.oh = function() {
	var a = w_.userAgent.getNavigator();
	return a && a.platform || ""
};
w_.userAgent.PLATFORM = w_.userAgent.oh();
w_.userAgent.ASSUME_MAC = w_d;
w_.userAgent.ASSUME_WINDOWS = w_d;
w_.userAgent.ASSUME_LINUX = w_d;
w_.userAgent.ASSUME_X11 = w_d;
w_.userAgent.mb = w_.userAgent.ASSUME_MAC || w_.userAgent.ASSUME_WINDOWS
		|| w_.userAgent.ASSUME_LINUX || w_.userAgent.ASSUME_X11;
w_.userAgent.yh = function() {
	w_.userAgent.lh = w_.string.contains(w_.userAgent.PLATFORM, "Mac");
	w_.userAgent.mh = w_.string.contains(w_.userAgent.PLATFORM, "Win");
	w_.userAgent.kh = w_.string.contains(w_.userAgent.PLATFORM, "Linux");
	w_.userAgent.nh = !!w_.userAgent.getNavigator()
			&& w_.string.contains(w_.userAgent.getNavigator().appVersion || "",
					"X11")
};
w_.userAgent.mb || w_.userAgent.yh();
w_.userAgent.MAC = w_.userAgent.mb ? w_.userAgent.ASSUME_MAC : w_.userAgent.lh;
w_.userAgent.WINDOWS = w_.userAgent.mb ? w_.userAgent.ASSUME_WINDOWS
		: w_.userAgent.mh;
w_.userAgent.LINUX = w_.userAgent.mb ? w_.userAgent.ASSUME_LINUX
		: w_.userAgent.kh;
w_.userAgent.X11 = w_.userAgent.mb ? w_.userAgent.ASSUME_X11 : w_.userAgent.nh;
w_.userAgent.ph = function() {
	var a = "", b;
	if (w_.userAgent.OPERA && w_.global.opera) {
		var c = w_.global.opera.version;
		a = typeof c == "function" ? c() : c
	} else {
		if (w_.userAgent.GECKO)
			b = /rv\:([^\);]+)(\)|;)/;
		else if (w_.userAgent.IE)
			b = /MSIE\s+([^\);]+)(\)|;)/;
		else if (w_.userAgent.WEBKIT)
			b = /WebKit\/(\S+)/;
		if (b) {
			var d = b.exec(w_.userAgent.getUserAgentString());
			a = d ? d[1] : ""
		}
	}
	return a
};
w_.userAgent.VERSION = w_.userAgent.ph();
w_.userAgent.compare = function(a, b) {
	return w_.string.compareVersions(a, b)
};
w_.userAgent.og = {};
w_.userAgent.isVersion = function(a) {
	return w_.userAgent.og[a]
			|| (w_.userAgent.og[a] = w_.string.compareVersions(
					w_.userAgent.VERSION, a) >= 0)
};
w_.dom = {};
w_.dom.classes = {};
w_.dom.classes.set = function(a, b) {
	a.className = b
};
w_.dom.classes.get = function(a) {
	var b = a.className;
	return b && typeof b.split == "function" ? b.split(" ") : []
};
w_.dom.classes.add = function(a) {
	var b = w_.dom.classes.get(a), c = w_.array.slice(arguments, 1), d = w_.dom.classes
			.jf(b, c);
	a.className = b.join(" ");
	return d
};
w_.dom.classes.remove = function(a) {
	var b = w_.dom.classes.get(a), c = w_.array.slice(arguments, 1), d = w_.dom.classes
			.Hg(b, c);
	a.className = b.join(" ");
	return d
};
w_.dom.classes.jf = function(a, b) {
	for ( var c = 0, d = 0; d < b.length; d++)
		if (!w_.array.contains(a, b[d])) {
			a.push(b[d]);
			c++
		}
	return c == b.length
};
w_.dom.classes.Hg = function(a, b) {
	for ( var c = 0, d = 0; d < a.length; d++)
		if (w_.array.contains(b, a[d])) {
			w_.array.splice(a, d--, 1);
			c++
		}
	return c == b.length
};
w_.dom.classes.swap = function(a, b, c) {
	for ( var d = w_.dom.classes.get(a), e = w_d, f = 0; f < d.length; f++)
		if (d[f] == b) {
			w_.array.splice(d, f--, 1);
			e = w_b
		}
	if (e) {
		d.push(c);
		a.className = d.join(" ")
	}
	return e
};
w_.dom.classes.addRemove = function(a, b, c) {
	var d = w_.dom.classes.get(a);
	if (w_.isString(b))
		w_.array.remove(d, b);
	else
		w_.isArray(b) && w_.dom.classes.Hg(d, b);
	if (w_.isString(c) && !w_.array.contains(d, c))
		d.push(c);
	else
		w_.isArray(c) && w_.dom.classes.jf(d, c);
	a.className = d.join(" ")
};
w_.dom.classes.has = function(a, b) {
	return w_.array.contains(w_.dom.classes.get(a), b)
};
w_.dom.classes.enable = function(a, b, c) {
	c ? w_.dom.classes.add(a, b) : w_.dom.classes.remove(a, b)
};
w_.dom.classes.toggle = function(a, b) {
	var c = !w_.dom.classes.has(a, b);
	w_.dom.classes.enable(a, b, c);
	return c
};
w_.dom.TagName = {
	A : "A",
	ABBR : "ABBR",
	ACRONYM : "ACRONYM",
	ADDRESS : "ADDRESS",
	APPLET : "APPLET",
	AREA : "AREA",
	B : "B",
	BASE : "BASE",
	BASEFONT : "BASEFONT",
	BDO : "BDO",
	BIG : "BIG",
	BLOCKQUOTE : "BLOCKQUOTE",
	BODY : "BODY",
	BR : "BR",
	BUTTON : "BUTTON",
	CAPTION : "CAPTION",
	CENTER : "CENTER",
	CITE : "CITE",
	CODE : "CODE",
	COL : "COL",
	COLGROUP : "COLGROUP",
	DD : "DD",
	DEL : "DEL",
	DFN : "DFN",
	DIR : "DIR",
	DIV : "DIV",
	DL : "DL",
	DT : "DT",
	EM : "EM",
	FIELDSET : "FIELDSET",
	FONT : "FONT",
	FORM : "FORM",
	FRAME : "FRAME",
	FRAMESET : "FRAMESET",
	H1 : "H1",
	H2 : "H2",
	H3 : "H3",
	H4 : "H4",
	H5 : "H5",
	H6 : "H6",
	HEAD : "HEAD",
	HR : "HR",
	HTML : "HTML",
	I : "I",
	IFRAME : "IFRAME",
	IMG : "IMG",
	INPUT : "INPUT",
	INS : "INS",
	ISINDEX : "ISINDEX",
	KBD : "KBD",
	LABEL : "LABEL",
	LEGEND : "LEGEND",
	LI : "LI",
	LINK : "LINK",
	MAP : "MAP",
	MENU : "MENU",
	META : "META",
	NOFRAMES : "NOFRAMES",
	NOSCRIPT : "NOSCRIPT",
	OBJECT : "OBJECT",
	OL : "OL",
	OPTGROUP : "OPTGROUP",
	OPTION : "OPTION",
	P : "P",
	PARAM : "PARAM",
	PRE : "PRE",
	Q : "Q",
	S : "S",
	SAMP : "SAMP",
	SCRIPT : "SCRIPT",
	SELECT : "SELECT",
	SMALL : "SMALL",
	SPAN : "SPAN",
	STRIKE : "STRIKE",
	STRONG : "STRONG",
	STYLE : "STYLE",
	SUB : "SUB",
	SUP : "SUP",
	TABLE : "TABLE",
	TBODY : "TBODY",
	TD : "TD",
	TEXTAREA : "TEXTAREA",
	TFOOT : "TFOOT",
	TH : "TH",
	THEAD : "THEAD",
	TITLE : "TITLE",
	TR : "TR",
	TT : "TT",
	U : "U",
	UL : "UL",
	VAR : "VAR"
};
w_.dom.ASSUME_QUIRKS_MODE = w_d;
w_.dom.ASSUME_STANDARDS_MODE = w_d;
w_.dom.Pg = w_.dom.ASSUME_QUIRKS_MODE || w_.dom.ASSUME_STANDARDS_MODE;
w_.dom.NodeType = {
	ELEMENT : 1,
	ATTRIBUTE : 2,
	TEXT : 3,
	CDATA_SECTION : 4,
	ENTITY_REFERENCE : 5,
	ENTITY : 6,
	PROCESSING_INSTRUCTION : 7,
	COMMENT : 8,
	DOCUMENT : 9,
	DOCUMENT_TYPE : 10,
	DOCUMENT_FRAGMENT : 11,
	NOTATION : 12
};
w_.dom.dc = function(a) {
	return a ? new w_.dom.DomHelper(w_.dom.V(a)) : w_.dom.jh
			|| (w_.dom.jh = new w_.dom.DomHelper)
};
w_.dom.Pf = function() {
	return document
};
w_.dom.ub = function(a) {
	return w_.isString(a) ? document.getElementById(a) : a
};
w_.dom.le = w_.dom.ub;
w_.dom.Xa = function(a, b, c) {
	return w_.dom.Uf(document, a, b, c)
};
w_.dom.Uf = function(a, b, c, d) {
	var e = d || a, f = b && b != "*" ? b.toLowerCase() : "";
	if (e.querySelectorAll
			&& (f || c)
			&& (!w_.userAgent.WEBKIT || w_.dom.Za(a) || w_.userAgent
					.isVersion("528"))) {
		var g = f + (c ? "." + c : "");
		return e.querySelectorAll(g)
	}
	if (c && e.getElementsByClassName) {
		var h = e.getElementsByClassName(c);
		if (f) {
			for ( var i = {}, j = 0, k = 0, l; l = h[k]; k++)
				if (f == l.nodeName.toLowerCase())
					i[j++] = l;
			i.length = j;
			return i
		} else
			return h
	}
	h = e.getElementsByTagName(f || "*");
	if (c) {
		i = {};
		for (k = j = 0; l = h[k]; k++) {
			var m = l.className;
			if (typeof m.split == "function"
					&& w_.array.contains(m.split(" "), c))
				i[j++] = l
		}
		i.length = j;
		return i
	} else
		return h
};
w_.dom.me = w_.dom.Xa;
w_.dom.Eb = function(a, b) {
	w_.object.forEach(b, function(c, d) {
		if (d == "style")
			a.style.cssText = c;
		else if (d == "class")
			a.className = c;
		else if (d == "for")
			a.htmlFor = c;
		else if (d in w_.dom.se)
			a.setAttribute(w_.dom.se[d], c);
		else
			a[d] = c
	})
};
w_.dom.se = {
	cellpadding : "cellPadding",
	cellspacing : "cellSpacing",
	colspan : "colSpan",
	rowspan : "rowSpan",
	valign : "vAlign",
	height : "height",
	width : "width",
	usemap : "useMap",
	frameborder : "frameBorder",
	type : "type"
};
w_.dom.Dd = function(a) {
	return w_.dom.$f(a || window)
};
w_.dom.$f = function(a) {
	var b = a.document;
	if (w_.userAgent.WEBKIT && !w_.userAgent.isVersion("500")
			&& !w_.userAgent.MOBILE) {
		if (typeof a.innerHeight == "undefined")
			a = window;
		var c = a.innerHeight, d = a.document.documentElement.scrollHeight;
		if (a == a.top)
			if (d < c)
				c -= 15;
		return new w_.math.Size(a.innerWidth, c)
	}
	var e = w_.dom.Za(b)
			&& (!w_.userAgent.OPERA || w_.userAgent.OPERA
					&& w_.userAgent.isVersion("9.50")) ? b.documentElement
			: b.body;
	return new w_.math.Size(e.clientWidth, e.clientHeight)
};
w_.dom.Qf = function() {
	return w_.dom.Rf(window)
};
w_.dom.Rf = function(a) {
	var b = a.document, c = 0;
	if (b) {
		var d = w_.dom.$f(a).height, e = b.body, f = b.documentElement;
		if (w_.dom.Za(b) && f.scrollHeight)
			c = f.scrollHeight != d ? f.scrollHeight : f.offsetHeight;
		else {
			var g = f.scrollHeight, h = f.offsetHeight;
			if (f.clientHeight != h) {
				g = e.scrollHeight;
				h = e.offsetHeight
			}
			c = g > d ? g > h ? g : h : g < h ? g : h
		}
	}
	return c
};
w_.dom.getPageScroll = function(a) {
	var b = a || w_.global || window;
	return w_.dom.dc(b.document).qd()
};
w_.dom.qd = function() {
	return w_.dom.Tf(document)
};
w_.dom.Tf = function(a) {
	var b = w_.dom.rd(a);
	return new w_.math.Coordinate(b.scrollLeft, b.scrollTop)
};
w_.dom.Sf = function() {
	return w_.dom.rd(document)
};
w_.dom.rd = function(a) {
	return !w_.userAgent.WEBKIT && w_.dom.Za(a) ? a.documentElement : a.body
};
w_.dom.pc = function(a) {
	return a ? w_.dom.Gd(a) : window
};
w_.dom.Gd = function(a) {
	if (a.parentWindow)
		return a.parentWindow;
	if (w_.userAgent.WEBKIT && !w_.userAgent.isVersion("500")
			&& !w_.userAgent.MOBILE) {
		var b = a.createElement("script");
		b.innerHTML = "document.parentWindow=window";
		var c = a.documentElement;
		c.appendChild(b);
		c.removeChild(b);
		return a.parentWindow
	}
	return a.defaultView
};
w_.dom.s = function() {
	return w_.dom.yf(document, arguments)
};
w_.dom.yf = function(a, b) {
	var c = b[0], d = b[1];
	if (w_.userAgent.IE && d && (d.name || d.type)) {
		var e = [ "<", c ];
		d.name && e.push(' name="', w_.string.htmlEscape(d.name), '"');
		if (d.type) {
			e.push(' type="', w_.string.htmlEscape(d.type), '"');
			d = w_.cloneObject(d);
			delete d.type
		}
		e.push(">");
		c = e.join("")
	}
	var f = a.createElement(c);
	if (d)
		if (w_.isString(d))
			f.className = d;
		else
			w_.dom.Eb(f, d);
	if (b.length > 2) {
		function g(j) {
			if (j)
				f.appendChild(w_.isString(j) ? a.createTextNode(j) : j)
		}
		for ( var h = 2; h < b.length; h++) {
			var i = b[h];
			w_.isArrayLike(i) && !w_.dom.tc(i) ? w_.array.forEach(w_.dom
					.isNodeList(i) ? w_.array.clone(i) : i, g) : g(i)
		}
	}
	return f
};
w_.dom.ne = w_.dom.s;
w_.dom.createElement = function(a) {
	return document.createElement(a)
};
w_.dom.createTextNode = function(a) {
	return document.createTextNode(a)
};
w_.dom.jg = function(a) {
	return w_.dom.kg(document, a)
};
w_.dom.kg = function(a, b) {
	var c = a.createElement("div");
	c.innerHTML = b;
	if (c.childNodes.length == 1)
		return c.firstChild;
	else {
		for ( var d = a.createDocumentFragment(); c.firstChild;)
			d.appendChild(c.firstChild);
		return d
	}
};
w_.dom.Nf = function() {
	return w_.dom.rc() ? "CSS1Compat" : "BackCompat"
};
w_.dom.rc = function() {
	return w_.dom.Za(document)
};
w_.dom.Za = function(a) {
	if (w_.dom.Pg)
		return w_.dom.ASSUME_STANDARDS_MODE;
	return a.compatMode == "CSS1Compat"
};
w_.dom.canHaveChildren = function(a) {
	if (a.nodeType != w_.dom.NodeType.ELEMENT)
		return w_d;
	if ("canHaveChildren" in a)
		return a.canHaveChildren;
	switch (a.tagName) {
	case w_.dom.TagName.APPLET:
	case w_.dom.TagName.AREA:
	case w_.dom.TagName.BR:
	case w_.dom.TagName.COL:
	case w_.dom.TagName.FRAME:
	case w_.dom.TagName.HR:
	case w_.dom.TagName.IMG:
	case w_.dom.TagName.INPUT:
	case w_.dom.TagName.IFRAME:
	case w_.dom.TagName.ISINDEX:
	case w_.dom.TagName.LINK:
	case w_.dom.TagName.NOFRAMES:
	case w_.dom.TagName.NOSCRIPT:
	case w_.dom.TagName.META:
	case w_.dom.TagName.OBJECT:
	case w_.dom.TagName.PARAM:
	case w_.dom.TagName.SCRIPT:
	case w_.dom.TagName.STYLE:
		return w_d
	}
	return w_b
};
w_.dom.appendChild = function(a, b) {
	a.appendChild(b)
};
w_.dom.Ab = function(a) {
	for ( var b; b = a.firstChild;)
		a.removeChild(b)
};
w_.dom.Rd = function(a, b) {
	b.parentNode && b.parentNode.insertBefore(a, b)
};
w_.dom.Qd = function(a, b) {
	b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
};
w_.dom.removeNode = function(a) {
	return a && a.parentNode ? a.parentNode.removeChild(a) : w_c
};
w_.dom.replaceNode = function(a, b) {
	var c = b.parentNode;
	c && c.replaceChild(a, b)
};
w_.dom.od = function(a) {
	var b, c = a.parentNode;
	if (c && c.nodeType != w_.dom.NodeType.DOCUMENT_FRAGMENT)
		if (a.removeNode)
			return a.removeNode(w_d);
		else {
			for (; b = a.firstChild;)
				c.insertBefore(b, a);
			return w_.dom.removeNode(a)
		}
};
w_.dom.sd = function(a) {
	return w_.dom.hc(a.firstChild, w_b)
};
w_.dom.ud = function(a) {
	return w_.dom.hc(a.lastChild, w_d)
};
w_.dom.xd = function(a) {
	return w_.dom.hc(a.nextSibling, w_b)
};
w_.dom.Bd = function(a) {
	return w_.dom.hc(a.previousSibling, w_d)
};
w_.dom.hc = function(a, b) {
	for (; a && a.nodeType != w_.dom.NodeType.ELEMENT;)
		a = b ? a.nextSibling : a.previousSibling;
	return a
};
w_.dom.tc = function(a) {
	return w_.isObject(a) && a.nodeType > 0
};
w_.dom.Og = w_.userAgent.WEBKIT
		&& w_.userAgent.compare(w_.userAgent.VERSION, "521") <= 0;
w_.dom.contains = function(a, b) {
	if (typeof a.contains != "undefined" && !w_.dom.Og
			&& b.nodeType == w_.dom.NodeType.ELEMENT)
		return a == b || a.contains(b);
	if (typeof a.compareDocumentPosition != "undefined")
		return a == b || Boolean(a.compareDocumentPosition(b) & 16);
	for (; b && a != b;)
		b = b.parentNode;
	return b == a
};
w_.dom.compareNodeOrder = function(a, b) {
	if (a == b)
		return 0;
	if (a.compareDocumentPosition)
		return a.compareDocumentPosition(b) & 2 ? 1 : -1;
	if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
		var c = a.nodeType == w_.dom.NodeType.ELEMENT, d = b.nodeType == w_.dom.NodeType.ELEMENT;
		if (c && d)
			return a.sourceIndex - b.sourceIndex;
		else {
			var e = a.parentNode, f = b.parentNode;
			if (e == f)
				return w_.dom.xf(a, b);
			if (!c && w_.dom.contains(e, b))
				return -1 * w_.dom.wf(a, b);
			if (!d && w_.dom.contains(f, a))
				return w_.dom.wf(b, a);
			return (c ? a.sourceIndex : e.sourceIndex)
					- (d ? b.sourceIndex : f.sourceIndex)
		}
	}
	var g = w_.dom.V(a), h, i;
	h = g.createRange();
	h.selectNode(a);
	h.collapse(w_b);
	i = g.createRange();
	i.selectNode(b);
	i.collapse(w_b);
	return h.compareBoundaryPoints(w_.global.Range.START_TO_END, i)
};
w_.dom.wf = function(a, b) {
	var c = a.parentNode;
	if (c == b)
		return -1;
	for ( var d = b; d.parentNode != c;)
		d = d.parentNode;
	return w_.dom.xf(d, a)
};
w_.dom.xf = function(a, b) {
	for ( var c = b; c = c.previousSibling;)
		if (c == a)
			return -1;
	return 1
};
w_.dom.findCommonAncestor = function() {
	var a, b = arguments.length;
	if (b) {
		if (b == 1)
			return arguments[0]
	} else
		return w_c;
	var c = [], d = Infinity;
	for (a = 0; a < b; a++) {
		for ( var e = [], f = arguments[a]; f;) {
			e.unshift(f);
			f = f.parentNode
		}
		c.push(e);
		d = Math.min(d, e.length)
	}
	var g = w_c;
	for (a = 0; a < d; a++) {
		for ( var h = c[0][a], i = 1; i < b; i++)
			if (h != c[i][a])
				return g;
		g = h
	}
	return g
};
w_.dom.V = function(a) {
	return a.nodeType == w_.dom.NodeType.DOCUMENT ? a : a.ownerDocument
			|| a.document
};
w_.dom.fc = function(a) {
	var b;
	return b = w_.userAgent.WEBKIT ? a.document || a.contentWindow.document
			: a.contentDocument || a.contentWindow.document
};
w_.dom.td = function(a) {
	return a.contentWindow || w_.dom.Gd(w_.dom.fc(a))
};
w_.dom.ee = function(a, b) {
	if ("textContent" in a)
		a.textContent = b;
	else if (a.firstChild && a.firstChild.nodeType == w_.dom.NodeType.TEXT) {
		for (; a.lastChild != a.firstChild;)
			a.removeChild(a.lastChild);
		a.firstChild.data = b
	} else {
		w_.dom.Ab(a);
		var c = w_.dom.V(a);
		a.appendChild(c.createTextNode(b))
	}
};
w_.dom.getOuterHtml = function(a) {
	if ("outerHTML" in a)
		return a.outerHTML;
	else {
		var b = w_.dom.V(a), c = b.createElement("div");
		c.appendChild(a.cloneNode(w_b));
		return c.innerHTML
	}
};
w_.dom.ld = function(a, b) {
	var c = [], d = w_.dom.nd(a, b, c, w_b);
	return d ? c[0] : undefined
};
w_.dom.md = function(a, b) {
	var c = [];
	w_.dom.nd(a, b, c, w_d);
	return c
};
w_.dom.nd = function(a, b, c, d) {
	if (a != w_c)
		for ( var e = 0, f; f = a.childNodes[e]; e++) {
			if (b(f)) {
				c.push(f);
				if (d)
					return w_b
			}
			if (w_.dom.nd(f, b, c, d))
				return w_b
		}
	return w_d
};
w_.dom.af = {
	SCRIPT : 1,
	STYLE : 1,
	HEAD : 1,
	IFRAME : 1,
	OBJECT : 1
};
w_.dom.Ob = {
	IMG : " ",
	BR : "\n"
};
w_.dom.isFocusableTabIndex = function(a) {
	var b = a.getAttributeNode("tabindex");
	if (b && b.specified) {
		var c = a.tabIndex;
		return w_.isNumber(c) && c >= 0
	}
	return w_d
};
w_.dom.setFocusableTabIndex = function(a, b) {
	if (b)
		a.tabIndex = 0;
	else
		a.removeAttribute("tabIndex")
};
w_.dom.wb = function(a) {
	var b;
	if (w_.userAgent.IE && "innerText" in a)
		b = w_.string.canonicalizeNewlines(a.innerText);
	else {
		var c = [];
		w_.dom.Cd(a, c, w_b);
		b = c.join("")
	}
	b = b.replace(/\xAD/g, "");
	b = b.replace(/ +/g, " ");
	if (b != " ")
		b = b.replace(/^\s*/, "");
	return b
};
w_.dom.getRawTextContent = function(a) {
	var b = [];
	w_.dom.Cd(a, b, w_d);
	return b.join("")
};
w_.dom.Cd = function(a, b, c) {
	if (!(a.nodeName in w_.dom.af))
		if (a.nodeType == w_.dom.NodeType.TEXT)
			c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b
					.push(a.nodeValue);
		else if (a.nodeName in w_.dom.Ob)
			b.push(w_.dom.Ob[a.nodeName]);
		else
			for ( var d = a.firstChild; d;) {
				w_.dom.Cd(d, b, c);
				d = d.nextSibling
			}
};
w_.dom.yd = function(a) {
	return w_.dom.wb(a).length
};
w_.dom.zd = function(a, b) {
	for ( var c = b || w_.dom.V(a).body, d = []; a && a != c;) {
		for ( var e = a; e = e.previousSibling;)
			d.unshift(w_.dom.wb(e));
		a = a.parentNode
	}
	return w_.string.trimLeft(d.join("")).replace(/ +/g, " ").length
};
w_.dom.getNodeAtOffset = function(a, b, c) {
	for ( var d = [ a ], e = 0, f; d.length > 0 && e < b;) {
		f = d.pop();
		if (!(f.nodeName in w_.dom.af))
			if (f.nodeType == w_.dom.NodeType.TEXT) {
				var g = f.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g,
						" ");
				e += g.length
			} else if (f.nodeName in w_.dom.Ob)
				e += w_.dom.Ob[f.nodeName].length;
			else
				for ( var h = f.childNodes.length - 1; h >= 0; h--)
					d.push(f.childNodes[h])
	}
	if (w_.isObject(c)) {
		c.remainder = f ? f.nodeValue.length + b - e - 1 : 0;
		c.node = f
	}
	return f
};
w_.dom.isNodeList = function(a) {
	if (a && typeof a.length == "number")
		if (w_.isObject(a))
			return typeof a.item == "function" || typeof a.item == "string";
		else if (w_.isFunction(a))
			return typeof a.item == "function";
	return w_d
};
w_.dom.pd = function(a, b, c) {
	return w_.dom.cc(a, function(d) {
		return (!b || d.nodeName == b) && (!c || w_.dom.classes.has(d, c))
	}, w_b)
};
w_.dom.cc = function(a, b, c, d) {
	if (!c)
		a = a.parentNode;
	for ( var e = d == w_c, f = 0; a && (e || f <= d);) {
		if (b(a))
			return a;
		a = a.parentNode;
		f++
	}
	return w_c
};
w_.dom.DomHelper = function(a) {
	this.Z = a || w_.global.document || document
};
w_.dom.DomHelper.prototype.dc = w_.dom.dc;
w_.dom.DomHelper.prototype.Pf = function() {
	return this.Z
};
w_.dom.DomHelper.prototype.ub = function(a) {
	return w_.isString(a) ? this.Z.getElementById(a) : a
};
w_.dom.DomHelper.prototype.le = w_.dom.DomHelper.prototype.ub;
w_.dom.DomHelper.prototype.Xa = function(a, b, c) {
	return w_.dom.Uf(this.Z, a, b, c)
};
w_.dom.DomHelper.prototype.me = w_.dom.DomHelper.prototype.Xa;
w_.dom.DomHelper.prototype.Eb = w_.dom.Eb;
w_.dom.DomHelper.prototype.Dd = function(a) {
	return w_.dom.Dd(a || this.pc())
};
w_.dom.DomHelper.prototype.Qf = function() {
	return w_.dom.Rf(this.pc())
};
w_.dom.DomHelper.prototype.s = function() {
	return w_.dom.yf(this.Z, arguments)
};
w_.dom.DomHelper.prototype.ne = w_.dom.DomHelper.prototype.s;
w_.dom.DomHelper.prototype.createElement = function(a) {
	return this.Z.createElement(a)
};
w_.dom.DomHelper.prototype.createTextNode = function(a) {
	return this.Z.createTextNode(a)
};
w_.dom.DomHelper.prototype.jg = function(a) {
	return w_.dom.kg(this.Z, a)
};
w_.dom.DomHelper.prototype.Nf = function() {
	return this.rc() ? "CSS1Compat" : "BackCompat"
};
w_.dom.DomHelper.prototype.rc = function() {
	return w_.dom.Za(this.Z)
};
w_.dom.DomHelper.prototype.pc = function() {
	return w_.dom.Gd(this.Z)
};
w_.dom.DomHelper.prototype.Sf = function() {
	return w_.dom.rd(this.Z)
};
w_.dom.DomHelper.prototype.qd = function() {
	return w_.dom.Tf(this.Z)
};
w_.dom.DomHelper.prototype.appendChild = w_.dom.appendChild;
w_.dom.DomHelper.prototype.Ab = w_.dom.Ab;
w_.dom.DomHelper.prototype.Rd = w_.dom.Rd;
w_.dom.DomHelper.prototype.Qd = w_.dom.Qd;
w_.dom.DomHelper.prototype.removeNode = w_.dom.removeNode;
w_.dom.DomHelper.prototype.replaceNode = w_.dom.replaceNode;
w_.dom.DomHelper.prototype.od = w_.dom.od;
w_.dom.DomHelper.prototype.sd = w_.dom.sd;
w_.dom.DomHelper.prototype.ud = w_.dom.ud;
w_.dom.DomHelper.prototype.xd = w_.dom.xd;
w_.dom.DomHelper.prototype.Bd = w_.dom.Bd;
w_.dom.DomHelper.prototype.tc = w_.dom.tc;
w_.dom.DomHelper.prototype.contains = w_.dom.contains;
w_.dom.DomHelper.prototype.V = w_.dom.V;
w_.dom.DomHelper.prototype.fc = w_.dom.fc;
w_.dom.DomHelper.prototype.td = w_.dom.td;
w_.dom.DomHelper.prototype.ee = w_.dom.ee;
w_.dom.DomHelper.prototype.ld = w_.dom.ld;
w_.dom.DomHelper.prototype.md = w_.dom.md;
w_.dom.DomHelper.prototype.wb = w_.dom.wb;
w_.dom.DomHelper.prototype.yd = w_.dom.yd;
w_.dom.DomHelper.prototype.zd = w_.dom.zd;
w_.dom.DomHelper.prototype.pd = w_.dom.pd;
w_.dom.DomHelper.prototype.cc = w_.dom.cc;
w_.dom.xml = {};
w_.dom.xml.MAX_XML_SIZE_KB = 2048;
w_.dom.xml.MAX_ELEMENT_DEPTH = 256;
w_.dom.xml.createDocument = function(a, b) {
	if (b && !a)
		w_a(Error("Can't create document with namespace and no root tag"));
	if (document.implementation && document.implementation.createDocument)
		return document.implementation.createDocument(b || "", a || "", w_c);
	else if (typeof ActiveXObject != "undefined") {
		var c = w_.dom.xml.Af();
		if (c) {
			if (a)
				c
						.appendChild(c.createNode(w_.dom.NodeType.ELEMENT, a, b
								|| ""));
			return c
		}
	}
	w_a(Error("Your browser does not support creating new documents"))
};
w_.dom.xml.loadXml = function(a) {
	if (typeof DOMParser != "undefined")
		return (new DOMParser).parseFromString(a, "application/xml");
	else if (typeof ActiveXObject != "undefined") {
		var b = w_.dom.xml.Af();
		b.loadXML(a);
		return b
	}
	w_a(Error("Your browser does not support loading xml documents"))
};
w_.dom.xml.serialize = function(a) {
	if (typeof XMLSerializer != "undefined")
		return (new XMLSerializer).serializeToString(a);
	var b = a.xml;
	if (b)
		return b;
	w_a(Error("Your browser does not support serializing XML documents"))
};
w_.dom.xml.selectSingleNode = function(a, b) {
	if (typeof a.selectSingleNode != "undefined") {
		var c = w_.dom.V(a);
		typeof c.setProperty != "undefined"
				&& c.setProperty("SelectionLanguage", "XPath");
		return a.selectSingleNode(b)
	} else if (document.implementation.hasFeature("XPath", "3.0")) {
		c = w_.dom.V(a);
		var d = c.createNSResolver(c.documentElement), e = c.evaluate(b, a, d,
				XPathResult.FIRST_ORDERED_NODE_TYPE, w_c);
		return e.singleNodeValue
	}
	return w_c
};
w_.dom.xml.selectNodes = function(a, b) {
	if (typeof a.selectNodes != "undefined") {
		var c = w_.dom.V(a);
		typeof c.setProperty != "undefined"
				&& c.setProperty("SelectionLanguage", "XPath");
		return a.selectNodes(b)
	} else if (document.implementation.hasFeature("XPath", "3.0")) {
		c = w_.dom.V(a);
		for ( var d = c.createNSResolver(c.documentElement), e = c.evaluate(b,
				a, d, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, w_c), f = [], g = e.snapshotLength, h = 0; h < g; h++)
			f.push(e.snapshotItem(h));
		return f
	} else
		return []
};
w_.dom.xml.Af = function() {
	var a = new ActiveXObject("MSXML2.DOMDocument");
	if (a) {
		a.resolveExternals = w_d;
		a.validateOnParse = w_d;
		a.setProperty("ProhibitDTD", w_b);
		a.setProperty("MaxXMLSize", w_.dom.xml.MAX_XML_SIZE_KB);
		a.setProperty("MaxElementDepth", w_.dom.xml.MAX_ELEMENT_DEPTH)
	}
	return a
};
w_.iter = {};
w_.iter.Iterable = w_.typedef;
w_.iter.StopIteration = "StopIteration" in w_.global ? w_.global.StopIteration
		: Error("StopIteration");
w_.iter.Iterator = function() {
};
w_.iter.Iterator.prototype.next = function() {
	w_a(w_.iter.StopIteration)
};
w_.iter.Iterator.prototype.__iterator__ = function() {
	return this
};
w_.iter.toIterator = function(a) {
	if (a instanceof w_.iter.Iterator)
		return a;
	if (typeof a.__iterator__ == "function")
		return a.__iterator__(w_d);
	if (w_.isArrayLike(a)) {
		var b = 0, c = new w_.iter.Iterator;
		c.next = function() {
			for (; 1;) {
				if (b >= a.length)
					w_a(w_.iter.StopIteration);
				if (b in a)
					return a[b++];
				else
					b++
			}
		};
		return c
	}
	w_a(Error("Not implemented"))
};
w_.iter.forEach = function(a, b, c) {
	if (w_.isArrayLike(a))
		try {
			w_.array.forEach(a, b, c)
		} catch (d) {
			if (d !== w_.iter.StopIteration)
				w_a(d)
		}
	else {
		a = w_.iter.toIterator(a);
		try {
			for (; 1;)
				b.call(c, a.next(), undefined, a)
		} catch (e) {
			if (e !== w_.iter.StopIteration)
				w_a(e)
		}
	}
};
w_.iter.filter = function(a, b, c) {
	a = w_.iter.toIterator(a);
	var d = new w_.iter.Iterator;
	d.next = function() {
		for (; 1;) {
			var e = a.next();
			if (b.call(c, e, undefined, a))
				return e
		}
	};
	return d
};
w_.iter.range = function(a, b, c) {
	var d = 0, e = a, f = c || 1;
	if (arguments.length > 1) {
		d = a;
		e = b
	}
	if (f == 0)
		w_a(Error("Range step argument must not be zero"));
	var g = new w_.iter.Iterator;
	g.next = function() {
		if (f > 0 && d >= e || f < 0 && d <= e)
			w_a(w_.iter.StopIteration);
		var h = d;
		d += f;
		return h
	};
	return g
};
w_.iter.join = function(a, b) {
	return w_.iter.toArray(a).join(b)
};
w_.iter.map = function(a, b, c) {
	a = w_.iter.toIterator(a);
	var d = new w_.iter.Iterator;
	d.next = function() {
		for (; 1;) {
			var e = a.next();
			return b.call(c, e, undefined, a)
		}
	};
	return d
};
w_.iter.reduce = function(a, b, c, d) {
	var e = c;
	w_.iter.forEach(a, function(f) {
		e = b.call(d, e, f)
	});
	return e
};
w_.iter.some = function(a, b, c) {
	a = w_.iter.toIterator(a);
	try {
		for (; 1;)
			if (b.call(c, a.next(), undefined, a))
				return w_b
	} catch (d) {
		if (d !== w_.iter.StopIteration)
			w_a(d)
	}
	return w_d
};
w_.iter.every = function(a, b, c) {
	a = w_.iter.toIterator(a);
	try {
		for (; 1;)
			if (!b.call(c, a.next(), undefined, a))
				return w_d
	} catch (d) {
		if (d !== w_.iter.StopIteration)
			w_a(d)
	}
	return w_b
};
w_.iter.chain = function() {
	var a = arguments, b = a.length, c = 0, d = new w_.iter.Iterator;
	d.next = function() {
		try {
			if (c >= b)
				w_a(w_.iter.StopIteration);
			var e = w_.iter.toIterator(a[c]);
			return e.next()
		} catch (f) {
			if (f !== w_.iter.StopIteration || c >= b)
				w_a(f);
			else {
				c++;
				return this.next()
			}
		}
	};
	return d
};
w_.iter.dropWhile = function(a, b, c) {
	a = w_.iter.toIterator(a);
	var d = new w_.iter.Iterator, e = w_b;
	d.next = function() {
		for (; 1;) {
			var f = a.next();
			if (!(e && b.call(c, f, undefined, a))) {
				e = w_d;
				return f
			}
		}
	};
	return d
};
w_.iter.takeWhile = function(a, b, c) {
	a = w_.iter.toIterator(a);
	var d = new w_.iter.Iterator, e = w_b;
	d.next = function() {
		for (; 1;)
			if (e) {
				var f = a.next();
				if (b.call(c, f, undefined, a))
					return f;
				else
					e = w_d
			} else
				w_a(w_.iter.StopIteration)
	};
	return d
};
w_.iter.toArray = function(a) {
	if (w_.isArrayLike(a))
		return w_.array.toArray(a);
	a = w_.iter.toIterator(a);
	var b = [];
	w_.iter.forEach(a, function(c) {
		b.push(c)
	});
	return b
};
w_.iter.equals = function(a, b) {
	a = w_.iter.toIterator(a);
	b = w_.iter.toIterator(b);
	var c, d;
	try {
		for (; 1;) {
			c = d = w_d;
			var e = a.next();
			c = w_b;
			var f = b.next();
			d = w_b;
			if (e != f)
				return w_d
		}
	} catch (g) {
		if (g !== w_.iter.StopIteration)
			w_a(g);
		else {
			if (c && !d)
				return w_d;
			if (!d)
				try {
					b.next();
					return w_d
				} catch (h) {
					if (h !== w_.iter.StopIteration)
						w_a(h);
					return w_b
				}
		}
	}
	return w_d
};
w_.iter.nextOrValue = function(a, b) {
	try {
		return w_.iter.toIterator(a).next()
	} catch (c) {
		if (c != w_.iter.StopIteration)
			w_a(c);
		return b
	}
};
w_.structs = {};
w_.structs.T = function(a) {
	if (typeof a.T == "function")
		return a.T();
	if (w_.isArrayLike(a) || w_.isString(a))
		return a.length;
	return w_.object.T(a)
};
w_.structs.p = function(a) {
	if (typeof a.p == "function")
		return a.p();
	if (w_.isString(a))
		return a.split("");
	if (w_.isArrayLike(a)) {
		for ( var b = [], c = a.length, d = 0; d < c; d++)
			b.push(a[d]);
		return b
	}
	return w_.object.p(a)
};
w_.structs.m = function(a) {
	if (typeof a.m == "function")
		return a.m();
	if (typeof a.p == "function")
		return undefined;
	if (w_.isArrayLike(a) || w_.isString(a)) {
		for ( var b = [], c = a.length, d = 0; d < c; d++)
			b.push(d);
		return b
	}
	return w_.object.m(a)
};
w_.structs.contains = function(a, b) {
	if (typeof a.contains == "function")
		return a.contains(b);
	if (typeof a.ga == "function")
		return a.ga(b);
	if (w_.isArrayLike(a) || w_.isString(a))
		return w_.array.contains(a, b);
	return w_.object.ga(a, b)
};
w_.structs.z = function(a) {
	if (typeof a.z == "function")
		return a.z();
	if (w_.isArrayLike(a) || w_.isString(a))
		return w_.array.z(a);
	return w_.object.z(a)
};
w_.structs.clear = function(a) {
	if (typeof a.clear == "function")
		a.clear();
	else
		w_.isArrayLike(a) ? w_.array.clear(a) : w_.object.clear(a)
};
w_.structs.forEach = function(a, b, c) {
	if (typeof a.forEach == "function")
		a.forEach(b, c);
	else if (w_.isArrayLike(a) || w_.isString(a))
		w_.array.forEach(a, b, c);
	else
		for ( var d = w_.structs.m(a), e = w_.structs.p(a), f = e.length, g = 0; g < f; g++)
			b.call(c, e[g], d && d[g], a)
};
w_.structs.filter = function(a, b, c) {
	if (typeof a.filter == "function")
		return a.filter(b, c);
	if (w_.isArrayLike(a) || w_.isString(a))
		return w_.array.filter(a, b, c);
	var d, e = w_.structs.m(a), f = w_.structs.p(a), g = f.length;
	if (e) {
		d = {};
		for ( var h = 0; h < g; h++)
			if (b.call(c, f[h], e[h], a))
				d[e[h]] = f[h]
	} else {
		d = [];
		for (h = 0; h < g; h++)
			b.call(c, f[h], undefined, a) && d.push(f[h])
	}
	return d
};
w_.structs.map = function(a, b, c) {
	if (typeof a.map == "function")
		return a.map(b, c);
	if (w_.isArrayLike(a) || w_.isString(a))
		return w_.array.map(a, b, c);
	var d, e = w_.structs.m(a), f = w_.structs.p(a), g = f.length;
	if (e) {
		d = {};
		for ( var h = 0; h < g; h++)
			d[e[h]] = b.call(c, f[h], e[h], a)
	} else {
		d = [];
		for (h = 0; h < g; h++)
			d[h] = b.call(c, f[h], undefined, a)
	}
	return d
};
w_.structs.some = function(a, b, c) {
	if (typeof a.some == "function")
		return a.some(b, c);
	if (w_.isArrayLike(a) || w_.isString(a))
		return w_.array.some(a, b, c);
	for ( var d = w_.structs.m(a), e = w_.structs.p(a), f = e.length, g = 0; g < f; g++)
		if (b.call(c, e[g], d && d[g], a))
			return w_b;
	return w_d
};
w_.structs.every = function(a, b, c) {
	if (typeof a.every == "function")
		return a.every(b, c);
	if (w_.isArrayLike(a) || w_.isString(a))
		return w_.array.every(a, b, c);
	for ( var d = w_.structs.m(a), e = w_.structs.p(a), f = e.length, g = 0; g < f; g++)
		if (!b.call(c, e[g], d && d[g], a))
			return w_d;
	return w_b
};
w_.structs.Map = function(a) {
	this.G = {};
	this.r = [];
	var b = arguments.length;
	if (b > 1) {
		if (b % 2)
			w_a(Error("Uneven number of arguments"));
		for ( var c = 0; c < b; c += 2)
			this.set(arguments[c], arguments[c + 1])
	} else
		a && this.gf(a)
};
w_.structs.Map.prototype.h = 0;
w_.structs.Map.prototype.fb = 0;
w_.structs.Map.prototype.T = function() {
	return this.h
};
w_.structs.Map.prototype.p = function() {
	this.Oa();
	for ( var a = [], b = 0; b < this.r.length; b++) {
		var c = this.r[b];
		a.push(this.G[c])
	}
	return a
};
w_.structs.Map.prototype.m = function() {
	this.Oa();
	return this.r.concat()
};
w_.structs.Map.prototype.w = function(a) {
	return w_.structs.Map.Ba(this.G, a)
};
w_.structs.Map.prototype.ga = function(a) {
	for ( var b = 0; b < this.r.length; b++) {
		var c = this.r[b];
		if (w_.structs.Map.Ba(this.G, c) && this.G[c] == a)
			return w_b
	}
	return w_d
};
w_.structs.Map.prototype.equals = function(a, b) {
	if (this === a)
		return w_b;
	if (this.h != a.T())
		return w_d;
	var c = b || w_.structs.Map.defaultEquals;
	this.Oa();
	for ( var d, e = 0; d = this.r[e]; e++)
		if (!c(this.get(d), a.get(d)))
			return w_d;
	return w_b
};
w_.structs.Map.defaultEquals = function(a, b) {
	return a === b
};
w_.structs.Map.prototype.z = function() {
	return this.h == 0
};
w_.structs.Map.prototype.clear = function() {
	this.G = {};
	this.fb = this.h = this.r.length = 0
};
w_.structs.Map.prototype.remove = function(a) {
	if (w_.structs.Map.Ba(this.G, a)) {
		delete this.G[a];
		this.h--;
		this.fb++;
		this.r.length > 2 * this.h && this.Oa();
		return w_b
	}
	return w_d
};
w_.structs.Map.prototype.Oa = function() {
	if (this.h != this.r.length) {
		for ( var a = 0, b = 0; a < this.r.length;) {
			var c = this.r[a];
			if (w_.structs.Map.Ba(this.G, c))
				this.r[b++] = c;
			a++
		}
		this.r.length = b
	}
	if (this.h != this.r.length) {
		var d = {};
		for (b = a = 0; a < this.r.length;) {
			c = this.r[a];
			if (!w_.structs.Map.Ba(d, c)) {
				this.r[b++] = c;
				d[c] = 1
			}
			a++
		}
		this.r.length = b
	}
};
w_.structs.Map.prototype.get = function(a, b) {
	if (w_.structs.Map.Ba(this.G, a))
		return this.G[a];
	return b
};
w_.structs.Map.prototype.set = function(a, b) {
	if (!w_.structs.Map.Ba(this.G, a)) {
		this.h++;
		this.r.push(a);
		this.fb++
	}
	this.G[a] = b
};
w_.structs.Map.prototype.gf = function(a) {
	var b, c;
	if (a instanceof w_.structs.Map) {
		b = a.m();
		c = a.p()
	} else {
		b = w_.object.m(a);
		c = w_.object.p(a)
	}
	for ( var d = 0; d < b.length; d++)
		this.set(b[d], c[d])
};
w_.structs.Map.prototype.clone = function() {
	return new w_.structs.Map(this)
};
w_.structs.Map.prototype.transpose = function() {
	for ( var a = new w_.structs.Map, b = 0; b < this.r.length; b++) {
		var c = this.r[b], d = this.G[c];
		a.set(d, c)
	}
	return a
};
w_.structs.Map.prototype.__iterator__ = function(a) {
	this.Oa();
	var b = 0, c = this.r, d = this.G, e = this.fb, f = this, g = new w_.iter.Iterator;
	g.next = function() {
		for (; 1;) {
			if (e != f.fb)
				w_a(Error("The map has changed since the iterator was created"));
			if (b >= c.length)
				w_a(w_.iter.StopIteration);
			var h = c[b++];
			return a ? h : d[h]
		}
	};
	return g
};
w_.structs.Map.Ba = function(a, b) {
	return Object.prototype.hasOwnProperty.call(a, b)
};
w_.structs.Map.T = function(a) {
	return w_.structs.T(a)
};
w_.structs.Map.p = function(a) {
	return w_.structs.p(a)
};
w_.structs.Map.m = function(a) {
	if (typeof a.m == "function")
		return a.m();
	var b = [];
	if (w_.isArrayLike(a))
		for ( var c = 0; c < a.length; c++)
			b.push(c);
	else
		return w_.object.m(a);
	return b
};
w_.structs.Map.w = function(a, b) {
	if (typeof a.w == "function")
		return a.w(b);
	if (w_.isArrayLike(a))
		return Number(b) < a.length;
	return w_.object.w(a, b)
};
w_.structs.Map.ga = function(a, b) {
	return w_.structs.contains(a, b)
};
w_.structs.Map.z = function(a) {
	return w_.structs.z(a)
};
w_.structs.Map.clear = function(a) {
	w_.structs.clear(a)
};
w_.structs.Map.remove = function(a, b) {
	if (typeof a.remove == "function")
		return a.remove(b);
	if (w_.isArrayLike(a))
		return w_.array.removeAt(a, Number(b));
	return w_.object.remove(a, b)
};
w_.structs.Map.add = function(a, b, c) {
	if (typeof a.add == "function")
		a.add(b, c);
	else if (w_.structs.Map.w(a, b))
		w_a(Error('The collection already contains the key "' + b + '"'));
	else
		w_.structs.Map.set(a, b, c)
};
w_.structs.Map.get = function(a, b, c) {
	if (typeof a.get == "function")
		return a.get(b, c);
	if (w_.structs.Map.w(a, b))
		return a[b];
	return c
};
w_.structs.Map.set = function(a, b, c) {
	if (typeof a.set == "function")
		a.set(b, c);
	else
		a[b] = c
};
w_.asserts = {};
w_.asserts.assert = function(a, b) {
	if (w_.DEBUG && !a)
		w_a(Error("Assertion failed" + (b ? ": " + b : "")))
};
w_.asserts.fail = function(a) {
	if (w_.DEBUG)
		w_a(Error("Failure" + (a ? ": " + a : "")))
};
w_.uri = {};
w_.uri.utils = {};
w_.uri.utils.jb = {
	AMPERSAND : 38,
	EQUAL : 61,
	HASH : 35,
	QUESTION : 63
};
w_.uri.utils.buildFromEncodedParts = function(a, b, c, d, e, f, g) {
	var h = [];
	a && h.push(a, ":");
	if (c) {
		h.push("//");
		b && h.push(b, "@");
		h.push(c);
		d && h.push(":", d)
	}
	e && h.push(e);
	f && h.push("?", f);
	g && h.push("#", g);
	return h.join("")
};
w_.uri.utils.Uh = /^(?:([^:\/?#]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
w_.uri.utils.ComponentIndex = {
	SCHEME : 1,
	USER_INFO : 2,
	DOMAIN : 3,
	PORT : 4,
	PATH : 5,
	QUERY_DATA : 6,
	FRAGMENT : 7
};
w_.uri.utils.split = function(a) {
	return a.match(w_.uri.utils.Uh)
};
w_.uri.utils.Xb = function(a) {
	return a && decodeURIComponent(a)
};
w_.uri.utils.Wa = function(a, b) {
	return w_.uri.utils.split(b)[a] || w_c
};
w_.uri.utils.kc = function(a) {
	return w_.uri.utils.Wa(w_.uri.utils.ComponentIndex.SCHEME, a)
};
w_.uri.utils.getUserInfoEncoded = function(a) {
	return w_.uri.utils.Wa(w_.uri.utils.ComponentIndex.USER_INFO, a)
};
w_.uri.utils.nc = function(a) {
	return w_.uri.utils.Xb(w_.uri.utils.getUserInfoEncoded(a))
};
w_.uri.utils.getDomainEncoded = function(a) {
	return w_.uri.utils.Wa(w_.uri.utils.ComponentIndex.DOMAIN, a)
};
w_.uri.utils.tb = function(a) {
	return w_.uri.utils.Xb(w_.uri.utils.getDomainEncoded(a))
};
w_.uri.utils.vb = function(a) {
	return Number(w_.uri.utils.Wa(w_.uri.utils.ComponentIndex.PORT, a)) || w_c
};
w_.uri.utils.getPathEncoded = function(a) {
	return w_.uri.utils.Wa(w_.uri.utils.ComponentIndex.PATH, a)
};
w_.uri.utils.Aa = function(a) {
	return w_.uri.utils.Xb(w_.uri.utils.getPathEncoded(a))
};
w_.uri.utils.jc = function(a) {
	return w_.uri.utils.Wa(w_.uri.utils.ComponentIndex.QUERY_DATA, a)
};
w_.uri.utils.getFragmentEncoded = function(a) {
	var b = a.indexOf("#");
	return b < 0 ? w_c : a.substr(b + 1)
};
w_.uri.utils.ec = function(a) {
	return w_.uri.utils.Xb(w_.uri.utils.getFragmentEncoded(a))
};
w_.uri.utils.getHost = function(a) {
	var b = w_.uri.utils.split(a);
	return w_.uri.utils.buildFromEncodedParts(
			b[w_.uri.utils.ComponentIndex.SCHEME],
			b[w_.uri.utils.ComponentIndex.USER_INFO],
			b[w_.uri.utils.ComponentIndex.DOMAIN],
			b[w_.uri.utils.ComponentIndex.PORT])
};
w_.uri.utils.getPathAndAfter = function(a) {
	var b = w_.uri.utils.split(a);
	return w_.uri.utils.buildFromEncodedParts(w_c, w_c, w_c, w_c,
			b[w_.uri.utils.ComponentIndex.PATH],
			b[w_.uri.utils.ComponentIndex.QUERY_DATA],
			b[w_.uri.utils.ComponentIndex.FRAGMENT])
};
w_.uri.utils.removeFragment = function(a) {
	var b = a.indexOf("#");
	return b < 0 ? a : a.substr(0, b)
};
w_.uri.utils.haveSameDomain = function(a, b) {
	var c = w_.uri.utils.split(a), d = w_.uri.utils.split(b);
	return c[w_.uri.utils.ComponentIndex.DOMAIN] == d[w_.uri.utils.ComponentIndex.DOMAIN]
			&& c[w_.uri.utils.ComponentIndex.SCHEME] == d[w_.uri.utils.ComponentIndex.SCHEME]
			&& c[w_.uri.utils.ComponentIndex.PORT] == d[w_.uri.utils.ComponentIndex.PORT]
};
w_.uri.utils.mf = function() {
};
w_.uri.utils.Xc = function(a) {
	w_.uri.utils.mf(a[0]);
	if (a[1]) {
		var b = a[0].indexOf("?");
		if (b < 0)
			a[1] = "?";
		else if (b == a[0].length - 1)
			a[1] = ""
	}
	return a.join("")
};
w_.uri.utils.lf = function(a, b, c) {
	if (w_.isArray(b)) {
		b = b;
		for ( var d = 0; d < b.length; d++)
			c.push("&", a, "=", w_.string.urlEncode(b[d]))
	} else
		b != w_c && c.push("&", a, "=", w_.string.urlEncode(b))
};
w_.uri.utils.tf = function(a, b, c) {
	w_.asserts.assert((b.length - (c || 0)) % 2 == 0,
			"goog.uri.utils: Key/value lists must be even in length.");
	for ( var d = c || 0; d < b.length; d += 2)
		w_.uri.utils.lf(b[d], b[d + 1], a);
	return a
};
w_.uri.utils.buildQueryData = function(a, b) {
	var c = w_.uri.utils.tf( [], a, b);
	c[0] = "";
	return c.join("")
};
w_.uri.utils.sf = function(a, b) {
	for ( var c in b)
		w_.uri.utils.lf(c, b[c], a);
	return a
};
w_.uri.utils.buildQueryDataFromMap = function(a) {
	var b = w_.uri.utils.sf( [], a);
	b[0] = "";
	return b.join("")
};
w_.uri.utils.appendParams = function(a) {
	return w_.uri.utils.Xc(w_.uri.utils.tf( [ a ], arguments, 1))
};
w_.uri.utils.appendParamsFromMap = function(a, b) {
	return w_.uri.utils.Xc(w_.uri.utils.sf( [ a ], b))
};
w_.uri.utils.appendParam = function(a, b, c) {
	return w_.uri.utils.Xc( [ a, "&", b, "=", w_.string.urlEncode(c) ])
};
w_.uri.utils.bc = function(a, b, c, d) {
	for ( var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d;) {
		var g = a.charCodeAt(e - 1);
		if (g == w_.uri.utils.jb.AMPERSAND || g == w_.uri.utils.jb.QUESTION) {
			var h = a.charCodeAt(e + f);
			if (!h || h == w_.uri.utils.jb.EQUAL
					|| h == w_.uri.utils.jb.AMPERSAND
					|| h == w_.uri.utils.jb.HASH)
				return e
		}
		e += f + 1
	}
	return -1
};
w_.uri.utils.Md = /#|$/;
w_.uri.utils.hasParam = function(a, b) {
	return w_.uri.utils.bc(a, 0, b, a.search(w_.uri.utils.Md)) >= 0
};
w_.uri.utils.getParamValue = function(a, b) {
	var c = a.search(w_.uri.utils.Md), d = w_.uri.utils.bc(a, 0, b, c);
	if (d < 0)
		return w_c;
	else {
		var e = a.indexOf("&", d);
		if (e < 0 || e > c)
			e = c;
		d += b.length + 1;
		return w_.string.urlDecode(a.substr(d, e - d))
	}
};
w_.uri.utils.getParamValues = function(a, b) {
	for ( var c = a.search(w_.uri.utils.Md), d = 0, e, f = []; (e = w_.uri.utils
			.bc(a, d, b, c)) >= 0;) {
		d = a.indexOf("&", e);
		if (d < 0 || d > c)
			d = c;
		e += b.length + 1;
		f.push(w_.string.urlDecode(a.substr(e, d - e)))
	}
	return f
};
w_.uri.utils.Yh = /[?&]$/;
w_.uri.utils.removeParam = function(a, b) {
	w_.uri.utils.mf(a);
	for ( var c = a.length, d = 0, e, f = []; (e = w_.uri.utils.bc(a, d, b, c)) >= 0;) {
		f.push(a.substring(d, e));
		d = a.indexOf("&", e) + 1 || c
	}
	f.push(a.substr(d));
	return f.join("").replace(w_.uri.utils.Yh, "")
};
w_.Uri = function(a, b) {
	var c;
	if (a instanceof w_.Uri) {
		this.qa(b == w_c ? a.Vf() : b);
		this.Fb(a.kc());
		this.Gb(a.nc());
		this.Bb(a.tb());
		this.Db(a.vb());
		this.db(a.Aa());
		this.xc(a.jc().clone());
		this.Cb(a.ec())
	} else if (a && (c = w_.uri.utils.split(String(a)))) {
		this.qa(!!b);
		this.Fb(c[w_.uri.utils.ComponentIndex.SCHEME] || "", w_b);
		this.Gb(c[w_.uri.utils.ComponentIndex.USER_INFO] || "", w_b);
		this.Bb(c[w_.uri.utils.ComponentIndex.DOMAIN] || "", w_b);
		this.Db(c[w_.uri.utils.ComponentIndex.PORT]);
		this.db(c[w_.uri.utils.ComponentIndex.PATH] || "", w_b);
		this.de(c[w_.uri.utils.ComponentIndex.QUERY_DATA] || "", w_b);
		this.Cb(c[w_.uri.utils.ComponentIndex.FRAGMENT] || "", w_b)
	} else {
		this.qa(!!b);
		this.M = new w_.Uri.QueryData(w_c, this, this.$)
	}
};
w_.Uri.RANDOM_PARAM = "zx";
w_.Uri.prototype.da = "";
w_.Uri.prototype.La = "";
w_.Uri.prototype.xa = "";
w_.Uri.prototype.Ia = w_c;
w_.Uri.prototype.Ha = "";
w_.Uri.prototype.ya = "";
w_.Uri.prototype.ng = w_d;
w_.Uri.prototype.$ = w_d;
w_.Uri.prototype.toString = function() {
	if (this.Y)
		return this.Y;
	var a = [];
	this.da && a.push(w_.Uri.qb(this.da, w_.Uri.Eg), ":");
	if (this.xa) {
		a.push("//");
		this.La && a.push(w_.Uri.qb(this.La, w_.Uri.Eg), "@");
		a.push(w_.Uri.th(this.xa));
		this.Ia != w_c && a.push(":", String(this.vb()))
	}
	this.Ha && a.push(w_.Uri.qb(this.Ha, w_.Uri.Lh));
	var b = String(this.M);
	b && a.push("?", b);
	this.ya && a.push("#", w_.Uri.qb(this.ya, w_.Uri.Kh));
	return this.Y = a.join("")
};
w_.Uri.prototype.resolve = function(a) {
	var b = this.clone(), c = a.gg();
	if (c)
		b.Fb(a.kc());
	else
		c = a.hg();
	if (c)
		b.Gb(a.nc());
	else
		c = a.Kd();
	if (c)
		b.Bb(a.tb());
	else
		c = a.eg();
	var d = a.Aa();
	if (c)
		b.Db(a.vb());
	else if (c = a.Ld()) {
		if (d.charAt(0) != "/")
			if (this.Kd() && !this.Ld())
				d = "/" + d;
			else {
				var e = b.Aa().lastIndexOf("/");
				if (e != -1)
					d = b.Aa().substr(0, e + 1) + d
			}
		d = w_.Uri.removeDotSegments(d)
	}
	if (c)
		b.db(d);
	else
		c = a.fg();
	if (c)
		b.de(a.Of());
	else
		c = a.dg();
	c && b.Cb(a.ec());
	return b
};
w_.Uri.prototype.clone = function() {
	return w_.Uri.create(this.da, this.La, this.xa, this.Ia, this.Ha, this.M
			.clone(), this.ya, this.$)
};
w_.Uri.prototype.kc = function() {
	return this.da
};
w_.Uri.prototype.Fb = function(a, b) {
	this.ba();
	delete this.Y;
	if (this.da = b ? w_.Uri.Pa(a) : a)
		this.da = this.da.replace(/:$/, "");
	return this
};
w_.Uri.prototype.gg = function() {
	return !!this.da
};
w_.Uri.prototype.nc = function() {
	return this.La
};
w_.Uri.prototype.Gb = function(a, b) {
	this.ba();
	delete this.Y;
	this.La = b ? w_.Uri.Pa(a) : a;
	return this
};
w_.Uri.prototype.hg = function() {
	return !!this.La
};
w_.Uri.prototype.tb = function() {
	return this.xa
};
w_.Uri.prototype.Bb = function(a, b) {
	this.ba();
	delete this.Y;
	this.xa = b ? w_.Uri.Pa(a) : a;
	return this
};
w_.Uri.prototype.Kd = function() {
	return !!this.xa
};
w_.Uri.prototype.vb = function() {
	return this.Ia
};
w_.Uri.prototype.Db = function(a) {
	this.ba();
	delete this.Y;
	if (a) {
		a = Number(a);
		if (isNaN(a) || a < 0)
			w_a(Error("Bad port number " + a));
		this.Ia = a
	} else
		this.Ia = w_c;
	return this
};
w_.Uri.prototype.eg = function() {
	return this.Ia != w_c
};
w_.Uri.prototype.Aa = function() {
	return this.Ha
};
w_.Uri.prototype.db = function(a, b) {
	this.ba();
	delete this.Y;
	this.Ha = b ? w_.Uri.Pa(a) : a;
	return this
};
w_.Uri.prototype.Ld = function() {
	return !!this.Ha
};
w_.Uri.prototype.fg = function() {
	return this.M.toString() !== ""
};
w_.Uri.prototype.xc = function(a, b) {
	this.ba();
	delete this.Y;
	if (a instanceof w_.Uri.QueryData) {
		this.M = a;
		this.M.Hb = this;
		this.M.qa(this.$)
	} else {
		b || (a = w_.Uri.qb(a, w_.Uri.Mh));
		this.M = new w_.Uri.QueryData(a, this, this.$)
	}
	return this
};
w_.Uri.prototype.de = function(a, b) {
	return this.xc(a, b)
};
w_.Uri.prototype.Of = function() {
	return this.M.Ng()
};
w_.Uri.prototype.jc = function() {
	return this.M
};
w_.Uri.prototype.wc = function(a, b) {
	this.ba();
	delete this.Y;
	w_.isArray(b) || (b = [ String(b) ]);
	this.M.Lg(a, b);
	return this
};
w_.Uri.prototype.ec = function() {
	return this.ya
};
w_.Uri.prototype.Cb = function(a, b) {
	this.ba();
	delete this.Y;
	this.ya = b ? w_.Uri.Pa(a) : a;
	return this
};
w_.Uri.prototype.dg = function() {
	return !!this.ya
};
w_.Uri.prototype.removeParameter = function(a) {
	this.ba();
	this.M.remove(a);
	return this
};
w_.Uri.prototype.ba = function() {
	if (this.ng)
		w_a(Error("Tried to modify a read-only Uri"))
};
w_.Uri.prototype.qa = function(a) {
	this.$ = a;
	this.M && this.M.qa(a)
};
w_.Uri.prototype.Vf = function() {
	return this.$
};
w_.Uri.parse = function(a, b) {
	return a instanceof w_.Uri ? a.clone() : new w_.Uri(a, b)
};
w_.Uri.create = function(a, b, c, d, e, f, g, h) {
	var i = new w_.Uri(w_c, h);
	a && i.Fb(a);
	b && i.Gb(b);
	c && i.Bb(c);
	d && i.Db(d);
	e && i.db(e);
	f && i.xc(f);
	g && i.Cb(g);
	return i
};
w_.Uri.resolve = function(a, b) {
	a instanceof w_.Uri || (a = w_.Uri.parse(a));
	b instanceof w_.Uri || (b = w_.Uri.parse(b));
	return a.resolve(b)
};
w_.Uri.removeDotSegments = function(a) {
	if (a == ".." || a == ".")
		return "";
	else if (!w_.string.contains(a, "./") && !w_.string.contains(a, "/."))
		return a;
	else {
		for ( var b = w_.string.ge(a, "/"), c = a.split("/"), d = [], e = 0; e < c.length;) {
			var f = c[e++];
			if (f == ".")
				b && e == c.length && d.push("");
			else if (f == "..") {
				if (d.length > 1 || d.length == 1 && d[0] != "")
					d.pop();
				b && e == c.length && d.push("")
			} else {
				d.push(f);
				b = w_b
			}
		}
		return d.join("/")
	}
};
w_.Uri.Pa = function(a) {
	return a ? decodeURIComponent(a) : ""
};
w_.Uri.th = function(a) {
	if (w_.isString(a))
		return encodeURIComponent(a);
	return w_c
};
w_.Uri.sh = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
w_.Uri.qb = function(a, b) {
	var c = w_c;
	if (w_.isString(a)) {
		c = a;
		w_.Uri.sh.test(c) || (c = encodeURI(a));
		if (c.search(b) >= 0)
			c = c.replace(b, w_.Uri.rh)
	}
	return c
};
w_.Uri.rh = function(a) {
	var b = a.charCodeAt(0);
	return "%" + (b >> 4 & 15).toString(16) + (b & 15).toString(16)
};
w_.Uri.Eg = /[#\/\?@]/g;
w_.Uri.Lh = /[\#\?]/g;
w_.Uri.Mh = /[\#\?@]/g;
w_.Uri.Kh = /#/g;
w_.Uri.haveSameDomain = function(a, b) {
	var c = w_.uri.utils.split(a), d = w_.uri.utils.split(b);
	return c[w_.uri.utils.ComponentIndex.DOMAIN] == d[w_.uri.utils.ComponentIndex.DOMAIN]
			&& c[w_.uri.utils.ComponentIndex.PORT] == d[w_.uri.utils.ComponentIndex.PORT]
};
w_.Uri.QueryData = function(a, b, c) {
	this.ha = a || w_c;
	this.Hb = b || w_c;
	this.$ = !!c
};
w_.Uri.QueryData.prototype.R = function() {
	if (!this.j) {
		this.j = new w_.structs.Map;
		if (this.ha)
			for ( var a = this.ha.split("&"), b = 0; b < a.length; b++) {
				var c = a[b].indexOf("="), d = w_c, e = w_c;
				if (c >= 0) {
					d = a[b].substring(0, c);
					e = a[b].substring(c + 1)
				} else
					d = a[b];
				d = w_.string.urlDecode(d);
				d = this.ia(d);
				this.add(d, e ? w_.string.urlDecode(e) : "")
			}
	}
};
w_.Uri.QueryData.createFromMap = function(a, b, c) {
	var d = w_.structs.m(a);
	if (typeof d == "undefined")
		w_a(Error("Keys are undefined"));
	return w_.Uri.QueryData.createFromKeysValues(d, w_.structs.p(a), b, c)
};
w_.Uri.QueryData.createFromKeysValues = function(a, b, c, d) {
	if (a.length != b.length)
		w_a(Error("Mismatched lengths for keys/values"));
	for ( var e = new w_.Uri.QueryData(w_c, c, d), f = 0; f < a.length; f++)
		e.add(a[f], b[f]);
	return e
};
w_.Uri.QueryData.prototype.j = w_c;
w_.Uri.QueryData.prototype.h = w_c;
w_.Uri.QueryData.wa = w_c;
w_.Uri.QueryData.prototype.T = function() {
	this.R();
	return this.h
};
w_.Uri.QueryData.prototype.add = function(a, b) {
	this.R();
	this.Ea();
	a = this.ia(a);
	if (this.w(a)) {
		var c = this.j.get(a);
		w_.isArray(c) ? c.push(b) : this.j.set(a, [ c, b ])
	} else
		this.j.set(a, b);
	this.h++;
	return this
};
w_.Uri.QueryData.prototype.remove = function(a) {
	this.R();
	a = this.ia(a);
	if (this.j.w(a)) {
		this.Ea();
		var b = this.j.get(a);
		if (w_.isArray(b))
			this.h -= b.length;
		else
			this.h--;
		return this.j.remove(a)
	}
	return w_d
};
w_.Uri.QueryData.prototype.clear = function() {
	this.Ea();
	this.j && this.j.clear();
	this.h = 0
};
w_.Uri.QueryData.prototype.z = function() {
	this.R();
	return this.h == 0
};
w_.Uri.QueryData.prototype.w = function(a) {
	this.R();
	a = this.ia(a);
	return this.j.w(a)
};
w_.Uri.QueryData.prototype.ga = function(a) {
	var b = this.p();
	return w_.array.contains(b, a)
};
w_.Uri.QueryData.prototype.m = function() {
	this.R();
	for ( var a = this.j.p(), b = this.j.m(), c = [], d = 0; d < b.length; d++) {
		var e = a[d];
		if (w_.isArray(e))
			for ( var f = 0; f < e.length; f++)
				c.push(b[d]);
		else
			c.push(b[d])
	}
	return c
};
w_.Uri.QueryData.prototype.p = function(a) {
	this.R();
	var b;
	if (a) {
		var c = this.ia(a);
		if (this.w(c)) {
			var d = this.j.get(c);
			if (w_.isArray(d))
				return d;
			else {
				b = [];
				b.push(d)
			}
		} else
			b = []
	} else {
		var e = this.j.p();
		b = [];
		for ( var f = 0; f < e.length; f++) {
			var g = e[f];
			w_.isArray(g) ? w_.array.extend(b, g) : b.push(g)
		}
	}
	return b
};
w_.Uri.QueryData.prototype.set = function(a, b) {
	this.R();
	this.Ea();
	a = this.ia(a);
	if (this.w(a)) {
		var c = this.j.get(a);
		if (w_.isArray(c))
			this.h -= c.length;
		else
			this.h--
	}
	this.j.set(a, b);
	this.h++;
	return this
};
w_.Uri.QueryData.prototype.get = function(a, b) {
	this.R();
	a = this.ia(a);
	if (this.w(a)) {
		var c = this.j.get(a);
		return w_.isArray(c) ? c[0] : c
	} else
		return b
};
w_.Uri.QueryData.prototype.Lg = function(a, b) {
	this.R();
	this.Ea();
	a = this.ia(a);
	if (this.w(a)) {
		var c = this.j.get(a);
		if (w_.isArray(c))
			this.h -= c.length;
		else
			this.h--
	}
	if (b.length > 0) {
		this.j.set(a, b);
		this.h += b.length
	}
};
w_.Uri.QueryData.prototype.toString = function() {
	if (this.ha)
		return this.ha;
	if (!this.j)
		return "";
	for ( var a = [], b = 0, c = this.j.m(), d = 0; d < c.length; d++) {
		var e = c[d], f = w_.string.urlEncode(e), g = this.j.get(e);
		if (w_.isArray(g))
			for ( var h = 0; h < g.length; h++) {
				b > 0 && a.push("&");
				a.push(f, "=", w_.string.urlEncode(g[h]));
				b++
			}
		else {
			b > 0 && a.push("&");
			a.push(f, "=", w_.string.urlEncode(g));
			b++
		}
	}
	return this.ha = a.join("")
};
w_.Uri.QueryData.prototype.Ng = function() {
	if (!this.wa)
		this.wa = w_.Uri.Pa(this.toString());
	return this.wa
};
w_.Uri.QueryData.prototype.Ea = function() {
	delete this.wa;
	delete this.ha;
	this.Hb && delete this.Hb.Y
};
w_.Uri.QueryData.prototype.clone = function() {
	var a = new w_.Uri.QueryData;
	if (this.wa)
		a.wa = this.wa;
	if (this.ha)
		a.ha = this.ha;
	if (this.j)
		a.j = this.j.clone();
	return a
};
w_.Uri.QueryData.prototype.ia = function(a) {
	var b = String(a);
	if (this.$)
		b = b.toLowerCase();
	return b
};
w_.Uri.QueryData.prototype.qa = function(a) {
	var b = a && !this.$;
	if (b) {
		this.R();
		this.Ea();
		w_.structs.forEach(this.j, function(c, d) {
			var e = d.toLowerCase();
			if (d != e) {
				this.remove(d);
				this.add(e, c)
			}
		}, this)
	}
	this.$ = a
};
w_.Uri.QueryData.prototype.extend = function() {
	for ( var a = 0; a < arguments.length; a++) {
		var b = arguments[a];
		w_.structs.forEach(b, function(c, d) {
			this.add(d, c)
		}, this)
	}
};
w_.net = {};
w_.net.Jsonp = function(a, b) {
	this.Hb = new w_.Uri(a);
	this.bh = b ? b : "callback";
	this.Bc = 5000
};
w_.net.Jsonp.CALLBACKS = "_callbacks_";
w_.net.Jsonp.Oh = 0;
w_.net.Jsonp.prototype.yc = function(a) {
	this.Bc = a
};
w_.net.Jsonp.prototype.send = function(a, b, c, d) {
	if (!document.documentElement.firstChild) {
		c && c(a);
		return w_c
	}
	var e = d || "_" + (w_.net.Jsonp.Oh++).toString(36) + w_.now().toString(36);
	w_.global[w_.net.Jsonp.CALLBACKS]
			|| (w_.global[w_.net.Jsonp.CALLBACKS] = {});
	var f = w_.dom.createElement("script"), g = w_c;
	if (this.Bc > 0) {
		var h = w_.net.Jsonp.Fh(e, f, a, c);
		g = w_.global.setTimeout(h, this.Bc)
	}
	var i = this.Hb.clone();
	w_.net.Jsonp.Yg(a, i);
	if (b) {
		var j = w_.net.Jsonp.Gh(e, f, b, g);
		w_.global[w_.net.Jsonp.CALLBACKS][e] = j;
		i.wc(this.bh, w_.net.Jsonp.CALLBACKS + "." + e)
	}
	w_.dom.Eb(f, {
		type : "text/javascript",
		id : e,
		charset : "UTF-8",
		src : i.toString()
	});
	w_.dom.appendChild(document.getElementsByTagName("head")[0], f);
	return {
		hi : e,
		Bc : g
	}
};
w_.net.Jsonp.Fh = function(a, b, c, d) {
	return function() {
		w_.net.Jsonp.vf(a, b, w_d);
		d && d(c)
	}
};
w_.net.Jsonp.Gh = function(a, b, c, d) {
	return function() {
		w_.global.clearTimeout(d);
		w_.net.Jsonp.vf(a, b, w_b);
		c.apply(undefined, arguments)
	}
};
w_.net.Jsonp.vf = function(a, b, c) {
	w_.global.setTimeout( function() {
		w_.dom.removeNode(b)
	}, 0);
	if (w_.global[w_.net.Jsonp.CALLBACKS][a])
		if (c)
			delete w_.global[w_.net.Jsonp.CALLBACKS][a];
		else
			w_.global[w_.net.Jsonp.CALLBACKS][a] = w_.nullFunction
};
w_.net.Jsonp.Yg = function(a, b) {
	for ( var c in a)
		if (!a.hasOwnProperty || a.hasOwnProperty(c))
			b.wc(c, a[c]);
	return b
};
var w_H = {};
w_H.widget = {};
w_H.widget.bloglist = {};
w_H.widget.bloglist.FeedParser = function(a) {
	this.bg(w_.dom.xml.loadXml(a))
};
w_H.widget.bloglist.FeedParser.prototype.Va = function() {
	return this.qf
};
w_H.widget.bloglist.FeedParser.prototype.Wf = function() {
	if (!this.$a)
		return w_c;
	return {
		link : this.Ra.gc(this.$a),
		title : this.Ra.Zf(this.$a),
		thumbnail : this.Ra.Yf(this.$a),
		snippet : this.Ra.lc(this.$a),
		date : this.Ra.getDate(this.$a)
	}
};
w_H.widget.bloglist.FeedParser.prototype.bg = function(a) {
	for ( var b = 0; b < w_H.widget.bloglist.FeedParser.HINTS.length; b++) {
		var c = w_H.widget.bloglist.FeedParser.HINTS[b], d = w_I(a,
				c.namespace, c.itemElem);
		if (d[0]) {
			this.$a = d[0];
			this.Ra = new c.extractor;
			this.qf = this.Ra.Va(a);
			return
		}
	}
	this.qf = (new w_H.widget.bloglist.Extractor).Va(a)
};
w_H.widget.bloglist.Extractor = function() {
};
w_H.widget.bloglist.Extractor.MAX_SNIPPET_LENGTH = 160;
w_H.widget.bloglist.Extractor.MAX_THUMBNAIL_SIZE = 75;
w_H.widget.bloglist.Extractor.MEDIA_RSS_NS = "http://search.yahoo.com/mrss/";
w_H.widget.bloglist.Extractor.prototype.Va = function(a) {
	var b = a.getElementsByTagName("link"), c = this.vd(b);
	if (!c) {
		b = w_I(a, "", "link");
		c = b[0].firstChild.nodeValue
	}
	var d = w_.Uri.parse(c);
	d.jc().clear();
	d.db("");
	return d.toString()
};
w_H.widget.bloglist.Extractor.prototype.Zf = function(a) {
	return a.getElementsByTagName("title")[0].firstChild.nodeValue
};
w_H.widget.bloglist.Extractor.prototype.Yf = function(a) {
	var b = w_I(a, w_H.widget.bloglist.Extractor.MEDIA_RSS_NS, "thumbnail");
	if (b[0]) {
		var c = {
			url : b[0].getAttribute("url"),
			width : parseInt(b[0].getAttribute("width"), 10),
			height : parseInt(b[0].getAttribute("height"), 10)
		}, d = w_H.widget.bloglist.Extractor.MAX_THUMBNAIL_SIZE, e = Math.max(
				c.width / d, c.height / d);
		if (e > 1) {
			c.width = Math.round(c.width / e);
			c.height = Math.round(c.height / e)
		}
		return c
	}
	return w_c
};
w_H.widget.bloglist.Extractor.prototype.normalize = function(a) {
	if (a) {
		a = w_.string.normalizeWhitespace(this.Mg(a.firstChild.nodeValue));
		a = w_.string.trim(a);
		a = w_.string.normalizeSpaces(a);
		if (a.length > w_H.widget.bloglist.Extractor.MAX_SNIPPET_LENGTH)
			a = a
					.substring(0,
							w_H.widget.bloglist.Extractor.MAX_SNIPPET_LENGTH)
					+ "...";
		return a
	}
	return ""
};
w_H.widget.bloglist.Extractor.prototype.Mg = function(a) {
	return a.replace(/<\/?\w[^>]*>/g, "")
};
w_H.widget.bloglist.Extractor.prototype.vd = function(a) {
	for ( var b = 0; a[b]; b++)
		if (a[b].getAttribute("rel") == "alternate")
			return a[b].getAttribute("href");
	return w_c
};
w_H.widget.bloglist.RSSExtractor = function() {
};
w_.inherits(w_H.widget.bloglist.RSSExtractor, w_H.widget.bloglist.Extractor);
w_H.widget.bloglist.RSSExtractor.prototype.gc = function(a) {
	var b = a.getElementsByTagName("link");
	return b[0] ? w_.string.trim(b[0].firstChild.nodeValue) : w_c
};
w_H.widget.bloglist.RSSExtractor.prototype.lc = function(a) {
	return this.normalize(a.getElementsByTagName("description")[0])
};
w_H.widget.bloglist.RSSExtractor.prototype.getDate = function(a) {
	var b = a.getElementsByTagName("pubDate");
	return b[0] ? new Date(b[0].firstChild.nodeValue) : w_c
};
w_H.widget.bloglist.AtomExtractor = function() {
};
w_.inherits(w_H.widget.bloglist.AtomExtractor, w_H.widget.bloglist.Extractor);
w_H.widget.bloglist.AtomExtractor.prototype.gc = function(a) {
	var b = a.getElementsByTagName("link"), c = this.vd(b);
	if (c)
		return c;
	return b[0] ? b[0].getAttribute("href") : w_c
};
w_H.widget.bloglist.AtomExtractor.prototype.lc = function(a) {
	return this.normalize(a.getElementsByTagName("content")[0]
			|| a.getElementsByTagName("summary")[0])
};
w_H.widget.bloglist.AtomExtractor.prototype.getDate = function(a) {
	var b = a.getElementsByTagName("updated")[0]
			|| a.getElementsByTagName("date")[0];
	if (b) {
		var c = w_.date.fromIsoString(b.firstChild.nodeValue);
		return new Date(c.Ya(), c.getMonth(), c.getDay(), c.getHours(), c
				.getMinutes(), c.getSeconds(), c.getMilliseconds())
	}
	return w_c
};
w_H.widget.bloglist.FeedParser.HINTS = [ {
	itemElem : "entry",
	namespace : "http://www.w3.org/2005/Atom",
	extractor : w_H.widget.bloglist.AtomExtractor,
	hint : "atom"
}, {
	itemElem : "entry",
	namespace : "http://purl.org/atom/ns#",
	extractor : w_H.widget.bloglist.AtomExtractor,
	hint : "atom"
}, {
	itemElem : "entry",
	namespace : "",
	extractor : w_H.widget.bloglist.AtomExtractor,
	hint : "atom"
}, {
	itemElem : "item",
	namespace : "http://purl.org/rss/1.0/",
	extractor : w_H.widget.bloglist.RSSExtractor,
	hint : "rss"
}, {
	itemElem : "item",
	namespace : "http://my.netscape.com/rdf/simple/0.9/",
	extractor : w_H.widget.bloglist.RSSExtractor,
	hint : "rss"
}, {
	itemElem : "item",
	namespace : "",
	extractor : w_H.widget.bloglist.RSSExtractor,
	hint : "rss"
} ];
function w_I(a, b, c) {
	var d;
	if (b == w_c)
		b = "";
	if (a.getElementsByTagNameNS)
		d = a.getElementsByTagNameNS(b, c);
	else {
		var e = a.getElementsByTagName("*");
		d = [];
		for ( var f = 0; f < e.length; f++) {
			var g = e[f].tagName;
			g = g.substring(g.lastIndexOf(":") + 1);
			g == c && e[f].namespaceURI == b && d.push(e[f])
		}
	}
	return d
};
function w_J(a) {
	this.a = a;
	this.g = a.u()
}
w_J.Id = {
	BLOGS : "blogs",
	CONTAINER : "container",
	ITEM_CONTENT : "item-content",
	SHOW_ALL : "show-all",
	SHOW_N : "show-n"
};
w_J.Action = {
	CONFIGURE : "configure"
};
w_J.Fields = {
	AJAX_VERSION : "ajaxVersion",
	NUM_ITEMS_TO_SHOW : "numItemsToShow",
	TOTAL_ITEMS : "totalItems"
};
w_J.FEED_FETCH_URL = "http://ajax.googleapis.com/ajax/services/feed/load";
w_J.WIDGET_TYPE_NAME = "BlogList";
w_J.prototype.Cc = w_c;
w_J.prototype.zb = w_c;
w_J.prototype.e = function() {
	return w_J.WIDGET_TYPE_NAME
};
w_J.prototype.b = function() {
	return this.a
};
w_J.prototype.i = function() {
	return w_d
};
w_J.prototype.d = function(a, b) {
	a == w_J.Action.CONFIGURE && this.a.l(b)
};
w_J.prototype.k = function() {
	var a = this.a.o();
	this.Cc = a[w_J.Fields.TOTAL_ITEMS];
	this.zb = a[w_J.Fields.NUM_ITEMS_TO_SHOW];
	if (a[w_J.Fields.AJAX_VERSION])
		for ( var b = 0; b < a.items.length; b++) {
			var c = this.a.J(w_J.Id.CONTAINER), d = w_.dom.Xa("div",
					w_J.Id.ITEM_CONTENT, c), e = a.items[b].feedUrl, f = new w_.net.Jsonp(
					w_J.FEED_FETCH_URL);
			f.yc(-1);
			f.send( {
				q : e,
				num : 1,
				output : "json_xml",
				v : "1.0"
			}, w_w(this.Ig, this, d[b]))
		}
	if (this.zb != 0 && this.Cc > this.zb) {
		var g = this.a.J(w_J.Id.SHOW_ALL);
		g.onclick = this.je.bind(this);
		var h = this.a.J(w_J.Id.SHOW_N);
		h.onclick = this.je.bind(this)
	}
	var i = this.Lf.bind(this), j = window;
	if (j.addEventListener)
		j.addEventListener("load", i, w_d);
	else if (j.attachEvent)
		j.attachEvent("onload", i);
	else
		j.onload = i
};
w_J.prototype.Ig = function(a, b) {
	if (!b.error) {
		var c = this.a.o(), d = new w_H.widget.bloglist.FeedParser(
				b.responseData.xmlString), e = d.Wf();
		if (e) {
			var f = a.parentNode.parentNode.getElementsByTagName("input")[0];
			f.value = d.Va() + "/favicon.ico";
			c.showItemThumbnail && e.thumbnail
					&& a.appendChild(w_.dom.s("div", {
						"class" : "item-thumbnail"
					}, w_.dom.s("a", {
						target : "_blank",
						href : e.link
					}, w_.dom.s("img", {
						src : e.thumbnail.url,
						height : e.thumbnail.height,
						width : e.thumbnail.width,
						alt : "",
						border : 0
					}))));
			if (c.showItemTitle)
				e.link ? a.appendChild(w_.dom.s("span", {
					"class" : "item-title"
				}, w_.dom.s("a", {
					href : e.link,
					target : "_blank"
				}, e.title))) : a.appendChild(w_.dom.s("span", {
					"class" : "item-title"
				}, e.title));
			if (c.showItemSnippet) {
				c.showItemTitle && a.appendChild(w_.dom.createTextNode(" - "));
				a.appendChild(w_.dom.s("span", {
					"class" : "item-snippet"
				}, e.snippet));
				c.showTimePeriodSinceLastUpdate && e.date
						&& a.appendChild(w_Ka(e.date.toLocaleDateString()))
			}
		}
	}
};
w_J.prototype.je = function() {
	for ( var a = this.a.J(w_J.Id.BLOGS), b = a.getElementsByTagName("li"), c = this.zb; c < this.Cc; c++) {
		var d = b[c];
		w_qa(d, d.style.display == "none")
	}
	var e = this.a.J(w_J.Id.SHOW_ALL);
	w_o(e, e.style.display == "none");
	var f = this.a.J(w_J.Id.SHOW_N);
	w_o(f, f.style.display == "none")
};
w_J.prototype.Lf = function() {
	for ( var a = this.a.J(w_J.Id.BLOGS), b = a.getElementsByTagName("input"), c = 0; c < b.length; c++) {
		var d = b[c], e = document.createElement("img");
		e.onload = this.hf.bind(e, d);
		e.src = d.value
	}
};
w_J.prototype.hf = function(a) {
	this.onload = function() {
	};
	this.alt = "";
	this.width = this.height = "16";
	var b = a.parentNode;
	b.replaceChild(this, a)
};
function w_Ka(a) {
	return w_.dom.s("div", {
		"class" : "item-time"
	}, a)
}
var _BlogListView = w_J;
_BlogListView._Configure = _BlogListView.Configure;
function w_K(a) {
	this.a = a
}
w_K.WIDGET_TYPE_NAME = "CustomSearch";
w_K.ANCHOR_NAME = "uds-search-results";
w_K.prototype.e = function() {
	return w_K.WIDGET_TYPE_NAME
};
w_K.prototype.b = function() {
	return this.a
};
w_K.prototype.i = function() {
	return w_d
};
w_K.prototype.d = function(a, b) {
	a == "configure" && this.a.l(b)
};
w_K.prototype.k = function() {
	var a = this.b(), b = new w_A;
	google.load("search", "1", {
		callback : w_La.bind(a),
		language : b.o("blog.locale")
	});
	var c = document.getElementById("uds-searchControl");
	if (!c) {
		c = document.createElement("DIV");
		c.id = "uds-searchControl";
		var d = document.createElement("A");
		d.name = w_K.ANCHOR_NAME;
		c.appendChild(d);
		var e = document.createElement("DIV");
		e.id = "uds-searchResults";
		c.appendChild(e);
		var f = document.createElement("DIV");
		f.id = "uds-searchClearResults";
		f.className = "gsc-clear-button";
		f.innerHTML = "&nbsp;";
		c.appendChild(f);
		var g = document.getElementById("main");
		g || (g = document.getElementsByTagName("body")[0]);
		g.insertBefore(c, g.firstChild)
	}
};
function w_La() {
	var a = new GSearchControl, b = this.o();
	if (b.includeBlog) {
		var c = new GblogSearch;
		c.setUserDefinedLabel(b.thisBlogMsg);
		c.setSiteRestriction(b.blogUrl);
		a.addSearcher(c)
	}
	if (b.includePostLinks) {
		var d = new GwebSearch;
		d.setUserDefinedLabel(b.linkedFromHereMsg);
		d.setSiteRestriction( {
			crefUrl : b.blogUrl + "cse.xml"
		});
		a.addSearcher(d)
	}
	for ( var e = b.linkLists, f = 0; f < e.length; f++) {
		var g = new GwebSearch;
		g.setSiteRestriction( {
			crefUrl : b.blogUrl + "cse.xml"
		}, e[f].id.toLowerCase());
		g.setUserDefinedLabel(e[f].title);
		a.addSearcher(g)
	}
	if (b.includeWeb) {
		var h = new GwebSearch;
		h.setUserDefinedLabel(b.theWebMsg);
		a.addSearcher(h)
	}
	var i = new GSearchForm(w_d, this.J("form")), j = new GdrawOptions;
	j.setDrawMode(GSearchControl.DRAW_MODE_TABBED);
	j.setInput(i.input);
	a.setNoResultsString(GSearchControl.NO_RESULTS_DEFAULT_STRING);
	a.draw(document.getElementById("uds-searchResults"), j);
	i.input.onkeyup = i.input.onpaste = w_c;
	i.setOnSubmitCallback(w_c, w_w(w_Ma, w_c, i, a));
	document.getElementById("uds-searchClearResults").onclick = w_w(w_Na, w_c,
			a);
	w_L(w_d)
}
function w_Ma(a, b) {
	var c = a.input.value;
	if (!c) {
		w_Na(b);
		return w_d
	}
	b.execute(c);
	w_L(w_b);
	var d = window.location.href, e = d.indexOf("#");
	if (e >= 0)
		d = d.substring(0, e);
	window.location.href = d + "#" + w_K.ANCHOR_NAME;
	return w_b
}
function w_Na(a) {
	a.clearAllResults();
	w_L(w_d)
}
function w_L(a) {
	document.getElementById("uds-searchClearResults").style.display = a ? "block"
			: "none"
}
var _CustomSearchView = w_K;
_CustomSearchView._Configure = _CustomSearchView.Configure;
function w_M(a) {
	this.a = a;
	this.g = a.u()
}
w_M.WIDGET_TYPE_NAME = "Image";
w_M.prototype.b = function() {
	return this.a
};
w_M.prototype.e = function() {
	return w_M.WIDGET_TYPE_NAME
};
w_M.prototype.i = function() {
	return w_d
};
w_M.prototype.k = function() {
	if (!(this.g.data.resize != "true")) {
		var a = this.a.X(this.g.instanceId + "_img"), b = this.g.rootElement;
		if (a && b) {
			var c;
			if (document.defaultView)
				c = parseInt(
						document.defaultView.getComputedStyle(b, w_c).width, 10);
			else if (b.currentStyle) {
				a.style.display = "none";
				c = b.offsetWidth;
				a.style.display = ""
			} else
				return;
			if (a.width > c) {
				a.height = Math.round(c / a.width * a.height);
				a.width = c
			}
			a.style.visibility = "visible"
		}
	}
};
w_M.prototype.d = function(a, b) {
	a == "configure" && this.a.l(b)
};
var _ImageView = w_M;
function w_N(a, b, c, d, e, f, g, h) {
	this.H = a;
	this.rf = b != "null" ? b : w_c;
	this.rg = c;
	this.pg = d;
	this.qg = e;
	this.Kg = f;
	this.sg = g;
	this.Ph = h;
	this.Ca = this.ka = -1;
	this.Da = w_c;
	this.W = document.getElementById(this.H + "_picImg");
	this.Vb = document.getElementById(this.H + "_changeImageLink");
	this.qc = document.getElementById(this.H + "_imageChoiceTable");
	this.lg = document.getElementById(this.H + "_imgSrcFromPCRadio");
	this.mg = document.getElementById(this.H + "_imgSrcFromWebRadio");
	this.n = document.getElementById(this.H + "_imgFileNameInput");
	this.xb = document.getElementById(this.H + "_imgUrlTextInput");
	this.nf = window.frames[this.H + "_asynchronousFileUploadIframe"];
	this.Nd = 0;
	this.D = new Image;
	this.D.onload = this.hitch(this, this.Bg);
	this.D.onerror = this.hitch(this, this.Ag);
	this.Mf = w_d;
	this.Ta = this.F = this.Ud = w_c;
	this.ae = w_d
}
w_N.prototype.Sd = function() {
	return this.lg.checked
};
w_N.prototype.Bg = function() {
	this.Nd = 0;
	w_C.ClearError(this.H + "_imgUrlTextError");
	w_C.ClearError(this.H + "_imgFileNameError");
	if (!this.Sd() || this.ka == 0) {
		this.ka = this.D.width;
		this.Ca = this.D.height;
		this.Da = this.D.src
	}
	var a = 1, b = 1;
	if (this.D.width > 300)
		a = 300 / this.D.width;
	if (this.D.height > 300)
		b = 300 / this.D.height;
	var c = Math.min(a, b);
	this.W.style.width = Math.round(this.D.width * c) + "px";
	this.W.style.height = Math.round(this.D.height * c) + "px";
	this.W.src = this.D.src;
	this.W.style.display = "";
	this.qc.style.display = "none";
	this.Vb.style.display = "";
	this.n.disabled = w_b;
	this.rg && this.rg.call( {}, this.W.src, this.Da, this.ka, this.Ca)
};
w_N.prototype.eb = function(a, b, c, d) {
	if (a) {
		w_C.SetError(this.H + "_imgFileNameError", b);
		w_C.ClearError(this.H + "_imgUrlTextError")
	} else {
		w_C.SetError(this.H + "_imgUrlTextError", b);
		w_C.ClearError(this.H + "_imgFileNameError")
	}
	this.W.style.display = "none";
	this.qc.style.display = "";
	this.Vb.style.display = "none";
	this.n.disabled = w_d;
	this.pg && this.pg.call( {}, c, d)
};
w_N.prototype.Ag = function() {
	if (this.Nd < 2) {
		this.Nd++;
		var a = this.D.src;
		this.D.src = "";
		this.Fa(a)
	} else
		this.eb(this.Sd(), WidgetMessages.SIV_INVALID_URL, this.W.src)
};
w_N.prototype.hitch = function(a, b) {
	return function() {
		b.apply(a, arguments)
	}
};
w_N.prototype.Fa = function(a) {
	this.fe();
	this.D.src = a
};
w_N.prototype.ad = function(a) {
	var b = a || window.event;
	if (window.event) {
		b.returnValue = w_d;
		b.cancelBubble = w_b
	} else {
		b.preventDefault();
		b.stopPropagation()
	}
	this.W.style.display = "none";
	this.Vb.style.display = "none";
	this.qc.style.display = "";
	this.n.disabled = w_d;
	this.xb.value = "";
	this.be();
	this.ae = w_b;
	this.qg && this.qg.call( {})
};
w_N.prototype.Od = function() {
	this.lg.checked = "true";
	this.xb.value = "";
	this.fe();
	this.xg();
	this.Mf = w_b;
	try {
		this.F.submit()
	} catch (a) {
		this.eb(w_b, WidgetMessages.SIV_INVALID_URL, this.F.value)
	}
	this.wg()
};
w_N.prototype.Na = function() {
	var a = this.nf.document.result;
	a || this.eb(w_b, WidgetMessages.SIV_INVALID_URL, this.n.value);
	if (a.hasErrors)
		a.errors.length > 0 ? this.eb(w_b, a.errors[0].message, this.n.value,
				a.vh) : this.eb(w_b, WidgetMessages.SIV_INVALID_URL,
				this.n.value, a.vh);
	else {
		var b = Math.max(a.origWidth, a.origHeight), c = this.Fd();
		if (this.ka != 0 && c != -1 && b > c) {
			var d = c / b;
			this.ka = Math.round(a.origWidth * d);
			this.Ca = Math.round(a.origHeight * d)
		} else {
			this.ka = a.origWidth;
			this.Ca = a.origHeight
		}
		this.Da = a.mainSrc;
		this.Fa(a.thumbSrc)
	}
};
w_N.prototype.Pd = function(a) {
	var b = a || window.event;
	if (!(b.keyCode == 9)) {
		this.mg.checked = "true";
		this.Ud != w_c && window.clearTimeout(this.Ud);
		var c = this.hitch(this, function() {
			if (this.ae || this.D.src != this.xb.value) {
				this.be();
				this.Fa(this.xb.value)
			}
			this.ae = w_d
		});
		this.Ud = window.setTimeout(c, 1000)
	}
};
w_N.prototype.Wd = function(a) {
	this.mg.checked = w_b;
	this.xb.value = a;
	this.Fa(a)
};
w_N.prototype.fe = function() {
	this.W.src = "img/icon_inprogress.gif";
	this.W.style.width = "200px";
	this.W.style.height = "200px";
	this.W.style.display = "";
	this.qc.style.display = "none";
	this.Vb.style.display = "none"
};
w_N.prototype.xg = function() {
	if (!this.F) {
		this.F = document.createElement("form");
		this.F.action = "imageUpload.do";
		this.F.method = "POST";
		this.F.target = this.nf.name;
		this.F.encoding = "multipart/form-data";
		this.F.style.display = "none";
		if (this.rf) {
			var a = document.createElement("input");
			a.type = "hidden";
			a.name = "blogID";
			a.value = this.rf;
			this.F.appendChild(a)
		}
		var b = document.createElement("input");
		b.type = "hidden";
		b.name = "sectionWidth";
		b.id = "sectionWidth";
		this.F.appendChild(b);
		var c = document.createElement("input");
		c.type = "hidden";
		c.name = "photoUploadSecurityToken";
		c.value = this.Ph;
		this.F.appendChild(c);
		document.body.appendChild(this.F)
	}
	var d = this.Fd();
	if (d == -1)
		d = 1600;
	document.getElementById("sectionWidth").value = d;
	this.Ta = {
		parent : this.n.parentNode,
		nextSibling : this.n.nextSibling
	};
	this.n.parentNode.removeChild(this.n);
	this.F.appendChild(this.n)
};
w_N.prototype.wg = function() {
	this.F.removeChild(this.n);
	this.Ta && this.Ta.nextSibling ? this.Ta.parent.insertBefore(this.n,
			this.Ta.nextSibling) : this.Ta.parent.appendChild(this.n)
};
w_N.prototype.be = function() {
	var a = document.createElement("input");
	a.type = "file";
	a.name = this.n.name;
	a.id = this.n.id;
	a.onchange = this.n.onchange;
	var b = this.n.nextSibling;
	b == w_c ? this.n.parentNode.appendChild(a) : this.n.parentNode
			.insertBefore(a, b);
	this.n.parentNode.removeChild(this.n);
	this.n = a
};
w_N.prototype.Fd = function() {
	return this.Kg == -1 && this.sg ? this.sg() : this.Kg
};
function w_O() {
	this.usiContainers = []
}
var w_Oa = new w_O;
w_O.prototype.dd = function(a, b, c, d, e, f, g, h) {
	this.usiContainers[a] = new w_N(a, b, eval(c), eval(d), eval(e), f,
			eval(g), h);
	return this.usiContainers[a]
};
w_O.prototype.oc = function(a) {
	return this.usiContainers[a]
};
w_O.prototype.Na = function(a) {
	var b = this.oc(a);
	b && b.Mf && b.Na()
};
var _UploadSimpleImage = w_Oa;
w_O.prototype._createUsiContainer = w_O.prototype.dd;
w_O.prototype._getUsiContainer = w_O.prototype.oc;
w_O.prototype._channelResultArrived = w_O.prototype.Na;
w_N.prototype._changeImage = w_N.prototype.ad;
w_N.prototype._imgUrlFileOnChange = w_N.prototype.Od;
w_N.prototype._imgUrlTextOnKeyUp = w_N.prototype.Pd;
w_N.prototype._loadInitialUrl = w_N.prototype.Wd;
w_N.prototype._loadImageFromUrl = w_N.prototype.Fa;
function _singleImageConfig_successfulUploadCallback(a, b, c, d) {
	window.singleImageConfig_thumbImageUrl = a;
	window.singleImageConfig_imageUrl = b;
	window.singleImageConfig_imageWidth = c;
	window.singleImageConfig_imageHeight = d;
	var e = document.getElementById("shrinkToFitRow");
	if (e)
		e.style.visibility = "hidden"
}
function _singleImageConfig_resetCallback() {
	window.singleImageConfig_imageUrl = w_c;
	var a = document.getElementById("shrinkToFitRow");
	if (a)
		a.style.visibility = "visible"
}
function _SIV_getScaledContainerWidth() {
	return document.getElementById("checkShrink").checked ? _SIV_getContainerWidth()
			: -1
}
function _SIV_getContainerWidth() {
	var a = document.getElementById("sectionId").value, b = 150;
	if (w_B.IsOpenerReachable(window)
			&& window.opener.document.getElementById(a)
			&& window.opener.document.getElementById(a).clientWidth > 0)
		b = window.opener.document.getElementById(a).clientWidth;
	return b
}
function _SIV_setConfigurationOptions() {
	if (window.singleImageConfig_imageUrl == w_c)
		w_B
				.N(window, WidgetMessages.SIV_NO_IMAGE,
						w_B.STATUS_MESSAGE_BAD_CLASS);
	else {
		var a = document.forms.config.widgetId.value, b = _SIV_getContainerWidth(), c = document
				.getElementById("checkShrink").checked, d = window.singleImageConfig_imageWidth, e = window.singleImageConfig_imageHeight;
		if (c) {
			var f = 1;
			if (d > b) {
				f = b / d;
				d = b;
				e = Math.round(e * f)
			}
		}
		var g = {
			originalUrl : window.singleImageConfig_imageUrl,
			originalWidth : window.singleImageConfig_imageWidth,
			originalHeight : window.singleImageConfig_imageHeight,
			displayUrl : window.singleImageConfig_thumbImageUrl,
			displayWidth : d,
			displayHeight : e,
			sectionWidth : b,
			shrinkToFit : c,
			title : document.getElementById("title").value,
			caption : document.getElementById("imageCaption").value,
			link : document.getElementById("link").value,
			securityToken : document.forms.config.securityToken.value
		};
		w_B.SaveWidget(g, a, w_M.WIDGET_TYPE_NAME)
	}
};
function w_P(a) {
	this.a = a;
	this.g = a.u()
}
w_P.successfulUploadCallback = function(a, b, c, d) {
	w_P.Xh = a;
	w_P.Da = b;
	w_P.ka = c;
	w_P.Ca = d;
	var e = document.getElementById("shrinkToFitRow");
	if (e)
		e.style.visibility = "hidden";
	if (e = document.getElementById("shrinkToFitMessageRow"))
		e.style.visibility = "hidden"
};
w_P.resetCallback = function() {
	w_P.Da = w_c;
	var a = document.getElementById("shrinkToFitRow");
	if (a)
		a.style.visibility = "visible";
	if (a = document.getElementById("shrinkToFitMessageRow"))
		a.style.visibility = "visible"
};
w_P.getScaledContainerWidth = function() {
	return document.getElementById("checkShrink").checked ? w_P
			.getContainerWidth() : -1
};
w_P.getContainerWidth = function() {
	var a = document.getElementById("sectionId").value, b = 600;
	if (w_B.IsOpenerReachable(window)
			&& window.opener.document.getElementById(a))
		b = window.opener.document.getElementById(a).clientWidth;
	return b
};
w_P.WIDGET_TYPE_NAME = "Header";
w_P.prototype.e = function() {
	return w_P.WIDGET_TYPE_NAME
};
w_P.prototype.i = function() {
	return w_d
};
w_P.prototype.b = function() {
	return this.a
};
w_P.prototype.d = function(a, b) {
	this.a.l(b)
};
w_P.FilterMap = {
	title : w_C.GetRequiredStringFilter(),
	description : w_c,
	imagePlacement : w_c,
	useImage : w_c,
	securityToken : w_c
};
w_P.ConfigureWidget = function() {
	var a = document.forms.config.widgetId.value, b = document.forms.config.widgetType.value, c = w_C
			.ProcessForm(document.forms.config, w_P.FilterMap), d = w_P
			.getContainerWidth();
	if (c.success) {
		if (w_P.Da) {
			var e = w_P.ka, f = w_P.Ca, g = document
					.getElementById("checkShrink").checked;
			if (g) {
				var h = 1;
				if (e > d) {
					h = d / e;
					e = d;
					f = Math.round(f * h)
				}
			}
			c.values.originalUrl = w_P.Da;
			c.values.originalWidth = w_P.ka;
			c.values.originalHeight = w_P.Ca;
			c.values.displayUrl = w_P.Xh;
			c.values.displayWidth = e;
			c.values.displayHeight = f;
			c.values.sectionWidth = d;
			c.values.shrinkToFit = g
		}
		c.values.securityToken = document.forms.config.securityToken.value;
		w_B.SaveWidget(c.values, a, b);
		return w_b
	} else
		return w_d
};
w_P.hideImageOptions = function() {
	document.getElementById("imageOptions").style.display = "none";
	return w_d
};
w_P.showImageOptions = function() {
	document.getElementById("imageOptions").style.display = "";
	return w_d
};
var _HeaderView = w_P;
_HeaderView.prototype = w_P.prototype;
_HeaderView._ConfigureWidget = _HeaderView.ConfigureWidget;
_HeaderView._hideImageOptions = _HeaderView.hideImageOptions;
_HeaderView._showImageOptions = _HeaderView.showImageOptions;
_HeaderView._successfulUploadCallback = _HeaderView.successfulUploadCallback;
_HeaderView._resetCallback = _HeaderView.resetCallback;
_HeaderView._getScaledContainerWidth = _HeaderView.getScaledContainerWidth;
_HeaderView._getContainerWidth = _HeaderView.getContainerWidth;
function w_Q(a, b) {
	this.a = a;
	this.g = a.u();
	this.Zh = b
}
w_Q.prototype.b = function() {
	return this.a
};
w_Q.prototype.e = function() {
	return this.Zh
};
w_Q.prototype.d = function(a, b) {
	a == "configure" && this.a.l(b)
};
w_Q.ConfigureWidget = function(a) {
	setFormAndSubmit();
	var b = document.forms.stuffform.widgetId.value, c = document.forms.stuffform.securityToken.value, d = document
			.getElementById("textarea"), e = document.getElementById("title"), f = d.value;
	if (a == "Text")
		f = f.replace(/\n/g, "<br/>");
	var g = {
		content : f,
		title : e.value,
		securityToken : c
	};
	w_B.SaveWidget(g, b, a)
};
function w_R(a) {
	w_Q.call(this, a, "Text")
}
w_R.inherits(w_Q);
w_R.ConfigureWidget = function() {
	w_Q.ConfigureWidget("Text")
};
function w_S(a) {
	w_Q.call(this, a, "HTML")
}
w_S.inherits(w_Q);
w_S.ConfigureWidget = function() {
	w_Q.ConfigureWidget("HTML")
};
var _TextView = w_R;
_TextView.prototype = w_R.prototype;
_TextView._ConfigureWidget = _TextView.ConfigureWidget;
var _HTMLView = w_S;
_HTMLView.prototype = w_S.prototype;
_HTMLView._ConfigureWidget = _HTMLView.ConfigureWidget;
function w_T(a) {
	this.a = a
}
w_T.WIDGET_TYPE_NAME = "VideoBar";
w_T.prototype.e = function() {
	return w_T.WIDGET_TYPE_NAME
};
w_T.prototype.b = function() {
	return this.a
};
w_T.prototype.i = function() {
	return w_d
};
w_T.prototype.d = function(a, b) {
	a == "configure" && this.a.l(b)
};
w_T.prototype.k = function() {
	var a = this.b();
	google.load("search", "1", {
		callback : w_Pa.bind(a)
	});
	var b = a.J("bar");
	w_q(b, "videoBar-container")
};
function w_Pa() {
	var a = this.J("bar"), b = this.o().format, c, d, e = this.o().expression;
	if (b == "VERTICAL") {
		c = w_d;
		d = GSvideoBar.THUMBNAILS_MEDIUM;
		a.style.width = "110px"
	} else if (b == "HORIZONTAL-SMALL") {
		c = w_b;
		d = GSvideoBar.THUMBNAILS_SMALL;
		a.style.width = "232px"
	} else if (b == "HORIZONTAL-MEDIUM") {
		c = w_b;
		d = GSvideoBar.THUMBNAILS_MEDIUM;
		a.style.width = "432px"
	}
	var f = {
		largeResultSet : w_d,
		horizontal : c,
		autoExecuteList : {
			cycleTime : GSvideoBar.CYCLE_TIME_LONG,
			cycleMode : GSvideoBar.CYCLE_MODE_RANDOM,
			executeList : e.split(/,/)
		},
		thumbnailSize : d
	};
	new GSvideoBar(a, GSvideoBar.PLAYER_ROOT_FLOATING, f)
}
var _VideoBarView = w_T;
_VideoBarView._Configure = _VideoBarView.Configure;
function w_U(a) {
	this.a = a
}
w_U.WIDGET_TYPE_NAME = "NewsBar";
w_U.prototype.e = function() {
	return w_U.WIDGET_TYPE_NAME
};
w_U.prototype.b = function() {
	return this.a
};
w_U.prototype.i = function() {
	return w_d
};
w_U.prototype.d = function(a, b) {
	a == "configure" && this.a.l(b)
};
w_U.prototype.k = function() {
	var a = this.b();
	google.load("search", "1", {
		callback : w_Qa.bind(a)
	});
	window._uds_nbw_donotrepair = w_b
};
function w_Qa() {
	var a = this.J("bar"), b, c = this.o().format;
	if (c == "VERTICAL")
		b = w_d;
	else if (c == "HORIZONTAL-SMALL")
		b = w_b;
	else if (c == "HORIZONTAL-MEDIUM")
		b = w_b;
	var d = this.o().expression, e = this.o().linkNewWindow, f;
	f = e == w_b ? GSearch.LINK_TARGET_BLANK : GSearch.LINK_TARGET_SELF;
	var g = {
		largeResultSet : w_d,
		horizontal : b,
		linkTarget : f,
		title : " ",
		autoExecuteList : {
			executeList : d.split(/,/)
		}
	};
	if (b) {
		g.autoExecuteList.cycleTime = GSnewsBar.CYCLE_TIME_MEDIUM;
		g.autoExecuteList.cycleMode = GSnewsBar.CYCLE_MODE_RANDOM
	}
	var h = new GSnewsBar(a, g);
	window[a.id] = h
}
var _NewsBarView = w_U;
_NewsBarView._Configure = _NewsBarView.Configure;
function w_V(a) {
	this.a = a
}
w_V.WIDGET_TYPE_NAME = "Slideshow";
w_V.prototype.e = function() {
	return w_V.WIDGET_TYPE_NAME
};
w_V.prototype.b = function() {
	return this.a
};
w_V.prototype.i = function() {
	return w_d
};
w_V.prototype.d = function(a, b) {
	a == "configure" && this.a.l(b)
};
w_V.prototype.k = function() {
	var a = this.b();
	google.load("feeds", "1", {
		callback : w_Ra.bind(a)
	})
};
function w_Ra() {
	var a = this.J("slideshow"), b = this.o().computedFeed, c = this.o().linkNewWindow, d = c ? google.feeds.LINK_TARGET_BLANK
			: google.feeds.LINK_TARGET_SELF, e = {
		linkTarget : d,
		scaleImages : w_b,
		fullControlPanel : w_b,
		fullControlPanelSmallIcons : w_b,
		pauseOnHover : w_d,
		displayTime : this.o().speed
	};
	if (b.indexOf("http://api.flickr.com") == 0)
		e.thumbnailUrlResolver = w_V.FlickrThumbResolver;
	if (this.o().randomizeFeed)
		e.feedLoadCallback = w_V.FeedRandomizer;
	new GFslideShow(b, a, e)
}
w_V.FlickrThumbResolver = function(a) {
	var b = google.feeds.getElementsByTagNameNS(a.xmlNode,
			"http://search.yahoo.com/mrss/", "thumbnail"), c = w_c;
	if (b.length) {
		var d = b[0];
		c = d.getAttribute("url");
		if (!c)
			c = d.firstChild.nodeValue;
		c = c.replace(/^(.*)_[st]\.([a-zA-Z]+)$/, "$1_m.$2")
	}
	return c
};
w_V.FeedRandomizer = function(a) {
	for ( var b = a.feed.entries, c = b.length - 1; c > 0; --c) {
		var d = Math.floor(Math.random() * (c + 1)), e = b[c];
		b[c] = b[d];
		b[d] = e
	}
};
var _SlideshowView = w_V;
_SlideshowView._Configure = _SlideshowView.Configure;
function w_W() {
}
w_W.wh = {
	title : w_c,
	showStyle : w_c,
	showPosts : w_c,
	chronological : w_c,
	frequency : w_c,
	yearPattern : w_c,
	monthPattern : w_c,
	weekPattern : w_c,
	showWeekEnd : w_c,
	dayPattern : w_c,
	securityToken : w_c
};
w_W.ACTIVE_PREVIEW_CLASS = "active-preview";
w_W.PREVIEW_CLASS = "preview";
w_W._SetConfigurationOptions = function() {
	w_y.ConfigureWidget(w_W.wh)
};
w_W.UpdateFrequency = function() {
	var a = w_C.GetFieldValue(document.forms.config.showStyle), b = {
		year : a == "HIERARCHY",
		week : 0,
		month : 0,
		day : 0
	}, c = w_C.GetFieldValue(document.forms.config.frequency);
	if (c == "WEEKLY")
		b.week = 1;
	else if (c == "MONTHLY")
		b.month = 1;
	else if (c == "DAILY") {
		b.month = a == "HIERARCHY";
		b.day = 1
	}
	var d = document.forms.config.showPosts;
	d.disabled = a == "HIERARCHY" ? w_d : w_b;
	for ( var e in b) {
		var f = e + "pattern-wrap";
		w_qa(document.getElementById(f), b[e])
	}
	w_W.SelectPreview()
};
w_W._Init = function(a) {
	w_W.Jg = a;
	w_W.bb = document.getElementById("archive-previews");
	w_W.Cg = w_X(w_W.bb, w_W.PREVIEW_CLASS);
	w_W.UpdateFrequency();
	w_W.Reformat("yearly", document.forms.config.yearPattern);
	w_W.Reformat("monthly", document.forms.config.monthPattern);
	w_W.Reformat("weekly", document.forms.config.weekPattern);
	w_W.Reformat("daily", document.forms.config.dayPattern);
	w_W.UpdateWeekEnd();
	w_W.UpdatePreviewPostTitles();
	document.forms.config.chronological.checked && w_W.ToggleDirection()
};
w_W.SelectPreview = function() {
	for ( var a = w_C.GetFieldValue(document.forms.config.showStyle), b = w_C
			.GetFieldValue(document.forms.config.frequency), c = 0; c < w_W.Cg.length; c++) {
		var d = w_W.Cg[c];
		if (w_p(d, a) && w_p(d, b)) {
			w_q(d, w_W.ACTIVE_PREVIEW_CLASS);
			w_p(d, "MENU") && w_W.Xg(d)
		} else {
			w_r(d, w_W.ACTIVE_PREVIEW_CLASS);
			w_p(d, "MENU") && w_W.Wg(d)
		}
	}
};
w_W.Wg = function(a) {
	for ( var b = a.getElementsByTagName("select"), c = 0; c < b.length; c++)
		b[c].style.display = "none"
};
w_W.Xg = function(a) {
	for ( var b = a.getElementsByTagName("select"), c = 0; c < b.length; c++)
		b[c].style.display = "block"
};
w_W.Reformat = function(a, b) {
	var c = w_W.Jg[a];
	for ( var d in c) {
		var e = c[d][b.selectedIndex];
		e && w_W.ReplaceSample(d, e)
	}
	a == "weekly" && w_W.UpdateWeekEnd()
};
w_W.ReplaceSample = function(a, b) {
	for ( var c = w_X(w_W.bb, a), d = 0; d < c.length; d++) {
		var e = c[d];
		e.innerHTML = b
	}
};
w_W.UpdateWeekEnd = function() {
	w_Sa(w_W.bb, document.forms.config.showWeekEnd.checked, "weekend");
	for ( var a = w_W.Jg.weekly, b = document
			.getElementById("weekly-menu-select"), c = 0, d = document.forms.config.weekPattern.selectedIndex, e = 0; e < b.options.length; e++) {
		var f = b.options[e], g = a["weekly" + c][d];
		c++;
		var h = a["weekly" + c][d], i = g;
		if (document.forms.config.showWeekEnd.checked)
			i = i + " - " + h;
		f.text = i
	}
};
w_W.UpdatePreviewPostTitles = function() {
	w_Sa(w_W.bb, document.forms.config.showPosts.checked, "preview-posts")
};
w_W.ToggleDirection = function() {
	for ( var a = w_W.bb.getElementsByTagName("UL"), b = 0; b < a.length; b++) {
		for ( var c = a[b], d = c.ownerDocument.createDocumentFragment(); c
				.hasChildNodes();)
			d.appendChild(c.lastChild);
		c.appendChild(d)
	}
	var e = w_W.bb.getElementsByTagName("SELECT");
	for (b = 0; b < e.length; b++) {
		for ( var f = e[b], g = f.options.length, h = 0; h <= g / 2; h++) {
			var i = f.options[h].innerHTML, j = g - h - 1;
			f.options[h].innerHTML = f.options[j].innerHTML;
			f.options[j].innerHTML = i
		}
		f.options[0].selected = 0
	}
};
function w_Sa(a, b, c) {
	for ( var d = w_X(a, c), e = 0; e < d.length; e++) {
		var f = d[e];
		w_o(f, b)
	}
}
function w_X(a, b) {
	var c = {};
	c.select = function(d) {
		return d && w_p(d, b)
	};
	return w_s(a, c)
}
var _ArchiveConfig = w_W;
_ArchiveConfig._UpdateFrequency = _ArchiveConfig.UpdateFrequency;
_ArchiveConfig._Reformat = _ArchiveConfig.Reformat;
_ArchiveConfig._UpdateWeekEnd = _ArchiveConfig.UpdateWeekEnd;
_ArchiveConfig._UpdatePreviewPostTitles = _ArchiveConfig.UpdatePreviewPostTitles;
_ArchiveConfig._ToggleDirection = _ArchiveConfig.ToggleDirection;
function w_Y(a) {
	this.a = a;
	this.g = a.u()
}
w_Y.WIDGET_TYPE_NAME = "Label";
w_Y.prototype.e = function() {
	return w_Y.WIDGET_TYPE_NAME
};
w_Y.prototype.b = function() {
	return this.a
};
w_Y.prototype.d = function(a, b) {
	this.a.l(b)
};
function w_Z() {
}
w_Z.Tg = {
	sorting : w_c,
	title : w_c,
	securityToken : w_c
};
w_Z._Configure = function() {
	w_y.ConfigureWidget(w_Z.Tg)
};
w_Z.HIDDEN_CLASS = "hidden";
w_Z.PREVIEW_ROOT_ID = "preview-wrap";
w_Z.PREVIEW_CLASS = "preview";
w_Z._ShowPreview = function(a) {
	for ( var b = document.getElementById(w_Z.PREVIEW_ROOT_ID), c = w_X(b,
			w_Z.PREVIEW_CLASS), d = 0; d < c.length; d++)
		w_q(c[d], w_Z.HIDDEN_CLASS);
	w_r(document.getElementById(a), w_Z.HIDDEN_CLASS)
};
var _LabelView = w_Y, _LabelConfig = w_Z;
function w__(a) {
	this.a = a;
	this.g = a.u()
}
w__.WIDGET_TYPE_NAME = "TextList";
w__.prototype.e = function() {
	return w__.WIDGET_TYPE_NAME
};
w__.prototype.b = function() {
	return this.a
};
w__.prototype.i = function() {
	return w_d
};
w__.prototype.d = function(a, b) {
	a == "configure" && this.a.l(b)
};
var _TextListView = w__;
function w_0(a) {
	this.a = a;
	this.g = a.u()
}
w_0.WIDGET_TYPE_NAME = "LinkList";
w_0.prototype.e = function() {
	return w_0.WIDGET_TYPE_NAME
};
w_0.prototype.i = function() {
	return w_d
};
w_0.prototype.b = function() {
	return this.a
};
w_0.prototype.d = function(a, b) {
	a == "configure" && this.a.l(b)
};
var _LinkListView = w_0;
_LinkListView.prototype = w_0.prototype;
function w_1(a) {
	this.a = a;
	this.g = a.u()
}
w_1.prototype.e = function() {
	return "BloggerButton"
};
w_1.prototype.b = function() {
	return this.a
};
w_1.prototype.d = function(a, b) {
	this.a.l(b)
};
var _BloggerButtonView = w_1;
var w_2 = function(a) {
	this.a = a;
	this.g = a.u()
};
w_2.prototype.e = function() {
	return "Poll"
};
w_2.prototype.b = function() {
	return this.a
};
w_2.prototype.d = function(a, b) {
	if (a == "configure") {
		this.savePending = w_d;
		this.a.l(b)
	}
};
w_2.prototype.ua = function(a, b) {
	if (a == "configure")
		this.savePending = w_d;
	w_B.ua(b, window)
};
w_2.adjustFrameHeight = function() {
	for ( var a = document.getElementsByTagName("iframe"), b, c = 0; b = a[c]; c++)
		if (b.name.indexOf("poll-widget") == 0)
			try {
				if (window.frames[b.name] && window.frames[b.name].frames[0]) {
					var d = window.frames[b.name].frames[0].location.hash, e = Number(d
							.replace("#", ""));
					if (e)
						b.style.height = e + (document.all ? 10 : 0) + "px"
				}
			} catch (f) {
			}
};
window.setInterval(w_2.adjustFrameHeight, 500);
var _PollView = w_2;
function w_3(a) {
	this.a = a;
	this.g = a.u()
}
w_3.WIDGET_TYPE_NAME = "Navbar";
w_3.prototype.e = function() {
	return w_3.WIDGET_TYPE_NAME
};
w_3.prototype.b = function() {
	return this.a
};
w_3.prototype.i = function() {
	return w_d
};
w_3.prototype.d = function(a, b) {
	this.a.l(b)
};
w_3.FilterMap = {
	navbartype : w_c,
	securityToken : w_c
};
w_3.ConfigureWidget = function() {
	w_y.ConfigureWidget(w_3.FilterMap)
};
var _NavbarView = w_3;
_NavbarView.prototype = w_3.prototype;
_NavbarView._ConfigureWidget = _NavbarView.ConfigureWidget;
function w_4(a) {
	this.a = a;
	this.g = a.u()
}
w_4.WIDGET_TYPE_NAME = "Profile";
w_4.prototype.i = function() {
	return w_d
};
w_4.prototype.e = function() {
	return w_4.WIDGET_TYPE_NAME
};
w_4.prototype.b = function() {
	return this.a
};
w_4.prototype.d = function(a, b) {
	a == "configure" && this.a.l(b)
};
w_4.prototype.k = function() {
	this.g.rootElement.style.display = this.a.o().isDisplayable == w_d ? "none"
			: ""
};
var _ProfileView = w_4;
var w_5 = function(a) {
	this.a = a
};
w_5.prototype.b = function() {
	return this.a
};
w_5.prototype.e = function() {
	return "Feed"
};
w_5.prototype.d = function(a, b) {
	this.a.l(b)
};
w_5.prototype.ra = function() {
	document.location.reload()
};
w_5.prototype.k = function() {
	if (this.Sa = this.a.X("feedItemListDisplay")) {
		var a = this.b().o(), b = new w_6(a.feedUrl, this.Sa, {
			numItemsShow : a.numItemsShow,
			showItemAuthor : a.showItemAuthor,
			showItemDate : a.showItemDate,
			linkTarget : "_self"
		});
		b.Qb()
	}
};
w_5.Sg = {
	moduleTitle : w_c,
	feedUrl : w_C.GetRequiredStringFilter(),
	numItemsShow : w_C.GetNumberFilter(1, 5),
	showItemDate : w_c,
	showItemAuthor : w_c,
	securityToken : w_c
};
w_5.setConfigurationOptions = function() {
	w_y.ConfigureWidget(w_5.Sg)
};
var w_6 = function(a, b, c) {
	this.kd = a;
	this.Sa = b;
	this.K = c
};
w_6.Vg = 200;
w_6.Rg = "http://ajax.googleapis.com/ajax/services/feed/load";
w_6.prototype.Qb = function() {
	var a = new w_.net.Jsonp(w_6.Rg);
	a.yc(-1);
	a.send( {
		q : this.kd,
		num : this.K.numItemsShow,
		output : "json",
		v : "1.0"
	}, w_w(this.Se, this))
};
w_6.prototype.Se = function(a) {
	w_.dom.Ab(this.Sa);
	if (a.responseStatus == w_6.Vg) {
		var b = w_.dom.createElement("ul");
		this.Sa.appendChild(b);
		for ( var c = 0; c < a.responseData.feed.entries.length; c++) {
			var d = a.responseData.feed.entries[c], e = w_.dom
					.createElement("li");
			b.appendChild(e);
			var f = w_.dom.s("a", {
				href : d.link
			}, d.title);
			f.target = this.K.linkTarget;
			e.appendChild(w_.dom.s("span", {
				"class" : "item-title"
			}, f));
			if (this.K.showItemDate) {
				var g = w_.dom.s("span", {
					"class" : "item-date"
				}, "\u00a0-\u00a0"
						+ (new Date(d.publishedDate)).toLocaleDateString());
				e.appendChild(g)
			}
			if (this.K.showItemAuthor) {
				var h = w_.dom.s("span", {
					"class" : "item-author"
				}, "\u00a0-\u00a0" + d.author);
				e.appendChild(h)
			}
		}
		this.$c && this.$c(a.responseData.feed)
	} else {
		this.Sa.appendChild(w_.dom.s("span", w_c, "Error loading feed."));
		this.Hf && this.Hf()
	}
};
w_6.prototype.Ve = function(a) {
	this.$c = a
};
w_6.prototype.re = function() {
	this.$c = this.Hf = w_c
};
w_6.prototype.Tc = function(a) {
	this.kd = a
};
w_6.prototype.Rc = function(a) {
	this.K = a
};
var _FeedView = w_5;
_FeedView._setConfigurationOptions = w_5.setConfigurationOptions;
var w_7 = function(a, b, c) {
	this.Eh = b;
	this.vc = c;
	this.Gg = w_d;
	this.he = new w_D("status-message");
	this.K = {
		linkTarget : "_blank"
	};
	this.pa = new w_6(this.kd, a, this.K)
};
w_7.Qg = "moduleTitle";
w_7.ei = "feedUrl";
w_7.ye = "step1";
w_7.ze = "step2";
w_7.Ib = "feedUrl";
w_7.prototype.ve = function(a, b) {
	this.he.Dc();
	w_C.ClearError(w_7.Ib);
	if (a) {
		var c = document.getElementById(w_7.Qg);
		c.value = b.title;
		this.Pb(b.title)
	}
	this.He()
};
w_7.prototype.Ze = function() {
	this.he.Dc();
	w_C.SetError(w_7.Ib, this.vc._invalidFeedUrl);
	this.Lb()
};
w_7.prototype.Lb = function() {
	w_n(document.getElementById(w_7.ye), w_b);
	w_n(document.getElementById(w_7.ze), w_d)
};
w_7.prototype.He = function() {
	w_n(document.getElementById(w_7.ye), w_d);
	w_n(document.getElementById(w_7.ze), w_b)
};
w_7.prototype.Pb = function(a) {
	this.Eh.innerHTML = a
};
w_7.prototype.Vc = function(a) {
	this.K.showItemAuthor = a;
	this.Rb()
};
w_7.prototype.Wc = function(a) {
	this.K.showItemDate = a;
	this.Rb()
};
w_7.prototype.Uc = function(a) {
	this.K.numItemsShow = a;
	this.Rb()
};
w_7.prototype.Rb = function() {
	this.pa.Rc(this.K);
	this.pa.re();
	this.pa.Qb()
};
w_7.prototype.Pc = function(a, b, c, d) {
	if (!a || a == "")
		w_C.SetError(w_7.Ib, this.vc._missingFeedUrl);
	else if (a.length > 2083)
		w_C.SetError(w_7.Ib, this.vc._feedUrlTooLong);
	else {
		this.he.N(this.vc._retrievingFeed);
		this.Xe(a, b, c);
		this.Gg = d;
		this.te(a, w_w(this.pe, this))
	}
};
w_7.prototype.te = function(a, b) {
	if (a.indexOf("http://") != 0)
		a = "http://" + a;
	var c = new w_.net.Jsonp("http://www.google.com/uds/GlookupFeed");
	c.yc(-1);
	c.send( {
		q : a,
		v : "1.0"
	}, b)
};
w_7.prototype.pe = function(a) {
	if (a.responseStatus == 200) {
		document.getElementById("feedUrl").value = a.responseData.url;
		this.pa.Tc(a.responseData.url);
		this.pa.Ve(w_w(this.ve, this, this.Gg));
		this.pa.Qb()
	} else
		this.Ze()
};
w_7.prototype.Xe = function(a, b) {
	this.K = b;
	this.pa.Tc(a);
	this.pa.Rc(this.K)
};
w_7.prototype._GoToStep1 = w_7.prototype.Lb;
w_7.prototype._RetrieveFeedAndGoToStep2 = w_7.prototype.Pc;
w_7.prototype._RefreshModuleTitle = w_7.prototype.Pb;
w_7.prototype._SetShowItemAuthor = w_7.prototype.Vc;
w_7.prototype._SetShowItemDate = w_7.prototype.Wc;
w_7.prototype._SetNumItemsShow = w_7.prototype.Uc;
var _FeedConfig = w_7;
function w_8(a) {
	this.a = a;
	this.g = a.u()
}
w_8.WIDGET_TYPE_NAME = "Followers";
w_8.prototype.i = function() {
	return w_d
};
w_8.prototype.e = function() {
	return w_8.WIDGET_TYPE_NAME
};
w_8.prototype.b = function() {
	return this.a
};
w_8.prototype.d = function(a, b) {
	a == "configure" && this.a.l(b)
};
w_8._openPopup = function(a) {
	a = a.indexOf("?") > 0 ? a + "&" : a + "?";
	a = a + "loginTemplateDirectory=FOLLOWING";
	window
			.open(
					a,
					"_blank",
					"height=600, width=640, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no")
};
w_8.prototype.ra = function() {
	window.setTimeout( function() {
		document.location.reload()
	}, 1000);
	return w_b
};
var _FollowersView = w_8;
function w_9(a) {
	this.a = a;
	this.g = a.u()
}
w_9.prototype.e = function() {
	return "Gadget"
};
w_9.prototype.b = function() {
	return this.a
};
w_9.prototype.d = function(a, b) {
	this.a.l(b)
};
w_9.prototype.Te = function(a) {
	var b = document.getElementById(this.f);
	if (b)
		b.style.height = a + "px"
};
w_9.prototype.Nc = function() {
	gadgets.rpc.register("resize_iframe", this.Te);
	gadgets.rpc.register("set_pref", function() {
	})
};
w_9.prototype.k = function() {
	if (!w_9.InitializedRpc && !window.gadgets) {
		var a = document.createElement("script");
		a.src = "http://blogger.gmodules.com/gadgets/js/rpc.js?c=1&container=blogger";
		a.type = "text/javascript";
		var b = this;
		a.onload = function() {
			b.Nc()
		};
		a.onreadystatechange = function() {
			if (this.readyState == "loaded" || this.readyState == "complete")
				b.Nc()
		};
		document.getElementsByTagName("body")[0].appendChild(a);
		w_9.InitializedRpc = function() {
		}
	}
};
w_9.prototype.ra = function() {
	window.setTimeout( function() {
		document.location.reload()
	}, 1000);
	return w_b
};
var _GadgetView = w_9;
function _SW_toggleReaderList(a, b) {
	var c = document.getElementById("SW_READER_LIST_" + b), d = document
			.getElementById("SW_READER_LIST_CLOSED_" + b);
	if (!a)
		a = window.event;
	a.cancelBubble = w_b;
	a.stopPropagation && a.stopPropagation();
	var e = document.onclick;
	if (window.oldSubscribePopup && window.oldSubscribePopup != c) {
		window.oldSubscribePopup.style.display = "none";
		window.oldSubscribePopupUnder.style.visibility = "visible"
	}
	if (c.style.display == "none") {
		c.style.display = "";
		window.oldSubscribePopup = c;
		window.oldSubscribePopupUnder = d;
		d.style.visibility = "hidden";
		document.onclick = function() {
			c.style.display = "none";
			d.style.visibility = "visible";
			if (e)
				document.onclick = e
		}
	} else {
		c.style.display = "none";
		d.style.visibility = "visible";
		if (e)
			document.onclick = e
	}
	return w_d
}
function _SW_hideReaderList(a) {
	var b = document.getElementById("SW_READER_LIST_" + a), c = document
			.getElementById("SW_READER_LIST_UNDER" + a);
	b.style.display = "none";
	c.style.visibility = "visible"
}
function w_$(a) {
	this.a = a;
	this.g = a.u()
}
w_$.WIDGET_TYPE_NAME = "Subscribe";
w_$.prototype.i = function() {
	return w_d
};
w_$.prototype.e = function() {
	return w_$.WIDGET_TYPE_NAME
};
w_$.prototype.b = function() {
	return this.a
};
w_$.prototype.d = function(a, b) {
	a == "configure" && this.a.l(b)
};
var _SubscribeView = w_$;
if (window.jstiming) {
	window.jstiming.pf = {};
	window.jstiming.Nh = 1;
	function w_Ta(a, b, c) {
		var d = a.t[b];
		if (!d)
			return undefined;
		d = a.t[b][0];
		if (c != undefined)
			var e = c;
		else
			e = a.t.start[0];
		return d - e
	}
	window.jstiming.report = function(a, b, c) {
		var d = "";
		if (window.jstiming.pt) {
			d += "&srt=" + window.jstiming.pt;
			delete window.jstiming.pt
		}
		try {
			if (window.external && window.external.tran)
				d += "&tran=" + window.external.tran
		} catch (e) {
		}
		if (a.ih)
			d += "&" + a.ih;
		var f = a.t, g = f.start, h = [], i = [];
		for ( var j in f)
			if (!(j == "start"))
				if (!(j.indexOf("_") == 0)) {
					var k = f[j][1];
					if (k)
						f[k] && i.push(j + "." + w_Ta(a, j, f[k][0]));
					else
						g && h.push(j + "." + w_Ta(a, j))
				}
		delete f.start;
		if (b)
			for ( var l in b)
				d += "&" + l + "=" + b[l];
		var m = [
				c ? c : "http://csi.gstatic.com/csi",
				"?v=3",
				"&s=" + (window.jstiming.sn ? window.jstiming.sn : "blogger")
						+ "&action=", a.name,
				i.length ? "&it=" + i.join(",") + d : d, "&rt=", h.join(",") ]
				.join(""), n = new Image, o = window.jstiming.Nh++;
		window.jstiming.pf[o] = n;
		n.onload = n.onerror = function() {
			delete window.jstiming.pf[o]
		};
		n.src = m;
		n = w_c;
		return m
	}
};
w_.debug = {};
w_.debug.errorHandlerWeakDep = {
	protectEntryPoint : function(a) {
		return a
	}
};
w_.Disposable = function() {
};
w_.Disposable.prototype.jd = w_d;
w_.Disposable.prototype.dispose = function() {
	if (!this.jd) {
		this.jd = w_b;
		this.L()
	}
};
w_.Disposable.prototype.L = function() {
};
w_.dispose = function(a) {
	a && typeof a.dispose == "function" && a.dispose()
};
w_.structs.SimplePool = function(a, b) {
	w_.Disposable.call(this);
	this.vg = b;
	this.za = [];
	this.zf(a)
};
w_.inherits(w_.structs.SimplePool, w_.Disposable);
w_.structs.SimplePool.prototype.Wb = w_c;
w_.structs.SimplePool.prototype.Zb = w_c;
w_.structs.SimplePool.prototype.cb = function(a) {
	this.Wb = a
};
w_.structs.SimplePool.prototype.ce = function(a) {
	this.Zb = a
};
w_.structs.SimplePool.prototype.ja = function() {
	if (this.za.length)
		return this.za.pop();
	return this.cd()
};
w_.structs.SimplePool.prototype.Ja = function(a) {
	this.za.length < this.vg ? this.za.push(a) : this.hd(a)
};
w_.structs.SimplePool.prototype.zf = function(a) {
	if (a > this.vg)
		w_a(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
	for ( var b = 0; b < a; b++)
		this.za.push(this.cd())
};
w_.structs.SimplePool.prototype.cd = function() {
	return this.Wb ? this.Wb() : {}
};
w_.structs.SimplePool.prototype.hd = function(a) {
	if (this.Zb)
		this.Zb(a);
	else if (w_.isFunction(a.dispose))
		a.dispose();
	else
		for ( var b in a)
			delete a[b]
};
w_.structs.SimplePool.prototype.L = function() {
	w_.structs.SimplePool.Ac.L.call(this);
	for ( var a = this.za; a.length;)
		this.hd(a.pop());
	delete this.za
};
w_.events = {};
w_.events.Event = function(a, b) {
	this.type = a;
	this.currentTarget = this.target = b
};
w_.inherits(w_.events.Event, w_.Disposable);
w_.events.Event.prototype.L = function() {
	delete this.type;
	delete this.target;
	delete this.currentTarget
};
w_.events.Event.prototype.la = w_d;
w_.events.Event.prototype.Ka = w_b;
w_.events.Event.prototype.stopPropagation = function() {
	this.la = w_b
};
w_.events.Event.prototype.preventDefault = function() {
	this.Ka = w_d
};
w_.events.BrowserEvent = function(a, b) {
	a && this.init(a, b)
};
w_.inherits(w_.events.BrowserEvent, w_.events.Event);
w_.events.BrowserEvent.MouseButton = {
	LEFT : 0,
	MIDDLE : 1,
	RIGHT : 2
};
w_.events.BrowserEvent.fi = [ 1, 4, 2 ];
w_.events.BrowserEvent.prototype.type = w_c;
w_.events.BrowserEvent.prototype.target = w_c;
w_.events.BrowserEvent.prototype.relatedTarget = w_c;
w_.events.BrowserEvent.prototype.offsetX = 0;
w_.events.BrowserEvent.prototype.offsetY = 0;
w_.events.BrowserEvent.prototype.clientX = 0;
w_.events.BrowserEvent.prototype.clientY = 0;
w_.events.BrowserEvent.prototype.screenX = 0;
w_.events.BrowserEvent.prototype.screenY = 0;
w_.events.BrowserEvent.prototype.button = 0;
w_.events.BrowserEvent.prototype.keyCode = 0;
w_.events.BrowserEvent.prototype.charCode = 0;
w_.events.BrowserEvent.prototype.ctrlKey = w_d;
w_.events.BrowserEvent.prototype.altKey = w_d;
w_.events.BrowserEvent.prototype.shiftKey = w_d;
w_.events.BrowserEvent.prototype.metaKey = w_d;
w_.events.BrowserEvent.prototype.ca = w_c;
w_.events.BrowserEvent.prototype.init = function(a, b) {
	this.type = a.type;
	this.target = a.target || a.srcElement;
	this.currentTarget = b;
	this.relatedTarget = a.relatedTarget ? a.relatedTarget
			: this.type == w_.events.EventType.MOUSEOVER ? a.fromElement
					: this.type == w_.events.EventType.MOUSEOUT ? a.toElement
							: w_c;
	this.offsetX = typeof a.layerX == "number" ? a.layerX : a.offsetX;
	this.offsetY = typeof a.layerY == "number" ? a.layerY : a.offsetY;
	this.clientX = typeof a.clientX == "number" ? a.clientX : a.pageX;
	this.clientY = typeof a.clientY == "number" ? a.clientY : a.pageY;
	this.screenX = a.screenX || 0;
	this.screenY = a.screenY || 0;
	this.button = a.button;
	this.keyCode = a.keyCode || 0;
	this.charCode = a.charCode
			|| (this.type == w_.events.EventType.KEYPRESS ? a.keyCode : 0);
	this.ctrlKey = a.ctrlKey;
	this.altKey = a.altKey;
	this.shiftKey = a.shiftKey;
	this.metaKey = a.metaKey;
	this.ca = a;
	delete this.Ka;
	delete this.la
};
w_.events.BrowserEvent.prototype.stopPropagation = function() {
	this.la = w_b;
	if (this.ca.stopPropagation)
		this.ca.stopPropagation();
	else
		this.ca.cancelBubble = w_b
};
w_.events.BrowserEvent.prototype.preventDefault = function() {
	this.Ka = w_d;
	if (this.ca.preventDefault)
		this.ca.preventDefault();
	else {
		this.ca.returnValue = w_d;
		try {
			this.ca.keyCode = -1
		} catch (a) {
		}
	}
};
w_.events.BrowserEvent.prototype.L = function() {
	w_.events.BrowserEvent.Ac.L.call(this);
	this.ca = w_c
};
w_.events.Listener = function() {
};
w_.events.Listener.eh = 0;
w_.events.Listener.prototype.sc = w_c;
w_.events.Listener.prototype.listener = w_c;
w_.events.Listener.prototype.proxy = w_c;
w_.events.Listener.prototype.src = w_c;
w_.events.Listener.prototype.type = w_c;
w_.events.Listener.prototype.capture = w_c;
w_.events.Listener.prototype.handler = w_c;
w_.events.Listener.prototype.key = 0;
w_.events.Listener.prototype.removed = w_d;
w_.events.Listener.prototype.Ub = w_d;
w_.events.Listener.prototype.init = function(a, b, c, d, e, f) {
	if (w_.isFunction(a))
		this.sc = w_b;
	else if (a && a.handleEvent && w_.isFunction(a.handleEvent))
		this.sc = w_d;
	else
		w_a(Error("Invalid listener argument"));
	this.listener = a;
	this.proxy = b;
	this.src = c;
	this.type = d;
	this.capture = !!e;
	this.handler = f;
	this.Ub = w_d;
	this.key = ++w_.events.Listener.eh;
	this.removed = w_d
};
w_.events.Listener.prototype.handleEvent = function(a) {
	if (this.sc)
		return this.listener.call(this.handler || this.src, a);
	return this.listener.handleEvent.call(this.listener, a)
};
w_.events.oa = {};
w_.events.C = {};
w_.events.ea = {};
w_.events.OBJECT_POOL_INITIAL_COUNT = 0;
w_.events.OBJECT_POOL_MAX_COUNT = 600;
w_.events.ab = new w_.structs.SimplePool(w_.events.OBJECT_POOL_INITIAL_COUNT,
		w_.events.OBJECT_POOL_MAX_COUNT);
w_.events.ab.cb( function() {
	return {
		h : 0,
		aa : 0
	}
});
w_.events.ab.ce( function(a) {
	a.h = 0
});
w_.events.ARRAY_POOL_INITIAL_COUNT = 0;
w_.events.ARRAY_POOL_MAX_COUNT = 600;
w_.events.va = new w_.structs.SimplePool(w_.events.ARRAY_POOL_INITIAL_COUNT,
		w_.events.ARRAY_POOL_MAX_COUNT);
w_.events.va.cb( function() {
	return []
});
w_.events.va.ce( function(a) {
	a.length = 0;
	delete a.yb;
	delete a.Xd
});
w_.events.HANDLE_EVENT_PROXY_POOL_INITIAL_COUNT = 0;
w_.events.HANDLE_EVENT_PROXY_POOL_MAX_COUNT = 600;
w_.events.cg = new w_.structs.SimplePool(
		w_.events.HANDLE_EVENT_PROXY_POOL_INITIAL_COUNT,
		w_.events.HANDLE_EVENT_PROXY_POOL_MAX_COUNT);
w_.events.cg.cb( function() {
	var a = function(b) {
		return w_.events.Jd.call(a.src, a.key, b)
	};
	return a
});
w_.events.LISTENER_POOL_INITIAL_COUNT = 0;
w_.events.LISTENER_POOL_MAX_COUNT = 600;
w_.events.hh = function() {
	return new w_.events.Listener
};
w_.events.Vd = new w_.structs.SimplePool(w_.events.LISTENER_POOL_INITIAL_COUNT,
		w_.events.LISTENER_POOL_MAX_COUNT);
w_.events.Vd.cb(w_.events.hh);
w_.events.EVENT_POOL_INITIAL_COUNT = 0;
w_.events.EVENT_POOL_MAX_COUNT = 600;
w_.events.fh = function() {
	return new w_.events.BrowserEvent
};
w_.events.gh = function() {
	var a = w_c;
	if (w_.userAgent.IE) {
		a = new w_.structs.SimplePool(w_.events.EVENT_POOL_INITIAL_COUNT,
				w_.events.EVENT_POOL_MAX_COUNT);
		a.cb(w_.events.fh)
	}
	return a
};
w_.events.If = w_.events.gh();
w_.events.Hh = "on";
w_.events.Yd = {};
w_.events.ii = "_";
w_.events.listen = function(a, b, c, d, e) {
	if (b)
		if (w_.isArray(b)) {
			for ( var f = 0; f < b.length; f++)
				w_.events.listen(a, b[f], c, d, e);
			return w_c
		} else {
			var g = !!d, h = w_.events.C;
			b in h || (h[b] = w_.events.ab.ja());
			h = h[b];
			if (!(g in h)) {
				h[g] = w_.events.ab.ja();
				h.h++
			}
			h = h[g];
			var i = w_.getHashCode(a), j, k;
			h.aa++;
			if (h[i]) {
				j = h[i];
				for (f = 0; f < j.length; f++) {
					k = j[f];
					if (k.listener == c && k.handler == e) {
						if (k.removed)
							break;
						return j[f].key
					}
				}
			} else {
				j = h[i] = w_.events.va.ja();
				h.h++
			}
			var l = w_.events.cg.ja();
			l.src = a;
			k = w_.events.Vd.ja();
			k.init(c, l, a, b, g, e);
			var m = k.key;
			l.key = m;
			j.push(k);
			w_.events.oa[m] = k;
			w_.events.ea[i] || (w_.events.ea[i] = w_.events.va.ja());
			w_.events.ea[i].push(k);
			if (a.addEventListener) {
				if (a == w_.global || !a.fd)
					a.addEventListener(b, l, g)
			} else
				a.attachEvent(w_.events.Xf(b), l);
			return m
		}
	else
		w_a(Error("Invalid event type"))
};
w_.events.listenOnce = function(a, b, c, d, e) {
	if (w_.isArray(b)) {
		for ( var f = 0; f < b.length; f++)
			w_.events.listenOnce(a, b[f], c, d, e);
		return w_c
	}
	var g = w_.events.listen(a, b, c, d, e), h = w_.events.oa[g];
	h.Ub = w_b;
	return g
};
w_.events.unlisten = function(a, b, c, d, e) {
	if (w_.isArray(b)) {
		for ( var f = 0; f < b.length; f++)
			w_.events.unlisten(a, b[f], c, d, e);
		return w_c
	}
	var g = !!d, h = w_.events.wd(a, b, g);
	if (!h)
		return w_d;
	for (f = 0; f < h.length; f++)
		if (h[f].listener == c && h[f].capture == g && h[f].handler == e)
			return w_.events.unlistenByKey(h[f].key);
	return w_d
};
w_.events.unlistenByKey = function(a) {
	if (!w_.events.oa[a])
		return w_d;
	var b = w_.events.oa[a];
	if (b.removed)
		return w_d;
	var c = b.src, d = b.type, e = b.proxy, f = b.capture;
	if (c.removeEventListener) {
		if (c == w_.global || !c.fd)
			c.removeEventListener(d, e, f)
	} else
		c.detachEvent && c.detachEvent(w_.events.Xf(d), e);
	var g = w_.getHashCode(c), h = w_.events.C[d][f][g];
	if (w_.events.ea[g]) {
		var i = w_.events.ea[g];
		w_.array.remove(i, b);
		i.length == 0 && delete w_.events.ea[g]
	}
	b.removed = w_b;
	h.Xd = w_b;
	w_.events.uf(d, f, g, h);
	delete w_.events.oa[a];
	return w_b
};
w_.events.uf = function(a, b, c, d) {
	if (!d.yb)
		if (d.Xd) {
			for ( var e = 0, f = 0; e < d.length; e++)
				if (d[e].removed)
					w_.events.Vd.Ja(d[e]);
				else {
					if (e != f)
						d[f] = d[e];
					f++
				}
			d.length = f;
			d.Xd = w_d;
			if (f == 0) {
				w_.events.va.Ja(d);
				delete w_.events.C[a][b][c];
				w_.events.C[a][b].h--;
				if (w_.events.C[a][b].h == 0) {
					w_.events.ab.Ja(w_.events.C[a][b]);
					delete w_.events.C[a][b];
					w_.events.C[a].h--
				}
				if (w_.events.C[a].h == 0) {
					w_.events.ab.Ja(w_.events.C[a]);
					delete w_.events.C[a]
				}
			}
		}
};
w_.events.removeAll = function(a, b, c) {
	var d = 0, e = a == w_c, f = b == w_c, g = c == w_c;
	c = !!c;
	if (e)
		w_.object.forEach(w_.events.ea, function(l) {
			for ( var m = l.length - 1; m >= 0; m--) {
				var n = l[m];
				if ((f || b == n.type) && (g || c == n.capture)) {
					w_.events.unlistenByKey(n.key);
					d++
				}
			}
		});
	else {
		var h = w_.getHashCode(a);
		if (w_.events.ea[h])
			for ( var i = w_.events.ea[h], j = i.length - 1; j >= 0; j--) {
				var k = i[j];
				if ((f || b == k.type) && (g || c == k.capture)) {
					w_.events.unlistenByKey(k.key);
					d++
				}
			}
	}
	return d
};
w_.events.getListeners = function(a, b, c) {
	return w_.events.wd(a, b, c) || []
};
w_.events.wd = function(a, b, c) {
	var d = w_.events.C;
	if (b in d) {
		d = d[b];
		if (c in d) {
			d = d[c];
			var e = w_.getHashCode(a);
			if (d[e])
				return d[e]
		}
	}
	return w_c
};
w_.events.getListener = function(a, b, c, d, e) {
	var f = !!d, g = w_.events.wd(a, b, f);
	if (g)
		for ( var h = 0; h < g.length; h++)
			if (g[h].listener == c && g[h].capture == f && g[h].handler == e)
				return g[h];
	return w_c
};
w_.events.hasListener = function(a, b, c) {
	var d = w_.getHashCode(a), e = w_.events.ea[d];
	if (e) {
		var f = w_.isDef(b), g = w_.isDef(c);
		if (f && g) {
			var h = w_.events.C[b];
			return !!h && !!h[c] && d in h[c]
		} else
			return f || g ? w_.array.some(e, function(i) {
				return f && i.type == b || g && i.capture == c
			}) : w_b
	}
	return w_d
};
w_.events.expose = function(a) {
	var b = [];
	for ( var c in a)
		a[c] && a[c].id ? b.push(c + " = " + a[c] + " (" + a[c].id + ")") : b
				.push(c + " = " + a[c]);
	return b.join("\n")
};
w_.events.EventType = {
	CLICK : "click",
	DBLCLICK : "dblclick",
	MOUSEDOWN : "mousedown",
	MOUSEUP : "mouseup",
	MOUSEOVER : "mouseover",
	MOUSEOUT : "mouseout",
	MOUSEMOVE : "mousemove",
	SELECTSTART : "selectstart",
	KEYPRESS : "keypress",
	KEYDOWN : "keydown",
	KEYUP : "keyup",
	BLUR : "blur",
	FOCUS : "focus",
	DEACTIVATE : "deactivate",
	FOCUSIN : w_.userAgent.IE ? "focusin" : "DOMFocusIn",
	FOCUSOUT : w_.userAgent.IE ? "focusout" : "DOMFocusOut",
	CHANGE : "change",
	SELECT : "select",
	SUBMIT : "submit",
	LOAD : "load",
	UNLOAD : "unload",
	ERROR : "error",
	HELP : "help",
	RESIZE : "resize",
	SCROLL : "scroll",
	READYSTATECHANGE : "readystatechange",
	CONTEXTMENU : "contextmenu"
};
w_.events.Xf = function(a) {
	if (a in w_.events.Yd)
		return w_.events.Yd[a];
	return w_.events.Yd[a] = w_.events.Hh + a
};
w_.events.fireListeners = function(a, b, c, d) {
	var e = w_.events.C;
	if (b in e) {
		e = e[b];
		if (c in e)
			return w_.events.Ua(e[c], a, b, c, d)
	}
	return w_b
};
w_.events.Ua = function(a, b, c, d, e) {
	var f = 1, g = w_.getHashCode(b);
	if (a[g]) {
		a.aa--;
		var h = a[g];
		if (h.yb)
			h.yb++;
		else
			h.yb = 1;
		try {
			for ( var i = h.length, j = 0; j < i; j++) {
				var k = h[j];
				if (k && !k.removed)
					f &= w_.events.fireListener(k, e) !== w_d
			}
		} finally {
			h.yb--;
			w_.events.uf(c, d, g, h)
		}
	}
	return Boolean(f)
};
w_.events.fireListener = function(a, b) {
	var c = a.handleEvent(b);
	a.Ub && w_.events.unlistenByKey(a.key);
	return c
};
w_.events.getTotalListenerCount = function() {
	return w_.object.T(w_.events.oa)
};
w_.events.dispatchEvent = function(a, b) {
	if (w_.isString(b))
		b = new w_.events.Event(b, a);
	else if (b instanceof w_.events.Event)
		b.target = b.target || a;
	else {
		var c = b;
		b = new w_.events.Event(b.type, a);
		w_.object.extend(b, c)
	}
	var d = 1, e, f = b.type, g = w_.events.C;
	if (!(f in g))
		return w_b;
	g = g[f];
	var h = w_b in g, i;
	if (h) {
		e = [];
		for ( var j = a; j; j = j.Ad())
			e.push(j);
		i = g[w_b];
		i.aa = i.h;
		for ( var k = e.length - 1; !b.la && k >= 0 && i.aa; k--) {
			b.currentTarget = e[k];
			d &= w_.events.Ua(i, e[k], b.type, w_b, b) && b.Ka != w_d
		}
	}
	var l = w_d in g;
	if (l) {
		i = g[w_d];
		i.aa = i.h;
		if (h)
			for (k = 0; !b.la && k < e.length && i.aa; k++) {
				b.currentTarget = e[k];
				d &= w_.events.Ua(i, e[k], b.type, w_d, b) && b.Ka != w_d
			}
		else
			for ( var m = a; !b.la && m && i.aa; m = m.Ad()) {
				b.currentTarget = m;
				d &= w_.events.Ua(i, m, b.type, w_d, b) && b.Ka != w_d
			}
	}
	return Boolean(d)
};
w_.events.protectBrowserEventEntryPoint = function(a, b) {
	w_.events.Jd = a.protectEntryPoint(w_.events.Jd, b)
};
w_.events.Jd = function(a, b) {
	if (!w_.events.oa[a])
		return w_b;
	var c = w_.events.oa[a], d = c.type, e = w_.events.C;
	if (!(d in e))
		return w_b;
	e = e[d];
	var f, g;
	if (w_.userAgent.IE) {
		var h = b || w_.getObjectByName("window.event"), i = w_b in e, j = w_d in e;
		if (i) {
			if (w_.events.Bh(h))
				return w_b;
			w_.events.Dh(h)
		}
		var k = w_.events.If.ja();
		k.init(h, this);
		f = w_b;
		try {
			if (i) {
				for ( var l = w_.events.va.ja(), m = k.currentTarget; m; m = m.parentNode)
					l.push(m);
				g = e[w_b];
				g.aa = g.h;
				for ( var n = l.length - 1; !k.la && n >= 0 && g.aa; n--) {
					k.currentTarget = l[n];
					f &= w_.events.Ua(g, l[n], d, w_b, k)
				}
				if (j) {
					g = e[w_d];
					g.aa = g.h;
					for (n = 0; !k.la && n < l.length && g.aa; n++) {
						k.currentTarget = l[n];
						f &= w_.events.Ua(g, l[n], d, w_d, k)
					}
				}
			} else
				f = w_.events.fireListener(c, k)
		} finally {
			if (l) {
				l.length = 0;
				w_.events.va.Ja(l)
			}
			k.dispose();
			w_.events.If.Ja(k)
		}
		return f
	}
	var o = new w_.events.BrowserEvent(b, this);
	try {
		f = w_.events.fireListener(c, o)
	} finally {
		o.dispose()
	}
	return f
};
w_.events.Dh = function(a) {
	var b = w_d;
	if (a.keyCode == 0)
		try {
			a.keyCode = -1;
			return
		} catch (c) {
			b = w_b
		}
	if (b || a.returnValue == undefined)
		a.returnValue = w_b
};
w_.events.Bh = function(a) {
	return a.keyCode < 0 || a.returnValue != undefined
};
w_.events.bi = 0;
w_.events.getUniqueId = function(a) {
	return a + "_" + w_.events.bi++
};
w_.events.EventTarget = function() {
};
w_.inherits(w_.events.EventTarget, w_.Disposable);
w_.events.EventTarget.prototype.fd = w_b;
w_.events.EventTarget.prototype.$d = w_c;
w_.events.EventTarget.prototype.Ad = function() {
	return this.$d
};
w_.events.EventTarget.prototype.addEventListener = function(a, b, c, d) {
	w_.events.listen(this, a, b, c, d)
};
w_.events.EventTarget.prototype.removeEventListener = function(a, b, c, d) {
	w_.events.unlisten(this, a, b, c, d)
};
w_.events.EventTarget.prototype.dispatchEvent = function(a) {
	return w_.events.dispatchEvent(this, a)
};
w_.events.EventTarget.prototype.L = function() {
	w_.events.EventTarget.Ac.L.call(this);
	w_.events.removeAll(this);
	this.$d = w_c
};
w_H.util = {};
w_H.util.logging = {};
w_H.util.logging.PROD_BLOGGER_HOST_URL = "www.blogger.com";
w_H.util.logging.ig = w_H.util.logging.PROD_BLOGGER_HOST_URL;
w_H.util.logging.setHostPort = function(a) {
	w_H.util.logging.ig = a
};
w_H.util.logging.tg = "/nc";
w_H.util.logging.setLoggingPath = function(a) {
	w_H.util.logging.tg = a
};
w_H.util.logging.ParamKey = {
	EVENT_TYPE : "e",
	SOURCE_PAGE : "pg",
	DURATION : "dur"
};
w_H.util.logging.EventType = {
	UNLOAD_PAGE : "u",
	CLICK : "c"
};
w_H.util.logging.SourcePage = {
	EXPLORE : "be",
	BLOG : "blog",
	POST : "post"
};
w_H.util.logging.formatId = function(a, b) {
	if (a)
		return b ? a + ":" + b : a;
	return ""
};
w_H.util.logging.Fg = w_d;
w_H.util.logging.setReferredFromExplore = function(a) {
	w_H.util.logging.Fg = a
};
w_H.util.logging.isReferredFromExplore = function() {
	return w_H.util.logging.Fg
};
w_H.util.logging.Ch = function(a, b, c) {
	if (a) {
		var d = w_.Uri.parse(a), e = d.tb().toLowerCase(), f = d.Aa();
		if (f == c) {
			if (e == w_H.util.logging.PROD_BLOGGER_HOST_URL)
				return w_b;
			if (b.indexOf(w_H.util.logging.PROD_BLOGGER_HOST_URL) < 0)
				return w_b
		}
	}
	return w_d
};
w_H.util.logging.log = function(a) {
	var b = w_H.util.logging.ig + w_H.util.logging.tg, c = w_.Uri.parse(b), d = w_d;
	for ( var e in a) {
		d = w_b;
		c.wc(e, a[e])
	}
	if (d) {
		(new Image).src = c.toString();
		return c
	}
	return w_c
};
w_H.util.logging.logWithParameterMap = function(a) {
	if (!w_H.util.logging.Ga[a])
		return w_c;
	return w_H.util.logging.log(w_H.util.logging.Ga[a])
};
w_H.util.logging.Ga = {};
w_H.util.logging.addParametersToMap = function(a, b) {
	var c = w_H.util.logging.Ga[a];
	if (c)
		for ( var d in b) {
			if (c[d])
				return w_c
		}
	else {
		c = {};
		w_H.util.logging.Ga[a] = c
	}
	for (d in b)
		c[d] = b[d];
	return w_H.util.logging.Ga[a]
};
w_H.util.logging.clearParameterMap = function(a) {
	delete w_H.util.logging.Ga[a]
};
w_H.util.logging.Nb = "paramMapPageUnload_InternalUseOnly";
w_H.util.logging.addToPageUnloadParameterMap = function(a) {
	return w_H.util.logging.addParametersToMap(w_H.util.logging.Nb, a)
};
w_H.util.logging.Qa = {};
w_H.util.logging.registerEvent = function(a) {
	if (w_H.util.logging.Qa[a])
		return -1;
	w_H.util.logging.Qa[a] = w_.now();
	return w_H.util.logging.Qa[a]
};
w_H.util.logging.getEventElapse = function(a) {
	if (!w_H.util.logging.Qa[a])
		return -1;
	return w_.now() - w_H.util.logging.Qa[a]
};
w_H.util.logging.clearEvent = function(a) {
	delete w_H.util.logging.Qa[a]
};
w_H.util.logging.Ec = "eventPageLoading_InternalUseOnly";
w_H.util.logging.getDurationMillis = function() {
	return w_H.util.logging.getEventElapse(w_H.util.logging.Ec)
};
w_H.util.logging.pageOnBeforeUnload = function() {
	if (w_H.util.logging.Ga[w_H.util.logging.Nb] == undefined)
		return w_c;
	var a = {};
	a[w_H.util.logging.ParamKey.DURATION] = w_H.util.logging
			.getDurationMillis();
	w_H.util.logging.addToPageUnloadParameterMap(a);
	return w_H.util.logging.logWithParameterMap(w_H.util.logging.Nb)
};
w_H.util.logging.initialize = function(a, b, c) {
	w_H.util.logging.setHostPort(a);
	w_H.util.logging.setReferredFromExplore(w_H.util.logging.Ch(b, a,
			"/explore"));
	w_H.util.logging.clearEvent(w_H.util.logging.Ec);
	w_H.util.logging.registerEvent(w_H.util.logging.Ec);
	w_H.util.logging.clearParameterMap(w_H.util.logging.Nb);
	c && w_.events.listen(window, "beforeunload", function() {
		w_H.util.logging.pageOnBeforeUnload()
	})
};
w_H.explore = {};
w_H.explore.loggingcommons = {};
w_H.explore.loggingcommons.ParamKey = {
	POSITION : "pos",
	LIST_ID : "fid",
	LIST_SIZE : "lsz",
	EXPERIMENT : "ex",
	ITEM_ID : "iid",
	ITEM_URL : "url",
	ITEM_SCORE : "sco",
	ITEM_DTIME : "dt"
};
w_H.explore.loggingcommons.addToPageUnloadParameterMap = function(a, b, c, d, e) {
	var f = {};
	f[w_H.util.logging.ParamKey.EVENT_TYPE] = w_H.util.logging.EventType.UNLOAD_PAGE;
	f[w_H.util.logging.ParamKey.SOURCE_PAGE] = a;
	if (b)
		f[w_H.explore.loggingcommons.ParamKey.LIST_ID] = b;
	if (c)
		f[w_H.explore.loggingcommons.ParamKey.EXPERIMENT] = c;
	var g = w_H.util.logging.formatId(d, e);
	if (g)
		f[w_H.explore.loggingcommons.ParamKey.ITEM_ID] = g;
	return w_H.util.logging.addToPageUnloadParameterMap(f)
};
w_H.explore.blogpostpages = {};
w_H.explore.blogpostpages.logging = {};
w_H.explore.blogpostpages.logging.initForExploreLogging = function(a, b, c, d,
		e) {
	w_H.util.logging.initialize(c, b, w_b);
	if (w_H.util.logging.isReferredFromExplore()) {
		var f = w_c, g = w_c;
		a ? w_H.explore.blogpostpages.logging.$g(f, g, d, e)
				: w_H.explore.blogpostpages.logging.Zg(f, g, d)
	}
};
w_H.explore.blogpostpages.logging.Zg = function(a, b, c) {
	return w_H.explore.loggingcommons.addToPageUnloadParameterMap(
			w_H.util.logging.SourcePage.BLOG, a, b, c, w_c)
};
w_H.explore.blogpostpages.logging.$g = function(a, b, c, d) {
	return w_H.explore.loggingcommons.addToPageUnloadParameterMap(
			w_H.util.logging.SourcePage.POST, a, b, c, d)
};
w_.exportSymbol("BLOG_InitExploreLoggingOnBlogPostPages",
		w_H.explore.blogpostpages.logging.initForExploreLogging);
