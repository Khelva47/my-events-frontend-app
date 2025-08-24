import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import PageHeader from "@/components/PageHeader"
import ProfileTabs from "@/components/ProfileTabs"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader title="My Profile" description="Manage your account and view your tickets" />
        <ProfileTabs />
      </div>

      <Footer />
    </div>
  )
}
