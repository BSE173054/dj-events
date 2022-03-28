import Link from 'next/link'
import Layout from './components/Layout'

export default function AboutPages() {
    return (
        <Layout title='About DJ Events'>
            <h1>About</h1>
            <p>This is app to find the latest DJ and the  events</p>
            <p>Version 1.0.0</p>
            <Link href='/'>Home</Link>
        </Layout>
    )
}
