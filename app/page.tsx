import HeroSection from '@/components/HeroSection'
import { PinkSection } from '@/components/PinkSection'
import { WaveSeparator } from '@/components/WaveSeparator'

export default function Page() {
  return (
    <main className="relative isolation-isolate">
      <HeroSection />
      <WaveSeparator />
      <PinkSection />
    </main  >
  )
}
