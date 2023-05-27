import Image from 'next/image';
import { Inter } from 'next/font/google';
import { CountUp } from 'use-count-up';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import React from "react";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [counterOn, setCounterOn] = useState(false);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">pages/index.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >
      <h2 className="text-5xl">
        {counterOn && <CountUp isCounting start={0} end={1320} duration={3.2} /> }
      
      </h2>
      </ScrollTrigger>

      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt eius repellendus ipsa, culpa illo nam cum placeat a perferendis aliquam alias reiciendis, iste unde beatae itaque incidunt optio ab adipisci! Voluptates possimus pariatur dolore dignissimos qui provident ex molestiae in magni quibusdam. Ducimus nisi esse consectetur voluptas, tempore nesciunt aliquid voluptatum corrupti! Eos praesentium quos odit est ullam exercitationem repudiandae placeat, hic reprehenderit suscipit quasi inventore quas nesciunt, odio adipisci ipsa accusamus illum rerum voluptatum consequatur tempora! Quae, odio. Eos doloremque veniam aliquam, eum ipsa minus autem neque necessitatibus quae quas magni obcaecati eius blanditiis exercitationem labore dolore molestiae quis, debitis vitae esse quibusdam? Cumque impedit hic temporibus omnis a, voluptas unde incidunt ratione, iusto possimus eos et rerum magnam quos nesciunt similique accusamus obcaecati ex? Sapiente deserunt assumenda voluptate. Velit ducimus cupiditate enim ad distinctio dolor, praesentium voluptate illo, quisquam, officia aliquid? Doloremque sunt omnis vel consequatur recusandae, rem ipsa iste perspiciatis voluptate hic officiis explicabo quas corrupti quia fugiat ipsum fuga harum non molestias architecto! Laborum adipisci nemo cupiditate harum, ab magnam quo facere dolor, molestiae, explicabo maxime nostrum veritatis aliquam eligendi? Eum, voluptatum consequatur, atque quos inventore rerum hic omnis libero minima officiis modi, aliquid consectetur excepturi. Aliquam, omnis consequuntur modi illum recusandae ullam, eum, obcaecati facere aut dolore repellat magni incidunt laborum nihil vero accusantium doloremque voluptates? Ipsam necessitatibus libero odio, placeat qui, temporibus cupiditate praesentium suscipit reiciendis omnis nihil esse nesciunt repellat autem dolores eaque nisi veritatis, laudantium sapiente ea consequuntur obcaecati nemo. Earum sit corrupti reiciendis dicta dolores porro quibusdam eum natus, nesciunt debitis! A reiciendis, ducimus dignissimos maiores distinctio error doloribus consequuntur, fuga at quae quas nisi quis commodi possimus repudiandae ex dolor rem! Eveniet aperiam aspernatur ratione fugiat eius mollitia, quo nostrum maiores libero sapiente ea sit, consequuntur, saepe temporibus dolores fuga voluptates porro voluptatibus nemo fugit? Incidunt, similique explicabo. Praesentium sunt iste eius, blanditiis obcaecati harum hic minus dicta aspernatur sed excepturi voluptate minima id, nisi facere. Temporibus maxime facilis unde ratione odio inventore saepe officiis accusantium atque quibusdam animi, libero in modi similique rerum laboriosam ea sed perferendis exercitationem recusandae iste explicabo est fuga accusamus? Temporibus repellendus expedita distinctio quas perferendis dolorum a laborum vel, minima sed est officia natus dolores libero corrupti tempore tempora obcaecati placeat illo, neque vero. Fuga quia ipsam beatae quod ratione iure quidem voluptates voluptatibus provident nisi excepturi nesciunt reprehenderit molestiae, suscipit sunt a qui cumque cupiditate ut commodi nulla! Architecto perferendis sunt in, maiores voluptatem neque suscipit error voluptatum porro aut saepe ullam eligendi nemo autem amet facilis harum vero quia recusandae doloribus cupiditate tenetur ut! Fugiat tempore aliquid voluptates illum dolore, aspernatur recusandae ex vero dignissimos excepturi nam dolor? Obcaecati laudantium neque, nobis earum cupiditate consequatur tenetur atque. Facere, laudantium a exercitationem soluta repellendus accusantium sed distinctio! Vero repellendus nobis sunt esse perspiciatis, maiores iste. Ipsam quae reprehenderit quidem eos rerum quod. Praesentium libero perspiciatis aut facilis voluptatum eaque explicabo, porro in dolorem veritatis perferendis omnis debitis molestiae recusandae odit repudiandae fuga asperiores quibusdam architecto doloribus minima? Modi quidem est dolores voluptatibus assumenda optio eligendi culpa. Odio illo laborum eveniet fugit dolorem dolorum ad optio unde laboriosam! Quidem ducimus voluptate esse dolores autem, fuga maxime architecto minima obcaecati dolorem earum quasi nulla accusantium itaque impedit recusandae iure explicabo fugit suscipit. Nisi exercitationem tenetur cupiditate error aperiam veniam, sequi, perferendis consequuntur magni esse temporibus minus praesentium ab officiis maiores voluptates iusto explicabo dolorum voluptatum voluptatibus. Unde maxime tenetur omnis, cum harum ullam impedit sed minus debitis, nesciunt culpa ipsa alias explicabo itaque. Ipsa eius ratione cum velit dolorem laboriosam architecto numquam minima ad obcaecati, officia perspiciatis eum molestiae voluptatum commodi, corporis error! Vitae earum rem, repellendus reiciendis asperiores optio placeat dignissimos soluta delectus perferendis illum, sunt quos cum vel eius? Ullam obcaecati quae a, repellendus iure at, quis commodi cumque beatae laboriosam facilis! Est cumque repellendus, soluta dolorum nobis suscipit perferendis deserunt sapiente expedita facere quia magni ad? Minima, quod magni. Quae unde iste perferendis commodi eum porro, itaque sapiente tempore blanditiis obcaecati animi enim, a quod accusantium laborum quasi dolor error? Recusandae, illo possimus aliquam illum ea omnis nulla quam atque, corporis facilis laborum ipsa sapiente asperiores facere labore! Voluptatem voluptate sed ad laboriosam, qui ducimus aspernatur error tempore ipsum ipsa quibusdam laudantium quam autem, assumenda facere. Molestiae voluptate quis neque deleniti, natus culpa? Deserunt pariatur atque tempore, dolor, facere repellendus dignissimos, sunt consectetur officia ullam doloribus? Distinctio, aliquam inventore, doloribus laboriosam, temporibus tempora necessitatibus nulla maiores odio sunt iusto quasi quibusdam fuga in numquam eum sit. Voluptas qui, sed nesciunt nostrum iusto nobis veniam accusamus. Rem, voluptas expedita mollitia aliquam accusamus sequi temporibus nam quae consequuntur doloribus consectetur omnis esse! Nisi maiores iure officia ipsam at exercitationem quod aliquid? Possimus, a saepe dolor dignissimos molestiae aliquam in nisi quis nulla laborum mollitia non incidunt velit similique vel voluptatum alias? Provident illo delectus minus dolorum incidunt aut, nulla quidem ea magni placeat quaerat minima voluptatum cumque odio nihil blanditiis ullam, accusamus iste? Unde obcaecati nemo, ipsum quaerat, tenetur quas saepe dolorum impedit esse perferendis velit! Unde tenetur earum quod tempore eius, voluptatibus corporis possimus dolorum dignissimos nesciunt optio distinctio ab, non impedit sunt explicabo illo eaque, laboriosam deleniti eum quidem odit esse inventore quisquam. Modi, praesentium nesciunt. Officiis ut quia aliquam quasi itaque consequuntur, obcaecati ipsa sunt necessitatibus nostrum inventore voluptate laborum magni laudantium repudiandae minima enim facilis molestiae assumenda, vitae, nobis deserunt doloremque? Eaque animi hic voluptate repellat, voluptas ab architecto necessitatibus voluptates soluta. Error illum praesentium nobis rerum dolorem ab, quaerat harum mollitia, at vel voluptatibus, nihil hic repellendus minus perspiciatis sapiente autem! Voluptates neque enim velit aliquid veniam dignissimos sapiente maxime sint. Laborum blanditiis minima labore fugit sint rem, voluptates impedit aliquam, delectus alias assumenda culpa, animi quaerat beatae molestiae totam! Magni consectetur sit maiores ad consequatur repellendus magnam laudantium impedit similique amet, natus nobis quae optio cum ab eius provident, aliquam maxime aperiam numquam. Maiores suscipit aliquid omnis doloremque ducimus. Quae et aperiam excepturi distinctio placeat rem delectus similique.</p>
      
      <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >
      <h2 className="text-5xl">
        {counterOn && <CountUp isCounting start={0} end={1320} duration={3.2} /> }
      
      </h2>
      </ScrollTrigger>

    </main>
  )
}
