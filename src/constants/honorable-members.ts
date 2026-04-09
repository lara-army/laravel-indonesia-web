import type { JSX } from "astro/jsx-runtime"
import IconBrandGithub from "~icons/tabler/brand-github";
import IconBrandX from "~icons/tabler/brand-x";

export interface HonorableMember {
  name: string,
  avatarSrc: string,
  title: string,
  links: {
    Icon: JSX.Element,
    url: string,
  }[]

}

const honorableMembers: HonorableMember[] = [
  {
    name: 'dominos',
    avatarSrc: 'https://github.com/dominosaurs.png',
    title: 'Inisiator',
    links: [
      {
        Icon: IconBrandGithub,
        url: 'https://github.com/dominosaurs',
      }, {
        Icon: IconBrandX,
        url: 'https://x.com/dominosaurs_',
      }
    ]
  }, {
    name: 'pow',
    avatarSrc: 'https://github.com/powxenv.png',
    title: 'Insinyur Desain',
    links: [
      {
        Icon: IconBrandGithub,
        url: 'http://github.com/powxenv',
      }, {
        Icon: IconBrandX,
        url: 'https://x.com/powxenv',
      }
    ]
  }
]

export default honorableMembers
