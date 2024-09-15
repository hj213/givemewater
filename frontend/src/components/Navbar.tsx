import Link from "next/link";

export default function Navbar(){
    return(
        <div>
            <Link href="/">Home</Link>
            <Link href="/myPage">My page</Link>
            <Link href="/myPlants">Plants</Link>
        </div>
    )
}