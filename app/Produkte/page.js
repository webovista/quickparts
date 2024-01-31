import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="bg-slate-100 w-full overflow-hidden relative">
      <Navbar />
      <section className="min-h-screen p-10 pt-32 text-black">
        <h1 className="text-2xl mb-1">Produkte und Lösungen</h1>
        <h1 className="text-2xl mb-8">für Ihren Lkw und Anhänger.</h1>
        <ul>
          <li>Scheinwerfer und Leuchten(Beleuchtung)</li>
          <li>Motorkupplungen, Stoßdämpfer, Schwungscheiben</li>
          <li>
            Zuggabeln, Standard und längen-/höhenverstellbar, Zuggabelzubehör
          </li>
          <li>Bremstrommeln, Bremsbeläge,Bremsscheiben</li>
          <li>Gelenkwellen und Zubehör</li>
          <li>Achsstreben, Dreieckslenker, Spur- und Lenkstangen</li>
          <li>Kegelrollenlager, bzw. kpl. Lagersätze</li>
          <li>Achsdichtsätze, Wellendichtringe, Impulsringe(Polräder)</li>
          <li>
            Sattelkupplungen, Stützwinden, Höheneinstell- und
            Verschiebeeinrichtungen für Sattelkupplungen, Königszapfen,
            Montageplatten
          </li>
          <li>
            Verschleißteile für Anhängerachsen und -aggregate, Komplettachsen
            und -aggregate aller führenden Hersteller, z.B. BPW, SAF, SAE,
            Trailor, Fruehauf, ROR
          </li>
          <li>Luftfederung für Nutzfahrzeuge, Luftfederbälge</li>
          <li>
            {" "}
            Ersatzteile für die Druckluftbremsanlage(Ventile, Kompressoren,
          </li>
          <li>
            {" "}
            Luftkessel usw.) Fahrzeugbauteile: Verschlüsse, Profile, EDSCHA &
          </li>
          <li> Curtainsider-Teile, Teile für KRONE- & Schmitz-Aufbauten</li>
          <li>
            {" "}
            Auflaufeinrichtungen PKW-Anhänger Anhängekupplungen LKW + PKW und
          </li>
          <li>
            {" "}
            landwirtschaftliche Fahrzeuge ABS- und EBS-Teile Elektrik und
            Elektronik
          </li>
          <li>
            {" "}
            Blatt- und Parabelfedern für Motorwagen und Anhänger/Auflieger
            Fahrer-
          </li>
          <li>
            {" "}
            und Beifahrersitze Auspuffanlagen Gefahrgutausrüstungen Filter für
            LKW,
          </li>
          <li>
            {" "}
            PKW, sowie für Bau- und Arbeitsmaschinen Verschleißteile aus dem
          </li>
          <li> Agrarbereich Schneeketten, Tanks, Werkzeugkästen, Kotflügel,</li>
          <li>
            {" "}
            Fahrerhausteile Batterien für Versorgung und Starter Werkzeuge,
          </li>
          <li> Arbeitskleidung Werkstattlösungen und Ausstattung - u.v.m. -</li>
        </ul>
        <p className="mt-6">Zu unserer Herstellerübersicht bottom</p>
      </section>
      <ContactUs />
      <Footer />
    </main>
  );
};

export default page;
