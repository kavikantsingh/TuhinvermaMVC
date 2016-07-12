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
    @p.DocumentName = ""
    @p.DocumentType = ""
    @p.DocumentTypeId = ""
    @p.isSimple
    @p.WaitWrapper
    @p.DocumentLable
    constructor: (@opts = {})->
        (@[k] = v) for own k, v of opts
        #console.log @Manager, 'Manager' 
        _self = @
        @UploadWrapper = $("<div />").addClass("docUploader")
        @Identifier = $(@Wrapper).attr('id')  
        @isSimple = $(@Wrapper).data('simple')
        @UploadInput = $('<input/>').attr('type', 'file')
        @UploadBtn = $('<button />').addClass("buttonGreen small").text('Upload Document')
        @WaitWrapper = $('<div />').text("Please wait.").css('display', 'none')
        @DocumentLable = "Document : "
        
        if $(@Wrapper).data('doclable')?
            @DocumentLable = $(@Wrapper).data('doclable') + ": "
        
        tempLable = @Manager.DocumentTypeNames['doc_'+ $(@Wrapper).data('docid')][0]
        
        @docTypes =  @Manager.DocumentTypeNames["doc_" + $(@Wrapper).data('docid')]
        
        
        
        @AllDocuments = []
        @listWrapper
        if not @isSimple
            @$complexWrapper = 
                $.el('table', {'class' :  'wthtop20 complex uploader', 'width' : '99%', 'margin-left' : '5px'})
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
                                            #Attach Event to DocName
                                            .blur {parent : @},(e)->
                                                console.log this.value
                                                if this.value? and this.value is not ""
                                                    parent.DocumentName = $(this).val()
                                                else alert "Please enter document name."
                                                ##console.log $(this).val(), "Document Name Value"
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
                                            .change {parent : @}, (e)->
                                                if this.value > 0
                                                    e.data.parent.DocumentTypeId = this.value
                                                    e.data.parent.DocumentType = $(this).find('option:selected').text()
                                                else alert "Please Select Document Type"
                                                ##console.log parent.DocumentType, this.value , "Select Change"
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
            #console.log @$complexWrapper
            
            
            
            ##console.log @Manager.DocumentTypeNames["doc_" + $(@Wrapper).data('docid')].length
        
        if @docTypes?
            if not @isSimple
            #console.log @docTypes
                for v,k in @docTypes
                    #console.log v, 'Value', k , "Key"
                    @$complexWrapper.find("#" + @Identifier + "_docType").first()
                    .append($.el('option', { }).val(v.DocumentTypeId).text(v.DocumentTypeIdName))
            else 
                @DocumentLable = @docTypes[0].DocumentTypeIdName
                
                
        #return 
        
        @init(@)
        
    @p.init = (@self)->
        _self = @self
        $wrapperMain = $(@Wrapper)
        $uploadWrapper = $(@UploadWrapper)
        $waitWrapper = $(@WaitWrapper)

        $(@UploadInput).attr('id', @Identifier + "_input")
        
        $(@UploadBtn).click {input : @UploadInput, uplWrapper : @UploadWrapper, parent : _self}, (e)->
            e.data.parent.wait(true)
            uploadWorker = new FileUploader("Upload", e.data.parent.documentUploadSuccess, e.data.input, e.data.uplWrapper, e.data.parent)
        ##console.log @Wrapper, @UploadWrapper
        
        $(@UploadWrapper).attr('id',  @Identifier + "_Uploader")
        
        if not @isSimple
            $uploadWrapper.append @$complexWrapper
        else
            $uploadWrapper.append($.el('label', {'class': 'simple-label'}).text(@DocumentLable + " : "), @UploadInput, @UploadBtn)
            #$uploadWrapper.append()
        
        $uploadWrapper.append($waitWrapper)
        $wrapperMain.append(@UploadWrapper)
        
        @Manager.loadAllDocument($wrapperMain.data('docid'))
            .done (resp)->
                console.log resp, "loaded All Documents"
                if(resp.Status)
                    #_self.AllDocuments["doc_" + $(_self.Wrapper).data('docid')] = resp.ProviderDocumentGET
                    _self.AllDocuments = resp.ProviderDocumentGET
                    #_self.createDocumentsList("doc_" + $(_self.Wrapper).data('docid'), _self.AllDocuments["doc_" + $(_self.Wrapper).data('docid')])
                    _self.createDocumentsList("doc_" + $(_self.Wrapper).data('docid'), _self.AllDocuments)
        
        return
        
        
    @p.documentUploadSuccess = (resp)->
        
#        addDocumentToList(resp)
#        alert("document Uploaded Successfully")
        
        
    @p.createDocumentsList = (docid, docs)->
        #console.log docid, 'DocId', docs, 'Documents'
        @listWrapper = $(@Wrapper).find(@Identifier + "_docList").first()
        #console.log $(@Wrapper).find(@Identifier + "_docList").length is 0
        if $(@Wrapper).find(@Identifier + "_docList").length is 0
            @listWrapper = @createDocumentTableTemplate()
            $(@Wrapper).append(@listWrapper)
        for doc, i in docs
            @addDocumentToList(doc, i);
        return
        ##console.log @Manager.ApplicationDocuments[@WrapperId]
        
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
        console.log doc, @
        obj = @
        deleteBtn = $.el('img', {'src' : '../\../\Content/\Theme1/\images/\delete.png'}).css('cursor', 'pointer')
        
        typeName = doc.DocumentTypeIdName
        if obj.isSimple
            typeName = doc.OtherDocumentTypeName
        
        docElement = 
            $.el('tr', {})
                .append(
                    $.el('td', {}).text(typeName)
                    $.el('td', {}).text(doc.DocumentName)
                    $.el('td', {})
                        .append(
                            $.el('a', {'href' : doc.DocumentPath , 'class' : 'documentdetail'}).text("Document Detail")
                        )
                    $.el('td', {}).append(deleteBtn)
                )
        
        
        deleteBtn.click {document : doc, ind : index, _self : obj, docEle : docElement}, (e)->
            if confirm("Really want delete this document?")
                e.data._self.removeDocument(e.data.document, e.data.ind, e.data.docEle, e.data._self)
        if @listWrapper?        
            $(@listWrapper).append(docElement)
            @refreshDocumentList()
        else
            @listWrapper = @createDocumentTableTemplate()
            $(@listWrapper).append(docElement)
            $(@Wrapper).append(@listWrapper)
        return
    
    #@p.addUploadedDocumentToList = ()-> 
    @p.removeDocument = (document, index, element, selfObj)->
        $(element).remove() #<--temporary Remove this line once api bug fixed
        selfObj.Manager.removeDocument(document).done ()->
            $(document).remove()
            $(element).remove()
            #@AllDocuments[index] = null
            selfObj.refreshDocumentList()
        
    @p.refreshDocumentList = ()->
        if $(@listWrapper).find('tr').length is 1
            $(@listWrapper).css('display', 'none')
        else 
            $(@listWrapper).css('display', '')
    
    @p.wait = (isWait)->
        if isWait
            $(@WaitWrapper).css('display', '')
        else
            $(@WaitWrapper).css('display', 'none')