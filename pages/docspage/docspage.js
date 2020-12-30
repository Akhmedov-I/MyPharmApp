import Link from 'next/link';
import MainLayout from '../../components/mainLayout';

export default function Docspage(){
    return (
        <MainLayout title='DOC PHARM'>
            <Link href='/'>
                <h1>Hello people</h1>
            </Link>
        </MainLayout>
    )
}