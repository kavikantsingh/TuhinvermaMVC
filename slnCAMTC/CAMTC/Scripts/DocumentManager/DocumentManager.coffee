class @['DocumentManager']
    @p = @::
    
    @p.ApiBaseUrl = "http://ws.camtc.inlumon.com/"
    @p.ApplicationId = ""
    @p.ProviderId = ""
    @p.ApiSaveEndpoint = ""
    @p.ApiDeleteEndpoint = ""
    @p.ApiGetDocumentsEndpoint = ""
    @p.UploadUrl = "School/Certification/Upload"
    @p.Key = ""
    @p.UserId = ""
    
    @p.DocumentUploader = {}
    
    @p.DocumentContainerBuilder
    
    @p.ApplicationDocuments = []
    @p.DocumentTypeNames = []
    
    @p.DocumentWrapperClass = "documentContainer"
    
    @p.CurrentInstance = {}
    
    constructor : (@opts  = {}) ->
        (@[k] = v) for own k, v of opts
        #@UploadUrl = "School/Certification/Upload"
        @CurrentInstance = @
        @DocumentTypeNames = []
        ##console.log @CurrentInstance
        ShowLoader()
        @init()
        
    @p.init = ()->
        #alert("Initializing")
        _self = @CurrentInstance
        @UserId = sessionStorage.School_UserId
        ##console.log _self
        $("." + @DocumentWrapperClass).each ()->
            #console.log _self
            docid = $(this).data('docid')
            doccode =  $(this).data('docCode')
            simple = $(this).data('simple')
            wrp = @
            #console.log _self.DocumentTypeNames['doc_'+ docid ]?
            #if not $(this).data('simple') and not _self.DocumentTypeNames['doc_'+ docid ]?
            if not _self.DocumentTypeNames['doc_'+ docid ]?
                _self.loadDocTypeName(docid, doccode)
                    .success (resp)->
                        if resp.Status
                            _self.DocumentTypeNames['doc_'+ docid ] = resp.DocumentMasterGET
                            console.log _self.DocumentTypeNames['doc_'+ docid ], "Success"
                        _self.addUploader(wrp)
            else
                _self.addUploader(this)
            return
            #Prepare Container 
        HideLoader()
        return
        
    @p.loadAllDocument = (docid)->
        obj = @CurrentInstance
        
        #console.log obj.ApiBaseUrl + obj.ApiGetDocumentsEndpoint  + obj.Key
        $.ajax({
            url : obj.ApiBaseUrl + obj.ApiGetDocumentsEndpoint  + obj.Key
            type : "GET"
            data : { 
                ProviderId : obj.ProviderId
                ApplicationId : obj.ApplicationId
                DocumentId : docid
                }
        })
        
    @p.loadDocTypeName = (docid, doccode)->
        obj = @
        $.ajax({
            url : obj.ApiBaseUrl + "api/Document/DocumentGetDocumentTypeName/"  + obj.Key
            type : "GET"
            data : { 
                DocId  : docid
                DocCode : doccode
                }
        })
        
    @p.removeDocument = (doc)->
        obj = @
        $.ajax({
            url : obj.ApiBaseUrl + obj.ApiDeleteEndpoint  + obj.Key + "?ProviderDocId=" + doc.ProviderDocumentId + "&UserId=" + obj.UserId + "&ProviderId=" + obj.ProviderId + "&ApplicationId=" + obj.ApplicationId
            type : "POST"
        })
    
          
    @p.getDocTypeNames = (docid) ->
        #console.log @DocumentTypeNames, docid
        for k, v of @ApplicationDocuments
            if k is 'doc_' + docid
                #console.log @CurrentInstance.DocumentTypeNames[k]
                @CurrentInstance.DocumentTypeNames[k]
                
        
    @p.addUploader = (wrapper)->
        #console.log 'Has Wrapper', @checkWrapper(wrapper.id)?
        #if @checkWrapper(wrapper.id).length is 0 or  @checkWrapper(wrapper.id)[0] is undefined
        if not @checkWrapper(wrapper.id)?
            @ApplicationDocuments[wrapper.id] = { Wrapper : wrapper, Uploader : new DocumentUploader({ Manager : @CurrentInstance, Wrapper : wrapper })}
        #@ApplicationDocuments[wrapper.id].Uploader.check()
    
    @p.getAllWrapper = ()->
        @ApplicationDocuments
        for k, v of @ApplicationDocuments
            console.log @CurrentInstance.ApplicationDocuments[k]
        return
    
    @p.checkWrapper = (id)->
        @CurrentInstance.ApplicationDocuments[id]
            
    @p.refresh = ()->
        $("." + @DocumentWrapperClass).each (e)->
            
            _self.addUploader(this)
            
        return

