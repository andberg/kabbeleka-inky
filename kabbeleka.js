var storyContent = ﻿{"inkVersion":16,"root":["\n","\n","\n","\n","\n","\n","\n","\n","\n","\n","\n",{"->":"kabbeleka"},"done",{"kabbeleka":[{"#":"wait:1500"},{"#":"img:Logotyp-kabbeleka.png"},{"#":"wait:1500"},["ev",{"^->":"kabbeleka.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Kapitel 1",{"->":"$r","var":true},null],"c":["ev",{"^->":"kabbeleka.3.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel1"},{"#f":7}]}],["ev",{"^->":"kabbeleka.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Fortsätt påbörjat spel",{"->":"$r","var":true},null],"c":["ev",{"^->":"kabbeleka.4.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"load"},{"#f":7}]}],{"#f":3}],"load":[{"#":"load"},{"#":"clear"},"^Inget sparat spel hittades.","\n",["ev",{"^->":"load.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Kapitel 1",{"->":"$r","var":true},null],"c":["ev",{"^->":"load.4.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel1"},{"#f":7}]}],{"#f":3}],"kapitel1":[{"#":"clear"},{"#":"backgroundColor: dark"},{"#":"wait 2000"},{"#":"video: Bilresa.mp4"},["ev",{"^->":"kapitel1.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Kapitel 2",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel1.4.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel2"},{"#f":7}]}],{"#f":3}],"kapitel2":[{"#":"save"},{"#":"clear"},{"#":"backgroundColor:light"},{"#":"fontColor:black"},"^Ljudet av bilen som kör upp på en grusväg. Tove kliver ut, öppnar bagageluckan och plockar ut sin väska. Samtidigt som bagageluckan stängs hörs ljudet från en dörr som öppnas en liten bit därifrån.","\n","^\"Men kära du, vad sen du blev. Det måste ha varit en förfärligt lång resa. Kom in, jag har förberett fika.\"","\n",["ev",{"^->":"kapitel2.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Tack farmor, jag kommer.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel2.8.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel2FirstDialog"},{"#f":7}]}],{"#f":3}],"kapitel2FirstDialog":["^\"Tänk att far din fått med dig på detta. Ut i skogen med gevär och allt.\"","\n",["ev",{"^->":"kapitel2FirstDialog.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Det var på tiden.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel2FirstDialog.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel2SecondDialog"},{"#f":7}]}],["ev",{"^->":"kapitel2FirstDialog.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Jag kan knappt tro det själv, men du vet hur han är.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel2FirstDialog.3.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel2SecondDialog"},{"#f":7}]}],["ev",{"^->":"kapitel2FirstDialog.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Det kommer gå bra, tro mig. Jag behöver vara där nu när farfar inte orkar följa med längre.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel2FirstDialog.4.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel2SecondDialog"},{"#f":7}]}],{"#f":3}],"kapitel2SecondDialog":["^\"Ja, jag antar att du har rätt... Här, låt mig ta väskan. Och dom kommer att behöva din hjälp i skogen utifall ni fäller en, det är ju ett som är säkert. Jag kommer ihåg för ett par höstar sedan när Kuno sköt tolvtaggaren. Det tog oss två dagar bara att få ner den till garaget för att kunna påbörja slakten.\"","\n","^\"Det är väl därför jag får vara med nu, som en extra hjälp eller nått. Även om det är lite oklart ännu vad dom kommer låta mig få göra.\"","\n","^\"Har du funderat på om du kommer vilja använda farfars bössa ännu?\"","\n",["ev",{"^->":"kapitel2SecondDialog.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Jag vet inte ännu.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel2SecondDialog.6.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel2ThirdDialog"},{"#f":7}]}],["ev",{"^->":"kapitel2SecondDialog.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Jag tror det, jag har ju trots allt tagit licensen.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel2SecondDialog.7.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel2ThirdDialog"},{"#f":7}]}],["ev",{"^->":"kapitel2SecondDialog.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Nej, det vill jag inte.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel2SecondDialog.8.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel2ThirdDialog"},{"#f":7}]}],{"#f":3}],"kapitel2ThirdDialog":["^\"Ja, men du är ju så ung ännu... och tänk om det skulle hända dig något. Farfar skulle aldrig förlåta sig själv.\"","\n","^\"Pappa då?\"","\n","^\"Kom så går vi in, du behöver få i dig något innan det är dags för sängen.\"","\n","^Tove följer efter sin farmor in i huset.","\n",["ev",{"^->":"kapitel2ThirdDialog.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^>>",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel2ThirdDialog.8.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel3"},{"#f":7}]}],{"#f":3}],"kapitel3":[{"#":"save"},{"#":"clear"},{"#":"backgroundColor: dark"},{"#":"img: frilagd-alg.png"},["ev",{"^->":"kapitel3.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^>>",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel3.4.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"liteSenare"},{"#f":7}]}],{"#f":3}],"liteSenare":[{"#":"clear"},{"#":"backgroundColor: light"},"^Tove hör steg utanför ytterdörren. Farfar har gått ut bakvägen för att hämta mer ved från garaget. Det är ljud hon känner igen. Trygga ljud.","\n","^Hon hör sin farmor som kommer efter.","\n",["ev",{"^->":"liteSenare.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^>>",{"->":"$r","var":true},null],"c":["ev",{"^->":"liteSenare.6.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"samtalistovlar"},{"#f":7}]}],{"#f":3}],"samtalistovlar":[{"#":"clear"},"^\"Tror du verkligen att det är säkert för henne att följa med?\"","\n","^\"Hon kommer gå, oavsett vad vi säger.\"","\n","^\"Men om vi berättar för henne hur det kan bli?\"","\n","^\"Ja, men vad ska du säga Anna? Du vet att du inte kan berätta för henne.\"","\n","^\"Jag har en olustig känsla.\"","\n",["ev",{"^->":"samtalistovlar.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^>>",{"->":"$r","var":true},null],"c":["ev",{"^->":"samtalistovlar.11.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"samtalistovlar2"},{"#f":7}]}],{"#f":3}],"samtalistovlar2":[{"#":"clear"},"^\"Det har du alltid när det kommer till far hennes.\"","\n","^I garaget hörs deras röster inte lika tydligt.","\n","^\"Tror du verkligen att hon kan komma att förändras? Ja, det är hennes först jakt, men det kanske blir hennes enda. Vi vet inte om hon kommer vilja fortsätta traditionen... Våldet har skippat generationer tidigare, vi kan bara gissa... Och Kuno är med, han kan berätta och ...\"","\n","^\"Ja, vi måste in nu, hon undrar säkert vart vi håller hus. Låt mig hjälpa dig med veden.\"","\n",["ev",{"^->":"samtalistovlar2.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Kapitel 4",{"->":"$r","var":true},null],"c":["ev",{"^->":"samtalistovlar2.9.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel4"},{"#f":7}]}],{"#f":3}],"kapitel4":[{"#":"save"},{"#":"clear"},{"#":"backgroundColor: dark"},{"#":"wait:1500"},{"#":"img:Algtorn.jpg"},["ev",{"^->":"kapitel4.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^>>",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel4.5.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"traden"},{"#f":7}]}],{"#f":3}],"traden":[{"#":"clear"},{"#":"backgroundColor: light"},"^Träden står i raka rader längs landsvägen. Odlade i sjok, kvadratiska mattor i olika nyanser av grönt. Olika stadier av växt.","\n","^Vid slutet av landsvägen där kryddas skogen av Fjällbjörk, Daggkåpa, Kabbeleka och vindpinade buskar. Ensligheten ovanför odlingsgränsen, tomma stugor utan el och rinnande vatten.","\n","^Utanför huset ligger klyvd ved, såg och yxa. Tomma bensindunkar, gamla skotermattor, renskinn.","\n",["ev",{"^->":"traden.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^>>",{"->":"$r","var":true},null],"c":["ev",{"^->":"traden.8.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"traden2"},{"#f":7}]}],{"#f":3}],"traden2":[{"#":"clear"},"^Inuti huset finns märken ristade på väggarna. Det hänger tavlor på människor som inte längre lever. Trasmattor klär golvet tillsammans med en flaska tändvätsa, öppna spisen, brasved och döda insekter.","\n","^Huset tillhörde ett hemman, men nu är delar av marken runtom avsåld för att täcka skulder och inköp. Träd byttes mot en ny fyrhjuling. Myrmarker fick stå för reparationer efter stormen Gudrun.","\n","^Folk har levt där inne. Nu är det endast ett hem för minnen av våld och dem som jagar ett par veckor på år.","\n","^Tove går upp tidigt morgon därpå och åker sista biten till jaktstugan.","\n",["ev",{"^->":"traden2.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^>>",{"->":"$r","var":true},null],"c":["ev",{"^->":"traden2.9.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"tillJaktstugan"},{"#f":7}]}],{"#f":3}],"tillJaktstugan":[{"#":"clear"},{"#":"save"},{"#":"backgroundColor: dark"},{"#":"wait 2000"},{"#":"video: Till-Jaktstugan.mp4"},["ev",{"^->":"tillJaktstugan.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^SMS",{"->":"$r","var":true},null],"c":["ev",{"^->":"tillJaktstugan.5.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"vante"},{"#f":7}]}],{"#f":3}],"vante":[{"#":"save"},{"#":"clear"},{"#":"backgroundColor:light"},{"#":"fontColor:black"},"^\"Tog du min vante?\"","\n",["ev",{"^->":"vante.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Ja\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"vante.6.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"chapterFiveFirstChoice"},{"#f":7}]}],["ev",{"^->":"vante.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Nej\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"vante.7.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"chapterFiveSecondChoice"},{"#f":7}]}],{"#f":3}],"chapterFiveFirstChoice":["^\"Men åh, jag skulle ju ha dem i helgen, nu kommer jag frysa händerna av mig. Jaja, Gick det bra att köra upp?\"","\n",["ev",{"^->":"chapterFiveFirstChoice.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Ja, det gick bra. Har inte hunnit bli så halt ännu.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"chapterFiveFirstChoice.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"detGickBraAttKoraUpp"},{"#f":7}]}],["ev",{"^->":"chapterFiveFirstChoice.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Höll nästan på att köra på en ren en mil från Lycksele, men hann precis stanna.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"chapterFiveFirstChoice.3.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"gickInteBraAttKoraUpp"},{"#f":7}]}],{"#f":3}],"chapterFiveSecondChoice":["^\"Då måste mamma tagit den, så typiskt henne. Gick det bra att köra upp?\"","\n",["ev",{"^->":"chapterFiveSecondChoice.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Ja, det gick bra. Har inte hunnit bli så halt ännu.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"chapterFiveSecondChoice.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"detGickBraAttKoraUpp"},{"#f":7}]}],["ev",{"^->":"chapterFiveSecondChoice.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Höll nästan på att köra på en ren en mil från Lycksele, men hann precis stanna.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"chapterFiveSecondChoice.3.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"gickInteBraAttKoraUpp"},{"#f":7}]}],{"#f":3}],"detGickBraAttKoraUpp":["^\"Skönt. Mamma hälsade förresten att du ska skynda dig hem. Tycker det är idiotiskt att du ska hjälpa pappa i skogen. Hon tror typ att du kommer bli skjuten under älgjakten.\"","\n",["ev",{"^->":"detGickBraAttKoraUpp.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Hon överreagerar jämt. Pappa har bett mig hjälpa till med jakten i två år nu, men jag har inte kunnat förrän nu. Det betyder mycket för honom nu när farfar inte orkar längre. Som om det är en viktig familjeritual eller nått. :/ \"",{"->":"$r","var":true},null],"c":["ev",{"^->":"detGickBraAttKoraUpp.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"chapterFiveCommonOne"},{"#f":7}]}],{"#f":3}],"gickInteBraAttKoraUpp":["^\"Men usch :O, skönt att det gick bra. Mamma hälsade förresten att du ska skynda dig hem. Tycker det är idiotiskt att du ska hjälpa pappa i skogen. Hon tror typ att du kommer bli skjuten under älgjakten.\"","\n",["ev",{"^->":"gickInteBraAttKoraUpp.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Hon överreagerar jämt. Pappa har bett mig hjälpa till med jakten i två år nu, men jag har inte kunnat förrän nu. Det betyder mycket för honom nu när farfar inte orkar längre. Som om det är en viktig familjeritual eller nått. :/ \"",{"->":"$r","var":true},null],"c":["ev",{"^->":"gickInteBraAttKoraUpp.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"chapterFiveCommonOne"},{"#f":7}]}],{"#f":3}],"chapterFiveCommonOne":["^\"Hur känns det då, har du bestämt dig om du vill börja öva dig att skjuta, eller ska du bara vara med och stycka köttet?\"","\n",["ev",{"^->":"chapterFiveCommonOne.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Nej, jag tror inte jag vill öva mig att skjuta ännu. Tror inte det är nåt för mig egentligen. Vet inte hur jag ska säga det till pappa dock? :/ \"",{"->":"$r","var":true},null],"c":["ev",{"^->":"chapterFiveCommonOne.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"villInteSkjuta"},{"#f":7}]}],["ev",{"^->":"chapterFiveCommonOne.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Det skulle vara roligt att prova älgstudsaren, det är ju typ därför jag kom.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"chapterFiveCommonOne.3.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"villSkjuta"},{"#f":7}]}],{"#f":3}],"villInteSkjuta":["^\"Jag skulle inte heller vilja skjuta. Så synd om älgen liksom. Men du löser det med pappa, du har alltid kunnat prata med honom. Mycket bättre än mig iaf!\"","\n",["ev",{"^->":"villInteSkjuta.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Ja, jag antar att det löser sig, skulle bara vilja att denna helg är över. Vet inte om jag kommer orka sova ute i jaktstugan en hel helg med två gubbar.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"villInteSkjuta.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"vilkaBlevDetNu"},{"#f":7}]}],{"#f":3}],"vilkaBlevDetNu":["^\"Vilka blev det nu, du, pappa och Kuno?\"","\n",["ev",{"^->":"vilkaBlevDetNu.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Ja, precis. Har inte sett Kuno sen farfars 70 års fest. Pratade med Nila om det i veckan, han tyckte Kuno var rätt skojig. Att gubben fortfarande pratar med folk över hela världen via sin långvågsradio. Nila försökte introducera Facebook, men det gick inte så bra :P\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"vilkaBlevDetNu.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"nila"},{"#f":7}]}],{"#f":3}],"villSkjuta":["^\"Du är knäpp, men pappa blir nog glad. Han längtar efter att nån av oss ska typ följa i hans fotspår.\"","\n",["ev",{"^->":"villSkjuta.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Jo, jag vet. Vet inte om det är det jag tänker göra, tycker bara det verkar roligt att skjuta.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"villSkjuta.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"verkarRoligtAttSkjuta"},{"#f":7}]}],["ev",{"^->":"villSkjuta.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Jo jag vet. Men det kanske inte skulle vara så illa att bo här uppe. Jag har ju alltid gillat skogen. Skönt att slippa stan ibland.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"villSkjuta.3.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"gillatSkogen"},{"#f":7}]}],{"#f":3}],"verkarRoligtAttSkjuta":["^\"Du ska alltid vara så badass.\"","\n",["ev",{"^->":"verkarRoligtAttSkjuta.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Det är det jag lever för. Nej, men jag tycker det ska bli spännande. Jag och Nila pratade om det i veckan att vi gärna skulle kunna klara oss utanför samhället typ. Kunna skjuta för att få mat, eller lära oss odling eller sånt.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"verkarRoligtAttSkjuta.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"nila"},{"#f":7}]}],["ev",{"^->":"verkarRoligtAttSkjuta.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Det är alltid roligt att lära sig nya saker. Nila tyckte jakten lät spännande, hade gärna följt med om hen inte hade tenta i helgen.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"verkarRoligtAttSkjuta.3.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"nila"},{"#f":7}]}],{"#f":3}],"gillatSkogen":["^\"Jag skulle aldrig kunna bo så långt från civilisationen. Skulle bli Jack Nicholson i the Shining.\"","\n",["ev",{"^->":"gillatSkogen.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Haha, ja, jag kan se det farmför mig, hur du står med kniven i farstun i pappas hus. Skriker here's Lailá! Men jag tror jag skulle klara mig bättre, både jag och Nila har alltid identifierat oss mer med Scatman Crothers karaktär...\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"gillatSkogen.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"nila"},{"#f":7}]}],{"#f":3}],"nila":["^\"Du umgås mycket med henom nu :)\"","\n",["ev",{"^->":"nila.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Vet du Laila, nu tror jag att jag hör pappas fyrhjuling. Måste börja göra mig i ordning. Jag hör av mig när vi kommer tillbaks från radioskuggan. Hälsa mamma. Kram\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"nila.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"adjoLaila"},{"#f":7}]}],{"#f":3}],"adjoLaila":["^\"Okej. Ha det fint och var försiktig i skogen.\"","\n",["ev",{"^->":"adjoLaila.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Kapitel 5",{"->":"$r","var":true},null],"c":["ev",{"^->":"adjoLaila.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel5"},{"#f":7}]}],{"#f":3}],"kapitel5":[{"#":"save"},{"#":"clear"},"^Kapitel 5 : Tove är på jakt med sin pappa och Kuno.","\n","^Hej Nila!","\n","^Nu har vi kommit tillbaks från första jaktdagen. Ingen sköt något, även om Kuno sa att han såg en tolvtaggare på kalhygget här nedanför oss från dasset i morse.","\n","^Det har varit spännande att få vara med. Ännu går jag bara bredvid pappa och han har visat mig hur jag ska spåra, hur jag ser om avföringen är färsk och hur jag ska kunna avgöra om en älghona har kalv.","\n","^Nu gör gubbarna upp eld där ute och vi ska laga mat (hälla vatten på snabbnudlarna). Jag tror Kuno har förberett en historia. Det är tyligen tradition vid jakten. Visst berättade jag det för dig hur han brukade sälja häften med sina berättelser utanför Ica innan jularna för att få ihop pengar till julmaten?","\n","^Imorgon kommer jag bära bössan.","\n","^Jag hör av mig igen imorgon kväll,","\n","^Tove","\n",["ev",{"^->":"kapitel5.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Kapitel 6",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel5.18.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel6"},{"#f":7}]}],{"#f":3}],"kapitel6":[{"#":"save"},{"#":"clear"},"^Kapitel 6","\n","^Tove, pappan och Kuno är tillbaks vid jaktstugan och Kuno berättar om något som har med familjens arv att göra.","\n",["ev",{"^->":"kapitel6.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Kapitel 7",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel6.6.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel7"},{"#f":7}]}],{"#f":3}],"kapitel7":[{"#":"save"},{"#":"clear"},"^Toves förvandling","\n","^slutar med att hon springer ut i skogen där hon hör hur någon springer bakom henne. Det är hennes pappa.","\n",["ev",{"^->":"kapitel7.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Kapitel 8",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel7.6.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"kapitel8"},{"#f":7}]}],{"#f":3}],"kapitel8":[{"#":"save"},{"#":"clear"},"^Tove och pappan för en dialog om arvet, det kan sluta på tre olika vis:","\n",["ev",{"^->":"kapitel8.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Slut 1 - Försoning",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel8.4.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"slut1"},{"#f":7}]}],["ev",{"^->":"kapitel8.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Slut 2 - Tove går sin egen väg",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel8.5.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"slut2"},{"#f":7}]}],["ev",{"^->":"kapitel8.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Slut 3 - Tove kan inte försonas med tanken på arvet, blir vild.",{"->":"$r","var":true},null],"c":["ev",{"^->":"kapitel8.6.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"slut3"},{"#f":7}]}],{"#f":3}],"slut1":[{"#":"save"},{"#":"clear"},"done",{"#f":3}],"slut2":[{"#":"save"},{"#":"clear"},"done",{"#f":3}],"slut3":[{"#":"save"},{"#":"clear"},"done",{"#f":3}],"#f":3}],"listDefs":{}};