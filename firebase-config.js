// firebase-config.js - Versão corrigida
// Usando apenas a sintaxe compat (namespaced) para consistência

// Seu web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjf1Rq3iHo_ULms9I4G8de_lmCuJOcYkw",
    authDomain: "impostor-game-83f3d.firebaseapp.com",
    databaseURL: "https://impostor-game-83f3d-default-rtdb.firebaseio.com",
    projectId: "impostor-game-83f3d",
    storageBucket: "impostor-game-83f3d.firebasestorage.app",
    messagingSenderId: "159487884097",
    appId: "1:159487884097:web:7ced4587cb1a6c58ce3fc0",
    measurementId: "G-PQT8DFV7TY"
};

// Inicializar Firebase (usando o SDK compat que já está carregado via script tags no HTML)
firebase.initializeApp(firebaseConfig);

// Serviços
const auth = firebase.auth();
const database = firebase.database();
const firestore = firebase.firestore();

// Referências do banco
const db = database;

// Configurar autenticação
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

// Configurar provedor Google
const googleProvider = new firebase.auth.GoogleAuthProvider();

// ============ LISTA DE EMAILS AUTORIZADOS ============
const emailsAutorizados = [
    "paulooliviof@hotmail.com",
    "pfilho@professores.utfpr.edu.br"
];

// Função para verificar se email é autorizado (Firestore + Lista local)
async function isEmailAutorizado(email) {
    try {
        // Verificar no Firestore primeiro
        const docRef = firestore.collection("professoresAutorizados").doc(email.replace(/\./g, '_'));
        const docSnap = await docRef.get();
        if (docSnap.exists && docSnap.data().autorizado === true) {
            return true;
        }
    } catch(e) {
        console.log("Erro ao verificar Firestore:", e);
    }
    // Verificar na lista local
    return emailsAutorizados.includes(email);
}

// Funções auxiliares
function getCurrentUser() {
    return auth.currentUser;
}

function signInAnonymously() {
    return auth.signInAnonymously();
}

function signOut() {
    return auth.signOut();
}

// Exportar para uso global (usando window)
window.firebase = firebase;
window.auth = auth;
window.db = database;
window.firestore = firestore;
window.googleProvider = googleProvider;
window.getCurrentUser = getCurrentUser;
window.signInAnonymously = signInAnonymously;
window.signOut = signOut;
window.emailsAutorizados = emailsAutorizados;
window.isEmailAutorizado = isEmailAutorizado;

console.log("Firebase inicializado com sucesso!");