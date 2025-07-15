export default function TestLayoutPage() {
    return (
      // Hlavný kontajner, ktorý umožňuje vrstvenie
      <div className="relative">
        {/* === HORNÁ, TMAVÁ SEKCIA === */}
        {/* Tento div je VPREDU (z-20) a jeho úlohou je vytvoriť priestor pre vrstvenie */}
        <div className="relative z-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-8 pt-8 pb-48">
            {/* Mriežka pre 3 hlavné články */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[40rem]">
              
              {/* ĽAVÁ ČASŤ - HLAVNÝ ČLÁNOK (červená kocka) */}
              <div className="lg:col-span-2 h-full bg-red-500/80 rounded-lg flex items-center justify-center text-4xl font-bold">
                VEĽKÝ ČLÁNOK
              </div>

              {/* PRAVÁ ČASŤ - DVA MENŠIE ČLÁNKY (zelená a modrá) */}
              <div className="lg:col-span-1 flex flex-col gap-8">
                <div className="flex-1 bg-green-500/80 rounded-lg flex items-center justify-center text-2xl font-bold">
                  MENŠÍ ČLÁNOK 1
                </div>
                <div className="flex-1 bg-blue-500/80 rounded-lg flex items-center justify-center text-2xl font-bold">
                  MENŠÍ ČLÁNOK 2
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* === SPODNÁ, BIELA SEKCIA === */}
        {/* Tento div je VZADU (z-10) a je posunutý HORE (-mt-X), aby sa podsunul */}
        <div className="relative z-10 bg-white -mt-128">
          <div className="pt-80">
            <main className="max-w-screen-xl mx-auto px-4 sm:px-8 py-8">
              <h2 className="text-4xl font-bold text-black">
                Tu začína obsah na bielom pozadí
              </h2>
              <p className="text-black mt-4">
                (Najnovšie správy, Populárne správy, atď.)
              </p>
            </main>
          </div>
        </div>
      </div>
    );
  }