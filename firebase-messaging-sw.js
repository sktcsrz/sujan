importScripts("https://www.gstatic.com/firebasejs/13.2.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/13.2.0/firebase-messaging-compat.js");

firebase.initializeApp({
    // Add the same Firebase config here
    apiKey: "AIzaSyCXGgicr5SNs-Fk03x_bdoY5UAy7cis8bU",
    authDomain: "e-comorse.firebaseapp.com",
    databaseURL: "https://e-comorse-default-rtdb.firebaseio.com",
    projectId: "e-comorse",
    storageBucket: "e-comorse.firebasestorage.app",
    messagingSenderId: "845116043257",
    appId: "1:845116043257:web:b6e0500c26826a40639728",
    measurementId: "G-32X5E5N6ET"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("Background message:", payload);

    const notificationTitle =
        payload.notification?.title || "New Notification";

    const notificationOptions = {
        body: payload.notification?.body || "You have a new message.",
        data: payload.data || {}
    };

    self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});
