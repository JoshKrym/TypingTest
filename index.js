Text = document.getElementById("Text")
LetterNum=0;
start=true;
//Text.innerHTML = "Hello World";
Nouns=[ "time","year","people","way","day","man","thing","woman","life","child","world","school","state","family","student","group","country","problem","hand","part","place","case","week","company","system","program","question","work","government","number","night","point","home","water","room","mother","area","money","story","fact","month","lot","right","study","book","eye","job","word","business","issue","side","kind","head","house","service","friend","father","power","hour","game","line","end","member","law","car","city","community","name","president","team","minute","idea","kid","body","information","back","parent","face","others","level","office","door","health","person","art","war","history","party","result","change","morning","reason","research","girl","guy","moment","air","teacher","force", "education"]

Words=["the", "be", "and", "a", "of", "to", "in", "i", "you", "it", "have", "to", "that", "for", "do", "he", "with", "on", "this", "fuck", "we", "that", "not", "but", "they", "say", "at", "what", "his", "from", "go", "or", "by", "get", "she", "my", "can", "as", "know", "if", "me", "your", "all", "who", "about", "their", "will", "so", "would", "make", "just", "up", "think", "time", "there", "see", "her", "as", "out", "one", "come", "people", "take", "year", "him", "them", "some", "want", "how", "when", "which", "now", "like", "other", "could", "our", "into", "here", "then", "than", "look", "way", "more", "these", "no", "thing", "well", "because", "also", "two", "use", "tell", "good", "first", "man", "day", "find", "give", "more", "new", "one", "us", "any", "those", "very", "her", "need", "back", "there", "should", "even", "only", "many", "really", "work", "life", "why", "right", "down", "on", "try", "let", "something", "too", "call", "woman", "may", "still", "through", "mean", "after", "never", "no", "world", "in", "feel", "yeah", "great", "last", "child", "oh", "over", "ask", "when", "as", "school", "state", "much", "talk", "out", "keep", "leave", "put", "like", "help", "big", "where", "same", "all", "own", "while", "start", "three", "high", "every", "another", "become", "most", "between", "happen", "family", "over", "president", "old", "yes", "house", "show", "again", "student", "so", "seem", "might", "part", "hear", "its", "place", "problem", "where", "believe", "country", "always", "week", "point", "hand", "off", "play", "turn", "few", "group", "such", "against", "run", "guy", "about", "case", "question", "work", "night", "live", "game", "number", "write", "bring", "without", "money", "lot", "most", "book", "system", "government", "next", "city", "company", "story", "today", "job", "move", "must", "bad", "friend", "during", "begin", "love", "each", "hold", "different", "american", "little", "before", "ever", "word", "fact", "right", "read", "anything", "nothing", "sure", "small", "month", "program", "maybe", "right", "under", "business", "home", "kind", "stop", "pay", "study", "since", "issue", "name", "idea", "room", "percent", "far", "away", "law", "actually", "large", "though", "provide", "lose", "power", "kid", "war", "understand", "head", "mother", "real", "best", "team", "eye", "long", "long", "side", "water", "young", "wait", "okay", "both", "yet", "after", "meet", "service", "area", "important", "person", "hey", "thank", "much", "someone", "end", "change", "however", "only", "around", "hour", "everything", "national", "four", "line", "girl", "around", "watch", "until", "father", "sit", "create", "information", "car", "learn", "least", "already", "kill", "minute", "party", "include", "stand", "together", "back", "follow", "health", "remember", "often", "reason", "speak", "ago", "set", "black", "member", "community", "once", "social", "news", "allow", "win", "body", "lead", "continue", "whether", "enough", "spend", "level", "able", "political", "almost", "boy", "university", "before", "stay", "add", "later", "change", "five", "probably", "center", "among", "face", "public", "die", "food", "else", "history", "buy", "result", "morning", "off", "parent", "office", "course", "send", "research", "walk", "door", "white", "several", "court", "home", "grow", "better", "open", "moment", "including", "consider", "both", "such", "little", "within", "second", "late", "street", "free", "better", "everyone", "policy", "table", "sorry", "care", "low", "human", "please", "hope", "TRUE", "process", "teacher", "data", "offer", "death", "whole", "experience", "plan", "easy", "education", "build", "expect", "fall", "himself", "age", "hard", "sense", "across", "show", "early", "college", "music", "appear", "mind", "class", "police", "use", "effect", "season", "tax", "heart", "son", "art", "possible", "serve", "break", "although", "end", "market", "even", "air", "force", "require", "foot", "up", "listen", "agree", "according", "anyone", "baby", "wrong", "love", "cut", "decide", "republican", "full", "behind", "pass", "interest", "sometimes", "security", "eat", "report", "control", "rate", "local", "suggest", "report", "nation", "sell", "action", "support", "wife", "decision", "receive", "value", "base", "pick", "phone", "thanks", "event", "drive", "strong", "reach", "remain", "explain", "site", "hit", "pull", "church", "model", "perhaps", "relationship", "six", "fine", "movie", "field", "raise", "less", "player", "couple", "million", "themselves", "record", "especially", "difference", "light", "development", "federal", "former", "role", "pretty", "myself", "view", "price", "effort", "nice", "quite", "along", "voice", "finally", "department", "either", "toward", "leader", "because", "photo", "wear", "space", "project", "return", "position", "special", "million", "film", "need", "major", "type", "town", "article", "road", "form", "chance", "drug", "economic", "situation", "choose", "practice", "cause", "happy", "science", "join", "teach", "early", "develop", "share", "yourself", "carry", "clear", "brother", "matter", "dead", "image", "star", "cost", "simply", "post", "society", "picture", "piece", "paper", "energy", "personal", "building", "military", "open", "doctor", "activity", "exactly", "american", "media", "miss", "evidence", "product", "realize", "save", "arm", "technology", "catch", "comment", "look", "term", "color", "cover", "describe", "guess", "choice", "source", "mom", "soon", "director", "international", "rule", "campaign", "ground", "election", "face", "uh", "check", "page", "fight", "itself", "test", "patient", "produce", "certain", "whatever", "half", "video", "support", "throw", "third", "care", "rest", "recent", "available", "step", "ready", "opportunity", "official", "oil", "call", "organization", "character", "single", "current", "likely", "county", "future", "dad", "whose", "less", "shoot", "industry", "second", "list", "general", "stuff", "figure", "attention", "forget", "risk", "no", "focus", "short", "fire", "dog", "red", "hair", "point", "condition", "wall", "daughter", "before", "deal", "author", "truth", "upon", "husband", "period", "series", "order", "officer", "close", "land", "note", "computer", "thought", "economy", "goal", "bank", "behavior", "sound", "deal", "certainly", "nearly", "increase", "act", "north", "well", "blood", "culture", "medical", "ok", "everybody", "top", "difficult", "close", "language", "window", "response", "population", "lie", "tree", "park", "worker", "draw", "plan", "drop", "push", "earth", "cause", "per", "private", "tonight", "race", "than", "letter", "other", "gun", "simple", "course", "wonder", "involve", "hell", "poor", "each", "answer", "nature", "administration", "common", "no", "hard", "message", "song", "enjoy", "similar", "congress", "attack", "past", "hot", "seek", "amount", "analysis", "store", "defense", "bill", "like", "cell", "away", "performance", "hospital", "bed", "board", "protect", "century", "summer", "material", "individual", "recently", "example", "represent", "fill", "state", "place", "animal", "fail", "factor", "natural", "sir", "agency", "usually", "significant", "help", "ability", "mile", "statement", "entire", "democrat", "floor", "serious", "career", "dollar", "vote", "sex", "compare", "south", "forward", "subject", "financial", "identify", "beautiful", "decade", "bit", "reduce", "sister", "quality", "quickly", "act", "press", "worry", "accept", "enter", "mention", "sound", "thus", "plant", "movement", "scene", "section", "treatment", "wish", "benefit", "interesting", "west", "candidate", "approach", "determine", "resource", "claim", "answer", "prove", "sort", "enough", "size", "somebody", "knowledge", "rather", "hang", "sport", "tv", "loss", "argue", "left", "note", "meeting", "skill", "card", "feeling", "despite", "degree", "crime", "that", "sign", "occur", "imagine", "vote", "near", "king", "box", "present", "figure", "seven", "foreign", "laugh", "disease", "lady", "beyond", "discuss", "finish", "design", "concern", "ball", "east", "recognize", "apply", "prepare", "network", "huge", "success", "district", "cup", "name", "physical", "growth", "rise", "hi", "standard", "force", "sign", "fan", "theory", "staff", "hurt", "legal", "september", "set", "outside", "et", "strategy", "clearly", "property", "lay", "final", "authority", "perfect", "method", "region", "since", "impact", "indicate", "safe", "committee", "supposed", "dream", "training", "shit", "central", "option", "eight", "particularly", "completely", "opinion", "main", "ten", "interview", "exist", "remove", "dark", "play", "union", "professor", "pressure", "purpose", "stage", "blue", "herself", "sun", "pain", "artist", "employee", "avoid", "account", "release", "fund", "environment", "treat", "specific", "version", "shot", "hate", "reality", "visit", "club", "justice", "river", "brain", "memory", "rock", "talk", "camera", "global", "various", "arrive", "notice", "bit", "detail", "challenge", "argument", "lot", "nobody", "weapon", "best", "station", "island", "absolutely", "instead", "discussion", "instead", "affect", "design", "little", "anyway", "respond", "control", "trouble", "conversation", "manage", "close", "date", "public", "army", "top", "post", "charge", "seat"]
function getSentence(){
    Sentence = "";
        for(let i=0; i<20+Math.floor(Math.random()*10); i++){
            Sentence+=Words[Math.floor(Math.random()*Words.length)]+" "
        }
    Sentence=Sentence//.toUpperCase();
    return Sentence;
}
Sentence=getSentence();
Sentence=Sentence//.toUpperCase();
//Words[Math.floor(Math.random()*Words.length)]//for(i//"Also known as Asian Booty Disorder, it is an overused joke used by people who can't think of their own jokes. Also a reference from Poreotics".toUpperCase();
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ?.,'"
function setText(){
    Text.innerHTML='';
    for(i of Sentence){
        letter = document.createElement("span")
        letter.innerHTML = i;
        Text.appendChild(letter);
    }
}
setText();

distance=7500;




cursor = 0;
letters = Text.getElementsByTagName("span");
CursorDiv=document.createElement('div');
CursorDiv.style.width=letters[0].getBoundingClientRect().width+'px';
CursorDiv.style.height='4px';
CursorDiv.style.position='absolute';
CursorDiv.style.top=letters[0].getBoundingClientRect().bottom-8+'px';
CursorDiv.style.left=letters[0].getBoundingClientRect().left+'px';
CursorDiv.style.backgroundColor='plum';
document.getElementsByTagName('body')[0].appendChild(CursorDiv);
document.addEventListener("keydown", function inp(event) {    
    if(start){
        start=false;
        var x = setInterval(function() {

            // Get today's date and time
        
          
            // Find the distance between now and the count down date
          
            // Time calculations for days, hours, minutes and seconds
            var seconds = distance / 250;
          
            // Display the result in the element with id="demo"
            document.getElementById("Timer").innerHTML = seconds;
          
            // If the count down is finished, write some text
            if (distance < 0) {
              document.getElementById("Timer").innerHTML = 0.000;
              clearInterval(x);
              WPM = Math.floor(LetterNum*2/5);
              best = (localStorage.getItem('Best')!=null?localStorage.getItem('Best'):0);
              console.log(best);
              if(WPM>best){
                console.log('here')
                best=WPM;
                localStorage.setItem('Best', best)
              }
              document.getElementById('WPM').innerHTML+=(WPM)
              document.getElementById('Best').innerHTML+=best;
              document.getElementById('modal').style.display='block';
              document.removeEventListener("keydown", inp);
              //Create Modal that displays letters per minute.
            }
            distance--;
          }, 1);
    }
    if(alphabet.includes(event.key)){
        if(event.key.toLowerCase()==letters[cursor].innerHTML.toLowerCase()){
            letters[cursor].style.color="green"
            LetterNum++;
        }
        else{
            letters[cursor].style.color="red"
        }
        cursor++;
        if(cursor==letters.length-1){
            Sentence=getSentence();
            setText();
            cursor=0;
        }
    }
    if(event.key=='Backspace'){
        if(cursor!=0) cursor--;
        letters[cursor].style.color=""
    }
    cursorPos = letters[cursor].getBoundingClientRect();
    CursorDiv.style.left=cursorPos.left+'px';
    CursorDiv.style.top=cursorPos.bottom-8+'px';
    console.log(cursorPos.width);    
})

//var now = new Date().getTime();

/*async function funcName(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}*/
/*$.get("https://randomword.com/sentence", {}, function(results){
    console.log(results);
})*/
//funcName("https://randomwordgenerator.com/sentence.php")