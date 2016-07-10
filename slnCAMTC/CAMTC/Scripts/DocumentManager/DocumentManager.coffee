class @['DocumentManager']
    p = @::
    
    p.ApiBaseUrl = ""
    p.ApplicationId = ""
    p.ProviderId = ""
    p.ApiSaveEndpoint = ""
    p.ApiDeleteEndpoint = ""
    p.ApiGetDocumentsEndpoint = ""
    
    p.Key = ""
    p.UserId = ""
    
    p.DocumentUploader = {}
    
    p.DocumentContainerBuilder
    p.ApplicationDocuments = []
    
    p.DocumentWrapperClass = "documentContainer"
    
    p.CurrentInstance = {}
    
    constructor : (@opts  = {}) ->
        (@[k] = v) for own k, v of opts
        @init(@)
        
    p.init = (@self)->
        #alert("Initializing")
        p.CurrentInstance = @self
        $("." + @DocumentWrapperClass).each ()->
            p.CurrentInstance.addUploader(this)
            #Prepare Container 
        
        return
        
    p.loadAllDocument = ()->
        obj = p.CurrentInstance
        $.ajax({
            url : obj.ApiBaseUrl + obj.ApiGetDocumentsEndpoint + "/" + obj.Key
        })
        
    p.addUploader = (wrapper)->
        console.log wrapper
        @ApplicationDocuments[wrapper.id] = { Wrapper : wrapper, Uploader : new DocumentUploader({ Manager : @self, Wrapper : wrapper })}
        #@ApplicationDocuments[wrapper.id].Uploader.check()
    
    p.getAllWrapper = ()->
        @ApplicationDocuments
        for k, v of @ApplicationDocuments
            console.log p.CurrentInstance.ApplicationDocuments[k]
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