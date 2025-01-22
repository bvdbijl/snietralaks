document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quiz-form');
    const questions = form.querySelectorAll('.question');
    let currentQuestionIndex = 0;

    // Insert after line 6
    const intro = document.getElementById('intro');
    const beginButton = document.getElementById('begin-button');

    // Show the form and hide the intro when the "Begin" button is clicked
    beginButton.addEventListener('click', () => {
        intro.style.display = 'none';
        form.style.display = 'block';
    });

    // Show the next question
    const showNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            questions[currentQuestionIndex].classList.remove('active');
            currentQuestionIndex++;
            questions[currentQuestionIndex].classList.add('active');
        } else {
            // All questions answered, submit the form
            submitForm();
        }
    };

    // Add event listeners to radio buttons
    questions.forEach((question, index) => {
        const radios = question.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.addEventListener('change', showNextQuestion);
        });
    });

    // Submit the form and get the response
    const submitForm = async () => {
        const formData = new FormData(form);
        const answers = {
            q1: formData.get('q1'),
            q2: formData.get('q2'),
            q3: formData.get('q3'),
            q4: formData.get('q4'),
        };
        const userContent = `
        Maak een Sinterklaas gedicht (wij noemen Sinterklaas Snietralaks) van 8 blokken van vier regels.
        Het gedicht is voor Rutger Lemm, je kan hem googlen om wat relevante informatie over hem te weten te komen.
        Focus onder andere op informatie van het afgelopen jaar 2024. Verwerk een aantal van de volgende elementen in het gedicht:
        - De geboorte van zijn derde kind
        - De serie 'Beter wordt het niet' die hij heeft gemaakt met Rein Mulder
        - Het feit dat hij leuke verhaaltjes altijd schrijft over onder andere vaderschap en het leven
        - Dat hij zo'n druk leven heeft en wel wat ontspanning verdient

        Verwerk in ieder geval de antwoorden op de volgende vragen in het gedicht:

        Vraag: Wie is je favoriete kind?
        Antwoord: ${answers.q1}

        Vraag: Als je van beren leren kan, van slimme beren leren kan, is dat iets wat je echt proberen moet?
        Antwoord: ${answers.q2}

        Vraag: Wat heb je liever: Elke keer dat je een slok van iets drinkt mors je een klein beetje over jezelf of zulke gladde handen dat alles vaak uit je handen glijdt?
        Antwoord: ${answers.q3}

        Vraag: Hoe verbolgen ben je over het feit dat jij niet gecast was voor je eigen serie en Rein wel?
        Antwoord: ${answers.q4}

        Zorg ervoor dat de stijl van het gedicht zoveel mogelijk lijkt op de voorbeelden die ik hierna geef.
        Gebruik dezelfde rijm stijl en woordkeuze, houdt de zinnen kort en simpel waar dat kan en zorg dat het makkelijk rijmt.
        hier zijn de voorbeeld gedichten:

        ---

        Vooruit het is nu nog geen tijd om te tukken
        Vind de drie missende puzzelstukken

        Het eerste stuk ligt in een instrument
        Zo'n zware je bent er vast wel mee bekend

        De tweede zit achter de heilige man
        In de ruimte waar jij je behoefte doen kan

        Tot slot zit het laatste stuk in iemands zak
        Denk jij dat ben ik zeg dan nu zachtjes kak

        ---

        Gutteguttegut het is weer zo ver
        Gezellig met z'n allen zittend bij La Mère
        Met al die drukke levens vol kids en carrière
        Wordt het wel een steeds grotere barrière

        Maar wat ben ik blij dat het toch nog is gelukt
        Om Sniet dit jaar te vieren, ik ben uiterst verrukt
        Al voelt het wel een klein beetje vreemd
        Dat wij naar het volgende jaar zijn ontheemd

        Enfin, nu weer de focus op Rein
        En geen minuut stilte voor de heer Kapteijn
        Want wat ben jij toch lekker bezig
        Met David, Buur en Koe aanwezig

        Begin je eindelijk wat poen te maken
        Na al die jaren van corona uitbraken
        En heb je nu je droom kunnen vervullen
        Met je dikke PC vol enen en nullen

        Wat mist er dan nog in jouw leven
        Een das, een boek, een vrouw of zeven
        Jij gaf ook verder niet iets door
        Dus ja wat dan een stuk decor

        Als je thuis ligt op de bank
        Voor de drank of als boekenplank
        Je zult er vast wel iets op vinden
         Of er iets aan vast te binden

        Goed het is nu alweer tijd
        Voor verplichte absurditeit
        Daarom zeg ik nu het woord melkboer
        Zodat jij voor mij kan zingen verlepte straat…

        Groetjes Sniet en chatGPieT

        P.S. Het grote pakje zonder naam is voor jou
        Adios, adieu, tot ziens en tot gauw

        ---

        Alarm! Alarm! Wat horen we nu
        De Sint is verdwenen potjandu
        Het is zeer belangrijk dat we hem vinden
        Voordat de rest z'n cadeau kan verslinden

        Anders is dit misschien het laatste jaar
        Dat we cadeautjes geven aan elkaar
        Correctie, natuurlijk cadeaus van de Sint
        Maar je snapt wat ik bedoel of niet mijn kind

        Dus wat is het plan, waar kan hij zijn
        Is ie in Oss of misschien wel Berlijn
        Maar lopen we niet iets te hard van stapel
        En deelt ie gewoon pakjes uit ginds in Ter Apel

        Dat lijkt me wel sterk, want daar heeft hij toch Pieten voor
        Al dat fysieke is hij zelf te oud voor hoor
        Is het aannemelijk dat hij is ontvoerd
        Gekneveld, de zak in en weggebonjourt

        Is er dan iemand die hem heeft gezien
        Of is ie geveld door COVID-19
        Er is ongetwijfeld een Piet die iets weet
        Of zelfs een van hen die de wet overtreedt

        Een Piet die dacht: dit is echt de laatste druppel
        En hem toen fier op z'n hoofd sloeg met een knuppel
        Want Sint werd alsmaar echt steeds meer een schlemiel
        Net als die gast van die mondkapjesdeal

        Hij ging meer en meer op de pakjes besparen
        En kocht van de winst peperdure sigaren
        Hij leek wel bezeten toen hij keihard reed in zijn
        Nieuwe Bugatti net als Andrew Tate

        Dus zeiden wij stop, tot hier en niet verder
        En sloten hem op in een kist van een herder
        Enfin, je weet nu dus wat er is gebeurd
        Het nalatenschap van de Sint thans besmeurd

        Ik hoor je al denken: heel leuk Piet, chapeau
        Maar waar is in hemelsnaam dan mijn cadeau
        Dan vrees ik toch dat je de Sint moet bevrijden
        Voor hij in allerijl komt te overlijden

        Want ook al is Sint geen klimaatactivist
        Jouw pakje zit toch echt ook daar in die kist
        Dus zoek nu maar snel naar de plek waar hij is
        Ik geef je een hint: Het stinkt er naar pis

        ---

        O jee wat is dat nu het lijkt wel een slot
        Hoe krijg je die open mijn lieve Charlotte
        Een code van wat lijkt een cijfer of drie
        Die vormen tezamen de combinatie

        Je moet echter wel nu beslissen helaas
        Want kiezen voor jou bevrijdt ook Sinterklaas
        Dan zul je er wel mee moeten leren leven
        Dat jij je moreel besef hebt opgegeven

        Maar als er iemand zou zijn die dat zou mogen
        Dan is dat toch echt wel Charlot in mijn ogen
        Want wat je ook doet je blijft toch onze hoeder
        Charlotte de Superultramegamoeder

        Tot slot heb ik voor jou nog een hint opgesteld:
        De wifi in bungalowpark Mooyeveld
        Maar dan wel alles bij elkaar opgeteld

        ---

        Toen Sint laatst jouw computer hackte
        Was er iets wat hij ontdekte
        Namelijk dat jij kaarten koopt
        Waarmee jij anderen keihard sloopt

        De Sint was even in de war
        Want Xander hoort toch in de bar
        Of ben je stiekem toch een nerd
        Maar dan één met een strak t-shirt

        Afijn voor jou dan deze gift
        En nee geen foil Cyclonic Rift
        Of welke andere kaart dan ook
        Koop die maar met je eigen loonstrook

        Maar goed nu mag je eindelijk spelen
        Zodat jij je niet zal vervelen
        Alleen ‘tis wel je laatste beurt
        Voordat Sint over je hoofd heen scheurt

        ---

        Jeetje mineetje het is alweer tijd
        Knus bij elkaar voor het jaarlijks respijt
        Is iedereen dit jaar wel braaf geweest?
        Of is er dit jaar te uitbundig gefeest?

        Dat zal dan wel niet gedaan zijn door jou
        Want jij was bezet met je wederopbouw
        Een tijdje toch wel even flink uit de running
        Bijkomend na die enorme hersenschudding

        Gelukkig gaat alles nu best wel weer goed
        En kan je eindelijk werken voor je poet
        Want zo lang niet iets gedienstig kunnen doen
        Is natuurlijk ook heel slecht voor de poen

        Maar wat kan je nou echt gebruiken
        Pillen? Peuken? Waterkruiken?
        Of gewoon een dikke vette zak drop
        Maar dat is dan wel gewoon heel snel weer op

        Dus daarom heeft de Sint besloten
        Niet te geven: pepernoten
        Wat dan wél vraag jij je af
        Misschien een grote dikke staf

        Die ene van de goede Sint
        Bemind door ieder ander kind
        Omhuld met prachtig zacht geel goud
        De kleur waar iedereen van houdt

        Nee het is veel handiger
        Iets praktisch doch onveiliger
        Dus leef je uit maar doe voorzichtig
        Anders ben ik straks medeplichtig

        Tot slot het ga je goed mijn kind
        Ik hoop dat jij je weg weer vindt
        De groeten van de dikke Sint
        En wie het eerst zegt hond die wint

        ---

        Sint heeft onlangs vernomen
        Dat er een nieuw wezentje in jouw midden is gekomen
        Hij luistert naar de naam Tinus
        Waar gelukkig ook veel op rijmt, niet dus…

        Je bent de eerste van de groep
        Die pas écht veel te maken krijgt met poep
        Dus zet je nu maar goed flink schrap
        Voor het eeuwigdurende vaderschap

        Want je zit er toch wel echt aan vast
        Een kindje dat overal in de rondte plast
        Maar natuurlijk brengt het ook veel blijdschap met zich mee
        Zo'n mormeltje met liters diarree

        En zoals je heel misschien al ziet
        Is dit cadeau ingepakt door babypiet
        Ik hoop dat je ervan geniet
        Zo niet, dan ben jij niet meer mijn favoriet

        Gebruik het maar voor bij het huilen
        Of als je rustig in een hoekje wilt schuilen
        Ook helpt het je aan een goede nachtrust
        Voor als je volledig bent uitgeblust

        Voordat ik je nu ga belonen
        Moet je eerst maar eens de baby verschonen…

        Sint en babypiet
        `;

        const systemContent = `
        Zorg dat het uiteindelijke antwoord bestaat uit 8 blokken van vier regels zodat het makkelijk te ontleden is.
        `

        // Hide the last question
        questions[currentQuestionIndex].classList.remove('active');

        // Show the spinner
        document.getElementById('loading').style.display = 'block';

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${notImportant}`
                },
                body: JSON.stringify({
                    model: "gpt-4",
                    messages: [
                        { role: "system", content: systemContent },
                        { role: "user", content: userContent }
                    ],
                    max_tokens: 1000,
                    temperature: 0.2
                })
            });

            const data = await response.json();
            const responseElement = document.getElementById('response');
            responseElement.innerHTML = ''; // Clear previous responses

            // Split the response into lines and append each line as a new paragraph
            const lines = data.choices[0].message.content.split('\n');
            let paragraph = document.createElement('p');

            lines.forEach((line) => {
                if (line.trim() === '') {
                    // If the line is blank, append the current paragraph and create a new one
                    if (paragraph.innerHTML.trim() !== '') {
                        responseElement.appendChild(paragraph);
                        paragraph = document.createElement('p');
                    }
                } else {
                    // Add the line to the current paragraph
                    paragraph.innerHTML += line + '<br>';
                }
            });

            // Append the last paragraph if it has content
            if (paragraph.innerHTML.trim() !== '') {
                responseElement.appendChild(paragraph);
            }

            // Hide the form
            form.style.display = 'none';
        } catch (error) {
            console.error(error);
            document.getElementById('response').textContent = "An error occurred while generating the poem.";
        } finally {
            // Hide the spinner
            document.getElementById('loading').style.display = 'none';

            // Remove the background image
            document.body.style.backgroundImage = 'none';
        }
    };
});

const notImportant="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"
