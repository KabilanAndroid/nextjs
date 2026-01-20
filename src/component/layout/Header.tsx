import Link from "next/link"

export default function Header() {
  return (
    <div style={{
      backgroundColor: "black",
      height: "60px",
      display: "flex",
      alignItems: "center",
      padding: "0 20px"
    }}>
      <Link href="/mainhome" style={{ color: "white", marginRight: "20px" }}>
        Home
      </Link>

      <Link href="/about" style={{ color: "white", marginRight: "20px" }}>
        About
      </Link>
      {/* <Link href="/contact" style={{ color: "white" }}>
        main
      </Link> */}
     
    </div>
  )
}
