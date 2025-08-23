import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import PageHeader from "@/components/PageHeader"
import CreateEventForm from "@/components/CreateEventForm"

export default function CreateEventPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader title="Create New Event" description="Fill in the details to create your event" />
        <CreateEventForm />
      </div>

      <Footer />
    </div>
  )
}
