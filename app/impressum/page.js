import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="bg-slate-100 w-full overflow-hidden relative">
      <Navbar />
      <section className="min-h-screen p-10 pt-32 text-black">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>
        QuickParts GmbH <br /> Geschäftsführer <br /> Wahab Baouchi <br />{" "}
        Adresse <br /> QUICK PARTS GmbH <br />
        Europaallee 33 <br /> D-67657 Kaiserslautern <br /> +49 631 5600 3025{" "}
        <br />
        info@quickpartsgmbh.com <br /> www.quickpartsgmbh.com <br /> ID TAX
        :19/657/41427 <br /> VAT Nbr: DE333786943 <br /> HRB :32963 Amtsgericht
        Kaiserslautern
        <br />
        <h5>MARKEN UND LOGOS / VERWENDUNG DER INHALTE</h5>
        <p>
          Wenn nicht anders angegeben, sind alle auf den Internet-Seiten der
          QUICK PARTS GmbH verwendeten Logos und Marken gesetzlich geschützte
          Warenzeichen der jeweiligen Unternehmen.
        </p>
        <p>
          Die Verwendung von Inhalten der Webseiten der QUICK PARTS GmbH in
          jeglicher Form unterliegt der ausdrücklichen schriftlichen Genehmigung
          der QUICK PARTS GmbH oder der jeweiligen Rechteinhaber.
        </p>
        <br />
        <h5 className="text-xl">HAFTUNGSAUSSCHLUSS</h5>
        <p>
          Die QUICK PARTS GmbH prüft und aktualisiert die Informationen auf
          ihren Webseiten ständig. Trotz aller Sorgfalt können sich die Daten
          inzwischen verändert haben. Eine Haftung oder Garantie für die
          Aktualität, Richtigkeit und Vollständigkeit der zur Verfügung
          gestellten Informationen kann daher nicht übernommen werden.
        </p>
        <p>
          Gleiches gilt auch für alle anderen Internet-Seiten, auf die mit
          Hyperlinks verwiesen wird. Die QUICK PARTS GmbH ist für den Inhalt der
          Internet-Seiten, die aufgrund einer solchen Verbindung erreicht
          werden, nicht verantwortlich.
        </p>
        <p>
          Des Weiteren behält sich die QUICK PARTS GmbH das Recht vor,
          Änderungen oder Ergänzungen der bereitgestellten Informationen
          vorzunehmen.
        </p>
      </section>
      <ContactUs />
      <Footer />
    </main>
  );
};

export default page;
