import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import UserList from "./Components/UserList"
const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h2>Fetch User</h2>
      <UserList />
    </QueryClientProvider>
  )
}

export default App