
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function CardAside() {
  return (
      <div className=" bg-zinc-800 flex flex-col h-72 w-60 rounded-xl justify-start">
        <header>
          <img
            src="darth2.jpg"
            alt="darth vader"
            className="h-20 w-full rounded-xl"
          />
        </header>
        <main className="flex flex-col items-center rounded-xl gap-2 relative bottom-6">
          <img
            src="darth.jpg"
            alt="darth vader serio"
            className="w-16 rounded-xl border-2 border-sky-600 "
          />
          <h2 className="font-bold text-white">Darth Vader</h2>
          <p className="text-zinc-500 text-lg">Sith</p>
        </main>
        <Separator orientation="horizontal" className="bg-zinc-700"/>
        <footer className="flex justify-center items-center py-5">
          <Button className="rounded-xl border-2 border-sky-600 text-sky-600 w-3/6 h-full hover:bg-sky-600 hover:text-black">
            Editar seu perfil
          </Button>
        </footer>
      </div>
  );
}
