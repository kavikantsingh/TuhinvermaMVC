class @['DocumentUploader']
    @p = @::
    
    @p.Manager
    @p.Wrapper
    @p.UploadWrapper
    @p.UploadInput
    @p.UploadBtn
    @p.Identifier
    
    constructor: (@opts = {})->
        (@[k] = v) for own k, v of opts
        console.log @Manager, 'Manager' 
        @UploadWrapper = $("<div />").addClass("docUploader")
        @Identifier = $(@Wrapper).attr('id')  
        @isSimple = $(@Wrapper).data('simple')
        @UploadInput = $('<input/>').attr('type', 'file')
        @UploadBtn = $('<button />').addClass("buttonGreen small").text('Upload Document')
        
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
        @docTypes =  @Manager.DocumentTypeNames["doc_" + $(@Wrapper).data('docid')]
        
        if @docTypes?
            console.log @docTypes
            for v,k in @docTypes
                console.log v, 'Value', k , "Key"
                @$complexWrapper.find("#" + @Identifier + "_docType").first()
                .append($.el('option', { }).val(v.DocumentTypeId).text(v.DocumentTypeIdName))
        return
    
        
        #console.log @Manager.ApplicationDocuments[@WrapperId]