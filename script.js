result = document.querySelector('#form_result');
nameField = document.querySelector('#reg_name');
surnameField = document.querySelector('#reg_surname');
dateField = document.querySelector('#reg_date');
gender = document.querySelectorAll('[name="gender"]');
emailField = document.querySelector('#reg_email');
phoneField = document.querySelector('#reg_phone');
univField = document.querySelector('#reg_university');
submit_btn = document.querySelector('#submit-btn');



submit_btn.addEventListener("click", function(){


    if( isValidName(nameField.value) && 
        isValidLastName(surnameField.value) &&
        IsValidDate(dateField.value) &&
        IsValidGender(gender) &&
        isValidEmail(emailField.value) &&
        isValidTelephone(phoneField.value) &&
        isValidUniversity(parseInt(univField.value))
    )
    {
        result.style.color = "green"
        result.innerHTML = "Result: Ready To Submit"
    }
    else
    {
        result.style.color = "red"
        result.innerHTML = "Result: Not Ready To Submit"
    }

    
        
    

    
});


//Daxil edilen ad standartlara uyurmu
function isValidName(argStudentName)
{
    if(!isEmpty(argStudentName))
    {
        if(isAlpha(argStudentName))
        {
            if(isCapitalized(argStudentName))
            {
                return true
            }
            else
            {
                window.alert("Adin yalniz birinci herfi boyuk olmalidir")
                return false
            }
        }
        else
        {
            window.alert("Ad yalniz herflerden teskil oluna biler")
            return false
        }        
    }
    else
    {
        window.alert("Ad hissesini doldurun")
        return false
    }
}

//Daxil edilen soyad standartlara uyurmu
function isValidLastName(argStudentLastName)
{
    if(!isEmpty(argStudentLastName))
    {
        if(isAlpha(argStudentLastName))
        {
            if(isCapitalized(argStudentLastName))
            {
                return true
            }
            else
            {
                window.alert("Soyadin yalniz birinci herfi boyuk olmalidir")
                return false
            }
        }
        else
        {
            window.alert("Soyad yalniz herflerden teskil oluna biler")
            return false
        }
    }
    else
    {
        window.alert("Soyad hissesi doldurulmalidir")
        return false
    }
}

function IsValidDate(argDate)
{
    if(!isEmpty(argDate))
    {
        return true   
    }
    else
    {
        window.alert("Tarix qeyd olunmalidir")
        return false
    }
}

function IsValidGender(argGender)
{
    for(var i =0; i < argGender.length; i++)
    {
        if(argGender[i].checked)
        {
            return true
        }
    }

    window.alert("Cinsiyyet secilmelidir")
    return false
}

//Daxil edilen e-mail standartlara uyurmu   (Yeniden gozden kecir)
function isValidEmail(argStudentMail)
{
    var pattern = /[A-Za-z](\w|-|\.|_)+@[A-Za-z]+\.[A-Za-z]{1,3}$/;

    if (pattern.test(argStudentMail))
    {
        return true
    }
    else
    {
        alert("Daxil etdiyiniz email standartlara uygun deyil.")
        return false
    }
}

//Daxil edilen telefon standartlara uyurmu   
function isValidTelephone(argStudentTel)
{
    if(!isEmpty(argStudentTel))
    {
        if(argStudentTel.length == 13)
        {
            if(TelPrefix(argStudentTel))
            {
                if(isDigit(argStudentTel))
                {
                    return true
                }
                else
                {
                    window.alert("Nomrenizde (+994 basqa) butun elementler reqemler olmalidir ")
                    return false
                }
            }
            else
            {
                window.alert("Nomreniz +994 ile baslamalidir")
                return false
            }
        }
        else
        {
            window.alert("Nomre +994 de daxil olmaqla, umumilikde 14 elementden teskil olunmalidir")
            return false
        }        
    }
    else
    {
        window.alert("Telefon hissesi doldurulmalidir")
        return false
    }

    function TelPrefix(argStudentTel)
    {
        if(argStudentTel[0] != "+")
            return false
        if(argStudentTel[1] != "9")
            return false
        if(argStudentTel[2] != "9")
            return false
        if(argStudentTel[3] != "4")
            return false
        return true
    }

    function isDigit(argStudentTel)
    {
        for (var i=4; i<argStudentTel.length; i++)
        {
            if(argStudentTel[i].charCodeAt(0) >= 48 &&
               argStudentTel[i].charCodeAt(0) <= 57 )
            {

            }
            else
            {
                return false
            }
        }
        return true
    }
   
}

//Gonderilen string herflerden teskil olub ya yox:
function isAlpha(argString)
{
    for (var i = 0; i < argString.length; i++)   
    {   
        if(argString[i].toLowerCase() == argString[i] && 
           argString[i].toUpperCase() == argString[i])
        {
            return false
        }        
    }
    return true
}

//Gonderilen stringin yalniz ilk ilk herifi boyukdurmu
function isCapitalized(argString)
{
    if(argString[0].toLowerCase() != argString[0] && 
       argString[0].toUpperCase() == argString[0])
    {
        for (var i = 1; i < argString.length ; i++)
        {
            if(argString[i].toLowerCase() == argString[i] && 
               argString[i].toUpperCase() != argString[i])
            {
                continue;
            }
            else
            {
                return false
            }
        }
        return true  
    } 
    else
    {
        return false
    }
}

//Gonderilen stringin bosdurmu
function isEmpty(argString)
{
    if(argString.length == 0)
    {
        return true
    }
    else
    {
        return false
    }
    
}

function isValidUniversity(argUniversity){
    if(argUniversity == -1)
    {
        alert("Universitet secilmelidir")
        return false
    }
    return true
}