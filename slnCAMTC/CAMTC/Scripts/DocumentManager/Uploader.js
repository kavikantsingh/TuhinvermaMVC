﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  this['FileUploader'] = (function() {
    var fu, _self;

    fu = _Class.prototype;

    _self = self;

    fu.thisObj = "";

    fu.fileData;

    function _Class(url, successCallback, FileInput, uploadWrapper, parent, progressContainer) {
      var thisObj, _parent;
      this.url = url;
      this.successCallback = successCallback;
      this.FileInput = FileInput;
      this.uploadWrapper = uploadWrapper;
      this.parent = parent;
      this.progressContainer = progressContainer != null ? progressContainer : "#ProgressContainer";
      this.fileInput = null;
      thisObj = this;
      _parent = this.parent;
      console.log(this.FileInput);
      this.request = new XMLHttpRequest();
      this.request.onreadystatechange = function() {
        var e, resp;
        if (this.readyState === 4) {
          console.log("state Changed to 4");
          _parent.wait(false);
          try {
            console.log(this);
            resp = JSON.parse(this.response);
            resp = JSON.parse(resp);
          } catch (_error) {
            e = _error;
            resp = {
              status: 'error',
              data: 'Unknown error occurred: [' + this.response + ']'
            };
          }
          console.log(resp);
          if (resp.Status) {
            console.log(thisObj);
            _parent.addDocumentToList(resp.ProviderDocumentGET[0]);
          }
        }
      };
      this.fileData = new FormData();
      this.fileData.append('file', this.FileInput[0].files[0]);
      this.fileInput = this.FileInput;
      console.log("reached input");
      if (this.validate()) {
        this.upload();
      }
      return;
    }

    fu.request = null;

    fu.url = "";

    fu['fileData'] = null;

    fu.successCallback = null;

    fu.upload = function() {
      var progressCont;
      console.log("Uploading File");
      progressCont = $(this.progressContainer).show();
      this.request.upload.addEventListener('progress', function(e) {
        var percent;
        percent = Math.round((e.loaded / e.total) * 100);
        return progressCont.find("span.UploadProgress").first().text(percent + "%");
      }, false);
      this.request.open('POST', this.url);
      console.log(this.fileData);
      this.request.send(this.fileData);
    };

    fu.processReadystate = function(response) {
      console.log(response);
      if (this.successCallback && typeof this.successCallback === "function") {
        console.log("callback");
        this.successCallback(response);
      }
    };

    fu.validate = function() {
      var success;
      success = false;
      if (this.FileInput[0].files[0] != null) {
        success = true;
      }
      console.log((this.parent.Manager.UserId != null) && (this.parent.Manager.ApplicationId != null) && (this.parent.Manager.Key != null) && (this.parent.Manager.ProviderId != null));
      if ((this.parent.Manager.UserId != null) && (this.parent.Manager.ApplicationId != null) && (this.parent.Manager.Key != null) && (this.parent.Manager.ProviderId != null)) {
        this.fileData.append('applicationId', this.parent.Manager.ApplicationId);
        this.fileData.append('providerId', this.parent.Manager.ProviderId);
        this.fileData.append('key', this.parent.Manager.Key);
        this.fileData.append('userId', this.parent.Manager.UserId);
        this.fileData.append('docId', $(this.parent.Wrapper).data('docid'));
        this.fileData.append('docCode', $(this.parent.Wrapper).data('docCode'));
        success = true;
      } else {
        success = false;
      }
      console.log(this.parent.isSimple);
      if (this.parent.isSimple) {
        this.fileData.append('isSimple', "true");
      }
      if (!this.parent.isSimple && (this.parent.DocumentName != null) && (this.parent.DocumentType != null) && (this.parent.DocumentTypeId != null)) {
        console.log(this.parent.DocumentType, this.parent.DocumentTypeId);
        this.fileData.append('isSimple', "false");
        this.fileData.append('docTypeId', this.parent.DocumentTypeId);
        this.fileData.append('docTypeName', this.parent.DocumentType);
        success = true;
      }
      return success;
    };

    return _Class;

  })();

}).call(this);
