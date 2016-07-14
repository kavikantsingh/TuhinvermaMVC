class @['FileUploader']
    fu = @::
    _self = self
    fu.thisObj = ""
    fu.fileData
    constructor: (@url, @successCallback, @FileInput, @uploadWrapper, @parent,  @progressContainer = "#ProgressContainer")->
        @fileInput = null
        thisObj = @
        _parent = @parent
        #console.log @FileInput
        @request = new XMLHttpRequest()
        @request.onreadystatechange = ()->
          if `this.readyState` is 4
           #console.log "state Changed to 4" 
           _parent.wait(false)
           try 
            #console.log this
            resp = JSON.parse @response
            resp = JSON.parse resp
            
           catch e
            resp = {
             status: 'error',
             data: 'Unknown error occurred: [' + @response + ']'
            }
           #console.log resp
           if resp.Status
            #console.log thisObj
            #thisObj.processReadystate(resp)
            _parent.addDocumentToList(resp.ProviderDocumentGET[0])
            _parent.reset()
            return

        @fileData = new FormData()
        
        @fileData.append('file', @FileInput[0].files[0])
                
#        formdata = $(element).data("formargs")
#        #console.log formdata
#        if formdata
#            dataarray = formdata.split(".")
#            @fileData.append(a.split(":")[0].replace("*", "."), a.split(":")[1]) for a in dataarray
#
#        #console.log formdata
                
        @fileInput = @FileInput
        #console.log "reached input"
        if @validate()
            @upload()
        else
            _parent.wait(false)
        ##console.log thisObj
        return
        
        
    fu.request = null;
    fu.url = ""
    fu['fileData'] = null
    fu.successCallback = null
    fu.upload = ()->
            #console.log "Uploading File"
            progressCont = $(@progressContainer).show()
            @request.upload.addEventListener('progress', (e)->
                percent = Math.round((e.loaded / e.total ) * 100);
                progressCont.find("span.UploadProgress").first().text(percent + "%");
                #$("span#UploadProgress").text(percent + "%");
            , false);
            @request.open('POST', @url);
            #console.log @fileData
            @request.send(@fileData);
            return
            
    fu.processReadystate = (response) ->
        #console.log response
        if @successCallback && typeof(@successCallback) is "function"
            #console.log "callback"
            @successCallback(response)
            return# CoffeeScript
            
    fu.validate = ()->
        success = no
        
        
            #return no
        #console.log @parent.Manager.UserId? and @parent.Manager.ApplicationId? and @parent.Manager.Key? and @parent.Manager.ProviderId?
        if  @parent.Manager.UserId? and @parent.Manager.ApplicationId? and @parent.Manager.Key? and @parent.Manager.ProviderId?
            @fileData.append('applicationId',  @parent.Manager.ApplicationId)
            @fileData.append('providerId',  @parent.Manager.ProviderId)
            @fileData.append('key',  @parent.Manager.Key)
            @fileData.append('userId',  @parent.Manager.UserId)
            @fileData.append('docId', $(@parent.Wrapper).data('docid'))
            @fileData.append('docCode', $(@parent.Wrapper).data('docCode'))
            @parent.showMessage(false, "systemData", systemErrorMessages.ErrorOccured, "error")
            success = yes
        else
            @parent.showMessage(true, "systemData", systemErrorMessages.ErrorOccured, "error")
            success = no
        ##console.log @parent.isSimple
        
        if @parent.isSimple
            @fileData.append('isSimple', "true")
            #console.log @parent
            @fileData.append('otherDocType', @parent.docTypes[0].DocumentTypeIdName)
            
        if success and not @parent.isSimple  
            @fileData.append('isSimple', "false")
            if @parent.DocumentName? and @parent.DocumentName != ""
                @fileData.append('docName', @parent.DocumentName)
                @parent.showMessage(false, "docName", systemErrorMessages.DocumentUploadName, "error")
            else
                @parent.showMessage(true, "docName", systemErrorMessages.DocumentUploadName, "error")
                success = no
                
            if @parent.DocumentTypeId? and @parent.DocumentTypeId > 0
                @fileData.append('docTypeId', @parent.DocumentTypeId)
                @parent.showMessage(false, "docType", systemErrorMessages.DocumentUploadType, "error")
            else 
                @parent.showMessage(true, "docType", systemErrorMessages.DocumentUploadType, "error")
                success = no    
                
            if @parent.DocumentType? and @parent.DocumentType != ""
                @fileData.append('docTypeName', @parent.DocumentType)
                #@parent.showMessage(false, "docTypeName", systemErrorMessages.DocumentUploadType, "error")
            else
                #@parent.showMessage(true, "docTypeName", systemErrorMessages.DocumentUploadType, "error")
                success = no
                
        if success and @FileInput[0].files[0]?
            success = yes
            @parent.showMessage(false, "file", systemErrorMessages.DocumentUploadFile, "error")
        else
            @parent.showMessage(true, "file", systemErrorMessages.DocumentUploadFile, "error")
            success = no
                
            #console.log @parent.DocumentName, "Document Name"
            
            
            #success = yes
            
            #success = no
        ##console.log @parent 
        success
