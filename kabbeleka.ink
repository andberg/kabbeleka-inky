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
INCLUDE epilog


VAR violent = 0
VAR wild = 0
VAR likes_guns = 0
VAR missed_reindeer = false

-> kabbeleka

=== kabbeleka ===

# wait:1500
# img:Logotyp-kabbeleka.png
# wait:1500

    * Kapitel 1
        -> kapitel1
        
     * Sluten
        -> endChoices
    
    * Fortsätt påbörjat spel
        -> load

    * Kapitel 2 
        -> kapitel2
    
    * Kapitel 3
        -> kapitel3

    * Kapitel 4
        -> kapitel4

    * Kapitel 5
        -> kapitel5
    
    * Kapitel 6 
        -> kapitel6

    * Kapitel 7
        -> kapitel7
    
    * Kapitel 8
        -> kapitel8

    * Kapitel 9 
        -> kapitel9

=== load ===
# load
# clear
Inget sparat spel hittades.
    *   Kapitel 1
        -> kapitel1