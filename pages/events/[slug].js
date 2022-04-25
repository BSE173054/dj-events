import Layout from '@/components/Layout'
import styles from '@/styles/Events.module.css'
import { API_URL } from '@/config/index'
import Link from 'next/link'
import Image from 'next/image'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
export default function EventPage({ evt }) {
    const deleteEvent = () => {
        console.log('Hello World')
    }
    return (
        <Layout>
            <div className={styles.event}>
                <div className={styles.controls}>
                    <Link href={`/events/edit/${evt.id}`}>
                        <a><FaPencilAlt />Edit Event</a>
                    </Link>
                    <a href='#' className={styles.delete} onClick={deleteEvent}><FaTimes />Delete Event</a>

                </div>

                <span>
                    {evt.date} at {evt.time}
                </span>

                <h1>{evt.name}</h1>
                {evt.image &&
                    (<div>
                        <Image src={evt.image} height={600} width={960} />
                    </div>
                    )}

                <h3>Performers:</h3>
                <p>{evt.performers}</p>

                <h3>Description:</h3>
                <p>{evt.description}</p>

                <h3>Venue: {evt.venue}</h3>
                <p>{evt.address}</p>

                <Link href='/events'>
                    <a className={styles.back}>{'<'} Go Back</a>
                </Link>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query: { slug } }) {

    const res = await fetch(`${API_URL}/api/events/${slug}`);
    const event = await res.json();

    return {
        props: { evt: event[0] }
    }
}
