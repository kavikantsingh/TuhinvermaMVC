﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  var __hasProp = {}.hasOwnProperty;

  this['DocumentUploader'] = (function() {
    _Class.p = _Class.prototype;

    _Class.p.UploadUrl = "Upload";

    _Class.p.Manager;

    _Class.p.Wrapper;

    _Class.p.UploadWrapper;

    _Class.p.UploadInput;

    _Class.p.UploadBtn;

    _Class.p.Identifier;

    _Class.p.AllDocuments = [];

    _Class.p.listWrapper;

    _Class.p.DocumentName = "";

    _Class.p.DocumentType = "";

    _Class.p.DocumentTypeId = "";

    _Class.p.isSimple;

    _Class.p.WaitWrapper;

    _Class.p.DocumentLable;

    function _Class(opts) {
      var k, tempLable, v, _i, _len, _ref, _self;
      this.opts = opts != null ? opts : {};
      for (k in opts) {
        if (!__hasProp.call(opts, k)) continue;
        v = opts[k];
        this[k] = v;
      }
      _self = this;
      this.UploadUrl = this.Manager.UploadUrl;
      this.UploadWrapper = $("<div />").addClass("docUploader");
      this.Identifier = $(this.Wrapper).attr('id');
      this.isSimple = $(this.Wrapper).data('simple');
      this.UploadInput = $('<input/>').attr('type', 'file');
      this.UploadBtn = $('<button />').addClass("buttonGreen small").text('Upload Document');
      this.WaitWrapper = $('<div />').text("Please wait.").css('display', 'none');
      this.MessageWrapper = $('<div id=\"' + this.Identifier + '_messages"></div>').css('display', '');
      this.DocumentLable = "Document : ";
      this.DocumentName = "";
      if ($(this.Wrapper).data('doclable') != null) {
        this.DocumentLable = $(this.Wrapper).data('doclable') + ": ";
      }
      console.log('doc_' + $(this.Wrapper).data('docid'), 'doc_' + $(this.Wrapper).data('doccode'));
      tempLable = this.Manager.DocumentTypeNames['doc_' + $(this.Wrapper).data('docid')][0];
      this.docTypes = this.Manager.DocumentTypeNames["doc_" + $(this.Wrapper).data('docid')];
      this.docNameInput = this.AllDocuments = [];
      this.listWrapper;
      if (!this.isSimple) {
        this.$complexWrapper = $.el('table', {
          'class': 'wthtop20 complex uploader',
          'width': '99%',
          'margin-left': '5px'
        }).append($.el('tr', {}).append($.el('td', {
          'class': 'txtalgnrgt tdwidth1'
        }).append($.el('label', {
          'class': 'input-label required'
        }).text("Document Name : ")), $.el('td', {}).append($.el('input', {
          'type': 'text',
          'name': this.Identifier + "_docName",
          'id': this.Identifier + "_docName"
        }).blur({
          parent: _self
        }, function(e) {
          console.log(e.data.parent, "Parent Object Blur");
          if ((this.value != null) && this.value !== "") {
            e.data.parent.DocumentName = $(this).val();
            return e.data.parent.showMessage(false, "docName", systemErrorMessages.DocumentUploadName, "error");
          } else {
            e.data.parent.DocumentName = "";
            return e.data.parent.showMessage(true, "docName", systemErrorMessages.DocumentUploadName, "error");
          }
        })), $.el('td', {
          'class': 'txtalgnrgt'
        }).append($.el('label', {
          'class': 'input-label required'
        }).text("Document Type : ")), $.el('td', {}).append($.el('select', {
          'name': this.Identifier + "_docType",
          'id': this.Identifier + "_docType"
        }).append($.el('option', {
          'selected': 'selected',
          'value': 0
        }).text("Select Type")).change({
          parent: this
        }, function(e) {
          if (this.value > 0) {
            e.data.parent.DocumentTypeId = this.value;
            e.data.parent.DocumentType = $(this).find('option:selected').text();
            return e.data.parent.showMessage(false, "docType", systemErrorMessages.DocumentUploadType, "error");
          } else {
            e.data.parent.DocumentTypeId = 0;
            e.data.parent.DocumentType = "";
            return e.data.parent.showMessage(true, "docType", systemErrorMessages.DocumentUploadType, "error");
          }
        }))), $.el('tr', {}).append($.el('td', {
          'class': 'txtalgnrgt'
        }).append($.el('label', {
          'class': 'input-label required'
        }).text("Document : ")), $.el('td', {}).append(this.UploadInput), $.el('td', {
          'class': ''
        }).append(this.UploadBtn), $.el('td', {})));
      }
      if (this.docTypes != null) {
        if (!this.isSimple) {
          _ref = this.docTypes;
          for (k = _i = 0, _len = _ref.length; _i < _len; k = ++_i) {
            v = _ref[k];
            this.$complexWrapper.find("#" + this.Identifier + "_docType").first().append($.el('option', {}).val(v.DocumentTypeId).text(v.DocumentTypeIdName));
          }
        } else {
          this.DocumentLable = this.docTypes[0].DocumentTypeIdName;
        }
      }
      this.init(this);
    }

    _Class.p.init = function(self) {
      var $uploadWrapper, $waitWrapper, $wrapperMain, _self;
      this.self = self;
      _self = this.self;
      $wrapperMain = $(this.Wrapper);
      $uploadWrapper = $(this.UploadWrapper);
      $waitWrapper = $(this.WaitWrapper);
      $(this.UploadInput).attr('id', this.Identifier + "_input");
      $(this.UploadBtn).click({
        input: this.UploadInput,
        uplWrapper: this.UploadWrapper,
        parent: _self
      }, function(e) {
        var uploadWorker;
        e.data.parent.wait(true);
        return uploadWorker = new FileUploader(e.data.parent.UploadUrl, e.data.parent.documentUploadSuccess, e.data.input, e.data.uplWrapper, e.data.parent);
      });
      $(this.UploadWrapper).attr('id', this.Identifier + "_Uploader");
      if (!this.isSimple) {
        $uploadWrapper.append(this.$complexWrapper);
      } else {
        $uploadWrapper.append($.el('label', {
          'class': 'simple-label'
        }).text(this.DocumentLable + " : "), this.UploadInput, this.UploadBtn);
      }
      $uploadWrapper.append($waitWrapper);
      $wrapperMain.append(this.UploadWrapper, this.MessageWrapper);
      this.Manager.loadAllDocument($wrapperMain.data('docid')).done(function(resp) {
        console.log(resp, "loaded All Documents");
        if (resp.Status) {
          _self.AllDocuments = resp.ProviderDocumentGET;
          return _self.createDocumentsList("doc_" + $(_self.Wrapper).data('docid'), _self.AllDocuments);
        }
      });
    };

    _Class.p.documentUploadSuccess = function(resp) {};

    _Class.p.createDocumentsList = function(docid, docs) {
      var doc, i, _i, _len;
      this.listWrapper = $(this.Wrapper).find("#" + this.Identifier + "_docList").first();
      if ($(this.Wrapper).find("#" + this.Identifier + "_docList").length === 0) {
        this.listWrapper = this.createDocumentTableTemplate();
        console.log(this.listWrapper);
        $(this.Wrapper).append(this.listWrapper);
      }
      for (i = _i = 0, _len = docs.length; _i < _len; i = ++_i) {
        doc = docs[i];
        this.addDocumentToList(doc, i);
      }
    };

    _Class.p.createDocumentTableTemplate = function() {
      var obj;
      obj = $.el('table', {
        'class': 'index vlign grid gridtable',
        'width': '100%',
        'id': this.Identifier + "_docList"
      }).append($.el('tr', {}).append($.el('th', {
        'class': 'txtalgnrgt'
      }).text("Document Type"), $.el('th', {
        'style': 'text-align : center'
      }).text("Document Name"), $.el('th', {}).text("Document Link"), $.el('th', {}).text("Action")));
      return obj;
    };

    _Class.p.addDocumentToList = function(doc, index) {
      var deleteBtn, docElement, obj, typeName;
      console.log(doc, this);
      obj = this;
      deleteBtn = $.el('img', {
        'src': '../\../\Content/\Theme1/\images/\delete.png'
      }).css('cursor', 'pointer');
      typeName = doc.DocumentTypeIdName;
      if (obj.isSimple) {
        typeName = doc.OtherDocumentTypeName;
      }
      docElement = $.el('tr', {}).append($.el('td', {}).text(typeName), $.el('td', {}).text(doc.DocumentName), $.el('td', {}).append($.el('a', {
        'href': doc.DocumentPath,
        'class': 'documentdetail'
      }).text("Document Detail")), $.el('td', {}).append(deleteBtn));
      deleteBtn.click({
        document: doc,
        ind: index,
        _self: obj,
        docEle: docElement
      }, function(e) {
        if (confirm("Really want delete this document?")) {
          return e.data._self.removeDocument(e.data.document, e.data.ind, e.data.docEle, e.data._self);
        }
      });
      if (this.listWrapper != null) {
        $(this.listWrapper).append(docElement);
        this.refreshDocumentList();
      } else {
        this.listWrapper = this.createDocumentTableTemplate();
        $(this.listWrapper).append(docElement);
        $(this.Wrapper).append(this.listWrapper);
      }
    };

    _Class.p.removeDocument = function(document, index, element, selfObj) {
      $(element).remove();
      return selfObj.Manager.removeDocument(document).done(function() {
        $(document).remove();
        $(element).remove();
        return selfObj.refreshDocumentList();
      });
    };

    _Class.p.refreshDocumentList = function() {
      if ($(this.listWrapper).find('tr').length === 1) {
        return $(this.listWrapper).css('display', 'none');
      } else {
        return $(this.listWrapper).css('display', '');
      }
    };

    _Class.p.wait = function(isWait) {
      if (isWait) {
        return $(this.WaitWrapper).css('display', '');
      } else {
        return $(this.WaitWrapper).css('display', 'none');
      }
    };

    _Class.p.showMessage = function(show, type, message, _class) {
      var errObj;
      errObj = $(this.MessageWrapper).find('.' + type);
      console.log(errObj, "Error Object", message, "Message");
      if (show) {
        if (errObj.length === 0) {
          $(this.MessageWrapper).append($.el('div', {
            'class': type + " " + _class
          }).text(message));
        } else {
          errObj.css('display', '');
        }
      }
      if (!show) {
        if (errObj != null) {
          return errObj.css('display', 'none');
        }
      }
    };

    _Class.p.reset = function() {
      this.UploadInput.replaceWith($(this.UploadInput).clone());
      if (!this.isSimple) {
        $("#" + this.Identifier + "_docName").val('');
        $("#" + this.Identifier + "_docType").val(0);
        this.DocumentTypeId = 0;
        this.DocumentType = "";
        return this.DocumentName = "";
      }
    };

    return _Class;

  })();

}).call(this);
