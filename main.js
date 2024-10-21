let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, I am Robo fromm Shree santkrupa institute of engineeirng and technlogy", "Hi, I am a Robo", "Hello, My name is Robo"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love, what about you", "i am fine, what about you", "i am good, what about you"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let HOD = ["professor santosh patange sir","Professor santosh patange sir"];
let dip = ["we have three branches in diploma artificial intellegence, civil and mechatronics"]
let princi = ["Professor Swanand kulkarni sir","Professor Swanand kulkarni sir"]
let add = ["you can visit our official website to get exact location"]
let sec = ["Honorable Prasun Johari sir"]
let staff = ["we have 56 teachers, and 10 office staff members"]
let fee = ["43802","fourty three thousand eigth hundred and three rupees"]
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']
let cour = ["We have computer science and engineering, electronics and telecommunication and civil engineering for bachlors degree we also have diploma courses"]
let gro = ["college has huge 5 acers of ground"]
let labb = ["our college have over 500 computers and 7-8 laboratories for students"]
let addm = ["contact our admission department head professor Ajit Patil sir"]
let hostel = ["Till now we dont have hostel for boy but we have girls hostel"]
let know = ["Shree santkrupa institute of engineering and technology ghogaon is Located near karad at ghogaon, every year about 400 to 500 students get passed out as graduated btech from our college and, about 400 to 500 students passouts with diploma"]
let plac = ["our college is connected with 150 plus MNC's and shotscale companys, last year about 50 students got placed from computer science and engineering department and about 150 students got placed from other three branches, a student sanket patil from CSE department got 15lpa in vertias private limited "]



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
    if(message.includes('who are you' || 'hey my name is')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('my name is')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('placements')){
        let finalresult = plac[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('what are fees')){
        let finalresult = fee[Math.floor(Math.random() * fee.length)];
        speech.text = finalresult;
    }
    if(message.includes('courses')){
        let finalresult = cour[Math.floor(Math.random() * cour.length)];
        speech.text = finalresult;
    }
    if(message.includes('address')){
        let finalresult = add[Math.floor(Math.random() * add.length)];
        speech.text = finalresult;
    }
    if(message.includes('hostel')){
        let finalresult = hostel[Math.floor(Math.random() * add.length)];
        speech.text = finalresult;
    }
    if(message.includes('something')){
        let finalresult = know[Math.floor(Math.random() * add.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('how r u')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('Principal')){
        let finalresult = princi[Math.floor(Math.random() * princi.length)];
        speech.text = finalresult;
    }
    if(message.includes('principal')){
        let finalresult = princi[Math.floor(Math.random() * princi.length)];
        speech.text = finalresult;
    }
    if(message.includes('head of department')){
        let finalresult = HOD[Math.floor(Math.random() * HOD.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    if(message.includes('diploma')){
        let finalresult = dip[Math.floor(Math.random() * dip.length)];
        speech.text = finalresult;
    }
    if(message.includes('ground')){
        let finalresult = gro[Math.floor(Math.random() * gro.length)];
        speech.text = finalresult;
    }
    if(message.includes('Laboratories')){
        let finalresult = labb[Math.floor(Math.random() * labb.length)];
        speech.text = finalresult;
    }
    if(message.includes('admission')){
        let finalresult = addm[Math.floor(Math.random() * addm.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
