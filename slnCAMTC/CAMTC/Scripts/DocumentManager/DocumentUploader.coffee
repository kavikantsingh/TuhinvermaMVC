class @['DocumentUploader']
    @p = @::
    
    @p.Manager = null
    @p.Wrapper = null
    @p.UploadWrapper = $("<div />").addClass("docUploader")
    
    @p.UploadInput = $('<input/>').attr('type', 'file')
    @p.UploadBtn = $('<button />').addClass("buttonGreen small").text('Upload Document')
    
    constructor: (@opts = {})->
        (@[k] = v) for own k, v of opts
        console.log @Manager, 'Manager' 
        @init(@)
        
    @p.init = (@self)->
        @Identifier = $(@Wrapper).attr('id')    
        $wrapperMain = $(@Wrapper)
        $uploadWrapper = $(@UploadWrapper)
        $(@UploadInput).attr('id', @Identifier + "_input")
        
        $(@UploadBtn).click {input : @UploadInput, uplWrapper : @UploadWrapper}, (e)->
            uploadWorker = new FileUploader("Upload", null, e.data.input, e.data.uplWrapper)
        #console.log @Wrapper, @UploadWrapper
        
        $(@UploadWrapper).attr('id',  @Identifier + "_Uploader")
        
        $wrapperMain.append(@UploadWrapper)
        $uploadWrapper.append(@UploadInput)
        $uploadWrapper.append(@UploadBtn)
    @p.check = ()->
        #console.log @Manager.ApplicationDocuments[@WrapperId]