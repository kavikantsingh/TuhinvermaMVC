class @['FileUploader']
    fu = @::
    _self = self
    fu.thisObj = ""
    fu.fileData
    constructor: (@url, @successCallback, @FileInput, @uploadWrapper, @parent,  @progressContainer = "#ProgressContainer")->
        @fileInput = null
        thisObj = @
        _parent = @parent
        console.log @FileInput
        @request = new XMLHttpRequest()
        @request.onreadystatechange = ()->
          if `this.readyState` is 4
           console.log "state Changed to 4" 
           _parent.wait(false)
           try 
            console.log this
            resp = JSON.parse @response
            resp = JSON.parse resp
            
           catch e
            resp = {
             status: 'error',
             data: 'Unknown error occurred: [' + @response + ']'
            }
           console.log resp
           if resp.Status
            console.log thisObj
            #thisObj.processReadystate(resp)
            _parent.addDocumentToList(resp.ProviderDocumentGET[0])
            return

        @fileData = new FormData()
        
        @fileData.append('file', @FileInput[0].files[0])
                
#        formdata = $(element).data("formargs")
#        console.log formdata
#        if formdata
#            dataarray = formdata.split(".")
#            @fileData.append(a.split(":")[0].replace("*", "."), a.split(":")[1]) for a in dataarray
#
#        console.log formdata
                
        @fileInput = @FileInput
        console.log "reached input"
        if @validate()
            @upload()
        #console.log thisObj
        return
        
        
    fu.request = null;
    fu.url = ""
    fu['fileData'] = null
    fu.successCallback = null
    fu.upload = ()->
            console.log "Uploading File"
            progressCont = $(@progressContainer).show()
            @request.upload.addEventListener('progress', (e)->
                percent = Math.round((e.loaded / e.total ) * 100);
                progressCont.find("span.UploadProgress").first().text(percent + "%");
                #$("span#UploadProgress").text(percent + "%");
            , false);
            @request.open('POST', @url);
            console.log @fileData
            @request.send(@fileData);
            return
            
    fu.processReadystate = (response) ->
        console.log response
        if @successCallback && typeof(@successCallback) is "function"
            console.log "callback"
            @successCallback(response)
            return# CoffeeScript
            
    fu.validate = ()->
        success = no
        
        if @FileInput[0].files[0]?
            success = yes
        console.log @parent.Manager.UserId? and @parent.Manager.ApplicationId? and @parent.Manager.Key? and @parent.Manager.ProviderId?
        if @parent.Manager.UserId? and @parent.Manager.ApplicationId? and @parent.Manager.Key? and @parent.Manager.ProviderId?
            @fileData.append('applicationId',  @parent.Manager.ApplicationId)
            @fileData.append('providerId',  @parent.Manager.ProviderId)
            @fileData.append('key',  @parent.Manager.Key)
            @fileData.append('userId',  @parent.Manager.UserId)
            @fileData.append('docId', $(@parent.Wrapper).data('docid'))
            @fileData.append('docCode', $(@parent.Wrapper).data('docCode'))
            success = yes
        else
            success = no
        console.log @parent.isSimple
        
        if @parent.isSimple
            @fileData.append('isSimple', "true")
            
        if not @parent.isSimple and @parent.DocumentName? and @parent.DocumentType? and @parent.DocumentTypeId?
            console.log @parent.DocumentType, @parent.DocumentTypeId
            @fileData.append('isSimple', "false")
            @fileData.append('docTypeId', @parent.DocumentTypeId)
            @fileData.append('docTypeName', @parent.DocumentType)
            success = yes
        #else
            #success = no
        #console.log @parent 
        success
