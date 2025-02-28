import { createFileRoute } from '@tanstack/react-router'
import SignIn from '../components/SignIn/SignIn'
import Section from '../ui/Section/Section'

export const Route = createFileRoute('/login')({
  component: Index,
})

function Index() {
  return (
    <Section className="justify-center">
      <SignIn />
    </Section>
  )
}
