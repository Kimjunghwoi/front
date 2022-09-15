import type { Member } from './interface/member'
import React from "react"
import useSwr from 'swr'
import Link from 'next/link'
import {inspect} from "util";
import styles from '../styles/Home.module.css'
import CreateHead from "./layout/head";
import ResponsiveAppBar from "./layout/top";
import Image from "next/image";

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr<Member[]>('/api/members', fetcher);

  if (error) return <div>Failed to load member</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>
     <CreateHead/>
     <main className={styles.main}>
         <ResponsiveAppBar/>
         <p className={styles.description}>
             Member List
         </p>

         <div className={styles.grid}>
             <ul>
                 {data.map((member) => (
                     <li key={member.seq}>
                         <Link href="/member/[seq]" as={`/member/${member.seq}`}>
                             {`Member ${member.seq} ${member.email} ${member.nickname}`}
                         </Link>
                     </li>
                 ))}
             </ul>
         </div>

     </main>
     <footer className={styles.footer}>
         <a
                 href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                 target="_blank"
                 rel="noopener noreferrer"
             >
             Powered by{' '}
             <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
             </span>
         </a>
     </footer>
    </div>
  )
}
