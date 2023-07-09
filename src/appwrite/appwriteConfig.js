import { Client, Databases, Account, ID } from "appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64aac541b63dc35aced5");


export const id = new ID();
export const account = new Account(client,id);

export const databases = new Databases( client, "64aac5bf5e9a0e012656");  
