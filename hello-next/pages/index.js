import Link from "next/link";

const index = () => ( //button써도 되고 a써도 된다 Onclick가능한 모든 태그가능
    <Link href="/about">
        <button>Go to About Page</button>
    </Link>

    
  )
  

export default index;