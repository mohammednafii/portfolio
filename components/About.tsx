import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import {gridItems} from "@/data/index"
const About = () => {
  return (
    <section id="about">
    <BentoGrid className="w-full py-20">
      {gridItems.map((item, i) => (
        <BentoGridItem
        //@ts-ignore
          id = {item.id}
          key={i}
          title={item.title}
          description={item.description}
          // remove icon prop
          // remove original classname condition
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImg={item.spareImg}
        />
      ))}
    </BentoGrid>
  </section>
  )
}

export default About