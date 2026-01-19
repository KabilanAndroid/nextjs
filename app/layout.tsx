import ReduxProvider from "@/src/component/layout/store/Provider"
import ClientLayout from "./clientlayout"
import 'bootstrap/dist/css/bootstrap.min.css'


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
