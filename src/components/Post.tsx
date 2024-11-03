import { FormComents } from "./FormComents";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Post() {
  return (
    <>
      <div className="w-3/6 max-h-screen bg-zinc-800 rounded-xl flex flex-col p-10">
        <div className="flex">
          <img
            src="darth.jpg"
            alt="darth vader serio"
            className="w-16 h-16 border-2 border-sky-500 rounded-xl"
          />
          <div className="flex flex-col px-3">
            <h2 className="text-white font-bold">Darth Vader</h2>
            <p className="text-zinc-500">Sith</p>
          </div>
        </div>
        <div className=" flex flex-col py-5 gap-2">
          <p className="text-white">
            Às vezes, é necessário usar o lado negro da força!
          </p>
          <p className="text-sky-500">#DarkSide #SithLife</p>
        </div>

        <Separator className="bg-zinc-600 my-4" />
        <div className="py-5">
          <FormComents />
        </div>
        <Button className="w-36 h-10 bg-sky-500">Enviar</Button>
      </div>
    </>
  );
}
