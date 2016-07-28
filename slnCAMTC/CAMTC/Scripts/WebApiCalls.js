function loadDropDowns() {
    

    $.getJSON("http://localhost:1530/api/Users/UserTypeGetAll/vinoth", function (data) {
       
        var value, name;
        $.each(data.UserType, function (key, val) {
            value = val.UserTypeId;
            name = val.Code;
            $("#typeDropDown").append("<option value=" + value + ">" + name + "</option>");
        });

    });

    $.getJSON("http://localhost:1530/api/Role/RoleGetAll/vinoth", function (data) {
        var value, name;
        $.each(data.Role, function (key, val) {
            value = val.RoleId;
            name = val.Name;
            $("#roleDropDown").append("<option value=" + value + ">" + name + "</option>");
            $("#rolesTable thead").append("<tr><td> " + name + "<td><input type='checkbox' name='RoleId[]' value='" + value + "'></td><td><input type='checkbox' name='Grantable[]' value='" + value + "'></td>");
        });

    });

    $.getJSON("http://localhost:1530/api/Users/UserStatusGetAll/vinoth", function (data) {
        var value, name;
        $.each(data.UserStatus, function (key, val) {
            value = val.UserStatusId;
            name = val.Name;
            $("#statusDropDown").append("<option value=" + value + ">" + name + "</option>");
        });

    });

    $.getJSON("http://localhost:1530/api/Provider/GetAllProvider/vinoth", function (data) {
        var value, name;
        $.each(data.ProviderResponseList, function (key, val) {
            value = val.ProviderId;
            name = val.ProviderName;
            $("#providerDropDown").append("<option value=" + value + ">" + name + "</option>");
        });
       
    });

   

}
