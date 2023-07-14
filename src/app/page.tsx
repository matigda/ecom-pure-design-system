import Image from 'next/image'

const ProductCard = () => {
  return (
      <div className="flex flex-col gap-y-1 border-2 border-black px-1 py-1">
        <div className="bg-gray-300 aspect-[300/310]">image</div>
        <div className="border-2 border-black">product name</div>
        <div className="border-2 border-black">stock</div>
        <div className="border-2 border-black">price</div>
      </div>
  );
}

const Section = ({children, classNames=''}: {children: any, classNames: string}) => {
  return (
      <section className={`border-2 border-black ${classNames}`}>{children}</section>
  )
}


const MockFilter = () => {
    return (
        <div className={'border-2 border-dark-grey flex px-5 py-2 rounded-xl pr-12'}>
            Filter
        </div>
    )
}
const MockActiveFilter = () => {
    return (
        <div className={'leading-none border-2 border-dark-grey flex px-2 py-0 rounded-xl  items-center gap-2'}>
            Active Filter
            <div className={'cursor-pointer leading-none flex items-center border-2 border-black rounded-full px-[2px] h-[16px] text-[11px] font-bold'}>x</div>
        </div>
    )
}

export default function Home() {
  // @ts-ignore
    return (
      <main className={'flex flex-col gap-2'}>

        <Section classNames={'flex justify-between px-10 bg-gray-100'}>
            <div>logo</div>
            <div>input</div>
            <div>button</div>
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
        </Section>

        <Section classNames={'flex flex-col gap-2 px-10'}>
            <Section classNames={'flex py-2 px-2'}>Home `{'>'}` Category `{'>'}` Subcategory </Section>
            <Section classNames={'flex py-2 px-2'}>Header 1</Section>
            <Section classNames={'flex py-2 px-2 gap-2'}><MockFilter /><MockFilter /><MockFilter /><MockFilter /></Section>
        </Section>


        <Section classNames={'flex items-center gap-2 px-10'}>
            Clear all
            <MockActiveFilter />
            <MockActiveFilter />
            <MockActiveFilter />
        </Section>


        <Section classNames={'grid grid-cols-4 gap-8 px-10 py-2'}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Section>

      </main>
  )
}
