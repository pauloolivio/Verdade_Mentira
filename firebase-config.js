// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeqfZgsHC9_aOEafcMMSAQYuOfoWB-Hb0",
    authDomain: "karoot-disciplinas.firebaseapp.com",
    databaseURL: "https://karoot-disciplinas-default-rtdb.firebaseio.com",
    projectId: "karoot-disciplinas",
    storageBucket: "karoot-disciplinas.firebasestorage.app",
    messagingSenderId: "360464641158",
    appId: "1:360464641158:web:0f227e82e36dd97ffeb507",
    measurementId: "G-2V3LFXZJLK"
};

// Inicializa o Firebase (Compat Mode)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Vincula os módulos ao objeto window para os outros scripts encontrarem
window.auth = firebase.auth();
window.db = firebase.database();

// Se for usar Firestore futuramente
if (typeof firebase.firestore === "function") {
    window.firestore = firebase.firestore();
}

// Provedor de Autenticação do Google
window.googleProvider = new firebase.auth.GoogleAuthProvider();