import {Account, Avatars, Client, Databases, OAuthProvider, Query} from "react-native-appwrite";
import * as Linking from "expo-linking";
import {openAuthSessionAsync} from "expo-web-browser";


export const config = {
    platform: "com.Sathon.RealEstate",
    endpoint:process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId:process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId:process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    galleryCollectionId:process.env.EXPO_PUBLIC_APPWRITE_GALLERY_COLLECTION_ID,
    reviewCollectionId:process.env.EXPO_PUBLIC_APPWRITE_REVIEW_COLLECTION_ID,
    agentCollectionId:process.env.EXPO_PUBLIC_APPWRITE_AGENT_COLLECTION_ID,
    propertyCollectionId:process.env.EXPO_PUBLIC_APPWRITE_PROPERTY_COLLECTION_ID,
}

export const client = new Client();

client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!)

export const avatar = new Avatars(client);
export const account = new Account(client);
export const databases = new Databases(client);

export async function login() {
    try {
        const redirectUri = Linking.createURL("/"); // this is to allow external links (google auth) to load in the app and return back when done

        const response = await account.createOAuth2Token(
            OAuthProvider.Google, redirectUri
        );

        if(!response) throw new Error("Unable to login");

        const browserResult =await openAuthSessionAsync(
            response.toString(),
            redirectUri
        )

        if(browserResult.type != "success") throw new Error("Failed to login using OAuthProvider");

        const url = new URL(browserResult.url);

        const secret = url.searchParams.get("secret")?.toString();
        const userId = url.searchParams.get("userId")?.toString();

        if(!userId || !secret) throw new Error("Failed to login using URL");

        const session = await account.createSession(userId, secret);

        if(!session) throw new Error("Failed to create session");

        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function logout() {
    try {
        await account.deleteSession("current");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function getCurrentUser() {
    try {
        const response = await account.get();
        if(response.$id) {
            const userAvatar = avatar.getInitials(response.name);

            return {
                ...response,
                avatar: userAvatar.toString(),
            }

            }
} catch (error) {
        console.error(error);
        return null;
    }
        }

    export async function getLatestProperties() {
    try {
        const result = await databases.listDocuments(
            config.databaseId!,
            config.propertyCollectionId!,
            [Query.orderAsc("$createdAt"), Query.limit(5)]

        )

        return result.documents;

    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getProperties({ filter, query, limit } : {
    filter: string;
    query: string;
    limit?: number;}) {
    try {

        const buildQuery = [Query.orderDesc("$createdAt")];

        if(filter && filter !==  "All")
            buildQuery.push(Query.equal( "type", filter));

        if(query)
            buildQuery.push(
                Query.or([
                Query.search("name", query),
                Query.search("address", query),
                Query.search("description", query),
            ])
            );


        if(limit) buildQuery.push(Query.limit(limit));

        const result = await databases.listDocuments(
            config.databaseId!,
            config.propertyCollectionId!,
            buildQuery

        );

        return result.documents;


    } catch (error) {
        console.error(error);
        return [];
    }


}