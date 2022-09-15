import type { Member } from '../interface/member'
import { useRouter } from "next/router";
import useSwr from "swr";
import styles from '../../styles/Home.module.css'
import CreateHead from "../layout/head";
import ResponsiveAppBar from "../layout/top";
import Image from "next/image";
import React from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MemberPage(){
    const router = useRouter();

    const {data, error} = useSwr<Member>(
        router.query.seq ? `/api/members/${router.query.seq}` : null,
        fetcher
    )

    if(error) return <div>Failed to load member</div>
    if(!data) return <div>Loading...</div>


return (
     <div className={styles.container}>
         <CreateHead/>
         <main className={styles.main}>
             <ResponsiveAppBar/>
             <div>
                 <h2>
                     {data.email}
                 </h2>
                 <p>
                     {data.nickname}
                 </p>
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
    );
}
