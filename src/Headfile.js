import React from "react";
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShopping} from 'react-icons/ai';
import { FaWhatsapp} from 'react-icons/fa';
import { FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Headfile extends React.Component{
    render(){
        return(
            <div>
                <div class="conatiner-fluid">
                <nav>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home"><img src="https://d2s7hpbx4rtiif.cloudfront.net/logo/stores/1/logo_new.png" alt="logo"></img></Navbar.Brand>
                        <Navbar.Toggle  />
                        <Navbar.Collapse >
                            <Nav className="mr-auto">
                            <NavDropdown title="Categories" id="nav1" expand="lg">
                                  <p className="catdrop">
                                <Form >
                                    <span class="cate">Shop By Categories</span>
                                
                                 <FormControl type="text" placeholder="Search Categories. . . " className="mr-sm-2" id="srch2" />    
                                 </Form>
                                <NavDropdown.Divider/>
                                <div className="sec1" >
                                <NavDropdown.Item href="https://www.funcorp.in/action-figures" className="ctaele">Action Figures</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/art-craft-kits" className="ctaele">Art &Craft Kits</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/baby-toddler-toys" className="ctaele">Baby & Toodler Toys</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/bath-toys" className="ctaele">Bath Toys</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/big-indian-toy-sale" className="ctaele">Big Indian Toy Sale</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/board-games" className="ctaele">Board Games</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/bobbleheads" className="ctaele">Bobbleheads</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/books" className="ctaele">Books</NavDropdown.Item><br/>
                                </div>
                                <div className="sec2">
                                <NavDropdown.Item href="https://www.funcorp.in/building-construction" className="ctaele">Building & Construction</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/card-games" className="ctaele">Card Games</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/cars-vehicle-playsets" className="ctaele">Cars & Vechicle Playsets</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/collectibles" className="ctaele">Collectibles</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/costumes-masks-dress-up" className="ctaele">Costumes & Masks</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/doll-houses" className="ctaele">Doll Houses</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/dolls-accessories" className="ctaele">Dolls & Accessories</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/dough" className="ctaele">Dough</NavDropdown.Item><br/> 
                                </div>
                                <div className="sec3">
                                <NavDropdown.Item href="https://www.funcorp.in/holi-gifts" className="ctaele">Holi Gifts</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/interactive-toys" className="ctaele">Interactive Toys</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/learning-educational-toys" className="ctaele">Learing and Educational</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/musical-toys" className="ctaele">Musical Toys & Speakers</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/outdoor-sports" className="ctaele">Outdoor & Sports</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/playsets" className="ctaele">Playsets</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/pull-along-toys" className="ctaele">Pull-Along Toys</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/puzzles" className="ctaele">Puzzles</NavDropdown.Item><br/> 
                                </div>
                                <div className="sec4">
                                <NavDropdown.Item href="https://www.funcorp.in/remote-controlled-rc-cars-vehicles" className="ctaele">Remote Controlled Cars</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/ride-on-toys" className="ctaele">Ride-On Toys</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/slime" className="ctaele">Slime</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/soft-toys-stuffed-animals" className="ctaele">Soft Toys</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/spinning-tops" className="ctaele">Spinning Tops</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/stationery-supplies" className="ctaele">Stationary & Supplies</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/guns-bullets" className="ctaele">Toys Guns & Bullets</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/trains-railway-sets" className="ctaele">Trains & Railways Sets</NavDropdown.Item><br/> 
                                </div>
                                </p> 
                            </NavDropdown>




                            <NavDropdown title="Brand" id="nav1" expand="lg">
                                  <p className="catdrop">
                                <Form >
                                    <span class="cate">Shop By Brand</span>
                                
                                 <FormControl type="text" placeholder="Search Brand. . . " className="mr-sm-2" id="srch2" />    
                                 </Form>
                                <NavDropdown.Divider/>
                                <div className="sec1" >
                                <NavDropdown.Item href="https://www.funcorp.in/brands/4m" className="ctaele">4M</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/asmodee" className="ctaele">Asmodee</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/baby-alive" className="ctaele">Baby ALive</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/baby-alive" className="ctaele">Barbie</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/beados" className="ctaele">Beados</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/big" className="ctaele">Big</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/bubble-magic" className="ctaele">Bubble Magic</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/chu-chu-tv" className="ctaele">Chu Chu TV</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/cool-maker" className="ctaele">CoolMaker</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/cra-z-art" className="ctaele">Cra-Z-Art</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/cra-z-art" className="ctaele">Craft in Books</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/cupcake-surprise" className="ctaele">CupCake Suprise</NavDropdown.Item><br/>
                                </div>
                                <div className="sec22">
                                <NavDropdown.Item href="https://www.funcorp.in/brands/dr-mady" className="ctaele">Dr.Mady</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/ecoiffier" className="ctaele">Ecoiffier</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/fisher-price" className="ctaele">Fisher Price</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/fortnite" className="ctaele">Fortnite</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/frank-puzzles" className="ctaele">Frank</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/funko" className="ctaele">Funko</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/funskool" className="ctaele">Funskool</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/funvention" className="ctaele">Funvention</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/furreal-friends" className="ctaele">FurReal Friends</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/giggles" className="ctaele">Giggles</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/go-glam-nails" className="ctaele">Go Glam Nails</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/goliath-games" className="ctaele">Gollath Games</NavDropdown.Item><br/>
                                </div>
                                <div className="sec23">
                                <NavDropdown.Item href="https://www.funcorp.in/brands/goliath-games" className="ctaele">Hatchimals</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/hot-wheels" className="ctaele">Hot Wheels</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/infinity-nado" className="ctaele">Infinity Nado</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/jada" className="ctaele">Jada</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/kindi-kids" className="ctaele">Kindi Kids</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/kinetic-sand" className="ctaele">Kinetic Sand</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/leapfrog" className="ctaele">LeapFrog</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/lego" className="ctaele">Lego</NavDropdown.Item><br/> 
                                <NavDropdown.Item href="https://www.funcorp.in/brands/little-live-pets" className="ctaele">Little Live Pets</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/little-tikes" className="ctaele">Little Tikes</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/majorette" className="ctaele">Majorette</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/marvel" className="ctaele">Marvel</NavDropdown.Item><br/>
                                </div>
                                <div className="sec24">
                                <NavDropdown.Item href="https://www.funcorp.in/brands/mattel" className="ctaele">Mattel</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/mcfarlane" className="ctaele">McFarlane</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/mega-bloks" className="ctaele">Mega Bloks</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/miko" className="ctaele">Miko</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/monopoly" className="ctaele">Monopoly</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/monster-jam" className="ctaele">Monster Jam</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/moonlite" className="ctaele">Moonlite</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/my-1st-jcb" className="ctaele">My 1st JCB</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/my-little-pony" className="ctaele">My Little Pony</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/brands/national-geographic" className="ctaele">National Geographic</NavDropdown.Item><br/> 
                                <NavDropdown.Item href="https://www.funcorp.in/brands/national-geographic" className="ctaele">Nerf</NavDropdown.Item><br/>
                                </div>
                                </p>
                            </NavDropdown>
                        
                            
                            
                            
                            
                            
                            

                            <NavDropdown title="Character" id="nav1" expand="lg">
                                  <p className="catdrop">
                                <Form >
                                    <span class="cate">Shop By Character</span>
                                
                                 <FormControl type="text" placeholder="Search Character. . . " className="mr-sm-2" id="srch2" />    
                                 </Form>
                                <NavDropdown.Divider/>
                                <div className="sec1" >
                                <NavDropdown.Item href="https://www.funcorp.in/characters/athletes" className="ctaele">Athletes</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/avengers" className="ctaele">Avengers</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/batman" className="ctaele">Batman</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/beyblades" className="ctaele">Beyblades</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/big-bang-theory" className="ctaele">Big Bang Theory</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/black-panther" className="ctaele">Black Panther</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/black-widow" className="ctaele">Black Widow</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/captain-america" className="ctaele">Captain America</NavDropdown.Item><br/>
                                </div>
                                <div className="sec2">
                                <NavDropdown.Item href="https://www.funcorp.in/characters/captain-marvel" className="ctaele">Captain America</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/cars" className="ctaele">Cars</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/deadpool" className="ctaele">Deadpool</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/disney-frozen" className="ctaele">Disney Frozen</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/disney-princess" className="ctaele">Disney Princess</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/doctor-strange" className="ctaele">Doctor Strange</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/dragon-ball-z" className="ctaele">Dragon Ball Z </NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/friends" className="ctaele">Friends</NavDropdown.Item><br/> 
                                </div>
                                <div className="sec3">
                                <NavDropdown.Item href="https://www.funcorp.in/characters/g-i-joe" className="ctaele">G.I Joe</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/game-of-thrones" className="ctaele">Game of Thrones</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/guardians-of-the-galaxy" className="ctaele">Guardians of Galaxy</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/harry-potter" className="ctaele">Harry Potter</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/hulk" className="ctaele">Hulk</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/iron-man" className="ctaele">Iron Man</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/joker" className="ctaele">Joker</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/jurassic-world" className="ctaele">Jurassic World</NavDropdown.Item><br/> 
                                </div>
                                <div className="sec4">
                                <NavDropdown.Item href="https://www.funcorp.in/characters/justice-league" className="ctaele">Justic League</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/minions" className="ctaele">Minoins</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/money-heist" className="ctaele">Money Heist</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/power-rangers" className="ctaele">Power Rangers</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/rick-and-morty" className="ctaele">Rick And Morty</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/shazam" className="ctaele">Shazam</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/spiderman" className="ctaele">Spider Man</NavDropdown.Item><br/>
                                <NavDropdown.Item href="https://www.funcorp.in/characters/spiderman" className="ctaele">Star Wars</NavDropdown.Item><br/> 
                                </div>
                                </p>
                            </NavDropdown>
                        









                            <Nav.Link href="https://www.funcorp.in/gift-registry" id="nav1">Gift Registry</Nav.Link>
                            <Nav.Link href="https://www.funcorp.in/funlab/" id="nav1">FunLab</Nav.Link>
                            <Nav.Link href="https://www.funcorp.in/gift-finder" id="nav1">Gift Finder</Nav.Link>
                            <Nav.Link href="https://www.funcorp.in/contact/" id="nav1">Contact Us</Nav.Link>
                            </Nav>
                            <Form inline >
                            <span class="icon"><AiOutlineSearch size="25px"/></span>
                            <FormControl type="text" placeholder="Search here . . . " className="mr-sm-2" id="srch" />
                            </Form>
                            <a href="https://api.whatsapp.com/send?phone=+916291236626&text=Hi" style={{color:"black"}}><span class="icon"><FaWhatsapp size="30px"/></span> </a>
                            <a href="https://www.funcorp.in/customer/account/login/referer/aHR0cHM6Ly93d3cuZnVuY29ycC5pbi8%2C/" style={{color:"black"}}><span class="icon"><AiOutlineUser size="30px"/></span></a>
                            <a href="/" style={{color:"black"}}> <span class="icon"><AiOutlineShopping size="30px"/></span></a>
                        </Navbar.Collapse>
                        </Navbar>
                    </nav>
                </div>
            </div>
)
    }
}
export default Headfile;