'use strict';

const userForm = new UserForm();
userForm.loginFormCallback = (data) => {return ApiConnector.login(userForm.loginFormCallback, response => console.log(response))};
// не понимаю, что  использовать в колбеке.
// просьба на логине подробно расписать, какие функции и переменные использовать. 
// сложность в понимании, как вообще работает программа. 
// мое понимание, есть объект userForm, затем пишем самописное свойство метод попытки авторизации loginFormCallback,
// в теле функции data возвращаем статический метод ApiConnector.login который должен принимать объект формы????? и второй аргумент callback???????