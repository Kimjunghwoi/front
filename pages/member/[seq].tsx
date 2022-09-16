import type {Member} from '../interface/member'
import {useRouter} from "next/router";
import useSwr from "swr";
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

             <div>
                 <h2>
                     {data.email}
                 </h2>
                 <p>
                     {data.nickname}
                 </p>
             </div>

    );
}
