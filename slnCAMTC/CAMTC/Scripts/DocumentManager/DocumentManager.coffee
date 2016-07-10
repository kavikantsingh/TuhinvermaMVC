class @['DocumentManager']
    @p = @::
    
    @p.ApiBaseUrl = ""
    @p.ApplicationId = ""
    @p.ProviderId = ""
    @p.ApiSaveEndpoint = ""
    @p.ApiDeleteEndpoint = ""
    @p.ApiGetDocumentsEndpoint = ""
    
    @p.Key = ""
    @p.UserId = ""
    
    @p.DocumentUploader = {}
    
    @p.DocumentContainerBuilder
    @p.ApplicationDocuments = []
    
    @p.DocumentWrapperClass = "documentContainer"
    
    @p.CurrentInstance = {}
    
    constructor : (@opts  = {}) ->
        (@[k] = v) for own k, v of opts
        @CurrentInstance = @
        #console.log @CurrentInstance
        @init()
        
    @p.init = ()->
        #alert("Initializing")
        _self = @CurrentInstance
        #console.log _self
        $("." + @DocumentWrapperClass).each ()->
            console.log _self
            _self.addUploader(this)
            return
            #Prepare Container 
        
        return
        
    @p.loadAllDocument = ()->
        obj = @CurrentInstance
        $.ajax({
            url : obj.ApiBaseUrl + obj.ApiGetDocumentsEndpoint + "/" + obj.Key
        })
        
    @p.addUploader = (wrapper)->
        console.log 'Wrapper', @checkWrapper(wrapper.id)
        if @checkWrapper(wrapper.id).length is 0
            @ApplicationDocuments[wrapper.id] = { Wrapper : wrapper, Uploader : new DocumentUploader({ Manager : @self, Wrapper : wrapper })}
        #@ApplicationDocuments[wrapper.id].Uploader.check()
    
    @p.getAllWrapper = ()->
        @ApplicationDocuments
        for k, v of @ApplicationDocuments
            console.log @CurrentInstance.ApplicationDocuments[k]
        return
    @p.checkWrapper = (id)->
        for k, v of @ApplicationDocuments
            if k is id
                console.log @CurrentInstance.ApplicationDocuments[k]
                @CurrentInstance.ApplicationDocuments[k]
            
    @p.refresh = ()->
        $("." + @DocumentWrapperClass).each (e)->
            
            _self.addUploader(this)
            
        return

$(document).ready ()->
    window.DefaultDocumentManager = new DocumentManager({
        ApiBaseUrl : "/test/"
        ApplicationId : '1'
        ProviderId : "0"
        ApiSaveEndpoint : "Save"
        ApiDeleteEndpoint : "Delete"
        ApiGetDocumentsEndpoint : "Get"
    })