import { Wrapper } from "./Wapper";


export class LoginPage extends Wrapper {



    async url(url:string){
        await this.page.goto(url);
    }

async loginData(username: string, password: string) {
    await this.clearandType('#username', username);
    await this.clearandType('#password', password);
    await this.page.click('.decorativeSubmit');
}


}