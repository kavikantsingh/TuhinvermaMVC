
        
class @['SectionManager']
    
    vm = @::
    
    vm['ulElement'] = ""
    vm['sectionWrapper'] = ""
    vm['listItemActiveClass'] = ""
    vm['sectionState'] = {}
    
    constructor : (opts = {})->
        (@[k] = v) for own k, v of opts
        @iam = @
        @sectionState= {}
        @initSections(@iam)
        @hideLoading()
    
    vm.getListElement = ()->
        @iam['ulElement']
        
    vm.initSections = (obj)->
        #console.log @,  @iam
        $(@ulElement + " li") .each ->
            if $(this).hasClass("initial")
                obj.changeSelection(this)
            $(this).click(()->
                #console.log @
                obj.changeSelection(@)
                return
                )
            return
        return
        
    vm.bindEvent = (evt, func)->
        
    vm.changeSelection = (item)->
        #console.log item   
        @showLoading() 
        
        loadingSectionId = $(item).data("section")
        if !@sectionState[loadingSectionId]
            @loadSection(loadingSectionId, @)
        else
            @updateSection(@, @sectionState[loadingSectionId].element) 
        @unSelectOther(@)
        $(item).addClass(@listItemActiveClass)
        #@updateSection(@, item)
        
        
        return
        
    vm.validateSelection = (item)->
        return
        
    vm.unSelectOther = (obj)->
        #console.log(@)
        $(obj.ulElement + " li."+ obj.listItemActiveClass) .each ()->
            $(@).removeClass(obj.listItemActiveClass)
            return
        return
    
    vm.updateSection = (obj, item)->
        $(obj.sectionWrapper + " .activeSection").each ->
            $(@).css('display', 'none')
            $(@).removeClass("activeSection")
        $(item).addClass("activeSection")
        $(item).css('display', 'block')
        
        
    vm.getSelf = ()->
        @
    vm.showLoading = ()->
        ShowLoader()
        return
        
    vm.hideLoading = ()->
        HideLoader()
        return
    
    vm.loadSection = (id, obj)->
        console.log id, obj, not obj.sectionState and not obj.sectionState[id]
        if not obj.sectionState[id]
                $.ajax( 
                    url : "LoadSection/" + id
                    type : "GET"
                    success : (data)->
                        el = $("<div />")
                        elid = id + "_wrapper"
                        $(el).attr('id', elid)
                        #console.log $(el).attr('id')
                        $(el).append(data)
                        #$(el).addClass("activeSection")
                        
                        obj.sectionState[id]= 
                            {
                                loaded : true
                                element : el
                            }
                        $(obj.sectionWrapper).append(el)
                        obj.updateSection(obj, el)
                        obj.hideLoading()
                        return
                    )
            
        return
        
