
import React from "react";
import style from './LogInSignIn.module.css'

const border = {
    border: '4px solid blue'
}
export default class LogInSignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            avatarName: '',
            loginName: 'UserName',
            passCode: 'Password'
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { avatarName, loginName, passCode} = this.state

        return (
            <>
                {/*<form>*/}
                {/*    Пример задания стиля через файл my-style.module.css*/}
                {/*    <div className='loginBlockAvatarName'>*/}
                {/*        <label>Отображаемое имя: </label>*/}
                {/*        <input name='avatarName' type='text' value={this.state.avatarName} onChange={this.onValueChange}/>*/}
                {/*    </div>*/}

                {/*    Пример задания стиля инлайн*/}
                {/*    <div className='loginBlockUserName' style={{border: '4px solid blue'}}>*/}
                {/*        <label>Имя пользователя: </label>*/}
                {/*        <input name='loginName' type='text' value={this.state.loginName} onChange={this.onValueChange}/>*/}
                {/*    </div>*/}

                {/*    Пример задания стиля через файл my-style.module.css*/}
                {/*    <div className='loginBlockPassword'>*/}
                {/*        <label>Пароль: </label>*/}
                {/*        <input name='passCode' type='text' value={this.state.passCode} onChange={this.onValueChange}/>*/}
                {/*    </div>*/}
                {/*</form>*/}

                {/*Пример задания стиля через переменную*/}
                {/*<div className='enteredData' style={border}>*/}
                {/*    <span>*/}
                {/*        В форму введены следующие данные:*/}
                {/*        <ul>*/}
                {/*            <li>Имя, которое будет отображаться в чате: {this.state.avatarName}</li>*/}
                {/*            <li>Имя пользователя для входа в чат: {this.state.loginName}</li>*/}
                {/*            <li>Введенный пароль: {this.state.passCode}</li>*/}
                {/*        </ul>*/}
                {/*    </span>*/}
                {/*</div>*/}
                <div className={style.login_signin}>
                    <div className={style.login_form_div}>
                        <form action="/login" method="post" className={style.login_form}>
                            <label htmlFor="username" className={style.login_form__label}>E-mail:</label>
                            <input type="email" id="username_login" name="username_login" className={style.login_form__input} required/>
                                <label htmlFor="password" className={style.login_form__label}>Password:</label>
                                <input type="password" id="password_login" name="password_login" className={style.login_form__input} required/>
                                <center><button type="submit" className={style.login_form_login__submit}>Войти</button></center>
                        </form>
                    </div>
                    <div className={style.login_form_div}>
                        <form action="/login" method="post" className={style.login_form}>
                            <label htmlFor="username" className={style.login_form__label}>E-mail:</label>
                            <input type="email" id="username_signin" name="username_signin" className={style.login_form__input} required/>
                            <label htmlFor="password" className={style.login_form__label}>Password:</label>
                            <center><input type="password" id="password_signin" name="password_signin" className={style.login_form__input} required/>
                            <input type='checkbox'/><> </><label htmlFor='checkbox' className={style.empty} defaultValue='True'>Являюсь собственником апартаментов</label></center>
                            <br/>
                            <center><button type="submit" className={style.login_form_signin__submit}>Зарегистрироваться</button></center>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

/*class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pass: ''
        }
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event) {
        this.setState({username: event.target.value})
    }

    handleSubmit() {
        console.log('Your input value is: ' + this.state.username)
//Send state to the server code
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.updateInput}></input>
                <input type="submit" onClick={this.handleSubmit}></input>
            </div>
        );
    }
}*/




/*
const LogInSignIn = () => {
    !function (e,t,n,r,i,o,s,c,u,a,l,d,p,m)
    {for((l=e.ionicons=e.ionicons||{}).components=u,(p=u.filter(function(e){return e[2]}).map(function(e){return e[0]})).length&&((d=t.createElement("style")).innerHTML=p.join()+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),t.head.insertBefore(d,t.head.firstChild)),function(e,t,n){(e["s-apps"]=e["s-apps"]||[]).push("ionicons"),n.componentOnReady||(n.componentOnReady=function(){var t=this;function n(n){if(t.nodeName.indexOf("-")>0){for(var r=e["s-apps"],i=0,o=0;o<r.length;o++)if(e[r[o]].componentOnReady){if(e[r[o]].componentOnReady(t,n))return;i++}if(i<r.length)return void(e["s-cr"]=e["s-cr"]||[]).push([t,n])}n(null)}return e.Promise?new e.Promise(n):{then:n}})}(e,0,a),i=i||l.resourcesUrl,d=(p=t.querySelectorAll("script")).length-1;d>=0&&!(m=p[d]).src&&!m.hasAttribute("data-resources-url");d--);p=m.getAttribute("data-resources-url"),!i&&p&&(i=p),!i&&m.src&&(i=(p=m.src.split("/").slice(0,-1)).join("/")+(p.length?"/":"")+"ionicons/"),d=t.createElement("script"),function(e,t,n,r){return!(t.search.indexOf("core=esm")>0)&&(!(!(t.search.indexOf("core=es5")>0||"file:"===t.protocol)&&e.customElements&&e.customElements.define&&e.fetch&&e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")&&"noModule"in n)||function(e){try{return new Function('import("")'),!1}catch(e){}return!0}())}(e,e.location,d)?d.src=i+"ionicons.xcgugpyt.js":(d.src=i+"ionicons.eyhlcpv8.js",d.setAttribute("type","module"),d.setAttribute("crossorigin",!0)),d.setAttribute("data-resources-url",i),d.setAttribute("data-namespace","ionicons"),t.head.appendChild(d)}
    (window,document,0,0,0,0,0,0,[["ion-icon","b4az4ysr",1,[["ariaLabel",2,1,"aria-label",2],["color",1,0,1,2],["doc",3,0,0,0,"document"],["el",7],["icon",1,0,1,2],["ios",1,0,1,2],["isServer",3,0,0,0,"isServer"],["isVisible",5],["md",1,0,1,2],["mode",3,0,0,0,"mode"],["name",1,0,1,2],["resourcesUrl",3,0,0,0,"resourcesUrl"],["size",1,0,1,2],["src",1,0,1,2],["svgContent",5],["win",3,0,0,0,"window"]],1]],HTMLElement.prototype);

    return (
                <>
        <div className="container" id="container">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="#" className="social">
                            <ion-icon name="logo-googleplus"></ion-icon>
                        </a>
                        <a href="#" className="social">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                                <button>Войти</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign In</h1>
                    <div className="social-container">
                        <a href="#" className="social">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="#" className="social">
                            <ion-icon name="logo-googleplus"></ion-icon>
                        </a>
                        <a href="#" className="social">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                            <button>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello,Friend</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LogInSignIn


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});


signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
*/

