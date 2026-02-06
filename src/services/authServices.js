import { config } from "./config";


class AuthServices {

    async createAccount({email,name,password}) {
        // console.log(name,email,password);
        try {
            const userAccount = await fetch(`${config.API_BASE_URL}/api/v1/user/register`,{
                    method: "POST",
                    headers: {"content-type": "application/json"},
                    body: JSON.stringify({email,name,password})
            })

            if (!userAccount.ok) {
                throw new Error(`Signup failed: ${userAccount.statusText}`);
            }
            
            const userInfo = await userAccount.json();

            if(userInfo)
            {
                console.log("Signup successfull");
                return await this.login({email,password});   
            }
            else{
                return userInfo || null;
            }
        } catch (error) {
            console.log("authService :: createAccount ::  error ",error)
            throw error
        }
    }


    async login({email,password}) {
        // console.log(email,password);
        
        try {
            const response = await fetch(`${config.API_BASE_URL}/api/v1/user/login`,{
                method: "POST",
                headers: {"content-type": "application/json"},
                credentials: "include",
                body: JSON.stringify({email,password})

            })

            if (!response.ok) {
                throw new Error(`Login failed: ${response.statusText}`);
            }
            
            const data = await response.json();
            return data;

        } catch (error) {
            console.log("authService :: login ::  error ",error)
            throw error
        }
    }

    async logout() {
        try {
            const response = await fetch(`${config.API_BASE_URL}/api/v1/user/logout`,{
                method: "POST",
                headers: {"content-type": "application/json"},
                credentials: "include",
            })

            if (!response.ok) {
                throw new Error(`Logout failed: ${response.statusText}`);
            }
            
            let data;
            try {
                data = await response.json();
            } catch (error) {
                data = { message: "Logout successful" };
            }
        
            return data;

        } catch (error) {
            console.log("authService :: logout ::  error ",error)
            throw error
        }
    }

    async getCurrentUser() {

        try {
            const response = await fetch(`${config.API_BASE_URL}/api/v1/user/current-user`,{
                method: "GET",
                headers: {"content-type": "application/json"},
                credentials: "include"
            })
            if (!response.ok) {
                throw new Error(`getting current user failed: ${response.statusText}`);
            }

            const currentUser = await response.json();

            return currentUser;

        } catch (error) {
            console.log("authService :: getcurrentuser ::  error ",error)
            return null;
        }
    }

}   

const authService = new AuthServices();

export {authService}