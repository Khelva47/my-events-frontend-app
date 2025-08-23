"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProfileForm from "@/components/ProfileForm"
import TicketsList from "@/components/TicketsList"
import AccountSettings from "@/components/AccountSettings"

export default function ProfileTabs() {
  return (
    <Tabs defaultValue="profile" className="space-y-6">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="tickets">My Tickets</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <ProfileForm />
      </TabsContent>

      <TabsContent value="tickets">
        <TicketsList />
      </TabsContent>

      <TabsContent value="settings">
        <AccountSettings />
      </TabsContent>
    </Tabs>
  )
}
