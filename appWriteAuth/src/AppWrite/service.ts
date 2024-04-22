import { ID, Account, Client } from 'appwrite'
import config from 'react-native-config'

import Snackbar from 'react-native-snackbar'

// step 1
const appWriteClient = new Client();

const APPWRITE_ENDPOINT: string = config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID: string = config.APPWRITE_PROJECT_ID!;

// step 2
type CreateUserAccount = {
    email: string;
    password: string;
    name: string;
}
type loginUserAccount = {
    email: string;
    password: string;
}

//step 3
class AppWriteService {
    account;

    constructor() {
        appWriteClient
            .setEndpoint(APPWRITE_ENDPOINT)
            .setProject(APPWRITE_PROJECT_ID)

        this.account = new Account(appWriteClient)
    }

    // Create a new record of user inside appwrite
    async createAccount({ email, password, name }: CreateUserAccount) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if (userAccount) {
                return this.login({ email, password })
            }
            else {
                return userAccount
            }
        }
        catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG,
            });
            console.log("Appwrite Serice :: CreateAccount() :: " + error);
        }
    }

    async login({ email, password }: loginUserAccount) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        }
        catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG,
            });
            console.log("Appwrite Serice :: LoginAccount() :: " + error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        }
        catch (error) {
            console.log("Appwrite Serice :: getCurrentUser() :: " + error);
        }
    }

    async logOut() {
        try {
            return await this.account.deleteSession('current');
        } 
        catch (error) {
            console.log("Appwrite Serice :: Logout() :: " + error);

        }
    }
}

export default AppWriteService