let regbtn = document.querySelector('.register-button')
let loginbtn = document.querySelector('.login-button')
let site = document.querySelector('.site')
let whole = document.querySelector('.whole')
let login = document.querySelector('.login')
let signup = document.querySelector('.signup')
let reg = document.querySelector('.reg')
let log = document.querySelector('.log')
let onclick1 = document.querySelector('.onclick-1')
let onclick2 = document.querySelector('.onclick-2')
console.log(regbtn, loginbtn, site, whole, login, signup,reg,log)
console.log(reg)

regbtn.addEventListener(
    'click', () => {
       signup.classList.add('active')     
        site.classList.add('blur')
        login.classList.add('inactive')
        whole.classList.add('absolute')
    }
    

)
// location.reload()
loginbtn.addEventListener(
    'click', () => {
        signup.classList.add('inactive')
        site.classList.add('blur')
        login.classList.add('active')
        whole.classList.add('absolute')

    }
)

reg.addEventListener(
    'click', () => {
        signup.classList.add('inactive')     
        login.classList.remove('inactive')
        site.classList.add('blur')
        whole.classList.add('absolute')
    }
)


log.addEventListener(
    'click', () => {
        site.classList.remove('blur')
        whole.classList.remove('absolute')
    }
    )

    onclick1.addEventListener(
        'click', () => {
            signup.classList.remove('active')
            signup.classList.add('inactive')
            login.classList.remove('inactive')
            login.classList.add('active')
    
        }
    )

    onclick2.addEventListener(
        'click', () => {
            signup.classList.remove('inactive')     
           signup.classList.add('active')    
            login.classList.remove('active')
            login.classList.add('inactive')
        }
        
    
    )