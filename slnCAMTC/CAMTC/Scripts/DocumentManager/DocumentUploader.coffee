class @['DocumentUploader']
    @p = @::
    
    @p.Manager
    @p.Wrapper
    @p.UploadWrapper
    @p.UploadInput
    @p.UploadBtn
    @p.Identifier
    @p.AllDocuments = []
    @p.listWrapper
    constructor: (@opts = {})->
        (@[k] = v) for own k, v of opts
        console.log @Manager, 'Manager' 
        @UploadWrapper = $("<div />").addClass("docUploader")
        @Identifier = $(@Wrapper).attr('id')  
        @isSimple = $(@Wrapper).data('simple')
        @UploadInput = $('<input/>').attr('type', 'file')
        @UploadBtn = $('<button />').addClass("buttonGreen small").text('Upload Document')
        @AllDocuments = []
        @listWrapper
        if not @isSimple
            @$complexWrapper = 
                $.el('table', {'class' :  'wthtop20', 'width' : '99%', 'margin-left' : '5px'})
                    .append(
                        $.el('tr', {})
                            .append(
                                $.el('td', {'class' : 'txtalgnrgt'})
                                    .append(
                                        $.el('label', {'class' : 'input-label required'}).text("Document Name : ")
                                    )
                                $.el('td', {})
                                    .append(
                                        $.el('input', {'type' : 'text', 'name' : @Identifier + "_docName", 'id' :  @Identifier + "_docName" })
                                    )
                                $.el('td', {'class' : 'txtalgnrgt'})
                                    .append(
                                        $.el('label', {'class' : 'input-label required'}).text("Document Type : ")
                                    )
                                $.el('td', {})
                                    .append(
                                        $.el('select', {'name' : @Identifier + "_docType", 'id' :  @Identifier + "_docType" })
                                            .append(
                                                $.el('option', {'selected' : 'selected', 'value' : 0}).text("Select Type")
                                            )
                                    )
                            )
                            
                        $.el('tr', {})
                            .append(
                                $.el('td', {'class' : 'txtalgnrgt'})
                                    .append(
                                        $.el('label', {'class' : 'input-label required'}).text("Document : ")
                                    )
                                $.el('td', {})
                                    .append(
                                        @UploadInput
                                    )
                                $.el('td', {'class' : ''})
                                    .append(
                                        @UploadBtn
                                    )
                                $.el('td', {})
                                    
                            )
                    )
            console.log @$complexWrapper
            
            
            
            #console.log @Manager.DocumentTypeNames["doc_" + $(@Wrapper).data('docid')].length
        
        
        @init(@)
        
    @p.init = (@self)->
        _self = @self
        $wrapperMain = $(@Wrapper)
        $uploadWrapper = $(@UploadWrapper)
        
        $(@UploadInput).attr('id', @Identifier + "_input")
        
        $(@UploadBtn).click {input : @UploadInput, uplWrapper : @UploadWrapper}, (e)->
            uploadWorker = new FileUploader("Upload", null, e.data.input, e.data.uplWrapper)
        #console.log @Wrapper, @UploadWrapper
        
        $(@UploadWrapper).attr('id',  @Identifier + "_Uploader")
        
        if not @isSimple
            $uploadWrapper.append @$complexWrapper
        else
            $uploadWrapper.append(@UploadInput)
            $uploadWrapper.append(@UploadBtn)
        
        $wrapperMain.append(@UploadWrapper)
        
        @Manager.loadAllDocument($wrapperMain.data('docid'))
            .done (resp)->
                console.log resp, "loaded All Documents"
                if(resp.Status)
                    _self.AllDocuments["doc_" + $(_self.Wrapper).data('docid')] = resp.ProviderDocumentGET
                    _self.createDocumentsList("doc_" + $(_self.Wrapper).data('docid'), _self.AllDocuments["doc_" + $(_self.Wrapper).data('docid')])
                
                
        @docTypes =  @Manager.DocumentTypeNames["doc_" + $(@Wrapper).data('docid')]
        
        if @docTypes?
            console.log @docTypes
            for v,k in @docTypes
                console.log v, 'Value', k , "Key"
                @$complexWrapper.find("#" + @Identifier + "_docType").first()
                .append($.el('option', { }).val(v.DocumentTypeId).text(v.DocumentTypeIdName))
        return
    
    @p.createDocumentsList = (docid, docs)->
        console.log docid, 'DocId', docs, 'Documents'
        @listWrapper = $(@Wrapper).find(@Identifier + "_docList").first()
        console.log $(@Wrapper).find(@Identifier + "_docList").length is 0
        if $(@Wrapper).find(@Identifier + "_docList").length is 0
            @listWrapper = @createDocumentTableTemplate()
            $(@Wrapper).append(@listWrapper)
        for doc, i in docs
            @addDocumentToList(doc, i);
        return
        #console.log @Manager.ApplicationDocuments[@WrapperId]
        
    @p.createDocumentTableTemplate = ()->
        obj = $.el('table', {'class' :  'index vlign grid gridtable', 'width' : '100%' })
                    .append(
                        $.el('tr', {})
                            .append(
                                $.el('th', {'class' : 'txtalgnrgt'}).text("Document Type")
                                    
                                $.el('th', { 'style' : 'text-align : center'}).text("Document Name")
                                $.el('th', {}).text("Document Link")
                                $.el('th', {}).text("Action")
                            )
                    )
        obj
                    
    @p.addDocumentToList = (doc, index)->
        console.log @listWrapper
        obj = @
        deleteBtn = $.el('button', {'class' : ''}).text("Delete")
        docElement = 
            $.el('tr', {})
                .append(
                    $.el('td', {}).text(doc.DocumentTypeIdName)
                    $.el('td', {}).text(doc.DocumentName)
                    $.el('td', {})
                        .append(
                            $.el('a', {'href' : doc.DocumentPath , 'class' : 'documentdetail'}).text("Document Detail")
                        )
                    $.el('td', {}).append(deleteBtn)
                )
        
        
        deleteBtn.click {document : doc, ind : index, _self : obj, docEle : docElement}, (e)->
            if confirm("Really want delete this document?")
                e.data._self.removeDocument(e.data.document, e.data.ind, e.data.docEle)
                
        $(@listWrapper).append(docElement)
        return
        
    @p.removeDocument = (document, index, element)->
        console.log document
        $(element).remove()
        @AllDocuments = $.grep(@AllDocuments, (val)->
            val is not document
        )
        @refreshDocumentList()
        
    @p.refreshDocumentList = ()->
        if @AllDocuments.length is 0
            $(@listWrapper).css('display', 'none')