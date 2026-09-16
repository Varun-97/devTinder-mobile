import { create } from "zustand"
import { UserProfile } from "../types/userType"

interface ProfileState {
    profile: UserProfile | null
    setProfile: (profile: UserProfile) => void
    clearProfile: () => void
}

export const useProfileStore = create<ProfileState>((set) => ({
    profile: null,
    setProfile: (profile) => set({ profile }),
    clearProfile: () => set({ profile: null }),
}))
