import type { Member } from './interface/member'
import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr<Member[]>('/api/member', fetcher)

  if (error) return <div>Failed to load member</div>
  if (!data) return <div>Loading...</div>

  return (
      <ul>
        {data.map((member) => (
            <li key={member.seq}>
              <Link href="/member/[seq]" as={`/member/${member.seq}`}>
                {`Member ${member.seq} ${member.email} ${member.nickname}`}
              </Link>
            </li>
        ))}
      </ul>
  )
}
