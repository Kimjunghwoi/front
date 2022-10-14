import { useRouter } from 'next/router';
import { useEffect } from 'react';

import LoginNaver from './loginNaver';

function login() {
    const router = useRouter();

    const token = router.query.access_token;
    //http://localhost:3000/login#access_token=AAAAOS7r2azbfmqULwKYuwR3LtjUfFgof6FBjWNwTyexT5El_V3145PTETX73TqZuOqOnpe88LEd9fLmTDZoRf7DeqQ&state=e45c6e65-937d-452f-9ae6-145ddbdddd7f&token_type=bearer&expires_in=3600
    useEffect((message?: any) => {
        //access_token이 있으면.. back으로 보내서 계정 정보 확인 및 가입..처리..
        if (window.location.href.includes('access_token')) {
            // alert(message);
            console.log("login success : ", window.location.href.toString());
            window.localStorage.setItem('token', window.location.href.split('=')[1].split('&')[0] ?? 'none');
            // router.push('/').then(r => );
        }
    }, [])

    return (
        <div>
            <LoginNaver></LoginNaver>
        </div>
    )
}