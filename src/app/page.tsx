import Link from 'next/link';

export default function Home (){
  return (
    <>
      <h1> Country List:</h1>
      <ul>
        <li><Link href="/country/Pakistan"> Pakistan </Link> </li>
        <li><Link href="/country/Turiye"> Turkiye </Link></li>
        <li><Link href="/country/Iran"> Iran </Link></li>
        <li><Link href="/country/Iraq"> Iraq </Link></li>
        <li><Link href="/country/Bangladesh"> Bangladesh </Link></li>

      </ul>
    </>

  )
}