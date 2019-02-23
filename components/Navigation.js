import Link from 'next/link';
import Nav from './styles/Nav';

const Navigation = () => (
  <Nav>
    <Link href="/">Home</Link>
    <Link href="https://fionoble.com/blog">Blog</Link>
    <Link href="/about">About</Link>
    <Link href="https://fionoble.shop">Shop</Link>
  </Nav>
);
 export default Navigation;
