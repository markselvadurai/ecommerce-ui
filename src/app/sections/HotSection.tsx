import { Hotcard } from "../components/ui/hot-card";

export const HotSection = () => {
    const cards = [
        {
            cardTitle: "Ugly Shoe 1",
            cardDescription: "This is a description of the ugly shoe",
            cardImage: "/uglyshoe.jpg",
            cardLink: "/uglyshoe",
            tag: "Trending"
        },
        {
            cardTitle: "Ugly Shoe 2",
            cardDescription: "This is a description of the ugly shoe",
            cardImage: "/uglyshoe.jpg",
            cardLink: "/uglyshoe",
            tag: "Upcoming"
        },
        {
            cardTitle: "Ugly Shoe 3",
            cardDescription: "This is a description of the ugly shoe",
            cardImage: "/uglyshoe.jpg",
            cardLink: "/uglyshoe",
            tag: "Flashy"
        },
    ]
    return (
        <div className="container justify-self-center py-8">
            <h2 className="text-xl relative z-20 md:text-3xl lg:text-5xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          What's{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-b py-4 from-white to-red-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Hot</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-b from-white to-red-500 py-4">
              <span className="">Hot</span>
            </div>
          </div>
          {" "}Right now
        </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3" id="hot">
                {cards.map((card, index) => (
                    <Hotcard key={index} cardTitle={card.cardTitle} cardDescription={card.cardDescription} cardImage={card.cardImage} cardLink={card.cardLink} tag = {card.tag} className="md:col-span-1" />
                ))}
            </div>
        </div>
    )
}