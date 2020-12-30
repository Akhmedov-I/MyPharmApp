import React, { useState } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../../components/mainLayout';



export default function Signin() {
    const router = useRouter()
    const [allValues, setAllValues] = useState({
        login:'',
        password: '',
    })


    
    const changeHandler = (e) => {
        setAllValues({...allValues,[e.target.name]: e.target.value})
    }



    const credentialTestrt = (e) => {
      let login = "abc@abc.com" //gonna be a server side for logIn
      let password = "abcabc"

      if (allValues.login.toLowerCase() === login && allValues.password === password) {
          router.push('/docspage/docspage')
      }
    }


    return (
        <MainLayout className='container row col-sm-5 border p-5 rounded-3 shadow-lg bg-light' title='Sign In'>
            <h2>Войти в кабинет</h2>
            <form>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" name="login" onChange={changeHandler} id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Логин</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" name="password" onChange={changeHandler} class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Пароль</label>
                </div>
                <div>
                    <button type="button" class="btn btn-primary" onClick={credentialTestrt}>Войти</button>
                </div>
                    
            </form>
        </MainLayout>
    )

}