import Featured from '@/components/Featured'
import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[#000]">
      <Slider/>
      <Featured/>
    </main>
  )
}
