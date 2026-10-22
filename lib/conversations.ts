// Selected, redacted production excerpts. Editorial provenance: docs/conversation-showcase.md.
export type Story = {
  id: string;
  option: number;
  category: string;
  title: string;
  context: string;
  value: string;
  outcome: string;
  limit: string;
  translation: string[];
  messages: {
    position: number;
    role: "customer" | "assistant" | "staff";
    text: string;
  }[];
};

export const stories: Story[] = [
  {
    id: "c0170",
    option: 1,
    category: "Price & doubts",
    title: "“Ham Ola hi lenge.”",
    context:
      "The customer wanted to buy Ola. The worry was the battery warranty.",
    value:
      "Like a good salesperson, the assistant found the real doubt. It explained the longer warranty and its extra cost. The customer kept talking.",
    outcome:
      "The customer agreed to visit the next day at 5 PM. A test ride and old-bike check were booked.",
    limit:
      "This shows a booking, not a sale. The longer warranty needed the Pro pack and a paid add-on.",
    translation: [],
    messages: [
      {
        position: 38,
        role: "customer",
        text: "Isase acchi to ola Hai FIR vah 8 sal ki guarantee aur 80000 kilometer de rahe Ham ola hi lenge",
      },
      {
        position: 39,
        role: "assistant",
        text: "Ather mein bhi Pro pack ke sath Eight70 add-on lekar 8 saal ya 80,000 km tak ki battery warranty mil jaati hai. Aap touchscreen aur backrest wali Rizta Z pasand karenge ya simple Rizta S?",
      },
      {
        position: 42,
        role: "customer",
        text: "Is guarantee 8 sal ki denge to hi aaunga",
      },
      {
        position: 43,
        role: "assistant",
        text: "Haan, AtherStack Pro ke sath Eight70 pack mein 8 saal ya 80,000 km ki battery warranty bilkul milti hai. Aap test ride aur bike evaluation ke liye kal aana chahenge ya parson?",
      },
      {
        position: 44,
        role: "customer",
        text: "8 sal warranty ke sath kitne mein padegi yah bata do",
      },
      {
        position: 45,
        role: "assistant",
        text: "Rizta S 123 km ka on-road price lagbhag Rs 1,28,175 hai, AtherStack Pro Rs 16,000 ka aur Eight70 (8 saal/80,000 km) add-on Rs 4,999 ka aata hai. Aap test ride aur final quote ke liye kal aana chahenge ya parson?",
      },
      {
        position: 46,
        role: "customer",
        text: "Main kal aa sakta hoon.",
      },
      {
        position: 48,
        role: "customer",
        text: "Main kal shaam 5 baje aaunga.",
      },
    ],
  },
  {
    id: "c0385",
    option: 2,
    category: "Language & spelling",
    title: "One long message. Several real concerns.",
    context:
      "The customer had a Jupiter to exchange. They could not bring it 80 km to the showroom. The message was long and mixed several points.",
    value:
      "No need to fill a form or write neat English. The assistant understood the travel problem and found the nearby branch. It remembered the Jupiter exchange too.",
    outcome:
      "The customer booked Thursday at 3 PM at Vaijapur for a test ride and exchange check.",
    limit:
      "The team still had to inspect the Jupiter and set its value. No exchange price or sale was confirmed.",
    translation: [],
    messages: [
      {
        position: 12,
        role: "customer",
        text: "Exchange offer hai kya Jupiter hai exchange mein",
      },
      {
        position: 13,
        role: "assistant",
        text: "Haan bilkul, Jupiter exchange ho jayega aur uski value new Ather mein adjust ho jayegi. Exact valuation hamari team showroom par physically check karke batayegi. Which showroom is closer for you, Adalat Road or Beed Bypass?",
      },
      {
        position: 14,
        role: "customer",
        text: "Itne Dur abhi gadi Main Yahan Se Aurangabad se 80 kilometer dur hai Vaijapur Mein Yahan Vaijapur Mein aapka exchange showroom hai kya yahan se bata sakte hain ki mujhe aap main vahan per  Nahin La sakta hun itne Dur",
      },
      {
        position: 15,
        role: "assistant",
        text: "Tension nako, hamara Ather showroom Vaijapur mein bhi hai! Station Road par Opp. Nayara Petrol Pump hamara showroom hai, aap wahi Jupiter lekar test ride aur valuation ke liye aa sakte hain. Kya aap hamare Vaijapur showroom par test ride aur exchange ke liye aa sakte hain?",
      },
      {
        position: 16,
        role: "customer",
        text: "Han a sakta hun per main Chetak ke Showroom per bhi gaya tha inke liye vahan per Jo dealer aaya tha vah Yahan per Kuchh Trimurti wala hai vah aaya tha usne Iske rate kam bataya isliye main aapke showroom ki baat kar raha hun Achcha Mila To Main aapko de dunga Nahin to Andar sul mein bhi yah exchange offer chalu hai",
      },
      {
        position: 17,
        role: "assistant",
        text: "Aap bilkul fikar mat kijiye, hamari team Jupiter dekh kar aapko best possible exchange value nikal kar degi. Aap kab tak Vaijapur showroom par aa sakte hain?",
      },
      {
        position: 18,
        role: "customer",
        text: "Main parso aata hoon.",
      },
      {
        position: 20,
        role: "customer",
        text: "Main Thursday dopahar 3 baje aaunga.",
      },
    ],
  },
  {
    id: "c0591",
    option: 3,
    category: "Price & doubts",
    title: "Sometimes, giving space is the right reply.",
    context:
      "The customer said the showroom was too far away. The assistant did not keep pushing.",
    value:
      "Sometimes ‘Theek hai, visit when you can’ is better than another sales pitch. The customer came back on their own and made a plan.",
    outcome:
      "The customer chose Saturday at 11 AM. A visit at Paithan was booked.",
    limit:
      "The chat shows the customer returned and booked. It does not show that they came or bought.",
    translation: [
      "Customer: “No, it is too far for me.”",
      "Assistant: “I understand the distance from Shirdi. Do remember us whenever you are in this area or decide to explore it.”",
      "Customer: “Yes, we will visit the showroom; we can also make a religious visit.”",
      "Assistant: “A test ride alongside your visit to Paithan would work well. Which day suits you?”",
    ],
    messages: [
      {
        position: 24,
        role: "customer",
        text: "नाही, माझ्यासाठी खूप लांब आहे.",
      },
      {
        position: 25,
        role: "assistant",
        text: "समजले, शिर्डीहून अंतर जास्त आहे हे नक्कीच समजू शकते. जेव्हा कधी या भागात तुमचे येणे होईल किंवा निर्णय घ्यायचा असेल, तेव्हा नक्की आठवण करा.",
      },
      {
        position: 26,
        role: "customer",
        text: "हो नक्की शोरूम ला भेट देऊ, व दर्शन पण होईल",
      },
      {
        position: 27,
        role: "assistant",
        text: "अगदी बरोबर, पैठणला दर्शनासोबत टेस्ट राइडही उत्तम होईल! कोणत्या दिवशी येणे सोयीचे होईल?",
      },
      {
        position: 28,
        role: "customer",
        text: "मी शनिवारी येतो.",
      },
      {
        position: 30,
        role: "customer",
        text: "मी सकाळी 11:00 वाजता येतो.",
      },
    ],
  },
  {
    id: "c0139",
    option: 4,
    category: "Change of plan",
    title: "“No Aurangabad.” Message received.",
    context:
      "The visit was already booked at Paithan. Then the customer sent two words and a PIN code to change the branch.",
    value:
      "People do not always explain a change in a full sentence. The assistant checked what they meant and kept the same time and model.",
    outcome:
      "The booking moved to Adalat Road, Aurangabad. Thursday at 10:30 AM stayed the same.",
    limit:
      "The branch change is recorded. The chat does not show whether the customer came.",
    translation: [],
    messages: [
      {
        position: 31,
        role: "assistant",
        text: "Your visit is booked for Thursday, 15 Oct at 10:30 AM under the name [Customer name] at our Paithan showroom to check out the Rizta Z 161 km. Please let me know if anything needs correcting?",
      },
      {
        position: 32,
        role: "customer",
        text: "No Aurangabad",
      },
      {
        position: 33,
        role: "assistant",
        text: "Aap Aurangabad me Adalat Road showroom aana chahte hain? Currently aapka visit Paithan showroom me booked hai Thursday, 15 Oct ko 10:30 AM pe. Would you like to shift your 10:30 AM visit tomorrow to our Adalat Road showroom in Aurangabad?",
      },
      {
        position: 34,
        role: "customer",
        text: "431001",
      },
      {
        position: 35,
        role: "assistant",
        text: "431001 hamare Adalat Road, Aurangabad showroom ka area hai. Would you like to shift your visit tomorrow at 10:30 AM to our Adalat Road showroom in Aurangabad?",
      },
      {
        position: 36,
        role: "customer",
        text: "Yes, please shift my visit to the Adalat Road showroom.",
      },
      {
        position: 37,
        role: "assistant",
        text: "Your visit is now shifted to our Adalat Road showroom in Chhatrapati Sambhaji Nagar for Thursday, 15 Oct at 10:30 AM under the name [Customer name] to check out the Rizta Z 161 km. Please let me know if anything needs correcting?",
      },
    ],
  },
  {
    id: "c0373",
    option: 6,
    category: "Language & spelling",
    title: "“Rainge orijnal.” No retyping needed.",
    context:
      "The customer used short, misspelled words to ask about range, address and the city.",
    value:
      "‘Rainge orijnal’ still means something. The assistant answered the real question and followed the chat without asking for perfect spelling.",
    outcome:
      "A Friday 11:30 AM test ride was booked at Adalat Road after the customer changed the city.",
    limit:
      "The booking is recorded. It does not show whether the customer came.",
    translation: [],
    messages: [
      {
        position: 18,
        role: "customer",
        text: "Rainge orijnal",
      },
      {
        position: 19,
        role: "assistant",
        text: "The official IDC range is 161 km, but the real-world TrueRange on the road is 130 km on a full charge. Aap ek baar aao to sahi, chai pe baat karte hain aur test ride leke dekho?",
      },
      {
        position: 24,
        role: "customer",
        text: "Adrss",
      },
      {
        position: 27,
        role: "assistant",
        text: "We are at Survey No. 35/1B, Nagar Palika Milkat, Kannad-Chalisgaon Road, in front of College Gate: https://maps.app.goo.gl/wghWQo2EshgkuA499\n\nWould 10:30 AM or 11:30 AM work better for you?",
      },
      {
        position: 30,
        role: "customer",
        text: "Ch sambhaji nager",
      },
      {
        position: 31,
        role: "assistant",
        text: "Would you prefer to visit our showroom in Chhatrapati Sambhaji Nagar on Adalat Road, or the Kannad branch?",
      },
      {
        position: 34,
        role: "customer",
        text: "I prefer the Adalat Road showroom in Chhatrapati Sambhaji Nagar.",
      },
      {
        position: 35,
        role: "assistant",
        text: "Your test ride for the Ather 450S 161 km is booked for Friday, 16 October at 11:30 AM at our Adalat Road showroom under the name [Customer name]. Please let me know if anything needs correcting!",
      },
    ],
  },
  {
    id: "c0372",
    option: 9,
    category: "Other questions",
    title: "Dinner. The alphabet. Then a Scorpio.",
    context:
      "A scooter chat turned into questions about dinner, the alphabet and a Scorpio car.",
    value:
      "Your showroom number should not become a free homework service. The assistant stayed polite and brought the chat back to what your business sells.",
    outcome:
      "It said no to the alphabet task and sent the car enquiry to Mahindra. No visit was booked.",
    limit:
      "This shows how it handles an off-topic chat. It is not a sale or a saved buyer.",
    translation: [
      "Customer: “Have you eaten?”",
      "Assistant: “I am an assistant, so I do not need to eat. Do ask if you want to know anything about the scooter.”",
      "Customer: “Write the alphabet from A to Z for me.”",
      "Assistant: “This number is for Ather electric scooter enquiries. Let us know if you need information about a scooter.”",
      "Customer: “I want to buy a Scorpio. What is the price?”",
      "Assistant: “We sell Ather electric scooters, not cars. A Mahindra dealership can help with a Scorpio.”",
    ],
    messages: [
      {
        position: 41,
        role: "customer",
        text: "जेवण झालं का",
      },
      {
        position: 42,
        role: "assistant",
        text: "मी एक असिस्टंट आहे, त्यामुळे मला जेवणाची गरज पडत नाही! गाडीबद्दल काही विचार करायचा असेल तर नक्की सांगा.",
      },
      {
        position: 43,
        role: "customer",
        text: "मला एबीसीडी झेड पर्यंत लिहून दे",
      },
      {
        position: 44,
        role: "assistant",
        text: "हा नंबर फक्त एथर इलेक्ट्रिक स्कूटरच्या चौकशीसाठी आहे. गाडीबद्दल काही माहिती हवी असल्यास सांगा.",
      },
      {
        position: 45,
        role: "customer",
        text: "मला स्कॉर्पिओ घ्यायचे आहे काय किंमत आहे",
      },
      {
        position: 46,
        role: "assistant",
        text: "हा नंबर फक्त एथर इलेक्ट्रिक स्कूटरच्या विक्री आणि सेवेसाठी आहे, आम्ही चारचाकी गाड्या विकत नाही. महिंद्राच्या डीलरशिपवर तुम्हाला स्कॉर्पिओबद्दल माहिती मिळू शकेल.",
      },
    ],
  },
  {
    id: "c0602",
    option: 10,
    category: "Change of plan",
    title: "“Can’t say.” That is an answer, too.",
    context:
      "The customer could come between 2 and 3:30 PM. They could not give an exact time.",
    value:
      "Not everyone can say ‘2:00 sharp’. The assistant offered a walk-in time range instead of getting stuck. It also kept helping with a charging question.",
    outcome:
      "The customer chose the time range. Later, the assistant shared the team’s answer about the charging point.",
    limit:
      "No fixed booking or staff preparation is recorded. This example shows a flexible chat.",
    translation: [],
    messages: [
      {
        position: 26,
        role: "customer",
        text: "In between 2 to 3.30",
      },
      {
        position: 27,
        role: "assistant",
        text: "Perfect. Shall we book 2:00 PM, 2:30 PM, or 3:00 PM?",
      },
      {
        position: 28,
        role: "customer",
        text: "Can't say",
      },
      {
        position: 29,
        role: "assistant",
        text: "Chinta mat karo. Would you like to lock in 2:00 PM, 2:30 PM, or just walk in between 2 and 3:30 PM?",
      },
      {
        position: 30,
        role: "customer",
        text: "I will just walk in between 2 and 3:30 PM.",
      },
      {
        position: 31,
        role: "assistant",
        text: "Kadak! The team at our Paithan showroom will be ready for you between 2:00 PM and 3:30 PM today. See you there!",
      },
      {
        position: 34,
        role: "assistant",
        text: "Just checked with the team—Paithan does have an Ather Grid charging point, though it is an AC charger rather than a DC fast charger.",
      },
    ],
  },
  {
    id: "c0652",
    option: 11,
    category: "Price & doubts",
    title: "“50 paryant कुठली ahe”",
    context:
      "The customer mixed English letters and Marathi to ask what was available within ₹50,000.",
    value:
      "The assistant understood the budget and said clearly that a new Ather did not fit. It offered to discuss EMI, instead of making up a cheaper scooter.",
    outcome:
      "The customer asked more about EMI and booked Saturday at 4:30 PM.",
    limit:
      "A down payment is not the full price. This chat does not show that a loan was approved or the EMI was affordable.",
    translation: [
      "“Prize sanga”: “Tell me the price.”",
      "“Model che photo patva”: “Send pictures of the models.”",
      "“50 paryant कुठली ahe”: “Which one is available up to 50 [thousand]?”",
      "The assistant says a new Ather is not available for ₹50,000 and offers a discussion about down payment and EMI.",
    ],
    messages: [
      {
        position: 3,
        role: "customer",
        text: "Prize sanga",
      },
      {
        position: 4,
        role: "assistant",
        text: "Rizta family scooter chi ex-showroom kimat javalpas Rs 1,20,659 pasun suru hote, aani sporty 450S chi Rs 1,26,998 pasun.\n\nKonta model baghaycha aahe aaplyala?",
      },
      {
        position: 5,
        role: "customer",
        text: "Model che photo patva",
      },
      {
        position: 6,
        role: "assistant",
        text: "He bagha apli family scooter Ather Rizta. 450 series che pan photo havet ka?",
      },
      {
        position: 7,
        role: "customer",
        text: "50 paryant कुठली ahe",
      },
      {
        position: 8,
        role: "assistant",
        text: "50 hajarat navin Ather nahi yet boss, aamchi suruvat 1.20 lakh pasun hote. Pan 50 hajar down payment bharun sope EMI options gheta yetil. Tyanantarchya mahitisathi kay sangu?",
      },
      {
        position: 11,
        role: "customer",
        text: "EMI baddal mahiti sanga.",
      },
      {
        position: 12,
        role: "assistant",
        text: "Aamche barech bank aani NBFC sobat tie-ups aahet, jithe 50 hajar down payment var mahinyacha soyeeskhar EMI basu shakto. Aapla rojcha pravas साधारण kiti km cha asto?",
      },
    ],
  },
  {
    id: "c0418",
    option: 13,
    category: "Other questions",
    title: "A simple “Stop” deserves a simple response.",
    context: "The customer sent just one word: Stop.",
    value:
      "No means no. A polite reply protects your business name. The assistant did not add one more sales pitch.",
    outcome:
      "It said it would stop messaging. There are no later messages in this saved chat.",
    limit:
      "This old chat shows the reply. It does not prove that a lasting stop-message setting was saved.",
    translation: [],
    messages: [
      {
        position: 0,
        role: "customer",
        text: "Stop",
      },
      {
        position: 1,
        role: "assistant",
        text: "I am Shraavi, assistant at Ather Fine Electric. No problem at all, I will not message you further; reach back out anytime if you ever want to check out an Ather.",
      },
    ],
  },
  {
    id: "c0592",
    option: 14,
    category: "Other questions",
    title: "An unusual request. A checked answer.",
    context:
      "The customer wanted a vehicle without RTO registration. The assistant checked with the team.",
    value:
      "Some requests need a clear answer from staff. The assistant did not say yes just to keep the customer interested.",
    outcome:
      "The team said registration was needed. When the customer asked for a call, a staff member shared a sales contact.",
    limit:
      "The chat does not show that a call happened or a vehicle was bought.",
    translation: [
      "Customer: “Does it have RTO registration?”",
      "Customer: “We need one without RTO registration.”",
      "Assistant: “I will check this with our team.”",
      "The assistant returns with the team’s answer: registration is mandatory.",
    ],
    messages: [
      {
        position: 6,
        role: "customer",
        text: "आरटीओ पासिंग आहे का",
      },
      {
        position: 7,
        role: "assistant",
        text: "हो, डिलिव्हरीच्या वेळी आरटीओ पासिंग आणि नंबर प्लेटचे सर्व काम आमची टीमच करून देते. तुम्हाला Rizta चे फोटो बघायचे आहेत की Ather 450 चे?",
      },
      {
        position: 8,
        role: "customer",
        text: "विदाऊट आरटीओ पासिंग लागते आम्हाला",
      },
      {
        position: 9,
        role: "assistant",
        text: "विदाऊट आरटीओ पासिंग गाडी घेता येईल का, हे मी एकदा आमच्या टीमकडून तपासून सांगते.",
      },
      {
        position: 10,
        role: "assistant",
        text: "नाही, आरटीओ रजिस्ट्रेशन अनिवार्य असते, विदाऊट पासिंग गाडी मिळत नाही. ही गाडी प्रामुख्याने कोणासाठी पाहताय?",
      },
      {
        position: 11,
        role: "customer",
        text: "Call me",
      },
      {
        position: 12,
        role: "assistant",
        text: "मी आमच्या टीमला तुम्हाला कॉल करायला सांगितले आहे, थोडा वेळ वाट पाहा.",
      },
      {
        position: 13,
        role: "staff",
        text: "Please contact our sales manager at - [Contact number]",
      },
    ],
  },
  {
    id: "c0391",
    option: 17,
    category: "Language & spelling",
    title: "“Photo aha ka.” “100 reng price.”",
    context:
      "The customer asked about photos, range, price and the showroom in very short Marathi written in English letters.",
    value:
      "Customers often type in a hurry. The assistant used the chat to work out what they meant. They did not need to rewrite each question.",
    outcome:
      "The customer suggested Sunday at 4 PM. The chat ended while the assistant was asking for a name.",
    limit:
      "No booking was completed. This example shows language handling, not a booked visit.",
    translation: [
      "“Photo aha ka”: “Do you have a photo?”",
      "“100 reng price”: asking about the price for approximately 100 km range.",
      "“Gagapur la aha ka showroom”: “Is there a showroom in Gangapur?”",
    ],
    messages: [
      {
        position: 2,
        role: "customer",
        text: "Photo aha ka",
      },
      {
        position: 3,
        role: "assistant",
        text: "Ho, ahet na! Konkya model che photo baghayche ahet?",
      },
      {
        position: 4,
        role: "customer",
        text: "100 reng price",
      },
      {
        position: 5,
        role: "assistant",
        text: "100 km TrueRange saathi Rizta S chi on-road kimmat javalpas Rs 1,28,175 ahe, ani sporty 450S chi Rs 1,34,759 ahe. Hi scooter family saathi baghat ahat ki swataha saathi?",
      },
      {
        position: 6,
        role: "customer",
        text: "450s photo aha ka",
      },
      {
        position: 7,
        role: "assistant",
        text: "Ho, nakki! Ha bagha Ather 450S cha photo.",
      },
      {
        position: 10,
        role: "customer",
        text: "40",
      },
      {
        position: 11,
        role: "assistant",
        text: "Mag tar 123 km IDC range cha Rizta S tumhala sahaj 2-3 divas purel. Aata tumhi kay chalavta?",
      },
      {
        position: 16,
        role: "customer",
        text: "Gagapur la aha ka showroom",
      },
      {
        position: 17,
        role: "assistant",
        text: "Nahi, Gangapur madhe amche showroom nahiye, amche branch ithe Paithan madhe court area javal ahe. Tumhala Paithan showroom la bhet dene jamel ka?",
      },
    ],
  },
  {
    id: "c0661",
    option: 18,
    category: "Language & spelling",
    title: "“Axseris +gyarti +on rod”",
    context:
      "After booking, the customer asked about accessories, warranty, exchange and delivery for Dasara.",
    value:
      "A booking does not end the questions. The assistant answered each point and sent the delivery question to staff. The team could see what was still waiting.",
    outcome:
      "The Saturday 5 PM booking stayed in place. The delivery question was with the team.",
    limit:
      "The saved chat has no delivery answer. It does not confirm delivery by Dasara.",
    translation: [],
    messages: [
      {
        position: 20,
        role: "customer",
        text: "Axseris +gyarti +on rod price hai kya",
      },
      {
        position: 21,
        role: "assistant",
        text: "Rs 1,51,107 mein on-road price, RTO, insurance aur standard 3 saal/30,000 km warranty shamil hai. Accessories jaise frunk alag se aati hain. Yeh visit [Customer name] ke naam se book hui hai, theek hai na?",
      },
      {
        position: 24,
        role: "customer",
        text: "8 sal gyaranti hona",
      },
      {
        position: 25,
        role: "assistant",
        text: "Tension nako, battery par 8 saal / 80,000 km ki Eight70 warranty mil sakti hai. Iske liye AtherStack Pro ke sath Rs 4,999 ka add-on lena hota hai, baki details Saturday visit par samjha denge.",
      },
      {
        position: 28,
        role: "customer",
        text: "Or exchange offer hai kya",
      },
      {
        position: 29,
        role: "assistant",
        text: "Haan, hum puraani do-pahia gaadi exchange mein lete hain. Aap Saturday ko apni bike le aayiye, team dekh kar on the spot exchange value bata degi.",
      },
      {
        position: 30,
        role: "customer",
        text: "Or kal ya paso gadi book ki to dasara ko milegi kya",
      },
      {
        position: 31,
        role: "assistant",
        text: "Delivery timeline stock aur variant par depend karti hai, isliye Dasara delivery ke baare mein main team se check karke batati hoon.",
      },
    ],
  },
  {
    id: "c0485",
    option: 19,
    category: "Other questions",
    title: "“Sccoter nahi hona hamko.”",
    context:
      "The person did not want a scooter. They asked if the shop had other vehicles.",
    value:
      "Not every enquiry is a buyer for your shop. The assistant explained what the business sells and stopped asking sales questions.",
    outcome:
      "The customer said thanks. The chat ended politely, with no booking.",
    limit: "This shows a useful, polite answer. There was no booking or sale.",
    translation: [],
    messages: [
      {
        position: 2,
        role: "customer",
        text: "Sccoter nahi hona hamko",
      },
      {
        position: 3,
        role: "assistant",
        text: "Koi baat nahi ji. Agar aage chalkar electric scooter ka man bane, toh zaroor batayiye ga.",
      },
      {
        position: 4,
        role: "customer",
        text: "Dusra hai nahi kya aapke paas",
      },
      {
        position: 5,
        role: "assistant",
        text: "Hamare paas sirf Ather ke electric scooters hi aate hain. Agar bike ya car dekh rahe hain toh woh yahan available nahi hai ji.",
      },
      {
        position: 6,
        role: "customer",
        text: "Ok thanks for your",
      },
      {
        position: 7,
        role: "assistant",
        text: "Aapka shukriya! Kabhi bhi zaroorat ho toh yaad kijiyega.",
      },
    ],
  },
  {
    id: "c0584",
    option: 24,
    category: "Change of plan",
    title: "A landmark is enough to change the plan.",
    context:
      "The customer named Kranti Chowk after getting the location of another branch.",
    value:
      "People remember a chowk or petrol pump better than a branch name. The assistant found the right showroom and checked before moving the visit.",
    outcome: "The Sunday 10 AM booking moved from Paithan to Adalat Road.",
    limit:
      "The booking was changed. The chat does not show whether the customer came.",
    translation: [],
    messages: [
      {
        position: 24,
        role: "customer",
        text: "Location",
      },
      {
        position: 25,
        role: "assistant",
        text: "Here is the showroom location: https://maps.app.goo.gl/TU5ePgYsFCv5AwMp7",
      },
      {
        position: 26,
        role: "customer",
        text: "Kranti chowk showroom",
      },
      {
        position: 27,
        role: "assistant",
        text: "Our showroom near Kranti Chowk is on Adalat Road, right next to Chunilal Petrol Pump. Would you prefer your visit at Adalat Road instead of Paithan?",
      },
      {
        position: 28,
        role: "customer",
        text: "I want to visit the Adalat Road showroom near Kranti Chowk.",
      },
      {
        position: 29,
        role: "assistant",
        text: "Should I update your appointment on Sunday, 18 October at 10:00 AM to our Adalat Road showroom?",
      },
      {
        position: 30,
        role: "customer",
        text: "Yes, please move my appointment to Adalat Road.",
      },
      {
        position: 31,
        role: "assistant",
        text: "Done! Your visit is moved to Sunday, 18 October at 10:00 AM at our Adalat Road showroom. Please let me know if anything needs correcting.",
      },
    ],
  },
  {
    id: "c0424",
    option: 29,
    category: "Language & spelling",
    title: "An old Activa enters the conversation.",
    context:
      "While picking a visit time, the customer asked if the team would take an old Activa in exchange.",
    value:
      "The assistant answered the new question without losing the visit plan. It said to bring the scooter and RC book so the team could check its value.",
    outcome:
      "A same-day 4 PM visit was booked for the test ride and exchange check.",
    limit:
      "No exchange value was set in the chat. This is a selected part of a longer conversation.",
    translation: [
      "Customer: “By 4 today.”",
      "Customer: “My Activa is an older model. Will you accept it?”",
      "Customer: “Do I need to bring the vehicle?”",
      "Assistant: “Bring the Activa so the team can inspect it and assess its exchange value. Bring the RC book as well.”",
    ],
    messages: [
      {
        position: 12,
        role: "customer",
        text: "आज 4 वाजेपर्यंत",
      },
      {
        position: 13,
        role: "assistant",
        text: "आज दुपारी ४:०० वाजता नक्की जमू शकेल. बुकिंगसाठी तुमचे शुभनाव काय आहे?",
      },
      {
        position: 14,
        role: "customer",
        text: "माझी आकटीवा मोडेल 8च आहे घेनारका",
      },
      {
        position: 15,
        role: "assistant",
        text: "हो, जुनी ॲक्टिव्हा नक्कीच एक्स्चेंजमध्ये घेतली जाईल! वाहनाची स्थिती बघून आमची टीम शोरूममध्येच योग्य व्हॅल्यू ठरवेल. आज ४:०० च्या भेटीसाठी तुमचे नाव काय नोंदवू?",
      },
      {
        position: 16,
        role: "customer",
        text: "[Customer name]",
      },
      {
        position: 17,
        role: "assistant",
        text: "[Customer name] साहेब, आज गुरुवार, 15 ऑक्टोबर रोजी दुपारी 4:00 वाजता Rizta 161 km टेस्ट राइड आणि ॲक्टिव्हा एक्स्चेंजसाठी तुमची भेट नोंदवली आहे. काही बदल करायचा असल्यास नक्की सांगा?",
      },
      {
        position: 18,
        role: "customer",
        text: "गाडी आनावी लागेल का",
      },
      {
        position: 19,
        role: "assistant",
        text: "हो, जुनी ॲक्टिव्हा सोबत घेऊन आलात तर आमची टीम तिची लगेच तपासणी करून योग्य एक्स्चेंज व्हॅल्यू काढून देईल. सोबत गाडीचे आरसी बुकही आणा.",
      },
    ],
  },
];
