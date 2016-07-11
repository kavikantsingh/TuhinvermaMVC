﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  var __hasProp = {}.hasOwnProperty;

  this['DocumentManager'] = (function() {
    _Class.p = _Class.prototype;

    _Class.p.ApiBaseUrl = "http://ws.camtc.inlumon.com/";

    _Class.p.ApplicationId = "";

    _Class.p.ProviderId = "";

    _Class.p.ApiSaveEndpoint = "";

    _Class.p.ApiDeleteEndpoint = "";

    _Class.p.ApiGetDocumentsEndpoint = "";

    _Class.p.Key = "";

    _Class.p.UserId = "";

    _Class.p.DocumentUploader = {};

    _Class.p.DocumentContainerBuilder;

    _Class.p.ApplicationDocuments = [];

    _Class.p.DocumentTypeNames = [];

    _Class.p.DocumentWrapperClass = "documentContainer";

    _Class.p.CurrentInstance = {};

    function _Class(opts) {
      var k, v;
      this.opts = opts != null ? opts : {};
      for (k in opts) {
        if (!__hasProp.call(opts, k)) continue;
        v = opts[k];
        this[k] = v;
      }
      this.CurrentInstance = this;
      this.DocumentTypeNames = [];
      ShowLoader();
      this.init();
    }

    _Class.p.init = function() {
      var _self;
      _self = this.CurrentInstance;
      this.UserId = sessionStorage.School_UserId;
      $("." + this.DocumentWrapperClass).each(function() {
        var doccode, docid, wrp;
        console.log(_self);
        docid = $(this).data('docid');
        doccode = $(this).data('docCode');
        wrp = this;
        console.log(_self.DocumentTypeNames['doc_' + docid] != null);
        if (!$(this).data('simple') && (_self.DocumentTypeNames['doc_' + docid] == null)) {
          _self.loadDocTypeName(docid, doccode).success(function(resp) {
            if (resp.Status) {
              _self.DocumentTypeNames['doc_' + docid] = resp.DocumentMasterGET;
            }
            return _self.addUploader(wrp);
          });
        } else {
          _self.addUploader(this);
        }
      });
      HideLoader();
    };

    _Class.p.loadAllDocument = function(docid) {
      var obj;
      obj = this.CurrentInstance;
      console.log(obj.ApiBaseUrl + obj.ApiGetDocumentsEndpoint + obj.Key);
      return $.ajax({
        url: obj.ApiBaseUrl + obj.ApiGetDocumentsEndpoint + obj.Key,
        type: "GET",
        data: {
          ProviderId: obj.ProviderId,
          ApplicationId: obj.ApplicationId,
          DocumentId: docid
        }
      });
    };

    _Class.p.loadDocTypeName = function(docid, doccode) {
      var obj;
      obj = this;
      return $.ajax({
        url: obj.ApiBaseUrl + "api/Document/DocumentGetDocumentTypeName/" + obj.Key,
        type: "GET",
        data: {
          DocId: docid,
          DocCode: doccode
        }
      });
    };

    _Class.p.getDocTypeNames = function(docid) {
      var k, v, _ref, _results;
      console.log(this.DocumentTypeNames, docid);
      _ref = this.ApplicationDocuments;
      _results = [];
      for (k in _ref) {
        v = _ref[k];
        if (k === 'doc_' + docid) {
          console.log(this.CurrentInstance.DocumentTypeNames[k]);
          _results.push(this.CurrentInstance.DocumentTypeNames[k]);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    _Class.p.addUploader = function(wrapper) {
      console.log('Has Wrapper', this.checkWrapper(wrapper.id) != null);
      if (this.checkWrapper(wrapper.id) == null) {
        return this.ApplicationDocuments[wrapper.id] = {
          Wrapper: wrapper,
          Uploader: new DocumentUploader({
            Manager: this.CurrentInstance,
            Wrapper: wrapper
          })
        };
      }
    };

    _Class.p.getAllWrapper = function() {
      var k, v, _ref;
      this.ApplicationDocuments;
      _ref = this.ApplicationDocuments;
      for (k in _ref) {
        v = _ref[k];
        console.log(this.CurrentInstance.ApplicationDocuments[k]);
      }
    };

    _Class.p.checkWrapper = function(id) {
      return this.CurrentInstance.ApplicationDocuments[id];
    };

    _Class.p.refresh = function() {
      $("." + this.DocumentWrapperClass).each(function(e) {
        return _self.addUploader(this);
      });
    };

    return _Class;

  })();

}).call(this);
