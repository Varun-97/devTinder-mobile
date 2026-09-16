import { create } from "zustand";
import { Feed } from "../types/feedType";

interface FeedState {
    feed: Feed[]
    setFeed: (feed: Feed[]) => void
    clearFeed: () => void
}

const useFeedStore = create<FeedState>((set) => {
    return {
        feed: [],
        setFeed: (feed: Feed[]) => set({ feed }),
        clearFeed: () => set({ feed: [] })
    }
})

export default useFeedStore