INCLUDE kapitel1
INCLUDE kapitel2
INCLUDE kapitel3
INCLUDE kapitel4
INCLUDE kapitel5
INCLUDE kapitel6
INCLUDE kapitel7
INCLUDE kapitel8
INCLUDE kapitel9
INCLUDE slut1
INCLUDE slut2
INCLUDE slut3
INCLUDE epilog2
INCLUDE credits


VAR violent = 0
VAR wild = 0
VAR likes_guns = 0
VAR missed_reindeer = false

-> kabbeleka

=== kabbeleka ===
# clear
# wait:1500
# img:Logotyp-kabbeleka.png
# wait:1500

    * Start - Kapitel 1
        -> kapitel1

    
    * Fortsätt påbörjat spel
        -> load
        
    *   sluten
        -> endChoices

=== load ===
# load
# clear
Inget sparat spel hittades.
    *   Kapitel 1
        -> kapitel1