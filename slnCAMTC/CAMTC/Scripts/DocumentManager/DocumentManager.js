﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  var __hasProp = {}.hasOwnProperty;

  this['DocumentManager'] = (function() {
    var p;

    p = _Class.prototype;

    p.ApiBaseUrl = "";

    p.ApplicationId = "";

    p.ProviderId = "";

    p.ApiSaveEndpoint = "";

    p.ApiDeleteEndpoint = "";

    p.ApiGetDocumentsEndpoint = "";

    p.Key = "";

    p.UserId = "";

    p.DocumentUploader = {};

    p.DocumentContainerBuilder;

    p.ApplicationDocuments = [];

    p.DocumentWrapperClass = "documentContainer";

    p.CurrentInstance = {};

    function _Class(opts) {
      var k, v;
      this.opts = opts != null ? opts : {};
      for (k in opts) {
        if (!__hasProp.call(opts, k)) continue;
        v = opts[k];
        this[k] = v;
      }
      this.init(this);
    }

    p.init = function(self) {
      this.self = self;
      p.CurrentInstance = this.self;
      $("." + this.DocumentWrapperClass).each(function() {
        return p.CurrentInstance.addUploader(this);
      });
    };

    p.loadAllDocument = function() {
      var obj;
      obj = p.CurrentInstance;
      return $.ajax({
        url: obj.ApiBaseUrl + obj.ApiGetDocumentsEndpoint + "/" + obj.Key
      });
    };

    p.addUploader = function(wrapper) {
      console.log(wrapper);
      return this.ApplicationDocuments[wrapper.id] = {
        Wrapper: wrapper,
        Uploader: new DocumentUploader({
          Manager: this.self,
          Wrapper: wrapper
        })
      };
    };

    p.getAllWrapper = function() {
      var k, v, _ref;
      this.ApplicationDocuments;
      _ref = this.ApplicationDocuments;
      for (k in _ref) {
        v = _ref[k];
        console.log(p.CurrentInstance.ApplicationDocuments[k]);
      }
    };

    return _Class;

  })();

  $(document).ready(function() {
    return window.DefaultDocumentManager = new DocumentManager({
      ApiBaseUrl: "/test/",
      ApplicationId: '1',
      ProviderId: "0",
      ApiSaveEndpoint: "Save",
      ApiDeleteEndpoint: "Delete",
      ApiGetDocumentsEndpoint: "Get"
    });
  });

}).call(this);
