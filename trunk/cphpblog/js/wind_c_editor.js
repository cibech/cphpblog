//WYSIWYD JS CODE
var code_htm = new Array();
var code_num = 0;
var method = 3;

function WYSIWYD(editmode){
	if(WYSIWYD.Browsercheck()){
		this._editMode = editmode;
		this.config = new WYSIWYD.Config();
		this._htmlArea = null;
		this._textArea = null;
		this._timerToolbar = null;
		this._doc = null;
	}
};
WYSIWYD.prototype.init = function(){
	this._textArea = WYSIWYD.getElementById("textarea",'textarea');
	var editor = this;
	var textarea = this._textArea;
	
	if(this._editMode == 'wysiwyg'){
		this.initIframe();
		if(WYSIWYD.is_gecko){
			this._doc.designMode = "off";
		}
		
		this._textArea.style.display = "none";
		this._iframe.style.display = "block";
		if(WYSIWYD.is_gecko){
			this._doc.designMode = "on";
		}
	}
	if(textarea.form){

		WYSIWYD._addEvent(textarea, "keydown",function(event){quickpost(event);});
		var f = textarea.form;
		if(typeof f.onsubmit == "function"){
			var funcref = f.onsubmit;
			if(typeof f.__msh_prevOnSubmit == "undefined"){
				f.__msh_prevOnSubmit = [];
			}
			f.__msh_prevOnSubmit.push(funcref);
		}
		f.onsubmit = function(){
			if(editor._editMode == "textmode"){
				editor._textArea.value = editor.getHTML();
			} else{
				editor._textArea.value = htmltocode(editor.getHTML());
			}
			var a = this.__msh_prevOnSubmit;
			if(typeof a != "undefined"){
				for(var i in a){
					return a[i]();
				}
			}
		};
	}
	this.initButtom();
	this.updateToolbar();
};
WYSIWYD.prototype.initButtom = function(){
	var tb_objects = new Object();
	this._toolbarObjects = tb_objects;
	
	function setButtonStatus(id, newval){
		var oldval = this[id];
		var el = this.element;
		if(oldval != newval){
			switch(id){
			    case "enabled":
					if(newval){
						WYSIWYD._removeClass(el, "buttonDisabled");
						el.disabled = false;
					} else{
						WYSIWYD._addClass(el, "buttonDisabled");
						el.disabled = true;
					}
					break;
			    case "active":
					if(newval){
						WYSIWYD._addClass(el, "buttonPressed");
					} else{
						WYSIWYD._removeClass(el, "buttonPressed");
					}
					break;
				 case "select":
					if(newval){
						el.className = 'buttonPressed';
					} else{
						el.className = 'buttonHover';
					}
					break;
			}
			this[id] = newval;
		}
	};

	function setButton(txt,btn){
		var el = document.getElementById('wy_' + txt);
		var obj = {
			name	: txt,
			element : el,
			enabled : true,
			active	: false,
			text	: btn[0],
			cmd		: btn[1],
			state	: setButtonStatus,
			mover   : btn[2]
		};
		tb_objects[txt] = obj;

		if(txt == 'htmlmode' || txt == 'windcode'){
			WYSIWYD._addEvent(el, "click", function(ev){
				if(obj.enabled) with (WYSIWYD){
					obj.cmd(obj.name);
					_stopEvent(is_ie ? window.event : ev);
				}
			});
		} else{
			WYSIWYD._addEvent(el, "mouseover", function(){
				if(obj.enabled){
					WYSIWYD._addClass(el, "buttonHover");
					(obj.mover) && obj.cmd(obj.name,'2');
				}
			});
			
			WYSIWYD._addEvent(el, "mouseout", function(){
				if(obj.enabled) with (WYSIWYD){
					_removeClass(el, "buttonHover");
					_removeClass(el, "buttonActive");
					(obj.active) && _addClass(el, "buttonPressed");
				}
			});
			WYSIWYD._addEvent(el, "mousedown", function(ev){
				if(obj.enabled) with (WYSIWYD){
					_addClass(el, "buttonActive");
					_removeClass(el, "buttonPressed");
					_stopEvent(is_ie ? window.event : ev);
				}
			});
			WYSIWYD._addEvent(el, "click", function(ev){
				if(obj.enabled) with (WYSIWYD){
					_removeClass(el, "buttonActive");
					_removeClass(el, "buttonHover");
					obj.cmd(obj.name);
					_stopEvent(is_ie ? window.event : ev);
				}
			});
		}
	};
	function setSelect(txt){
		var el = document.getElementById('wy_' + txt);
		var cmd = txt;
		var options = editor.config[txt];
		if(options){
			var obj = {
				name	: txt,
				element : el,
				enabled : true,
				text	: true,
				cmd		: cmd,
				state	: setButtonStatus
			};
			tb_objects[txt] = obj;
			for(var i in options) {
				var op = document.createElement("option");
				op.appendChild(document.createTextNode(i));
				op.value = options[i];
				el.appendChild(op);
			}
			WYSIWYD._addEvent(el, "change", function () {
				editor.GetSelectedValue(el, txt);
			});
		}
		return el;
	};

	var buttoms = this.config.btnList;
	for(var txt in buttoms){
		setButton(txt,buttoms[txt]);
	}
	var selects = this.config.selList;
	for(var i in selects){
		setSelect(selects[i]);
	}
}
WYSIWYD.prototype.initIframe = function(){
	var htmlarea = document.createElement("div");
	htmlarea.id  = 'htmlarea';
	htmlarea.className = "htmlarea";
	htmlarea.style.width = "560px";
	this._htmlArea = htmlarea;
	this._textArea.parentNode.insertBefore(htmlarea, this._textArea);

	var iframe = document.createElement("iframe");
	iframe.style.display = "none";
	htmlarea.appendChild(iframe);
	this._iframe = iframe;

	if(!WYSIWYD.is_ie){
		iframe.style.borderWidth = "0px";
	}
	var height = this._textArea.offsetHeight;
	var width = this._textArea.offsetWidth;
	height = parseInt(height);
	width = parseInt(width);
	if(!WYSIWYD.is_ie){
		height -= 2;
		width -= 2;
	}
	iframe.style.width   = width + "px";
	iframe.style.height  = height + "px";

	this._textArea.style.width = iframe.style.width;
	this._textArea.style.height= iframe.style.height;

	var doc = this._iframe.contentWindow.document;
	
	this._doc = doc;

	doc.open();
	var html = "<html>\n";
	html += "<head>\n";
	html += "<style> html,body {border:0px;font-family:Verdana;font-size:12px;margin:2;}\n";
	html += ".t {border:1px solid #D4EFF7;border-collapse : collapse}\n";
	html += ".t td {border: 1px solid #D4EFF7;}\n";
	html += "img {border:0;}p {margin:0px;}</style>\n";
	html += "</head>\n";
	html += "<body>\n";
	html += codetohtml(this._textArea.value);
	html += "</body>\n";
	html += "</html>";
	doc.write(html);
	doc.close();

	if(WYSIWYD.is_ie){
		doc.body.contentEditable = true;
	}
	WYSIWYD._addEvent(doc, "keydown",function(event){quickpost(event);});
	
	WYSIWYD._addEvents(doc, ["keydown", "keypress", "mousedown", "mouseup", "drag"],
		function(event){return editor._editorEvent(WYSIWYD.is_ie ? editor._iframe.contentWindow.event : event);}
	);
}

WYSIWYD.prototype.getsel = function (){
	if(this._editMode == "wysiwyg"){
		return '';
	} else if(document.selection){
		return document.selection.createRange().text;
	} else if(typeof this._textArea.selectionStart != 'undefined'){
		return this._textArea.value.substr(this._textArea.selectionStart,this._textArea.selectionEnd - this._textArea.selectionStart);
	} else if(window.getSelection){
		return window.getSelection();
	}
}
WYSIWYD.prototype.setMode = function(mode){
	if(typeof mode == "undefined"){
		mode = ((this._editMode == "textmode") ? "wysiwyg" : "textmode");
	}
	switch (mode){
	    case "textmode":
			this._textArea.value = htmltocode(this.getHTML());
			this._iframe.style.display = "none";
			this._textArea.style.display = "block";
			this._textArea.style.width = "555px";
			break;
	    case "wysiwyg":
			if(this._htmlArea == null && !IsElement('htmlarea')){
				this.initIframe();
			}
			if(WYSIWYD.is_gecko){
				this._doc.designMode = "off";
			}
			body = this._doc.getElementsByTagName("body")[0];
			body.innerHTML = codetohtml(this.getHTML()); //Modify

			this._textArea.style.display = "none";
			this._iframe.style.display = "block";
			if (WYSIWYD.is_gecko){
				this._doc.designMode = "on";
			}
			break;
	    default:
			alert("Mode <" + mode + "> not defined!");
			return false;
	}
	this._editMode = mode;
	this.focusEditor();
};

WYSIWYD.prototype.forceRedraw = function(){
	this._doc.body.style.visibility = "hidden";
	this._doc.body.style.visibility = "visible";
};
WYSIWYD.prototype.focusEditor = function(){
	switch (this._editMode){
	    case "wysiwyg" : this._iframe.contentWindow.focus(); break;
	    case "textmode": this._textArea.focus(); break;
	    default : alert("ERROR: mode " + this._editMode + " is not defined");
	}
	return this._doc;
};
WYSIWYD.prototype.updateToolbar = function(noStatus){
	var doc = this._doc;
	var iftext = (this._editMode == "textmode");
	var ancestors = null;
	if(!iftext){
		ancestors = this.getAllAncestors();
	}
	for(var i in this._toolbarObjects){
		var btn = this._toolbarObjects[i];
		var cmd = i;
		var inContext = true;
		
		btn.state("enabled", (!iftext || btn.text) && inContext);
		if(typeof cmd == "function"){
			continue;
		}
		switch(cmd){
		    case "fontname":
		    case "fontsize":
		    case "formatblock":
				if(iftext){
					btn.element.selectedIndex = 0;
				} else{
					try{
						var value = ("" + doc.queryCommandValue(cmd)).toLowerCase();
						if(!value){
							break;
						}
						var options = this.config[cmd];
						var k = 1;
						for(var j in options){
							if((j.toLowerCase() == value) ||
								(options[j].substr(0, value.length).toLowerCase() == value)){
								btn.element.selectedIndex = k;
								break;
							}
							k++;
						}
					} catch(e){};
				}
				break;
		    case "htmlmode": btn.state("select", !iftext); break;
			case "windcode": btn.state("select", iftext); break;
			default:
				try{
					btn.state("active", (!iftext && doc.queryCommandState(cmd)));
				} catch (e){}
		}
	}
};
WYSIWYD.prototype.insertNodeAtSelection = function(toBeInserted){
	if(!WYSIWYD.is_ie){
		var sel = this._getSelection();
		var range = this._createRange(sel);
		sel.removeAllRanges();
		range.deleteContents();
		var node = range.startContainer;
		var pos = range.startOffset;
		switch(node.nodeType){
		    case 3:
			if(toBeInserted.nodeType == 3){
				node.insertData(pos, toBeInserted.data);
				range = this._createRange();
				range.setEnd(node, pos + toBeInserted.length);
				range.setStart(node, pos + toBeInserted.length);
				sel.addRange(range);
			} else{
				node = node.splitText(pos);
				var selnode = toBeInserted;
				if (toBeInserted.nodeType == 11){
					selnode = selnode.firstChild;
				}
				node.parentNode.insertBefore(toBeInserted, node);
				this.selectNodeContents(selnode);
				this.updateToolbar();
			}
			break;
		    case 1:
			var selnode = toBeInserted;
			if(toBeInserted.nodeType == 11){
				selnode = selnode.firstChild;
			}
			node.insertBefore(toBeInserted, node.childNodes[pos]);
			this.selectNodeContents(selnode);
			this.updateToolbar();
			break;
		}
	} else{
		return null;
	}
};
WYSIWYD.prototype.getParentElement = function(){
	var sel = this._getSelection();
	var range = this._createRange(sel);
	if(WYSIWYD.is_ie){
		switch(sel.type){
		    case "Text":
		    case "None":
			return range.parentElement();
		    case "Control":
			return range.item(0);
		    default:
			return this._doc.body;
		}
	} else try{
		var p = range.commonAncestorContainer;
		if(!range.collapsed && range.startContainer == range.endContainer &&
		    range.startOffset - range.endOffset <= 1 && range.startContainer.hasChildNodes())
			p = range.startContainer.childNodes[range.startOffset];
		while(p.nodeType == 3){
			p = p.parentNode;
		}
		return p;
	} catch (e){
		return null;
	}
};
WYSIWYD.prototype.getAllAncestors = function(){
	var p = this.getParentElement();
	var a = [];
	while(p && (p.nodeType == 1) && (p.tagName.toLowerCase() != 'body')){
		a.push(p);
		p = p.parentNode;
	}
	a.push(this._doc.body);
	return a;
};
WYSIWYD.prototype.selectNodeContents = function(node, pos){
	this.focusEditor();
	this.forceRedraw();
	var range;
	var collapsed = (typeof pos != "undefined");
	if(WYSIWYD.is_ie){
		range = this._doc.body.createTextRange();
		range.moveToElementText(node);
		(collapsed) && range.collapse(pos);
		range.select();
	} else{
		var sel = this._getSelection();
		range = this._doc.createRange();
		range.selectNodeContents(node);
		(collapsed) && range.collapse(pos);
		sel.removeAllRanges();
		sel.addRange(range);
	}
};
WYSIWYD.prototype.GetSelectedValue = function(el,cmdID){
	this.focusEditor();
	var value = el.options[el.selectedIndex].value;
	if(this._editMode == "textmode"){
		windselect(cmdID,value);
	} else{
		this._comboSelected(cmdID,value);
	}
	this.updateToolbar();
	return false;
}
WYSIWYD.prototype._comboSelected = function(cmdID,value){
	switch(cmdID){
	    case "fontname":
	    case "fontsize": this._doc.execCommand(cmdID, false, value); break;
	    case "formatblock":
			(WYSIWYD.is_ie) && (value = "<" + value + ">");
			this._doc.execCommand(cmdID, false, value);
			break;
	}
};
WYSIWYD.prototype.execCommand = function(cmdID, UI, param){
	cmdID = cmdID.toLowerCase();
	switch(cmdID){
	    case "htmlmode" : break;
		case "windcode" : this.setMode(); break;
	    case "undo":
	    case "redo":
			this._doc.execCommand(cmdID, UI, param); break;
	    case "cut":
	    case "copy":
	    case "paste":
			try{this._doc.execCommand(cmdID, UI, param);}
			catch(e){}
			break;
	    default : this._doc.execCommand(cmdID, UI, param);
	}
	return false;
};
WYSIWYD.prototype._editorEvent = function(ev){
	var editor = this;
	var keyEvent = (WYSIWYD.is_ie && ev.type == "keydown") || (ev.type == "keypress");
	if(editor._timerToolbar){
		clearTimeout(editor._timerToolbar);
	}
	editor._timerToolbar = setTimeout(function(){
		editor.updateToolbar();
		editor._timerToolbar = null;
	}, 50);
};
WYSIWYD.prototype.getHTML = function(){
	switch (this._editMode){
	    case "wysiwyg"  : return WYSIWYD.getHTML(this._doc.body, false, this);
	    case "textmode" : return this._textArea.value;
	    default : alert("Mode <" + mode + "> not defined!");
	}
	return false;
};

WYSIWYD.agt		= navigator.userAgent.toLowerCase();
WYSIWYD.is_ie	= ((WYSIWYD.agt.indexOf("msie") != -1) && (WYSIWYD.agt.indexOf("opera") == -1));
WYSIWYD.is_gecko= (navigator.product == "Gecko");

WYSIWYD.Browsercheck = function(){
	if(WYSIWYD.is_gecko){
		if(navigator.productSub < 20021201){
			alert("You need at least Mozilla-1.3 Alpha.");
			return false;
		}
		if(navigator.productSub < 20030210){
			alert("Mozilla < 1.3 Beta is not supported!");
			return false;
		}
	}
	return WYSIWYD.is_gecko || WYSIWYD.is_ie;
};
WYSIWYD.prototype._getSelection = function(){
	if(WYSIWYD.is_ie){
		return this._doc.selection;
	} else{
		return this._iframe.contentWindow.getSelection();
	}
};
WYSIWYD.prototype._createRange = function(sel){
	if(WYSIWYD.is_ie){
		return sel.createRange();
	} else{
		this.focusEditor();
		if(typeof sel != "undefined"){
			try{
				return sel.getRangeAt(0);
			} catch(e){
				return this._doc.createRange();
			}
		} else{
			return this._doc.createRange();
		}
	}
};
WYSIWYD._addEvent = function(el, evname, func){
	if(WYSIWYD.is_ie){
		el.attachEvent("on" + evname, func);
	} else{
		el.addEventListener(evname, func, true);
	}
};
WYSIWYD._addEvents = function(el, evs, func){
	for(var i in evs){
		WYSIWYD._addEvent(el, evs[i], func);
	}
};
WYSIWYD._removeEvent = function(el, evname, func){
	if(WYSIWYD.is_ie){
		el.detachEvent("on" + evname, func);
	} else{
		el.removeEventListener(evname, func, true);
	}
};
WYSIWYD._stopEvent = function(ev){
	if(WYSIWYD.is_ie){
		ev.cancelBubble = true;  //检测是否接受上层元素的事件的控制  true 不被上层原素的事件控制
		ev.returnValue = false;
	} else{
		ev.preventDefault();
		ev.stopPropagation();
	}
};
WYSIWYD._removeClass = function(el, className){
	if(!(el && el.className)){
		return;
	}
	var cls = el.className.split(" ");
	var ar = new Array();
	for(var i = cls.length; i > 0;){
		if (cls[--i] != className){
			ar[ar.length] = cls[i];
		}
	}
	el.className = ar.join(" ");
};
WYSIWYD._addClass = function(el, className){
	WYSIWYD._removeClass(el, className);
	el.className += " " + className;
};

WYSIWYD.isBlockElement = function(el){
	var blockTags = " body form textarea fieldset ul ol dl li div " +
		"p h1 h2 h3 h4 h5 h6 quote pre table thead " +
		"tbody tfoot tr td iframe address ";
	return (blockTags.indexOf(" " + el.tagName.toLowerCase() + " ") != -1);
};
WYSIWYD.needsClosingTag = function(el){
	var closingTags = " head script style div span tr td tbody table em strong font a title ";
	return (closingTags.indexOf(" " + el.tagName.toLowerCase() + " ") != -1);
};
WYSIWYD.htmlEncode = function(str){
	str = str.replace(/&/ig, "&amp;");
	str = str.replace(/</ig, "&lt;");
	str = str.replace(/>/ig, "&gt;");
	str = str.replace(/\x22/ig, "&quot;");
	return str;
};
WYSIWYD.getHTML = function(root, outputRoot, editor){
	var html = "";
	switch(root.nodeType){
	    case 1:
	    case 11:
		var closed;
		var i;
		var root_tag = (root.nodeType == 1) ? root.tagName.toLowerCase() : '';
		if(WYSIWYD.is_ie && root_tag == "head"){
			if(outputRoot)
				html += "<head>";
			var save_multiline = RegExp.multiline;
			RegExp.multiline = true;
			var txt = root.innerHTML.replace(/(<\/|<)\s*([^ \t\n>]+)/ig, function(str, p1, p2){
				return p1 + p2.toLowerCase();
			});
			RegExp.multiline = save_multiline;
			html += txt;
			if (outputRoot)
				html += "</head>";
			break;
		} else if(outputRoot){
			closed = (!(root.hasChildNodes() || WYSIWYD.needsClosingTag(root)));
			html = "<" + root.tagName.toLowerCase();
			var attrs = root.attributes;
			for(i = 0; i < attrs.length; ++i){
				var a = attrs.item(i);
				if(!a.specified){
					continue;
				}
				var name = a.nodeName.toLowerCase();
				if(/_moz|contenteditable|_msh/.test(name)){
					continue;
				}
				var value;
				if(name != "style"){
					if(typeof root[a.nodeName] != "undefined" && name != "href" && name != "src"){
						value = root[a.nodeName];
					} else{
						value = a.nodeValue;
					}
				} else{
					value = root.style.cssText;
				}
				if(/(_moz|^$)/.test(value)){
					continue;
				}
				html += " " + name + '="' + value + '"';
			}
			html += closed ? " />" : ">";
		}
		for(i = root.firstChild; i; i = i.nextSibling){
			html += WYSIWYD.getHTML(i, true, editor);
		}
		if(outputRoot && !closed){
			html += "</" + root.tagName.toLowerCase() + ">";
		}
		break;
	    case 3:
		if(!root.previousSibling && !root.nextSibling && root.data.match(/^\s*$/i) ) html = '&nbsp;';
		else html = WYSIWYD.htmlEncode(root.data);
		break;
	    case 8:
		html = "<!--" + root.data + "-->";
		break;
	}
	return html;
};
String.prototype.trim = function(){
	a = this.replace(/^\s+/, '');
	return a.replace(/\s+$/, '');
};
WYSIWYD._makeColor = function(v){
	if(typeof v != "number"){
		return v;
	}
	var r = v & 0xFF;
	var g = (v >> 8) & 0xFF;
	var b = (v >> 16) & 0xFF;
	return "rgb(" + r + "," + g + "," + b + ")";
};
WYSIWYD._colorToRgb = function(v){
	if(!v) return '';
	function hex(d){
		return (d < 16) ? ("0" + d.toString(16)) : d.toString(16);
	};
	if(typeof v == "number"){
		var r = v & 0xFF;
		var g = (v >> 8) & 0xFF;
		var b = (v >> 16) & 0xFF;
		return "#" + hex(r) + hex(g) + hex(b);
	}
	if(v.substr(0, 3) == "rgb"){
		var re = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/;
		if(v.match(re)){
			var r = parseInt(RegExp.$1);
			var g = parseInt(RegExp.$2);
			var b = parseInt(RegExp.$3);
			return "#" + hex(r) + hex(g) + hex(b);
		}
		return null;
	}
	if(v.substr(0, 1) == "#"){
		return v;
	}
	return null;
};
WYSIWYD.getElementById = function(tag, id){
	var el, i, objs = document.getElementsByTagName(tag);
	for(i = objs.length; --i >= 0 && (el = objs[i]);)
		if(el.id == id)
			return el;
	return null;
};
WYSIWYD.prototype.insertHTML = function(html){
	var sel = this._getSelection();
	var range = this._createRange(sel);
	if(WYSIWYD.is_ie){
		range.pasteHTML(html);
	} else{
		var fragment = this._doc.createDocumentFragment();
		var div = this._doc.createElement("div");
		div.innerHTML = html;
		while(div.firstChild){
			fragment.appendChild(div.firstChild);
		}
		var node = this.insertNodeAtSelection(fragment);
	}
};
function editorcode(cmdID){
	editor.focusEditor();
	if(editor._editMode == "textmode"){
		windcode(cmdID);
	} else{
		editor.execCommand(cmdID,false);
	}
	editor.updateToolbar();
}
function insertImage(){
	editor.focusEditor();
	txt=prompt('URL:',"http://");
	if(txt!=null){
		if(editor._editMode == "textmode"){
			sm="[img]"+txt+"[/img]";
			AddText(sm,'');
		} else{
			try{editor._doc.execCommand("insertimage",false,txt);}
			catch(e){}
		}
	}
}
function showTable(cmdID,type){
	if(editor._editMode == "textmode") return false;
	var menu_editor = getObj("menu_editor");
	menu_editor.innerHTML = '<table width="230" cellspacing="1" cellpadding="5"><tbody><tr><th class="h" colspan="2"><div class="fr" style="cursor:pointer;" onclick="closep();" title="close"><img src='+imgpath+'/close.gif></div>'+I18N['inserttable']+'</th></tr><tr><td width="40%" align="center">'+I18N['tablerows']+'</td><td><input type="text" name="rows" id="f_rows" size="5" value="2" /></td>	</tr><tr><td align="center">'+I18N['tablecols']+'</td><td><input type="text" name="cols" id="f_cols" size="5" value="4" /></td></tr><tr><td align="center">'+I18N['tablewidth']+'</td><td><input type="text" name="width" id="f_width" size="5" value="100" /></td></tr><tr><td class="tac">'+I18N['tableunit']+'</td><td><input type="radio" name="unit" id="f_unit1" value="%" checked> Percent<input type="radio" name="unit" id="f_unit1" value="px"> Pixels</td></tr></tbody></table><ul><li style="text-align:center;padding:5px 0;"><input class="btn" type="button" onclick="return insertTable();" value="'+I18N['submit']+'" /></li></ul>';
	if(typeof type == 'undefined'){
		click_open('menu_editor','wy_inserttable','2');
	} else{
		mouseover_open('menu_editor','wy_inserttable','2');
	}
}
function insertTable(){
	editor.focusEditor();
	var sel = editor._getSelection();
	var range = editor._createRange(sel);
	var fields = ["f_rows", "f_cols", "f_width"];
	var param = new Object();
	for(var i in fields){
		var id = fields[i];
		param[id] = getObj(id).value;
	}
	param['f_unit'] = getObj("f_unit1").checked == true ? '%' : 'px';
	var doc = editor._doc;
	var table = doc.createElement("table");
	table.style.width = param['f_width'] + param["f_unit"];
	table.className = 't';
	var tbody = doc.createElement("tbody");
	table.appendChild(tbody);
	for(var i = 0; i < param["f_rows"]; ++i){
		var tr = doc.createElement("tr");
		tbody.appendChild(tr);
		for(var j = 0; j < param["f_cols"]; ++j){
			var td = doc.createElement("td");
			tr.appendChild(td);
			(WYSIWYD.is_gecko) && td.appendChild(doc.createElement("br"));
		}
	}
	if(WYSIWYD.is_ie){
		range.pasteHTML(table.outerHTML);
	} else{
		editor.insertNodeAtSelection(table);
	}
	closep();
}
function showcolor(cmdID,type){
	var menu_editor = getObj("menu_editor");
	var colors = [
		'000000','660000','663300','666600','669900','66CC00','66FF00','666666','660066','663366','666666',
		'669966','66CC66','66FF66','CCCCCC','6600CC','6633CC','6666CC','6699CC','66CCCC','66FFCC','FF0000',
		'FF0000','FF3300','FF6600','FF9900','FFCC00','FFFF00','0000FF','FF0066','FF3366','FF6666','FF9966',
		'FFCC66','FFFF66','00FFFF','FF00CC','FF33CC','FF66CC','FF99CC','FFCCCC','FFFFCC'
	];
	var html = '<div id="colorbox">';
	for(i in colors){
		html += "<div unselectable=\"on\" style=\"background:#" + colors[i] + "\" onClick=\"SetC('" + colors[i] + "','" + cmdID + "')\"></div>";
	}
	html += '</div>';
	menu_editor.innerHTML = html;
	if(typeof type == 'undefined'){
		click_open('menu_editor','wy_' + cmdID,'2');
	} else{
		mouseover_open('menu_editor','wy_' + cmdID,'2');
	}
}
function SetC(color,cmdID){
	editor.focusEditor();
	if(editor._editMode=='textmode'){
		text = editor.getsel();
		var ctype = cmdID == 'forecolor' ? 'color' : 'backcolor';
		AddText("[" + ctype + "=#" + color + "]" + text + "[/" + ctype + "]",text);
	} else{
		if(cmdID == 'hilitecolor' && WYSIWYD.is_ie) cmdID = "backcolor";
		editor._doc.execCommand(cmdID, false, "#" + color);
	}
	closep();
}
function rming(cmdID,type){
	var menu_editor = getObj("menu_editor");
	menu_editor.innerHTML = '<table width="300" cellspacing="1" cellpadding="5"><tbody><tr><th class="h" colspan="2"><div class="fr" style="cursor:pointer;" onclick="closep();" title="close"><img src='+imgpath+'/close.gif></div>'+I18N['insertmedia']+'</th></tr><tr><td class="tac" width="25%">'+I18N['mediaurl']+'</td><td><input type="text" id="mediaurl" size="32" /></td></tr><tr><td class="tac">'+I18N['mediatype']+'</td><td><input type="radio" name="mediatype" id="mediatype1" value="1"> rm <input type="radio" name="mediatype" id="mediatype2" value="2" checked> wmv <input type="radio" name="mediatype" id="mediatype3" value="3"> mp3 <input type="radio" name="mediatype" id="mediatype4" value="4"> flash</td></tr><tr><td class="tac">'+I18N['medialength']+'</td><td><input type="text" id="medialength" value="314" size="6" />&nbsp;'+I18N['mediawidth']+'&nbsp;&nbsp;<input type="text" id="mediawidth" value="256" size="6" />&nbsp;'+I18N['mediaheight']+'</td></tr><tr><td class="tac">'+I18N['mediaplay']+'</td><td><input type="checkbox" id="midiaauto" />'+I18N['mediaauto']+'</td></tr></tbody></table><ul><li style="text-align:center;padding:5px 0;"><input class="btn" type="button" onclick="return insertmedia();" value="'+I18N['submit']+'" /></li></ul>';
	if(typeof type == 'undefined'){
		click_open('menu_editor','wy_media','2');
	} else{
		mouseover_open('menu_editor','wy_media','2');
	}
}
function insertmedia(){
	editor.focusEditor();
	var url = getObj("mediaurl").value;
	if(url == ''){
		alert(I18N['mediaurl_empty']);
		return false;
	}
	var mediatype = 2;
	for(var i=1;i<5;i++){
		if(getObj("mediatype"+i).checked == true){
			mediatype = i;
			break;
		}
	}
	var code   = '';
	var length = getObj("medialength").value;
	var width  = getObj("mediawidth").value;
	var auto   = getObj("midiaauto").checked == true ? 1 : 0;
	switch(mediatype){
		case 1: code = '[rm=' + length + ',' + width + ',' + auto + ']' + url + '[/rm]';break;
		case 2: code = '[wmv=' + length + ',' + width + ',' + auto + ']' + url + '[/wmv]';break;
		case 3: code = '[wmv=' + auto + ']'  + url + '[/wmv]';break;
		case 4: code = '[flash=' + length + ',' + width + ']' + url + '[/flash]';break;
	}
	AddCode(code,'');
	closep();
}
function quote(){
	editor.focusEditor();
	text = editor.getsel();
	sm = editor._editMode == "textmode" ? "[quote]" + text + "[/quote]" : "[quote] [/quote]";
	AddCode(sm,text);
}
function code(){
	editor.focusEditor();
	text = editor.getsel();
	sm = editor._editMode == "textmode" ? "[code]" + text + "[/code]" : "[code] [/code]";
	AddCode(sm,text);
}
function br(){
	editor.focusEditor();
	if(editor._editMode == "textmode"){
		return false;
	} else{
		sm="<br />";
		editor.insertHTML(sm);
	}
}
function showsale(cmdID,type){
	var menu_editor = getObj("menu_editor");
	menu_editor.innerHTML = '<table width="300" cellspacing="1" cellpadding="5"><tr><th class="h" colspan="2"><div class="fr" style="cursor:pointer;" onclick="closep();" title="close"><img src='+imgpath+'/close.gif></div>'+I18N['showsale']+'</th></tr><tr><td width="25%" class="tac">'+I18N['seller']+'</td><td><input id="seller" size="30" /></td></tr><tr><td class="tac">'+I18N['salename']+'</td><td><input id="subject" size="30" /></td></tr><tr><td class="tac"> '+I18N['saleprice']+'</td><td><input id="price" size="7" /></td></tr><tr><td class="tac">'+I18N['saledes']+'</td><td><textarea id="saledes" rows="4" cols="33"></textarea></td></tr><tbody id="setmethod" style="display:none"><tr><td class="tac">'+I18N['transport']+'</td><td><input type="radio" value="1" name="transport" onclick="setfee(true)" checked /> '+I18N['transport1']+'&nbsp;&nbsp; <input type="radio" value="2" name="transport" onclick="setfee(false)" /> '+I18N['transport2']+'<br /><input type="hidden" value="3" />'+I18N['transport3']+'&nbsp;<input disabled size="2" id="ordinary_fee" /> &nbsp;&nbsp; '+I18N['transport4']+'&nbsp;<input disabled size="2" id="express_fee" /> '+I18N['yuan']+'</td></tr></tbody><tr><td class="tac">'+I18N['demo']+'</td><td><input id="demo" size="30" /></td></tr><tr><td class="tac">'+I18N['contact']+'</td><td><input id="contact" size="30" /></td></tr><tr><td class="tac">'+I18N['md']+'</td><td><input type="radio" name="md" value="3" onclick="setmethod(3);" checked />'+I18N['salemoney3']+'&nbsp;<input type="radio" name="md" value="1" onclick="setmethod(1);" />'+I18N['salemoney1']+'&nbsp;<input type="radio" name="md" value="2" onclick="setmethod(2);" />'+I18N['salemoney2']+'</td></tr></table><ul><li style="text-align:center;padding:5px 0;"><input class="btn" type="button" onclick="return insertsale();" value="'+I18N['submit']+'" /></li></ul>';
	if(typeof type == 'undefined'){
		click_open('menu_editor','wy_sale','2');
	} else{
		mouseover_open('menu_editor','wy_sale','2');
	}
}
function setfee(type){
	getObj("ordinary_fee").disabled = type;
	getObj("express_fee").disabled = type;
}
function setmethod(mode){
	method = mode;
	obj = getObj("setmethod");
	obj.style.display = mode==2 ? "" : "none";
}
function insertsale(){
	editor.focusEditor();
	var required = {
		"seller": I18N['seller_empty'],
		"subject": I18N['subject_empty'],
		"price": I18N['price_empty']
	};
	for(var i in required) {
		var el = getObj(i);
		if(!el.value){
			alert(required[i]);
			el.focus();
			return false;
		}
	}
	var code  = '[payto]';
	code += '(seller)' + getObj("seller").value + '(/seller)';
	code += '(subject)' + getObj("subject").value + '(/subject)';
	code += '(body)' + getObj("saledes").value + '(/body)';
	code += '(price)' + getObj("price").value + '(/price)';
	code += '(ordinary_fee)' + getObj("ordinary_fee").value + '(/ordinary_fee)';
	code += '(express_fee)' + getObj("express_fee").value + '(/express_fee)';
	code += '(demo)' + getObj("demo").value + '(/demo)';
	code += '(contact)' + getObj("contact").value + '(/contact)';
	code += '(method)' + method + '(/method)';
	code += '[/payto]';
	AddCode(code,'');
	closep();
}
function addattach(aid){
	editor.focusEditor();
	sm=' [attachment='+aid+'] ';
	AddCode(sm,'');
}
function windcode(code){
	text = editor.getsel();
	switch(code){
		case "htmlmode": editor.setMode(); return false;
		case "windcode": return false;
		case "bold": AddTxt = "[b]" + text + "[/b]";break;
		case "italic": AddTxt = "[i]" + text + "[/i]";break;
		case "underline": AddTxt = "[u]" + text + "[/u]";break;
		case "strikethrough": AddTxt = "[strike]" + text + "[/strike]";break;
		case "subscript": AddTxt = "[sub]" + text + "[/sub]";break;
		case "superscript": AddTxt = "[sup]" + text + "[/sup]";break;
		case "justifyleft": AddTxt = "[align=left]" + text + "[/align]";break;
		case "justifycenter": AddTxt = "[align=center]" + text + "[/align]";break;
		case "justifyright": AddTxt = "[align=right]" + text + "[/align]";break;
		case "justifyfull": AddTxt = "[align=justify]" + text + "[/align]";break;
		case "inserthorizontalrule": text='';AddTxt="[hr]";break;
		case "indent": AddTxt = "[blockquote]" + text + "[/blockquote]";break;
		case "createlink":
			if(text){
				AddTxt = "[url=" + text + "]" + text + "[/url]";
			} else{
				txt = prompt('URL:',"http://");
				if(txt){
					AddTxt = "[url=" + txt + "]" + txt + "[/url]";
				}else{
					AddTxt = "[url][/url]";
				}
			}
			break;
		case "insertorderedlist":
			if(text){
				AddTxt = "[list=a][li]" + text + "[/li][/list]";
			} else{
				txt=prompt('a,A,1',"a");
				while(txt!="A" && txt!="a" && txt!="1" && txt!=null){
					txt=prompt('a,A,1',"a");
				}
				if(txt!=null){
					if(txt=="1"){
						AddTxt="[list=1]";
					} else if(txt=="a"){
						AddTxt="[list=a]";
					} else if(txt=="A"){
						AddTxt="[list=A]";
					}
					ltxt="1";
					while(ltxt!="" && ltxt!=null){
						ltxt=prompt(I18N['listitem'],"");
						if (ltxt!=""){
							AddTxt+="[li]"+ltxt+"[/li]";
						}
					}
					AddTxt+="[/list]";
				}
			}
			break;
		case "insertunorderedlist":
			if(text){
				AddTxt = "[list][li]" + text + "[/li][/list]";
			} else{
				AddTxt="[list]";
				txt="1";
				while(txt!="" && txt!=null){
					txt=prompt(I18N['listitem'],"");
					if(txt!=""){
						AddTxt+="[li]"+txt+"[/li]";
					}
				}
				AddTxt+="[/list]";
			}
			break;
		default : return false;
	}
	AddText(AddTxt,text);
}
function windselect(cmdID,value){
	text = editor.getsel();
	switch(cmdID){
	    case "fontname": AddTxt = "[font=" + value + "]" + text + "[/font]";break;
	    case "fontsize": AddTxt = "[size=" + value + "]" + text + "[/size]";break;
	    case "formatblock": AddTxt = value ? "[" + value + "]" + text + "[/" + value + "]" : "";break;
		default : AddTxt = "";
	}
	AddText(AddTxt,text);
}
function AddText(code,text){
	var startpos = text == '' ? code.indexOf(']') + 1 : code.indexOf(text);
	if(document.selection){
		var sel = document.selection.createRange();
		sel.text = code;
		sel.moveStart('character',-code.length + startpos);
		sel.moveEnd('character', -code.length + text.length + startpos);
		sel.select();
	} else if(typeof editor._textArea.selectionStart != 'undefined'){
		var prepos = editor._textArea.selectionStart;
		editor._textArea.value = editor._textArea.value.substr(0,prepos) + code + editor._textArea.value.substr(editor._textArea.selectionEnd);
		editor._textArea.selectionStart = prepos + startpos;
		editor._textArea.selectionEnd = prepos + startpos + text.length;
	} else{
		document.FORM.atc_content.value += code;
	}
}
function AddCode(code,text){
	if(editor._editMode=='textmode'){
		AddText(code,text);
	} else{
		editor.insertHTML(code);
	}
}
function htmltocode(str){
	if(IsChecked('atc_html')){
		return str;
	}
	code_htm = new Array();
	code_num = 0;
	str = str.replace(/(\r\n|\n|\r)/ig, '');
	str = str.replace(/<br[^>]*>/ig,'\n');
	str = str.replace(/<p[^>\/]*\/>/ig,'\n');
	str = str.replace(/\[code\](.+?)\[\/code\]/ig, function($1, $2) {return phpcode($2);});	
	str = str.replace(/\son[\w]{3,16}\s?=\s*([\'\"]).+?\1/ig,'');

	if(IsChecked('atc_convert')){
		str = str.replace(/<hr[^>]*>/ig,'[hr]');
		str = str.replace(/<(sub|sup|u|strike|b|i|pre)>/ig,'[$1]');
		str = str.replace(/<\/(sub|sup|u|strike|b|i|pre)>/ig,'[/$1]');
		str = str.replace(/<(\/)?strong>/ig,'[$1b]');
		str = str.replace(/<(\/)?em>/ig,'[$1i]');
		str = str.replace(/<(\/)?blockquote([^>]*)>/ig,'[$1blockquote]');
		
		str = str.replace(/<img[^>]*smile=\"(\d+)\"[^>]*>/ig,'[s:$1]');
		str = str.replace(/<img[^>]*src=[\'\"\s]*([^\s\'\"]+)[^>]*>/ig,'[img]'+'$1'+'[/img]');
		str = str.replace(/<a[^>]*href=[\'\"\s]*([^\s\'\"]*)[^>]*>(.+?)<\/a>/ig,'[url=$1]'+'$2'+'[/url]');
		str = str.replace(/<h([1-6]+)([^>]*)>(.*?)<\/h\1>/ig,function($1,$2,$3,$4){return h($3,$4,$2);});
		
		str = searchtag('table',str,'table',1);
		str = searchtag('font',str,'Font',1);
		str = searchtag('div',str,'ds',1);
		str = searchtag('p',str,'p',1);
		str = searchtag('span',str,'ds',1);
		str = searchtag('ol',str,'list',1);
		str = searchtag('ul',str,'list',1);
	}
	for(i in code_htm){
		str = str.replace("[\twind_phpcode_" + i + "\t]", code_htm[i]);
	}
	str = str.replace(/<[^>]*?>/ig, '');
	str = str.replace(/&amp;/ig, '&');
	str = str.replace(/&lt;/ig, '<');
	str = str.replace(/&gt;/ig, '>');

	return str;
}
function searchtag(tagname,str,action,type){
	if(type == 2){
		var tag = ['[',']'];
	} else{
		var tag = ['<','>'];
	}

	var head = tag[0] + tagname;
	var head_len = head.length;
	var foot = tag[0] + '/' + tagname + tag[1];
	var foot_len = foot.length;
	var strpos = 0;
	
	do{
		var strlower = str.toLowerCase();
		var begin = strlower.indexOf(head,strpos);
		if(begin == -1){
			break;
		}
		var strlen = str.length;

		for(var i = begin + head_len; i < strlen; i++){
			if(str.charAt(i)==tag[1]) break;
		}
		if(i>=strlen) break;

		var firsttag = i;
		var style = str.substr(begin + head_len, firsttag - begin - head_len);

		var end = strlower.indexOf(foot,firsttag);
		if (end == -1) break;

		var nexttag = strlower.indexOf(head,firsttag);
		while(nexttag != -1 && end != -1){
			if(nexttag > end) break;
			end = strlower.indexOf(foot, end + foot_len);
			nexttag = strlower.indexOf(head, nexttag + head_len);
		}
		if(end == -1){
			strpos = firsttag;
			continue;
		}

		firsttag++;
		var findstr = str.substr(firsttag, end - firsttag);
		str = str.substr(0,begin) + eval(action)(style,findstr,tagname) + str.substr(end+foot_len);

		strpos = begin;

	}while(begin != -1);

	return str;
}
function h(style,code,size){
	size = 7 - size;
	code = '[size=' + size + '][b]' + code + '[/b][/size]';
	return p(style,code);
}
function p(style,code){
	if(style.indexOf('align=') != -1){
		style = findvalue(style,'align=');
		code  = '[align=' + style + ']' + code + '[/align]';
	} else{
		code += "\n";
	}
	return code;
}
function ds(style,code){
	var styles = [
		['align' , 1, 'align='],
		['align', 1 , 'text-align:'],
		['color' , 2 , 'color:'],
		['font' , 1 , 'font-family:'],
		['b' , 0 , 'font-weight:' , 'bold'],
		['i' , 0 , 'font-style:' , 'italic'],
		['u' , 0 , 'text-decoration:' , 'underline'],
		['strike' , 0 , 'text-decoration:' , 'line-through']
	];

	style = style.toLowerCase();

	for(var i=0;i<styles.length;i++){
		var begin = style.indexOf(styles[i][2]);
		if(begin == -1){
			continue;
		}
		var value = '';
		if(styles[i][1] < 2){
			value = findvalue(style,styles[i][2]);
		} else{
			begin = style.indexOf('rgb',begin);
			if(begin == -1){
				continue;
			} else{
				value = WYSIWYD._colorToRgb(style.substr(begin,style.indexOf(')')-begin+1));
			}
		}
		if(styles[i][1] == 0){
			if(value == styles[i][3]){
				code = '[' + styles[i][0] + ']' + code + '[/' + styles[i][0] + ']';
			}
		} else{
			code = '[' + styles[i][0] + '=' + value + ']' + code + '[/' + styles[i][0] + ']';
		}
	}
	
	return code;
}
function list(type,code,tagname){
	code = code.replace(/<(\/)?li>/ig,'[$1li]');
	if(tagname == 'ul'){
		return '[list]'+code+'[/list]';
	}
	if(type && type.indexOf('type=')!='-1'){
		type = findvalue(type,'type=');
		if(type!='a' && type!='A' && type!='1'){
			type='1';
		}
		return '[list=' + type + ']' + code + '[/list]';
	} else{
		return '[list=1]'+code+'[/list]';
	}
}
function Font(style,str){
	var styles = new Array();

	styles ={'size' : 'size=','color' : 'color=','font' : 'face=','backcolor' : 'background-color:'};
	style = style.toLowerCase();
	
	for(st in styles){
		var begin = style.indexOf(styles[st]);
		if(begin == -1){
			continue;
		}
		var value = findvalue(style,styles[st]);

		str = '[' + st + '=' + value + ']' + str + '[/' + st + ']';
	}
	return str;
}
function table(style,str){

	str = str.replace(/<tr([^>]*)>/ig,'[tr]');
	str = str.replace(/<\/tr>/ig,'[/tr]');
	str = searchtag('td',str,'td',1);

	var styles = ['width=','width:'];
	style = style.toLowerCase();

	var s = '';
	for(i in styles){
		if(style.indexOf(styles[i]) == -1){
			continue;
		}
		s = '=' + findvalue(style,styles[i]);
		break;
	}
	return '[table' + s + ']' + str + '[/table]';
}
function td(style,str){
	if(style == ''){
		return '[td]' + str + '[/td]';
	}
	
	var colspan = 1;
	var rowspan = 1;
	var width = '';
	var value;
	
	if(style.indexOf('colspan=') != -1){
		value = findvalue(style,'colspan=');
		if(value>1) colspan = value;
	}
	if(style.indexOf('rowspan=') != -1){
		value = findvalue(style,'rowspan=');
		if(value>1) rowspan = value;
	}
	if(style.indexOf('width=') != -1){
		width = findvalue(style,'width=');
	}
	if(width == ''){
		return (colspan == 1 && rowspan == 1 ? '[td]' : '[td=' + colspan + ',' + rowspan + ']') + str + '[/td]';	
	} else{
		return '[td=' + colspan + ',' + rowspan + ',' + width + ']' + str + '[/td]';		
	}
}
function findvalue(style,find){
	var firstpos = style.indexOf(find)+find.length;
	var len = style.length;
	var start = 0;
	for(var i=firstpos;i<len;i++){
		var t_char = style.charAt(i);
		if(start==0){
			if(t_char == '"' || t_char == "'"){
				start = i+1;
			}else if(t_char != ' '){
				start = i;
			}
			continue;
		}
		if(t_char=='"' || t_char=="'" || t_char==' ' || t_char==';'){
			break;
		}
	}
	return style.substr(start,i-start);
}
function codetohtml(str){
	code_htm = new Array();
	code_num = 0;
	if(!IsChecked('atc_html')){
		str = str.replace(/</ig,'&lt;');
		str = str.replace(/>/ig,'&gt;');
	}	
	str = str.replace(/\n/ig,'<br />');
	str = str.replace(/\[code\](.+?)\[\/code\]/ig, function($1, $2) {return phpcode($2);});

	if(IsChecked('atc_convert')){		
		str = str.replace(/\[hr\]/ig,'<hr />');
		str = str.replace(/\[\/(size|color|font|backcolor)\]/ig,'</font>');
		str = str.replace(/\[(sub|sup|u|i|strike|b|blockquote|li)\]/ig,'<$1>');
		str = str.replace(/\[\/(sub|sup|u|i|strike|b|blockquote|li)\]/ig,'</$1>');
		str = str.replace(/\[\/align\]/ig,'</p>');
		str = str.replace(/\[(\/)?h([1-6])\]/ig,'<$1h$2>');

		str = str.replace(/\[align=(left|center|right|justify)\]/ig,'<p align="$1">');
		str = str.replace(/\[size=(\d+?)\]/ig,'<font size="$1">');
		str = str.replace(/\[color=([^\[\<]+?)\]/ig, '<font color="$1">');
		str = str.replace(/\[backcolor=([^\[\<]+?)\]/ig, '<font style="background-color:$1">');
		str = str.replace(/\[font=([^\[\<]+?)\]/ig, '<font face="$1">');
		str = str.replace(/\[list=(a|A|1)\](.+?)\[\/list\]/ig,'<ol type="$1">$2</ol>');
		str = str.replace(/\[(\/)?list\]/ig,'<$1ul>');
		
		str = str.replace(/\[s:(\d+)\]/ig,function($1,$2){ return smilepath($2);});
		str = str.replace(/\[img\]([^\[]*)\[\/img\]/ig,'<img src="$1" border="0" />');
		str = str.replace(/\[url=([^\]]+)\]([^\[]+)\[\/url\]/ig, '<a href="$1">'+'$2'+'</a>');
		str = searchtag('table',str,'tableshow',2);
	}
	for(i in code_htm){
		str = str.replace("[\twind_phpcode_" + i + "\t]", code_htm[i]);
	}
	return str;
}
function phpcode(code){
	code_num ++;
	code_htm[code_num] = '[code]' + code + '[/code]';
	return "[\twind_phpcode_" + code_num + "\t]";
}
function tableshow(style,str){
	if(style.substr(0,1) == '='){
		width = style.substr(1);
	} else{
		width = '100%';
	}
	str = str.replace(/\[td=(\d{1,2}),(\d{1,2})(,(\d{1,3}%?))?\]/ig,'<td colspan="$1" rowspan="$2" width="$4">');
	str = str.replace(/\[(tr|td)\]/ig,'<$1>');
	str = str.replace(/\[\/(tr|td)\]/ig,'</$1>');

	return '<table width=' + width + ' class="t" cellspacing=0>' + str + '</table>';
}
function smilepath(NewCode){
	return '<img src="' + imgpath + '/post/smile/' + face[NewCode] + '" smile="' + NewCode + '" /> ';
}
function checklength(theform,postmaxchars){
	if(postmaxchars != 0){
		message = '\n' + I18N['maxbits'] + postmaxchars;
	} else{
		message = '';
	}
	var msg = editor._editMode == "textmode" ? editor.getHTML() : htmltocode(editor.getHTML());

	alert(I18N['currentbits'] + strlen(msg) + message);
}
function Addaction(addTitle){
	editor.focusEditor();
	AddCode(addTitle,'');
}
function addsmile(NewCode){
	editor.focusEditor();
	if(editor._editMode=='textmode'){
		sm = '[s:' + NewCode + ']';
		AddText(sm,'');
	} else{
		sm = '<img src="' + imgpath + '/post/smile/' + face[NewCode] + '" smile="' + NewCode + '" /> ';
		editor.insertHTML(sm);
	}
}
function mdbchina(){
	if(WYSIWYD.is_ie){
		mdbcode= showModalDialog('./require/mdbchina.php','','status:false;dialogWidth:550px;dialogHeight:300px;edge:Raised;resizable: Yes; enter: Yes; help: No;  status: No');
		mdbchinaInsert(mdbcode);
	} else {
		window.open('./require/mdbchina.php','newWin','modal=yes,width=550,height=300,resizable=yes,scrollbars=no');
	}
}
function mdbchinaInsert(mdbcode){
	if(mdbcode!=null){
		editor.focusEditor();
		if(editor._editMode=='textmode'){
			AddText(mdbcode,'');
		} else{
			editor.insertHTML(codetohtml(mdbcode));
		}
	}
}
function IsChecked(id){
	return document.getElementById(id) && document.getElementById(id).checked === true ? true : false;
}