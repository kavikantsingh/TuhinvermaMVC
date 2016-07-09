class @['FileUploader']
    fu = @::
    _self = self
    fu.thisObj = ""
    constructor: (@url, @successCallback, @FileInput, @uploadWrapper, @formTypeSelector = "MediaUploader", @progressContainer = "#ProgressContainer")->
        @fileInput = null
        thisObj = @
        console.log @FileInput
        @request = new XMLHttpRequest()
        @request.onreadystatechange = ()->
          if `this.readyState` is 4
           console.log "state Changed to 4" 
           try 
            resp = JSON.parse `this.response`
            console.log resp
           catch e
            resp = {
             status: 'error',
             data: 'Unknown error occurred: [' + `this.responseText` + ']'
            }
            console.log resp
           if resp.status is "success"
            thisObj.processReadystate(resp)
            return

        @fileData = new FormData()
        console.log @FileInput[0].files[0]
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
            @request.send(@fileData);
            return
    fu.processReadystate = (response) ->
        if @successCallback && typeof(@successCallback) is "function"
            console.log "callback"
            @successCallback(response)
            return# CoffeeScript
