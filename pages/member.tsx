import type {Member} from './interface/member'
import React from "react"
import useSwr from 'swr'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const fetcher = (url: string) => fetch(url,{
    method: "GET",
    headers: {
        "ContentType": "application/json"
    }
}).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr<Member[]>('/api/members', fetcher);

  if (error) return <div>Failed to load member</div>
  if (!data) return <div>Loading...</div>

  return (

        <> <p className={styles.description}>
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
        </>


  )
}
