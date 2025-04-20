import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

const config = {
    apiKey: "AIzaSyDPZktns6F2nqWp96EiKVjOm02A9E6nx3Y",
    authDomain: "schooltimetable-f4833.firebaseapp.com",
    databaseURL: "https://schooltimetable-f4833.firebaseio.com",
    projectId: "schooltimetable-f4833",
    storageBucket: "schooltimetable-f4833.appspot.com",
    messagingSenderId: "914292460263"
};
const dbRef = ref(getDatabase(initializeApp(config)));
const data = await get(child(dbRef, 'companies/-mzPgPOgmP0hOUbHwopNk/table/-DpPW1Nus2Ypi6avVpfzu'));
export const Data = data.val().records;
