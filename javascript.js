function changeMessage() {
  const messages = [
    "A fé move montanhas 🌄",
    "Em toda cultura, a paz começa com escuta 🤲",
    "O amor fala todas as línguas ❤️",
    "A ciência é ponte entre mentes 🧠",
    "Alegria no caos — Ele não falha 🙏"
  ];
  const random = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerText = messages[random];
}
// Firebase auth - exemplo básico
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Bem-vindo, " + userCredential.user.email);
      // Aqui podemos carregar o perfil do usuário
    })
    .catch((error) => {
      alert("Erro: " + error.message);
    });
}
// Conecta ao Firebase (precisas colar teu config aqui!)
const firebaseConfig = {
  apiKey: "AIzaSyD3NTQjCaCRScBSSY8nZPHrc-jmXStqRD0",
  authDomain: "talkofworld.firebaseapp.com",
  projectId: "talk-of-world",
  storageBucket: "talk-of-world.firebasestorage.app",
  messagingSenderId: "69870134662",
  appId: "1:69870134662:web:c39651bbb68cae7d0e3807",
  measurementId: "G-2L4KY4DZKK"
  // Outros dados aqui
};
firebase.initializeApp(firebaseConfig);

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => alert("Bem-vindo " + user.user.email))
    .catch(error => alert("Erro ao entrar: " + error.message));
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => alert("Conta criada: " + user.user.email))
    .catch(error => alert("Erro ao cadastrar: " + error.message));
}
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
const messages = [
  "A fé conecta culturas.",
  "Ouvir é a chave para paz.",
  "Cada alma tem uma história."
];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("carouselImg").src = images[index];
  document.getElementById("carouselText").innerText = messages[index];
}, 4000); // troca a cada 4 segundos
