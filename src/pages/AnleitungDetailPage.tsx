import { useI18n } from "@/lib/i18n";
import { instructions } from "@/lib/data";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CDN2 = "https://cdn.prod.website-files.com/6515f2606ac654c52d9c4c6a";

// Content sections for each instruction page (real content from the original site)
type ContentBlock = { type: "text" | "quote" | "image" | "heading" | "link"; content: { de: string; en: string } | string; href?: string; linkText?: { de: string; en: string } };

const instructionContent: Record<string, ContentBlock[]> = {
  "check-in-anleitung": [
    { type: "quote", content: { de: "Um in Dein Apartment einzuchecken, findest Du links neben der Eingangstür eine Tastatur, an der Du Deinen Zugangscode eingeben kannst.", en: "To check in to your apartment, you will find a keypad to the left of the entrance door, where you can enter your access code." } },
    { type: "image", content: `${CDN2}/66dc45988e6e09e9b269ac19_66dc45928f8fd5ebe17d1afc_IMG_1436.avif` },
    { type: "quote", content: { de: "Drücke zuerst die \"Einschalttaste\" auf der Tastatur, um sie zu aktivieren. Gib anschließend den Zugangscode ein, den Du von uns erhalten hast.", en: "First, press the \"power key\" on the keyboard to activate it. Then enter the access code that you received from us." } },
    { type: "image", content: `${CDN2}/66dc443f29e15a21ed69ce8b_66dc42ad06db0a58c147d4d6_IMG_1440.avif` },
    { type: "quote", content: { de: "Sobald Du den Code korrekt eingegeben hast, leuchtet ein roter Punkt auf, der anzeigt, dass die Tür nun entsperrt ist.", en: "Once the code is entered correctly, a red dot will light up, indicating that the door is unlocked." } },
    { type: "image", content: `${CDN2}/66dc467cdd607b08dfe8c236_66dc465440390f84ccd1ead1_IMG_1444.avif` },
    { type: "quote", content: { de: "Drehe den Türknauf nach links, um die Tür zu entsperren. Da es sich um eine Sicherheitstür handelt, kann sie etwas schwer aufgehen. Ziehe sie nach dem Drehen des Knaufs kräftig zu Dir heran.", en: "Turn the door knob to the left to unlock the door. Since this is a security door, it may feel a bit heavy when opening. Make sure to pull it firmly toward you after turning the knob." } },
    { type: "image", content: `${CDN2}/66dc467cdd607b08dfe8c239_66dc466c06db0a58c14aef89_IMG_1449.avif` },
    { type: "quote", content: { de: "Betrete das Gebäude und benutze den Aufzug, um in das Stockwerk zu gelangen, in dem sich Dein Apartment befindet.", en: "After entering the building, take the elevator to the floor where your apartment is located." } },
    { type: "image", content: `${CDN2}/66dc483281bf97e67091ad00_66dc46f7e38da854fed8c474_IMG_1521.avif` },
    { type: "image", content: `${CDN2}/66dc483281bf97e67091acfd_66dc478efa615238251319d1_IMG_1522.avif` },
    { type: "quote", content: { de: "Vor der Tür Deines Apartments findest Du eine Schlüsselbox. Gib den Code ein, den Du für die Schlüsselbox erhalten hast, und drücke den Hebel nach unten, um den Schlüssel zu entnehmen.", en: "Next to your apartment door, you will find a key box. Enter the code for the key box, press the lever down, and retrieve the key." } },
    { type: "image", content: `${CDN2}/66dc483281bf97e67091acf5_66dc47a1e1e99fbb39092a1a_IMG_1454.avif` },
    { type: "image", content: `${CDN2}/66dc483281bf97e67091ad14_66dc47b1d8e5c09607f54284_IMG_1455.avif` },
  ],
  "bugeleisen-bugelbrett": [
    { type: "quote", content: { de: "Das Bügeleisen und Bügelbrett befinden sich im Erdgeschoss des Apartmenthauses. Gehe vom Haupteingang geradeaus, vorbei am Aufzug, und auf der linken Seite ist das Bügelbrett montiert.", en: "The iron and ironing board are located on the ground floor of the apartment building. From the main entrance, walk straight ahead, past the elevator, and you'll find the ironing board mounted on the left side." } },
    { type: "image", content: `${CDN2}/66dc52d2930b82790d33cb66_66dc529e06db0a58c155b71b_IMG_2869.avif` },
    { type: "image", content: `${CDN2}/66dc54cc8f8fd5ebe18ae220_66dc53ddfc927bc34ff43cb4_IMG_2870%2520Kopie.avif` },
    { type: "quote", content: { de: "Bügelbrett herunterklappen: Drehe den Haken an der rechten Seite des Bügelbretts nach rechts, um die Sicherung zu lösen. Klappe das Bügelbrett vorsichtig nach unten, bis es waagerecht steht.", en: "Fold down the ironing board: Turn the hook on the right side of the ironing board to the right to release the lock. Gently fold the ironing board down until it is level." } },
    { type: "image", content: `${CDN2}/66dc54cc8f8fd5ebe18ae213_66dc532229e15a21ed76e692_IMG_2872.avif` },
    { type: "image", content: `${CDN2}/66dc54cc8f8fd5ebe18ae210_66dc544139706fc65ea3af9d_IMG_2873%2520Kopie.avif` },
    { type: "quote", content: { de: "Bügeleisen vorbereiten: Stecke das Bügeleisen in die Steckdose. Falls erforderlich, fülle Wasser in das Bügeleisen, um die Dampffunktion zu nutzen.\n\nBügeln: Stelle die gewünschte Temperatur am Bügeleisen ein und warte, bis es aufgeheizt ist. Bügele Deine Kleidung auf dem Bügelbrett.\n\nNach dem Gebrauch: Schalte das Bügeleisen aus, ziehe den Stecker und lasse es abkühlen. Klappe das Bügelbrett wieder hoch und drehe den Haken nach links, um es zu sichern.", en: "Prepare an iron: Plug the iron into the power outlet. If necessary, add water to the iron to use the steam function.\n\nIroning: Set the desired temperature on the iron and wait until it heats up. Iron your clothes on the ironing board.\n\nAfter use: Turn off the iron, unplug it and let it cool down. Flip the ironing board back up and turn the hook to the left to secure it." } },
    { type: "image", content: `${CDN2}/66dc54cc8f8fd5ebe18ae216_66dc54c029e15a21ed785738_IMG_2877.avif` },
  ],
  "parkmoglichkeiten": [
    { type: "heading", content: { de: "Parkmöglichkeiten und Tipps für Deinen Aufenthalt", en: "Parking options and tips for your stay" } },
    { type: "quote", content: { de: "Tiefgarage\n\nUnsere Tiefgarage ist ideal für kleinere Autos bis zur Größe eines VW Golfs. Da das Tor manuell geöffnet werden muss, ist eine Reservierung im Voraus notwendig, und wir benötigen Deine ungefähre Ankunftszeit, um Dich hereinzulassen. Die Parkkosten betragen 10 € pro Tag für PKW und 5 € pro Tag für Motorräder. Fahrräder können kostenlos abgestellt werden.", en: "Underground parking\n\nOur underground car park is ideal for smaller cars up to the size of a VW Golf. Since the door has to be opened manually, you need to make a reservation in advance and we need your approximate time of arrival to let you in. Parking costs 10€ per day for cars and 5€ per day for motorbikes. Bicycles can be parked free of charge." } },
    { type: "quote", content: { de: "Öffentliche Parkplätze\n\nRund um unsere Unterkunft stehen Dir öffentliche Parkplätze zur Verfügung. Unter der Woche von 9:00 bis 22:00 Uhr sind diese kostenpflichtig, bieten jedoch nachts von 22:00 bis 9:00 Uhr kostenlose Parkmöglichkeiten. Am Wochenende kannst Du den ganzen Tag über kostenfrei parken. Parkscheine kannst Du bequem über die Handy-App \"EasyPark\" kaufen.", en: "Public parking\n\nPublic parking spaces are available around our accommodation. These are chargeable during the week from 9:00 to 22:00, but offer free parking at night from 22:00 to 9:00. On weekends, you can park for free all day long. You can easily buy parking tickets via the mobile app \"EasyPark\"." } },
    { type: "image", content: `${CDN2}/66dc5abf81bf97e670a31eb0_66dc5ab602429c73b8411a77_unnamed.avif` },
  ],
  "check-out-anleitung": [
    { type: "text", content: { de: "Wir hoffen, Du hattest einen angenehmen Aufenthalt! Bevor Du gehst, bitten wir Dich, folgende Schritte zu beachten, um uns bei der Vorbereitung für die nächsten Gäste zu unterstützen:", en: "We hope you had a pleasant stay! Before you leave, please follow these steps to help us prepare for our next guests:" } },
    { type: "quote", content: { de: "Benutzte Handtücher einsammeln:\n\nSammle alle benutzten Handtücher ein und lege sie auf den Boden im Badezimmer. So wissen wir, welche Handtücher gewechselt werden müssen.", en: "Collect used towels:\n\nCollect all used towels and place them on the floor in the bathroom. That way we know which towels need to be changed." } },
    { type: "quote", content: { de: "Geräte ausschalten & Fenster schließen:\n\nBitte schalte alle elektrischen Geräte (TV, Küchenutensilien, etc.) aus und überprüfe, ob alle Fenster ordnungsgemäß geschlossen sind. Dies hilft uns, Energie zu sparen und die Sicherheit zu gewährleisten.", en: "Switch off devices & close windows:\n\nPlease turn off all electrical appliances (TV, kitchen utensils, etc.) and check that all windows are properly closed. This helps us save energy and ensure safety." } },
    { type: "quote", content: { de: "Schlüssel zurücklegen:\n\nLege den Schlüssel bitte wieder in die Schlüsselbox vor der Tür des Apartments und verschließe die Box sicher.", en: "Return key:\n\nPlease put the key back in the key box in front of the apartment door and lock the box securely." } },
    { type: "quote", content: { de: "Zusätzliche Anweisungen:\n\n- Spüle das von Dir benutzte Geschirr bitte ab, bevor Du auscheckst. Das hilft uns, den Reinigungsprozess effizienter zu gestalten. Vielen Dank für Deine Unterstützung!\n\n- Gib uns kurz Bescheid, wenn Du auscheckst, damit wir alles für die nächsten Gäste vorbereiten können. Deine Mithilfe wird sehr geschätzt!", en: "Additional instructions:\n\n- Please wash any dishes you've used before checking out. This helps us speed up the cleaning process. Thank you for your cooperation!\n\n- Let us know when you've checked out so we can prepare the apartment for the next guests. We really appreciate your help!" } },
    { type: "text", content: { de: "Wir bedanken uns für Deinen Aufenthalt und wünschen Dir eine sichere Weiterreise. Bis bald!", en: "Thank you for staying with us, and we wish you safe travels. We hope to see you again soon!" } },
  ],
  "offentlichen-verkehrsmittel-in-wien": [
    { type: "heading", content: { de: "Anleitung für die Nutzung der öffentlichen Verkehrsmittel in Wien", en: "How to Use Public Transportation in Vienna" } },
    { type: "text", content: { de: "Wien bietet ein ausgezeichnetes Netz an öffentlichen Verkehrsmitteln, das Dir ermöglicht, Dich schnell und bequem in der Stadt zu bewegen. Um die beste Route zu finden, empfehlen wir Dir den Routenplaner der Wiener Linien.", en: "Vienna offers an excellent network of public transport, which allows you to move around the city quickly and easily. To find the best route, we recommend the Wiener Linien route planner." } },
    { type: "quote", content: { de: "Verwende den Wiener Linien Routenplaner\n\nBesuche den offiziellen Routenplaner der Wiener Linien:", en: "Use the Wiener Linien route planner\n\nVisit the official Wiener Linien route planner:" }, href: "https://www.wienerlinien.at/route-planen", linkText: { de: "Wiener Linien Routenplaner", en: "Wiener Linien route planner" } },
    { type: "quote", content: { de: "Starte Deine Planung\n\nGib Deinen aktuellen Standort (Startpunkt) ein und wähle als Zieladresse \"Absberggasse 6\". Der Routenplaner zeigt Dir dann die schnellste und einfachste Verbindung zu uns oder zu einem anderen gewünschten Ziel in Wien an.", en: "Start planning\n\nEnter your current location (starting point) and choose the destination address \"Absberggasse 6\". The route planner will then show you the fastest and easiest connection to us or to another desired destination in Vienna." } },
    { type: "quote", content: { de: "Vorteile der öffentlichen Verkehrsmittel\n\n- Frequenz und Abdeckung: Die Wiener Linien bieten U-Bahn, Straßenbahn und Busse, die Dich in alle Teile der Stadt bringen.\n\n- Echtzeitinformationen: Der Routenplaner zeigt Dir nicht nur die besten Verbindungen, sondern auch Echtzeitinformationen zu den Abfahrtszeiten und eventuellen Verspätungen.\n\n- Praktisch für jeden Anlass: Egal ob Du zu uns kommst oder während Deines Aufenthalts von A nach B möchtest – mit den öffentlichen Verkehrsmitteln kommst Du überall hin.", en: "Benefits of public transportation\n\n- Frequency and coverage: Wiener Linien offers subway, tram and buses that take you to all parts of the city.\n\n- Real time information: The route planner not only shows you the best connections, but also real-time information on departure times and possible delays.\n\n- Practical for any occasion: Regardless of whether you come to us or want to get from A to B during your stay — you can get anywhere by public transport." } },
    { type: "quote", content: { de: "Fahrscheine und Preise\n\nFahrscheine für die Wiener Linien kannst Du an Automaten in den U-Bahn-Stationen, in Trafiken (Kiosks), über die WienMobil-App oder online auf der Website der Wiener Linien kaufen. Es gibt verschiedene Ticketoptionen, darunter Einzelfahrscheine, 24- und 48-Stunden-Tickets sowie Wochenkarten.", en: "Tickets and prices\n\nYou can buy tickets for Wiener Linien at vending machines in subway stations, in tobacconists (kiosks), via VienMobil app or online at the Wiener Linien website. There are various ticket options, including single tickets, 24 and 48-hour tickets, and weekly passes." } },
    { type: "quote", content: { de: "Fragen oder Hilfe\n\nSolltest Du Fragen zur Nutzung der Verkehrsmittel haben oder Unterstützung bei der Planung Deiner Route benötigen, stehen wir Dir gerne zur Verfügung. Sprich uns einfach an!", en: "Questions or help\n\nIf you have any questions about using the means of transport or need assistance planning your route, we will be happy to help you. Just talk to us!" } },
    { type: "text", content: { de: "Mit dieser Anleitung kommst Du sicher und problemlos an Dein Ziel und kannst Wien in vollen Zügen genießen.", en: "With these instructions, you can reach your destination safely and easily and enjoy Vienna to the fullest." } },
  ],
  "gepackaufbewahrung-vor-dem-check-in": [
    { type: "text", content: { de: "Wir wissen, dass Du vielleicht schon vor unserem offiziellen Check-in um 14 Uhr in Wien ankommst und es unpraktisch ist, Dein Gepäck den ganzen Tag mit Dir herumzutragen. Daher bieten wir Dir gerne die Möglichkeit, Dein Gepäck bei uns sicher aufzubewahren, falls Dein Apartment noch nicht bezugsfertig ist.", en: "We understand that you may arrive in Vienna before our official check-in time at 2:00 PM and may not want to carry your luggage around all day. We are happy to offer you the option to safely store your luggage with us if your apartment is not yet ready." } },
    { type: "quote", content: { de: "Gepäckabgabe ab 10 Uhr\n\nAb 10 Uhr ist unser Reinigungspersonal im Haus, um die Apartments für die nächsten Gäste vorzubereiten. Du kannst das Gebäude betreten und den Aufzug nutzen, um das Reinigungspersonal zu suchen. Sie beginnen ihre Arbeit immer von den oberen Stockwerken und arbeiten sich nach unten vor. Wir empfehlen Dir daher, auf den oberen Stockwerken zu beginnen und Dich nach unten vorzuarbeiten.", en: "Luggage Drop-off Starting at 10:00 AM\n\nOur cleaning staff will be on-site starting at 10:00 AM to prepare the apartments for incoming guests. You are welcome to enter the building and use the elevator to locate the cleaning staff. They always start from the top floors and work their way down, so we recommend starting your search on the upper floors and working your way down." } },
    { type: "quote", content: { de: "Personal informieren\n\nSobald Du das Reinigungspersonal gefunden hast, teile ihnen bitte Deine Apartmentnummer mit. Sie werden Dir dann gerne helfen, Dein Gepäck bis zum Check-in sicher aufzubewahren.", en: "Inform the Staff\n\nOnce you find the cleaning staff, simply provide them with your apartment number, and they will be happy to assist you by securely storing your luggage until your apartment is ready for check-in." } },
    { type: "text", content: { de: "Wir hoffen, dass diese Lösung für Dich bequem ist, und freuen uns darauf, Dich bald bei uns begrüßen zu dürfen. Solltest Du noch Fragen haben oder Unterstützung benötigen, zögere nicht, uns zu kontaktieren.", en: "We hope this solution is convenient for you, and we look forward to welcoming you soon. If you have any further questions or need assistance, please don't hesitate to contact us." } },
  ],
  "gepackaufbewahrung-nach-dem-check-out": [
    { type: "text", content: { de: "Du kannst Dein Gepäck gerne nach dem Check-out bei uns lassen. Damit der Prozess reibungslos verläuft, bitten wir Dich, die folgenden Anweisungen zu beachten:", en: "You are welcome to leave your luggage with us after check-out. To ensure a smooth process, please follow the instructions below:" } },
    { type: "quote", content: { de: "🕘 Check-Out VOR 9:00 Uhr: Bitte gib uns in jedem Fall vorher Bescheid, wenn du vor 9 Uhr auscheckst und dein Gepäck stehen lassen möchtest. Stelle dein Gepäck dann im Eingangsbereich (Flur) deines Apartments ab.", en: "🕘 Check-Out BEFORE 9:00 AM: Please make sure to inform us in advance if you plan to check out before 9:00 AM and leave your luggage. In that case, leave your luggage in the hallway of your apartment." } },
    { type: "quote", content: { de: "🕘 Check-Out NACH 9:00 Uhr: Das Reinigungsteam ist bereits im Haus und arbeitet sich von oben nach unten durch. Bitte suche das Reinigungspersonal aktiv auf und übergib dein Gepäck direkt an sie – sie helfen dir gerne, es im Aufbewahrungsraum zu verstauen.", en: "🕘 Check-Out AFTER 9:00 AM: Our cleaning staff will already be in the building and working their way from top to bottom. Please approach the cleaning team directly and hand over your luggage – they'll be happy to store it in the designated storage room for you." } },
    { type: "quote", content: { de: "🎒 Abholung des Gepäcks: BIS SPÄTESTENS 14:45 Uhr! Bitte sprich das Reinigungspersonal in den Stockwerken oder im Bügelraum im Erdgeschoss an – bitte gehe NICHT selbst in die Apartments. Nach 14:45 Uhr ist niemand mehr vor Ort. Eine Abholung ist dann leider nicht mehr möglich. Alternativ kannst du z. B. ein Schließfach am Hauptbahnhof nutzen.", en: "🎒 Luggage pick-up: NO LATER THAN 2:45 PM: Please speak to the cleaning staff on the floors or in the ironing room on the ground floor. Do not enter any apartments yourself. After 2:45 PM, no staff will be on-site. Unfortunately, pick-up after this time is not possible. As an alternative, we recommend using luggage lockers at Vienna Central Station (Hauptbahnhof)." } },
    { type: "text", content: { de: "Wir hoffen, dass diese Lösung für Dich komfortabel ist und Deinen Aufenthalt so angenehm wie möglich gestaltet. Solltest Du noch Fragen haben oder weitere Unterstützung benötigen, zögere nicht, uns zu kontaktieren.", en: "We hope this solution is convenient for you and helps make your stay as pleasant as possible. Should you have any further questions or need assistance, feel free to contact us." } },
  ],
  "anleitung-zur-steuerung-der-heizung": [
    { type: "text", content: { de: "Mit dem Danfoss TPOne Thermostat kannst Du die Temperatur in Deinem Apartment ganz einfach regulieren. Befolge diese Schritte, um Deine Heizung optimal einzustellen. Eine detaillierte Anleitung mit Bildern findest Du auch als PDF zum Download.", en: "You can easily control the temperature in your apartment with the Danfoss TPOne Thermostat. Follow these steps to adjust the heating system effectively. A detailed manual with images can also be downloaded as a PDF." } },
    { type: "quote", content: { de: "Ein- und Ausschalten der Heizung\n\nDrücke die Ein/Aus-Taste auf dem Thermostat, um die Heizung einzuschalten. Eine ausführlichere Schritt-für-Schritt-Anleitung mit Bildern findest Du auch in der PDF-Version.", en: "Turning the Heating On/Off\n\nPress the power button on the thermostat to turn the heating on. For more detailed instructions with images, refer to the downloadable PDF guide." } },
    { type: "quote", content: { de: "Temperatur einstellen\n\nVerwende die Pfeiltasten auf dem Display, um die Raumtemperatur zu erhöhen oder zu senken. Die aktuelle Temperatur wird auf dem Display angezeigt.\n\nEmpfohlene Temperaturen: Tagsüber 21-22°C, nachts 18-19°C für optimalen Komfort.", en: "Adjusting the Temperature\n\nUse the arrow buttons on the display to increase or decrease the room temperature. The current temperature will be displayed.\n\nRecommended temperatures: 21-22°C during the day, 18-19°C at night for optimal comfort." } },
    { type: "quote", content: { de: "Komfortmodi verwenden\n\nDer Thermostat bietet drei Modi:\n\n- Anwesend: Temperatur auf Komfortniveau.\n- Abwesend: Energie sparen, wenn Du nicht da bist.\n- Schlafend: Für eine angenehm kühle Temperatur nachts.", en: "Using the Comfort Modes\n\nThe thermostat has three modes:\n\n- Home Mode: Ideal when you're in the apartment, maintaining a comfortable temperature.\n- Away Mode: Use this when you're out to save energy.\n- Sleep Mode: Set for a cooler night temperature." } },
    { type: "quote", content: { de: "Manuelle Temperaturänderungen\n\nDu kannst die voreingestellten Temperaturen jederzeit manuell ändern. Drücke einfach auf die Pfeiltasten, um die Temperatur anzupassen.", en: "Manual Temperature Adjustments\n\nYou can manually adjust the preset temperatures at any time. Just press the arrow buttons to set the temperature as needed." } },
    { type: "quote", content: { de: "Standby-Modus\n\nFür längere Abwesenheit kannst Du den Thermostat in den Standby-Modus setzen.", en: "Standby Mode\n\nIf you're away for an extended period, you can set the thermostat to Standby Mode." } },
    { type: "quote", content: { de: "Energiesparfunktionen\n\nAchte auf das Blatt-Symbol, das eine energiesparende Einstellung anzeigt.", en: "Energy-Saving Features\n\nLook for the leaf symbol, indicating an energy-saving setting." } },
    { type: "quote", content: { de: "Fenstersensor\n\nDer Thermostat schaltet die Heizung automatisch in den Standby-Modus, wenn ein Fenster geöffnet wird, um Energie zu sparen.", en: "Window Sensor\n\nThe thermostat will automatically switch to Standby Mode when a window is opened to save energy." } },
    { type: "text", content: { de: "Tipp: Die originale Anleitung mit Bildern kannst Du hier als PDF herunterladen, um den Thermostat optimal zu bedienen.", en: "Tip: You can download the original manual with images here to learn how to use the thermostat effectively." } },
  ],
  "anleitung-tv": [
    { type: "text", content: { de: "Es kann vorkommen, dass vorherige Gäste die TV-Einstellungen verändert haben.", en: "It may happen that previous guests have changed the TV settings." } },
    { type: "text", content: { de: "Keine Sorge – die richtige Einstellung ist schnell und einfach wiederhergestellt! In den PDF-Anleitungen, die Du hier als Download findest, sind alle Schritte mit Bildern erklärt, damit Du den TV im Handumdrehen nach Deinen Wünschen einrichten kannst.", en: "Don't worry—it's quick and easy to restore the correct setting! In the PDF instructions, which you can download here, all steps are explained with pictures so that you can set up the TV according to your wishes in no time at all." } },
  ],
  "mit-kindern-wien-entdecken": [
    { type: "text", content: { de: "Wien hat auch für Familien einiges zu bieten. Wenn Du mit Kindern unterwegs bist, sind oft nicht die größten To-do-Listen am schönsten, sondern die Orte, die Spaß machen und trotzdem entspannt bleiben. Hier findest Du ein paar familienfreundliche Ideen für Euren Aufenthalt in Wien.", en: "Vienna also has a lot to offer for families. When you're traveling with kids, it's often not the biggest to-do lists that are the best, but the places that are fun and yet remain relaxed. Here are a few family-friendly ideas for your stay in Vienna." } },
    { type: "quote", content: { de: "Sch\u00F6nbrunn ist oft eine gute Wahl mit Kindern\n\nWenn Ihr einen Ausflug sucht, der f\u00FCr Erwachsene und Kinder passt, ist Sch\u00F6nbrunn eine sehr sch\u00F6ne Option. Dort gibt es nicht nur das Schloss, sondern auch ein eigenes Kindermuseum. Au\u00DFerdem geh\u00F6ren das Labyrinth und der Spielbereich Labyrinthikon zu den Angeboten rund um Sch\u00F6nbrunn.", en: "Sch\u00F6nbrunn is often a good choice with children\n\nIf you are looking for an excursion that is suitable for adults and children, Sch\u00F6nbrunn is a very nice option. There is not only the castle there, but also its own children's museum. In addition, the maze and the Labyrinthikon play area are among the offerings around Sch\u00F6nbrunn." }, href: "https://www.viator.com/tours/Vienna/Vienna-Skip-the-Line-Schonbrunn-Palace-and-Gardens-w-Guide/d454-265552P73?pid=P00290902&mcid=42383&medium=link&campaign=schoenbrunn", linkText: { de: "TICKETS KAUFEN", en: "BUY TICKETS" } },
    { type: "quote", content: { de: "Der Prater bringt Bewegung in den Tag\n\nWenn Kinder sich austoben möchten, ist der Prater oft eine gute Idee. Laut offizieller Prater-Seite gibt es dort Attraktionen für Groß und Klein, und das Wiener Riesenrad bietet auch Familienkarten an.", en: "The Prater brings movement into the day\n\nIf kids want to let off steam, the Prater is often a good idea. According to the official Prater website, there are attractions for young and old, and the Vienna Ferris Wheel also offers family passes." } },
    { type: "quote", content: { de: "Technik und Staunen im Museum\n\nFür Tage, an denen Ihr etwas wetterunabhängig unternehmen möchtet, kann das Technische Museum sehr passend sein. Auf der offiziellen Seite gibt es eigene Angebote für Kinder und Familien.", en: "Technology and wonder in the museum\n\nFor days when you want to do something regardless of the weather, the Technical Museum can be very suitable. On the official site, there are special offers for children and families." } },
    { type: "quote", content: { de: "Wien von oben erleben\n\nEin besonderes Erlebnis für größere Kinder kann auch der Donauturm sein. Offiziell wirbt der Donauturm mit einem 360-Grad-Panoramablick über Wien, und zusätzlich gibt es dort eine Rutsche in großer Höhe.", en: "Experience Vienna from above\n\nThe Danube Tower can also be a special experience for older children. Officially, the Danube Tower advertises a 360-degree panoramic view of Vienna, and there is also a high-altitude slide there." }, href: "https://www.viator.com/tours/Vienna/Danube-Tower-The-Top-of-Vienna/d454-75971P1?pid=P00290902&mcid=42383&medium=link&campaign=Donauturm", linkText: { de: "TICKETS KAUFEN", en: "BUY TICKETS" } },
    { type: "quote", content: { de: "Kleine Pause zwischendurch\n\nGerade mit Kindern ist nicht nur der Ausflug selbst wichtig, sondern auch die Zeit dazwischen. Dafür passt LUNIMO sehr schön: liebevoll gemachte Musik für Kinder – mit fröhlichen Liedern zum Mitsingen und ruhigeren Songs für entspannte Momente.\n\n💛🎵 Jetzt anhören auf Spotify, Apple Music, YouTube, Amazon Music", en: "A short break in between\n\nEspecially with children, not only is the trip itself important, but also the time in between. LUNIMO fits very nicely: lovingly made music for children — with cheerful songs to sing along and quieter songs for relaxing moments.\n\n💛🎵 Listen now on Spotify, Apple Music, YouTube, Amazon Music" } },
    { type: "quote", content: { de: "Unser Tipp für entspannte Familientage in Wien\n\nMit Kindern muss man in Wien oft gar nicht „alles sehen". Meist ist es am schönsten, ein oder zwei gute Ziele pro Tag einzuplanen und dazwischen genug Ruhe zu lassen.", en: "Our tip for relaxing family days in Vienna\n\nWith children, you often don't have to \"see everything\" in Vienna. It is usually best to plan one or two good destinations per day and leave enough rest in between." } },
    { type: "text", content: { de: "Wir wünschen Dir und Deiner Familie eine schöne Zeit in Wien und einen entspannten Aufenthalt bei uns.", en: "We wish you and your family a great time in Vienna and a relaxing stay with us." } },
  ],
  "anleitung-induktionskochplatte": [
    { type: "image", content: `${CDN2}/67aab04c6c9f89ffa7f84766_111111.avif` },
    { type: "heading", content: { de: "1. Vor der Benutzung:", en: "1. Before use:" } },
    { type: "text", content: { de: "Geeignetes Kochgeschirr: Verwende nur Töpfe und Pfannen, die für Induktionskochfelder geeignet sind. Das bedeutet, dass der Boden des Kochgeschirrs magnetisch sein muss. Achte darauf, dass der Topf oder die Pfanne einen Durchmesser von mindestens 12 cm hat.", en: "Suitable cookware: Only use pots and pans that are suitable for induction cooktops. This means that the bottom of the cookware must be magnetic. Make sure the pot or pan has a diameter of at least 12 cm." } },
    { type: "heading", content: { de: "2. Inbetriebnahme der Induktionskochplatte:", en: "2. Starting the induction cooktop:" } },
    { type: "text", content: { de: "Ein-/Ausschalten: Drücke die Taste 13 (Ein-/Ausschalter) auf der Vorderseite der Kochplatte. Das Display leuchtet auf, und die Kochplatte ist im Standby-Modus.\n\nKochmodus auswählen: Nach dem Einschalten musst du innerhalb von 30 Sekunden einen Kochmodus auswählen.", en: "On/Off: Press button 13 (on/off switch) on the front of the cooktop. The display lights up and the cooktop is in standby mode.\n\nSelect cooking mode: After switching on, you must select a cooking mode within 30 seconds." } },
    { type: "heading", content: { de: "3. Kochmodi:", en: "3. Cooking modes:" } },
    { type: "text", content: { de: "Kochen mit Leistungsstufen: Im Leistungsmodus kannst du die Kochstufe über die Tasten 9 (-) und 8 (+) anpassen. Du kannst die Leistung zwischen 300 W und 2000 W einstellen.\n\nKochen mit Temperatur: Drücke die Taste 11 (Temperatursteuerung). Die Standard-Temperatur beträgt 120°C, anpassbar zwischen 60°C und 240°C.\n\nBooster-Funktion: Drücke die Taste 6 (Boost-Taste) für schnelles Kochen auf maximaler Leistung.", en: "Cooking with power levels: In power mode, you can adjust the cooking level using buttons 9 (-) and 8 (+). You can set the power between 300 W and 2000 W.\n\nCooking with temperature: Press button 11 (temperature control). The default temperature is 120°C, adjustable between 60°C and 240°C.\n\nBooster function: Press button 6 (boost button) for fast cooking at maximum power." } },
    { type: "heading", content: { de: "4. Bedienung und Funktionen:", en: "4. Operation and functions:" } },
    { type: "text", content: { de: "Timer-Voreinstellung: Du kannst den Timer auf 1 bis 180 Minuten einstellen. Drücke die Taste 12.\n\nKindersicherung: Wenn \"L\" auf dem Display erscheint, ist die Kindersicherung aktiviert. Deaktivieren: Halte die Tasten 8 (+) und 9 (-) gleichzeitig für 10 Sekunden gedrückt.", en: "Timer preset: You can set the timer from 1 to 180 minutes. Press button 12.\n\nChild lock: If \"L\" appears on the display, the child lock is activated. Deactivate: Hold buttons 8 (+) and 9 (-) simultaneously for 10 seconds." } },
    { type: "heading", content: { de: "5. Sicherheitshinweise:", en: "5. Safety instructions:" } },
    { type: "text", content: { de: "• Verbrennungsgefahr: Achte darauf, dass du die Oberfläche nicht direkt berührst.\n• Beschädigungsgefahr: Verwende nur geeignetes Kochgeschirr.\n• Kurzschlussgefahr: Kein Wasser in das Gerät eindringen lassen.", en: "• Burn risk: Do not touch the surface directly.\n• Damage risk: Only use suitable cookware.\n• Short circuit risk: Do not let water enter the device." } },
    { type: "heading", content: { de: "6. Reinigung und Wartung:", en: "6. Cleaning and maintenance:" } },
    { type: "text", content: { de: "Vor der Reinigung: Trenne das Gerät vom Stromnetz und lasse es vollständig abkühlen. Wische die Kochfläche mit einem feuchten Tuch ab.", en: "Before cleaning: Disconnect the device from the power supply and let it cool down completely. Wipe the cooking surface with a damp cloth." } },
    { type: "heading", content: { de: "7. Technische Daten:", en: "7. Technical data:" } },
    { type: "text", content: { de: "• Leistung: 3.400 W\n• Kochfläche Durchmesser: 22 cm\n• Schutzklasse: II\n• Automatische Abschaltung: nach 120 Minuten", en: "• Power: 3,400 W\n• Cooking surface diameter: 22 cm\n• Protection class: II\n• Automatic shut-off: after 120 minutes" } },
  ],
};

export { instructionContent };

export default function AnleitungDetailPage() {
  const { t, langPrefix } = useI18n();
  const pathname = window.location.pathname;
  const slug = pathname.split("/").filter(Boolean).pop() || "";

  const instruction = instructions.find((i) => i.id === slug);
  const content = instructionContent[slug] || [];

  if (!instruction) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-serif">{t({ de: "Anleitung nicht gefunden", en: "Guide not found" })}</h1>
        <Link to={`${langPrefix}/anleitungen`} className="text-primary hover:underline mt-4 inline-block">
          {t({ de: "Zurück zu Anleitungen", en: "Back to Instructions" })}
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Image */}
      <section className="relative h-[40vh] min-h-[300px]">
        <div className="absolute inset-0">
          <img src={instruction.image} alt={t(instruction.title)} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <span className="text-xs font-medium text-background/80 uppercase tracking-wider font-sans">
              {instruction.category === "apartments" ? "Apartments" : t({ de: "Standort & Umgebung", en: "Location & Area" })}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-background mt-2">
              {t(instruction.title)}
            </h1>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to={`${langPrefix}/anleitungen`} className="inline-flex items-center gap-2 text-sm text-primary hover:underline transition-smooth">
          <ArrowLeft className="w-4 h-4" />
          {t({ de: "Alle Anleitungen", en: "All Instructions" })}
        </Link>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {content.map((block, i) => {
            if (block.type === "image") {
              return (
                <div key={i} className="rounded-xl overflow-hidden shadow-card">
                  <img src={block.content as string} alt="" className="w-full h-auto" loading="lazy" />
                </div>
              );
            }
            if (block.type === "heading") {
              const c = block.content as { de: string; en: string };
              return (
                <h3 key={i} className="text-xl font-serif font-bold text-foreground mt-8">
                  {t(c)}
                </h3>
              );
            }
            if (block.type === "quote") {
              const c = block.content as { de: string; en: string };
              return (
                <blockquote key={i} className="bg-card border-l-4 border-primary rounded-r-xl p-6 shadow-card">
                  {t(c).split("\n\n").map((p, j) => (
                    <p key={j} className={`text-foreground ${j > 0 ? "mt-3" : ""}`}>{p}</p>
                  ))}
                  {block.href && block.linkText && (
                    <a
                      href={block.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-2 mt-4 text-sm font-medium text-primary-foreground bg-primary rounded-lg transition-smooth hover:opacity-90"
                    >
                      {t(block.linkText)}
                    </a>
                  )}
                </blockquote>
              );
            }
            // text
            const c = block.content as { de: string; en: string };
            return (
              <div key={i}>
                {t(c).split("\n\n").map((p, j) => (
                  <p key={j} className={`text-muted-foreground leading-relaxed ${j > 0 ? "mt-3" : ""}`}>{p}</p>
                ))}
              </div>
            );
          })}
        </div>

        {/* PDF Downloads */}
        {instruction.pdf && (
          <div className="mt-12 bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-lg font-semibold text-foreground font-sans mb-2">
              {t({ de: "Download als PDF", en: "Download as PDF" })}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t({ de: "Lade die vollständige Anleitung als PDF herunter und habe alle wichtigen Infos jederzeit griffbereit.", en: "Download the complete guide as a PDF and have all important information at your fingertips at any time." })}
            </p>
            <div className="flex flex-wrap gap-3">
              {instruction.pdf.de && (
                <a href={instruction.pdf.de} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg transition-smooth hover:opacity-90">
                  📄 PDF Deutsch
                </a>
              )}
              {instruction.pdf.en && (
                <a href={instruction.pdf.en} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg transition-smooth hover:opacity-90">
                  📄 PDF English
                </a>
              )}
            </div>
          </div>
        )}
      </article>

      {/* More Instructions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground">
            {t({ de: "Weitere Anleitungen", en: "More Instructions" })}
          </h2>
          <Link to={`${langPrefix}/anleitungen`} className="text-sm text-primary hover:underline transition-smooth">
            {t({ de: "Alle zeigen", en: "Show all" })}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructions.filter((i) => i.id !== slug).slice(0, 3).map((inst) => (
            <Link
              key={inst.id}
              to={`${langPrefix}/anleitungen-post/${inst.id}`}
              className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth block"
            >
              <div className="aspect-video overflow-hidden">
                <img src={inst.image} alt={t(inst.title)} className="w-full h-full object-cover transition-smooth group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4 bg-background">
                <span className="text-xs font-medium text-primary uppercase tracking-wider mb-1 block font-sans">
                  {inst.category === "apartments" ? "Apartments" : t({ de: "Standort & Umgebung", en: "Location & Area" })}
                </span>
                <h3 className="text-base font-semibold text-foreground font-sans">{t(inst.title)}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
