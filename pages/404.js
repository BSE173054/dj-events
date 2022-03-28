import Layout from "@/components/Layout"
import styles from '@/styles/404.module.css'
import Link from "next/link"
import { FaExclamationTriangle } from 'react-icons/fa'

export default function NotFoundPage() {
    return (
        <Layout title='Page not Found'>
            <div className={styles.error}>
                <h1> <FaExclamationTriangle />  404 Not Found</h1>
                <h4>Sorry, this page doesnt exist</h4>
                <Link href='/'>Go back to Home</Link>
            </div>

        </Layout>
    )
}
