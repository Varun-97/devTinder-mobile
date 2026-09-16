import React from 'react'
import AppProviders from './src/provider'
import AppNavigation from './src/navigation'
import { queryClient } from './src/config/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProviders>
        <AppNavigation />
      </AppProviders>
    </QueryClientProvider>
  )
}

export default App