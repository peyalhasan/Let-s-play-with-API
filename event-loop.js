
function a(){
    // console.log('a')
    b()
    // console.log('aa');
}

function b(){
    // console.log('b')
    // console.log('bb')
}

a()
//fasdlk;gfjnsar'ljkgnwr

function checkAge(){
    const ageField = document.getElementById('age');
    const ageText  = ageField.value;
    
    try{
        const age = parseInt(ageText)
        if(isNaN(age)){
            throw "please enter a number"
        }
    }
    catch(err){
        console.log("Error:", err)
    }
    finally{
        console.log('All done try catch')
    }
    console.log(111)

}