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
      this.request = new XMLHttpRequest();
      this.request.onreadystatechange = function() {
        var e, resp;
        if (this.readyState === 4) {
          _parent.wait(false);
          try {
            resp = JSON.parse(this.response);
            resp = JSON.parse(resp);
          } catch (_error) {
            e = _error;
            resp = {
              status: 'error',
              data: 'Unknown error occurred: [' + this.response + ']'
            };
          }
          if (resp.Status) {
            _parent.addDocumentToList(resp.ProviderDocumentGET[0]);
            _parent.reset();
          }
        }
      };
      this.fileData = new FormData();
      this.fileData.append('file', this.FileInput[0].files[0]);
      this.fileInput = this.FileInput;
      if (this.validate()) {
        this.upload();
      } else {
        _parent.wait(false);
      }
      return;
    }

    fu.request = null;

    fu.url = "";

    fu['fileData'] = null;

    fu.successCallback = null;

    fu.upload = function() {
      var progressCont;
      progressCont = $(this.progressContainer).show();
      this.request.upload.addEventListener('progress', function(e) {
        var percent;
        percent = Math.round((e.loaded / e.total) * 100);
        return progressCont.find("span.UploadProgress").first().text(percent + "%");
      }, false);
      this.request.open('POST', this.url);
      this.request.send(this.fileData);
    };

    fu.processReadystate = function(response) {
      if (this.successCallback && typeof this.successCallback === "function") {
        this.successCallback(response);
      }
    };

    fu.validate = function() {
      var success;
      success = false;
      if ((this.parent.Manager.UserId != null) && (this.parent.Manager.ApplicationId != null) && (this.parent.Manager.Key != null) && (this.parent.Manager.ProviderId != null)) {
        this.fileData.append('applicationId', this.parent.Manager.ApplicationId);
        this.fileData.append('providerId', this.parent.Manager.ProviderId);
        this.fileData.append('key', this.parent.Manager.Key);
        this.fileData.append('userId', this.parent.Manager.UserId);
        this.fileData.append('docId', $(this.parent.Wrapper).data('docid'));
        this.fileData.append('docCode', $(this.parent.Wrapper).data('docCode'));
        this.parent.showMessage(false, "systemData", systemErrorMessages.ErrorOccured, "error");
        success = true;
      } else {
        this.parent.showMessage(true, "systemData", systemErrorMessages.ErrorOccured, "error");
        success = false;
      }
      if (this.parent.isSimple) {
        this.fileData.append('isSimple', "true");
        this.fileData.append('otherDocType', this.parent.docTypes[0].DocumentTypeIdName);
      }
      if (success && !this.parent.isSimple) {
        this.fileData.append('isSimple', "false");
        if ((this.parent.DocumentName != null) && this.parent.DocumentName !== "") {
          this.fileData.append('docName', this.parent.DocumentName);
          this.parent.showMessage(false, "docName", systemErrorMessages.DocumentUploadName, "error");
        } else {
          this.parent.showMessage(true, "docName", systemErrorMessages.DocumentUploadName, "error");
          success = false;
        }
        if ((this.parent.DocumentTypeId != null) && this.parent.DocumentTypeId > 0) {
          this.fileData.append('docTypeId', this.parent.DocumentTypeId);
          this.parent.showMessage(false, "docType", systemErrorMessages.DocumentUploadType, "error");
        } else {
          this.parent.showMessage(true, "docType", systemErrorMessages.DocumentUploadType, "error");
          success = false;
        }
        if ((this.parent.DocumentType != null) && this.parent.DocumentType !== "") {
          this.fileData.append('docTypeName', this.parent.DocumentType);
        } else {
          success = false;
        }
      }
      if (success && (this.FileInput[0].files[0] != null)) {
        success = true;
        this.parent.showMessage(false, "file", systemErrorMessages.DocumentUploadFile, "error");
      } else {
        this.parent.showMessage(true, "file", systemErrorMessages.DocumentUploadFile, "error");
        success = false;
      }
      return success;
    };

    return _Class;

  })();

}).call(this);
