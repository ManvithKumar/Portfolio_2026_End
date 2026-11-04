import angularSvg from '../assets/svg/angular-svgrepo-com(1).svg'
import dockerSvg from '../assets/svg/docker-logo-svgrepo-com.svg'
import gitSvg from '../assets/svg/git-svgrepo-com(1).svg'
import graphqlSvg from '../assets/svg/graphql-svgrepo-com.svg'
import javaSvg from '../assets/svg/java-svgrepo-com.svg'
import jenkinsSvg from '../assets/svg/jenkins-svgrepo-com.svg'
import kubernetesSvg from '../assets/svg/kubernetes-svgrepo-com.svg'
import nodeSvg from '../assets/svg/node-js-svgrepo-com.svg'
import reactSvg from '../assets/svg/reactjs-svgrepo-com.svg'
import sqlSvg from '../assets/svg/sql-database-sql-azure-svgrepo-com.svg'
import type { HeroThemeColor } from './heroIconColors'

export const heroFeaturedTech = {
  java: { src: javaSvg, alt: 'Java', color: 'primary' as HeroThemeColor },
  node: { src: nodeSvg, alt: 'Node.js', color: 'secondary' as HeroThemeColor },
} as const

export type HeroScatterIcon = {
  id: string
  src: string
  alt: string
  /** Omit to keep the SVG’s original brand colors */
  color?: HeroThemeColor
  top: string
  left?: string
  right?: string
  size: string
  yRange: [string, string]
  rotateRange: [number, number]
}

const scatterSize = 'clamp(1.85rem, 3vw, 2.45rem)'

/**
 * Four scattered icons per side (8 total) + large Java/Node = 5 visual elements per flank.
 * Vertical slots: above and below the large center logos to avoid overlap.
 */
export const heroScatterTech: HeroScatterIcon[] = [
  // —— Left (4) ——
  {
    id: 'react',
    src: reactSvg,
    alt: 'React',
    top: '15%',
    left: '7%',
    size: scatterSize,
    yRange: ['0%', '34%'],
    rotateRange: [-8, 6],
  },
  {
    id: 'angular',
    src: angularSvg,
    alt: 'Angular',
    top: '26%',
    left: '4%',
    size: scatterSize,
    yRange: ['0%', '-22%'],
    rotateRange: [5, -10],
  },
  {
    id: 'graphql',
    src: graphqlSvg,
    alt: 'GraphQL',
    top: '64%',
    left: '5%',
    size: scatterSize,
    yRange: ['0%', '26%'],
    rotateRange: [-6, 9],
  },
  {
    id: 'docker',
    src: dockerSvg,
    alt: 'Docker',
    top: '76%',
    left: '8%',
    size: scatterSize,
    yRange: ['0%', '-18%'],
    rotateRange: [7, -7],
  },
  // —— Right (4) ——
  {
    id: 'git',
    src: gitSvg,
    alt: 'Git',
    top: '15%',
    right: '7%',
    size: scatterSize,
    yRange: ['0%', '28%'],
    rotateRange: [8, -8],
  },
  {
    id: 'sql',
    src: sqlSvg,
    alt: 'SQL',
    color: 'primary',
    top: '26%',
    right: '4%',
    size: scatterSize,
    yRange: ['0%', '-24%'],
    rotateRange: [-4, 10],
  },
  {
    id: 'kubernetes',
    src: kubernetesSvg,
    alt: 'Kubernetes',
    top: '64%',
    right: '5%',
    size: scatterSize,
    yRange: ['0%', '-20%'],
    rotateRange: [6, -11],
  },
  {
    id: 'jenkins',
    src: jenkinsSvg,
    alt: 'Jenkins',
    top: '76%',
    right: '8%',
    size: scatterSize,
    yRange: ['0%', '22%'],
    rotateRange: [-7, 8],
  },
]
