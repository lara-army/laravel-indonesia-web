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
    label: string,
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
        label: "dominos' GitHub",
      }, {
        Icon: IconBrandX,
        url: 'https://x.com/dominosaurs_',
        label: "dominos' X",
      }
    ]
  }, {
    name: 'pow',
    avatarSrc: 'https://github.com/kimmyxpow.png',
    title: 'Insinyur Desain',
    links: [
       {
        Icon: IconBrandGithub,
        url: 'http://github.com/kimmyxpow',
        label: "pow's GitHub",
      }, {
        Icon: IconBrandX,
        url: 'https://x.com/kimmyxpow',
        label: "pow's X",
      }
    ]
  }
]

export default honorableMembers
