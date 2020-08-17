import Link from 'next/link';

function Menu(){
  return (
    <div>
        <link rel="stylesheet" href="/css/navbar.css" />
        <input type="checkbox" id="menuShowHide" />
        <label for="menuShowHide"></label>
        <ul id="mainMenu">
            <li><Link href="/"><a>HOME</a></Link></li>
            <li><Link href="/seni"><a>SENI</a></Link></li>
            <li><Link href="/wisata"><a>WISATA</a></Link></li>
            <li><Link href="/berita"><a>BERITA</a></Link></li>

        </ul> 
        </div> 
  );
}

export default Menu;