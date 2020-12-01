import Link from 'next/link'

export default () => (
    <nav>
        <ul>
            <Link href="/">
                <li>Home</li>
            </Link>
            <Link href="/about">
                <li>About</li>
            </Link>
        </ul>
    </nav>
)