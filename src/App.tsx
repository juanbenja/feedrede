import { CardAside } from "./components/CardAside";
import { Post } from "./components/Post";
import { Title } from "./components/Title";



export default function App() {
  return (
    <>
     <Title/>
     <div className="flex justify-center gap-8 items-start py-8 bg-zinc-900 h-screen w-screen">
     <CardAside/>
     <Post/>
     </div>
    </>
  );
}
