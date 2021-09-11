import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService{
  constructor(private httpClient: HttpClient){}

  public login(userId: string, passWord: string){
    const formData = new FormData();
    formData.append('userId',userId);
    formData.append('passWord',passWord);
    // const formData = {
    //   userId : userId,
    //   passWord: passWord
    // };
    return this.httpClient.post('http://localhost:8080/login', formData,{withCredentials: true});
  }
  public user(userId: string, passWord: string){

    console.log(userId);


    const body = {
      user_id : userId,
      user_name: passWord
    };
    return this.httpClient.post('http://localhost:8081/hello', body,{withCredentials: true});
  }
}
