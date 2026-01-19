import ReduxProvider from "@/src/component/layout/store/Provider"
import ClientLayout from "./clientlayout"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ReduxProvider>
      </body>
    </html>
  )
}
